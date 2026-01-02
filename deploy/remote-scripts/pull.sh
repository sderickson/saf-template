
echo "Pulling latest docker images..."
docker pull $CONTAINER_REGISTRY/your-org-caddy:latest
docker pull $CONTAINER_REGISTRY/your-org-tasktap-monolith:latest
echo "Done!"