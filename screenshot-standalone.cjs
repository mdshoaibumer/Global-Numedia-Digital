const { chromium } = require("@playwright/test");
const path = require("path");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const artifactDir =
    "C:\\Users\\mdsho\\.gemini\\antigravity\\brain\\130c7d4e-69cf-473c-b70c-6b84fd309485";
  console.log("Navigating to http://localhost:5173/...");
  await page.goto("http://localhost:5173/");
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(1500);

  await page.screenshot({
    path: path.join(artifactDir, "landing_page_updated.png"),
    fullPage: false,
  });

  console.log("Screenshot saved.");
  await browser.close();
})();
