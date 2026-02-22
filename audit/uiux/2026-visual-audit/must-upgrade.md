# Must-Upgrade Checklist — Flood Doctor Visual UI/UX Audit
Generated: 2026-02-22 (updated after P0 fix)

**Methodology:** Every item below is backed by automated test results (Lighthouse, a11y audit, image inventory, or screenshot inspection). No subjective opinions.

**Note:** Lighthouse was run against local dev server (unminified). "Minify JS" items reflect dev mode — verify against production build. All other findings apply regardless.

---

## ~~P0 — RESOLVED~~

### ~~1. City Subdomain Pages Return 500/403 Errors~~ ✅ FIXED
- **Root cause:** Entire `flood.doctor/` docroot was empty on server — main site AND city builds were missing
- **Fix:** Emergency redeployment of main site (`dist/` → 552 files) + 13 city builds (`dist-cities/` → ~210MB each)
- **Verification:** All 13 city subdomains + 6 original audit URLs return 200
- **Date fixed:** 2026-02-22

---

## P0 — Critical (Blocks conversion or compliance)

### 1. Homepage Best Practices Score: 73/100
- **Severity:** P0
- **Evidence:** `lighthouse/home-desktop.json`, `lighthouse/home-mobile.json`
- **Pages affected:** Homepage (/)
- **Elements:** Third-party resources, browser errors, deprecated APIs
- **Fix category:** JavaScript audit, third-party script review
- **Impact:** Homepage is the highest-traffic page. 73 Best Practices signals issues Chrome may penalize.

### 2. Performance Scores Below 60 Across All Pages (Dev Mode)
- **Severity:** P0 (verify against production build)
- **Evidence:** `lighthouse-summary.json` — average performance: 53/100
- **Pages affected:** All 6 audited apex pages
- **Key issues:**
  - Unused JavaScript: 1,080-1,160ms savings (desktop), 6,900-7,200ms (mobile)
  - Unused CSS: up to 3,150ms savings (mobile)
  - LCP failures on all pages
- **Fix category:** Code splitting, tree shaking, CSS purging, lazy loading
- **Impact:** Core Web Vitals directly affect Google ranking. Mobile performance (39-55) is in "poor" range.

---

## P1 — Serious (Degrades UX or accessibility)

### 3. 180 Tap Targets Below 44×44px Minimum (Mobile)
- **Severity:** P1
- **Evidence:** `a11y-report.json` — 180 tap-target issues across 12 pages
- **Pages affected:** All 12 audited pages (15-18 issues each)
- **Elements:**
  - Header/nav links with insufficient padding
  - Social/icon links at 24×24px
  - 1×1px elements (likely tracking pixels — verify)
  - Text links with height < 36px
- **Fix category:** Touch target sizing (padding increase)
- **Impact:** WCAG 2.5.5 failure. Mobile-first audience (water damage emergencies) struggles with small tap targets.

### 4. Heading Hierarchy Skips on All Pages
- **Severity:** P1
- **Evidence:** `a11y-report.json` — 10 heading-order issues across 12 pages
- **Pages affected:**
  - Homepage: H1 → H3 (skips H2), H3 → H4 (inconsistent)
  - All 4 service pages: H1 → H3 (skips H2)
  - City/neighborhood pages: 3 additional heading skips
- **Elements:** Section headings jumping from H1 to H3
- **Fix category:** HTML semantic structure
- **Impact:** Screen reader navigation broken. SEO heading structure signal degraded.

### 5. 10 Stock Images on Homepage (Unsplash URLs)
- **Severity:** P1
- **Evidence:** `image-inventory.csv` — 10 images with `unsplash.com` domain
- **Pages affected:** Homepage
- **Elements:**
  - Cover image (600×899)
  - 4 "Photo" thumbnails (200×133 to 200×355)
  - 3 avatar images (100×100)
  - 1 post image (400×353)
  - 1 testimonial image (800×600)
- **Fix category:** Image replacement (custom photography or branded visuals)
- **Impact:** Stock photos reduce perceived authenticity. Competitor differentiation suffers.

### 6. Cost Calculator Cumulative Layout Shift (CLS)
- **Severity:** P1
- **Evidence:** `lighthouse/cost-calculator-desktop.json`, `lighthouse/cost-calculator-mobile.json`
- **Pages affected:** Cost Calculator
- **Elements:** Calculator form elements shifting on load
- **Fix category:** Layout stability (explicit dimensions, font-display)
- **Impact:** CLS is a Core Web Vital. Calculator is a conversion page — layout shift during interaction degrades trust.

