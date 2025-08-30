import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    env: {
      TZ: "UTC",
      NODE_OPTIONS: "--disable-warning=DEP0040",
    },

    projects: [
      "clients/**/vitest.config.{ts,js,mts,mjs}",
      "services/**/vitest.config.{ts,js,mts,mjs}",
    ],
  },
});
