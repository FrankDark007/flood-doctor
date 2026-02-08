/**
 * verify-fd-layout-invariants.ts
 * Verify layout invariants match between snapshot and rebuild
 *
 * Per Deployment Agreement:
 * - Uses data-parity attributes for stable selectors
 * - Compares computed styles and bounding boxes
 * - Explicit 30s timeout per action
 */

import { chromium, Browser, Page } from 'playwright';

interface LayoutMetrics {
  selector: string;
  element: string | null;
  boundingBox: { x: number; y: number; width: number; height: number } | null;
  computedStyles: Record<string, string>;
}

interface InvariantCheck {
  name: string;
  selector: string;
  properties: string[];
  tolerance: number; // pixels
}

// REQUIRED: data-parity="main" must exist on rebuild page
// This enforces body-only parity testing (FD header/footer are excluded)
const REQUIRED_MAIN_SELECTOR = '[data-parity="main"]';

// Layout invariants to verify (body sections only)
// ORDER MUST MATCH SNAPSHOT:
// 1. Hero (ion-hero)
// 2. Tiles (ion-standard-3up-stacked-list)
// 3. ATL Light (ion-animated-text-list--fill-light)
// 4. ATL Dark (ion-animated-text-list--fill-dark)
// 5. Scrolling cards (ion-scrolling-3up-cards-list)
// 6. TwoUp (ion-twoup)
// 7. Case Studies (ion-case-study-module)
// 8. CTA Header (ion-section-header)
// 9. Steps (ion-standard-3up-stacked-list)
// 10. FAQ (ion-accordion)
const INVARIANTS: InvariantCheck[] = [
  {
    name: 'Main container',
    selector: '[data-parity="main"]',
    properties: ['minHeight'],
    tolerance: 50,
  },
  {
    name: 'Hero section',
    selector: '[data-parity="hero"]',
    properties: ['paddingTop', 'paddingBottom'],
    tolerance: 8,
  },
  {
    name: 'Tiles section',
    selector: '[data-parity="tiles"]',
    properties: ['paddingTop', 'paddingBottom'],
    tolerance: 8,
  },
  {
    name: 'Animated text list section (first)',
    selector: '[data-parity="animated-text-list"]:first-of-type',
    properties: ['paddingTop', 'paddingBottom'],
    tolerance: 8,
  },
  {
    name: 'Scrolling cards section',
    selector: '[data-parity="scrolling-cards"]',
    properties: ['paddingTop', 'paddingBottom'],
    tolerance: 8,
  },
  {
    name: 'Two-up section',
    selector: '[data-parity="twoup"]',
    properties: ['paddingTop', 'paddingBottom'],
    tolerance: 8,
  },
  {
    name: 'Case studies section',
    selector: '[data-parity="case-studies"]',
    properties: ['paddingTop', 'paddingBottom'],
    tolerance: 8,
  },
  {
    name: 'CTA Header section',
    selector: '[data-parity="cta-header"]',
    properties: ['paddingTop', 'paddingBottom'],
    tolerance: 8,
  },
  {
    name: 'Steps section',
    selector: '[data-parity="steps"]',
    properties: ['paddingTop', 'paddingBottom'],
    tolerance: 8,
  },
  {
    name: 'FAQ section',
    selector: '[data-parity="faq"]',
    properties: ['paddingTop', 'paddingBottom'],
    tolerance: 8,
  },
];

async function getLayoutMetrics(page: Page, selector: string, properties: string[]): Promise<LayoutMetrics> {
  const element = await page.$(selector);

  if (!element) {
    return {
      selector,
      element: null,
      boundingBox: null,
      computedStyles: {},
    };
  }

  const boundingBox = await element.boundingBox();

  const computedStyles = await element.evaluate((el, props: string[]) => {
    const styles = window.getComputedStyle(el);
    const result: Record<string, string> = {};
    for (const prop of props) {
      result[prop] = styles.getPropertyValue(
        prop.replace(/([A-Z])/g, '-$1').toLowerCase()
      ) || styles[prop as keyof CSSStyleDeclaration]?.toString() || '';
    }
    return result;
  }, properties);

  return {
    selector,
    element: await element.evaluate((el) => el.tagName.toLowerCase()),
    boundingBox,
    computedStyles,
  };
}

function parseNumericValue(value: string): number {
  const match = value.match(/^([\d.]+)/);
  return match ? parseFloat(match[1]) : 0;
}

