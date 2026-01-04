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
5. ✅ **Removed Vercel** - All Vercel references removed, deploying via Cloudflare + GoDaddy

### Content Statistics
- **Total Files:** 281 TypeScript content files
- **Cities:** 13 city subdomains
- **Build Status:** ✅ Passing (3.07s)
- **Sitemaps:** 15 files generated (264 URLs)

### Per-City Content
| City | Homepage | Services | Neighborhoods | Blog |
|------|----------|----------|---------------|------|
| All 13 cities | ✅ | 8 each | 5 each | 3-5 each |

---

## V3 Subdomain Architecture - COMPLETE

### Infrastructure
- ✅ `data/franchises.ts` - 14 franchises with coordinates, isHQ, rich localHooks
- ✅ `hooks/useFranchise.ts` - Subdomain detection + dev mode
- ✅ `contexts/FranchiseContext.tsx` - Provider pattern
- ✅ SEO Components: PageMeta, LocalBusinessSchema, FAQSchema
- ✅ ServiceRequestForm with city tagging
- ✅ Sitemap generator (15 sitemaps)
- ✅ Dynamic page components for services, neighborhoods, blog

### SAB Compliance
- ✅ No street addresses in LocalBusiness schema
- ✅ Dynamic canonical URLs per subdomain
- ✅ GeoCoordinates for all 14 franchises

---

## 🚀 DEPLOYMENT - Cloudflare + GoDaddy

### Build Output
```bash
npm run build
# Output: dist/ folder
```

### Deployment Steps
1. Build the project: `npm run build`
2. Upload `dist/` contents to GoDaddy hosting
3. Configure Cloudflare DNS for subdomains
4. Set up Cloudflare Page Rules for routing

### DNS Configuration (Cloudflare)
```
flood.doctor        A     [GoDaddy IP]
*.flood.doctor      A     [GoDaddy IP]
```

### Post-Deployment Checklist
- [ ] Verify all 13 subdomains resolve
- [ ] Test SSL on each subdomain
- [ ] Submit sitemaps to Google Search Console
- [ ] Test phone number tracking per city
- [ ] Verify schema markup with Google Rich Results Test

---

## Dev Server

**Command:** `cd fd-google-redesign && npm run dev`
**URL:** `http://localhost:3004/`

---

*Updated: 2026-01-03*
*Project: fd-google-redesign (main website)*
