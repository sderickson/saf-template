#!/bin/bash
sudo -i
cd /root/your-org/deploy/prod/remote-assets
docker compose --env-file .env.prod -f docker-compose.prod.yaml up
docker system prune -f