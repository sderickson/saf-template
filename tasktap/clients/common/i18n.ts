import { makeReverseTComposable } from "@saflib/vue";
import { tasktap_common_strings } from "./strings.ts";

export const useReverseT = makeReverseTComposable(
  tasktap_common_strings,
);
