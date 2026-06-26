import { test } from "@playwright/test";
import path from "path";

test("take 25 UX screenshots", async ({ page }) => {
  const artifactDir =
    "C:\\Users\\mdsho\\.gemini\\antigravity\\brain\\130c7d4e-69cf-473c-b70c-6b84fd309485";
  let count = 1;

  async function snap(name: string) {
    await page.waitForTimeout(1000);
    await page.screenshot({
      path: path.join(
        artifactDir,
        `${count.toString().padStart(2, "0")}_${name}.png`,
      ),
    });
    count++;
  }

  // 1. Homepage
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  await snap("home_hero");
  for (let i = 0; i < 9; i++) {
    await page.evaluate(() => window.scrollBy(0, window.innerHeight * 0.8));
    await snap(`home_scroll_${i + 1}`);
  }

  // 2. Services
  await page.goto("/services");
  await page.waitForLoadState("networkidle");

  await snap("services_hero");
  for (let i = 0; i < 4; i++) {
    await page.evaluate(() => window.scrollBy(0, window.innerHeight * 0.8));
    await snap(`services_scroll_${i + 1}`);
  }

  // 3. About
  await page.goto("/about");
  await page.waitForLoadState("networkidle");

  await snap("about_hero");
  for (let i = 0; i < 4; i++) {
    await page.evaluate(() => window.scrollBy(0, window.innerHeight * 0.8));
    await snap(`about_scroll_${i + 1}`);
  }

  // 4. Contact
  await page.goto("/contact");
  await page.waitForLoadState("networkidle");

  await snap("contact_hero");
  for (let i = 0; i < 4; i++) {
    await page.evaluate(() => window.scrollBy(0, window.innerHeight * 0.8));
    await snap(`contact_scroll_${i + 1}`);
  }
});
