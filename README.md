# SAF Template Repository

This is a template repository to use SAF. Create a new repository with it and follow the instructions to initialize a SAF-based web application which can make use of the [workflow tool](https://workflows.saf-demo.online/) to rapidly build and deploy high-quality LLM-assisted code.

- [SAF library docs](https://docs.saf-demo.online).
- [SAF library source](https://github.com/sderickson/saflib).
- [Workflow tool docs](https://workflows.saf-demo.online/).

# Setup

## Set up repository and dependencies

To instantiate a new product you'll need an organization name and a product name. Your organization name will typically be the same as your repository name, and those will either be the same as your product or company name. The organization name will prefix each package name in the repos, and help distinguish packages in the monorepo from third party packages.

Once you have those:

1. Create a new repository from this template.
2. Update `package.json`.

- Set the name to `@<organization-name>/<product-name>`.
- Update all "TODO" fields according to [npm docs](https://docs.npmjs.com/cli/v10/configuring-npm/package-json).

3. Run `nvm use && npm install`.
4. Install and run [Docker](https://docs.docker.com/engine/install/).

## Initialize the product

To set up the various SPAs and backend services, you'll be using the [workflow tool](https://workflows.saf-demo.online/) to guide and automate the process.

## Running with Cursor

To fully automate the process, you can use Cursor. Have a paid account, install Cursor CLI on your machine, and make sure you're logged in. Then run:

```bash
npm exec saf-workflow kickoff product/init <productName> -- -r cursor
```

To understand more what this will do before you run it, see the [product/init workflow](https://github.com/sderickson/saflib/blob/main/product/workflows/init.ts).

## Running it yourself

A great deal is still automated, but if you don't have or want to use Cursor, or you want to understand more what it is to build a frontend with SAF, you can have the workflow prompt you instead of an agent.

```bash
npm exec saf-workflow kickoff product/init <productName>
```

Follow the instructions nad run `npm exec saf-workflow next` after each step.

## Managing git commits

The workflow can be set up to automatically commit changes to git. To do this, include `-v git` in the command. This works with either of the above methods. Make sure to set up a branch beforehand if you don't want to commit to main.

# Test

- **Make sure static tests pass**
  - Run `npm run typecheck`.
  - Run `npm run test`.

- **Run site locally**
  - In `{product-name}/dev`, run `npm run dev`. Navigate to `http://{product-name}.docker.localhost/` in your browser to test the stub site.
  - In `deploy`, run `npm run build`, and then `npm run prod-local`. Navigate to `http://{productName}.docker.localhost/` in your browser to test the production build locally.

- **Run e2e tests**
  - With `npm run prod-local` still running, run `npm run test:e2e`.

# Deploy

To deploy your site to production, follow the instructions and fill out the values in `deploy/env.remote`. You'll need a server, domain, and container registry. I use [DigitalOcean](https://www.digitalocean.com/), [Namecheap](https://www.namecheap.com/), and [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry), but any providers will work.

You'll also need to edit the `.env.prod` file in `deploy/remote-assets` , updating the "TODO" fields with the domain name that you set up, and the email addresses you want to be admins, comma separated.

- **Deploy to production**
  Once you've done all the TODOs in `deploy`, including having a remote instance to deploy to (ideally with a domain pointing to it), then:
  - In `deploy`, Run:
    - `npm run remote-purge` to enforce a clean slate, then
    - `npm run remote-setup` to install basic dependencies, and finally
    - `npm run full-deploy` to build, push, pull, sync, and deploy to production

That's it! You should now be able to run workflows to build out your site, and have all the steps to run tests and deploy changes.
