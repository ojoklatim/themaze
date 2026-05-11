const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');

const IG_URL = 'https://www.instagram.com/themazebistrombuya/';
const OUTPUT_DIR = path.join(__dirname, '../public/images/instagram');
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
  console.log('🚀 Starting Instagram scraper...');
  
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  try {
    console.log(`📡 Navigating to ${IG_URL}...`);
    await page.goto(IG_URL, { waitUntil: 'networkidle' });

    // Wait for posts to load
    await page.waitForTimeout(3000);

    // Scroll to load more
    console.log('📜 Scrolling to load more posts...');
    for (let i = 0; i < 5; i++) {
      await page.evaluate(() => window.scrollBy(0, window.innerHeight * 2));
      await page.waitForTimeout(1500);
    }

    console.log('📸 Extracting images...');
    const images = await page.evaluate(() => {
      const imgElements = Array.from(document.querySelectorAll('img'));
      return imgElements
        .map(img => img.src)
        .filter(src => src.includes('cdninstagram.com') || src.includes('fbcdn.net'));
    });

    const uniqueImages = [...new Set(images)].slice(0, 40);
    console.log(`✅ Found ${uniqueImages.length} images.`);

    const manifest = [];
    for (let i = 0; i < uniqueImages.length; i++) {
      const filename = `maze-${String(i + 1).padStart(3, '0')}.jpg`;
      const filepath = path.join(OUTPUT_DIR, filename);
      
      console.log(`📥 Downloading ${filename}...`);
      try {
        await downloadImage(uniqueImages[i], filepath);
        
        // Loosely categorize based on index for demo purposes
        let category = 'ambiance';
        if (i % 4 === 0) category = 'food';
        if (i % 4 === 1) category = 'drinks';
        if (i % 4 === 2) category = 'people';

        manifest.push({
          filename: `/images/instagram/${filename}`,
          src: uniqueImages[i],
          index: i,
          category
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
