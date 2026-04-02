import { startExampleService } from "./index.ts";
import { addLokiTransport, collectSystemMetrics } from "@saflib/node";
import { setServiceName } from "@saflib/node";
import { validateEnv } from "@saflib/env";
import envSchema from "./env.schema.combined.json" with { type: "json" };
import { initSentry } from "@saflib/sentry";
import { startOryKratosService } from "@saflib/ory-kratos";
import { callbacks } from "@your-org/example-kratos-courier";

validateEnv(process.env, envSchema);
setServiceName("example");

addLokiTransport();
initSentry();
collectSystemMetrics();

startOryKratosService({ callbacks });
startExampleService();
