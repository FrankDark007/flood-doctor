# City Services Parity (Phase 2) Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Give city subdomains nested service URL structure matching the main site, with content-gated visibility so only services with city content are linked and prerendered.

**Architecture:** Add a slug mapping layer (`data/city-service-map.ts`) that maps city content filenames to main taxonomy paths. CityApp gets nested routes that reuse `ServiceDetailNew` via the existing `CityServiceDetail` wrapper. Hub/subcategory pages reuse `CategoryLanding` and `ServicesHub` with a `filterServiceIds` prop so they only display services with city content (no dead-end 404 clicks). The `window.__FLOOD_DOCTOR_CITY_SERVICES__` injection is extended to include nested path info. Old flat routes get 301 redirects via .htaccess.

**Tech Stack:** React 19, React Router 7, Vite, Playwright prerender, TypeScript

**Strategy:** Content-gated visibility (Strategy 1). Only services with city content files are prerendered and linked. Missing services return real 404. Full 27-service nav parity is the end state, not this deliverable.

---

## Batch 1 — Slug Mapping + Content-Present Infrastructure

### Task 1: Create city-to-main service slug mapping

**Files:**
- Create: `data/city-service-map.ts`

**Step 1: Create the mapping module**

This is the single source of truth for mapping city content filenames to main taxonomy structure.

```typescript
// data/city-service-map.ts
/**
 * City Service Slug Mapping
 *
 * Maps city content filenames (flat slugs like 'water-damage')
 * to main site taxonomy (nested paths like '/services/residential/restoration-services/water-damage-restoration/').
 *
 * This is the SINGLE SOURCE OF TRUTH for:
 * - Build-time route generation
 * - Runtime nav link construction
 * - Flat-to-nested 301 redirect generation
 * - Content-present checks
 */

import { SERVICES } from './services';
import type { ServiceData } from '../types';

export interface CityServiceMapping {
  /** City content filename without extension (e.g., 'water-damage') */
  citySlug: string;
  /** Main taxonomy service ID (e.g., 'res-water') */
  serviceId: string;
  /** Last segment of main site slug (e.g., 'water-damage-restoration') */
  mainSlug: string;
  /** Audience lowercase (e.g., 'residential') */
  audience: 'residential' | 'commercial';
  /** Subcategory path segment (e.g., 'restoration-services') */
  subcategory: string;
  /** Full nested path (e.g., '/services/residential/restoration-services/water-damage-restoration/') */
  nestedPath: string;
  /** Full ServiceData reference */
  service: ServiceData;
}

/**
 * Explicit overrides for city slugs that don't match main taxonomy last-segment.
 * Key = city content filename, Value = main service ID
 */
const CITY_SLUG_OVERRIDES: Record<string, string> = {
  'water-damage': 'res-water',           // water-damage → water-damage-restoration
  'fire-damage': 'res-fire',             // fire-damage → fire-smoke-cleanup
  'storm-damage': 'res-storm',           // storm-damage → storm-damage-restoration
  'burst-pipe': 'res-burst',             // burst-pipe → burst-pipe-cleanup
  'emergency-water-removal': 'res-water', // Arlington-only alias → water-damage-restoration
};

/**
 * Category enum to URL segment mapping
 */
const CATEGORY_TO_SEGMENT: Record<string, string> = {
  'RESTORATION': 'restoration-services',
  'CLEANUP': 'cleanup-services',
  'SPECIALTY': 'specialty-services',
  'TECHNICAL': 'technical-services',
};

/**
 * Build the complete mapping for a given city slug.
 * Returns null if the slug can't be mapped to a main service.
 */
export function mapCitySlug(citySlug: string): CityServiceMapping | null {
  let service: ServiceData | undefined;

  // Check explicit overrides first
  if (CITY_SLUG_OVERRIDES[citySlug]) {
    service = SERVICES.find(s => s.id === CITY_SLUG_OVERRIDES[citySlug]);
  }

  // Fall back to matching last segment of main slug
  if (!service) {
    service = SERVICES.find(s => {
      const segments = s.slug.split('/').filter(Boolean);
      return segments[segments.length - 1] === citySlug;
    });
  }

  if (!service) return null;

  const segments = service.slug.split('/').filter(Boolean);
  const mainSlug = segments[segments.length - 1];
  const audience = service.audience.toLowerCase() as 'residential' | 'commercial';
  const subcategory = CATEGORY_TO_SEGMENT[service.category];

  return {
    citySlug,
    serviceId: service.id,
    mainSlug,
    audience,
    subcategory,
    nestedPath: `/services/${audience}/${subcategory}/${mainSlug}/`,
    service,
  };
}

/**
 * Build mappings for an array of city slugs.
 * Filters out any that can't be mapped.
 */
export function mapCitySlugs(citySlugs: string[]): CityServiceMapping[] {
  return citySlugs
    .map(mapCitySlug)
    .filter((m): m is CityServiceMapping => m !== null);
}

/**
 * Get the nested city path for a flat city slug.
 * Returns null if unmappable.
 */
export function getCityNestedPath(citySlug: string): string | null {
  const mapping = mapCitySlug(citySlug);
  return mapping ? mapping.nestedPath : null;
}

/**
 * Get the flat redirect mapping: old flat path → new nested path.
 * Used by build-cities.ts to generate .htaccess 301 rules.
 */
export function getFlatToNestedRedirects(citySlugs: string[]): { from: string; to: string }[] {
  return mapCitySlugs(citySlugs).map(m => ({
    from: `/services/${m.citySlug}/`,
    to: m.nestedPath,
  }));
}

/**
 * Build the complete set of nested service routes for a city.
 * Only includes services that have content (citySlugs).
 * Includes hub routes only if they have at least one child service.
 */
export function getCityServiceRoutes(citySlugs: string[]): string[] {
  const mappings = mapCitySlugs(citySlugs);
  const routes: string[] = [];

  // Service detail routes
  for (const m of mappings) {
    routes.push(m.nestedPath);
  }

  // Audience hubs: only if at least one service exists for that audience
  const audiences = new Set(mappings.map(m => m.audience));
  for (const aud of audiences) {
    routes.push(`/services/${aud}/`);
  }

  // Subcategory hubs: only if at least one service exists in that subcategory
  const subcategories = new Set(mappings.map(m => `${m.audience}/${m.subcategory}`));
  for (const sub of subcategories) {
    routes.push(`/services/${sub}/`);
  }

  return routes;
}
```

