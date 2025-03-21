import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./specs",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: 'http://docker.localhost/',
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "server health",
      testMatch: /global\.setup\.ts/,
    },
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
      teardown: "shut down docker compose",
      dependencies: ["server health"],
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
      teardown: "shut down docker compose",
      dependencies: ["server health"],
    },
    {
      name: "shut down docker compose",
      testMatch: /global\.teardown\.ts/,
    },
  ],

  webServer: {
    command: "npm run dev-clean-slate 2>&1 > last-docker-compose.log",
    url: "http://docker.localhost/",
    reuseExistingServer: true,
  },
});
