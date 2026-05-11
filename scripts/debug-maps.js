const { chromium } = require('playwright');

async function debug() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.google.com/maps/contrib/109443918662074271030/photos/');
  await page.waitForTimeout(5000);
  
  const content = await page.evaluate(() => {
    const photos = Array.from(document.querySelectorAll('img')).map(img => img.src).filter(src => src.includes('googleusercontent.com'));
    return {
      count: photos.length,
      samples: photos.slice(0, 5),
      html: document.body.innerHTML.substring(0, 1000)
    };
  });
  
  console.log(JSON.stringify(content, null, 2));
  await browser.close();
}

debug();
