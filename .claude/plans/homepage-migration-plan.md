# Flood Doctor Homepage Migration Plan

## Overview

**Goal:** Replace the current FloodDoctorHomeV3 homepage with the new Google Business Profile-inspired design from https://github.com/FrankDark007/New-Homepage---Flood-Doctor

**Current Production Homepage:** `FloodDoctorHomeV3.tsx` (815 lines) + CSS + content files
**New Design Source:** GitHub repo with 14 components in Google AI Studio format

---

## Design Comparison

| Aspect | Current (FloodDoctorHomeV3) | New Design (GitHub) |
|--------|---------------------------|---------------------|
| **Framework** | React + custom CSS (BEM) | React + Tailwind CSS |
| **Content** | TypeScript content files (fd.ts, ref.ts) | Hardcoded in components |
| **Hero** | Phone mockup with FD business card | Phone mockup with Google search |
| **Value Props** | Tiles section (3-up grid) | ValueProps (icons + text) |
| **Features** | AnimatedTextList with progress bars | FeatureSection with auto-cycle |
| **Products** | ScrollingCards | ProductOfferings (scroll-based) |
| **Stats** | TwoUp with stats overlay | InsightsSection (analytics card) |
| **Testimonials** | CaseStudies carousel | SuccessStory carousel |
| **CTA** | CTAHeader + Steps | FinalSteps (3 numbered) |
| **FAQ** | Accordion | Accordion |

---

## Migration Strategy Options

### Option A: Full Component Replacement (Recommended)
Replace FloodDoctorHomeV3 entirely with new components.

**Pros:**
- Cleaner codebase, no legacy code
- Fresh Tailwind-based styling
- Easier to maintain going forward

**Cons:**
- More work upfront
- Need to adapt content for Flood Doctor

### Option B: Incremental Section Replacement
Replace sections one-by-one within existing structure.

**Pros:**
- Gradual migration, less risk
- Can validate each section

**Cons:**
- Mixed CSS approaches (BEM + Tailwind)
- Longer timeline
- More complex merge conflicts

### Option C: Design Inspiration Only
Keep current architecture, just update visual styling.

**Pros:**
- Fastest to implement
- Keeps existing content system

**Cons:**
- Doesn't get new component patterns
- May still look different from reference

---

## Recommended Approach: Option A (Full Replacement)

### Phase 1: Setup & Preparation

1. **Create new components directory**
   ```
   /components/home-v4/
   ├── Hero.tsx
   ├── ValueProps.tsx
   ├── FeatureSection.tsx
   ├── ProductOfferings.tsx
   ├── InsightsSection.tsx
   ├── SuccessStory.tsx
   ├── FinalSteps.tsx
   ├── FAQ.tsx
   └── index.ts
   ```

2. **Create new page file**
   - `/pages/FloodDoctorHomeV4.tsx` - orchestrates new components

3. **Content adaptation strategy**
   - Create `/content/fd-home-v4/` directory
   - Migrate relevant content from `fd-home-v3/fd.ts`

### Phase 2: Component Migration

#### 2.1 Hero Component
- **Source:** New Hero.tsx with Google-style phone mockup
- **Adapt:**
  - Change search text to "water damage restoration near me"
  - Show Flood Doctor business card in phone
  - Update headline: "Emergency Water Damage Restoration"
  - CTA buttons: "Call Now" + "Request Service"

#### 2.2 ValueProps Component
- **Source:** New ValueProps.tsx (Free, Easy, Personalized)
- **Adapt to FD:**
  - "24/7 Response" - "Available around the clock for emergencies"
  - "Certified" - "IICRC-certified technicians and equipment"
  - "Insured" - "We work directly with your insurance company"

#### 2.3 FeatureSection (x2)
- **Source:** New FeatureSection.tsx with auto-cycling tabs
- **Instance 1 (text-left):** "Complete Restoration Services"
  - Water extraction, structural drying, rebuild coordination
- **Instance 2 (text-right):** "From Call to Complete"
  - Rapid response, professional equipment, thorough documentation

#### 2.4 ProductOfferings Component
- **Source:** New ProductOfferings.tsx with scroll-based reveals
- **Adapt:** Show service categories:
  - Residential Water Damage
  - Commercial Restoration
  - Mold Remediation

