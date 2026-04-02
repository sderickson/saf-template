import { AsyncLocalStorage } from "async_hooks";
import type { DbKey } from "@saflib/drizzle";
import { exampleDb } from "@your-org/example-db";
// BEGIN SORTED WORKFLOW AREA storeImports FOR service/add-store


// END WORKFLOW AREA

export interface ExampleServiceContext {
  exampleDbKey: DbKey;
  // BEGIN SORTED WORKFLOW AREA storeProperties FOR service/add-store

  // END WORKFLOW AREA
}

export const exampleServiceStorage =
  new AsyncLocalStorage<ExampleServiceContext>();

export interface ExampleServiceContextOptions {
  exampleDbKey?: DbKey;
  // BEGIN SORTED WORKFLOW AREA storeOptions FOR service/add-store

  // END WORKFLOW AREA
}

export const makeContext = (
  options: ExampleServiceContextOptions = {},
): ExampleServiceContext => {
  const dbKey = options.exampleDbKey ?? exampleDb.connect();
  // BEGIN WORKFLOW AREA storeInit FOR service/add-store


  // END WORKFLOW AREA
  return {
    exampleDbKey: dbKey,
    // BEGIN SORTED WORKFLOW AREA storeReturn FOR service/add-store

    // END WORKFLOW AREA
  };
};
