/**
 * fd-home-v3-postfix-sweep.ts
 * POST-FIX verification: MAIN-only parity sweep at 1280×900 and 375×812
 */

import { chromium, Browser, Page } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface SectionMetrics {
  name: string;
  selector: string;
  snapshotHeight: number;
  rebuildHeight: number;
  delta: number;
  exists: { snapshot: boolean; rebuild: boolean };
}

interface ViewportResult {
  viewport: string;
  mainHeightDelta: number;
  sections: SectionMetrics[];
}

const VIEWPORTS = [
  { name: 'desktop', width: 1280, height: 900 },
  { name: 'mobile', width: 375, height: 812 },
];

const SECTIONS = [
  { name: 'hero', selector: '[data-parity="hero"]' },
  { name: 'tiles', selector: '[data-parity="tiles"]' },
  { name: 'atl-light', selector: '[data-parity="animated-text-list"][data-section-id="atl-first-impression"]' },
  { name: 'atl-dark', selector: '[data-parity="animated-text-list"][data-section-id="atl-connect-customers"]' },
  { name: 'scrolling-cards', selector: '[data-parity="scrolling-cards"]' },
  { name: 'twoup', selector: '[data-parity="twoup"]' },
  { name: 'case-studies', selector: '[data-parity="case-studies"]' },
  { name: 'cta-header', selector: '[data-parity="cta-header"]' },
  { name: 'steps', selector: '[data-parity="steps"]' },
  { name: 'faq', selector: '[data-parity="faq"]' },
];

// Snapshot selectors (GBP classes)
const SNAPSHOT_SELECTORS: Record<string, string> = {
  'hero': 'section.ion-hero',
  'tiles': '.modules-lib__page > section.ion-standard-3up-stacked-list:nth-of-type(2)',
  'atl-light': 'section.ion-animated-text-list--fill-light',
  'atl-dark': 'section.ion-animated-text-list--fill-dark',
  'scrolling-cards': 'section.ion-scrolling-3up-cards-list',
  'twoup': 'section.ion-twoup',
  'case-studies': 'section.ion-case-study-module',
  'cta-header': 'section.ion-background--fill-white:has(h2)',
  'steps': '.modules-lib__page > section.ion-standard-3up-stacked-list:nth-of-type(9)',
  'faq': 'section.ion-accordion',
};

async function getElementHeight(page: Page, selector: string): Promise<{ height: number; exists: boolean }> {
  const el = await page.$(selector);
  if (!el) return { height: 0, exists: false };
  const box = await el.boundingBox();
  return { height: box ? Math.round(box.height) : 0, exists: true };
}

async function getMainHeight(page: Page, isSnapshot: boolean): Promise<number> {
  const selector = isSnapshot ? '.modules-lib__page' : '[data-parity="main"]';
  const el = await page.$(selector);
  if (!el) return 0;
  const box = await el.boundingBox();
  return box ? Math.round(box.height) : 0;
}

