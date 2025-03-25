#!/bin/bash
sudo -i
cd /root/scotterickson/deploy/instance/remote-assets
docker compose -f docker-compose.prod.yaml logs -f --tail 100