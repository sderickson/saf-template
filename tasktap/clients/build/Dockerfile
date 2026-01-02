# syntax=docker/dockerfile:labs
FROM node:22-slim AS builder

# Copy package.json
WORKDIR /app

COPY --parents ./package.json ./package-lock.json ./saflib/env/package.json ./saflib/links/package.json ./saflib/monorepo/package.json ./saflib/playwright/package.json ./saflib/sdk/package.json ./saflib/utils/package.json ./saflib/vite/package.json ./saflib/vue/package.json ./saflib/vue/workflows/template/build/package.json ./
RUN npm install --omit=dev
# RUN npm install @rollup/rollup-linux-arm64-gnu

COPY --parents ./saflib/env ./saflib/links ./saflib/monorepo ./saflib/playwright ./saflib/sdk ./saflib/utils ./saflib/vite ./saflib/vue ./saflib/vue/workflows/template/build ./

# Vue app setup
WORKDIR /app/tasktap/clients/build