# Flood Doctor Comprehensive Schema Implementation Guide
## Based on Google Guidelines, Competitor Analysis & SEO Best Practices

---

## EXECUTIVE SUMMARY

### Key Findings from Research

1. **No penalty for multiple schemas** - Google does NOT penalize for having many schema types on a page. Penalties only apply for **misuse** (hidden content, fake reviews, misleading data).

2. **Match schema to primary content** - John Mueller's core advice: schema must match the primary element on the page.

3. **FAQ rich results are limited** - As of 2023, FAQ rich results only show for authoritative government/health sites. Still useful for AI systems and content structure.

4. **Review stars don't show for LocalBusiness** - Google considers reviews on your own site "self-serving." Stars only show for Products, Recipes, etc.

5. **areaServed is critical for SAB** - Service Area Businesses should use areaServed property instead of physical addresses.

6. **JSON-LD is preferred** - Google recommends JSON-LD format for all structured data.

---

## GOOGLE'S OFFICIAL STANCE ON SCHEMA QUANTITY

### What Google Says:
> "Multiple items on a page means that there is more than one kind of thing on a page. For example, a page could contain a recipe, a video that shows how to make that recipe, and breadcrumb information."

### What Triggers Penalties:
- ❌ Marking up content not visible to users
- ❌ Marking up irrelevant or misleading content
- ❌ Fake reviews or manipulated ratings
- ❌ Impersonating other organizations
- ❌ Content that doesn't match the schema type

### What Does NOT Trigger Penalties:
- ✅ Multiple relevant schema types on one page
- ✅ Comprehensive schema implementation
- ✅ Using all applicable schema types for your content

**Source:** [Google Structured Data Guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)

---

## SCHEMA TYPES FOR WATER DAMAGE RESTORATION

### PRIMARY SCHEMA TYPES (Use on Every Page)

#### 1. Organization Schema (Homepage Only)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Flood Doctor",
  "legalName": "Flood Doctor LLC",
  "url": "https://www.flooddoctor.com",
  "logo": "https://www.flooddoctor.com/images/logo.png",
  "image": "https://www.flooddoctor.com/images/flood-doctor-team.jpg",
  "description": "24/7 emergency water damage restoration serving Northern Virginia since 2005. IICRC certified technicians.",
  "foundingDate": "2005",
  "founders": [
    {
      "@type": "Person",
      "name": "Founder Name"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Falls Church",
    "addressRegion": "VA",
    "postalCode": "22042",
    "addressCountry": "US"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-703-656-0000",
      "contactType": "customer service",
      "availableLanguage": ["English", "Spanish"],
      "areaServed": "US"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+1-703-656-0000",
      "contactType": "emergency",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    }
  ],
  "sameAs": [
    "https://www.facebook.com/flooddoctor",
    "https://www.instagram.com/flooddoctor",
    "https://www.linkedin.com/company/flooddoctor",
    "https://www.youtube.com/@flooddoctor",
    "https://www.yelp.com/biz/flood-doctor"
  ],
  "areaServed": [
    {
      "@type": "State",
      "name": "Virginia"
    },
    {
      "@type": "City",
      "name": "Washington",
      "sameAs": "https://en.wikipedia.org/wiki/Washington,_D.C."
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": "IICRC Certified Firm",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Institute of Inspection Cleaning and Restoration Certification",
        "sameAs": "https://iicrc.org"
      }
    }
  ],
  "knowsAbout": [
    "Water Damage Restoration",
    "Flood Cleanup",
    "Mold Remediation",
    "Fire Damage Restoration",
    "Emergency Water Extraction"
  ]
}
```

#### 2. LocalBusiness Schema (City Pages)
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "EmergencyService"],
  "@id": "https://mclean.flooddoctor.com/#localbusiness",
  "name": "Flood Doctor of McLean",
  "description": "24/7 emergency water damage restoration in McLean, Virginia. IICRC certified technicians respond in 45-60 minutes. Serving McLean, Tysons, and Great Falls.",
  "url": "https://mclean.flooddoctor.com",
  "telephone": "+1-703-656-1001",
  "email": "mclean@flooddoctor.com",
  "image": [
    "https://mclean.flooddoctor.com/images/mclean-hero.jpg",
    "https://mclean.flooddoctor.com/images/water-damage-mclean.jpg"
  ],
  "logo": "https://www.flooddoctor.com/images/logo.png",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
  "areaServed": [
    {
      "@type": "City",
      "name": "McLean",
      "sameAs": "https://en.wikipedia.org/wiki/McLean,_Virginia"
    },
    {
      "@type": "City",
      "name": "Tysons",
      "sameAs": "https://en.wikipedia.org/wiki/Tysons,_Virginia"
    },
    {
      "@type": "City",
      "name": "Great Falls",
      "sameAs": "https://en.wikipedia.org/wiki/Great_Falls,_Virginia"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "38.9339",
    "longitude": "-77.1773"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "slogan": "McLean's 24/7 Water Damage Experts",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Flood Doctor",
    "url": "https://www.flooddoctor.com"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Water Damage Restoration Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Water Extraction",
          "description": "24/7 emergency water removal from flooded properties"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Structural Drying",
          "description": "Industrial dehumidification and structural drying services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mold Remediation",
          "description": "Professional mold removal and prevention"
        }
      }
    ]
  },
  "knowsAbout": [
    "Water Damage Restoration McLean VA",
    "Flood Cleanup McLean Virginia",
    "Emergency Water Removal McLean",
    "Basement Flooding McLean"
  ]
}
```