async function runViewportSweep(
  browser: Browser,
  viewport: { name: string; width: number; height: number }
): Promise<ViewportResult> {
  const context = await browser.newContext();
  const snapshotPage = await context.newPage();
  const rebuildPage = await context.newPage();

  await snapshotPage.setViewportSize({ width: viewport.width, height: viewport.height });
  await rebuildPage.setViewportSize({ width: viewport.width, height: viewport.height });

  // Navigate
  await snapshotPage.goto('http://localhost:3002/gbp/business.google.com/us/business-profile/index.html', {
    waitUntil: 'networkidle',
    timeout: 30000,
  });
  await rebuildPage.goto('http://localhost:3002/dev/fd-home-v3?__content=ref&__freeze=1', {
    waitUntil: 'networkidle',
    timeout: 30000,
  });

  // Wait for render
  await snapshotPage.waitForTimeout(500);
  await rebuildPage.waitForTimeout(500);

  // Get MAIN heights
  const snapshotMainHeight = await getMainHeight(snapshotPage, true);
  const rebuildMainHeight = await getMainHeight(rebuildPage, false);

  // Get section metrics
  const sections: SectionMetrics[] = [];
  for (const section of SECTIONS) {
    const snapshotSelector = SNAPSHOT_SELECTORS[section.name] || section.selector;
    const snapshotMetrics = await getElementHeight(snapshotPage, snapshotSelector);
    const rebuildMetrics = await getElementHeight(rebuildPage, section.selector);

    sections.push({
      name: section.name,
      selector: section.selector,
      snapshotHeight: snapshotMetrics.height,
      rebuildHeight: rebuildMetrics.height,
      delta: rebuildMetrics.height - snapshotMetrics.height,
      exists: { snapshot: snapshotMetrics.exists, rebuild: rebuildMetrics.exists },
    });
  }

  // Take screenshots
  const artifactsDir = path.join(__dirname, '../../artifacts/parity/fd-home-v3');
  await snapshotPage.screenshot({
    path: path.join(artifactsDir, `snapshot-${viewport.name}.png`),
    fullPage: true,
  });
  await rebuildPage.screenshot({
    path: path.join(artifactsDir, `rebuild-${viewport.name}.png`),
    fullPage: true,
  });

  await context.close();

  return {
    viewport: `${viewport.width}×${viewport.height}`,
    mainHeightDelta: rebuildMainHeight - snapshotMainHeight,
    sections,
  };
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const results: ViewportResult[] = [];

  console.log('╔═══════════════════════════════════════════════════════════════════════════════════════╗');
  console.log('║  POST-FIX PARITY SWEEP                                                                ║');
  console.log('╚═══════════════════════════════════════════════════════════════════════════════════════╝\n');

  for (const viewport of VIEWPORTS) {
    console.log(`\n📐 Testing viewport: ${viewport.width}×${viewport.height}`);
    const result = await runViewportSweep(browser, viewport);
    results.push(result);
  }

  // Output results
  console.log('\n╔═══════════════════════════════════════════════════════════════════════════════════════╗');
  console.log('║  STRUCTURAL HEIGHT DELTAS TABLE                                                       ║');
  console.log('╚═══════════════════════════════════════════════════════════════════════════════════════╝\n');

  console.log('| Section          | Desktop (1280×900) | Mobile (375×812) |');
  console.log('|------------------|---------------------|-------------------|');

  const desktopResult = results.find(r => r.viewport === '1280×900')!;
  const mobileResult = results.find(r => r.viewport === '375×812')!;

  // MAIN delta
  const desktopMainDelta = desktopResult.mainHeightDelta;
  const mobileMainDelta = mobileResult.mainHeightDelta;
  console.log(`| MAIN             | ${desktopMainDelta >= 0 ? '+' : ''}${desktopMainDelta}px${' '.repeat(Math.max(0, 14 - String(desktopMainDelta).length))} | ${mobileMainDelta >= 0 ? '+' : ''}${mobileMainDelta}px${' '.repeat(Math.max(0, 12 - String(mobileMainDelta).length))} |`);

  // Section deltas
  for (const section of SECTIONS) {
    const desktopSection = desktopResult.sections.find(s => s.name === section.name)!;
    const mobileSection = mobileResult.sections.find(s => s.name === section.name)!;

    const dDelta = desktopSection.delta;
    const mDelta = mobileSection.delta;
    const dStatus = !desktopSection.exists.rebuild ? 'MISSING' : `${dDelta >= 0 ? '+' : ''}${dDelta}px`;
    const mStatus = !mobileSection.exists.rebuild ? 'MISSING' : `${mDelta >= 0 ? '+' : ''}${mDelta}px`;

    const name = section.name.padEnd(16);
    console.log(`| ${name} | ${dStatus.padEnd(19)} | ${mStatus.padEnd(17)} |`);
  }

  // Summary
  console.log('\n╔═══════════════════════════════════════════════════════════════════════════════════════╗');
  console.log('║  SUMMARY                                                                              ║');
  console.log('╚═══════════════════════════════════════════════════════════════════════════════════════╝\n');

  const desktopPass = Math.abs(desktopMainDelta) <= 100;
  const mobilePass = Math.abs(mobileMainDelta) <= 200;

  console.log(`Desktop MAIN delta: ${desktopMainDelta}px ${desktopPass ? '✅ PASS (<100px)' : '❌ FAIL (>100px)'}`);
  console.log(`Mobile MAIN delta:  ${mobileMainDelta}px ${mobilePass ? '✅ PASS (<200px)' : '❌ FAIL (>200px)'}`);

  // Key fixes check
  console.log('\n--- KEY FIX VERIFICATION ---');
  const scrollingCardsDesktop = desktopResult.sections.find(s => s.name === 'scrolling-cards')!;
  const atlLightDesktop = desktopResult.sections.find(s => s.name === 'atl-light')!;
  const atlDarkDesktop = desktopResult.sections.find(s => s.name === 'atl-dark')!;

  console.log(`scrolling-cards: ${scrollingCardsDesktop.rebuildHeight}px (snapshot: ${scrollingCardsDesktop.snapshotHeight}px, delta: ${scrollingCardsDesktop.delta}px)`);
  console.log(`atl-light:       ${atlLightDesktop.rebuildHeight}px (snapshot: ${atlLightDesktop.snapshotHeight}px, delta: ${atlLightDesktop.delta}px)`);
  console.log(`atl-dark:        ${atlDarkDesktop.rebuildHeight}px (snapshot: ${atlDarkDesktop.snapshotHeight}px, delta: ${atlDarkDesktop.delta}px)`);

  // Card metrics verification
  console.log('\n--- SCROLLING-CARDS CARD METRICS (Desktop) ---');
  const context2 = await browser.newContext();
  const snapshotPage2 = await context2.newPage();
  const rebuildPage2 = await context2.newPage();
  await snapshotPage2.setViewportSize({ width: 1280, height: 900 });
  await rebuildPage2.setViewportSize({ width: 1280, height: 900 });
  await snapshotPage2.goto('http://localhost:3002/gbp/business.google.com/us/business-profile/index.html', { waitUntil: 'networkidle' });
  await rebuildPage2.goto('http://localhost:3002/dev/fd-home-v3?__content=ref&__freeze=1', { waitUntil: 'networkidle' });

  // Snapshot cards
  const snapshotCards = await snapshotPage2.$$('section.ion-scrolling-3up-cards-list .ion-scrolling-3up-cards-list__card');
  console.log(`\nSnapshot card count: ${snapshotCards.length}`);
  for (let i = 0; i < snapshotCards.length; i++) {
    const box = await snapshotCards[i].boundingBox();
    console.log(`  Card ${i}: ${box?.width}x${box?.height}px`);
  }

  // Rebuild cards
  const rebuildCards = await rebuildPage2.$$('[data-parity="scrolling-cards"] .fd-gbp-body-v3__card');
  console.log(`\nRebuild card count: ${rebuildCards.length}`);
  for (let i = 0; i < rebuildCards.length; i++) {
    const box = await rebuildCards[i].boundingBox();
    console.log(`  Card ${i}: ${box?.width}x${box?.height}px`);
  }
  await context2.close();
  await browser.close();

  // Save JSON results
  const artifactsDir = path.join(__dirname, '../../artifacts/parity/fd-home-v3');
  fs.writeFileSync(
    path.join(artifactsDir, 'postfix-results.json'),
    JSON.stringify({ timestamp: new Date().toISOString(), results }, null, 2)
  );

  console.log(`\nArtifacts saved to: ${artifactsDir}`);
}

main().catch(console.error);
