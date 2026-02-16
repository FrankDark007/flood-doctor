#!/bin/bash
# Copies the ChatGPT bootstrap prompt to your clipboard.
# Run this before starting a new ChatGPT session:
#   ./scripts/chatgpt-bootstrap.sh

DOCS_DIR="$(cd "$(dirname "$0")/../docs" && pwd)"
FILE="$DOCS_DIR/SESSION_BOOTSTRAP_CHATGPT.md"

if [ ! -f "$FILE" ]; then
  echo "❌ Bootstrap file not found: $FILE"
  exit 1
fi

# Extract everything below the "COPY FROM HERE" marker
CONTENT=$(sed -n '/## ⬇️ COPY FROM HERE ⬇️/,$p' "$FILE")

if [ -z "$CONTENT" ]; then
  echo "❌ Could not find copy marker in bootstrap file"
  exit 1
fi

echo "$CONTENT" | pbcopy

LINES=$(echo "$CONTENT" | wc -l | tr -d ' ')
CHARS=$(echo "$CONTENT" | wc -c | tr -d ' ')
echo "✅ Copied to clipboard ($LINES lines, $CHARS chars)"
echo "📋 Paste into a new ChatGPT session with Cmd+V"
