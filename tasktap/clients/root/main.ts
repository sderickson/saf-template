import { createVueApp } from "@saflib/vue";
import { setClientName } from "@saflib/links";
import Spa from "./RootSpa.vue";
import { createRootRouter } from "./router.ts";
import { root_strings } from "./strings.ts";

export const main = () => {
  setClientName("root");
  const router = createRootRouter();
  createVueApp(Spa, {
    router,
    i18nMessages: {
      ...root_strings,
    },
  });
};
