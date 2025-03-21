# Deployments

This directory has everything for deploying the application and services, either locally for development, or on a production remote host.

## Local

### Setup

1. Install [Docker Desktop](https://www.docker.com/get-started/)
2. Install [Cursor](https://www.cursor.com/) (this repo is set up to leverage the "agent" mode heavily)
3. Install Cursor/VSCode extensions. See `.vscode/extensions`.

### Commands

From this directory, run:

```
npm run dev                   # Runs all services on docker, with watch mode
                              # enabled by default.
                              # Use "--" to pass "docker compose up" options
                              # such as for...
npm run dev -- --build        # * Rebuilding images
npm run dev -- services-auth  # * Running a specific service
                              # All other local dev commands are docker compose
                              # And so can take the same extra params.

npm run test                  # Runs all services on docker, but set up for
                              # testing. Mainly used for playwright.
                              # Main differences:
                              # * DB volumes are not persisted. Each run is a
                              #   clean slate.
                              # * No docker watch mode or configs.
                              # * NODE_ENV = test

npm run prod-local            # Runs services closer to how production does it.
                              # Namely:
                              # * NODE_ENV = production
                              # * Serves vite static build (based on existing
                              #   saf-clients:latest image.)
                              # * Unfortunately, still http. Haven't figured out
                              #  how to get caddy/docker to play nice with
                              # https://docker.localhost.
```

## Remote

### Setup

To set up a remote deployment:

1. **Purchase a domain** from a registrar, such as Namecheap
2. **Purchase a virtual instance**, such as through DigitalOcean.
   1. Instance should be >=1GB memory, >=10GB HD.
   2. Set up SSH keys.
3. **Set up your domain**. This might involve:
   1. Pointing registrar to the virtual host's nameservers.
   2. Adding the domain to your virtual host.
   3. Assigning the virtual instance a static IP.
   4. Add DNS records. Two type "A" records for `<domain>` and `*.<domain>` should do.
4. **Log into your container registry on the instance**. For GitHub Container Registry, see [these instructions](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-with-a-personal-access-token-classic). You'll only need read access, in this case: `read:packages`.

To set up deployments from your development machine.

1. **Test your setup with SSH**. Make sure you can `ssh` into your instance, probably with `ssh root@<domain>`.
2. **Update .env files**:
   1. `./.env.remote` with your SSH user/hostname.
   2. `./remote-assets/.env.prod` with your domain name.
3. **Log into your container registry on your machine**. Same as for the instance, but this time you'll need write access as well.
4. **Prepare the instance**. Run `npm run remote-purge` and then `npm run remote-setup` for a clean docker installation.

Then you should be ready to run the commands below to deploy your application!

### Commands

From this directory, run:

```
npm run build               # Builds the production images
npm run push                # Pushes them
npm run sync                # Copies the `./remote-assets` directory to the instance
npm run remote-pull         # Pulls the docker images made with build-and-push
npm run remote-deploy       # docker-compose up
npm run remote-undeploy     # docker-compose down

npm run full-deploy         # Does all of the above, except undeploy. Only
                            # services that have changed will be recreated.
                            # There may be short downtime as services spin
                            # back up.
```
