# Claude Code Execution Prompt: Local SEO Content Research & Generation

**Version:** 1.0  
**Last Updated:** January 2025  
**Purpose:** Research competitors and generate hyper-local SEO content for each Flood Doctor city subdomain

---

## MISSION

Use Perplexity AI to conduct deep competitor research for each city in the Flood Doctor service area, then generate unique, hyper-local SEO content that will:

1. Outrank local competitors in organic search
2. Pass Google's "Doorway Page" detection (no duplicate content)
3. Establish local authority through neighborhood-specific content
4. Drive conversions with locally-relevant CTAs

---

## PHASE 1: Competitor Research Protocol

### Task 1.1: Identify Top Competitors Per City

For EACH city in `src/data/franchises.ts`, use Perplexity to research:

```
PERPLEXITY QUERY TEMPLATE:
"Who are the top 5 water damage restoration companies in [CITY], Virginia? 
Include their websites, Google review counts, and any unique services they offer.
Focus on companies that rank on page 1 for '[CITY] water damage restoration'."
```

**Cities to Research:**
1. McLean
2. Arlington
3. Alexandria
4. Fairfax
5. Vienna
6. Tysons
7. Reston
8. Herndon
9. Ashburn
10. Springfield
11. Falls Church
12. Great Falls
13. Lorton

### Task 1.2: Analyze Competitor Content Gaps

For each city's top 3 competitors, use Perplexity to analyze:

```
PERPLEXITY QUERY TEMPLATE:
"Analyze the website content of [COMPETITOR URL]. 
What topics do they cover for water damage restoration?
What local neighborhoods or landmarks do they mention?
What content gaps exist that a competitor could exploit?"
```

### Task 1.3: Extract Local Search Intent

Use Perplexity to identify what locals actually search for:

```
PERPLEXITY QUERY TEMPLATE:
"What are the most common water damage problems in [CITY], Virginia?
Consider the local housing stock, climate patterns, and infrastructure.
What specific questions do [CITY] homeowners ask about water damage?"
```

---

## PHASE 2: Local Keyword Research

### Task 2.1: Primary Keywords Per City

Generate a keyword map for each city with the following structure:

```typescript
// Output format: src/data/seo/keywords/[city].ts

export const [city]Keywords = {
  primary: [
    "[City] water damage restoration",
    "water damage repair [City] VA",
    "emergency water removal [City]",
    "flood cleanup [City] Virginia"
  ],
  secondary: [
    "[City] basement flooding",
    "[City] burst pipe repair",
    "[City] sewage cleanup",
    "[City] mold remediation"
  ],
  longtail: [
    "24 hour water damage restoration [City] VA",
    "water damage restoration cost [City]",
    "best water damage company near [City]",
    "[Neighborhood] water damage repair"
  ],
  localModifiers: [
    // Pull from franchises.ts localHooks.neighborhoods
  ],
  problemSpecific: [
    // Pull from franchises.ts localHooks.commonIssues
  ]
};
```

### Task 2.2: Neighborhood-Level Keywords

For each city, expand keywords to include specific neighborhoods:

```
PERPLEXITY QUERY TEMPLATE:
"What are all the neighborhoods, subdivisions, and communities within [CITY], Virginia?
Include HOA communities, historic districts, and well-known residential areas."
```

Cross-reference with `franchises.ts` and ADD any missing neighborhoods to the data file.

---

## PHASE 3: Content Generation Templates

### Task 3.1: Homepage Content Blocks

Generate UNIQUE homepage content for each city. Each block must include LOCAL references.

**Content Block Structure:**

```typescript
// Output: src/content/cities/[city]/homepage.ts

export const [city]HomepageContent = {
  heroHeadline: string,           // Must include city name + "24/7" or "Emergency"
  heroSubheadline: string,        // Include response time + service area
  introParagraph: string,         // 150-200 words, mention 3+ neighborhoods
  
  whyChooseUs: {
    headline: string,
    points: [
      {
        title: string,
        description: string,      // Include local reference
        icon: string
      }
    ]
  },
  
  localExpertise: {
    headline: string,             // "Your [City] Water Damage Experts"
    paragraph: string,            // 200-250 words, heavy local references
    architectureNote: string,     // From franchises.ts
    commonIssues: string[]        // From franchises.ts
  },
  
  serviceAreaDescription: string, // Mention primary + secondary areas
  
  emergencyCTA: {
    headline: string,
    subtext: string,
    buttonText: string
  },
  
  localTestimonialIntro: string,  // "What [City] Homeowners Say"
  
  faqSection: FAQ[]               // 5-7 city-specific FAQs
};
```

**CRITICAL RULES FOR HOMEPAGE CONTENT:**

