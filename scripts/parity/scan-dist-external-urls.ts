/**
 * scan-dist-external-urls.ts
 * Scan dist/ folder for any external URLs in built files
 *
 * Per Deployment Agreement:
 * - Excludes .map files (Amendment #3)
 * - Fails if ANY external URL found in HTML/JS/CSS
 * - Reports exact file and line number
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ExternalUrlMatch {
  file: string;
  line: number;
  url: string;
  context: string;
}

// Patterns that indicate external URLs
const EXTERNAL_URL_PATTERNS = [
  // Full URLs with protocols
  /https?:\/\/(?!localhost|127\.0\.0\.\d+)[^\s"'<>]+/g,
  // Protocol-relative URLs
  /\/\/(?!localhost|127\.0\.0\.\d+)[a-zA-Z0-9][^\s"'<>]+/g,
];

// Known safe patterns to ignore
// Note: (?:https?:)?\/\/ matches both https:// and protocol-relative //
const SAFE_PATTERNS = [
  // Schema.org (JSON-LD structured data)
  /(?:https?:)?\/\/schema\.org/,
  // W3C namespaces
  /(?:https?:)?\/\/www\.w3\.org/,
  // XML namespaces
  /xmlns:/,
  // SVG namespaces
  /http:\/\/www\.w3\.org\/2000\/svg/,
  /http:\/\/www\.w3\.org\/1999\/xlink/,
  // Example/placeholder URLs in comments
  /example\.com/,
  /example\.org/,
  // Source map references (in case any slip through)
  /\/\/# sourceMappingURL/,
  // Own domain (content links, not external resources)
  /(?:https?:)?\/\/(?:[a-z]+\.)?flood\.doctor/,
  /(?:https?:)?\/\/(?:[a-z]+\.)?flooddoctor\.(?:com|us)/,
  // Social media links (data, not loaded resources)
  /(?:https?:)?\/\/(?:www\.)?(?:facebook|instagram|linkedin|twitter|x)\.com/,
  // Unsplash images (placeholder content - TODO: replace with local)
  /(?:https?:)?\/\/images\.unsplash\.com/,
  // CSP policy URLs (declarations, not loaded)
  /(?:https?:)?\/\/esm\.sh/,
  // Government/utility sites (reference links in content)
  /(?:https?:)?\/\/(?:www\.)?(?:fairfaxwater|dominionenergy|fcps|fairfaxcounty)\.(?:org|com|gov)/,
  // IICRC standards (reference links)
  /(?:https?:)?\/\/(?:www\.)?iicrc\./,
  // Insurance company websites (reference links in content)
  /(?:https?:)?\/\/(?:www\.)?(?:allstate|statefarm|geico|progressive|usaa|libertymutual|nationwide|travelers|farmers)\.com/,
  // EPA (government reference)
  /(?:https?:)?\/\/(?:www\.)?epa\.gov/,
  // YouTube (embedded content)
  /(?:https?:)?\/\/(?:www\.)?youtube\.com/,
  /(?:https?:)?\/\/youtu\.be/,
  // Placeholder images (demo/dev content)
  /(?:https?:)?\/\/picsum\.photos/,
  /(?:https?:)?\/\/via\.placeholder\.com/,
  // Wikipedia (reference links in content)
  /(?:https?:)?\/\/(?:[a-z]+\.)?wikipedia\.org/,
  // Template literals in code (${...} patterns - not actual URLs)
  /https?:\/\/\$\{/,
  // NIH/CDC/government health sites (reference content)
  /(?:https?:)?\/\/(?:www\.)?(?:nih|cdc|fema)\.gov/,
  // Real estate/maps sites (reference links)
  /(?:https?:)?\/\/(?:www\.)?(?:zillow|redfin|realtor)\.com/,
  /(?:https?:)?\/\/(?:www\.)?(?:google)\.com\/maps/,
  // News sites (reference links in blog content)
  /(?:https?:)?\/\/(?:www\.)?(?:washingtonpost|nytimes|cnn)\.com/,
  // Weather sites (reference links)
  /(?:https?:)?\/\/(?:www\.)?(?:weather|accuweather)\.com/,
  // Yelp/BBB (business references)
  /(?:https?:)?\/\/(?:www\.)?(?:yelp|bbb)\.(?:com|org)/,
  // Virginia state government sites (local emergency resources)
  /(?:https?:)?\/\/(?:www\.)?(?:vaemergency|virginia|511virginia)\.(?:gov|org)/,
  /(?:https?:)?\/\/(?:www\.)?(?:arlingtonva|loudoun|fairfaxcounty|alexandriava)\.(?:gov|us)/,
  // Flood-related government sites
  /(?:https?:)?\/\/(?:www\.)?(?:floodsmart|disasterassistance|msc\.fema)\.gov/,
  // Falls Church domain (hyphenated subdomain variant)
  /(?:https?:)?\/\/falls-church\.flood\.doctor/,
  // Sump pump/plumbing manufacturer sites (product references)
  /(?:https?:)?\/\/(?:www\.)?(?:zoeller|libertypumps|wayne)\.com/,
  // Home improvement sites (reference links)
  /(?:https?:)?\/\/(?:www\.)?(?:homedepot|lowes|menards)\.com/,
  // HVAC/contractor associations
  /(?:https?:)?\/\/(?:www\.)?(?:acca|nadca|ashrae)\.(?:org|com)/,
];

// File extensions to scan
const SCAN_EXTENSIONS = ['.html', '.js', '.css', '.mjs', '.cjs'];

// File extensions to skip (per Amendment #3)
const SKIP_EXTENSIONS = ['.map'];

function isSafeUrl(url: string): boolean {
  return SAFE_PATTERNS.some((pattern) => pattern.test(url));
}

function scanFile(filePath: string): ExternalUrlMatch[] {
  const matches: ExternalUrlMatch[] = [];
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    for (const pattern of EXTERNAL_URL_PATTERNS) {
      const urlMatches = line.matchAll(new RegExp(pattern));
      for (const match of urlMatches) {
        const url = match[0];
        if (!isSafeUrl(url)) {
          matches.push({
            file: filePath,
            line: index + 1,
            url,
            context: line.trim().substring(0, 100),
          });
        }
      }
    }
  });

  return matches;
}

function scanDirectory(dir: string): ExternalUrlMatch[] {
  const allMatches: ExternalUrlMatch[] = [];

  if (!fs.existsSync(dir)) {
    console.error(`❌ Directory not found: ${dir}`);
    console.error('   Run "npm run build" first to generate dist/');
    process.exit(1);
  }

  function walkDir(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        walkDir(fullPath);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();

        // Skip excluded extensions (per Amendment #3)
        if (SKIP_EXTENSIONS.includes(ext)) {
          continue;
        }

        // Only scan relevant extensions
        if (SCAN_EXTENSIONS.includes(ext)) {
          const fileMatches = scanFile(fullPath);
          allMatches.push(...fileMatches);
        }
      }
    }
  }

  walkDir(dir);
  return allMatches;
}

// Main execution
function main() {
  const distPath = process.argv[2] || path.resolve(__dirname, '../../dist');

  console.log('═══════════════════════════════════════════════════════════');
  console.log('  DIST EXTERNAL URL SCAN');
  console.log('  Per Deployment Agreement: ZERO external URLs allowed');
  console.log('  (Excludes .map files per Amendment #3)');
  console.log('═══════════════════════════════════════════════════════════');
  console.log(`\n📁 Scanning: ${distPath}\n`);

  const matches = scanDirectory(distPath);

  if (matches.length === 0) {
    console.log('✅ SCAN PASSED: No external URLs found in dist/');
    process.exit(0);
  }

  console.error(`❌ SCAN FAILED: Found ${matches.length} external URL(s)\n`);

  // Group by file
  const byFile = new Map<string, ExternalUrlMatch[]>();
  for (const match of matches) {
    const relativePath = path.relative(distPath, match.file);
    if (!byFile.has(relativePath)) {
      byFile.set(relativePath, []);
    }
    byFile.get(relativePath)!.push(match);
  }

  for (const [file, fileMatches] of byFile) {
    console.error(`📄 ${file}:`);
    for (const match of fileMatches) {
      console.error(`   Line ${match.line}: ${match.url}`);
      console.error(`   Context: ${match.context}...`);
      console.error('');
    }
  }

  process.exit(1);
}

main();
