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

# Cloudflare — uses API token (Bearer auth), NOT Global API Key
# Set CLOUDFLARE_API_TOKEN in environment or ~/.claude/credentials.local
CF_ZONE="7b3b2f087429c5c3e9688253d8df11eb"

if [ -z "$SSH_PASS" ]; then
    echo "❌ SSH password required. Usage: ./deploy.sh <password>"
    echo "   Or set SSH_PASS environment variable"
    exit 1
fi

# Check for expect (required for password automation)
if ! command -v expect &> /dev/null; then
    echo "❌ 'expect' is required but not installed."
    echo "   Install with: brew install expect"
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

expect << EXPECT_SCRIPT
set timeout 600
spawn rsync -avz --progress -e "ssh -o StrictHostKeyChecking=no" dist/ $SSH_USER@$SSH_HOST:$REMOTE_PATH
expect "password:"
send "$SSH_PASS\r"
expect {
    "total size" { exit 0 }
    "Permission denied" { exit 1 }
    timeout { exit 1 }
    eof
}
EXPECT_SCRIPT

if [ $? -ne 0 ]; then
    echo "❌ rsync failed!"
    exit 1
fi
echo "✅ All files uploaded via rsync"

# Step 3: Fix permissions
echo ""
echo "🔐 Step 3: Setting permissions..."
expect << EXPECT_SCRIPT
set timeout 30
spawn ssh -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST "chmod -R 755 $REMOTE_PATH && chmod 644 ${REMOTE_PATH}.htaccess"
expect "password:"
send "$SSH_PASS\r"
expect eof
EXPECT_SCRIPT
echo "   ✅ Permissions set (755 for all, 644 for .htaccess)"

# Step 4: Purge Cloudflare cache (Bearer token auth)
echo ""
echo "🌐 Step 4: Purging Cloudflare cache..."
if [ -n "$CLOUDFLARE_API_TOKEN" ]; then
    CF_RESPONSE=$(curl -s -X POST "https://api.cloudflare.com/client/v4/zones/$CF_ZONE/purge_cache" \
      -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
      -H "Content-Type: application/json" \
      --data '{"purge_everything":true}')

    if echo "$CF_RESPONSE" | tr -d ' \n' | grep -q '"success":true'; then
        echo "   ✅ Cache purged"
    else
        echo "   ⚠️ Cache purge failed. Response: $CF_RESPONSE"
    fi
else
    echo "   ⚠️ CLOUDFLARE_API_TOKEN not set — skipping cache purge"
    echo "   Set it in your environment or run: export CLOUDFLARE_API_TOKEN=<token>"
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
