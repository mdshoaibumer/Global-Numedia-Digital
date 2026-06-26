import { test, expect } from "@playwright/test";

test.describe("Navigation & Routing", () => {
  test("can navigate to services page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("navigation", { name: "Main navigation" }).getByText("Services").click();
    await expect(page).toHaveURL(/\/services/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible({ timeout: 10000 });
  });

  test("can navigate to contact page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("navigation", { name: "Main navigation" }).getByText("Contact").click();
    await expect(page).toHaveURL(/\/contact/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible({ timeout: 10000 });
  });



  test("404 page shows for invalid routes", async ({ page }) => {
    await page.goto("/this-does-not-exist");
    await expect(page.getByText("404")).toBeVisible({ timeout: 10000 });
    await expect(page.getByRole("link", { name: /back home/i })).toBeVisible();
  });

  test("back home from 404 returns to homepage", async ({ page }) => {
    await page.goto("/this-does-not-exist");
    await page.getByRole("link", { name: /back home/i }).click();
    await expect(page).toHaveURL("/");
  });
});
