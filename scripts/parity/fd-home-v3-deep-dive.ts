/**
 * fd-home-v3-deep-dive.ts
 * Deep structural analysis of snapshot vs rebuild
 */

import { chromium } from 'playwright';

async function deepDive() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:3002/gbp/business.google.com/us/business-profile/index.html', { waitUntil: 'networkidle' });

  console.log('╔═══════════════════════════════════════════════════════════════════════════════════════╗');
  console.log('║  SNAPSHOT TILES SECTION CHECK                                                         ║');
  console.log('╚═══════════════════════════════════════════════════════════════════════════════════════╝\n');

  // Check all ion-standard-3up-stacked-list sections
  const tilesInfo = await page.evaluate(() => {
    const sections = document.querySelectorAll('section.ion-standard-3up-stacked-list');
    return Array.from(sections).map((s, idx) => {
      const box = s.getBoundingClientRect();
      const h = s.querySelector('h2, h3');
      const tiles = s.querySelectorAll('.glue-card, .ion-tile, [class*=tile]');
      return {
        index: idx,
        height: Math.round(box.height),
        heading: h?.textContent?.trim().slice(0, 30) || 'no heading',
        tileCount: tiles.length,
        className: s.className.split(' ').slice(0, 3).join(' '),
      };
    });
  });

  console.log('Found ion-standard-3up-stacked-list sections:');
  for (const t of tilesInfo) {
    console.log(`  [${t.index}] h=${t.height}px tiles=${t.tileCount} "${t.heading}" class="${t.className}"`);
  }

  console.log('\n╔═══════════════════════════════════════════════════════════════════════════════════════╗');
  console.log('║  SNAPSHOT SCROLLING-CARDS STRUCTURE                                                   ║');
  console.log('╚═══════════════════════════════════════════════════════════════════════════════════════╝\n');

  const cardsStructure = await page.evaluate(() => {
    const section = document.querySelector('section.ion-scrolling-3up-cards-list');
    if (!section) return 'NOT FOUND';

    const result: string[] = [];

    // Get section box
    const sectionBox = section.getBoundingClientRect();
    result.push(`Section height: ${Math.round(sectionBox.height)}px`);

    // Find scrolling container - look for various patterns
    const scrollContainer = section.querySelector('[class*="cards__list"], [class*="cards-list"], [class*="scroll"]');
    if (scrollContainer) {
      const scrollBox = scrollContainer.getBoundingClientRect();
      const cs = window.getComputedStyle(scrollContainer);
      result.push(`\nScroll container: .${scrollContainer.className.split(' ')[0]}`);
      result.push(`  height: ${Math.round(scrollBox.height)}px`);
      result.push(`  display: ${cs.display}`);
      result.push(`  overflow-x: ${cs.overflowX}`);
      result.push(`  flex-direction: ${cs.flexDirection}`);
      result.push(`  gap: ${cs.gap}`);
    } else {
      result.push('\nScroll container: NOT FOUND with standard selectors');
      // List all direct children
      result.push('Direct children of section:');
      Array.from(section.children).forEach((child, i) => {
        const el = child as HTMLElement;
        result.push(`  [${i}] <${el.tagName.toLowerCase()} class="${el.className.split(' ').slice(0, 2).join(' ')}">`);
      });
    }

    // Find actual cards with various selectors
    const cardSelectors = [
      '.ion-scrolling-3up-cards-list__card',
      '.glue-card',
      '[class*="card"]:not([class*="cards"])',
    ];

    for (const sel of cardSelectors) {
      const cards = section.querySelectorAll(sel);
      result.push(`Cards matching "${sel}": ${cards.length}`);
    }

    return result.join('\n');
  });

  console.log(cardsStructure);

  console.log('\n╔═══════════════════════════════════════════════════════════════════════════════════════╗');
  console.log('║  SNAPSHOT ATL SECTION STRUCTURE                                                       ║');
  console.log('╚═══════════════════════════════════════════════════════════════════════════════════════╝\n');

  const atlStructure = await page.evaluate(() => {
    const results: string[] = [];

    const atl1 = document.querySelector('section.ion-animated-text-list--fill-light');
    const atl2 = document.querySelector('section.ion-animated-text-list--fill-dark');

    // ATL1
    if (atl1) {
      const box1 = atl1.getBoundingClientRect();
      const items1 = atl1.querySelectorAll('.ion-animated-text-list__item, [class*=item]');
      const media1 = atl1.querySelector('[class*=media], [class*=image], img, video');
      const mediaBox1 = media1?.getBoundingClientRect();
      results.push(`ATL1 (light): height=${Math.round(box1.height)}px`);
      results.push(`  Items: ${items1.length}`);
      results.push(`  Media: ${media1 ? `${Math.round(mediaBox1?.width || 0)}x${Math.round(mediaBox1?.height || 0)}px` : 'NOT FOUND'}`);
    } else {
      results.push('ATL1 (light): NOT FOUND');
    }

    results.push('');

    // ATL2
    if (atl2) {
      const box2 = atl2.getBoundingClientRect();
      const items2 = atl2.querySelectorAll('.ion-animated-text-list__item, [class*=item]');
      const media2 = atl2.querySelector('[class*=media], [class*=image], img, video');
      const mediaBox2 = media2?.getBoundingClientRect();
      results.push(`ATL2 (dark): height=${Math.round(box2.height)}px`);
      results.push(`  Items: ${items2.length}`);
      results.push(`  Media: ${media2 ? `${Math.round(mediaBox2?.width || 0)}x${Math.round(mediaBox2?.height || 0)}px` : 'NOT FOUND'}`);
    } else {
      results.push('ATL2 (dark): NOT FOUND');
    }

    return results.join('\n');
  });

  console.log(atlStructure);

  // Now check rebuild ATL
  console.log('\n╔═══════════════════════════════════════════════════════════════════════════════════════╗');
  console.log('║  REBUILD ATL SECTION STRUCTURE                                                        ║');
  console.log('╚═══════════════════════════════════════════════════════════════════════════════════════╝\n');

  const rebuildPage = await browser.newPage();
  await rebuildPage.goto('http://localhost:3002/dev/fd-home-v3?__content=ref&__freeze=1', { waitUntil: 'networkidle' });

  const rebuildATLStructure = await rebuildPage.evaluate(() => {
    const atls = document.querySelectorAll('[data-parity="animated-text-list"]');

    return Array.from(atls).map((section, idx) => {
      const box = section.getBoundingClientRect();
      const items = section.querySelectorAll('[class*=item], [class*=tab]');
      const mediaEl = section.querySelector('[class*=media], [class*=image], [class*=visual], img');
      const mediaBox = mediaEl?.getBoundingClientRect();
      const heading = section.querySelector('h2');

      // Get all direct children
      const children = Array.from(section.children).map(c => {
        const el = c as HTMLElement;
        const elBox = el.getBoundingClientRect();
        return `    <${el.tagName.toLowerCase()} class="${el.className.split(' ').slice(0, 2).join(' ')}"> h=${Math.round(elBox.height)}px`;
      }).join('\n');

      return [
        `ATL${idx + 1}: height=${Math.round(box.height)}px "${heading?.textContent?.trim().slice(0, 30)}"`,
        `  Items: ${items.length}`,
        `  Media element: ${mediaEl ? `${Math.round(mediaBox?.width || 0)}x${Math.round(mediaBox?.height || 0)}px` : 'NOT FOUND'}`,
        `  Children:`,
        children,
      ].join('\n');
    }).join('\n\n');
  });

  console.log(rebuildATLStructure);

  // Check rebuild scrolling-cards structure
  console.log('\n╔═══════════════════════════════════════════════════════════════════════════════════════╗');
  console.log('║  REBUILD SCROLLING-CARDS STRUCTURE                                                    ║');
  console.log('╚═══════════════════════════════════════════════════════════════════════════════════════╝\n');

  const rebuildCardsStructure = await rebuildPage.evaluate(() => {
    const section = document.querySelector('[data-parity="scrolling-cards"]');
    if (!section) return 'NOT FOUND';

    const box = section.getBoundingClientRect();
    const result: string[] = [];
    result.push(`Section height: ${Math.round(box.height)}px`);

    // Direct children
    result.push('\nDirect children:');
    Array.from(section.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const cs = window.getComputedStyle(el);
      const elBox = el.getBoundingClientRect();
      result.push(`  [${i}] <${el.tagName.toLowerCase()} class="${el.className.split(' ').slice(0, 2).join(' ')}"> h=${Math.round(elBox.height)}px display=${cs.display} flex-dir=${cs.flexDirection}`);
    });

    // Find cards
    const cards = section.querySelectorAll('[class*="card"]:not([class*="container"]):not([class*="cards"])');
    result.push(`\nCards found: ${cards.length}`);

    if (cards.length > 0) {
      const firstCard = cards[0] as HTMLElement;
      const cardBox = firstCard.getBoundingClientRect();
      result.push(`First card: ${Math.round(cardBox.width)}x${Math.round(cardBox.height)}px class="${firstCard.className.split(' ').slice(0, 2).join(' ')}"`);
    }

    return result.join('\n');
  });

  console.log(rebuildCardsStructure);

  await browser.close();
}

deepDive();
