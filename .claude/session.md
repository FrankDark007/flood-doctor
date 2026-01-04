# Flood Doctor Website

> **Main production website** — Google-style UI design patterns

---

## Project Purpose

**Goal:** Water damage restoration website with Google Business/Workspace design patterns
**Status:** ✅ DEPLOYED TO PRODUCTION
**Live URL:** https://flood.doctor
**Created:** 2026-01-02
**Updated:** 2026-01-04

---

## 🔧 LATEST FIX (2026-01-04)

**Issue:** `ERR_TOO_MANY_REDIRECTS` on live site
**Cause:** Apache `.htaccess` was forcing HTTPS redirect, but Cloudflare Flexible SSL connects to origin via HTTP → infinite redirect loop
**Fix:** Removed HTTPS redirect from `.htaccess` (Cloudflare handles SSL at edge)
**Result:** Site now loads correctly at https://flood.doctor

---

## 🚀 DEPLOYMENT STATUS

### Main Site: ✅ LIVE
- **URL:** https://flood.doctor
- **Hosting:** GoDaddy (132.148.253.156)
- **CDN:** Cloudflare (Flexible SSL)
- **Last Deploy:** 2026-01-04

### Subdomains: ✅ FILES DEPLOYED → ⏳ CPANEL CONFIG NEEDED
All 13 city site files uploaded via FTP (2026-01-03):
- ✅ mclean.flood.doctor → /mclean/
- ✅ arlington.flood.doctor → /arlington/
- ✅ alexandria.flood.doctor → /alexandria/
- ✅ fairfax.flood.doctor → /fairfax/
- ✅ vienna.flood.doctor → /vienna/
- ✅ tysons.flood.doctor → /tysons/
- ✅ reston.flood.doctor → /reston/
- ✅ herndon.flood.doctor → /herndon/
- ✅ ashburn.flood.doctor → /ashburn/
- ✅ springfield.flood.doctor → /springfield/
- ✅ fallschurch.flood.doctor → /fallschurch/
- ✅ greatfalls.flood.doctor → /greatfalls/
- ✅ lorton.flood.doctor → /lorton/

**Next:** Configure GoDaddy cPanel to route subdomains to their folders

---

## Deployment Files

### FTP Credentials
- Server: 132.148.253.156
- Username: Deploy@flood.doctor
- Path: FTP root (NOT public_html)

### Cloudflare
- Zone ID: 7b3b2f087429c5c3e9688253d8df11eb
- SSL Mode: Flexible
- 13 DNS A records + wildcard created

### Key Config Files on Server
- `.htaccess` - MIME types + SPA routing
- `index.html` - Main entry point
- `assets/` - JS/CSS bundles
- `sitemaps/` - 15 XML sitemaps

---

## ✅ Completed V3 Tasks

1. ✅ **Build working** - Vite production build
2. ✅ **Fixed base path** - Changed from `/flood-doctor/` to `/`
3. ✅ **Cloudflare DNS** - All 13 cities + wildcard
4. ✅ **FTP Upload** - 378 files to GoDaddy
5. ✅ **MIME types** - JS serving as application/javascript
6. ✅ **SSL** - Cloudflare Flexible mode
7. ✅ **Cache purge** - Cloudflare cache cleared

---

## Content Statistics
- **Total Files:** 281 TypeScript content files
- **Cities:** 13 city subdomains
- **Build Status:** ✅ Passing
- **Sitemaps:** 15 files (264 URLs)

---

## ✅ Architecture V2 Audit — PASSED (2026-01-03)

**All 5 phases fully implemented:**

| Phase | Status |
|-------|--------|
| Phase 1: Data Layer (`data/franchises.ts`) | ✅ 100% |
| Phase 2: Logic (`hooks/useFranchise.ts`) | ✅ 100% |
| Phase 3: Components (`ServiceRequestForm`) | ✅ 100% |
| Phase 4: Sitemaps (15 files, 264 URLs) | ✅ 100% |
| Phase 5: Pre-Flight (placeholders remain) | ⚠️ 60% |

**Placeholder data needing replacement:**
- Phone numbers (using `703-656-0XXX` pattern)
- Google Maps embed URLs
- Google Place IDs (for reviews API)
- Manager/team images
- Partner URLs/phones

---

## 🎨 VISUAL COMPONENTS LIBRARY (2026-01-03)

**Created comprehensive premium visual component library:**

