/**
 * fd-home-v3-diagnosis.ts
 * Strict MAIN-only diagnosis to determine why parity diffs are huge
 *
 * DO NOT FIX ANYTHING - diagnosis only
 */

import { chromium, Browser, Page, ElementHandle } from 'playwright';

const BASE_URL = process.argv[2] || 'http://localhost:3002';

// Reference uses GBP snapshot selectors
const REF_URL = `${BASE_URL}/gbp/business.google.com/us/business-profile/index.html`;
// Rebuild uses data-parity selectors
const REBUILD_URL = `${BASE_URL}/dev/fd-home-v3?__content=ref&__freeze=1&__textIndex=0`;

// Main selectors
const REF_MAIN_SELECTOR = 'main#page-content';
const REBUILD_MAIN_SELECTOR = '[data-parity="main"]';

// Section selectors for both pages
const SECTION_SELECTORS = {
  hero: {
    ref: 'section.ion-hero',
    rebuild: '[data-parity="hero"]',
    itemSelector: null, // no items to count
  },
  tiles: {
    ref: 'section.ion-standard-3up-stacked-list:first-of-type',
    rebuild: '[data-parity="tiles"]',
    itemSelector: { ref: '.ion-tile, .glue-card', rebuild: '.fdv3-tile' },
  },
  atl1: {
    ref: 'section.ion-animated-text-list--fill-light',
    rebuild: '[data-parity="animated-text-list"]:first-of-type',
    itemSelector: { ref: '.ion-animated-text-list__item', rebuild: '.fdv3-atl-item' },
  },
  atl2: {
    ref: 'section.ion-animated-text-list--fill-dark',
    rebuild: '[data-parity="animated-text-list"]:last-of-type',
    itemSelector: { ref: '.ion-animated-text-list__item', rebuild: '.fdv3-atl-item' },
  },
  'scrolling-cards': {
    ref: 'section.ion-scrolling-3up-cards-list',
    rebuild: '[data-parity="scrolling-cards"]',
    itemSelector: { ref: '.ion-scrolling-3up-cards-list__card, .glue-card', rebuild: '.fdv3-scrolling-card' },
  },
  twoup: {
    ref: 'section.ion-twoup',
    rebuild: '[data-parity="twoup"]',
    itemSelector: null,
  },
  'case-studies': {
    ref: 'section.ion-case-study-module',
    rebuild: '[data-parity="case-studies"]',
    itemSelector: { ref: '.ion-case-study-module__slide, .glue-carousel__slide', rebuild: '.fdv3-case-study-card' },
  },
  'cta-header': {
    ref: 'section.ion-section-header',
    rebuild: '[data-parity="cta-header"]',
    itemSelector: null,
  },
  steps: {
    ref: 'section.ion-standard-3up-stacked-list:last-of-type',
    rebuild: '[data-parity="steps"]',
    itemSelector: { ref: '.ion-tile, .glue-card', rebuild: '.fdv3-step' },
  },
  faq: {
    ref: 'section.ion-accordion',
    rebuild: '[data-parity="faq"]',
    itemSelector: { ref: '.ion-accordion__item, .glue-accordion__item', rebuild: '.fdv3-faq-item' },
  },
};

interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ElementInfo {
  selector: string;
  exists: boolean;
  boundingBox: BoundingBox | null;
  parents: string[];
  itemCount: number | null;
}

interface ScrollingCardsCSS {
  display: string;
  overflowX: string;
  overflowY: string;
  maxHeight: string;
  height: string;
  gridAutoFlow: string;
  flexDirection: string;
  gap: string;
  cardCount: number;
}

