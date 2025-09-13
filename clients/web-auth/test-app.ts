import { mountWithPlugins } from "@saflib/vue/testing";
import type { ComponentMountingOptions } from "@vue/test-utils";
import type { Component } from "vue";
import { createAuthRouter } from "./router.ts";
import { authAppStrings } from "./strings.ts";
import { webCommonStrings } from "@your-org/web-common/strings";

export const mountTestApp = <C extends Component>(
  Component: C,
  options: ComponentMountingOptions<C> = {},
) => {
  return mountWithPlugins(Component, options, {
    router: createAuthRouter(),
    i18nMessages: {
      ...authAppStrings,
      ...webCommonStrings,
    },
  });
};
