# Service Detail Post-Process Layout Redesign

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign service detail page layout AFTER the process tiles for cleaner mobile/desktop UX with improved SEO structure and sidebar resources.

**Architecture:** Keep hero through process tiles unchanged. Redesign the two-column layout section to have better responsive behavior, add jump links, improve heading hierarchy, and add related resources to sidebar.

**Tech Stack:** React 19, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons

---

## Audit Summary

### Current Structure (ServiceDetailNew.tsx)

**Production template:** `pages/templates/ServiceDetailNew.tsx` (247 lines)
**Used by:** All service routes in App.tsx (27 services)
**Alternative template:** `pages/templates/ServiceDetail.tsx` (NOT in production, 1037 lines, legacy)

**Section Boundary:**
- **Keep unchanged:** Lines 1-170 (Hero → Process tiles)
- **Redesign:** Lines 173-225 (Post-process two-column layout)

**Post-Process Content (Current):**
```tsx
// Line 173-225: Two-Column Layout Section
<section className="py-12 md:py-16 bg-gray-50/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:grid lg:grid-cols-12 lg:gap-12">

      {/* Main Content Column - 8 cols */}
      <div className="lg:col-span-8 space-y-12">
        <ServiceDetailedContent sections={pageData.detailedContent} />
        <ServiceTestimonials testimonials={pageData.testimonials} />
        <ServicePricing pricing={pageData.pricing} />
        <GoogleStyleFAQ data={pageData.faqs} />
      </div>

      {/* Sticky Sidebar - 4 cols */}
      <aside className="hidden lg:block lg:col-span-4">
        <div className="sticky top-32 space-y-6">
          <EmergencyServiceCard variant="expanded" />
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            {/* Quick CTA card */}
          </div>
        </div>
      </aside>

    </div>
  </div>
</section>
```

**ServiceDetailedContent Component:**
- Location: `generated-layouts/service-page/ServiceDetailedContent.tsx` (176 lines)
- Structure: **Nested 3-column layout** (sidebar 1/4 + accordion 3/4)
  - Left sidebar: TOC, progress tracker, read checkmarks
  - Main area: Accordion sections with toggle
- **Problem:** This is nested INSIDE the 8-col main column, creating confusing responsive behavior

### Issues Identified

#### Issue 1: Nested Multi-Column Layouts
**Problem:** ServiceDetailedContent has its own sidebar (lg:w-1/4) nested inside ServiceDetailNew's main column (lg:col-span-8)
- Desktop: 12-col grid → 8-col main → 25% sidebar + 75% content = confusing width calculations
- Mobile: Sidebar stacks above content, then entire thing stacks above emergency sidebar
- Result: Poor mobile UX, content feels cramped

#### Issue 2: No Jump Links for Topics
**Problem:** ServiceDetailedContent has sidebar TOC, but no horizontal jump-link row for mobile
- Mobile users must scroll past entire sidebar to reach content
- No quick way to see all topics at a glance

#### Issue 3: Sidebar Missing Related Resources
**Problem:** Sidebar only has emergency CTA, no related resources/services
- Missed opportunity for internal linking
- No SEO benefit from contextual links

#### Issue 4: Heading Hierarchy Issues
**Problem:** ServiceDetailedContent uses `<h2>` for accordion titles (line 141)
- Page has H1 (hero title), then jumps to H2 inside accordion
- No section-level H2 before accordion content
- Bad for SEO and accessibility

#### Issue 5: Mobile Sidebar Hidden
**Problem:** Emergency sidebar is `hidden lg:block` (line 199)
- Mobile users never see emergency card
- CTA stack should appear after accordion on mobile

---

## Proposed Solution

