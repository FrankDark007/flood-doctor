# Flood Doctor Website

> **Main production website** — Google-style UI design patterns

---

## Project Purpose

**Goal:** Water damage restoration website with Google Business/Workspace design patterns
**Status:** ✅ READY FOR DEPLOYMENT
**Created:** 2026-01-02
**Updated:** 2026-01-03

---

## ✅ ALL V3 TASKS COMPLETE

### Completed This Session
1. ✅ **Fixed build errors** - Escaped backticks, missing quotes in content files
2. ✅ **Routing setup** - Dynamic routes in App.tsx for city services/neighborhoods
3. ✅ **Content index files** - Auto-generated with scripts/generate-content-indexes.ts (39 index files)
4. ✅ **Schema verification** - FAQSchema, LocalBusinessSchema, PageMeta all integrated
5. ✅ **Vercel config** - Updated vercel.json with subdomain redirects, sitemap routing

### Content Statistics
- **Total Files:** 281 TypeScript content files
- **Cities:** 13 city subdomains
- **Build Status:** ✅ Passing (2.91s)
- **Sitemaps:** 15 files generated

### Per-City Content
| City | Homepage | Services | Neighborhoods | Index Files |
|------|----------|----------|---------------|-------------|
| All 13 cities | ✅ | 8 each | 5 each | 3 each |

### Content Types Per City
- **Homepage** - City-specific water damage restoration overview
- **Services (8):** water-damage, basement-flooding, burst-pipe, flood-cleanup, mold-remediation, sewage-cleanup, storm-damage, fire-damage
- **Neighborhoods (5):** City-specific neighborhood landing pages
- **Index Files (3):** city/index.ts, services/index.ts, neighborhoods/index.ts

---

## V3 Subdomain Architecture - COMPLETE

### Infrastructure
- ✅ `data/franchises.ts` - 14 franchises with coordinates, isHQ, rich localHooks
- ✅ `hooks/useFranchise.ts` - Subdomain detection + dev mode
- ✅ `contexts/FranchiseContext.tsx` - Provider pattern
- ✅ SEO Components: PageMeta, LocalBusinessSchema, FAQSchema
- ✅ ServiceRequestForm with city tagging
- ✅ Sitemap generator (15 sitemaps)
- ✅ `components/city/ServicePageRenderer.tsx` - City service page rendering
- ✅ `components/city/NeighborhoodPageRenderer.tsx` - Neighborhood page rendering
- ✅ `pages/city/DynamicServicePage.tsx` - Dynamic route handler
- ✅ `pages/city/DynamicNeighborhoodPage.tsx` - Dynamic route handler
- ✅ `utils/contentLoader.ts` - City info and content loading utilities
- ✅ `scripts/generate-content-indexes.ts` - Index file generator

### SAB Compliance
- ✅ No street addresses in LocalBusiness schema
- ✅ Dynamic canonical URLs per subdomain
- ✅ GeoCoordinates for all 14 franchises

---

## 🚀 READY FOR DEPLOYMENT

### Pre-Deployment Checklist
- [x] Build passes
- [x] 15 sitemaps generated
- [x] Schema markup verified
- [x] Vercel config updated
- [x] Deployment guide created

### Deployment Steps (see .claude/V3-DEPLOYMENT.md)
1. `vercel link`
2. Add environment variables
3. Configure domains: `flood.doctor` + `*.flood.doctor`
4. `vercel --prod`

### Post-Deployment
1. Verify all 13 subdomains resolve
2. Test SSL on each subdomain
3. Submit sitemaps to Google Search Console
4. Test phone number tracking per city
5. Verify schema markup with Google Rich Results Test

---

## Dev Server

**Command:** `cd fd-google-redesign && npm run dev`
**URL:** `http://localhost:3004/`

---

*Updated: 2026-01-03*
*Project: fd-google-redesign (main website)*
