import { createVueApp } from "@saflib/vue";
import { setClientName } from "@saflib/links";
import Spa from "./AdminSpa.vue";
import { createAdminRouter } from "./router.ts";
import { admin_strings } from "./strings.ts";

export const main = () => {
  setClientName("admin");
  const router = createAdminRouter();
  createVueApp(Spa, {
    router,
    i18nMessages: {
      ...admin_strings,
    },
  });
};
