# P0 Schema Rollout — Phase 2: Blog, Location, Landing Pages

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add Article + BreadcrumbList schema to all blog posts, BreadcrumbList to all location pages, and Service + BreadcrumbList to all landing pages using existing builders in `utils/schema.ts`.

**Architecture:** Use `generateBlogArticleSchema()` for blogs, `generateLocationPageSchema()` for locations, and `generateServicePageSchema()` for landings. All builders already exist — this is pure wiring. PageMeta's `normalizeSchema()` (from Phase 1) handles @graph and dedup automatically, so pages can pass arrays or use `combineSchemas()`.

**Tech Stack:** React, TypeScript, existing `utils/schema.ts` builders

---

## Batch 1: Blog Posts (45 files)

### Task 1: Convert blog posts that already have inline Article + FAQ + LocalBusiness schemas

**Pattern:** These 10 files already construct `articleSchema`, `faqSchema`, `localBusinessSchema` inline and pass as arrays. Replace all inline schemas with `generateBlogArticleSchema()`.

**Files to modify:**
- `pages/blog/basement-flooding-guide.tsx`
- `pages/blog/bathroom-water-damage-guide.tsx`
- `pages/blog/frozen-burst-pipes-guide.tsx`
- `pages/blog/musty-smell-odor-removal-guide.tsx`
- `pages/blog/water-damage-home-selling-disclosure.tsx`
- `pages/blog/hidden-water-damage-signs.tsx`
- `pages/blog/burst-pipe-emergency-response.tsx`
- `pages/blog/water-damage-northern-virginia-guide.tsx`
- `pages/blog/mold-after-water-damage-virginia.tsx`
- `pages/blog/water-damage-restoration-cost-fairfax.tsx`
- `pages/blog/hidden-water-damage-signs-arlington.tsx`

**For each file:**

**Step 1: Add import**
```typescript
import { generateBlogArticleSchema } from '../../utils/schema';
```

**Step 2: Remove inline `articleSchema` and `localBusinessSchema` variable declarations** (keep FAQ data if defined separately as a `faqs` array for the FAQ UI component).

**Step 3: Build the schema using `generateBlogArticleSchema`**

Extract these values from the existing inline `articleSchema` and `PageMeta` props:
```typescript
const schema = generateBlogArticleSchema({
  headline: '<from existing articleSchema.headline or PageMeta title>',
  description: '<from existing articleSchema.description or PageMeta description>',
  slug: '/blog/<slug>/',
  datePublished: '<from existing articleSchema.datePublished>',
  dateModified: '<from existing articleSchema.dateModified or datePublished>',
  wordCount: <from existing if present>,
  articleSection: 'Water Damage' // or appropriate section
}, faqs); // pass FAQ array if page has FAQs
```

**Step 4: Update PageMeta prop**
```typescript
<PageMeta
  title="..."
  description="..."
  schema={schema}
/>
```

Remove `structuredData` prop if present, use `schema` consistently.

---

### Task 2: Convert blog posts with FAQ + LocalBusiness (no Article) — add Article

**Pattern:** These files have inline `faqSchema` + `localBusinessSchema` but no `articleSchema`. Replace with `generateBlogArticleSchema()` which includes all three.

**Files to modify:**
- `pages/blog/kitchen-water-damage-guide.tsx`
- `pages/blog/rental-property-water-damage-virginia.tsx`
- `pages/blog/water-damage-home-warranty-coverage.tsx`
- `pages/blog/water-damaged-electronics-guide.tsx`
- `pages/blog/emergency-water-damage-response-virginia.tsx`
- `pages/blog/vacation-water-damage-prevention.tsx`
- `pages/blog/water-heater-flooding-guide.tsx`

**Same steps as Task 1.** Extract headline/description from PageMeta title, datePublished from `<ArticleAuthor datePublished="...">`, construct `generateBlogArticleSchema()` call.

---

### Task 3: Convert blog posts with @graph inline (FAQ + LocalBusiness) — add Article

**Pattern:** These files construct a manual `@graph` object with FAQ + LocalBusiness. Replace with `generateBlogArticleSchema()`.

