# Flood Doctor fd-google-redesign - Session State

**Last Updated:** 2026-02-08

---

## ✅ LATEST: ServiceTabs Auto-Play Animation (2026-02-08)

### Status: Deployed

### What Was Done

Added auto-scrolling animation with progress bar to the "Why Choose Flood Doctor?" tabs section on service pages.

#### Features Added
- Auto-advances through tabs every 5 seconds
- Progress bar at the top of active tab shows countdown
- Pauses on mouse hover
- "Auto-playing" / "Paused" indicator
- Content panel animates when tab changes

#### Files Updated
| File | Purpose |
|------|---------|
| `/generated-layouts/service-page/ServiceTabs.tsx` | Added auto-play, progress, pause on hover |
| `/App.tsx` | Removed dangling imports (missing dev files) |
| `/scripts/deploy.sh` | Updated to use sshpass instead of expect |

### Verified
- Site accessible: https://flood.doctor (HTTP 200)
- JS assets loading correctly
- Cloudflare cache purged

---

## ✅ LATEST: Service Detail Longform Redesign (2026-02-08)

### Status: Complete

### What Was Done

- Redesigned longform service content into a lighter, magazine-style layout with summaries and expandable sections.
- Added sticky in-page navigation on service detail pages for fast scanning.

#### Files Updated
| File | Purpose |
|------|---------|
| `/generated-layouts/service-page/ServiceDetailedContent.tsx` | New longform layout with highlights + read-more |
| `/pages/templates/ServiceDetailNew.tsx` | Sticky section nav + anchor targets |

---

## ✅ LATEST: Indexing Hygiene (2026-02-08)

### Status: Complete

### What Was Done

- Marked internal/demo routes as noindex (Video Generator, Client Portal Demo, Work Authorization).

#### Files Updated
| File | Purpose |
|------|---------|
| `/pages/VideoGenerator.tsx` | noIndex meta |
| `/pages/ClientPortalDemo.tsx` | noIndex meta |
| `/pages/WorkAuthorization.tsx` | noIndex meta |

---

## ✅ LATEST: Conversion + SEO Polish Pass (2026-02-08)

### Status: Complete

### What Was Done

- Added header top bar with 24/7, response time, and license trust signals.
- Strengthened hero trust signals and ensured CTAs visible on mobile.
- Added 4.9★ rating to Trust Bar.
- Improved Request Service header clarity and added input autofill hints.
- Added schema to Resources Hub and Blog Index; added lazy loading to resource/blog images.
- Updated robots.txt to disallow dev/tools/demo routes from indexing.

#### Files Updated
| File | Purpose |
|------|---------|
| `/components/layout/Header.tsx` | Top trust bar with phone CTA |
| `/components/sections/HeroV14.tsx` | Trust chips + mobile CTAs |
| `/components/sections/TrustBarV14.tsx` | Rating chip |
| `/pages/RequestService.tsx` | Header copy + autocomplete/inputmode |
| `/pages/ResourcesHub.tsx` | Schema + lazy images |
| `/pages/BlogIndex.tsx` | Schema + lazy images |
| `/public/robots.txt` | Disallow dev/tools/demo |

---

## ✅ LATEST: SEO + Performance + Security Baseline (2026-02-08)

### Status: Complete

### What Was Done

- Hardened CSP and removed unused importmap (no runtime `esm.sh`).
- Fixed font mismatch (Plus Jakarta Sans + Inter) on main and city HTML templates.
- Removed duplicate font loading in `index.css`.
- Standardized `PageMeta` titles (avoid double branding) and added robots meta.
- Ensured JSON-LD schema updates cleanly on route changes.
- Added missing schema on ServiceDetail and Reviews pages.
- Added Organization + breadcrumb schema on Locations hub.
- Added schema on Request Service page.
- Disabled `DEBUG` in production config.
- Removed hard-coded Resend API key from Cloudflare worker; switched to env secret.

