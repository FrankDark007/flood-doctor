# Content Structure - Quick Implementation Guide

## Critical Issues & Code Fixes

### 1. FIX: Semantic HTML - Add `<article>` to Blog Pages

**File:** `/pages/blog/basement-flooding-guide.tsx`

**Change:** Wrap blog content in `<article>` tag

```jsx
// BEFORE
const BasementFloodingGuide: React.FC = () => {
  return (
    <main className="flex-grow bg-white">
      <PageMeta ... />

      {/* Hero Section */}
      <div className="bg-gradient-to-br ...">
        {/* Hero content */}
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">
        {/* Article content */}
      </div>
    </main>
  );
};

// AFTER
const BasementFloodingGuide: React.FC = () => {
  return (
    <main className="flex-grow bg-white">
      <PageMeta ... />

      <article>
        {/* Hero Section */}
        <div className="bg-gradient-to-br ...">
          {/* Hero content */}
        </div>

        <div className="max-w-[1440px] mx-auto px-6 py-20">
          {/* Article content */}
        </div>
      </article>
    </main>
  );
};
```

**Impact:** Proper semantic structure, better screen reader support, improved content indexing

---

### 2. FIX: Add BreadcrumbList Schema

**File:** All blog pages, location pages, resource pages

**Change:** Create breadcrumb schema in PageMeta

```jsx
// ADD to /pages/blog/basement-flooding-guide.tsx (after existing schemas)

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://flood.doctor/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://flood.doctor/blog/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Basement Flooding Guide",
      "item": "https://flood.doctor/blog/basement-flooding-guide/"
    }
  ]
};

// MODIFY PageMeta call
<PageMeta
  title="Basement Flooding in Northern Virginia: Prevention, Response & Restoration Guide"
  description="..."
  schema={[faqSchema, articleSchema, localBusinessSchema, breadcrumbSchema]}
/>
```

**Repeat for:**
- All blog articles (update position 3 with actual article title)
- All location pages (update breadcrumb path)
- All resource pages (update breadcrumb path)

**Impact:** Breadcrumbs appear in SERP, improves featured snippet eligibility

---

### 3. FIX: Fix Semantic HTML in Cards (Stop Using H3)

**File:** `/pages/blog/basement-flooding-guide.tsx` (lines 480-501)

**Current Issue:**
```jsx
{commonCauses.map((cause, i) => (
  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between mb-4">
      {/* ... icon ... */}
    </div>
    <h3 className="font-medium text-text mb-2">{cause.title}</h3>  // ← WRONG: H3 in card
    <p className="text-sm text-muted mb-3 leading-relaxed">{cause.description}</p>
    {/* ... */}
  </div>
))}
```

**Fix:**
```jsx
{commonCauses.map((cause, i) => (
  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between mb-4">
      {/* ... icon ... */}
    </div>
    {/* Change from <h3> to <div> with semantic styling */}
    <div className="font-medium text-text mb-2 text-lg font-semibold">
      {cause.title}
    </div>
    <p className="text-sm text-muted mb-3 leading-relaxed">{cause.description}</p>
    {/* ... */}
  </div>
))}
```

**Or if these ARE subsections:**
```jsx
{commonCauses.map((cause, i) => (
  <section key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between mb-4">
      {/* ... icon ... */}
    </div>
    <h3 className="font-medium text-text mb-2">{cause.title}</h3>  // ← Now correct semantically
    <p className="text-sm text-muted mb-3 leading-relaxed">{cause.description}</p>
    {/* ... */}
  </section>
))}
```

**Apply same pattern to:**
- Immediate steps (lines 526-554)
- DIY vs Professional (lines 566-602)
- Waterproofing solutions (lines 630-654)
- Cost breakdown (lines 680-715)
- Insurance tips (lines 741-771)

**Impact:** Proper heading hierarchy, better accessibility, cleaner DOM structure

---

### 4. FIX: Add HowTo Schema to Timeline Article

**File:** `/pages/blog/water-damage-restoration-timeline.tsx` (line 5)