### Desktop Layout (≥1024px)
```
┌────────────────────────────────────────────┐
│   [Jump Links Row: Topic 1 | Topic 2 | Topic 3 | ...]   │
└────────────────────────────────────────────┘
┌───────────────────────┬────────────────────┐
│  Main Accordion       │   Sticky Sidebar   │
│  (8 cols)             │   (4 cols)         │
│                       │                    │
│  [Accordion Section 1]│   [Emergency Card] │
│  [Accordion Section 2]│   [Quick CTA]      │
│  [Accordion Section 3]│   [Related Resources]
│                       │   [Related Services]
│  [Testimonials]       │                    │
│  [Pricing]            │                    │
│  [FAQ]                │                    │
└───────────────────────┴────────────────────┘
```

### Mobile Layout (<1024px)
```
┌────────────────────────────────────────────┐
│ [Horizontal Topic Nav: ←→ scroll chips]    │
└────────────────────────────────────────────┘
┌────────────────────────────────────────────┐
│            Main Accordion                   │
│                                             │
│         [Accordion Section 1]               │
│         [Accordion Section 2]               │
│         [Accordion Section 3]               │
└────────────────────────────────────────────┘
┌────────────────────────────────────────────┐
│         [Testimonials]                      │
│         [Pricing]                           │
│         [FAQ]                               │
└────────────────────────────────────────────┘
┌────────────────────────────────────────────┐
│         [Related Resources]                 │
└────────────────────────────────────────────┘
  (Emergency CTA handled by existing sticky bottom bar — ServiceCTASticky)
  (EmergencyServiceCard + Quick CTA card = desktop sidebar only)
```

---

## Files to Change

### Primary Files
1. **pages/templates/ServiceDetailNew.tsx** (lines 173-225)
   - Replace two-column layout section
   - Add jump links row
   - Restructure sidebar to include related resources

2. **generated-layouts/service-page/ServiceDetailedContent.tsx** (entire file)
   - Remove nested sidebar (lg:w-1/4)
   - Keep only accordion content
   - Fix heading hierarchy (section H2, accordion H3s)
   - Simplify to single-column accordion

### Supporting Components (may need creation)
3. **components/sections/TopicJumpLinks.tsx** (NEW)
   - Horizontal scrollable chip row
   - Smooth scroll to accordion sections
   - Active state tracking

4. **components/sections/RelatedResourcesCard.tsx** (NEW)
   - Sidebar card with related resource links
   - Internal links only (no external)
   - 3-5 links per card

### Types (if needed)
5. **generated-layouts/service-page/types.ts**
   - May need to extend ContentSection type
   - Add RelatedResource type

---

## Implementation Plan

### Task 1: Create TopicJumpLinks Component

**Files:**
- Create: `components/sections/TopicJumpLinks.tsx`

**Step 1: Create component file with interface**

```tsx
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TopicJumpLinksProps {
  sections: { id: string; label: string }[];
  activeId: string | null;
  onNavigate: (id: string) => void;
}

const TopicJumpLinks: React.FC<TopicJumpLinksProps> = ({
  sections,
  activeId,
  onNavigate,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  // Check scroll position to show/hide arrows
  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [sections]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 200;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-4">

          {/* Left scroll button */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-2 shadow-md hover:bg-gray-50"
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} className="text-gray-600" />
            </button>
          )}

          {/* Scrollable chips */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeId === section.id
                    ? 'bg-[#1a73e8] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Right scroll button */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-2 shadow-md hover:bg-gray-50"
              aria-label="Scroll right"
            >
              <ChevronRight size={16} className="text-gray-600" />
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default TopicJumpLinks;
```

**Step 2: Verify component renders**

```bash
# No test file needed yet - will verify in integration
```

**Step 3: Commit**

```bash
git add components/sections/TopicJumpLinks.tsx
git commit -m "feat(service-detail): add TopicJumpLinks component for mobile nav"
```

---

### Task 2: Create RelatedResourcesCard Component

**Files:**
- Create: `components/sections/RelatedResourcesCard.tsx`

**Step 1: Create component file**

