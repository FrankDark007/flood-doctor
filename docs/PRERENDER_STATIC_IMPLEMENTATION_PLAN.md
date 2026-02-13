# Static Pre-Rendering Implementation Spec

> **Status:** Approved — authoritative implementation spec
> **Goal:** After `npm run build`, `dist/` contains a separate HTML file per route with unique, hardcoded `<title>`, `<meta description>`, OG tags, canonical URL, and JSON-LD. Client-side routing remains intact.

---

## Context

The flood.doctor site is a Vite + React SPA that outputs a single `index.html`. All ~197 production routes share the same HTML shell. Page-specific metadata (`<title>`, meta description, canonical URL, OG tags, JSON-LD) is injected client-side via `PageMeta`'s `useEffect`. Search engines and AI models that don't execute JavaScript see only generic homepage metadata for every URL.

**Approach:** Post-build Playwright pre-rendering. Zero changes to page components (except PageMeta flag + homepage PageMeta addition). Playwright and sirv already devDependencies — no new deps.

---

## 1. Route Source Architecture

### File: `config/routes.ts` (NEW)

Single shared source of truth for all route enumeration. Both `scripts/generate-sitemaps.ts` and `scripts/prerender.ts` import from this module. No route lists duplicated anywhere.

**Exports:**

```typescript
import { SERVICES } from '../data/services';

// Categorized route data
export const CORE_ROUTES: string[]            // /, /about/, /contact/, /request/, etc.
export const SERVICE_HUB_ROUTES: string[]     // /services/, /services/residential/, category pages
export const SERVICE_LEAF_ROUTES: string[]    // Auto-generated: SERVICES.map(s => s.slug)
export const LOCATION_ROUTES: string[]        // /locations/*, /water-damage-restoration-*-va/
export const BLOG_ROUTES: string[]            // /blog/, /blog/{slug}/
export const RESOURCE_ROUTES: string[]        // /resources/*, /guides/*
export const KEYWORD_LANDING_ROUTES: string[] // /water-damage-cleanup/, /emergency/, etc.
export const LEGAL_ROUTES: string[]           // /careers/, /privacy-policy/, /terms/
export const MISC_ROUTES: string[]            // /portal-demo/, /nearme/*, /sign/, etc.

// Composite — union of all above
export const ALL_PRERENDER_ROUTES: string[]

// City data — used by generate-sitemaps.ts
export const CITY_SUBDOMAINS: { slug: string; name: string }[]
export const CITY_SERVICES: string[]
export const CITY_NEIGHBORHOODS: Record<string, string[]>
export const CITY_BLOG_ARTICLES: Record<string, string[]>
```

**Key constraints:**
- 168 static route paths organized into semantic categories
- 29 dynamic service routes derived from `SERVICES.map(s => s.slug)`
- Do NOT hardcode paths that can be derived from data
- `generate-sitemaps.ts` refactored to import from this module instead of defining its own lists

**Source files for route extraction:**
- `App.tsx` — all route definitions (lines ~293-664)
- `data/services.ts` — 29 service objects with slugs

---

## 2. PageMeta `__PRERENDER_READY__` Logic

### File: `components/ui/PageMeta.tsx` (MODIFY)

Add a deterministic readiness signal for the prerender engine.

**At the beginning of the existing `useEffect` (before applying tags):**
```typescript
(window as any).__PRERENDER_READY__ = false;
```

**At the end of the existing `useEffect` (after all meta tags + JSON-LD are applied):**
```typescript
(window as any).__PRERENDER_READY__ = true;
```

**Behavior:**
- Flag resets to `false` on every route change (useEffect re-fires when deps change)
- Flag is `true` only after ALL metadata (title, description, OG, canonical, JSON-LD) is applied
- Single deterministic signal — no title-change heuristics, no homepage special cases
- Same wait logic for every route without exception

---

## 3. Homepage PageMeta Addition

### File: `pages/fd-home-v4/index.tsx` (MODIFY)

Currently the homepage does NOT use PageMeta. Metadata comes only from `index.html` defaults. This creates a special case that must be eliminated.

**Add to component:**
```typescript
import PageMeta from '../../components/ui/PageMeta';
import { generateHomepageSchema } from '../../utils/schema';

// Inside component JSX (before other content):
<PageMeta
  title="Emergency Water Damage Restoration"
  description="24/7 Emergency water damage restoration in Northern Virginia. 60-minute response. IICRC-certified. Call (877) 497-0007."
  schema={homepageSchema}
/>
```

**Result:** All routes — including homepage — go through PageMeta and set `__PRERENDER_READY__`. Zero special cases in the prerender engine.

---

## 4. Hydration Strategy

### File: `index.tsx` (MODIFY)

Replace unconditional `createRoot` with conditional hydration detection:

```typescript
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, <React.StrictMode><App /></React.StrictMode>);
} else {
  ReactDOM.createRoot(rootElement).render(<React.StrictMode><App /></React.StrictMode>);
}
```

**Behavior:**
- Pre-rendered HTML files have content in `#root` → `hydrateRoot` preserves existing DOM, attaches event listeners
- SPA fallback (no pre-rendered content) → `createRoot` renders from scratch
- Client-side navigation after initial load works identically in both paths

---

## 5. Pre-Render Engine

### File: `scripts/prerender.ts` (NEW)

```
Flow:
1. vite build completes → dist/ has SPA shell
2. Start local HTTP server (port 4173) serving dist/ with SPA fallback via sirv
3. Launch Playwright Chromium (headless)
4. For each route (5 concurrent tabs):
   a. Navigate to http://localhost:4173{route}
   b. Wait for window.__PRERENDER_READY__ === true (timeout 15s)
   c. Extract full HTML via page.content()
   d. Replace "http://localhost:4173" → "https://flood.doctor"
   e. Write to dist/{route}/index.html ("/" overwrites dist/index.html)
5. Close browser and server
6. Exit code 1 if any route failed → blocks deploy
```

