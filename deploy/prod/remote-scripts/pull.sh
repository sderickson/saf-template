sudo -i
echo "Pulling latest docker images..."
docker pull ghcr.io/your-org/your-org-caddy:latest
docker pull ghcr.io/your-org/your-org-identity:latest
echo "Done!"