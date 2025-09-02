#!/bin/bash
set -e

# generate unit test coverage reports
npm exec saf-health-assets gen-coverage

# run e2e tests and generate screenshots
npm run test:e2e    

# gather test assets from the e2e and unit tests
npm exec saf-health-assets gather ./deploy/prod/remote-assets/health-assets