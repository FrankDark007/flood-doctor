import fs from 'fs';
import path from 'path';

const citiesDir = 'src/content/cities';
const cities = fs.readdirSync(citiesDir).filter(f => fs.statSync(path.join(citiesDir, f)).isDirectory());

const results = { h1s: [], titles: [], titleLengths: [] };

for (const city of cities) {
  const servicesDir = path.join(citiesDir, city, 'services');
  if (!fs.existsSync(servicesDir)) continue;
  const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

  for (const file of files) {
    const content = fs.readFileSync(path.join(servicesDir, file), 'utf8');

    // Extract meta.title (inside meta block)
    const metaMatch = content.match(/meta:\s*\{[^}]*title:\s*"([^"]+)"/s);
    if (metaMatch) {
      results.titles.push({ city, file, title: metaMatch[1], len: metaMatch[1].length });
      results.titleLengths.push(metaMatch[1].length);
    }

    // Extract h1 value
    const h1Match = content.match(/^\s+h1:\s*"([^"]+)"/m);
    if (h1Match) {
      results.h1s.push({ city, file, h1: h1Match[1] });
    }
  }
}

// Also check template-rendered titles from ServiceDetailNew.tsx
// Pattern: `${serviceName} ${cityName}, ${stateAbbr} | 24/7 Emergency`
console.log('=== TEMPLATE-RENDERED TITLE PATTERN ===');
console.log('ServiceDetailNew.tsx generates: "{serviceName} {cityName}, VA | 24/7 Emergency"');
console.log('This is the FALLBACK path — only used when contentRegistry has no match.');
console.log('');

// Check duplicates in content files
const titleCounts = {};
results.titles.forEach(t => { titleCounts[t.title] = (titleCounts[t.title] || 0) + 1; });
const dupTitles = Object.entries(titleCounts).filter(([_, c]) => c > 1);

const h1Counts = {};
results.h1s.forEach(t => { h1Counts[t.h1] = (h1Counts[t.h1] || 0) + 1; });
const dupH1s = Object.entries(h1Counts).filter(([_, c]) => c > 1);

const over60 = results.titles.filter(t => t.len > 60);

// Check for 'Flood Doctor of' bug
const bugH1s = results.h1s.filter(t => t.h1.includes('Flood Doctor of'));
const bugTitles = results.titles.filter(t => t.title.includes('Flood Doctor of'));

console.log('=== CONTENT FILE METRICS ===');
console.log('Total service content files:', results.titles.length);
console.log('Duplicate titles:', dupTitles.length);
dupTitles.forEach(([t, c]) => console.log('  DUP:', c, 'x', t));
console.log('Duplicate H1s:', dupH1s.length);
dupH1s.forEach(([h, c]) => console.log('  DUP:', c, 'x', h));
console.log('Titles >60 chars:', over60.length);
over60.forEach(t => console.log('  LONG (' + t.len + '):', t.city + '/' + t.file, '→', t.title));
console.log('H1s with "Flood Doctor of" bug:', bugH1s.length);
console.log('Titles with "Flood Doctor of" bug:', bugTitles.length);

// Now check the template-rendered pages (non-content pages)
// These get titles from component code, not content files
console.log('');
console.log('=== TEMPLATE-RENDERED PAGE TITLE PATTERNS ===');

// CityHome.tsx: PageMeta title={`${franchise.city} | Flood Doctor`}
console.log('CityHome: "{franchise.city} | Flood Doctor"');

// CityServicesHub: title={`Water Damage Restoration Services in ${franchise.city} | Flood Doctor`}
console.log('CityServicesHub: "Water Damage Restoration Services in {city} | Flood Doctor"');
const hubTitleLen = 'Water Damage Restoration Services in Falls Church | Flood Doctor'.length;
console.log('  Longest possible (Falls Church):', hubTitleLen, 'chars', hubTitleLen > 60 ? '⚠️ OVER 60' : '✅');

// CityAbout: `About Flood Doctor ${franchise.city} | ${franchise.serviceAreaLabel}`
console.log('CityAbout: "About Flood Doctor {city} | {serviceAreaLabel}"');

// CityContact: `Contact Flood Doctor ${franchise.city} | 24/7 Emergency Line`
console.log('CityContact: "Contact Flood Doctor {city} | 24/7 Emergency Line"');
const contactTitleLen = 'Contact Flood Doctor Falls Church | 24/7 Emergency Line'.length;
console.log('  Longest possible (Falls Church):', contactTitleLen, 'chars', contactTitleLen > 60 ? '⚠️ OVER 60' : '✅');

// CityResidentialHub: `Residential Services in ${franchise.city} | Flood Doctor`
console.log('CityResidentialHub: "Residential Services in {city} | Flood Doctor"');

// CityCommercialHub: `Commercial Services in ${franchise.city} | Flood Doctor`
console.log('CityCommercialHub: "Commercial Services in {city} | Flood Doctor"');

// ServiceDetailNew fallback: `${serviceName} ${cityName}, ${stateAbbr} | 24/7 Emergency`
console.log('ServiceDetailNew (fallback): "{serviceName} {city}, VA | 24/7 Emergency"');

// Output JSON
const metrics = {
  capturedAt: new Date().toISOString(),
  planVersion: 'FD-CITYLIFT-PLAN-005',
  phase: 'P0-before',
  contentFileCount: results.titles.length,
  duplicateTitles: dupTitles.map(([t, c]) => ({ title: t, count: c })),
  duplicateH1s: dupH1s.map(([h, c]) => ({ h1: h, count: c })),
  titlesOver60Chars: over60.map(t => ({ city: t.city, file: t.file, title: t.title, length: t.len })),
  h1TemplateBugCount: bugH1s.length,
  titleTemplateBugCount: bugTitles.length,
  templateRenderedTitleIssues: [],
};

// Check template title lengths
const templateTitles = [
  { page: 'CityServicesHub', template: 'Water Damage Restoration Services in {city} | Flood Doctor' },
  { page: 'CityAbout', template: 'About Flood Doctor {city} | {serviceAreaLabel}' },
  { page: 'CityContact', template: 'Contact Flood Doctor {city} | 24/7 Emergency Line' },
];

const longestCity = 'Falls Church';
for (const tt of templateTitles) {
  const rendered = tt.template.replace('{city}', longestCity).replace('{serviceAreaLabel}', 'Northern Virginia');
  if (rendered.length > 60) {
    metrics.templateRenderedTitleIssues.push({
      page: tt.page,
      renderedTitle: rendered,
      length: rendered.length
    });
  }
}

fs.mkdirSync('citylift/audit', { recursive: true });
fs.writeFileSync('citylift/audit/p0-before-metrics.json', JSON.stringify(metrics, null, 2));
console.log('');
console.log('Written to: citylift/audit/p0-before-metrics.json');
