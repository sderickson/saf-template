import { startTasktapService } from "./index.ts";
import { addLokiTransport, collectSystemMetrics } from "@saflib/node";
import { setServiceName } from "@saflib/node";
import { validateEnv } from "@saflib/env";
import envSchema from "./env.schema.combined.json" with { type: "json" };
import { initSentry } from "@saflib/sentry";
import { startTasktapIdentityService } from "@your-org/tasktap-identity";

validateEnv(process.env, envSchema);
setServiceName("tasktap");
addLokiTransport();
initSentry();
collectSystemMetrics();

startTasktapIdentityService();
startTasktapService();