**Step 2: Verify the module compiles**

Run: `npx tsc --noEmit data/city-service-map.ts` (or rely on the Vite build in Step 5)

**Step 3: Commit**

```bash
git add data/city-service-map.ts
git commit -m "feat: add city-to-main service slug mapping layer"
```

---

### Task 2: Extend build-time service injection with nested path info

**Files:**
- Modify: `scripts/build-cities.ts` (~lines 28-34 and ~line 457)

The current `getCityServiceSlugs()` in build-cities.ts reads city service filenames and injects `window.__FLOOD_DOCTOR_CITY_SERVICES__` as a flat array. We need to also inject the slug mapping so runtime code can build nested URLs.

**Step 1: Update build-cities.ts to import and use mapCitySlugs**

At the top of `scripts/build-cities.ts`, after the existing `getCityServiceSlugs` function, add:

```typescript
import { mapCitySlugs, getFlatToNestedRedirects } from '../data/city-service-map';
```

Note: build-cities.ts runs via `npx tsx` which handles TS imports. Verify this works.

Then update the HTML template injection (around line 457) from:

```javascript
window.__FLOOD_DOCTOR_CITY_SERVICES__ = ${JSON.stringify(getCityServiceSlugs(city.id))};
```

to:

```javascript
window.__FLOOD_DOCTOR_CITY_SERVICES__ = ${JSON.stringify(getCityServiceSlugs(city.id))};
      window.__FLOOD_DOCTOR_CITY_SERVICE_MAP__ = ${JSON.stringify(
        mapCitySlugs(getCityServiceSlugs(city.id)).map(m => ({
          citySlug: m.citySlug,
          mainSlug: m.mainSlug,
          serviceId: m.serviceId,
          audience: m.audience,
          subcategory: m.subcategory,
          nestedPath: m.nestedPath,
          title: m.service.title,
        }))
      )};
```

**Step 2: Update useCityApp.ts to expose the service map at runtime**

Add to `hooks/useCityApp.ts`:

```typescript
export interface CityServiceMapEntry {
  citySlug: string;
  mainSlug: string;
  serviceId: string;
  audience: 'residential' | 'commercial';
  subcategory: string;
  nestedPath: string;
  title: string;
}

// Extend the Window interface
declare global {
  interface Window {
    __FLOOD_DOCTOR_CITY__?: string;
    __FLOOD_DOCTOR_CITY_SERVICES__?: string[];
    __FLOOD_DOCTOR_CITY_SERVICE_MAP__?: CityServiceMapEntry[];
  }
}

/**
 * Returns the full service map for this city (with nested path info).
 * Empty array on main site.
 */
export function getCityServiceMap(): CityServiceMapEntry[] {
  if (typeof window !== 'undefined' && window.__FLOOD_DOCTOR_CITY_SERVICE_MAP__) {
    return window.__FLOOD_DOCTOR_CITY_SERVICE_MAP__;
  }
  return [];
}

/**
 * Check if a service (by main slug) has city content.
 */
export function hasCityServiceContent(mainSlug: string): boolean {
  return getCityServiceMap().some(m => m.mainSlug === mainSlug);
}
```

**Step 3: Verify both builds pass**

Run:
```bash
npm run build        # Main site (189/189)
npm run build:city   # City bundle compiles
npx tsx scripts/build-cities.ts  # 13 city sites generated
```

Check that a city's index.html now contains `__FLOOD_DOCTOR_CITY_SERVICE_MAP__`:
```bash
grep '__FLOOD_DOCTOR_CITY_SERVICE_MAP__' dist-cities/mclean/index.html | head -1
```

**Step 4: Commit**

```bash
git add scripts/build-cities.ts hooks/useCityApp.ts
git commit -m "feat: inject city service map with nested paths at build time"
```

---

### ✅ Batch 1 Verification

```bash
npm run build                         # Main: 189/189
npm run build:city                    # City bundle OK
npx tsx scripts/build-cities.ts       # 13 cities OK
grep 'CITY_SERVICE_MAP' dist-cities/mclean/index.html  # Contains mapping data
```

**STOP. Report results. Wait for feedback before Batch 2.**

---

## Batch 2 — Nested City Routes + Flat-to-Nested Redirects

### Task 3: Add nested service routes to CityApp.tsx

**Files:**
- Modify: `CityApp.tsx`

**Step 1: Add nested route patterns**

In CityApp.tsx, replace the current flat service routes:

