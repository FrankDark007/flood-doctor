#!/usr/bin/env npx tsx
/**
 * Build-time validator for neighborhood pages.
 * Checks all 68 pages for required fields, title length, schema, word count,
 * canonical correctness, breadcrumb path, and title/H1 uniqueness.
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

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function validate(): void {
  const results: ValidationResult[] = [];
  let totalPages = 0;

  // Uniqueness tracking
  const allTitles: Map<string, string[]> = new Map();
  const allH1s: Map<string, string[]> = new Map();

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

      // Expected canonical URL
      const expectedCanonical = `https://${city}.flood.doctor/neighborhoods/${nh}/`;

      // 1. Title exists and ≤60 chars
      const titleMatch = html.match(/<title>([^<]*)<\/title>/);
      if (!titleMatch) {
        errors.push('Missing <title> tag');
      } else {
        const title = decodeEntities(titleMatch[1]);
        if (title.length > 60) {
          errors.push(`Title too long: ${title.length} chars — "${title}"`);
        }
        if (!title.trim()) {
          errors.push('Empty title');
        }
        // Track for uniqueness
        const existing = allTitles.get(title) || [];
        existing.push(pageId);
        allTitles.set(title, existing);
      }

      // 2. H1 exists
      const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      const h1Text = h1Match ? decodeEntities(h1Match[1].replace(/<[^>]+>/g, '').trim()) : '';
      if (!h1Text) {
        errors.push('Missing or empty H1');
      } else {
        const existing = allH1s.get(h1Text) || [];
        existing.push(pageId);
        allH1s.set(h1Text, existing);
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
      if (!html.includes('"@type":"FAQPage"')) {
        warnings.push('No FAQPage schema');
      }

      // 5. Word count ≥ 1200
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

      // 6. Canonical matches expected URL exactly
      const canonicalMatch = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*>/);
      if (!canonicalMatch) {
        // Also check alternate attribute order
        const altMatch = html.match(/<link[^>]*href="([^"]*)"[^>]*rel="canonical"[^>]*>/);
        if (!altMatch) {
          warnings.push('No canonical tag found');
        } else {
          const canonical = altMatch[1];
          if (canonical !== expectedCanonical) {
            errors.push(`Canonical mismatch: got "${canonical}", expected "${expectedCanonical}"`);
          }
        }
      } else {
        const canonical = canonicalMatch[1];
        if (canonical !== expectedCanonical) {
          errors.push(`Canonical mismatch: got "${canonical}", expected "${expectedCanonical}"`);
        }
      }

      // 7. Breadcrumb schema path: Home → City → Neighborhood
      const schemaMatch = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/);
      if (schemaMatch) {
        try {
          const schema = JSON.parse(schemaMatch[1]);
          const graphs = schema['@graph'] || [schema];
          const breadcrumb = graphs.find((g: any) => g['@type'] === 'BreadcrumbList');
          if (breadcrumb?.itemListElement) {
            const items = breadcrumb.itemListElement;
            if (items.length < 3) {
              warnings.push(`Breadcrumb only has ${items.length} items (expected 3: Home → City → Neighborhood)`);
            } else {
              // Verify position 1 = Home
              if (items[0].name !== 'Home') {
                warnings.push(`Breadcrumb[0] should be "Home", got "${items[0].name}"`);
              }
              // Verify position 2 points to city subdomain
              if (items[1].item && !items[1].item.includes(`${city}.flood.doctor`)) {
                warnings.push(`Breadcrumb[1] should point to ${city}.flood.doctor, got "${items[1].item}"`);
              }
            }
          }
        } catch {
          warnings.push('Failed to parse ld+json schema');
        }
      }

      // 8. Body link blocks resolve (check Related Services paths exist in build output)
      const relatedServicePaths = [
        '/services/residential/restoration-services/water-damage-restoration/',
        '/services/residential/cleanup-services/mold-remediation/',
        '/services/residential/cleanup-services/sewage-cleanup/',
        '/services/residential/specialty-services/basement-flooding/',
      ];
      for (const svcPath of relatedServicePaths) {
        if (html.includes(`href="${svcPath}"`)) {
          // Check the path exists in the city's build output
          const cityBuildPath = path.join(DIST_CITIES, city, svcPath.slice(1), 'index.html');
          if (!fs.existsSync(cityBuildPath)) {
            warnings.push(`Related service link ${svcPath} — no build output at ${city}${svcPath}`);
          }
        }
      }

      if (errors.length > 0 || warnings.length > 0) {
        results.push({ page: pageId, errors, warnings });
      }
    }
  }

  // ── Report ──
  console.log(`\nNeighborhood Validation Report`);
  console.log(`Total pages scanned: ${totalPages}`);
  console.log('─'.repeat(60));

  // Uniqueness check
  const dupTitles = [...allTitles.entries()].filter(([, pages]) => pages.length > 1);
  const dupH1s = [...allH1s.entries()].filter(([, pages]) => pages.length > 1);

  console.log(`\n📋 Uniqueness Audit:`);
  console.log(`  Titles: ${allTitles.size} unique / ${totalPages} total — ${dupTitles.length} duplicates`);
  console.log(`  H1s:    ${allH1s.size} unique / ${totalPages} total — ${dupH1s.length} duplicates`);

  if (dupTitles.length > 0) {
    console.log(`\n  ❌ Duplicate Titles:`);
    for (const [title, pages] of dupTitles) {
      console.log(`    "${title}" → ${pages.join(', ')}`);
    }
  }
  if (dupH1s.length > 0) {
    console.log(`\n  ❌ Duplicate H1s:`);
    for (const [h1, pages] of dupH1s) {
      console.log(`    "${h1}" → ${pages.join(', ')}`);
    }
  }

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

  const totalErrors = dupTitles.length + dupH1s.length + failing.length;
  if (totalErrors === 0 && withWarnings.length === 0) {
    console.log('\n✅ All pages pass validation!');
  } else if (totalErrors === 0) {
    console.log(`\n✅ All pages pass (${withWarnings.length} warnings).`);
  }

  console.log('');
  process.exit(totalErrors > 0 ? 1 : 0);
}

validate();
