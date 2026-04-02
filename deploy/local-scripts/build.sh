#!/bin/bash
set -e

# CI sets CONTAINER_REGISTRY; local dev uses deploy/env.remote
if [ -z "$CONTAINER_REGISTRY" ]; then
  source ./deploy/env.remote
fi
echo "Container registry: $CONTAINER_REGISTRY"

git status

npx saf-git-hashes

# Build static clients
# When adding a new static client, add the docker build command here, like so:
# docker build -f ./blog/Dockerfile . --platform linux/amd64 \
# 	-t (org name)-(product name)-client:latest \
# 	-t "$CONTAINER_REGISTRY/(org name)-(product name)-client:latest"

# Build monolith services
# BEGIN WORKFLOW AREA build-product-dependencies FOR product/init
docker build -f ./example/service/monolith/Dockerfile . --platform linux/amd64 \
	-t your-org-example-monolith:latest \
	-t "$CONTAINER_REGISTRY/your-org-example-monolith:latest"
docker build -f ./example/clients/build/Dockerfile . --platform linux/amd64 \
	-t your-org-example-clients:latest
# END WORKFLOW AREA

# Build reverse proxy image
docker build -f ./deploy/Dockerfile.prod . --platform linux/amd64 \
	-t your-org-caddy:latest \
	-t "$CONTAINER_REGISTRY/your-org-caddy:latest"
