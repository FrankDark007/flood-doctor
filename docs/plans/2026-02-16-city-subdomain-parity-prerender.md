# City Subdomain Parity & Prerender Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Convert all 13 city subdomain builds from SPA-fallback architecture to prerendered static sites with real 404 handling, matching the main domain's proven build/prerender/meta patterns.

**Architecture:** Migrate city builds from CDN Tailwind + esm.sh importmaps + `createRoot` to Vite-bundled assets + `hydrateRoot`. Create a city route registry in `config/routes.ts`, extend the Playwright prerender engine to city builds, and replace `.htaccess` SPA fallback with `ErrorDocument 404`.

**Tech Stack:** Vite (dual build mode), React 19, Playwright (prerender), Apache `.htaccess`, TypeScript build scripts

---

## Current State vs Target State

### Main Domain (flood.doctor) — THE GOLD STANDARD
| Aspect | Implementation |
|--------|---------------|
| Entry | `index.html` → `index.tsx` → `App.tsx` |
| CSS | Tailwind bundled by Vite via `index.css` + PostCSS |
| JS deps | All bundled by Vite (react, react-dom, react-router-dom, lucide-react) |
| Hydration | `index.tsx` line 13: `hydrateRoot` when `rootElement.hasChildNodes()`, else `createRoot` |
| Meta/SEO | `PageMeta.tsx` sets title, canonical, OG, schema; signals `__PRERENDER_READY__ = true` |
| Route registry | `config/routes.ts` → `ALL_PRERENDER_ROUTES` (189 routes) |
| Prerender | `scripts/prerender.ts`: Playwright, 5 concurrent tabs, 15s timeout, waits for `__PRERENDER_READY__` |
| 404 handling | `.htaccess` line 152: `RewriteRule ^ - [R=404,L]` — any unmatched route = real HTTP 404 |
| Build chain | `vite build` → `generate:sitemaps` → `prerender` |

### City Subdomains (mclean.flood.doctor etc.) — CURRENT BROKEN STATE
| Aspect | Implementation | Problem |
|--------|---------------|---------|
| Entry | `city.html` → `city.tsx` → `CityApp.tsx` | Separate HTML template with **CDN Tailwind + esm.sh importmap** |
| CSS | `<script src="https://cdn.tailwindcss.com">` in `generateCityIndexHtml()` (build-cities.ts:411) | Runtime JIT, not bundled; FOUC, no tree-shaking, CDN dependency |
| JS deps | importmap to `esm.sh` (build-cities.ts:484-495) + Vite bundle | **Double loading**: esm.sh imports in HTML + Vite-bundled React in JS |
| Hydration | `city.tsx` line 25: `createRoot` only (no hydration) | Prerendered HTML would be destroyed and re-rendered |
| Meta/SEO | Only `CityAbout.tsx` and `CityContact.tsx` use `PageMeta`; other pages (Home, Services, Blog, Neighborhoods) do NOT | No `__PRERENDER_READY__` signal on most city pages |
| Route registry | None — `CityApp.tsx` uses dynamic `:param` routes | No enumeration of valid URLs; can't prerender |
| Prerender | Not implemented for cities | All city pages are client-rendered only |
| 404 handling | `.htaccess` SPA fallback: `RewriteRule ^ index.html [L]` (build-cities.ts:673) | **Soft 404** — every URL returns 200 with SPA shell |
| Build chain | `build:city` (Vite) → `build-cities.ts` (generate HTML per city) | No prerender step |

---

## Approach Decision: Extend City Build vs Reuse Main Build

### Option A: Fix City Build In-Place (CHOSEN ✅)
- Keep `city.html` / `city.tsx` / `CityApp.tsx` as separate entry point
- Fix `generateCityIndexHtml()` to stop emitting CDN Tailwind + esm.sh
- Rely on Vite-bundled CSS/JS already being injected (build-cities.ts:624-628)
- Add city route registry, PageMeta to all city pages, hydrateRoot, prerender

**Pros:**
- Smaller diff — city app already works, just needs cleanup
- City bundle is smaller than main bundle (no location pages, landing pages, blog posts)
- Independent deploys: city build failures don't block main domain
- City-specific Vite chunking already configured (vite.config.ts:69-74)

**Cons:**
- Two build pipelines to maintain
- City CSS classes must match main domain's Tailwind config

