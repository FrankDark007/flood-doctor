#!/bin/bash
# verify-deployment.sh - Post-deployment verification script
# Checks that all critical assets are serving correct content types

SITE_URL="${1:-https://flood.doctor}"
ERRORS=0

echo "🔍 Verifying deployment at $SITE_URL"
echo "========================================"

# Extract asset references from production HTML
echo ""
echo "📄 Fetching production index.html..."
HTML=$(curl -s "$SITE_URL/")

# Extract CSS file
CSS_FILE=$(echo "$HTML" | grep -oE 'href="/assets/index-[^"]+\.css"' | sed 's/href="//;s/"//')
if [ -z "$CSS_FILE" ]; then
    echo "❌ ERROR: No CSS file reference found in HTML"
    ERRORS=$((ERRORS+1))
else
    echo "   Found CSS reference: $CSS_FILE"

    # Check CSS content-type
    CSS_CONTENT_TYPE=$(curl -sI "$SITE_URL$CSS_FILE" | grep -i "content-type:" | tr -d '\r')
    if echo "$CSS_CONTENT_TYPE" | grep -qi "text/css"; then
        echo "   ✅ CSS serving correctly: $CSS_CONTENT_TYPE"
    else
        echo "   ❌ ERROR: CSS wrong content-type: $CSS_CONTENT_TYPE"
        echo "      Expected: text/css"
        ERRORS=$((ERRORS+1))
    fi
fi

# Extract main JS file
JS_FILE=$(echo "$HTML" | grep -oE 'src="/assets/index-[^"]+\.js"' | sed 's/src="//;s/"//')
if [ -z "$JS_FILE" ]; then
    echo "❌ ERROR: No main JS file reference found in HTML"
    ERRORS=$((ERRORS+1))
else
    echo "   Found JS reference: $JS_FILE"

    # Check JS content-type
    JS_CONTENT_TYPE=$(curl -sI "$SITE_URL$JS_FILE" | grep -i "content-type:" | tr -d '\r')
    if echo "$JS_CONTENT_TYPE" | grep -qi "javascript"; then
        echo "   ✅ JS serving correctly: $JS_CONTENT_TYPE"
    else
        echo "   ❌ ERROR: JS wrong content-type: $JS_CONTENT_TYPE"
        echo "      Expected: text/javascript or application/javascript"
        ERRORS=$((ERRORS+1))
    fi
fi

# Check vendor chunks
echo ""
echo "📦 Checking vendor chunks..."
for VENDOR in "vendor-react" "vendor-icons"; do
    VENDOR_FILE=$(echo "$HTML" | grep -oE "href=\"/assets/$VENDOR-[^\"]+\.js\"" | sed 's/href="//;s/"//')
    if [ -n "$VENDOR_FILE" ]; then
        VENDOR_CT=$(curl -sI "$SITE_URL$VENDOR_FILE" | grep -i "content-type:" | tr -d '\r')
        if echo "$VENDOR_CT" | grep -qi "javascript"; then
            echo "   ✅ $VENDOR serving correctly"
        else
            echo "   ❌ ERROR: $VENDOR wrong content-type: $VENDOR_CT"
            ERRORS=$((ERRORS+1))
        fi
    fi
done

# Check code-split chunks (sample critical routes)
echo ""
echo "🧩 Checking code-split chunks..."
CHUNKS_TO_CHECK=("GuidesHub" "About" "BlogIndex" "ServicesHub")

for CHUNK in "${CHUNKS_TO_CHECK[@]}"; do
    # Find the chunk file in local dist to get exact filename
    LOCAL_CHUNK=$(ls dist/assets/${CHUNK}-*.js 2>/dev/null | head -1)
    if [ -n "$LOCAL_CHUNK" ]; then
        CHUNK_NAME=$(basename "$LOCAL_CHUNK")
        CHUNK_CT=$(curl -sI "$SITE_URL/assets/$CHUNK_NAME" | grep -i "content-type:" | tr -d '\r')
        if echo "$CHUNK_CT" | grep -qi "javascript"; then
            echo "   ✅ $CHUNK chunk serving correctly"
        else
            echo "   ❌ ERROR: $CHUNK chunk wrong content-type: $CHUNK_CT"
            echo "      File: /assets/$CHUNK_NAME"
            echo "      Expected: application/javascript, Got: $CHUNK_CT"
            ERRORS=$((ERRORS+1))
        fi
    else
        echo "   ⚠️ WARNING: $CHUNK chunk not found locally"
    fi
done

# Mobile rendering check
echo ""
echo "📱 Checking mobile response..."
MOBILE_RESPONSE=$(curl -s -A "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)" "$SITE_URL/" | head -100)
if echo "$MOBILE_RESPONSE" | grep -q "<!DOCTYPE html>"; then
    echo "   ✅ Mobile HTML response received"
else
    echo "   ⚠️ WARNING: Unexpected mobile response"
fi

# Summary
echo ""
echo "========================================"
if [ $ERRORS -eq 0 ]; then
    echo "✅ DEPLOYMENT VERIFIED - All checks passed"
    exit 0
else
    echo "❌ DEPLOYMENT FAILED - $ERRORS error(s) found"
    echo ""
    echo "Common causes:"
    echo "  - CSS/JS files not uploaded during deployment"
    echo "  - Build hash mismatch (local vs production)"
    echo "  - .htaccess serving index.html for missing assets"
    exit 1
fi
