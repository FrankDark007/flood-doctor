/**
 * PASS 16/17: Height Gap Audit (FIXED)
 * Measures section heights for reference (SingleFile) vs clone
 * Uses proper element selectors (not text-based) for accuracy.
 */
import { test } from '@playwright/test';

const BREAKPOINTS = [
  { name: '1024', width: 1024, height: 768 },
  { name: '1440', width: 1440, height: 900 },
];

// Reference SingleFile paths from env
const SINGLEFILE_DESKTOP = process.env.GBP_SINGLEFILE_DESKTOP || '';

// Section selectors for reference page (SingleFile)
// These use class-based selectors matching the actual Google HTML structure
// Note: For sections with multiple instances, we use .nth() in the measurement code
const REF_SELECTORS: Record<string, string> = {
  'header': '.glue-header',
  'hero': 'section.ion-hero',
  'tiles': 'section.ion-stacked-list', // first instance (Free/Easy/Personalized)
  'atl1': 'section.ion-animated-text-list--fill-light',
  'atl2': 'section.ion-animated-text-list--fill-dark',
  'cards': 'section.ion-scrolling-3up-cards-list',
  'know': 'section.ion-twoup',
  'case-study': 'section.ion-case-study-module',
  'cta': 'section:has(.ion-section-header__headline)',
  'steps': 'section.ion-stacked-list', // second instance (Claim/Verify/Manage) - handled with .nth(1)
  'faq': 'section.ion-accordion-module',
  'footer': 'footer',
};

// Sections that need nth() indexing (0-based)
const REF_NTH_INDEX: Record<string, number> = {
  'tiles': 0,  // first stacked-list
  'steps': 1,  // second stacked-list
};

// Clone selectors (use data-gbp-section attributes)
const CLONE_SELECTORS: Record<string, string> = {
  'header': 'header.ghc-header',
  'hero': '[data-gbp-section="hero"]',
  'tiles': '[data-gbp-section="tiles"]',
  'atl1': '[data-gbp-section="atl1"]',
  'atl2': '[data-gbp-section="atl2"]',
  'cards': '[data-gbp-section="cards"]',
  'know': '[data-gbp-section="know"]',
  'case-study': '[data-gbp-section="case-study"]',
  'cta': '[data-gbp-section="cta"]',
  'steps': '[data-gbp-section="steps"]',
  'faq': '[data-gbp-section="faq"]',
  'footer': '[data-gbp-section="footer"]',
};

const SECTIONS = Object.keys(CLONE_SELECTORS);

interface SectionMetrics {
  section: string;
  refHeight: number;
  cloneHeight: number;
  gap: number;
}

test.describe('Height Gap Audit (Fixed)', () => {
  for (const bp of BREAKPOINTS) {
    test(`Audit at ${bp.name}px`, async ({ page }) => {
      test.skip(!SINGLEFILE_DESKTOP, 'GBP_SINGLEFILE_DESKTOP env var not set');

      await page.setViewportSize({ width: bp.width, height: bp.height });

      console.log(`\n========== HEIGHT AUDIT @ ${bp.name}px ==========\n`);

      // Measure REFERENCE (SingleFile)
      console.log('Loading reference (SingleFile)...');
      await page.goto(`file://${SINGLEFILE_DESKTOP}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);

      const refFullHeight = await page.evaluate(() => document.documentElement.scrollHeight);
      console.log(`Reference full page height: ${refFullHeight}px`);

      const refMetrics: Record<string, number> = {};
      for (const section of SECTIONS) {
        try {
          const selector = REF_SELECTORS[section];
          const nthIndex = REF_NTH_INDEX[section] ?? 0;
          const el = page.locator(selector).nth(nthIndex);
          if (await el.count() > 0) {
            const height = await el.evaluate((el: Element) => el.getBoundingClientRect().height);
            refMetrics[section] = height;
          } else {
            refMetrics[section] = 0;
          }
        } catch {
          refMetrics[section] = 0;
        }
      }

      // Measure CLONE
      console.log('\nLoading clone...');
      await page.goto('http://localhost:5173/dev/google-home-clone/', { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);

      const cloneFullHeight = await page.evaluate(() => document.documentElement.scrollHeight);
      console.log(`Clone full page height: ${cloneFullHeight}px`);
      console.log(`Full page gap: ${refFullHeight - cloneFullHeight}px (ref - clone)\n`);

      const cloneMetrics: Record<string, number> = {};
      for (const section of SECTIONS) {
        try {
          const selector = CLONE_SELECTORS[section];
          const el = page.locator(selector).first();
          if (await el.count() > 0) {
            const height = await el.evaluate((el: Element) => el.getBoundingClientRect().height);
            cloneMetrics[section] = height;
          } else {
            cloneMetrics[section] = 0;
          }
        } catch {
          cloneMetrics[section] = 0;
        }
      }

      // Build comparison table
      const comparison: SectionMetrics[] = SECTIONS.map(section => ({
        section,
        refHeight: refMetrics[section] || 0,
        cloneHeight: cloneMetrics[section] || 0,
        gap: (refMetrics[section] || 0) - (cloneMetrics[section] || 0),
      }));

      // Sort by gap descending (biggest deficit first)
      comparison.sort((a, b) => b.gap - a.gap);

      // Print table
      console.log('SECTION HEIGHT COMPARISON (sorted by gap, largest deficit first):');
      console.log('─'.repeat(70));
      console.log(
        'Section'.padEnd(15) +
        'Ref Height'.padStart(12) +
        'Clone Height'.padStart(14) +
        'Gap'.padStart(12) +
        'Status'.padStart(12)
      );
      console.log('─'.repeat(70));

      let totalGap = 0;
      for (const row of comparison) {
        totalGap += row.gap;
        const gapStr = row.gap > 0 ? `+${Math.round(row.gap)}` : `${Math.round(row.gap)}`;
        const status = Math.abs(row.gap) <= 10 ? '✓ OK' :
                      row.gap > 50 ? '⚠ DEFICIT' :
                      row.gap < -50 ? '⚠ EXCESS' : '~';
        console.log(
          row.section.padEnd(15) +
          `${Math.round(row.refHeight)}px`.padStart(12) +
          `${Math.round(row.cloneHeight)}px`.padStart(14) +
          `${gapStr}px`.padStart(12) +
          status.padStart(12)
        );
      }
      console.log('─'.repeat(70));
      console.log(`TOTAL measured section gap: ${Math.round(totalGap)}px`);
      console.log(`Actual full page gap: ${refFullHeight - cloneFullHeight}px`);
      console.log('─'.repeat(70));

      // Highlight top 3 gaps
      console.log('\nTOP 3 LARGEST GAPS:');
      let count = 0;
      for (const row of comparison) {
        if (Math.abs(row.gap) > 20) {
          count++;
          const dir = row.gap > 0 ? 'DEFICIT' : 'EXCESS';
          console.log(`  ${count}. ${row.section}: ${Math.round(row.gap)}px ${dir} (ref: ${Math.round(row.refHeight)}px, clone: ${Math.round(row.cloneHeight)}px)`);
          if (count >= 3) break;
        }
      }
      if (count === 0) {
        console.log('  All sections within ±20px!');
      }
    });
  }
});
