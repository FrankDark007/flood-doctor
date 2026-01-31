# Flood Doctor fd-google-redesign - Session State

**Last Updated:** 2026-01-31

---

## ✅ LATEST: Contract Page Deployed to /contract/ (2026-01-31)

### Status: Complete

### Commits Made
- `b2ae6ae` - Add /contract/ route for Work Authorization page

### What Was Done
- Added new route `/contract/` in App.tsx pointing to WorkAuthorization component
- Built production bundle
- Deployed via rsync/SSH to GoDaddy
- Cloudflare cache purged
- Verified live at: **https://flood.doctor/contract/**

Note: Contract also remains accessible at `/work-authorization/`

---

## ✅ PREVIOUS: Comprehensive Contract Updates (2026-01-31)

### Status: Complete

### Commits Made
- `82dbc53` - Separate combined contract sections
- `5363e7d` - Update Section 4.4
- `42c9f35` - Comprehensive contract updates
- `e4ab520` - Mobile table fixes

### What Was Done

#### 1. Section Accordion Separation
Fixed incorrectly combined accordion sections by separating them into individual sections:

| Combined | Separated Into |
|----------|----------------|
| Sections 0-1 | Section 0: Definitions + Section 1: Parties and Purpose |
| Sections 6-7 | Section 6: Safety & Site Conditions + Section 7: Client Responsibilities |
| Sections 11-12 | Section 11: Final Legal Protections + Section 12: Mechanic's Lien Rights |

Contract now has 14 individual accordion sections (0-13).

#### 2. Section 4.4 Complete Rewrite
**LABOR RATES, WORKFORCE, CUMULATIVE HOURS, AND DISPATCH LOGISTICS**

New comprehensive section covering:
- Standard labor rates per IICRC standards and Xactimate
- Cumulative billable hours calculation
- Cat 1/2/3 rate differentials
- Overtime thresholds (8hr/shift, 40hr/week)
- After-hours and emergency rate premiums
- Equipment technician rates
- Dispatch logistics (minimum 2 techs, minimum 2-hour dispatch, drive time billing)
- Premium rates for hazardous conditions, remote locations, heights, working hours

#### 3. Sections 4.5-4.13 Complete Rewrites

| Section | Title | Key Updates |
|---------|-------|-------------|
| 4.5 | PAYMENT OBLIGATIONS | Explicit rejection of insurer delay tactics |
| 4.6 | DIRECT PAYMENT ARRANGEMENTS | Insurance payment timing is Client's issue |
| 4.7 | INDEPENDENCE FROM INSURANCE | No preferred vendor/managed repair affiliation |
| 4.8 | XACTIMATE PRICING | Pricing may exceed Xactimate databases |
| 4.9 | EQUIPMENT RENTAL | Daily/weekly billing structure |
| 4.10 | EQUIPMENT MONITORING | Moisture readings, inventory, documentation |
| 4.11 | INSURANCE CLAIM DOCUMENTATION | Professional services if requested |
| 4.12 | ADDITIONAL SERVICES | Change order process |
| 4.13 | PROFESSIONAL STANDARDS | IICRC S500/S520 methodology |

#### 4. Section 12.1 Header Fix
Changed "12.1 - NOTICE TO CLIENT" to "12.1 - NOTICE TO CLIENT:" (added colon)

#### 5. Attachment A Complete Overhaul

**New Structure:**
- **DISCLAIMER** - Pricing is approximate estimates only
- **NOTICE** - Final invoice based on actual site conditions
- **LABOR RATES** - References IICRC standards, Category-based pricing
- **CLIENT ACKNOWLEDGMENT** - Checkbox for understanding price variability

**Replaced Dynamic Price List with Static Tables:**
- Labor Rate Categories table (Cat 1/2/3, Business/After/Emergency)
- Equipment Rental table (daily rates)
- Equipment Services table (setup, monitoring, decon)
- Air Filters table (sizes and replacement costs)
- Water Extraction table (Cat 1/2/3 rates per SF)
- Demolition table (per SF/LF rates)
- Cabinets & Fixtures table (sink, vanity, toilet, etc.)
- PPE & Containment table (per day/SF rates)
- Cleaning & Treatment table (antimicrobial, deodorizer, etc.)
- Content & Packing table (per box/hour rates)
- Documentation & Testing table (thermal imaging, 3D scan, sketch, inspection)
- Debris Removal table (dumpster sizes, haul fees)

#### 6. Mobile Table Responsiveness
All Attachment A tables now mobile-optimized:
- `overflow-x-auto` wrapper with `-mx-2 pb-2` for edge-to-edge scroll
- `min-w-[540px]` on tables to prevent column crushing
- `whitespace-nowrap` on headers
- Visual scroll indicator on mobile

---

## ✅ PREVIOUS: Section 10 (O&P) Restructuring (2026-01-30)

### Status: Complete

### What Was Done

#### Section Renumbering
Created new standalone Section 10 for Overhead and Profit (O&P), with full restructuring:

| Old Section | New Section | Title |
|-------------|-------------|-------|
| 9.12 (removed) | **NEW Section 10** | Overhead and Profit (15% / 20%) |
| 10.x | 11.x | Final Legal Protections |
| 11.x | 12.x | Mechanic's Lien Rights |
| 12.x | 13.x | Insurance Dispute Protection Addendum |

#### New Section 10 - OVERHEAD AND PROFIT
Comprehensive 9-paragraph standalone section covering:
- Insurance companies cannot reduce/deny O&P
- Provider not bound by insurer internal policies
- No affiliation with managed repair programs
- O&P embedded in service pricing
- Invoices are statements of amounts due (not negotiable bids)
- O&P structure set at contract formation
- 15% overhead / 20% profit for subcontracted work
- Provider is independent licensed contractor
- No comparison to in-network pricing allowed

---

## ✅ Contract Legal Language Fixes (2026-01-30)

### Status: Complete

### What Was Done

#### 1. First Person → Third Person
Changed all first-person references ("I") to third-person ("The Client") throughout the contract for legal uniformity.

#### 2. "Including" → "Including but not limited to"
Added "but not limited to" to 16 instances of "including" for legal completeness.

#### 3. Major Section Rewrites
- **Section 5.2** - NO REQUIREMENT TO WORK WITH THIRD-PARTY ADJUSTERS (expanded to 5 subsections)
- **Section 5.3** - SCOPE OF WORK AND INSURANCE ADJUSTER INTERFERENCE (complete rewrite)
- **Section 13.4** - WATER LOSS CLASSIFICATION AUTHORITY (complete rewrite)

---

## Next Steps (When Resuming)

1. Add Xactimate codes for items missing codes (72 items identified)
2. Review contract in browser to ensure all text displays correctly
3. Connect Emergency flow: RequestService → WorkAuthorization with pre-filled data
4. Update Cloudflare Worker to handle `type: 'work-authorization'` submissions
5. Generate and email PDF of signed contract
6. Add audit trail / document ID for legal compliance

---

## Production Info

- **Live URL:** https://flood.doctor
- **Hosting:** GoDaddy (132.148.253.156)
- **CDN:** Cloudflare
- **Deploy:** `./scripts/deploy.sh <password>`

---

*Updated: 2026-01-31 (Contract Page Deployed to /contract/)*
