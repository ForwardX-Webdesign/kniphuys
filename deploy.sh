#!/bin/bash
# ─────────────────────────────────────────────────────────────
# Deploy Kniphuys
#   → GitHub push
#   → Netlify productie deploy (kniphuys.netlify.app)
# Gebruik: ./deploy.sh "Commit message"
# ─────────────────────────────────────────────────────────────

git add -A
git commit -m "${1:-Update website}" --allow-empty
git push origin main

# Netlify productie deploy
netlify deploy --build --prod

echo ""
echo "Klaar!"
echo "   Netlify: https://kniphuys.netlify.app"
