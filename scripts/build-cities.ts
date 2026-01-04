/**
 * Multi-City Static Site Generator
 *
 * Generates 13 independent static websites for each city subdomain.
 * Each site is a standalone React app with city-specific:
 * - Meta tags (title, description, canonical)
 * - Schema markup (LocalBusiness)
 * - Pre-configured city context
 *
 * Output: dist-cities/{cityId}/ for each city
 *
 * Usage: npx tsx scripts/build-cities.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// ES Module compatibility for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import franchise data types (we'll read from the compiled output)
interface FranchiseData {
  id: string;
  name: string;
  city: string;
  state: string;
  zipCodes: string[];
  phone: string;
  serviceAreaLabel: string;
  dispatchNote: string;
  manager: {
    name: string;
    title: string;
    bio: string;
  };
  localHooks: {
    neighborhoods: string[];
    landmarks: string[];
    commonIssues: string[];
    architectureNotes: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  serviceArea: {
    primary: string[];
    secondary: string[];
  };
}

// City configurations extracted from franchises.ts
const cities: FranchiseData[] = [
  {
    id: 'mclean',
    name: 'Flood Doctor of McLean',
    city: 'McLean',
    state: 'VA',
    zipCodes: ['22101', '22102', '22106'],
    phone: '703-656-0101',
    serviceAreaLabel: 'Serving McLean, Tysons & Great Falls',
    dispatchNote: 'Dispatched from our central facility in Falls Church, with rapid response units stationed throughout McLean and Tysons.',
    manager: { name: 'Alex D.', title: 'McLean Branch Manager', bio: 'Alex has managed water emergencies in McLean\'s estate properties for over 10 years.' },
    localHooks: {
      neighborhoods: ['Langley', 'Chesterbrook', 'Salona Village', 'McLean Hamlet'],
      landmarks: ['Tysons Corner Center', 'Great Falls Park', 'Langley High School'],
      commonIssues: ['Finished basement flooding in estate homes', 'Pool house pipe bursts', 'Wine cellar humidity damage'],
      architectureNotes: 'Large estate homes with finished basements and custom millwork.'
    },
    coordinates: { lat: 38.9339, lng: -77.1773 },
    serviceArea: { primary: ['McLean', 'Tysons', 'Great Falls'], secondary: ['Vienna', 'Falls Church'] }
  },
  {
    id: 'arlington',
    name: 'Flood Doctor of Arlington',
    city: 'Arlington',
    state: 'VA',
    zipCodes: ['22201', '22202', '22203', '22204', '22205', '22206', '22207', '22209', '22213'],
    phone: '703-656-0102',
    serviceAreaLabel: 'Serving Arlington, Rosslyn & Clarendon',
    dispatchNote: 'Dispatched from our central facility in Falls Church, minutes from all Arlington neighborhoods.',
    manager: { name: 'Jennifer K.', title: 'Arlington Branch Manager', bio: 'Jennifer manages both high-rise condo emergencies and single-family restoration throughout Arlington.' },
    localHooks: {
      neighborhoods: ['Rosslyn', 'Clarendon', 'Ballston', 'Crystal City', 'Pentagon City'],
      landmarks: ['Arlington National Cemetery', 'Pentagon', 'Ballston Quarter'],
      commonIssues: ['High-rise condo water intrusion', 'Older single-family basement flooding', 'HVAC condensate line failures'],
      architectureNotes: 'Mix of high-rise condos and mid-century ramblers.'
    },
    coordinates: { lat: 38.8799, lng: -77.1068 },
    serviceArea: { primary: ['Arlington', 'Rosslyn', 'Clarendon', 'Ballston'], secondary: ['Falls Church', 'Alexandria'] }
  },
  {
    id: 'alexandria',
    name: 'Flood Doctor of Alexandria',
    city: 'Alexandria',
    state: 'VA',
    zipCodes: ['22301', '22302', '22304', '22305', '22306', '22307', '22308', '22309', '22310', '22311', '22312', '22314', '22315'],
    phone: '703-656-0103',
    serviceAreaLabel: 'Serving Alexandria, Old Town & Del Ray',
    dispatchNote: 'Dispatched from our central facility, with crews experienced in historic district requirements.',
    manager: { name: 'Sarah M.', title: 'Alexandria Branch Manager', bio: 'Sarah specializes in historic property restoration and navigating Alexandria\'s BAR requirements.' },
    localHooks: {
      neighborhoods: ['Old Town', 'Del Ray', 'Rosemont', 'Carlyle', 'Kingstowne'],
      landmarks: ['King Street', 'Torpedo Factory', 'Old Town Waterfront'],
      commonIssues: ['Combined sewer backups in Old Town', 'Historic district restoration with BAR compliance', 'Older cast iron pipe failures'],
      architectureNotes: 'Mix of historic rowhouses and urban condos.'
    },
    coordinates: { lat: 38.8048, lng: -77.0469 },
    serviceArea: { primary: ['Alexandria', 'Old Town', 'Del Ray'], secondary: ['Kingstowne', 'Crystal City'] }
  },
  {
    id: 'fairfax',
    name: 'Flood Doctor of Fairfax',
    city: 'Fairfax',
    state: 'VA',
    zipCodes: ['22030', '22031', '22032', '22033', '22035'],
    phone: '703-656-0104',
    serviceAreaLabel: 'Serving Fairfax City, Fairfax Corner & Burke',
    dispatchNote: 'Dispatched from our Falls Church facility, with rapid response throughout Fairfax City.',
    manager: { name: 'Michael R.', title: 'Fairfax Branch Manager', bio: 'Michael has served the Fairfax community for 12 years.' },
    localHooks: {
      neighborhoods: ['Fairfax City', 'Fairfax Corner', 'Burke', 'Burke Centre', 'Kings Park'],
      landmarks: ['Fairfax City Hall', 'George Mason University', 'Burke Lake Park'],
      commonIssues: ['Split-level home basement flooding', 'Sump pump failures', 'HVAC drain line clogs'],
      architectureNotes: 'Predominantly 1970s-1990s colonial and split-level homes.'
    },
    coordinates: { lat: 38.8462, lng: -77.3064 },
    serviceArea: { primary: ['Fairfax', 'Burke', 'Burke Centre'], secondary: ['Springfield', 'Annandale'] }
  },
  {
    id: 'vienna',
    name: 'Flood Doctor of Vienna',
    city: 'Vienna',
    state: 'VA',
    zipCodes: ['22180', '22181', '22182', '22183'],
    phone: '703-656-0105',
    serviceAreaLabel: 'Serving Vienna, Oakton & Dunn Loring',
    dispatchNote: 'Dispatched from our central facility, with crews familiar with Vienna\'s mix of historic town properties.',
    manager: { name: 'Robert T.', title: 'Vienna Branch Manager', bio: 'Robert specializes in both historic Vienna properties and newer luxury homes in Oakton.' },
    localHooks: {
      neighborhoods: ['Vienna Town', 'Oakton', 'Dunn Loring', 'Wolftrap'],
      landmarks: ['Vienna Town Green', 'Wolf Trap', 'Meadowlark Gardens'],
      commonIssues: ['Historic home foundation seepage', 'Luxury home basement flooding', 'Hot water heater failures'],
      architectureNotes: 'Mix of 1950s-1970s colonials and newer luxury construction.'
    },
    coordinates: { lat: 38.9012, lng: -77.2653 },
    serviceArea: { primary: ['Vienna', 'Oakton', 'Dunn Loring'], secondary: ['McLean', 'Falls Church'] }
  },
  {
    id: 'tysons',
    name: 'Flood Doctor of Tysons',
    city: 'Tysons',
    state: 'VA',
    zipCodes: ['22102', '22182'],
    phone: '703-656-0106',
    serviceAreaLabel: 'Serving Tysons Corner, Tysons & McLean',
    dispatchNote: 'Dispatched from our central facility, with crews experienced in high-rise commercial and residential properties.',
    manager: { name: 'David K.', title: 'Tysons Branch Manager', bio: 'David manages complex high-rise and commercial restoration projects in the Tysons urban core.' },
    localHooks: {
      neighborhoods: ['Tysons Corner', 'Tysons Central', 'The Boro', 'The Mile', 'Scotts Run'],
      landmarks: ['Tysons Corner Center', 'Tysons Galleria', 'Capital One HQ'],
      commonIssues: ['High-rise condo water intrusion', 'Commercial office water damage', 'HVAC system failures'],
      architectureNotes: 'Luxury high-rise condos and Class A office buildings.'
    },
    coordinates: { lat: 38.9187, lng: -77.2311 },
    serviceArea: { primary: ['Tysons', 'Tysons Corner', 'McLean'], secondary: ['Vienna', 'Falls Church'] }
  },
  {
    id: 'reston',
    name: 'Flood Doctor of Reston',
    city: 'Reston',
    state: 'VA',
    zipCodes: ['20190', '20191', '20194'],
    phone: '703-656-0107',
    serviceAreaLabel: 'Serving Reston, Reston Town Center & South Lakes',
    dispatchNote: 'Dispatched from our central facility, with crews experienced in Reston\'s unique planned community architecture.',
    manager: { name: 'Kevin M.', title: 'Reston Branch Manager', bio: 'Kevin has worked with Reston Association and local cluster HOAs for over 15 years.' },
    localHooks: {
      neighborhoods: ['Reston Town Center', 'South Lakes', 'North Point', 'Lake Anne', 'Hunters Woods'],
      landmarks: ['Reston Town Center', 'Lake Anne Plaza', 'W&OD Trail'],
      commonIssues: ['Townhome cluster water intrusion', 'Lake-adjacent property flooding', 'HOA-regulated exterior work'],
      architectureNotes: 'Planned community with diverse housing types.'
    },
    coordinates: { lat: 38.9586, lng: -77.3570 },
    serviceArea: { primary: ['Reston', 'South Lakes', 'Lake Anne'], secondary: ['Herndon', 'Vienna'] }
  },
  {
    id: 'herndon',
    name: 'Flood Doctor of Herndon',
    city: 'Herndon',
    state: 'VA',
    zipCodes: ['20170', '20171'],
    phone: '703-656-0108',
    serviceAreaLabel: 'Serving Herndon, Dulles & Sterling',
    dispatchNote: 'Dispatched from our central facility, with crews serving the Dulles corridor.',
    manager: { name: 'Chris L.', title: 'Herndon Branch Manager', bio: 'Chris serves Herndon and the Dulles corridor, specializing in both residential and data center response.' },
    localHooks: {
      neighborhoods: ['Downtown Herndon', 'Fox Mill', 'Worldgate', 'McNair', 'Franklin Farm'],
      landmarks: ['Herndon Town Green', 'W&OD Trail', 'Dulles Airport'],
      commonIssues: ['Townhome water intrusion', 'Basement flooding in older developments', 'Commercial data center emergencies'],
      architectureNotes: 'Mix of older homes and newer developments along Dulles corridor.'
    },
    coordinates: { lat: 38.9696, lng: -77.3861 },
    serviceArea: { primary: ['Herndon', 'Dulles', 'Sterling'], secondary: ['Reston', 'Ashburn'] }
  },
  {
    id: 'ashburn',
    name: 'Flood Doctor of Ashburn',
    city: 'Ashburn',
    state: 'VA',
    zipCodes: ['20147', '20148'],
    phone: '703-656-0109',
    serviceAreaLabel: 'Serving Ashburn, Broadlands & Brambleton',
    dispatchNote: 'Dispatched from our central facility, with crews experienced in Ashburn\'s new construction communities.',
    manager: { name: 'Steve H.', title: 'Ashburn Branch Manager', bio: 'Steve specializes in new construction warranty claims and works extensively with Ashburn\'s major builders.' },
    localHooks: {
      neighborhoods: ['Broadlands', 'Brambleton', 'One Loudoun', 'Ashburn Farm', 'Lansdowne'],
      landmarks: ['One Loudoun', 'Ashburn Ice House', 'Brambleton Town Center'],
      commonIssues: ['New construction defect water intrusion', 'Builder warranty claims', 'HOA-regulated drainage issues'],
      architectureNotes: 'Primarily new construction with finished basements.'
    },
    coordinates: { lat: 39.0437, lng: -77.4875 },
    serviceArea: { primary: ['Ashburn', 'Broadlands', 'Brambleton'], secondary: ['Sterling', 'Leesburg'] }
  },
  {
    id: 'springfield',
    name: 'Flood Doctor of Springfield',
    city: 'Springfield',
    state: 'VA',
    zipCodes: ['22150', '22151', '22152', '22153'],
    phone: '703-656-0110',
    serviceAreaLabel: 'Serving Springfield, West Springfield & Franconia',
    dispatchNote: 'Dispatched from our central facility, with rapid response throughout Springfield and the I-95 corridor.',
    manager: { name: 'Tony G.', title: 'Springfield Branch Manager', bio: 'Tony has served Springfield and the I-95 corridor for over a decade.' },
    localHooks: {
      neighborhoods: ['West Springfield', 'Springfield', 'Franconia', 'Kingstowne', 'Newington'],
      landmarks: ['Springfield Town Center', 'Lake Accotink', 'Franconia-Springfield Metro'],
      commonIssues: ['1960s-70s split-level basement flooding', 'Sewer backups in older infrastructure', 'Lake Accotink area flooding'],
      architectureNotes: 'Predominantly 1960s-1980s split-levels and colonials.'
    },
    coordinates: { lat: 38.7893, lng: -77.1872 },
    serviceArea: { primary: ['Springfield', 'West Springfield', 'Franconia'], secondary: ['Burke', 'Lorton'] }
  },
  {
    id: 'fallschurch',
    name: 'Flood Doctor of Falls Church',
    city: 'Falls Church',
    state: 'VA',
    zipCodes: ['22041', '22042', '22043', '22044', '22046'],
    phone: '703-656-0111',
    serviceAreaLabel: 'Serving Falls Church, Seven Corners & Baileys Crossroads',
    dispatchNote: 'Rapid response from our nearby dispatch center, with the fastest response times in our service area.',
    manager: { name: 'Brian H.', title: 'Falls Church Branch Manager', bio: 'Brian oversees our flagship Falls Church operations.' },
    localHooks: {
      neighborhoods: ['Falls Church City', 'Seven Corners', 'Baileys Crossroads', 'Lake Barcroft', 'Pimmit Hills'],
      landmarks: ['State Theatre', 'Eden Center', 'Seven Corners Shopping Center'],
      commonIssues: ['Historic home foundation seepage', '1950s-60s home plumbing failures', 'Lake Barcroft area basement flooding'],
      architectureNotes: 'Mix of charming 1920s-1960s bungalows and colonials.'
    },
    coordinates: { lat: 38.8823, lng: -77.1711 },
    serviceArea: { primary: ['Falls Church', 'Seven Corners', 'Baileys Crossroads'], secondary: ['Arlington', 'McLean'] }
  },
  {
    id: 'greatfalls',
    name: 'Flood Doctor of Great Falls',
    city: 'Great Falls',
    state: 'VA',
    zipCodes: ['22066'],
    phone: '703-656-0112',
    serviceAreaLabel: 'Serving Great Falls, Forestville & Hickory Farms',
    dispatchNote: 'Dispatched from our central facility, with crews trained in estate property restoration.',
    manager: { name: 'William R.', title: 'Great Falls Branch Manager', bio: 'William specializes in estate property restoration and high-value asset protection.' },
    localHooks: {
      neighborhoods: ['Great Falls Village', 'Forestville', 'Hickory Farms', 'Seneca Estates', 'Riverbend'],
      landmarks: ['Great Falls Park', 'Riverbend Park', 'Georgetown Pike'],
      commonIssues: ['Estate home basement flooding', 'Pool house water damage', 'Wine cellar and art collection protection'],
      architectureNotes: 'Exclusive estate properties on 1-5+ acre lots.'
    },
    coordinates: { lat: 39.0001, lng: -77.2883 },
    serviceArea: { primary: ['Great Falls', 'Forestville'], secondary: ['McLean', 'Reston'] }
  },
  {
    id: 'lorton',
    name: 'Flood Doctor of Lorton',
    city: 'Lorton',
    state: 'VA',
    zipCodes: ['22079'],
    phone: '703-656-0113',
    serviceAreaLabel: 'Serving Lorton, Mason Neck & Laurel Hill',
    dispatchNote: 'Dispatched from our central facility, with crews covering the Route 1 corridor.',
    manager: { name: 'Mark S.', title: 'Lorton Branch Manager', bio: 'Mark serves the growing Lorton community and specializes in new development restoration.' },
    localHooks: {
      neighborhoods: ['Laurel Hill', 'Mason Neck', 'Occoquan', 'Newington', 'South County'],
      landmarks: ['Workhouse Arts Center', 'Mason Neck State Park', 'Lorton VRE Station'],
      commonIssues: ['New development drainage issues', 'Occoquan River area flooding', 'Waterfront property water intrusion'],
      architectureNotes: 'Mix of new construction and waterfront properties.'
    },
    coordinates: { lat: 38.7045, lng: -77.2275 },
    serviceArea: { primary: ['Lorton', 'Laurel Hill', 'Mason Neck'], secondary: ['Springfield', 'Woodbridge'] }
  }
];

const BASE_DOMAIN = 'flood.doctor';
const PROJECT_ROOT = path.resolve(__dirname, '..');
const DIST_CITIES_DIR = path.join(PROJECT_ROOT, 'dist-cities');

/**
 * Generate city-specific index.html with SEO meta tags and schema
 */
