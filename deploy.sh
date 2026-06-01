#!/bin/bash
# ─────────────────────────────────────────────────────────────
# Deploy Kniphuys
#   → git push naar main = automatische Netlify deploy
# Gebruik: ./deploy.sh "Commit message"
# ─────────────────────────────────────────────────────────────

git add -A
git commit -m "${1:-Update website}" --allow-empty
git push origin main

echo ""
echo "Klaar! Netlify bouwt automatisch → https://kniphuys.netlify.app"
