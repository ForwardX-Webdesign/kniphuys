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

# Cloudflare Pages — preview/staging
npx wrangler pages deploy . --project-name kniphuys --branch main

echo ""
echo "✅ Klaar!"
echo "   Netlify productie : wordt auto-deployed via GitHub"
echo "   Cloudflare preview: https://kniphuys.pages.dev"