1. **NO DUPLICATE SENTENCES** - Each city must have completely unique phrasing
2. **3+ NEIGHBORHOOD MENTIONS** - Weave specific neighborhood names into paragraphs
3. **LOCAL LANDMARKS** - Reference at least 2 landmarks per city
4. **HOUSING STOCK** - Describe the actual architecture (from franchises.ts)
5. **PROBLEM-SPECIFIC** - Mention issues unique to that city's homes

**EXAMPLE - McLean vs Arlington Differentiation:**

❌ BAD (Generic):
> "We provide fast water damage restoration in McLean."
> "We provide fast water damage restoration in Arlington."

✅ GOOD (Hyper-Local):
> "McLean estate homes in Langley and Chesterbrook often feature finished basements with wine cellars and home theaters. When a sump pump fails during a summer storm, we respond within 30 minutes to protect your high-value assets."

> "Arlington's Rosslyn high-rises and Clarendon rowhouses require different restoration approaches. Our crews are trained for both condo water intrusions affecting multiple units and the tight equipment access of urban townhomes."

### Task 3.2: Service Page Content

Generate UNIQUE service page content for each city + service combination.

**Services to Cover:**
1. Water Damage Restoration
2. Flood Cleanup
3. Basement Flooding
4. Burst Pipe Repair
5. Sewage Cleanup
6. Mold Remediation
7. Storm Damage
8. Fire & Smoke Damage

**Content Structure Per Service Page:**

```typescript
// Output: src/content/cities/[city]/services/[service].ts

export const [city][Service]Content = {
  meta: {
    title: string,                // "[Service] in [City], VA | Flood Doctor"
    description: string,          // 155 chars, include city + CTA
    canonical: string             // https://[city].flood.doctor/[service]
  },
  
  h1: string,                     // "[Service] in [City], Virginia"
  
  introSection: {
    headline: string,
    paragraphs: string[],         // 2-3 paragraphs, 150 words each
    localContext: string          // Why this service matters in THIS city
  },
  
  processSection: {
    headline: string,             // "Our [City] [Service] Process"
    steps: ProcessStep[]
  },
  
  localChallenges: {
    headline: string,             // "[Service] Challenges in [City]"
    challenges: Challenge[]       // City-specific issues
  },
  
  equipmentSection: {
    headline: string,
    equipment: Equipment[],       // Include specific brand names
    localNote: string             // "Our [City] trucks carry..."
  },
  
  pricingSection: {
    headline: string,
    intro: string,                // Insurance + payment info
    factors: string[],            // What affects cost in THIS city
    cta: string
  },
  
  serviceAreaSection: {
    headline: string,             // "[Service] Throughout [City]"
    neighborhoods: string[],      // All neighborhoods we serve
    responseTime: string          // "30-minute response to [neighborhoods]"
  },
  
  faqSection: FAQ[],              // 5-7 service + city specific
  
  relatedServices: string[],      // Internal links
  
  finalCTA: {
    headline: string,
    paragraph: string,
    phone: string,
    buttonText: string
  }
};
```

### Task 3.3: Blog Article Generation

Generate a content calendar with UNIQUE blog topics for each city.

**Blog Topic Categories:**

1. **Seasonal Preparedness** (Unique angles per city)
2. **Neighborhood Spotlights** (Feature specific areas)
3. **Case Studies** (Anonymized local projects)
4. **Insurance Guidance** (VA-specific info)
5. **Prevention Tips** (Based on local housing stock)
6. **Emergency Guides** (Local utility contacts)

**Blog Article Template:**

```typescript
// Output: src/content/cities/[city]/blog/[slug].ts

export const [city]BlogArticle = {
  meta: {
    title: string,                // Include city name
    description: string,
    canonical: string,
    publishDate: string,
    modifiedDate: string,
    author: string,               // Manager from franchises.ts
    category: string,
    tags: string[]
  },
  
  h1: string,
  
  featuredImage: {
    src: string,
    alt: string,                  // Descriptive, include city
    caption: string
  },
  
  intro: string,                  // 100-150 words, hook + local context
  
  sections: ArticleSection[],     // H2s with content
  
  localCallout: {                 // Highlighted box
    type: "tip" | "warning" | "info",
    content: string               // City-specific advice
  },
  
  conclusion: string,             // 100 words + CTA
  
  authorBio: string,              // Pull from franchises.ts manager
  
  relatedPosts: string[],         // Internal links
  
  schema: {
    type: "Article" | "HowTo" | "FAQPage",
    data: object
  }
};
```

**UNIQUE BLOG TOPICS PER CITY:**

Use Perplexity to generate city-specific angles:

```
PERPLEXITY QUERY TEMPLATE:
"What unique water damage risks exist in [CITY], Virginia that would make 
good blog topics? Consider local weather patterns, housing age, infrastructure,
and recent events. Suggest 10 blog article titles that would rank for local searches."
```

---

## PHASE 4: Content Differentiation Matrix

### Task 4.1: Create Differentiation Tracking

Build a matrix to ensure NO content overlap between cities:

```typescript
// Output: src/data/seo/content-matrix.ts

export const contentDifferentiationMatrix = {
  mclean: {
    primaryAngle: "Estate home protection, high-value assets",
    housingFocus: "4,000-15,000 sq ft estates with finished basements",
    uniqueProblems: ["Wine cellar humidity", "Pool house pipes", "Home theater flooding"],
    toneModifier: "Luxury, discretion, asset protection",
    competitorGap: "[Identified from research]"
  },
  arlington: {
    primaryAngle: "Urban density, multi-unit coordination",
    housingFocus: "High-rise condos and historic rowhouses",
    uniqueProblems: ["Upstairs unit leaks", "Shared wall damage", "Tight access"],
    toneModifier: "Efficient, urban-savvy, HOA-experienced",
    competitorGap: "[Identified from research]"
  },
  // ... continue for all cities
};
```

### Task 4.2: Sentence-Level Uniqueness Check

Before finalizing content, verify NO sentences are reused:

```typescript
// Validation script: scripts/check-content-uniqueness.ts

import { glob } from 'glob';
import { readFileSync } from 'fs';

// Extract all sentences from city content files
// Flag any duplicates > 10 words
// Generate uniqueness report
```

---

## PHASE 5: Local Landing Pages

### Task 5.1: Neighborhood Landing Pages

For cities with 5+ distinct neighborhoods, create dedicated landing pages:

**Target Cities for Neighborhood Pages:**
- McLean → Langley, Chesterbrook, Great Falls
- Arlington → Rosslyn, Clarendon, Ballston, Pentagon City
- Alexandria → Old Town, Del Ray, Kingstowne
- Fairfax → Burke, Fairfax City, Fairfax Station
- Reston → Reston Town Center, Lake Anne, South Reston

**Neighborhood Page Template:**

```typescript
// Output: src/content/cities/[city]/neighborhoods/[neighborhood].ts

export const [neighborhood]LandingPage = {
  meta: {
    title: "Water Damage Restoration [Neighborhood], [City] | Flood Doctor",
    description: string,
    canonical: string
  },
  
  h1: "Water Damage Restoration in [Neighborhood]",
  
  heroSection: {
    headline: string,
    subheadline: string,          // "Serving [Neighborhood] homeowners since 2005"
    responseTime: string,         // "15-minute response to [Neighborhood]"
    backgroundImage: string
  },
  
  neighborhoodIntro: {
    paragraph: string,            // 200 words about THIS neighborhood
    housingTypes: string[],       // What homes look like here
    commonIssues: string[]        // Problems specific to this area
  },
  
  hyperLocalContent: {
    landmarks: string[],          // 3-5 nearby landmarks
    schools: string[],            // Local schools
    businesses: string[],         // Local businesses we've helped
    HOAs: string[]                // If applicable
  },
  
  serviceList: Service[],         // Services with neighborhood context
  
  localTestimonials: Testimonial[], // From this neighborhood
  
  recentProjects: Project[],      // Tagged to this neighborhood
  
  emergencySection: {
    headline: string,
    localContacts: Contact[],     // Utility contacts for this area
    responseNote: string
  },
  
  faq: FAQ[],                     // Neighborhood-specific
  
  breadcrumbs: Breadcrumb[]       // Home > [City] > [Neighborhood]
};
```

### Task 5.2: Problem-Specific Landing Pages

Create landing pages for common local problems:

```
[city].flood.doctor/basement-flooding
[city].flood.doctor/burst-pipe-repair
[city].flood.doctor/sump-pump-failure
[city].flood.doctor/sewage-backup
[city].flood.doctor/frozen-pipes
```

Each must include CITY-SPECIFIC content about why this problem occurs locally.

---

## PHASE 6: Content Generation Workflow

### Step-by-Step Execution

For EACH city, execute in order:

1. **Research Phase** (Perplexity)
   - Run competitor queries
   - Run local intent queries
   - Run neighborhood queries
   - Save research to `research/[city]/`

2. **Keyword Mapping**
   - Generate keyword file
   - Map neighborhoods to keywords
   - Identify content gaps

3. **Homepage Content**
   - Generate all content blocks
   - Verify 3+ neighborhood mentions
   - Verify 2+ landmark mentions
   - Check against other cities for uniqueness

4. **Service Pages** (8 per city = 104 total)
   - Generate each service page
   - Inject local context
   - Add city-specific FAQs

