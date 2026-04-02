import { makeReverseTComposable } from "@saflib/vue";
import { example_common_strings } from "./strings.ts";

export const useReverseT = makeReverseTComposable(
  example_common_strings,
);
