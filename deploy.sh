#!/bin/bash
# Deploy Kniphuys naar Cloudflare Pages
git add -A
git commit -m "${1:-Update website}" --allow-empty
git push origin main
npx wrangler pages deploy . --project-name kniphuys --branch main
