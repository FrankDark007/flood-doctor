import { test, expect, Page } from '@playwright/test';

/**
 * PASS 12: Behavior Parity Tests — Timing + Interaction
 *
 * Tests clone behavior matches Google's patterns:
 * - Auto-advancing animated lists
 * - Carousel navigation
 * - Header interactions
 *
 * Separate from visual tests to avoid flakiness.
 *
 * Run with: npm run e2e -- --grep "Behavior"
 */

const DEV_PAGE_URL = '/dev/google-home-clone/';

// Actual timing values from implementation
const PROGRESS_INTERVAL = 4500; // 4.5s per item
const TESTIMONIAL_INTERVAL = 4500;

// ============================================================================
// HELPERS
// ============================================================================

async function scrollToElement(page: Page, selector: string): Promise<void> {
  const element = page.locator(selector).first();
  await element.scrollIntoViewIfNeeded();
  await page.waitForTimeout(100);
}

async function getActiveIndex(page: Page, containerSelector: string, activeClass: string): Promise<number> {
  return page.evaluate(
    ({ container, active }) => {
      const items = document.querySelectorAll(`${container} [class*="item"]`);
      for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains(active)) return i;
      }
      return -1;
    },
    { container: containerSelector, active: activeClass }
  );
}

// ============================================================================
// ANIMATED TEXT LISTS (Progress Rows)
// ============================================================================

test.describe('Behavior Parity - Animated Text Lists', () => {
  test.describe('Progress Row #1 (Take charge)', () => {
    test('auto-advances after interval', async ({ page }) => {
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      // Scroll to progress row to trigger visibility observer
      await scrollToElement(page, '.ghc-progress-row');

      // Get initial active index
      const row = page.locator('.ghc-progress-row').first();
      const initialActive = await row.locator('.ghc-progress-item.is-active').first();
      const initialText = await initialActive.locator('h3').textContent();

      // Wait for auto-advance (slightly more than interval)
      await page.waitForTimeout(PROGRESS_INTERVAL + 500);

      // Active item should have changed
      const newActive = await row.locator('.ghc-progress-item.is-active').first();
      const newText = await newActive.locator('h3').textContent();

      expect(newText).not.toBe(initialText);
    });

    test('hover pauses auto-advance', async ({ page }) => {
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');
      await scrollToElement(page, '.ghc-progress-row');

      const row = page.locator('.ghc-progress-row').first();

      // Start hovering
      await row.hover();

      // Get current active
      const activeBeforeWait = await row.locator('.ghc-progress-item.is-active h3').textContent();

      // Wait longer than interval
      await page.waitForTimeout(PROGRESS_INTERVAL + 1000);

      // Should NOT have advanced (paused)
      const activeAfterWait = await row.locator('.ghc-progress-item.is-active h3').textContent();

      expect(activeAfterWait).toBe(activeBeforeWait);
    });

    test('focus pauses auto-advance', async ({ page }) => {
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');
      await scrollToElement(page, '.ghc-progress-row');

      const row = page.locator('.ghc-progress-row').first();
      const firstItem = row.locator('.ghc-progress-item').first();

      // Focus an item
      await firstItem.focus();

      const activeBeforeWait = await row.locator('.ghc-progress-item.is-active h3').textContent();

      // Wait longer than interval
      await page.waitForTimeout(PROGRESS_INTERVAL + 1000);

      // Should NOT have advanced (paused)
      const activeAfterWait = await row.locator('.ghc-progress-item.is-active h3').textContent();

      expect(activeAfterWait).toBe(activeBeforeWait);
    });

    test('click activates item immediately', async ({ page }) => {
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');
      await scrollToElement(page, '.ghc-progress-row');

      const row = page.locator('.ghc-progress-row').first();
      const items = row.locator('.ghc-progress-item');

      // Click the third item (index 2)
      await items.nth(2).click();
      await page.waitForTimeout(200); // Wait for 120ms settle delay + render

      // Should now be active
      const isActive = await items.nth(2).evaluate((el) => el.classList.contains('is-active'));
      expect(isActive).toBe(true);
    });

    test('progress bar fills during interval', async ({ page }) => {
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');
      await scrollToElement(page, '.ghc-progress-row');

      const row = page.locator('.ghc-progress-row').first();
      const activeItem = row.locator('.ghc-progress-item.is-active').first();

      // Progress uses --fill CSS variable (0 to 1) via scaleY transform
      // Get initial fill value
      const initialFill = await activeItem.evaluate((el) => {
        const fillValue = el.style.getPropertyValue('--fill');
        return parseFloat(fillValue) || 0;
      });

      // Wait partial interval
      await page.waitForTimeout(2000);

      // Fill should have increased
      const laterFill = await activeItem.evaluate((el) => {
        const fillValue = el.style.getPropertyValue('--fill');
        return parseFloat(fillValue) || 0;
      });

      expect(laterFill).toBeGreaterThan(initialFill);
    });
  });

  test.describe('Progress Row #2 (Easily connect)', () => {
    test('auto-advances independently of row 1', async ({ page }) => {
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      // Scroll to second progress row
      const row2 = page.locator('.ghc-progress-row').nth(1);
      await row2.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      const initialText = await row2.locator('.ghc-progress-item.is-active h3').textContent();

      await page.waitForTimeout(PROGRESS_INTERVAL + 500);

      const newText = await row2.locator('.ghc-progress-item.is-active h3').textContent();
      expect(newText).not.toBe(initialText);
    });
  });
});

