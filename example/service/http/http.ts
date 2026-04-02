import { createErrorMiddleware, createGlobalMiddleware } from "@saflib/express";
import express from "express";
import { exampleDb } from "@your-org/example-db";
import {
  exampleServiceStorage,
  type ExampleServiceContextOptions,
  makeContext,
} from "@your-org/example-service-common";

// BEGIN SORTED WORKFLOW AREA router-imports FOR express/add-handler

// END WORKFLOW AREA

/**
 * Creates the HTTP server for the example service.
 */
export function createExampleHttpApp(
  options: ExampleServiceContextOptions,
) {
  let dbKey = options.exampleDbKey;
  if (!dbKey) {
    dbKey = exampleDb.connect();
  }

  const app = express();
  app.use(createGlobalMiddleware({
    disableCors: true,
  }));
  app.set("trust proxy", 1);

  const context = makeContext();
  app.use((_req, _res, next) => {
    exampleServiceStorage.run(context, () => {
      next();
    });
  });

  // BEGIN WORKFLOW AREA app-use-routes FOR express/add-handler

  // END WORKFLOW AREA

  app.use(createErrorMiddleware());

  return app;
}
