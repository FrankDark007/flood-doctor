#!/usr/bin/env npx tsx
/**
 * Build-time validator for neighborhood pages.
 * Checks all 68 pages for required fields, title length, schema, and word count.
 * Run: npx tsx scripts/validate-neighborhoods.ts
 *
 * NOT shipped to production — dev-only validation.
 */
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_CITIES = path.resolve(__dirname, '..', 'dist-cities');

interface ValidationResult {
  page: string;
  errors: string[];
  warnings: string[];
}

function validate(): void {
  const results: ValidationResult[] = [];
  let totalPages = 0;

  // Walk dist-cities/{city}/neighborhoods/{slug}/index.html
  if (!fs.existsSync(DIST_CITIES)) {
    console.error('dist-cities/ not found. Run npm run build:cities first.');
    process.exit(1);
  }

  const cities = fs.readdirSync(DIST_CITIES).filter(d =>
    fs.statSync(path.join(DIST_CITIES, d)).isDirectory()
  );

  for (const city of cities) {
    const nhDir = path.join(DIST_CITIES, city, 'neighborhoods');
    if (!fs.existsSync(nhDir)) continue;

    const neighborhoods = fs.readdirSync(nhDir).filter(d =>
      fs.statSync(path.join(nhDir, d)).isDirectory()
    );

    for (const nh of neighborhoods) {
      const htmlPath = path.join(nhDir, nh, 'index.html');
      if (!fs.existsSync(htmlPath)) continue;

      totalPages++;
      const html = fs.readFileSync(htmlPath, 'utf-8');
      const pageId = `${city}/neighborhoods/${nh}`;
      const errors: string[] = [];
      const warnings: string[] = [];

      // 1. Title exists and ≤60 chars (decode HTML entities for accurate count)
      const titleMatch = html.match(/<title>([^<]*)<\/title>/);
      if (!titleMatch) {
        errors.push('Missing <title> tag');
      } else {
        const title = titleMatch[1]
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'");
        if (title.length > 60) {
          errors.push(`Title too long: ${title.length} chars — "${title}"`);
        }
        if (!title.trim()) {
          errors.push('Empty title');
        }
      }

      // 2. H1 exists
      const h1Match = html.match(/<h1[^>]*>([^<]*)<\/h1>/);
      if (!h1Match || !h1Match[1].trim()) {
        errors.push('Missing or empty H1');
      }

      // 3. At least 1 contextual link block (Related Services or Nearby Neighborhoods)
      const hasRelatedServices = html.includes('Water Damage Services in');
      const hasNearbyNeighborhoods = html.includes('Nearby Neighborhoods in');
      if (!hasRelatedServices && !hasNearbyNeighborhoods) {
        errors.push('No internal link blocks (Related Services or Nearby Neighborhoods)');
      }

      // 4. Schema types present
      const schemaTypes = ['BreadcrumbList', 'LocalBusiness', 'Service'];
      for (const schemaType of schemaTypes) {
        if (!html.includes(`"@type":"${schemaType}"`)) {
          errors.push(`Missing schema: ${schemaType}`);
        }
      }
      // FAQPage is conditional — warn if missing but don't error
      if (!html.includes('"@type":"FAQPage"')) {
        warnings.push('No FAQPage schema (may be intentional if no FAQ data)');
      }

      // 5. Word count ≥ 1200 (strip HTML tags, count words)
      const textContent = html
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      const wordCount = textContent.split(/\s+/).length;
      if (wordCount < 1200) {
        warnings.push(`Word count low: ${wordCount} (target ≥1200)`);
      }

      if (errors.length > 0 || warnings.length > 0) {
        results.push({ page: pageId, errors, warnings });
      }
    }
  }

  // Report
  console.log(`\nNeighborhood Validation Report`);
  console.log(`Total pages scanned: ${totalPages}`);
  console.log('─'.repeat(60));

  const failing = results.filter(r => r.errors.length > 0);
  const withWarnings = results.filter(r => r.warnings.length > 0 && r.errors.length === 0);

  if (failing.length > 0) {
    console.log(`\n❌ FAILING (${failing.length} pages):`);
    for (const r of failing) {
      console.log(`\n  ${r.page}:`);
      for (const e of r.errors) {
        console.log(`    ❌ ${e}`);
      }
      for (const w of r.warnings) {
        console.log(`    ⚠️  ${w}`);
      }
    }
  }

  if (withWarnings.length > 0) {
    console.log(`\n⚠️  WARNINGS (${withWarnings.length} pages):`);
    for (const r of withWarnings) {
      console.log(`\n  ${r.page}:`);
      for (const w of r.warnings) {
        console.log(`    ⚠️  ${w}`);
      }
    }
  }

  if (failing.length === 0 && withWarnings.length === 0) {
    console.log('\n✅ All pages pass validation!');
  } else if (failing.length === 0) {
    console.log(`\n✅ All pages pass (${withWarnings.length} warnings).`);
  }

  console.log('');
  process.exit(failing.length > 0 ? 1 : 0);
}

validate();
