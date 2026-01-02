#!/bin/bash
# Push images to the container registry

source ./deploy/env.remote
echo "Container registry: $CONTAINER_REGISTRY"

docker push $CONTAINER_REGISTRY/your-org-caddy:latest
docker push $CONTAINER_REGISTRY/your-org-tasktap-monolith:latest