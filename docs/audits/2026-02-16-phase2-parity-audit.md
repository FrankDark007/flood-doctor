# Phase 2 Parity Audit Report
**Date:** 2026-02-16

---

## 1. Main Site Services Taxonomy

**Source files:** `data/services.ts` (27 ServiceData entries), `data/services-index.ts` (pre-computed indices), `types.ts` (ServiceAudience, ServiceCategory)

### RESIDENTIAL (14 services)

| # | ID | Title | Category | Subcategory Path | Service Slug (last segment) |
|---|-----|-------|----------|-----------------|---------------------------|
| 1 | res-odor | Odor Removal | CLEANUP | cleanup-services | odor-removal |
| 2 | res-water | Water Damage Restoration | RESTORATION | restoration-services | water-damage-restoration |
| 3 | res-fire | Fire & Smoke Cleanup | CLEANUP | cleanup-services | fire-smoke-cleanup |
| 4 | res-content | Contents Cleaning | CLEANUP | cleanup-services | contents-cleaning-packout |
| 5 | res-base | Basement Flooding | SPECIALTY | specialty-services | basement-flooding |
| 6 | res-crawl | Crawl Space Drying | SPECIALTY | specialty-services | crawl-space-drying |
| 7 | res-floor | Hardwood Floor Drying | SPECIALTY | specialty-services | hardwood-floor-drying |
| 8 | res-roof | Roof Leak Water Damage | SPECIALTY | specialty-services | roof-leak-water-damage |
| 9 | res-flood | Flood Cleanup | RESTORATION | restoration-services | flood-cleanup |
| 10 | res-sewage | Sewage Cleanup | CLEANUP | cleanup-services | sewage-cleanup |
| 11 | res-mold | Mold Remediation | CLEANUP | cleanup-services | mold-remediation |
| 12 | res-struct | Structural Drying | RESTORATION | restoration-services | structural-drying |
| 13 | res-storm | Storm Damage Restoration | RESTORATION | restoration-services | storm-damage-restoration |
| 14 | res-burst | Burst Pipe Cleanup | RESTORATION | restoration-services | burst-pipe-cleanup |

### COMMERCIAL (13 services)

| # | ID | Title | Category | Subcategory Path | Service Slug (last segment) |
|---|-----|-------|----------|-----------------|---------------------------|
| 15 | com-water | Commercial Water Damage | RESTORATION | restoration-services | commercial-water-damage |
| 16 | com-flood | Commercial Flood Cleanup | RESTORATION | restoration-services | commercial-flood-cleanup |
| 17 | com-large | Large Loss Restoration | RESTORATION | restoration-services | large-loss-restoration |
| 18 | com-sewage | Commercial Sewage Cleanup | CLEANUP | cleanup-services | commercial-sewage-cleanup |
| 19 | com-mold | Commercial Mold Remediation | CLEANUP | cleanup-services | commercial-mold-remediation |
| 20 | com-fire | Commercial Fire Damage | CLEANUP | cleanup-services | commercial-fire-smoke-cleanup |
| 21 | com-storm | Commercial Storm Damage | RESTORATION | restoration-services | commercial-storm-damage |
| 22 | com-roof | Commercial Roof Leak | RESTORATION | restoration-services | commercial-roof-leak |
| 23 | com-health | Healthcare Restoration | SPECIALTY | specialty-services | healthcare-facilities |
| 24 | com-hospitality | Hospitality Restoration | SPECIALTY | specialty-services | hospitality-multifamily |
| 25 | com-edu | Municipal & Education | SPECIALTY | specialty-services | municipal-education |
| 26 | com-ind | Industrial Restoration | SPECIALTY | specialty-services | industrial-facilities |
| 27 | com-tech-map | Moisture Mapping | TECHNICAL | technical-services | moisture-mapping-consulting |
| 28 | com-tech-iaq | Indoor Air Quality | TECHNICAL | technical-services | indoor-air-quality |
| 29 | com-tech-env | Environmental Testing | TECHNICAL | technical-services | environmental-testing |

### Hub Pages on Main Site