#### 2.5 InsightsSection Component
- **Source:** New InsightsSection.tsx
- **Adapt:** Show Flood Doctor stats/metrics:
  - Projects completed
  - Response time average
  - Customer satisfaction

#### 2.6 SuccessStory Component
- **Source:** New SuccessStory.tsx testimonial carousel
- **Adapt:** Use Flood Doctor customer testimonials
  - Pull from existing reviews data
  - Add video testimonial if available

#### 2.7 FinalSteps Component
- **Source:** New FinalSteps.tsx
- **Adapt steps:**
  1. "Call" - 24/7 emergency line
  2. "Assess" - On-site inspection within 60 minutes
  3. "Restore" - Professional restoration to pre-loss condition

#### 2.8 FAQ Component
- **Source:** New FAQ.tsx accordion
- **Adapt:** Use existing FAQ content from resources

### Phase 3: Integration

1. **Route Configuration**
   - Add dev route: `/dev/fd-home-v4`
   - Keep V3 as fallback until validated

2. **Header/Footer Integration**
   - Use existing FD Header/Footer components
   - Or create new minimal header for fullscreen mode

3. **Responsive Testing**
   - Mobile (375px, 428px)
   - Tablet (768px)
   - Desktop (1024px, 1440px)

### Phase 4: Content & Assets

1. **Images Required**
   - Hero phone mockup (or CSS-based)
   - Service category images (3)
   - Team/stats background image
   - Testimonial photos
   - Service icons

2. **Copy Updates**
   - All headlines adapted for water damage restoration
   - CTAs point to tel: and /request/
   - SEO meta tags updated

### Phase 5: Testing & Launch

1. **Visual QA**
   - Compare against GitHub reference
   - Cross-browser testing (Chrome, Safari, Firefox)
   - Mobile responsiveness

2. **Performance**
   - Lighthouse audit
   - Core Web Vitals check
   - Image optimization

3. **SEO**
   - Meta tags preserved
   - Schema markup (LocalBusiness)
   - Canonical URLs

4. **Deployment**
   - Deploy to `/dev/fd-home-v4` first
   - A/B test if possible
   - Full rollout to `/` route

---

## File Changes Summary

### New Files to Create
```
components/home-v4/Hero.tsx
components/home-v4/ValueProps.tsx
components/home-v4/FeatureSection.tsx
components/home-v4/ProductOfferings.tsx
components/home-v4/InsightsSection.tsx
components/home-v4/SuccessStory.tsx
components/home-v4/FinalSteps.tsx
components/home-v4/FAQ.tsx
components/home-v4/index.ts
pages/FloodDoctorHomeV4.tsx
content/fd-home-v4/content.ts
content/fd-home-v4/types.ts
```

### Files to Modify
```
App.tsx - Add new route
tailwind.config.js - Add any new utilities if needed
```

### Files to Keep (Fallback)
```
pages/FloodDoctorHomeV3.tsx (keep until V4 validated)
pages/FloodDoctorHomeV3.css
content/fd-home-v3/* (keep as reference)
```

---

## Timeline Estimate

| Phase | Duration | Notes |
|-------|----------|-------|
| Phase 1: Setup | 1 hour | Directory structure, scaffolding |
| Phase 2: Components | 4-6 hours | Port and adapt all 8 components |
| Phase 3: Integration | 1-2 hours | Routing, header/footer |
| Phase 4: Content | 2-3 hours | Copy, images, assets |
| Phase 5: Testing | 2-3 hours | QA, responsive, performance |
| **Total** | **10-15 hours** | |

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| CSS conflicts (Tailwind + existing) | Scope new components, use prefixes if needed |
| Missing assets | Use placeholders initially, replace later |
| Content mismatch | Keep content abstraction, don't hardcode |
| SEO impact | Preserve existing meta, add redirects if URLs change |
| Performance regression | Profile before/after, optimize images |

---

## Decision Points

Before implementation, confirm:

1. **Content approach:** TypeScript files (current) or hardcoded?
2. **Header/Footer:** Use existing FD components or new?
3. **Image source:** Create new assets or use stock/existing?
4. **Launch strategy:** Hard cutover or A/B test?

---

## Next Steps

1. Get approval on this plan
2. Clone GitHub repo components locally
3. Start Phase 1 (Setup)
4. Iterate through phases

---

*Plan created: January 12, 2026*
*Status: Awaiting Approval*
