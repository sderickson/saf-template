#!/bin/bash
sudo -i
cd /root/your-org/deploy/instance/remote-assets
docker compose -f docker-compose.prod.yaml logs -f --tail 100