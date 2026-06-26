import { test, expect } from "@playwright/test";

test.use({ viewport: { width: 375, height: 667 } });

test.describe("Mobile Experience", () => {
  test("hamburger menu opens and closes", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector("h1", { timeout: 15000 });
    const menuButton = page.getByRole("button", { name: /open menu/i });
    await expect(menuButton).toBeVisible({ timeout: 10000 });

    await menuButton.click();
    await expect(
      page.getByRole("navigation", { name: "Mobile navigation" }),
    ).toBeVisible({ timeout: 5000 });

    // Close menu
    await menuButton.click();
    await expect(
      page.getByRole("navigation", { name: "Mobile navigation" }),
    ).not.toBeVisible({ timeout: 5000 });
  });

  test("mobile nav links work", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector("h1", { timeout: 15000 });
    await page.getByRole("button", { name: /open menu/i }).click();
    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByText("Services")
      .click();
    await expect(page).toHaveURL(/\/services/, { timeout: 10000 });
  });

  test("floating contact widget appears on scroll", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector("h1", { timeout: 15000 });

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 600));
    await page.waitForTimeout(800);
    const contactBtn = page.getByRole("button", {
      name: /open contact options/i,
    });
    await expect(contactBtn).toBeVisible({ timeout: 5000 });
  });
});
