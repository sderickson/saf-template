# syntax=docker/dockerfile:labs
FROM node:22-slim AS builder

# Copy package.json
WORKDIR /app
COPY ./package*.json .
COPY ./tsconfig.json .
COPY ./clients/package*.json ./clients/

RUN npm install --omit=dev

# Without these two lines, builds fail with "Cannot find module @rollup/rollup-<platform>. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory."
# I need both for developing locally (on a mac, linux-arm64-gnu) and for deploying to ubuntu (linux-x64-gnu).
# Without the first, `npm run dev -- --build` fails.
# Without the second, `npm run build-and-push` fails.
# But also, one of them will fail depending on the platform, so they have "|| true" to suppress error codes.
RUN npm install @rollup/rollup-linux-arm64-gnu || true
RUN npm install @rollup/rollup-linux-x64-gnu || true

# Copy source files
COPY --exclude=**/*.test.ts --exclude=vitest.config.ts ./clients/ ./clients/

# Vue app setup
WORKDIR /app/clients