---

## P2 — Moderate (Polish and consistency)

### 7. No WebP/AVIF Serving for Local Images
- **Severity:** P2
- **Evidence:** `image-inventory.csv` — service pages use .jpg and .png formats exclusively
- **Pages affected:** All 4 service detail pages
- **Elements:**
  - Hero images: `.jpg` (1600×1194, 1600×872)
  - Process tiles: `.png` (2048×2048 — oversized for 286×286 display)
- **Fix category:** Image optimization pipeline (webp/avif generation, `<picture>` element)
- **Impact:** Process tile PNGs are 2048×2048 served at 286×286 — 51× pixel waste. Adds to LCP and bandwidth.

### 8. Google Logo Served as 120×120 PNG
- **Severity:** P2
- **Evidence:** `image-inventory.csv` — `upload.wikimedia.org` PNG at 120×120, displayed at 16×16
- **Pages affected:** Homepage
- **Elements:** Google "G" logo in reviews section
- **Fix category:** SVG replacement (raster logo flag)
- **Impact:** Minor. Raster logo at tiny size loses crispness on retina displays.

### 9. Unused CSS Across All Pages
- **Severity:** P2
- **Evidence:** Lighthouse audits — "Reduce unused CSS" flagged on all 12 audits
- **Pages affected:** All pages
- **Estimated savings:** 400-3,150ms (varies by breakpoint)
- **Fix category:** CSS purging, Tailwind purge config verification
- **Impact:** Contributes to render-blocking. Verify Tailwind purge is correctly configured in production build.

### 10. Unused JavaScript Across All Pages
- **Severity:** P2
- **Evidence:** Lighthouse audits — "Reduce unused JavaScript" flagged on all 12 audits
- **Pages affected:** All pages
- **Estimated savings:** 1,080-7,200ms
- **Fix category:** Code splitting, dynamic imports, route-based chunking
- **Impact:** Largest performance impact item. SPA architecture loads all route code upfront.

### 11. LCP Failure on All Pages
- **Severity:** P2
- **Evidence:** Lighthouse audits — "Largest Contentful Paint" flagged on all 12 audits
- **Pages affected:** All pages
- **Elements:** Hero images, large text blocks
- **Fix category:** Image preloading, font-display optimization, render-blocking resource elimination
- **Impact:** LCP > 2.5s fails Core Web Vitals "Good" threshold.

### 12. Process Tile Images Massively Oversized
- **Severity:** P2
- **Evidence:** `image-inventory.csv` — 2048×2048 PNGs displayed at 286×286
- **Pages affected:** water-damage-restoration, mold-remediation, basement-flooding, burst-pipe-cleanup
- **Elements:** Process step tile images (4 per page × 4 pages = 16 images)
- **Fix category:** Image resizing + format conversion
- **Impact:** Each tile wastes ~95% of pixels downloaded. At 4 tiles per page, significant bandwidth on mobile.

### 13. Contrast Checker Could Not Run (Script Error)
- **Severity:** P2
- **Evidence:** `a11y-report.json` — 0 contrast issues found (checker errored due to esbuild `__name` transform)
- **Pages affected:** All pages (untested)
- **Fix category:** Manual contrast audit needed (use browser DevTools or Axe)
- **Impact:** WCAG AA contrast compliance unknown. Must verify manually or with external tool.

---

## Summary Table

| Priority | Count | Categories |
|----------|-------|-----------|
| ~~P0~~ | ~~1~~ | ~~Subdomain 500s~~ ✅ FIXED |
| P0 | 2 | Best Practices, Performance |
| P1 | 4 | Tap targets, Heading order, Stock images, CLS |
| P2 | 7 | Image optimization, CSS/JS size, LCP, Contrast |

**Next Steps:**
1. Run production build Lighthouse to separate dev-mode issues from real issues (P0 #2)
2. Upload fold screenshots to Neurons AI + Attention Insight (all 12 pages now valid)
3. Launch Maze test plan
4. Re-run this audit pack after fixes: `bash audit/uiux/2026-visual-audit/scripts/run-audit.sh`
