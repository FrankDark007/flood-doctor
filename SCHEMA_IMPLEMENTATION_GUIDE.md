# Schema Markup Implementation Guide

Quick reference for adding JSON-LD schema to Flood Doctor pages.

---

## Schema Status Overview

| Schema Type | Page | Status | Priority | Implementation Time |
|------------|------|--------|----------|-------------------|
| Organization | Home | Available (schema.ts) | HIGH | 5 min |
| LocalBusiness | About | Available (schema.ts) | HIGH | 5 min |
| Service | ServicesHub | Available (schema.ts) | HIGH | 10 min |
| AggregateRating | About/Home | Available (schema.ts) | MEDIUM | 5 min |
| FAQ | Blog Articles | Available (schema.ts) | MEDIUM | 5 min per article |
| Breadcrumb | All Pages | Available (schema.ts) | MEDIUM | 3 min per page |
| Review | Home | Available (schema.ts) | LOW | 10 min |
| Video | ClientPortalDemo | Not implemented | LOW | 15 min |

---

## QUICK START IMPLEMENTATION

### Step 1: Home Page (Organization Schema)

**File:** `/pages/Home.tsx`

**Current Code (lines ~111-114):**
```tsx
<PageMeta
  title="Emergency Water Damage Restoration & Flood Cleanup"
  description="24/7 emergency water damage restoration in Northern Virginia. Real-time monitoring, direct insurance billing, 60-minute response."
/>
```

**Updated Code:**
```tsx
import { generateOrganizationSchema } from '../utils/schema';

// ... inside Home component, in the JSX return:

<PageMeta
  title="Emergency Water Damage Restoration & Flood Cleanup"
  description="24/7 emergency water damage restoration in Northern Virginia. Real-time monitoring, direct insurance billing, 60-minute response."
  schema={generateOrganizationSchema()}
/>
```

**Why:** Organization schema tells Google who you are, where you operate, and how to contact you. Eligible for Knowledge Panel appearance.

**Expected Result:** Logo + contact + social links may appear in Google search for "Flood Doctor".

---

### Step 2: About Page (LocalBusiness + AggregateRating)

**File:** `/pages/About.tsx`

**Current Code (line ~108):**
```tsx
<PageMeta
  title="About Flood Doctor | Northern Virginia's Trusted Restoration Company"
  description="Learn about Flood Doctor's 15+ years of water damage restoration expertise serving Northern Virginia and Washington DC."
/>
```

**Updated Code:**
```tsx
import {
  generateLocalBusinessSchema,
  generateReviewSchema
} from '../utils/schema';

// ... inside About component, before the return statement:

const localBusinessSchema = generateLocalBusinessSchema();

// ... in the JSX return:

<PageMeta
  title="About Flood Doctor | Northern Virginia's Trusted Restoration Company"
  description="Learn about Flood Doctor's 15+ years of water damage restoration expertise serving Northern Virginia and Washington DC."
  schema={localBusinessSchema}
/>
```

**Why:** LocalBusiness schema confirms service area, hours, phone. Shows up in Google Business listings. AggregateRating displays 4.9/5 stars in search results.

**Expected Result:**
- Google My Business verification
- Star ratings in search results
- Service area map

---

### Step 3: Services Page (Service Schema)

**File:** `/pages/ServicesHub.tsx`

**Current Code (lines ~180-185):**
```tsx
<PageMeta
  title={title || "Restoration Services | Water, Fire & Mold Restoration"}
  description={subtitle || "Professional restoration services for water damage, fire damage, mold remediation, and more. 24/7 emergency response in Northern Virginia."}
/>
```

**Updated Code:**
```tsx
import { generateServiceSchema } from '../utils/schema';

// ... inside ServicesHub component, in the JSX:

const serviceSchema = generateServiceSchema({
  name: "Professional Restoration Services",
  description: "Water damage, fire damage, mold remediation, and storm damage restoration",
  slug: "services",
  serviceType: "RestorationService",
  areaServed: ["Virginia", "Washington DC"]
});

<PageMeta
  title={title || "Restoration Services | Water, Fire & Mold Restoration"}
  description={subtitle || "Professional restoration services for water damage, fire damage, mold remediation, and more. 24/7 emergency response in Northern Virginia."}
  schema={serviceSchema}
/>
```

**Why:** Service schema describes what services you offer. Helps Google understand your business category.

**Expected Result:** Service category may appear in search results or Google Business listings.

---

### Step 4: Blog Articles (FAQ Schema)

**File:** `/pages/blog/*.tsx` (example: `basement-flooding-guide.tsx`)