### Option B: Single Build with City Mode Flag
- Remove `CityApp.tsx`, put city routes in `App.tsx` behind a build-time flag
- Single Vite build serves both, prerender handles all routes

**Pros:** One build, one prerender, one route registry
**Cons:** Main bundle grows by ~50KB (city components). City deploy couples to main deploy. Massive diff. Risk of breaking 189 working main routes.

### Why Option A:
The city build already produces Vite-bundled JS/CSS. The `generateCityIndexHtml()` function **also** emits CDN Tailwind and esm.sh, but these are redundant — the Vite build output already includes bundled React and Tailwind. The fix is surgical: remove the CDN/esm.sh from the generated HTML, and the Vite assets (already injected at build-cities.ts:631) will be the sole source. This is a ~20-line change in `generateCityIndexHtml()`, not an architecture rewrite.

---

## Phase 1: City Route Registry

**Goal:** Enumerate every valid URL for every city subdomain so the prerender script knows what to render.

### Task 1: Add `CITY_PRERENDER_ROUTES` to `config/routes.ts`

**Files:**
- Modify: `config/routes.ts`

**What to build:**

A function `getCityRoutes(citySlug: string): string[]` that returns all valid routes for a given city. Sources:

| Route Pattern | Source | Count per city |
|---------------|--------|---------------|
| `/` | Static | 1 |
| `/services/` | Static | 1 |
| `/services/{slug}/` | `CITY_SERVICES` array (config/routes.ts:265-274) | 8 |
| `/neighborhoods/{slug}/` | `CITY_NEIGHBORHOODS[citySlug]` (config/routes.ts:276-290) | 5-6 |
| `/blog/` | Static | 1 |
| `/blog/{slug}/` | `CITY_BLOG_ARTICLES[citySlug]` (config/routes.ts:292-374) | 3-5 |
| `/about/` | Static | 1 |
| `/contact/` | Static | 1 |
| `/request/` | Static | 1 |
| `/guides/emergency-response/` | Static | 1 |
| `/guides/prevention/` | Static | 1 |
| `/guides/insurance-claims/` | Static | 1 |
| `/faq/` | Static | 1 |

**Expected total:** ~23-25 routes per city × 13 cities = ~300-325 total city routes.

```typescript
// Add to config/routes.ts

export const CITY_STATIC_ROUTES: string[] = [
  '/',
  '/services/',
  '/about/',
  '/contact/',
  '/request/',
  '/blog/',
  '/guides/emergency-response/',
  '/guides/prevention/',
  '/guides/insurance-claims/',
  '/faq/',
];

export function getCityRoutes(citySlug: string): string[] {
  const routes = [...CITY_STATIC_ROUTES];

  // Services
  for (const svc of CITY_SERVICES) {
    routes.push(`/services/${svc}/`);
  }

  // Neighborhoods
  const neighborhoods = CITY_NEIGHBORHOODS[citySlug] || [];
  for (const n of neighborhoods) {
    routes.push(`/neighborhoods/${n}/`);
  }

  // Blog articles
  const articles = CITY_BLOG_ARTICLES[citySlug] || [];
  for (const a of articles) {
    routes.push(`/blog/${a}/`);
  }

  return routes;
}

export function getAllCityRoutes(): { city: string; routes: string[] }[] {
  return CITY_SUBDOMAINS.map(c => ({
    city: c.slug,
    routes: getCityRoutes(c.slug),
  }));
}
```

**Validation:** After implementation, run a quick count:
```bash
npx tsx -e "
  import { getAllCityRoutes } from './config/routes';
  const all = getAllCityRoutes();
  let total = 0;
  for (const { city, routes } of all) {
    console.log(city + ': ' + routes.length + ' routes');
    total += routes.length;
  }
  console.log('Total: ' + total);
"
```

**Checkpoint:** Expected ~300-325 routes total. Each city should have 20-25 routes.

---

## Phase 2: Clean Up City HTML Generation (Remove CDN/esm.sh)

**Goal:** The generated `index.html` for each city should look like the main domain's — no CDN Tailwind, no esm.sh importmaps. Only Vite-bundled assets.

### Task 2: Strip CDN Tailwind and esm.sh from `generateCityIndexHtml()`

**Files:**
- Modify: `scripts/build-cities.ts`

