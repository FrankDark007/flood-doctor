/**
 * Static Pre-Render Engine
 *
 * Post-build step: serves dist/ locally, renders each route with Playwright,
 * waits for __PRERENDER_READY__, extracts HTML, writes to dist/{route}/index.html.
 *
 * Usage: npx tsx scripts/prerender.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import { chromium, type Browser, type Page } from 'playwright';
import sirv from 'sirv';
import { ALL_PRERENDER_ROUTES } from '../config/routes';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const PORT = 4173;
const CONCURRENCY = 5;
const TIMEOUT_MS = 15_000;
const PRODUCTION_ORIGIN = 'https://flood.doctor';

// ── Serve dist/ with SPA fallback ───────────────────────────────────────────

function startServer(): Promise<http.Server> {
  return new Promise((resolve, reject) => {
    const handler = sirv(DIST_DIR, { single: true, dev: true });
    const server = http.createServer(handler);
    server.on('error', (err: NodeJS.ErrnoException) => {
      if (err.code === 'EADDRINUSE') {
        reject(new Error(`Port ${PORT} is already in use. Stop the process using it and retry.`));
      } else {
        reject(err);
      }
    });
    server.listen(PORT, () => resolve(server));
  });
}

// ── Render a single route ───────────────────────────────────────────────────

interface RenderResult {
  route: string;
  success: boolean;
  error?: string;
  fileSize?: number;
}

async function renderRoute(page: Page, route: string): Promise<RenderResult> {
  const url = `http://localhost:${PORT}${route}`;
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction('window.__PRERENDER_READY__ === true', { timeout: TIMEOUT_MS });

    let html = await page.content();

    // Replace localhost references with production domain
    html = html.replace(new RegExp(`http://localhost:${PORT}`, 'g'), PRODUCTION_ORIGIN);

    // Determine output path
    let outPath: string;
    if (route === '/') {
      outPath = path.join(DIST_DIR, 'index.html');
    } else {
      // Ensure route ends with / for directory-style URLs
      const cleanRoute = route.endsWith('/') ? route : `${route}/`;
      const dir = path.join(DIST_DIR, cleanRoute);
      fs.mkdirSync(dir, { recursive: true });
      outPath = path.join(dir, 'index.html');
    }

    fs.writeFileSync(outPath, html, 'utf-8');
    const fileSize = Buffer.byteLength(html, 'utf-8');

    return { route, success: true, fileSize };
  } catch (err: any) {
    return { route, success: false, error: err.message };
  }
}

// ── Process routes with concurrency pool ────────────────────────────────────

async function processRoutes(browser: Browser, routes: string[]): Promise<RenderResult[]> {
  const results: RenderResult[] = [];
  let index = 0;

  async function worker() {
    const context = await browser.newContext();
    const page = await context.newPage();

    while (index < routes.length) {
      const currentIndex = index++;
      const route = routes[currentIndex];
      const result = await renderRoute(page, route);
      results.push(result);

      const status = result.success ? '\x1b[32m OK\x1b[0m' : '\x1b[31mFAIL\x1b[0m';
      const sizeInfo = result.fileSize ? ` (${(result.fileSize / 1024).toFixed(1)}KB)` : '';
      const errorInfo = result.error ? ` - ${result.error.substring(0, 80)}` : '';
      console.log(`  [${results.length}/${routes.length}] ${status} ${route}${sizeInfo}${errorInfo}`);
    }

    await context.close();
  }

  // Launch concurrent workers
  const workers = Array.from({ length: Math.min(CONCURRENCY, routes.length) }, () => worker());
  await Promise.all(workers);

  return results;
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n Pre-rendering ${ALL_PRERENDER_ROUTES.length} routes...\n`);

  // Verify dist/ exists
  if (!fs.existsSync(DIST_DIR)) {
    console.error('Error: dist/ directory not found. Run "vite build" first.');
    process.exit(1);
  }

  // Start local server
  const server = await startServer();
  console.log(`  Server running on http://localhost:${PORT}`);

  // Launch browser
  const browser = await chromium.launch({ headless: true });
  console.log(`  Chromium launched (${CONCURRENCY} concurrent tabs)\n`);

  const startTime = Date.now();
  const results = await processRoutes(browser, ALL_PRERENDER_ROUTES);
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

  // Cleanup
  await browser.close();
  server.close();

  // Summary
  const succeeded = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);

  console.log(`\n  Done in ${elapsed}s`);
  console.log(`  Succeeded: ${succeeded.length}/${results.length}`);

  if (failed.length > 0) {
    console.log(`\n  FAILED ROUTES:`);
    for (const f of failed) {
      console.log(`    ${f.route} — ${f.error}`);
    }
    process.exit(1);
  }

  console.log(`\n  All routes pre-rendered successfully.\n`);
}

main().catch(err => {
  console.error('Pre-render failed:', err);
  process.exit(1);
});