```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';

interface RelatedResource {
  title: string;
  description: string;
  url: string;
}

interface RelatedResourcesCardProps {
  resources: RelatedResource[];
}

const RelatedResourcesCard: React.FC<RelatedResourcesCardProps> = ({ resources }) => {
  if (resources.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4 text-[#1a73e8] font-semibold">
        <FileText size={18} />
        <h3 className="text-sm uppercase tracking-wide">Related Resources</h3>
      </div>

      <div className="space-y-3">
        {resources.map((resource, idx) => (
          <Link
            key={idx}
            to={resource.url}
            className="group block p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 group-hover:text-[#1a73e8] transition-colors mb-1">
                  {resource.title}
                </p>
                <p className="text-xs text-gray-500 line-clamp-2">
                  {resource.description}
                </p>
              </div>
              <ArrowRight
                size={14}
                className="flex-shrink-0 text-gray-400 group-hover:text-[#1a73e8] group-hover:translate-x-1 transition-all mt-1"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedResourcesCard;
```

**Step 2: Commit**

```bash
git add components/sections/RelatedResourcesCard.tsx
git commit -m "feat(service-detail): add RelatedResourcesCard sidebar component"
```

---

### Task 3: Simplify ServiceDetailedContent to Remove Nested Sidebar

**Files:**
- Modify: `generated-layouts/service-page/ServiceDetailedContent.tsx` (entire component)

**Step 1: Remove sidebar column, keep only accordion**

Replace entire component structure (lines 49-172) with single-column accordion:

```tsx
const ServiceDetailedContent: React.FC<ServiceDetailedContentProps> = ({ sections }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    const isOpen = openIndex === index;
    setOpenIndex(isOpen ? null : index);
  };

  if (sections.length === 0) return null;

  return (
    <div className="space-y-4">
      {sections.map((section, idx) => (
        <div
          key={idx}
          id={`section-${idx}`}
          className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
            openIndex === idx
              ? 'bg-white border-[#1a73e8]/20 shadow-lg'
              : 'bg-white border-gray-200 shadow-sm hover:border-gray-300'
          }`}
        >
          <button
            onClick={() => handleToggle(idx)}
            className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
          >
            <div className="flex items-center gap-4">
              <span className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold shrink-0 transition-all duration-300 ${
                openIndex === idx
                  ? 'bg-[#1a73e8] text-white'
                  : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
              }`}>
                {idx + 1}
              </span>
              <h3 className={`text-xl md:text-2xl font-semibold transition-colors ${
                openIndex === idx ? 'text-gray-900' : 'text-gray-700'
              }`}>
                {section.heading}
              </h3>
            </div>
            <div className={`p-2 rounded-full transition-all duration-300 ${
              openIndex === idx ? 'bg-[#1a73e8]/10 text-[#1a73e8] rotate-180' : 'text-gray-400 bg-gray-50'
            }`}>
              <ChevronDown size={20} />
            </div>
          </button>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openIndex === idx ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-6 md:p-8 pt-0 prose prose-slate max-w-none prose-lg text-gray-600 leading-relaxed border-t border-dashed border-gray-100 mt-2">
              {section.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="mb-4 last:mb-0">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
```

**Step 2: Remove unused imports**

```tsx
// Remove: BookOpen, Check, Circle imports
// Remove: viewedIndices, handleSidebarClick, progress bar code
import React, { useState } from 'react';
import { ContentSection } from './types';
import { ChevronDown } from 'lucide-react';
```

**Step 3: Update prop types if needed**

```tsx
// ContentSection interface should remain in types.ts:
export interface ContentSection {
  heading: string;
  content: string[];
}
```

**Step 4: Build and verify no errors**

```bash
npm run build
```
Expected: Build succeeds, no TypeScript errors

**Step 5: Commit**

```bash
git add generated-layouts/service-page/ServiceDetailedContent.tsx
git commit -m "refactor(service-detail): simplify accordion, remove nested sidebar"
```

---

### Task 4: Add Section H2 Heading Above Accordion

**Files:**
- Modify: `pages/templates/ServiceDetailNew.tsx` (line 178-182)

**Step 1: Add section heading with ID**

Before `<ServiceDetailedContent />`, add:

