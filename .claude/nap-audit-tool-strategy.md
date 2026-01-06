# NAP Audit Tool Strategy & Build vs. Buy Analysis
## For Flood Doctor SEO Package

---

## EXECUTIVE SUMMARY

### Recommendation: Hybrid Approach
**Build a custom NAP audit tool using Apify + BrightLocal API** rather than subscribing to YEXT.

| Approach | Annual Cost (13 locations) | Pros | Cons |
|----------|---------------------------|------|------|
| **YEXT** | $6,500 - $13,000/yr | Full automation, support | Expensive, "rented" data |
| **BrightLocal** | ~$1,560/yr | Good API, established | Still subscription model |
| **DIY + Apify** | ~$200-500/yr | Ownership, customizable | Development time required |
| **Hybrid (Recommended)** | ~$500-800/yr | Best of both worlds | Moderate complexity |

---

## YEXT ALTERNATIVES - COMPLETE PRICING BREAKDOWN

### Tier 1: Full-Service Platforms (Most Expensive)

#### YEXT
- **Pricing:** $199 - $999/location/year (4 tiers)
- **For 13 locations:** $2,587 - $12,987/year
- **Model:** Subscription-based "rental" - data reverts when you cancel
- **Pros:** 200+ directory sync, real-time updates, review management
- **Cons:** Aggressive upselling, no ownership, expensive

#### Uberall
- **Pricing:** Similar to YEXT, enterprise-focused
- **For 13 locations:** $3,000 - $10,000/year estimated
- **Pros:** 125+ publishers, good analytics
- **Cons:** Enterprise sales process, complex pricing

### Tier 2: Mid-Range Solutions (Moderate Cost)

#### BrightLocal
- **Pricing:** $39-79/month platform + $208/location one-time citation building
- **For 13 locations:** $948/yr platform + $2,704 one-time = ~$1,500/yr amortized
- **API Pricing:** $0.05 per request (1 business × 1 directory = 1 request)
- **Pros:** Pay-as-you-go API, human verification, 300+ directories
- **Cons:** Not fully automated like YEXT

#### Moz Local
- **Pricing:** $14-33/month per location
- **For 13 locations:** $2,184 - $5,148/year
- **Pros:** 90+ directory sync, simple interface
- **Cons:** Fewer directories than YEXT

#### Synup
- **Pricing:** Budget-friendly, contact for quote
- **For 13 locations:** ~$1,500-3,000/year estimated
- **Pros:** API-based, 60+ directories
- **Cons:** Smaller directory network

### Tier 3: Low-Cost Options

#### Whitespark
- **Pricing:**
  - Local Citation Finder: $33-149/month
  - Citation Building: $4/citation
  - Platform: $1/month per location
- **For 13 locations:** ~$500-1,000/year for basic needs
- **Pros:** Manual quality, IICRC/industry citations
- **Cons:** Not automated, service-based

#### fatjoe (White-Label)
- **Pricing:** £75-240 one-time for 50-300 citations
- **For 13 locations:** ~$500-1,000 one-time
- **Pros:** No recurring fees, manual quality
- **Cons:** No monitoring, one-time build only

### Tier 4: DIY/API Solutions (Cheapest)

#### Apify Citation Checker
- **Pricing:** Pay-per-use compute units
- **Estimated cost:** $5-20/month for periodic audits
- **For 13 locations:** ~$60-240/year
- **Pros:** Full control, 36+ directories, AI-powered
- **Cons:** Requires technical setup

#### BrightLocal API Only
- **Pricing:** $0.05 per request
- **For 13 locations × 50 directories × 12 months:** $390/year
- **Pros:** Accurate data, reliable
- **Cons:** Need SEO Pro Plan ($79/mo) for access

---

## BUILD VS. BUY ANALYSIS

### Can You Replicate YEXT's System?

**Partially Yes, But With Limitations:**

#### What YEXT Does:
1. **Data Aggregator Submissions** - Pushes to Data Axle, Foursquare, Localeze
2. **Direct API Integrations** - Facebook, Apple Maps, Bing, etc.
3. **Web Portal Claims** - Manually claims listings on sites without APIs
4. **Continuous Monitoring** - Watches for changes/edits
5. **Duplicate Suppression** - Finds and removes duplicate listings
6. **Review Aggregation** - Pulls reviews from multiple sources

#### What You CAN Build:
| Feature | DIY Feasibility | Method |
|---------|-----------------|--------|
| NAP Auditing | ✅ Easy | Apify scrapers, BrightLocal API |
| Data Aggregator Submission | ⚠️ Moderate | Direct submissions ($30-120 total) |
| Google Business Profile | ✅ Easy | Google Business Profile API (free) |
| Facebook | ✅ Easy | Facebook Graph API (free) |
| Apple Maps | ⚠️ Moderate | Apple Business Connect (manual) |
| Bing Places | ✅ Easy | Bing Places API (free) |
| Yelp | ⚠️ Moderate | Yelp Fusion API ($7.99/1000 calls) |
| Review Monitoring | ✅ Easy | APIs + scraping |
| Duplicate Detection | ⚠️ Moderate | Custom logic + manual verification |

