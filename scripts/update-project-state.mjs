#!/usr/bin/env node

/**
 * update-project-state.mjs
 *
 * Scans dist/ for pre-rendered pages, counts titles > 60 chars and duplicates,
 * then patches the <!-- METRICS:START --> block in docs/PROJECT_STATE.md.
 *
 * Usage: node scripts/update-project-state.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const STATE_FILE = path.join(ROOT, 'docs', 'PROJECT_STATE.md');

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, '/');
}

function findHtmlFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findHtmlFiles(full));
    } else if (entry.name === 'index.html') {
      results.push(full);
    }
  }
  return results;
}

function extractTitle(html) {
  const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  return match ? decodeEntities(match[1].trim()) : null;
}

// --- Main ---

const htmlFiles = findHtmlFiles(DIST);
const titles = {};
let totalRoutes = 0;
let over60 = 0;
let duplicates = 0;

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf-8');
  const title = extractTitle(html);
  if (!title) continue;

  totalRoutes++;

  if (title.length > 60) over60++;

  if (titles[title]) {
    duplicates++;
  } else {
    titles[title] = true;
  }
}

// Patch PROJECT_STATE.md
const stateContent = fs.readFileSync(STATE_FILE, 'utf-8');
const metricsBlock = [
  '<!-- METRICS:START -->',
  `- **Pre-rendered routes**: ${totalRoutes}`,
  `- **Titles > 60 chars**: ${over60}`,
  `- **Duplicate titles**: ${duplicates}`,
  '<!-- METRICS:END -->',
].join('\n');

const updated = stateContent.replace(
  /<!-- METRICS:START -->[\s\S]*?<!-- METRICS:END -->/,
  metricsBlock
);

if (updated !== stateContent) {
  fs.writeFileSync(STATE_FILE, updated);
  console.log('PROJECT_STATE.md updated:');
} else {
  console.log('PROJECT_STATE.md unchanged:');
}

console.log(`  Routes: ${totalRoutes}`);
console.log(`  Titles > 60: ${over60}`);
console.log(`  Duplicates: ${duplicates}`);
