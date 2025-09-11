import { test } from "@playwright/test";
import {
  cleanScreenshots,
  tightAndroidViewport,
  attachScreenshot,
  getByString,
  getUniqueEmail,
} from "@saflib/playwright";
import { linkToHref } from "@saflib/links";
import { authLinks } from "@saflib/auth-links";
import { authAppStrings } from "@your-org/web-auth/strings";

test("register", async ({ page }) => {
  await cleanScreenshots();
  page.setViewportSize(tightAndroidViewport);

  await page.goto(linkToHref(authLinks.register));
  await attachScreenshot(page);
  await getByString(page, authAppStrings.saflib_register_page.email).fill(
    getUniqueEmail(),
  );
  await page
    .getByRole("textbox", { name: "Password Password" })
    .fill("asdfasdf");
  await getByString(
    page,
    authAppStrings.saflib_register_page.confirm_password,
  ).fill("asdfasdf");
  await attachScreenshot(page);
  await getByString(page, authAppStrings.saflib_register_page.register).click();
  await getByString(page, "Stub Page").waitFor();
  await attachScreenshot(page);
});
