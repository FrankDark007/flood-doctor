#!/bin/bash
# deploy.sh - Full deployment script for flood.doctor
# Builds, uploads via rsync (SSH), purges Cloudflare cache, and verifies

set -e  # Exit on any error

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

# SSH credentials (faster than FTP)
SSH_HOST="132.148.253.156"
SSH_USER="hubbds2w11bg"
SSH_PASS="${SSH_PASS:-$1}"
REMOTE_PATH="~/public_html/flood.doctor/"

# Cloudflare
CF_EMAIL="darakhshan.farough@gmail.com"
CF_KEY="ed20b2bc99c97cab0fc1dda3f25795b195e3e"
CF_ZONE="7b3b2f087429c5c3e9688253d8df11eb"

if [ -z "$SSH_PASS" ]; then
    echo "❌ SSH password required. Usage: ./deploy.sh <password>"
    echo "   Or set SSH_PASS environment variable"
    exit 1
fi

# Check for sshpass (required for password automation)
if ! command -v sshpass &> /dev/null; then
    echo "❌ 'sshpass' is required but not installed."
    echo "   Install with: brew install sshpass"
    exit 1
fi

echo "🚀 Starting deployment to flood.doctor"
echo "========================================"

# Step 1: Build
echo ""
echo "📦 Step 1: Building production bundle..."
cd "$PROJECT_DIR"
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi
echo "✅ Build complete"

# Step 2: Deploy via rsync (SSH)
echo ""
echo "📤 Step 2: Deploying via rsync..."

ASSET_COUNT=$(ls dist/assets/* 2>/dev/null | wc -l | tr -d ' ')
echo "   Found $ASSET_COUNT files in dist/assets/"

sshpass -p "$SSH_PASS" rsync -avz --progress -e "ssh -o StrictHostKeyChecking=no" dist/ "$SSH_USER@$SSH_HOST:$REMOTE_PATH"

if [ $? -ne 0 ]; then
    echo "❌ rsync failed!"
    exit 1
fi
echo "✅ All files uploaded via rsync"

# Step 3: Fix permissions
echo ""
echo "🔐 Step 3: Setting permissions..."
sshpass -p "$SSH_PASS" ssh -o StrictHostKeyChecking=no "$SSH_USER@$SSH_HOST" "chmod -R 755 $REMOTE_PATH && chmod 644 ${REMOTE_PATH}.htaccess 2>/dev/null || true"
echo "   ✅ Permissions set (755 for all, 644 for .htaccess)"

# Step 4: Purge Cloudflare cache
echo ""
echo "🌐 Step 4: Purging Cloudflare cache..."
CF_RESPONSE=$(curl -s -X POST "https://api.cloudflare.com/client/v4/zones/$CF_ZONE/purge_cache" \
  -H "X-Auth-Email: $CF_EMAIL" \
  -H "X-Auth-Key: $CF_KEY" \
  -H "Content-Type: application/json" \
  --data '{"purge_everything":true}')

if echo "$CF_RESPONSE" | grep -q '"success":true'; then
    echo "   ✅ Cache purged"
else
    echo "   ⚠️ Cache purge may have failed: $CF_RESPONSE"
fi

# Step 5: Wait for cache to clear
echo ""
echo "⏳ Step 5: Waiting 5 seconds for cache to propagate..."
sleep 5

# Step 6: Verify deployment
echo ""
echo "🔍 Step 6: Verifying deployment..."
"$SCRIPT_DIR/verify-deployment.sh"

echo ""
echo "========================================"
echo "🎉 Deployment complete!"
