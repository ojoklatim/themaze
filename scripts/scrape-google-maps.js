const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');

const MAPS_URL = 'https://www.google.com/maps/contrib/109443918662074271030/photos/';
const OUTPUT_DIR = path.join(__dirname, '../public/images/google-maps');
const MANIFEST_PATH = path.join(OUTPUT_DIR, 'manifest.json');

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .on('finish', resolve);
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    });
  });
}

async function scrape() {
  console.log('🚀 Starting Google Maps scraper (Deep Scan)...');
  
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    locale: 'en-US'
  });
  const page = await context.newPage();

  try {
    console.log(`📡 Navigating to ${MAPS_URL}...`);
    await page.goto(MAPS_URL, { waitUntil: 'networkidle' });

    // Handle consent wall
    try {
      const acceptButton = page.locator('button:has-text("Accept all"), button:has-text("Alle accepteren"), button:has-text("I agree")');
      if (await acceptButton.count() > 0) {
        await acceptButton.first().click();
        await page.waitForNavigation({ waitUntil: 'networkidle' });
      }
    } catch (e) {}

    await page.waitForTimeout(5000);

    // Deep scan for URLs
    console.log('🔍 Deep scanning page source for images...');
    const pageSource = await page.content();
    const regex = /https:\/\/lh3\.googleusercontent\.com\/p\/[a-zA-Z0-9_-]+/g;
    const matches = pageSource.match(regex) || [];
    
    // Add user provided URLs
    const userUrls = [
      'https://lh3.googleusercontent.com/p/AF1QipNgjoalfVBcfH2ZQU_-ZibSHYdV3hUJNwltwmJK',
      'https://lh3.googleusercontent.com/p/AF1QipP4ROqgqB6AWzGdxEzKgrOOANiSTZpeC-WbHj7b'
    ];

    const allUrls = [...new Set([...matches, ...userUrls])].map(url => url + '=s1200');
    console.log(`✅ Found ${allUrls.length} unique image patterns.`);

    const manifest = [];
    for (let i = 0; i < allUrls.length; i++) {
      const filename = `maze-maps-${String(i + 1).padStart(3, '0')}.jpg`;
      const filepath = path.join(OUTPUT_DIR, filename);
      
      console.log(`📥 Downloading ${filename}...`);
      try {
        await downloadImage(allUrls[i], filepath);
        
        manifest.push({
          filename: `/images/google-maps/${filename}`,
          src: allUrls[i],
          index: i,
          category: i % 2 === 0 ? 'food' : 'ambiance'
        });
      } catch (err) {
        console.error(`❌ Failed to download ${filename}:`, err.message);
      }
    }

    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
    console.log(`🎉 Scrape complete! Manifest saved to ${MANIFEST_PATH}`);

  } catch (error) {
    console.error('❌ Error during scraping:', error);
  } finally {
    await browser.close();
  }
}

scrape();
