#!/bin/bash
set -e

# Build dependent images
docker build -t scotterickson-clients:latest -f ./clients/Dockerfile . --platform linux/amd64

# Build production images
docker build -t ghcr.io/sderickson/scotterickson-caddy:latest -f ./deploy/instance/Dockerfile.prod --platform linux/amd64 .