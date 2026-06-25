import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "list",
  timeout: 60000,
  use: {
    baseURL: process.env.CI ? "http://localhost:4173" : "http://localhost:5175",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile",
      use: { ...devices["iPhone 14"] },
    },
  ],
  webServer: {
    command: process.env.CI ? "npm run preview" : "npm run dev",
    url: process.env.CI ? "http://localhost:4173" : "http://localhost:5175",
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
