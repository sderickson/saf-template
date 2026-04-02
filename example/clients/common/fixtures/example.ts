import type { Page } from "@playwright/test";
import { SafAppFixture } from "@saflib/vue/fixtures";

/**
 * Unified Example fixture that extends SafAppFixture.
 * This is the main fixture to use in Example E2E tests.
 */
export class ExampleFixture extends SafAppFixture {
  constructor(page: Page) {
    super(page);
  }
}

/**
 * Playwright fixture function for ExampleFixture that automatically sets up:
 * - Clean screenshots (via SafAppFixture)
 * - Tight Android viewport (via SafAppFixture)
 */
export const exampleFixture = async (
  { page }: { page: Page },
  use: (fixture: ExampleFixture) => Promise<void>,
) => {
  const fixture = new ExampleFixture(page);
  await fixture.cleanScreenshots();
  await fixture.useTightAndroidViewport();
  await use(fixture);
};