```tsx
{/* Current — REPLACE */}
<Route path="/services/:serviceSlug/" element={<CityServiceDetail />} />
```

with nested patterns:

```tsx
{/* Nested service detail routes (match main site URL structure) */}
<Route path="/services/residential/:subcategory/:serviceSlug/" element={<CityServiceDetail />} />
<Route path="/services/commercial/:subcategory/:serviceSlug/" element={<CityServiceDetail />} />

{/* Audience hubs */}
<Route path="/services/residential/" element={<CityResidentialHub />} />
<Route path="/services/commercial/" element={<CityCommercialHub />} />

{/* Subcategory hubs */}
<Route path="/services/residential/:subcategory/" element={<CitySubcategoryHub />} />
<Route path="/services/commercial/:subcategory/" element={<CitySubcategoryHub />} />
```

Add lazy imports at the top:

```tsx
const CityResidentialHub = lazy(() => import('./pages/city-app/CityResidentialHub'));
const CityCommercialHub = lazy(() => import('./pages/city-app/CityCommercialHub'));
const CitySubcategoryHub = lazy(() => import('./pages/city-app/CitySubcategoryHub'));
```

**IMPORTANT:** Keep the old flat route temporarily for backward compatibility during this batch:
```tsx
{/* Legacy flat route — redirects handled by .htaccess for prerendered, this catches SPA nav */}
<Route path="/services/:serviceSlug/" element={<CityServiceDetailLegacyRedirect />} />
```

**Step 2: Commit (routes only, components come next)**

Do NOT commit yet — proceed to Task 4 first.

---

### Task 4: Update CityServiceDetail to handle nested route params

**Files:**
- Modify: `pages/city-app/CityServiceDetail.tsx`

**Step 1: Update the component to extract serviceSlug from nested route**

The nested route `/services/residential/:subcategory/:serviceSlug/` passes `:serviceSlug` as a param. The existing component already uses `useParams<{ serviceSlug: string }>()` which captures the last named segment. This still works.

However, we need to verify the slug lookup still works. The main SERVICES array uses full nested slugs like `/services/residential/restoration-services/water-damage-restoration/`. The `:serviceSlug` param will be `water-damage-restoration` — which matches the last segment extraction in the existing code.

**No code change needed to CityServiceDetail.tsx** — the existing logic already matches by last segment.

**Step 2: Create CityServiceDetailLegacyRedirect for old flat URLs**

Create: `pages/city-app/CityServiceDetailLegacyRedirect.tsx`

```tsx
/**
 * CityServiceDetailLegacyRedirect
 *
 * Handles old flat city service URLs: /services/:serviceSlug/
 * Redirects to the new nested URL structure.
 * Only fires for SPA navigation (prerendered pages use .htaccess 301).
 */

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getCityServiceMap } from '@/hooks/useCityApp';

const CityServiceDetailLegacyRedirect: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const serviceMap = getCityServiceMap();

  // Try to find by city slug (flat filename)
  const mapping = serviceMap.find(m => m.citySlug === serviceSlug);
  if (mapping) {
    return <Navigate to={mapping.nestedPath} replace />;
  }

  // Try to find by main slug (already nested-style slug)
  const mappingByMain = serviceMap.find(m => m.mainSlug === serviceSlug);
  if (mappingByMain) {
    return <Navigate to={mappingByMain.nestedPath} replace />;
  }

  // No match — go to services hub
  return <Navigate to="/services/" replace />;
};

export default CityServiceDetailLegacyRedirect;
```

**Step 3: Create CityResidentialHub, CityCommercialHub, CitySubcategoryHub**

Create: `pages/city-app/CityResidentialHub.tsx`

```tsx
/**
 * CityResidentialHub - Residential Services Hub for City Subdomains
 * Route: /services/residential/
 *
 * CONTENT-GATED: Only shows services that have city content files.
 * Uses getCityServiceMap() to filter SERVICES array.
 */
import React, { useMemo } from 'react';
import { useCityFranchise } from '@/contexts/CityFranchiseContext';
import ServicesHub from '@/pages/ServicesHub';
import { getCityServiceMap } from '@/hooks/useCityApp';

const CityResidentialHub: React.FC = () => {
  const franchise = useCityFranchise();
  const allowedServiceIds = useMemo(() => {
    return new Set(
      getCityServiceMap()
        .filter(m => m.audience === 'residential')
        .map(m => m.serviceId)
    );
  }, []);

  return (
    <ServicesHub
      title={`Residential Services in ${franchise.city}`}
      subtitle={`Emergency restoration, cleanup, and specialty services for ${franchise.city}, ${franchise.state} homeowners.`}
      filterAudience="RESIDENTIAL"
      filterServiceIds={allowedServiceIds}
    />
  );
};

export default CityResidentialHub;
```

Create: `pages/city-app/CityCommercialHub.tsx`

```tsx
/**
 * CityCommercialHub - Commercial Services Hub for City Subdomains
 * Route: /services/commercial/
 *
 * CONTENT-GATED: Only shows services that have city content files.
 * Uses getCityServiceMap() to filter SERVICES array.
 */
import React, { useMemo } from 'react';
import { useCityFranchise } from '@/contexts/CityFranchiseContext';
import ServicesHub from '@/pages/ServicesHub';
import { getCityServiceMap } from '@/hooks/useCityApp';

const CityCommercialHub: React.FC = () => {
  const franchise = useCityFranchise();
  const allowedServiceIds = useMemo(() => {
    return new Set(
      getCityServiceMap()
        .filter(m => m.audience === 'commercial')
        .map(m => m.serviceId)
    );
  }, []);

  return (
    <ServicesHub
      title={`Commercial Services in ${franchise.city}`}
      subtitle={`Scalable disaster recovery for ${franchise.city}, ${franchise.state} businesses and facilities.`}
      filterAudience="COMMERCIAL"
      filterServiceIds={allowedServiceIds}
    />
  );
};

export default CityCommercialHub;
```

