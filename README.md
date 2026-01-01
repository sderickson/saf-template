# SAF Template Repository

This is a template repository to create complex web applications using SAF.

- Shared logic: [SAF library repository](https://github.com/your-org/saflib).
- Information about SAF: [https://saf-demo.online](https://saf-demo.online) ([src](https://github.com/your-org/saf-2025)).

# Setup

1. Clone this repo.
2. Install npm or similar. Your Node version must be 22 or higher. Run `npm install`.
3. Install docker.
4. Replace all "your-org" strings with your GitHub (or similar) user/organization name.
5. Run `npm install` in the root directory.

At this point you're ready to initialize the product you are building. SAF comes with a workflow to set you up with a basic suite of SPAs, an identity and product service, and more. This will use the [workflow tool](https://workflows.saf-demo.online/) to guide and automate the process.

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

## Managing git commits

The workflow can be set up to automatically commit changes to git. To do this, include `-v git` in the command. This works with either of the above methods.

# Testing

- **Make sure static tests pass**
  - Run `npm run typecheck`.
  - Run `npm run test`.

- **Run site locally**
  - In `{productName}/dev`, run `npm run dev`. Navigate to `http://{productName}.docker.localhost/` in your browser to test the stub site.
  - In `deploy`, run `npm run build`, and then `npm run prod-local`. Navigate to `http://{productName}.docker.localhost/` in your browser to test the production build locally.

- **Run e2e tests**
  - With `npm run prod-local` still running, run `npm run test:e2e`.

- **Deploy to production**
  Once you've done all the TODOs in `deploy`, including having a remote instance to deploy to (ideally with a domain pointing to it), then:
  - In `deploy`, Run:
    - `npm run remote-purge` to enforce a clean slate, then
    - `npm run remote-setup` to install basic dependencies, and finally
    - `npm run full-deploy` to build, push, pull, sync, and deploy to production

That's it! You should now be able to run workflows to build out your site, and have all the steps to run tests and deploy changes.
