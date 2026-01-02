import { startExpressServer } from "@saflib/express";
import { createTasktapHttpApp } from "@your-org/tasktap-http";
import { tasktapDb } from "@your-org/tasktap-db";
import { makeSubsystemReporters } from "@saflib/node";
import { typedEnv } from "./env.ts";
import { makeContext } from "@your-org/tasktap-service-common";

export function startTasktapService() {
  const { log, logError } = makeSubsystemReporters("init", "main");
  try {
    log.info("Starting up tasktap service...");
    log.info("Connecting to tasktap-db...");
    const dbKey = tasktapDb.connect({ onDisk: true });
    const context = makeContext({ tasktapDbKey: dbKey });
    log.info("tasktap-db connection complete.");

    log.info("Starting tasktap-http...");
    const expressApp = createTasktapHttpApp(context);
    startExpressServer(expressApp, {
      port: parseInt(
        typedEnv.TASKTAP_SERVICE_HTTP_HOST.split(":")[1] || "3000",
        10,
      ),
    });
    log.info("tasktap-http startup complete.");
  } catch (error) {
    logError(error);
  }
}
