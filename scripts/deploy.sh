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

# Step 2: Upload ALL assets (JS chunks, CSS, etc.)
echo ""
echo "📤 Step 2: Uploading all assets..."

ASSET_COUNT=$(ls dist/assets/* 2>/dev/null | wc -l | tr -d ' ')
echo "   Found $ASSET_COUNT files in dist/assets/"

if [ "$ASSET_COUNT" -eq 0 ]; then
    echo "❌ No assets found in dist/assets/"
    exit 1
fi

# Upload all assets with parallel uploads for speed (8 concurrent)
echo "   Uploading with 8 parallel connections..."

# Use GNU parallel-style approach with proper credential passing
for FILE in dist/assets/*; do
    FILENAME=$(basename "$FILE")
    curl -s -T "$FILE" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/assets/$FILENAME" &

    # Limit to 8 concurrent uploads
    while [ $(jobs -r | wc -l) -ge 8 ]; do
        sleep 0.1
    done
done

# Wait for all uploads to complete
wait

echo "   ✅ All $ASSET_COUNT assets uploaded"

# Step 2b: Upload images (recursively)
echo ""
echo "📸 Step 2b: Uploading images..."

if [ -d "dist/images" ]; then
    # Create image directories on server first
    for DIR in $(find dist/images -type d); do
        REMOTE_DIR="${DIR#dist/}"
        curl -s -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/" -Q "MKD $REMOTE_DIR" 2>/dev/null || true
    done

    # Upload all image files
    IMG_COUNT=$(find dist/images -type f | wc -l | tr -d ' ')
    echo "   Found $IMG_COUNT image files"

    find dist/images -type f | while read FILE; do
        REMOTE_PATH="${FILE#dist/}"
        curl -s -T "$FILE" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/$REMOTE_PATH" &

        # Limit to 8 concurrent uploads
        while [ $(jobs -r | wc -l) -ge 8 ]; do
            sleep 0.1
        done
    done
    wait

    echo "   ✅ All images uploaded"
else
    echo "   ⚠️ No images directory found"
fi

# Step 2c: Upload sitemaps
echo ""
echo "🗺️ Step 2c: Uploading sitemaps..."

if [ -d "dist/sitemaps" ]; then
    curl -s -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/" -Q "MKD sitemaps" 2>/dev/null || true
    SITEMAP_COUNT=$(ls dist/sitemaps/*.xml 2>/dev/null | wc -l | tr -d ' ')
    for SITEMAP in dist/sitemaps/*.xml; do
        curl -s -T "$SITEMAP" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/sitemaps/$(basename $SITEMAP)"
    done
    echo "   ✅ $SITEMAP_COUNT sitemaps uploaded"
fi

# Upload root sitemap.xml and robots.txt
if [ -f "dist/sitemap.xml" ]; then
    curl -s -T "dist/sitemap.xml" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/sitemap.xml"
    echo "   ✅ sitemap.xml uploaded"
fi

if [ -f "dist/robots.txt" ]; then
    curl -s -T "dist/robots.txt" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/robots.txt"
    echo "   ✅ robots.txt uploaded"
fi

if [ -f "dist/404.html" ]; then
    curl -s -T "dist/404.html" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/404.html"
    echo "   ✅ 404.html uploaded"
fi

# Step 3: Upload index.html (must match the assets we just uploaded)
echo ""
echo "📄 Step 3: Uploading index.html..."
curl -T "dist/index.html" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/index.html" 2>/dev/null
echo "   ✅ index.html uploaded"

# Step 4: Upload .htaccess
echo ""
echo "⚙️ Step 4: Uploading .htaccess..."
curl -T "dist/.htaccess" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/.htaccess" 2>/dev/null
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
