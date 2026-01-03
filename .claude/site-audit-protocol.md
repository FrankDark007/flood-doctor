# Site Audit Protocol

> Comprehensive Technical SEO Audit Checklist for Claude Code

## Section 1: Overview

When the user requests a "Site Audit", Claude Code should systematically check for all 100+ technical SEO issues documented below. This protocol mirrors the comprehensive checks performed by Ahrefs Site Audit tool.

- **Target Site:** flood.doctor (and all subdomains)
- **Scope:** 175+ routes including service pages, location pages, blog posts, and utility pages
- **Priority:** Errors (critical) > Warnings (important) > Notices (informational)

---

## Section 2: Issue Severity Levels

| Severity | Description |
|----------|-------------|
| **ERROR** | Critical issues that block indexing or cause major UX problems |
| **WARNING** | Important issues that affect SEO performance or user experience |
| **NOTICE** | Optimization opportunities and best practice recommendations |

---

## Section 3: Available MCP Tools

**CRITICAL:** Always call `Ahrefs:doc` first to get the correct input schema for any Ahrefs tool.

### Ahrefs Site Audit Tools
- `Ahrefs:site-audit-issues` - Returns all issues found in site audit crawl
- `Ahrefs:site-audit-page-explorer` - Detailed page-level data and filtering
- `Ahrefs:site-audit-page-content` - HTML and text content of crawled pages
- `Ahrefs:site-audit-projects` - List available site audit projects

### Mission Control Tools
- `mission-control:check_serp` - Check Google rankings for keywords
- `mission-control:get_gsc_data` - Google Search Console data
- `mission-control:get_analytics` - Google Analytics 4 data

### Direct Crawl Tools (if no Ahrefs project)
- `puppeteer` - Browser automation for JS-rendered pages
- `web_fetch` - Fetch page content and headers
- `bash_tool` - Run curl, wget, or custom scripts

---

## Section 4: Complete Issue Checklist

The following 100+ issues should be checked during every site audit. Issues are organized by category.

### 4.1: Indexability

| Issue | Severity | Description |
|-------|----------|-------------|
| Noindex page | ERROR | Page blocked from indexing via meta robots or X-Robots-Tag |
| Canonicalized to another URL | WARNING | Page has canonical pointing elsewhere |
| Blocked by robots.txt | ERROR | Page disallowed in robots.txt |
| No valid canonical | WARNING | Missing or malformed canonical tag |
| Multiple canonical tags | ERROR | Conflicting canonical directives |
| Canonical to redirect | WARNING | Canonical points to URL that redirects |
| Canonical to 4XX | ERROR | Canonical points to broken page |
| HTTP in canonical | WARNING | Canonical uses HTTP instead of HTTPS |
| Orphan page (sitemap) | WARNING | Page in sitemap but no internal links |
| Orphan page (backlinks) | WARNING | Page has backlinks but no internal links |
| Noindex and nofollow | NOTICE | Page blocked from indexing and link following |
| Non-canonical in sitemap | WARNING | Sitemap contains non-canonical URLs |

### 4.2: Internal Pages

| Issue | Severity | Description |
|-------|----------|-------------|
| 4XX page | ERROR | Page returns client error (404, 410, etc.) |
| 5XX page | ERROR | Page returns server error |
| Slow page (TTFB > 500ms) | WARNING | Time to first byte exceeds threshold |
| Slow page (HTML load > 3s) | WARNING | Full HTML load time too slow |
| Large page (>3MB) | WARNING | Page size impacts load time |
| Too deep (>3 clicks) | WARNING | Page requires 4+ clicks from homepage |
| Low word count (<200) | WARNING | Thin content page |
| Has links to broken pages | WARNING | Page contains broken outlinks |
| Redirect chain | WARNING | Page redirects through multiple hops |
| Has meta refresh | WARNING | Page uses meta refresh redirect |
| Mixed content | ERROR | HTTPS page loads HTTP resources |
| Has no outgoing links | NOTICE | Page is dead-end with no links |
| Has only one dofollow inlink | NOTICE | Page has minimal internal linking |
| Has nofollow incoming links | NOTICE | Internal links to page are nofollow |