**Add after imports:**
```jsx
const WaterDamageRestorationTimeline: React.FC = () => {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How Long Does Water Damage Restoration Take? Complete Timeline for NoVA Homeowners",
    "description": "Learn the complete water damage restoration timeline, from emergency response through final restoration. Understand each phase, typical durations, and factors affecting timeline.",
    "author": {
      "@type": "Organization",
      "name": "Flood Doctor"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": "1",
        "name": "Emergency Contact and Response (0-2 Hours)",
        "text": "Contact professional restoration services. Dispatcher gathers information. Emergency crew mobilizes. Technicians arrive on-site (typically 60-90 minutes in Northern Virginia). Initial safety assessment and hazard identification conducted."
      },
      {
        "@type": "HowToStep",
        "position": "2",
        "name": "Inspection and Damage Assessment (2-4 Hours)",
        "text": "Certified technicians conduct room-by-room inspection. Moisture detection using thermal imaging and moisture meters. Water category and damage classification determined. Assessment of salvageable vs non-salvageable materials."
      },
      {
        "@type": "HowToStep",
        "position": "3",
        "name": "Water Extraction (4-12 Hours)",
        "text": "Standing water removal using truck-mounted extractors. Submersible pumps deployed for deep water. Specialized extraction from carpeting and flooring. Moisture levels monitored throughout extraction process."
      },
      {
        "@type": "HowToStep",
        "position": "4",
        "name": "Removal of Unsalvageable Materials (1-3 Days)",
        "text": "Carpet padding removal. Drywall affected by contaminated water removal. Insulation and baseboards removed. Subflooring showing delamination removed. This prevents mold growth and allows access for drying."
      },
      {
        "@type": "HowToStep",
        "position": "5",
        "name": "Structural Drying and Dehumidification (3-14 Days)",
        "text": "Industrial dehumidifiers extract moisture from air. Air movers create optimal evaporation conditions. Daily monitoring tracks moisture reduction. Equipment repositioned to optimize efficiency. Materials must return to normal moisture levels per IICRC S500 standards."
      },
      {
        "@type": "HowToStep",
        "position": "6",
        "name": "Cleaning and Sanitization (2-5 Days)",
        "text": "Drying equipment removed. HEPA vacuuming of all surfaces. Antimicrobial application to prevent mold and bacteria growth. Odor treatment using hydroxyl generators if needed. Content cleaning and deodorization. HVAC system cleaning if ducts affected."
      },
      {
        "@type": "HowToStep",
        "position": "7",
        "name": "Reconstruction and Restoration (1-6 Weeks)",
        "text": "Final restoration returns home to pre-loss condition. Scope varies from minor restoration (carpet reinstallation, baseboard replacement) to major reconstruction (structural repairs, hardwood flooring replacement, kitchen/bathroom remodeling). Timeline depends on damage severity and permit requirements."
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://flood.doctor/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://flood.doctor/blog/" },
      { "@type": "ListItem", "position": 3, "name": "Water Damage Restoration Timeline", "item": "https://flood.doctor/blog/water-damage-restoration-timeline/" }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Long Does Water Damage Restoration Take? Complete Timeline for NoVA Homeowners",
    "description": "Learn the complete water damage restoration timeline, from emergency response through final restoration.",
    "author": {
      "@type": "Organization",
      "name": "Flood Doctor"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Flood Doctor",
      "logo": {
        "@type": "ImageObject",
        "url": "https://flood.doctor/logo.png"
      }
    },
    "datePublished": "2025-01-02",
    "dateModified": "2025-01-02"
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="How Long Does Water Damage Restoration Take? Complete Timeline for NoVA Homeowners"
        description="Detailed timeline for water damage restoration in Northern Virginia. Learn what to expect during each phase from emergency response through final restoration."
        schema={[howToSchema, breadcrumbSchema, articleSchema]}
      />

      <article>
        {/* existing article content */}
      </article>
    </main>
  );
};
```

**Impact:** HowTo schema enables SERP rich results for process-based queries, improves CTR

---

### 5. FIX: Enhance FAQ Page with Schema

**File:** `/pages/resources/FAQ.tsx`

**Current Issue:** Page has inline FAQs but no schema markup

**Add:**
```jsx
import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

const FAQ: React.FC = () => {
  // ADD comprehensive FAQ data
  const faqs = [
    {
      question: "How fast can you get here?",
      answer: "We dispatch teams immediately and typically arrive within 60 minutes for emergency calls in Northern Virginia."
    },
    {
      question: "Are you available on weekends?",
      answer: "Yes. We operate 24 hours a day, 7 days a week, 365 days a year, including all holidays."
    },
    {
      question: "Do I need to pay upfront?",
      answer: "For most insurance claims, we bill your insurance company directly. You are typically only responsible for your deductible."
    },
    {
      question: "Will you help with the claim?",
      answer: "Absolutely. We document all damage with photos and moisture readings and communicate directly with your adjuster to ensure the claim is handled correctly."
    },
    // ADD 10+ more FAQs here
  ];

  // ADD FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // ADD breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://flood.doctor/" },
      { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://flood.doctor/resources/" },
      { "@type": "ListItem", "position": 3, "name": "FAQ", "item": "https://flood.doctor/resources/faq/" }
    ]
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Frequently Asked Questions"
        description="Answers about water damage restoration costs, timing, and insurance."
        schema={[faqSchema, breadcrumbSchema]}
      />

      <div className="pt-12 pb-16 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <Breadcrumbs items={[{ label: 'Resources', path: '/resources/' }, { label: 'FAQ', path: '/resources/faq/' }]} />
           <h1 className="text-4xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h1>
           <p className="text-xl text-gray-600">Common questions about the restoration process.</p>
        </div>
      </div>

      <article className="py-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Group FAQs by category */}
        <section id="emergency-response">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Emergency Response</h2>
          <dl className="space-y-6">
            {faqs.filter(f => f.category === 'emergency').map((faq, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
                <dd className="text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="insurance-billing" className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Insurance & Billing</h2>
          <dl className="space-y-6">
            {faqs.filter(f => f.category === 'insurance').map((faq, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
                <dd className="text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      </article>
    </main>
  );
};

export default FAQ;
```