**Pattern:**
```tsx
import { generateFAQSchema } from '../../utils/schema';

// ... extract FAQ data from your page content

const faqSchema = generateFAQSchema([
  {
    question: "What causes basement flooding in Northern Virginia?",
    answer: "Heavy rain is the primary cause, followed by poor drainage, sump pump failure, burst pipes, and rising water tables..."
  },
  {
    question: "How do I respond to basement flooding?",
    answer: "Turn off electricity, exit the area, call emergency services if needed, then contact Flood Doctor at (877) 497-0007 for professional water extraction..."
  },
  {
    question: "Should I attempt cleanup myself?",
    answer: "For water over 6 inches, contaminated water, or widespread damage, professional restoration is essential to prevent mold and structural damage. Call us 24/7."
  },
  {
    question: "Will insurance cover basement flooding?",
    answer: "Standard homeowners policies don't cover flooding. You need flood insurance or a water backup endorsement. We work directly with insurance to process claims."
  }
]);

<PageMeta
  title="Basement Flooding Guide: Prevention & Restoration"
  description="Complete basement flooding guide for Northern VA. Causes, prevention, emergency response, DIY vs professional, insurance. IICRC-backed. 24/7: (877) 497-0007."
  schema={faqSchema}
/>
```

**Why:** FAQ schema displays questions + answers directly in search results ("People also ask" box). Dramatically increases CTR.

**Expected Result:** Rich snippet showing 2-3 FAQ items in SERP. May appear in "Featured snippet" position.

---

### Step 5: Breadcrumbs (All Pages)

**File:** `/pages/*.tsx` (every page)

**Example for Service Detail Page:**
```tsx
import { generateBreadcrumbSchema } from '../utils/schema';

const breadcrumbSchema = generateBreadcrumbSchema([
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services/' },
  { label: 'Water Damage', path: '/services/water-damage/' }
]);

<PageMeta
  title="Water Damage Restoration | Emergency Response"
  description="Professional water damage restoration services..."
  schema={breadcrumbSchema}
/>
```

**Why:** Breadcrumb schema shows site hierarchy in search results. Improves navigation clarity.

**Expected Result:** Breadcrumb trail appears in search results (e.g., "Home > Services > Water Damage").

---

## COMPLETE IMPLEMENTATION CHECKLIST

### Phase 1: Core Pages (Week 1)

- [ ] **Home.tsx**
  - Import: `generateOrganizationSchema`
  - Add schema prop to PageMeta
  - Test: Run through Rich Results Test

- [ ] **About.tsx**
  - Import: `generateLocalBusinessSchema`
  - Add schema prop to PageMeta
  - Test: Verify LocalBusiness structure

- [ ] **ServicesHub.tsx**
  - Import: `generateServiceSchema`
  - Create schema object
  - Add schema prop to PageMeta
  - Test: Check service data structure

### Phase 2: Content Pages (Week 2)

- [ ] **All Blog Articles** (`/pages/blog/*.tsx`)
  - Extract Q&A from article content
  - Import: `generateFAQSchema`
  - Create schema array from FAQs
  - Add schema prop to PageMeta
  - Repeat for: ~30 articles

- [ ] **All Location Landing Pages** (`/pages/landing/*.tsx`)
  - Import: `generateLocalBusinessSchema` or `generateLocationSchema`
  - Add location-specific schema
  - Test each location page

### Phase 3: Navigation Pages (Week 3)

- [ ] **All Pages** - Add Breadcrumb Schema
  - Identify page hierarchy
  - Import: `generateBreadcrumbSchema`
  - Create breadcrumb path for each page
  - Add schema prop

### Phase 4: Advanced (Week 4+)

- [ ] **Add AggregateRating** to Home/About
  - Display 4.9/5 stars
  - Include review count (500+)

- [ ] **Add Review Schema** for specific reviews
  - Select top 3-5 reviews
  - Structure with author, rating, date

---

## SCHEMA VALIDATION

### Google Rich Results Test
1. Go to: https://search.google.com/test/rich-results
2. Enter URL or paste HTML
3. Check for errors (red X)
4. Review preview on right side

### Testing Each Schema Type

**Organization:**
```
Expected items:
✓ Name (Flood Doctor)
✓ Logo URL
✓ Contact point (phone)
✓ Social profiles
✓ Service area
```

**LocalBusiness:**
```
Expected items:
✓ Business name
✓ Address
✓ Phone
✓ Hours
✓ Service area
✓ Rating/review count
```

