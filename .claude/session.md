# Flood Doctor Website

> **Main production website** — Google-style UI design patterns

---

## Project Purpose

**Goal:** Water damage restoration website with Google Business/Workspace design patterns
**Status:** Production ready - SEO content COMPLETE
**Created:** 2026-01-02
**Updated:** 2026-01-03

---

## ✅ SEO CONTENT GENERATION - COMPLETE

### Content Statistics
- **Total Files:** 266 TypeScript content files (211 pages + 55 blog articles)
- **Cities:** 13 city subdomains
- **Build Status:** ✅ Passing (2.69s)
- **Sitemaps:** 15 files generated
- **Blog Articles:** 55 total (created 2026-01-03)

### Per-City Breakdown

| City | Homepage | Services | Neighborhoods | Total |
|------|----------|----------|---------------|-------|
| McLean | ✅ | 8 | 5 | 14 |
| Arlington | ✅ | 9 | 6 | 16 |
| Alexandria | ✅ | 8 | 6 | 15 |
| Fairfax | ✅ | 8 | 5 | 14 |
| Vienna | ✅ | 8 | 6 | 15 |
| Tysons | ✅ | 8 | 5 | 14 |
| Reston | ✅ | 8 | 5 | 14 |
| Herndon | ✅ | 8 | 5 | 14 |
| Ashburn | ✅ | 8 | 5 | 14 |
| Springfield | ✅ | 8 | 5 | 14 |
| Falls Church | ✅ | 8 | 5 | 14 |
| Great Falls | ✅ | 8 | 5 | 14 |
| Lorton | ✅ | 8 | 5 | 14 |

### Content Types Per City
- **Homepage** - City-specific water damage restoration overview
- **Services (8):** water-damage, basement-flooding, burst-pipe, flood-cleanup, mold-remediation, sewage-cleanup, storm-damage, fire-damage
- **Neighborhoods (5):** City-specific neighborhood landing pages
- **Blog Articles (3-5 per city):** Local SEO content on water damage topics

### Blog Articles By City
| City | Articles | Focus Topics |
|------|----------|--------------|
| McLean | 5 | Luxury estates, estate homes |
| Arlington | 5 | Condos, townhomes, urban |
| Alexandria | 5 | Historic, waterfront, Old Town |
| Fairfax | 5 | Suburban, basements, insurance |
| Tysons | 5 | High-rises, commercial, condos |
| Reston | 5 | Townhomes, planned community |
| Ashburn | 5 | New construction, data centers |
| Vienna | 5 | Historic homes, aging plumbing |
| Great Falls | 3 | Luxury estates, generators |
| Herndon | 3 | Mixed housing, waterproofing |
| Springfield | 3 | Established suburbs, basements |
| Lorton | 3 | New construction, Laurel Hill |
| Falls Church | 3 | Historic homes, moisture control |

### Content Differentiation
Each city uses unique content matrix from `src/data/seo/content-matrix.ts`:
- 100% unique sentences per city
- City-specific phone numbers (703-656-0101 through 703-656-0113)
- Neighborhood-specific challenges and solutions
- Local landmarks and geographic references

---

## V3 Subdomain Architecture - COMPLETE

### Infrastructure
- ✅ `data/franchises.ts` - 14 franchises with coordinates, isHQ, rich localHooks
- ✅ `hooks/useFranchise.ts` - Subdomain detection + dev mode
- ✅ `contexts/FranchiseContext.tsx` - Provider pattern
- ✅ SEO Components: PageMeta, LocalBusinessSchema, FAQSchema
- ✅ ServiceRequestForm with city tagging
- ✅ Sitemap generator (15 sitemaps)

### SAB Compliance
- ✅ No street addresses in LocalBusiness schema
- ✅ Dynamic canonical URLs per subdomain
- ✅ GeoCoordinates for all 14 franchises

---

## Next Steps (Go-Live Preparation)

1. **DNS Configuration** - Set up city subdomains (mclean.flood.doctor, etc.)
2. **Vercel Deployment** - Configure subdomain routing
3. **Google Search Console** - Submit sitemaps
4. **Testing** - Verify all city pages render correctly
5. **Analytics** - Set up GA4 per-subdomain tracking

---

## Dev Server

**Command:** `cd fd-google-redesign && npm run dev`
**URL:** `http://localhost:3004/`

---

*Updated: 2026-01-03*
*Project: fd-google-redesign (main website)*
