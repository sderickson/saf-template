import { mountWithPlugins } from "@saflib/vue/testing";
import type { ComponentMountingOptions } from "@vue/test-utils";
import type { Component } from "vue";
import { createRootRouter } from "./router.ts";
import { webRootStrings } from "./strings.ts";
import { webCommonStrings } from "@your-org/web-common/strings";

export const mountTestApp = <C extends Component>(
  Component: C,
  options: ComponentMountingOptions<C> = {},
) => {
  return mountWithPlugins(Component, options, {
    router: createRootRouter(),
    i18nMessages: {
      ...webRootStrings,
      ...webCommonStrings,
    },
  });
};