**What to remove from `generateCityIndexHtml()` (lines 365-501):**

1. **CDN Tailwind** (line 411): `<script src="https://cdn.tailwindcss.com"></script>`
2. **Tailwind config block** (lines 412-443): The entire `tailwind.config = { ... }` script
3. **importmap** (lines 484-495): The entire `<script type="importmap">` block
4. **CSP policy** (line 400): Remove `https://cdn.tailwindcss.com https://esm.sh` from script-src; remove `https://esm.sh` from connect-src. Match main domain CSP from `index.html` line 11.

**What to keep:**
- All meta tags (title, description, canonical, OG, Twitter, geo, keywords)
- LocalBusiness schema
- Font preconnects and Google Fonts link
- `window.__FLOOD_DOCTOR_CITY__` injection
- Base styles (`:focus-visible`, body, heading, scroll, selection, reduced-motion)
- `<!-- Assets will be linked during build -->` placeholder (used by build-cities.ts:631)

**Also update `city.html`** (the Vite dev entry point):
- Remove importmap (lines 79-90)
- Remove esm.sh from CSP (line 24)
- Add proper Google Fonts link matching main domain (Plus Jakarta Sans + Inter)

**Checkpoint:** Run `npm run build:city` and verify `dist-city/city.html` contains NO references to `cdn.tailwindcss.com` or `esm.sh`. Verify Tailwind classes still render (because `index.css` + PostCSS handles it via Vite).

---

## Phase 3: Add PageMeta to All City Pages

**Goal:** Every city page must use `PageMeta` so `__PRERENDER_READY__` fires and SEO metadata is correct.

### Task 3: Audit and add PageMeta to city page components

**Files to modify** (pages missing PageMeta):
- `pages/city-app/CityHome.tsx` — NO PageMeta
- `pages/city-app/CityServicesHub.tsx` — NO PageMeta (delegates to `ServicesHub` which may have its own)
- `pages/city-app/CityServiceDetail.tsx` — NO PageMeta (delegates to `ServiceDetailNew` which has it)
- `pages/city-app/CityBlogIndex.tsx` — needs check
- `pages/city-app/CityBlogArticle.tsx` — needs check (delegates to `DynamicBlogArticle`)
- `pages/city-app/CityNeighborhood.tsx` — needs check (delegates to `DynamicNeighborhoodPage`)
- `pages/city-app/CityRequest.tsx` — needs check

**Already have PageMeta:**
- `pages/city-app/CityAbout.tsx` ✅
- `pages/city-app/CityContact.tsx` ✅

**Strategy:** For delegating components (CityServiceDetail → ServiceDetailNew), verify the downstream component already has PageMeta. If so, no change needed. For components that don't delegate to a PageMeta-bearing parent, add PageMeta directly.

**Key detail:** PageMeta's `getCanonicalBase()` (utils/subdomain.ts:98-103) uses `window.location.origin`, which during prerender will be `http://localhost:PORT`. The main domain prerender fixes this in `renderRoute()` (prerender.ts:108): `html.replace(localhost, PRODUCTION_ORIGIN)`. The city prerender must do the same, replacing `http://localhost:PORT` with `https://{city}.flood.doctor`.

**Title format:** `{Page Title} | Flood Doctor of {City}` — verify each page follows this.

**Checkpoint:** Every city-app page component must import and render `<PageMeta>`. Grep:
```bash
grep -L "PageMeta" pages/city-app/City*.tsx
```
Should return nothing.

---

## Phase 4: Switch city.tsx to hydrateRoot

**Goal:** Preserve prerendered HTML instead of destroying it with `createRoot`.

### Task 4: Update `city.tsx` to match `index.tsx` hydration pattern

**Files:**
- Modify: `city.tsx`

**Change from:**
```typescript
const root = ReactDOM.createRoot(rootElement);
root.render(<React.StrictMode><CityApp /></React.StrictMode>);
```

**Change to:**
```typescript
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode><CityApp /></React.StrictMode>
  );
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode><CityApp /></React.StrictMode>
  );
}
```

**This is a direct copy of `index.tsx` lines 13-26.**

**Checkpoint:** `npm run build:city` succeeds. No runtime errors when loading a city page (it will still use `createRoot` path until prerender exists).

---

