#!/usr/bin/env node
/**
 * CityLift P3a — Cross-City Duplication Risk Analysis
 *
 * Groups service pages by service type, computes pairwise content similarity
 * across cities after normalizing out geo-specific terms.
 *
 * Output: citylift/audit/p3a-duplication-report.json
 */

import fs from 'fs';
import path from 'path';

const CITIES_DIR = 'src/content/cities';
const OUTPUT_PATH = 'citylift/audit/p3a-duplication-report.json';

const CITIES = [
  'alexandria', 'arlington', 'ashburn', 'fairfax', 'fallschurch',
  'greatfalls', 'herndon', 'lorton', 'mclean', 'reston',
  'springfield', 'tysons', 'vienna'
];

const SERVICES = [
  'basement-flooding', 'burst-pipe', 'fire-damage', 'flood-cleanup',
  'mold-remediation', 'sewage-cleanup', 'storm-damage', 'water-damage'
];

// Geo terms to strip before comparison
const GEO_TERMS = [
  // City names and variations
  'alexandria', 'arlington', 'ashburn', 'fairfax', 'falls church', 'fall church',
  'fallschurch', 'great falls', 'greatfalls', 'herndon', 'lorton',
  'mclean', 'mc lean', 'reston', 'springfield', 'tysons', 'tysons corner',
  'vienna', 'northern virginia', 'northern va', 'nova',
  // Common neighborhood names (will be caught by pattern too)
  'old town', 'del ray', 'rosemont', 'carlyle', 'potomac yard',
  'langley', 'chesterbrook', 'the reserve', 'oakton', 'dunn loring',
  'wolf trap', 'difficult run', 'belle haven', 'jones point',
  'the boro', 'the mile', 'scotts run', 'tysons central',
  // Phone numbers
  '703', '656', '0101', '0102', '0103', '0104', '0105', '0106',
  '0107', '0108', '0109', '0110', '0111', '0112', '0113',
  // State references
  'virginia', 'va',
];

