# City Subdomain Prerender Migration

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Convert all 13 city subdomains from SPA-only shells to fully prerendered static sites with real 404 handling.

**Architecture:** City sites use a separate Vite entry (`city.html` → `city.tsx` → `CityApp.tsx`) built in two phases: Vite compiles the bundle to `dist-city/`, then `build-cities.ts` generates 13 per-city folders in `dist-cities/`. This plan adds prerendering by extending the existing `prerender.ts` with a `--cities` mode, fixing a critical service slug bug, adding hydration, and replacing SPA fallback with real 404s.

**Tech Stack:** Vite, React 19, Playwright, React Router, Apache .htaccess

---

## Current State

```
city.html → Vite → dist-city/ (shared bundle)
                         ↓
              build-cities.ts → dist-cities/{city}/ (13 folders)
                                  ├── index.html (SPA shell only)
                                  ├── .htaccess (SPA fallback → soft 404!)
                                  ├── assets/ (copied from dist-city)
                                  ├── sitemap.xml (hardcoded 9 routes)
                                  └── robots.txt
```

**Problems:**
1. No prerendering — every city URL serves same `index.html` SPA shell
2. SPA fallback in `.htaccess`: nonexistent URLs return 200 (soft 404, hurts SEO)
3. `city.tsx` uses `createRoot` only — no hydration after prerender
4. 3 city page components missing PageMeta (`__PRERENDER_READY__` signal)
5. `CityServiceDetail.tsx` has a critical slug matching bug — all 29 service pages redirect to `/services/`
6. Sitemap hardcodes 9 routes instead of enumerating all ~50-55

## Target State

```
city.html → Vite → dist-city/ (shared bundle)
                         ↓
              build-cities.ts → dist-cities/{city}/ (13 folders)
                                  ├── index.html (prerendered homepage)
                                  ├── services/index.html
                                  ├── services/{slug}/index.html (×29)
                                  ├── blog/index.html
                                  ├── blog/{slug}/index.html (×3-5)
                                  ├── neighborhoods/{slug}/index.html (×5-6)
                                  ├── about/index.html
                                  ├── contact/index.html
                                  ├── request/index.html
                                  ├── guides/*/index.html (×3)
                                  ├── 404.html (static, no JS)
                                  ├── .htaccess (real 404, NO SPA fallback)
                                  ├── assets/
                                  ├── sitemap.xml (all routes)
                                  └── robots.txt
```

**~50-55 routes per city × 13 cities = ~650-715 prerendered pages**

---

## Hard Constraints

- Do NOT change framework, routing paradigm, or deploy structure
- Do NOT touch main domain build pipeline (`npm run build`)
- Do NOT modify `config/routes.ts` (main domain routes)
- Do NOT touch `pages/fd-home-v4/*`
- Do NOT change how `deploy-cities.sh` pushes files
- Keep `build-cities.ts` as the city site generator
- Service slugs come from `data/services.ts` (same 29 services as main domain)
- Blog/neighborhood slugs come from `src/content/cities/{city}/` filesystem

---

## PageMeta Audit (Pre-Verified)

Which city route components already have the `__PRERENDER_READY__` signal?

| CityApp Route | City-App Wrapper | Delegates To | Has PageMeta? | Action |
|---|---|---|---|---|
| `/` | CityHome | CityLandingNew | ✅ (line 93) | None |
| `/services/` | CityServicesHub | ServicesHub | ✅ (line 455) | None |
| `/services/:serviceSlug/` | CityServiceDetail | ServiceDetailNew | ✅ (line 173) | None (fix slug bug separately) |
| `/blog/` | CityBlogIndex | DynamicBlogIndex | ❌ | **Add PageMeta** |
| `/blog/:slug/` | CityBlogArticle | DynamicBlogArticle | ❌ | **Add PageMeta** |
| `/neighborhoods/:neighborhood/` | CityNeighborhood | DynamicNeighborhoodPage | ❌ | **Add PageMeta** |
| `/about/` | CityAbout | (self) | ✅ | None |
| `/contact/` | CityContact | (self) | ✅ | None |
| `/request/` | CityRequest | RequestService | ✅ (line 136) | None |
| `/guides/emergency-response/` | CityEmergencyGuide | (self) | ✅ (line 205) | None |
| `/guides/prevention/` | CityPreventionGuide | (self) | ✅ (line 234) | None |
| `/guides/insurance-claims/` | CityInsuranceGuide | (self) | ✅ (line 222) | None |
| `/sign/` | WorkAuthorization | (self) | ✅ (line 1593) | None |
| `/contract/` | WorkAuthorization | (self) | ✅ | None |
| `/faq/` | FAQ | (self) | ✅ (line 22) | None |

