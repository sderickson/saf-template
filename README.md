# SAF Template Repository

Use this template to set up a SAF-based web application and use its [workflow tool](https://workflows.saf-demo.online/) to rapidly build and deploy high-quality LLM-assisted code.

- [SAF library docs](https://docs.saf-demo.online).
- [SAF library source](https://github.com/sderickson/saflib).
- [Workflow tool docs](https://workflows.saf-demo.online/).

# Setup

## Naming

To instantiate a new product you'll need an organization name and a product name. Your organization name will typically be the same as your repository name, and those will either be the same as your product name, company name, or however you want to scope the repo. The organization name will prefix each package name in the repos, and help distinguish packages in the monorepo from third party packages.

This template and SAF workflows are set up to support multiple products in the same repository. So if you plan on building more than one product in the repo, you'll want the organization name to be something different than the product name.

## Set up repository and dependencies

Once you have your organization name and product name:

1. Create a new repository from this template with the same name as your organization.
2. Update `package.json`.
   - Set the name to `@<organization-name>/<organization-name>`.
   - Update all "TODO" fields according to [npm docs](https://docs.npmjs.com/cli/v10/configuring-npm/package-json).
3. Install [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) and run `nvm use && npm install`.
4. Install and run [Docker](https://docs.docker.com/engine/install/).

## Initialize the product

To set up the various SPAs and backend services, you'll be using the [workflow tool](https://workflows.saf-demo.online/) to guide and automate the process.

### Running with an Agent

To fully automate the process, you can use any coding agent such as Cursor or Claude Code. Give the agent this prompt (substituting your product-name of choice):

```
Run the following command in the terminal and follow its instructions until completely done.
npm exec saf-workflow kickoff product/init <product-name>
```

Further reading:
* [Workflow docs](https://workflows.saf-demo.online/with-an-agent.html#the-agent-invokes-the-workflow-tool) on running an agent with the tool.
* [Workflow source](https://github.com/sderickson/saflib/blob/main/product/workflows/init.ts) for the product/init workflow.

### Running it yourself

If you don't have or want to use an agent, or you want to understand more what it is to build a frontend with SAF, you can have the workflow prompt you instead.

```bash
npm exec saf-workflow kickoff product/init <productName>
```

Follow the prompt, running `npm exec saf-workflow next` to continue to the next.

### Managing git commits

The workflow can commit changes to git along the way, for more reasonably-sized changesets. To do this, include `-v git` in the command. This works with either of the above methods. Make sure to set up a branch beforehand if you don't want to commit to main.

# Test

Once you have completed the `product/init` workflow, you can run various tests to make sure everything is working.

- **Make sure static tests pass**
  - Run `npm run typecheck`.
  - Run `npm run test`.

- **Run site locally**
  - In `{product-name}/dev`, run `npm run dev`. Navigate to `http://{product-name}.docker.localhost/` in your browser to test the stub site.
  - In `deploy`, run `npm run build`, and then `npm run prod-local`. Navigate to `http://{productName}.docker.localhost/` in your browser to test the production build locally.

At this point you should be able to make changes and see them reflected in the browser. If you run `npm run dev`, the frontend uses Vite's HMR so changes will be reflected in real time. Server-side changes will require a dev server restart, and seeing any changes in `prod-local` will require another `npm run build`.

# Deploy

## Host and Domain

To deploy your site to production, open `deploy/env.remote` and fill out the values according to the instructions there. You'll need a server, domain, and container registry. I use [DigitalOcean](https://www.digitalocean.com/), [Namecheap](https://www.namecheap.com/), and [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry), but any similar providers should work.

You'll also need to edit the `.env.prod` file in `deploy/remote-assets` , updating the "TODO" fields with the domain name that you set up, and the email addresses you want to be admins, comma separated.

## Deploy to Prod

Once you've done all the TODOs in `deploy`, including having a remote instance to deploy to (ideally with a domain pointing to it), then run the following commands:

```bash
cd deploy
npm run remote-purge # uninstalls any existing dependencies
npm run remote-setup # installs basic dependencies (docker, etc)
npm run full-deploy  # builds images, delivers via the container registry, and spins up docker production containers
```

That's it! You should now be able to run workflows to build out your site, and have all the steps to run tests and deploy changes.

## Test Prod

Try doing these things to make sure everything works:

- Register a new user.
- Go to the user's account page and change their name and their password.
- Log out and log back in with the new password.
- Register as an admin user and make sure there's a link to the admin SPA from the app SPA.

You can also validate your email, but these steps don't include setting up emails so you'll need to check the docker logs for the auth link when it's generated.

# Next Steps

To actually build some functionality, use the SAF workflows. See the [SAF docs](https://docs.saf-demo.online/) for the list of available workflows, but to start off you might go to the following repo paths (inside the product directory) and use workflows from the given SAF packages:

| Repo Path      | SAF Package                                                                 | Use Workflows to...                                                                                                                                             |
| -------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `service/spec` | [@saflib/openapi](https://docs.saf-demo.online/openapi/docs/workflows/)     | Create schemas (business objects) and routes (API endpoints).                                                                                                   |
| `service/db`   | [@saflib/drizzle](https://docs.saf-demo.online/drizzle/docs/workflows/)     | Create database schemas and queries.                                                                                                                            |
| `service/http` | [@saflib/express](https://docs.saf-demo.online/express/docs/workflows/)     | Create handlers for the routes, using database queries.                                                                                                         |
| `service/sdk`  | [@saflib/sdk](https://github.com/sderickson/saflib/tree/main/sdk/workflows) | Create Tanstack query and mutation functions for the routes, and components which are tightly coupled to the API (displays and forms for the business objects). |
| `clients/app`  | [@saflib/vue](https://github.com/sderickson/saflib/tree/main/vue/workflows) | Create pages in the SPA, which load data using the Tanstack queries and render the sdk components.                                                              |

See the workflow docs for how to run these workflows [manually](https://workflows.saf-demo.online/manual-testing.html#do-the-work-yourself) or [with an agent](https://workflows.saf-demo.online/with-an-agent.html).
