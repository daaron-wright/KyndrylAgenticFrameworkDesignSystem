# Build & Deploy

This project ships **two** Storybook deliverables and a Netlify config.

## Option A — Static site, drag-and-drop deploy (zero build)

The `storybook-static/` folder is a fully self-contained Storybook-style site. No `npm install`, no build.

1. Open <https://app.netlify.com/drop>
2. Drag the `storybook-static/` folder onto the page.
3. Done.

Or via Netlify CLI:

```bash
npm i -g netlify-cli
netlify deploy --dir=storybook-static --prod
```

Or via Git: push the repo and Netlify will pick up `netlify.toml`. Static option requires no build command.

## Option B — Real Storybook, built with Vite

`storybook/` is a real Storybook 8 + React + TypeScript codebase.

```bash
cd storybook
npm install
npm run build-storybook   # outputs to ../storybook-build/
```

Then deploy `storybook-build/` to Netlify (drag-and-drop, CLI, or Git).

The committed `netlify.toml` is set up for **Option B by default** (it runs `cd storybook && npm install && npm run build-storybook` and publishes `storybook-build/`).

To switch to **Option A**, edit `netlify.toml`:

```toml
[build]
  publish = "storybook-static"
  command = ""
```

## Git-based continuous deploy

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import from Git → pick the repo**.
3. Netlify reads `netlify.toml` and deploys.
4. Every push to your default branch redeploys; PRs get preview deploys.

## Custom domain

In Netlify: **Domain settings → Add custom domain** (e.g. `agentic.kyndryl.dev`). Netlify provisions a free Let's Encrypt cert.

## Local preview of the static site

```bash
# from project root
python3 -m http.server 8000
# open http://localhost:8000/storybook-static/
```
