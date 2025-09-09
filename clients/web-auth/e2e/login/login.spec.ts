import { test, expect } from "@playwright/test";
import {
  cleanScreenshots,
  getUniqueEmail,
  tightAndroidViewport,
  attachScreenshot,
  getByString,
} from "@saflib/playwright";
import { registerUser } from "../../e2e-utils";
import { authAppStrings } from "@saflib/auth/strings";
import { linkToHref } from "@saflib/links";
import { authLinks } from "@saflib/auth-links";

test("login doesnt exist", async ({ page }) => {
  await page.goto(linkToHref(authLinks.login));
  await page.getByRole("textbox", { name: "Email address" }).click();
  await page
    .getByRole("textbox", { name: "Email address" })
    .fill(getUniqueEmail());
  await page
    .getByRole("textbox", { name: "Password Password" })
    .fill("wrongpassword");
  await page.getByRole("button", { name: "Log In" }).click();
  await expect(page.getByText("Invalid credentials")).toBeVisible();
});

test("login", async ({ page }) => {
  await cleanScreenshots();
  page.setViewportSize(tightAndroidViewport);
  const testEmail = await registerUser(page);
  await page.goto(linkToHref(authLinks.login));
  await attachScreenshot(page);
  await getByString(page, authAppStrings.saflib_login_page.email).fill(
    testEmail,
  );
  const testPassword = "asdfasdf";
  await page
    .getByRole("textbox", { name: "Password Password" })
    .fill(testPassword);
  console.log("login with", {
    email: testEmail,
    password: testPassword,
  });
  await attachScreenshot(page);
  await getByString(page, authAppStrings.saflib_login_page.log_in).click();
  await getByString(page, "Stub Page").waitFor();
  await attachScreenshot(page, {
    fullPage: false,
  });
});
