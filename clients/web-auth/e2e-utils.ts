import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { getUniqueEmail, getByString } from "@saflib/playwright";
import { authAppStrings } from "@your-org/web-auth/strings";

export async function registerUser(
  page: Page,
  email?: string,
): Promise<string> {
  const userEmail = email || getUniqueEmail();

  await page.goto("http://docker.localhost/");
  await getByString(page, "here").click();

  // signup
  await expect(
    getByString(page, authAppStrings.saflib_login_page.log_into_your_account),
  ).toBeVisible();
  await getByString(page, authAppStrings.saflib_login_page.sign_up_now).click();
  await expect(
    getByString(page, authAppStrings.saflib_register_page.create_your_account),
  ).toBeVisible();
  await getByString(page, authAppStrings.saflib_register_page.email).fill(
    userEmail,
  );
  await getByString(page, authAppStrings.saflib_register_page.password).fill(
    "asdfasdf",
  );
  console.log("register with", {
    email: userEmail,
    password: "asdfasdf",
  });
  await getByString(
    page,
    authAppStrings.saflib_register_page.confirm_password,
  ).fill("asdfasdf");
  await getByString(page, authAppStrings.saflib_register_page.register).click();
  await getByString(page, "Stub Page").waitFor();

  return userEmail;
}