function generateCityIndexHtml(city: FranchiseData): string {
  const canonicalUrl = `https://${city.id}.${BASE_DOMAIN}`;
  const title = `${city.name} | 24/7 Emergency Water Damage Restoration`;
  const description = `${city.serviceAreaLabel}. 24/7 emergency water damage restoration in ${city.city}, ${city.state}. We arrive in 60 minutes. Call ${city.phone} now.`;

  // Generate LocalBusiness schema for the city
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${canonicalUrl}/#organization`,
    "name": city.name,
    "alternateName": `Flood Doctor Water Damage Restoration - ${city.city}`,
    "url": canonicalUrl,
    "logo": "https://flood.doctor/logo.png",
    "image": "https://flood.doctor/og-image.jpg",
    "description": `24/7 emergency water damage restoration, mold remediation, and fire damage cleanup serving ${city.city}, ${city.state} and surrounding areas including ${city.serviceArea.primary.join(', ')}.`,
    "telephone": city.phone,
    "email": "help@flood.doctor",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.city,
      "addressRegion": city.state,
      "postalCode": city.zipCodes[0],
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.coordinates.lat,
      "longitude": city.coordinates.lng
    },
    "areaServed": [
      ...city.serviceArea.primary.map(area => ({ "@type": "City", "name": area })),
      ...city.serviceArea.secondary.map(area => ({ "@type": "City", "name": area }))
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    },
    "sameAs": [
      "https://www.facebook.com/flooddoctor",
      "https://www.instagram.com/flooddoctor",
      "https://www.linkedin.com/company/flood-doctor"
    ]
  };

  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>${title}</title>
    <meta name="description" content="${description}" />

    <!-- Canonical URL -->
    <link rel="canonical" href="${canonicalUrl}" />

    <!-- Open Graph -->
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://flood.doctor/og-image.jpg" />
    <meta property="og:site_name" content="${city.name}" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="https://flood.doctor/og-image.jpg" />

    <!-- Geo Tags for Local SEO -->
    <meta name="geo.region" content="US-${city.state}" />
    <meta name="geo.placename" content="${city.city}" />
    <meta name="geo.position" content="${city.coordinates.lat};${city.coordinates.lng}" />
    <meta name="ICBM" content="${city.coordinates.lat}, ${city.coordinates.lng}" />

    <!-- City-specific keywords -->
    <meta name="keywords" content="water damage restoration ${city.city}, flood cleanup ${city.city}, emergency water removal ${city.city} ${city.state}, ${city.localHooks.neighborhoods.slice(0, 3).join(', ')} water damage" />

    <!-- Security: Content Security Policy -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tailwindcss.com https://esm.sh; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://esm.sh https://generativelanguage.googleapis.com; frame-ancestors 'self';">

    <!-- Organization Schema -->
    <script type="application/ld+json">
