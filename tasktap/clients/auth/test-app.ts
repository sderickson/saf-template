import { mountWithPlugins } from "@saflib/vue/testing";
import type { ComponentMountingOptions } from "@vue/test-utils";
import type { Component } from "vue";
import { createAuthRouter } from "./router.ts";
import { auth_strings } from "./strings.ts";
import { identityServiceFakeHandlers } from "@saflib/auth/fakes";

export const mountTestApp = <C extends Component>(
  Component: C,
  options: ComponentMountingOptions<C> = {},
) => {
  return mountWithPlugins(Component, options, {
    router: createAuthRouter(),
    i18nMessages: {
      ...auth_strings,
    },
  });
};

// TODO: import and add here any other mock handlers from sdk packages this SPA depends on
export const testAppHandlers = [...identityServiceFakeHandlers];
