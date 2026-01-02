// Hack - load env a better way, but not dotenv, it's endless pushing dotenvx
process.env.DOMAIN = "tasktap.docker.localhost";
process.env.PROTOCOL = "http";
process.env.SERVICE_SUBDOMAINS = "identity,tasktap";

export { default } from "@saflib/playwright/playwright.config";