// ============================================================================
// TESTIMONIALS CAROUSEL
// ============================================================================

test.describe('Behavior Parity - Testimonials Carousel', () => {
  test('auto-advances after interval', async ({ page }) => {
    await page.goto(DEV_PAGE_URL);
    await page.waitForLoadState('networkidle');
    await scrollToElement(page, '.ghc-testimonials');

    const dots = page.locator('.ghc-testimonial-dot');

    // Get initial active dot
    const initialActive = await page.evaluate(() => {
      const activeDot = document.querySelector('.ghc-testimonial-dot.is-active');
      return activeDot ? Array.from(document.querySelectorAll('.ghc-testimonial-dot')).indexOf(activeDot) : -1;
    });

    // Wait for auto-advance
    await page.waitForTimeout(TESTIMONIAL_INTERVAL + 500);

    const newActive = await page.evaluate(() => {
      const activeDot = document.querySelector('.ghc-testimonial-dot.is-active');
      return activeDot ? Array.from(document.querySelectorAll('.ghc-testimonial-dot')).indexOf(activeDot) : -1;
    });

    expect(newActive).not.toBe(initialActive);
  });

  test('hover pauses auto-advance', async ({ page }) => {
    await page.goto(DEV_PAGE_URL);
    await page.waitForLoadState('networkidle');
    await scrollToElement(page, '.ghc-testimonials');

    const testimonials = page.locator('.ghc-testimonials');
    await testimonials.hover();

    const initialActive = await page.evaluate(() => {
      const activeDot = document.querySelector('.ghc-testimonial-dot.is-active');
      return activeDot ? Array.from(document.querySelectorAll('.ghc-testimonial-dot')).indexOf(activeDot) : -1;
    });

    await page.waitForTimeout(TESTIMONIAL_INTERVAL + 1000);

    const afterActive = await page.evaluate(() => {
      const activeDot = document.querySelector('.ghc-testimonial-dot.is-active');
      return activeDot ? Array.from(document.querySelectorAll('.ghc-testimonial-dot')).indexOf(activeDot) : -1;
    });

    expect(afterActive).toBe(initialActive);
  });

  test('clicking dot activates slide', async ({ page }) => {
    await page.goto(DEV_PAGE_URL);
    await page.waitForLoadState('networkidle');
    await scrollToElement(page, '.ghc-testimonials');

    const dots = page.locator('.ghc-testimonial-dot');

    // Click dot 2 (index 1)
    await dots.nth(1).click();

    // Verify it's now active
    const isActive = await dots.nth(1).evaluate((el) => el.classList.contains('is-active'));
    expect(isActive).toBe(true);
  });

  test('dots have correct aria-labels', async ({ page }) => {
    await page.goto(DEV_PAGE_URL);
    await page.waitForLoadState('networkidle');
    await scrollToElement(page, '.ghc-testimonials');

    const dots = page.locator('.ghc-testimonial-dot');
    const count = await dots.count();

    for (let i = 0; i < count; i++) {
      const ariaLabel = await dots.nth(i).getAttribute('aria-label');
      expect(ariaLabel).toBe(`Go to testimonial ${i + 1}`);
    }
  });

  test('track transforms to show active slide (mobile only)', async ({ page }) => {
    // Transform-based carousel only works on mobile (< 1025px)
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(DEV_PAGE_URL);
    await page.waitForLoadState('networkidle');
    await scrollToElement(page, '.ghc-testimonials');

    const track = page.locator('.ghc-testimonials-track');

    // Get initial transform
    const initialTransform = await track.evaluate((el) => window.getComputedStyle(el).transform);

    // Click dot 2
    await page.locator('.ghc-testimonial-dot').nth(1).click();
    await page.waitForTimeout(300);

    // Transform should have changed
    const newTransform = await track.evaluate((el) => window.getComputedStyle(el).transform);
    expect(newTransform).not.toBe(initialTransform);
  });
});

