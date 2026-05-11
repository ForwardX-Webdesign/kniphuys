#!/bin/bash
# ─────────────────────────────────────────────────────────────
# Deploy Kniphuys
#   → GitHub push  → Netlify auto-deploy (productie)
#   → Cloudflare Pages (preview/staging URL)
# Gebruik: ./deploy.sh "Commit message"
# ─────────────────────────────────────────────────────────────

git add -A
git commit -m "${1:-Update website}" --allow-empty
git push origin main

# Eleventy build + Cloudflare Pages preview/staging
npm run build
npx wrangler pages deploy _site --project-name kniphuys --branch main

echo ""
echo "Klaar!"
echo "   Netlify: auto-deploy via GitHub push"
echo "   Cloudflare preview: https://kniphuys.pages.dev"
