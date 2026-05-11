const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');

const SEARCH_URL = 'https://www.google.com/maps/search/The+Maze+Bistro+Mbuya/';
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
  console.log('🚀 Starting Google Maps Search scraper...');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    locale: 'en-US'
  });
  const page = await context.newPage();

  try {
    console.log(`📡 Navigating to ${SEARCH_URL}...`);
    await page.goto(SEARCH_URL, { waitUntil: 'networkidle' });

    // Handle consent wall
    try {
      const acceptButton = page.locator('button:has-text("Accept all"), button:has-text("Alle accepteren"), button:has-text("I agree")');
      if (await acceptButton.count() > 0) {
        await acceptButton.first().click();
        await page.waitForNavigation({ waitUntil: 'networkidle' });
      }
    } catch (e) {}

    await page.waitForTimeout(5000);

    // Click on the first result if needed, or find photos button
    const photosButton = page.locator('button[aria-label^="Photos"]');
    if (await photosButton.count() > 0) {
      console.log('📸 Clicking Photos button...');
      await photosButton.first().click();
      await page.waitForTimeout(5000);
    }

    // Scroll photos
    console.log('📜 Scrolling photos...');
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('End');
      await page.waitForTimeout(2000);
    }

    const pageSource = await page.content();
    const regex = /https:\/\/lh3\.googleusercontent\.com\/p\/[a-zA-Z0-9_-]+/g;
    const matches = pageSource.match(regex) || [];
    
    const allUrls = [...new Set(matches)].map(url => url + '=s1200');
    console.log(`✅ Found ${allUrls.length} unique images.`);

    const manifest = [];
    if (fs.existsSync(MANIFEST_PATH)) {
      manifest.push(...JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8')));
    }

    for (let i = 0; i < allUrls.length; i++) {
      const filename = `maze-maps-extra-${String(i + 1).padStart(3, '0')}.jpg`;
      const filepath = path.join(OUTPUT_DIR, filename);
      
      console.log(`📥 Downloading ${filename}...`);
      try {
        await downloadImage(allUrls[i], filepath);
        manifest.push({
          filename: `/images/google-maps/${filename}`,
          src: allUrls[i],
          index: i + 100,
          category: i % 3 === 0 ? 'food' : 'ambiance'
        });
      } catch (err) {
        console.error(`❌ Failed to download ${filename}:`, err.message);
      }
    }

    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
    console.log(`🎉 Scrape complete! Total manifest size: ${manifest.length}`);

  } catch (error) {
    console.error('❌ Error during scraping:', error);
  } finally {
    await browser.close();
  }
}

scrape();