| Path | Type | Component |
|------|------|-----------|
| /services/ | Main hub | ServicesHub |
| /services/residential/ | Audience hub | ServicesHub (filterAudience="RESIDENTIAL") |
| /services/commercial/ | Audience hub | ServicesHub (filterAudience="COMMERCIAL") |
| /services/residential/restoration-services/ | Subcategory | CategoryLanding |
| /services/residential/cleanup-services/ | Subcategory | CategoryLanding |
| /services/residential/specialty-services/ | Subcategory | CategoryLanding |
| /services/commercial/restoration-services/ | Subcategory | CategoryLanding |
| /services/commercial/cleanup-services/ | Subcategory | CategoryLanding |
| /services/commercial/specialty-services/ | Subcategory | CategoryLanding |
| /services/commercial/technical-services/ | Subcategory | CategoryLanding |

**Total: 27 service pages + 10 hub pages = 37 service-related pages on main site**

---

## 2. City Service Content Coverage

### City Content Files Present

**All 12 non-Arlington cities have 8 files:**
basement-flooding.ts, burst-pipe.ts, fire-damage.ts, flood-cleanup.ts, mold-remediation.ts, sewage-cleanup.ts, storm-damage.ts, water-damage.ts

**Arlington has 9 files (+ emergency-water-removal.ts)**

### Slug Mapping: City Filename → Main Taxonomy

| City Filename | Main Service ID | Main Slug (last segment) | Nested Path | MATCH? |
|--------------|-----------------|-------------------------|-------------|--------|
| water-damage | res-water | water-damage-restoration | /services/residential/restoration-services/water-damage-restoration/ | ❌ MISMATCH |
| flood-cleanup | res-flood | flood-cleanup | /services/residential/restoration-services/flood-cleanup/ | ✅ |
| mold-remediation | res-mold | mold-remediation | /services/residential/cleanup-services/mold-remediation/ | ✅ |
| sewage-cleanup | res-sewage | sewage-cleanup | /services/residential/cleanup-services/sewage-cleanup/ | ✅ |
| fire-damage | res-fire | fire-smoke-cleanup | /services/residential/cleanup-services/fire-smoke-cleanup/ | ❌ MISMATCH |
| storm-damage | res-storm | storm-damage-restoration | /services/residential/restoration-services/storm-damage-restoration/ | ❌ MISMATCH |
| burst-pipe | res-burst | burst-pipe-cleanup | /services/residential/restoration-services/burst-pipe-cleanup/ | ❌ MISMATCH |
| basement-flooding | res-base | basement-flooding | /services/residential/specialty-services/basement-flooding/ | ✅ |
| emergency-water-removal (Arlington only) | — | — | — | ❌ NO MATCH (city-only service) |

**4 out of 8 common slugs match exactly. 4 have mismatches.**
**Arlington's emergency-water-removal has no main taxonomy equivalent.**

### Coverage Matrix (city × 27 main services)

| Service | Coverage (8 city files / 27 main services) |
|---------|---------------------------------------------|
| Present (Residential) | 8 of 14 = 57% |
| Present (Commercial) | 0 of 13 = 0% |
| **Total** | **8 of 27 = 30%** |

**19 services have NO city content:** odor-removal, contents-cleaning-packout, crawl-space-drying, hardwood-floor-drying, roof-leak-water-damage, structural-drying, + all 13 commercial services.

---

## 3. Current City Routing vs Target

### Current City Service Routing (CityApp.tsx)

```
/services/                    → CityServicesHub (lists all 27 as flat cards)
/services/:serviceSlug/       → CityServiceDetail (renders ServiceDetailNew with SERVICES data)
```

**CityServiceDetail** (`pages/city-app/CityServiceDetail.tsx`):
- Takes `:serviceSlug` param
- Finds service in SERVICES array by matching last segment of nested slug
- Passes full `ServiceData` to `ServiceDetailNew` component
- **Does NOT use city content files (ServicePageContent)** — uses main site ServiceData
- City content files (`src/content/cities/{city}/services/*.ts`) are NOT loaded by this component

**Prerender** (`scripts/prerender.ts` → `getCityRoutes()`):
- Generates flat routes for ALL 27 services: `/services/{lastSegment}/`
- Routes are NOT gated by city content presence
- Current total: ~50 routes per city × 13 cities = 656

