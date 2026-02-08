import { chromium } from 'playwright';

async function debug() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('http://localhost:3002/gbp/business.google.com/us/business-profile/index.html', { waitUntil: 'networkidle' });

  const atl = await page.$('section.ion-animated-text-list--fill-light');
  if (!atl) {
    console.log('ATL Light not found');
    await browser.close();
    return;
  }

  // Get the glue-grid
  const grid = await atl.$('.glue-grid');
  if (grid) {
    const gridBox = await grid.boundingBox();
    console.log('glue-grid:', gridBox?.width, 'x', gridBox?.height, 'px');

    const children = await grid.$$(':scope > *');
    console.log('Grid children count:', children.length);

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const box = await child.boundingBox();
      const cls = await child.getAttribute('class');
      console.log(`  [${i}] ${cls?.split(' ').slice(0, 3).join(' ')} - ${box?.width}x${box?.height}px`);

      // Check if this contains media
      const media = await child.$('img, video, [class*="media"], [class*="image"]');
      if (media) {
        const mediaBox = await media.boundingBox();
        console.log(`      Media: ${mediaBox?.width}x${mediaBox?.height}px`);
      }
    }
  }

  await browser.close();
}

debug().catch(console.error);
