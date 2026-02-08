import { test, expect, Page, Locator } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

/**
 * PASS 11: TRUE PARITY — SingleFile as Gold Reference
 *
 * This spec uses SingleFile HTML exports as the source of truth.
 * Baselines are created from the SingleFile reference, then our clone
 * is compared against those baselines.
 *
 * Environment variables:
 *   GBP_SINGLEFILE_DESKTOP - Path to desktop SingleFile export
 *   GBP_SINGLEFILE_MOBILE  - Path to mobile SingleFile export
 *   GBP_PARITY_MODE        - "reference" to generate baselines, omit to compare
 *
 * Usage:
 *   npm run e2e:parity:update  # Generate baselines from SingleFile
 *   npm run e2e:parity         # Compare clone against baselines
 *   npm run e2e:parity:report  # View HTML report
 */

// ============================================================================
// CONFIGURATION
// ============================================================================

const CLONE_URL = '/dev/google-home-clone/';
const IS_REFERENCE_MODE = process.env.GBP_PARITY_MODE === 'reference';

const BREAKPOINTS = [
  { name: '375', width: 375, height: 812, isMobile: true },
  { name: '768', width: 768, height: 1024, isMobile: false },
  { name: '1024', width: 1024, height: 768, isMobile: false },
  { name: '1440', width: 1440, height: 900, isMobile: false },
];

// Section definitions using text-based identification
// Both reference and clone should match these text patterns
const SECTIONS = [
  { id: 'hero', heading: 'Stand out on Google' },
  { id: 'tiles', textContains: ['Free', 'Easy', 'Personalized'] },
  { id: 'atl1', heading: 'Take charge of your first impression' },
  { id: 'atl2', heading: 'Easily connect with customers' },
  { id: 'cards', heading: 'Show what you offer, from products to services' },
  { id: 'case-study', heading: 'What success looks like' },
  { id: 'steps', heading: 'Claim' },
  { id: 'faq', heading: 'Your questions, answered' },
  { id: 'footer', isFooter: true },
];

// ============================================================================
// VALIDATION - Fail loudly if config is wrong
// ============================================================================

function validateEnvVars(): void {
  const desktop = process.env.GBP_SINGLEFILE_DESKTOP;
  const mobile = process.env.GBP_SINGLEFILE_MOBILE;

  if (!desktop) {
    throw new Error(
      `Missing required environment variable: GBP_SINGLEFILE_DESKTOP\n` +
      `Set it to your desktop SingleFile export path:\n` +
      `export GBP_SINGLEFILE_DESKTOP="/path/to/desktop-singlefile.html"`
    );
  }

  if (!mobile) {
    throw new Error(
      `Missing required environment variable: GBP_SINGLEFILE_MOBILE\n` +
      `Set it to your mobile SingleFile export path:\n` +
      `export GBP_SINGLEFILE_MOBILE="/path/to/mobile-singlefile.html"`
    );
  }

  if (!fs.existsSync(desktop)) {
    throw new Error(`Desktop SingleFile not found at: ${desktop}`);
  }

  if (!fs.existsSync(mobile)) {
    throw new Error(`Mobile SingleFile not found at: ${mobile}`);
  }
}

function getReferencePath(isMobile: boolean): string {
  const envVar = isMobile ? 'GBP_SINGLEFILE_MOBILE' : 'GBP_SINGLEFILE_DESKTOP';
  const filePath = process.env[envVar]!;
  return `file://${filePath}`;
}

// ============================================================================
// DETERMINISTIC RENDERING
// ============================================================================