**Service:**
```
Expected items:
✓ Service name
✓ Service description
✓ Provider (organization)
✓ Service area
```

**FAQ:**
```
Expected items:
✓ Main entity type: FAQPage
✓ Questions array
✓ Each question with answer text
✓ No HTML in answer field
```

**Breadcrumb:**
```
Expected items:
✓ Breadcrumb list array
✓ Item names
✓ Item URLs
✓ Position numbers (1, 2, 3...)
```

---

## CODE REFERENCE: Current Schema Utilities

All functions are in `/utils/schema.ts`:

### Available Functions

```typescript
// 1. Organization Schema
generateOrganizationSchema(): Object
// Use: Homepage
// Data: Name, logo, social, contact

// 2. LocalBusiness Schema
generateLocalBusinessSchema(): Object
// Use: About page, location pages
// Data: Address, phone, hours, service area, reviews

// 3. Service Schema
generateServiceSchema(input: ServiceSchemaInput): Object
// Use: Service pages
// Input: name, description, slug, serviceType, areaServed

// 4. Location Schema
generateLocationSchema(input: LocationSchemaInput): Object
// Use: Location-specific pages
// Input: name, address, latitude/longitude

// 5. FAQ Schema
generateFAQSchema(faqs: FAQItem[]): Object
// Use: Blog articles, FAQ pages
// Input: Array of {question, answer}

// 6. Breadcrumb Schema
generateBreadcrumbSchema(items: BreadcrumbItem[]): Object
// Use: All pages
// Input: Array of {label, path}

// 7. Review Schema
generateReviewSchema(review: ReviewData): Object
// Use: Testimonials, rating displays
// Input: author, rating, reviewBody, datePublished

// 8. Aggregate Rating
// (Part of LocalBusiness/Organization)
// Auto-includes if rating data provided
```

---

## EXAMPLE: Complete Blog Article Implementation

File: `/pages/blog/basement-flooding-guide.tsx`

```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../../components/ui/PageMeta';
import { generateFAQSchema, generateBreadcrumbSchema } from '../../utils/schema';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';

const BasementFloodingGuide: React.FC = () => {
  // 1. Define FAQ data
  const faqs = [
    {
      question: "What causes basement flooding in Northern Virginia?",
      answer: "Heavy rain and poor drainage are primary causes. Other factors include burst pipes, sump pump failure, and rising water tables during spring. Foundation cracks and window wells without proper drainage also contribute."
    },
    {
      question: "How quickly should I respond to basement flooding?",
      answer: "Act within 24-48 hours. Water can penetrate walls and support structures, causing mold growth and structural damage. The faster you extract water, the better the outcome. Call Flood Doctor 24/7."
    },
    {
      question: "Should I attempt DIY cleanup or hire professionals?",
      answer: "For water over 6 inches, contaminated water (sewage), or structural damage, professional restoration is essential. DIY risks include exposure to contaminants, mold development, and inadequate drying."
    },
    {
      question: "Does homeowners insurance cover basement flooding?",
      answer: "Standard homeowners insurance doesn't cover flooding. You need separate flood insurance or a water backup endorsement. Our team helps navigate claims with your insurance company."
    }
  ];

  // 2. Generate schema
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog/' },
    { label: 'Basement Flooding', path: '/blog/basement-flooding-guide/' }
  ]);

  // 3. Use both schemas (optional: choose one or combine)
  // For FAQ to display in rich snippets, use faqSchema
  // For breadcrumbs in search, add as separate component

  return (
    <main>
      <PageMeta
        title="Basement Flooding in Northern VA: Complete Prevention & Restoration Guide"
        description="Expert basement flooding guide for Northern Virginia homeowners. Causes, emergency response steps, DIY vs professional restoration, prevention, insurance coverage. IICRC-backed content. 24/7 emergency service available."
        schema={faqSchema}  // FAQ displays in search
      />

      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog/' },
        { label: 'Basement Flooding' }
      ]} />

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <header>
          <p className="text-sm text-blue-600 mb-2">Emergency Response Guides</p>
          <h1>Basement Flooding in Northern Virginia: Complete Prevention & Restoration Guide</h1>
          <p className="text-gray-600 mb-8">
            Published Jan 1, 2026 • 12 min read • IICRC-Certified
          </p>
          <Button href="tel:8774970007" className="mb-8">
            Emergency Response: Call (877) 497-0007
          </Button>
        </header>

        {/* Intro */}
        <p className="text-lg mb-6">
          Basement flooding is one of the most common water damage emergencies in Northern Virginia, affecting thousands of homes annually. This comprehensive guide covers causes, immediate response, professional restoration, prevention, and insurance claims.
        </p>

        {/* Sections matching FAQ */}
        <section className="mb-12">
          <h2>What Causes Basement Flooding in Northern Virginia?</h2>
          <p>
            {faqs[0].answer}
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Heavy rain (primary cause)</li>
            <li>Poor yard drainage</li>
            <li>Burst pipes</li>
            <li>Sump pump failure</li>
            <li>Rising water tables</li>
            <li>Foundation cracks</li>
            <li>Improper window well drainage</li>
          </ul>
        </section>

        {/* ... more sections ... */}

        {/* FAQ Section - Displays directly in article */}
        <section className="bg-gray-50 p-8 rounded-lg my-12">
          <h2>Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <details key={idx} className="border-b pb-6">
                <summary className="font-semibold cursor-pointer">
                  {faq.question}
                </summary>
                <p className="mt-3 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-50 border border-blue-200 p-8 rounded-lg mt-12 text-center">
          <h3>Need Basement Flood Help?</h3>
          <p>Flood Doctor responds 24/7 in 60 minutes for Northern Virginia emergencies.</p>
          <Button href="tel:8774970007" size="lg" className="mt-4">
            Call Now: (877) 497-0007
          </Button>
        </div>
      </article>
    </main>
  );
};

export default BasementFloodingGuide;
```

