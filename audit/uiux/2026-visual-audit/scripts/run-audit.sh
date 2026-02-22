#!/bin/bash
# Master audit runner — executes all audit phases
# Usage: bash audit/uiux/2026-visual-audit/scripts/run-audit.sh
#
# Prerequisites:
#   - npm run dev (vite dev server on port 5173)
#   - npx playwright install chromium
#   - npm install -g lighthouse (optional, for Phase 2)

set -e

AUDIT_DIR="audit/uiux/2026-visual-audit"
SCRIPTS_DIR="$AUDIT_DIR/scripts"

echo "═══════════════════════════════════════════"
echo " Flood Doctor Visual UI/UX Audit Pack"
echo " Generated: $(date '+%Y-%m-%d %H:%M')"
echo "═══════════════════════════════════════════"

# Check dev server
if ! curl -s -o /dev/null http://localhost:5173; then
  echo "❌ Dev server not running on port 5173. Run: npm run dev"
  exit 1
fi

echo ""
echo "Phase 1: Screenshots"
echo "─────────────────────"
npx tsx "$SCRIPTS_DIR/capture-screenshots.ts"

echo ""
echo "Phase 2: Accessibility Audit"
echo "─────────────────────────────"
npx tsx "$SCRIPTS_DIR/a11y-audit.ts"

echo ""
echo "Phase 3: Image Inventory"
echo "─────────────────────────"
npx tsx "$SCRIPTS_DIR/image-inventory.ts"

echo ""
echo "Phase 4: Lighthouse (may take 5-10 min)"
echo "─────────────────────────────────────────"
if command -v lighthouse &> /dev/null || npx lighthouse --version &> /dev/null 2>&1; then
  npx tsx "$SCRIPTS_DIR/lighthouse-audit.ts"
else
  echo "⚠️  Lighthouse CLI not found. Install with: npm install -g lighthouse"
  echo "   Skipping Lighthouse phase."
fi

echo ""
echo "═══════════════════════════════════════════"
echo " Audit Pack Complete"
echo "═══════════════════════════════════════════"
echo ""
echo "Artifacts:"
find "$AUDIT_DIR" -type f | sort
