#!/bin/bash

# For those oh-so-fun Playwright tests that only sometimes fail.
# Also check last-docker-compose.log for clues.

# Also try putting in the following in the test before it fails:
#  await page.screenshot({
#    path: page.context().browser()?.browserType().name() + "screenshot.png",
#  });

command_to_retry="npm run test"

while $command_to_retry; do
  echo "Command succeeded, retrying..."
  sleep 1
done

echo "Command failed, exiting."
