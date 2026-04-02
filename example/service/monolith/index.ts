import { startExpressServer } from "@saflib/express";
import { createExampleHttpApp } from "@your-org/example-http";
import { exampleDb } from "@your-org/example-db";
import { makeSubsystemReporters } from "@saflib/node";
import { typedEnv } from "./env.ts";
import { makeContext } from "@your-org/example-service-common";

export function startExampleService() {
  const { log, logError } = makeSubsystemReporters("init", "main");
  try {
    log.info("Starting up example service...");
    log.info("Connecting to example-db...");
    const dbKey = exampleDb.connect({ onDisk: true });
    const context = makeContext({ exampleDbKey: dbKey });
    log.info("example-db connection complete.");

    log.info("Starting example-http...");
    const expressApp = createExampleHttpApp(context);
    startExpressServer(expressApp, {
      port: parseInt(
        typedEnv.EXAMPLE_SERVICE_HTTP_HOST.split(":")[1] || "3000",
        10,
      ),
    });
    log.info("example-http startup complete.");
  } catch (error) {
    logError(error);
  }
}