#### 3. Service Schema (Service Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.flooddoctor.com/services/water-damage-restoration/#service",
  "name": "Water Damage Restoration",
  "serviceType": "Water Damage Restoration",
  "description": "Professional water damage restoration services including water extraction, structural drying, and content restoration. IICRC certified technicians available 24/7.",
  "url": "https://www.flooddoctor.com/services/water-damage-restoration/",
  "image": "https://www.flooddoctor.com/images/water-damage-restoration.jpg",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://www.flooddoctor.com/#organization"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "38.88",
      "longitude": "-77.17"
    },
    "geoRadius": "80467"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Water Damage Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Water Extraction"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Structural Drying"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Content Restoration"
        }
      }
    ]
  },
  "termsOfService": "https://www.flooddoctor.com/terms/",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceType": "Emergency Response",
    "availableLanguage": ["English", "Spanish"],
    "servicePhone": {
      "@type": "ContactPoint",
      "telephone": "+1-703-656-0000",
      "contactType": "emergency"
    }
  },
  "hoursAvailable": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  }
}
```

### SUPPLEMENTAL SCHEMA TYPES

#### 4. FAQPage Schema (FAQ Sections)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How quickly can Flood Doctor respond to water damage emergencies in McLean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flood Doctor technicians typically arrive within 45-60 minutes of your call in McLean, Virginia. We maintain 24/7 emergency response teams ready to deploy immediately for water damage emergencies."
      }
    },
    {
      "@type": "Question",
      "name": "Does Flood Doctor work with insurance companies for water damage claims?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Flood Doctor works directly with all major insurance providers. We handle documentation, provide detailed damage assessments, and communicate directly with adjusters to streamline your claim process."
      }
    },
    {
      "@type": "Question",
      "name": "Is Flood Doctor IICRC certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Flood Doctor is an IICRC Certified Firm with technicians trained in WRT (Water Damage Restoration), ASD (Applied Structural Drying), and AMRT (Applied Microbial Remediation) protocols."
      }
    }
  ]
}
```

**Important:** As of 2023, FAQ rich results only display for authoritative government and health websites. However, FAQ schema still helps:
- AI systems understand your content
- Voice search optimization
- Content structure signals

#### 5. BreadcrumbList Schema (All Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.flooddoctor.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.flooddoctor.com/services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Water Damage Restoration",
      "item": "https://www.flooddoctor.com/services/water-damage-restoration/"
    }
  ]
}
```

#### 6. Article/BlogPosting Schema (Blog Posts)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What to Do When Your Basement Floods: A Complete Guide",
  "description": "Step-by-step guide on handling basement flooding, from immediate safety steps to professional restoration.",
  "image": "https://www.flooddoctor.com/blog/images/basement-flooding-guide.jpg",
  "author": {
    "@type": "Organization",
    "name": "Flood Doctor",
    "url": "https://www.flooddoctor.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Flood Doctor",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.flooddoctor.com/images/logo.png"
    }
  },
  "datePublished": "2025-01-15",
  "dateModified": "2025-12-01",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.flooddoctor.com/blog/basement-flooding-guide/"
  },
  "articleSection": "Water Damage",
  "keywords": ["basement flooding", "water damage", "flood cleanup", "Virginia"]
}
```

