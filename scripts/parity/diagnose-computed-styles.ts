import { chromium } from 'playwright';

interface ComputedStyles {
  height: string;
  minHeight: string;
  paddingTop: string;
  paddingBottom: string;
  marginTop: string;
  marginBottom: string;
  rowGap: string;
  gap: string;
  alignContent: string;
  justifyContent: string;
  overflowX: string;
}

async function getComputedStyles(page: any, selector: string): Promise<ComputedStyles | null> {
  const el = await page.$(selector);
  if (!el) return null;

  return await el.evaluate((e: Element) => {
    const cs = window.getComputedStyle(e);
    return {
      height: cs.height,
      minHeight: cs.minHeight,
      paddingTop: cs.paddingTop,
      paddingBottom: cs.paddingBottom,
      marginTop: cs.marginTop,
      marginBottom: cs.marginBottom,
      rowGap: cs.rowGap,
      gap: cs.gap,
      alignContent: cs.alignContent,
      justifyContent: cs.justifyContent,
      overflowX: cs.overflowX,
    };
  });
}

async function diagnose() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });

  // Section mappings: name -> { snapshot selectors, rebuild selectors }
  const sections = [
    {
      name: 'hero',
      snapshot: {
        root: 'section.ion-hero-overview',
        inner: 'section.ion-hero-overview .glue-page',
        grid: 'section.ion-hero-overview .glue-grid',
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
        root: 'section.ion-tile',
        inner: 'section.ion-tile .glue-page',
        grid: 'section.ion-tile .glue-grid',
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
        root: '[data-parity="animated-text-list"][data-section-id="atl-first-impression"]',
        inner: '[data-parity="animated-text-list"][data-section-id="atl-first-impression"] .fd-gbp-body-v3__atl-container',
        grid: '[data-parity="animated-text-list"][data-section-id="atl-first-impression"] .fd-gbp-body-v3__atl-grid',
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
        root: '[data-parity="animated-text-list"][data-section-id="atl-connect-customers"]',
        inner: '[data-parity="animated-text-list"][data-section-id="atl-connect-customers"] .fd-gbp-body-v3__atl-container',
        grid: '[data-parity="animated-text-list"][data-section-id="atl-connect-customers"] .fd-gbp-body-v3__atl-grid',
      },
    },
    {
      name: 'scrolling-cards',
      snapshot: {
        root: 'section.ion-scrolling-cards',
        inner: 'section.ion-scrolling-cards .glue-page',
        grid: 'section.ion-scrolling-cards .ion-scrolling-cards__cards',
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
        root: 'section.ion-cta-header',
        inner: 'section.ion-cta-header .glue-page',
        grid: 'section.ion-cta-header .glue-grid',
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
        root: 'section.ion-steps',
        inner: 'section.ion-steps .glue-page',
        grid: 'section.ion-steps .glue-grid',
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
        root: 'section.ion-faq',
        inner: 'section.ion-faq .glue-page',
        grid: 'section.ion-faq .glue-grid',
      },
      rebuild: {
        root: '[data-parity="faq"]',
        inner: '[data-parity="faq"] .fd-gbp-body-v3__faq-container',
        grid: '[data-parity="faq"] .fd-gbp-body-v3__faq-list',
      },
    },
  ];

  const results: any[] = [];

  // Test snapshot
  console.log('\n=== LOADING SNAPSHOT ===');
  await page.goto('http://localhost:3002/gbp/business.google.com/us/business-profile/index.html', { waitUntil: 'networkidle' });

  for (const section of sections) {
    const rootStyles = await getComputedStyles(page, section.snapshot.root);
    const innerStyles = await getComputedStyles(page, section.snapshot.inner);
    const gridStyles = await getComputedStyles(page, section.snapshot.grid);

    results.push({
      name: section.name,
      snapshotRoot: rootStyles,
      snapshotInner: innerStyles,
      snapshotGrid: gridStyles,
      rebuildRoot: null,
      rebuildInner: null,
      rebuildGrid: null,
    });
  }

  // Test rebuild
  console.log('\n=== LOADING REBUILD ===');
  await page.goto('http://localhost:3002/home-v3', { waitUntil: 'networkidle' });

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    results[i].rebuildRoot = await getComputedStyles(page, section.rebuild.root);
    results[i].rebuildInner = await getComputedStyles(page, section.rebuild.inner);
    results[i].rebuildGrid = await getComputedStyles(page, section.rebuild.grid);
  }

  // Output tables
  console.log('\n' + '='.repeat(120));
  console.log('COMPUTED STYLES COMPARISON');
  console.log('='.repeat(120));

  for (const r of results) {
    console.log(`\n### ${r.name.toUpperCase()}`);
    console.log('-'.repeat(80));

    // ROOT comparison
    console.log('\n**ROOT (section element)**');
    console.log('| Property       | Snapshot              | Rebuild               |');
    console.log('|----------------|----------------------|----------------------|');
    if (r.snapshotRoot && r.rebuildRoot) {
      console.log(`| height         | ${r.snapshotRoot.height.padEnd(20)} | ${r.rebuildRoot.height.padEnd(20)} |`);
      console.log(`| min-height     | ${r.snapshotRoot.minHeight.padEnd(20)} | ${r.rebuildRoot.minHeight.padEnd(20)} |`);
      console.log(`| padding-top    | ${r.snapshotRoot.paddingTop.padEnd(20)} | ${r.rebuildRoot.paddingTop.padEnd(20)} |`);
      console.log(`| padding-bottom | ${r.snapshotRoot.paddingBottom.padEnd(20)} | ${r.rebuildRoot.paddingBottom.padEnd(20)} |`);
      console.log(`| margin-top     | ${r.snapshotRoot.marginTop.padEnd(20)} | ${r.rebuildRoot.marginTop.padEnd(20)} |`);
      console.log(`| margin-bottom  | ${r.snapshotRoot.marginBottom.padEnd(20)} | ${r.rebuildRoot.marginBottom.padEnd(20)} |`);
    } else {
      console.log(`| (missing)      | ${r.snapshotRoot ? 'FOUND' : 'MISSING'}              | ${r.rebuildRoot ? 'FOUND' : 'MISSING'}              |`);
    }

    // INNER comparison
    console.log('\n**INNER WRAPPER (glue-page / container)**');
    console.log('| Property       | Snapshot              | Rebuild               |');
    console.log('|----------------|----------------------|----------------------|');
    if (r.snapshotInner && r.rebuildInner) {
      console.log(`| height         | ${r.snapshotInner.height.padEnd(20)} | ${r.rebuildInner.height.padEnd(20)} |`);
      console.log(`| min-height     | ${r.snapshotInner.minHeight.padEnd(20)} | ${r.rebuildInner.minHeight.padEnd(20)} |`);
      console.log(`| padding-top    | ${r.snapshotInner.paddingTop.padEnd(20)} | ${r.rebuildInner.paddingTop.padEnd(20)} |`);
      console.log(`| padding-bottom | ${r.snapshotInner.paddingBottom.padEnd(20)} | ${r.rebuildInner.paddingBottom.padEnd(20)} |`);
    } else {
      console.log(`| (missing)      | ${r.snapshotInner ? 'FOUND' : 'MISSING'}              | ${r.rebuildInner ? 'FOUND' : 'MISSING'}              |`);
    }

    // GRID comparison
    console.log('\n**GRID WRAPPER**');
    console.log('| Property       | Snapshot              | Rebuild               |');
    console.log('|----------------|----------------------|----------------------|');
    if (r.snapshotGrid && r.rebuildGrid) {
      console.log(`| height         | ${r.snapshotGrid.height.padEnd(20)} | ${r.rebuildGrid.height.padEnd(20)} |`);
      console.log(`| row-gap        | ${r.snapshotGrid.rowGap.padEnd(20)} | ${r.rebuildGrid.rowGap.padEnd(20)} |`);
      console.log(`| gap            | ${r.snapshotGrid.gap.padEnd(20)} | ${r.rebuildGrid.gap.padEnd(20)} |`);
      console.log(`| align-content  | ${r.snapshotGrid.alignContent.padEnd(20)} | ${r.rebuildGrid.alignContent.padEnd(20)} |`);
      console.log(`| justify-content| ${r.snapshotGrid.justifyContent.padEnd(20)} | ${r.rebuildGrid.justifyContent.padEnd(20)} |`);
      console.log(`| overflow-x     | ${r.snapshotGrid.overflowX.padEnd(20)} | ${r.rebuildGrid.overflowX.padEnd(20)} |`);
    } else {
      console.log(`| (missing)      | ${r.snapshotGrid ? 'FOUND' : 'MISSING'}              | ${r.rebuildGrid ? 'FOUND' : 'MISSING'}              |`);
    }
  }

  // Special scrolling-cards analysis
  console.log('\n' + '='.repeat(120));
  console.log('SPECIAL: SCROLLING-CARDS DEEP ANALYSIS');
  console.log('='.repeat(120));

  // Snapshot scrolling-cards
  await page.goto('http://localhost:3002/gbp/business.google.com/us/business-profile/index.html', { waitUntil: 'networkidle' });

  const snapshotCardsContainer = await page.$('section.ion-scrolling-cards .ion-scrolling-cards__cards');
  if (snapshotCardsContainer) {
    const box = await snapshotCardsContainer.boundingBox();
    const styles = await snapshotCardsContainer.evaluate((e: Element) => {
      const cs = window.getComputedStyle(e);
      return {
        height: cs.height,
        minHeight: cs.minHeight,
        paddingBottom: cs.paddingBottom,
        overflowX: cs.overflowX,
        display: cs.display,
        flexDirection: cs.flexDirection,
        scrollWidth: (e as HTMLElement).scrollWidth,
        clientWidth: (e as HTMLElement).clientWidth,
      };
    });

    // Count cards
    const cards = await snapshotCardsContainer.$$('.ion-scrolling-cards__card');
    const cardBoxes = await Promise.all(cards.map(c => c.boundingBox()));

    console.log('\n**SNAPSHOT scrolling-cards container**');
    console.log(`| Property     | Value                |`);
    console.log(`|--------------|----------------------|`);
    console.log(`| height       | ${styles.height.padEnd(20)} |`);
    console.log(`| min-height   | ${styles.minHeight.padEnd(20)} |`);
    console.log(`| padding-btm  | ${styles.paddingBottom.padEnd(20)} |`);
    console.log(`| overflow-x   | ${styles.overflowX.padEnd(20)} |`);
    console.log(`| display      | ${styles.display.padEnd(20)} |`);
    console.log(`| flex-dir     | ${styles.flexDirection.padEnd(20)} |`);
    console.log(`| scrollWidth  | ${String(styles.scrollWidth).padEnd(20)} |`);
    console.log(`| clientWidth  | ${String(styles.clientWidth).padEnd(20)} |`);
    console.log(`| boundingBox  | ${box?.width}x${box?.height}px`.padEnd(23) + '|');
    console.log(`| card count   | ${String(cards.length).padEnd(20)} |`);

    console.log('\nCard heights:');
    cardBoxes.forEach((b, i) => {
      if (b) console.log(`  Card ${i}: ${b.width}x${b.height}px`);
    });
  }

  // Rebuild scrolling-cards
  await page.goto('http://localhost:3002/home-v3', { waitUntil: 'networkidle' });

  const rebuildCardsContainer = await page.$('[data-parity="scrolling-cards"] .fd-gbp-body-v3__cards-list');
  if (rebuildCardsContainer) {
    const box = await rebuildCardsContainer.boundingBox();
    const styles = await rebuildCardsContainer.evaluate((e: Element) => {
      const cs = window.getComputedStyle(e);
      return {
        height: cs.height,
        minHeight: cs.minHeight,
        paddingBottom: cs.paddingBottom,
        overflowX: cs.overflowX,
        display: cs.display,
        flexDirection: cs.flexDirection,
        scrollWidth: (e as HTMLElement).scrollWidth,
        clientWidth: (e as HTMLElement).clientWidth,
      };
    });

    // Count cards
    const cards = await rebuildCardsContainer.$$('.fd-gbp-body-v3__card');
    const cardBoxes = await Promise.all(cards.map(c => c.boundingBox()));

    console.log('\n**REBUILD scrolling-cards container**');
    console.log(`| Property     | Value                |`);
    console.log(`|--------------|----------------------|`);
    console.log(`| height       | ${styles.height.padEnd(20)} |`);
    console.log(`| min-height   | ${styles.minHeight.padEnd(20)} |`);
    console.log(`| padding-btm  | ${styles.paddingBottom.padEnd(20)} |`);
    console.log(`| overflow-x   | ${styles.overflowX.padEnd(20)} |`);
    console.log(`| display      | ${styles.display.padEnd(20)} |`);
    console.log(`| flex-dir     | ${styles.flexDirection.padEnd(20)} |`);
    console.log(`| scrollWidth  | ${String(styles.scrollWidth).padEnd(20)} |`);
    console.log(`| clientWidth  | ${String(styles.clientWidth).padEnd(20)} |`);
    console.log(`| boundingBox  | ${box?.width}x${box?.height}px`.padEnd(23) + '|');
    console.log(`| card count   | ${String(cards.length).padEnd(20)} |`);

    console.log('\nCard heights:');
    cardBoxes.forEach((b, i) => {
      if (b) console.log(`  Card ${i}: ${b.width}x${b.height}px`);
    });
  }

  await browser.close();
}

diagnose().catch(console.error);
