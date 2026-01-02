export type * from "./types.ts";
export * from "./errors.ts";

import { tasktapDbManager } from "./instances.ts";
export const tasktapDb = tasktapDbManager.publicInterface();

// TODO: Import query modules as you create them, e.g.:
// export * from "./queries/example/index.ts";