## Phase 5: Build the City Prerender Script

**Goal:** Prerender every route for every city, writing static HTML files to `dist-cities/{city}/{route}/index.html`.

### Task 5: Create `scripts/prerender-cities.ts`

**Files:**
- Create: `scripts/prerender-cities.ts`

**Architecture:** Largely mirrors `scripts/prerender.ts` (the main domain prerender), but:

1. Iterates over `CITY_SUBDOMAINS` from `config/routes.ts`
2. For each city, serves `dist-cities/{city}/` as the static root
3. Uses the clean SPA shell from `dist-cities/{city}/index.html` as fallback
4. Calls `getCityRoutes(citySlug)` for the route list
5. Renders each route, replacing `http://localhost:PORT` → `https://{city}.flood.doctor`
6. Writes output to `dist-cities/{city}/{route}/index.html`
7. Generates a `404.html` for each city from the NotFound component

**Key differences from `prerender.ts`:**

| Aspect | Main Prerender | City Prerender |
|--------|---------------|----------------|
| Input dir | `dist/` | `dist-cities/{city}/` |
| Route source | `ALL_PRERENDER_ROUTES` | `getCityRoutes(citySlug)` |
| Production origin | `https://flood.doctor` | `https://{city}.flood.doctor` |
| Homepage handling | Render `/` last (overwrites dist/index.html) | Same pattern per city |
| Server | Single server on port 4173 | Sequential: one server per city, or reuse with different root |

**Recommended approach:** Process cities sequentially (one at a time). For each city:
1. Start HTTP server serving `dist-cities/{city}/` on a port
2. Back up clean SPA shell
3. Render all routes for that city
4. Render `/404` route → write to `dist-cities/{city}/404.html`
5. Stop server
6. Move to next city

**Concurrency:** 5 Playwright tabs per city (same as main prerender). Sequential across cities (to avoid port conflicts and memory pressure). Total time estimate: ~325 routes × 0.07s = ~23s + overhead = ~60-90s for all 13 cities.

**404 page generation:** Add a `/404` route to `CityApp.tsx` that renders `<NotFound />` with PageMeta. The prerender will render this route and save it as `dist-cities/{city}/404.html`. Apache's `ErrorDocument 404 /404.html` will serve it.

**Checkpoint:** Run `npm run prerender:cities` and verify:
- Each city has prerendered HTML in `dist-cities/{city}/`
- Route count matches `getCityRoutes()` output
- Each HTML file has `<title>`, `<link rel="canonical">`, `__PRERENDER_READY__`
- localhost references replaced with production subdomain URLs

---

## Phase 6: Replace City .htaccess SPA Fallback

**Goal:** Once prerendered files exist for every valid route, the SPA fallback is unnecessary and harmful (causes soft 404s). Replace it with real 404 handling.

### Task 6: Update .htaccess generation in `build-cities.ts`

**Files:**
- Modify: `scripts/build-cities.ts` (the `.htaccess` generation block, lines 649-674)

**Change from:**
```apache
# SPA fallback (relative path - serves this folder's index.html)
RewriteRule ^ index.html [L]
```

**Change to:**
```apache
# Custom 404 page
ErrorDocument 404 /404.html

# All valid routes have prerendered HTML files.
# Any request reaching here has no matching file — real 404.
RewriteRule ^ - [R=404,L]
```

**This exactly mirrors the main domain `.htaccess` pattern** (public/.htaccess lines 9, 152).

**Checkpoint:** Deploy to a test city. Verify:
- Valid routes (e.g., `mclean.flood.doctor/services/water-damage/`) return 200
- Invalid routes (e.g., `mclean.flood.doctor/fake-page/`) return 404
- 404 response body contains the custom NotFound page HTML

---

## Phase 7: Update Build Chain and Package Scripts

**Goal:** Wire everything together so `npm run build:cities` produces fully prerendered, deploy-ready city sites.

### Task 7: Update `package.json` scripts

**Files:**
- Modify: `package.json`

**New build chain:**
```json
{
  "build:city": "VITE_BUILD_MODE=city vite build --outDir dist-city",
  "build:cities": "npm run build:city && npx tsx scripts/build-cities.ts && npm run prerender:cities",
  "prerender:cities": "npx tsx scripts/prerender-cities.ts",
  "prerender:cities:verify": "npx tsx scripts/verify-prerender-cities.ts"
}
```

