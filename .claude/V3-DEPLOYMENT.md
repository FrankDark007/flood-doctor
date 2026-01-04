# V3 City Subdomain Deployment Guide

## Architecture Overview

**Domain Structure:**
- Main: `flood.doctor`
- City Subdomains: `{city}.flood.doctor` (13 cities)

## City Subdomains

| City | Subdomain | Phone |
|------|-----------|-------|
| McLean | mclean.flood.doctor | (703) 656-0101 |
| Arlington | arlington.flood.doctor | (703) 656-0102 |
| Alexandria | alexandria.flood.doctor | (703) 656-0103 |
| Fairfax | fairfax.flood.doctor | (703) 656-0104 |
| Vienna | vienna.flood.doctor | (703) 656-0105 |
| Tysons | tysons.flood.doctor | (703) 656-0106 |
| Reston | reston.flood.doctor | (703) 656-0107 |
| Herndon | herndon.flood.doctor | (703) 656-0108 |
| Ashburn | ashburn.flood.doctor | (703) 656-0109 |
| Springfield | springfield.flood.doctor | (703) 656-0110 |
| Falls Church | fallschurch.flood.doctor | (703) 656-0111 |
| Great Falls | greatfalls.flood.doctor | (703) 656-0112 |
| Lorton | lorton.flood.doctor | (703) 656-0113 |

## Content Structure Per City

Each city has:
- **Homepage** (`/`)
- **8 Service Pages:**
  - `/water-damage/`
  - `/basement-flooding/`
  - `/burst-pipe/`
  - `/flood-cleanup/`
  - `/mold-remediation/`
  - `/sewage-cleanup/`
  - `/storm-damage/`
  - `/fire-damage/`
- **5 Neighborhood Pages:**
  - `/neighborhoods/{neighborhood}/`

## Vercel Deployment Steps

### 1. Project Setup
```bash
vercel link
vercel env add GEMINI_API_KEY
```

### 2. Domain Configuration (Vercel Dashboard)
1. Go to Project Settings > Domains
2. Add primary domain: `flood.doctor`
3. Add wildcard subdomain: `*.flood.doctor`

### 3. DNS Configuration (Registrar)
```
# A Records
flood.doctor       A    76.76.21.21
*.flood.doctor     A    76.76.21.21

# OR CNAME (recommended for Vercel)
flood.doctor       CNAME cname.vercel-dns.com
*.flood.doctor     CNAME cname.vercel-dns.com
```

### 4. Deploy
```bash
npm run build
vercel --prod
```

## Sitemap Structure

Generated sitemaps (in `/public/sitemaps/`):
- `sitemap-index.xml` - Master index
- `sitemap-main.xml` - Main site pages
- `sitemap-{city}.xml` - Per-city sitemaps (13 files)

## Subdomain Detection

The app detects the current subdomain via:
```typescript
// utils/subdomain.ts
const hostname = window.location.hostname;
const subdomain = hostname.split('.')[0];
```

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `VITE_SITE_URL` | Base URL (https://flood.doctor) |
| `GEMINI_API_KEY` | AI content generation |

## Post-Deployment Checklist

- [ ] Verify all 13 subdomains resolve
- [ ] Test SSL on each subdomain
- [ ] Submit sitemaps to Google Search Console
- [ ] Test phone number tracking per city
- [ ] Verify schema markup with Google Rich Results Test
- [ ] Test 301 redirects from `/city/:city` paths

## SEO Verification

1. **Google Rich Results Test:**
   - Test each city homepage for LocalBusiness schema
   - Test service pages for FAQPage schema

2. **Google Search Console:**
   - Add each subdomain as property
   - Submit respective sitemap

3. **Schema Validation:**
   ```bash
   # Test a page
   curl https://mclean.flood.doctor/ | grep "application/ld+json"
   ```

## Content Files

All city content is in:
```
src/content/cities/
├── index.ts              # Root exports
├── types.ts              # Type definitions
├── {city}/
│   ├── index.ts          # City exports
│   ├── homepage.ts       # Homepage content
│   ├── services/         # 8 service pages
│   │   ├── index.ts
│   │   ├── water-damage.ts
│   │   └── ...
│   └── neighborhoods/    # 5 neighborhood pages
│       ├── index.ts
│       └── ...
```

## Rollback Plan

If issues arise:
```bash
vercel rollback
```

Or redeploy previous commit:
```bash
git checkout <previous-commit>
npm run build
vercel --prod
```
