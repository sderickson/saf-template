import { expect, test as setup } from "@playwright/test";

setup("check docker service health", async ({ page }) => {
  let response;
  let attempts = 0;
  const maxAttempts = 50;

  while (attempts < maxAttempts) {
    response = await page.goto("http://api.docker.localhost/health");
    if (response && response.status() === 200) {
      break;
    }
    await page.waitForTimeout(200);
    attempts++;
  }

  expect(response?.status()).toBe(200);
});
