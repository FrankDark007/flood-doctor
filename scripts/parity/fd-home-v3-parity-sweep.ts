/**
 * fd-home-v3-parity-sweep.ts
 * Comprehensive MAIN-only parity validation sweep
 *
 * Requirements:
 * 1. MAIN-only compare enforced (clips to [data-parity="main"])
 * 2. Animation disabled via CSS injection + prefers-reduced-motion
 * 3. Multi-viewport pixel diff with per-viewport thresholds
 * 4. Structural bounding box comparison with tolerance zones
 */

import { chromium, Browser, Page } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ═══════════════════════════════════════════════════════════════════════════
// CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

// Reference (GBP snapshot) uses #page-content, rebuild uses [data-parity="main"]
const REF_MAIN_SELECTOR = 'main#page-content';
const REBUILD_MAIN_SELECTOR = '[data-parity="main"]';

const VIEWPORTS = [
  { name: '375x812', width: 375, height: 812 },
  { name: '768x900', width: 768, height: 900 },
  { name: '1024x900', width: 1024, height: 900 },
  { name: '1280x900', width: 1280, height: 900 },
  { name: '1440x900', width: 1440, height: 900 },
];

// Per-viewport pixel diff thresholds
const PIXEL_THRESHOLDS: Record<string, number> = {
  '375x812': 3.0,
  '768x900': 2.5,
  '1024x900': 2.0,
  '1280x900': 2.0,
  '1440x900': 2.0,
};

// Section anchors for structural parity
// REF uses GBP's ion-* class selectors, REBUILD uses data-parity attributes
const SECTION_ANCHORS = [
  {
    name: 'main',
    refSelector: 'main#page-content',
    rebuildSelector: '[data-parity="main"]',
  },
  {
    name: 'hero',
    refSelector: 'section.ion-hero',
    rebuildSelector: '[data-parity="hero"]',
  },
  {
    name: 'tiles',
    refSelector: 'section.ion-standard-3up-stacked-list:first-of-type',
    rebuildSelector: '[data-parity="tiles"]',
  },
  {
    name: 'atl1',
    refSelector: 'section.ion-animated-text-list--fill-light',
    rebuildSelector: '[data-parity="animated-text-list"]:first-of-type',
  },
  {
    name: 'atl2',
    refSelector: 'section.ion-animated-text-list--fill-dark',
    rebuildSelector: '[data-parity="animated-text-list"]:last-of-type',
  },
  {
    name: 'scrolling-cards',
    refSelector: 'section.ion-scrolling-3up-cards-list',
    rebuildSelector: '[data-parity="scrolling-cards"]',
  },
  {
    name: 'twoup',
    refSelector: 'section.ion-twoup',
    rebuildSelector: '[data-parity="twoup"]',
  },
  {
    name: 'case-studies',
    refSelector: 'section.ion-case-study-module',
    rebuildSelector: '[data-parity="case-studies"]',
  },
  {
    name: 'cta-header',
    refSelector: 'section.ion-section-header',
    rebuildSelector: '[data-parity="cta-header"]',
  },
  {
    name: 'steps',
    refSelector: 'section.ion-standard-3up-stacked-list:last-of-type',
    rebuildSelector: '[data-parity="steps"]',
  },
  {
    name: 'faq',
    refSelector: 'section.ion-accordion',
    rebuildSelector: '[data-parity="faq"]',
  },
];

// Structural tolerance: 6px base, 8px if within 40px of viewport edge
const BASE_TOLERANCE = 6;
const EDGE_TOLERANCE = 8;
const EDGE_THRESHOLD = 40;

// Aspect ratio tolerance for media boxes
const ASPECT_RATIO_TOLERANCE = 0.02; // 2%

// CSS to disable all animations
const DISABLE_ANIMATIONS_CSS = `
  *, *::before, *::after {
    animation-duration: 0s !important;
    animation-delay: 0s !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
    scroll-behavior: auto !important;
  }
  [data-parity] * {
    animation: none !important;
    transition: none !important;
  }
`;

