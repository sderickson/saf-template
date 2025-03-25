#!/bin/bash
set -e

# Build dependent images
docker build -t your-username-clients:latest -f ./clients/Dockerfile . --platform linux/amd64

# Build production images
docker build -t ghcr.io/your-org/your-username-caddy:latest -f ./deploy/instance/Dockerfile.prod --platform linux/amd64 .