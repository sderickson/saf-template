sudo -i
echo "Pulling latest docker images..."
docker pull ghcr.io/sderickson/your-org-caddy:latest
docker pull ghcr.io/sderickson/your-org-services-api:latest
docker pull ghcr.io/sderickson/saf-services-auth:latest
echo "Done!"