**Result:** When this page is crawled:
1. Google sees FAQ schema → displays Q&A in "People also ask"
2. FAQ rich snippet appears in SERP
3. CTR typically increases 20-50%

---

## FILE CHANGES SUMMARY

### Files to Modify (in order of priority):

1. **`/pages/Home.tsx`** (5 min)
   - Add import: `generateOrganizationSchema`
   - Add schema prop to PageMeta

2. **`/pages/About.tsx`** (5 min)
   - Add import: `generateLocalBusinessSchema`
   - Add schema prop to PageMeta

3. **`/pages/ServicesHub.tsx`** (10 min)
   - Add import: `generateServiceSchema`
   - Create schema object with service data
   - Add schema prop to PageMeta

4. **`/pages/blog/*.tsx`** (5 min × 30 articles = 150 min)
   - Extract FAQ from article content
   - Add import: `generateFAQSchema`
   - Create schema from FAQ data
   - Add schema prop to PageMeta

5. **`/pages/landing/*.tsx`** (3 min × ~17 pages = 51 min)
   - Add import: `generateLocationSchema` or use LocalBusiness
   - Add location-specific data
   - Add schema prop to PageMeta

6. **All other pages** (2 min × remaining pages)
   - Add breadcrumb schema
   - Add schema prop to PageMeta

**Total Implementation Time:** ~5-8 hours for complete site

---

## SUCCESS METRICS

After schema implementation, monitor:

1. **Google Search Console**
   - Impressions increase
   - CTR increases (especially FAQ articles)
   - More rich snippet appearances

2. **Rich Results Test**
   - 0 errors on each page
   - All expected items present
   - Valid JSON-LD structure

3. **Analytics**
   - Blog article traffic increases (FAQ snippets)
   - Time on page increases
   - Bounce rate decreases

4. **SERP Appearance**
   - Star ratings display for About/Home
   - Breadcrumbs appear
   - FAQ boxes show "People also ask"

---

## TROUBLESHOOTING

### Schema Not Appearing in Rich Results Test

**Check:**
1. No syntax errors in JSON
2. Required fields present
3. Field values match @type requirements
4. No HTML in text fields
5. URLs are absolute (include domain)

### FAQ Schema Not Showing Q&A Snippet

**Requirements:**
- Minimum 3 QA pairs (Google only shows after minimum)
- Questions must be clear/specific
- Answers must be substantial (not just 1-2 words)
- No duplicate questions
- Questions must match user search intent

### LocalBusiness Schema Missing Address

**Common Issue:** Address not provided or formatted incorrectly

**Fix:** Check `/config/constants.ts` for `COMPANY_ADDRESS` structure:
```tsx
COMPANY_ADDRESS: {
  streetAddress: "123 Main St",
  addressLocality: "Arlington",
  addressRegion: "VA",
  postalCode: "22201",
  addressCountry: "US"
}
```

---

## NEXT STEPS

1. Start with Phase 1 (Core Pages) this week
2. Test each page with Rich Results Test tool
3. Validate schema structure in Search Console
4. Monitor impressions/CTR over 2-4 weeks
5. Phase 2: Blog articles (highest impact)
6. Phase 3: Complete coverage

