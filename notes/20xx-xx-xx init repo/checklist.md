Update this checklist as you go.

## Name
* [ ] Create/switch to a feature branch for this work.
* [ ] Decide what the org should be. Make sure you can create it through [npmjs.com](https://docs.npmjs.com/creating-an-organization). Ideally this should be a company or person, not a product. This is a monorepo, so there could multiple products.
* [ ] Update "your-org" throughout the codebase with your organization name. Particularly in the package.json files.

## Install
* [ ] Decide what package manager you want. I've been using npm and bun, but it'll probably work with yarn and pnpm and such?
* [ ] Install it. I recommend `nvm` if you're using `npm`.
* [ ] Run `npm install` or equivalent in the root directory.

## Run
* [ ] Run `npm run test` or equivalent. This runs the unit tests.
* [ ] Install docker if you haven't got it already. I use [Docker Desktop](https://docs.docker.com/desktop/).
* [ ] Go to `/deploy/instance`. Run `npm run build` or equivalent. This confirms docker works, and is a prereq e2e tests later on.
* [ ] Run `npm run dev`. Navigate to [http://docker.localhost/]() to
* [ ] Go to `/test/e2e`. Run `npm run test` or equivalent. This confirms the build works and that e2e tests work.
* [ ] Push changes to GitHub, assuming you're using it. Open a PR for this branch. Make sure GitHub actions run and pass (they're the unit and playwright tests).

## Deploy
* [ ] Create or rent a separate machine. Set up an SSH key with it (public key there, private key here), and a static IP. If you want, also set up a domain for it. Make sure you can login.
* [ ] Update the [.env.remote](/deploy/instance/.env.remote) file with the user and IP/domain of your remote instance.
* [ ] From [/deploy/instance](/deploy/instance/), run `npm run purge` and then `npm run setup` (or equivalent) to install/update docker on your remote instance.
* [ ] Create two GitHub tokens: one for reading packages, one for writing packages. Login with those tokens, "writing" on this machine, "reading" on the remote. For more information, see [Working with the Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-with-a-personal-access-token-classic) on GitHub.
* [ ] Run `npm run full-deploy` (or... you get the idea) to build and push the website locally, and pull and run remotely. If SSH and tokens are all working, you should see the website running at your IP address... over https!

At this point, you have a *running* website base on the instance of your choice. Nice!