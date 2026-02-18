/**
 * CityLift P0 — Deterministic Title Normalization
 * FD-CITYLIFT-EXEC-003
 *
 * Target pattern: {Primary Keyword} in {City}, VA | Flood Doctor
 * Hard limit: ≤ 60 characters
 *
 * Does NOT modify: H1, meta descriptions, content body, schema, routes
 */

import fs from 'fs';
import path from 'path';

const citiesDir = 'src/content/cities';
const DRY_RUN = process.argv.includes('--dry-run');

// City slug → display name mapping (derived from H1 patterns)
const CITY_NAMES = {
  alexandria: 'Alexandria',
  arlington: 'Arlington',
  ashburn: 'Ashburn',
  fairfax: 'Fairfax',
  fallschurch: 'Falls Church',
  greatfalls: 'Great Falls',
  herndon: 'Herndon',
  lorton: 'Lorton',
  mclean: 'McLean',
  reston: 'Reston',
  springfield: 'Springfield',
  tysons: 'Tysons',
  vienna: 'Vienna',
};

// Service file slug → canonical short keyword for titles
const SERVICE_TITLE_KEYWORDS = {
  'water-damage': 'Water Damage Restoration',
  'basement-flooding': 'Basement Flooding Repair',
  'burst-pipe': 'Burst Pipe Repair',
  'flood-cleanup': 'Flood Cleanup',
  'mold-remediation': 'Mold Remediation',
  'sewage-cleanup': 'Sewage Cleanup',
  'storm-damage': 'Storm Damage Restoration',
  'fire-damage': 'Fire Damage Restoration',
  'emergency-water-removal': 'Emergency Water Removal',
};

const MAX_TITLE_LENGTH = 60;

function generateTitle(serviceSlug, citySlug) {
  const keyword = SERVICE_TITLE_KEYWORDS[serviceSlug];
  const cityName = CITY_NAMES[citySlug];

  if (!keyword || !cityName) {
    return { title: null, error: `Unknown service "${serviceSlug}" or city "${citySlug}"` };
  }

  // Step 1: Primary pattern
  let title = `${keyword} in ${cityName}, VA | Flood Doctor`;
  if (title.length <= MAX_TITLE_LENGTH) {
    return { title, method: 'primary' };
  }

  // Step 2: Drop "in"
  title = `${keyword} ${cityName}, VA | Flood Doctor`;
  if (title.length <= MAX_TITLE_LENGTH) {
    return { title, method: 'drop-in' };
  }

  // Step 3: Flag as error
  return { title: null, error: `Cannot fit: "${keyword}" + "${cityName}" (${title.length} chars)` };
}

// Main execution
const cities = fs.readdirSync(citiesDir).filter(f => fs.statSync(path.join(citiesDir, f)).isDirectory());

let totalFiles = 0;
let modifiedFiles = 0;
let skippedFiles = 0;
let errorFiles = [];
const results = [];

for (const city of cities) {
  const servicesDir = path.join(citiesDir, city, 'services');
  if (!fs.existsSync(servicesDir)) continue;

  const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

  for (const file of files) {
    totalFiles++;
    const filePath = path.join(servicesDir, file);
    const serviceSlug = file.replace('.ts', '');
    const content = fs.readFileSync(filePath, 'utf8');

    // Extract current meta.title
    const metaMatch = content.match(/meta:\s*\{[^}]*title:\s*"([^"]+)"/s);
    if (!metaMatch) {
      skippedFiles++;
      results.push({ city, file, status: 'skipped', reason: 'no meta.title found' });
      continue;
    }

    const currentTitle = metaMatch[1];
    const { title: newTitle, method, error } = generateTitle(serviceSlug, city);

    if (error) {
      errorFiles.push({ city, file, error });
      results.push({ city, file, status: 'error', error });
      continue;
    }

    if (currentTitle === newTitle) {
      skippedFiles++;
      results.push({ city, file, status: 'unchanged', title: currentTitle });
      continue;
    }

    // Replace the title in the meta block
    const newContent = content.replace(
      `title: "${currentTitle}"`,
      `title: "${newTitle}"`
    );

    // Verify replacement happened
    if (newContent === content) {
      errorFiles.push({ city, file, error: 'String replacement failed — title format unexpected' });
      results.push({ city, file, status: 'error', error: 'replacement failed' });
      continue;
    }

    if (!DRY_RUN) {
      fs.writeFileSync(filePath, newContent);
    }

    modifiedFiles++;
    results.push({
      city,
      file,
      status: 'modified',
      method,
      before: { title: currentTitle, length: currentTitle.length },
      after: { title: newTitle, length: newTitle.length },
    });
  }
}

// Report
console.log('=== CityLift P0 Title Refactor Results ===');
console.log(`Mode: ${DRY_RUN ? 'DRY RUN' : 'LIVE'}`);
console.log(`Total files scanned: ${totalFiles}`);
console.log(`Modified: ${modifiedFiles}`);
console.log(`Skipped/unchanged: ${skippedFiles}`);
console.log(`Errors: ${errorFiles.length}`);
console.log('');

if (errorFiles.length > 0) {
  console.log('=== ERRORS (require manual review) ===');
  errorFiles.forEach(e => console.log(`  ${e.city}/${e.file}: ${e.error}`));
  console.log('');
}

// Show modifications
const mods = results.filter(r => r.status === 'modified');
if (mods.length > 0) {
  console.log('=== MODIFICATIONS ===');
  mods.forEach(m => {
    console.log(`  ${m.city}/${m.file} [${m.method}]`);
    console.log(`    BEFORE (${m.before.length}): ${m.before.title}`);
    console.log(`    AFTER  (${m.after.length}): ${m.after.title}`);
  });
}

// Verify no duplicates in new titles
const allNewTitles = results
  .filter(r => r.status === 'modified')
  .map(r => r.after.title)
  .concat(results.filter(r => r.status === 'unchanged').map(r => r.title));

const titleCounts = {};
allNewTitles.forEach(t => { if (t) titleCounts[t] = (titleCounts[t] || 0) + 1; });
const dups = Object.entries(titleCounts).filter(([_, c]) => c > 1);

console.log('');
console.log('=== POST-REFACTOR VALIDATION ===');
console.log(`Duplicate titles: ${dups.length}`);
dups.forEach(([t, c]) => console.log(`  DUP: ${c}x "${t}"`));

const overLimit = results
  .filter(r => r.status === 'modified' && r.after.length > MAX_TITLE_LENGTH);
console.log(`Titles still > ${MAX_TITLE_LENGTH}: ${overLimit.length}`);
overLimit.forEach(o => console.log(`  OVER: ${o.city}/${o.file} (${o.after.length}): ${o.after.title}`));
