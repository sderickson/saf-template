import { createVueApp, setClientName } from "@saflib/vue";
import App from "./AuthApp.vue";
import { vuetifyConfig } from "@your-org/web-common";
import { router } from "./router";
import { authAppStrings } from "./strings";
import { webCommonStrings } from "@your-org/web-common/strings";

export const main = () => {
  setClientName("web-auth");
  createVueApp(App, {
    router,
    vuetifyConfig,
    i18nMessages: {
      ...authAppStrings,
      ...webCommonStrings,
    },
  });
};
