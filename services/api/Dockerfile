FROM node:22-slim

WORKDIR /app

# Copy package.json
COPY package*.json ./
COPY tsconfig.json ./

COPY services/api/package*.json ./services/api/
COPY saf-2025/lib/node-express/package*.json ./saf-2025/lib/node-express/

RUN npm install --omit=dev

# Copy source files
COPY saf-2025/lib/node-express ./saf-2025/lib/node-express
COPY services/api ./services/api
COPY specs/apis/dist ./specs/apis/dist

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 CMD ["npm", "run", "healthcheck"]
WORKDIR /app/services/api
CMD ["npm", "start"]