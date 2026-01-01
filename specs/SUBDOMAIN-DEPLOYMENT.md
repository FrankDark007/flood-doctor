# Subdomain Location Page System - Deployment Guide

## Architecture Overview

Single-build React SPA that serves all subdomains dynamically:
- `flood.doctor` → Main homepage
- `fairfax.flood.doctor` → Fairfax location page
- `arlington.flood.doctor` → Arlington location page
- etc.

The subdomain is detected client-side via `window.location.hostname` and the appropriate content is rendered.

---

## Subdomain List

| Subdomain | Location | URL |
|-----------|----------|-----|
| `fairfax` | Fairfax, VA | fairfax.flood.doctor |
| `arlington` | Arlington, VA | arlington.flood.doctor |
| `alexandria` | Alexandria, VA | alexandria.flood.doctor |
| `mclean` | McLean, VA | mclean.flood.doctor |
| `vienna` | Vienna, VA | vienna.flood.doctor |
| `tysons` | Tysons, VA | tysons.flood.doctor |
| `reston` | Reston, VA | reston.flood.doctor |
| `herndon` | Herndon, VA | herndon.flood.doctor |
| `ashburn` | Ashburn, VA | ashburn.flood.doctor |
| `leesburg` | Leesburg, VA | leesburg.flood.doctor |
| `manassas` | Manassas, VA | manassas.flood.doctor |
| `woodbridge` | Woodbridge, VA | woodbridge.flood.doctor |
| `springfield` | Springfield, VA | springfield.flood.doctor |
| `annandale` | Annandale, VA | annandale.flood.doctor |
| `fallschurch` | Falls Church, VA | fallschurch.flood.doctor |
| `greatfalls` | Great Falls, VA | greatfalls.flood.doctor |
| `lorton` | Lorton, VA | lorton.flood.doctor |

---

## Option 1: Cloudflare Pages (Recommended)

### DNS Configuration

1. **Add wildcard CNAME record:**
   ```
   Type: CNAME
   Name: *
   Target: your-project.pages.dev
   Proxy: Proxied (orange cloud)
   ```

2. **Add root domain:**
   ```
   Type: CNAME
   Name: @
   Target: your-project.pages.dev
   Proxy: Proxied
   ```

### Cloudflare Pages Settings

1. Go to Pages > your-project > Custom domains
2. Add `flood.doctor` as primary domain
3. Add `*.flood.doctor` as wildcard domain
4. SSL/TLS: Full (strict)

### Build Configuration

```toml
# wrangler.toml (optional)
name = "flood-doctor"
compatibility_date = "2024-01-01"

[site]
bucket = "./dist"
```

**package.json build script:**
```json
{
  "scripts": {
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### SPA Routing

Create `_redirects` file in `public/` folder:
```
/*    /index.html   200
```

Or `_headers` file:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
```

---

## Option 2: Vercel

### vercel.json Configuration

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ]
}
```

### Domain Configuration

1. Go to Project Settings > Domains
2. Add `flood.doctor`
3. Add `*.flood.doctor` (wildcard)

Vercel automatically handles wildcard SSL.

---

## Option 3: Netlify

### netlify.toml Configuration

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Domain Configuration

1. Go to Domain settings
2. Add `flood.doctor` as primary
3. Add wildcard: `*.flood.doctor`

---

## Option 4: AWS CloudFront + S3

### S3 Bucket Setup

1. Create S3 bucket for static hosting
2. Enable static website hosting
3. Set index document: `index.html`
4. Set error document: `index.html` (for SPA routing)

### CloudFront Distribution

1. Create distribution pointing to S3
2. Add alternate domain names:
   - `flood.doctor`
   - `*.flood.doctor`
3. Request ACM certificate for `*.flood.doctor` and `flood.doctor`
4. Set default root object: `index.html`
5. Configure error pages to return `/index.html` with 200 for 404

### Route 53 DNS

```
Type: A (Alias)
Name: flood.doctor
Target: CloudFront distribution

Type: A (Alias)
Name: *.flood.doctor
Target: CloudFront distribution
```

---

## Local Development

### Testing Subdomains Locally

**Option A: /etc/hosts (macOS/Linux)**

Add to `/etc/hosts`:
```
127.0.0.1 fairfax.localhost
127.0.0.1 arlington.localhost
127.0.0.1 alexandria.localhost
```

Then access: `http://fairfax.localhost:5173`

**Option B: Use lvh.me (resolves to 127.0.0.1)**

Access directly:
- `http://fairfax.lvh.me:5173`
- `http://arlington.lvh.me:5173`

Note: Requires updating `subdomain.ts` to recognize `lvh.me` as a root domain.

**Option C: Vite proxy configuration**

```typescript
// vite.config.ts
export default defineConfig({
  server: {
    host: true, // Allow external access
    port: 5173,
  },
});
```

---

## SEO Considerations

### Canonical URLs

Each subdomain has a unique canonical:
```html
<!-- On fairfax.flood.doctor -->
<link rel="canonical" href="https://fairfax.flood.doctor/" />
```

### Hreflang Tags

Consider adding hreflang for location targeting:
```html
<link rel="alternate" hreflang="en" href="https://flood.doctor/" />
<link rel="alternate" hreflang="en-US-fairfax" href="https://fairfax.flood.doctor/" />
```

### robots.txt

Each subdomain should be indexable:
```
User-agent: *
Allow: /
Sitemap: https://fairfax.flood.doctor/sitemap.xml
```

### Sitemap Strategy

**Option A: Individual sitemaps per subdomain**
- `https://fairfax.flood.doctor/sitemap.xml`
- `https://arlington.flood.doctor/sitemap.xml`

**Option B: Master sitemap at main domain**
```xml
<!-- https://flood.doctor/sitemap-index.xml -->
<sitemapindex>
  <sitemap>
    <loc>https://flood.doctor/sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://fairfax.flood.doctor/sitemap.xml</loc>
  </sitemap>
  <!-- ... -->
</sitemapindex>
```

---

## Schema.org Configuration

Each subdomain generates location-specific LocalBusiness schema:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Flood Doctor - Fairfax",
  "url": "https://fairfax.flood.doctor/",
  "telephone": "(877) 497-0007",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Fairfax",
    "addressRegion": "VA",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 38.8462,
    "longitude": -77.3064
  },
  "areaServed": {
    "@type": "City",
    "name": "Fairfax"
  }
}
```

---

## Files Created

| File | Purpose |
|------|---------|
| `src/utils/subdomain.ts` | Subdomain detection utilities |
| `src/hooks/useSubdomain.ts` | React hook for subdomain context |
| `src/data/locations.ts` | Extended location data with neighborhoods, landmarks |
| `src/pages/SubdomainLocationPage.tsx` | Wrapper component for subdomain routing |

---

## Testing Checklist

- [ ] Main domain (flood.doctor) shows homepage
- [ ] Each subdomain shows correct location page
- [ ] Unrecognized subdomains redirect to main site
- [ ] LocalBusiness schema renders correctly per location
- [ ] Meta titles/descriptions are unique per location
- [ ] Internal links work correctly on subdomains
- [ ] Phone number click-to-call works
- [ ] Mobile responsive on all locations
- [ ] Page speed acceptable (< 3s LCP)

---

## Monitoring

### Google Search Console

Add all subdomain properties:
1. `https://flood.doctor/`
2. `https://fairfax.flood.doctor/`
3. `https://arlington.flood.doctor/`
4. etc.

Or add as Domain property: `flood.doctor` (covers all subdomains)

### Analytics

Use same GA4 property across all subdomains.
Filter by hostname in reports.