### Target City Service Routing

```
/services/                                                  → CityServicesHub
/services/residential/                                      → City Residential Hub
/services/commercial/                                       → City Commercial Hub
/services/residential/restoration-services/                 → City Subcategory Hub
/services/residential/cleanup-services/                     → City Subcategory Hub
/services/residential/specialty-services/                   → City Subcategory Hub
/services/commercial/restoration-services/                  → City Subcategory Hub
/services/commercial/cleanup-services/                      → City Subcategory Hub
/services/commercial/specialty-services/                    → City Subcategory Hub
/services/commercial/technical-services/                    → City Subcategory Hub
/services/residential/{subcategory}/{serviceSlug}/          → City Service Detail
/services/commercial/{subcategory}/{serviceSlug}/           → City Service Detail
```

**Plus 301 redirects from old flat routes:**
```
/services/water-damage/              → /services/residential/restoration-services/water-damage-restoration/
/services/flood-cleanup/             → /services/residential/restoration-services/flood-cleanup/
... (all 27 flat slugs)
```

### Delta

| What | Current | Target | Change |
|------|---------|--------|--------|
| Service detail URL structure | Flat `/services/:slug/` | Nested `/services/{audience}/{subcategory}/{slug}/` | Breaking change — needs 301 |
| Service detail routing | Single `:serviceSlug` param | Multi-segment wildcard or explicit routes | New route patterns |
| Hub pages | 1 (services/) | 10 (1 main + 2 audience + 7 subcategory) | +9 new pages |
| Content gating | None (all 27 prerendered) | Only services with content files | Reduces prerendered count |
| Flat route handling | Renders page | 301 redirect to nested | Migration |

---

## 4. Data Shape Comparison

### ServiceData (main site — types.ts)
Used by: `ServiceDetailNew`, `CategoryLanding`, `ServicesHub`, all main site rendering.

```typescript
interface ServiceData {
  id: string;
  title: string;
  slug: string;                    // Full nested path
  shortDescription: string;
  audience: ServiceAudience;       // 'RESIDENTIAL' | 'COMMERCIAL'
  category: ServiceCategory;       // 'RESTORATION' | 'CLEANUP' | 'SPECIALTY' | 'TECHNICAL'
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  heroHeading: string;
  heroIntro: string;
  heroVisualKey: string;
  thumbVisualKey: string;
  infographicType: string;
  whenToCall: string[];
  whatWeDo: string[];
  contentSections: { heading, intro, cards[] };
  whatToExpect: { timeline, arrival, daily, noise };
  safety: { head, items[], kidsPets };
  faqs: FAQItem[];
  relatedServiceIds: string[];
  // ... more fields
}
```

### ServicePageContent (city content files)
Defined in each city content file. **NOT imported or used by CityServiceDetail.**

```typescript
interface ServicePageContent {
  meta: { title, description, canonical };
  h1: string;
  introSection: { headline, paragraphs[], localContext };
  processSection: { headline, steps[] };
  localChallenges: { headline, challenges[] };
  equipmentSection: { headline, equipment[], localNote };
  pricingSection: { headline, intro, factors[], cta };
  serviceAreaSection: { headline, neighborhoods[], responseTime };
  faqSection: { question, answer }[];
  relatedServices: string[];
  finalCTA: { headline, paragraph, phone, buttonText };
}
```

### Key Differences
| Aspect | ServiceData | ServicePageContent |
|--------|------------|-------------------|
| Used by | ServiceDetailNew (main template) | **Nothing currently** |
| Content | Generic (not city-specific) | 100% city-specific |
| H1 | Generated from title + city | Explicit per page |
| Meta | Generated | Explicit per page |
| Sections | whenToCall, whatWeDo, contentSections | localChallenges, equipmentSection, processSection |
| FAQ | FAQItem[] | Same shape |

**CRITICAL FINDING:** CityServiceDetail currently renders ServiceData (generic main-site content) — NOT city-specific content. The city content files exist but are orphaned/unused by the current routing.

---

## 5. Candidate Implementation Approach

### Option A: Adapter Pattern (RECOMMENDED)

Create an adapter that merges ServiceData (for taxonomy/structure) with ServicePageContent (for city-specific text):

