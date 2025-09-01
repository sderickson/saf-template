import { makeReverseTComposable } from "@saflib/vue";
import { webRootStrings } from "./strings.ts";
import { webCommonStrings } from "@your-org/web-common/strings";

export const useReverseT = makeReverseTComposable({
  ...webRootStrings,
  ...webCommonStrings,
});
