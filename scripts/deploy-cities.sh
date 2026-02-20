#!/bin/bash
# deploy-cities.sh - Deploy all city subdomain sites
# Builds city bundle, generates 13 city sites, deploys each to its subdomain
#
# Usage:
#   ./deploy-cities.sh <ssh_password>              # full build + deploy
#   ./deploy-cities.sh <ssh_password> --skip-build  # deploy only (dist-cities/ must exist)
#
# Environment variables (optional):
#   SSH_PASS               — SSH password (alternative to positional arg)
#   CLOUDFLARE_API_TOKEN   — Bearer token for cache purge (recommended)

set -e  # Exit on any error

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

# Parse flags
SKIP_BUILD=false
for arg in "$@"; do
    case "$arg" in
        --skip-build) SKIP_BUILD=true ;;
    esac
done

# SSH credentials
SSH_HOST="132.148.253.156"
SSH_USER="hubbds2w11bg"
SSH_PASS="${SSH_PASS:-$1}"

# Cloudflare — uses API token (Bearer auth), NOT Global API Key
# Set CLOUDFLARE_API_TOKEN in environment or ~/.claude/credentials.local
CF_ZONE="7b3b2f087429c5c3e9688253d8df11eb"

# All 13 Virginia cities
CITIES=("mclean" "arlington" "alexandria" "fairfax" "vienna" "tysons" "reston" "herndon" "ashburn" "springfield" "fallschurch" "greatfalls" "lorton")

if [ -z "$SSH_PASS" ]; then
    echo "❌ SSH password required. Usage: ./deploy-cities.sh <password> [--skip-build]"
    echo "   Or set SSH_PASS environment variable"
    exit 1
fi

# Check for expect
if ! command -v expect &> /dev/null; then
    echo "❌ 'expect' is required but not installed."
    echo "   Install with: brew install expect"
    exit 1
fi

echo "🏙️  FLOOD DOCTOR CITY SUBDOMAIN DEPLOYMENT"
echo "==========================================="
echo ""

# Step 1: Build all city sites (or skip if --skip-build)
cd "$PROJECT_DIR"
if [ "$SKIP_BUILD" = true ] && [ -d "$PROJECT_DIR/dist-cities" ]; then
    CITY_COUNT=$(ls -d "$PROJECT_DIR/dist-cities"/*/ 2>/dev/null | wc -l | tr -d ' ')
    echo "📦 Step 1: Skipping build (--skip-build). Found $CITY_COUNT city dirs in dist-cities/"
    if [ "$CITY_COUNT" -lt 13 ]; then
        echo "   ⚠️  Expected 13 cities, found $CITY_COUNT — consider rebuilding"
    fi
else
    echo "📦 Step 1: Building all city sites..."
    npm run build:cities
    if [ $? -ne 0 ]; then
        echo "❌ City build failed!"
        exit 1
    fi
    echo "✅ All 13 city sites built"
fi

# Step 2: Deploy each city
echo ""
echo "📤 Step 2: Deploying ${#CITIES[@]} city sites..."
echo ""

DEPLOYED=0
FAILED=0

for city in "${CITIES[@]}"; do
    LOCAL_PATH="$PROJECT_DIR/dist-cities/$city/"
    REMOTE_PATH="~/public_html/flood.doctor/${city}/"

    if [ ! -d "$LOCAL_PATH" ]; then
        echo "   ⚠️  $city: dist-cities/$city/ not found, skipping"
        ((FAILED++))
        continue
    fi

    echo "   📍 Deploying $city.flood.doctor..."

    # Create remote directory if needed and deploy
    expect << EXPECT_SCRIPT > /dev/null 2>&1
set timeout 120
spawn ssh -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST "mkdir -p $REMOTE_PATH"
expect "password:"
send "$SSH_PASS\r"
expect eof
EXPECT_SCRIPT

    expect << EXPECT_SCRIPT > /dev/null 2>&1
set timeout 300
spawn rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no" $LOCAL_PATH $SSH_USER@$SSH_HOST:$REMOTE_PATH
expect "password:"
send "$SSH_PASS\r"
expect {
    "total size" { exit 0 }
    "Permission denied" { exit 1 }
    timeout { exit 1 }
    eof
}
EXPECT_SCRIPT

    if [ $? -eq 0 ]; then
        echo "      ✅ $city.flood.doctor deployed"
        ((DEPLOYED++))
    else
        echo "      ❌ $city.flood.doctor failed"
        ((FAILED++))
    fi
done

echo ""
echo "   📊 Results: $DEPLOYED deployed, $FAILED failed"

# Step 3: Fix permissions for all cities
echo ""
echo "🔐 Step 3: Setting permissions..."
for city in "${CITIES[@]}"; do
    REMOTE_PATH="~/public_html/flood.doctor/${city}/"
    expect << EXPECT_SCRIPT > /dev/null 2>&1
set timeout 30
spawn ssh -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST "chmod -R 755 ~/public_html/flood.doctor/$city 2>/dev/null; chmod 644 ~/public_html/flood.doctor/$city/.htaccess 2>/dev/null"
expect "password:"
send "$SSH_PASS\r"
expect eof
EXPECT_SCRIPT
done
echo "   ✅ Permissions set for all cities"

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

# Step 5: Verify a sample city
echo ""
echo "🔍 Step 5: Verifying deployment..."
sleep 3

echo "   Checking mclean.flood.doctor..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://mclean.flood.doctor/")
if [ "$HTTP_STATUS" = "200" ]; then
    echo "   ✅ mclean.flood.doctor returns 200"
else
    echo "   ⚠️ mclean.flood.doctor returned $HTTP_STATUS"
fi

# Check for correct city ID in HTML
CITY_ID=$(curl -s "https://mclean.flood.doctor/" | grep -o "__FLOOD_DOCTOR_CITY__.*'mclean'" || echo "")
if [ -n "$CITY_ID" ]; then
    echo "   ✅ City ID 'mclean' found in HTML"
else
    echo "   ⚠️ City ID not found - may need DNS configuration"
fi

echo ""
echo "==========================================="
echo "🎉 City deployment complete!"
echo ""
echo "📋 Deployed cities:"
for city in "${CITIES[@]}"; do
    echo "   - https://${city}.flood.doctor/"
done
echo ""
echo "⚠️  DNS Note: Each subdomain needs an A record → $SSH_HOST"
echo "   Or configure wildcard: *.flood.doctor → $SSH_HOST"