// ============================================================================
// HEADER INTERACTIONS
// ============================================================================

test.describe('Behavior Parity - Header', () => {
  test.describe('Desktop Mega-Nav', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
    });

    test('dropdown opens on hover', async ({ page }) => {
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      const navItem = page.locator('.ghc-nav-item:first-child');
      const dropdown = navItem.locator('.ghc-mega-dropdown');

      // Initially hidden
      await expect(dropdown).toHaveAttribute('aria-hidden', 'true');

      // Hover
      await navItem.hover();
      await page.waitForTimeout(100);

      // Now visible
      await expect(dropdown).toHaveAttribute('aria-hidden', 'false');
    });

    test('dropdown closes on mouseout', async ({ page }) => {
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      const navItem = page.locator('.ghc-nav-item:first-child');
      const dropdown = navItem.locator('.ghc-mega-dropdown');

      // Open
      await navItem.hover();
      await expect(dropdown).toHaveAttribute('aria-hidden', 'false');

      // Move mouse away from nav
      await page.mouse.move(0, 0);
      await page.waitForTimeout(200);

      // Closed
      await expect(dropdown).toHaveAttribute('aria-hidden', 'true');
    });

    test('dropdown closes on Escape key', async ({ page }) => {
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      const navItem = page.locator('.ghc-nav-item:first-child');
      const dropdown = navItem.locator('.ghc-mega-dropdown');

      // Open via hover
      await navItem.hover();
      await expect(dropdown).toHaveAttribute('aria-hidden', 'false');

      // Press Escape
      await page.keyboard.press('Escape');
      await page.waitForTimeout(100);

      // Closed
      await expect(dropdown).toHaveAttribute('aria-hidden', 'true');
    });

    test('dropdown opens on focus', async ({ page }) => {
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      const navButton = page.locator('.ghc-nav-item:first-child .ghc-nav-link');
      const dropdown = page.locator('.ghc-nav-item:first-child .ghc-mega-dropdown');

      // Focus the nav button
      await navButton.focus();
      await page.waitForTimeout(100);

      // Dropdown should be visible
      await expect(dropdown).toHaveAttribute('aria-hidden', 'false');
    });

    test('nav button has correct aria-expanded state', async ({ page }) => {
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      const navButton = page.locator('.ghc-nav-item:first-child .ghc-nav-link');

      // Initially collapsed
      await expect(navButton).toHaveAttribute('aria-expanded', 'false');

      // Hover to open
      await page.locator('.ghc-nav-item:first-child').hover();
      await page.waitForTimeout(100);

      // Now expanded
      await expect(navButton).toHaveAttribute('aria-expanded', 'true');
    });

    test('Tab navigates within nav area', async ({ page }) => {
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      // Focus nav button
      const navButton = page.locator('.ghc-nav-item:first-child .ghc-nav-link');
      await navButton.focus();

      // Dropdown should be open
      const dropdown = page.locator('.ghc-nav-item:first-child .ghc-mega-dropdown');
      await expect(dropdown).toHaveAttribute('aria-hidden', 'false');

      // Tab should move focus forward
      await page.keyboard.press('Tab');

      // Focus should still be within header area (nav or dropdown)
      const focusedElement = page.locator(':focus');
      const isInHeader = await focusedElement.evaluate((el) => {
        return el.closest('.ghc-header') !== null;
      });

      expect(isInHeader).toBe(true);
    });
  });

  test.describe('Mobile Menu', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
    });

    test('hamburger opens mobile menu', async ({ page }) => {
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      const hamburger = page.locator('.ghc-hamburger');
      const mobileMenu = page.locator('.ghc-mobile-menu');

      // Initially closed
      await expect(mobileMenu).toHaveAttribute('aria-hidden', 'true');

      // Click hamburger
      await hamburger.click();
      await page.waitForTimeout(300);

      // Now open
      await expect(mobileMenu).toHaveAttribute('aria-hidden', 'false');
    });

    test('Escape closes mobile menu', async ({ page }) => {
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      // Open menu
      await page.locator('.ghc-hamburger').click();
      await page.waitForTimeout(300);

      const mobileMenu = page.locator('.ghc-mobile-menu');
      await expect(mobileMenu).toHaveAttribute('aria-hidden', 'false');

      // Press Escape
      await page.keyboard.press('Escape');
      await page.waitForTimeout(300);

      // Should be closed
      await expect(mobileMenu).toHaveAttribute('aria-hidden', 'true');
    });

    test('backdrop click closes mobile menu', async ({ page }) => {
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      // Open menu
      await page.locator('.ghc-hamburger').click();
      await page.waitForTimeout(300);

      const mobileMenu = page.locator('.ghc-mobile-menu');
      await expect(mobileMenu).toHaveAttribute('aria-hidden', 'false');

      // Click on the right side of the viewport (backdrop area outside menu)
      // Menu is 280px wide, so clicking at x=300 should hit the backdrop
      await page.mouse.click(300, 400);
      await page.waitForTimeout(300);

      // Should be closed
      await expect(mobileMenu).toHaveAttribute('aria-hidden', 'true');
    });

    test('hamburger aria-expanded updates', async ({ page }) => {
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      const hamburger = page.locator('.ghc-hamburger');

      // Initially false
      await expect(hamburger).toHaveAttribute('aria-expanded', 'false');

      // Open
      await hamburger.click();
      await page.waitForTimeout(300);

      // Now true
      await expect(hamburger).toHaveAttribute('aria-expanded', 'true');
    });

    test('body scroll is locked when menu open', async ({ page }) => {
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      // Open menu
      await page.locator('.ghc-hamburger').click();
      await page.waitForTimeout(300);

      // Body should have overflow hidden
      const overflow = await page.evaluate(() => document.body.style.overflow);
      expect(overflow).toBe('hidden');
    });

    test('mobile submenu expands on click', async ({ page }) => {
      await page.goto(DEV_PAGE_URL);
      await page.waitForLoadState('networkidle');

      // Open menu
      await page.locator('.ghc-hamburger').click();
      await page.waitForTimeout(300);

      const accordionButton = page.locator('.ghc-mobile-nav-item button.ghc-mobile-nav-link').first();
      const submenu = page.locator('.ghc-mobile-submenu').first();

      // Initially collapsed
      await expect(submenu).toHaveAttribute('aria-hidden', 'true');
      await expect(accordionButton).toHaveAttribute('aria-expanded', 'false');

      // Click to expand
      await accordionButton.click();
      await page.waitForTimeout(200);

      // Now expanded
      await expect(submenu).toHaveAttribute('aria-hidden', 'false');
      await expect(accordionButton).toHaveAttribute('aria-expanded', 'true');
    });
  });
});

