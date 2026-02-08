#!/usr/bin/env node
/**
 * Verifies that all relative assets referenced in the GBP snapshot HTML
 * exist in the public/gbp directory.
 *
 * Usage: node scripts/check-gbp-snapshot-assets.js
 *    or: npx tsx scripts/check-gbp-snapshot-assets.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_GBP_DIR = path.join(__dirname, '..', 'public', 'gbp');
const INDEX_HTML_PATH = path.join(
  PUBLIC_GBP_DIR,
  'business.google.com',
  'us',
  'business-profile',
  'index.html'
);

interface AssetCheck {
  reference: string;
  resolvedPath: string;
  exists: boolean;
}

function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function decodeAssetPath(str: string): string {
  // First decode HTML entities
  let decoded = decodeHtmlEntities(str);
  // Then try to decode URL-encoded characters
  try {
    decoded = decodeURIComponent(decoded);
  } catch {
    // If decodeURIComponent fails, return the HTML-decoded version
  }
  return decoded;
}

function extractAssetReferences(html: string): string[] {
  const references: string[] = [];

  // Match href="..." and src="..." attributes with relative paths
  const patterns = [
    /href="(\.\.\/[^"]+)"/g,
    /src="(\.\.\/[^"]+)"/g,
    /url\(['"]?(\.\.\/[^'")\s]+)['"]?\)/g,
  ];

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(html)) !== null) {
      // Decode HTML entities and URL-encoding to match filesystem
      const ref = decodeAssetPath(match[1]);
      // Skip data: URLs and external URLs
      if (!ref.startsWith('data:') && !ref.startsWith('http')) {
        references.push(ref);
      }
    }
  }

  // Deduplicate
  return [...new Set(references)];
}

function resolveAssetPath(reference: string, baseDir: string): string {
  // The HTML is at business.google.com/us/business-profile/index.html
  // So ../../../ goes up to the root of the snapshot
  const htmlDir = path.join(baseDir, 'business.google.com', 'us', 'business-profile');
  return path.resolve(htmlDir, reference);
}

function checkAsset(reference: string, baseDir: string): AssetCheck {
  const resolvedPath = resolveAssetPath(reference, baseDir);
  const exists = fs.existsSync(resolvedPath);
  return {
    reference,
    resolvedPath: path.relative(baseDir, resolvedPath),
    exists,
  };
}

function main() {
  console.log('GBP Snapshot Asset Verification');
  console.log('================================\n');

  // Check if the index.html exists
  if (!fs.existsSync(INDEX_HTML_PATH)) {
    console.error(`ERROR: Index HTML not found at ${INDEX_HTML_PATH}`);
    console.error('Make sure the SiteSucker snapshot is extracted to public/gbp/');
    process.exit(1);
  }

  // Read the HTML
  const html = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');
  console.log(`Read ${html.length.toLocaleString()} bytes from index.html\n`);

  // Extract asset references
  const references = extractAssetReferences(html);
  console.log(`Found ${references.length} unique asset references\n`);

  // Check each asset
  const results = references.map((ref) => checkAsset(ref, PUBLIC_GBP_DIR));

  // Separate existing and missing
  const existing = results.filter((r) => r.exists);
  const missing = results.filter((r) => !r.exists);

  console.log(`Assets found: ${existing.length}`);
  console.log(`Assets missing: ${missing.length}\n`);

  if (missing.length > 0) {
    console.log('MISSING ASSETS:');
    console.log('---------------');
    for (const asset of missing) {
      console.log(`  ${asset.reference}`);
      console.log(`    -> Expected at: ${asset.resolvedPath}`);
    }
    console.log('');
  }

  // Group existing by domain/folder
  const byFolder: Record<string, number> = {};
  for (const asset of existing) {
    const folder = asset.resolvedPath.split('/')[0] || 'root';
    byFolder[folder] = (byFolder[folder] || 0) + 1;
  }

  console.log('ASSETS BY SOURCE:');
  console.log('-----------------');
  for (const [folder, count] of Object.entries(byFolder).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${folder}: ${count} files`);
  }

  console.log('\n================================');
  if (missing.length === 0) {
    console.log('SUCCESS: All referenced assets exist!');
    process.exit(0);
  } else {
    console.log(`WARNING: ${missing.length} assets are missing.`);
    console.log('The iframe may have broken images or styles.');
    process.exit(1);
  }
}

main();
