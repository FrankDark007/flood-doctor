import { chromium } from 'playwright';

async function getStyles(page: any, selector: string, label: string) {
  const el = await page.$(selector);
  if (!el) {
    return { found: false, label };
  }

  const styles = await el.evaluate((e: Element) => {
    const cs = window.getComputedStyle(e);
    const box = e.getBoundingClientRect();
    return {
      height: Math.round(box.height),
      minHeight: cs.minHeight,
      paddingTop: cs.paddingTop,
      paddingBottom: cs.paddingBottom,
      marginTop: cs.marginTop,
      marginBottom: cs.marginBottom,
      rowGap: cs.rowGap,
      gap: cs.gap,
      overflowX: cs.overflowX,
    };
  });

  return { found: true, label, ...styles };
}

async function diagnose() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });

  // Corrected section mappings based on actual DOM inspection
  const sections = [
    {
      name: 'hero',
      snapshot: {
        root: 'section.ion-hero',
        inner: 'section.ion-hero .glue-page',
        grid: 'section.ion-hero .glue-grid',
      },
      rebuild: {
        root: '[data-parity="hero"]',
        inner: '[data-parity="hero"] .fd-gbp-body-v3__hero-container',
        grid: '[data-parity="hero"] .fd-gbp-body-v3__hero-grid',
      },
    },
    {
      name: 'tiles',
      snapshot: {
        root: 'section.ion-standard-3up-stacked-list:first-of-type',
        inner: 'section.ion-standard-3up-stacked-list:first-of-type .glue-page',
        grid: 'section.ion-standard-3up-stacked-list:first-of-type .glue-grid',
      },
      rebuild: {
        root: '[data-parity="tiles"]',
        inner: '[data-parity="tiles"] .fd-gbp-body-v3__tiles-container',
        grid: '[data-parity="tiles"] .fd-gbp-body-v3__tiles-grid',
      },
    },
    {
      name: 'atl-light',
      snapshot: {
        root: 'section.ion-animated-text-list--fill-light',
        inner: 'section.ion-animated-text-list--fill-light .glue-page',
        grid: 'section.ion-animated-text-list--fill-light .glue-grid',
      },
      rebuild: {
        root: '[data-section-id="atl-first-impression"]',
        inner: '[data-section-id="atl-first-impression"] .fd-gbp-body-v3__atl-container',
        grid: '[data-section-id="atl-first-impression"] .fd-gbp-body-v3__atl-grid',
      },
    },
    {
      name: 'atl-dark',
      snapshot: {
        root: 'section.ion-animated-text-list--fill-dark',
        inner: 'section.ion-animated-text-list--fill-dark .glue-page',
        grid: 'section.ion-animated-text-list--fill-dark .glue-grid',
      },
      rebuild: {
        root: '[data-section-id="atl-connect-customers"]',
        inner: '[data-section-id="atl-connect-customers"] .fd-gbp-body-v3__atl-container',
        grid: '[data-section-id="atl-connect-customers"] .fd-gbp-body-v3__atl-grid',
      },
    },
    {
      name: 'scrolling-cards',
      snapshot: {
        root: 'section.ion-scrolling-3up-cards-list',
        inner: 'section.ion-scrolling-3up-cards-list .glue-page',
        grid: 'section.ion-scrolling-3up-cards-list .ion-scrolling-3up-cards-list__container',
      },
      rebuild: {
        root: '[data-parity="scrolling-cards"]',
        inner: '[data-parity="scrolling-cards"] .fd-gbp-body-v3__cards-container',
        grid: '[data-parity="scrolling-cards"] .fd-gbp-body-v3__cards-list',
      },
    },
    {
      name: 'cta-header',
      snapshot: {
        root: 'section.ion-background--fill-white:has(h2)',
        inner: 'section.ion-background--fill-white:has(h2) .glue-page',
        grid: 'section.ion-background--fill-white:has(h2) .glue-grid',
      },
      rebuild: {
        root: '[data-parity="cta-header"]',
        inner: '[data-parity="cta-header"] .fd-gbp-body-v3__cta-container',
        grid: '[data-parity="cta-header"] .fd-gbp-body-v3__cta-content',
      },
    },
    {
      name: 'steps',
      snapshot: {
        root: 'section.ion-standard-3up-stacked-list:not(:first-of-type)',
        inner: 'section.ion-standard-3up-stacked-list:not(:first-of-type) .glue-page',
        grid: 'section.ion-standard-3up-stacked-list:not(:first-of-type) .glue-grid',
      },
      rebuild: {
        root: '[data-parity="steps"]',
        inner: '[data-parity="steps"] .fd-gbp-body-v3__steps-container',
        grid: '[data-parity="steps"] .fd-gbp-body-v3__steps-list',
      },
    },
    {
      name: 'faq',
      snapshot: {
        root: 'section.ion-accordion',
        inner: 'section.ion-accordion .glue-page',
        grid: 'section.ion-accordion .glue-grid',
      },
      rebuild: {
        root: '[data-parity="faq"]',
        inner: '[data-parity="faq"] .fd-gbp-body-v3__faq-container',
        grid: '[data-parity="faq"] .fd-gbp-body-v3__faq-list',
      },
    },
  ];

  const results: any = {};

  // SNAPSHOT
  console.log('=== LOADING SNAPSHOT ===');
  await page.goto('http://localhost:3002/gbp/business.google.com/us/business-profile/index.html', { waitUntil: 'networkidle' });

  for (const s of sections) {
    results[s.name] = {
      snapshot: {
        root: await getStyles(page, s.snapshot.root, 'root'),
        inner: await getStyles(page, s.snapshot.inner, 'inner'),
        grid: await getStyles(page, s.snapshot.grid, 'grid'),
      },
      rebuild: { root: null, inner: null, grid: null },
    };
  }

  // REBUILD
  console.log('=== LOADING REBUILD ===');
  await page.goto('http://localhost:3002/dev/fd-home-v3', { waitUntil: 'networkidle' });

  for (const s of sections) {
    results[s.name].rebuild = {
      root: await getStyles(page, s.rebuild.root, 'root'),
      inner: await getStyles(page, s.rebuild.inner, 'inner'),
      grid: await getStyles(page, s.rebuild.grid, 'grid'),
    };
  }

  // OUTPUT TABLES
  console.log('\n' + '='.repeat(140));
  console.log('PER-SECTION COMPUTED STYLES COMPARISON');
  console.log('='.repeat(140));

  for (const name of Object.keys(results)) {
    const r = results[name];
    console.log(`\n### ${name.toUpperCase()}`);
    console.log('-'.repeat(100));

    const sr = r.snapshot.root;
    const rr = r.rebuild.root;
    const si = r.snapshot.inner;
    const ri = r.rebuild.inner;
    const sg = r.snapshot.grid;
    const rg = r.rebuild.grid;

    console.log('| Layer | Property       | Snapshot          | Rebuild           | Delta    |');
    console.log('|-------|----------------|-------------------|-------------------|----------|');

    // ROOT
    if (sr.found && rr.found) {
      console.log(`| ROOT  | height         | ${String(sr.height).padEnd(17)} | ${String(rr.height).padEnd(17)} | ${rr.height - sr.height}px`.padEnd(65) + '|');
      console.log(`| ROOT  | min-height     | ${sr.minHeight.padEnd(17)} | ${rr.minHeight.padEnd(17)} |          |`);
      console.log(`| ROOT  | padding-top    | ${sr.paddingTop.padEnd(17)} | ${rr.paddingTop.padEnd(17)} |          |`);
      console.log(`| ROOT  | padding-bottom | ${sr.paddingBottom.padEnd(17)} | ${rr.paddingBottom.padEnd(17)} |          |`);
      console.log(`| ROOT  | margin-top     | ${sr.marginTop.padEnd(17)} | ${rr.marginTop.padEnd(17)} |          |`);
      console.log(`| ROOT  | margin-bottom  | ${sr.marginBottom.padEnd(17)} | ${rr.marginBottom.padEnd(17)} |          |`);
    } else {
      console.log(`| ROOT  | (element)      | ${sr.found ? 'FOUND' : 'MISSING'}             | ${rr.found ? 'FOUND' : 'MISSING'}             |          |`);
    }

    // INNER
    if (si.found && ri.found) {
      console.log(`| INNER | height         | ${String(si.height).padEnd(17)} | ${String(ri.height).padEnd(17)} | ${ri.height - si.height}px`.padEnd(65) + '|');
      console.log(`| INNER | min-height     | ${si.minHeight.padEnd(17)} | ${ri.minHeight.padEnd(17)} |          |`);
      console.log(`| INNER | padding-top    | ${si.paddingTop.padEnd(17)} | ${ri.paddingTop.padEnd(17)} |          |`);
      console.log(`| INNER | padding-bottom | ${si.paddingBottom.padEnd(17)} | ${ri.paddingBottom.padEnd(17)} |          |`);
    } else {
      console.log(`| INNER | (element)      | ${si.found ? 'FOUND' : 'MISSING'}             | ${ri.found ? 'FOUND' : 'MISSING'}             |          |`);
    }

    // GRID
    if (sg.found && rg.found) {
      console.log(`| GRID  | height         | ${String(sg.height).padEnd(17)} | ${String(rg.height).padEnd(17)} | ${rg.height - sg.height}px`.padEnd(65) + '|');
      console.log(`| GRID  | row-gap        | ${sg.rowGap.padEnd(17)} | ${rg.rowGap.padEnd(17)} |          |`);
      console.log(`| GRID  | gap            | ${sg.gap.padEnd(17)} | ${rg.gap.padEnd(17)} |          |`);
      console.log(`| GRID  | overflow-x     | ${sg.overflowX.padEnd(17)} | ${rg.overflowX.padEnd(17)} |          |`);
    } else {
      console.log(`| GRID  | (element)      | ${sg.found ? 'FOUND' : 'MISSING'}             | ${rg.found ? 'FOUND' : 'MISSING'}             |          |`);
    }
  }

  // SCROLLING-CARDS SPECIAL ANALYSIS
  console.log('\n' + '='.repeat(140));
  console.log('SPECIAL: SCROLLING-CARDS DEEP ANALYSIS');
  console.log('='.repeat(140));

  // Snapshot
  await page.goto('http://localhost:3002/gbp/business.google.com/us/business-profile/index.html', { waitUntil: 'networkidle' });

  const snapshotCards = await page.$('section.ion-scrolling-3up-cards-list');
  if (snapshotCards) {
    const data = await snapshotCards.evaluate((e: Element) => {
      const cs = window.getComputedStyle(e);
      const box = e.getBoundingClientRect();

      // Find the cards container
      const container = e.querySelector('.ion-scrolling-3up-cards-list__container');
      const containerBox = container ? container.getBoundingClientRect() : null;
      const containerCs = container ? window.getComputedStyle(container) : null;

      // Find individual cards
      const cards = e.querySelectorAll('.ion-scrolling-3up-cards-list__card');
      const cardInfo: string[] = [];
      cards.forEach((card, i) => {
        const cardBox = card.getBoundingClientRect();
        cardInfo.push(`Card ${i}: ${Math.round(cardBox.width)}x${Math.round(cardBox.height)}px`);
      });

      return {
        sectionHeight: Math.round(box.height),
        paddingTop: cs.paddingTop,
        paddingBottom: cs.paddingBottom,
        containerHeight: containerBox ? Math.round(containerBox.height) : 'N/A',
        containerOverflowX: containerCs?.overflowX || 'N/A',
        containerDisplay: containerCs?.display || 'N/A',
        containerFlexDir: containerCs?.flexDirection || 'N/A',
        cardCount: cards.length,
        cards: cardInfo,
      };
    });

    console.log('\n**SNAPSHOT scrolling-cards**');
    console.log(`Section height: ${data.sectionHeight}px`);
    console.log(`Padding: top=${data.paddingTop}, bottom=${data.paddingBottom}`);
    console.log(`Container height: ${data.containerHeight}px`);
    console.log(`Container overflow-x: ${data.containerOverflowX}`);
    console.log(`Container display: ${data.containerDisplay}`);
    console.log(`Container flex-direction: ${data.containerFlexDir}`);
    console.log(`Card count: ${data.cardCount}`);
    data.cards.forEach(c => console.log(`  ${c}`));
  }

  // Rebuild
  await page.goto('http://localhost:3002/dev/fd-home-v3', { waitUntil: 'networkidle' });

  const rebuildCards = await page.$('[data-parity="scrolling-cards"]');
  if (rebuildCards) {
    const data = await rebuildCards.evaluate((e: Element) => {
      const cs = window.getComputedStyle(e);
      const box = e.getBoundingClientRect();

      // Find the cards container
      const container = e.querySelector('.fd-gbp-body-v3__cards-list');
      const containerBox = container ? container.getBoundingClientRect() : null;
      const containerCs = container ? window.getComputedStyle(container) : null;

      // Find individual cards
      const cards = e.querySelectorAll('.fd-gbp-body-v3__card');
      const cardInfo: string[] = [];
      cards.forEach((card, i) => {
        const cardBox = card.getBoundingClientRect();
        cardInfo.push(`Card ${i}: ${Math.round(cardBox.width)}x${Math.round(cardBox.height)}px`);
      });

      return {
        sectionHeight: Math.round(box.height),
        paddingTop: cs.paddingTop,
        paddingBottom: cs.paddingBottom,
        containerHeight: containerBox ? Math.round(containerBox.height) : 'N/A',
        containerOverflowX: containerCs?.overflowX || 'N/A',
        containerDisplay: containerCs?.display || 'N/A',
        containerFlexDir: containerCs?.flexDirection || 'N/A',
        cardCount: cards.length,
        cards: cardInfo,
      };
    });

    console.log('\n**REBUILD scrolling-cards**');
    console.log(`Section height: ${data.sectionHeight}px`);
    console.log(`Padding: top=${data.paddingTop}, bottom=${data.paddingBottom}`);
    console.log(`Container height: ${data.containerHeight}px`);
    console.log(`Container overflow-x: ${data.containerOverflowX}`);
    console.log(`Container display: ${data.containerDisplay}`);
    console.log(`Container flex-direction: ${data.containerFlexDir}`);
    console.log(`Card count: ${data.cardCount}`);
    data.cards.forEach(c => console.log(`  ${c}`));
  }

  await browser.close();
}

diagnose().catch(console.error);
