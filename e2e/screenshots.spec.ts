import { test } from "@playwright/test";
import path from "path";

test("take screenshots of homepage sections", async ({ page, isMobile }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(3000); // wait for initial animations

  const artifactDir =
    "C:\\Users\\mdsho\\.gemini\\antigravity\\brain\\cab25866-03aa-4ef9-b8af-f66227e16484";

  await page.screenshot({
    path: path.join(artifactDir, "fullpage.png"),
    fullPage: !isMobile,
  });

  await page.screenshot({ path: path.join(artifactDir, "hero.png") });

  // Scroll a bit down and take a few more screenshots
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(artifactDir, "section_1.png") });

  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(artifactDir, "section_2.png") });

  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(artifactDir, "section_3.png") });
});
