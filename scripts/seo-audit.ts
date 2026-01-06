#!/usr/bin/env npx tsx
/**
 * Comprehensive SEO Audit Script for Flood Doctor City Pages
 *
 * Based on RankMath Pro, Surfer SEO, Clearscope, and Yoast best practices
 *
 * Run: npx tsx scripts/seo-audit.ts [city-slug]
 * Example: npx tsx scripts/seo-audit.ts mclean
 */

import * as fs from 'fs';
import * as path from 'path';
import { JSDOM } from 'jsdom';

// ============================================
// SEO AUDIT CONFIGURATION
// ============================================

interface SEOCheck {
  id: string;
  name: string;
  category: 'critical' | 'high' | 'medium' | 'low';
  weight: number;
  description: string;
}

interface SEOResult {
  check: SEOCheck;
  passed: boolean;
  score: number;
  message: string;
  details?: string;
  fix?: string;
}

interface PageAudit {
  url: string;
  focusKeyword: string;
  secondaryKeywords: string[];
  results: SEOResult[];
  totalScore: number;
  maxScore: number;
  grade: string;
}

// ============================================
// SEO CHECKS - Based on RankMath Pro + Best Practices
// ============================================

const SEO_CHECKS: SEOCheck[] = [
  // === CRITICAL (Must Pass) ===
  {
    id: 'url_no_hash',
    name: 'URL has no hash routing',
    category: 'critical',
    weight: 15,
    description: 'URLs should use HTML5 history routing, not hash (#) routing. Search engines have limited indexing of hash-based URLs.'
  },
  {
    id: 'h1_exists',
    name: 'Page has exactly one H1 tag',
    category: 'critical',
    weight: 10,
    description: 'Every page must have exactly one H1 tag that defines the main topic.'
  },
  {
    id: 'h1_focus_keyword',
    name: 'Focus keyword in H1',
    category: 'critical',
    weight: 10,
    description: 'The primary focus keyword must appear in the H1 tag.'
  },
  {
    id: 'h1_location_keyword',
    name: 'City/Location in H1',
    category: 'critical',
    weight: 10,
    description: 'For local SEO, the city name must appear in the H1 tag (e.g., "Water Damage Restoration in McLean, Virginia").'
  },
  {
    id: 'title_focus_keyword',
    name: 'Focus keyword in title tag',
    category: 'critical',
    weight: 8,
    description: 'The focus keyword should appear in the page title.'
  },
  {
    id: 'title_keyword_beginning',
    name: 'Focus keyword at BEGINNING of title (RankMath)',
    category: 'critical',
    weight: 8,
    description: 'RankMath Pro: Focus keyword should appear in the first half of the title for maximum SEO impact.'
  },
  {
    id: 'title_location',
    name: 'City/Location in title tag',
    category: 'critical',
    weight: 8,
    description: 'For local SEO, the city name must appear in the title tag.'
  },

  // === HIGH PRIORITY ===
  {
    id: 'meta_desc_focus_keyword',
    name: 'Focus keyword in meta description',
    category: 'high',
    weight: 6,
    description: 'The focus keyword should appear in the meta description.'
  },
  {
    id: 'meta_desc_length',
    name: 'Meta description length (140-160 chars)',
    category: 'high',
    weight: 5,
    description: 'Meta description should be 140-160 characters for optimal display in search results.'
  },
  {
    id: 'title_length',
    name: 'Title tag length (50-60 chars)',
    category: 'high',
    weight: 5,
    description: 'Title tag should be 50-60 characters to avoid truncation in search results.'
  },
  {
    id: 'first_paragraph_keyword',
    name: 'Focus keyword in first paragraph',
    category: 'high',
    weight: 6,
    description: 'The focus keyword should appear in the first 10% of content (first paragraph).'
  },
  {
    id: 'h2_keywords',
    name: 'Keywords in H2 subheadings',
    category: 'high',
    weight: 6,
    description: 'At least 50% of H2 tags should contain the focus keyword, secondary keywords, or location.'
  },
  {
    id: 'url_focus_keyword',
    name: 'Focus keyword in URL',
    category: 'high',
    weight: 5,
    description: 'The URL should contain the focus keyword slug.'
  },

  // === MEDIUM PRIORITY ===
  {
    id: 'content_length',
    name: 'Sufficient content length (800+ words)',
    category: 'medium',
    weight: 5,
    description: 'Local service pages should have at least 800 words for comprehensive coverage. Top-ranking pages average 1,500+ words.'
  },
  {
    id: 'keyword_density',
    name: 'Keyword density (1-2%)',
    category: 'medium',
    weight: 4,
    description: 'Focus keyword should appear 1-2% of total word count. Under 1% = weak signal, over 3% = keyword stuffing.'
  },
  {
    id: 'h2_count',
    name: 'Sufficient H2 subheadings (4+)',
    category: 'medium',
    weight: 4,
    description: 'Pages should have at least 4 H2 subheadings to structure content properly.'
  },
  {
    id: 'heading_hierarchy',
    name: 'Proper heading hierarchy',
    category: 'medium',
    weight: 4,
    description: 'Headings should follow proper hierarchy: H1 → H2 → H3. No skipping levels.'
  },
  {
    id: 'internal_links',
    name: 'Internal links present (3+)',
    category: 'medium',
    weight: 4,
    description: 'Pages should have at least 3 internal links to other relevant pages.'
  },
  {
    id: 'external_links',
    name: 'External links present (1+)',
    category: 'medium',
    weight: 3,
    description: 'Pages should have at least 1 external link to authoritative sources.'
  },
  {
    id: 'images_with_alt',
    name: 'Images have alt text with keywords',
    category: 'medium',
    weight: 4,
    description: 'All images should have descriptive alt text, with some containing the focus keyword.'
  },

  // === LOW PRIORITY (Nice to Have) ===
  {
    id: 'schema_markup',
    name: 'Schema.org markup present',
    category: 'low',
    weight: 3,
    description: 'Pages should have relevant schema markup (LocalBusiness, Service, FAQ, etc.).'
  },
  {
    id: 'title_power_word',
    name: 'Title contains power/emotional word',
    category: 'low',
    weight: 2,
    description: 'SEO title should contain persuasive words (e.g., "Expert", "Professional", "Trusted", "Fast").'
  },
  {
    id: 'title_number',
    name: 'Title or H1 contains a number',
    category: 'low',
    weight: 2,
    description: 'Including numbers in titles increases CTR (e.g., "24/7", "60-Minute Response", "5-Star").'
  },
  {
    id: 'short_paragraphs',
    name: 'Readable paragraph length',
    category: 'low',
    weight: 2,
    description: 'Paragraphs should be 2-4 sentences for readability. Long blocks of text hurt engagement.'
  },
  {
    id: 'faq_schema',
    name: 'FAQ schema markup present',
    category: 'low',
    weight: 3,
    description: 'FAQ sections should have FAQPage schema for rich snippets.'
  },
  {
    id: 'content_has_media',
    name: 'Content contains images and/or videos (RankMath)',
    category: 'medium',
    weight: 4,
    description: 'RankMath Pro: Content should contain images and/or videos for better engagement and SEO.'
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

function extractTextContent(html: string): string {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Remove script and style elements
  const scripts = document.querySelectorAll('script, style, noscript');
  scripts.forEach(el => el.remove());

  return document.body?.textContent?.trim() || '';
}

function countWords(text: string): number {
  return text.split(/\s+/).filter(word => word.length > 0).length;
}

function countKeywordOccurrences(text: string, keyword: string): number {
  const regex = new RegExp(keyword.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

function calculateKeywordDensity(text: string, keyword: string): number {
  const wordCount = countWords(text);
  const keywordCount = countKeywordOccurrences(text, keyword);
  if (wordCount === 0) return 0;
  return (keywordCount / wordCount) * 100;
}

function getGrade(percentage: number): string {
  if (percentage >= 90) return 'A+';
  if (percentage >= 80) return 'A';
  if (percentage >= 70) return 'B';
  if (percentage >= 60) return 'C';
  if (percentage >= 50) return 'D';
  return 'F';
}

// ============================================
// AUDIT FUNCTIONS
// ============================================

interface PageData {
  html: string;
  url: string;
  focusKeyword: string;
  locationKeyword: string;
  secondaryKeywords: string[];
}

function auditPage(data: PageData): PageAudit {
  const dom = new JSDOM(data.html);
  const document = dom.window.document;

  const results: SEOResult[] = [];
  const textContent = extractTextContent(data.html);
  const wordCount = countWords(textContent);

  // Extract elements
  const h1Elements = document.querySelectorAll('h1');
  const h2Elements = document.querySelectorAll('h2');
  const h3Elements = document.querySelectorAll('h3');
  const titleElement = document.querySelector('title');
  const metaDesc = document.querySelector('meta[name="description"]');
  const images = document.querySelectorAll('img');
  const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href*="flood.doctor"]');
  const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="flood.doctor"])');
  const schemas = document.querySelectorAll('script[type="application/ld+json"]');

  const h1Text = h1Elements[0]?.textContent?.toLowerCase() || '';
  const titleText = titleElement?.textContent?.toLowerCase() || '';
  const metaDescText = metaDesc?.getAttribute('content')?.toLowerCase() || '';
  const focusKw = data.focusKeyword.toLowerCase();
  const locationKw = data.locationKeyword.toLowerCase();

  // === RUN ALL CHECKS ===

  for (const check of SEO_CHECKS) {
    let passed = false;
    let message = '';
    let details = '';
    let fix = '';

    switch (check.id) {
      case 'url_no_hash':
        passed = !data.url.includes('#');
        message = passed
          ? 'URL uses clean HTML5 history routing'
          : 'URL contains hash (#) routing - CRITICAL SEO issue';
        if (!passed) {
          fix = 'Switch from HashRouter to BrowserRouter in React Router configuration. Hash-based URLs are poorly indexed by search engines.';
        }
        break;

      case 'h1_exists':
        passed = h1Elements.length === 1;
        message = h1Elements.length === 0
          ? 'No H1 tag found on page'
          : h1Elements.length === 1
            ? 'Page has exactly one H1 tag'
            : `Page has ${h1Elements.length} H1 tags (should be 1)`;
        if (h1Elements.length > 0) {
          details = `H1 content: "${h1Elements[0]?.textContent}"`;
        }
        break;

      case 'h1_focus_keyword':
        passed = h1Text.includes(focusKw);
        message = passed
          ? `Focus keyword "${data.focusKeyword}" found in H1`
          : `Focus keyword "${data.focusKeyword}" NOT found in H1`;
        details = `H1: "${h1Elements[0]?.textContent || 'N/A'}"`;
        if (!passed) {
          fix = `Update H1 to include "${data.focusKeyword}" (e.g., "Professional ${data.focusKeyword} in ${data.locationKeyword}")`;
        }
        break;

      case 'h1_location_keyword':
        passed = h1Text.includes(locationKw);
        message = passed
          ? `Location "${data.locationKeyword}" found in H1`
          : `Location "${data.locationKeyword}" NOT found in H1 - CRITICAL for local SEO`;
        details = `H1: "${h1Elements[0]?.textContent || 'N/A'}"`;
        if (!passed) {
          fix = `Update H1 to include city name (e.g., "${data.focusKeyword} in ${data.locationKeyword}, Virginia")`;
        }
        break;

      case 'title_focus_keyword':
        passed = titleText.includes(focusKw);
        message = passed
          ? `Focus keyword found in title tag`
          : `Focus keyword "${data.focusKeyword}" NOT found in title tag`;
        details = `Title: "${titleElement?.textContent || 'N/A'}"`;
        break;

      case 'title_location':
        passed = titleText.includes(locationKw);
        message = passed
          ? `Location "${data.locationKeyword}" found in title`
          : `Location "${data.locationKeyword}" NOT found in title - CRITICAL for local SEO`;
        details = `Title: "${titleElement?.textContent || 'N/A'}"`;
        break;

      case 'title_keyword_beginning':
        // RankMath Pro: Focus keyword should appear in first half of title
        const titleHalf = Math.floor((titleElement?.textContent?.length || 0) / 2);
        const firstHalfTitle = titleText.substring(0, titleHalf);
        passed = firstHalfTitle.includes(focusKw);
        message = passed
          ? 'Focus keyword appears in first half of title (RankMath Pro approved)'
          : 'Focus keyword NOT in first half of title - move keyword to BEGINNING';
        details = `Title: "${titleElement?.textContent || 'N/A'}"`;
        if (!passed) {
          fix = `Restructure title to put "${data.focusKeyword}" at the beginning. Example: "${data.focusKeyword} ${data.locationKeyword} | 24/7 Emergency | Flood Doctor"`;
        }
        break;

      case 'meta_desc_focus_keyword':
        passed = metaDescText.includes(focusKw);
        message = passed
          ? 'Focus keyword found in meta description'
          : 'Focus keyword NOT found in meta description';
        details = `Meta desc: "${metaDesc?.getAttribute('content') || 'N/A'}"`;
        break;

      case 'meta_desc_length':
        const descLength = metaDesc?.getAttribute('content')?.length || 0;
        passed = descLength >= 140 && descLength <= 160;
        message = passed
          ? `Meta description length is optimal (${descLength} chars)`
          : `Meta description length: ${descLength} chars (should be 140-160)`;
        break;

      case 'title_length':
        const titleLength = titleElement?.textContent?.length || 0;
        passed = titleLength >= 50 && titleLength <= 60;
        message = passed
          ? `Title length is optimal (${titleLength} chars)`
          : `Title length: ${titleLength} chars (should be 50-60)`;
        break;

      case 'first_paragraph_keyword':
        const firstPara = textContent.substring(0, Math.floor(textContent.length * 0.1));
        passed = firstPara.toLowerCase().includes(focusKw);
        message = passed
          ? 'Focus keyword found in first 10% of content'
          : 'Focus keyword NOT found in first 10% of content';
        break;

      case 'h2_keywords':
        let h2WithKeywords = 0;
        const allKeywords = [focusKw, locationKw, ...data.secondaryKeywords.map(k => k.toLowerCase())];
        h2Elements.forEach(h2 => {
          const h2Text = h2.textContent?.toLowerCase() || '';
          if (allKeywords.some(kw => h2Text.includes(kw))) {
            h2WithKeywords++;
          }
        });
        const h2Percentage = h2Elements.length > 0 ? (h2WithKeywords / h2Elements.length) * 100 : 0;
        passed = h2Percentage >= 50;
        message = passed
          ? `${h2WithKeywords}/${h2Elements.length} H2s contain keywords (${h2Percentage.toFixed(0)}%)`
          : `Only ${h2WithKeywords}/${h2Elements.length} H2s contain keywords (${h2Percentage.toFixed(0)}% - should be 50%+)`;
        details = Array.from(h2Elements).map(h2 => `  - "${h2.textContent}"`).join('\n');
        if (!passed) {
          fix = `Add location/service keywords to H2 subheadings (e.g., "Emergency ${data.focusKeyword} in ${data.locationKeyword}")`;
        }
        break;

      case 'url_focus_keyword':
        const urlSlug = data.focusKeyword.toLowerCase().replace(/\s+/g, '-');
        passed = data.url.toLowerCase().includes(urlSlug) || data.url.toLowerCase().includes(data.focusKeyword.toLowerCase().replace(/\s+/g, ''));
        message = passed
          ? 'Focus keyword found in URL'
          : `Focus keyword "${data.focusKeyword}" NOT found in URL`;
        details = `URL: ${data.url}`;
        break;

      case 'content_length':
        passed = wordCount >= 800;
        message = passed
          ? `Content length: ${wordCount} words (good)`
          : `Content length: ${wordCount} words (should be 800+ for local service pages)`;
        if (!passed) {
          fix = `Add more comprehensive content about ${data.focusKeyword} in ${data.locationKeyword}. Include local landmarks, neighborhoods, common issues, case studies.`;
        }
        break;

      case 'keyword_density':
        const density = calculateKeywordDensity(textContent, data.focusKeyword);
        passed = density >= 1 && density <= 2;
        message = passed
          ? `Keyword density: ${density.toFixed(2)}% (optimal)`
          : density < 1
            ? `Keyword density: ${density.toFixed(2)}% (too low - should be 1-2%)`
            : `Keyword density: ${density.toFixed(2)}% (too high - risk of keyword stuffing)`;
        break;

      case 'h2_count':
        passed = h2Elements.length >= 4;
        message = passed
          ? `Page has ${h2Elements.length} H2 subheadings (good)`
          : `Page has only ${h2Elements.length} H2 subheadings (should be 4+)`;
        break;

      case 'heading_hierarchy':
        // Check for proper nesting
        let hierarchyOk = true;
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        let lastLevel = 0;
        headings.forEach(heading => {
          const level = parseInt(heading.tagName[1]);
          if (level > lastLevel + 1 && lastLevel !== 0) {
            hierarchyOk = false;
          }
          lastLevel = level;
        });
        passed = hierarchyOk;
        message = passed
          ? 'Heading hierarchy is proper (no skipped levels)'
          : 'Heading hierarchy has skipped levels (e.g., H1 → H3)';
        break;

      case 'internal_links':
        passed = internalLinks.length >= 3;
        message = passed
          ? `Page has ${internalLinks.length} internal links (good)`
          : `Page has only ${internalLinks.length} internal links (should be 3+)`;
        break;

      case 'external_links':
        passed = externalLinks.length >= 1;
        message = passed
          ? `Page has ${externalLinks.length} external links`
          : 'No external links to authoritative sources';
        break;

      case 'images_with_alt':
        let imagesWithAlt = 0;
        let imagesWithKeywordAlt = 0;
        images.forEach(img => {
          const alt = img.getAttribute('alt');
          if (alt && alt.length > 0) {
            imagesWithAlt++;
            if (alt.toLowerCase().includes(focusKw) || alt.toLowerCase().includes(locationKw)) {
              imagesWithKeywordAlt++;
            }
          }
        });
        passed = images.length === 0 || (imagesWithAlt === images.length && imagesWithKeywordAlt >= 1);
        message = images.length === 0
          ? 'No images on page'
          : `${imagesWithAlt}/${images.length} images have alt text, ${imagesWithKeywordAlt} contain keywords`;
        break;

      case 'schema_markup':
        passed = schemas.length > 0;
        let schemaTypes: string[] = [];
        schemas.forEach(script => {
          try {
            const json = JSON.parse(script.textContent || '{}');
            if (json['@type']) schemaTypes.push(json['@type']);
          } catch {}
        });
        message = passed
          ? `Schema markup present: ${schemaTypes.join(', ')}`
          : 'No schema.org markup found';
        break;

      case 'title_power_word':
        const powerWords = ['expert', 'professional', 'trusted', 'fast', 'certified', 'emergency', '24/7', 'guaranteed', 'best', 'top'];
        passed = powerWords.some(word => titleText.includes(word));
        message = passed
          ? 'Title contains power/emotional word'
          : 'Title missing power words (add "Expert", "Professional", "Trusted", etc.)';
        break;

      case 'title_number':
        const hasNumber = /\d/.test(titleText) || /\d/.test(h1Text);
        passed = hasNumber;
        message = passed
          ? 'Title/H1 contains a number (good for CTR)'
          : 'Consider adding a number to title (e.g., "24/7", "60-Minute Response")';
        break;

      case 'short_paragraphs':
        const paragraphs = document.querySelectorAll('p');
        let longParagraphs = 0;
        paragraphs.forEach(p => {
          const sentences = (p.textContent || '').split(/[.!?]+/).filter(s => s.trim().length > 0);
          if (sentences.length > 4) longParagraphs++;
        });
        passed = longParagraphs <= Math.floor(paragraphs.length * 0.2);
        message = passed
          ? 'Paragraph lengths are readable'
          : `${longParagraphs} paragraphs are too long (over 4 sentences)`;
        break;

      case 'faq_schema':
        let hasFaqSchema = false;
        schemas.forEach(script => {
          try {
            const json = JSON.parse(script.textContent || '{}');
            if (json['@type'] === 'FAQPage') hasFaqSchema = true;
          } catch {}
        });
        passed = hasFaqSchema;
        message = passed
          ? 'FAQ schema markup present'
          : 'No FAQ schema markup (add for FAQ sections)';
        break;

      case 'content_has_media':
        // RankMath Pro: Check for images and/or videos in content
        const videos = document.querySelectorAll('video, iframe[src*="youtube"], iframe[src*="vimeo"], iframe[src*="wistia"]');
        const hasImages = images.length > 0;
        const hasVideos = videos.length > 0;
        passed = hasImages || hasVideos;
        if (hasImages && hasVideos) {
          message = `Content has both images (${images.length}) and videos (${videos.length}) - excellent!`;
        } else if (hasImages) {
          message = `Content has ${images.length} image(s) - consider adding video for better engagement`;
        } else if (hasVideos) {
          message = `Content has ${videos.length} video(s) - consider adding images`;
        } else {
          message = 'No images or videos found - add visual content for better engagement';
          fix = 'Add relevant images (with alt text containing keywords) and/or embed a video to improve engagement and time-on-page.';
        }
        break;
    }

    results.push({
      check,
      passed,
      score: passed ? check.weight : 0,
      message,
      details: details || undefined,
      fix: fix || undefined
    });
  }

  // Calculate total score
  const totalScore = results.reduce((sum, r) => sum + r.score, 0);
  const maxScore = SEO_CHECKS.reduce((sum, c) => sum + c.weight, 0);
  const percentage = (totalScore / maxScore) * 100;

  return {
    url: data.url,
    focusKeyword: data.focusKeyword,
    secondaryKeywords: data.secondaryKeywords,
    results,
    totalScore,
    maxScore,
    grade: getGrade(percentage)
  };
}

// ============================================
// REPORT GENERATION
// ============================================

function generateReport(audit: PageAudit): string {
  const percentage = ((audit.totalScore / audit.maxScore) * 100).toFixed(1);

  let report = `
╔══════════════════════════════════════════════════════════════════════════════╗
║                          SEO AUDIT REPORT                                    ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  URL: ${audit.url.padEnd(68)}║
║  Focus Keyword: ${audit.focusKeyword.padEnd(58)}║
║  Score: ${audit.totalScore}/${audit.maxScore} (${percentage}%) - Grade: ${audit.grade.padEnd(44)}║
╚══════════════════════════════════════════════════════════════════════════════╝

`;

  // Group by category
  const categories = ['critical', 'high', 'medium', 'low'] as const;
  const categoryLabels = {
    critical: '🔴 CRITICAL ISSUES (Must Fix)',
    high: '🟠 HIGH PRIORITY',
    medium: '🟡 MEDIUM PRIORITY',
    low: '🟢 LOW PRIORITY (Nice to Have)'
  };

  for (const category of categories) {
    const categoryResults = audit.results.filter(r => r.check.category === category);
    const failedResults = categoryResults.filter(r => !r.passed);
    const passedResults = categoryResults.filter(r => r.passed);

    report += `\n${categoryLabels[category]}\n${'─'.repeat(60)}\n`;

    // Show failed first
    for (const result of failedResults) {
      report += `\n  ❌ ${result.check.name}\n`;
      report += `     ${result.message}\n`;
      if (result.details) {
        report += `     📋 ${result.details}\n`;
      }
      if (result.fix) {
        report += `     💡 FIX: ${result.fix}\n`;
      }
    }

    // Show passed
    for (const result of passedResults) {
      report += `  ✅ ${result.check.name}: ${result.message}\n`;
    }
  }

  // Summary
  const criticalFailed = audit.results.filter(r => r.check.category === 'critical' && !r.passed).length;
  const highFailed = audit.results.filter(r => r.check.category === 'high' && !r.passed).length;

  report += `
╔══════════════════════════════════════════════════════════════════════════════╗
║                              SUMMARY                                         ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Total Score: ${audit.totalScore}/${audit.maxScore} (${percentage}%)${' '.repeat(50)}║
║  Grade: ${audit.grade}${' '.repeat(66)}║
║  Critical Issues: ${criticalFailed}${' '.repeat(55)}║
║  High Priority Issues: ${highFailed}${' '.repeat(50)}║
╚══════════════════════════════════════════════════════════════════════════════╝

`;

  if (criticalFailed > 0) {
    report += `\n⚠️  WARNING: ${criticalFailed} CRITICAL SEO issues found. These MUST be fixed before launch.\n`;
  }

  return report;
}

// ============================================
// MAIN EXECUTION
// ============================================

async function main() {
  const args = process.argv.slice(2);

  console.log('\n🔍 Flood Doctor SEO Audit Tool\n');
  console.log('Based on RankMath Pro, Surfer SEO, Clearscope & Yoast best practices\n');

  // Example audit for testing
  const testHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Water Damage Restoration in Fairfax & Northern Virginia | Flood Doctor</title>
      <meta name="description" content="Professional water damage restoration services in Northern Virginia.">
    </head>
    <body>
      <h1>Water Damage Restoration in Fairfax & Northern Virginia</h1>
      <p>Some intro content here about water damage.</p>
      <h2>Our Process</h2>
      <p>Step by step process...</p>
      <h2>Why Choose Us</h2>
      <p>Benefits...</p>
    </body>
    </html>
  `;

  const audit = auditPage({
    html: testHtml,
    url: 'https://mclean.flood.doctor/services/residential/restoration-services/water-damage-restoration/',
    focusKeyword: 'water damage restoration',
    locationKeyword: 'McLean',
    secondaryKeywords: ['water damage', 'flood damage', 'water extraction', 'emergency restoration']
  });

  console.log(generateReport(audit));
}

// Export for use in other scripts
export { auditPage, generateReport, SEO_CHECKS, type PageAudit, type PageData };

// Run if called directly
main().catch(console.error);
