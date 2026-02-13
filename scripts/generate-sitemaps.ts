/**
 * Sitemap Generator for Flood Doctor
 * Generates XML sitemaps for all city subdomains and the main HQ site
 * Includes: homepage, services, neighborhoods, and blog articles
 *
 * Route/city data imported from config/routes.ts (single source of truth)
 */

import * as fs from 'fs';
import * as path from 'path';
import {
  ALL_PRERENDER_ROUTES,
  CITY_SUBDOMAINS,
  CITY_SERVICES,
  CITY_NEIGHBORHOODS,
  CITY_BLOG_ARTICLES,
} from '../config/routes';

// Output directory
const OUTPUT_DIR = path.resolve(process.cwd(), 'public/sitemaps');

/**
 * Get the base URL for a subdomain
 */
function getBaseUrl(subdomain: string): string {
  if (subdomain === 'hq' || subdomain === 'main') {
    return 'https://flood.doctor';
  }
  return `https://${subdomain}.flood.doctor`;
}

interface SitemapUrl {
  loc: string;
  priority: string;
  changefreq: string;
}

/**
 * Generate URL entries for a city subdomain
 */
function getCityUrls(citySlug: string): SitemapUrl[] {
  const baseUrl = getBaseUrl(citySlug);
  const urls: SitemapUrl[] = [];

  // Homepage
  urls.push({
    loc: baseUrl,
    priority: '1.0',
    changefreq: 'weekly',
  });

  // Blog index
  urls.push({
    loc: `${baseUrl}/blog`,
    priority: '0.8',
    changefreq: 'weekly',
  });

  // Service pages
  for (const service of CITY_SERVICES) {
    urls.push({
      loc: `${baseUrl}/services/${service}`,
      priority: '0.9',
      changefreq: 'weekly',
    });
  }

  // Neighborhood pages
  const neighborhoods = CITY_NEIGHBORHOODS[citySlug] || [];
  for (const neighborhood of neighborhoods) {
    urls.push({
      loc: `${baseUrl}/neighborhoods/${neighborhood}`,
      priority: '0.8',
      changefreq: 'monthly',
    });
  }

  // Blog articles
  const articles = CITY_BLOG_ARTICLES[citySlug] || [];
  for (const article of articles) {
    urls.push({
      loc: `${baseUrl}/blog/${article}`,
      priority: '0.7',
      changefreq: 'monthly',
    });
  }

  return urls;
}

/**
 * Generate URL entries for main site using ALL_PRERENDER_ROUTES
 */
function getMainUrls(): SitemapUrl[] {
  const baseUrl = getBaseUrl('main');
  return ALL_PRERENDER_ROUTES.map((route) => ({
    loc: route === '/' ? baseUrl : `${baseUrl}${route.replace(/\/$/, '')}`,
    priority: route === '/' ? '1.0' : '0.8',
    changefreq: 'weekly',
  }));
}

/**
 * Generate XML sitemap content
 */
function generateSitemapXml(urls: SitemapUrl[]): string {
  const today = new Date().toISOString().split('T')[0];

  const urlEntries = urls.map((url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

/**
 * Generate sitemap index
 */
function generateSitemapIndex(): string {
  const today = new Date().toISOString().split('T')[0];
  const baseUrl = 'https://flood.doctor';

  const sitemaps = [
    `  <sitemap>
    <loc>${baseUrl}/sitemaps/sitemap-main.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`,
  ];

  for (const city of CITY_SUBDOMAINS) {
    sitemaps.push(`  <sitemap>
    <loc>${baseUrl}/sitemaps/sitemap-${city.slug}.xml</loc>
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
  console.log(`Generated: ${filename}`);
}

/**
 * Main function
 */
function main(): void {
  console.log('Generating sitemaps for Flood Doctor...\n');

  ensureOutputDir();

  let totalUrls = 0;

  // Generate main site sitemap
  const mainUrls = getMainUrls();
  const mainSitemap = generateSitemapXml(mainUrls);
  writeSitemap('sitemap-main.xml', mainSitemap);
  totalUrls += mainUrls.length;
  console.log(`  - Main site: ${mainUrls.length} URLs`);

  // Generate city sitemaps
  for (const city of CITY_SUBDOMAINS) {
    const cityUrls = getCityUrls(city.slug);
    const citySitemap = generateSitemapXml(cityUrls);
    writeSitemap(`sitemap-${city.slug}.xml`, citySitemap);
    totalUrls += cityUrls.length;
    console.log(`  - ${city.name}: ${cityUrls.length} URLs`);
  }

  // Generate sitemap index
  const sitemapIndex = generateSitemapIndex();
  writeSitemap('sitemap-index.xml', sitemapIndex);

  console.log(`\nDone! Generated ${CITY_SUBDOMAINS.length + 2} sitemap files with ${totalUrls} total URLs.`);
}

// Run the generator
main();
