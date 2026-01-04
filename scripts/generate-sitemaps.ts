/**
 * Sitemap Generator for Flood Doctor
 * Generates XML sitemaps for all city subdomains and the main HQ site
 * Includes: homepage, services, neighborhoods, and blog articles
 */

import * as fs from 'fs';
import * as path from 'path';

// City subdomains with their display names
const CITY_SUBDOMAINS = [
  { slug: 'mclean', name: 'McLean' },
  { slug: 'arlington', name: 'Arlington' },
  { slug: 'alexandria', name: 'Alexandria' },
  { slug: 'fairfax', name: 'Fairfax' },
  { slug: 'vienna', name: 'Vienna' },
  { slug: 'tysons', name: 'Tysons' },
  { slug: 'reston', name: 'Reston' },
  { slug: 'herndon', name: 'Herndon' },
  { slug: 'ashburn', name: 'Ashburn' },
  { slug: 'springfield', name: 'Springfield' },
  { slug: 'fallschurch', name: 'Falls Church' },
  { slug: 'greatfalls', name: 'Great Falls' },
  { slug: 'lorton', name: 'Lorton' },
] as const;

// Service pages available on each subdomain
const SERVICES = [
  'water-damage',
  'basement-flooding',
  'burst-pipe',
  'flood-cleanup',
  'mold-remediation',
  'sewage-cleanup',
  'storm-damage',
  'fire-damage',
] as const;

// Neighborhood definitions per city
const NEIGHBORHOODS: Record<string, string[]> = {
  mclean: ['chesterbrook', 'langley', 'salona-village', 'the-reserve', 'woodside-estates'],
  arlington: ['ballston', 'clarendon', 'crystal-city', 'pentagon-city', 'rosslyn', 'shirlington'],
  alexandria: ['belle-haven', 'carlyle', 'del-ray', 'kingstowne', 'old-town', 'rosemont'],
  fairfax: ['burke', 'burke-centre', 'fairfax-city', 'kings-park', 'mantua'],
  vienna: ['clarks-crossing', 'dunn-loring', 'oakton', 'tysons-woods', 'vienna-town', 'wolftrap'],
  tysons: ['scotts-run', 'the-boro', 'the-mile', 'tysons-central', 'tysons-corner'],
  reston: ['hunters-woods', 'lake-anne', 'north-point', 'reston-town-center', 'south-lakes'],
  herndon: ['downtown-herndon', 'fox-mill', 'franklin-farm', 'mcnair', 'worldgate'],
  ashburn: ['ashburn-farm', 'belmont', 'brambleton', 'broadlands', 'one-loudoun'],
  springfield: ['franconia', 'kingstowne', 'newington', 'rolling-valley', 'west-springfield'],
  fallschurch: ['baileys-crossroads', 'falls-church-city', 'lake-barcroft', 'pimmit-hills', 'seven-corners'],
  greatfalls: ['forestville', 'great-falls-village', 'hickory-farms', 'riverbend', 'seneca-estates'],
  lorton: ['gunston', 'laurel-hill', 'mason-neck', 'occoquan', 'south-county'],
};

// Blog articles per city
const BLOG_ARTICLES: Record<string, string[]> = {
  mclean: [
    'mclean-basement-flooding-prevention-guide',
    'mclean-hidden-mold-risk-signs-prevention',
    'protecting-mclean-investment-water-damage-property-values',
    'what-to-do-when-your-mclean-home-floods',
    'why-mclean-homes-face-unique-water-damage-risks',
  ],
  arlington: [
    'arlington-condo-hoa-water-damage-guide',
    'arlington-mold-high-rise-guide',
    'high-rise-water-damage-prevention-guide',
    'underground-parking-flooding-response',
    'what-to-do-condo-flooding-emergency',
  ],
  alexandria: [
    'alexandria-basement-waterproofing-guide',
    'alexandria-mold-prevention-guide',
    'old-town-alexandria-water-damage-historic-homes',
    'potomac-river-flooding-alexandria-guide',
    'what-to-do-burst-pipe-alexandria',
  ],
  fairfax: [
    'fairfax-basement-flooding-causes-solutions',
    'fairfax-mold-after-water-damage',
    'fairfax-sump-pump-failure-prevention',
    'fairfax-water-damage-emergency-guide',
    'fairfax-water-damage-insurance-claims',
  ],
  vienna: [
    'vienna-basement-flooding-solutions',
    'vienna-mold-prevention-tips',
    'vienna-older-home-water-damage',
    'vienna-plumbing-failure-prevention',
    'vienna-water-damage-emergency-guide',
  ],
  tysons: [
    'tysons-commercial-water-damage-guide',
    'tysons-high-rise-water-damage-guide',
    'tysons-new-construction-water-damage',
    'tysons-underground-parking-flooding',
    'tysons-water-damage-prevention-condos',
  ],
  reston: [
    'reston-basement-flooding-prevention',
    'reston-mold-prevention-humid-climate',
    'reston-townhome-water-damage-guide',
    'reston-water-damage-emergency-response',
    'reston-water-heater-failure-prevention',
  ],
  herndon: [
    'herndon-basement-waterproofing-guide',
    'herndon-mold-prevention-guide',
    'herndon-water-damage-emergency-guide',
  ],
  ashburn: [
    'ashburn-basement-flooding-solutions',
    'ashburn-mold-prevention-guide',
    'ashburn-new-construction-water-damage',
    'ashburn-water-damage-emergency-guide',
    'ashburn-water-damage-insurance-guide',
  ],
  springfield: [
    'springfield-basement-flooding-prevention',
    'springfield-mold-prevention-guide',
    'springfield-water-damage-emergency-guide',
  ],
  fallschurch: [
    'falls-church-basement-moisture-control',
    'falls-church-older-home-plumbing',
    'falls-church-water-damage-emergency-guide',
  ],
  greatfalls: [
    'great-falls-basement-water-protection',
    'great-falls-storm-damage-preparation',
    'great-falls-water-damage-luxury-homes',
  ],
  lorton: [
    'lorton-basement-mold-prevention',
    'lorton-new-construction-water-damage',
    'lorton-water-damage-emergency-guide',
  ],
};

// Main site routes
const MAIN_ROUTES = [
  '/',
  '/about',
  '/services',
  '/locations',
  '/blog',
  '/contact',
  '/request',
  '/careers',
  '/reviews',
  '/privacy',
  '/terms',
] as const;

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
  for (const service of SERVICES) {
    urls.push({
      loc: `${baseUrl}/services/${service}`,
      priority: '0.9',
      changefreq: 'weekly',
    });
  }

  // Neighborhood pages
  const neighborhoods = NEIGHBORHOODS[citySlug] || [];
  for (const neighborhood of neighborhoods) {
    urls.push({
      loc: `${baseUrl}/neighborhoods/${neighborhood}`,
      priority: '0.8',
      changefreq: 'monthly',
    });
  }

  // Blog articles
  const articles = BLOG_ARTICLES[citySlug] || [];
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
 * Generate URL entries for main site
 */
function getMainUrls(): SitemapUrl[] {
  const baseUrl = getBaseUrl('main');
  return MAIN_ROUTES.map((route) => ({
    loc: route === '/' ? baseUrl : `${baseUrl}${route}`,
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