**Files to modify:**
- `pages/blog/attic-water-damage-guide.tsx`
- `pages/blog/ceiling-water-damage-guide.tsx`
- `pages/blog/condo-water-damage-hoa-guide.tsx`
- `pages/blog/does-vinegar-kill-mold.tsx`
- `pages/blog/hardwood-floor-water-damage.tsx`
- `pages/blog/hvac-water-damage-guide.tsx`
- `pages/blog/laundry-room-washing-machine-flood.tsx`
- `pages/blog/mildew-vs-mold-difference.tsx`
- `pages/blog/professional-drying-dehumidification.tsx`
- `pages/blog/signs-of-water-damage-behind-walls.tsx`
- `pages/blog/water-damaged-furniture-restoration.tsx`
- `pages/blog/wet-carpet-water-damage.tsx`
- `pages/blog/what-does-black-mold-look-like.tsx`
- `pages/blog/window-door-water-intrusion.tsx`

**Same steps as Task 1.** Remove the entire manual `@graph` construction. FAQ data lives in `faqs` array or inline — extract and pass to `generateBlogArticleSchema()`.

---

### Task 4: Convert blog posts with FAQ-only schema — add Article + BreadcrumbList + LocalBusiness

**Pattern:** These files only pass a single `faqSchema` to PageMeta. Replace with `generateBlogArticleSchema()` which adds Article + BreadcrumbList + LocalBusiness.

**Files to modify:**
- `pages/blog/appliance-water-damage-dishwasher-washing-machine.tsx`
- `pages/blog/basement-flooding-loudoun-county.tsx`
- `pages/blog/commercial-water-damage-business-continuity.tsx`
- `pages/blog/crawl-space-moisture-virginia-homes.tsx`
- `pages/blog/drywall-water-damage-guide.tsx`
- `pages/blog/mold-growth-after-water-damage-timeline.tsx`
- `pages/blog/roof-leak-water-damage-virginia-storms.tsx`
- `pages/blog/sewage-backup-cleanup-health-risks-virginia.tsx`
- `pages/blog/sump-pump-failure-basement-flooding-nova.tsx`

**Same steps as Task 1.** Extract FAQ data from the inline faqSchema object, convert to simple `{question, answer}[]` format for `generateBlogArticleSchema()`.

---

### Task 5: Add schema to blog posts with NO schema

**Pattern:** These 4 files have zero schema. Add `generateBlogArticleSchema()`.

**Files to modify:**
- `pages/blog/commercial-water-damage-restoration-dc.tsx`
- `pages/blog/homeowners-insurance-water-damage-virginia.tsx`
- `pages/blog/sewage-cleanup-alexandria-va.tsx`
- `pages/blog/water-damage-restoration-timeline.tsx`

**Step 1: Add import**
```typescript
import { generateBlogArticleSchema } from '../../utils/schema';
```

**Step 2: Create schema** (no FAQs available — pass undefined)
```typescript
const schema = generateBlogArticleSchema({
  headline: '<from PageMeta title>',
  description: '<from PageMeta description>',
  slug: '/blog/<slug>/',
  datePublished: '<from ArticleAuthor datePublished prop>',
  articleSection: 'Water Damage'
});
```

**Step 3: Add to PageMeta**
```typescript
schema={schema}
```

---

### Task 6: Build + prerender verification for blogs

**Step 1:** `npm run build` — expect 188/188 OK
**Step 2:** Spot-check 3 blog pages in `dist/` for @graph with Article + BreadcrumbList
**Step 3:** Commit: `fix(schema): add Article + BreadcrumbList to blog posts`

---

## Batch 2: Location Pages (29 files)

### Task 7: Convert location pages using `schema={[array]}` to `generateLocationPageSchema()`

**Pattern:** These files pass `[faqSchema, localBusinessSchema]` arrays with inline schemas. Replace with `generateLocationPageSchema()` which produces BreadcrumbList + LocalBusiness + FAQ via `combineSchemas`.

**Files to modify (16 files):**
- `pages/locations/AlexandriaBasementFlooding.tsx`
- `pages/locations/AlexandriaFloodCleanup.tsx`
- `pages/locations/AlexandriaMoldRemoval.tsx`
- `pages/locations/AlexandriaWaterDamage.tsx`
- `pages/locations/ArlingtonBasementFlooding.tsx`
- `pages/locations/ArlingtonFloodCleanup.tsx`
- `pages/locations/ArlingtonMoldRemoval.tsx`
- `pages/locations/ArlingtonWaterDamage.tsx`
- `pages/locations/FallsChurchMoldRemoval.tsx`
- `pages/locations/FallsChurchWaterDamage.tsx`
- `pages/locations/AshburnMoldRemoval.tsx`
- `pages/locations/AshburnWaterDamage.tsx`
- `pages/locations/RestonMoldRemoval.tsx`
- `pages/locations/RestonWaterDamage.tsx`
- `pages/locations/SpringfieldMoldRemoval.tsx`
- `pages/locations/SpringfieldWaterDamage.tsx`