### 4.3: Links

| Issue | Severity | Description |
|-------|----------|-------------|
| Link to redirect | WARNING | Internal link points to redirect |
| Link to broken page | ERROR | Internal link points to 4XX/5XX |
| Orphan page | WARNING | Page has no internal links pointing to it |
| HTTP link on HTTPS page | WARNING | Mixed protocol internal links |
| Nofollow outgoing internal link | NOTICE | Internal links marked nofollow |
| Has links to broken page (external) | WARNING | External links to dead pages |
| Link to broken page (external, 5XX) | WARNING | External links to server errors |
| Page with high external link count | NOTICE | Too many outbound links |
| Redirect loop | ERROR | Links create infinite redirect cycle |

### 4.4: Redirects

| Issue | Severity | Description |
|-------|----------|-------------|
| 3XX redirect | NOTICE | Page redirects (may be intentional) |
| Redirect chain | WARNING | Multiple redirect hops |
| Redirect loop | ERROR | Infinite redirect cycle |
| 302 redirect | WARNING | Temporary redirect (should usually be 301) |
| Meta refresh redirect | WARNING | Client-side redirect via meta tag |
| JavaScript redirect | WARNING | Client-side redirect via JS |
| HTTP to HTTPS redirect | NOTICE | Protocol upgrade redirect |

### 4.5: Content

| Issue | Severity | Description |
|-------|----------|-------------|
| Missing title | ERROR | Page has no title tag |
| Title too long (>60 chars) | WARNING | Title may be truncated in SERPs |
| Title too short (<30 chars) | WARNING | Title may not be descriptive enough |
| Duplicate title | WARNING | Multiple pages share same title |
| Missing meta description | WARNING | No meta description tag |
| Meta description too long (>160) | WARNING | May be truncated in SERPs |
| Meta description too short (<70) | WARNING | Not descriptive enough |
| Duplicate meta description | WARNING | Multiple pages share description |
| Missing H1 | WARNING | Page lacks main heading |
| Multiple H1 tags | WARNING | More than one H1 on page |
| Duplicate H1 | WARNING | Same H1 used on multiple pages |
| Missing Open Graph | NOTICE | No OG tags for social sharing |
| Missing Twitter Card | NOTICE | No Twitter Card tags |

### 4.6: Social Tags

| Issue | Severity | Description |
|-------|----------|-------------|
| Missing OG title | WARNING | No og:title tag |
| Missing OG description | WARNING | No og:description tag |
| Missing OG image | WARNING | No og:image tag |
| Missing Twitter title | NOTICE | No twitter:title tag |
| Missing Twitter description | NOTICE | No twitter:description tag |

### 4.7: Images

| Issue | Severity | Description |
|-------|----------|-------------|
| Missing alt text | WARNING | Image lacks alt attribute |
| Alt text too long (>125 chars) | NOTICE | Alt text may be too verbose |
| Broken image | ERROR | Image returns 4XX/5XX |
| Large image (>100KB) | WARNING | Image not optimized |
| Missing width/height | NOTICE | May cause layout shift (CLS) |
| Non-descriptive filename | NOTICE | Image filename not SEO-friendly |
| Missing lazy loading | NOTICE | Below-fold images not lazy loaded |

### 4.8: JavaScript

| Issue | Severity | Description |
|-------|----------|-------------|
| JavaScript error | ERROR | Console errors on page |
| Render-blocking JS | WARNING | JS blocks initial render |

### 4.9: CSS

| Issue | Severity | Description |
|-------|----------|-------------|
| Render-blocking CSS | WARNING | CSS blocks initial render |
| Unused CSS | NOTICE | Large amount of unused styles |
| Missing critical CSS | WARNING | Above-fold content not styled inline |

### 4.10: Sitemaps