**Impact:** FAQ schema enables FAQ rich snippets, expands content coverage

---

### 6. FIX: Add Deep Links to Location Pages

**File:** `/pages/locations/AlexandriaWaterDamage.tsx` (or any location page)

**Add to main content:**
```jsx
// ADD to component before return statement

const relatedBlogArticles = [
  {
    title: "Water Damage in Northern Virginia: Complete Guide",
    url: "/blog/water-damage-northern-virginia-guide/",
    excerpt: "Understanding your unique water damage risks in NoVA's climate"
  },
  {
    title: "Hidden Water Damage Signs in Arlington Homes",
    url: "/blog/hidden-water-damage-signs-arlington/",
    excerpt: "Common water damage indicators in Arlington's housing stock"
  },
  {
    title: "Burst Pipe Emergency Response for Virginia Homes",
    url: "/blog/burst-pipe-emergency-response/",
    excerpt: "Immediate actions when pipes burst in winter"
  }
];

// IN RETURN, ADD AFTER SERVICE CARDS:
<section className="mt-16 pt-16 border-t border-gray-100">
  <h2 className="text-3xl font-semibold text-gray-900 mb-8">Learn More About Water Damage in Alexandria</h2>

  <div className="grid md:grid-cols-3 gap-6 mb-8">
    {relatedBlogArticles.map((article, i) => (
      <a key={i} href={article.url} className="group border border-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-gray-600 mt-2">{article.excerpt}</p>
        <span className="inline-block text-primary text-sm font-medium mt-4 group-hover:underline">
          Read Article →
        </span>
      </a>
    ))}
  </div>
</section>

// ALSO ADD SERVICE LINKS if not already present:
<section className="mb-8">
  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Services in Alexandria</h2>

  <div className="grid md:grid-cols-2 gap-4">
    <a href="/services/residential/water-damage/" className="border border-primary rounded-lg p-4 hover:bg-blue-50 transition">
      <h3 className="font-semibold text-primary">Water Damage Restoration</h3>
      <p className="text-sm text-gray-600 mt-2">Emergency extraction and professional drying</p>
    </a>
    <a href="/services/residential/mold-remediation/" className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition">
      <h3 className="font-semibold text-gray-900">Mold Remediation</h3>
      <p className="text-sm text-gray-600 mt-2">Professional mold removal and prevention</p>
    </a>
  </div>
</section>
```

**Repeat for all 30+ location pages**

**Impact:** Improved internal linking, better SEO for location pages, higher engagement

---

### 7. OPTIONAL: Add Table of Contents to Long Articles

**File:** `/pages/blog/basement-flooding-guide.tsx`

**Create new component:** `/components/ui/TableOfContents.tsx`

```jsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
  level: 'h2' | 'h3';
}

interface TableOfContentsProps {
  items: TOCItem[];
  title?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items, title = "On This Page" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-8 sticky top-32">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between mb-4 hover:text-primary transition-colors"
      >
        <h3 className="font-semibold text-sm uppercase tracking-wide">{title}</h3>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <ul className="space-y-2 text-sm">
          {items.map((item) => (
            <li
              key={item.id}
              className={item.level === 'h3' ? 'ml-4' : ''}
            >
              <a
                href={`#${item.id}`}
                className="text-primary hover:underline transition-colors"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default TableOfContents;
```

**Usage in article:**
```jsx
import TableOfContents from '../../components/ui/TableOfContents';

const BasementFloodingGuide: React.FC = () => {
  const tocItems = [
    { id: 'causes', title: 'Common Causes of Basement Flooding', level: 'h2' as const },
    { id: 'heavy-rainfall', title: 'Heavy Rainfall & Storm Events', level: 'h3' as const },
    { id: 'immediate-steps', title: '7 Steps to Take Immediately', level: 'h2' as const },
    { id: 'ensure-safety', title: 'Ensure Safety First', level: 'h3' as const },
    // ... more items
  ];

  return (
    // ...
    <div className="lg:col-span-8">
      <TableOfContents items={tocItems} />

      <section id="causes">
        <h2>Common Causes of Basement Flooding in Northern Virginia</h2>
        {/* content */}
      </section>

      {/* ... more sections with matching IDs ... */}
    </div>
  );
};
```

**Impact:** Improved UX for long articles, supports featured snippets

---

## Implementation Priority

**WEEK 1 (Critical):**
1. Add BreadcrumbList schema to all pages (5 min per page)
2. Add `<article>` tags to blog pages (2 min per page)
3. Fix semantic H3 usage in cards (10 min per page)

**WEEK 2:**
1. Add HowTo schema to timeline articles (1 page)
2. Enhance FAQ page with 10+ questions and schema (1 page)
3. Add deep links to 5 location pages (15 min per page)

**WEEK 3:**
1. Complete location page deep linking for all 30+ pages (15 min per page)
2. Create and integrate TableOfContents component

**Total Estimated Effort:** 30-40 hours
**Expected ROI:** 15-30% improvement in organic CTR
