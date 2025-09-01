#!/bin/bash
sudo -i
cd /root/your-org/deploy/prod/remote-assets
docker compose -f docker-compose.prod.yaml logs -f --tail 100