**Only 3 components need PageMeta added:** `DynamicBlogIndex`, `DynamicBlogArticle`, `DynamicNeighborhoodPage`

---

## CSS Dual-Source Note

`city.tsx` imports `index.css` (which has `@tailwind base/components/utilities` processed by Vite/PostCSS). Simultaneously, `build-cities.ts` generates HTML with `<script src="https://cdn.tailwindcss.com">`. Both produce Tailwind CSS output. During prerender, Playwright loads both — the Vite-compiled CSS is authoritative for rendering; CDN Tailwind is redundant but harmless. Resolving this dual-source (removing CDN Tailwind from `build-cities.ts`) is a separate effort — not in scope for this plan.

---

## Task 1: Fix CityServiceDetail Slug Matching (CRITICAL)

**Files:**
- Modify: `pages/city-app/CityServiceDetail.tsx` (lines 20-24)

**What:** The slug matching logic is completely broken. `CityApp.tsx` routes `/services/:serviceSlug/` which captures a single segment like `mold-remediation`. But `SERVICES[].slug` contains full nested paths like `/services/residential/cleanup-services/mold-remediation/`. None of the 3 comparisons in the `find()` can ever match. All 29 service detail pages silently redirect to `/services/`.

**Current (broken):**
```typescript
const service = SERVICES.find(s =>
  s.slug === `/services/${serviceSlug}/` ||  // NEVER matches — slug is nested 4-segment path
  s.slug === serviceSlug ||                   // NEVER matches — slug has no leading /services/
  s.id === serviceSlug                        // NEVER matches — id format is "res-odor" not "odor-removal"
);
```

**Step 1: Write the fix**

Replace lines 20-24 of `pages/city-app/CityServiceDetail.tsx` with:

```typescript
// CityApp route captures single segment: /services/:serviceSlug/
// SERVICES[].slug is a nested path like "/services/residential/cleanup-services/mold-remediation/"
// Match by extracting the last segment from each service's slug
const service = SERVICES.find(s => {
  const segments = s.slug.split('/').filter(Boolean);
  const lastSegment = segments[segments.length - 1];
  return lastSegment === serviceSlug;
});
```

**Step 2: Verify no duplicate last-segments exist**

Run: `npx tsx -e "
const { SERVICES } = require('./data/services');
const slugs = SERVICES.map(s => s.slug.split('/').filter(Boolean).pop());
const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
console.log('Total services:', slugs.length);
console.log('Duplicates:', dupes.length ? dupes : 'NONE');
"`

Expected: 29 services, 0 duplicates. If duplicates exist, add secondary matching on category.

**Step 3: Build check**

Run: `npm run build:city`

Expected: Build succeeds with no errors.

**Step 4: Commit**

```bash
git add pages/city-app/CityServiceDetail.tsx
git commit -m "fix(cities): fix service slug matching in CityServiceDetail

Service slugs are nested paths (e.g., /services/residential/cleanup-services/mold-remediation/)
but CityApp route captures single segment (:serviceSlug = mold-remediation).
Match by comparing against the last path segment of each service slug.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 2: Add PageMeta to 3 Delegate Components

**Files:**
- Modify: `pages/city/DynamicBlogIndex.tsx`
- Modify: `pages/city/DynamicBlogArticle.tsx`
- Modify: `pages/city/DynamicNeighborhoodPage.tsx`

**What:** These 3 components are the actual renderers for city blog/neighborhood pages. They don't import PageMeta, so `window.__PRERENDER_READY__` never fires. Prerender will hang 15s and timeout on these routes.

**Step 1: Add PageMeta to DynamicBlogIndex**

Add import at top:
```typescript
import PageMeta from '@/components/ui/PageMeta';
```

Add inside the component's return JSX (before existing content):
```tsx
<PageMeta
  title={`${cityName} Water Damage Blog`}
  description={`Water damage restoration tips, guides, and local insights for ${cityName}, Virginia homeowners.`}
