#!/bin/bash
set -e

source ./deploy/env.remote
echo "Container registry: $CONTAINER_REGISTRY"
CONTAINER_REGISTRY=$CONTAINER_REGISTRY docker compose -f ./deploy/docker-compose.prod-local.yaml up