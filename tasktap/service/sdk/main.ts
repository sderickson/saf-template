import App from "./App.vue";
import { createVueApp } from "@saflib/vue";
import { setClientName } from "@saflib/links";
import "@saflib/vue/components";
import { tasktapSdkStrings } from "./strings";
import { setupWorker } from "msw/browser";
import { tasktapServiceFakeHandlers } from "./fakes.ts";
import { http, bypass } from "msw";
import { router } from "./router.ts";

export const main = async () => {
  setClientName("root");
  const server = setupWorker(
    ...tasktapServiceFakeHandlers,
    http.get("*", ({ request }) => {
      const originalUrl = new URL(request.url);
      const proxyRequest = new Request(originalUrl, {
        headers: request.headers,
      });
      return fetch(bypass(proxyRequest));
    }),
  );
  await server.start({ onUnhandledRequest: "error" });
  createVueApp(App, {
    i18nMessages: {
      ...tasktapSdkStrings,
    },
    router,
  });
};

main();