function compareMetrics(
  refMetrics: LayoutMetrics,
  rebuildMetrics: LayoutMetrics,
  invariant: InvariantCheck
): { passed: boolean; details: string[] } {
  const details: string[] = [];
  let passed = true;

  // Check element existence
  if (!refMetrics.element) {
    details.push(`Reference element not found: ${invariant.selector}`);
    return { passed: false, details };
  }

  if (!rebuildMetrics.element) {
    details.push(`Rebuild element not found: ${invariant.selector}`);
    return { passed: false, details };
  }

  // Compare properties
  for (const prop of invariant.properties) {
    const refValue = refMetrics.computedStyles[prop] || '';
    const rebuildValue = rebuildMetrics.computedStyles[prop] || '';

    // For numeric values, check within tolerance
    const refNum = parseNumericValue(refValue);
    const rebuildNum = parseNumericValue(rebuildValue);

    if (refNum !== 0 || rebuildNum !== 0) {
      const diff = Math.abs(refNum - rebuildNum);
      if (diff > invariant.tolerance) {
        passed = false;
        details.push(`${prop}: ref=${refValue} rebuild=${rebuildValue} (diff: ${diff.toFixed(1)}px)`);
      } else {
        details.push(`${prop}: ✓ (ref=${refValue}, rebuild=${rebuildValue})`);
      }
    } else if (refValue !== rebuildValue) {
      // Non-numeric comparison
      passed = false;
      details.push(`${prop}: ref="${refValue}" rebuild="${rebuildValue}"`);
    } else {
      details.push(`${prop}: ✓ (${refValue})`);
    }
  }

  // Compare bounding box dimensions
  if (refMetrics.boundingBox && rebuildMetrics.boundingBox) {
    const widthDiff = Math.abs(refMetrics.boundingBox.width - rebuildMetrics.boundingBox.width);
    const heightDiff = Math.abs(refMetrics.boundingBox.height - rebuildMetrics.boundingBox.height);

    if (widthDiff > invariant.tolerance) {
      passed = false;
      details.push(`width: ref=${refMetrics.boundingBox.width.toFixed(0)}px rebuild=${rebuildMetrics.boundingBox.width.toFixed(0)}px`);
    }

    if (heightDiff > invariant.tolerance) {
      passed = false;
      details.push(`height: ref=${refMetrics.boundingBox.height.toFixed(0)}px rebuild=${rebuildMetrics.boundingBox.height.toFixed(0)}px`);
    }
  }

  return { passed, details };
}

async function verifyInvariants(refUrl: string, rebuildUrl: string): Promise<{ passed: boolean; results: Array<{ invariant: InvariantCheck; passed: boolean; details: string[] }> }> {
  let browser: Browser | null = null;

  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();

    // Set explicit timeouts (per Deployment Agreement)
    const refPage = await context.newPage();
    refPage.setDefaultTimeout(30000);
    refPage.setDefaultNavigationTimeout(30000);

    const rebuildPage = await context.newPage();
    rebuildPage.setDefaultTimeout(30000);
    rebuildPage.setDefaultNavigationTimeout(30000);

    // Set desktop viewport for consistent comparison
    const viewport = { width: 1280, height: 800 };
    await refPage.setViewportSize(viewport);
    await rebuildPage.setViewportSize(viewport);

    // Navigate to both pages
    console.log(`\n🔍 Loading reference: ${refUrl}`);
    await refPage.goto(refUrl, { waitUntil: 'networkidle', timeout: 30000 });

    console.log(`🔍 Loading rebuild: ${rebuildUrl}`);
    await rebuildPage.goto(rebuildUrl, { waitUntil: 'networkidle', timeout: 30000 });

    // Wait for fonts
    await refPage.waitForTimeout(500);
    await rebuildPage.waitForTimeout(500);

    // HARD-FAIL: Require data-parity="main" on rebuild page
    // This enforces body-only parity testing (FD header/footer are excluded)
    const mainElement = await rebuildPage.$(REQUIRED_MAIN_SELECTOR);
    if (!mainElement) {
      console.log(`\n❌ HARD FAIL: Required selector ${REQUIRED_MAIN_SELECTOR} not found on rebuild page`);
      console.log('   The rebuild page MUST have a <main data-parity="main"> element.');
      console.log('   This ensures parity testing only compares body content,');
      console.log('   not the FD header/footer which are intentionally different.');
      await browser.close();
      return { passed: false, results: [] };
    }
    console.log(`\n✅ Pre-flight: ${REQUIRED_MAIN_SELECTOR} found on rebuild page`);

    const results: Array<{ invariant: InvariantCheck; passed: boolean; details: string[] }> = [];
    let allPassed = true;

    for (const invariant of INVARIANTS) {
      console.log(`\n📏 Checking: ${invariant.name}`);

      const refMetrics = await getLayoutMetrics(refPage, invariant.selector, invariant.properties);
      const rebuildMetrics = await getLayoutMetrics(rebuildPage, invariant.selector, invariant.properties);

      const { passed, details } = compareMetrics(refMetrics, rebuildMetrics, invariant);

      results.push({ invariant, passed, details });

      if (!passed) {
        allPassed = false;
        console.log(`   ❌ FAILED`);
      } else {
        console.log(`   ✅ PASSED`);
      }

      for (const detail of details) {
        console.log(`      ${detail}`);
      }
    }

    await browser.close();
    browser = null;

    return { passed: allPassed, results };
  } catch (error) {
    if (browser) await browser.close();
    throw error;
  }
}

// Main execution
async function main() {
  const baseUrl = process.argv[2] || 'http://localhost:3002';

  console.log('═══════════════════════════════════════════════════════════');
  console.log('  FD LAYOUT INVARIANTS VERIFICATION');
  console.log('  Per Deployment Agreement: data-parity attribute checks');
  console.log('═══════════════════════════════════════════════════════════');

  const refUrl = `${baseUrl}/gbp/business.google.com/us/business-profile/index.html`;
  const rebuildUrl = `${baseUrl}/dev/fd-home-v3?__content=ref&__freeze=1&__maxSection=1`;

  try {
    const { passed, results } = await verifyInvariants(refUrl, rebuildUrl);

    console.log('\n═══════════════════════════════════════════════════════════');
    console.log('  RESULTS SUMMARY');
    console.log('═══════════════════════════════════════════════════════════\n');

    const passedCount = results.filter((r) => r.passed).length;
    console.log(`Passed: ${passedCount}/${results.length}`);

    if (passed) {
      console.log('\n✅ ALL LAYOUT INVARIANTS VERIFIED');
      process.exit(0);
    } else {
      console.log('\n❌ SOME LAYOUT INVARIANTS FAILED');
      process.exit(1);
    }
  } catch (error) {
    console.error('\n💥 VERIFICATION ERROR:', error);
    process.exit(1);
  }
}

main();