**Order of operations:**
1. `build:city` — Vite builds CityApp bundle → `dist-city/`
2. `build-cities.ts` — Generates 13 city sites with clean HTML, assets, sitemap, robots.txt, .htaccess → `dist-cities/{city}/`
3. `prerender-cities.ts` — Prerenders all routes per city, writes static HTML → `dist-cities/{city}/{route}/index.html`

### Task 8: Create `scripts/verify-prerender-cities.ts`

**Files:**
- Create: `scripts/verify-prerender-cities.ts`

**Checks per city:**
1. File exists for every route in `getCityRoutes(city)`
2. Each HTML file > 5KB
3. Each has a unique `<title>` tag
4. Each has `<link rel="canonical" href="https://{city}.flood.doctor/...">` (correct subdomain)
5. No `localhost` references in any HTML file
6. No duplicate titles within a city
7. No duplicate H1s within a city
8. `404.html` exists
9. `.htaccess` contains `ErrorDocument 404` and does NOT contain `RewriteRule ^ index.html`
10. No references to `cdn.tailwindcss.com` or `esm.sh` in any HTML file

**Summary output:**
```
City Prerender Verification
===========================
mclean:      24/24 routes ✅  (404.html ✅, .htaccess ✅)
arlington:   25/25 routes ✅  (404.html ✅, .htaccess ✅)
...
Total: 325/325 routes across 13 cities
```

---

## Phase 8: Update City Sitemaps

**Goal:** City sitemaps should include all prerendered routes, not the hardcoded subset currently in `generateCitySitemap()`.

### Task 9: Update `generateCitySitemap()` in `build-cities.ts`

**Files:**
- Modify: `scripts/build-cities.ts`

**Change from:** Hardcoded 9-route sitemap (build-cities.ts:511-521)
**Change to:** Use `getCityRoutes(city.id)` to generate sitemap with all actual routes.

**Priority mapping:**
| Route pattern | Priority |
|---------------|----------|
| `/` | 1.0 |
| `/services/` | 0.9 |
| `/services/{slug}/` | 0.8 |
| `/blog/` | 0.7 |
| `/blog/{slug}/` | 0.6 |
| `/neighborhoods/{slug}/` | 0.7 |
| `/about/`, `/contact/`, `/request/` | 0.6 |
| `/guides/*` | 0.5 |
| `/faq/` | 0.4 |

---

## Phase 9: Deploy Flow Updates

### Task 10: Update `scripts/deploy-cities.sh`

**Files:**
- Modify: `scripts/deploy-cities.sh`

**Changes:**
1. The script already runs `npm run build:cities` (line 43). Since we updated `build:cities` to include `prerender:cities`, no change needed to the build step.
2. Add a post-build verification step: run `npm run prerender:cities:verify` before deploying. Abort if verification fails.
3. Add a post-deploy check: for each city, curl a known valid route AND a known invalid route. Valid should return 200, invalid should return 404.

**Post-deploy verification sample:**
```bash
# After deploy, for each city:
curl -s -o /dev/null -w "%{http_code}" "https://${city}.flood.doctor/" # expect 200
curl -s -o /dev/null -w "%{http_code}" "https://${city}.flood.doctor/this-does-not-exist/" # expect 404
```

---

## Verification Gates

Before declaring this migration complete, ALL of the following must pass:

### Build Verification
- [ ] `npm run build:cities` completes without errors
- [ ] `npm run prerender:cities:verify` passes for all 13 cities
- [ ] No `cdn.tailwindcss.com` or `esm.sh` references in any `dist-cities/` HTML file
- [ ] No `localhost` references in any `dist-cities/` HTML file

### Route Count Verification
- [ ] Total prerendered city routes matches `getAllCityRoutes()` output (expected ~325)
- [ ] Each city has correct route count per `getCityRoutes(citySlug)`

### SEO Verification (per city)
- [ ] Every page has unique `<title>` (no duplicates within a city)
- [ ] Every page has unique `<h1>` (no duplicates within a city)
- [ ] Every page has `<link rel="canonical" href="https://{city}.flood.doctor/...">` — correct subdomain
- [ ] Every page has JSON-LD schema (`<script type="application/ld+json">`)
- [ ] Sitemap includes all prerendered routes