Create: `pages/city-app/CitySubcategoryHub.tsx`

```tsx
/**
 * CitySubcategoryHub - Subcategory Landing for City Subdomains
 * Route: /services/residential/:subcategory/ or /services/commercial/:subcategory/
 *
 * CONTENT-GATED: Only shows services that have city content files.
 * Uses getCityServiceMap() to filter — no dead-end 404 clicks from hub cards.
 */
import React, { useMemo } from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import CategoryLanding from '@/pages/templates/CategoryLanding';
import { getCityServiceMap } from '@/hooks/useCityApp';
import type { ServiceAudience, ServiceCategory } from '@/types';

const SUBCATEGORY_TO_CATEGORY: Record<string, ServiceCategory> = {
  'restoration-services': 'RESTORATION',
  'cleanup-services': 'CLEANUP',
  'specialty-services': 'SPECIALTY',
  'technical-services': 'TECHNICAL',
};

const SUBCATEGORY_TITLES: Record<string, string> = {
  'restoration-services': 'Restoration Services',
  'cleanup-services': 'Cleanup Services',
  'specialty-services': 'Specialty Services',
  'technical-services': 'Technical Services',
};

const CitySubcategoryHub: React.FC = () => {
  const { subcategory } = useParams<{ subcategory: string }>();
  const location = useLocation();

  if (!subcategory || !SUBCATEGORY_TO_CATEGORY[subcategory]) {
    return <Navigate to="/services/" replace />;
  }

  // Determine audience from URL path
  const isCommercial = location.pathname.startsWith('/services/commercial/');
  const audience: ServiceAudience = isCommercial ? 'COMMERCIAL' : 'RESIDENTIAL';
  const category = SUBCATEGORY_TO_CATEGORY[subcategory];
  const title = SUBCATEGORY_TITLES[subcategory];
  const audienceLabel = isCommercial ? 'Commercial' : 'Residential';

  // Content-gated: only show services with city content
  const allowedServiceIds = useMemo(() => {
    return new Set(
      getCityServiceMap()
        .filter(m => m.audience === audience.toLowerCase() && m.subcategory === subcategory)
        .map(m => m.serviceId)
    );
  }, [audience, subcategory]);

  // If no services have content in this subcategory, redirect to parent audience hub
  if (allowedServiceIds.size === 0) {
    return <Navigate to={`/services/${audienceLabel.toLowerCase()}/`} replace />;
  }

  return (
    <CategoryLanding
      audience={audience}
      category={category}
      title={`${audienceLabel} ${title}`}
      description={`Professional ${title.toLowerCase()} for ${audienceLabel.toLowerCase()} properties.`}
      filterServiceIds={allowedServiceIds}
    />
  );
};

export default CitySubcategoryHub;
```

**IMPORTANT:** Both `ServicesHub` and `CategoryLanding` need a new optional `filterServiceIds?: Set<string>` prop. When provided, they filter their service lists to only include services whose `id` is in the set. This is a small change to each component — see Step 4a below.

**Step 3a: Add `filterServiceIds` prop to ServicesHub and CategoryLanding**

In `pages/ServicesHub.tsx`, add the prop and filter:

```tsx
interface ServicesHubProps {
  title?: string;
  subtitle?: string;
  filterAudience?: 'RESIDENTIAL' | 'COMMERCIAL';
  filterServiceIds?: Set<string>;  // NEW: content-gating for city hubs
}

// Inside the component, wherever services are filtered/listed, add:
const filteredServices = services.filter(s =>
  (!filterServiceIds || filterServiceIds.has(s.id))
);
```

In `pages/templates/CategoryLanding.tsx`, add the same prop:

```tsx
interface CategoryLandingProps {
  audience: ServiceAudience;
  category: ServiceCategory;
  title: string;
  description: string;
  filterServiceIds?: Set<string>;  // NEW: content-gating for city hubs
}

// Inside the component, filter the service list:
const services = getServicesByCategory(audience, category)
  .filter(s => !filterServiceIds || filterServiceIds.has(s.id));
```

**Step 3b: Update existing CityServicesHub to be content-gated**

Modify: `pages/city-app/CityServicesHub.tsx`

```tsx
/**
 * CityServicesHub - Services Hub for City Subdomain Sites
 *
 * CONTENT-GATED: Only shows services that have city content files.
 * Route: /services/
 */
import React, { useMemo } from 'react';
import { useCityFranchise } from '@/contexts/CityFranchiseContext';
import ServicesHub from '@/pages/ServicesHub';
import { getCityServiceMap } from '@/hooks/useCityApp';

const CityServicesHub: React.FC = () => {
  const franchise = useCityFranchise();
  const allowedServiceIds = useMemo(() => {
    return new Set(getCityServiceMap().map(m => m.serviceId));
  }, []);

  return (
    <ServicesHub
      title={`Water Damage Restoration Services in ${franchise.city}`}
      subtitle={`Emergency restoration, cleanup, and repair services for ${franchise.city}, ${franchise.state} homeowners and businesses.`}
      filterServiceIds={allowedServiceIds}
    />
  );
};

export default CityServicesHub;
```

