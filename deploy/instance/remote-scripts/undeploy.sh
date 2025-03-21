#!/bin/bash
sudo -i
cd /root/your-org/deploy/instance/remote-assets
docker compose --env-file .env.prod -f docker-compose.prod.yaml down