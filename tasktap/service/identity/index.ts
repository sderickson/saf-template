import { startIdentityService } from "@saflib/identity";
import { callbacks } from "./callbacks.ts";
import path from "node:path";

export const startTasktapIdentityService = () => {
  startIdentityService({
    dbPath: path.join(import.meta.dirname, "data", "identity.sqlite"),
    callbacks,
  });
};