```tsx
{/* Main Content Column */}
<div className="lg:col-span-8 space-y-12">

  {/* In-Depth Guide Section - NEW H2 FOR SEO */}
  {pageData.detailedContent.length > 0 && (
    <div>
      <h2 id="guide" className="text-3xl font-semibold text-gray-900 mb-6">
        {isLocalPage
          ? `${serviceName} Guide for ${cityName} Property Owners`
          : 'Complete Restoration Guide'}
      </h2>
      <ServiceDetailedContent sections={pageData.detailedContent} />
    </div>
  )}

  {/* Testimonials */}
  <ServiceTestimonials testimonials={pageData.testimonials} />

  {/* ... rest unchanged */}
```

**Step 2: Build and verify**

```bash
npm run build
```
Expected: Build succeeds

**Step 3: Commit**

```bash
git add pages/templates/ServiceDetailNew.tsx
git commit -m "feat(service-detail): add section H2 above accordion for SEO"
```

---

### Task 5: Add TopicJumpLinks to ServiceDetailNew

**Files:**
- Modify: `pages/templates/ServiceDetailNew.tsx` (after line 170, before two-column layout)

**Step 1: Import TopicJumpLinks**

```tsx
import TopicJumpLinks from '../../components/sections/TopicJumpLinks';
```

**Step 2: Add state for active section (synced to accordion in Task 8)**

```tsx
const [activeGuideSection, setActiveGuideSection] = useState<string | null>('section-0');
```

**Step 3: Create jump link sections array**

```tsx
// Before return statement
const guideSections = pageData.detailedContent.map((section, idx) => ({
  id: `section-${idx}`,
  label: section.heading
}));
```

**Step 4: Add TopicJumpLinks component**

After ProcessFlow section (line 170), before two-column layout (line 173), add:

```tsx
{/* Topic Jump Links - Mobile/Desktop Navigation */}
{pageData.detailedContent.length > 0 && (
  <TopicJumpLinks
    sections={guideSections}
    activeId={activeGuideSection}
    onNavigate={(id) => {
      setActiveGuideSection(id);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }}
  />
)}
```

**Step 5: Build and verify**

```bash
npm run build
```
Expected: Build succeeds, no TypeScript errors

**Step 6: Commit**

```bash
git add pages/templates/ServiceDetailNew.tsx
git commit -m "feat(service-detail): add TopicJumpLinks for quick navigation"
```

---

### Task 6: Add RelatedResourcesCard to Sidebar

**Files:**
- Modify: `pages/templates/ServiceDetailNew.tsx` (sidebar section, line 199-221)

**Step 1: Import RelatedResourcesCard**

```tsx
import RelatedResourcesCard from '../../components/sections/RelatedResourcesCard';
```

**Step 2: Define related resources array**

Add before return statement.

> **Route verification (2026-02-16):** All 4 URLs confirmed present in `config/routes.ts` lines 174-180.

```tsx
// Related resources for sidebar (internal links only)
// All URLs verified in config/routes.ts — do NOT add URLs without checking routes first
const relatedResources = [
  {
    title: 'Water Damage Cost Calculator',
    description: 'Estimate restoration costs with our interactive tool.',
    url: '/resources/cost-calculator/'               // ✅ routes.ts:179
  },
  {
    title: 'Standard Project Package',
    description: 'Complete scope of our restoration service deliverables.',
    url: '/resources/standard-project-package/'       // ✅ routes.ts:180
  },
  {
    title: 'Insurance Claims Guide',
    description: 'Step-by-step guide to filing your claim successfully.',
    url: '/resources/insurance-claims-guide/'          // ✅ routes.ts:174
  },
  {
    title: 'Water Damage Categories',
    description: 'Understand Category 1, 2, and 3 water classifications.',
    url: '/resources/water-damage-categories/'         // ✅ routes.ts:177
  }
];
```

**Step 3: Add RelatedResourcesCard to desktop sidebar**

In sidebar section (after Quick CTA card, around line 220), add the RelatedResourcesCard
as the last child inside `<div className="sticky top-32 space-y-6">`:

```tsx
    {/* Related Resources - NEW */}
    <RelatedResourcesCard resources={relatedResources} />
```