| Issue | Severity | Description |
|-------|----------|-------------|
| Sitemap not found | ERROR | No sitemap.xml at expected location |
| Sitemap not in robots.txt | WARNING | Sitemap not referenced in robots.txt |
| URL not in sitemap | WARNING | Indexable page missing from sitemap |
| Sitemap has noindex URLs | WARNING | Sitemap contains blocked pages |
| Sitemap has redirects | WARNING | Sitemap contains redirect URLs |
| Sitemap too large (>50MB/50k URLs) | WARNING | Sitemap exceeds limits |

### 4.11: Localization (Hreflang)

| Issue | Severity | Description |
|-------|----------|-------------|
| Missing hreflang | NOTICE | Multi-language site lacks hreflang |
| Invalid hreflang | ERROR | Malformed hreflang attribute |
| Missing x-default | WARNING | No default language specified |
| Non-reciprocal hreflang | WARNING | Hreflang not confirmed by target |

### 4.12: External Pages

| Issue | Severity | Description |
|-------|----------|-------------|
| External link to 4XX | WARNING | Outbound link to broken page |
| External link to 5XX | WARNING | Outbound link to server error |
| External link to redirect | NOTICE | Outbound link to redirect |
| Broken backlink | NOTICE | Incoming link from broken page |

---

## Section 5: Site Audit Workflow

Follow this workflow when the user says "run Site Audit" or similar:

### Phase 1: Setup
1. Call `Ahrefs:doc` to get schema for `site-audit-projects`
2. Call `Ahrefs:site-audit-projects` to list available projects
3. Identify the project_id for flood.doctor or target domain

### Phase 2: Pull Issues
1. Call `Ahrefs:doc` to get schema for `site-audit-issues`
2. Call `Ahrefs:site-audit-issues` with project_id
3. Parse response to get issue counts by category and importance

### Phase 3: Deep Dive on Critical Issues
1. For each ERROR-level issue with affected URLs > 0:
   - Call `Ahrefs:site-audit-page-explorer` with issue_id filter
   - Document affected URLs
2. Repeat for WARNING-level issues if time permits

### Phase 4: Generate Report
1. Create summary table with issue counts by severity
2. List all ERROR issues with affected URLs
3. List all WARNING issues with counts
4. Provide prioritized action items
5. Save report to `.claude/` folder

---

## Section 6: Manual Audit (No Ahrefs Project)

If no Ahrefs Site Audit project exists, perform these manual checks:

### Build & TypeScript Check
```bash
npm run build 2>&1 | head -100
npm run typecheck 2>&1
```

### File Structure Verification
- Check all imports in App.tsx have corresponding files
- Verify route paths match file locations
- Check for orphan files (exist but no route)

### SEO Element Check
- Grep for `PageMeta` usage across all pages
- Verify schema.org structured data in pages
- Check index.html for global schema

### Configuration Files
- `vercel.json` - deployment config
- `robots.txt` - crawl directives
- `sitemap.xml` - URL list and dates
- `package.json` - dependencies and scripts

### Content Quality
- Check for thin content pages (<200 words)
- Verify all images have alt text
- Check for duplicate titles/descriptions

---

## Section 7: Report Output Format

Site Audit reports should follow this structure:

### 1. Executive Summary
- Overall health score (if available from Ahrefs)
- Total pages crawled
- Issue breakdown: X errors, Y warnings, Z notices

### 2. Critical Issues (Errors)
| Issue Name | Affected URLs | Sample URLs | Fix Instructions |
|------------|---------------|-------------|------------------|

### 3. Important Issues (Warnings)
| Issue Name | Affected URLs | Priority |
|------------|---------------|----------|

### 4. Optimization Opportunities (Notices)
- Summary list with counts

### 5. Prioritized Action Items
- Numbered list of fixes in order of priority
- Include effort estimate (quick fix / medium / complex)

---

## Section 8: Quick Reference - Issue Count Summary

This protocol covers **86 distinct issues**:

| Category | Issue Count |
|----------|-------------|
| Indexability | 12 |
| Internal Pages | 14 |
| Links | 9 |
| Redirects | 7 |
| Content | 13 |
| Social Tags | 5 |
| Images | 7 |
| JavaScript | 2 |
| CSS | 3 |
| Sitemaps | 6 |
| Localization (Hreflang) | 4 |
| External Pages | 4 |
| **Total** | **86** |

