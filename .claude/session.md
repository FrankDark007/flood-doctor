# Flood Doctor fd-google-redesign - Session State

**Last Updated:** 2026-01-30

---

## ✅ LATEST: Section 10 (O&P) Restructuring (2026-01-30)

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
Changed all first-person references ("I") to third-person ("The Client") throughout the contract for legal uniformity:

#### Sections Updated
- **Section 2.2 (AUTHORIZATION):** "I, the Client/Agent" → "The Client/Agent authorizes..."
- **Section 3.5 (MOLD SERVICES LIMITATION):** "I understand" / "I agree" → "The Client understands" / "The Client agrees"
- **Section 4.1-4.3 (PRICING):** All "I understand/acknowledge/agree" → "The Client understands/acknowledges/agrees"
- **Section 4.5 (PAYMENT OBLIGATIONS):** "I agree" → "The Client agrees"
- **Section 4.7 (INDEPENDENCE):** "I am aware" / "I acknowledge" → "The Client is aware" / "The Client acknowledges"
- **Section 4.10 (INSURANCE):** "my insurance provider" → "the Client's insurance provider"
- **Section 5 closing:** "I acknowledge that I have been..." → "the Client acknowledges that they have been..."
- **Section 6.1-6.2 (SAFETY):** "I agree" / "I understand" → "The Client agrees" / "The Client understands"
- **Section 7.5 (CONTAMINANTS):** "I understand" → "The Client understands"
- **Section 11.1 (INSURANCE ASSIGNMENT):** "I hereby authorize my insurance" → "The Client hereby authorizes their insurance"
- **Signature checkbox:** "I have read and understand" → "The Client has read and understands"

#### 2. "Including" → "Including but not limited to"
Added "but not limited to" to 16 instances of "including" for legal completeness:

| Section | Fixed Text |
|---------|------------|
| 0.4 | "including but not limited to water extraction, drying, and containment" |
| 0.9 | "including but not limited to after-hours or weekend work" |
| 0.17 | "including but not limited to the S500 Standard..." |
| 3.3 | "including but not limited to the IICRC S500 Standard..." |
| 4.13 | "including but not limited to IICRC S500 methodologies" |
| 5.2(a) | "including but not limited to those retained by the Client..." |
| 5.2(c) | "including but not limited to administrative fees" |
| 8.2 | "including but not limited to reasonable attorney's fees" |
| 8.3(a) | "including but not limited to the operation of equipment..." |
| 8.3(b) | "including but not limited to plants, shrubs, or trees..." |
| 8.7 | "including but not limited to coordinating with insurance..." |
| 9.17 | "including but not limited to attorneys' fees" |
| 11.8 | "including but not limited to counterclaims" |
| 11.9(b) | "including but not limited to those signed electronically" |
| 13.2 | "including but not limited to photos, drying logs..." |
| Signature | "including but not limited to all sections and attachments" |

#### 3. Major Section Rewrites

**Section 5.2 - NO REQUIREMENT TO WORK WITH THIRD-PARTY ADJUSTERS**
Expanded from 4 subsections (a-d) to 5 subsections (a-e):
- **(a) Independence from Third-Party Adjusters:** Added "coordinate with, respond to" + blocks implied obligations from "industry custom, prior dealings, course of performance, or insurer expectation"
- **(b) Client Responsibility for Insurance Coordination:** Explicitly excludes "claim administration, claim coordination, insurer-directed scope revisions" + "no duty to advocate"
- **(c) Adjuster Requests and Documentation:** Comprehensive list of request types and billable items including "professional review fees"
- **(d) No Authority Over Work or Safety:** NEW - Blocks adjusters from directing "means, methods, sequencing, safety protocols, protective measures, or scope"
- **(e) Exclusion from Claims and Payment Independence:** Payment obligations "independent of insurance company conduct, determinations, approvals, or payment timing"

**Section 5.3 - SCOPE OF WORK AND INSURANCE ADJUSTER INTERFERENCE**
Complete rewrite with 4 paragraphs:
- Scope determined by "firsthand inspection and field documentation"
- Scope based on "moisture conditions, material involvement, environmental constraints, health and safety considerations"
- "Not dictated by theoretical assumptions or generalized loss models"
- Expanded non-conformity list: "delay, resequence, methods, duration, equipment utilization, labor allocation"
- Blocks adjusters from conditioning scope on "insurance coverage determinations or reimbursement expectations"
- Strong closing: "Insurance proceeds, if any, are a matter between the Client and the insurance carrier"

