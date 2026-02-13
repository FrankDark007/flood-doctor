import { test, expect } from '@playwright/test';

test.describe('Site Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('homepage loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Flood Doctor/);
  });

  test('logo links to homepage', async ({ page }) => {
    await page.goto('/about/');
    await page.click('a[aria-label="Flood Doctor Home"]');
    await expect(page).toHaveURL('/');
  });

  test('can navigate to Services page', async ({ page }) => {
    await page.click('text=Services');
    await expect(page).toHaveURL(/\/services/);
  });

  test('can navigate to About page', async ({ page }) => {
    await page.click('text=About');
    await expect(page).toHaveURL('/about/');
  });

  test('can navigate to Contact page', async ({ page }) => {
    await page.click('text=Contact');
    await expect(page).toHaveURL('/contact/');
  });

  test('mobile menu opens and closes', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();

    // Open mobile menu
    await page.click('button[aria-label="Open menu"]');
    await expect(page.locator('text=FLOOD DOCTOR').nth(1)).toBeVisible();

    // Close mobile menu
    await page.click('button[aria-label="Close menu"]');
    await expect(page.locator('.translate-x-full')).toBeVisible();
  });

  test('command palette opens with Cmd+K', async ({ page }) => {
    await page.keyboard.press('Meta+k');
    await expect(page.locator('input[placeholder*="Search"]')).toBeVisible();

    // Close with Escape
    await page.keyboard.press('Escape');
    await expect(page.locator('input[placeholder*="Search"]')).not.toBeVisible();
  });
});

test.describe('Service Pages', () => {
  test('water damage page loads correctly', async ({ page }) => {
    await page.goto('/services/residential/restoration-services/water-damage-restoration/');
    await expect(page.locator('h1')).toContainText(/Water Damage/);
  });

  test('service pages have breadcrumbs', async ({ page }) => {
    await page.goto('/services/residential/restoration-services/water-damage-restoration/');
    await expect(page.locator('nav[aria-label="Breadcrumb"]')).toBeVisible();
  });

  test('service pages have CTA buttons', async ({ page }) => {
    await page.goto('/services/residential/restoration-services/water-damage-restoration/');
    await expect(page.locator('text=Request Service')).toBeVisible();
  });
});

test.describe('SEO & Accessibility', () => {
  test('homepage has meta description', async ({ page }) => {
    await page.goto('/');
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDescription).toBeTruthy();
    expect(metaDescription!.length).toBeGreaterThan(100);
  });

  test('pages have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    const h1 = await page.locator('h1').count();
    expect(h1).toBeGreaterThan(0);
  });

  test('images have alt text', async ({ page }) => {
    await page.goto('/');
    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      // Allow empty alt for decorative images, but attribute should exist
      expect(alt !== null).toBe(true);
    }
  });

  test('skip link is functional', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const skipLink = page.locator('text=Skip to content');
    await expect(skipLink).toBeFocused();
  });
});