#### Files Updated
| File | Purpose |
|------|---------|
| `/index.html` | CSP tightened, removed importmap, font fixes |
| `/city.html` | CSP tightened, removed importmap, font fixes |
| `/index.css` | Removed duplicate font import |
| `/components/ui/PageMeta.tsx` | Title logic, robots meta, JSON-LD cleanup |
| `/pages/templates/ServiceDetailNew.tsx` | Full service schema + breadcrumbs |
| `/pages/Reviews.tsx` | Reviews schema added |
| `/pages/LocationsHub.tsx` | Organization + breadcrumb schema |
| `/pages/RequestService.tsx` | Contact schema |
| `/config/site.ts` | DEBUG=false |
| `/cloudflare-worker/form-handler.js` | RESEND_API_KEY via env |
| `/cloudflare-worker/wrangler.toml` | Secret setup note |

### Required Follow-ups

1. Set Cloudflare Worker secret:
   - `wrangler secret put RESEND_API_KEY` (required for form email delivery)

---

## ✅ LATEST: Independent City Subdomain Architecture (2026-02-07)

### Status: Complete

### What Was Done

Converted from single SPA with runtime subdomain detection to 13 truly independent city websites.

**Before:** `mclean.flood.doctor` → Same React app, runtime detection, `/city/mclean` routes
**After:** `mclean.flood.doctor` → Independent React app, `/` is homepage, no shared routing

#### New Files Created
| File | Purpose |
|------|---------|
| `/city.tsx` | Entry module for city subdomain builds |
| `/city.html` | HTML template with `window.__FLOOD_DOCTOR_CITY__` injection |
| `/CityApp.tsx` | City-specific router (/, /services/, /blog/, etc.) |
| `/contexts/CityFranchiseContext.tsx` | Static franchise provider (no runtime detection) |
| `/pages/city-app/*.tsx` | 9 city page components |

#### Modified Files
| File | Changes |
|------|---------|
| `/vite.config.ts` | Added `VITE_BUILD_MODE=city` conditional input |
| `/package.json` | Added `build:city` and `build:cities` scripts |
| `/scripts/build-cities.ts` | Now reads from `dist-city/`, removed `npm run build` |
| `/App.tsx` | Removed ~40 city routes and ~20 lazy imports |

### Build Commands

```bash
# Build city bundle once
npm run build:city

# Build all 13 city sites
npm run build:cities

# Test locally
npx serve dist-cities/mclean -l 3003 -s
```

### Architecture

```
flood.doctor           → App.tsx (main site only, NO city routes)
mclean.flood.doctor    → CityApp.tsx (independent, city="mclean" baked in)
arlington.flood.doctor → CityApp.tsx (independent, city="arlington" baked in)
...13 total city sites
```

### Output Structure

```
dist-cities/
├── mclean/
│   ├── index.html   (window.__FLOOD_DOCTOR_CITY__ = 'mclean')
│   ├── assets/      (CityApp bundle)
│   ├── sitemap.xml
│   ├── robots.txt
│   └── .htaccess
├── arlington/
└── ... (11 more)
```

### Cities Included
mclean, arlington, alexandria, fairfax, vienna, tysons, reston, herndon, ashburn, springfield, fallschurch, greatfalls, lorton

---

## Next Steps (When Resuming)

1. **Deploy main site:** `./scripts/deploy.sh <password>`
2. **Deploy city sites:** Update `./scripts/deploy-cities.sh` to use new dist-cities structure
3. **Configure DNS:** Each subdomain needs A record → 132.148.253.156 (or wildcard `*.flood.doctor`)
4. **Verify production:** Test each subdomain loads its independent app

---

## Previous: Contract Page Deployed to /contract/ (2026-01-31)

See project-history.md for full details.

---

## Production Info

- **Live URL:** https://flood.doctor
- **Hosting:** GoDaddy (132.148.253.156)
- **CDN:** Cloudflare
- **Deploy:** `./scripts/deploy.sh <password>`

---

*Updated: 2026-02-07 (Independent City Subdomain Architecture)*