// ═══════════════════════════════════════════════════════════════════════════
// INTERFACES
// ═══════════════════════════════════════════════════════════════════════════

interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface PixelDiffResult {
  viewport: string;
  mismatchPixels: number;
  totalPixels: number;
  diffPercent: number;
  threshold: number;
  passed: boolean;
  paths: { ref: string; rebuild: string; diff: string };
}

interface StructuralResult {
  anchor: string;
  refBox: BoundingBox | null;
  rebuildBox: BoundingBox | null;
  widthDelta: number;
  heightDelta: number;
  xDelta: number;
  yDelta: number;
  tolerance: number;
  passed: boolean;
  aspectRatioDelta?: number;
  aspectRatioPassed?: boolean;
}

interface SweepResults {
  mainEnforced: boolean;
  pixelDiff: PixelDiffResult[];
  structural: StructuralResult[];
  passed: boolean;
}

// ═══════════════════════════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════════════════════════

async function injectDisableAnimationsCSS(page: Page): Promise<void> {
  await page.addStyleTag({ content: DISABLE_ANIMATIONS_CSS });
}

async function waitForPageReady(page: Page): Promise<void> {
  await page.waitForLoadState('networkidle', { timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);
}

async function getMainBoundingBox(page: Page, selector: string): Promise<BoundingBox | null> {
  const element = await page.$(selector);
  if (!element) return null;
  return await element.boundingBox();
}

async function getSectionBoundingBox(page: Page, selector: string): Promise<BoundingBox | null> {
  const element = await page.$(selector);
  if (!element) return null;
  return await element.boundingBox();
}

async function screenshotMain(page: Page, outputPath: string, selector: string): Promise<BoundingBox | null> {
  const mainBox = await getMainBoundingBox(page, selector);
  if (!mainBox) {
    console.error(`   ❌ MAIN element not found: ${selector}`);
    return null;
  }

  await page.screenshot({
    path: outputPath,
    clip: {
      x: mainBox.x,
      y: mainBox.y,
      width: mainBox.width,
      height: mainBox.height,
    },
    type: 'png',
  });

  return mainBox;
}

function compareImages(
  img1Path: string,
  img2Path: string,
  diffPath: string,
  threshold: number = 0.1
): { mismatchPixels: number; totalPixels: number; sizeDiff: boolean } {
  const img1 = PNG.sync.read(fs.readFileSync(img1Path));
  const img2 = PNG.sync.read(fs.readFileSync(img2Path));

  // Use the larger dimensions and pad/crop as needed
  const width = Math.max(img1.width, img2.width);
  const height = Math.max(img1.height, img2.height);

  // Create normalized buffers
  const normalize = (img: PNG, w: number, h: number): Buffer => {
    const buf = Buffer.alloc(w * h * 4, 255); // Fill with white
    for (let y = 0; y < Math.min(img.height, h); y++) {
      for (let x = 0; x < Math.min(img.width, w); x++) {
        const srcIdx = (y * img.width + x) * 4;
        const dstIdx = (y * w + x) * 4;
        buf[dstIdx] = img.data[srcIdx];
        buf[dstIdx + 1] = img.data[srcIdx + 1];
        buf[dstIdx + 2] = img.data[srcIdx + 2];
        buf[dstIdx + 3] = img.data[srcIdx + 3];
      }
    }
    return buf;
  };

  const buf1 = normalize(img1, width, height);
  const buf2 = normalize(img2, width, height);

  const diff = new PNG({ width, height });

  const mismatchPixels = pixelmatch(
    buf1,
    buf2,
    diff.data,
    width,
    height,
    { threshold }
  );

  fs.writeFileSync(diffPath, PNG.sync.write(diff));

  const sizeDiff = img1.width !== img2.width || img1.height !== img2.height;
  if (sizeDiff) {
    console.log(`   ⚠️  Size mismatch: ref ${img1.width}x${img1.height} vs rebuild ${img2.width}x${img2.height}`);
  }

  return { mismatchPixels, totalPixels: width * height, sizeDiff };
}

function getTolerance(box: BoundingBox | null, viewportWidth: number): number {
  if (!box) return BASE_TOLERANCE;

  // Check if within 40px of left or right edge
  const nearLeftEdge = box.x < EDGE_THRESHOLD;
  const nearRightEdge = (viewportWidth - (box.x + box.width)) < EDGE_THRESHOLD;

  return (nearLeftEdge || nearRightEdge) ? EDGE_TOLERANCE : BASE_TOLERANCE;
}

function getAspectRatio(box: BoundingBox | null): number | null {
  if (!box || box.height === 0) return null;
  return box.width / box.height;
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN SWEEP FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

async function runPixelDiff(
  browser: Browser,
  refUrl: string,
  rebuildUrl: string,
  outputDir: string
): Promise<PixelDiffResult[]> {
  const results: PixelDiffResult[] = [];

  for (const viewport of VIEWPORTS) {
    console.log(`\n📸 Pixel diff: ${viewport.name}`);

    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      reducedMotion: 'reduce',
    });

    const page = await context.newPage();
    page.setDefaultTimeout(30000);
    page.setDefaultNavigationTimeout(30000);

    const refPath = path.join(outputDir, `${viewport.name}-ref.png`);
    const rebuildPath = path.join(outputDir, `${viewport.name}-rebuild.png`);
    const diffPath = path.join(outputDir, `${viewport.name}-diff.png`);

    // Capture reference (GBP snapshot) - uses #page-content
    console.log(`   Loading ref: ${refUrl}`);
    await page.goto(refUrl, { waitUntil: 'networkidle', timeout: 30000 });
    await injectDisableAnimationsCSS(page);
    await waitForPageReady(page);
    const refBox = await screenshotMain(page, refPath, REF_MAIN_SELECTOR);

    if (!refBox) {
      results.push({
        viewport: viewport.name,
        mismatchPixels: 0,
        totalPixels: 0,
        diffPercent: 100,
        threshold: PIXEL_THRESHOLDS[viewport.name],
        passed: false,
        paths: { ref: refPath, rebuild: rebuildPath, diff: diffPath },
      });
      await context.close();
      continue;
    }

    // Capture rebuild (FD home v3) - uses [data-parity="main"]
    console.log(`   Loading rebuild: ${rebuildUrl}`);
    await page.goto(rebuildUrl, { waitUntil: 'networkidle', timeout: 30000 });
    await injectDisableAnimationsCSS(page);
    await waitForPageReady(page);
    const rebuildBox = await screenshotMain(page, rebuildPath, REBUILD_MAIN_SELECTOR);

    if (!rebuildBox) {
      results.push({
        viewport: viewport.name,
        mismatchPixels: 0,
        totalPixels: 0,
        diffPercent: 100,
        threshold: PIXEL_THRESHOLDS[viewport.name],
        passed: false,
        paths: { ref: refPath, rebuild: rebuildPath, diff: diffPath },
      });
      await context.close();
      continue;
    }

    // Compare
    const { mismatchPixels, totalPixels } = compareImages(refPath, rebuildPath, diffPath);
    const diffPercent = (mismatchPixels / totalPixels) * 100;
    const threshold = PIXEL_THRESHOLDS[viewport.name];
    const passed = diffPercent <= threshold;

    console.log(`   Diff: ${diffPercent.toFixed(2)}% (threshold: ${threshold}%) ${passed ? '✅' : '❌'}`);

    results.push({
      viewport: viewport.name,
      mismatchPixels,
      totalPixels,
      diffPercent,
      threshold,
      passed,
      paths: { ref: refPath, rebuild: rebuildPath, diff: diffPath },
    });

    await context.close();
  }

  return results;
}