/>
```

Use the existing city name variable from the component's context/props.

**Step 2: Add PageMeta to DynamicBlogArticle**

Add import at top:
```typescript
import PageMeta from '@/components/ui/PageMeta';
```

Add inside the component's return JSX with article-specific meta:
```tsx
<PageMeta
  title={article.title}
  description={article.excerpt || article.description || `${article.title} - ${cityName} water damage insights`}
/>
```

Use the article data the component already loads.

**Step 3: Add PageMeta to DynamicNeighborhoodPage**

Add import at top:
```typescript
import PageMeta from '@/components/ui/PageMeta';
```

Add inside the component's return JSX:
```tsx
<PageMeta
  title={`Water Damage Restoration in ${neighborhoodName}, ${cityName}`}
  description={`Professional water damage restoration, mold remediation, and flood cleanup services in ${neighborhoodName}, ${cityName}, Virginia.`}
/>
```

Use the neighborhood/city data the component already loads.

**Step 4: Build check**

Run: `npm run build:city`

Expected: Build succeeds.

**Step 5: Commit**

```bash
git add pages/city/DynamicBlogIndex.tsx pages/city/DynamicBlogArticle.tsx pages/city/DynamicNeighborhoodPage.tsx
git commit -m "feat(cities): add PageMeta to blog and neighborhood components for prerender signal

DynamicBlogIndex, DynamicBlogArticle, and DynamicNeighborhoodPage were the only
3 city page components missing PageMeta. Without it, __PRERENDER_READY__ never
fires and prerender hangs until timeout.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 3: Add Hydration Support to City Entry Point

**Files:**
- Modify: `city.tsx` (lines 25-30)

**What:** After prerendering, `#root` will contain rendered HTML. The client JS must use `hydrateRoot` to attach event listeners without wiping the DOM. Currently `city.tsx` always uses `createRoot`, which discards prerendered content and re-renders from scratch (causing a flash).

**Step 1: Replace createRoot with hydration-aware pattern**

Replace lines 25-30 of `city.tsx`:

```typescript
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <CityApp />
  </React.StrictMode>
);
```

With:

```typescript
// Prerendered pages have content in #root → hydrateRoot preserves DOM
// SPA fallback (empty #root) → createRoot renders from scratch
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <CityApp />
    </React.StrictMode>
  );
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <CityApp />
    </React.StrictMode>
  );
}
```

**Step 2: Build check**

Run: `npm run build:city`

Expected: Build succeeds. This is purely a runtime change.

**Step 3: Commit**

```bash
git add city.tsx
git commit -m "feat(cities): add hydrateRoot support for prerendered city pages

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 4: Extend Prerender Script with `--cities` Mode

**Files:**
- Modify: `scripts/prerender.ts`

**What:** Add a `--cities` flag to the existing prerender script. When invoked with `--cities`, it iterates over all 13 city folders in `dist-cities/`, enumerates routes inline (no separate route registry file needed), and prerenders each route using the same Playwright concurrency pool.

**Why extend prerender.ts instead of a new file:** The reviewers identified that a separate `prerender-cities.ts` would duplicate the server, rendering, and concurrency logic. The existing script is 223 lines and well-structured. Adding a `--cities` mode keeps one prerender engine.

**Step 1: Add route enumeration functions at the top of prerender.ts**

After the existing imports, add:

```typescript
import { SERVICES } from '../data/services';

// ── City route enumeration (used in --cities mode) ─────────────────────────

