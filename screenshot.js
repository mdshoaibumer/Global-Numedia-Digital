import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  
  const dest = 'C:\\Users\\mdsho\\.gemini\\antigravity\\brain\\a5bc0b08-df47-410a-b7de-943bb5966377\\screenshot.png';
  await page.screenshot({ path: dest, fullPage: true });
  await browser.close();
  console.log('Screenshot saved to', dest);
})();
