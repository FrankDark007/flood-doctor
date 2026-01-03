# Flood Doctor Project History

> **PURPOSE:** Complete record of all work done on this project. Never start from zero. Always append, never delete.

---

## Project Overview

**Client:** Flood Doctor
**Business:** Water damage restoration company
**Service Area:** Northern Virginia & Washington DC Metro
**Website:** Marketing site with service pages, blog, locations, resources

**Stack:**
- React 19 + TypeScript
- Vite dev server (port 3000)
- Tailwind CSS
- No src/ folder - flat structure at root

**Design System:**
- Google Aesthetic (clean, tech-forward)
- Material Design 3 principles
- Primary: #1a73e8 (Google Blue)
- Fonts: Plus Jakarta Sans, Inter fallback
- Tone: Premium, professional, direct

---

## Completed Work

### Infrastructure & Setup
- [x] Project scaffolding with Vite + React + TypeScript
- [x] Tailwind CSS configuration
- [x] Routing with React Router
- [x] SEO infrastructure (PageMeta component, schema utilities)
- [x] Figma Desktop MCP integration (2026-01-02)

### Pages Built
- [x] Homepage (`/pages/Home.tsx`)
- [x] About page (`/pages/About.tsx`)
- [x] Contact page (`/pages/Contact.tsx`)
- [x] Services Hub (`/pages/ServicesHub.tsx`)
- [x] Locations Hub (`/pages/LocationsHub.tsx`)
- [x] Resources Hub (`/pages/ResourcesHub.tsx`)
- [x] Reviews page (`/pages/Reviews.tsx`)
- [x] Request Service page (`/pages/RequestService.tsx`)
- [x] Blog Index (`/pages/BlogIndex.tsx`)
- [x] Careers page (`/pages/Careers.tsx`)
- [x] Privacy Policy, Terms

### Templates
- [x] ServiceDetail template (`/pages/templates/ServiceDetail.tsx`) - Google "How It Works" layout
- [x] Blog article template structure
- [x] Location page templates

### Components
- [x] Header/Navigation with dropdowns
- [x] Footer
- [x] Button component
- [x] PageMeta (SEO)
- [x] ServiceCard, ServiceCardThumb
- [x] RelatedServices section
- [x] ServiceAreaLinks section
- [x] FAQ accordion (Google style)

### Data
- [x] Services data (`/data/services.ts`) - 20+ services with full content
- [x] Blog articles data
- [x] Navigation data

### Blog Articles Written
- Water damage restoration cost (Fairfax)
- Water damage restoration timeline
- Kitchen water damage guide
- Appliance water damage (dishwasher/washing machine)
- (check /pages/blog/ for full list)

---

## Bugs Fixed

### 2026-01-02: Service Detail Steps Empty
**Problem:** Steps 1-4 on service pages showed empty headings/descriptions
**Root Cause:** `services.ts` stores whatWeDo as strings `"Title: Description"` but `ServiceDetail.tsx` expected objects `{title, description}`
**Fix:** Updated ServiceDetail.tsx lines 93-123 to parse both string and object formats
**File:** `/pages/templates/ServiceDetail.tsx`

### 2026-01-02: ServiceDetail Design Fixes (Google Alignment)
**Problem:** Page layout didn't match Google Ads "How It Works" reference accurately
**Fixes Applied:**
1. Step number badges - changed from large circles (56px, rounded-2xl) to small squares (32px, rounded-lg)
2. Resources section - replaced icon boxes with actual images
3. Expert section - removed yellow colored container, now rounded image with shadow
**File:** `/pages/templates/ServiceDetail.tsx`
**Status:** Complete - awaiting user review

---

## Key Decisions

### 2026-01-02: Figma MCP Setup
**Decision:** Set up Figma Desktop MCP for design accuracy
**Reason:** Claude was having trouble replicating Google page layouts accurately
**Result:** MCP connected successfully, but requires actual Figma designs to be useful
**Investment:** User spent ~2 hours on Figma Pro subscription + MCP configuration
**Status:** Connected but underutilized (no designs in Figma yet)
**Important Discovery:** Figma MCP tools are READ-only. Cannot create designs - only extract from existing ones. For autonomous design work, Claude should code directly + use Playwright for visual verification.

### 2026-01-02: claude-mem Plugin Installed
**Decision:** Install claude-mem plugin for automatic session continuity
**Reason:** User frustrated by losing context on every restart, having to start from zero
**Installation:**
- `claude plugin marketplace add thedotmack/claude-mem`
- `claude plugin install claude-mem@thedotmack`
**Features:** Auto-captures tool usage, compresses with AI, injects context into future sessions
**Web UI:** http://localhost:37777 (after restart)
**Status:** Installed - requires Claude Code restart to activate

### Design Direction: Google Aesthetic
**Decision:** Model pages after Google Ads/Workspace pages
**Reason:** Clean, professional, tech-forward look that builds trust
**Reference:** Google Ads landing pages, Google Workspace product pages

### Flat File Structure
**Decision:** No /src folder, all code at root level
**Reason:** Simpler navigation, faster development

---

## Current Issues / Technical Debt

1. **Design accuracy** - Some layouts don't match Google reference pages exactly
2. **CDN Tailwind warning** - Using cdn.tailwindcss.com (fine for dev, need to fix for production)
3. **Dev variants** - Multiple DevA/DevB/DevC files exist for some pages (cleanup needed)

---

## Roadmap (From CLAUDE.md)

