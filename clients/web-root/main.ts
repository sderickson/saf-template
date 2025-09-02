import { createVueApp, setClientName } from "@saflib/vue";
import App from "./RootApp.vue";
import { vuetifyConfig } from "@your-org/web-common";
import { router } from "./router.ts";
import { webRootStrings } from "./strings.ts";
import { webCommonStrings } from "@your-org/web-common/strings";
import "@saflib/vue/components"; // to ensure vuetify styles are included

export const main = () => {
  setClientName("web-root");
  createVueApp(App, {
    router,
    vuetifyConfig,
    i18nMessages: {
      ...webRootStrings,
      ...webCommonStrings,
    },
  });
};
