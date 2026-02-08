/**
 * fd-home-v3-diff.ts
 * Playwright-based pixel diff for parity testing
 *
 * Per Deployment Agreement:
 * - Captures screenshots of both snapshot (ref) and rebuild
 * - Compares using pixelmatch
 * - Generates diff image highlighting discrepancies
 * - Explicit 30s timeout per action
 */

import { chromium, Browser, Page } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

interface DiffResult {
  viewport: string;
  width: number;
  height: number;
  mismatchedPixels: number;
  totalPixels: number;
  mismatchPercentage: number;
  passed: boolean;
  screenshotPaths: {
    ref: string;
    rebuild: string;
    diff: string;
  };
}

interface DiffOptions {
  refUrl: string;
  rebuildUrl: string;
  viewports: { name: string; width: number; height: number }[];
  outputDir: string;
  threshold: number; // 0-1, lower is stricter
  maxMismatchPercent: number; // Fail if mismatch exceeds this
}

const DEFAULT_VIEWPORTS = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'wide', width: 1440, height: 900 },
];

async function captureScreenshot(
  page: Page,
  url: string,
  viewport: { width: number; height: number },
  outputPath: string
): Promise<void> {
  // Set viewport
  await page.setViewportSize(viewport);

  // Navigate with explicit timeout (per Deployment Agreement)
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

  // Wait for fonts and images
  await page.waitForLoadState('domcontentloaded', { timeout: 30000 });
  await page.waitForTimeout(1000);

  // Capture full page screenshot
  await page.screenshot({
    path: outputPath,
    fullPage: false, // Match viewport only for consistent comparison
    type: 'png',
  });
}

function compareImages(img1Path: string, img2Path: string, diffPath: string, threshold: number): { mismatchedPixels: number; totalPixels: number } {
  const img1 = PNG.sync.read(fs.readFileSync(img1Path));
  const img2 = PNG.sync.read(fs.readFileSync(img2Path));

  // Ensure same dimensions (resize if needed)
  const width = Math.min(img1.width, img2.width);
  const height = Math.min(img1.height, img2.height);

  const diff = new PNG({ width, height });

  const mismatchedPixels = pixelmatch(
    img1.data,
    img2.data,
    diff.data,
    width,
    height,
    { threshold }
  );

  fs.writeFileSync(diffPath, PNG.sync.write(diff));

  return { mismatchedPixels, totalPixels: width * height };
}

async function runDiff(options: DiffOptions): Promise<DiffResult[]> {
  const results: DiffResult[] = [];
  let browser: Browser | null = null;

  try {
    // Ensure output directory exists
    fs.mkdirSync(options.outputDir, { recursive: true });

    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    // Set explicit timeouts (per Deployment Agreement)
    page.setDefaultTimeout(30000);
    page.setDefaultNavigationTimeout(30000);

    for (const viewport of options.viewports) {
      console.log(`\n📸 Capturing ${viewport.name} (${viewport.width}x${viewport.height})...`);

      const refPath = path.join(options.outputDir, `${viewport.name}-ref.png`);
      const rebuildPath = path.join(options.outputDir, `${viewport.name}-rebuild.png`);
      const diffPath = path.join(options.outputDir, `${viewport.name}-diff.png`);

      // Capture reference (snapshot)
      console.log(`   Ref: ${options.refUrl}`);
      await captureScreenshot(page, options.refUrl, { width: viewport.width, height: viewport.height }, refPath);

      // Capture rebuild
      console.log(`   Rebuild: ${options.rebuildUrl}`);
      await captureScreenshot(page, options.rebuildUrl, { width: viewport.width, height: viewport.height }, rebuildPath);

      // Compare
      console.log('   Comparing...');
      const { mismatchedPixels, totalPixels } = compareImages(refPath, rebuildPath, diffPath, options.threshold);
      const mismatchPercentage = (mismatchedPixels / totalPixels) * 100;
      const passed = mismatchPercentage <= options.maxMismatchPercent;

      results.push({
        viewport: viewport.name,
        width: viewport.width,
        height: viewport.height,
        mismatchedPixels,
        totalPixels,
        mismatchPercentage,
        passed,
        screenshotPaths: { ref: refPath, rebuild: rebuildPath, diff: diffPath },
      });

      console.log(`   Mismatch: ${mismatchPercentage.toFixed(2)}% ${passed ? '✅' : '❌'}`);
    }

    await browser.close();
    browser = null;

    return results;
  } catch (error) {
    if (browser) await browser.close();
    throw error;
  }
}

// Main execution
async function main() {
  const baseUrl = process.argv[2] || 'http://localhost:3002';
  const maxMismatch = parseFloat(process.argv[3] || '5'); // Default 5% tolerance
  const outputDir = path.resolve(__dirname, '../../.parity-output');

  console.log('═══════════════════════════════════════════════════════════');
  console.log('  FD HOME V3 PIXEL DIFF');
  console.log('  Per Deployment Agreement: Gate-based parity verification');
  console.log('═══════════════════════════════════════════════════════════');
  console.log(`\n🔗 Base URL: ${baseUrl}`);
  console.log(`📊 Max mismatch: ${maxMismatch}%`);
  console.log(`📁 Output: ${outputDir}`);

  const options: DiffOptions = {
    // Reference: GBP snapshot served via iframe in parity harness
    refUrl: `${baseUrl}/gbp/business.google.com/us/business-profile/index.html`,
    // Rebuild: FD Home V3 with freeze mode
    rebuildUrl: `${baseUrl}/dev/fd-home-v3?__content=ref&__freeze=1&__maxSection=1`,
    viewports: DEFAULT_VIEWPORTS,
    outputDir,
    threshold: 0.1, // Pixel matching threshold
    maxMismatchPercent: maxMismatch,
  };

  try {
    const results = await runDiff(options);

    console.log('\n═══════════════════════════════════════════════════════════');
    console.log('  RESULTS SUMMARY');
    console.log('═══════════════════════════════════════════════════════════\n');

    let allPassed = true;
    for (const result of results) {
      const status = result.passed ? '✅ PASS' : '❌ FAIL';
      console.log(`${status} ${result.viewport}: ${result.mismatchPercentage.toFixed(2)}% mismatch`);
      console.log(`      Diff: ${result.screenshotPaths.diff}`);
      if (!result.passed) allPassed = false;
    }

    console.log('\n───────────────────────────────────────────────────────────');
    if (allPassed) {
      console.log('✅ ALL VIEWPORTS PASSED PARITY CHECK');
      process.exit(0);
    } else {
      console.log('❌ SOME VIEWPORTS FAILED PARITY CHECK');
      console.log(`   Review diff images in: ${outputDir}`);
      process.exit(1);
    }
  } catch (error) {
    console.error('\n💥 DIFF ERROR:', error);
    process.exit(1);
  }
}

main();