${JSON.stringify(schema, null, 2)}
    </script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Inter', 'system-ui', 'sans-serif'],
              display: ['Outfit', 'system-ui', 'sans-serif'],
            },
            colors: {
              primary: '#1a73e8',
              primaryHover: '#1557b0',
              text: '#202124',
              muted: '#5f6368',
              subtle: '#f2f2f2',
              border: '#dadce0',
              green: '#1e8e3e',
              red: '#d93025',
              yellow: '#fbbc04',
            },
            borderRadius: {
              '4xl': '32px',
            },
            boxShadow: {
              'google': '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)',
              'google-hover': '0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)',
            }
          }
        }
      }

      // Pre-set city context before app loads
      window.__FLOOD_DOCTOR_CITY__ = '${city.id}';
    </script>
    <style>
      :focus-visible {
        outline: 2px solid #1a73e8;
        outline-offset: 2px;
      }
      body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: geometricPrecision;
        font-weight: 400;
        line-height: 1.6;
        color: #202124;
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Outfit', sans-serif;
        font-weight: 500;
        color: #202124;
      }
      html {
        scroll-behavior: smooth;
        scroll-padding-top: 150px;
      }
      ::selection {
        background: rgba(26, 115, 232, 0.16);
        color: inherit;
      }
      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
        }
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }
    </style>

  <script type="importmap">
{
  "imports": {
    "react-router-dom": "https://esm.sh/react-router-dom@^7.10.1",
    "react/": "https://esm.sh/react@^19.2.3/",
    "react": "https://esm.sh/react@^19.2.3",
    "react-dom/": "https://esm.sh/react-dom@^19.2.3/",
    "lucide-react": "https://esm.sh/lucide-react@^0.560.0",
    "react-dom": "https://esm.sh/react-dom@^19.2.3",
    "@google/genai": "https://esm.sh/@google/genai@^1.34.0"
  }
}
</script>
  <!-- Assets will be linked during build -->
