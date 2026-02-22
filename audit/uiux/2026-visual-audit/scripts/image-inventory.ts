/**
 * Image Inventory Audit Script
 * Scans pages for images, checks formats, dimensions, sizes, and flags issues.
 *
 * Usage: npx tsx audit/uiux/2026-visual-audit/scripts/image-inventory.ts
 * Requires: vite dev server running on localhost:5173
 */

import { chromium } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_DIR = path.resolve(__dirname, '..');
const PAGES_FILE = path.join(BASE_DIR, 'target-pages.json');
const LOCAL_BASE = 'http://localhost:5173';
const PUBLIC_DIR = path.resolve(__dirname, '../../..', 'public');

interface ImageEntry {
  page: string;
  src: string;
  localPath: string;
  format: string;
  naturalWidth: number;
  naturalHeight: number;
  displayWidth: number;
  displayHeight: number;
  fileSizeKB: number;
  alt: string;
  role: string;
  flags: string[];
}

async function getImagesFromPage(pageUrl: string, pageId: string, browser: any): Promise<ImageEntry[]> {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const entries: ImageEntry[] = [];

  try {
    await page.goto(pageUrl, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);

    const imgData = await page.evaluate(() => {
      const results: {
        src: string;
        naturalWidth: number;
        naturalHeight: number;
        displayWidth: number;
        displayHeight: number;
        alt: string;
        role: string;
      }[] = [];

      document.querySelectorAll('img').forEach(img => {
        results.push({
          src: img.src || img.getAttribute('data-src') || '',
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight,
          displayWidth: Math.round(img.getBoundingClientRect().width),
          displayHeight: Math.round(img.getBoundingClientRect().height),
          alt: img.alt || '',
          role: img.closest('section')?.getAttribute('data-section') || img.closest('[class*="hero"]') ? 'hero' : 'content',
        });
      });

      // Also check background images on key sections
      const bgElements = document.querySelectorAll('[style*="background-image"], [class*="bg-"]');
      bgElements.forEach(el => {
        const style = window.getComputedStyle(el as HTMLElement);
        const bgImage = style.backgroundImage;
        if (bgImage && bgImage !== 'none') {
          const urlMatch = bgImage.match(/url\(["']?([^"')]+)["']?\)/);
          if (urlMatch) {
            results.push({
              src: urlMatch[1],
              naturalWidth: 0,
              naturalHeight: 0,
              displayWidth: Math.round((el as HTMLElement).getBoundingClientRect().width),
              displayHeight: Math.round((el as HTMLElement).getBoundingClientRect().height),
              alt: 'BACKGROUND_IMAGE',
              role: 'background',
            });
          }
        }
      });

      return results;
    });

    for (const img of imgData) {
      if (!img.src) continue;

      // Determine format
      const url = new URL(img.src, pageUrl);
      const ext = path.extname(url.pathname).toLowerCase().replace('.', '') || 'unknown';
      const format = ext === 'jpg' ? 'jpeg' : ext;

      // Try to get file size from local filesystem
      let fileSizeKB = 0;
      const localRelPath = url.pathname;
      const localAbsPath = path.join(PUBLIC_DIR, localRelPath);
      try {
        if (fs.existsSync(localAbsPath)) {
          const stat = fs.statSync(localAbsPath);
          fileSizeKB = Math.round(stat.size / 1024);
        }
      } catch {}

      // Flag issues
      const flags: string[] = [];

      // Raster logo check
      if (img.alt.toLowerCase().includes('logo') && ['png', 'jpeg', 'jpg', 'gif'].includes(format)) {
        flags.push('RASTER_LOGO');
      }

      // Low-res hero
      if (img.role === 'hero' && img.naturalWidth > 0 && img.naturalWidth < 1200) {
        flags.push('LOW_RES_HERO');
      }

      // Missing modern format
      if (['jpeg', 'jpg', 'png'].includes(format) && fileSizeKB > 100) {
        flags.push('NO_WEBP_AVIF');
      }

      // Oversized file
      if (fileSizeKB > 500) {
        flags.push('OVERSIZED_FILE');
      }

      // Stock/clipart heuristics
      const srcLower = img.src.toLowerCase();
      if (srcLower.includes('stock') || srcLower.includes('shutterstock') || srcLower.includes('istock') ||
          srcLower.includes('unsplash') || srcLower.includes('pexels') || srcLower.includes('getty')) {
        flags.push('LIKELY_STOCK');
      }
      if (img.naturalWidth > 0 && img.naturalWidth < 200 && img.naturalHeight > 0 && img.naturalHeight < 200 &&
          ['png', 'gif'].includes(format)) {
        flags.push('POSSIBLE_CLIPART');
      }

      // Missing alt text
      if (!img.alt || img.alt === 'BACKGROUND_IMAGE') {
        flags.push('NO_ALT');
      }

      // Aspect ratio check (extreme ratios)
      if (img.naturalWidth > 0 && img.naturalHeight > 0) {
        const ratio = img.naturalWidth / img.naturalHeight;
        if (ratio > 4 || ratio < 0.25) {
          flags.push('EXTREME_ASPECT_RATIO');
        }
      }

      entries.push({
        page: pageId,
        src: img.src,
        localPath: localRelPath,
        format,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        displayWidth: img.displayWidth,
        displayHeight: img.displayHeight,
        fileSizeKB,
        alt: img.alt.substring(0, 80),
        role: img.role,
        flags,
      });
    }
  } catch (err) {
    console.error(`  ERROR scanning images on ${pageId}: ${err}`);
  } finally {
    await ctx.close();
  }

  return entries;
}

async function main() {
  const pagesData = JSON.parse(fs.readFileSync(PAGES_FILE, 'utf-8'));
  const targetPages = pagesData.pages;

  console.log(`\n🖼️  Auditing images on ${targetPages.length} pages...\n`);

  const browser = await chromium.launch({ headless: true });
  const allEntries: ImageEntry[] = [];

  for (const tp of targetPages) {
    const isSubdomain = !!tp.subdomain;
    const pageUrl = isSubdomain ? tp.url : `${LOCAL_BASE}${tp.localPath}`;
    console.log(`  → ${tp.slug}`);
    const entries = await getImagesFromPage(pageUrl, tp.id, browser);
    allEntries.push(...entries);
    const flagged = entries.filter(e => e.flags.length > 0).length;
    console.log(`    ${entries.length} images, ${flagged} flagged`);
  }

  await browser.close();

  // Write CSV
  const csvHeader = 'page,src,format,naturalWidth,naturalHeight,displayWidth,displayHeight,fileSizeKB,alt,role,flags';
  const csvRows = allEntries.map(e =>
    `"${e.page}","${e.src.substring(0, 120)}","${e.format}",${e.naturalWidth},${e.naturalHeight},${e.displayWidth},${e.displayHeight},${e.fileSizeKB},"${e.alt.replace(/"/g, '""')}","${e.role}","${e.flags.join('; ')}"`
  );
  const csvPath = path.join(BASE_DIR, 'image-inventory.csv');
  fs.writeFileSync(csvPath, [csvHeader, ...csvRows].join('\n'));

  // Summary
  const totalFlagged = allEntries.filter(e => e.flags.length > 0).length;
  const flagCounts: Record<string, number> = {};
  for (const e of allEntries) {
    for (const f of e.flags) {
      flagCounts[f] = (flagCounts[f] || 0) + 1;
    }
  }

  console.log(`\n✅ Image inventory written to ${csvPath}`);
  console.log(`   Total images: ${allEntries.length}, Flagged: ${totalFlagged}`);
  console.log(`   Flags:`, flagCounts);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
