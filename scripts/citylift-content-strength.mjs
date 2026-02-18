#!/usr/bin/env node
// CityLift Content Strength Scoring — FD-CITYLIFT-EXEC-004
// Scores all city service pages on 6 dimensions (0–100 total)
// READ-ONLY: does not modify any content files

import fs from 'fs';
import path from 'path';

const CITIES_DIR = 'src/content/cities';
const OUTPUT_FILE = 'citylift/audit/city-content-strength-report.json';

// ─── Dimension weights (must sum to 100) ───
const WEIGHTS = {
  wordCount: 15,
  topicalDepth: 25,
  eeatSignals: 20,
  localSpecificity: 20,
  semanticCoverage: 10,
  originality: 10,
};

// ─── Helpers ───

function countWords(text) {
  if (!text) return 0;
  return text.replace(/[^\w\s]/g, ' ').split(/\s+/).filter(Boolean).length;
}

function extractAllText(obj) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj + ' ';
  if (Array.isArray(obj)) return obj.map(extractAllText).join(' ');
  if (typeof obj === 'object') {
    return Object.values(obj).map(extractAllText).join(' ');
  }
  return '';
}

function detectFormat(content) {
  // Format A: introSection, processSection, localChallenges (90 files)
  // Format B: hero:, intro:, services:, faq:, cta: (5 Vienna files)
  // Format C: heroSection:, introduction:, mainContent.sections (5 Alexandria + 1 Arlington)
  // Format D: heroH1, heroP, mainContent.intro (4 Tysons files)
  if (content.includes('introSection')) return 'A';
  if (content.includes('heroSection:')) return 'C';
  if (content.includes('heroH1')) return 'D';
  if (content.includes('hero:') || content.includes('hero ')) return 'B';
  return 'A'; // default
}

// ─── Parse content from TS file (regex-based, no eval) ───

