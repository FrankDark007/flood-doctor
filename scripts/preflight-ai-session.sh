#!/usr/bin/env bash

# preflight-ai-session.sh
#
# Quick health check before starting an AI work session.
# Verifies build, metrics, and git state.
#
# Usage: bash scripts/preflight-ai-session.sh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "=== Flood Doctor AI Session Preflight ==="
echo ""

# 1. Git state
BRANCH=$(git branch --show-current)
echo "Branch: $BRANCH"
if [ "$BRANCH" != "main" ]; then
  echo "WARNING: Not on main branch!"
fi

DIRTY=$(git status --porcelain)
if [ -n "$DIRTY" ]; then
  echo "WARNING: Working tree has uncommitted changes:"
  echo "$DIRTY"
else
  echo "Working tree: clean"
fi
echo ""

# 2. Build
echo "Running build..."
if npm run build --silent 2>&1 | tail -1; then
  echo "Build: PASS"
else
  echo "Build: FAIL"
  exit 1
fi
echo ""

# 3. Metrics
echo "Running metrics scan..."
node scripts/update-project-state.mjs
echo ""

# 4. Key docs exist
echo "Documentation check:"
for doc in PROJECT_STATE.md AI_EXECUTION_PROTOCOL.md OPEN_PRIORITIES.md CHANGELOG_AI.md; do
  if [ -f "docs/$doc" ]; then
    echo "  $doc: OK"
  else
    echo "  $doc: MISSING"
  fi
done
echo ""

echo "=== Preflight complete ==="
