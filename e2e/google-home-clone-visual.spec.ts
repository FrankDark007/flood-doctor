import { test, expect } from '@playwright/test';

/**
 * PASS 10: Visual Parity Tests for Google Home Clone
 *
 * Tests the dev page at /dev/google-home-clone/ for visual consistency
 * across breakpoints: 375px (mobile), 768px (tablet), 1024px (desktop), 1440px (wide)
 *
 * Run with: npm run e2e -- --grep "Google Home Clone"
 * Update snapshots: npm run e2e -- --grep "Google Home Clone" --update-snapshots
 */

const BREAKPOINTS = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1024, height: 768 },
  { name: 'wide', width: 1440, height: 900 },
];

const DEV_PAGE_URL = '/dev/google-home-clone/';

test.describe('Google Home Clone Visual Parity', () => {

  // Full page screenshots at each breakpoint
  for (const bp of BREAKPOINTS) {
    test(`full page - ${bp.name} (${bp.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: bp.width, height: bp.height });
      await page.goto(DEV_PAGE_URL);

      // Wait for page to be fully loaded
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500); // Allow animations to settle

      await expect(page).toHaveScreenshot(`full-page-${bp.name}.png`, {
        fullPage: true,
        animations: 'disabled',
      });
    });
  }

  // Header section tests
  test.describe('Header', () => {
    test('desktop header with nav', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      const header = page.locator('.ghc-header');
      await expect(header).toHaveScreenshot('header-desktop.png');
    });

    test('mobile header with hamburger', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      const header = page.locator('.ghc-header');
      await expect(header).toHaveScreenshot('header-mobile.png');
    });

    test('mobile menu drawer open', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      // Open mobile menu
      await page.click('.ghc-hamburger');
      await page.waitForTimeout(400); // Wait for slide animation

      await expect(page).toHaveScreenshot('mobile-menu-open.png', {
        animations: 'disabled',
      });
    });

    test('mega-nav dropdown on hover', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      // Hover over Water Damage nav item
      await page.hover('.ghc-nav-item:first-child .ghc-nav-link');
      await page.waitForTimeout(300);

      const dropdown = page.locator('.ghc-mega-dropdown').first();
      await expect(dropdown).toBeVisible();
      await expect(page.locator('.ghc-header')).toHaveScreenshot('header-mega-nav-open.png');
    });
  });

  // Hero section tests
  test.describe('Hero Section', () => {
    for (const bp of BREAKPOINTS) {
      test(`hero - ${bp.name} (${bp.width}px)`, async ({ page }) => {
        await page.setViewportSize({ width: bp.width, height: bp.height });
        await page.goto(DEV_PAGE_URL);
        await page.waitForLoadState('networkidle');

        const hero = page.locator('.ghc-hero');
        await expect(hero).toHaveScreenshot(`hero-${bp.name}.png`, {
          animations: 'disabled',
        });
      });
    }
  });

  // Tiles section ("Free / Easy / Personalized")
  test.describe('Tiles Section', () => {
    test('tiles - desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      const tiles = page.locator('.ghc-tiles');
      await expect(tiles).toHaveScreenshot('tiles-desktop.png');
    });

    test('tiles - mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      const tiles = page.locator('.ghc-tiles');
      await expect(tiles).toHaveScreenshot('tiles-mobile.png');
    });
  });

  // Progress rows ("Take charge" and "Easily connect")
  test.describe('Progress Rows', () => {
    test('progress rows - desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      const progressRow = page.locator('.ghc-progress-row').first();
      await expect(progressRow).toHaveScreenshot('progress-row-1-desktop.png');
    });

    test('progress rows - mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      const progressRow = page.locator('.ghc-progress-row').first();
      await expect(progressRow).toHaveScreenshot('progress-row-1-mobile.png');
    });
  });

  // Sticky scroll section (Flood Doctor process)
  test.describe('Sticky Scroll Section', () => {
    test('sticky section - desktop visible', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      const stickySection = page.locator('.ghc-sticky-section');
      if (await stickySection.isVisible()) {
        await expect(stickySection).toHaveScreenshot('sticky-section-desktop.png');
      }
    });
  });

  // Scrolling 3-up cards ("Show what you offer")
  test.describe('Scrolling Cards Section', () => {
    test('scrolling cards - desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      const scrollingCards = page.locator('.ghc-scrolling-cards');
      await expect(scrollingCards).toHaveScreenshot('scrolling-cards-desktop.png');
    });

    test('scrolling cards - mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      const scrollingCards = page.locator('.ghc-scrolling-cards');
      await expect(scrollingCards).toHaveScreenshot('scrolling-cards-mobile.png');
    });
  });

  // Footer tests
  test.describe('Footer', () => {
    test('footer - desktop (4 columns)', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      const footer = page.locator('.ghc-footer');
      await expect(footer).toHaveScreenshot('footer-desktop.png');
    });

    test('footer - mobile (accordion)', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      const footer = page.locator('.ghc-footer');
      await expect(footer).toHaveScreenshot('footer-mobile.png');
    });
  });

  // FAQ section tests
  test.describe('FAQ Section', () => {
    test('faq - collapsed', async ({ page }) => {
      await page.setViewportSize({ width: 1024, height: 768 });
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      const faq = page.locator('.ghc-faq');
      if (await faq.isVisible()) {
        await expect(faq).toHaveScreenshot('faq-collapsed.png');
      }
    });

    test('faq - expanded', async ({ page }) => {
      await page.setViewportSize({ width: 1024, height: 768 });
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      const faqToggle = page.locator('.ghc-faq-toggle').first();
      if (await faqToggle.isVisible()) {
        await faqToggle.click();
        await page.waitForTimeout(300);

        const faq = page.locator('.ghc-faq');
        await expect(faq).toHaveScreenshot('faq-expanded.png');
      }
    });
  });
});

// Accessibility checks
test.describe('Google Home Clone Accessibility', () => {
  test('skip link appears on focus', async ({ page }) => {
    await page.goto(DEV_PAGE_URL);
    await page.waitForLoadState('networkidle');

    // Skip link should be visually hidden initially
    const skipLink = page.locator('.ghc-skip-link');

    // Focus the skip link directly and verify it becomes visible
    await skipLink.focus();
    await expect(skipLink).toBeVisible();

    // Should have correct href
    await expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  test('mobile menu opens via click', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(DEV_PAGE_URL);
    await page.waitForLoadState('networkidle');

    // Click hamburger to open menu
    await page.click('.ghc-hamburger');
    await page.waitForTimeout(400);

    // Mobile menu should be open
    const mobileMenu = page.locator('.ghc-mobile-menu');
    await expect(mobileMenu).toHaveAttribute('aria-hidden', 'false');

    // Escape should close it
    await page.keyboard.press('Escape');
    await page.waitForTimeout(400);
    await expect(mobileMenu).toHaveAttribute('aria-hidden', 'true');
  });

  test('mega-nav is keyboard accessible', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(DEV_PAGE_URL);
    await page.waitForLoadState('networkidle');

    // Tab to nav item
    const navButton = page.locator('.ghc-nav-item:first-child .ghc-nav-link');
    await navButton.focus();

    // Dropdown should appear on focus
    const dropdown = page.locator('.ghc-mega-dropdown').first();
    await expect(dropdown).toBeVisible();
  });
});

// Responsive behavior tests
test.describe('Google Home Clone Responsive Behavior', () => {
  test('nav hides on mobile, shows on desktop', async ({ page }) => {
    // Mobile - nav hidden
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(DEV_PAGE_URL);
    await page.waitForLoadState('networkidle');

    const nav = page.locator('.ghc-header-nav');
    await expect(nav).not.toBeVisible();

    // Desktop - nav visible
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(300);
    await expect(nav).toBeVisible();
  });

  test('hamburger shows on mobile, hides on desktop', async ({ page }) => {
    // Mobile - hamburger visible
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(DEV_PAGE_URL);
    await page.waitForLoadState('networkidle');

    const hamburger = page.locator('.ghc-hamburger');
    await expect(hamburger).toBeVisible();

    // Desktop - hamburger hidden
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(300);
    await expect(hamburger).not.toBeVisible();
  });
});