**Step 4: Update CityApp.tsx with all imports and routes**

Add lazy imports:
```tsx
const CityResidentialHub = lazy(() => import('./pages/city-app/CityResidentialHub'));
const CityCommercialHub = lazy(() => import('./pages/city-app/CityCommercialHub'));
const CitySubcategoryHub = lazy(() => import('./pages/city-app/CitySubcategoryHub'));
const CityServiceDetailLegacyRedirect = lazy(() => import('./pages/city-app/CityServiceDetailLegacyRedirect'));
```

Replace the SERVICES section in Routes:
```tsx
{/* ============================================
    SERVICES
    City-specific service hub, audience hubs,
    subcategory hubs, and detail pages
    ============================================ */}
<Route path="/services/" element={<CityServicesHub />} />

{/* Audience hubs */}
<Route path="/services/residential/" element={<CityResidentialHub />} />
<Route path="/services/commercial/" element={<CityCommercialHub />} />

{/* Subcategory hubs */}
<Route path="/services/residential/:subcategory/" element={<CitySubcategoryHub />} />
<Route path="/services/commercial/:subcategory/" element={<CitySubcategoryHub />} />

{/* Nested service detail pages */}
<Route path="/services/residential/:subcategory/:serviceSlug/" element={<CityServiceDetail />} />
<Route path="/services/commercial/:subcategory/:serviceSlug/" element={<CityServiceDetail />} />

{/* Legacy flat route redirect (SPA navigation only; .htaccess handles prerendered) */}
<Route path="/services/:serviceSlug/" element={<CityServiceDetailLegacyRedirect />} />
```

**Step 5: Verify city bundle compiles**

```bash
npm run build:city
```

**Step 6: Commit**

```bash
git add CityApp.tsx pages/city-app/CityServiceDetailLegacyRedirect.tsx pages/city-app/CityResidentialHub.tsx pages/city-app/CityCommercialHub.tsx pages/city-app/CitySubcategoryHub.tsx
git commit -m "feat: add nested service routes and hub pages to CityApp"
```

---

### Task 5: Add 301 redirects for flat-to-nested URLs in .htaccess

**Files:**
- Modify: `scripts/build-cities.ts` (.htaccess template, ~lines 726-776)

**Step 1: Generate redirect rules dynamically**

In `build-cities.ts`, the .htaccess template is a string literal inside `buildAllCities()`. Replace the hardcoded redirect section with dynamically generated flat-to-nested redirects.

Before the `.htaccess` template string (around line 724), add:

