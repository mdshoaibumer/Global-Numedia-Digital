import { test, expect } from "@playwright/test";

test.use({ colorScheme: "dark" });

test.describe("Theme Toggle", () => {
  test("starts in dark mode with dark color scheme", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector("h1", { timeout: 15000 });
    // With prefers-color-scheme: dark, should start in dark mode
    await expect(page.locator("html")).toHaveClass(/dark/, { timeout: 5000 });
  });

  test("can toggle to light theme", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector("h1", { timeout: 15000 });
    await expect(page.locator("html")).toHaveClass(/dark/, { timeout: 5000 });

    // Click theme toggle - in dark mode it says "switch to light"
    await page.getByRole("button", { name: /switch to light mode/i }).click();
    await expect(page.locator("html")).not.toHaveClass(/dark/);
  });

  test("can toggle back to dark theme", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector("h1", { timeout: 15000 });
    await expect(page.locator("html")).toHaveClass(/dark/, { timeout: 5000 });

    // Toggle to light
    await page.getByRole("button", { name: /switch to light mode/i }).click();
    await expect(page.locator("html")).not.toHaveClass(/dark/);

    // Toggle back to dark
    await page.getByRole("button", { name: /switch to dark mode/i }).click();
    await expect(page.locator("html")).toHaveClass(/dark/, { timeout: 5000 });
  });

  test("theme persists across page navigation", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector("h1", { timeout: 15000 });

    // Toggle to light
    await page.getByRole("button", { name: /switch to light mode/i }).click();
    await expect(page.locator("html")).not.toHaveClass(/dark/);

    // Navigate to about page
    await page.goto("/about");
    await page.waitForSelector("h1", { timeout: 15000 });

    // Theme should still be light
    await expect(page.locator("html")).not.toHaveClass(/dark/);
  });

  test("brand name visible in both themes", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector("h1", { timeout: 15000 });

    // Check in dark mode
    const brandText = page.locator("text=Global Numedia").first();
    await expect(brandText).toBeVisible();

    // Switch to light
    await page.getByRole("button", { name: /switch to light mode/i }).click();
    await expect(brandText).toBeVisible();
  });
});