5. **Blog Articles** (5 per city = 65 total)
   - Generate seasonal prep article
   - Generate neighborhood spotlight
   - Generate case study
   - Generate prevention guide
   - Generate emergency guide

6. **Neighborhood Pages** (3-5 per applicable city)
   - Generate hyperlocal content
   - Include micro-targeting

7. **Validation**
   - Run uniqueness checker
   - Verify no duplicate sentences
   - Check all local references are accurate

---

## PHASE 7: Output File Structure

```
src/content/
├── cities/
│   ├── mclean/
│   │   ├── homepage.ts
│   │   ├── services/
│   │   │   ├── water-damage.ts
│   │   │   ├── flood-cleanup.ts
│   │   │   ├── basement-flooding.ts
│   │   │   └── ...
│   │   ├── neighborhoods/
│   │   │   ├── langley.ts
│   │   │   ├── chesterbrook.ts
│   │   │   └── ...
│   │   └── blog/
│   │       ├── mclean-winter-pipe-protection.ts
│   │       ├── langley-estate-water-damage-guide.ts
│   │       └── ...
│   ├── arlington/
│   │   └── ...
│   └── ...
├── shared/
│   ├── equipment-descriptions.ts
│   ├── process-steps.ts
│   ├── insurance-info.ts
│   └── credentials.ts
└── seo/
    ├── keywords/
    │   ├── mclean.ts
    │   ├── arlington.ts
    │   └── ...
    └── content-matrix.ts

research/
├── mclean/
│   ├── competitors.md
│   ├── local-intent.md
│   └── neighborhoods.md
├── arlington/
│   └── ...
└── ...
```

---

## PHASE 8: Quality Checkpoints

### Checkpoint 1: Research Validation
- [ ] All 13 cities researched
- [ ] Top 5 competitors identified per city
- [ ] Content gaps documented
- [ ] Local search intent captured

### Checkpoint 2: Keyword Coverage
- [ ] Primary keywords mapped (4 per city)
- [ ] Secondary keywords mapped (4 per city)
- [ ] Long-tail keywords mapped (4 per city)
- [ ] Neighborhood modifiers included

### Checkpoint 3: Content Uniqueness
- [ ] No sentences duplicated across cities
- [ ] Each homepage mentions 3+ unique neighborhoods
- [ ] Each homepage mentions 2+ unique landmarks
- [ ] Housing descriptions match actual architecture

### Checkpoint 4: Local Authority Signals
- [ ] Manager bio includes local tie
- [ ] Emergency contacts are accurate
- [ ] Partner references are valid
- [ ] Permit office information correct

### Checkpoint 5: SEO Technical
- [ ] All meta titles include city name
- [ ] All meta descriptions < 160 chars
- [ ] All H1s are unique
- [ ] All canonicals point to correct subdomain
- [ ] Schema markup includes areaServed

---

## EXECUTION COMMANDS

```bash
# Start research phase
claude "Read SUBDOMAIN_ARCHITECTURE.md and SEO_CONTENT_RESEARCH_PROMPT.md. 
Begin Phase 1 competitor research for McLean using Perplexity. 
Save results to research/mclean/competitors.md"

# Continue with content generation
claude "Using the research in research/mclean/, generate the homepage 
content for McLean following the template in Phase 3. 
Output to src/content/cities/mclean/homepage.ts"

# Validate uniqueness
claude "Compare the homepage content for McLean and Arlington. 
Identify any duplicate sentences or similar phrasing. 
Report findings and suggest rewrites."
```

---

## SUCCESS METRICS

After implementation, each city subdomain should have:

| Content Type | Count | Uniqueness Requirement |
|--------------|-------|------------------------|
| Homepage | 1 | 100% unique paragraphs |
| Service Pages | 8 | 90%+ unique per page |
| Blog Articles | 5+ | 100% unique |
| Neighborhood Pages | 3-5 | 100% unique |
| FAQs | 20+ | 80%+ unique answers |

**Total Unique Content:** ~150+ pages across all subdomains

---

## ANTI-PATTERNS TO AVOID

❌ **DO NOT:**
- Copy/paste content between cities and just swap city names
- Use generic phrases like "we provide quality service"
- Ignore the housing stock differences between cities
- Create thin content pages with < 300 words
- Duplicate FAQ answers across cities
- Use the same blog titles with different city names

✅ **DO:**
- Reference specific neighborhoods in every paragraph
- Mention actual landmarks, schools, and local businesses
- Describe real architectural challenges per city
- Create genuinely useful, locally-relevant content
- Use different writing angles for similar topics
- Include hyperlocal case study references

---

**START RESEARCH NOW. Begin with McLean.**
