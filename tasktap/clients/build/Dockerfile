# syntax=docker/dockerfile:labs
FROM node:22-slim AS builder

# Copy package.json
WORKDIR /app

COPY --parents ./package.json ./package-lock.json ./saflib/identity/account-sdk/package.json ./saflib/identity/auth/package.json ./saflib/identity/auth-links/package.json ./saflib/env/package.json ./saflib/identity/identity-spec/package.json ./saflib/links/package.json ./saflib/monorepo/package.json ./saflib/openapi/package.json ./saflib/playwright/package.json ./saflib/sdk/package.json ./saflib/utils/package.json ./saflib/vite/package.json ./saflib/vue/package.json ./tasktap/clients/account/package.json ./tasktap/clients/admin/package.json ./tasktap/clients/app/package.json ./tasktap/clients/auth/package.json ./tasktap/clients/common/package.json ./tasktap/clients/links/package.json ./tasktap/clients/build/package.json ./tasktap/clients/root/package.json ./tasktap/service/spec/package.json ./
RUN npm install --omit=dev
# RUN npm install @rollup/rollup-linux-arm64-gnu

COPY --parents ./saflib/identity/account-sdk ./saflib/identity/auth ./saflib/identity/auth-links ./saflib/env ./saflib/identity/identity-spec ./saflib/links ./saflib/monorepo ./saflib/openapi ./saflib/playwright ./saflib/sdk ./saflib/utils ./saflib/vite ./saflib/vue ./tasktap/clients/account ./tasktap/clients/admin ./tasktap/clients/app ./tasktap/clients/auth ./tasktap/clients/common ./tasktap/clients/links ./tasktap/clients/build ./tasktap/clients/root ./tasktap/service/spec ./

# Vue app setup
WORKDIR /app/tasktap/clients/build