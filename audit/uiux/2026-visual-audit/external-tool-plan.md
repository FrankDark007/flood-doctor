# External Tool Upload Pack — Flood Doctor Visual UI/UX Audit
Generated: 2026-02-22

---

## A) Neurons AI Upload Pack

Upload the **desktop fold screenshot** for each page. Set the primary goal and CTA for each.

| # | Page Name | URL | Primary Goal | Primary CTA | Screenshot to Upload |
|---|-----------|-----|--------------|-------------|---------------------|
| 1 | Homepage | https://flood.doctor/ | Lead conversion (emergency call/request) | "Request Service" | `home/desktop-fold.png` |
| 2 | Water Damage Restoration | https://flood.doctor/services/residential/restoration-services/water-damage-restoration/ | Service inquiry | "Request Service" | `water-damage-restoration/desktop-fold.png` |
| 3 | Mold Remediation | https://flood.doctor/services/residential/cleanup-services/mold-remediation/ | Service inquiry | "Request Service" | `mold-remediation/desktop-fold.png` |
| 4 | Basement Flooding | https://flood.doctor/services/residential/specialty-services/basement-flooding/ | Service inquiry | "Request Service" | `basement-flooding/desktop-fold.png` |
| 5 | Burst Pipe Cleanup | https://flood.doctor/services/residential/restoration-services/burst-pipe-cleanup/ | Emergency conversion | "Request Service" | `burst-pipe-cleanup/desktop-fold.png` |
| 6 | Cost Calculator | https://flood.doctor/resources/cost-calculator/ | Tool engagement → lead | "Request Service" | `cost-calculator/desktop-fold.png` |

**Neurons AI Settings:**
- Analysis type: "Attention & Engagement Prediction"
- Focus areas: CTA button visibility, trust signals (badges/reviews), phone number prominence
- Compare: Homepage vs. Service pages for CTA consistency

---

## B) Attention Insight Upload Pack

Upload both desktop and mobile fold screenshots per page. Mark measurement targets.

### Desktop Fold Screenshots (1440×900)

| Page | Screenshot | Measure |
|------|-----------|---------|
| Homepage | `home/desktop-fold.png` | CTA button attention %, trust badge visibility, phone number salience |
| Water Damage | `water-damage-restoration/desktop-fold.png` | Hero CTA %, process tile engagement, phone number |
| Mold Remediation | `mold-remediation/desktop-fold.png` | Hero CTA %, urgency messaging attention |
| Basement Flooding | `basement-flooding/desktop-fold.png` | Hero CTA %, emergency messaging attention |
| Burst Pipe | `burst-pipe-cleanup/desktop-fold.png` | Hero CTA %, emergency urgency messaging |
| Cost Calculator | `cost-calculator/desktop-fold.png` | Calculator engagement %, CTA visibility below calculator |

### Mobile Fold Screenshots (390×844)

| Page | Screenshot | Measure |
|------|-----------|---------|
| Homepage | `home/mobile-fold.png` | Sticky CTA bar attention %, above-fold information hierarchy |
| Water Damage | `water-damage-restoration/mobile-fold.png` | Mobile CTA %, hero readability |
| Mold Remediation | `mold-remediation/mobile-fold.png` | Mobile CTA %, hero readability |
| Basement Flooding | `basement-flooding/mobile-fold.png` | Mobile CTA %, hero readability |
| Burst Pipe | `burst-pipe-cleanup/mobile-fold.png` | Mobile CTA %, emergency messaging |
| Cost Calculator | `cost-calculator/mobile-fold.png` | Calculator inputs visibility, CTA position |

**Key Questions for Attention Insight:**
1. Does the primary CTA receive >15% attention share above the fold?
2. Is the phone number visible in the first 3 seconds of predicted scan path?
3. Are trust signals (IICRC badge, Google reviews, response time) above the attention threshold?
4. Is there visual competition between hero images and CTAs?

---

## C) Maze Unmoderated Test Plan

### Test Configuration
- **Participants:** 15-20 homeowners, age 30-65, Northern VA area preferred
- **Device split:** 60% mobile, 40% desktop
- **Screening question:** "Have you ever experienced water damage or flooding in your home?"

### 5 Tasks (with success criteria)

**Task 1: Emergency Contact (Critical Path)**
- Prompt: "Your basement is flooding right now. Find the fastest way to contact Flood Doctor for emergency help."
- Success: User finds phone number OR clicks emergency CTA within 30 seconds
- Start page: Homepage
- Measure: Time to action, path taken, misclicks

**Task 2: Cost Estimation**
- Prompt: "You discovered water damage in your kitchen. Find out approximately how much professional restoration would cost."
- Success: User reaches cost calculator and interacts with at least 2 inputs
- Start page: Homepage
- Measure: Time to calculator, completion rate, drop-off point

**Task 3: Service Understanding**
- Prompt: "You suspect mold in your bathroom after a leak. Find what services Flood Doctor offers for mold and what the process involves."
- Success: User reaches mold remediation page and scrolls past the process section
- Start page: Homepage
- Measure: Navigation path, time to find service, content engagement depth

**Task 4: Trust Verification**
- Prompt: "Before hiring a restoration company, you want to verify they are certified and have good reviews. Find this information."
- Success: User locates IICRC certification info OR Google reviews section
- Start page: Homepage
- Measure: Where users look first, time to find trust signals

**Task 5: Insurance Claim Help**
- Prompt: "Your insurance company needs documentation for your water damage claim. Find Flood Doctor's resources for insurance claims."
- Success: User reaches insurance guide or claims resource page
- Start page: Homepage
- Measure: Navigation path, discovery rate for resource section

### 5 Multiple-Choice Follow-Up Questions

**Q1: First Impression**
"Based on what you saw, how would you describe Flood Doctor?"
- A) Professional and trustworthy
- B) Generic/templated
- C) Hard to navigate
- D) Clear and helpful

**Q2: Emergency Confidence**
"If your home flooded right now, would you feel confident contacting Flood Doctor?"
- A) Yes, I know exactly how to reach them
- B) Probably, but I'd need to look around more
- C) No, it wasn't clear enough
- D) I'd search for another company first

**Q3: Cost Transparency**
"How would you rate the clarity of pricing/cost information?"
- A) Very clear — I understand what to expect
- B) Somewhat clear — I have a general idea
- C) Unclear — I still don't know what it would cost
- D) I couldn't find any pricing information

**Q4: Service Differentiation**
"What makes Flood Doctor different from other restoration companies based on this website?"
- A) Certifications and expertise
- B) Fast response time
- C) Nothing stood out as unique
- D) Local Northern VA focus

**Q5: Mobile Experience**
"How easy was it to navigate the website on your device?"
- A) Very easy — everything was accessible
- B) Mostly easy — minor issues
- C) Somewhat difficult — had to zoom or scroll a lot
- D) Very difficult — I struggled to find things

---

## Notes for Test Execution

### Neurons AI
1. Upload desktop fold PNGs one at a time
2. Use "Website" content type
3. Enable "Attention" + "Clarity" + "Engagement" scores
4. Export results as PDF for comparison

### Attention Insight
1. Create project "Flood Doctor Visual Audit 2026"
2. Upload paired desktop/mobile for each page
3. Generate heatmaps + focus maps
4. Export overlaid heatmaps for the must-upgrade report

### Maze
1. Create unmoderated study
2. Set up task flows with the above prompts
3. Add multiple-choice questions after tasks
4. Set recruitment criteria (homeowners, 30-65, VA/DC area)
5. Run for 48-72 hours to collect sufficient responses
