import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { getUniqueEmail, getByString } from "@saflib/playwright";
import { authAppStrings } from "@your-org/web-auth/strings";

export async function registerUser(
  page: Page,
  email?: string
): Promise<string> {
  const userEmail = email || getUniqueEmail();

  await page.goto("http://docker.localhost/");
  await page
    .locator("#hero-section")
    .getByRole("link", { name: "Sign Up" })
    .click();

  // signup
  await expect(
    getByString(page, authAppStrings.saflib_register_page.create_your_account)
  ).toBeVisible();
  await getByString(page, authAppStrings.saflib_register_page.first_name).fill(
    "John"
  );
  await getByString(page, authAppStrings.saflib_register_page.last_name).fill(
    "Doe"
  );
  await getByString(page, authAppStrings.saflib_register_page.email).fill(
    userEmail
  );
  await getByString(page, authAppStrings.saflib_register_page.password).fill(
    "asdfasdf"
  );
  await getByString(
    page,
    authAppStrings.saflib_register_page.confirm_password
  ).fill("asdfasdf");
  await getByString(page, authAppStrings.saflib_register_page.register).click();

  return userEmail;
}
