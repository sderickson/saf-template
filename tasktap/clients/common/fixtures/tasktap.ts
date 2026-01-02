import type { Page } from "@playwright/test";
import { SafAppFixture } from "@saflib/vue/fixtures";

/**
 * Unified Tasktap fixture that extends SafAppFixture.
 * This is the main fixture to use in Tasktap E2E tests.
 */
export class TasktapFixture extends SafAppFixture {
  constructor(page: Page) {
    super(page);
  }
}

/**
 * Playwright fixture function for TasktapFixture that automatically sets up:
 * - Clean screenshots (via SafAppFixture)
 * - Tight Android viewport (via SafAppFixture)
 */
export const tasktapFixture = async (
  { page }: { page: Page },
  use: (fixture: TasktapFixture) => Promise<void>,
) => {
  const fixture = new TasktapFixture(page);
  await fixture.cleanScreenshots();
  await fixture.useTightAndroidViewport();
  await use(fixture);
};

