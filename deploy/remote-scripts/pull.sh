
echo "Pulling latest docker images..."
docker pull $CONTAINER_REGISTRY/your-org-caddy:latest
# BEGIN WORKFLOW AREA pull-images FOR product/init
docker pull $CONTAINER_REGISTRY/your-org-example-monolith:latest
# END WORKFLOW AREA
echo "Done!"