---

## Section 9: Additional Checks (Claude Code Specific)

These checks are specific to the fd-google-redesign React/Vite project:

### React/Vite Build Health
| Check | Command/Method | Pass Criteria |
|-------|----------------|---------------|
| TypeScript compilation | `npm run typecheck` | No errors |
| Production build | `npm run build` | Builds successfully |
| Bundle size | Check dist/ folder | < 500KB initial JS |
| Lazy loading | Grep for `lazy()` | Routes use code splitting |

### Route Integrity
| Check | Method | Pass Criteria |
|-------|--------|---------------|
| Import/file match | Compare App.tsx imports to files | All imports resolve |
| Route uniqueness | Grep routes in App.tsx | No duplicate paths |
| 404 fallback | Check for `path="*"` route | Exists |

### Component Quality
| Check | Method | Pass Criteria |
|-------|--------|---------------|
| PageMeta usage | Grep for PageMeta | All pages have it |
| Schema markup | Grep for structuredData | Key pages have schema |
| Mobile CTA | Check for MobileStickyCTA | Present in layout |

### Performance Indicators
| Check | Method | Pass Criteria |
|-------|--------|---------------|
| Image optimization | Check for WebP/AVIF | Modern formats used |
| Font loading | Check for font-display | swap or optional |
| Critical CSS | Check index.html | Inline critical styles |

---

## Section 10: Core Web Vitals & Performance

| Metric | Threshold | Tool |
|--------|-----------|------|
| **LCP** (Largest Contentful Paint) | < 2.5s (good), < 4s (needs improvement) | Lighthouse, PageSpeed API |
| **FID** (First Input Delay) | < 100ms (good), < 300ms (needs improvement) | Chrome UX Report |
| **CLS** (Cumulative Layout Shift) | < 0.1 (good), < 0.25 (needs improvement) | Lighthouse |
| **TTFB** (Time to First Byte) | < 800ms | curl, WebPageTest |
| **FCP** (First Contentful Paint) | < 1.8s | Lighthouse |
| **INP** (Interaction to Next Paint) | < 200ms | Chrome UX Report |
| **Speed Index** | < 3.4s | Lighthouse |
| **Total Blocking Time** | < 200ms | Lighthouse |

### Performance Check Commands
```bash
# Lighthouse CLI audit
npx lighthouse https://flood.doctor --output=json --output-path=./lighthouse-report.json

# PageSpeed Insights API
curl "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://flood.doctor&strategy=mobile"
```

---

## Section 11: Accessibility (WCAG 2.1)

| Check | Severity | Description |
|-------|----------|-------------|
| Missing alt text | ERROR | Images without alt attributes |
| Low color contrast | ERROR | Text doesn't meet 4.5:1 ratio (AA) |
| Missing form labels | ERROR | Form inputs without associated labels |
| Missing skip link | WARNING | No "skip to content" for keyboard users |
| Missing lang attribute | ERROR | HTML tag lacks lang="en" |
| Empty links | ERROR | Links with no text content |
| Empty buttons | ERROR | Buttons with no accessible name |
| Missing ARIA labels | WARNING | Interactive elements lack ARIA |
| Focus not visible | ERROR | No visible focus indicator |
| Touch targets too small | WARNING | Buttons < 44x44px on mobile |
| Heading order skipped | WARNING | H1 → H3 (skipped H2) |
| Missing landmark regions | NOTICE | No main, nav, header, footer roles |
| Auto-playing media | WARNING | Video/audio plays without user action |
| Missing captions | WARNING | Videos lack closed captions |
| Keyboard trap | ERROR | Focus gets stuck in component |

### Accessibility Check Commands
```bash
# axe-core CLI
npx @axe-core/cli https://flood.doctor

# Pa11y CLI
npx pa11y https://flood.doctor
```

---

## Section 12: Security Headers