#### What You CANNOT Easily Build:
- **Real-time sync** to 200+ directories (YEXT's core value)
- **Automatic suppression** of rogue edits
- **White-label enterprise dashboard**
- **Support for niche directories** without public APIs

---

## RECOMMENDED: HYBRID APPROACH FOR MISSION CONTROL

### Phase 1: NAP Audit Tool (Week 1-2)

Build a custom NAP audit tool integrated into Mission Control using:

1. **Apify Citation Checker Actor** - $0.05-0.10 per audit
2. **BrightLocal API** (if budget allows) - $0.05 per directory check
3. **Custom scrapers** for key directories

#### Architecture:
```
Mission Control NAP Audit Module
├── Audit Runner
│   ├── Apify Integration (36+ directories)
│   ├── BrightLocal API (100+ directories)
│   └── Custom Scrapers (backup)
├── Data Storage
│   ├── Master NAP Record (source of truth)
│   ├── Directory Snapshots
│   └── Inconsistency Tracking
├── Reporting
│   ├── NAP Consistency Score
│   ├── Directory Coverage Report
│   └── Action Items List
└── Alerts
    ├── Inconsistency Detected
    ├── New Listing Found
    └── Duplicate Detected
```

### Phase 2: Core Listing Management (Week 3-4)

Claim and manage the most important listings directly:

| Directory | API/Method | Cost |
|-----------|------------|------|
| Google Business Profile | Google Business Profile API | Free |
| Bing Places | Bing Places API | Free |
| Facebook Business | Graph API | Free |
| Apple Business Connect | Manual portal | Free |
| Yelp | Yelp Fusion API | ~$8/1000 calls |

### Phase 3: Data Aggregator Submissions (One-Time)

Submit to data aggregators for broad distribution:

| Aggregator | Method | Cost |
|------------|--------|------|
| Data Axle | BrightLocal or direct | $30/location |
| Foursquare | Direct claim ($20) or BrightLocal ($15) | $15-20/location |
| Neustar Localeze | Subscription or BrightLocal | $30/location or $99/yr |
| GPS Network | BrightLocal | $30/location |

**Total one-time aggregator cost:** ~$120-150 per location × 13 = **$1,560-1,950**

### Phase 4: Ongoing Monitoring (Automated)

Schedule monthly NAP audits via Mission Control:
- Run Apify Citation Checker monthly
- Compare against master NAP record
- Generate inconsistency report
- Alert on changes

---

## PRIORITY DIRECTORIES FOR WATER DAMAGE RESTORATION

### Tier 1: Critical (Must Have)
| Directory | Why Important | API Available? |
|-----------|---------------|----------------|
| Google Business Profile | #1 local ranking factor | ✅ Yes (free) |
| Bing Places | Powers Cortana, Alexa | ✅ Yes (free) |
| Apple Maps | iOS users | ⚠️ Portal only |
| Yelp | High authority, reviews | ✅ Yes (paid) |
| Facebook | Social signals | ✅ Yes (free) |
| BBB | Trust signal, common search | ❌ Manual only |

### Tier 2: High Priority (Should Have)
| Directory | Why Important |
|-----------|---------------|
| Angi (Angie's List) | Home services authority |
| HomeAdvisor | Lead generation + citations |
| Thumbtack | Service marketplace |
| Nextdoor | Neighborhood recommendations |
| Yellow Pages / YP.com | Traditional, still indexed |
| Superpages | IYP with local presence |

### Tier 3: Industry-Specific
| Directory | Why Important |
|-----------|---------------|
| IICRC Directory | Industry certification (CRITICAL for AI) |
| Restoration Industry Association | Industry authority |
| Chamber of Commerce (each city) | Local authority signals |
| Local emergency services directories | Hyper-local |

### Tier 4: Data Aggregators (Feed Others)
| Aggregator | Feeds To |
|------------|----------|
| Data Axle | 100+ directories |
| Foursquare | Uber, Apple, Samsung, Snapchat |
| Neustar Localeze | GPS devices, car systems |

---

## NAP AUDIT TOOL SPECIFICATION FOR MISSION CONTROL

### Tool Name: `nap-audit`

### Endpoints to Add:

```javascript
// POST /api/nap/audit
// Runs a full NAP audit for a business
{
  "businessName": "Flood Doctor of McLean",
  "address": "McLean, VA",
  "phone": "+1-703-656-1001",
  "website": "https://mclean.flooddoctor.com",
  "directories": ["google", "yelp", "facebook", "bing", "apple", "bbb", "angi", "all"]
}

// GET /api/nap/audit/:auditId
// Returns audit results

// GET /api/nap/locations
// Lists all locations being monitored

// POST /api/nap/master
// Sets the master NAP record (source of truth)

// GET /api/nap/inconsistencies
// Returns all current inconsistencies across all locations

// POST /api/nap/fix
// Generates action items for fixing inconsistencies
```

### Response Format:
```json
{
  "auditId": "audit_12345",
  "timestamp": "2026-01-04T22:00:00Z",
  "location": "Flood Doctor of McLean",
  "overallScore": 85,
  "directoriesChecked": 36,
  "directoriesFound": 28,
  "directoriesMissing": 8,
  "inconsistencies": [
    {
      "directory": "Yelp",
      "field": "phone",
      "expected": "+1-703-656-1001",
      "found": "+1-703-656-0000",
      "severity": "high",
      "fixUrl": "https://biz.yelp.com/..."
    }
  ],
  "duplicates": [
    {
      "directory": "Google",
      "listingUrl": "https://...",
      "status": "unverified duplicate"
    }
  ],
  "actionItems": [
    {
      "priority": 1,
      "action": "Update phone on Yelp",
      "url": "https://biz.yelp.com/..."
    },
    {
      "priority": 2,
      "action": "Claim listing on BBB",
      "url": "https://www.bbb.org/..."
    }
  ]
}
```

### Integration with Apify:

```javascript
// apify-citation-checker.js
const Apify = require('apify');

async function runCitationAudit(business) {
  const client = new Apify.ApifyClient({
    token: process.env.APIFY_TOKEN
  });

  const run = await client.actor('alizarin_refrigerator-owner/citation-checker-ai').call({
    businessName: business.name,
    address: business.address,
    phone: business.phone,
    website: business.website
  });

  const { items } = await client.dataset(run.defaultDatasetId).listItems();
  return items;
}
```

---

## COST COMPARISON SUMMARY

### Option A: YEXT (Status Quo Alternative)
| Item | Cost |
|------|------|
| YEXT Starter (13 locations) | $2,587/year |
| **Total Annual** | **$2,587 - $12,987** |

### Option B: BrightLocal Full Service
| Item | Cost |
|------|------|
| Platform (SEO Pro) | $948/year |
| Citation Building (one-time, amortized) | ~$500/year |
| **Total Annual** | **~$1,450** |

### Option C: DIY + Apify (Recommended)
| Item | Cost |
|------|------|
| Apify compute (monthly audits) | ~$120/year |
| Data Aggregator submissions (one-time, amortized) | ~$400/year |
| Google/Bing/Facebook APIs | Free |
| Yelp API (optional) | ~$100/year |
| Development time (one-time) | 20-40 hours |
| **Total Annual** | **~$500-700** |

### Option D: Hybrid (BrightLocal API + Custom Tool)
| Item | Cost |
|------|------|
| BrightLocal SEO Pro (for API access) | $948/year |
| API usage ($0.05 × 13 locations × 50 dirs × 12) | $390/year |
| Custom Mission Control integration | 20 hours dev |
| **Total Annual** | **~$1,340** |

---

## RECOMMENDED ACTION PLAN

### Immediate (This Week)
1. [ ] Sign up for Apify free tier
2. [ ] Test Citation Checker AI actor with one Flood Doctor location
3. [ ] Document all 13 locations' master NAP data

### Short-Term (Month 1)
1. [ ] Build NAP audit endpoint in Mission Control
2. [ ] Integrate Apify Citation Checker
3. [ ] Create master NAP database for all 13 locations
4. [ ] Run first full audit across all locations

### Medium-Term (Month 2)
1. [ ] Submit to all 5 data aggregators (one-time)
2. [ ] Claim/verify Google Business Profile for all 13 cities
3. [ ] Claim Bing Places, Apple Business Connect
4. [ ] Set up monthly automated audits

### Long-Term (Month 3+)
1. [ ] Add BrightLocal API for deeper directory coverage (optional)
2. [ ] Build inconsistency auto-detection alerts
3. [ ] Create client-facing NAP health dashboard
4. [ ] Expand to other SEO package clients

---

## SOURCES

### Pricing & Alternatives
- [BrightLocal vs Yext Comparison](https://www.brightlocal.com/yext-vs-brightlocal/)
- [42 Best Yext Alternatives](https://searchatlas.com/blog/yext-alternatives/)
- [Citation Services Compared](https://www.brightlocal.com/resources/citation-building-services-compared/)

### APIs & Tools
- [BrightLocal Local Directory API](https://www.brightlocal.com/local-directory-api/)
- [Apify Citation Checker AI](https://apify.com/alizarin_refrigerator-owner/citation-checker-ai)
- [Yelp Places API Pricing](https://docs.developer.yelp.com/docs/plans)
- [Google Places API Billing](https://developers.google.com/maps/documentation/places/web-service/usage-and-billing)

### Data Aggregators
- [Using Data Aggregators for Citations](https://www.brightlocal.com/learn/local-citations/building-citations/data-aggregators/)
- [US Local Search Ecosystem](https://whitespark.ca/local-search-ecosystem/)

### Water Damage Industry
- [Top Citations for Water Damage Restoration](https://waterdamageseo.net/citations-for-water-damage-restoration-companies/)

---

*Document created: January 4, 2026*
*For: Flood Doctor SEO Strategy*