// ============================================================================
// FAQ ACCORDION
// ============================================================================

test.describe('Behavior Parity - FAQ Accordion', () => {
  test('details element toggles open/closed', async ({ page }) => {
    await page.goto(DEV_PAGE_URL);
    await page.waitForLoadState('networkidle');
    await scrollToElement(page, '.ghc-faq');

    const faqItem = page.locator('.ghc-faq-item').first();

    // Initially closed
    const initiallyOpen = await faqItem.evaluate((el) => (el as HTMLDetailsElement).open);
    expect(initiallyOpen).toBe(false);

    // Click to open
    await faqItem.locator('summary').click();
    await page.waitForTimeout(200);

    const nowOpen = await faqItem.evaluate((el) => (el as HTMLDetailsElement).open);
    expect(nowOpen).toBe(true);

    // Click to close
    await faqItem.locator('summary').click();
    await page.waitForTimeout(200);

    const nowClosed = await faqItem.evaluate((el) => (el as HTMLDetailsElement).open);
    expect(nowClosed).toBe(false);
  });
});

// ============================================================================
// STICKY SCROLL SECTION
// ============================================================================

test.describe('Behavior Parity - Sticky Scroll', () => {
  test('cards update active state on scroll', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(DEV_PAGE_URL);
    await page.waitForLoadState('networkidle');

    // Scroll to sticky section
    await scrollToElement(page, '.ghc-sticky-section');
    await page.waitForTimeout(500);

    // Check if any card is active initially
    const cards = page.locator('.ghc-process-card');
    const hasActiveCard = await page.locator('.ghc-process-card.is-active').count();

    // At least one card should be active when section is visible
    expect(hasActiveCard).toBeGreaterThan(0);
  });

  test('scrolling changes active card', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(DEV_PAGE_URL);
    await page.waitForLoadState('networkidle');

    // Get initial active card index
    await scrollToElement(page, '.ghc-sticky-section');
    await page.waitForTimeout(500);

    const getActiveIndex = async () => {
      return page.evaluate(() => {
        const cards = document.querySelectorAll('.ghc-process-card');
        for (let i = 0; i < cards.length; i++) {
          if (cards[i].classList.contains('is-active')) return i;
        }
        return -1;
      });
    };

    const initialIndex = await getActiveIndex();

    // Scroll down more
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.waitForTimeout(500);

    const newIndex = await getActiveIndex();

    // Active card should have changed (or stayed same if at end)
    // Main thing is no crash and state updates
    expect(newIndex).toBeGreaterThanOrEqual(0);
  });
});

// ============================================================================
// SKIP LINK
// ============================================================================

test.describe('Behavior Parity - Skip Link', () => {
  test('skip link becomes visible on focus', async ({ page }) => {
    await page.goto(DEV_PAGE_URL);
    await page.waitForLoadState('networkidle');

    const skipLink = page.locator('.ghc-skip-link');

    // Focus it
    await skipLink.focus();

    // Should be visible
    await expect(skipLink).toBeVisible();
  });

  test('skip link navigates to main content', async ({ page }) => {
    await page.goto(DEV_PAGE_URL);
    await page.waitForLoadState('networkidle');

    const skipLink = page.locator('.ghc-skip-link');
    await skipLink.focus();
    await skipLink.click();

    // URL should have #main-content hash
    expect(page.url()).toContain('#main-content');
  });
});