> **Note:** Full sidebar restructuring (desktop vs mobile split) happens in Task 7.

**Step 4: Build and verify**

```bash
npm run build
```
Expected: Build succeeds

**Step 5: Commit**

```bash
git add pages/templates/ServiceDetailNew.tsx
git commit -m "feat(service-detail): add related resources to sidebar"
```

---

### Task 7: Fix Mobile Sidebar — Show Only RelatedResources on Mobile

**Rationale:** Mobile already has ServiceCTASticky (sticky bottom bar) for emergency CTA.
Stacking EmergencyServiceCard + Quick CTA + RelatedResourcesCard on mobile is redundant
and heavy. Only RelatedResourcesCard adds unique value on mobile (internal linking/SEO).

**Files:**
- Modify: `pages/templates/ServiceDetailNew.tsx` (sidebar section, line 199)

**Step 1: Split sidebar into desktop-only and responsive sections**

Replace the entire `<aside>` block with:

```tsx
{/* Desktop Sidebar — sticky with all cards */}
<aside className="hidden lg:block lg:col-span-4">
  <div className="sticky top-32 space-y-6">
    <EmergencyServiceCard variant="expanded" />

    {/* Quick CTA */}
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-3">Need immediate help?</h3>
      <p className="text-sm text-gray-500 mb-4">Our technicians are standing by 24/7 for emergency service.</p>
      <a
        href={`tel:${emergencyPhone.replace(/\D/g,'')}`}
        className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primaryHover text-white py-3 px-4 rounded-full font-semibold transition-colors"
      >
        Call {emergencyPhone}
      </a>
      <button
        onClick={handleCtaClick}
        className="w-full mt-3 text-primary hover:text-primaryHover text-sm font-medium"
      >
        Or request online →
      </button>
    </div>

    {/* Related Resources */}
    <RelatedResourcesCard resources={relatedResources} />
  </div>
</aside>

{/* Mobile Related Resources — renders below main content, NOT sticky */}
<div className="lg:hidden mt-12">
  <RelatedResourcesCard resources={relatedResources} />
</div>
```

**Step 2: Build and verify**

```bash
npm run build
```
Expected: Build succeeds

**Step 3: Visual check**

```bash
npm run preview
```

Verify:
- Desktop: Full sidebar with EmergencyServiceCard + CTA + RelatedResources, sticky
- Mobile: Only RelatedResourcesCard appears after main content
- Mobile: No EmergencyServiceCard or Quick CTA (ServiceCTASticky handles this)
- No duplicate RelatedResourcesCard visible at any breakpoint

**Step 4: Commit**

```bash
git add pages/templates/ServiceDetailNew.tsx
git commit -m "fix(service-detail): slim mobile sidebar to RelatedResources only"
```

---

### Task 8: Sync Active Jump Link to Accordion State

**Rationale:** Instead of a brittle IntersectionObserver scroll spy (collapsed accordion
items are ~60px tall and flicker with threshold-based observation), sync the active
jump link deterministically to the accordion's `openIndex` state.

**Files:**
- Modify: `generated-layouts/service-page/ServiceDetailedContent.tsx` (expose openIndex via callback)
- Modify: `pages/templates/ServiceDetailNew.tsx` (wire callback to activeGuideSection)

**Step 1: Add onSectionChange callback prop to ServiceDetailedContent**

```tsx
interface ServiceDetailedContentProps {
  sections: ContentSection[];
  onSectionChange?: (index: number | null) => void;
}

const ServiceDetailedContent: React.FC<ServiceDetailedContentProps> = ({ sections, onSectionChange }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    const isOpen = openIndex === index;
    const newIndex = isOpen ? null : index;
    setOpenIndex(newIndex);
    onSectionChange?.(newIndex);
  };
  // ... rest unchanged
```

**Step 2: Wire callback in ServiceDetailNew.tsx**

Replace the `activeGuideSection` state initialization and TopicJumpLinks onNavigate:

```tsx
// Active section synced to accordion open state (no scroll spy needed)
const [activeGuideSection, setActiveGuideSection] = useState<string | null>('section-0');

// In the JSX — pass callback to ServiceDetailedContent:
<ServiceDetailedContent
  sections={pageData.detailedContent}
  onSectionChange={(idx) => {
    setActiveGuideSection(idx !== null ? `section-${idx}` : null);
  }}
/>

// TopicJumpLinks onNavigate should also open the accordion:
// This is handled by scrolling to the section which triggers the accordion
// via the existing onNavigate handler:
onNavigate={(id) => {
  setActiveGuideSection(id);
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}}
```

**Step 3: Build and verify**

```bash
npm run build
```
Expected: Build succeeds, no TypeScript errors

**Step 4: Test active state sync**

```bash
npm run preview
```

Open service page, verify:
- Click accordion section → jump link chip updates immediately
- Click jump link chip → scrolls to section (accordion opens via scrollIntoView)
- No flicker or mismatched states

**Step 5: Commit**

```bash
git add generated-layouts/service-page/ServiceDetailedContent.tsx pages/templates/ServiceDetailNew.tsx
git commit -m "feat(service-detail): sync jump links to accordion state (no scroll spy)"
```

---

### Task 9: Pre-render and Verify

**Files:**
- None (verification only)

**Step 1: Build with prerender**

```bash
npm run build
```

Expected output:
- ✓ 2482 modules transformed
- ✓ 189 routes pre-rendered
- dist/services/residential/restoration-services/water-damage-restoration/index.html exists

**Step 2: Spot-check prerendered HTML**

```bash
# Check one service page
head -200 dist/services/residential/restoration-services/water-damage-restoration/index.html | grep -E "<h1|<h2|<h3|section-"
```

Expected:
- One H1 (hero title)
- One H2 (guide section heading)
- Multiple H3s (accordion section headings)
- section-0, section-1, section-2 IDs present

**Step 3: Check bundle sizes**

```bash
ls -lh dist/assets/ | grep ServiceDetail
```

Expected:
- ServiceDetailNew bundle should be similar or smaller size
- No significant bundle size increase

**Step 4: Verify no broken imports**

```bash
npm run preview
```

Open multiple service pages:
- /services/residential/restoration-services/water-damage-restoration/
- /services/residential/cleanup-services/mold-remediation/
- /services/commercial/restoration-services/commercial-water-damage/

Check:
- ✓ Page loads without errors
- ✓ Jump links appear above accordion
- ✓ Accordion sections toggle correctly
- ✓ Sidebar renders with emergency card + resources
- ✓ Mobile: sidebar stacks below content
- ✓ Desktop: sidebar sticky on right

**Step 5: Document verification results**

No commit needed - verification complete

---

## Acceptance Criteria

### Desktop (≥1024px)
- [ ] Jump links row appears above two-column layout
- [ ] Main accordion is 8 cols wide (no nested sidebar)
- [ ] Sticky sidebar is 4 cols wide on right
- [ ] Sidebar contains:
  - [ ] EmergencyServiceCard
  - [ ] Quick CTA card
  - [ ] RelatedResourcesCard with 4 internal links
- [ ] Accordion sections toggle smoothly
- [ ] Active jump link chip syncs to open accordion section
- [ ] Click jump link scrolls to section and opens accordion
- [ ] Related resources links navigate correctly
- [ ] Heading hierarchy: H1 (hero) → H2 (guide section) → H3 (accordion titles)

### Mobile (<1024px)
- [ ] Jump links row shows horizontal scrollable chips
- [ ] Scroll arrows appear when needed
- [ ] Accordion is full-width
- [ ] Accordion sections toggle smoothly
- [ ] Only RelatedResourcesCard renders after main content (no EmergencyServiceCard/CTA)
- [ ] Emergency CTA handled by existing ServiceCTASticky bar
- [ ] RelatedResourcesCard is NOT sticky on mobile
- [ ] All internal links work correctly
- [ ] No horizontal scroll issues
- [ ] Touch scrolling feels smooth