// Patterns to strip
const GEO_PATTERNS = [
  /\(\d{3}\)\s*\d{3}[-.]?\d{4}/g,  // phone numbers
  /\d{3}[-.]?\d{3}[-.]?\d{4}/g,     // phone numbers alt
  /https?:\/\/[^\s"'`]+/g,           // URLs
  /\d+\s*(square[- ]?feet|sq\.?\s*ft|sf)/gi, // square footage
];

/**
 * Extract all text content from a service file (handles all 4 formats)
 */
function extractText(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');

  // Extract all string literals: backtick strings, single-quoted, double-quoted
  const strings = [];

  // Backtick strings (template literals)
  const backtickRegex = /`([^`]*)`/gs;
  let match;
  while ((match = backtickRegex.exec(raw)) !== null) {
    strings.push(match[1]);
  }

  // Regular strings in content fields (double and single quoted, multiline via concat)
  // Focus on content-bearing fields, skip imports/types/keys
  const quotedRegex = /:\s*["']([^"']{20,})["']/g;
  while ((match = quotedRegex.exec(raw)) !== null) {
    strings.push(match[1]);
  }

  return strings.join(' ');
}

/**
 * Normalize text: lowercase, remove geo terms, strip boilerplate
 */
function normalizeText(text) {
  let normalized = text.toLowerCase();

  // Strip geo patterns
  for (const pattern of GEO_PATTERNS) {
    normalized = normalized.replace(pattern, ' ');
  }

  // Strip geo terms (word boundary matching)
  for (const term of GEO_TERMS) {
    const regex = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    normalized = normalized.replace(regex, ' ');
  }

  // Strip common boilerplate phrases
  normalized = normalized
    .replace(/flood\s*doctor/gi, ' ')
    .replace(/iicrc[- ]?certified/gi, ' ')
    .replace(/24\/7/g, ' ')
    .replace(/call\s+us/gi, ' ')
    .replace(/\d+/g, ' ')  // all numbers
    .replace(/[^a-z\s]/g, ' ')  // non-alpha
    .replace(/\s+/g, ' ')
    .trim();

  return normalized;
}

/**
 * Tokenize into word n-grams (shingles) for comparison
 */
function getShingles(text, n = 3) {
  const words = text.split(/\s+/).filter(w => w.length > 2);
  const shingles = new Set();
  for (let i = 0; i <= words.length - n; i++) {
    shingles.add(words.slice(i, i + n).join(' '));
  }
  return shingles;
}

/**
 * Jaccard similarity between two shingle sets
 */
function jaccardSimilarity(setA, setB) {
  if (setA.size === 0 && setB.size === 0) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

/**
 * Also compute word-level overlap (less strict than shingles)
 */
function wordOverlap(textA, textB) {
  const wordsA = new Set(textA.split(/\s+/).filter(w => w.length > 3));
  const wordsB = new Set(textB.split(/\s+/).filter(w => w.length > 3));
  if (wordsA.size === 0 && wordsB.size === 0) return 0;
  let intersection = 0;
  for (const w of wordsA) {
    if (wordsB.has(w)) intersection++;
  }
  const union = wordsA.size + wordsB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

// ─── Main ───

console.log('CityLift P3a — Cross-City Duplication Risk Analysis');
console.log('═'.repeat(55));

// Step 1: Extract and normalize all content
const contentMap = {}; // { service: { city: { raw, normalized, shingles, wordCount } } }

for (const service of SERVICES) {
  contentMap[service] = {};
  for (const city of CITIES) {
    const filePath = path.join(CITIES_DIR, city, 'services', `${service}.ts`);
    if (!fs.existsSync(filePath)) {
      console.warn(`  Missing: ${city}/${service}`);
      continue;
    }
    const raw = extractText(filePath);
    const normalized = normalizeText(raw);
    const shingles = getShingles(normalized, 3);
    const words = normalized.split(/\s+/).filter(w => w.length > 2);

    contentMap[service][city] = {
      raw,
      normalized,
      shingles,
      wordCount: words.length,
      format: detectFormat(filePath),
    };
  }
}

function detectFormat(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  if (content.includes('introSection')) return 'A';
  if (content.includes('hero:') || content.includes('hero =')) return 'B';
  if (content.includes('heroSection')) return 'C';
  if (content.includes('heroH1')) return 'D';
  return 'unknown';
}

// Step 2: Compute pairwise similarity per service cluster
const clusterResults = {};
const allPairs = [];

for (const service of SERVICES) {
  const cities = Object.keys(contentMap[service]);
  const pairs = [];

  for (let i = 0; i < cities.length; i++) {
    for (let j = i + 1; j < cities.length; j++) {
      const cityA = cities[i];
      const cityB = cities[j];
      const dataA = contentMap[service][cityA];
      const dataB = contentMap[service][cityB];

      const shingleSim = jaccardSimilarity(dataA.shingles, dataB.shingles);
      const wordSim = wordOverlap(dataA.normalized, dataB.normalized);
      // Blended score: 60% shingle (structural), 40% word (vocabulary)
      const blended = shingleSim * 0.6 + wordSim * 0.4;

      const pair = {
        service,
        cityA,
        cityB,
        formatA: dataA.format,
        formatB: dataB.format,
        wordCountA: dataA.wordCount,
        wordCountB: dataB.wordCount,
        shingleSimilarity: Math.round(shingleSim * 1000) / 10,
        wordOverlap: Math.round(wordSim * 1000) / 10,
        blendedScore: Math.round(blended * 1000) / 10,
      };

      pairs.push(pair);
      allPairs.push(pair);
    }
  }

  // Sort pairs by blended score descending
  pairs.sort((a, b) => b.blendedScore - a.blendedScore);

  const avgSimilarity = pairs.length > 0
    ? Math.round(pairs.reduce((s, p) => s + p.blendedScore, 0) / pairs.length * 10) / 10
    : 0;

  const over30 = pairs.filter(p => p.blendedScore > 30);
  const over50 = pairs.filter(p => p.blendedScore > 50);

  clusterResults[service] = {
    pairCount: pairs.length,
    avgSimilarity,
    maxSimilarity: pairs[0]?.blendedScore || 0,
    highestPair: pairs[0] ? `${pairs[0].cityA} ↔ ${pairs[0].cityB}` : null,
    pairsOver30pct: over30.length,
    pairsOver50pct: over50.length,
    topPairs: pairs.slice(0, 5),
    allPairs: pairs,
  };
}

// Step 3: Rank clusters by risk
const rankedClusters = Object.entries(clusterResults)
  .map(([service, data]) => ({ service, ...data }))
  .sort((a, b) => b.avgSimilarity - a.avgSimilarity);

// Step 4: Top 15 highest-overlap pairs globally
allPairs.sort((a, b) => b.blendedScore - a.blendedScore);
const top15 = allPairs.slice(0, 15);

// Step 5: Risk classification
const highRisk = rankedClusters.filter(c => c.avgSimilarity > 30);
const moderateRisk = rankedClusters.filter(c => c.avgSimilarity > 15 && c.avgSimilarity <= 30);
const safe = rankedClusters.filter(c => c.avgSimilarity <= 15);

// Step 6: Format analysis
const formatBreakdown = {};
for (const service of SERVICES) {
  for (const city of CITIES) {
    const data = contentMap[service]?.[city];
    if (data) {
      const fmt = data.format;
      formatBreakdown[fmt] = (formatBreakdown[fmt] || 0) + 1;
    }
  }
}

// Step 7: Build similarity matrices per service
const matrices = {};
for (const service of SERVICES) {
  const matrix = {};
  const cities = Object.keys(contentMap[service]);
  for (const cityA of cities) {
    matrix[cityA] = {};
    for (const cityB of cities) {
      if (cityA === cityB) {
        matrix[cityA][cityB] = 100;
      } else {
        const pair = clusterResults[service].allPairs.find(
          p => (p.cityA === cityA && p.cityB === cityB) || (p.cityA === cityB && p.cityB === cityA)
        );
        matrix[cityA][cityB] = pair ? pair.blendedScore : 0;
      }
    }
  }
  matrices[service] = matrix;
}

// Build report
const report = {
  generatedAt: new Date().toISOString(),
  planVersion: 'FD-CITYLIFT-PLAN-005',
  phase: 'P3a',
  methodology: {
    textExtraction: 'All string literals extracted from TS service files',
    normalization: 'Stripped city names, phone numbers, URLs, numbers, geo terms, brand names',
    similarity: 'Blended: 60% 3-gram Jaccard + 40% word-level Jaccard',
    thresholds: { warning: 30, critical: 50 },
  },
  summary: {
    totalPages: Object.values(contentMap).reduce((s, svc) => s + Object.keys(svc).length, 0),
    totalPairs: allPairs.length,
    pairsOver30pct: allPairs.filter(p => p.blendedScore > 30).length,
    pairsOver50pct: allPairs.filter(p => p.blendedScore > 50).length,
    highRiskClusters: highRisk.map(c => c.service),
    moderateRiskClusters: moderateRisk.map(c => c.service),
    safeClusters: safe.map(c => c.service),
  },
  formatBreakdown,
  rankedClusters: rankedClusters.map(c => ({
    service: c.service,
    avgSimilarity: c.avgSimilarity,
    maxSimilarity: c.maxSimilarity,
    highestPair: c.highestPair,
    pairsOver30pct: c.pairsOver30pct,
    pairsOver50pct: c.pairsOver50pct,
    risk: c.avgSimilarity > 30 ? 'HIGH' : c.avgSimilarity > 15 ? 'MODERATE' : 'SAFE',
  })),
  top15HighestOverlapPairs: top15,
  matrices,
};

// Write report
fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(report, null, 2));

// ─── Console Summary ───

console.log('\n📊 CLUSTER RISK RANKING (by avg similarity):\n');
console.log('  Service              | Avg %  | Max %  | Highest Pair             | >30% | >50% | Risk');
console.log('  ' + '─'.repeat(95));

for (const c of rankedClusters) {
  const risk = c.avgSimilarity > 30 ? '🔴 HIGH' : c.avgSimilarity > 15 ? '🟡 MOD ' : '🟢 SAFE';
  console.log(
    `  ${c.service.padEnd(22)}| ${String(c.avgSimilarity).padStart(5)}% | ${String(c.maxSimilarity).padStart(5)}% | ${(c.highestPair || 'n/a').padEnd(25)}| ${String(c.pairsOver30pct).padStart(4)} | ${String(c.pairsOver50pct).padStart(4)} | ${risk}`
  );
}

console.log('\n🏆 TOP 15 HIGHEST-OVERLAP PAIRS:\n');
for (let i = 0; i < top15.length; i++) {
  const p = top15[i];
  const flag = p.blendedScore > 50 ? '🔴' : p.blendedScore > 30 ? '🟡' : '🟢';
  console.log(
    `  ${String(i + 1).padStart(2)}. ${flag} ${p.blendedScore}% — ${p.service} : ${p.cityA} ↔ ${p.cityB} (${p.formatA}/${p.formatB}, ${p.wordCountA}w/${p.wordCountB}w)`
  );
}

console.log(`\n📁 Full report: ${OUTPUT_PATH}`);
console.log(`   Total pairs analyzed: ${allPairs.length}`);
console.log(`   Pairs >30%: ${allPairs.filter(p => p.blendedScore > 30).length}`);
console.log(`   Pairs >50%: ${allPairs.filter(p => p.blendedScore > 50).length}`);
