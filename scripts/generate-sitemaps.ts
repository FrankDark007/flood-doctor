/**
 * Sitemap Generator for Flood Doctor
 * Generates XML sitemaps for all city subdomains and the main HQ site
 */

import * as fs from 'fs';
import * as path from 'path';

// City subdomains
const CITY_SUBDOMAINS = [
  'mclean',
  'arlington',
  'alexandria',
  'fairfax',
  'vienna',
  'tysons',
  'reston',
  'herndon',
  'ashburn',
  'springfield',
  'fallschurch',
  'greatfalls',
  'lorton',
] as const;

// Routes available on each subdomain
const ROUTES = [
  '/',
  '/team',
  '/projects',
  '/partners',
  '/water-damage',
  '/mold-remediation',
  '/emergency',
] as const;

// Output directory
const OUTPUT_DIR = path.resolve(process.cwd(), 'public/sitemaps');

/**
 * Get the base URL for a subdomain
 * HQ (main) uses flood.doctor, cities use [city].flood.doctor
 */
function getBaseUrl(subdomain: string): string {
  if (subdomain === 'hq' || subdomain === 'main') {
    return 'https://flood.doctor';
  }
  return `https://${subdomain}.flood.doctor`;
}

/**
 * Generate XML sitemap for a single subdomain
 */
function generateSitemap(subdomain: string): string {
  const baseUrl = getBaseUrl(subdomain);
  const today = new Date().toISOString().split('T')[0];

  const urls = ROUTES.map((route) => {
    const loc = route === '/' ? baseUrl : `${baseUrl}${route}`;
    const priority = route === '/' ? '1.0' : route === '/emergency' ? '0.9' : '0.8';
    const changefreq = route === '/emergency' ? 'daily' : 'weekly';

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

/**
 * Generate sitemap index that references all individual sitemaps
 */
function generateSitemapIndex(): string {
  const today = new Date().toISOString().split('T')[0];
  const baseUrl = 'https://flood.doctor';

  // Include main/HQ sitemap
  const sitemaps = [
    `  <sitemap>
    <loc>${baseUrl}/sitemaps/sitemap-main.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`,
  ];

  // Include city sitemaps
  for (const city of CITY_SUBDOMAINS) {
    sitemaps.push(`  <sitemap>
    <loc>${baseUrl}/sitemaps/sitemap-${city}.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.join('\n')}
</sitemapindex>`;
}

/**
 * Ensure output directory exists
 */
function ensureOutputDir(): void {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
}

/**
 * Write sitemap to file
 */
function writeSitemap(filename: string, content: string): void {
  const filepath = path.join(OUTPUT_DIR, filename);
  fs.writeFileSync(filepath, content, 'utf-8');
  console.log(`Generated: ${filepath}`);
}

/**
 * Main function to generate all sitemaps
 */
function main(): void {
  console.log('Generating sitemaps for Flood Doctor...\n');

  ensureOutputDir();

  // Generate main/HQ sitemap
  const mainSitemap = generateSitemap('hq');
  writeSitemap('sitemap-main.xml', mainSitemap);

  // Generate city sitemaps
  for (const city of CITY_SUBDOMAINS) {
    const citySitemap = generateSitemap(city);
    writeSitemap(`sitemap-${city}.xml`, citySitemap);
  }

  // Generate sitemap index
  const sitemapIndex = generateSitemapIndex();
  writeSitemap('sitemap-index.xml', sitemapIndex);

  console.log(`\nDone! Generated ${CITY_SUBDOMAINS.length + 2} sitemap files.`);
}

// Run the generator
main();