1. **Cost Calculator** — Interactive tool using actual price lists
2. **Standard Project Package** — Template/bundle definition
3. **Client Portal:**
   - UI for clients to browse/download project files
   - CompanyCam API integration (project photos)
   - Matterport API integration (3D scans)

---

## Tools & Integrations

### Figma MCP
- **Type:** Desktop app local server
- **URL:** http://127.0.0.1:3845/mcp
- **Status:** Connected
- **Tools Available:** get_design_context, get_screenshot, get_metadata, get_variable_defs

### Dev Server
- **Command:** `npm run dev`
- **URL:** http://localhost:3000

---

## File Structure Reference

```
/flood-doctor/fd-prototype-final/
├── .claude/
│   ├── session.md          # Current session state (read first!)
│   └── project-history.md  # This file - complete history
├── components/
│   ├── ui/                 # Buttons, PageMeta, etc.
│   ├── sections/           # RelatedServices, ServiceAreaLinks
│   └── services/           # ServiceCard variants
├── config/
│   ├── site.ts
│   └── constants.ts
├── data/
│   ├── services.ts         # All service definitions
│   ├── blog-articles.ts
│   └── nav.ts
├── pages/
│   ├── templates/          # ServiceDetail, CategoryLanding, etc.
│   ├── blog/               # Individual blog articles
│   ├── locations/          # Location pages
│   └── *.tsx               # Main pages (Home, About, etc.)
├── public/                 # Static assets, SEO files
├── utils/
│   └── schema.ts           # JSON-LD schema generators
├── App.tsx                 # Main app + routing
├── CLAUDE.md               # Project instructions for Claude
└── package.json
```

---

## How To Update This File

**After completing any work:**
1. Add to "Completed Work" section
2. Document any bugs fixed
3. Record key decisions with reasoning
4. Update current issues if resolved

**Format for new entries:**
```
### YYYY-MM-DD: Brief Title
**What:** Description of work done
**Why:** Reasoning behind it
**Files:** List of files changed
**Status:** Complete/In Progress/Blocked
```

---

---

### 2026-01-03: V3 City Subdomain Architecture Complete

**What:** Implemented full V3 "Digital Franchise" multi-subdomain SEO architecture

**Components Created:**
- `data/franchises.ts` - 14 franchises (HQ + 13 cities) with rich localHooks
  - Each city has: neighborhoods, landmarks, commonIssues, architectureNotes, permitOffice
  - Manager bios with local ties
  - Emergency contacts and partner networks
  - GeoCoordinates for schema
  - Nested serviceArea (primary: <30min, secondary: <60min)
- `hooks/useFranchise.ts` - Subdomain detection with `?city=` dev mode
- `contexts/FranchiseContext.tsx` - Provider pattern for app-wide franchise data
- `components/seo/PageMeta.tsx` - Dynamic canonicals, OG/Twitter, geo meta tags
- `components/seo/LocalBusinessSchema.tsx` - SAB-compliant JSON-LD (no streetAddress)
- `components/seo/FAQSchema.tsx` - Dynamic city-specific FAQs
- `components/forms/ServiceRequestForm.tsx` - City-tagged form submissions
- `scripts/generate-sitemaps.ts` - Generates 15 sitemaps (1 per subdomain + index)
- `config/site.ts`, `config/constants.ts`, `.env.example`

**SAB Compliance:**
- No street addresses exposed in schema (per Google SAB guidelines)
- areaServed with City type entries from franchise service areas
- GeoCoordinates for local ranking signals

**Files Changed:**
- App.tsx - Wrapped with FranchiseProvider
- All SEO components updated for V3 serviceArea structure

**Status:** Complete - Build verified, 15 sitemaps generated

---

### 2026-01-03: City Blog Content Generation Complete

**What:** Created 55 SEO blog articles across all 13 city subdomains

**Content Distribution:**
| City | Articles | Topics |
|------|----------|--------|
| McLean | 5 | Luxury estates, estate homes |
| Arlington | 5 | Condos, townhomes, urban density |
| Alexandria | 5 | Historic, waterfront, Old Town |
| Fairfax | 5 | Suburban families, basements, insurance |
| Tysons | 5 | High-rises, commercial, condos |
| Reston | 5 | Townhomes, planned community |
| Ashburn | 5 | New construction, data centers |
| Vienna | 5 | Historic homes, aging plumbing |
| Great Falls | 3 | Luxury estates, generators |
| Herndon | 3 | Mixed housing, waterproofing |
| Springfield | 3 | Established suburbs, basements |
| Lorton | 3 | New construction, Laurel Hill |
| Falls Church | 3 | Historic homes, moisture control |

**Content Structure (TypeScript exports):**
- meta: title, description, canonical URL, publishDate, author, category
- h1, heroSection (headline, subheadline, backgroundImage)
- content: introduction, sections array, conclusion
- callToAction with phone: (703) 656-0103
- breadcrumbs array

**Content Differentiation Strategy:**
- Tysons: High-rises, underground parking, commercial properties
- Great Falls/McLean: Luxury estates, high-value finishes, generators
- Vienna/Falls Church: Historic homes, aging plumbing, established neighborhoods
- Ashburn/Lorton: New construction, builder warranties
- Reston: Townhomes, HOA coordination, planned community
- Arlington/Alexandria: Urban density, condos, historic preservation

**Files Created:** 55 files in `src/content/cities/[city]/blog/`

**Status:** Complete - All 13 cities have blog content

---

*Last updated: 2026-01-03*