| Header | Expected Value | Severity |
|--------|----------------|----------|
| **Content-Security-Policy** | Defined policy | ERROR if missing |
| **X-Frame-Options** | DENY or SAMEORIGIN | ERROR if missing |
| **X-Content-Type-Options** | nosniff | WARNING if missing |
| **X-XSS-Protection** | 1; mode=block | WARNING if missing |
| **Strict-Transport-Security** | max-age=31536000; includeSubDomains | WARNING if missing |
| **Referrer-Policy** | strict-origin-when-cross-origin | NOTICE if missing |
| **Permissions-Policy** | Restrictive policy | NOTICE if missing |
| **Cross-Origin-Opener-Policy** | same-origin | NOTICE if missing |
| **Cross-Origin-Resource-Policy** | same-origin | NOTICE if missing |

### Security Header Check
```bash
# Check response headers
curl -I https://flood.doctor

# SecurityHeaders.com grade
# Visit: https://securityheaders.com/?q=flood.doctor
```

### Additional Security Checks
| Check | Severity | Description |
|-------|----------|-------------|
| HTTPS everywhere | ERROR | All resources load via HTTPS |
| No mixed content | ERROR | HTTP resources on HTTPS pages |
| Valid SSL certificate | ERROR | Certificate not expired, chain valid |
| No exposed secrets | ERROR | API keys, tokens in client code |
| Secure cookies | WARNING | Cookies lack Secure/HttpOnly flags |
| No inline scripts | NOTICE | CSP compliance for XSS prevention |

---

## Section 13: Mobile Responsiveness

| Check | Severity | Description |
|-------|----------|-------------|
| Viewport meta tag | ERROR | Missing `<meta name="viewport">` |
| Viewport width | ERROR | Content wider than viewport |
| Touch targets | WARNING | Clickable elements < 44x44px |
| Font size | WARNING | Text < 16px requires zoom |
| Horizontal scroll | ERROR | Page scrolls horizontally |
| Mobile-friendly test | ERROR | Fails Google Mobile-Friendly Test |
| Responsive images | WARNING | Images not using srcset/sizes |
| Tap delay | NOTICE | No `touch-action: manipulation` |

### Mobile Check Commands
```bash
# Google Mobile-Friendly Test API
curl "https://searchconsole.googleapis.com/v1/urlTestingTools/mobileFriendlyTest:run" \
  -d '{"url": "https://flood.doctor"}'

# Lighthouse mobile audit
npx lighthouse https://flood.doctor --emulated-form-factor=mobile
```

---

## Section 14: Structured Data Validation

| Schema Type | Required Pages | Validation |
|-------------|----------------|------------|
| **LocalBusiness** | Homepage, Contact | Google Rich Results Test |
| **FAQPage** | Blog posts, Resources | Google Rich Results Test |
| **Article** | Blog posts | Google Rich Results Test |
| **Service** | Service pages | Google Rich Results Test |
| **BreadcrumbList** | All pages | Google Rich Results Test |
| **HowTo** | Guide pages | Google Rich Results Test |
| **Review/AggregateRating** | Reviews page | Google Rich Results Test |

### Structured Data Checks
| Check | Severity | Description |
|-------|----------|-------------|
| Valid JSON-LD syntax | ERROR | Malformed JSON in script tag |
| Required properties | ERROR | Missing @type, name, etc. |
| Recommended properties | WARNING | Missing optional but helpful fields |
| No warnings | NOTICE | Google shows warnings for schema |
| Consistent NAP | ERROR | Name/Address/Phone mismatch across schemas |

### Validation Commands
```bash
# Google Rich Results Test
# Visit: https://search.google.com/test/rich-results?url=https://flood.doctor

# Schema.org Validator
# Visit: https://validator.schema.org/
```

---

## Section 15: Internal Anchor Links

| Check | Severity | Description |
|-------|----------|-------------|
| Broken hash links | ERROR | `#section-id` target doesn't exist |
| Duplicate IDs | ERROR | Multiple elements with same ID |
| Empty hash links | WARNING | `href="#"` with no target |
| Case-sensitive mismatch | ERROR | `#Section` vs `id="section"` |
| Missing scroll padding | NOTICE | Fixed header overlaps anchor target |

