import { createAuthRouter } from "@saflib/auth";
import { linkToHref } from "@saflib/links";
import { rootLinks } from "@your-org/web-root-links";

export const router = createAuthRouter({
  defaultRedirect: linkToHref(rootLinks.home),
});