function parseFormatA(raw) {
  const result = {};

  // meta.title
  const titleMatch = raw.match(/title:\s*["'`]([^"'`]+)["'`]/);
  result.title = titleMatch ? titleMatch[1] : '';

  // h1
  const h1Match = raw.match(/h1:\s*["'`]([^"'`]+)["'`]/);
  result.h1 = h1Match ? h1Match[1] : '';

  // meta.description
  const descMatch = raw.match(/description:\s*["'`]([^"'`]+)["'`]/);
  result.metaDescription = descMatch ? descMatch[1] : '';

  // Sections present
  result.hasIntroSection = /introSection\s*:/.test(raw);
  result.hasProcessSection = /processSection\s*:/.test(raw);
  result.hasLocalChallenges = /localChallenges\s*:/.test(raw);
  result.hasEquipmentSection = /equipmentSection\s*:/.test(raw);
  result.hasPricingSection = /pricingSection\s*:/.test(raw);
  result.hasFaqSection = /faqSection\s*:/.test(raw);
  result.hasServiceAreaSection = /serviceAreaSection\s*:/.test(raw);
  result.hasFinalCTA = /finalCTA\s*:/.test(raw);

  // Count FAQ questions
  const faqMatches = raw.match(/question:\s*["'`]/g);
  result.faqCount = faqMatches ? faqMatches.length : 0;

  // Count process steps
  const stepMatches = raw.match(/number:\s*\d/g);
  result.processStepCount = stepMatches ? stepMatches.length : 0;

  // Count challenges
  const challengeMatches = raw.match(/title:\s*["'`][^"'`]+["'`],\s*\n\s*description:/g);
  // More reliable: count solution: fields in localChallenges
  const solutionMatches = raw.match(/solution:\s*["'`]/g);
  result.challengeCount = solutionMatches ? solutionMatches.length : 0;

  // Count equipment
  const equipMatches = raw.match(/purpose:\s*["'`]/g);
  result.equipmentCount = equipMatches ? equipMatches.length : 0;

  // Count neighborhoods in serviceAreaSection
  const neighborhoodBlock = raw.match(/neighborhoods:\s*\[([\s\S]*?)\]/);
  if (neighborhoodBlock) {
    const nbMatches = neighborhoodBlock[1].match(/["'`]/g);
    result.neighborhoodCount = nbMatches ? Math.floor(nbMatches.length / 2) : 0;
  } else {
    result.neighborhoodCount = 0;
  }

  // localContext field
  result.hasLocalContext = /localContext:\s*["'`]/.test(raw);

  // localNote field (in equipment)
  result.hasLocalNote = /localNote:\s*["'`]/.test(raw);

  // Count pricing factors
  const factorBlock = raw.match(/factors:\s*\[([\s\S]*?)\]/);
  if (factorBlock) {
    const factorMatches = factorBlock[1].match(/["'`][^"'`]{10,}["'`]/g);
    result.pricingFactorCount = factorMatches ? factorMatches.length : 0;
  } else {
    result.pricingFactorCount = 0;
  }

  // relatedServices count
  const relatedBlock = raw.match(/relatedServices:\s*\[([\s\S]*?)\]/);
  if (relatedBlock) {
    const relMatches = relatedBlock[1].match(/["'`]\/[^"'`]+["'`]/g);
    result.relatedServicesCount = relMatches ? relMatches.length : 0;
  } else {
    result.relatedServicesCount = 0;
  }

  // Word count from all text content (strip TS type/interface declarations)
  const contentOnly = raw.replace(/export\s+interface\s+\w+\s*\{[\s\S]*?\n\}/m, '');
  result.wordCount = countWords(contentOnly);

  // Extract intro paragraphs text for originality comparison
  const introBlock = raw.match(/paragraphs:\s*\[([\s\S]*?)\]\s*,/);
  result.introParagraphs = introBlock ? introBlock[1] : '';

  // Extract FAQ questions for originality comparison
  const questions = [];
  const qRegex = /question:\s*["'`]([^"'`]+)["'`]/g;
  let m;
  while ((m = qRegex.exec(raw)) !== null) {
    questions.push(m[1]);
  }
  result.faqQuestions = questions;

  // responseTime
  result.hasResponseTime = /responseTime:\s*["'`]/.test(raw);

  // canonical
  const canonMatch = raw.match(/canonical:\s*["'`]([^"'`]+)["'`]/);
  result.canonical = canonMatch ? canonMatch[1] : '';

  // Count city name mentions (for local specificity)
  result.rawContent = raw;

  return result;
}

function parseFormatB(raw) {
  const result = {};

  // hero.title
  const titleMatch = raw.match(/title:\s*'([^']+)'/);
  result.title = titleMatch ? titleMatch[1] : '';
  result.h1 = result.title; // hero title serves as H1

  // hero.description
  const descMatch = raw.match(/description:\s*'([^']+)'/);
  result.metaDescription = descMatch ? descMatch[1] : '';

  // Sections present (Format B equivalents)
  result.hasIntroSection = /intro:\s*\{/.test(raw);
  result.hasProcessSection = false; // Format B uses services list, no step-by-step process
  result.hasLocalChallenges = false;
  result.hasEquipmentSection = false;
  result.hasPricingSection = false;
  result.hasFaqSection = /faq:\s*\{/.test(raw);
  result.hasServiceAreaSection = false;
  result.hasFinalCTA = /cta:\s*\{/.test(raw);

  // Count FAQ questions
  const faqMatches = raw.match(/question:\s*'/g);
  result.faqCount = faqMatches ? faqMatches.length : 0;

  // Count services listed
  const serviceMatches = raw.match(/title:\s*'/g);
  result.processStepCount = 0;
  result.challengeCount = 0;
  result.equipmentCount = 0;
  result.neighborhoodCount = 0;
  result.hasLocalContext = false;
  result.hasLocalNote = false;
  result.pricingFactorCount = 0;

  // relatedServices
  const relatedBlock = raw.match(/relatedServices:\s*\[([\s\S]*?)\]/);
  if (relatedBlock) {
    const relMatches = relatedBlock[1].match(/title:\s*'/g);
    result.relatedServicesCount = relMatches ? relMatches.length : 0;
  } else {
    result.relatedServicesCount = 0;
  }

  result.wordCount = countWords(raw);
  result.introParagraphs = '';
  result.faqQuestions = [];
  const qRegex = /question:\s*'([^']+)'/g;
  let m;
  while ((m = qRegex.exec(raw)) !== null) {
    result.faqQuestions.push(m[1]);
  }
  result.hasResponseTime = false;
  result.canonical = '';
  result.rawContent = raw;

  return result;
}

function parseFormatC(raw) {
  // Format C: heroSection, introduction, mainContent.sections, faqs
  // Used by Alexandria (5 files) + Arlington emergency-water-removal
  const result = {};

  // heroSection.title
  const titleMatch = raw.match(/heroSection[\s\S]*?title:\s*["'`]([^"'`]+)["'`]/);
  result.title = titleMatch ? titleMatch[1] : '';
  result.h1 = result.title;

  // introduction.content or subtitle
  const descMatch = raw.match(/subtitle:\s*["'`]([^"'`]+)["'`]/);
  result.metaDescription = descMatch ? descMatch[1] : '';

  // Sections: introduction + mainContent.sections
  result.hasIntroSection = /introduction\s*:/.test(raw);
  // mainContent.sections contain titled content blocks — act as process/challenges
  const sectionTitles = raw.match(/title:\s*["'`][^"'`]+["'`]/g) || [];
  const sectionCount = sectionTitles.length;
  result.hasProcessSection = sectionCount >= 3; // multiple content sections = topical depth
  result.hasLocalChallenges = /risk\s*factor|challenge|unique|specific/i.test(raw);
  result.hasEquipmentSection = /equipment|drying|extraction|dehumidif/i.test(raw);
  result.hasPricingSection = /pricing|cost|insurance\s*(claim|cover|billing)/i.test(raw);
  result.hasFaqSection = /faq|question.*answer|frequen/i.test(raw);
  result.hasServiceAreaSection = /neighborhood|serving|response\s*time/i.test(raw);
  result.hasFinalCTA = /cta|call\s*now|emergency/i.test(raw);

  // FAQ count
  const faqMatches = raw.match(/question:\s*["'`]/g);
  result.faqCount = faqMatches ? faqMatches.length : 0;

  // Process steps approximated by section count
  result.processStepCount = Math.min(sectionCount, 6);
  result.challengeCount = sectionCount >= 4 ? 3 : sectionCount >= 2 ? 1 : 0;
  result.equipmentCount = (raw.match(/equipment|dehumidif|air\s*mover|extract|thermal\s*imag/gi) || []).length;
  result.neighborhoodCount = 0;
  // Count neighborhood-like proper nouns after "Old Town", "Del Ray", etc.
  const neighborhoodMatches = raw.match(/Old Town|Del Ray|Rosemont|Carlyle|Belle Haven|Jones Point|King Street|Potomac Yard|Seminary Hill|Beverley Hills/gi);
  result.neighborhoodCount = neighborhoodMatches ? new Set(neighborhoodMatches.map(n => n.toLowerCase())).size : 0;

  result.hasLocalContext = /historic|preservation|BAR|Board of Architectural/i.test(raw);
  result.hasLocalNote = false;
  result.pricingFactorCount = 0;
  result.relatedServicesCount = 0;
  const relBlock = raw.match(/relatedServices\s*:\s*\[([\s\S]*?)\]/);
  if (relBlock) {
    const relMatches = relBlock[1].match(/title:|link:/g);
    result.relatedServicesCount = relMatches ? Math.floor(relMatches.length / 2) : 0;
  }

  result.wordCount = countWords(raw);
  result.introParagraphs = '';
  const introBlock = raw.match(/introduction\s*:\s*\{[\s\S]*?content:\s*`([^`]+)`/);
  if (introBlock) result.introParagraphs = introBlock[1];

  result.faqQuestions = [];
  const qRegex = /question:\s*["'`]([^"'`]+)["'`]/g;
  let m;
  while ((m = qRegex.exec(raw)) !== null) result.faqQuestions.push(m[1]);

  result.hasResponseTime = /response\s*time|within\s*\d+\s*min|60\s*min/i.test(raw);
  result.canonical = '';
  const canonMatch = raw.match(/canonical:\s*["'`]([^"'`]+)["'`]/);
  if (canonMatch) result.canonical = canonMatch[1];
  result.rawContent = raw;

  return result;
}

function parseFormatD(raw) {
  // Format D: heroH1, heroP, searchDescription, mainContent.intro, emergencySection
  // Used by Tysons (4 files)
  const result = {};

  const h1Match = raw.match(/heroH1:\s*["'`]([^"'`]+)["'`]/);
  result.title = h1Match ? h1Match[1] : '';
  result.h1 = result.title;

  const descMatch = raw.match(/searchDescription:\s*["'`]([^"'`]+)["'`]/);
  result.metaDescription = descMatch ? descMatch[1] : '';

  result.hasIntroSection = /mainContent[\s\S]*?intro\s*:/.test(raw);
  result.hasProcessSection = /emergencySection|restoration\s*process|step/i.test(raw);
  result.hasLocalChallenges = /challenge|risk|specific|unique/i.test(raw);
  result.hasEquipmentSection = /equipment|technology|system/i.test(raw);
  result.hasPricingSection = /pricing|cost|insurance|billing/i.test(raw);
  result.hasFaqSection = /faq|question.*answer/i.test(raw);
  result.hasServiceAreaSection = /neighborhood|area.*served|response\s*time/i.test(raw);
  result.hasFinalCTA = /cta|call\s*now|emergency/i.test(raw);

  const faqMatches = raw.match(/question:\s*["'`]/g);
  result.faqCount = faqMatches ? faqMatches.length : 0;

  // Count titled sections
  const sectionTitles = raw.match(/title:\s*["'`][^"'`]+["'`]/g) || [];
  result.processStepCount = sectionTitles.length;
  result.challengeCount = Math.min(Math.floor(sectionTitles.length / 2), 5);

  result.equipmentCount = (raw.match(/equipment|dehumidif|air\s*mover|extract|thermal/gi) || []).length;

  // Tysons neighborhoods
  const nbMatches = raw.match(/Tysons Corner|Tysons Central|The Boro|The Mile|Scotts Run|McLean Metro|Galleria|Tysons Galleria/gi);
  result.neighborhoodCount = nbMatches ? new Set(nbMatches.map(n => n.toLowerCase())).size : 0;

  result.hasLocalContext = /high-rise|condo|urban|mixed-use|building management/i.test(raw);
  result.hasLocalNote = false;
  result.pricingFactorCount = 0;
  result.relatedServicesCount = 0;

  result.wordCount = countWords(raw);
  result.introParagraphs = '';
  const introBlock = raw.match(/intro\s*:\s*\{[\s\S]*?paragraphs:\s*\[([\s\S]*?)\]\s*\}/);
  if (introBlock) result.introParagraphs = introBlock[1];

  result.faqQuestions = [];
  const qRegex = /question:\s*["'`]([^"'`]+)["'`]/g;
  let m2;
  while ((m2 = qRegex.exec(raw)) !== null) result.faqQuestions.push(m2[1]);

  result.hasResponseTime = /response\s*time|within\s*\d+\s*min|60\s*min/i.test(raw);
  result.canonical = '';
  result.rawContent = raw;

  return result;
}

// ─── Scoring Functions (each returns 0–1 normalized) ───

function scoreWordCount(parsed) {
  // Service pages: 1500+ words = full score
  const wc = parsed.wordCount;
  if (wc >= 1500) return 1.0;
  if (wc >= 1000) return 0.67;
  if (wc >= 500) return 0.33;
  return 0;
}

function scoreTopicalDepth(parsed) {
  // 6 key sections: intro, process, challenges, equipment, pricing, FAQ
  // Each present = ~1/6 of score, plus bonus for depth
  let score = 0;
  const maxPoints = 30; // total points available

  // Section presence (18 pts max)
  if (parsed.hasIntroSection) score += 3;
  if (parsed.hasProcessSection) score += 3;
  if (parsed.hasLocalChallenges) score += 3;
  if (parsed.hasEquipmentSection) score += 3;
  if (parsed.hasPricingSection) score += 3;
  if (parsed.hasFaqSection) score += 3;

  // Depth bonuses (12 pts max)
  // Process steps: 5+ = 2pts, 3-4 = 1pt
  if (parsed.processStepCount >= 5) score += 2;
  else if (parsed.processStepCount >= 3) score += 1;

  // Challenges: 4+ = 2pts, 2-3 = 1pt
  if (parsed.challengeCount >= 4) score += 2;
  else if (parsed.challengeCount >= 2) score += 1;

  // Equipment: 5+ = 2pts, 3-4 = 1pt
  if (parsed.equipmentCount >= 5) score += 2;
  else if (parsed.equipmentCount >= 3) score += 1;

  // FAQ: 6+ = 3pts, 4-5 = 2pts, 2-3 = 1pt
  if (parsed.faqCount >= 6) score += 3;
  else if (parsed.faqCount >= 4) score += 2;
  else if (parsed.faqCount >= 2) score += 1;

  // Pricing factors: 4+ = 2pts, 2-3 = 1pt
  if (parsed.pricingFactorCount >= 4) score += 2;
  else if (parsed.pricingFactorCount >= 2) score += 1;

  // Related services link count
  if (parsed.relatedServicesCount >= 3) score += 1;

  return Math.min(score / maxPoints, 1.0);
}

function scoreEEATSignals(parsed) {
  // E-E-A-T: Experience, Expertise, Authoritativeness, Trust
  let score = 0;
  const maxPoints = 20;

  // Local proof (neighborhoods, service area)
  if (parsed.hasServiceAreaSection) score += 3;
  if (parsed.neighborhoodCount >= 10) score += 3;
  else if (parsed.neighborhoodCount >= 5) score += 2;
  else if (parsed.neighborhoodCount >= 1) score += 1;

  // Response time mentioned
  if (parsed.hasResponseTime) score += 2;

  // Certifications/IICRC mentioned
  if (/IICRC/i.test(parsed.rawContent)) score += 2;

  // Phone number in content (trust signal)
  if (/\(\d{3}\)\s*\d{3}-\d{4}/.test(parsed.rawContent)) score += 1;

  // Process section = expertise demonstration
  if (parsed.hasProcessSection && parsed.processStepCount >= 4) score += 2;

  // Equipment with brands = expertise
  if (parsed.equipmentCount >= 3) score += 2;

  // Local challenges = experience
  if (parsed.hasLocalChallenges && parsed.challengeCount >= 3) score += 2;

  // Pricing transparency = trust
  if (parsed.hasPricingSection) score += 2;

  // CTA present = authoritativeness
  if (parsed.hasFinalCTA) score += 1;

  return Math.min(score / maxPoints, 1.0);
}

function scoreLocalSpecificity(cityName, parsed) {
  let score = 0;
  const maxPoints = 20;
  const raw = parsed.rawContent.toLowerCase();
  const city = cityName.toLowerCase();

  // City name frequency (normalized)
  const cityRegex = new RegExp(city.replace(/\s+/g, '\\s*'), 'gi');
  const cityMentions = (parsed.rawContent.match(cityRegex) || []).length;
  // Discount meta/structural mentions (title, h1, canonical ~3-4 mentions)
  const contentMentions = Math.max(0, cityMentions - 4);
  if (contentMentions >= 15) score += 4;
  else if (contentMentions >= 10) score += 3;
  else if (contentMentions >= 5) score += 2;
  else if (contentMentions >= 1) score += 1;

  // Neighborhood names in content
  if (parsed.neighborhoodCount >= 10) score += 4;
  else if (parsed.neighborhoodCount >= 5) score += 3;
  else if (parsed.neighborhoodCount >= 2) score += 2;
  else if (parsed.neighborhoodCount >= 1) score += 1;

  // localContext field
  if (parsed.hasLocalContext) score += 2;

  // localNote field
  if (parsed.hasLocalNote) score += 2;

  // Local challenges section (city-specific problems)
  if (parsed.hasLocalChallenges) score += 3;

  // Specific local landmarks, roads, waterways mentioned
  const localTerms = [
    'pike', 'road', 'creek', 'run', 'bridge', 'park', 'estates',
    'village', 'manor', 'hills', 'farms', 'terrace', 'heights',
    'clay soil', 'water table', 'flood zone', 'historic',
    'oak', 'maple', 'colonial', 'ranch', 'split-level'
  ];
  let localTermCount = 0;
  for (const term of localTerms) {
    if (raw.includes(term)) localTermCount++;
  }
  if (localTermCount >= 8) score += 3;
  else if (localTermCount >= 5) score += 2;
  else if (localTermCount >= 2) score += 1;

  // Response time with city-specific detail
  if (parsed.hasResponseTime) score += 2;

  return Math.min(score / maxPoints, 1.0);
}

function scoreSemanticCoverage(parsed) {
  let score = 0;
  const maxPoints = 15;
  const raw = parsed.rawContent.toLowerCase();

  // Emergency modifiers
  const emergencyTerms = ['emergency', '24/7', 'immediate', 'urgent', 'rapid'];
  let emergencyCount = 0;
  for (const term of emergencyTerms) {
    if (raw.includes(term)) emergencyCount++;
  }
  if (emergencyCount >= 3) score += 3;
  else if (emergencyCount >= 1) score += 2;

  // Service-specific keywords breadth
  const serviceTerms = [
    'restoration', 'repair', 'cleanup', 'removal', 'extraction',
    'drying', 'dehumidif', 'moisture', 'inspection', 'assessment',
    'insurance', 'claim', 'certified', 'iicrc', 'estimate'
  ];
  let termCount = 0;
  for (const term of serviceTerms) {
    if (raw.includes(term)) termCount++;
  }
  if (termCount >= 10) score += 4;
  else if (termCount >= 7) score += 3;
  else if (termCount >= 4) score += 2;
  else if (termCount >= 1) score += 1;

  // "near me" alignment (local qualifier presence)
  const nearMeTerms = ['near', 'local', 'nearby', 'close', 'serving'];
  let nearMeCount = 0;
  for (const term of nearMeTerms) {
    if (raw.includes(term)) nearMeCount++;
  }
  if (nearMeCount >= 2) score += 2;
  else if (nearMeCount >= 1) score += 1;

  // Question-based content (matches search queries)
  if (parsed.faqCount >= 5) score += 3;
  else if (parsed.faqCount >= 3) score += 2;
  else if (parsed.faqCount >= 1) score += 1;

  // Cost/price content (high-intent searches)
  if (/cost|price|estimat|quot|free inspect/i.test(parsed.rawContent)) score += 2;

  // Schema presence (canonical, structured data signals)
  if (parsed.canonical) score += 1;

  return Math.min(score / maxPoints, 1.0);
}

// ─── Originality tracking (cross-city comparison) ───
// Collected per service-type, then scored

function buildOriginalityMap(allPages) {
  // Group pages by service type (slug)
  const byService = {};
  for (const page of allPages) {
    const slug = page.slug;
    if (!byService[slug]) byService[slug] = [];
    byService[slug].push(page);
  }
  return byService;
}

function computeTextFingerprint(text) {
  if (!text || text.length < 50) return new Set();
  // 4-gram word shingles
  const words = text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(Boolean);
  const shingles = new Set();
  for (let i = 0; i <= words.length - 4; i++) {
    shingles.add(words.slice(i, i + 4).join(' '));
  }
  return shingles;
}

function jaccardSimilarity(setA, setB) {
  if (setA.size === 0 && setB.size === 0) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

function scoreOriginality(page, serviceGroup) {
  if (!serviceGroup || serviceGroup.length <= 1) return 1.0; // only city for this service

  const maxPoints = 10;
  let score = maxPoints;

  // Compare intro paragraphs with other cities' same service
  const myFingerprint = computeTextFingerprint(page.parsed.introParagraphs);
  let maxSimilarity = 0;
  let totalSimilarity = 0;
  let comparisons = 0;

  for (const other of serviceGroup) {
    if (other.city === page.city) continue;
    const otherFingerprint = computeTextFingerprint(other.parsed.introParagraphs);
    const sim = jaccardSimilarity(myFingerprint, otherFingerprint);
    if (sim > maxSimilarity) maxSimilarity = sim;
    totalSimilarity += sim;
    comparisons++;
  }

  const avgSimilarity = comparisons > 0 ? totalSimilarity / comparisons : 0;

  // High similarity = low originality
  // >60% avg sim = 0pts, 30-60% = partial, <30% = full
  if (avgSimilarity > 0.6) score -= 6;
  else if (avgSimilarity > 0.3) score -= 3;

  // FAQ question reuse
  const myQuestions = new Set(page.parsed.faqQuestions.map(q => q.toLowerCase().replace(/[^\w\s]/g, '')));
  let sharedQuestions = 0;
  for (const other of serviceGroup) {
    if (other.city === page.city) continue;
    for (const q of other.parsed.faqQuestions) {
      const normalized = q.toLowerCase().replace(/[^\w\s]/g, '');
      if (myQuestions.has(normalized)) sharedQuestions++;
    }
  }
  const reusePct = myQuestions.size > 0 ? sharedQuestions / (myQuestions.size * comparisons) : 0;
  if (reusePct > 0.5) score -= 4;
  else if (reusePct > 0.2) score -= 2;

  return Math.max(score / maxPoints, 0);
}

// ─── City name normalization ───
const CITY_DISPLAY_NAMES = {
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

// ─── Main ───

function main() {
  const cities = fs.readdirSync(CITIES_DIR)
    .filter(f => fs.statSync(path.join(CITIES_DIR, f)).isDirectory());

  const allPages = [];

  for (const city of cities) {
    const servicesDir = path.join(CITIES_DIR, city, 'services');
    if (!fs.existsSync(servicesDir)) continue;

    const files = fs.readdirSync(servicesDir)
      .filter(f => f.endsWith('.ts') && f !== 'index.ts');

    for (const file of files) {
      const filePath = path.join(servicesDir, file);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const format = detectFormat(raw);
      let parsed;
      if (format === 'A') parsed = parseFormatA(raw);
      else if (format === 'B') parsed = parseFormatB(raw);
      else if (format === 'C') parsed = parseFormatC(raw);
      else parsed = parseFormatD(raw);
      const slug = file.replace('.ts', '');

      allPages.push({
        city,
        cityDisplay: CITY_DISPLAY_NAMES[city] || city,
        slug,
        file: filePath,
        format,
        parsed,
      });
    }
  }

  console.log(`Parsed ${allPages.length} service pages across ${cities.length} cities`);

  // Build originality map
  const serviceGroups = buildOriginalityMap(allPages);

  // Score each page
  const results = [];
  for (const page of allPages) {
    const wc = scoreWordCount(page.parsed);
    const td = scoreTopicalDepth(page.parsed);
    const eeat = scoreEEATSignals(page.parsed);
    const ls = scoreLocalSpecificity(CITY_DISPLAY_NAMES[page.city] || page.city, page.parsed);
    const sc = scoreSemanticCoverage(page.parsed);
    const orig = scoreOriginality(page, serviceGroups[page.slug]);

    const weightedScore = Math.round(
      wc * WEIGHTS.wordCount +
      td * WEIGHTS.topicalDepth +
      eeat * WEIGHTS.eeatSignals +
      ls * WEIGHTS.localSpecificity +
      sc * WEIGHTS.semanticCoverage +
      orig * WEIGHTS.originality
    );

    let tier;
    if (weightedScore >= 80) tier = 'Competitive';
    else if (weightedScore >= 60) tier = 'Expand';
    else if (weightedScore >= 40) tier = 'Thin';
    else tier = 'Rewrite';

    // Identify weakest dimension
    const dimensions = {
      wordCount: wc,
      topicalDepth: td,
      eeatSignals: eeat,
      localSpecificity: ls,
      semanticCoverage: sc,
      originality: orig,
    };
    const weakest = Object.entries(dimensions)
      .sort((a, b) => a[1] - b[1])[0];

    // Short diagnostic
    const diagnostics = [];
    if (wc < 0.5) diagnostics.push(`low word count (${page.parsed.wordCount}w)`);
    if (td < 0.5) diagnostics.push('missing key sections');
    if (eeat < 0.5) diagnostics.push('weak E-E-A-T signals');
    if (ls < 0.5) diagnostics.push('lacks local specificity');
    if (sc < 0.5) diagnostics.push('limited semantic coverage');
    if (orig < 0.5) diagnostics.push('high cross-city similarity');
    const diagnostic = diagnostics.length > 0
      ? diagnostics.slice(0, 2).join('; ')
      : 'Strong content across all dimensions';

    results.push({
      city: page.cityDisplay,
      citySlug: page.city,
      route: `/${page.slug}`,
      format: page.format,
      word_count: page.parsed.wordCount,
      score: weightedScore,
      tier,
      dimensions,
      weakest_dimension: weakest[0],
      diagnostic,
    });
  }

  // ─── Summary metrics ───

  // Average score per city
  const cityScores = {};
  for (const r of results) {
    if (!cityScores[r.city]) cityScores[r.city] = [];
    cityScores[r.city].push(r.score);
  }
  const avgByCity = {};
  for (const [city, scores] of Object.entries(cityScores)) {
    avgByCity[city] = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  }

  // Tier counts
  const tierCounts = { Competitive: 0, Expand: 0, Thin: 0, Rewrite: 0 };
  for (const r of results) tierCounts[r.tier]++;

  // Top 10 lowest
  const bottom10 = [...results].sort((a, b) => a.score - b.score).slice(0, 10);

  // Lowest average city
  const lowestCity = Object.entries(avgByCity)
    .sort((a, b) => a[1] - b[1])[0];

  // Most common weakest dimension
  const weakDimCounts = {};
  for (const r of results) {
    weakDimCounts[r.weakest_dimension] = (weakDimCounts[r.weakest_dimension] || 0) + 1;
  }
  const mostCommonWeakness = Object.entries(weakDimCounts)
    .sort((a, b) => b[1] - a[1])[0];

  // Calibration check
  const mcleanWD = results.find(r => r.citySlug === 'mclean' && r.route === '/water-damage');
  const lowestWC = [...results].sort((a, b) => a.word_count - b.word_count)[0];

  const report = {
    capturedAt: new Date().toISOString(),
    planVersion: 'FD-CITYLIFT-PLAN-005',
    executionVersion: 'FD-CITYLIFT-EXEC-004',
    totalPages: results.length,
    summary: {
      avgByCity,
      tierCounts,
      lowestCity: { city: lowestCity[0], avgScore: lowestCity[1] },
      mostCommonWeakness: { dimension: mostCommonWeakness[0], count: mostCommonWeakness[1] },
      calibration: {
        strongAnchor: mcleanWD ? { city: 'McLean', route: '/water-damage', score: mcleanWD.score, tier: mcleanWD.tier } : null,
        thinAnchor: { city: lowestWC.city, route: lowestWC.route, score: lowestWC.score, word_count: lowestWC.word_count, tier: lowestWC.tier },
      },
    },
    priorityTargets: {
      bottom10: bottom10.map(r => ({
        city: r.city,
        route: r.route,
        score: r.score,
        tier: r.tier,
        word_count: r.word_count,
        diagnostic: r.diagnostic,
      })),
    },
    pages: results.map(({ citySlug, format, weakest_dimension, dimensions, ...rest }) => ({
      ...rest,
      dimensions,
      weakest_dimension,
    })),
  };

  // Write output
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(report, null, 2));
  console.log(`\nReport written to ${OUTPUT_FILE}`);

  // Print summary to console
  console.log('\n═══ CONTENT STRENGTH SUMMARY ═══');
  console.log(`Total pages scored: ${results.length}`);
  console.log(`\nTier distribution:`);
  console.log(`  Competitive (80+): ${tierCounts.Competitive}`);
  console.log(`  Expand (60-79):    ${tierCounts.Expand}`);
  console.log(`  Thin (40-59):      ${tierCounts.Thin}`);
  console.log(`  Rewrite (<40):     ${tierCounts.Rewrite}`);

  console.log(`\nAverage by city:`);
  const sortedCities = Object.entries(avgByCity).sort((a, b) => b[1] - a[1]);
  for (const [city, avg] of sortedCities) {
    console.log(`  ${city.padEnd(15)} ${avg}`);
  }

  console.log(`\nCalibration:`);
  if (mcleanWD) console.log(`  Strong anchor (McLean /water-damage): ${mcleanWD.score} [${mcleanWD.tier}]`);
  console.log(`  Thin anchor (${lowestWC.city} ${lowestWC.route}): ${lowestWC.score} [${lowestWC.tier}] (${lowestWC.word_count}w)`);

  console.log(`\nLowest city: ${lowestCity[0]} (avg ${lowestCity[1]})`);
  console.log(`Most common weakness: ${mostCommonWeakness[0]} (${mostCommonWeakness[1]} pages)`);

  console.log(`\nBottom 10:`);
  for (const r of bottom10) {
    console.log(`  ${r.score.toString().padStart(2)} ${r.city.padEnd(14)} ${r.route.padEnd(25)} ${r.diagnostic}`);
  }
}

main();
