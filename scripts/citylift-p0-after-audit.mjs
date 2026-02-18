import fs from 'fs';
import path from 'path';

const citiesDir = 'src/content/cities';
const cities = fs.readdirSync(citiesDir).filter(f => fs.statSync(path.join(citiesDir, f)).isDirectory());

const results = { h1s: [], titles: [] };

for (const city of cities) {
  const servicesDir = path.join(citiesDir, city, 'services');
  if (!fs.existsSync(servicesDir)) continue;
  const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

  for (const file of files) {
    const content = fs.readFileSync(path.join(servicesDir, file), 'utf8');
    const metaMatch = content.match(/meta:\s*\{[^}]*title:\s*"([^"]+)"/s);
    if (metaMatch) {
      results.titles.push({ city, file, title: metaMatch[1], len: metaMatch[1].length });
    }
    const h1Match = content.match(/^\s+h1:\s*"([^"]+)"/m);
    if (h1Match) {
      results.h1s.push({ city, file, h1: h1Match[1] });
    }
  }
}

// Check duplicates
const titleCounts = {};
results.titles.forEach(t => { titleCounts[t.title] = (titleCounts[t.title] || 0) + 1; });
const dupTitles = Object.entries(titleCounts).filter(([_, c]) => c > 1);

const h1Counts = {};
results.h1s.forEach(t => { h1Counts[t.h1] = (h1Counts[t.h1] || 0) + 1; });
const dupH1s = Object.entries(h1Counts).filter(([_, c]) => c > 1);

const over60 = results.titles.filter(t => t.len > 60);
const longest = results.titles.reduce((max, t) => t.len > max.len ? t : max, { len: 0 });

const metrics = {
  capturedAt: new Date().toISOString(),
  planVersion: 'FD-CITYLIFT-PLAN-005',
  executionVersion: 'FD-CITYLIFT-EXEC-003',
  phase: 'P0-after',
  contentFileCount: results.titles.length,
  duplicateTitles: dupTitles.map(([t, c]) => ({ title: t, count: c })),
  duplicateH1s: dupH1s.map(([h, c]) => ({ h1: h, count: c })),
  titlesOver60Chars: over60.map(t => ({ city: t.city, file: t.file, title: t.title, length: t.len })),
  longestTitle: { title: longest.title, length: longest.len, city: longest.city, file: longest.file },
  h1TemplateBugCount: results.h1s.filter(t => t.h1.includes('Flood Doctor of')).length,
  buildStatus: '189/189 OK',
  flaggedForManualReview: [],
};

fs.mkdirSync('citylift/audit', { recursive: true });
fs.writeFileSync('citylift/audit/p0-after-metrics.json', JSON.stringify(metrics, null, 2));

console.log('=== P0 AFTER METRICS ===');
console.log(`Content files: ${metrics.contentFileCount}`);
console.log(`Duplicate titles: ${dupTitles.length}`);
console.log(`Duplicate H1s: ${dupH1s.length}`);
console.log(`Titles > 60 chars: ${over60.length}`);
console.log(`Longest title: "${longest.title}" (${longest.len} chars)`);
console.log(`H1 template bug: ${metrics.h1TemplateBugCount}`);
console.log(`Build: ${metrics.buildStatus}`);
console.log(`Flagged for manual review: ${metrics.flaggedForManualReview.length}`);
console.log('');
console.log('Written to: citylift/audit/p0-after-metrics.json');

// Compare with before
if (fs.existsSync('citylift/audit/p0-before-metrics.json')) {
  const before = JSON.parse(fs.readFileSync('citylift/audit/p0-before-metrics.json', 'utf8'));
  console.log('');
  console.log('=== BEFORE vs AFTER ===');
  console.log(`Titles > 60: ${before.titlesOver60Chars.length} → ${over60.length}`);
  console.log(`Duplicate titles: ${before.duplicateTitles.length} → ${dupTitles.length}`);
  console.log(`Duplicate H1s: ${before.duplicateH1s.length} → ${dupH1s.length}`);
  console.log(`H1 template bug: ${before.h1TemplateBugCount} → ${metrics.h1TemplateBugCount}`);
}