1. **Keep ServiceDetailNew as the rendering template** — it's complex and well-tested
2. **Create `adaptCityContent(service: ServiceData, cityContent: ServicePageContent): ServiceData`** that overrides text fields (heroHeading, heroIntro, faqs, etc.) with city-specific content
3. **City routes use the same ServiceDetailNew** but with adapted data
4. **Hub/subcategory pages reuse CategoryLanding** with city-filtered service lists
5. **Content-present check:** `hasCityServiceContent(cityId, serviceSlug): boolean` reads filesystem at build time, checks `window.__FLOOD_DOCTOR_CITY_SERVICES__` at runtime

**Pros:** Reuses battle-tested components, single template to maintain
**Cons:** Adapter complexity, ServicePageContent fields don't map 1:1

### Option B: Separate City Service Template

Create a new `CityServiceDetailV2` that renders ServicePageContent directly.

**Pros:** Clean separation, city content shape drives rendering
**Cons:** Duplicate template maintenance, different UX between main and city

### Recommendation: Option A

The ServiceDetailNew template is extensively customized with 15+ sub-components. Duplicating it for city would create maintenance burden. An adapter layer is simpler.

---

## 6. Content-Present Check Design

### Build-time (prerender + build-cities)

```typescript
function getCityServiceSlugs(cityId: string): string[] {
  // Already exists in build-cities.ts — reads src/content/cities/{city}/services/
  // Returns: ['water-damage', 'mold-remediation', ...]
}
```

### Runtime (nav rendering)

```typescript
// Already injected: window.__FLOOD_DOCTOR_CITY_SERVICES__ = ['water-damage', ...]
function hasCityServiceContent(slug: string): boolean {
  return getCityServiceSlugs().includes(slug);
}
```

### Slug Mapping Function (NEW — needed)

```typescript
// Maps city content filename to main taxonomy info
interface CityServiceMapping {
  citySlug: string;        // 'water-damage' (filename)
  mainSlug: string;        // 'water-damage-restoration' (last segment of main slug)
  serviceId: string;       // 'res-water'
  audience: 'residential' | 'commercial';
  subcategory: string;     // 'restoration-services'
  nestedPath: string;      // '/services/residential/restoration-services/water-damage-restoration/'
}

// This mapping must handle the 4 mismatched slugs:
// water-damage → water-damage-restoration
// fire-damage → fire-smoke-cleanup
// storm-damage → storm-damage-restoration
// burst-pipe → burst-pipe-cleanup
```

---

## 7. Route Count Projections (Content-Gated)

### Per City (with current 8 content files)

| Route Type | Count |
|-----------|-------|
| Static pages (home, about, contact, etc.) | 12 |
| Service detail (only with content) | 8 |
| Hub pages (services, residential, subcategories) | ~5-6 (only hubs that have ≥1 service with content) |
| Blog articles | ~3 |
| Neighborhoods | ~5 |
| **Total per city** | **~33-34** |

### vs Current

| | Current | Phase 2 (content-gated) |
|--|---------|------------------------|
| Per city | ~50 | ~34 |
| Total (13 cities) | 656 | ~442 |

**Note:** Route count DECREASES because we stop prerendering 19 services without city content. It increases again as content is authored.

### When All 27 Services Have Content

| | Future (full content) |
|--|----------------------|
| Per city | ~50 (27 services + 10 hubs + 12 static + blogs + neighborhoods) |
| Total (13 cities) | ~770+ |

---

## Summary of Critical Findings

1. **City content files are ORPHANED** — ServicePageContent exists but CityServiceDetail renders ServiceData instead
2. **4 slug mismatches** between city filenames and main taxonomy slugs
3. **Arlington has a city-only service** (emergency-water-removal) with no main taxonomy mapping
4. **0% commercial coverage** — no city content for any of the 13 commercial services
5. **Current prerender generates all 27 flat routes** regardless of content presence
6. **ServiceDetailNew expects ServiceData** — needs adapter or override to use city content
7. **Hub/subcategory pages (CategoryLanding)** can be reused with audience/category filtering
8. **301 redirect mapping** needed for flat→nested URL migration (including 4 slug changes)
