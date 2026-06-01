#!/bin/bash
# ─────────────────────────────────────────────────────────────
# Deploy Kniphuys
#   → GitHub push (versiebeheer)
#   → Netlify productie deploy
# Gebruik: ./deploy.sh "Commit message"
# ─────────────────────────────────────────────────────────────

git add -A
git commit -m "${1:-Update website}" --allow-empty
git push origin main

# Netlify productie deploy
netlify deploy --build --prod

echo ""
echo "Klaar! Live op https://kniphuys.netlify.app"
