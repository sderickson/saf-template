# syntax=docker/dockerfile:labs
FROM node:alpine3.19

WORKDIR /app

COPY --parents ./package.json ./package-lock.json ./saflib/identity/auth-links/package.json ./saflib/drizzle/package.json ./saflib/email/email/package.json ./saflib/email/email-spec/package.json ./saflib/env/package.json ./saflib/express/package.json ./saflib/grpc/grpc/package.json ./saflib/identity/identity/package.json ./saflib/identity/identity-common/package.json ./saflib/identity/identity-db/package.json ./saflib/identity/identity-grpc/package.json ./saflib/identity/identity-http/package.json ./saflib/identity/identity-rpcs/package.json ./saflib/identity/identity-spec/package.json ./saflib/links/package.json ./saflib/monorepo/package.json ./saflib/node/package.json ./saflib/openapi/package.json ./saflib/sentry/package.json ./saflib/utils/package.json ./tasktap/service/db/package.json ./tasktap/service/http/package.json ./tasktap/service/identity/package.json ./tasktap/service/monolith/package.json ./tasktap/service/common/package.json ./tasktap/service/spec/package.json ./
RUN npm install --omit=dev
COPY --parents ./saflib/identity/auth-links ./saflib/drizzle ./saflib/email/email ./saflib/email/email-spec ./saflib/env ./saflib/express ./saflib/grpc/grpc ./saflib/identity/identity ./saflib/identity/identity-common ./saflib/identity/identity-db ./saflib/identity/identity-grpc ./saflib/identity/identity-http ./saflib/identity/identity-rpcs ./saflib/identity/identity-spec ./saflib/links ./saflib/monorepo ./saflib/node ./saflib/openapi ./saflib/sentry ./saflib/utils ./tasktap/service/db ./tasktap/service/http ./tasktap/service/identity ./tasktap/service/monolith ./tasktap/service/common ./tasktap/service/spec ./

WORKDIR /app/tasktap/service/monolith
CMD ["npm", "start"]

