import { chromium } from 'playwright';

async function debug() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('http://localhost:3002/gbp/business.google.com/us/business-profile/index.html', { waitUntil: 'networkidle' });

  // Just get the key elements
  const atl = await page.$('section.ion-animated-text-list--fill-light');
  if (!atl) {
    console.log('ATL Light not found');
    await browser.close();
    return;
  }

  const sectionBox = await atl.boundingBox();
  console.log('ATL Light Section:', sectionBox?.height, 'px');

  // Get first level children
  const children = await atl.$$(':scope > *');
  for (const child of children) {
    const box = await child.boundingBox();
    const cls = await child.getAttribute('class');
    console.log('  Child:', cls?.split(' ').slice(0, 2).join(' '), '-', box?.height, 'px');

    // Get second level children
    const grandchildren = await child.$$(':scope > *');
    for (const gc of grandchildren) {
      const gcBox = await gc.boundingBox();
      const gcCls = await gc.getAttribute('class');
      console.log('    ', gcCls?.split(' ').slice(0, 2).join(' '), '-', gcBox?.width, 'x', gcBox?.height, 'px');
    }
  }

  await browser.close();
}

debug().catch(console.error);