#### 7. HowTo Schema (Process/Guide Content)
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Handle a Water Damage Emergency",
  "description": "Professional steps to take immediately when water damage occurs in your home.",
  "image": "https://www.flooddoctor.com/images/water-damage-steps.jpg",
  "totalTime": "PT30M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "0"
  },
  "step": [
    {
      "@type": "HowToStep",
      "name": "Ensure Safety",
      "text": "Turn off electricity to affected areas if safe to do so. Avoid standing water if electrical outlets are submerged.",
      "image": "https://www.flooddoctor.com/images/step1-safety.jpg"
    },
    {
      "@type": "HowToStep",
      "name": "Stop the Water Source",
      "text": "Locate and shut off the main water valve if the flooding is from a burst pipe or plumbing failure.",
      "image": "https://www.flooddoctor.com/images/step2-shutoff.jpg"
    },
    {
      "@type": "HowToStep",
      "name": "Call Flood Doctor",
      "text": "Contact Flood Doctor at 703-656-0000 for emergency water damage restoration. We respond within 45-60 minutes.",
      "image": "https://www.flooddoctor.com/images/step3-call.jpg"
    },
    {
      "@type": "HowToStep",
      "name": "Document the Damage",
      "text": "Take photos and videos of all damage for insurance purposes before cleanup begins.",
      "image": "https://www.flooddoctor.com/images/step4-document.jpg"
    }
  ]
}
```

#### 8. WebSite Schema (Homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Flood Doctor",
  "url": "https://www.flooddoctor.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.flooddoctor.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

---

## SCHEMA BY PAGE TYPE

### Homepage
| Schema Type | Required? | Purpose |
|-------------|-----------|---------|
| Organization | ✅ Yes | Company identity, credentials |
| WebSite | ✅ Yes | Site-wide search, identity |
| LocalBusiness | ✅ Yes | Local search visibility |
| BreadcrumbList | ✅ Yes | Navigation structure |

### City Landing Pages (e.g., mclean.flooddoctor.com)
| Schema Type | Required? | Purpose |
|-------------|-----------|---------|
| LocalBusiness | ✅ Yes | City-specific business info |
| Service | ✅ Yes | Services offered in city |
| FAQPage | ⭐ Recommended | City-specific questions |
| BreadcrumbList | ✅ Yes | Navigation |
| areaServed | ✅ Yes | Neighborhoods/cities served |

### Service Pages
| Schema Type | Required? | Purpose |
|-------------|-----------|---------|
| Service | ✅ Yes | Service details |
| FAQPage | ⭐ Recommended | Service-specific FAQs |
| HowTo | ⭐ Recommended | If process is described |
| BreadcrumbList | ✅ Yes | Navigation |

### Blog/Article Pages
| Schema Type | Required? | Purpose |
|-------------|-----------|---------|
| Article/BlogPosting | ✅ Yes | Content metadata |
| FAQPage | ⭐ Recommended | If FAQs included |
| HowTo | ⭐ Recommended | If step-by-step guide |
| BreadcrumbList | ✅ Yes | Navigation |

### Neighborhood Pages
| Schema Type | Required? | Purpose |
|-------------|-----------|---------|
| LocalBusiness | ✅ Yes | Hyper-local targeting |
| Service | ✅ Yes | Services in neighborhood |
| areaServed | ✅ Yes | Specific neighborhood |
| BreadcrumbList | ✅ Yes | Navigation |

---

## WHAT DOES NOT WORK / LIMITATIONS

### Review/AggregateRating for LocalBusiness
**Status:** ❌ Does NOT show rich results

Since 2019, Google considers reviews displayed on your own business website as "self-serving" and will not display star ratings in search results for LocalBusiness or Organization schema.

**Workaround Options:**
1. Use Product schema with reviews for specific service offerings
2. Focus on Google Business Profile reviews (those DO show)
3. Include testimonials for user trust, just don't expect SERP stars

### FAQ Rich Results
**Status:** ⚠️ Limited to Authoritative Sites

As of August 2023, FAQ rich results only show for:
- Government websites
- Health/medical authority sites

**Still Worth Implementing Because:**
- AI systems (ChatGPT, Perplexity, Gemini) use FAQ schema
- Voice search optimization
- Content structure signals to Google
- May return in future

### Deprecated Schema Types (2025-2026)
Google is ending support for these rich result types:
- CourseInfo
- ClaimReview
- EstimatedSalary
- LearningVideo
- SpecialAnnouncement
- VehicleListing
- PracticeProblem

**None of these affect water damage restoration sites.**

---

## SIGNALS GOOGLE USES FOR RICH RESULTS

Based on research, here's what determines if Google shows your rich results:

### 1. Technical Eligibility
- Valid JSON-LD syntax
- All required properties present
- Content matches schema data
- Page is indexable (no noindex, accessible by Googlebot)

### 2. Content Quality Signals
- Page provides value to users
- Content matches user intent
- Page is authoritative on the topic
- Content is original and comprehensive

### 3. Page Quality Signals
- Core Web Vitals performance
- Mobile-friendly
- HTTPS
- No intrusive interstitials

### 4. Trust Signals
- Domain authority
- Backlink profile
- Brand recognition
- NAP consistency

### 5. Freshness
- Content is up-to-date
- Schema reflects current information
- Regular content updates

### 6. User Engagement
- Click-through rate
- Bounce rate
- Time on page
- Return visits

---

## COMPETITOR SCHEMA ANALYSIS

### What Top Competitors Use

Based on industry research, successful water damage restoration companies typically implement:

| Schema Type | Usage Rate | Rich Result Potential |
|-------------|------------|----------------------|
| LocalBusiness | 90%+ | Local pack, knowledge panel |
| Organization | 85%+ | Brand recognition |
| Service | 70%+ | Service snippets |
| FAQPage | 60%+ | (Limited now) |
| BreadcrumbList | 80%+ | Breadcrumb display |
| Article | 50%+ | News/blog visibility |
| HowTo | 30%+ | How-to snippets |

### Why Competitors Get Rich Results

1. **Consistent NAP** - Same business info everywhere
2. **Complete schema** - All required + recommended properties
3. **Google Business Profile** - Verified, active, reviewed
4. **Directory citations** - Listed on IICRC, BBB, Yelp, Angi
5. **Content quality** - Authoritative, comprehensive pages
6. **Technical SEO** - Fast, mobile-friendly, crawlable

---

## IMPLEMENTATION CHECKLIST

### Phase 1: Foundation (Week 1)
- [ ] Implement Organization schema on homepage
- [ ] Implement WebSite schema on homepage
- [ ] Implement LocalBusiness schema on homepage
- [ ] Add BreadcrumbList to all pages
- [ ] Validate with Rich Results Test

### Phase 2: City Pages (Week 2)
- [ ] Create LocalBusiness schema for each of 13 cities
- [ ] Include areaServed with all neighborhoods
- [ ] Add Service schema with service catalog
- [ ] Add city-specific FAQPage schema
- [ ] Validate each city page

### Phase 3: Service Pages (Week 3)
- [ ] Implement Service schema on all 27 service pages
- [ ] Add HowTo schema where applicable
- [ ] Add FAQPage schema for service-specific FAQs
- [ ] Cross-link services in schema

### Phase 4: Blog/Content (Week 4)
- [ ] Implement Article schema on all blog posts
- [ ] Add HowTo schema to guide posts
- [ ] Add FAQPage to posts with FAQ sections
- [ ] Update dateModified when content changes

### Phase 5: Validation & Monitoring
- [ ] Test all pages with Rich Results Test
- [ ] Check Search Console for structured data errors
- [ ] Monitor rich result performance
- [ ] Update schema when content changes

---

## TOOLS & RESOURCES

### Validation Tools
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [Google Search Console](https://search.google.com/search-console)

### Schema Generators
- [TechnicalSEO Schema Generator](https://technicalseo.com/tools/schema-markup-generator/)
- [Schema App](https://www.schemaapp.com/)
- [Merkle Schema Generator](https://technicalseo.com/tools/schema-markup-generator/)

### Documentation
- [Google Structured Data Gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)
- [Schema.org Full Documentation](https://schema.org/)
- [LocalBusiness Schema Reference](https://schema.org/LocalBusiness)

---

## SOURCES

### Google Official Documentation
- [Google Structured Data Guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Google LocalBusiness Documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google FAQ Schema Changes](https://developers.google.com/search/blog/2023/08/howto-faq-changes)

### SEO Community Research
- [Search Engine Journal - Local SEO Schema Guide](https://www.searchenginejournal.com/how-to-use-schema-for-local-seo-a-complete-guide/294973/)
- [BrightLocal - Review Schema Policy](https://www.brightlocal.com/learn/review-schema/)
- [Schema App - Service Schema Guide](https://www.schemaapp.com/schema-markup/services-schema-markup-schema-org-services/)
- [Neil Patel - Schema Markup Guide](https://neilpatel.com/blog/get-started-using-schema/)

### Schema.org Types
- [HomeAndConstructionBusiness](https://schema.org/HomeAndConstructionBusiness)
- [EmergencyService](https://schema.org/EmergencyService)
- [Service](https://schema.org/Service)
- [areaServed Property](https://schema.org/areaServed)

---

*Document created: January 4, 2026*
*Based on Google guidelines as of Q4 2025*
*For: Flood Doctor Water Damage Restoration*