```typescript
// Generate flat-to-nested service redirects for this city
const citySlugs = getCityServiceSlugs(city.id);
const serviceRedirects = getFlatToNestedRedirects(citySlugs);
const flatToNestedRules = serviceRedirects.map(r =>
  `RewriteRule ^services/${r.from.replace(/^\/services\//, '').replace(/\/$/, '')}/?$ ${r.to} [R=301,L]`
).join('\n');
```

Also add redirect rules for ALL 27 main service slugs that DON'T have city content — these should redirect to the services hub (not 404):

```typescript
// For services WITHOUT city content, redirect flat URL to services hub
// (prevents 404 for old crawled flat URLs)
const allMainSlugs = SERVICES.map(s => {
  const segments = s.slug.split('/').filter(Boolean);
  return segments[segments.length - 1];
});
const mappedMainSlugs = new Set(serviceRedirects.map(r => {
  // Extract the last segment from the nested 'to' path
  const segs = r.to.split('/').filter(Boolean);
  return segs[segs.length - 1];
}));
const unmappedRedirects = allMainSlugs
  .filter(slug => !mappedMainSlugs.has(slug))
  .map(slug => `RewriteRule ^services/${slug}/?$ /services/ [R=301,L]`)
  .join('\n');
```

Then in the .htaccess template, replace the existing redirect block:

```
# -----------------------------------------------
# 301 Redirects: flat service URLs → nested paths
# City services with content redirect to nested URL
# -----------------------------------------------
${flatToNestedRules}

# Flat service URLs without city content → services hub
${unmappedRedirects}
```

Keep the remaining main-domain-only redirects (locations, resources, reviews, etc.) unchanged.

**Step 2: Also add redirect rules for city slug aliases**

For the 4 mismatched slugs, we need to redirect BOTH the city filename slug AND any variation:

The `getFlatToNestedRedirects` already maps city slugs (e.g., `water-damage`) to nested paths. But we should also redirect the main slug if someone hits it as a flat URL (e.g., `/services/water-damage-restoration/` flat). Add:

```typescript
// Also redirect main slugs when accessed as flat URLs
const mainSlugRedirects = serviceRedirects
  .filter(r => {
    const citySlugPart = r.from.replace(/^\/services\//, '').replace(/\/$/, '');
    const nestedSlug = r.to.split('/').filter(Boolean).pop();
    return citySlugPart !== nestedSlug; // Only if city slug differs from main slug
  })
  .map(r => {
    const nestedSlug = r.to.split('/').filter(Boolean).pop();
    return `RewriteRule ^services/${nestedSlug}/?$ ${r.to} [R=301,L]`;
  })
  .join('\n');
```

Add to the .htaccess template after `flatToNestedRules`.

**Step 3: Rebuild cities and verify redirects**

```bash
npx tsx scripts/build-cities.ts
grep 'water-damage' dist-cities/mclean/.htaccess
```

Expected: See rules like:
```
RewriteRule ^services/water-damage/?$ /services/residential/restoration-services/water-damage-restoration/ [R=301,L]
```

**Step 4: Commit**

```bash
git add scripts/build-cities.ts
git commit -m "feat: generate flat-to-nested 301 redirects in city .htaccess"
```

---

### Task 6: Update prerender to use nested routes

**Files:**
- Modify: `scripts/prerender.ts` (`getCityRoutes` function, ~lines 30-69)

**Step 1: Replace flat service routes with nested content-gated routes**

Import the mapping at the top of prerender.ts:

```typescript
import { getCityServiceRoutes } from '../data/city-service-map';
```

Replace the `getCityRoutes` function's service section. Change from:

```typescript
// Service routes: extract last segment from nested slug paths
const serviceRoutes = SERVICES.map(s => {
  const segments = s.slug.split('/').filter(Boolean);
  return `/services/${segments[segments.length - 1]}/`;
});
```

to:

```typescript
// Service routes: nested paths, content-gated
const citySlugs = getCityServiceSlugsFromFS(cityId);
const serviceRoutes = getCityServiceRoutes(citySlugs);
```

Add the filesystem reader (move from build-cities.ts or duplicate):

```typescript
function getCityServiceSlugsFromFS(cityId: string): string[] {
  const servicesDir = path.resolve(process.cwd(), `src/content/cities/${cityId}/services`);
  if (!fs.existsSync(servicesDir)) return [];
  return fs.readdirSync(servicesDir)
    .filter((f: string) => f.endsWith('.ts') && f !== 'index.ts')
    .map((f: string) => f.replace('.ts', ''));
}
```

**Step 2: Also update the sitemap generator in build-cities.ts**

In `generateCitySitemap()` (~line 550), replace the service routes section similarly:

```typescript
// Service routes: nested, content-gated
const citySlugs = getCityServiceSlugs(city.id);
const serviceMappings = mapCitySlugs(citySlugs);
const serviceRoutes = serviceMappings.map(m => ({ path: m.nestedPath, priority: '0.8' }));

// Hub routes (only if they have content)
const audiences = new Set(serviceMappings.map(m => m.audience));
const audienceRoutes = [...audiences].map(aud => ({ path: `/services/${aud}/`, priority: '0.7' }));

const subcategories = new Set(serviceMappings.map(m => `${m.audience}/${m.subcategory}`));
const subcategoryRoutes = [...subcategories].map(sub => ({ path: `/services/${sub}/`, priority: '0.6' }));
```

Add these to `allRoutes`: `[...staticRoutes, ...serviceRoutes, ...audienceRoutes, ...subcategoryRoutes, ...blogRoutes, ...neighborhoodRoutes]`

**Step 3: Verify prerender**

```bash
npm run build:city && npx tsx scripts/build-cities.ts && npm run prerender:cities
```

Expected: All routes green. Route count should be lower than 656 (since we removed 19 services without content and added ~6 hub routes per city).

**Step 4: Commit**

```bash
git add scripts/prerender.ts scripts/build-cities.ts
git commit -m "feat: content-gated nested routes for city prerender and sitemap"
```

---

### ✅ Batch 2 Verification

```bash
npm run build                              # Main: 189/189 (unchanged)
npm run build:city                         # City bundle OK
npx tsx scripts/build-cities.ts            # 13 cities OK
npm run prerender:cities                   # All green, note new count

# Curl checks (after deploy or via local server):
# /services/water-damage/ → should show redirect content or SPA redirect
# Check .htaccess has correct redirect rules:
grep -A2 'water-damage' dist-cities/mclean/.htaccess

# Verify nested route exists in prerendered output:
ls dist-cities/mclean/services/residential/restoration-services/water-damage-restoration/
```

**STOP. Report results including new route counts. Wait for feedback before Batch 3.**

---

## Batch 3 — Nav Parity (Content-Gated Mega Menu)

### Task 7: Update Header city mega menu to show Residential/Commercial columns

**Files:**
- Modify: `components/layout/Header.tsx`

**Step 1: Replace the simplified city services dropdown with a content-gated mega menu**

The current city mode shows a flat list of services. Replace with Residential/Commercial columns showing only services with content.

In Header.tsx, replace the city services dropdown section (the block gated by `cityMode && item.dropdownId === 'services'`) with a mini mega menu:

```tsx
{isOpen && item.dropdownId === 'services' && cityMode && (
  <div className="absolute left-[-100px] mt-2 w-[600px] max-w-[95vw] bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200 border border-gray-100">
    <div className="grid grid-cols-2 gap-8">
      {/* Residential Column */}
      {cityServiceMap.some(m => m.audience === 'residential') && (
        <div>
          <Link to="/services/residential/" className="text-sm font-bold text-gray-900 hover:text-primary transition-colors">
            Residential Services
          </Link>
          <div className="mt-3 space-y-1">
            {cityServiceMap
              .filter(m => m.audience === 'residential')
              .map(m => (
                <Link key={m.serviceId} to={m.nestedPath} className="block px-2 py-1.5 text-[13px] text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors">
                  {m.title}
                </Link>
              ))
            }
          </div>
        </div>
      )}
      {/* Commercial Column */}
      {cityServiceMap.some(m => m.audience === 'commercial') && (
        <div>
          <Link to="/services/commercial/" className="text-sm font-bold text-gray-900 hover:text-primary transition-colors">
            Commercial Services
          </Link>
          <div className="mt-3 space-y-1">
            {cityServiceMap
              .filter(m => m.audience === 'commercial')
              .map(m => (
                <Link key={m.serviceId} to={m.nestedPath} className="block px-2 py-1.5 text-[13px] text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors">
                  {m.title}
                </Link>
              ))
            }
          </div>
        </div>
      )}
    </div>
    <div className="mt-4 pt-3 border-t border-gray-100">
      <Link to="/services/" className="text-sm text-primary font-medium hover:text-primaryHover transition-colors">
        View All Services →
      </Link>
    </div>
  </div>
)}
```

Add to the component's useMemo section:

```tsx
const cityServiceMap = useMemo(() => {
  if (!cityMode) return [];
  const { getCityServiceMap } = require('../../hooks/useCityApp');
  return getCityServiceMap();
}, [cityMode]);
```

Actually, use a proper import instead of require:

```tsx
import { isCityApp, getCityServiceSlugs, getCityServiceMap } from '../../hooks/useCityApp';
// ...
const cityServiceMap = useMemo(() => cityMode ? getCityServiceMap() : [], [cityMode]);
```

**Step 2: Commit**

```bash
git add components/layout/Header.tsx
git commit -m "feat: content-gated mega menu with Residential/Commercial columns for city"
```

---

### Task 8: Update MobileMenu city structure to use nested paths

**Files:**
- Modify: `components/layout/MobileMenu.tsx`

**Step 1: Update buildCityMenuStructure to use nested paths**

Replace the `buildCityMenuStructure()` function to use `getCityServiceMap()` instead of `getCityServiceSlugs()`:

```tsx
import { isCityApp, getCityServiceMap } from '../../hooks/useCityApp';
// Remove: getCityServiceSlugs, SERVICES imports (no longer needed for city menu)

function buildCityMenuStructure(): MenuItem[] {
  const serviceMap = getCityServiceMap();

  const residentialServices = serviceMap
    .filter(m => m.audience === 'residential')
    .map(m => ({ label: m.title, path: m.nestedPath }));

  const commercialServices = serviceMap
    .filter(m => m.audience === 'commercial')
    .map(m => ({ label: m.title, path: m.nestedPath }));

  const serviceChildren = [
    { label: 'All Services', path: '/services/' },
    ...(residentialServices.length > 0 ? [{ label: '— Residential —', path: '/services/residential/' }] : []),
    ...residentialServices,
    ...(commercialServices.length > 0 ? [{ label: '— Commercial —', path: '/services/commercial/' }] : []),
    ...commercialServices,
  ];

  return [
    { label: 'Home', path: '/', icon: Home, type: 'link' },
    { label: 'Services', icon: Briefcase, type: 'accordion', children: serviceChildren },
    { label: 'Guides', icon: BookOpen, type: 'accordion', children: [
      { label: 'Emergency Response', path: '/guides/emergency-response/' },
      { label: 'Prevention Guide', path: '/guides/prevention/' },
      { label: 'Insurance Claims', path: '/guides/insurance-claims/' },
    ]},
    { label: 'Blog', path: '/blog/', icon: FileText, type: 'link' },
    { label: 'About', path: '/about/', icon: Info, type: 'link' },
    { label: 'FAQ', path: '/faq/', icon: HelpCircle, type: 'link' },
    { label: 'Contact', path: '/contact/', icon: Phone, type: 'link' },
  ];
}
```

**Step 2: Commit**

```bash
git add components/layout/MobileMenu.tsx
git commit -m "feat: update city mobile menu to use nested service paths"
```

---

### Task 9: Update Footer city links to use nested service paths

**Files:**
- Modify: `components/layout/Footer.tsx`

**Step 1: The city footer Services column currently only has "All Services"**

This is adequate for now. Optionally add Residential/Commercial hub links:

```tsx
{/* City Footer Services column */}
<MobileAccordionItem title="Services" isOpen={!!openSections["Services"]} onToggle={() => toggleSection("Services")}>
    <ul className="space-y-3">
        <li><Link to="/services/" className="block text-sm text-gray-500 hover:text-primary transition-colors py-2 md:py-0">All Services</Link></li>
        <li><Link to="/services/residential/" className="block text-sm text-gray-500 hover:text-primary transition-colors py-2 md:py-0">Residential</Link></li>
        <li><Link to="/services/commercial/" className="block text-sm text-gray-500 hover:text-primary transition-colors py-2 md:py-0">Commercial</Link></li>
    </ul>
</MobileAccordionItem>
```

**Step 2: Commit**

```bash
git add components/layout/Footer.tsx
git commit -m "feat: add Residential/Commercial hub links to city footer"
```

---

### ✅ Batch 3 Verification

```bash
npm run build          # Main: 189/189
npm run build:city     # City bundle OK
npx tsx scripts/build-cities.ts
npm run prerender:cities  # All green

# Check prerendered HTML for correct nav links:
grep -o 'href="/services/residential/[^"]*"' dist-cities/mclean/services/index.html | head -5
# Should show nested paths, NOT flat paths
# Should NOT contain any flood.doctor links
grep 'flood.doctor' dist-cities/mclean/services/index.html
```

**STOP. Report results. Wait for feedback before Batch 4.**

---

## Batch 4 — Prerender Scaling + Sitemap Finalization

### Task 10: Verify full build pipeline end-to-end

**Step 1: Full clean build**

```bash
npm run build                    # Main site
npm run build:city               # City bundle
npx tsx scripts/build-cities.ts  # Generate 13 city sites
npm run prerender:cities         # Prerender all city routes
```

**Step 2: Record metrics**

- Main route count: expected 189
- City route count per city: expected ~34 (12 static + 8 service detail + ~6 hubs + ~3 blog + ~5 neighborhoods)
- Total city routes: expected ~442
- Prerender time: record and compare to 5-minute threshold

**Step 3: Verify sample city (mclean)**

```bash
# Hub pages exist:
ls dist-cities/mclean/services/residential/index.html
ls dist-cities/mclean/services/commercial/index.html

# Subcategory hubs exist (at least restoration-services and cleanup-services):
ls dist-cities/mclean/services/residential/restoration-services/index.html
ls dist-cities/mclean/services/residential/cleanup-services/index.html

# Nested service detail exists:
ls dist-cities/mclean/services/residential/restoration-services/water-damage-restoration/index.html

# Service WITHOUT city content does NOT exist:
ls dist-cities/mclean/services/residential/cleanup-services/odor-removal/index.html 2>&1
# Expected: No such file

# Old flat route does NOT have a prerendered page:
ls dist-cities/mclean/services/water-damage/index.html 2>&1
# Expected: No such file

# .htaccess redirects are present:
grep 'water-damage' dist-cities/mclean/.htaccess
# Expected: RewriteRule ^services/water-damage/?$ /services/residential/restoration-services/water-damage-restoration/ [R=301,L]
```

**Step 4: SEO spot checks on prerendered HTML**

```bash
# Canonical is city URL (not flood.doctor):
grep 'canonical' dist-cities/mclean/services/residential/restoration-services/water-damage-restoration/index.html

# Title length:
grep '<title>' dist-cities/mclean/services/residential/restoration-services/water-damage-restoration/index.html

# Only one H1:
grep -c '<h1' dist-cities/mclean/services/residential/restoration-services/water-damage-restoration/index.html
# Expected: 1

# No flood.doctor nav links:
grep -o 'href="https://flood.doctor[^"]*"' dist-cities/mclean/services/residential/restoration-services/water-damage-restoration/index.html
# Expected: empty
```

**Step 5: Commit (if any fixes were needed)**

```bash
git add -A
git commit -m "fix: address verification findings for city services parity"
```

---

### ✅ Batch 4 Verification (Final)

```bash
npm run build && npm run build:city && npx tsx scripts/build-cities.ts && npm run prerender:cities
```

| Check | Expected |
|-------|----------|
| Main build | 189/189 |
| City prerender | All green (~442 routes) |
| Build time | < 5 minutes |
| /services/ | 200 |
| /services/residential/ | 200 |
| /services/residential/restoration-services/ | 200 |
| /services/residential/restoration-services/water-damage-restoration/ | 200 (has content) |
| /services/residential/cleanup-services/odor-removal/ | 404 (no city content) |
| /services/water-damage/ (flat) | 301 → nested path |
| No flood.doctor links in city nav | ✅ |
| Canonical = city URL | ✅ |
| One H1 per page | ✅ |
| Title ≤ 60 chars | ✅ |

---

## Key Design Decisions

### How content-gated visibility works at each layer

| Layer | Mechanism | Source of truth |
|-------|-----------|----------------|
| **Prerender** | `getCityServiceRoutes(citySlugs)` only returns routes with content | Filesystem: `src/content/cities/{city}/services/*.ts` |
| **Nav menus** | `getCityServiceMap()` (from `window.__FLOOD_DOCTOR_CITY_SERVICE_MAP__`) only contains services with content | Build-time injection from filesystem |
| **Hub page cards** | `ServicesHub` and `CategoryLanding` accept `filterServiceIds` prop; city hub wrappers pass `getCityServiceMap()` IDs | Build-time injection → `getCityServiceMap()` at runtime |
| **Service detail** | Route exists for all 27 via wildcard; renders if SERVICES array has the slug; real 404 at Apache level for prerendered | SERVICES array for rendering, Apache for 404 |

**Content-gated hubs:** Hub pages only show service cards for services with city content. The city hub wrapper components (`CityResidentialHub`, `CityCommercialHub`, `CitySubcategoryHub`) each call `getCityServiceMap()` and pass a `filterServiceIds` set to `ServicesHub`/`CategoryLanding`. No dead-end 404 clicks from hub pages. If a subcategory has zero services with content, the subcategory hub redirects to the parent audience hub.

### When content is added for a new service

1. Author creates `src/content/cities/{city}/services/{slug}.ts`
2. Next build automatically:
   - Adds the service to `window.__FLOOD_DOCTOR_CITY_SERVICE_MAP__`
   - Adds the nested route to prerender list
   - Adds the route to sitemap
   - Shows the service in nav menus
3. **No code change needed** — content presence drives everything

### Estimated route counts

| City | Static | Services (8 detail) | Hubs (~6) | Blog (~3) | Neighborhoods (~5) | Total |
|------|--------|---------------------|-----------|-----------|--------------------|----|
| Standard | 12 | 8 | 6 | 3 | 5 | ~34 |
| Arlington | 12 | 8* | 6 | 3 | 5 | ~34 |
| **13 cities** | | | | | | **~442** |

*Arlington's emergency-water-removal maps to water-damage-restoration (same nested path), so count stays at 8.