**Wait strategy:** `page.waitForFunction('window.__PRERENDER_READY__ === true', { timeout: 15000 })`. Single signal, same for every route.

**Concurrency:** 5 parallel browser tabs. ~197 routes x ~2s each = ~80s total.

**URL replacement:** All occurrences of `http://localhost:4173` in extracted HTML are replaced with `https://flood.doctor` to ensure canonical URLs, OG tags, and JSON-LD reference the production domain.

**Error handling:** Failed routes are logged with error details. Script exits with code 1 if any route fails, blocking deployment.

---

## 6. Verification Script

### File: `scripts/verify-prerender.ts` (NEW)

For each route in `ALL_PRERENDER_ROUTES`, checks:

| Check | Criteria |
|-------|----------|
| File exists | HTML file at expected path (`dist/{route}/index.html`) |
| Title unique | `<title>` is NOT the generic default |
| Canonical present | Contains `rel="canonical"` |
| OG title present | Contains `og:title` |
| Minimum size | File size > 5KB |

Exit code 1 on any failure. Same checks for all routes including homepage — no special cases.

---

## 7. Build Chain Changes

### File: `package.json` (MODIFY)

```json
{
  "scripts": {
    "build": "vite build && npm run generate:sitemaps && npm run prerender",
    "prerender": "npx tsx scripts/prerender.ts",
    "prerender:verify": "npx tsx scripts/verify-prerender.ts"
  }
}
```

Build chain: `vite build` → `generate:sitemaps` → `prerender`

Verification is a separate command (`prerender:verify`), not part of the default build, to allow quick iteration during development.

---

## 8. Sitemap Refactor

### File: `scripts/generate-sitemaps.ts` (MODIFY)

Replace inline route/city data with imports from `config/routes.ts`:

- `MAIN_ROUTES` → import from `config/routes.ts`
- `CITY_SUBDOMAINS` → import from `config/routes.ts`
- `SERVICES` (city services) → import `CITY_SERVICES` from `config/routes.ts`
- `NEIGHBORHOODS` → import `CITY_NEIGHBORHOODS` from `config/routes.ts`
- `BLOG_ARTICLES` → import `CITY_BLOG_ARTICLES` from `config/routes.ts`

Logic stays identical. Only the data source changes.

---

## What Does NOT Change

- Page components (except homepage PageMeta addition per Section 3)
- Styling, forms, analytics
- URL structure
- `public/.htaccess` (already serves static files first via `-f`/`-d`, then SPA fallback)
- Deploy script (`scripts/deploy.sh`)
- Sitemap generation logic (only data source moves)

---

## Verification Steps

1. **HTML file count:** `find dist -name "*.html" | wc -l` → ~197+
2. **Spot-check 10 routes:** title, description, canonical, JSON-LD all unique and correct
3. **Verification script:** `npm run prerender:verify` passes with exit code 0
4. **Client-side nav:** `npx vite preview` → navigate between routes, confirm no full-page reloads
5. **Security check:** `grep -r 'GEMINI\|AIza' dist/ || echo CLEAN`
6. **External URL scan:** `npx tsx scripts/parity/scan-dist-external-urls.ts` passes

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Lazy-loaded component timeout | 15s timeout per route; Playwright resolves lazy imports like a real browser |
| Route fails silently | Prerender script exits 1 on any failure; verify script double-checks all output files |
| Hydration mismatch | `hasChildNodes()` check ensures correct render path; React 19 tolerates minor mismatches gracefully |
| Port 4173 in use | Script can be parameterized; fail-fast with clear error message |
| Stale dist/ from previous build | `vite build` clears dist/ before writing; prerender overwrites all HTML files |
| `__PRERENDER_READY__` never set | 15s timeout catches this; route logged as failed; script exits 1 |
| Homepage missing PageMeta | Section 3 adds PageMeta to homepage, eliminating this gap |
| Route list drift from App.tsx | `config/routes.ts` is the single source; CI can diff against App.tsx routes |

---

## Critical Files

| File | Action | Role |
|------|--------|------|
| `config/routes.ts` | CREATE | Single source of truth for all routes |
| `scripts/prerender.ts` | CREATE | Playwright-based pre-render engine |
| `scripts/verify-prerender.ts` | CREATE | Post-render validation |
| `components/ui/PageMeta.tsx` | MODIFY | Add `__PRERENDER_READY__` flag |
| `pages/fd-home-v4/index.tsx` | MODIFY | Add PageMeta with homepage schema |
| `index.tsx` | MODIFY | hydrateRoot/createRoot detection |
| `package.json` | MODIFY | Build chain scripts |
| `scripts/generate-sitemaps.ts` | MODIFY | Import from shared routes |
| `App.tsx` | READ-ONLY | Source for route extraction |
| `data/services.ts` | READ-ONLY | Dynamic service slugs |
| `public/.htaccess` | NO CHANGE | Already compatible |

---

## Implementation Order

1. `config/routes.ts` — shared route source (unblocks 4, 6, 8)
2. `components/ui/PageMeta.tsx` — `__PRERENDER_READY__` flag
3. `pages/fd-home-v4/index.tsx` — add PageMeta to homepage
4. `scripts/prerender.ts` — core pre-render engine (depends on 1)
5. `index.tsx` — hydration detection
6. `scripts/verify-prerender.ts` + `package.json` — verification and build chain (depends on 1, 4)
7. `scripts/generate-sitemaps.ts` — refactor to shared routes (depends on 1)
8. Build, verify, report results (depends on all above)
