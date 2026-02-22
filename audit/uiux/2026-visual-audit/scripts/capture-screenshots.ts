/**
 * Visual Audit Screenshot Capture Script
 * Captures full-page + above-fold screenshots at 3 breakpoints for 12 target pages.
 *
 * Usage: npx tsx audit/uiux/2026-visual-audit/scripts/capture-screenshots.ts
 * Requires: vite dev server running on localhost:5173
 */

import { chromium, type Browser, type Page } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_DIR = path.resolve(__dirname, '..');
const PAGES_FILE = path.join(BASE_DIR, 'target-pages.json');

interface TargetPage {
  id: string;
  slug: string;
  type: string;
  url: string;
  localPath: string;
  subdomain?: string;
  description: string;
}

interface Breakpoint {
  name: string;
  width: number;
  height: number;
}

const BREAKPOINTS: Breakpoint[] = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 834, height: 1112 },
  { name: 'mobile', width: 390, height: 844 },
];

// Use local dev server for apex pages, production for subdomains
const LOCAL_BASE = 'http://localhost:5173';

interface IndexEntry {
  id: string;
  url: string;
  pageType: string;
  screenshots: Record<string, { full: string; fold: string }>;
  canonical: string | null;
  title: string;
  h1: string;
  primaryCTAs: string[];
  inlineCTAsHiddenOnMobile: boolean;
}

async function extractPageMeta(page: Page): Promise<{
  canonical: string | null;
  title: string;
  h1: string;
  primaryCTAs: string[];
  inlineCTAsHiddenOnMobile: boolean;
}> {
  return page.evaluate(() => {
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || null;
    const title = document.title;
    const h1El = document.querySelector('h1');
    const h1 = h1El?.textContent?.trim() || '';

    // Find CTA buttons/links
    const ctaSelectors = [
      'a[href*="contact"]',
      'a[href*="request"]',
      'a[href*="call"]',
      'a[href*="emergency"]',
      'button[class*="cta"]',
      'a[class*="cta"]',
      'a[href="tel:"]',
      '[data-cta]',
    ];
    const ctaTexts: string[] = [];
    for (const sel of ctaSelectors) {
      document.querySelectorAll(sel).forEach(el => {
        const text = (el as HTMLElement).textContent?.trim();
        if (text && text.length < 80 && !ctaTexts.includes(text)) {
          ctaTexts.push(text);
        }
      });
    }

    // Check if inline CTAs are hidden on mobile (check computed styles at mobile-like viewport)
    // We'll do this by checking if any CTA has display:none or visibility:hidden via responsive classes
    const inlineCTAs = document.querySelectorAll('.inline-cta, [class*="hidden"][class*="md:"], [class*="lg:block"]');
    const inlineCTAsHiddenOnMobile = inlineCTAs.length > 0;

    return { canonical, title, h1, primaryCTAs: ctaTexts.slice(0, 5), inlineCTAsHiddenOnMobile };
  });
}

async function captureForPage(browser: Browser, targetPage: TargetPage): Promise<IndexEntry> {
  const pageDir = path.join(BASE_DIR, targetPage.slug);
  fs.mkdirSync(pageDir, { recursive: true });

  // For subdomain pages, use production URL; for apex, use local dev
  const isSubdomain = !!targetPage.subdomain;
  const pageUrl = isSubdomain ? targetPage.url : `${LOCAL_BASE}${targetPage.localPath}`;

  const screenshots: Record<string, { full: string; fold: string }> = {};
  let meta = { canonical: null as string | null, title: '', h1: '', primaryCTAs: [] as string[], inlineCTAsHiddenOnMobile: false };

  for (const bp of BREAKPOINTS) {
    const context = await browser.newContext({
      viewport: { width: bp.width, height: bp.height },
      deviceScaleFactor: bp.name === 'mobile' ? 3 : (bp.name === 'tablet' ? 2 : 1),
    });
    const page = await context.newPage();

    try {
      await page.goto(pageUrl, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(2000); // Allow lazy images to load

      // Full page screenshot
      const fullPath = path.join(pageDir, `${bp.name}.png`);
      await page.screenshot({ path: fullPath, fullPage: true });

      // Above-fold screenshot (first viewport only)
      const foldPath = path.join(pageDir, `${bp.name}-fold.png`);
      await page.screenshot({ path: foldPath, fullPage: false });

      const relBase = `${targetPage.slug}/`;
      screenshots[bp.name] = {
        full: `${relBase}${bp.name}.png`,
        fold: `${relBase}${bp.name}-fold.png`,
      };

      // Extract meta from desktop viewport
      if (bp.name === 'desktop') {
        meta = await extractPageMeta(page);
      }

      // On mobile, re-check CTA visibility
      if (bp.name === 'mobile') {
        const mobileCtaCheck = await page.evaluate(() => {
          // Check for inline CTAs that should be hidden on mobile
          const allButtons = document.querySelectorAll('a, button');
          let hiddenCount = 0;
          let visibleInlineCtas = 0;
          allButtons.forEach(btn => {
            const text = (btn as HTMLElement).textContent?.trim()?.toLowerCase() || '';
            if (text.includes('free') || text.includes('estimate') || text.includes('schedule')) {
              const style = window.getComputedStyle(btn as HTMLElement);
              if (style.display === 'none' || style.visibility === 'hidden') {
                hiddenCount++;
              } else {
                visibleInlineCtas++;
              }
            }
          });
          return { hiddenCount, visibleInlineCtas };
        });
        // We note what we found but don't override the desktop meta
        console.log(`  [${targetPage.slug}] Mobile CTA check: ${mobileCtaCheck.hiddenCount} hidden, ${mobileCtaCheck.visibleInlineCtas} visible`);
      }
    } catch (err) {
      console.error(`  ERROR capturing ${targetPage.slug} @ ${bp.name}: ${err}`);
    } finally {
      await context.close();
    }
  }

  return {
    id: targetPage.id,
    url: targetPage.url,
    pageType: targetPage.type,
    screenshots,
    ...meta,
  };
}

async function main() {
  const pagesData = JSON.parse(fs.readFileSync(PAGES_FILE, 'utf-8'));
  const targetPages: TargetPage[] = pagesData.pages;

  console.log(`\n📸 Capturing screenshots for ${targetPages.length} pages...\n`);

  const browser = await chromium.launch({ headless: true });
  const indexEntries: IndexEntry[] = [];

  // Process apex pages first (local dev server), then subdomain pages (production)
  const apexPages = targetPages.filter(p => !p.subdomain);
  const subdomainPages = targetPages.filter(p => !!p.subdomain);

  console.log(`  Apex pages (local): ${apexPages.length}`);
  console.log(`  Subdomain pages (production): ${subdomainPages.length}\n`);

  for (const tp of [...apexPages, ...subdomainPages]) {
    console.log(`  → ${tp.slug} (${tp.type})`);
    const entry = await captureForPage(browser, tp);
    indexEntries.push(entry);
  }

  await browser.close();

  // Write index.json
  const indexPath = path.join(BASE_DIR, 'index.json');
  fs.writeFileSync(indexPath, JSON.stringify({
    generated: new Date().toISOString(),
    pageCount: indexEntries.length,
    breakpoints: BREAKPOINTS.map(b => `${b.width}x${b.height}`),
    pages: indexEntries,
  }, null, 2));

  console.log(`\n✅ Done. Index written to ${indexPath}`);
  console.log(`   Screenshots in ${BASE_DIR}/`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