async function getElementInfo(
  page: Page,
  selector: string,
  itemSelector: string | null
): Promise<ElementInfo> {
  const element = await page.$(selector);

  if (!element) {
    return {
      selector,
      exists: false,
      boundingBox: null,
      parents: [],
      itemCount: null,
    };
  }

  const boundingBox = await element.boundingBox();

  // Get first 2 parent node tag/class names
  const parents = await element.evaluate((el) => {
    const result: string[] = [];
    let current = el.parentElement;
    for (let i = 0; i < 2 && current; i++) {
      const tag = current.tagName.toLowerCase();
      const classes = current.className ? `.${current.className.split(' ').join('.')}` : '';
      result.push(`${tag}${classes}`);
      current = current.parentElement;
    }
    return result;
  });

  // Count items if itemSelector provided
  let itemCount: number | null = null;
  if (itemSelector) {
    const items = await element.$$(itemSelector);
    itemCount = items.length;
  }

  return {
    selector,
    exists: true,
    boundingBox,
    parents,
    itemCount,
  };
}

async function getScrollingCardsCSS(page: Page, selector: string): Promise<ScrollingCardsCSS | null> {
  const element = await page.$(selector);
  if (!element) return null;

  // Find the list container inside the section
  const listContainer = await element.$('.ion-scrolling-3up-cards-list__cards, .fdv3-scrolling-cards__list, [class*="cards-list"], [class*="card-list"], ul, .cards');
  const target = listContainer || element;

  const css = await target.evaluate((el) => {
    const styles = window.getComputedStyle(el);
    return {
      display: styles.display,
      overflowX: styles.overflowX,
      overflowY: styles.overflowY,
      maxHeight: styles.maxHeight,
      height: styles.height,
      gridAutoFlow: styles.gridAutoFlow,
      flexDirection: styles.flexDirection,
      gap: styles.gap,
    };
  });

  // Count cards
  const cards = await element.$$('.ion-scrolling-3up-cards-list__card, .glue-card, .fdv3-scrolling-card, [class*="card"]');

  return {
    ...css,
    cardCount: cards.length,
  };
}

async function checkStateDeterminism(page: Page): Promise<{ reducedMotion: boolean; freezeActive: boolean; rafDisabled: boolean }> {
  return await page.evaluate(() => {
    // Check reduced motion media query
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Check if __freeze param is in URL
    const freezeActive = window.location.search.includes('__freeze=1');

    // Check if animations are disabled (look for injected style)
    const hasAnimationDisableStyle = !!document.querySelector('style[data-parity-freeze]');

    return {
      reducedMotion,
      freezeActive,
      rafDisabled: hasAnimationDisableStyle,
    };
  });
}