### SEO
- [ ] Clean heading hierarchy (H1 → H2 → H3)
- [ ] Section H2 has meaningful text
- [ ] Accordion H3s describe content accurately
- [ ] Internal links use descriptive anchor text
- [ ] Related resources provide contextual linking
- [ ] No duplicate IDs in HTML
- [ ] All section IDs are unique

### Build & Performance
- [ ] `npm run build` succeeds with no errors
- [ ] All 189 routes pre-render successfully
- [ ] No TypeScript errors
- [ ] No console errors in browser
- [ ] Bundle size does not increase significantly
- [ ] Page loads without layout shift

---

## Mobile-Specific Issues & Fixes

### Issue: Nested Columns Cramped on Mobile
**Current:** ServiceDetailedContent has lg:w-1/4 sidebar nested in lg:col-span-8 main column
**Fix:** Remove nested sidebar entirely, keep only accordion

### Issue: Sidebar Hidden on Mobile
**Current:** Sidebar has `hidden lg:block` class
**Fix:** Keep EmergencyServiceCard + Quick CTA desktop-only (`hidden lg:block`). Add separate `lg:hidden` block below main content with only RelatedResourcesCard. Emergency CTA already covered by ServiceCTASticky on mobile.

### Issue: No Mobile Topic Navigation
**Current:** Only desktop sidebar TOC existed
**Fix:** Add horizontal scrollable TopicJumpLinks with scroll arrows

### Issue: Poor Touch Target Sizes
**Current:** Some buttons/links may be <44px
**Fix:** Ensure all touch targets are ≥44px (already handled by `p-6 md:p-8` on accordion buttons)

### Issue: Horizontal Scroll Risk
**Current:** Jump links could overflow viewport
**Fix:** Use `overflow-x-auto` with scroll arrows, `scrollbar-hide` class

---

## Post-Process Section Boundary Documentation

**File:** `pages/templates/ServiceDetailNew.tsx`

**Keep Unchanged (Lines 1-170):**
```tsx
// Line 1-139: Imports, interfaces, component setup, state, schema
// Line 140-151: Hero Section with V14 Visual
// Line 153-154: Quick Facts Bar
// Line 156-157: Problem vs Solution Section
// Line 159-160: Tabbed Content
// Line 162-170: Process Section with ProcessFlow
```

**Redesign Target (Lines 173-225):**
```tsx
// Line 173: START OF POST-PROCESS CONTENT
// Line 173-225: Two-Column Layout Section
//   - Main column (lg:col-span-8)
//   - Sidebar column (lg:col-span-4)
// Line 227-232: Related Services (KEEP)
// Line 234-235: Service Area Links (KEEP)
// Line 237-242: Sticky Bottom CTA (KEEP)
```

**Do Not Touch:**
- Lines 227-242: Related Services, Service Area Links, Sticky Bottom CTA
- These components are outside the redesign scope

---

## Summary

This plan redesigns the post-process section of ServiceDetailNew.tsx to:

1. **Simplify structure** — Remove nested sidebar from ServiceDetailedContent
2. **Improve mobile UX** — Add horizontal jump links; mobile shows only RelatedResourcesCard (emergency CTA handled by existing ServiceCTASticky)
3. **Better SEO** — Add section H2, proper H1→H2→H3 heading hierarchy, contextual internal links
4. **Enhanced sidebar** — Add related resources card with 4 verified internal links
5. **Active tracking** — Jump link active state synced to accordion openIndex (deterministic, no scroll spy)

**9 tasks** (down from 10 — removed redundant Task 8, replaced scroll spy with accordion sync)

**Total files changed:** 3 modified (ServiceDetailNew.tsx, ServiceDetailedContent.tsx) + 2 new components
**Total lines changed:** ~150 lines modified, ~200 lines added
**No breaking changes** — All existing routes continue to work
**No schema changes** — PageMeta logic untouched
**No route changes** — URL structure unchanged

---

## SERVICE DETAIL POST-PROCESS REDESIGN PLAN COMPLETE