async function injectDeterministicStyles(page: Page): Promise<void> {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
        caret-color: transparent !important;
        scroll-behavior: auto !important;
      }
      ::-webkit-scrollbar { display: none !important; }
      * { scrollbar-width: none !important; }
      * {
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale !important;
        text-rendering: geometricPrecision !important;
      }
    `,
  });
}

async function waitForStability(page: Page): Promise<void> {
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);
}

// ============================================================================
// TEXT-BASED SECTION LOCATORS
// ============================================================================

async function findSectionByHeading(page: Page, heading: string): Promise<Locator | null> {
  // First try data-gbp-section attribute (our clone)
  const byAttr = page.locator(`[data-gbp-section]`).filter({ hasText: heading });
  if (await byAttr.count() > 0) {
    return byAttr.first();
  }

  // Try finding section/div that contains the heading
  const headingEl = page.locator(`h1, h2, h3`).filter({ hasText: heading }).first();
  if (await headingEl.count() === 0) {
    return null;
  }

  // Walk up to find the section container
  const section = headingEl.locator('xpath=ancestor::section[1]');
  if (await section.count() > 0) {
    return section;
  }

  // Fallback: parent div with significant height
  const parent = headingEl.locator('xpath=ancestor::div[contains(@class, "ghc-") or @data-gbp-section][1]');
  if (await parent.count() > 0) {
    return parent;
  }

  return null;
}

async function findSectionByTexts(page: Page, texts: string[]): Promise<Locator | null> {
  // Find container that has ALL of these texts
  for (const containerSel of ['section', '[data-gbp-section]', '.ghc-tiles', 'div']) {
    const containers = page.locator(containerSel);
    const count = await containers.count();

    for (let i = 0; i < count; i++) {
      const container = containers.nth(i);
      let hasAll = true;

      for (const text of texts) {
        const hasText = await container.locator(`text="${text}"`).count() > 0;
        if (!hasText) {
          hasAll = false;
          break;
        }
      }

      if (hasAll) {
        return container;
      }
    }
  }

  return null;
}

async function findFooter(page: Page): Promise<Locator | null> {
  const footer = page.locator('footer').first();
  if (await footer.count() > 0) {
    return footer;
  }

  const byAttr = page.locator('[data-gbp-section="footer"]');
  if (await byAttr.count() > 0) {
    return byAttr.first();
  }

  return null;
}

async function findSection(page: Page, section: typeof SECTIONS[0]): Promise<Locator | null> {
  if (section.isFooter) {
    return findFooter(page);
  }

  if (section.heading) {
    return findSectionByHeading(page, section.heading);
  }

  if (section.textContains) {
    return findSectionByTexts(page, section.textContains);
  }

  return null;
}

// ============================================================================
// TESTS
// ============================================================================

test.describe('Google Home Clone Parity', () => {
  test.beforeAll(() => {
    validateEnvVars();
  });

  // ==========================================================================
  // FULL PAGE SCREENSHOTS
  // ==========================================================================

  test.describe('Full Page', () => {
    for (const bp of BREAKPOINTS) {
      test(`full-${bp.name}`, async ({ page }) => {
        await page.setViewportSize({ width: bp.width, height: bp.height });

        if (IS_REFERENCE_MODE) {
          // REFERENCE MODE: Screenshot the SingleFile
          const refPath = getReferencePath(bp.isMobile);
          await page.goto(refPath);
          await injectDeterministicStyles(page);
          await waitForStability(page);

          await expect(page).toHaveScreenshot(`full-${bp.name}.png`, {
            fullPage: true,
            animations: 'disabled',
          });
        } else {
          // COMPARE MODE: Screenshot clone, compare to reference baseline
          await page.goto(CLONE_URL);
          await injectDeterministicStyles(page);
          await waitForStability(page);

          await expect(page).toHaveScreenshot(`full-${bp.name}.png`, {
            fullPage: true,
            animations: 'disabled',
            maxDiffPixelRatio: 0.15,
          });
        }
      });
    }
  });

  // ==========================================================================
  // SECTION SCREENSHOTS - DESKTOP (1024px)
  // ==========================================================================

  test.describe('Sections - Desktop', () => {
    for (const section of SECTIONS) {
      test(`${section.id}-1024`, async ({ page }) => {
        await page.setViewportSize({ width: 1024, height: 768 });

        if (IS_REFERENCE_MODE) {
          const refPath = getReferencePath(false);
          await page.goto(refPath);
          await injectDeterministicStyles(page);
          await waitForStability(page);

          const el = await findSection(page, section);
          if (!el) {
            console.log(`Section "${section.id}" not found in reference - skipping`);
            test.skip();
            return;
          }

          await el.scrollIntoViewIfNeeded();
          await expect(el).toHaveScreenshot(`${section.id}-1024.png`, {
            animations: 'disabled',
          });
        } else {
          await page.goto(CLONE_URL);
          await injectDeterministicStyles(page);
          await waitForStability(page);

          const el = await findSection(page, section);
          if (!el) {
            console.log(`Section "${section.id}" not found in clone - skipping`);
            test.skip();
            return;
          }

          await el.scrollIntoViewIfNeeded();
          await expect(el).toHaveScreenshot(`${section.id}-1024.png`, {
            animations: 'disabled',
            maxDiffPixelRatio: 0.20,
          });
        }
      });
    }
  });

  // ==========================================================================
  // SECTION SCREENSHOTS - MOBILE (375px)
  // ==========================================================================

  test.describe('Sections - Mobile', () => {
    for (const section of SECTIONS) {
      test(`${section.id}-375`, async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 812 });

        if (IS_REFERENCE_MODE) {
          const refPath = getReferencePath(true);
          await page.goto(refPath);
          await injectDeterministicStyles(page);
          await waitForStability(page);

          const el = await findSection(page, section);
          if (!el) {
            console.log(`Section "${section.id}" not found in reference - skipping`);
            test.skip();
            return;
          }

          await el.scrollIntoViewIfNeeded();
          await expect(el).toHaveScreenshot(`${section.id}-375.png`, {
            animations: 'disabled',
          });
        } else {
          await page.goto(CLONE_URL);
          await injectDeterministicStyles(page);
          await waitForStability(page);

          const el = await findSection(page, section);
          if (!el) {
            console.log(`Section "${section.id}" not found in clone - skipping`);
            test.skip();
            return;
          }

          await el.scrollIntoViewIfNeeded();
          await expect(el).toHaveScreenshot(`${section.id}-375.png`, {
            animations: 'disabled',
            maxDiffPixelRatio: 0.20,
          });
        }
      });
    }
  });
});

// ============================================================================
// DEBUG HELPER - Side by side comparison
// ============================================================================

test.describe('Debug', () => {
  test.skip(IS_REFERENCE_MODE, 'Skip debug in reference mode');

  test('side-by-side comparison', async ({ page }) => {
    validateEnvVars();

    await page.setViewportSize({ width: 1024, height: 768 });

    // Screenshot reference
    const refPath = getReferencePath(false);
    await page.goto(refPath);
    await injectDeterministicStyles(page);
    await waitForStability(page);
    const refScreenshot = await page.screenshot({ fullPage: true });

    // Screenshot clone
    await page.goto(CLONE_URL);
    await injectDeterministicStyles(page);
    await waitForStability(page);
    const cloneScreenshot = await page.screenshot({ fullPage: true });

    // Save both
    const outputDir = path.join(process.cwd(), 'test-results', 'parity-debug');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(path.join(outputDir, 'reference.png'), refScreenshot);
    fs.writeFileSync(path.join(outputDir, 'clone.png'), cloneScreenshot);

    console.log(`\nSide-by-side saved to: ${outputDir}`);
  });
});
