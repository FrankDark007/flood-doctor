/**
 * Accessibility Audit Script
 * Checks: contrast, alt text, heading order, tap target sizes
 *
 * Usage: npx tsx audit/uiux/2026-visual-audit/scripts/a11y-audit.ts
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

interface A11yIssue {
  page: string;
  url: string;
  category: 'contrast' | 'alt-text' | 'heading-order' | 'tap-target' | 'aria' | 'form-label';
  severity: 'critical' | 'serious' | 'moderate' | 'minor';
  element: string;
  message: string;
  selector: string;
}

async function auditPage(pageUrl: string, pageId: string, browser: any): Promise<A11yIssue[]> {
  const issues: A11yIssue[] = [];

  // Desktop audit
  const desktopCtx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const desktopPage = await desktopCtx.newPage();

  try {
    await desktopPage.goto(pageUrl, { waitUntil: 'networkidle', timeout: 30000 });
    await desktopPage.waitForTimeout(1500);

    // 1. Missing alt text
    const imgIssues = await desktopPage.evaluate(() => {
      const results: { src: string; selector: string }[] = [];
      document.querySelectorAll('img').forEach((img, i) => {
        if (!img.alt && !img.getAttribute('role')?.includes('presentation') && !img.getAttribute('aria-hidden')) {
          results.push({
            src: img.src || img.getAttribute('data-src') || 'unknown',
            selector: img.className ? `img.${img.className.split(' ')[0]}` : `img:nth-of-type(${i + 1})`,
          });
        }
      });
      return results;
    });
    for (const img of imgIssues) {
      issues.push({
        page: pageId,
        url: pageUrl,
        category: 'alt-text',
        severity: 'serious',
        element: `<img src="${img.src.substring(0, 80)}">`,
        message: 'Image missing alt attribute',
        selector: img.selector,
      });
    }

    // 2. Heading order
    const headingIssues = await desktopPage.evaluate(() => {
      const results: { tag: string; text: string; expectedLevel: number; actualLevel: number }[] = [];
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      let lastLevel = 0;
      let h1Count = 0;
      for (const h of headings) {
        const level = parseInt(h.tagName[1]);
        if (level === 1) h1Count++;
        if (h1Count > 1) {
          results.push({
            tag: h.tagName,
            text: (h as HTMLElement).textContent?.trim()?.substring(0, 60) || '',
            expectedLevel: 1,
            actualLevel: level,
          });
        }
        if (lastLevel > 0 && level > lastLevel + 1) {
          results.push({
            tag: h.tagName,
            text: (h as HTMLElement).textContent?.trim()?.substring(0, 60) || '',
            expectedLevel: lastLevel + 1,
            actualLevel: level,
          });
        }
        lastLevel = level;
      }
      return { results, h1Count };
    });
    if (headingIssues.h1Count > 1) {
      issues.push({
        page: pageId,
        url: pageUrl,
        category: 'heading-order',
        severity: 'serious',
        element: 'Multiple H1 tags',
        message: `Found ${headingIssues.h1Count} H1 elements — should have exactly 1`,
        selector: 'h1',
      });
    }
    for (const hi of headingIssues.results) {
      if (hi.expectedLevel !== 1) {
        issues.push({
          page: pageId,
          url: pageUrl,
          category: 'heading-order',
          severity: 'moderate',
          element: `<${hi.tag}>${hi.text}</${hi.tag}>`,
          message: `Heading skips level: expected H${hi.expectedLevel}, found ${hi.tag}`,
          selector: hi.tag.toLowerCase(),
        });
      }
    }

    // 3. Color contrast (basic check for small/low-contrast text)
    const contrastIssues = await desktopPage.evaluate(() => {
      const results: { text: string; fg: string; bg: string; selector: string; ratio: number }[] = [];

      function luminance(r: number, g: number, b: number): number {
        const [rs, gs, bs] = [r, g, b].map(c => {
          c = c / 255;
          return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
      }

      function contrastRatio(l1: number, l2: number): number {
        const lighter = Math.max(l1, l2);
        const darker = Math.min(l1, l2);
        return (lighter + 0.05) / (darker + 0.05);
      }

      function parseColor(color: string): [number, number, number] | null {
        const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (match) return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
        return null;
      }

      const textElements = document.querySelectorAll('p, span, a, li, td, th, label, h1, h2, h3, h4, h5, h6');
      const checked = new Set<string>();

      textElements.forEach((el, i) => {
        const htmlEl = el as HTMLElement;
        const text = htmlEl.textContent?.trim();
        if (!text || text.length < 2 || checked.has(text)) return;
        checked.add(text);

        const style = window.getComputedStyle(htmlEl);
        const fg = parseColor(style.color);
        const bg = parseColor(style.backgroundColor);

        if (fg && bg) {
          const fgLum = luminance(...fg);
          const bgLum = luminance(...bg);
          const ratio = contrastRatio(fgLum, bgLum);
          const fontSize = parseFloat(style.fontSize);
          const fontWeight = parseInt(style.fontWeight) || 400;
          const isLargeText = fontSize >= 18 || (fontSize >= 14 && fontWeight >= 700);
          const minRatio = isLargeText ? 3 : 4.5;

          if (ratio < minRatio && ratio > 1) {
            results.push({
              text: text.substring(0, 40),
              fg: style.color,
              bg: style.backgroundColor,
              selector: htmlEl.className ? `.${htmlEl.className.split(' ')[0]}` : `${el.tagName.toLowerCase()}:nth-of-type(${i + 1})`,
              ratio: Math.round(ratio * 100) / 100,
            });
          }
        }
      });

      return results.slice(0, 20); // Cap at 20 per page
    });
    for (const ci of contrastIssues) {
      issues.push({
        page: pageId,
        url: pageUrl,
        category: 'contrast',
        severity: ci.ratio < 3 ? 'critical' : 'serious',
        element: `"${ci.text}" (${ci.fg} on ${ci.bg})`,
        message: `Contrast ratio ${ci.ratio}:1 — WCAG AA requires 4.5:1 for normal text`,
        selector: ci.selector,
      });
    }

    // 4. Form labels
    const formIssues = await desktopPage.evaluate(() => {
      const results: { type: string; selector: string }[] = [];
      document.querySelectorAll('input, select, textarea').forEach((input, i) => {
        const htmlInput = input as HTMLInputElement;
        if (htmlInput.type === 'hidden' || htmlInput.type === 'submit') return;
        const id = htmlInput.id;
        const hasLabel = id ? !!document.querySelector(`label[for="${id}"]`) : false;
        const hasAriaLabel = !!htmlInput.getAttribute('aria-label') || !!htmlInput.getAttribute('aria-labelledby');
        const hasPlaceholder = !!htmlInput.placeholder;
        if (!hasLabel && !hasAriaLabel && !hasPlaceholder) {
          results.push({
            type: htmlInput.type || htmlInput.tagName.toLowerCase(),
            selector: id ? `#${id}` : `${htmlInput.tagName.toLowerCase()}:nth-of-type(${i + 1})`,
          });
        }
      });
      return results;
    });
    for (const fi of formIssues) {
      issues.push({
        page: pageId,
        url: pageUrl,
        category: 'form-label',
        severity: 'serious',
        element: `<input type="${fi.type}">`,
        message: 'Form input has no accessible label (no label, aria-label, or placeholder)',
        selector: fi.selector,
      });
    }
  } catch (err) {
    console.error(`  ERROR auditing ${pageId}: ${err}`);
  } finally {
    await desktopCtx.close();
  }

  // Mobile audit — tap targets
  const mobileCtx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3 });
  const mobilePage = await mobileCtx.newPage();

  try {
    await mobilePage.goto(pageUrl, { waitUntil: 'networkidle', timeout: 30000 });
    await mobilePage.waitForTimeout(1500);

    const tapIssues = await mobilePage.evaluate(() => {
      const results: { text: string; size: string; selector: string }[] = [];
      const tappable = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
      tappable.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        const htmlEl = el as HTMLElement;
        const style = window.getComputedStyle(htmlEl);
        if (style.display === 'none' || style.visibility === 'hidden') return;
        if (rect.width === 0 || rect.height === 0) return;

        const minDim = Math.min(rect.width, rect.height);
        if (minDim < 44) { // WCAG 2.5.5 requires 44x44
          results.push({
            text: htmlEl.textContent?.trim()?.substring(0, 40) || htmlEl.getAttribute('aria-label') || 'unknown',
            size: `${Math.round(rect.width)}x${Math.round(rect.height)}`,
            selector: htmlEl.id ? `#${htmlEl.id}` : `${el.tagName.toLowerCase()}:nth-of-type(${i + 1})`,
          });
        }
      });
      return results.slice(0, 15);
    });
    for (const ti of tapIssues) {
      issues.push({
        page: pageId,
        url: pageUrl,
        category: 'tap-target',
        severity: 'moderate',
        element: `"${ti.text}" (${ti.size}px)`,
        message: `Tap target too small: ${ti.size}px — WCAG 2.5.5 requires minimum 44x44px`,
        selector: ti.selector,
      });
    }
  } catch (err) {
    console.error(`  ERROR mobile audit ${pageId}: ${err}`);
  } finally {
    await mobileCtx.close();
  }

  return issues;
}

async function main() {
  const pagesData = JSON.parse(fs.readFileSync(PAGES_FILE, 'utf-8'));
  const targetPages = pagesData.pages;

  console.log(`\n♿ Running a11y audit on ${targetPages.length} pages...\n`);

  const browser = await chromium.launch({ headless: true });
  const allIssues: A11yIssue[] = [];

  for (const tp of targetPages) {
    const isSubdomain = !!tp.subdomain;
    const pageUrl = isSubdomain ? tp.url : `${LOCAL_BASE}${tp.localPath}`;
    console.log(`  → ${tp.slug}`);
    const issues = await auditPage(pageUrl, tp.id, browser);
    allIssues.push(...issues);
    console.log(`    ${issues.length} issues found`);
  }

  await browser.close();

  // Summary
  const summary = {
    totalIssues: allIssues.length,
    bySeverity: {
      critical: allIssues.filter(i => i.severity === 'critical').length,
      serious: allIssues.filter(i => i.severity === 'serious').length,
      moderate: allIssues.filter(i => i.severity === 'moderate').length,
      minor: allIssues.filter(i => i.severity === 'minor').length,
    },
    byCategory: {
      contrast: allIssues.filter(i => i.category === 'contrast').length,
      'alt-text': allIssues.filter(i => i.category === 'alt-text').length,
      'heading-order': allIssues.filter(i => i.category === 'heading-order').length,
      'tap-target': allIssues.filter(i => i.category === 'tap-target').length,
      'form-label': allIssues.filter(i => i.category === 'form-label').length,
      aria: allIssues.filter(i => i.category === 'aria').length,
    },
    byPage: {} as Record<string, number>,
  };

  for (const issue of allIssues) {
    summary.byPage[issue.page] = (summary.byPage[issue.page] || 0) + 1;
  }

  const report = { generated: new Date().toISOString(), summary, issues: allIssues };
  const outputPath = path.join(BASE_DIR, 'a11y-report.json');
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));

  console.log(`\n✅ A11y report written to ${outputPath}`);
  console.log(`   Total issues: ${allIssues.length}`);
  console.log(`   Critical: ${summary.bySeverity.critical}, Serious: ${summary.bySeverity.serious}, Moderate: ${summary.bySeverity.moderate}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
