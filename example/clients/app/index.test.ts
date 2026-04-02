import { describe, it, expect, vi } from "vitest";
import { stubGlobals, mountWithPlugins } from "@saflib/vue/testing";
import { createRouter, createMemoryHistory } from "vue-router";
import { PageNotFound } from "@saflib/vue/components";
import AppSpa from "./AppSpa.vue";
import { testAppHandlers } from "./test-app.ts";
import { app_strings } from "./strings.ts";
import { setupMockServer } from "@saflib/sdk/testing/mock";

describe("AppSpa", () => {
  stubGlobals();
  setupMockServer(testAppHandlers);

  it("should render the shell for an unknown route", async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: "/:pathMatch(.*)*", component: PageNotFound }],
    });
    await router.push("/404");
    await router.isReady();

    const wrapper = mountWithPlugins(AppSpa, {}, {
      router,
      i18nMessages: app_strings,
    });
    await vi.waitFor(() => expect(wrapper.text()).toContain("Page Not Found"));
    wrapper.unmount();
  });
});