**Section 13.4 - WATER LOSS CLASSIFICATION AUTHORITY**
Complete rewrite with 4 paragraphs:
- Classification based on "firsthand site inspection and contemporaneous field documentation"
- Includes Category AND Class determination
- Lists all classification indicators: odor, discoloration, degradation, microbial growth, exposure time, migration pathways, porous materials
- Lists operational factors: layout, building materials, contents, airflow, HVAC, temperature, humidity, accessibility
- "Does not require laboratory testing" when field indicators support classification
- "Conservative protective measures when conditions are uncertain"
- "Not superseded by remote assessments, desk reviews, or assumptions"

### Next Steps (When Resuming)

1. Add Xactimate codes for items missing codes (72 items identified)
2. Review contract in browser to ensure all text displays correctly
3. Connect Emergency flow: RequestService → WorkAuthorization with pre-filled data
4. Update Cloudflare Worker to handle `type: 'work-authorization'` submissions
5. Generate and email PDF of signed contract
6. Add audit trail / document ID for legal compliance

---

## ✅ PREVIOUS: Work Authorization Contract - Major Updates (2026-01-29)

### Status: Complete - Contract text and price list fully updated

### What Was Done

#### Contract Text Updates
- Applied (a), (b), (c), (d) formatting to all sub-subsections (5.2, 5.4, 7.8, 8.3, 8.5, 10.9)
- Added **9.19 - ADVERTISING AND MARKETING DISCLAIMER** (third-party marketing protection)
- Updated **9.12 - OVERHEAD AND PROFIT** from 15%/15% to 15%/20%
- Changed Section 5.2(b) "will not negotiate" → "is not obligated to"
- Made sub-section headers `font-semibold` (heavier than paragraph text)

#### New Definitions Added (Section 0)
- 0.16 "Work" / "Services"
- 0.17 "IICRC"
- 0.18 "Xactimate"
- 0.19 "Attachment A"

#### Price List - Complete Overhaul
Merged two price lists into comprehensive categorized list with 12 categories:

| Category | Items |
|----------|-------|
| Labor & Supervision | 14 |
| Equipment Rental | 7 |
| Equipment Services | 6 |
| Filters | 4 |
| Water Extraction | 11 |
| Demolition | 15 |
| Cabinets & Fixtures | 18 |
| PPE & Containment | 10 |
| Cleaning & Treatment | 9 |
| Content & Packing | 7 |
| Documentation & Testing | 5 |
| Debris Removal | 7 |

**Key additions:**
- Full Labor & Supervision section with Category 1/2/3 rates
- Category-based water extraction pricing
- 3D Matterport Scan
- Daily monitoring visits
- UI now groups items by category with blue headers

**Items removed:**
- Air Mover – High Output / Specialty
- Dehumidifier – XL
- Specialty Drying Accessories
- Condensate Management / Discharge Servicing
- Equipment Delivery and Setup
- PPE Bundle (per tech per day)
- Add for PPE (Hazardous Cleanup)

**Price updates:**
- Equipment Setup – Business Hours: $128
- Equipment Setup – After Hours: $165
- Daily Monitoring – Business Hours: $145/hour
- Daily Monitoring – After Hours: $175/hour
- Equipment Decontamination – Standard: $65
- Equipment Decontamination – Heavy: $125

#### Attachment A UI Updates
- Removed "Only skilled and industry certified technicians work for our company"
- Updated overtime sentence for clarity (40hrs/week or 8hrs/shift)
- Made Labor Rates table more compact (smaller text, abbreviated headers)
- Removed tonnage from dumpster names (just yard size now)

### Preview URL

http://localhost:3003/work-authorization/

### Next Steps (When Resuming)

1. Review contract in browser to ensure all text displays correctly
2. Connect Emergency flow: RequestService → WorkAuthorization with pre-filled data
3. Update Cloudflare Worker to handle `type: 'work-authorization'` submissions
4. Generate and email PDF of signed contract
5. Add audit trail / document ID for legal compliance

---

## ✅ PREVIOUS: Work Authorization Contract - Initial Build (2026-01-28)

### Status: Complete

- Built mobile-optimized accordion-style service contract
- Restored ALL verbatim contract language
- 11 accordion sections with checkbox acknowledgments
- Searchable price list
- Signature pad (draw or type)
- Progress indicator and form validation

---

## ✅ PREVIOUS: Form Submission System (Cloudflare Worker + Resend)

### Status: Complete - Working in Production

- Worker URL: `https://flood-doctor-forms.bluemedia-account.workers.dev`
- From: `noreply@mail.flood.doctor`
- To: `help@flood.doctor`

---

## Production Info

- **Live URL:** https://flood.doctor
- **Hosting:** GoDaddy (132.148.253.156)
- **CDN:** Cloudflare
- **Deploy:** `./scripts/deploy.sh <password>`

---

*Updated: 2026-01-30 (Section 10 O&P Restructuring + Contract Legal Language Fixes)*
