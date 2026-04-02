import { mountWithPlugins } from "@saflib/vue/testing";
import type { ComponentMountingOptions } from "@vue/test-utils";
import type { Component } from "vue";
import { example_sdk_strings } from "./strings.ts";
import { exampleServiceFakeHandlers } from "./fakes.ts";
import { router } from "./router.ts";
import { resetMocks } from "./fakes.ts";

export const mountTestApp = <C extends Component>(
  Component: C,
  options: ComponentMountingOptions<C> = {},
) => {
  return mountWithPlugins(Component, options, {
    i18nMessages: {
      ...example_sdk_strings,
    },
    router,
  });
};

export const testAppHandlers = [...exampleServiceFakeHandlers];
export { resetMocks };