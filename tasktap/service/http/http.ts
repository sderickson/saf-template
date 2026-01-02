import { createErrorMiddleware, createGlobalMiddleware } from "@saflib/express";
import express from "express";
import { tasktapDb } from "@your-org/tasktap-db";
import {
  tasktapServiceStorage,
  type TasktapServiceContextOptions,
} from "@your-org/tasktap-service-common";

/**
 * Creates the HTTP server for the tasktap service.
 */
export function createTasktapHttpApp(
  options: TasktapServiceContextOptions,
) {
  let dbKey = options.tasktapDbKey;
  if (!dbKey) {
    dbKey = tasktapDb.connect();
  }

  const app = express();
  app.use(createGlobalMiddleware());
  app.set("trust proxy", 1);

  const context = { tasktapDbKey: dbKey };
  app.use((_req, _res, next) => {
    tasktapServiceStorage.run(context, () => {
      next();
    });
  });

  // Add route handlers here. Do not prefix the routes; the router will handle the prefix.
  // app.use(createTasktapRouter());

  app.use(createErrorMiddleware());

  return app;
}