### 404 Verification
- [ ] Invalid routes return HTTP 404 (not 200)
- [ ] 404 response body contains the custom NotFound page
- [ ] `.htaccess` does NOT contain `RewriteRule ^ index.html [L]`

### Internal Link Verification
- [ ] All internal links in prerendered HTML resolve to existing prerendered files
- [ ] No broken internal links (every `<a href="/...">` matches a prerendered route)

### Hydration Verification
- [ ] City pages hydrate without console errors
- [ ] React dev tools shows "hydrated" (not "rendered") when prerendered HTML is served

### Main Domain Isolation
- [ ] `npm run build` (main domain) still produces 189 routes
- [ ] `npm run prerender:verify` passes for main domain
- [ ] Main domain deploy is completely independent of city deploy

---

## Risk & Rollback

### Risk Matrix

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| CDN Tailwind removal breaks city styles | High | Low | Vite already bundles Tailwind via index.css + PostCSS. CDN was redundant. Test locally first. |
| hydrateRoot mismatch errors | Medium | Medium | hydrateRoot logs warnings for mismatches but still works. During transition, `createRoot` fallback handles non-prerendered pages. |
| Prerender timeout on city pages | Medium | Low | Same 15s timeout as main domain. City pages are simpler (fewer components). |
| PageMeta missing on downstream components | High | Medium | Phase 3 audit catches this. Grep for `__PRERENDER_READY__` in rendered HTML. |
| Deploy breaks existing city sites | High | Low | Cities deploy to separate docroots (`~/public_html/{city}.flood.doctor/`). Main domain untouched. |
| Double React loading from esm.sh + Vite | Medium | Already happening | This migration FIXES this by removing esm.sh. Currently live cities load React twice. |

### Rollback Procedure

**City deploy is fully independent of main domain.** Rollback is per-city:

1. **Instant rollback (per city):** Keep a backup of `dist-cities/{city}/` before prerender. If prerender output is broken, deploy the pre-prerender build (SPA fallback still works).
2. **Full rollback:** Revert the `build-cities.ts` changes (restore CDN Tailwind, esm.sh, SPA fallback .htaccess). Run `npm run build:cities` and deploy. Cities return to SPA mode.
3. **Main domain is never affected.** City builds use `dist-cities/`, main domain uses `dist/`. Different build commands, different deploy scripts, different server docroots.

### Phased Rollout Strategy

1. **Phase 1-4:** No production impact. All changes are to build tooling and source code.
2. **Phase 5-6:** Test with ONE city first (mclean). Deploy only mclean. Verify 404s, hydration, SEO.
3. **Phase 7-9:** After mclean is verified (24-48 hours), deploy remaining 12 cities.

---

## File Change Summary

| File | Action | Phase |
|------|--------|-------|
| `config/routes.ts` | Modify — add `getCityRoutes()`, `getAllCityRoutes()`, `CITY_STATIC_ROUTES` | 1 |
| `scripts/build-cities.ts` | Modify — remove CDN/esm.sh from HTML gen, fix .htaccess, fix sitemap | 2, 6, 8 |
| `city.html` | Modify — remove importmap, fix CSP, fix fonts | 2 |
| `city.tsx` | Modify — switch to hydrateRoot | 4 |
| `pages/city-app/CityHome.tsx` | Modify — add PageMeta | 3 |
| `pages/city-app/CityServicesHub.tsx` | Modify — verify/add PageMeta | 3 |
| `pages/city-app/CityBlogIndex.tsx` | Modify — verify/add PageMeta | 3 |
| `pages/city-app/CityBlogArticle.tsx` | Modify — verify/add PageMeta | 3 |
| `pages/city-app/CityNeighborhood.tsx` | Modify — verify/add PageMeta | 3 |
| `pages/city-app/CityRequest.tsx` | Modify — verify/add PageMeta | 3 |
| `scripts/prerender-cities.ts` | Create | 5 |
| `scripts/verify-prerender-cities.ts` | Create | 7 |
| `package.json` | Modify — add `prerender:cities`, `prerender:cities:verify`, update `build:cities` | 7 |
| `scripts/deploy-cities.sh` | Modify — add verification step | 9 |

**Total:** 12 files modified, 2 files created. Zero new routes on main domain. Zero changes to homepage.
