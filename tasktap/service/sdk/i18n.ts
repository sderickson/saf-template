import { makeReverseTComposable } from "@saflib/vue";
import { tasktapSdkStrings } from "./strings.ts";

export const useReverseT = makeReverseTComposable(tasktapSdkStrings);
