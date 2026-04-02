import { describe, it, expect, vi } from "vitest";
import { stubGlobals, mountWithPlugins } from "@saflib/vue/testing";
import { createRouter, createMemoryHistory } from "vue-router";
import { PageNotFound } from "@saflib/vue/components";
import AuthSpa from "./AuthSpa.vue";
import { testAppHandlers } from "./test-app.ts";
import { auth_strings } from "./strings.ts";
import { setupMockServer } from "@saflib/sdk/testing/mock";

describe("AuthSpa", () => {
  stubGlobals();
  setupMockServer(testAppHandlers);

  it("should render the shell for an unknown route", async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: "/:pathMatch(.*)*", component: PageNotFound }],
    });
    await router.push("/404");
    await router.isReady();

    const wrapper = mountWithPlugins(AuthSpa, {}, {
      router,
      i18nMessages: auth_strings,
    });
    await vi.waitFor(() => expect(wrapper.text()).toContain("Page Not Found"));
    wrapper.unmount();
  });
});
