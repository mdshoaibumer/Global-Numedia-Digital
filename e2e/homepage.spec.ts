import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Wait for app to hydrate
    await page.waitForSelector("h1", { timeout: 15000 });
  });

  test("loads and shows hero heading", async ({ page }) => {
    const h1 = page.locator("h1");
    await expect(h1).toBeVisible({ timeout: 15000 });
    await expect(h1).toContainText("grow");
  });

  test("header is visible and contains brand name", async ({ page }) => {
    await expect(
      page.locator("header").getByText("Global Numedia"),
    ).toBeVisible({ timeout: 10000 });
  });

  test("navigation links are present", async ({ page, isMobile }) => {
    if (isMobile) {
      await page.getByRole("button", { name: /open menu/i }).click();
      const nav = page.getByRole("navigation", { name: "Mobile navigation" });
      await expect(nav).toBeVisible({ timeout: 10000 });
      await expect(nav.getByText("Services")).toBeVisible();
      await expect(nav.getByText("Contact")).toBeVisible();
    } else {
      const nav = page.getByRole("navigation", { name: "Main navigation" });
      await expect(nav).toBeVisible({ timeout: 10000 });
      await expect(nav.getByText("Services")).toBeVisible();
      await expect(nav.getByText("Contact")).toBeVisible();
    }
  });

  test("hero CTA buttons are visible", async ({ page }) => {
    await expect(
      page.getByRole("link", { name: /get in touch/i }).first(),
    ).toBeVisible({ timeout: 15000 });
    await expect(
      page.getByRole("link", { name: /whatsapp/i }).first(),
    ).toBeVisible();
  });

  test("services section renders cards", async ({ page }) => {
    const section = page.locator("#services");
    await section.scrollIntoViewIfNeeded();
    await expect(
      section.getByText("Custom Websites & Maintenance"),
    ).toBeVisible({ timeout: 10000 });
    await expect(section.getByText("Graphics Designs")).toBeVisible();
    await expect(
      section.getByText("SEO Marketing & Advertising"),
    ).toBeVisible();
  });

  test("footer is present", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);
    await expect(
      page.locator("footer").getByText("hello@globalnumedia.digital"),
    ).toBeVisible({ timeout: 10000 });
  });
});