</head>
  <body class="bg-white text-text antialiased">
    <div id="root"></div>
  </body>
</html>`;
}

/**
 * Generate sitemap for a specific city
 */
function generateCitySitemap(city: FranchiseData): string {
  const baseUrl = `https://${city.id}.${BASE_DOMAIN}`;
  const today = new Date().toISOString().split('T')[0];

  const routes = [
    { path: '/', priority: '1.0' },
    { path: '/services', priority: '0.9' },
    { path: '/services/water-damage', priority: '0.9' },
    { path: '/services/mold-remediation', priority: '0.8' },
    { path: '/services/fire-damage', priority: '0.8' },
    { path: '/services/storm-damage', priority: '0.8' },
    { path: '/about', priority: '0.7' },
    { path: '/contact', priority: '0.8' },
    { path: '/blog', priority: '0.6' }
  ];

  const urls = routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

/**
 * Generate robots.txt for a city subdomain
 */
function generateRobotsTxt(cityId: string): string {
  return `User-agent: *
Allow: /

Sitemap: https://${cityId}.${BASE_DOMAIN}/sitemap.xml
`;
}

/**
 * Main build function
 */
async function buildAllCities(): Promise<void> {
  console.log('\\n🏗️  FLOOD DOCTOR MULTI-CITY BUILD SYSTEM');
  console.log('=========================================\\n');

  // Create dist-cities directory
  if (fs.existsSync(DIST_CITIES_DIR)) {
    console.log('📁 Cleaning existing dist-cities directory...');
    fs.rmSync(DIST_CITIES_DIR, { recursive: true });
  }
  fs.mkdirSync(DIST_CITIES_DIR, { recursive: true });

  // First, build the main app once
  console.log('\\n📦 Building main app bundle...');
  try {
    execSync('npm run build', {
      cwd: PROJECT_ROOT,
      stdio: 'inherit',
      env: { ...process.env, VITE_BUILD_MODE: 'city' }
    });
  } catch (error) {
    console.error('❌ Build failed');
    process.exit(1);
  }

  const mainDistDir = path.join(PROJECT_ROOT, 'dist');

  // Read the built assets from the main dist
  const indexHtml = fs.readFileSync(path.join(mainDistDir, 'index.html'), 'utf-8');

  // Extract the asset links from the built index.html
  const scriptMatch = indexHtml.match(/<script type="module" crossorigin src="([^"]+)">/);
  const stylesheetMatch = indexHtml.match(/<link rel="stylesheet" crossorigin href="([^"]+)">/);
  const modulePreloads = indexHtml.match(/<link rel="modulepreload" crossorigin href="([^"]+)">/g) || [];

  const mainScript = scriptMatch ? scriptMatch[1] : '';
  const mainStylesheet = stylesheetMatch ? stylesheetMatch[1] : '';
  const preloadLinks = modulePreloads.map(match => {
    const href = match.match(/href="([^"]+)"/);
    return href ? href[1] : '';
  }).filter(Boolean);

  console.log(`\\n🎯 Building ${cities.length} city sites...\\n`);

  for (const city of cities) {
    console.log(`  📍 Building ${city.city}...`);

    const cityDir = path.join(DIST_CITIES_DIR, city.id);
    const cityAssetsDir = path.join(cityDir, 'assets');
    const citySitemapsDir = path.join(cityDir, 'sitemaps');

    // Create city directory structure
    fs.mkdirSync(cityDir, { recursive: true });
    fs.mkdirSync(cityAssetsDir, { recursive: true });
    fs.mkdirSync(citySitemapsDir, { recursive: true });

    // Copy assets from main dist
    const mainAssetsDir = path.join(mainDistDir, 'assets');
    if (fs.existsSync(mainAssetsDir)) {
      const assets = fs.readdirSync(mainAssetsDir);
      for (const asset of assets) {
        fs.copyFileSync(
          path.join(mainAssetsDir, asset),
          path.join(cityAssetsDir, asset)
        );
      }
    }

    // Generate city-specific index.html
    let cityIndexHtml = generateCityIndexHtml(city);

    // Add the asset links
    const assetLinks = `
  <script type="module" crossorigin src="${mainScript}"></script>
${preloadLinks.map(link => `  <link rel="modulepreload" crossorigin href="${link}">`).join('\n')}
  <link rel="stylesheet" crossorigin href="${mainStylesheet}">
`;

    // Insert asset links before </head>
    cityIndexHtml = cityIndexHtml.replace(
      '<!-- Assets will be linked during build -->\n</head>',
      assetLinks + '</head>'
    );

    // Write city index.html
    fs.writeFileSync(path.join(cityDir, 'index.html'), cityIndexHtml);

    // Generate and write sitemap
    const sitemap = generateCitySitemap(city);
    fs.writeFileSync(path.join(cityDir, 'sitemap.xml'), sitemap);
    fs.writeFileSync(path.join(citySitemapsDir, `sitemap-${city.id}.xml`), sitemap);

    // Generate robots.txt
    const robotsTxt = generateRobotsTxt(city.id);
    fs.writeFileSync(path.join(cityDir, 'robots.txt'), robotsTxt);

    // Copy .htaccess for SPA routing
    const htaccess = `# ${city.name} - Apache Configuration
# GoDaddy Shared Hosting

# MIME Types
AddType application/javascript .js
AddType text/css .css
AddType image/svg+xml .svg
AddType application/xml .xml

RewriteEngine On
RewriteBase /

# Bypass for static assets
RewriteRule ^assets/ - [L]
RewriteRule ^sitemaps/ - [L]
RewriteRule ^robots\\.txt$ - [L]
RewriteRule ^sitemap\\.xml$ - [L]

# Serve existing files
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# SPA fallback (relative path - serves this folder's index.html)
RewriteRule ^ index.html [L]
`;
    fs.writeFileSync(path.join(cityDir, '.htaccess'), htaccess);

    console.log(`     ✅ ${city.id}.${BASE_DOMAIN} ready`);
  }

  // Generate master sitemap index
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${cities.map(city => `  <sitemap>
    <loc>https://${city.id}.${BASE_DOMAIN}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

  fs.writeFileSync(path.join(DIST_CITIES_DIR, 'sitemap-index.xml'), sitemapIndex);

  console.log('\\n=========================================');
  console.log('✅ BUILD COMPLETE');
  console.log(`\\n📊 Generated ${cities.length} city sites in dist-cities/`);
  console.log('\\nCity folders created:');
  cities.forEach(city => {
    console.log(`  - dist-cities/${city.id}/`);
  });
  console.log('\\n🚀 Ready for deployment to GoDaddy subdomains');
}

// Run the build
buildAllCities().catch(console.error);