async function runDiagnosis() {
  let browser: Browser | null = null;

  try {
    console.log('═══════════════════════════════════════════════════════════');
    console.log('  FD HOME V3 — STRICT MAIN-ONLY DIAGNOSIS');
    console.log('  DO NOT FIX — DIAGNOSIS ONLY');
    console.log('═══════════════════════════════════════════════════════════\n');

    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      reducedMotion: 'reduce',
    });

    const refPage = await context.newPage();
    const rebuildPage = await context.newPage();

    // Set viewport
    const viewport = { width: 1280, height: 900 };
    await refPage.setViewportSize(viewport);
    await rebuildPage.setViewportSize(viewport);

    // Inject animation disable CSS into both pages
    const disableAnimationsCSS = `
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
    `;

    await refPage.addStyleTag({ content: disableAnimationsCSS });
    await rebuildPage.addStyleTag({ content: disableAnimationsCSS });

    console.log(`Loading reference: ${REF_URL}`);
    await refPage.goto(REF_URL, { waitUntil: 'networkidle', timeout: 30000 });

    console.log(`Loading rebuild: ${REBUILD_URL}`);
    await rebuildPage.goto(REBUILD_URL, { waitUntil: 'networkidle', timeout: 30000 });

    // Wait for fonts
    await refPage.waitForTimeout(500);
    await rebuildPage.waitForTimeout(500);

    // ═══════════════════════════════════════════════════════════
    // 1) VERIFY MAIN CLIPPING ELEMENT
    // ═══════════════════════════════════════════════════════════
    console.log('\n╔═══════════════════════════════════════════════════════════╗');
    console.log('║  1) MAIN CLIPPING ELEMENT VERIFICATION                    ║');
    console.log('╚═══════════════════════════════════════════════════════════╝\n');

    const refMainInfo = await getElementInfo(refPage, REF_MAIN_SELECTOR, null);
    const rebuildMainInfo = await getElementInfo(rebuildPage, REBUILD_MAIN_SELECTOR, null);

    console.log('REFERENCE (Snapshot):');
    console.log(`  Selector: ${REF_MAIN_SELECTOR}`);
    console.log(`  Exists: ${refMainInfo.exists}`);
    if (refMainInfo.boundingBox) {
      console.log(`  Bounding Box: x=${refMainInfo.boundingBox.x}, y=${refMainInfo.boundingBox.y}, width=${refMainInfo.boundingBox.width}, height=${refMainInfo.boundingBox.height}`);
    }
    console.log(`  Parents: ${refMainInfo.parents.join(' → ')}`);

    console.log('\nREBUILD:');
    console.log(`  Selector: ${REBUILD_MAIN_SELECTOR}`);
    console.log(`  Exists: ${rebuildMainInfo.exists}`);
    if (rebuildMainInfo.boundingBox) {
      console.log(`  Bounding Box: x=${rebuildMainInfo.boundingBox.x}, y=${rebuildMainInfo.boundingBox.y}, width=${rebuildMainInfo.boundingBox.width}, height=${rebuildMainInfo.boundingBox.height}`);
    }
    console.log(`  Parents: ${rebuildMainInfo.parents.join(' → ')}`);

    if (refMainInfo.boundingBox && rebuildMainInfo.boundingBox) {
      const heightDelta = rebuildMainInfo.boundingBox.height - refMainInfo.boundingBox.height;
      console.log(`\n  HEIGHT DELTA: ${heightDelta > 0 ? '+' : ''}${heightDelta}px`);
    }

    // ═══════════════════════════════════════════════════════════
    // 2) SECTION PARITY COUNT
    // ═══════════════════════════════════════════════════════════
    console.log('\n╔═══════════════════════════════════════════════════════════╗');
    console.log('║  2) SECTION PARITY COUNT                                  ║');
    console.log('╚═══════════════════════════════════════════════════════════╝\n');

    console.log('Section           | Snap Height | Rebuild Height | Snap Items | Rebuild Items');
    console.log('------------------|-------------|----------------|------------|---------------');

    for (const [sectionName, selectors] of Object.entries(SECTION_SELECTORS)) {
      const refInfo = await getElementInfo(
        refPage,
        selectors.ref,
        selectors.itemSelector?.ref || null
      );
      const rebuildInfo = await getElementInfo(
        rebuildPage,
        selectors.rebuild,
        selectors.itemSelector?.rebuild || null
      );

      const snapHeight = refInfo.boundingBox ? `${Math.round(refInfo.boundingBox.height)}px` : 'N/A';
      const rebuildHeight = rebuildInfo.boundingBox ? `${Math.round(rebuildInfo.boundingBox.height)}px` : 'N/A';
      const snapItems = refInfo.itemCount !== null ? String(refInfo.itemCount) : '-';
      const rebuildItems = rebuildInfo.itemCount !== null ? String(rebuildInfo.itemCount) : '-';

      const sectionPadded = sectionName.padEnd(17);
      const snapHeightPadded = snapHeight.padStart(11);
      const rebuildHeightPadded = rebuildHeight.padStart(14);
      const snapItemsPadded = snapItems.padStart(10);
      const rebuildItemsPadded = rebuildItems.padStart(13);

      console.log(`${sectionPadded} |${snapHeightPadded} |${rebuildHeightPadded} |${snapItemsPadded} |${rebuildItemsPadded}`);
    }

    // ═══════════════════════════════════════════════════════════
    // 3) SCROLLING-CARDS DEEP DIVE
    // ═══════════════════════════════════════════════════════════
    console.log('\n╔═══════════════════════════════════════════════════════════╗');
    console.log('║  3) SCROLLING-CARDS CSS DEEP DIVE                         ║');
    console.log('╚═══════════════════════════════════════════════════════════╝\n');

    const refScrollingCSS = await getScrollingCardsCSS(refPage, SECTION_SELECTORS['scrolling-cards'].ref);
    const rebuildScrollingCSS = await getScrollingCardsCSS(rebuildPage, SECTION_SELECTORS['scrolling-cards'].rebuild);

    console.log('Property         | Snapshot                    | Rebuild');
    console.log('-----------------|-----------------------------|--------------------------');

    if (refScrollingCSS && rebuildScrollingCSS) {
      const props = ['display', 'overflowX', 'overflowY', 'maxHeight', 'height', 'gridAutoFlow', 'flexDirection', 'gap', 'cardCount'] as const;
      for (const prop of props) {
        const refVal = String(refScrollingCSS[prop]).padEnd(27);
        const rebuildVal = String(rebuildScrollingCSS[prop]);
        console.log(`${prop.padEnd(16)} | ${refVal} | ${rebuildVal}`);
      }
    } else {
      if (!refScrollingCSS) console.log('  ❌ Snapshot scrolling-cards NOT FOUND');
      if (!rebuildScrollingCSS) console.log('  ❌ Rebuild scrolling-cards NOT FOUND');
    }

    // Also check for the actual list container
    console.log('\n  Searching for list container in scrolling-cards...');

    const refListContainers = await refPage.$$('section.ion-scrolling-3up-cards-list *');
    const refContainerCount = refListContainers.length;
    console.log(`  Snapshot: ${refContainerCount} descendant elements in scrolling-cards section`);

    const rebuildListContainers = await rebuildPage.$$('[data-parity="scrolling-cards"] *');
    const rebuildContainerCount = rebuildListContainers.length;
    console.log(`  Rebuild: ${rebuildContainerCount} descendant elements in scrolling-cards section`);

    // Get actual structure of scrolling cards
    console.log('\n  Scrolling-cards DOM structure:');

    const refScrollingStructure = await refPage.evaluate((sel) => {
      const section = document.querySelector(sel);
      if (!section) return 'NOT FOUND';

      const children: string[] = [];
      for (const child of Array.from(section.children).slice(0, 5)) {
        const tag = child.tagName.toLowerCase();
        const classes = child.className ? `.${child.className.split(' ').slice(0, 3).join('.')}` : '';
        children.push(`${tag}${classes}`);
      }
      return children.join('\n      ');
    }, SECTION_SELECTORS['scrolling-cards'].ref);
    console.log(`  Snapshot direct children:\n      ${refScrollingStructure}`);

    const rebuildScrollingStructure = await rebuildPage.evaluate((sel) => {
      const section = document.querySelector(sel);
      if (!section) return 'NOT FOUND';

      const children: string[] = [];
      for (const child of Array.from(section.children).slice(0, 5)) {
        const tag = child.tagName.toLowerCase();
        const classes = child.className ? `.${child.className.split(' ').slice(0, 3).join('.')}` : '';
        children.push(`${tag}${classes}`);
      }
      return children.join('\n      ');
    }, SECTION_SELECTORS['scrolling-cards'].rebuild);
    console.log(`  Rebuild direct children:\n      ${rebuildScrollingStructure}`);

    // ═══════════════════════════════════════════════════════════
    // 4) STATE DETERMINISM CHECK
    // ═══════════════════════════════════════════════════════════
    console.log('\n╔═══════════════════════════════════════════════════════════╗');
    console.log('║  4) STATE DETERMINISM CHECK                               ║');
    console.log('╚═══════════════════════════════════════════════════════════╝\n');

    const refState = await checkStateDeterminism(refPage);
    const rebuildState = await checkStateDeterminism(rebuildPage);

    console.log('Check                | Snapshot | Rebuild');
    console.log('---------------------|----------|----------');
    console.log(`Reduced Motion       | ${refState.reducedMotion ? 'YES' : 'NO'.padEnd(3)}     | ${rebuildState.reducedMotion ? 'YES' : 'NO'}`);
    console.log(`__freeze=1 in URL    | ${refState.freezeActive ? 'YES' : 'NO'.padEnd(3)}     | ${rebuildState.freezeActive ? 'YES' : 'NO'}`);
    console.log(`Animation CSS inject | YES      | YES (via Playwright)`);

    // Check if animations are actually running on rebuild
    const rebuildAnimationCheck = await rebuildPage.evaluate(() => {
      const animatedElements = document.querySelectorAll('[class*="animate"], [class*="progress"], [class*="active"]');
      return {
        animatedElementCount: animatedElements.length,
        hasRunningAnimations: Array.from(document.querySelectorAll('*')).some(el => {
          const style = window.getComputedStyle(el);
          return style.animationDuration !== '0s' && style.animationName !== 'none';
        }),
      };
    });
    console.log(`\n  Rebuild animated elements: ${rebuildAnimationCheck.animatedElementCount}`);
    console.log(`  Has running animations: ${rebuildAnimationCheck.hasRunningAnimations ? 'YES ⚠️' : 'NO ✓'}`);

    // ═══════════════════════════════════════════════════════════
    // 5) FINDINGS SUMMARY
    // ═══════════════════════════════════════════════════════════
    console.log('\n╔═══════════════════════════════════════════════════════════╗');
    console.log('║  5) FINDINGS SUMMARY                                      ║');
    console.log('╚═══════════════════════════════════════════════════════════╝\n');

    const findings: string[] = [];

    // Check main height delta
    if (refMainInfo.boundingBox && rebuildMainInfo.boundingBox) {
      const mainDelta = rebuildMainInfo.boundingBox.height - refMainInfo.boundingBox.height;
      if (Math.abs(mainDelta) > 100) {
        findings.push(`MAIN HEIGHT: Rebuild is ${mainDelta > 0 ? 'TALLER' : 'SHORTER'} by ${Math.abs(mainDelta)}px`);
      }
    }

    // Check for missing sections
    for (const [sectionName, selectors] of Object.entries(SECTION_SELECTORS)) {
      const refExists = await refPage.$(selectors.ref);
      const rebuildExists = await rebuildPage.$(selectors.rebuild);

      if (!refExists && rebuildExists) {
        findings.push(`EXTRA SECTION: "${sectionName}" exists in rebuild but NOT in snapshot`);
      }
      if (refExists && !rebuildExists) {
        findings.push(`MISSING SECTION: "${sectionName}" exists in snapshot but NOT in rebuild`);
      }
    }

    // Check item count mismatches
    for (const [sectionName, selectors] of Object.entries(SECTION_SELECTORS)) {
      if (selectors.itemSelector) {
        const refInfo = await getElementInfo(refPage, selectors.ref, selectors.itemSelector.ref);
        const rebuildInfo = await getElementInfo(rebuildPage, selectors.rebuild, selectors.itemSelector.rebuild);

        if (refInfo.itemCount !== null && rebuildInfo.itemCount !== null) {
          if (refInfo.itemCount !== rebuildInfo.itemCount) {
            findings.push(`ITEM COUNT MISMATCH: "${sectionName}" has ${refInfo.itemCount} items in snapshot, ${rebuildInfo.itemCount} in rebuild`);
          }
        }
      }
    }

    // Check scrolling-cards specifically
    if (refScrollingCSS && rebuildScrollingCSS) {
      if (refScrollingCSS.display !== rebuildScrollingCSS.display) {
        findings.push(`SCROLLING-CARDS DISPLAY: snapshot="${refScrollingCSS.display}" rebuild="${rebuildScrollingCSS.display}"`);
      }
      if (refScrollingCSS.overflowX !== rebuildScrollingCSS.overflowX) {
        findings.push(`SCROLLING-CARDS OVERFLOW-X: snapshot="${refScrollingCSS.overflowX}" rebuild="${rebuildScrollingCSS.overflowX}"`);
      }
    }

    if (findings.length === 0) {
      console.log('  No major findings detected.');
    } else {
      for (const finding of findings) {
        console.log(`  ⚠️  ${finding}`);
      }
    }

    console.log('\n═══════════════════════════════════════════════════════════');
    console.log('  DIAGNOSIS COMPLETE — DO NOT IMPLEMENT FIXES');
    console.log('═══════════════════════════════════════════════════════════\n');

    await browser.close();
  } catch (error) {
    if (browser) await browser.close();
    console.error('DIAGNOSIS ERROR:', error);
    process.exit(1);
  }
}

runDiagnosis();
