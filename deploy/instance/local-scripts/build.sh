#!/bin/bash
set -e

# Build dependent images
docker build -t your-org-clients:latest -f ./clients/Dockerfile . --platform linux/amd64

# Build production images
docker build -t ghcr.io/sderickson/your-org-caddy:latest -f ./deploy/instance/Dockerfile.prod --platform linux/amd64 .
docker build -t ghcr.io/sderickson/your-org-services-api:latest -f ./services/api/Dockerfile . --platform linux/amd64