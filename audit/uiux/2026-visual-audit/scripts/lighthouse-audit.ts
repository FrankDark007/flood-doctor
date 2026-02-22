/**
 * Lighthouse Audit Script
 * Runs Lighthouse CLI for each page at each breakpoint config.
 *
 * Usage: npx tsx audit/uiux/2026-visual-audit/scripts/lighthouse-audit.ts
 * Requires: vite dev server running on localhost:5173, lighthouse CLI installed
 */

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_DIR = path.resolve(__dirname, '..');
const LH_DIR = path.join(BASE_DIR, 'lighthouse');
const PAGES_FILE = path.join(BASE_DIR, 'target-pages.json');
const LOCAL_BASE = 'http://localhost:5173';

interface LHConfig {
  name: string;
  formFactor: 'desktop' | 'mobile';
  screenEmulation?: string;
}

const CONFIGS: LHConfig[] = [
  { name: 'desktop', formFactor: 'desktop' },
  { name: 'mobile', formFactor: 'mobile' },
];

interface LHSummary {
  page: string;
  breakpoint: string;
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  reportPath: string;
}

function runLighthouse(url: string, slug: string, config: LHConfig): LHSummary | null {
  const outputPath = path.join(LH_DIR, `${slug}-${config.name}.json`);

  const cmd = [
    'npx', 'lighthouse', `"${url}"`,
    '--output=json',
    `--output-path="${outputPath}"`,
    `--form-factor=${config.formFactor}`,
    '--chrome-flags="--headless --no-sandbox --disable-gpu"',
    '--only-categories=performance,accessibility,best-practices,seo',
    '--quiet',
    '--max-wait-for-load=30000',
  ];

  if (config.formFactor === 'desktop') {
    cmd.push('--preset=desktop');
  }

  try {
    console.log(`    Running LH ${config.name}...`);
    execSync(cmd.join(' '), { timeout: 120000, stdio: 'pipe' });

    if (fs.existsSync(outputPath)) {
      const report = JSON.parse(fs.readFileSync(outputPath, 'utf-8'));
      const cats = report.categories || {};
      return {
        page: slug,
        breakpoint: config.name,
        performance: Math.round((cats.performance?.score || 0) * 100),
        accessibility: Math.round((cats.accessibility?.score || 0) * 100),
        bestPractices: Math.round((cats['best-practices']?.score || 0) * 100),
        seo: Math.round((cats.seo?.score || 0) * 100),
        reportPath: `lighthouse/${slug}-${config.name}.json`,
      };
    }
  } catch (err: any) {
    console.error(`    LH error for ${slug}/${config.name}: ${err.message?.substring(0, 100)}`);
  }

  return null;
}

async function main() {
  fs.mkdirSync(LH_DIR, { recursive: true });

  const pagesData = JSON.parse(fs.readFileSync(PAGES_FILE, 'utf-8'));
  const targetPages = pagesData.pages;

  // Only audit local (apex) pages — subdomain pages require network access
  const apexPages = targetPages.filter((p: any) => !p.subdomain);
  const subdomainPages = targetPages.filter((p: any) => !!p.subdomain);

  console.log(`\n🔦 Running Lighthouse on ${apexPages.length} local + ${subdomainPages.length} production pages...\n`);

  const summaries: LHSummary[] = [];

  for (const tp of apexPages) {
    const pageUrl = `${LOCAL_BASE}${tp.localPath}`;
    console.log(`  → ${tp.slug} (local)`);
    for (const config of CONFIGS) {
      const result = runLighthouse(pageUrl, tp.slug, config);
      if (result) summaries.push(result);
    }
  }

  for (const tp of subdomainPages) {
    console.log(`  → ${tp.slug} (production: ${tp.url})`);
    for (const config of CONFIGS) {
      const result = runLighthouse(tp.url, tp.slug, config);
      if (result) summaries.push(result);
    }
  }

  // Write summary
  const summaryPath = path.join(BASE_DIR, 'lighthouse-summary.json');
  fs.writeFileSync(summaryPath, JSON.stringify({
    generated: new Date().toISOString(),
    totalAudits: summaries.length,
    summaries,
    averages: {
      performance: Math.round(summaries.reduce((s, r) => s + r.performance, 0) / summaries.length),
      accessibility: Math.round(summaries.reduce((s, r) => s + r.accessibility, 0) / summaries.length),
      bestPractices: Math.round(summaries.reduce((s, r) => s + r.bestPractices, 0) / summaries.length),
      seo: Math.round(summaries.reduce((s, r) => s + r.seo, 0) / summaries.length),
    },
  }, null, 2));

  console.log(`\n✅ Lighthouse summary written to ${summaryPath}`);
  console.log(`   Audits completed: ${summaries.length}`);

  // Print table
  console.log('\n   Page                          | BP      | Perf | A11y | BP   | SEO');
  console.log('   ' + '-'.repeat(80));
  for (const s of summaries) {
    console.log(`   ${s.page.padEnd(32)}| ${s.breakpoint.padEnd(8)}| ${String(s.performance).padEnd(5)}| ${String(s.accessibility).padEnd(5)}| ${String(s.bestPractices).padEnd(5)}| ${s.seo}`);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
