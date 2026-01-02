import { createVueApp } from "@saflib/vue";
import { setClientName } from "@saflib/links";
import Spa from "./AccountSpa.vue";
import { createAccountRouter } from "./router.ts";
import { account_strings } from "./strings.ts";

export const main = () => {
  setClientName("account");
  const router = createAccountRouter();
  createVueApp(Spa, {
    router,
    i18nMessages: {
      ...account_strings,
    },
  });
};