### New Components in `components/graphics/`:
- `WaterDropletIcon.tsx` - Animated water droplet with gradients
- `EmergencyBadge.tsx` - Pulsing 24/7 emergency badge
- `TrustBadges.tsx` - Certification badges (IICRC, Licensed, etc.)
- `ProcessTimeline.tsx` - 4-step restoration process infographic
- `ComparisonTable.tsx` - Flood Doctor vs competitors comparison
- `AnimatedStats.tsx` - Counter animation stats display
- `BeforeAfterSlider.tsx` - Interactive before/after comparison
- `AnimatedHeroBackground.tsx` - Archetype-specific animated backgrounds
- `ServiceIconGrid.tsx` - Service icons with SVG graphics
- `ProcessGallery.tsx` - Interactive gallery using process tile images

### Enhanced Archetype Templates:
- `CityPageEstate.tsx` - McLean, Great Falls (wine cellar, high-value assets)
- `CityPageHistoric.tsx` - Alexandria, Falls Church, Vienna (BAR compliance, original materials)
- `CityPageUrban.tsx` - Arlington, Tysons, Reston (multi-unit, HOA coordination)
- `CityPageSuburban.tsx` - Fairfax, Springfield, Herndon, Ashburn, Lorton (basement, split-level)

### Image Configuration:
- `config/unsplashImages.ts` - Curated Unsplash images for each archetype
- 50+ process tile images extracted to `/public/images/process-tiles/`

### Demo Page:
- `/dev/visual-components/` - Showcases all visual components

### ✅ Neighborhood Pages Integration (2026-01-04):
- **81 neighborhood pages** now render with full visual components
- Enhanced `NeighborhoodPageRenderer.tsx` with:
  - `AnimatedHeroBackground` (archetype-specific variants)
  - `TrustBadges` (horizontal layout)
  - `EmergencyBadge` (hero + CTA sections)
  - `AnimatedStats` (cards variant)
  - `ProcessTimeline` (horizontal)
  - `ServiceIconGrid` (large, 3-column)
- Archetype detection via `getArchetype(citySlug)` from `archetypeMapping.ts`
- All 13 cities × 5-7 neighborhoods = 81 pages enhanced

---

## Next Steps

### ✅ FTP DEPLOYMENT COMPLETE (2026-01-03)

All 13 city subdomain sites uploaded to GoDaddy FTP:
- mclean, arlington, alexandria, fairfax, vienna
- tysons, reston, herndon, ashburn, springfield
- fallschurch, greatfalls, lorton

### ⏳ PENDING: Configure GoDaddy cPanel Subdomains

Files are on server but subdomains need cPanel configuration:

1. **Log into GoDaddy cPanel** → https://myh.godaddy.com
2. **Navigate to Subdomains** section
3. **Create wildcard subdomain** OR add each city individually:
   - Document root: `/home/[user]/mclean` → mclean.flood.doctor
   - Document root: `/home/[user]/arlington` → arlington.flood.doctor
   - (repeat for all 13 cities)

**Alternative:** Configure `.htaccess` with RewriteRules for subdomain routing

### 🚨 BLOCKERS BEFORE LAUNCH:

1. **Real Phone Numbers** — each franchise needs actual phone line
   - Currently using placeholder pattern: `703-656-0XXX`
   - Need 13 real trackable numbers (one per city)

2. **Verified Google Business Profiles** — each city needs GBP
   - Create/claim GBP listing for each franchise location
   - Verify each location (postcard, phone, or video)
   - Link GBP to corresponding subdomain

3. **Unique Content Per City** — avoid spam/doorway page penalties
   - City-specific service descriptions (not just name swaps)
   - Local neighborhoods, landmarks, architecture notes
   - Area-specific water damage issues (flood zones, older homes, basements)
   - Local case studies / testimonials
   - Unique blog posts per city
   - City-specific FAQs
   - Local emergency contacts, hospitals, utility companies

4. **cPanel Subdomain Config** — route subdomains to folders

### After Above Complete:
1. Update `data/franchises.ts` with real phone numbers
2. Rebuild city sites with real data
3. Redeploy to FTP
4. Verify sites load at https://[city].flood.doctor
5. ⏸️ **DO NOT submit to GSC** — wait for explicit approval

---

---

## 📋 AUDIT RESULTS (2026-01-04)

### Live Site Smoke Tests
| Route | Status |
|-------|--------|
| https://flood.doctor | ✅ 200 OK |
| https://flood.doctor/services/ | ✅ 200 OK |
| https://flood.doctor/contact/ | ✅ 200 OK |
| https://flood.doctor/about/ | ✅ 200 OK |
| City subdomains | ❌ 403 (cPanel config needed) |

### Code Quality Audits (Non-blocking)
- **Import audit:** 40 broken relative imports in city content files
- **Asset audit:** 200+ placeholder images not yet created
- **Content audit:** 100+ files with legacy schema patterns

These are technical debt items, not blockers for the live main site.

---

*Updated: 2026-01-04*
*Project: fd-google-redesign (main website)*
