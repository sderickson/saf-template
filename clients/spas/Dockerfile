# syntax=docker/dockerfile:labs
FROM node:22-slim AS builder

# Copy package.json
WORKDIR /app

COPY --parents ./package.json ./package-lock.json ./saflib/identity/auth/package.json ./saflib/identity/auth-links/package.json ./saflib/env/package.json ./saflib/identity/identity-spec/package.json ./saflib/links/package.json ./saflib/monorepo/package.json ./saflib/openapi/package.json ./saflib/sdk/package.json ./saflib/utils/package.json ./saflib/vite/package.json ./saflib/vue/package.json ./clients/spas/package.json ./clients/web-auth/package.json ./clients/web-common/package.json ./clients/web-root/package.json ./clients/web-root-links/package.json ./
RUN npm install --omit=dev

COPY --parents ./saflib/identity/auth ./saflib/identity/auth-links ./saflib/env ./saflib/identity/identity-spec ./saflib/links ./saflib/monorepo ./saflib/openapi ./saflib/sdk ./saflib/utils ./saflib/vite ./saflib/vue ./clients/spas ./clients/web-auth ./clients/web-common ./clients/web-root ./clients/web-root-links ./

# Vue app setup
WORKDIR /app/clients/spas