### Anchor Link Check Method
```javascript
// Browser console check
document.querySelectorAll('a[href^="#"]').forEach(a => {
  const id = a.getAttribute('href').slice(1);
  if (id && !document.getElementById(id)) {
    console.error(`Broken anchor: ${a.href}`);
  }
});
```

---

## Section 16: Console Errors & Runtime Issues

| Check | Severity | Description |
|-------|----------|-------------|
| JavaScript errors | ERROR | Uncaught exceptions in console |
| React errors | ERROR | Component rendering failures |
| Network failures | ERROR | Failed fetch/XHR requests |
| 404 resources | ERROR | Missing JS/CSS/image files |
| Deprecation warnings | NOTICE | Using deprecated APIs |
| CORS errors | ERROR | Cross-origin request blocked |
| Memory leaks | WARNING | Detached DOM nodes, growing heap |

### Console Check Method
```javascript
// Playwright/Puppeteer console capture
page.on('console', msg => console.log(msg.type(), msg.text()));
page.on('pageerror', err => console.error('Page error:', err));
```

---

## Section 17: Form Validation & Functionality

| Check | Severity | Description |
|-------|----------|-------------|
| Form submission works | ERROR | Form fails to submit |
| Required field validation | ERROR | Missing required field handling |
| Email format validation | WARNING | Invalid email accepted |
| Phone format validation | WARNING | Invalid phone accepted |
| Error messages display | ERROR | No feedback on validation failure |
| Success confirmation | WARNING | No feedback after submission |
| CSRF protection | ERROR | Forms lack CSRF tokens (if applicable) |
| Honeypot/captcha | NOTICE | No spam prevention |
| Accessible error messages | WARNING | Errors not announced to screen readers |
| Form state preservation | NOTICE | Data lost on validation error |

### Form Check Method
```javascript
// Test form submission
const form = document.querySelector('form');
const formData = new FormData(form);
// Validate required fields
// Test submission endpoint
```

---

## Section 18: Audit Priority Matrix

When running a full audit, check in this order:

| Priority | Category | Rationale |
|----------|----------|-----------|
| 1 | Build/TypeScript errors | Site won't deploy if broken |
| 2 | Security headers | Critical for production |
| 3 | Indexability (robots, sitemap) | Must be crawlable |
| 4 | Core Web Vitals | Ranking factor |
| 5 | Mobile responsiveness | Majority of traffic |
| 6 | Accessibility | Legal compliance |
| 7 | Structured data | Rich results |
| 8 | Content issues | SEO optimization |
| 9 | Console errors | User experience |
| 10 | Form functionality | Lead generation |

---

## Section 19: Automated Audit Script

Run this comprehensive audit with a single command:

```bash
#!/bin/bash
# Full site audit script

echo "=== FLOOD DOCTOR SITE AUDIT ==="
echo ""

# 1. Build check
echo "1. Checking build..."
npm run build 2>&1 | tail -10

# 2. TypeScript check
echo ""
echo "2. Checking TypeScript..."
npm run typecheck 2>&1 | tail -10

# 3. Route integrity
echo ""
echo "3. Checking routes..."
grep -c "Route path=" App.tsx
echo "routes defined"

# 4. PageMeta usage
echo ""
echo "4. Checking PageMeta usage..."
grep -r "PageMeta" pages/ --include="*.tsx" | wc -l
echo "pages with PageMeta"

# 5. Security headers (requires curl)
echo ""
echo "5. Checking security headers..."
curl -sI https://flood.doctor | grep -E "^(X-|Content-Security|Strict-Transport)"

# 6. Lighthouse (requires npx)
echo ""
echo "6. Running Lighthouse..."
npx lighthouse https://flood.doctor --quiet --chrome-flags="--headless" --output=json | jq '.categories.performance.score'

echo ""
echo "=== AUDIT COMPLETE ==="
```

---

*Last Updated: 2026-01-03*
*Project: fd-google-redesign*
*Total Checks: 120+*
