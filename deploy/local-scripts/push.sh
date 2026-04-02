#!/bin/bash
# Push images to the container registry

source ./deploy/env.remote
echo "Container registry: $CONTAINER_REGISTRY"

docker push $CONTAINER_REGISTRY/your-org-caddy:latest
# BEGIN WORKFLOW AREA push-images FOR product/init
docker push $CONTAINER_REGISTRY/your-org-example-monolith:latest
# END WORKFLOW AREA