async function runStructuralParity(
  browser: Browser,
  refUrl: string,
  rebuildUrl: string,
  viewportWidth: number = 1280
): Promise<StructuralResult[]> {
  const results: StructuralResult[] = [];

  const context = await browser.newContext({
    viewport: { width: viewportWidth, height: 900 },
    reducedMotion: 'reduce',
  });

  const refPage = await context.newPage();
  const rebuildPage = await context.newPage();
  refPage.setDefaultTimeout(30000);
  rebuildPage.setDefaultTimeout(30000);

  // Load both pages
  console.log(`\n📏 Structural parity @ ${viewportWidth}px`);
  console.log(`   Loading ref: ${refUrl}`);
  await refPage.goto(refUrl, { waitUntil: 'networkidle', timeout: 30000 });
  await injectDisableAnimationsCSS(refPage);
  await waitForPageReady(refPage);

  console.log(`   Loading rebuild: ${rebuildUrl}`);
  await rebuildPage.goto(rebuildUrl, { waitUntil: 'networkidle', timeout: 30000 });
  await injectDisableAnimationsCSS(rebuildPage);
  await waitForPageReady(rebuildPage);

  // Check each anchor
  for (const anchor of SECTION_ANCHORS) {
    const refBox = await getSectionBoundingBox(refPage, anchor.refSelector);
    const rebuildBox = await getSectionBoundingBox(rebuildPage, anchor.rebuildSelector);

    const tolerance = getTolerance(rebuildBox, viewportWidth);

    let widthDelta = 0;
    let heightDelta = 0;
    let xDelta = 0;
    let yDelta = 0;
    let passed = true;
    let aspectRatioDelta: number | undefined;
    let aspectRatioPassed: boolean | undefined;

    if (!refBox) {
      console.log(`   ⚠️  ${anchor.name}: ref not found`);
      passed = false;
    } else if (!rebuildBox) {
      console.log(`   ⚠️  ${anchor.name}: rebuild not found`);
      passed = false;
    } else {
      widthDelta = Math.abs(refBox.width - rebuildBox.width);
      heightDelta = Math.abs(refBox.height - rebuildBox.height);
      xDelta = Math.abs(refBox.x - rebuildBox.x);
      yDelta = Math.abs(refBox.y - rebuildBox.y);

      const maxDelta = Math.max(widthDelta, heightDelta);
      passed = maxDelta <= tolerance;

      // Aspect ratio check for media-containing sections
      if (['hero', 'scrolling-cards', 'twoup', 'case-studies'].includes(anchor.name)) {
        const refAR = getAspectRatio(refBox);
        const rebuildAR = getAspectRatio(rebuildBox);
        if (refAR && rebuildAR) {
          aspectRatioDelta = Math.abs(refAR - rebuildAR) / refAR;
          aspectRatioPassed = aspectRatioDelta <= ASPECT_RATIO_TOLERANCE;
          if (!aspectRatioPassed) passed = false;
        }
      }

      const status = passed ? '✅' : '❌';
      console.log(`   ${status} ${anchor.name}: w±${widthDelta.toFixed(0)} h±${heightDelta.toFixed(0)} (tol: ${tolerance}px)`);
    }

    results.push({
      anchor: anchor.name,
      refBox,
      rebuildBox,
      widthDelta,
      heightDelta,
      xDelta,
      yDelta,
      tolerance,
      passed,
      aspectRatioDelta,
      aspectRatioPassed,
    });
  }

  await context.close();
  return results;
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN EXECUTION
// ═══════════════════════════════════════════════════════════════════════════

async function main(): Promise<void> {
  const baseUrl = process.argv[2] || 'http://localhost:3002';
  const outputDir = path.resolve(__dirname, '../../artifacts/parity/fd-home-v3');

  console.log('═══════════════════════════════════════════════════════════════════');
  console.log('  FD HOME V3 — MAIN-ONLY PARITY SWEEP');
  console.log('  Clips to [data-parity="main"], excludes header/footer');
  console.log('═══════════════════════════════════════════════════════════════════');
  console.log(`\n🔗 Base URL: ${baseUrl}`);
  console.log(`📁 Output: ${outputDir}`);

  // URLs
  // Reference: Direct GBP snapshot (not the iframe wrapper)
  const refUrl = `${baseUrl}/gbp/business.google.com/us/business-profile/index.html`;
  const rebuildUrl = `${baseUrl}/dev/fd-home-v3?__content=ref&__freeze=1&__textIndex=0`;

  console.log(`\n📍 Reference: ${refUrl}`);
  console.log(`📍 Rebuild: ${rebuildUrl}`);

  // Ensure output directory
  fs.mkdirSync(outputDir, { recursive: true });

  let browser: Browser | null = null;

  try {
    browser = await chromium.launch({ headless: true });

    // 1) Verify MAIN-only enforcement
    console.log('\n───────────────────────────────────────────────────────────────────');
    console.log('1️⃣  MAIN-ONLY ENFORCEMENT CHECK');
    console.log('───────────────────────────────────────────────────────────────────');

    const checkContext = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const checkPage = await checkContext.newPage();

    // Check ref has main
    await checkPage.goto(refUrl, { waitUntil: 'networkidle', timeout: 30000 });
    const refMainElement = await checkPage.$(REF_MAIN_SELECTOR);
    if (!refMainElement) {
      console.log(`\n❌ HARD FAIL: ${REF_MAIN_SELECTOR} not found on reference page`);
      console.log('   Reference GBP snapshot must have main#page-content.');
      process.exit(1);
    }
    console.log(`✅ Reference: ${REF_MAIN_SELECTOR} found`);

    // Check rebuild has main
    await checkPage.goto(rebuildUrl, { waitUntil: 'networkidle', timeout: 30000 });
    const rebuildMainElement = await checkPage.$(REBUILD_MAIN_SELECTOR);
    if (!rebuildMainElement) {
      console.log(`\n❌ HARD FAIL: ${REBUILD_MAIN_SELECTOR} not found on rebuild page`);
      console.log('   Parity testing cannot proceed without MAIN container.');
      process.exit(1);
    }
    console.log(`✅ Rebuild: ${REBUILD_MAIN_SELECTOR} found — header/footer excluded`);
    await checkContext.close();

    // 2) Pixel diff
    console.log('\n───────────────────────────────────────────────────────────────────');
    console.log('2️⃣  PIXEL DIFF (REF content only)');
    console.log('───────────────────────────────────────────────────────────────────');

    const pixelResults = await runPixelDiff(browser, refUrl, rebuildUrl, outputDir);

    // 3) Structural parity
    console.log('\n───────────────────────────────────────────────────────────────────');
    console.log('3️⃣  STRUCTURAL PARITY (bounding boxes)');
    console.log('───────────────────────────────────────────────────────────────────');

    const structuralResults = await runStructuralParity(browser, refUrl, rebuildUrl, 1280);

    await browser.close();
    browser = null;

    // ═════════════════════════════════════════════════════════════════════════
    // OUTPUT RESULTS
    // ═════════════════════════════════════════════════════════════════════════

    console.log('\n═══════════════════════════════════════════════════════════════════');
    console.log('  RESULTS');
    console.log('═══════════════════════════════════════════════════════════════════');

    // Pixel diff table
    console.log('\n📊 PIXEL DIFF RESULTS');
    console.log('┌─────────────┬───────────┬───────────┬────────┐');
    console.log('│ Viewport    │ Diff %    │ Threshold │ Status │');
    console.log('├─────────────┼───────────┼───────────┼────────┤');
    for (const r of pixelResults) {
      const status = r.passed ? '✅ PASS' : '❌ FAIL';
      console.log(`│ ${r.viewport.padEnd(11)} │ ${r.diffPercent.toFixed(2).padStart(7)}% │ ${r.threshold.toFixed(1).padStart(7)}% │ ${status} │`);
    }
    console.log('└─────────────┴───────────┴───────────┴────────┘');

    // Structural parity table
    console.log('\n📐 STRUCTURAL PARITY (1280px)');
    console.log('┌────────────────────┬─────────┬─────────┬─────────┬────────┐');
    console.log('│ Anchor             │ W delta │ H delta │ Tol     │ Status │');
    console.log('├────────────────────┼─────────┼─────────┼─────────┼────────┤');
    for (const r of structuralResults) {
      const status = r.passed ? '✅ PASS' : '❌ FAIL';
      const wd = r.refBox && r.rebuildBox ? `${r.widthDelta.toFixed(0)}px`.padStart(5) : 'N/A  ';
      const hd = r.refBox && r.rebuildBox ? `${r.heightDelta.toFixed(0)}px`.padStart(5) : 'N/A  ';
      console.log(`│ ${r.anchor.padEnd(18)} │ ${wd.padStart(7)} │ ${hd.padStart(7)} │ ${r.tolerance}px`.padEnd(9) + ` │ ${status} │`);
    }
    console.log('└────────────────────┴─────────┴─────────┴─────────┴────────┘');

    // Artifacts list
    console.log('\n📁 ARTIFACTS');
    const artifacts = fs.readdirSync(outputDir).map(f => path.join(outputDir, f));
    for (const a of artifacts) {
      console.log(`   ${a}`);
    }

    // Overall pass/fail
    const allPixelPassed = pixelResults.every(r => r.passed);
    const allStructuralPassed = structuralResults.every(r => r.passed);
    const overallPassed = allPixelPassed && allStructuralPassed;

    console.log('\n───────────────────────────────────────────────────────────────────');
    if (overallPassed) {
      console.log('✅ ALL PARITY GATES PASSED');
      process.exit(0);
    } else {
      console.log('❌ SOME PARITY GATES FAILED');

      // Identify top 3 mismatches
      console.log('\n🔍 TOP MISMATCHES:');

      // Collect failures
      const failures: { type: string; name: string; delta: number; details: string }[] = [];

      for (const r of pixelResults) {
        if (!r.passed) {
          failures.push({
            type: 'pixel',
            name: r.viewport,
            delta: r.diffPercent - r.threshold,
            details: `${r.diffPercent.toFixed(2)}% diff (threshold: ${r.threshold}%)`,
          });
        }
      }

      for (const r of structuralResults) {
        if (!r.passed && r.refBox && r.rebuildBox) {
          const maxDelta = Math.max(r.widthDelta, r.heightDelta);
          failures.push({
            type: 'structural',
            name: r.anchor,
            delta: maxDelta - r.tolerance,
            details: `w±${r.widthDelta.toFixed(0)}px h±${r.heightDelta.toFixed(0)}px (tol: ${r.tolerance}px)`,
          });
        }
      }

      // Sort by delta descending, take top 3
      failures.sort((a, b) => b.delta - a.delta);
      const top3 = failures.slice(0, 3);

      for (let i = 0; i < top3.length; i++) {
        const f = top3[i];
        console.log(`   ${i + 1}. [${f.type}] ${f.name}: ${f.details}`);
      }

      console.log('\n💡 MINIMAL FIX PROPOSALS (DO NOT IMPLEMENT YET):');
      for (const f of top3) {
        if (f.type === 'pixel') {
          console.log(`   • ${f.name}: Check font-family, line-height, letter-spacing in MAIN sections`);
        } else {
          console.log(`   • ${f.name}: Audit padding/margin tokens, check responsive breakpoint CSS`);
        }
      }

      process.exit(1);
    }
  } catch (error) {
    if (browser) await browser.close();
    console.error('\n💥 SWEEP ERROR:', error);
    process.exit(1);
  }
}

main();
