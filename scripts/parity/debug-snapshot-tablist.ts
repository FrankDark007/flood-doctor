import { chromium } from 'playwright';

async function debug() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('http://localhost:3002/gbp/business.google.com/us/business-profile/index.html', { waitUntil: 'networkidle' });

  // Find the tab list column (col 3 with 525px height)
  const atl = await page.$('section.ion-animated-text-list--fill-light');
  if (!atl) {
    console.log('ATL Light not found');
    await browser.close();
    return;
  }

  // Get all grid columns
  const cols = await atl.$$('.glue-grid__col');
  console.log('Total columns:', cols.length);

  for (let i = 0; i < cols.length; i++) {
    const col = cols[i];
    const box = await col.boundingBox();
    console.log(`\nColumn ${i}: ${box?.width}x${box?.height}px`);

    // Get children
    const children = await col.$$(':scope > *');
    for (const child of children) {
      const childBox = await child.boundingBox();
      const tag = await child.evaluate(el => el.tagName.toLowerCase());
      const cls = await child.getAttribute('class');
      console.log(`  <${tag}> ${cls?.split(' ').slice(0, 2).join(' ')} - ${childBox?.width}x${childBox?.height}px`);

      // If this is a list, show items
      const items = await child.$$('[role="tab"], [class*="item"], li, button');
      if (items.length > 0) {
        console.log(`    Items: ${items.length}`);
        for (let j = 0; j < Math.min(items.length, 3); j++) {
          const item = items[j];
          const itemBox = await item.boundingBox();
          const itemText = await item.textContent();
          console.log(`      [${j}] ${itemText?.trim().slice(0, 30)} - ${itemBox?.height}px`);
        }
      }
    }
  }

  await browser.close();
}

debug().catch(console.error);
