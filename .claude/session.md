# Flood Doctor fd-google-redesign - Session State

**Last Updated:** 2026-02-07

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
