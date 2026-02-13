/**
 * Pre-Render Verification Script
 *
 * Checks that every route in ALL_PRERENDER_ROUTES has a valid HTML file
 * in dist/ with unique metadata.
 *
 * Usage: npx tsx scripts/verify-prerender.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { ALL_PRERENDER_ROUTES } from '../config/routes';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const MIN_FILE_SIZE = 5 * 1024; // 5KB minimum
const DEFAULT_TITLE = 'Flood Doctor'; // Generic title to detect unrendered pages

interface CheckResult {
  route: string;
  passed: boolean;
  errors: string[];
}

function checkRoute(route: string): CheckResult {
  const errors: string[] = [];

  // Determine expected file path
  let filePath: string;
  if (route === '/') {
    filePath = path.join(DIST_DIR, 'index.html');
  } else {
    const cleanRoute = route.endsWith('/') ? route : `${route}/`;
    filePath = path.join(DIST_DIR, cleanRoute, 'index.html');
  }

  // 1. File exists
  if (!fs.existsSync(filePath)) {
    return { route, passed: false, errors: ['File does not exist'] };
  }

  const html = fs.readFileSync(filePath, 'utf-8');
  const fileSize = Buffer.byteLength(html, 'utf-8');

  // 2. Minimum size
  if (fileSize < MIN_FILE_SIZE) {
    errors.push(`File too small: ${(fileSize / 1024).toFixed(1)}KB (min ${MIN_FILE_SIZE / 1024}KB)`);
  }

  // 3. Title is unique (not generic default)
  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  if (!titleMatch) {
    errors.push('No <title> tag found');
  } else if (titleMatch[1] === DEFAULT_TITLE || titleMatch[1] === '') {
    errors.push(`Generic/empty title: "${titleMatch[1]}"`);
  }

  // 4. Canonical present
  if (!html.includes('rel="canonical"')) {
    errors.push('Missing rel="canonical"');
  }

  // 5. OG title present
  if (!html.includes('og:title')) {
    errors.push('Missing og:title');
  }

  return {
    route,
    passed: errors.length === 0,
    errors,
  };
}

function main() {
  console.log(`\n  Verifying ${ALL_PRERENDER_ROUTES.length} pre-rendered routes...\n`);

  if (!fs.existsSync(DIST_DIR)) {
    console.error('Error: dist/ directory not found. Run the build first.');
    process.exit(1);
  }

  const results = ALL_PRERENDER_ROUTES.map(checkRoute);
  const passed = results.filter(r => r.passed);
  const failed = results.filter(r => !r.passed);

  // Show failures
  if (failed.length > 0) {
    console.log('  FAILED ROUTES:\n');
    for (const f of failed) {
      console.log(`    ${f.route}`);
      for (const err of f.errors) {
        console.log(`      - ${err}`);
      }
    }
  }

  console.log(`\n  Passed: ${passed.length}/${results.length}`);

  if (failed.length > 0) {
    console.log(`  Failed: ${failed.length}/${results.length}\n`);
    process.exit(1);
  }

  console.log(`  All routes verified successfully.\n`);
}

main();
