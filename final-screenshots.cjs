const { chromium } = require("@playwright/test");
const path = require("path");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });

  const artifactDir =
    "C:\\Users\\mdsho\\.gemini\\antigravity\\brain\\130c7d4e-69cf-473c-b70c-6b84fd309485";
  console.log("Navigating to Home...");
  await page.goto("http://localhost:5173/");
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(2000);

  await page.screenshot({
    path: path.join(artifactDir, "final_home.png"),
    fullPage: true,
  });

  console.log("Navigating to Services...");
  await page.goto("http://localhost:5173/services");
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(2000);

  await page.screenshot({
    path: path.join(artifactDir, "final_services.png"),
    fullPage: true,
  });

  console.log("Navigating to Contact...");
  await page.goto("http://localhost:5173/contact");
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(2000);

  await page.screenshot({
    path: path.join(artifactDir, "final_contact.png"),
    fullPage: true,
  });

  console.log("Screenshots saved.");
  await browser.close();
})();