function getCityRoutes(cityId: string): string[] {
  const staticRoutes = [
    '/',
    '/services/',
    '/about/',
    '/contact/',
    '/request/',
    '/blog/',
    '/faq/',
    '/sign/',
    '/contract/',
    '/guides/emergency-response/',
    '/guides/prevention/',
    '/guides/insurance-claims/',
  ];

  // Service routes: extract last segment from nested slug paths
  const serviceRoutes = SERVICES.map(s => {
    const segments = s.slug.split('/').filter(Boolean);
    return `/services/${segments[segments.length - 1]}/`;
  });

  // Blog routes from filesystem
  const blogDir = path.resolve(process.cwd(), `src/content/cities/${cityId}/blog`);
  const blogRoutes = fs.existsSync(blogDir)
    ? fs.readdirSync(blogDir)
        .filter(f => f.endsWith('.ts') && f !== 'index.ts')
        .map(f => `/blog/${f.replace('.ts', '')}/`)
    : [];

  // Neighborhood routes from filesystem
  const neighborhoodDir = path.resolve(process.cwd(), `src/content/cities/${cityId}/neighborhoods`);
  const neighborhoodRoutes = fs.existsSync(neighborhoodDir)
    ? fs.readdirSync(neighborhoodDir)
        .filter(f => f.endsWith('.ts') && f !== 'index.ts')
        .map(f => `/neighborhoods/${f.replace('.ts', '')}/`)
    : [];

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...neighborhoodRoutes];
}

const ALL_CITY_IDS = [
  'mclean', 'arlington', 'alexandria', 'fairfax', 'vienna',
  'tysons', 'reston', 'herndon', 'ashburn', 'springfield',
  'fallschurch', 'greatfalls', 'lorton',
] as const;
```

**Step 2: Add the city prerender function**

Add below `processRoutes`:

```typescript
// ── City prerender mode ─────────────────────────────────────────────────────

function startCityServer(cityDistDir: string, spaShellHtml: string, port: number): Promise<http.Server> {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const urlPath = req.url?.split('?')[0] || '/';
      const filePath = path.join(cityDistDir, urlPath);

      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const mimeTypes: Record<string, string> = {
          '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
          '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
          '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
          '.xml': 'application/xml', '.txt': 'text/plain',
        };
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
        fs.createReadStream(filePath).pipe(res);
        return;
      }

      const dirIndex = path.join(filePath, 'index.html');
      if (fs.existsSync(dirIndex) && fs.statSync(dirIndex).isFile()) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(dirIndex).pipe(res);
        return;
      }

      // SPA fallback during prerender
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(spaShellHtml);
    });

    server.on('error', reject);
    server.listen(port, () => resolve(server));
  });
}

async function renderCityRoute(page: Page, route: string, cityDistDir: string, origin: string, port: number): Promise<RenderResult> {
  const url = `http://localhost:${port}${route}`;
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction('window.__PRERENDER_READY__ === true', { timeout: TIMEOUT_MS });

    let html = await page.content();
    html = html.replace(new RegExp(`http://localhost:${port}`, 'g'), origin);

    let outPath: string;
    if (route === '/') {
      outPath = path.join(cityDistDir, 'index.html');
    } else {
      const cleanRoute = route.endsWith('/') ? route : `${route}/`;
      const dir = path.join(cityDistDir, cleanRoute);
      fs.mkdirSync(dir, { recursive: true });
      outPath = path.join(dir, 'index.html');
    }

    fs.writeFileSync(outPath, html, 'utf-8');
    const fileSize = Buffer.byteLength(html, 'utf-8');
    return { route, success: true, fileSize };
  } catch (err: any) {
    return { route, success: false, error: err.message };
  }
}

