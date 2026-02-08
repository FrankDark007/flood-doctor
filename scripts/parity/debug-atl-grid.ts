import { chromium } from 'playwright';

async function debug() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('http://localhost:3002/dev/fd-home-v3?__content=ref&__freeze=1', { waitUntil: 'networkidle' });

  const results = await page.locator('.fd-gbp-body-v3__atl').evaluateAll(atls => {
    return atls.map((atl, idx) => {
      const grid = atl.querySelector('.fd-gbp-body-v3__atl-grid') as HTMLElement;
      if (!grid) return { idx, error: 'no grid' };

      const cs = window.getComputedStyle(grid);
      const gridBox = grid.getBoundingClientRect();

      const children = Array.from(grid.children).map(child => {
        const el = child as HTMLElement;
        const box = el.getBoundingClientRect();
        return {
          class: el.className.split(' ')[0],
          width: Math.round(box.width),
          height: Math.round(box.height),
        };
      });

      return {
        idx,
        gridHeight: Math.round(gridBox.height),
        gridTemplateColumns: cs.gridTemplateColumns,
        gap: cs.gap,
        childrenCount: children.length,
        children,
      };
    });
  });

  console.log('ATL Grid Analysis:');
  console.log(JSON.stringify(results, null, 2));

  // Check media panels
  const mediaResults = await page.locator('.fd-gbp-body-v3__atl-media').evaluateAll(panels => {
    return panels.map((panel, idx) => {
      const el = panel as HTMLElement;
      const box = el.getBoundingClientRect();
      return {
        idx,
        width: Math.round(box.width),
        height: Math.round(box.height),
        style: el.getAttribute('style'),
        hasImage: !!el.querySelector('img'),
        hasPlaceholder: !!el.querySelector('.fd-gbp-body-v3__atl-media-placeholder'),
      };
    });
  });

  console.log('\nMedia Panels:');
  console.log(JSON.stringify(mediaResults, null, 2));

  await browser.close();
}

debug().catch(console.error);
