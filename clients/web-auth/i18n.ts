import { makeReverseTComposable } from "@saflib/vue";
import { authAppStrings } from "./strings.ts";

export const useReverseT = makeReverseTComposable(authAppStrings);
