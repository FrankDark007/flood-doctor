import { chromium } from 'playwright';

async function debug() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('http://localhost:3002/gbp/business.google.com/us/business-profile/index.html', { waitUntil: 'networkidle' });

  const result = await page.locator('section.ion-animated-text-list--fill-light').evaluateAll(atls => {
    if (atls.length === 0) return { error: 'not found' };
    const atl = atls[0] as HTMLElement;
    const box = atl.getBoundingClientRect();

    // Get children recursively (inlined)
    const getChildren = (el: HTMLElement, maxDepth: number) => {
      const items: Array<{ depth: number; tag: string; cls: string; height: number; width: number }> = [];
      const queue: Array<{ el: HTMLElement; depth: number }> = [{ el, depth: 0 }];

      while (queue.length > 0) {
        const item = queue.shift()!;
        if (item.depth > maxDepth) continue;

        const b = item.el.getBoundingClientRect();
        items.push({
          depth: item.depth,
          tag: item.el.tagName.toLowerCase(),
          cls: item.el.className?.split(' ').slice(0, 2).join(' ') || '',
          height: Math.round(b.height),
          width: Math.round(b.width),
        });

        const children = Array.from(item.el.children) as HTMLElement[];
        for (const child of children) {
          queue.push({ el: child, depth: item.depth + 1 });
        }
      }

      return items;
    };

    return {
      sectionHeight: Math.round(box.height),
      structure: getChildren(atl, 3),
    };
  });

  console.log('Snapshot ATL Light Structure:');
  console.log('Section height:', (result as any).sectionHeight, 'px');
  console.log('\nDOM Structure:');
  (result as any).structure?.forEach((item: any) => {
    const indent = '  '.repeat(item.depth);
    console.log(`${indent}<${item.tag} class="${item.cls}"> ${item.width}x${item.height}px`);
  });

  await browser.close();
}

debug().catch(console.error);
