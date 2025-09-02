# SAF Template Repository

This is a template repository to create complex web applications using SAF.

- Shared logic: [SAF library repository](https://github.com/your-org/saflib).
- Information about SAF: [https://saf-demo.online](https://saf-demo.online) ([src](https://github.com/your-org/saf-2025)).

# Setup

1. Clone this repo.
2. Install npm or similar. Your Node version must be 22 or higher. Run `npm install`.
3. Install docker.
4. Replace all "your-org" strings with your GitHub (or similar) user/organization name.
5. Find all "TODO" strings outside of `saflib/` and follow their instructions.

# Testing

- **Make sure static tests pass**
  - Run `npm run typecheck`.
  - Run `npm run test`.

- **Run site locally**
  - In `deploy/dev`, run `npm run dev -- --build`. Navigate to `http://docker.localhost/` in your browser to test the stub site.
  - In `deploy/prod`, run `npm run build`, and then `npm run prod-local`. Navigate to `http://docker.localhost/` in your browser to test the production build locally.

- **Run e2e tests**
  - With `npm run prod-local` still running, run `npm run test:e2e`.

- **Deploy to production**
  Once you've done all the TODOs in `deploy/prod`, including having a remote instance to deploy to (ideally with a domain pointing to it), then:
  - In `deploy/prod`, Run:
    - `npm run remote-purge` to enforce a clean slate, then
    - `npm run remote-setup` to install basic dependencies, and finally
    - `npm run full-deploy` to build, push, pull, sync, and deploy to production

That's it! You should now be able to run workflows to build out your site, and have all the steps to run tests and deploy changes.
