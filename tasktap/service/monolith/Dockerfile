# syntax=docker/dockerfile:labs
FROM node:alpine3.19

WORKDIR /app

COPY --parents ./package.json ./package-lock.json ./saflib/identity/auth-links/package.json ./saflib/drizzle/package.json ./saflib/email/email/package.json ./saflib/email/email-spec/package.json ./saflib/env/package.json ./saflib/express/package.json ./saflib/grpc/grpc/package.json ./saflib/identity/identity/package.json ./saflib/identity/identity-common/package.json ./saflib/identity/identity-db/package.json ./saflib/identity/identity-grpc/package.json ./saflib/identity/identity-http/package.json ./saflib/identity/identity-rpcs/package.json ./saflib/identity/identity-spec/package.json ./saflib/links/package.json ./saflib/monorepo/package.json ./saflib/node/package.json ./saflib/openapi/package.json ./saflib/sentry/package.json ./saflib/utils/package.json ./saflib/drizzle/workflows/templates/package.json ./saflib/express/workflows/templates/package.json ./saflib/identity/identity/workflows/templates/package.json ./saflib/product/workflows/templates/tasktap/service/monolith/package.json ./saflib/service/workflows/common-templates/package.json ./saflib/openapi/workflows/templates/package.json ./
RUN npm install --omit=dev
COPY --parents ./saflib/identity/auth-links ./saflib/drizzle ./saflib/email/email ./saflib/email/email-spec ./saflib/env ./saflib/express ./saflib/grpc/grpc ./saflib/identity/identity ./saflib/identity/identity-common ./saflib/identity/identity-db ./saflib/identity/identity-grpc ./saflib/identity/identity-http ./saflib/identity/identity-rpcs ./saflib/identity/identity-spec ./saflib/links ./saflib/monorepo ./saflib/node ./saflib/openapi ./saflib/sentry ./saflib/utils ./saflib/drizzle/workflows/templates ./saflib/express/workflows/templates ./saflib/identity/identity/workflows/templates ./saflib/product/workflows/templates/tasktap/service/monolith ./saflib/service/workflows/common-templates ./saflib/openapi/workflows/templates ./

WORKDIR /app/tasktap/service/monolith
CMD ["npm", "start"]

