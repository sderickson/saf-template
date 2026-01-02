import { AsyncLocalStorage } from "async_hooks";
import type { DbKey } from "@saflib/drizzle";
import { tasktapDb } from "@your-org/tasktap-db";

export interface TasktapServiceContext {
  tasktapDbKey: DbKey;
}

export const tasktapServiceStorage =
  new AsyncLocalStorage<TasktapServiceContext>();

export interface TasktapServiceContextOptions {
  tasktapDbKey?: DbKey;
}

export const makeContext = (
  options: TasktapServiceContextOptions = {},
): TasktapServiceContext => {
  const dbKey = options.tasktapDbKey ?? tasktapDb.connect();
  return {
    tasktapDbKey: dbKey,
  };
};
