#!/bin/bash
# deploy.sh - Full deployment script for flood.doctor
# Builds, uploads ALL files, purges cache, and verifies

set -e  # Exit on any error

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
FTP_HOST="132.148.253.156"
FTP_USER="Deploy@flood.doctor"
# FTP_PASS should be set as environment variable or passed as argument
FTP_PASS="${FTP_PASS:-$1}"

CF_EMAIL="darakhshan.farough@gmail.com"
CF_KEY="ed20b2bc99c97cab0fc1dda3f25795b195e3e"
CF_ZONE="7b3b2f087429c5c3e9688253d8df11eb"

if [ -z "$FTP_PASS" ]; then
    echo "❌ FTP password required. Usage: ./deploy.sh <ftp_password>"
    echo "   Or set FTP_PASS environment variable"
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

# Step 2: Upload critical assets first
echo ""
echo "📤 Step 2: Uploading assets..."

# Find the current CSS and JS files
CSS_FILE=$(ls dist/assets/index-*.css 2>/dev/null | head -1)
JS_FILE=$(ls dist/assets/index-*.js 2>/dev/null | head -1)

if [ -z "$CSS_FILE" ] || [ -z "$JS_FILE" ]; then
    echo "❌ Could not find CSS or JS bundle in dist/assets/"
    exit 1
fi

echo "   CSS: $CSS_FILE"
echo "   JS: $JS_FILE"

# Upload CSS
curl -T "$CSS_FILE" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/assets/$(basename $CSS_FILE)" 2>/dev/null
echo "   ✅ CSS uploaded"

# Upload JS
curl -T "$JS_FILE" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/assets/$(basename $JS_FILE)" 2>/dev/null
echo "   ✅ JS uploaded"

# Upload vendor chunks
for VENDOR in dist/assets/vendor-*.js; do
    curl -T "$VENDOR" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/assets/$(basename $VENDOR)" 2>/dev/null
done
echo "   ✅ Vendor chunks uploaded"

# Step 3: Upload index.html (must match the assets we just uploaded)
echo ""
echo "📄 Step 3: Uploading index.html..."
curl -T "dist/index.html" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/index.html" 2>/dev/null
echo "   ✅ index.html uploaded"

# Step 4: Upload .htaccess
echo ""
echo "⚙️ Step 4: Uploading .htaccess..."
curl -T "public/.htaccess" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/.htaccess" 2>/dev/null
echo "   ✅ .htaccess uploaded"

# Step 5: Purge Cloudflare cache
echo ""
echo "🌐 Step 5: Purging Cloudflare cache..."
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

# Step 6: Wait for cache to clear
echo ""
echo "⏳ Step 6: Waiting 5 seconds for cache to propagate..."
sleep 5

# Step 7: Verify deployment
echo ""
echo "🔍 Step 7: Verifying deployment..."
"$SCRIPT_DIR/verify-deployment.sh"

echo ""
echo "========================================"
echo "🎉 Deployment complete!"