async function prerenderCity(browser: Browser, cityId: string, port: number): Promise<{ cityId: string; results: RenderResult[] }> {
  const cityDistDir = path.resolve(process.cwd(), `dist-cities/${cityId}`);
  const origin = `https://${cityId}.flood.doctor`;
  const routes = getCityRoutes(cityId);

  if (!fs.existsSync(cityDistDir)) {
    console.error(`  ❌ dist-cities/${cityId}/ not found. Run build:cities first.`);
    return { cityId, results: [] };
  }

  const spaShellHtml = fs.readFileSync(path.join(cityDistDir, 'index.html'), 'utf-8');

  // Reorder: homepage last
  const reorderedRoutes = [...routes.filter(r => r !== '/'), '/'];

  console.log(`\n  📍 ${cityId} (${reorderedRoutes.length} routes)`);

  const server = await startCityServer(cityDistDir, spaShellHtml, port);
  const results: RenderResult[] = [];
  let index = 0;

  async function worker() {
    const context = await browser.newContext();
    const page = await context.newPage();
    while (index < reorderedRoutes.length) {
      const currentIndex = index++;
      const route = reorderedRoutes[currentIndex];
      const result = await renderCityRoute(page, route, cityDistDir, origin, port);
      results.push(result);
      const status = result.success ? '\x1b[32m OK\x1b[0m' : '\x1b[31mFAIL\x1b[0m';
      const sizeInfo = result.fileSize ? ` (${(result.fileSize / 1024).toFixed(1)}KB)` : '';
      const errorInfo = result.error ? ` - ${result.error.substring(0, 80)}` : '';
      console.log(`    [${results.length}/${reorderedRoutes.length}] ${status} ${route}${sizeInfo}${errorInfo}`);
    }
    await context.close();
  }

  const workers = Array.from({ length: Math.min(CONCURRENCY, reorderedRoutes.length) }, () => worker());
  await Promise.all(workers);
  server.close();

  return { cityId, results };
}

async function mainCities() {
  const distCitiesDir = path.resolve(process.cwd(), 'dist-cities');
  if (!fs.existsSync(distCitiesDir)) {
    console.error('Error: dist-cities/ not found. Run "npm run build:cities" first.');
    process.exit(1);
  }

  const totalRoutes = ALL_CITY_IDS.reduce((sum, id) => sum + getCityRoutes(id).length, 0);
  console.log(`\n  Pre-rendering ${totalRoutes} routes across ${ALL_CITY_IDS.length} cities...\n`);

  const browser = await chromium.launch({ headless: true });
  console.log(`  Chromium launched (${CONCURRENCY} concurrent tabs per city)\n`);

  const startTime = Date.now();
  const allResults: RenderResult[] = [];
  const CITY_PORT = PORT + 1; // Use different port than main prerender

  for (const cityId of ALL_CITY_IDS) {
    const { results } = await prerenderCity(browser, cityId, CITY_PORT);
    allResults.push(...results);
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  await browser.close();

  const succeeded = allResults.filter(r => r.success);
  const failed = allResults.filter(r => !r.success);

  console.log(`\n  Done in ${elapsed}s`);
  console.log(`  Succeeded: ${succeeded.length}/${allResults.length}`);

  if (failed.length > 0) {
    console.log(`\n  FAILED ROUTES:`);
    for (const f of failed) {
      console.log(`    ${f.route} — ${f.error}`);
    }
    process.exit(1);
  }

  console.log(`\n  All city routes pre-rendered successfully.\n`);
}
```

**Step 3: Update the main() dispatch**

Replace the existing `main().catch(...)` at the bottom with:

```typescript
// ── CLI dispatch ─────────────────────────────────────────────────────────────

const isCitiesMode = process.argv.includes('--cities');

if (isCitiesMode) {
  mainCities().catch(err => {
    console.error('City pre-render failed:', err);
    process.exit(1);
  });
} else {
  main().catch(err => {
    console.error('Pre-render failed:', err);
    process.exit(1);
  });
}
```

**Step 4: Build check**

Run: `npx tsx scripts/prerender.ts --cities --help 2>&1 | head -1`

This just verifies the script parses without import errors. Actual prerender requires `dist-cities/` to exist.

**Step 5: Commit**

```bash
git add scripts/prerender.ts
git commit -m "feat(cities): add --cities mode to prerender script

Extends existing prerender.ts with city subdomain support. Enumerates routes
inline from SERVICES data + filesystem content. Iterates all 13 cities
sequentially, 5 concurrent Playwright tabs per city.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 5: Replace SPA Fallback with Real 404

**Files:**
- Modify: `scripts/build-cities.ts` (lines 648-674 — .htaccess template)
- Modify: `scripts/build-cities.ts` (add `generate404Html` function)

**What:** Two changes in one task:
1. Generate a static `404.html` for each city
2. Replace the SPA fallback `.htaccess` rule with real 404 handling + trailing-slash enforcement

**Step 1: Add generate404Html function**

Add this function near the other generators in `build-cities.ts`:

```typescript
function generate404Html(city: FranchiseData): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Not Found — ${city.name}</title>
  <style>
    body { font-family: 'Inter', system-ui, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #f8f9fa; color: #202124; }
    .container { text-align: center; max-width: 480px; padding: 2rem; }
    h1 { font-size: 4rem; font-weight: 600; color: #1a73e8; margin: 0; }
    p { font-size: 1.125rem; color: #5f6368; line-height: 1.6; }
    a { color: #1a73e8; text-decoration: none; font-weight: 500; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    <h1>404</h1>
    <p>This page doesn't exist.</p>
    <p><a href="/">Return to ${city.city} homepage</a></p>
  </div>
</body>
</html>`;
}
```

**Step 2: Write 404.html in the city build loop**

In the main `buildAllCities()` function, after the robots.txt write (line 646), add:

```typescript
// Generate 404.html
const html404 = generate404Html(city);
fs.writeFileSync(path.join(cityDir, '404.html'), html404);
```

**Step 3: Replace .htaccess template**

Replace lines 648-674 of `build-cities.ts` (the entire htaccess string) with:

```typescript
    const htaccess = `# ${city.name} - Apache Configuration
# Prerendered static site — NO SPA fallback

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

# Serve existing files directly
RewriteCond %{REQUEST_FILENAME} -f
RewriteRule ^ - [L]

# Serve existing directories (with index.html)
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Enforce trailing slash for clean URLs
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_URI} !/$
RewriteRule ^(.+)$ /$1/ [R=301,L]

# Real 404 for anything not matched
ErrorDocument 404 /404.html
RewriteRule ^ - [R=404,L]
`;
```

**Step 4: Build check**

Run: `npm run build:city && npx tsx scripts/build-cities.ts`

Then verify:
- `cat dist-cities/mclean/.htaccess | grep -c "index.html"` → should be `0` (no SPA fallback)
- `cat dist-cities/mclean/.htaccess | grep "ErrorDocument"` → should show `ErrorDocument 404 /404.html`
- `ls dist-cities/mclean/404.html` → should exist

**Step 5: Commit**

```bash
git add scripts/build-cities.ts
git commit -m "fix(cities): replace SPA fallback with real 404 handling