**For each file:**

**Step 1: Add import**
```typescript
import { generateLocationPageSchema } from '../../utils/schema';
```

**Step 2: Extract location info and FAQ data from existing inline schemas**

**Step 3: Replace inline schemas with:**
```typescript
const schema = generateLocationPageSchema(
  { name: '<City Name>', addressLocality: '<City>', addressRegion: 'VA', addressCountry: 'US' },
  [{ label: 'Locations', path: '/locations/' }, { label: '<Page Title>', path: '/locations/<slug>/' }],
  faqs // if page has FAQ data
);
```

**Step 4: Update PageMeta:** `schema={schema}`

---

### Task 8: Convert location pages with single inline schemas

**Pattern:** Herndon (4 files) and McLean (3 files) use single inline schema objects.

**Files to modify (7 files):**
- `pages/locations/HerndonBasementFlooding.tsx`
- `pages/locations/HerndonFloodCleanup.tsx`
- `pages/locations/HerndonMoldRemoval.tsx`
- `pages/locations/HerndonWaterDamage.tsx`
- `pages/locations/McLeanBasementFlooding.tsx`
- `pages/locations/McLeanFloodCleanup.tsx`
- `pages/locations/McLeanMoldRemoval.tsx`

**Same steps as Task 7.**

---

### Task 9: Add schema to location pages with NO schema

**Files to modify (5 files):**
- `pages/locations/FairfaxBasementFlooding.tsx`
- `pages/locations/FairfaxFloodCleanup.tsx`
- `pages/locations/FairfaxMoldRemoval.tsx`
- `pages/locations/FairfaxWaterDamage.tsx`
- `pages/locations/McLeanWaterDamage.tsx`
- `pages/locations/TysonsWaterDamage.tsx`

**Same steps as Task 7** but creating schema from scratch using PageMeta title/description.

---

### Task 10: Build + prerender verification for locations

**Step 1:** `npm run build` — expect 188/188 OK
**Step 2:** Spot-check 2 location pages for @graph with BreadcrumbList + LocalBusiness
**Step 3:** Commit: `fix(schema): add BreadcrumbList and normalize location JSON-LD`

---

## Batch 3: Landing Pages (23 files)

### Task 11: Add Service + BreadcrumbList schema to keyword landing pages

**Pattern:** All 23 landing pages in `pages/landing/` have ZERO schema. All use `KeywordLandingTemplate` which renders PageMeta without schema. These need `generateServicePageSchema()` added.

**Two sub-patterns exist:**
1. **Keyword pages** (12 files): Generic service keyword pages (e.g., WaterDamageCleanup, WaterMitigation)
2. **City keyword pages** (10 files): City-specific landing pages (e.g., WaterDamageRestorationAlexandria)

**Approach:** Since all landing pages use `KeywordLandingTemplate`, the cleanest fix is to add schema support to the template itself rather than modifying each page individually.

**Step 1: Read `KeywordLandingTemplate` component to understand its config structure**

**Step 2: Add schema generation inside `KeywordLandingTemplate`:**
```typescript
import { generateServicePageSchema } from '../../utils/schema';

// Inside component, before return:
const schema = generateServicePageSchema(
  {
    name: config.title,
    description: config.metaDescription,
    slug: `/${config.slug || ''}/`,
    serviceType: 'Water Damage Restoration',
  },
  [{ label: config.title, path: `/${config.slug || ''}/` }],
  config.faqs // if the config has FAQ data
);
```

**Step 3: Pass to PageMeta:**
```typescript
<PageMeta
  title={config.title}
  description={config.metaDescription}
  schema={schema}
/>
```

This approach modifies 1 file instead of 23.

---

### Task 12: Build + prerender verification for landings

**Step 1:** `npm run build` — expect 188/188 OK
**Step 2:** Spot-check 2 landing pages for @graph with Service + BreadcrumbList
**Step 3:** Commit: `fix(schema): add Service + BreadcrumbList to landing pages`

---

## Verification Protocol

After all 3 batches, run final spot-checks across all categories:
- 1 blog page: has Article, BreadcrumbList, LocalBusiness, FAQPage in @graph
- 1 location page: has BreadcrumbList, LocalBusiness, FAQPage in @graph
- 1 landing page: has Service, BreadcrumbList in @graph
- No duplicate LocalBusiness entities on any page
- All 188 pages prerender successfully
