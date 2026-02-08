import { chromium } from 'playwright';

async function debug() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('http://localhost:3002/dev/fd-home-v3?__content=ref&__freeze=1', { waitUntil: 'networkidle' });

  // Check ATL sections
  const results = await page.locator('.fd-gbp-body-v3__atl').evaluateAll(atls => {
    return atls.map((atl, idx) => {
      const el = atl as HTMLElement;
      const box = el.getBoundingClientRect();
      const cs = window.getComputedStyle(el);

      const container = el.querySelector('.fd-gbp-body-v3__atl-container') as HTMLElement;
      const containerBox = container?.getBoundingClientRect();

      const title = el.querySelector('.fd-gbp-body-v3__atl-title') as HTMLElement;
      const titleBox = title?.getBoundingClientRect();

      const grid = el.querySelector('.fd-gbp-body-v3__atl-grid') as HTMLElement;
      const gridBox = grid?.getBoundingClientRect();

      return {
        idx,
        sectionHeight: Math.round(box.height),
        padding: cs.padding,
        paddingTop: cs.paddingTop,
        paddingBottom: cs.paddingBottom,
        containerHeight: containerBox ? Math.round(containerBox.height) : 0,
        titleHeight: titleBox ? Math.round(titleBox.height) : 0,
        gridHeight: gridBox ? Math.round(gridBox.height) : 0,
      };
    });
  });

  console.log('Rebuild ATL Sections:');
  console.log(JSON.stringify(results, null, 2));

  await browser.close();
}

debug().catch(console.error);
