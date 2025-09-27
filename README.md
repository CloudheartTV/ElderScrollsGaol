# Abby Personal Portfolio (Vite + React)

A simple React single-page application (SPA) built with Vite. It’s configured to deploy to GitHub Pages using the gh-pages branch. The app is served under a subpath on GitHub Pages and includes an SPA fallback (404.html) so that client-side routes work when you refresh or visit deep links.

Live site: https://Fliperdo.github.io/abby-personal-portfolio

## Prerequisites
- Node.js 18+ and npm
- Git installed
- Access to the GitHub repository (if you plan to deploy)

## Run the app locally
1. Install dependencies
   - npm install
2. Start the dev server
   - npm run dev
3. Open the app
   - The terminal will show a local URL (typically http://localhost:5173). Open it in your browser.

Optional: Build and preview the production build locally
- Build: npm run build
- Preview the build: npm run preview

## Deploy to GitHub Pages (gh-pages branch)
This repo is already configured for GitHub Pages deployment via the gh-pages package.

What the deploy script does
- Runs the production build (npm run build)
- Copies dist/index.html to dist/404.html so SPA routes work on refresh
- Publishes the dist/ folder to the gh-pages branch on the remote

How to deploy
1. Ensure you have permissions to push to the GitHub repo and that the remote is set:
   - git remote -v
   - It should point to: https://github.com/Fliperdo/abby-personal-portfolio.git
2. Deploy
   - npm run deploy
3. Configure GitHub Pages (one-time per repo)
   - On GitHub, go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages, Folder: /(root)
4. Wait a minute or two for GitHub Pages to publish and cache the site
   - Visit: https://Fliperdo.github.io/abby-personal-portfolio

## How this works with GitHub Pages
- The site is served at /abby-personal-portfolio/ under your GitHub Pages domain
- Vite is configured with a base path so assets load correctly from that subpath
- A 404.html is included in the published output to act as an SPA fallback; GitHub Pages serves 404.html when a direct link to a client route is requested, allowing the React router to pick up the route client-side

## For forks or renames
If you clone/fork/rename the repository, update two places so deployment works for your repo:
1. package.json → "homepage"
   - Example: "homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME"
2. vite.config.js → base
   - Example: base: "/YOUR-REPO-NAME/"
After updating those values, run npm install (if needed) and then npm run deploy. Also update GitHub Pages settings to use the gh-pages branch.

## Troubleshooting
- gh-pages command not found
  - Run: npm install (dev dependency gh-pages should install). Or reinstall with: npm install --save-dev gh-pages
- 404 or blank page after deploy
  - Check GitHub Pages settings are set to deploy from gh-pages branch, root folder
  - Ensure vite.config.js base matches your repo name (including leading/trailing slashes) and package.json homepage matches your GitHub Pages URL
  - Wait a few minutes for GitHub’s CDN to propagate (or hard refresh/clear cache)
- Assets not loading on GitHub Pages
  - This usually indicates the base path is incorrect. Update vite.config.js base to match your repo subpath

## Useful scripts
- npm run dev — start local dev server
- npm run build — build production files to dist/
- npm run preview — locally preview the built app
- npm run deploy — build and publish dist/ to the gh-pages branch
