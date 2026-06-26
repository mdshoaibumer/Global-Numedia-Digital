import { test } from "@playwright/test";
import path from "path";

test("take mobile screenshots of homepage sections", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(3000);

  const artifactDir =
    "C:\\Users\\mdsho\\.gemini\\antigravity\\brain\\cab25866-03aa-4ef9-b8af-f66227e16484";

  await page.screenshot({
    path: path.join(artifactDir, "mobile_fullpage.png"),
  });
  await page.screenshot({ path: path.join(artifactDir, "mobile_hero.png") });

  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: path.join(artifactDir, "mobile_section_1.png"),
  });
});
