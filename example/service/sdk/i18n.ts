import { makeReverseTComposable } from "@saflib/vue";
import { example_sdk_strings } from "./strings.ts";

export const useReverseT = makeReverseTComposable(example_sdk_strings);
