import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import vueDevTools from "vite-plugin-vue-devtools";
import type { Plugin } from "vite";
import path from "path";
import ignore from "rollup-plugin-ignore";
import { htmlHeaderPlugin } from "./html-header-plugin";
import { typedEnv } from "./env.ts";

const monorepoRoot = path.resolve(__dirname, "../..");

const subdomains = typedEnv.CLIENT_SUBDOMAINS?.split(",") ?? [];
const hosts = subdomains.map((subdomain) =>
  subdomain === "" ? "docker.localhost" : `${subdomain}.docker.localhost`
);

const subDomainProxyPlugin: Plugin = {
  name: "sub-domain-proxy",
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url?.includes(".") || req.url?.includes("@")) {
        next();
        return;
      }
      for (const host of hosts) {
        if (req.headers.host === host) {
          const subdomain = host.split(".").slice(0, -2).join(".");
          req.url = `/${subdomain}/index.html`;
          next();
          return;
        }
      }
      console.warn("Unhandled request", {
        "req.url": req.url,
        "req.headers.host": req.headers.host,
        hosts,
      });
      next();
    });
  },
};

const input = {
  ...Object.fromEntries(
    subdomains
      .filter((subdomain) => subdomain !== "")
      .map((subdomain) => [
        subdomain,
        path.resolve(__dirname, `${subdomain}/index.html`),
      ])
  ),
};

function makeConfig() {
  return defineConfig({
    base: "/",
    appType: "mpa",
    plugins: [
      vue(),
      vuetify({ styles: { configFile: "./overrides.scss" } }),
      vueDevTools(),
      htmlHeaderPlugin(),
      subDomainProxyPlugin,
    ],
    build: {
      rollupOptions: {
        input,
        plugins: [ignore(["**/*.test.ts"])],
      },
      sourcemap: true,
    },

    server: {
      fs: {
        allow: [monorepoRoot], // works inside and outside of docker
      },
      strictPort: true,
      host: true,
    },
  });
}

export default makeConfig();