Generate static 404.html per city. Replace 'RewriteRule ^ index.html [L]'
with ErrorDocument 404 + trailing-slash enforcement. Nonexistent URLs now
return proper HTTP 404 instead of soft 200.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 6: Wire into Build Pipeline + Update Sitemap

**Files:**
- Modify: `package.json` (scripts section)
- Modify: `scripts/build-cities.ts` (replace `generateCitySitemap` function, lines 507-534)

**What:** Three changes:
1. Add `prerender:cities` npm script
2. Update `build:cities` to include prerender step
3. Replace hardcoded 9-route sitemap with full route enumeration

**Step 1: Add npm scripts to package.json**

Add after the existing `prerender:verify` line:

```json
"prerender:cities": "npx tsx scripts/prerender.ts --cities",
```

Update the existing `build:cities` line to:

```json
"build:cities": "npm run build:city && npx tsx scripts/build-cities.ts && npm run prerender:cities",
```

**Step 2: Replace generateCitySitemap in build-cities.ts**

Replace the `generateCitySitemap` function (lines 507-534) with:

```typescript
function generateCitySitemap(city: FranchiseData): string {
  const baseUrl = `https://${city.id}.${BASE_DOMAIN}`;
  const today = new Date().toISOString().split('T')[0];

  // Static routes with priorities
  const staticRoutes = [
    { path: '/', priority: '1.0' },
    { path: '/services/', priority: '0.9' },
    { path: '/about/', priority: '0.7' },
    { path: '/contact/', priority: '0.8' },
    { path: '/request/', priority: '0.7' },
    { path: '/blog/', priority: '0.6' },
    { path: '/faq/', priority: '0.5' },
    { path: '/guides/emergency-response/', priority: '0.6' },
    { path: '/guides/prevention/', priority: '0.6' },
    { path: '/guides/insurance-claims/', priority: '0.6' },
  ];

  // Service detail routes
  const serviceRoutes = SERVICES.map(s => {
    const segments = s.slug.split('/').filter(Boolean);
    return { path: `/services/${segments[segments.length - 1]}/`, priority: '0.8' };
  });

  // Blog article routes from filesystem
  const blogDir = path.resolve(__dirname, `../src/content/cities/${city.id}/blog`);
  const blogRoutes = fs.existsSync(blogDir)
    ? fs.readdirSync(blogDir)
        .filter(f => f.endsWith('.ts') && f !== 'index.ts')
        .map(f => ({ path: `/blog/${f.replace('.ts', '')}/`, priority: '0.6' }))
    : [];

  // Neighborhood routes from filesystem
  const neighborhoodDir = path.resolve(__dirname, `../src/content/cities/${city.id}/neighborhoods`);
  const neighborhoodRoutes = fs.existsSync(neighborhoodDir)
    ? fs.readdirSync(neighborhoodDir)
        .filter(f => f.endsWith('.ts') && f !== 'index.ts')
        .map(f => ({ path: `/neighborhoods/${f.replace('.ts', '')}/`, priority: '0.7' }))
    : [];

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...neighborhoodRoutes];

  const urls = allRoutes.map(route => `  <url>
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
```

Also add the SERVICES import at the top of `build-cities.ts` (if not already present):

```typescript
import { SERVICES } from '../data/services';
```

**Step 3: Full build test**

Run: `npm run build:cities`

This will:
1. Build city bundle (`build:city`)
2. Generate 13 city folders (`build-cities.ts`)
3. Prerender all routes (`prerender.ts --cities`)

**Step 4: Inline verification**

After build completes, verify:

```bash
# Check a prerendered service page exists and has content
wc -c dist-cities/mclean/services/water-damage-restoration/index.html
# Expected: >5000 bytes (not an empty shell)

# Check sitemap has all routes
grep -c '<url>' dist-cities/mclean/sitemap.xml
# Expected: ~50-55 (not 9)

# Check 404.html exists
ls dist-cities/mclean/404.html
# Expected: exists

# Check .htaccess has no SPA fallback
grep "index.html" dist-cities/mclean/.htaccess
# Expected: no output (no SPA fallback line)

# Check homepage was prerendered
grep -c "root" dist-cities/mclean/index.html | head -1
# Should contain rendered content in #root
```

**Step 5: Commit**

```bash
git add package.json scripts/build-cities.ts
git commit -m "feat(cities): wire prerender into build pipeline + full sitemap

Add prerender:cities npm script. Update build:cities to run prerender after
generating city folders. Replace hardcoded 9-route sitemap with full route
enumeration from SERVICES data + filesystem content (~50-55 routes per city).

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Risk Notes

1. **CDN Tailwind during prerender:** Playwright will fetch `cdn.tailwindcss.com` during prerender (~715 pages). If CDN is slow, prerender time increases. If CDN is down, prerender fails. Mitigation: the Vite-compiled CSS in the bundle is the authoritative source; CDN Tailwind is redundant. Removing it is a separate effort.

2. **Prerender time estimate:** ~55 routes × 13 cities = ~715 pages at ~0.5-1s each with 5 concurrent tabs = ~2-4 minutes total. Acceptable for a build step.

3. **Trailing slash enforcement:** The `.htaccess` rule redirects `/about` → `/about/`. This assumes all prerendered files live at `{route}/index.html`. Verify Apache serves `/about/` by looking for `/about/index.html` (it does this by default with `DirectoryIndex`).

4. **Dynamic content timing:** Some city pages may load content asynchronously. PageMeta's `__PRERENDER_READY__` fires after the component mounts. If content arrives later via async fetch, prerender captures the loading state. Verify after Task 2 that the 3 new PageMeta additions fire AFTER content is available.
