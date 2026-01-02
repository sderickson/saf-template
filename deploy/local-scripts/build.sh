#!/bin/bash
set -e

source ./deploy/env.remote
echo "Container registry: $CONTAINER_REGISTRY"

# Build dependent images
docker build -t your-org-tasktap-clients:latest -f ./tasktap/clients/build/Dockerfile . --platform linux/amd64
docker build -t $CONTAINER_REGISTRY/your-org-tasktap-monolith:latest -f ./tasktap/service/monolith/Dockerfile . --platform linux/amd64

# Build reverse proxy image
docker build -t $CONTAINER_REGISTRY/your-org-caddy:latest -f ./deploy/Dockerfile.prod . --platform linux/amd64

# Note: sometimes need to run with --no-cache if cache got into a weird state from cancelling mid-build