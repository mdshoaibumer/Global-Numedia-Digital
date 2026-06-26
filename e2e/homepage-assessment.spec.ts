import { test } from "@playwright/test";
import path from "path";

test("take landing page screenshot", async ({ page }) => {
  const artifactDir =
    "C:\\Users\\mdsho\\.gemini\\antigravity\\brain\\130c7d4e-69cf-473c-b70c-6b84fd309485";
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(1500); // wait for initial animations

  await page.screenshot({
    path: path.join(artifactDir, "landing_page.png"),
    fullPage: false,
  });
});
