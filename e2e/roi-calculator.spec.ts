import { test, expect } from "@playwright/test";

test.describe("ROI Calculator Funnel", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Scroll to ROI Calculator and wait for it to appear
    await page.evaluate(() => {
      document.getElementById("roi-calculator")?.scrollIntoView({ behavior: "instant" });
    });
    await page.waitForTimeout(1000);
  });

  test("shows step 1 (industry selection)", async ({ page }) => {
    await expect(page.getByText("What industry are you in?")).toBeVisible({ timeout: 15000 });
    await expect(page.getByRole("button", { name: "Healthcare" })).toBeVisible();
  });

  test("can complete step 1 and proceed", async ({ page }) => {
    await page.getByRole("button", { name: "Healthcare" }).click({ timeout: 15000 });
    await page.getByRole("button", { name: /continue/i }).click();
    await expect(page.getByText("monthly marketing budget")).toBeVisible({ timeout: 10000 });
  });

  test("can complete full funnel and see results", async ({ page }) => {
    // Step 1: Industry
    await page.getByRole("button", { name: "Healthcare" }).click({ timeout: 15000 });
    await page.getByRole("button", { name: /continue/i }).click();

    // Step 2: Budget
    await page.getByText("₹3–7 Lakh/mo").click({ timeout: 10000 });
    await page.getByRole("button", { name: /continue/i }).click();

    // Step 3: Goal
    await page.getByText("Generate more leads").click({ timeout: 10000 });
    await page.getByRole("button", { name: /continue/i }).click();

    // Step 4: Contact info
    await page.getByPlaceholder("Your name").fill("Test User", { timeout: 10000 });
    await page.getByPlaceholder("Work email").fill("test@example.com");
    await page.getByRole("button", { name: /see my results/i }).click();

    // Results panel should show
    await expect(page.getByText("Your Growth Projection")).toBeVisible({ timeout: 10000 });
    await expect(page.getByText("Projected Monthly Leads")).toBeVisible();
  });

  test("continue button is disabled without selection", async ({ page }) => {
    await expect(page.getByText("What industry are you in?")).toBeVisible({ timeout: 15000 });
    const continueBtn = page.getByRole("button", { name: /continue/i });
    await expect(continueBtn).toBeDisabled();
  });
});
