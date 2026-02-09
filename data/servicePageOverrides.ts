/**
 * Service Page Overrides
 *
 * Page-specific content overrides for service detail pages.
 * Keyed by service slug (last segment of URL path).
 *
 * These overrides are merged with defaults in adapters.ts
 * Override wins over default for any specified field.
 */

import type { Badge, QuickFact, ProblemSolution, TabItem, Testimonial, PricingItem } from '../generated-layouts/service-page/types';

export interface ServicePageOverride {
  slug: string;

  // Hero overrides
  title?: string;
  subtitle?: string;
  badges?: Badge[];

  // Quick facts overrides
  quickFacts?: QuickFact[];

  // Problem/Solution overrides
  problemSolution?: ProblemSolution;

  // Tabs overrides (can override individual tabs by id)
  tabs?: Partial<TabItem>[];

  // Testimonials overrides
  testimonials?: Testimonial[];

  // Pricing overrides
  pricing?: Partial<PricingItem>;
}

// ===================== TAB CONTENT FOR ALL 29 SERVICES =====================

// =============================================================================
// RESIDENTIAL SERVICES (14)
// =============================================================================

// --- Water Damage Restoration ---
const waterDamageRestorationTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Advanced Water Extraction & Monitoring Systems',
    description: 'Our thermal imaging cameras detect hidden moisture in walls, ceilings, and subfloors that visual inspections miss. Industrial-grade truck-mounted extractors remove thousands of gallons per hour, while commercial dehumidifiers and air movers create optimal drying conditions. Real-time moisture meters track progress until structures reach industry-standard dry readings.',
    listItems: [
      'FLIR thermal imaging for hidden moisture detection behind walls and under floors',
      'Truck-mounted extraction units removing up to 3,000 gallons per hour',
      'LGR dehumidifiers creating negative air pressure for faster structural drying',
      'Continuous moisture monitoring with digital hygrometers and psychrometric charts'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Streamlined Water Damage Claims Support',
    description: 'We document every inch of water damage with photos, moisture readings, and detailed loss inventories for your adjuster. Our team communicates directly with your insurance company to expedite approval and prevent claim denials. You pay only your deductible while we handle the paperwork, follow-ups, and supplement negotiations.',
    listItems: [
      'Complete documentation package with photos, moisture maps, and equipment logs',
      'Direct billing to all major insurance carriers including USAA, State Farm, and Allstate',
      'Experienced in writing supplements for hidden damage discovered during restoration',
      'Free claim assistance even if insurance denies coverage for emergency services'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'IICRC Water Restoration Technicians',
    description: 'Every technician holds IICRC Water Restoration Technician (WRT) certification and completes annual continuing education. Our crew chiefs average 8+ years of experience handling Category 1, 2, and 3 water losses. Background checks and drug screening ensure trustworthy professionals enter your home during vulnerable moments.',
    listItems: [
      'IICRC WRT and Applied Structural Drying (ASD) certified technicians on every job',
      'Ongoing training in the latest ANSI/IICRC S500 water damage standards',
      'Lead technicians with certifications in microbial remediation and contents restoration',
      'Fully insured teams with comprehensive background checks and safety training'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Dry Structure Guarantee',
    description: 'We guarantee affected materials reach IICRC S500 drying standards or we continue drying at no additional cost. If mold appears within 30 days due to incomplete drying, we remediate it free of charge. Our work comes with a written warranty covering both workmanship and moisture-related issues.',
    listItems: [
      'Structures dried to industry-standard moisture content or continued drying is free',
      '30-day mold-free guarantee if growth occurs due to inadequate drying',
      'Written warranty on all reconstruction work performed after water extraction',
      'Free follow-up moisture inspections at 48 hours and 7 days post-mitigation'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Emergency Water Extraction Within 60 Minutes',
    description: 'Water spreads rapidly—every minute increases damage and restoration costs. Our Northern Virginia crews are strategically positioned to arrive within 60 minutes of your call, 24/7/365. We begin extracting standing water immediately while others are still scheduling appointments.',
    listItems: [
      'Live dispatcher answers calls immediately—no answering service delays',
      'Truck-mounted equipment pre-loaded for immediate deployment to your property',
      'Crews dispatched within 15 minutes of call for water emergencies',
      '60-minute average arrival time across all Northern Virginia service areas'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Water Damage Specialists',
    description: 'We understand the unique challenges of Northern Virginia homes—from basement flooding in Fairfax County to pipe bursts during Arlington winters. Our local warehouse stocks equipment sized for townhomes to estates. We know which jurisdictions require permits for structural drying and maintain relationships with local building inspectors.',
    listItems: [
      'Experience with Northern Virginia construction including crawl spaces and slab foundations',
      'Knowledge of local water table issues affecting Alexandria, Falls Church, and Arlington',
      'Relationships with area plumbers, electricians, and contractors for coordinated repairs',
      'Equipment staged locally for rapid response to McLean, Vienna, and Tysons Corner'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Category Water Assessment & Contamination Control',
    description: 'We classify water as Category 1 (clean), 2 (gray), or 3 (black) before starting extraction to determine proper safety protocols. Contaminated water requires PPE, antimicrobial treatments, and specialized disposal methods. Our team follows OSHA and EPA guidelines to protect your family from waterborne pathogens and chemical exposure.',
    listItems: [
      'Immediate assessment of water category and contamination risk before work begins',
      'Full PPE for Category 2 and 3 water including respirators and protective suits',
      'EPA-registered antimicrobial application on all Category 2 and 3 affected surfaces',
      'Power shutoff protocols and electrical safety verification before water extraction'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Thousands of Successful Water Restorations',
    description: 'We have restored over 3,000 Northern Virginia properties from water damage in the past five years. Our average drying time is 3-5 days compared to the industry average of 7-10 days. Customer satisfaction scores consistently exceed 4.8/5.0, with 94% of clients reporting complete satisfaction with results.',
    listItems: [
      '3,000+ successful water damage restorations across Northern Virginia since 2019',
      'Average structural drying completion in 3-5 days using advanced equipment',
      '94% customer satisfaction rate verified through independent post-job surveys',
      'Zero insurance claim denials due to improper documentation or procedural errors'
    ],
    icon: 'BarChart3',
  },
];

// --- Fire & Smoke Cleanup ---
const fireSmokeCleanupTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Industrial Smoke & Soot Removal Systems',
    description: 'Hydroxyl generators and ozone machines neutralize smoke odor molecules at the molecular level, not just masking them with fragrances. HEPA air scrubbers capture microscopic soot particles suspended in air, preventing recontamination during cleanup. Thermal fogging penetrates porous materials like drywall and insulation to eliminate embedded smoke odors permanently.',
    listItems: [
      'Hydroxyl generators safely remove smoke odor while property remains occupied',
      'Industrial HEPA air scrubbers filtering 99.97% of airborne soot particles',
      'Thermal fogging technology penetrating walls, ducts, and cavities for complete odor removal',
      'Ultrasonic cleaning tanks restoring smoke-damaged contents and personal belongings'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Fire Damage Insurance Advocacy',
    description: 'Fire damage claims are complex, often involving structure, contents, and additional living expenses. We prepare comprehensive loss inventories with replacement cost estimates to maximize your settlement. Our public adjuster relationships help negotiate fair payouts when carriers undervalue smoke damage or attempt to depreciate restorable items.',
    listItems: [
      'Detailed contents inventory with photos and replacement cost documentation',
      'Coordination with fire department reports and cause-of-loss investigations',
      'Experience with additional living expense (ALE) claims for temporary housing',
      'Supplement writing for hidden smoke damage in HVAC systems and wall cavities'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Fire & Smoke Restoration Certified Professionals',
    description: 'Our technicians hold IICRC Fire & Smoke Restoration Technician (FSRT) certification, specializing in soot chemistry and cleaning methodologies. Advanced training in contents pack-out, textile restoration, and odor control ensures nothing salvageable is unnecessarily discarded. Each crew member completes hazardous materials training for safe handling of fire-damaged structures.',
    listItems: [
      'IICRC Fire & Smoke Restoration Technician (FSRT) certification on all crew leads',
      'Advanced training in protein, natural, synthetic, and petroleum-based soot removal',
      'Certified Contents Technicians (CCT) for pack-out and off-site restoration',
      'OSHA 30-hour construction safety and hazardous materials handling certification'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Odor-Free Restoration Guarantee',
    description: 'We guarantee complete smoke odor elimination or we continue treatment at no additional charge. If smoke smell returns within 60 days, we re-treat affected areas using alternative deodorization methods. Restored surfaces are guaranteed free from soot residue that could stain or recontaminate after cleaning.',
    listItems: [
      'Complete smoke odor removal or continued deodorization at our expense',
      '60-day odor-free warranty with free re-treatment if smell returns',
      'Guaranteed soot-free surfaces verified with white cloth wipe tests',
      'Written warranty on all cleaned and restored structural surfaces and contents'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Immediate Post-Fire Stabilization',
    description: 'The first 48 hours after a fire are critical—acidic soot continues etching glass, corroding metal, and discoloring surfaces. Our emergency response includes immediate board-up, tarp installation, and soot sealing to stop ongoing damage. We secure your property against weather, theft, and further deterioration while you focus on your family.',
    listItems: [
      'Emergency board-up and roof tarping within 2 hours of fire department clearance',
      'Immediate soot sealing on surfaces to prevent permanent etching and staining',
      'Contents pack-out within 24 hours to prevent ongoing smoke damage',
      'Utility coordination for safe power restoration and temporary heating/cooling'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Fire Restoration Experts',
    description: 'We work closely with Fairfax County, Arlington County, and Alexandria fire marshals to coordinate restoration timelines and inspection requirements. Our local contents restoration facility in Northern Virginia allows family heirlooms and important documents to be restored nearby, not shipped out of state. We understand Virginia building codes for fire-damaged structural repairs.',
    listItems: [
      'Established relationships with local fire departments for coordinated site access',
      'Northern Virginia contents restoration facility for local processing and storage',
      'Knowledge of Virginia fire code requirements for structural repairs and inspections',
      'Partnerships with local contractors specializing in fire reconstruction permits'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Hazardous Materials & Structural Safety',
    description: 'Fire-damaged structures may contain asbestos, lead paint, and carcinogenic soot requiring specialized handling. We conduct air quality testing before work begins and use full respiratory protection in contaminated areas. Structural engineers assess compromised load-bearing elements before our teams enter damaged areas, prioritizing worker and occupant safety.',
    listItems: [
      'Pre-restoration air quality testing for asbestos, lead, and combustion byproducts',
      'Full respiratory protection and Tyvek suits in all fire-damaged environments',
      'Structural engineering assessments before entering compromised buildings',
      'Hazardous waste disposal following EPA and Virginia DEQ regulations'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Successful Fire Damage Restorations',
    description: 'We have restored over 500 fire-damaged properties in Northern Virginia, from small kitchen fires to total losses requiring full reconstruction. Our contents restoration success rate exceeds 85%—most items insurance companies label "total loss" can be saved. Average customer satisfaction on fire jobs is 4.9/5.0, reflecting our compassionate approach during difficult times.',
    listItems: [
      '500+ fire damage restorations completed across Northern Virginia',
      '85% contents salvage rate on items initially deemed non-restorable',
      '4.9/5.0 customer satisfaction score on fire restoration projects',
      '100% structural safety record with zero collapse or injury incidents'
    ],
    icon: 'BarChart3',
  },
];

// --- Mold Remediation ---
const moldRemediationTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Advanced Mold Detection & Containment Technology',
    description: 'Infrared moisture scanning identifies hidden mold growth behind walls and above ceilings before it spreads. HEPA-filtered negative air machines create containment zones preventing spore migration to clean areas during removal. Air sampling and surface testing with third-party lab analysis confirms successful remediation and safe occupancy.',
    listItems: [
      'Infrared thermal imaging revealing hidden moisture sources feeding mold growth',
      'HEPA-filtered negative air machines maintaining containment during remediation',
      'Third-party air quality testing pre and post-remediation for verified clearance',
      'Borescope inspection cameras accessing wall cavities and tight spaces non-invasively'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Mold Insurance Claim Navigation',
    description: 'Most insurance policies exclude gradual mold but cover sudden water damage and resulting mold growth. We document the initial water event linking it to current mold conditions to establish coverage. Our detailed mold protocols and third-party testing satisfy insurance requirements for claim approval and prevent disputes over scope.',
    listItems: [
      'Documentation establishing covered water event as mold source for claim approval',
      'Third-party mold testing reports meeting insurance carrier standards',
      'Detailed remediation protocols following IICRC S520 standards insurers require',
      'Experience with mold exclusion policies and limited coverage negotiation strategies'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Certified Microbial Remediation Specialists',
    description: 'Our remediation technicians hold IICRC Applied Microbial Remediation Technician (AMRT) certification, the industry gold standard for mold removal. Virginia-licensed mold inspectors conduct independent assessments and clearance testing. Every team member completes annual training on evolving mold science, building materials, and containment strategies.',
    listItems: [
      'IICRC Applied Microbial Remediation Technician (AMRT) certified specialists',
      'Virginia Department of Professional and Occupational Regulation licensed mold inspectors',
      'Annual continuing education in mycology and building science',
      'Hazardous materials and respiratory protection training for all field staff'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Mold-Free Clearance Guarantee',
    description: 'We guarantee post-remediation air quality testing shows mold spore counts at or below outdoor ambient levels. If follow-up testing reveals elevated levels, we re-remediate affected areas and retest until clearance is achieved at our cost. Our warranty covers mold recurrence for 12 months when moisture issues are properly addressed.',
    listItems: [
      'Guaranteed clearance testing showing spore counts meeting IICRC S520 standards',
      'Free re-remediation and retesting if initial clearance testing fails',
      '12-month mold recurrence warranty when moisture sources are eliminated',
      'Written documentation and lab reports suitable for real estate transactions'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Urgent Mold Containment Response',
    description: 'Active mold releases thousands of spores into the air every hour, spreading to unaffected areas and causing health symptoms. Our emergency response includes immediate containment setup within 4 hours to stop cross-contamination. We stabilize affected areas with negative air pressure and HEPA filtration while developing a comprehensive remediation plan.',
    listItems: [
      'Emergency containment setup within 4 hours for active mold growth',
      'Immediate HEPA air scrubbing to reduce airborne spore concentrations',
      'Same-day mold inspection and moisture assessment for urgent situations',
      'Temporary containment barriers preventing spore migration during planning phase'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Mold & Moisture Experts',
    description: 'Northern Virginia\'s humid climate and older housing stock create ideal mold conditions—we understand the regional challenges. Our experience with local construction styles helps identify common problem areas like crawl spaces, basement foundations, and HVAC systems. We maintain relationships with local indoor air quality consultants and industrial hygienists for complex cases.',
    listItems: [
      'Expertise with Northern Virginia climate-related mold issues and seasonal patterns',
      'Knowledge of local construction styles from historic homes to modern townhomes',
      'Partnerships with regional industrial hygienists for medical or litigation cases',
      'Understanding of local building codes for mold remediation and ventilation upgrades'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Health-First Mold Remediation Protocols',
    description: 'Mold exposure can trigger allergic reactions, asthma attacks, and respiratory infections—occupant safety is our priority. Full containment with sealed polyethylene barriers and negative air pressure prevents spore spread to occupied areas. Our technicians wear full PPE including respirators, and we coordinate with physicians when occupants have mold sensitivities.',
    listItems: [
      'Complete containment with 6-mil polyethylene barriers and HEPA-filtered negative air',
      'Full respiratory protection with P100 filters or supplied air for all technicians',
      'Medical-grade HEPA vacuuming preventing spore release during material removal',
      'Occupant evacuation recommendations for immunocompromised or sensitive individuals'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Verified Mold Remediation Success',
    description: 'Over 1,200 successful mold remediation projects completed in Northern Virginia with 100% clearance testing pass rate. Our moisture control recommendations result in less than 2% mold recurrence, compared to industry average of 15%. Customer satisfaction scores of 4.8/5.0 reflect our transparent communication and thorough documentation throughout the process.',
    listItems: [
      '1,200+ mold remediation projects with 100% post-remediation clearance rate',
      'Less than 2% mold recurrence when moisture control recommendations are followed',
      '4.8/5.0 customer satisfaction score on mold remediation services',
      'Average project completion in 3-7 days from containment to clearance testing'
    ],
    icon: 'BarChart3',
  },
];

// --- Sewage Cleanup ---
const sewageCleanupTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Biohazard-Grade Sewage Extraction Systems',
    description: 'Specialized sewage pumps with grinder attachments handle solid waste and debris that standard extractors cannot process. Truck-mounted waste tanks transport contaminated water for proper disposal at licensed treatment facilities, not storm drains. ATP testing verifies surface cleanliness at the microbial level after disinfection, ensuring no pathogen residue remains.',
    listItems: [
      'Commercial sewage pumps with grinder attachments for solid waste extraction',
      'Truck-mounted waste tanks for legal disposal at licensed sewage treatment facilities',
      'Hospital-grade foggers applying EPA-registered disinfectants to all affected surfaces',
      'ATP bioluminescence testing confirming microbial cleanliness post-sanitization'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Sewage Backup Insurance Claims',
    description: 'Standard homeowner policies often exclude sewer backup unless you purchased the optional endorsement—we help verify coverage immediately. We document the scope of sewage contamination with photos and moisture readings to support your claim. Our detailed protocols demonstrate the necessity of complete material removal versus surface cleaning, preventing claim underpayment.',
    listItems: [
      'Immediate coverage verification for sewer backup endorsements and water backup riders',
      'Photographic documentation of contamination levels and affected materials',
      'Detailed scope justification for material removal required by Category 3 water',
      'Experience with municipal sewer backup claims and liability determination'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Biohazard & Category 3 Water Specialists',
    description: 'Our sewage cleanup technicians hold IICRC Water Restoration Technician and Applied Structural Drying certifications plus specialized training in biohazard handling. OSHA Bloodborne Pathogen certification ensures safe handling of sewage containing viruses, bacteria, and parasites. Every team member completes hazmat training and maintains current hepatitis and tetanus vaccinations.',
    listItems: [
      'IICRC WRT certification with specialized Category 3 water training',
      'OSHA Bloodborne Pathogen Standard compliance for biohazard exposure',
      'Hazardous waste operations training following 29 CFR 1910.120 standards',
      'Current vaccinations and medical surveillance for sewage exposure risks'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Pathogen-Free Sanitization Guarantee',
    description: 'We guarantee all sewage-affected surfaces are disinfected to hospital-grade cleanliness using EPA-registered antimicrobials. Post-cleanup ATP testing verifies surfaces meet healthcare facility sanitation standards. If odor or contamination resurfaces within 30 days due to inadequate disinfection, we re-treat the area at no charge.',
    listItems: [
      'Hospital-grade disinfection using EPA List B antimicrobials effective against sewage pathogens',
      'ATP testing verification showing surfaces meet healthcare sanitation standards',
      '30-day odor and contamination-free guarantee with free re-treatment if needed',
      'Written documentation of disinfection protocols for health department or insurance'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Emergency Sewage Extraction & Containment',
    description: 'Sewage contains E. coli, salmonella, and other pathogens requiring immediate containment to protect health. Our emergency response arrives within 90 minutes with full biohazard equipment and begins extraction immediately. We isolate affected areas, shut off contamination sources, and initiate disinfection protocols while others are still answering phones.',
    listItems: [
      'Emergency response within 90 minutes with biohazard equipment and waste tanks',
      'Immediate sewage extraction and source isolation to stop spreading contamination',
      'Primary disinfection applied within first hour to begin pathogen neutralization',
      'Live dispatcher provides pre-arrival safety instructions to protect occupants'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Sewer System Specialists',
    description: 'We understand Northern Virginia\'s aging sewer infrastructure and common backup causes from tree root intrusion to municipal main failures. Our relationships with local plumbers and sewer line specialists enable coordinated repairs preventing recurrence. We know which jurisdictions require permits for sewage cleanup and maintain relationships with local health departments.',
    listItems: [
      'Experience with Northern Virginia sewer systems and common failure points',
      'Partnerships with licensed plumbers for sewer line repairs and camera inspections',
      'Knowledge of local health department notification requirements for sewage releases',
      'Understanding of municipal liability when sewer backups originate from city mains'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Biohazard Safety & Occupant Protection',
    description: 'Sewage contains over 100 pathogens including hepatitis, giardia, and antibiotic-resistant bacteria requiring maximum safety precautions. Our technicians wear full Tyvek suits, nitrile gloves, and respirators with P100 filters during all sewage work. We establish contamination control zones with boot washes and hand sanitization stations to prevent tracking pathogens to clean areas.',
    listItems: [
      'Full PPE including Tyvek suits, nitrile gloves, and P100 respirators on all sewage jobs',
      'Contamination control zones with boot wash stations and hand sanitization protocols',
      'Occupant evacuation recommended until primary extraction and disinfection complete',
      'Proper medical waste disposal following Virginia DEQ and EPA biohazard regulations'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Safe Sewage Cleanup Track Record',
    description: 'Over 600 sewage backup cleanups completed in Northern Virginia with zero disease transmission incidents. Our comprehensive disinfection protocols result in 100% ATP test pass rate on first attempt. Customer satisfaction scores of 4.7/5.0 despite the challenging nature of sewage losses, reflecting our professionalism and thorough communication.',
    listItems: [
      '600+ sewage cleanup projects with zero occupant illness or disease transmission',
      '100% ATP testing pass rate confirming hospital-grade surface disinfection',
      '4.7/5.0 customer satisfaction score on sewage and biohazard cleanup services',
      'Average sewage extraction and disinfection completion within 8 hours of arrival'
    ],
    icon: 'BarChart3',
  },
];

// --- Flood Cleanup ---
const floodCleanupTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'High-Volume Flood Water Extraction Equipment',
    description: 'Portable submersible pumps extract standing flood water at 200+ gallons per minute, clearing basements in hours instead of days. Gas-powered trash pumps handle debris-laden water that clogs standard extractors. Trailer-mounted desiccant dehumidifiers process 1,000+ pints daily, critical for drying flood-saturated structures before mold appears.',
    listItems: [
      'Submersible trash pumps extracting 200+ GPM with debris handling capability',
      'Ride-on extraction equipment for large commercial flood water removal',
      'Desiccant dehumidifiers processing extreme moisture loads from total flooding',
      'Thermal imaging documenting flood water intrusion extent for insurance claims'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Flood Insurance vs. Homeowner Coverage',
    description: 'Flood damage from rising water requires separate NFIP or private flood insurance—we help determine which policy applies. We prepare detailed estimates distinguishing flood damage from covered causes like backup of sewers or drains. Our documentation helps expedite NFIP claims which can take months without proper supporting evidence and scope justification.',
    listItems: [
      'Coverage determination between NFIP flood policies and homeowner backup endorsements',
      'NFIP-compliant documentation and scope format for faster federal claim processing',
      'Coordination with flood insurance adjusters and Write Your Own (WYO) carriers',
      'Experience with Increased Cost of Compliance (ICC) claims for elevation requirements'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Flood Restoration & Water Damage Experts',
    description: 'Our flood restoration crews hold IICRC Water Restoration Technician and Applied Structural Drying certifications with specific training in flood loss restoration. Crew chiefs average 10+ years experience handling Category 3 flood water containing sewage, chemicals, and contaminants. Our team understands the critical 24-48 hour window for preventing total loss from flood damage.',
    listItems: [
      'IICRC WRT and ASD certifications with specialized flood restoration training',
      'Experience with FEMA flood damage assessment and substantial damage determinations',
      'Training in handling contaminated flood water and hazardous material exposure',
      'Large loss specialists for commercial and multi-unit residential flood events'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Flood Damage Mitigation Guarantee',
    description: 'We guarantee aggressive flood water extraction and structural drying prevent mold growth and secondary damage when started within 48 hours. Our flood restoration follows IICRC S500 standards ensuring structures are dried to pre-loss moisture levels. If mold develops due to inadequate flood drying within 30 days, remediation is performed at our expense.',
    listItems: [
      'Guaranteed structural drying to IICRC standards when restoration begins within 48 hours',
      '30-day mold-free guarantee on flood-affected materials properly dried',
      'Written warranty on reconstruction work performed after flood damage',
      'Satisfaction guarantee with clearly defined scope and timeline expectations'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Rapid Flood Water Extraction Response',
    description: 'Flood water continues wicking upward through walls and destroying materials every hour it sits—immediate response is critical. Our crews deploy within 60 minutes with truck-mounted pumps and generators for locations without power. We begin extracting flood water immediately upon arrival, removing tens of thousands of gallons before competitors finish scheduling.',
    listItems: [
      'Emergency flood response within 60 minutes across Northern Virginia',
      'Self-contained equipment with generators for flood areas without power',
      'Immediate water extraction beginning upon arrival at flood scene',
      'Coordinated multi-crew response for large-scale flooding events'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Flood Zone Specialists',
    description: 'We understand Northern Virginia flood patterns including Potomac River flooding, flash flooding from severe storms, and urban flooding from overwhelmed storm systems. Our experience with local topography helps us anticipate flood risks and recommend preventive measures. We maintain relationships with local floodplain managers and building officials for permit compliance.',
    listItems: [
      'Experience with Potomac River, Four Mile Run, and other local flood-prone areas',
      'Knowledge of Alexandria, Arlington, and Fairfax County floodplain regulations',
      'Understanding of FEMA flood zone designations and substantial damage thresholds',
      'Relationships with local building officials for flood damage reconstruction permits'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Contaminated Flood Water Safety Measures',
    description: 'Flood water is Category 3 black water containing sewage, chemicals, pesticides, and hazardous materials requiring full biohazard protocols. We treat all flood water as contaminated regardless of source, using full PPE and proper disinfection. Electrical hazards are assessed before entering flooded areas, and structural stability is verified before equipment loading.',
    listItems: [
      'Full biohazard PPE for all flood water exposure including waders and respirators',
      'Electrical safety verification and power shutoff before entering flooded areas',
      'Structural engineering assessment for flood-weakened foundations and supports',
      'EPA-registered antimicrobial disinfection on all flood-contacted surfaces'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Successful Flood Restoration Projects',
    description: 'Over 800 successful flood cleanup and restoration projects completed in Northern Virginia. Our rapid response and industrial-grade extraction equipment result in 70% lower total loss rates compared to delayed mitigation. Customer satisfaction scores of 4.6/5.0 on flood projects reflect our ability to handle the stress and complexity of major flood events.',
    listItems: [
      '800+ flood cleanup projects from basement flooding to multi-story commercial losses',
      '70% reduction in total loss determinations through rapid response and aggressive drying',
      '4.6/5.0 customer satisfaction score on flood restoration services',
      'Average flood water extraction completion within 24 hours of initial response'
    ],
    icon: 'BarChart3',
  },
];

// --- Storm Damage Restoration ---
const stormDamageRestorationTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Storm Damage Assessment & Drying Technology',
    description: 'Drone roof inspections with 4K cameras document wind damage and identify compromised areas without dangerous ladder work. Moisture mapping technology traces wind-driven rain intrusion paths through walls, windows, and roofing systems. Industrial air movers and dehumidifiers create airflow patterns specifically designed for storm water that penetrates multiple building envelope layers.',
    listItems: [
      'UAV drone roof inspections capturing high-resolution storm damage documentation',
      'Moisture mapping systems tracking wind-driven rain intrusion through building envelope',
      'High-velocity air movers designed for cavity drying after wind-driven water intrusion',
      'Thermal imaging revealing hidden storm water damage behind siding and in wall cavities'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Storm Damage Insurance Claim Management',
    description: 'We document both wind damage and resulting water damage with timestamped photos linked to weather events for claim verification. Our detailed roof inspections identify storm damage insurance adjusters might miss from ground-level assessments. We coordinate with your insurance company to bundle wind, hail, and water damage into comprehensive storm loss claims.',
    listItems: [
      'Comprehensive storm damage documentation with weather event correlation',
      'Drone and ladder roof inspections revealing hail and wind damage adjusters miss',
      'Coordination between property damage and water mitigation portions of claims',
      'Supplement negotiation for hidden water damage discovered during restoration'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Storm Restoration Specialists',
    description: 'Our storm damage teams combine IICRC Water Restoration certification with construction expertise in roofing, siding, and structural repairs. Crew chiefs are trained in emergency tarping, board-up, and temporary weather protection to prevent further storm damage. We maintain relationships with licensed contractors for coordinated roof replacement, window installation, and structural repairs.',
    listItems: [
      'IICRC WRT certified technicians with storm damage restoration specialization',
      'Emergency tarping and board-up crews available for immediate deployment',
      'Partnerships with licensed roofers, window installers, and general contractors',
      'Training in wind damage assessment and structural compromise identification'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Storm Damage Protection Guarantee',
    description: 'We guarantee our emergency tarping and board-up services prevent further weather-related damage to storm-affected properties. Water mitigation following storm damage is guaranteed to meet IICRC drying standards, preventing mold and secondary damage. Our reconstruction work carries a one-year workmanship warranty covering all storm repairs and replacements.',
    listItems: [
      'Emergency weather protection guaranteed to prevent additional storm damage',
      'Structural drying to IICRC standards preventing mold from storm water intrusion',
      'One-year workmanship warranty on all storm damage reconstruction',
      'Satisfaction guarantee on both emergency services and permanent repairs'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Emergency Storm Damage Response',
    description: 'Severe weather creates urgent needs across entire regions simultaneously—our multi-crew dispatch system prioritizes based on severity and safety risks. Emergency tarping trucks are pre-positioned before major storms and deployed immediately after conditions allow. We provide temporary weather protection within 2-4 hours of your call during active storm events.',
    listItems: [
      'Pre-storm equipment staging and crew positioning for immediate post-storm deployment',
      'Emergency tarping and board-up response within 2-4 hours of storm clearance',
      'Multi-crew dispatch system scaling to handle regional severe weather events',
      '24/7 storm hotline with live dispatchers during severe weather emergencies'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Weather Damage Experts',
    description: 'We understand Northern Virginia storm patterns including summer severe thunderstorms, tropical systems, and winter nor\'easters. Our local experience includes handling wind damage to various construction types from historic homes to modern townhomes. We maintain stockpiles of tarps, plywood, and emergency supplies specifically sized for Northern Virginia architecture.',
    listItems: [
      'Experience with Northern Virginia severe weather from tropical storms to derechos',
      'Knowledge of local construction vulnerabilities to wind and hail damage',
      'Equipment and materials staged locally for rapid storm response deployment',
      'Relationships with local building officials expediting emergency repair permits'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Storm Site Safety & Hazard Assessment',
    description: 'Storm-damaged properties present numerous hazards including downed power lines, structural instability, and falling debris. Our crews conduct comprehensive safety assessments before entering damaged structures, identifying electrical, structural, and environmental hazards. We coordinate with utility companies for safe power restoration and with structural engineers when building integrity is compromised.',
    listItems: [
      'Comprehensive site safety assessment before entering storm-damaged structures',
      'Coordination with power companies ensuring downed lines are de-energized',
      'Structural stability verification before equipment loading or personnel entry',
      'Fall protection and ladder safety protocols for roof and upper-level storm damage'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Storm Damage Restoration Success Rate',
    description: 'Over 1,000 storm damage restoration projects completed across Northern Virginia. Our rapid emergency response reduces secondary water damage by 65% compared to delayed stabilization. Customer satisfaction scores of 4.7/5.0 on storm damage projects reflect our ability to coordinate complex multi-trade repairs and communicate throughout the insurance process.',
    listItems: [
      '1,000+ storm damage restorations from minor leaks to catastrophic wind losses',
      '65% reduction in secondary water damage through rapid emergency protection',
      '4.7/5.0 customer satisfaction score on storm damage restoration services',
      'Average emergency tarping deployment within 3 hours during major weather events'
    ],
    icon: 'BarChart3',
  },
];

// --- Burst Pipe Cleanup ---
const burstPipeCleanupTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Pipe Burst Water Extraction & Drying Systems',
    description: 'Truck-mounted extractors remove water from burst pipes at 3,000+ gallons per hour, critical when pipes release hundreds of gallons per minute. Thermal imaging pinpoints hidden water accumulation in walls and ceilings from pipe bursts above or behind finished surfaces. Injection drying systems force heated air into wall cavities saturated by burst pipe water, preventing demolition in many cases.',
    listItems: [
      'Truck-mounted extraction removing 3,000+ gallons per hour from pipe burst flooding',
      'Thermal imaging cameras locating hidden water pools from concealed pipe failures',
      'Injectidry systems drying wall cavities without demolition after pipe bursts',
      'Moisture monitoring tracking drying progress in pipe-saturated structural materials'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Burst Pipe Insurance Claim Support',
    description: 'Sudden pipe bursts are typically covered events under homeowner policies, but gradual leaks and lack of maintenance may be excluded. We document the burst pipe as a sudden, accidental event with photos and plumber reports establishing coverage. Our detailed water damage assessments help maximize settlements by identifying all pipe burst damage including hidden losses.',
    listItems: [
      'Documentation establishing sudden pipe failure versus gradual leak for coverage',
      'Coordination with plumber reports confirming accidental pipe burst cause',
      'Comprehensive damage assessment identifying concealed pipe burst water damage',
      'Experience with frozen pipe burst claims during winter weather events'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Emergency Water Damage Technicians',
    description: 'Our burst pipe response teams hold IICRC Water Restoration Technician certification and receive specialized training in emergency water extraction. We maintain 24/7 on-call rotations ensuring certified technicians arrive at pipe burst emergencies within 60 minutes. Team members are trained to identify ongoing pipe leaks and coordinate emergency shut-offs with property owners and plumbers.',
    listItems: [
      'IICRC WRT certified technicians on every burst pipe emergency response',
      '24/7 on-call rotation ensuring immediate availability for pipe burst calls',
      'Training in emergency water shut-off and leak source identification',
      'Coordination experience with emergency plumbers for concurrent pipe repair'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Rapid Pipe Burst Mitigation Guarantee',
    description: 'We guarantee arrival within 60 minutes and water extraction beginning within 90 minutes of your burst pipe emergency call. Affected structures are guaranteed dried to IICRC S500 standards, preventing mold and permanent damage from pipe burst flooding. If secondary damage occurs due to delayed or inadequate drying, we remediate it at no additional cost.',
    listItems: [
      'Guaranteed 60-minute arrival time for burst pipe emergencies',
      'Water extraction beginning within 90 minutes of emergency call',
      'Structural drying to IICRC standards preventing mold from pipe burst water',
      '30-day guarantee against mold growth due to inadequate burst pipe drying'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Immediate Burst Pipe Emergency Response',
    description: 'Burst pipes can release 10+ gallons per minute, causing catastrophic damage in minutes—every second counts. Our emergency hotline connects you directly to dispatchers who provide shut-off instructions while crews deploy. We arrive within 60 minutes with extraction equipment and begin removing water immediately, minimizing damage while you wait for plumber arrival.',
    listItems: [
      'Live emergency dispatcher providing water shut-off guidance during initial call',
      '60-minute guaranteed arrival time across all Northern Virginia service areas',
      'Immediate water extraction upon arrival minimizing burst pipe flood damage',
      'Pre-arrival instructions helping property owners reduce damage before we arrive'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Pipe Burst Specialists',
    description: 'We understand Northern Virginia freeze-thaw cycles causing winter pipe bursts and aging plumbing in older homes leading to failures. Our local relationships with 24/7 emergency plumbers enable coordinated response—we extract water while plumbers repair pipes. We know which Northern Virginia jurisdictions require permits for pipe burst repairs and coordinate inspections efficiently.',
    listItems: [
      'Experience with Northern Virginia winter freeze conditions causing pipe bursts',
      'Knowledge of local construction and plumbing systems prone to pipe failures',
      'Partnerships with emergency plumbers for coordinated burst pipe response',
      'Understanding of local permit requirements for pipe burst repairs and restoration'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Electrical Safety & Water Damage Protocols',
    description: 'Burst pipe water often saturates electrical systems creating electrocution hazards requiring immediate power shutoff. Our technicians verify electrical safety before entering pipe burst areas and coordinate with electricians when panels or outlets are submerged. We assess ceiling and floor structural stability when pipe bursts occur on upper levels, preventing collapse hazards.',
    listItems: [
      'Immediate electrical safety assessment and power shutoff at pipe burst scenes',
      'Coordination with licensed electricians when electrical systems are water-damaged',
      'Structural stability evaluation when upper-level pipe bursts saturate floors',
      'Proper PPE and safety protocols for all pipe burst water extraction operations'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Burst Pipe Response Track Record',
    description: 'Over 900 burst pipe emergency responses completed in Northern Virginia with an average 58-minute arrival time. Our rapid extraction reduces total repair costs by an average of 45% compared to delayed response. Customer satisfaction scores of 4.8/5.0 on burst pipe emergencies reflect our speed, professionalism, and clear communication during stressful situations.',
    listItems: [
      '900+ burst pipe emergency responses across Northern Virginia',
      '58-minute average arrival time from initial emergency call to on-site',
      '45% average reduction in total damage costs through rapid water extraction',
      '4.8/5.0 customer satisfaction score on burst pipe emergency services'
    ],
    icon: 'BarChart3',
  },
];

// --- Odor Removal ---
const odorRemovalTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Advanced Odor Elimination Technology',
    description: 'Our hydroxyl generators and thermal foggers penetrate deep into porous materials to neutralize odor molecules at the source, not just mask them. We use ozone treatment in unoccupied spaces for severe contamination and photocatalytic oxidation for ongoing odor control. Every deodorization follows IICRC S520 standards with post-treatment air quality verification.',
    listItems: [
      'Hydroxyl generators safe for occupied spaces - neutralize smoke, pet, and biological odors',
      'Thermal fogging with odor-pairing compounds that penetrate HVAC systems and wall cavities',
      'Ozone shock treatment for severe contamination in unoccupied areas',
      'Air scrubbers with activated carbon and HEPA filtration for airborne particulates'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Insurance Claims for Odor Remediation',
    description: 'We document pre-treatment odor levels using particle counters and olfactory testing to establish baselines for your claim. Our detailed scope of work includes thermal imaging of affected areas and post-remediation verification reports. Most homeowner policies cover odor removal when caused by sudden covered events like fire, sewage backup, or animal intrusion.',
    listItems: [
      'Pre-loss odor assessment with photographic and sensory documentation',
      'Direct billing to insurance with itemized deodorization protocols',
      'Xactimate estimates matching adjuster software for faster approval',
      'Post-treatment clearance testing proving odor elimination success'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'IICRC-Certified Odor Control Specialists',
    description: 'Our technicians hold IICRC Fire & Smoke Restoration and Water Damage Restoration certifications with specialized training in odor science and psychrometric principles. Each crew member completes annual continuing education in emerging deodorization technologies and chemical safety protocols. We employ certified industrial hygienists for complex biohazard odor situations.',
    listItems: [
      'IICRC Fire & Smoke Restoration Technicians trained in odor molecule behavior',
      'Certified Odor Control Technicians (OCT) with chemistry backgrounds',
      'OSHA 40-hour HAZWOPER certification for biohazard and chemical odors',
      'Continuous education in hydroxyl technology and vapor phase deodorization'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Odor Elimination Guarantee',
    description: 'We guarantee complete odor elimination or we re-treat at no additional cost until your indoor air quality meets ANSI/IICRC S520 standards. If odors return within 30 days due to our workmanship, we return immediately for complimentary re-treatment. Our guarantee is backed by third-party air quality testing and written clearance certificates.',
    listItems: [
      'Complete odor neutralization verified by post-treatment air sampling',
      '30-day odor-free guarantee with free re-treatment if needed',
      'Third-party air quality clearance testing available upon request',
      'Written certification of deodorization completion for real estate transactions'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: '24/7 Emergency Odor Response',
    description: 'Severe odors from fire, sewage, or decomposition require immediate containment to prevent HVAC cross-contamination and secondary damage. Our emergency response teams arrive within 90 minutes with portable hydroxyl units and negative air machines to begin immediate odor control. We isolate affected areas and establish containment barriers before odors migrate throughout your home.',
    listItems: [
      'Sub-90-minute response with immediate odor containment equipment',
      'After-hours emergency deodorization for fire and sewage events',
      'Immediate HVAC isolation to prevent odor distribution',
      'Portable hydroxyl generators deployed on first visit for rapid odor knock-down'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Odor Experts',
    description: 'We understand regional odor challenges unique to Northern Virginia - from Potomac River flood sediment smells to historic home mustiness and seasonal mildew from humid summers. Our local knowledge includes sourcing Virginia-compliant deodorization chemistry and coordinating with Fairfax, Arlington, and Loudoun County environmental health departments. We maintain relationships with local restoration-friendly HVAC contractors for duct cleaning coordination.',
    listItems: [
      'Expertise in historic home odor remediation for Alexandria and Old Town properties',
      'Knowledge of Northern Virginia humidity patterns causing mildew and musty odors',
      'Relationships with local environmental testing labs for VOC analysis',
      'Familiarity with HOA requirements in Reston, Ashburn, and Arlington communities'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Safe Deodorization Protocols',
    description: 'All chemical deodorizers are EPA-registered and approved for residential use with full SDS documentation provided to homeowners. We use hydroxyl generators instead of ozone whenever spaces are occupied, and clearly post ozone treatment areas with bilingual warning signage. Our technicians wear respiratory protection during thermal fogging and ensure proper ventilation before re-entry.',
    listItems: [
      'EPA-registered deodorizers with complete safety data sheets provided',
      'Hydroxyl-first approach for occupied spaces - no ozone risk to people or pets',
      'Clear posting and lockout procedures during ozone shock treatments',
      'Post-treatment ventilation and air clearance before home re-occupancy'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Documented Odor Elimination Results',
    description: 'Our odor removal success rate exceeds 98% on first treatment with third-party verification available for real estate and litigation cases. We maintain before/after air quality data showing particulate and VOC reductions averaging 94% post-treatment. Client satisfaction surveys show 97% report complete odor elimination within 72 hours of treatment completion.',
    listItems: [
      '98% first-time odor elimination success rate across all odor types',
      'Average 94% reduction in VOCs measured by independent air quality testing',
      'Over 500 successful fire and smoke deodorization projects in Northern Virginia',
      '97% of clients report complete odor removal within 3 days of final treatment'
    ],
    icon: 'BarChart3',
  },
];

// --- Contents Cleaning & Pack-Out ---
const contentsCleaningPackoutTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Advanced Contents Restoration Technology',
    description: 'Our climate-controlled warehouse features ultrasonic cleaning systems that remove soot and contaminants from delicate items without abrasive scrubbing. We use ozone chambers for smoke odor removal from textiles and electronics restoration labs with specialized drying equipment for water-damaged devices. Every item is photographed and barcoded into our digital inventory system with real-time tracking available to homeowners.',
    listItems: [
      'Ultrasonic cleaning tanks removing soot from ceramics, glass, and collectibles without damage',
      'Climate-controlled storage with 24/7 monitoring preventing mold growth during restoration',
      'Electronics restoration lab with specialized drying ovens for computers and devices',
      'Digital inventory system with photo documentation and barcode tracking of every item'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Contents Claim Documentation',
    description: 'We create detailed room-by-room inventories with photographs, serial numbers, and replacement cost estimates that integrate directly into Xactimate for adjuster review. Our pack-out documentation includes item condition assessments and restoration vs. replacement recommendations based on actual cleaning results. Insurance companies recognize our certified contents technician credentials, expediting approval for cleaning and storage costs.',
    listItems: [
      'Complete photo inventory with condition notes before pack-out begins',
      'Xactimate-compatible contents lists with restore/replace recommendations',
      'Direct insurance billing for pack-out, cleaning, and storage services',
      'Detailed cleaning logs showing processes used and hours invested per item'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Certified Contents Restoration Specialists',
    description: 'Our pack-out teams include IICRC-certified Contents Processing Technicians trained in proper handling of antiques, electronics, textiles, and paper goods. Crew members complete specialized training in fine art handling, electronics restoration, and document recovery techniques. Each technician undergoes background checks and bonding for security when working in your home.',
    listItems: [
      'IICRC Contents Processing Technician certification for all pack-out crew leads',
      'Specialized training in textile cleaning, electronics restoration, and document recovery',
      'Background-checked and bonded technicians for security and accountability',
      'Continuing education in emerging cleaning technologies and restoration chemistry'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Contents Protection Guarantee',
    description: 'We guarantee zero additional damage during pack-out, cleaning, and storage with full replacement value coverage through our warehouse insurance policy. If any item is damaged during our restoration process, we provide immediate replacement at current market value or professional repair at our expense. Our climate-controlled facility maintains humidity between 40-50% and temperatures at 68-72\u00B0F to prevent secondary damage.',
    listItems: [
      'Zero additional damage guarantee during pack-out and transport',
      'Warehouse insurance covering full replacement value of all stored contents',
      'Climate-controlled environment preventing mold, warping, and deterioration',
      'Real-time inventory tracking ensuring no items are lost during storage'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: '24/7 Emergency Pack-Out Service',
    description: 'When fire or water damage threatens your belongings, our emergency pack-out teams mobilize within 2 hours with trucks, packing materials, and inventory tablets. We prioritize high-value items, irreplaceables, and moisture-sensitive contents for immediate removal to our secure facility. After-hours pack-outs include board-up coordination and security monitoring until your home is secured.',
    listItems: [
      '2-hour emergency pack-out response for fire and water damage events',
      'Priority removal of valuables, electronics, and irreplaceable items first',
      'After-hours security coordination ensuring your home remains protected',
      'Immediate transport to climate-controlled facility preventing secondary damage'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Contents Specialists',
    description: 'Our local warehouse serves Fairfax, Arlington, Loudoun, and Prince William counties with same-day pack-out availability and no long-distance transport risks. We maintain relationships with specialized Northern Virginia restorers for antique furniture, oriental rugs, and fine art requiring expert conservation. Our team understands regional insurance adjusters and their preferred documentation formats for faster claims processing.',
    listItems: [
      'Local warehouse in Northern Virginia - no shipping contents out of state',
      'Relationships with regional antique restorers and art conservators',
      'Knowledge of Northern Virginia insurance adjusters and their documentation preferences',
      'Same-day pack-out availability across Fairfax, Arlington, and Loudoun counties'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Safe Contents Handling Protocols',
    description: 'All contents are handled with gloves and protective wrapping to prevent cross-contamination between clean and damaged items. We use color-coded packing materials to identify contamination levels - green for clean, yellow for smoke-affected, red for biohazard. Our warehouse maintains separate cleaning zones for fire, water, and sewage-contaminated items preventing cross-contamination during restoration.',
    listItems: [
      'Gloved handling and protective wrapping preventing fingerprints and additional soiling',
      'Color-coded packing system identifying contamination levels for proper cleaning',
      'Separate restoration zones for fire, water, and biohazard contents',
      'HEPA filtration in cleaning areas preventing airborne contamination during processing'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Contents Restoration Success Rates',
    description: 'Our ultrasonic cleaning and specialized restoration processes save an average of 76% of contents that adjusters initially classify as total losses. We maintain a 99.7% inventory accuracy rate with fewer than 3 items lost per 1,000 packed out. Client surveys show 94% satisfaction with the condition of returned contents and 98% report items cleaner than pre-loss condition.',
    listItems: [
      '76% of items initially deemed total loss successfully restored to pre-loss condition',
      '99.7% inventory accuracy rate - virtually zero lost items during pack-out and storage',
      'Average contents claim savings of $18,000 through successful restoration vs. replacement',
      '94% client satisfaction with restored item condition exceeding expectations'
    ],
    icon: 'BarChart3',
  },
];

// --- Basement Flooding ---
const basementFloodingTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Advanced Basement Water Extraction Technology',
    description: 'Our truck-mounted extraction systems remove thousands of gallons per hour through 3-inch vacuum hoses, clearing flooded basements in hours instead of days. We deploy infrared cameras to detect hidden water in finished wall cavities and use moisture meters to create detailed drying maps. Trailer-mounted desiccant dehumidifiers pull moisture directly from building materials, not just the air, accelerating structural drying by 60%.',
    listItems: [
      'Truck-mounted extractors removing up to 3,000 gallons per hour from flooded basements',
      'Infrared thermal imaging detecting water behind drywall and insulation',
      'Trailer-mounted desiccant dehumidifiers for rapid structural moisture removal',
      'Injectidry floor mat systems drawing water from concrete slab and tile foundations'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Basement Flood Insurance Claims',
    description: 'We document water sources and damage patterns to help determine coverage under your homeowner policy vs. flood insurance requirements. Our moisture mapping and thermal imaging provide evidence of sudden water intrusion for successful claims even when the source is unclear. Most sump pump failures, appliance leaks, and pipe bursts are covered events - we provide detailed documentation proving the loss origin.',
    listItems: [
      'Water source documentation determining homeowner vs. flood policy coverage',
      'Moisture mapping proving extent of damage for accurate insurance estimates',
      'Xactimate estimates including extraction, drying, antimicrobial, and rebuild costs',
      'Photo documentation of waterlines, damage patterns, and failed equipment'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'IICRC Water Damage Specialists',
    description: 'Our basement flooding crews are led by IICRC Water Damage Restoration Technicians with advanced training in structural drying and psychrometry. Each technician completes Applied Structural Drying certification teaching moisture science, equipment placement, and drying chamber design. Our team includes licensed plumbers and electricians for safe utility isolation before water extraction begins.',
    listItems: [
      'IICRC Water Damage Restoration Technicians leading every basement flood response',
      'Applied Structural Drying Specialists trained in psychrometric calculations',
      'Licensed electricians ensuring safe power restoration after flooding',
      'Mold remediation specialists on standby for basements flooded over 48 hours'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Complete Drying Guarantee',
    description: 'We guarantee your basement will reach IICRC drying standards - less than 15% moisture content in all structural materials - or we continue drying at no additional cost. If mold growth occurs within 30 days due to inadequate drying, we remediate at our expense with full documentation for insurance. Our guarantee is backed by daily moisture readings and final thermal imaging verification.',
    listItems: [
      'Guaranteed drying to IICRC standards - under 15% moisture in all materials',
      'Daily moisture monitoring with written documentation of drying progress',
      '30-day mold-free guarantee with complimentary remediation if growth occurs',
      'Final thermal imaging scan verifying no hidden moisture remains'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: '24/7 Basement Flood Emergency Response',
    description: 'When your basement floods, every hour increases structural damage and mold risk - our crews arrive within 60 minutes with extraction equipment and begin water removal immediately. We work through the night to remove standing water, establish drying equipment, and prevent sewage backup contamination from spreading. Emergency power generation available when flooding causes electrical outages.',
    listItems: [
      '60-minute emergency response to basement floods across Northern Virginia',
      'Immediate water extraction beginning within minutes of arrival',
      'After-hours sump pump failure response with temporary pump installation',
      'Emergency power generation for extraction equipment during power outages'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Basement Experts',
    description: 'We understand regional basement flooding causes unique to Northern Virginia - from Potomac River tributary flooding to aging sump pumps in 1960s split-levels and foundation cracks in clay soil areas. Our crews know which Fairfax and Loudoun neighborhoods experience chronic groundwater issues and maintain stockpiles of equipment during spring thaw and hurricane season. We coordinate with local utility companies for emergency water shutoff assistance.',
    listItems: [
      'Expertise in Northern Virginia clay soil foundation issues causing basement seepage',
      'Knowledge of flood-prone neighborhoods near Potomac tributaries and Four Mile Run',
      'Relationships with local plumbers for sump pump replacement and french drain installation',
      'Understanding of seasonal basement flooding patterns during spring storms'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Basement Flood Safety Protocols',
    description: 'We never enter flooded basements until electrical power is confirmed off at the breaker panel to prevent electrocution hazards. Our technicians wear rubber boots, gloves, and respirators when extracting category 3 water from sewage backups or prolonged standing water. We test for structural instability, gas leaks, and carbon monoxide before beginning extraction in finished basements.',
    listItems: [
      'Mandatory electrical shutoff verification before entering flooded basements',
      'Full PPE including respirators for sewage backups and black water contamination',
      'Structural safety assessment before placing heavy extraction equipment',
      'Gas leak and carbon monoxide testing in basements with utility equipment'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Basement Drying Success Rates',
    description: 'Our rapid response and industrial dehumidification achieve complete basement drying in an average of 4.2 days compared to 7-10 days with standard equipment. We maintain a 96% success rate preventing mold growth after basement floods through aggressive drying and antimicrobial application. Over 1,200 Northern Virginia basement floods restored with an average insurance claim savings of $12,000 through water damage mitigation.',
    listItems: [
      'Average 4.2-day basement drying time using trailer-mounted desiccant dehumidifiers',
      '96% mold prevention success rate through rapid response and aggressive drying',
      'Over 1,200 basement floods restored across Fairfax, Arlington, and Loudoun counties',
      'Average $12,000 insurance savings through fast mitigation reducing structural damage'
    ],
    icon: 'BarChart3',
  },
];

// --- Crawl Space Drying ---
const crawlSpaceDryingTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Crawl Space Drying Technology',
    description: 'Our low-profile dehumidifiers and axial air movers fit through 18-inch crawl space access points to create airflow in tight spaces where moisture accumulates. We install remote moisture sensors transmitting real-time readings to technicians without requiring daily crawl space entry. Negative air machines establish controlled drying chambers while HEPA filtration prevents mold spore migration into living areas during remediation.',
    listItems: [
      'Low-profile dehumidifiers designed for crawl spaces under 24 inches clearance',
      'Wireless moisture sensors providing real-time humidity and temperature data',
      'Negative air machines creating containment and preventing cross-contamination upstairs',
      'Thermal imaging detecting wet insulation and subfloor moisture without removal'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Crawl Space Water Damage Claims',
    description: 'We document pre-existing conditions vs. new water damage using moisture mapping and photography to ensure fair claim settlements. Our estimates separate emergency drying from optional improvements like vapor barrier installation and encapsulation systems. Insurance typically covers sudden water intrusion drying but not long-term moisture issues - we provide clear documentation differentiating acute events from chronic problems.',
    listItems: [
      'Moisture mapping distinguishing new water damage from pre-existing conditions',
      'Separate estimates for covered emergency drying vs. non-covered improvements',
      'Photo documentation of plumbing leaks, HVAC condensation, and groundwater sources',
      'Xactimate scopes including insulation removal, structural drying, and antimicrobial treatment'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Confined Space Certified Technicians',
    description: 'Our crawl space teams hold OSHA confined space entry certifications with training in ventilation requirements and emergency extraction procedures. Each technician completes IICRC Water Damage Restoration and Applied Microbial Remediation training specific to below-grade moisture problems. We maintain confined space rescue equipment and two-person teams for all crawl space entries over 30 minutes.',
    listItems: [
      'OSHA confined space entry certification for safe crawl space access',
      'IICRC Applied Microbial Remediation training for moldy crawl space conditions',
      'Two-person team protocols with continuous communication during entries',
      'Respirator fit-testing and medical clearance for confined space work'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Crawl Space Drying Guarantee',
    description: 'We guarantee crawl space humidity below 60% and structural moisture under 15% per IICRC standards or continue drying at no cost. If mold recurs within 90 days due to inadequate drying, we re-treat with antimicrobial and upgrade dehumidification at our expense. Our guarantee includes post-drying recommendations for vapor barriers and drainage improvements to prevent future issues.',
    listItems: [
      'Guaranteed humidity below 60% and structural moisture under 15% before equipment removal',
      '90-day mold-free guarantee with complimentary re-treatment if growth recurs',
      'Final moisture documentation with thermal imaging verification',
      'Written recommendations for long-term crawl space moisture control'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Emergency Crawl Space Water Removal',
    description: 'Standing water in crawl spaces threatens floor joists, HVAC systems, and creates rapid mold growth - our emergency teams respond within 90 minutes with submersible pumps and extraction equipment. We provide after-hours crawl space flooding response for burst pipes, HVAC condensate overflows, and groundwater intrusion during heavy rain. Temporary sump pumps installed immediately to prevent re-flooding during storms.',
    listItems: [
      '90-minute emergency response for crawl space flooding and plumbing leaks',
      'Submersible pump deployment removing standing water before structural damage worsens',
      'After-hours service for HVAC condensate pan overflows and supply line failures',
      'Temporary dehumidification preventing mold growth while permanent repairs are arranged'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Crawl Space Experts',
    description: 'We understand crawl space challenges specific to Northern Virginia - from high water tables in Alexandria and Arlington to clay soil moisture in Fairfax and Loudoun counties. Our teams know which neighborhoods have chronic groundwater issues and where aging HVAC systems cause condensation problems. We coordinate with local foundation specialists for french drain and sump pump installations when needed.',
    listItems: [
      'Expertise in Northern Virginia clay soil moisture and high water table areas',
      'Knowledge of neighborhoods with chronic crawl space humidity issues',
      'Relationships with local foundation waterproofing and drainage contractors',
      'Understanding of regional building codes for crawl space vapor barriers and venting'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Crawl Space Safety Protocols',
    description: 'We test crawl space air quality for oxygen levels, carbon monoxide, and methane before entry, with continuous monitoring during work. Technicians wear respirators with P100 filters when mold, fiberglass insulation, or rodent contamination is present. We establish ventilation and maintain two-way communication with safety monitors during all confined space entries.',
    listItems: [
      'Pre-entry air quality testing for oxygen, CO, and explosive gases',
      'Full respiratory protection with P100 filters for mold and insulation exposure',
      'Continuous ventilation and air monitoring during crawl space work',
      'Two-person teams with constant communication and emergency extraction plans'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Crawl Space Restoration Results',
    description: 'Our targeted crawl space drying achieves structural moisture standards in an average of 5.3 days with 94% of projects avoiding floor joist replacement through rapid intervention. We maintain a 91% success rate preventing mold recurrence when clients implement our vapor barrier recommendations. Over 800 Northern Virginia crawl spaces dried with average moisture reduction from 87% humidity to 52% post-treatment.',
    listItems: [
      'Average 5.3-day crawl space drying time preventing structural wood damage',
      '94% of flooded crawl spaces avoid joist replacement through fast drying',
      '91% mold prevention success when vapor barrier recommendations are followed',
      'Over 800 crawl spaces restored with average humidity reduction from 87% to 52%'
    ],
    icon: 'BarChart3',
  },
];

// --- Hardwood Floor Drying ---
const hardwoodFloorDryingTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Hardwood Floor Drying Technology',
    description: 'Our floor mat drying systems create negative pressure chambers pulling moisture directly from hardwood planks without removing flooring, saving thousands in replacement costs. We use pin and pinless moisture meters measuring wood MC at multiple depths to track drying progress and prevent over-drying. Desiccant dehumidifiers maintain precise humidity levels preventing cupping and cracking while low-grain refrigerant units protect finishes during restoration.',
    listItems: [
      'Injectidry floor mat systems extracting moisture from hardwood without removal',
      'Dual-technology moisture meters measuring surface and core wood moisture content',
      'Desiccant dehumidifiers maintaining 35-45% relative humidity preventing cupping',
      'Infrared moisture scanning identifying wet areas without invasive testing'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Hardwood Floor Damage Claims',
    description: 'We document pre-loss floor condition and moisture content to establish damage scope, often saving floors adjusters initially write as total losses. Our detailed drying logs showing daily MC readings prove restoration attempts, maximizing coverage even when replacement becomes necessary. Insurance companies recognize our IICRC Wood Floor Drying credentials, accepting our recommendations for restore vs. replace decisions.',
    listItems: [
      'Pre-loss floor assessment documenting species, finish, and installation method',
      'Daily moisture content logs proving drying attempts for maximum claim coverage',
      'Restore vs. replace recommendations based on actual drying results, not estimates',
      'Xactimate scopes including mat drying, refinishing, or replacement costs'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Wood Floor Drying Specialists',
    description: 'Our technicians complete IICRC Wood Floor Drying and Hardwood Floor Inspection training teaching wood species behavior, moisture equilibrium, and safe drying rates. Each crew member understands engineered vs. solid wood drying requirements and finish-specific humidity tolerances. We consult with certified wood flooring inspectors for high-value installations requiring expert evaluation.',
    listItems: [
      'IICRC Wood Floor Drying Technician certification for all floor restoration crews',
      'Training in solid, engineered, and exotic wood species moisture behavior',
      'Knowledge of finish types and humidity requirements preventing damage during drying',
      'Relationships with certified wood flooring inspectors for complex claims'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Hardwood Restoration Guarantee',
    description: 'We guarantee to return your hardwood floors to 6-9% moisture content matching unaffected areas or provide written documentation that replacement is necessary. If floors cup, crown, or buckle during our drying process due to improper technique, we pay for refinishing or replacement. Our 60-day stability guarantee ensures floors remain flat after equipment removal or we return for complimentary adjustment.',
    listItems: [
      'Guaranteed drying to 6-9% MC matching unaffected floor areas',
      'Zero additional damage promise - we pay for refinishing if our process causes cupping',
      '60-day stability guarantee ensuring floors remain flat after drying',
      'Written certification of successful restoration or replacement recommendation'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: '24/7 Hardwood Emergency Response',
    description: 'Hardwood floors begin cupping within hours of water exposure - our emergency teams arrive within 60 minutes with extraction equipment and floor mats to begin immediate moisture removal. We provide after-hours response for burst pipes, appliance failures, and flood events threatening expensive hardwood installations. Same-visit mat system deployment starts the drying process before irreversible damage occurs.',
    listItems: [
      '60-minute emergency response for water damage threatening hardwood floors',
      'Immediate extraction and floor mat deployment preventing cupping and warping',
      'After-hours service for sudden appliance failures and plumbing emergencies',
      'Moisture monitoring beginning on first visit establishing baseline MC readings'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Hardwood Specialists',
    description: 'We understand hardwood flooring common in Northern Virginia homes - from historic oak floors in Alexandria to modern engineered bamboo in Reston townhomes. Our team knows which local flooring contractors installed area floors and maintains refinishing relationships for post-drying restoration. We account for regional humidity swings and their impact on wood moisture equilibrium during drying protocol design.',
    listItems: [
      'Expertise restoring historic hardwood floors in Old Town Alexandria and Arlington',
      'Knowledge of Northern Virginia humidity patterns affecting wood MC targets',
      'Relationships with local hardwood flooring contractors for refinishing coordination',
      'Understanding of engineered wood products common in newer Loudoun and Fairfax homes'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Safe Hardwood Drying Protocols',
    description: 'We never exceed 2% moisture content reduction per day preventing stress cracks and finish damage during aggressive drying. Floor mat systems operate at safe vacuum levels preventing plank lifting or adhesive failure in glued installations. We monitor ambient conditions continuously, adjusting dehumidification to maintain stable relative humidity preventing rapid moisture loss.',
    listItems: [
      'Controlled drying rates under 2% MC change daily preventing wood stress damage',
      'Safe vacuum pressures in mat systems protecting glued and nailed installations',
      'Continuous humidity monitoring preventing rapid moisture swings',
      'Protective padding preventing equipment marks on finished surfaces'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Hardwood Restoration Success Rates',
    description: 'Our mat drying systems save 78% of hardwood floors from replacement when deployed within 48 hours of water damage. We achieve target moisture content in an average of 6.8 days compared to 10-14 days with conventional drying methods. Client surveys show 89% satisfaction with floor appearance post-drying and an average insurance claim savings of $14,500 through successful restoration.',
    listItems: [
      '78% hardwood floor save rate when mat systems deployed within 48 hours',
      'Average 6.8-day drying time to target MC using Injectidry technology',
      'Over 600 hardwood floor restorations across Northern Virginia',
      'Average $14,500 claim savings through successful restoration vs. replacement'
    ],
    icon: 'BarChart3',
  },
];

// --- Roof Leak Water Damage ---
const roofLeakWaterDamageTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Roof Leak Detection Technology',
    description: 'Our infrared cameras identify hidden water migration patterns in ceilings and walls, tracing leaks to their roof penetration source even when visible damage appears elsewhere. We deploy moisture meters in attic insulation and ceiling cavities to map the full extent of water intrusion beyond visible stains. Negative air machines in attic spaces accelerate insulation drying while preventing mold spore migration into living areas below.',
    listItems: [
      'Infrared thermal imaging tracing roof leaks to exact penetration points',
      'Moisture mapping of attic spaces revealing hidden insulation saturation',
      'Negative air containment in attics preventing cross-contamination during drying',
      'Moisture sensors in ceiling cavities monitoring drying progress non-invasively'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Roof Leak Insurance Claims',
    description: 'We document sudden roof damage from storms, fallen trees, and wind-driven rain to establish covered events under your homeowner policy. Our moisture mapping proves the extent of interior water damage caused by roof failures, including hidden attic and wall cavity damage adjusters might miss. Detailed photo documentation of roof damage, ceiling stains, and wet insulation supports complete scope approval.',
    listItems: [
      'Storm damage documentation linking roof failure to sudden covered events',
      'Complete moisture mapping including hidden attic and wall cavity damage',
      'Coordination with roofing contractors providing emergency tarping and repair estimates',
      'Xactimate scopes including water extraction, structural drying, and reconstruction'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Roof Leak Water Damage Specialists',
    description: 'Our technicians hold IICRC Water Damage Restoration and Applied Structural Drying certifications with specialized training in attic drying and ceiling water damage. Each crew member completes confined space and attic safety training for work in tight, hot environments. We coordinate with licensed roofing contractors for emergency repairs while focusing on interior water damage mitigation.',
    listItems: [
      'IICRC Water Damage Restoration Technicians trained in ceiling and attic drying',
      'Applied Structural Drying certification for complex moisture migration patterns',
      'Confined space and heat stress training for safe attic work',
      'Coordination with licensed roofers for simultaneous leak repair and water damage restoration'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Complete Interior Drying Guarantee',
    description: 'We guarantee complete drying of all ceiling, wall, and attic materials affected by roof leaks to IICRC moisture standards or continue service at no cost. If mold growth appears within 45 days due to inadequate drying, we remediate at our expense with full documentation. Our guarantee includes final moisture verification and recommendations for roof repairs preventing recurrence.',
    listItems: [
      'Guaranteed drying to IICRC standards in all affected ceiling and wall assemblies',
      'Daily moisture monitoring with written progress reports',
      '45-day mold-free guarantee with complimentary treatment if growth occurs',
      'Final thermal imaging scan verifying no hidden moisture in ceiling cavities'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: '24/7 Emergency Roof Leak Response',
    description: 'Active roof leaks during storms require immediate interior protection - our emergency crews arrive within 75 minutes with tarps, water extraction equipment, and attic containment supplies. We coordinate emergency roof tarping while simultaneously removing water from ceilings and attics preventing collapse and mold growth. After-hours response includes temporary leak containment and equipment deployment before permanent roof repairs.',
    listItems: [
      '75-minute emergency response during active roof leak events',
      'Coordination with emergency tarping services while extracting interior water',
      'After-hours ceiling water removal preventing collapse and electrical hazards',
      'Immediate attic containment and dehumidification preventing mold growth'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Roof Leak Experts',
    description: 'We understand roof leak patterns specific to Northern Virginia - from ice dam damage in Fairfax County to wind-driven rain intrusion in Arlington high-rises and aging roof valleys in historic Alexandria homes. Our team maintains relationships with trusted local roofing contractors for coordinated emergency repairs and permanent solutions. We know which neighborhoods experience chronic roof issues and plan drying protocols accordingly.',
    listItems: [
      'Expertise in Northern Virginia ice dam damage and wind-driven rain patterns',
      'Relationships with licensed local roofers for coordinated emergency tarping',
      'Knowledge of aging roof systems in established neighborhoods requiring extra attention',
      'Understanding of Arlington and Alexandria historic home roof configurations'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Roof Leak Safety Protocols',
    description: 'We never enter attics during active lightning storms or when roof structural integrity is compromised by water damage. Technicians wear fall protection when accessing steep attic spaces and heat stress monitoring when working in summer conditions. We test ceiling stability before placing equipment and coordinate electrical shutoff when water threatens light fixtures and wiring.',
    listItems: [
      'Lightning safety protocols delaying attic entry during active electrical storms',
      'Fall protection and stable footing requirements in steep attic spaces',
      'Heat stress monitoring and mandatory breaks during summer attic work',
      'Electrical hazard assessment before ceiling water extraction near fixtures'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Roof Leak Restoration Results',
    description: 'Our rapid interior response achieves complete ceiling and attic drying in an average of 5.1 days preventing costly mold remediation and ceiling replacement. We maintain a 92% success rate salvaging water-stained ceilings through proper drying and paint restoration versus full replacement. Over 950 Northern Virginia roof leak restorations with 96% of clients avoiding mold growth through aggressive attic dehumidification.',
    listItems: [
      'Average 5.1-day ceiling and attic drying time preventing mold and structural damage',
      '92% ceiling save rate through proper drying avoiding unnecessary replacement',
      'Over 950 roof leak restorations across Fairfax, Arlington, and Loudoun counties',
      '96% mold prevention success rate through rapid attic dehumidification'
    ],
    icon: 'BarChart3',
  },
];

// --- Structural Drying ---
const structuralDryingTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Scientific Structural Drying Technology',
    description: 'Our psychrometric approach uses precision sensors measuring temperature, humidity, and dew point to calculate exact drying capacity and equipment needs for your specific building materials. Trailer-mounted desiccant dehumidifiers remove 10x more moisture than conventional units, creating optimal vapor pressure gradients for rapid structural drying. We deploy wireless data loggers transmitting real-time conditions to our monitoring software, adjusting equipment remotely for maximum efficiency.',
    listItems: [
      'Psychrometric calculations determining exact dehumidification and air movement requirements',
      'Trailer-mounted desiccant dehumidifiers achieving sub-20-grain humidity levels',
      'Wireless sensor networks with real-time monitoring and remote equipment adjustment',
      'Moisture mapping software tracking drying progress across all structural materials'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Structural Drying Documentation',
    description: 'We provide daily psychrometric logs with temperature, humidity, and moisture content readings proving proper drying protocols for insurance review. Our detailed equipment placement diagrams and drying chamber designs demonstrate scientific approaches meeting IICRC S500 standards. Insurance companies recognize our Applied Structural Drying certifications, accepting our moisture targets and restoration recommendations without requiring secondary inspections.',
    listItems: [
      'Daily psychrometric charts with GPP, temperature, and humidity trending',
      'IICRC S500-compliant drying goals with daily progress documentation',
      'Equipment inventories and placement diagrams supporting claim costs',
      'Final moisture verification reports proving complete structural drying'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Applied Structural Drying Experts',
    description: 'Every project manager holds IICRC Applied Structural Drying certification with advanced training in psychrometry, moisture science, and building material behavior. Our technicians complete continuing education in emerging drying technologies and attend annual seminars on moisture measurement techniques. We employ certified industrial hygienists for complex structural drying projects requiring environmental testing and clearance.',
    listItems: [
      'IICRC Applied Structural Drying Specialists managing every structural drying project',
      'Advanced psychrometric training calculating specific humidity and vapor pressure',
      'Certified Restorer (CR) credentials demonstrating mastery of restoration science',
      'Continuing education in building science and moisture dynamics'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'IICRC Drying Standards Guarantee',
    description: 'We guarantee all structural materials will reach IICRC S500 drying goals - matching moisture content of unaffected materials within one standard deviation - or we continue drying at no cost. If secondary damage occurs due to over-drying or improper technique, we pay for repairs. Our scientific approach is backed by daily monitoring data and final third-party moisture verification available upon request.',
    listItems: [
      'Guaranteed achievement of IICRC S500 drying goals for all structural materials',
      'Daily moisture monitoring proving consistent progress toward drying targets',
      'Zero additional damage from over-drying or improper equipment operation',
      'Third-party moisture verification testing available for high-value properties'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: '24/7 Emergency Structural Drying',
    description: 'Immediate equipment deployment after water damage reduces drying time by up to 60% - our emergency crews respond within 60 minutes with industrial dehumidifiers and air movers. We establish drying chambers and containment barriers on the first visit, beginning psychrometric monitoring immediately. After-hours service includes moisture mapping and equipment placement ensuring optimal drying while you sleep.',
    listItems: [
      '60-minute emergency response with immediate drying equipment deployment',
      'First-visit drying chamber establishment and psychrometric baseline measurement',
      'After-hours equipment placement preventing delays in critical drying timeline',
      'Trailer-mounted desiccant units deployed for large-scale structural drying emergencies'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Building Science Experts',
    description: 'We understand building construction common in Northern Virginia - from brick veneer homes with vapor barriers to concrete block basements and modern SIP panel construction. Our team accounts for regional climate conditions and their impact on drying times, adjusting equipment for humid summers and dry winters. We maintain relationships with local structural engineers for consultation on compromised building components.',
    listItems: [
      'Expertise in Northern Virginia construction methods and material drying characteristics',
      'Knowledge of regional humidity patterns affecting psychrometric calculations',
      'Relationships with local structural engineers for compromised building assessments',
      'Understanding of historic building materials in Alexandria and Arlington requiring specialized drying'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Structural Drying Safety Standards',
    description: 'We maintain safe indoor air quality during aggressive dehumidification by monitoring CO2 levels and ensuring adequate fresh air exchange. Equipment electrical loads are calculated to prevent circuit overloads, with dedicated circuits used for high-amperage desiccant units. We post equipment safety notices and maintain clear pathways preventing trip hazards in occupied homes.',
    listItems: [
      'Indoor air quality monitoring preventing CO2 buildup during sealed drying chambers',
      'Electrical load calculations and dedicated circuits for industrial equipment',
      'Equipment placement ensuring safe egress and preventing trip hazards',
      'Noise level monitoring with sound dampening when operating in occupied spaces'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Structural Drying Performance Data',
    description: 'Our psychrometric approach achieves IICRC drying standards in an average of 3.8 days compared to 5-7 days with conventional equipment placement. We maintain a 98% success rate meeting drying goals without material removal through scientific equipment selection and placement. Over 2,400 structural drying projects completed with average insurance savings of $16,000 through rapid drying preventing demolition.',
    listItems: [
      'Average 3.8-day drying time to IICRC standards using psychrometric protocols',
      '98% success rate achieving drying goals without removing building materials',
      'Over 2,400 structural drying projects across Northern Virginia',
      'Average $16,000 insurance savings through scientific drying preventing demolition'
    ],
    icon: 'BarChart3',
  },
];

// =============================================================================
// COMMERCIAL SERVICES (8)
// =============================================================================

// --- Commercial Water Damage ---
const commercialWaterDamageTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Commercial-Grade Water Extraction Systems',
    description: 'We deploy truck-mounted extractors, industrial dehumidifiers, and thermal imaging cameras designed for large commercial spaces. Our equipment handles high-volume water removal while your business continues operations in unaffected areas.',
    listItems: [
      'Truck-mounted extraction units (1000+ GPM capacity)',
      'FLIR thermal imaging for hidden moisture detection',
      'Industrial LGR dehumidifiers for accelerated drying',
      'Real-time moisture monitoring with cloud reporting'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Commercial Claims Documentation',
    description: 'We work directly with commercial insurance adjusters and provide complete loss documentation including moisture mapping, equipment logs, and business interruption timelines. Our detailed reporting accelerates claim approval and maximizes your coverage.',
    listItems: [
      'Direct adjuster coordination and site walkthroughs',
      'Xactimate estimates with line-item documentation',
      'Business interruption loss documentation support',
      'Contents inventory with depreciation calculations'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'IICRC-Certified Commercial Specialists',
    description: 'Our technicians hold IICRC Water Damage Restoration (WRT) and Applied Structural Drying (ASD) certifications with experience in office buildings, retail centers, and industrial facilities. Every project is supervised by an IICRC-certified project manager.',
    listItems: [
      'IICRC WRT and ASD certified lead technicians',
      'Commercial project managers with 10+ years experience',
      'OSHA-30 certified crews for workplace safety compliance',
      'Background-checked personnel for secure facilities'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Business Continuity Commitment',
    description: 'We guarantee structural drying to industry standards (ANSI/IICRC S500) with documented moisture readings. If moisture levels exceed acceptable standards at project completion, we re-dry affected areas at no additional cost.',
    listItems: [
      'Dry-standard guarantee per IICRC S500 protocols',
      'Documented pre and post moisture content readings',
      'Free re-service if moisture goals not achieved',
      '5-year workmanship warranty on restoration work'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Emergency Commercial Dispatch',
    description: 'Our commercial emergency line connects you to a live project manager 24/7/365. We dispatch crews to Northern Virginia commercial properties within 60 minutes of your call to minimize business interruption and secondary damage.',
    listItems: [
      '60-minute emergency response to commercial sites',
      'Live project manager answers (no answering service)',
      'After-hours building access coordination',
      'Weekend and holiday emergency crews available'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Commercial Specialists',
    description: 'We understand Northern Virginia building codes, commercial insurance requirements, and local restoration standards. Our team has restored offices in Tysons, retail in Arlington, and warehouses in Alexandria.',
    listItems: [
      'Familiar with Fairfax County commercial building codes',
      'Established relationships with local commercial adjusters',
      'Experience with NOVA property management companies',
      'Knowledge of regional commercial construction standards'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Workplace Safety & Compliance',
    description: 'We maintain OSHA compliance, conduct daily safety briefings, and establish contamination barriers to protect building occupants. Our crews follow lockout/tagout procedures and coordinate with facility managers on access and safety protocols.',
    listItems: [
      'OSHA compliance with daily safety documentation',
      'Containment barriers to isolate work zones',
      'Electrical lockout/tagout procedures followed',
      'Air quality monitoring in occupied spaces'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Commercial Restoration Track Record',
    description: 'We have successfully restored over 400 commercial properties in Northern Virginia including Class A office buildings, retail centers, and industrial facilities. Our average project completion time is 30% faster than industry standards.',
    listItems: [
      '400+ commercial properties restored since 2015',
      'Average 5-7 day drying time for standard losses',
      '98% client satisfaction rating from property managers',
      '$50M+ in commercial claims successfully processed'
    ],
    icon: 'BarChart3',
  },
];

// --- Commercial Flood Cleanup ---
const commercialFloodCleanupTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'High-Volume Flood Water Extraction',
    description: 'We deploy submersible pumps, trash pumps, and truck-mounted extractors capable of removing thousands of gallons per hour from flooded commercial buildings. Our equipment handles contaminated floodwater with proper disposal protocols.',
    listItems: [
      'Submersible trash pumps (up to 2000 GPH capacity)',
      'Truck-mounted continuous extraction systems',
      'Commercial air movers (3000+ CFM per unit)',
      'Hydroxyl generators for odor and contamination control'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Flood Insurance Claims Expertise',
    description: 'We work with NFIP policies and commercial flood insurance carriers to document Category 3 water damage and contamination levels. Our detailed scope of loss includes floodwater height documentation, affected materials inventory, and contamination testing results.',
    listItems: [
      'NFIP and private flood policy experience',
      'Category 3 water contamination documentation',
      'Floodwater height marking and photo documentation',
      'Microbiological testing coordination when required'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Flood Restoration Specialists',
    description: 'Our crews are trained in Category 3 water handling, contamination protocols, and large-loss project management. All technicians complete hazardous materials awareness training and maintain current certifications in structural drying and applied microbial remediation.',
    listItems: [
      'IICRC Applied Structural Drying (ASD) certified',
      'Category 3 water contamination training',
      'Hazmat awareness certification for all field staff',
      'Large-loss project coordinators assigned to major floods'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Complete Contamination Removal',
    description: 'We guarantee removal of all contaminated materials per IICRC S500 Category 3 water standards and complete structural drying. Post-remediation verification testing is available to document successful decontamination.',
    listItems: [
      'Category 3 contaminated materials fully removed',
      'ATP surface testing to verify decontamination',
      'Structural drying to <15% moisture content (wood)',
      'Post-remediation air quality testing available'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Flood Emergency Mobilization',
    description: 'When commercial flooding occurs, we mobilize multi-crew teams with pumps and extraction equipment within 90 minutes. Our flood response includes emergency power setup, water extraction, and immediate contamination containment.',
    listItems: [
      '90-minute mobilization for flood emergencies',
      'Multi-crew deployment for large-scale events',
      'Generator-powered equipment for power outage situations',
      'Immediate containment of contaminated floodwater'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Flood Zone Expertise',
    description: 'We understand flood-prone areas in Fairfax County, Arlington, and Alexandria including properties near Four Mile Run, Cameron Run, and Potomac River flood zones. Our team is familiar with local floodplain regulations and elevation certificate requirements.',
    listItems: [
      'Experience with NOVA flood zones and floodplains',
      'Knowledge of local stormwater management failures',
      'Familiarity with regional elevation certificate processes',
      'Coordination with local building inspectors post-flood'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Contaminated Water Safety Measures',
    description: 'Our crews wear appropriate PPE including waterproof suits, respirators, and eye protection when handling Category 3 floodwater. We establish decontamination zones, dispose of hazardous materials properly, and follow CDC guidelines for sewage-contaminated environments.',
    listItems: [
      'Full PPE for Category 3 water exposure (suits, respirators)',
      'Decontamination stations at work zone boundaries',
      'Biohazard waste disposal per EPA regulations',
      'CDC and OSHA guidelines followed for contaminated water'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Large-Scale Flood Restoration Success',
    description: 'We have extracted over 2 million gallons of floodwater from Northern Virginia commercial properties including complete basement floods, multi-story office building floods, and retail center inundations. Our largest single project involved a 45,000 sq ft warehouse flood.',
    listItems: [
      '2M+ gallons of floodwater extracted from commercial sites',
      'Successfully restored 45,000 sq ft warehouse flood (2023)',
      'Average 10-14 day timeline for complete flood restoration',
      'Zero failed post-remediation contamination tests'
    ],
    icon: 'BarChart3',
  },
];

// --- Large Loss Restoration ---
const largeLossRestorationTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Enterprise-Scale Restoration Equipment',
    description: 'We maintain a fleet of commercial-grade equipment including trailer-mounted desiccant dehumidifiers, industrial generators, and temporary climate control systems for catastrophic losses. Our project management software provides real-time equipment monitoring and moisture tracking across multiple buildings.',
    listItems: [
      'Trailer-mounted desiccant dehumidifiers (1000+ pints/day)',
      'Temporary HVAC systems for climate-controlled drying',
      'Generator packages up to 200kW for power loss scenarios',
      'Cloud-based project management with real-time dashboards'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Complex Claims Management',
    description: 'We coordinate with TPA firms, insurance carriers, and forensic accountants on large-loss claims including business interruption analysis and extra expense documentation. Our team provides daily loss updates, comprehensive Xactimate estimates, and segregated billing for multi-policy claims.',
    listItems: [
      'TPA and carrier project manager coordination',
      'Daily loss progression reports and photo documentation',
      'Business interruption worksheets and revenue loss data',
      'Segregated estimates for property, BI, and extra expense'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Large Loss Project Leadership',
    description: 'Our large-loss division is led by IICRC-certified Master Restorers with experience managing multi-million dollar catastrophic events. Each project is assigned a dedicated project manager, site supervisor, and safety coordinator with daily executive briefings.',
    listItems: [
      'IICRC Master Restorer certification (project leads)',
      'Dedicated large-loss project managers (not shared)',
      'On-site safety coordinators for complex projects',
      'Executive briefing calls with stakeholders (daily)'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Performance-Based Restoration Standards',
    description: 'We guarantee adherence to project timelines with liquidated delay penalties if milestones are missed due to our performance. Our restoration work meets or exceeds IICRC S500/S520 standards with third-party verification available.',
    listItems: [
      'Contractual timeline commitments with milestone dates',
      'Third-party inspection coordination (IEP, CIH, engineers)',
      'Performance bonds available for projects >$500K',
      'Quality assurance audits at 25%, 50%, 75%, and final'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Catastrophic Loss Mobilization',
    description: 'We maintain emergency response agreements with commercial clients for immediate large-loss deployment. Our catastrophic response includes multi-crew mobilization, emergency board-up, temporary power, and 24-hour security coordination within 2 hours of notification.',
    listItems: [
      '2-hour mobilization for pre-contracted large-loss clients',
      'Multi-crew deployment (10+ techs for major events)',
      'Emergency services (board-up, tarping, temporary power)',
      '24-hour security guard coordination for unsecured buildings'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Regional Large Loss Coordination',
    description: 'We have managed catastrophic losses across Northern Virginia including multi-building campus events, high-rise office buildings, and critical infrastructure facilities. Our team coordinates with local authorities, building departments, and utility companies on complex restoration projects.',
    listItems: [
      'Experience with NOVA multi-building campus restoration',
      'Coordination with Fairfax County, Arlington, Alexandria AHJs',
      'Utility company liaison for power, water, gas restoration',
      'Critical infrastructure experience (data centers, hospitals)'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Job Site Safety Program',
    description: 'We implement formal site-specific safety plans (SSSP) with daily toolbox talks, hazard analysis, and OSHA compliance documentation. Our safety program includes fall protection, confined space protocols, and emergency action plans for complex large-loss environments.',
    listItems: [
      'Site-Specific Safety Plans (SSSP) for each project',
      'Daily toolbox talks with hazard analysis documentation',
      'Fall protection and confined space entry protocols',
      'Emergency action plans and evacuation procedures'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Catastrophic Loss Track Record',
    description: 'We have successfully managed large-loss projects exceeding $5 million in total damages including multi-story office building floods, manufacturing facility fires, and campus-wide storm damage events. Our largest single project was a $12M mixed-use development restoration.',
    listItems: [
      '$12M largest single project (mixed-use development, 2022)',
      'Average large-loss project completion: 90-120 days',
      '25+ projects exceeding $1M in restoration costs',
      '100% client retention rate on large-loss accounts'
    ],
    icon: 'BarChart3',
  },
];

// --- Commercial Sewage Cleanup ---
const commercialSewageCleanupTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Biohazard Remediation Equipment',
    description: 'We use commercial-grade sewage extractors, antimicrobial fogging systems, and negative air machines with HEPA filtration to safely remove black water contamination. Our equipment includes ATP meters for surface contamination verification and ULV foggers for complete disinfection.',
    listItems: [
      'Sewage-rated vacuum extractors with biohazard disposal',
      'Negative air machines with HEPA filtration (containment)',
      'ULV foggers with EPA-registered antimicrobial agents',
      'ATP luminometers for post-cleaning verification'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Category 3 Water Claims Documentation',
    description: 'We provide detailed sewage backup documentation including source identification, contamination extent mapping, and affected materials inventory. Our claims packages include biohazard disposal manifests, antimicrobial treatment logs, and post-remediation verification testing results.',
    listItems: [
      'Category 3 water source documentation (sewer line backup)',
      'Contamination extent mapping with photo documentation',
      'Biohazard waste disposal manifests for insurance records',
      'Post-remediation ATP testing results for claim closure'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Biohazard Remediation Specialists',
    description: 'Our technicians are IICRC Applied Microbial Remediation Technician (AMRT) certified with bloodborne pathogen training and Category 3 water handling protocols. Every sewage project is supervised by a certified project manager with biohazard remediation experience.',
    listItems: [
      'IICRC AMRT (Applied Microbial Remediation) certified',
      'OSHA Bloodborne Pathogens Standard training',
      'Category 3 water and biohazard handling protocols',
      'Restaurant and commercial kitchen remediation experience'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Complete Decontamination Assurance',
    description: 'We guarantee removal of all sewage-contaminated materials and complete surface decontamination to ATP cleanliness standards. Post-remediation verification testing confirms surfaces meet sanitary thresholds before project completion.',
    listItems: [
      'All sewage-contaminated porous materials removed',
      'ATP surface testing <500 RLU (sanitary threshold)',
      'EPA-registered disinfectants applied per label rates',
      'Certificate of decontamination provided at completion'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Sewage Emergency Containment',
    description: 'Sewage backups require immediate response to prevent contamination spread and health hazards. We dispatch biohazard-trained crews within 60 minutes to contain sewage, extract black water, and establish contamination barriers to protect building occupants.',
    listItems: [
      '60-minute emergency response for sewage backups',
      'Immediate contamination containment and isolation',
      'Biohazard-trained crews with proper PPE',
      'After-hours service for restaurants and 24/7 facilities'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Sewer System Knowledge',
    description: 'We understand aging sewer infrastructure in older Northern Virginia commercial districts and common backup points in Alexandria, Arlington, and Fairfax County. Our team coordinates with local plumbers and public works departments on sewer line repairs and clean-out access.',
    listItems: [
      'Experience with NOVA aging sewer infrastructure issues',
      'Coordination with commercial plumbing contractors',
      'Knowledge of public vs. private sewer line responsibility',
      'Familiarity with health department notification requirements'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Biohazard Safety & Compliance',
    description: 'Our crews follow OSHA Bloodborne Pathogens Standard with full PPE including Tyvek suits, nitrile gloves, face shields, and respirators. We establish decontamination zones, use hospital-grade disinfectants, and properly dispose of biohazard waste per Virginia DEQ regulations.',
    listItems: [
      'OSHA Bloodborne Pathogens Standard compliance (29 CFR 1910.1030)',
      'Full biohazard PPE (Tyvek, N95/P100, face shields, gloves)',
      'Decontamination zones and waste staging areas',
      'Virginia DEQ biohazard waste disposal compliance'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Commercial Sewage Remediation Success',
    description: 'We have successfully decontaminated over 200 commercial sewage backups including restaurants, office buildings, retail spaces, and medical facilities. Our post-remediation testing shows 100% pass rate for ATP surface cleanliness verification.',
    listItems: [
      '200+ commercial sewage backup remediations completed',
      '100% pass rate on post-remediation ATP testing',
      'Zero health department violations or failed inspections',
      'Average 3-5 day timeline from backup to reopening'
    ],
    icon: 'BarChart3',
  },
];

// --- Commercial Mold Remediation ---
const commercialMoldRemediationTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Professional Mold Assessment & Removal',
    description: 'We utilize FLIR thermal cameras for moisture intrusion detection, air sampling equipment for spore count analysis, and negative air machines with HEPA filtration for containment. Our remediation includes HEPA vacuums, antimicrobial treatments, and post-remediation verification testing.',
    listItems: [
      'FLIR thermal imaging for hidden moisture and mold',
      'Air-O-Cell cassettes for spore count analysis (pre/post)',
      'Negative air machines with HEPA filters (containment)',
      'HEPA vacuums and antimicrobial fogging systems'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Mold Claims & Testing Documentation',
    description: 'We coordinate with industrial hygienists and environmental consultants to provide third-party mold assessments, clearance testing, and protocol development. Our insurance documentation includes pre-remediation testing, scope of work, and post-clearance lab results.',
    listItems: [
      'Third-party IH coordination for mold protocols',
      'Pre-remediation air and surface sampling results',
      'Detailed remediation scope per IICRC S520 standards',
      'Post-remediation clearance testing and lab reports'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Certified Mold Remediation Specialists',
    description: 'Our remediation technicians are IICRC Applied Microbial Remediation Technician (AMRT) certified with experience in occupied commercial buildings. We maintain strict adherence to IICRC S520 standards and coordinate with certified industrial hygienists on complex projects.',
    listItems: [
      'IICRC AMRT certified mold remediation technicians',
      'IICRC S520 standard adherence (mold remediation)',
      'Coordination with certified IH firms for protocols',
      'Commercial containment and occupied building experience'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Clearance Testing Guarantee',
    description: 'We guarantee successful post-remediation clearance testing with spore counts below background levels or protocol specifications. If clearance testing fails, we re-remediate affected areas at no additional cost until clearance is achieved.',
    listItems: [
      'Post-remediation clearance testing included in scope',
      'Spore counts below outdoor background or IH thresholds',
      'Free re-remediation if clearance testing fails',
      'Visual inspection clearance per IICRC S520 criteria'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Mold Emergency Assessment',
    description: 'When mold contamination is discovered in commercial spaces, we provide emergency containment and tenant notification support within 24 hours. Our rapid response includes immediate visual assessment, moisture source identification, and temporary containment setup.',
    listItems: [
      '24-hour response for mold emergencies',
      'Immediate visual assessment and moisture mapping',
      'Emergency containment for tenant-occupied areas',
      'Tenant notification support and safety coordination'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Building Code Knowledge',
    description: 'We understand Virginia mold remediation regulations, Fairfax County health department requirements, and commercial building ventilation standards. Our team has remediated mold in Class A office buildings, retail centers, and schools throughout Northern Virginia.',
    listItems: [
      'Virginia mold remediation licensing and compliance',
      'Fairfax County Health Department coordination experience',
      'Commercial HVAC system decontamination protocols',
      'Experience with NOVA property management companies'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Containment & Worker Protection',
    description: 'We establish negative pressure containment with HEPA-filtered air scrubbers, install polyethylene barriers, and create decontamination chambers for worker egress. All technicians wear respirators (N95 minimum, P100 for heavy growth) and disposable suits to prevent cross-contamination.',
    listItems: [
      'Negative pressure containment with HEPA air scrubbers',
      'Polyethylene barrier systems (6-mil minimum)',
      'Decontamination chambers for personnel and equipment',
      'Respiratory protection (N95/P100 per exposure level)'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Commercial Mold Remediation Success Rate',
    description: 'We have successfully remediated over 300 commercial mold projects with a 99% first-time clearance rate. Our largest project involved a 30,000 sq ft office building with HVAC system contamination requiring full ductwork cleaning and replacement.',
    listItems: [
      '300+ commercial mold remediation projects completed',
      '99% first-time clearance testing pass rate',
      'Largest project: 30,000 sq ft office with HVAC contamination',
      'Zero tenant health complaints post-remediation'
    ],
    icon: 'BarChart3',
  },
];

// --- Commercial Fire & Smoke Cleanup ---
const commercialFireSmokeCleanupTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Fire & Smoke Restoration Technology',
    description: 'We deploy thermal foggers, ozone generators, and hydroxyl generators for smoke odor elimination along with ultrasonic cleaning systems for contents restoration. Our equipment includes HEPA vacuums for soot removal and specialized chemical sponges for smoke residue cleaning.',
    listItems: [
      'Thermal foggers and hydroxyl generators (odor neutralization)',
      'Ultrasonic cleaning systems for contents restoration',
      'HEPA-filtered vacuums for fine soot particle removal',
      'Chemical dry sponges and specialized smoke cleaners'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Fire Loss Claims Documentation',
    description: 'We provide comprehensive fire loss documentation including complete contents inventory, pack-out lists, structural damage assessment, and smoke migration documentation. Our Xactimate estimates separate fire damage, smoke damage, and water damage from fire suppression.',
    listItems: [
      'Complete contents inventory with condition assessment',
      'Pack-out documentation and off-site storage tracking',
      'Segregated estimates (fire, smoke, water damage)',
      'Salvageable vs. non-salvageable materials assessment'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Fire & Smoke Restoration Experts',
    description: 'Our technicians are IICRC Fire & Smoke Restoration Technician (FSRT) certified with experience in commercial fire cleanup including offices, restaurants, and retail spaces. We coordinate with fire marshals, structural engineers, and environmental consultants on complex fire losses.',
    listItems: [
      'IICRC Fire & Smoke Restoration (FSRT) certified',
      'Commercial kitchen fire cleanup experience',
      'Coordination with fire marshals and engineers',
      'Contents restoration and inventory specialists'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Odor-Free Restoration Guarantee',
    description: 'We guarantee complete smoke odor elimination from all affected areas using thermal fogging, ozone treatment, or hydroxyl generation. If smoke odor persists after treatment, we will re-treat affected areas at no additional cost until odor-free conditions are achieved.',
    listItems: [
      'Complete smoke odor elimination guaranteed',
      'Free re-treatment if odor persists after initial service',
      'Thermal fogging, ozone, or hydroxyl treatment included',
      'Post-restoration walkthrough with decision-makers'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Post-Fire Emergency Services',
    description: 'After fire department clearance, we provide immediate board-up, emergency tarping, and security coordination to protect your property. Our crews mobilize within 90 minutes to begin debris removal, contents pack-out, and smoke damage assessment.',
    listItems: [
      '90-minute response after fire department clearance',
      'Emergency board-up and roof tarping services',
      'Immediate contents pack-out to prevent further damage',
      '24-hour security guard coordination for unsecured buildings'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Fire Restoration Experience',
    description: 'We have restored fire-damaged commercial properties across Northern Virginia and work directly with Fairfax County, Arlington, and Alexandria fire marshals on clearance and occupancy permits. Our team understands local building code requirements for fire-damaged structures.',
    listItems: [
      'Coordination with NOVA fire marshals and building inspectors',
      'Experience obtaining re-occupancy permits post-fire',
      'Knowledge of local building code fire damage requirements',
      'Established relationships with commercial fire adjusters'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Post-Fire Safety Measures',
    description: 'Our crews conduct structural stability assessments before entry, test for asbestos in damaged materials, and monitor air quality for carbon monoxide and other combustion byproducts. We follow OSHA guidelines for fire-damaged structures and wear appropriate respiratory protection.',
    listItems: [
      'Structural engineer consultation before entry (if needed)',
      'Asbestos testing in fire-damaged materials (pre-1980 buildings)',
      'Air quality monitoring (CO, VOCs, combustion byproducts)',
      'Respiratory protection (P100 filters minimum for soot)'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Commercial Fire Restoration Success',
    description: 'We have successfully restored over 150 commercial fire losses ranging from small kitchen fires to complete building fires with structural damage. Our average timeline from fire loss to business reopening is 45-60 days for moderate damage events.',
    listItems: [
      '150+ commercial fire and smoke damage restorations',
      'Average 45-60 day timeline for moderate fire damage',
      '95% contents salvage rate on restorable items',
      'Successfully restored and reopened 12 restaurants post-fire'
    ],
    icon: 'BarChart3',
  },
];

// --- Commercial Storm Damage ---
const commercialStormDamageTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Storm Damage Assessment & Restoration',
    description: 'We use drone technology for roof inspections, moisture meters for water intrusion detection, and thermal imaging for hidden damage assessment. Our equipment includes industrial dehumidifiers for rapid structural drying and temporary weatherization materials for emergency protection.',
    listItems: [
      'Drone roof inspections with high-resolution imaging',
      'Thermal imaging for water intrusion and wind damage',
      'Industrial dehumidification for storm water drying',
      'Temporary roof systems and emergency weather protection'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Storm Damage Claims Support',
    description: 'We provide detailed storm damage documentation including pre-loss condition evidence, wind speed correlation with damage patterns, and comprehensive scope of loss. Our team coordinates with public adjusters and engineering firms on disputed claims and causation analysis.',
    listItems: [
      'Comprehensive damage documentation with aerial imagery',
      'Wind speed and hail size correlation analysis',
      'Engineering referrals for structural damage assessment',
      'Supplement support for undocumented damage discovery'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Storm Restoration Specialists',
    description: 'Our project managers are experienced in commercial storm restoration with IICRC certifications in water damage and structural drying. We coordinate with licensed roofers, glaziers, and structural engineers to provide complete storm damage restoration.',
    listItems: [
      'IICRC WRT and ASD certified project managers',
      'Licensed commercial roofing contractor partnerships',
      'Structural engineer coordination for wind/hail damage',
      'Emergency response team training (CAT events)'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Weather-Tight Restoration Guarantee',
    description: 'We guarantee weather-tight repairs and complete structural drying after storm damage. Our workmanship warranty covers all restoration work for 5 years including roof repairs, window replacements, and structural repairs.',
    listItems: [
      'Weather-tight building envelope after emergency repairs',
      'Structural drying to IICRC S500 standards guaranteed',
      '5-year workmanship warranty on restoration repairs',
      'Manufacturer warranties on roofing and building materials'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Storm Emergency Response',
    description: 'During severe weather events, we deploy emergency response teams for immediate tarping, board-up, and water extraction. Our storm response includes priority service agreements for commercial clients with 2-hour mobilization during CAT events.',
    listItems: [
      '2-hour mobilization during active storm events (CAT)',
      'Emergency roof tarping and board-up services',
      'Immediate water extraction for storm intrusion',
      'Priority response agreements for commercial clients'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Storm Patterns',
    description: 'We understand Northern Virginia weather patterns including severe thunderstorms, winter nor\'easters, and occasional hurricane remnants. Our team has restored storm damage from major events including derecho windstorms and heavy snow roof collapses.',
    listItems: [
      'Experience with NOVA derecho and severe wind events',
      'Winter storm and ice dam damage restoration',
      'Hurricane and tropical storm water intrusion cleanup',
      'Coordination with local emergency management (severe events)'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Storm Damage Site Safety',
    description: 'We assess structural integrity before entry, identify electrical hazards from water intrusion, and establish fall protection for roof work. Our crews follow OSHA guidelines for debris removal, temporary roof access, and working in unstable post-storm conditions.',
    listItems: [
      'Structural stability assessment before building entry',
      'Electrical hazard identification and power isolation',
      'Fall protection systems for roof and elevated work',
      'Debris removal with hazard monitoring (nails, glass, etc.)'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Commercial Storm Restoration Track Record',
    description: 'We have restored over 250 commercial properties after storm events including complete roof replacements, multi-building wind damage, and severe hail damage to retail centers. Our largest storm event response involved 15 simultaneous commercial properties during a 2019 derecho.',
    listItems: [
      '250+ commercial storm damage restoration projects',
      'Largest CAT response: 15 simultaneous properties (derecho 2019)',
      'Average 30-90 day timeline depending on damage severity',
      '98% customer satisfaction on emergency storm response'
    ],
    icon: 'BarChart3',
  },
];

// --- Commercial Roof Leak ---
const commercialRoofLeakTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Roof Leak Detection & Repair',
    description: 'We utilize infrared thermography to locate hidden moisture in roofing systems, moisture meters for substrate saturation analysis, and nuclear moisture scanning for non-invasive testing. Our drying equipment includes roof cavity drying systems and specialized injection drying for wet insulation.',
    listItems: [
      'Infrared thermography for wet insulation detection',
      'Nuclear moisture meters (non-destructive testing)',
      'Roof cavity drying systems for trapped moisture',
      'Injectidry systems for wet roof insulation'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Roof Leak Insurance Claims',
    description: 'We provide detailed roof leak documentation including infrared scan results, core samples of roofing materials, and moisture mapping of affected areas. Our claims support includes coordination with roofing contractors on repair vs. replacement analysis and code upgrade requirements.',
    listItems: [
      'Infrared roof scan documentation and moisture maps',
      'Roofing contractor coordination for repair estimates',
      'Core sample analysis and roof system condition reports',
      'Code upgrade cost analysis (if replacement required)'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Commercial Roofing Restoration Experts',
    description: 'Our technicians are trained in commercial flat roof systems including TPO, EPDM, modified bitumen, and built-up roofing. We coordinate with licensed commercial roofers and hold IICRC Applied Structural Drying certifications for roof cavity and insulation drying.',
    listItems: [
      'Commercial flat roof system expertise (TPO, EPDM, BUR)',
      'IICRC ASD certified for structural roof drying',
      'Licensed roofing contractor partnerships',
      'Experience with occupied building roof leak mitigation'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Complete Roof Drying Guarantee',
    description: 'We guarantee complete drying of roof deck, insulation, and structural components to acceptable moisture levels per IICRC standards. If moisture persists after our drying protocol, we will continue drying at no additional cost until dry standards are achieved.',
    listItems: [
      'Roof deck and insulation dried to <15% MC (wood)',
      'Documented moisture readings pre and post drying',
      'Free extended drying if moisture goals not met',
      'Coordination with roofer for permanent leak repair'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Roof Leak Emergency Response',
    description: 'When commercial roof leaks cause active water intrusion, we provide immediate tarping, water extraction, and ceiling protection within 60 minutes. Our emergency response includes temporary roof patches, interior water diversion, and coordination with emergency roofing contractors.',
    listItems: [
      '60-minute emergency response for active roof leaks',
      'Immediate roof tarping and temporary patching',
      'Interior water extraction and ceiling protection',
      'Emergency roofing contractor dispatch coordination'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Commercial Roofing Knowledge',
    description: 'We understand common flat roof issues in Northern Virginia including ponding water, flashing failures, and membrane deterioration from freeze-thaw cycles. Our team has experience with local commercial roof types and coordinates with regional roofing contractors.',
    listItems: [
      'Flat roof ponding and drainage issue familiarity',
      'Experience with NOVA freeze-thaw membrane damage',
      'Knowledge of local commercial roofing contractors',
      'Building code compliance for roof penetrations and drains'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Roof Work Safety Standards',
    description: 'All roof access work follows OSHA fall protection requirements including guardrails, safety harnesses, and warning line systems. We coordinate with building management on roof access procedures, equipment rigging, and tenant notification for overhead work.',
    listItems: [
      'OSHA fall protection compliance for roof access',
      'Safety harness and anchor point systems',
      'Building management coordination for roof access',
      'Tenant notification for overhead drying equipment'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Commercial Roof Leak Restoration Success',
    description: 'We have successfully dried and restored over 300 commercial roof leaks including large warehouse roofs, multi-story office buildings, and retail centers. Our average roof cavity drying timeline is 7-14 days depending on insulation saturation levels.',
    listItems: [
      '300+ commercial roof leak water damage restorations',
      'Average 7-14 day drying timeline for roof cavities',
      'Successfully dried roof systems up to 50,000 sq ft',
      '95% success rate drying wet insulation in place (no removal)'
    ],
    icon: 'BarChart3',
  },
];

// =============================================================================
// COMMERCIAL SPECIALTY SERVICES (4)
// =============================================================================

// --- Healthcare Facilities ---
const healthcareFacilitiesTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Medical-Grade Restoration Equipment',
    description: 'Our healthcare facility restoration uses HEPA-filtered negative air machines, ATP surface testing, and infrared thermal imaging to maintain sterile environments. We deploy pharmaceutical-grade dehumidifiers and antimicrobial treatments approved for medical settings.',
    listItems: [
      'HEPA 500 negative air scrubbers with 99.97% filtration for infection control',
      'ATP bioluminescence testing for surface sterility verification',
      'Medical-grade desiccant dehumidifiers for sensitive equipment areas',
      'Thermal imaging to detect hidden moisture without invasive procedures'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Seamless Claims for Healthcare Properties',
    description: 'We handle complex healthcare property claims involving business interruption, medical equipment, and regulatory compliance costs. Our documentation includes detailed loss assessments for sterilization equipment, patient records systems, and facility downtime.',
    listItems: [
      'Pre-loss facility surveys to expedite claims processing',
      'Detailed equipment inventories including medical devices and systems',
      'Business interruption documentation for patient care disruptions',
      'Direct billing coordination with commercial healthcare insurers'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'HIPAA-Trained Restoration Specialists',
    description: 'Every technician completes HIPAA privacy training, bloodborne pathogen certification, and healthcare facility protocols. Our team holds IICRC certifications plus specialized credentials for medical environment restoration.',
    listItems: [
      'HIPAA privacy and security compliance training for all personnel',
      'OSHA Bloodborne Pathogen Standard certification',
      'IICRC Applied Microbial Remediation Technician credentials',
      'Healthcare Construction Certificate (HCCC) for infection control'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Regulatory Compliance Assurance',
    description: 'We guarantee all restoration work meets Joint Commission standards, CDC guidelines, and state health department requirements. If your facility fails inspection due to our work, we return immediately to correct it at no charge.',
    listItems: [
      'Joint Commission Environment of Care standards compliance',
      'CDC Guidelines for Environmental Infection Control adherence',
      'State health department re-inspection guarantee',
      'Certificate of Occupancy support for affected areas'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Critical Healthcare Emergency Response',
    description: 'Medical facilities cannot close. Our emergency response team arrives within 60 minutes with containment equipment to isolate affected areas while maintaining patient care operations. We work nights and weekends to minimize disruption to healthcare services.',
    listItems: [
      '60-minute emergency response for active medical facilities',
      'Immediate containment barriers to maintain operational zones',
      'After-hours scheduling to avoid patient care interruptions',
      'Emergency equipment decontamination and relocation services'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Healthcare Specialists',
    description: 'We serve hospitals, clinics, and medical offices throughout Fairfax, Loudoun, Arlington, and Prince William counties. Our team knows local health department inspectors and regional Joint Commission requirements.',
    listItems: [
      'Established relationships with VA health department inspectors',
      'Experience with Inova, Kaiser, and regional hospital systems',
      'Knowledge of Virginia Board of Health regulations',
      'Local medical equipment vendors for emergency replacements'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Infection Prevention & Control Measures',
    description: 'Our Infection Control Risk Assessment (ICRA) protocols include Type IV barriers, anteroom construction, and continuous air pressure monitoring. We follow CDC and FGI Guidelines for Design and Construction of Healthcare Facilities.',
    listItems: [
      'ICRA Class III and IV barrier construction for high-risk areas',
      'Continuous negative air pressure monitoring with alarms',
      'Dedicated PPE protocols including respirators and sterile gloves',
      'Waste segregation following biohazardous material protocols'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Healthcare Facility Success Metrics',
    description: 'We have restored over 150 healthcare facilities in Northern Virginia without a single failed health inspection. Our average restoration time is 40% faster than industry standard while maintaining sterile protocols.',
    listItems: [
      '150+ healthcare facilities restored with zero failed inspections',
      '100% Joint Commission compliance rate on restored areas',
      'Average 3.2 days faster completion than industry benchmarks',
      '99.8% patient area uptime during restoration projects'
    ],
    icon: 'BarChart3',
  },
];

// --- Hospitality & Multifamily ---
const hospitalityMultifamilyTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Multi-Unit Restoration Technology',
    description: 'We deploy wireless moisture monitoring systems across multiple units simultaneously, using cloud-based dashboards for property managers to track progress in real-time. Our equipment fleet includes low-profile dehumidifiers designed for occupied spaces and quiet operation.',
    listItems: [
      'Wireless moisture sensor networks monitoring 50+ units simultaneously',
      'Cloud-based real-time dashboards for property management teams',
      'Ultra-quiet desiccant dehumidifiers rated below 50dB for occupied units',
      'Thermal imaging surveys to identify hidden leaks across floors and walls'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Complex Multi-Unit Claims Management',
    description: 'We handle master policy claims, individual unit owner claims, and loss-of-use documentation for displaced tenants. Our team coordinates with property insurance carriers, HOA master policies, and individual condo association claims simultaneously.',
    listItems: [
      'Master policy coordination for apartment and condo associations',
      'Individual unit damage assessments for owner insurance claims',
      'Loss-of-use documentation for tenant relocation expenses',
      'Subrogation support for inter-unit damage responsibility'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Hospitality & Multi-Family Specialists',
    description: 'Our technicians are trained in occupied-space restoration, tenant communication protocols, and multi-unit project coordination. We maintain background checks and professional conduct standards required for hospitality environments.',
    listItems: [
      'Background-checked technicians for occupied residential properties',
      'Multi-unit project management certification and coordination training',
      'Customer service training for tenant and guest interactions',
      'IICRC Water Damage Restoration and Applied Structural Drying certifications'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Tenant Satisfaction Guarantee',
    description: 'We guarantee professional conduct in all occupied units and common areas. If any tenant files a valid complaint about our team\'s behavior or work quality, we will re-do the work and provide a rent credit consultation to the property manager.',
    listItems: [
      'Professional conduct guarantee with all tenants and guests',
      'Work quality satisfaction or we return to correct it at no charge',
      'Property protection guarantee for common areas and hallways',
      'Completion timeline guarantee or rent credit consultation support'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Rapid Multi-Unit Emergency Response',
    description: 'Major leaks spread fast in multi-story buildings. Our team responds within 60 minutes with multi-unit containment equipment to prevent cascading damage to floors below. We coordinate immediate tenant notifications and temporary relocation as needed.',
    listItems: [
      '60-minute response time for multi-unit water emergencies',
      'Vertical damage assessment teams for multi-story buildings',
      'Emergency tenant notification and relocation coordination',
      'Immediate source isolation to prevent cascading unit damage'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Property Specialists',
    description: 'We work with major property management companies throughout Fairfax, Arlington, Loudoun, and Alexandria. Our team knows local housing codes, HOA requirements, and preferred vendor lists for regional property managers.',
    listItems: [
      'Preferred vendor for 40+ property management companies in NoVA',
      'Experience with Greystar, AvalonBay, and regional apartment communities',
      'Knowledge of Virginia landlord-tenant laws and notice requirements',
      'Established relationships with local HOA management companies'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Occupied Space Safety Standards',
    description: 'We maintain strict protocols for working in occupied residential and hospitality spaces, including hallway protection, elevator padding, common area barriers, and after-hours quiet zones. All equipment is secured and locked daily.',
    listItems: [
      'Common area protection including hallways, elevators, and lobbies',
      'Quiet hours compliance for occupied residential buildings',
      'Equipment security protocols with daily lock-up procedures',
      'Slip-resistant matting and warning signage in all work zones'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Multi-Unit Restoration Success',
    description: 'We have restored over 2,000 individual units across 200+ apartment and condo properties in Northern Virginia. Our average tenant satisfaction rating is 4.8/5.0 and 95% of property managers rehire us for future incidents.',
    listItems: [
      '2,000+ individual units restored across NoVA properties',
      '4.8/5.0 average tenant satisfaction rating on occupied restorations',
      '95% property manager retention rate for repeat business',
      'Average 5.2 days per unit restoration with minimal tenant disruption'
    ],
    icon: 'BarChart3',
  },
];

// --- Municipal & Education ---
const municipalEducationTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Large-Scale Public Facility Equipment',
    description: 'Our equipment fleet handles gymnasium-sized spaces, auditoriums, and multi-wing school buildings with industrial-capacity dehumidifiers and air movers. We use non-toxic, child-safe antimicrobial treatments approved for educational environments.',
    listItems: [
      'Industrial LGR dehumidifiers capable of 200+ pint/day extraction',
      'High-velocity air movers designed for large open spaces like gymnasiums',
      'Child-safe, EPA-registered antimicrobial treatments for schools',
      'Moisture mapping systems for multi-wing campus buildings'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Public Entity Claims Navigation',
    description: 'We specialize in government property claims, school board insurance policies, and public entity self-insurance funds. Our documentation meets state procurement requirements and includes detailed scope-of-work specifications for board approval.',
    listItems: [
      'Virginia Public Procurement Act (VPPA) compliant documentation',
      'School board insurance and self-insurance fund claim experience',
      'Detailed scope documentation for public entity approval processes',
      'Emergency services exemption coordination for rapid response'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Background-Checked Public Facility Technicians',
    description: 'Every team member passes background checks required for school and government facility access. Our technicians hold IICRC certifications and complete child safety awareness training for educational environments.',
    listItems: [
      'FBI and state background checks for all school facility personnel',
      'Child safety awareness and school environment protocol training',
      'IICRC Water Damage Restoration Technician certifications',
      'ADA compliance training for accessible facility requirements'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Public Safety Compliance Guarantee',
    description: 'We guarantee all restoration work meets ADA accessibility standards, Virginia fire marshal requirements, and local building codes for public occupancy. If your facility fails inspection due to our work, we correct it immediately at no additional cost.',
    listItems: [
      'ADA accessibility compliance for all public access areas',
      'Virginia Uniform Statewide Building Code adherence guarantee',
      'Fire marshal re-inspection guarantee for affected areas',
      'Certificate of Occupancy support for educational facilities'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'School Schedule-Aware Emergency Response',
    description: 'We understand school schedules cannot wait. Our emergency response team mobilizes within 60 minutes and works nights, weekends, and school breaks to minimize instructional time loss. We coordinate with principals and facility directors for rapid decision-making.',
    listItems: [
      '60-minute emergency response for active school facilities',
      'Night and weekend scheduling to avoid instructional disruption',
      'School break and summer intensive restoration planning',
      'Direct coordination with principals and facility directors'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia School System Experts',
    description: 'We serve Fairfax County Public Schools, Loudoun County Schools, Arlington Public Schools, and municipal government facilities throughout Northern Virginia. Our team knows state education facility requirements and local procurement processes.',
    listItems: [
      'Approved vendor for multiple NoVA school districts',
      'Experience with FCPS, LCPS, APS, and PWCS facilities',
      'Knowledge of Virginia Department of Education facility standards',
      'Established relationships with county facility management departments'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Child-Safe Public Facility Protocols',
    description: 'We use only non-toxic, child-safe cleaning products and maintain strict containment barriers to prevent student access to work areas. All equipment is secured and electrical cords are protected to meet playground and school safety standards.',
    listItems: [
      'Child-safe, non-toxic cleaning and antimicrobial products only',
      'Strict containment barriers preventing student access to work zones',
      'Electrical safety protocols including GFCI protection and cord covers',
      'Daily equipment security sweeps in educational environments'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Public Facility Restoration Success',
    description: 'We have restored over 80 schools and municipal buildings in Northern Virginia with zero lost instructional days due to restoration delays. Our average project completion is 35% faster than budgeted timelines.',
    listItems: [
      '80+ schools and municipal buildings restored in NoVA',
      'Zero instructional days lost due to restoration project delays',
      '35% faster average completion than school board budgeted timelines',
      '100% compliance rate on state education facility inspections'
    ],
    icon: 'BarChart3',
  },
];

// --- Industrial Facilities ---
const industrialFacilitiesTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Heavy-Duty Industrial Restoration Equipment',
    description: 'Our industrial equipment fleet includes trailer-mounted desiccant dehumidifiers, pneumatic water extraction systems, and explosion-proof air movers for hazardous environments. We deploy industrial hygiene monitoring equipment to track air quality during restoration.',
    listItems: [
      'Trailer-mounted desiccant dehumidifiers processing 2000+ CFM',
      'Explosion-proof (Class I, Division 1) air movers for hazardous locations',
      'Pneumatic and diesel-powered extraction systems for areas without power',
      'Real-time particulate and VOC monitoring for industrial hygiene'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Complex Industrial Claims Management',
    description: 'We document production downtime losses, contaminated inventory, and specialized equipment damage for commercial property and business interruption claims. Our reports include detailed cost analysis for machinery rehabilitation and production timeline impacts.',
    listItems: [
      'Business interruption and production downtime documentation',
      'Contaminated raw material and finished goods inventory assessment',
      'Specialized machinery and equipment damage evaluation',
      'Supply chain disruption impact analysis for comprehensive claims'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Industrial Safety-Certified Technicians',
    description: 'Our technicians hold OSHA 30-hour construction safety certification, confined space entry permits, and hazardous materials handling credentials. Many team members have prior manufacturing or industrial facility experience.',
    listItems: [
      'OSHA 30-Hour Construction Safety certification for all technicians',
      'Confined space entry certification for tank and vessel work',
      'HAZWOPER 40-hour training for hazardous material environments',
      'Forklift and aerial lift operation certifications for warehouse work'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Production Continuity Guarantee',
    description: 'We guarantee minimal disruption to ongoing production operations. If our restoration work causes unplanned production downtime beyond agreed-upon schedules, we will credit costs associated with the delay and expedite completion at no additional charge.',
    listItems: [
      'Production schedule adherence guarantee with penalty credits',
      'Equipment isolation protocols to maintain operational areas',
      'Expedited completion guarantee if timeline delays occur',
      'Environmental compliance guarantee for industrial discharge permits'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Industrial Emergency Response Team',
    description: 'Production facilities cannot afford extended downtime. Our emergency industrial response team deploys within 90 minutes with heavy equipment, including trailer-mounted systems and portable power. We work around production schedules 24/7.',
    listItems: [
      '90-minute emergency response with heavy industrial equipment',
      'Trailer-mounted systems and portable generator capabilities',
      '24/7 shift work to match production facility schedules',
      'Emergency containment for chemical storage and process areas'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Industrial Specialists',
    description: 'We serve warehouses, manufacturing plants, and distribution centers throughout Fairfax, Loudoun, and Prince William counties. Our team understands Virginia DEQ regulations and local industrial wastewater discharge requirements.',
    listItems: [
      'Experience with NoVA distribution centers and manufacturing facilities',
      'Knowledge of Virginia DEQ stormwater and discharge permits',
      'Established relationships with industrial equipment rental suppliers',
      'Local industrial hygiene laboratory partnerships for testing'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Industrial Hazard Safety Protocols',
    description: 'We conduct pre-job hazard assessments including LOTO (Lockout/Tagout) coordination, confined space permits, and hot work permits. Our teams use facility-specific PPE including respirators, chemical suits, and fall protection as required.',
    listItems: [
      'Lockout/Tagout (LOTO) coordination with facility safety personnel',
      'Confined space entry permits and continuous atmospheric monitoring',
      'Hot work permits and fire watch procedures for welding/cutting',
      'Facility-specific PPE including Level A/B chemical protection suits'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Industrial Facility Success Metrics',
    description: 'We have restored over 100 industrial facilities in Northern Virginia with an average production uptime of 94% during restoration. Our incident-free safety record spans 500,000+ man-hours in hazardous industrial environments.',
    listItems: [
      '100+ industrial facilities restored with minimal production impact',
      '94% average production uptime maintained during restoration',
      '500,000+ man-hours with zero OSHA recordable incidents',
      'Average 8.5 days faster completion than industrial insurance estimates'
    ],
    icon: 'BarChart3',
  },
];

// =============================================================================
// TECHNICAL SERVICES (3)
// =============================================================================

// --- Moisture Mapping & Consulting ---
const moistureMappingConsultingTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Advanced Moisture Detection Technology',
    description: 'We deploy FLIR thermal imaging cameras with 320x240 resolution, Tramex moisture meters with deep-wall probes, and Protimeter hygrometers for psychrometric analysis. Our equipment detects moisture up to 1.5 inches below finished surfaces without destructive testing.',
    listItems: [
      'FLIR E8-XT thermal cameras with MSX image enhancement technology',
      'Tramex MRH III moisture meters with deep-wall reference probes',
      'Protimeter Surveymaster psychrometers for dew point analysis',
      'Laser distance measuring with moisture overlay mapping software'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Expert Witness & Claims Support',
    description: 'Our moisture surveys provide court-admissible documentation for insurance disputes and construction defect litigation. We deliver ASTM-compliant reports with thermal images, moisture readings, and professional opinions on causation and extent.',
    listItems: [
      'Court-admissible moisture survey reports for litigation support',
      'Expert witness testimony for construction defect and insurance cases',
      'ASTM E2018-compliant thermographic inspection documentation',
      'Pre-litigation moisture assessment to support claim negotiations'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Certified Thermographers & Hygienists',
    description: 'Our consultants hold Level II Infrared Thermography certification from the Infrared Training Center, IICRC Applied Structural Drying Technician credentials, and many have engineering or building science degrees.',
    listItems: [
      'ITC Level II Certified Infrared Thermographers',
      'IICRC Applied Structural Drying Technician (ASD) certifications',
      'Building Science Principles and Building Envelope specializations',
      'Professional Engineer (PE) licensure on senior consulting staff'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Accuracy & Defensibility Guarantee',
    description: 'We guarantee the technical accuracy of all moisture readings and thermal interpretations in our reports. If our findings are successfully challenged due to methodology errors, we will refund consulting fees and provide corrected analysis.',
    listItems: [
      'Technical accuracy guarantee on all moisture readings and analysis',
      'ASTM standards compliance for all testing methodologies',
      'Report defensibility in litigation or insurance proceedings',
      'Unlimited report clarifications and expert consultation follow-up'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Emergency Moisture Assessment',
    description: 'Insurance deadlines and construction disputes move fast. We provide emergency moisture surveys within 24 hours for active claims, litigation deadlines, and pre-remediation assessments requiring rapid professional documentation.',
    listItems: [
      '24-hour emergency moisture survey deployment for urgent cases',
      'Same-day preliminary findings for insurance adjuster coordination',
      'Weekend and holiday availability for litigation deadline support',
      'Rapid turnaround detailed reports within 48-72 hours of survey'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Building Science Consultants',
    description: 'We conduct moisture surveys throughout Northern Virginia for attorneys, insurance adjusters, property managers, and homeowners. Our team knows regional construction practices, climate conditions, and local building envelope challenges.',
    listItems: [
      'Expert knowledge of NoVA brick veneer and EIFS moisture issues',
      'Understanding of regional climate and condensation risk factors',
      'Established relationships with local attorneys and insurance adjusters',
      'Experience with Virginia building codes and construction standards'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Non-Invasive Assessment Protocols',
    description: 'Our moisture surveys prioritize non-destructive testing methods to minimize property impact. When invasive testing is required, we use surgical precision with small-diameter bore holes and professional patching to restore surfaces.',
    listItems: [
      'Non-invasive thermal and electromagnetic moisture detection first',
      'Minimal-impact invasive testing with 1/4" diameter probe holes',
      'Professional surface restoration and patching after invasive tests',
      'Photo documentation of all testing locations and methodologies'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Consulting Success Metrics',
    description: 'We have conducted over 800 professional moisture surveys in Northern Virginia with a 100% report defensibility record in litigation and insurance proceedings. Our findings have supported over $12M in successful insurance claims.',
    listItems: [
      '800+ professional moisture surveys conducted in NoVA',
      '100% report defensibility record in court and insurance proceedings',
      '$12M+ in insurance claims supported by our moisture documentation',
      'Average 3.2 business days turnaround for detailed written reports'
    ],
    icon: 'BarChart3',
  },
];

// --- Indoor Air Quality ---
const indoorAirQualityTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Laboratory-Grade Air Quality Testing',
    description: 'We use Allergenco MK-3 air samplers for viable spore counts, TSI Q-Trak monitors for VOC and CO2 analysis, and FLIR thermal cameras to identify HVAC performance issues. All samples are analyzed by AIHA-accredited environmental laboratories.',
    listItems: [
      'Allergenco MK-3 impaction air samplers for mold spore analysis',
      'TSI Q-Trak 7575 for real-time VOC, CO2, and particulate monitoring',
      'FLIR thermal imaging for HVAC duct leakage and insulation defects',
      'AIHA-LAP accredited laboratory analysis for all air samples'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Indoor Air Quality Claims Documentation',
    description: 'Our air quality reports provide technical evidence for mold claims, HVAC defect litigation, and indoor air quality health complaints. We document baseline conditions, post-remediation clearance, and long-term monitoring to support insurance claims.',
    listItems: [
      'Pre-remediation baseline air quality documentation for claims',
      'Post-remediation clearance testing to verify successful restoration',
      'Health complaint investigation with symptom correlation analysis',
      'HVAC system performance defect documentation for warranty claims'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Certified Indoor Environmental Consultants',
    description: 'Our consultants hold ACAC Council-certified Indoor Environmentalist (CIE) credentials, IICRC Applied Microbial Remediation Technician certifications, and many are Certified Industrial Hygienists (CIH) with graduate degrees in environmental health.',
    listItems: [
      'ACAC Council-certified Indoor Environmentalist (CIE) credentials',
      'Certified Industrial Hygienist (CIH) certifications on senior staff',
      'IICRC Applied Microbial Remediation Technician (AMRT) certifications',
      'Graduate degrees in environmental health, industrial hygiene, or microbiology'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Laboratory Accuracy Guarantee',
    description: 'We guarantee all air samples are analyzed by AIHA-accredited laboratories using ASTM and EPA-approved methods. If laboratory results are successfully challenged due to methodology errors, we will re-test at no charge and refund original testing fees.',
    listItems: [
      'AIHA-LAP accredited laboratory analysis guarantee',
      'ASTM D7391 and EPA EMSL-compliant testing methodologies',
      'Chain-of-custody documentation for all samples',
      'Free re-testing if methodology is successfully challenged'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Rapid Air Quality Assessment',
    description: 'Health concerns require fast answers. We deploy emergency air quality testing within 24 hours for acute exposure events, tenant health complaints, and post-remediation verification. Preliminary results available within 48-72 hours.',
    listItems: [
      '24-hour emergency deployment for acute indoor air quality events',
      'Same-day air sampling for urgent health complaint investigations',
      'Preliminary laboratory results within 48-72 hours of sampling',
      'Weekend and holiday availability for emergency testing needs'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Air Quality Specialists',
    description: 'We conduct indoor air quality testing throughout Fairfax, Loudoun, Arlington, and Prince William counties. Our team knows regional mold species, seasonal pollen baselines, and local HVAC system challenges common to Northern Virginia buildings.',
    listItems: [
      'Knowledge of regional outdoor mold spore baselines for comparison',
      'Understanding of NoVA seasonal allergen and pollen patterns',
      'Experience with local HVAC configurations and common defects',
      'Established relationships with Northern Virginia environmental attorneys'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Aseptic Sampling Protocols',
    description: 'We follow strict aseptic techniques during air sample collection to prevent cross-contamination. All sampling equipment is sterilized, and technicians wear protective equipment to ensure sample integrity and laboratory accuracy.',
    listItems: [
      'Sterile sampling cassettes and aseptic collection techniques',
      'Pre-sampling outdoor control samples for accurate comparison',
      'Calibrated air pump flow rates verified before each sampling event',
      'Chain-of-custody documentation from collection through analysis'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Air Quality Testing Success Metrics',
    description: 'We have conducted over 1,200 indoor air quality assessments in Northern Virginia with findings supporting successful remediation in 98% of cases. Our post-remediation clearance testing has a 99.2% first-time pass rate.',
    listItems: [
      '1,200+ indoor air quality assessments completed in NoVA',
      '98% of remediation projects verified successful by our testing',
      '99.2% first-time clearance pass rate on post-remediation testing',
      'Average 4.5 business days from sampling to final written report'
    ],
    icon: 'BarChart3',
  },
];

// --- Environmental Testing ---
const environmentalTestingTabs: TabItem[] = [
  {
    id: 'technology',
    label: 'Our Technology',
    title: 'Certified Environmental Laboratory Equipment',
    description: 'We use EPA-approved sampling methods including XRF analyzers for lead paint, PLM microscopy for asbestos fiber identification, and sterile water sampling kits for bacteria analysis. All samples are processed by NELAP-certified environmental laboratories.',
    listItems: [
      'Niton XRF analyzers for non-destructive lead paint screening',
      'EPA-compliant bulk asbestos sampling with PLM laboratory analysis',
      'Sterile water sampling for Legionella, coliform, and bacteria testing',
      'NELAP-certified laboratory partnerships for all environmental analysis'
    ],
    icon: 'Cpu',
  },
  {
    id: 'insurance',
    label: 'Insurance Process',
    title: 'Environmental Hazard Claims Support',
    description: 'Our environmental testing reports document pre-existing hazards, contamination extent, and abatement scope for insurance claims and property transactions. We provide expert opinions on environmental liability and remediation costs.',
    listItems: [
      'Pre-renovation asbestos and lead surveys for insurance documentation',
      'Contamination extent mapping for environmental liability claims',
      'Abatement scope development and cost estimation for claims',
      'Expert witness services for environmental contamination litigation'
    ],
    icon: 'FileText',
  },
  {
    id: 'team',
    label: 'Certified Team',
    title: 'Licensed Environmental Professionals',
    description: 'Our team includes EPA-certified Lead Risk Assessors, AHERA-certified Asbestos Building Inspectors, and licensed environmental consultants. Many hold Certified Industrial Hygienist credentials and have backgrounds in environmental engineering or toxicology.',
    listItems: [
      'EPA Lead-Based Paint Risk Assessor certifications',
      'AHERA Asbestos Building Inspector and Management Planner credentials',
      'Virginia Department of Professional and Occupational Regulation licenses',
      'Certified Industrial Hygienist (CIH) credentials on senior staff'
    ],
    icon: 'Users',
  },
  {
    id: 'guarantee',
    label: 'Our Guarantee',
    title: 'Regulatory Compliance Guarantee',
    description: 'We guarantee all environmental testing follows EPA, OSHA, and Virginia DEQ regulations. If regulatory agencies reject our sampling methods or documentation, we will re-test at no charge and provide compliant reporting.',
    listItems: [
      'EPA 40 CFR Part 763 (asbestos) compliance guarantee',
      'EPA Lead RRP Rule and 40 CFR Part 745 adherence',
      'Virginia DEQ water quality testing method compliance',
      'Free re-testing if regulatory agencies reject our methodologies'
    ],
    icon: 'Shield',
  },
  {
    id: 'response',
    label: '24/7 Response',
    title: 'Emergency Environmental Assessment',
    description: 'Environmental emergencies require immediate assessment. We deploy emergency testing within 24 hours for suspected asbestos releases, lead dust events, and water contamination incidents. Rapid laboratory analysis available for urgent situations.',
    listItems: [
      '24-hour emergency deployment for environmental contamination events',
      'Same-day sampling for suspected asbestos or lead exposure incidents',
      'Expedited laboratory analysis (24-48 hours) for emergency situations',
      'Weekend availability for pre-transaction environmental assessments'
    ],
    icon: 'Clock',
  },
  {
    id: 'local',
    label: 'Local Experts',
    title: 'Northern Virginia Environmental Consultants',
    description: 'We conduct environmental testing throughout Northern Virginia for homeowners, property managers, contractors, and attorneys. Our team knows regional environmental risks including asbestos in 1950s-1980s buildings and lead paint in pre-1978 homes.',
    listItems: [
      'Knowledge of NoVA building stock and common asbestos-containing materials',
      'Understanding of regional lead paint prevalence in pre-1978 housing',
      'Experience with Virginia DEQ and local health department requirements',
      'Established relationships with licensed asbestos and lead abatement contractors'
    ],
    icon: 'MapPin',
  },
  {
    id: 'safety',
    label: 'Safety Protocols',
    title: 'Hazardous Material Sampling Safety',
    description: 'We follow OSHA hazardous material sampling protocols including respirator use, protective clothing, and containment barriers during suspected asbestos or lead sampling. All personnel are trained in hazard recognition and exposure prevention.',
    listItems: [
      'OSHA respiratory protection program with fit-tested respirators',
      'Protective clothing and glove protocols for hazardous material sampling',
      'Containment and decontamination procedures during asbestos sampling',
      'Hazard communication training for all environmental sampling personnel'
    ],
    icon: 'HeartPulse',
  },
  {
    id: 'results',
    label: 'Proven Results',
    title: 'Environmental Testing Success Metrics',
    description: 'We have completed over 900 environmental assessments in Northern Virginia with 100% regulatory acceptance of our sampling methods and documentation. Our testing has supported safe abatement of over 500,000 square feet of hazardous materials.',
    listItems: [
      '900+ environmental assessments completed in NoVA',
      '100% regulatory acceptance rate on sampling methods and reports',
      '500,000+ sq ft of hazardous materials safely assessed and abated',
      'Average 5-7 business days from sampling to final certified report'
    ],
    icon: 'BarChart3',
  },
];

// =============================================================================
// WATER DAMAGE RESTORATION - Full Override (Primary Service Page)
// =============================================================================
const waterDamageOverride: ServicePageOverride = {
  slug: 'water-damage-restoration',

  title: 'Water Damage Restoration',
  subtitle: '24/7 emergency water extraction, structural drying, and water damage repair. IICRC-certified water mitigation specialists with 60-minute response and direct insurance billing.',

  badges: [
    { text: '60-Min Onsite', icon: 'Clock' },
    { text: 'Direct Insurance Billing', icon: 'ShieldCheck' },
    { text: 'IICRC Certified', icon: 'Award' },
  ],

  quickFacts: [
    { label: 'Our crews arrive fast when water damage strikes, day or night.', value: '60-Minute Response', icon: 'Clock' },
    { label: 'Full repair services from a bonded, insured Virginia Class A contractor.', value: 'Licensed Contractor', icon: 'Shield' },
    { label: 'We handle the claims process and bill your carrier directly.', value: 'Direct Insurance Billing', icon: 'FileCheck' },
  ],

  problemSolution: {
    problem: {
      title: 'The Risks of Waiting',
      points: [
        'Pools of water forming in your basement or kitchen.',
        'Water dripping from the ceiling or light fixtures.',
        'Carpet feels squishy or hardwood is starting to cup.',
        'Paint is bubbling, peeling, or drywall feels soft.',
      ],
    },
    solution: {
      title: 'The Flood Doctor Approach',
      points: [
        'Immediate professional assessment and mitigation.',
        'Industrial-grade equipment for thorough treatment.',
        'Direct insurance billing with Xactimate documentation.',
        'IICRC-certified technicians with proven protocols.',
      ],
    },
  },

  tabs: waterDamageRestorationTabs,

  testimonials: [
    {
      author: 'Sarah M.',
      location: 'Arlington, VA',
      rating: 5,
      date: '2 weeks ago',
      text: 'Flood Doctor arrived within an hour and had everything under control. Professional, thorough, and they handled my insurance claim perfectly.',
    },
    {
      author: 'Michael C.',
      location: 'Fairfax, VA',
      rating: 5,
      date: '1 month ago',
      text: 'Incredible service. They handled the insurance claim entirely. The reconstruction team made it look like nothing happened.',
    },
    {
      author: 'Jennifer L.',
      location: 'Alexandria, VA',
      rating: 5,
      date: '3 months ago',
      text: 'Highly recommended. Very respectful of my home, wore shoe covers every time, and kept me informed throughout the entire process.',
    },
  ],

  pricing: {
    price: '$0',
    disclaimer: 'Covered by most insurance policies',
    features: [
      'Thermal Moisture Inspection',
      'Damage Assessment Report',
      'Insurance Claim Assistance',
      'No Out-of-Pocket for Evaluation',
    ],
    ctaText: 'Start Free Inspection',
  },
};

// =============================================================================
// HELPER FUNCTION
// =============================================================================

function tabsOnlyOverride(slug: string, tabs: TabItem[]): ServicePageOverride {
  return { slug, tabs };
}

// =============================================================================
// EXPORT ALL OVERRIDES
// =============================================================================

export const SERVICE_PAGE_OVERRIDES: Record<string, ServicePageOverride> = {
  // Water Damage - full override
  'water-damage-restoration': waterDamageOverride,

  // Residential - tabs only
  'fire-smoke-cleanup': tabsOnlyOverride('fire-smoke-cleanup', fireSmokeCleanupTabs),
  'mold-remediation': tabsOnlyOverride('mold-remediation', moldRemediationTabs),
  'sewage-cleanup': tabsOnlyOverride('sewage-cleanup', sewageCleanupTabs),
  'flood-cleanup': tabsOnlyOverride('flood-cleanup', floodCleanupTabs),
  'storm-damage-restoration': tabsOnlyOverride('storm-damage-restoration', stormDamageRestorationTabs),
  'burst-pipe-cleanup': tabsOnlyOverride('burst-pipe-cleanup', burstPipeCleanupTabs),
  'odor-removal': tabsOnlyOverride('odor-removal', odorRemovalTabs),
  'contents-cleaning-packout': tabsOnlyOverride('contents-cleaning-packout', contentsCleaningPackoutTabs),
  'basement-flooding': tabsOnlyOverride('basement-flooding', basementFloodingTabs),
  'crawl-space-drying': tabsOnlyOverride('crawl-space-drying', crawlSpaceDryingTabs),
  'hardwood-floor-drying': tabsOnlyOverride('hardwood-floor-drying', hardwoodFloorDryingTabs),
  'roof-leak-water-damage': tabsOnlyOverride('roof-leak-water-damage', roofLeakWaterDamageTabs),
  'structural-drying': tabsOnlyOverride('structural-drying', structuralDryingTabs),

  // Commercial - tabs only
  'commercial-water-damage': tabsOnlyOverride('commercial-water-damage', commercialWaterDamageTabs),
  'commercial-flood-cleanup': tabsOnlyOverride('commercial-flood-cleanup', commercialFloodCleanupTabs),
  'large-loss-restoration': tabsOnlyOverride('large-loss-restoration', largeLossRestorationTabs),
  'commercial-sewage-cleanup': tabsOnlyOverride('commercial-sewage-cleanup', commercialSewageCleanupTabs),
  'commercial-mold-remediation': tabsOnlyOverride('commercial-mold-remediation', commercialMoldRemediationTabs),
  'commercial-fire-smoke-cleanup': tabsOnlyOverride('commercial-fire-smoke-cleanup', commercialFireSmokeCleanupTabs),
  'commercial-storm-damage': tabsOnlyOverride('commercial-storm-damage', commercialStormDamageTabs),
  'commercial-roof-leak': tabsOnlyOverride('commercial-roof-leak', commercialRoofLeakTabs),

  // Commercial Specialty - tabs only
  'healthcare-facilities': tabsOnlyOverride('healthcare-facilities', healthcareFacilitiesTabs),
  'hospitality-multifamily': tabsOnlyOverride('hospitality-multifamily', hospitalityMultifamilyTabs),
  'municipal-education': tabsOnlyOverride('municipal-education', municipalEducationTabs),
  'industrial-facilities': tabsOnlyOverride('industrial-facilities', industrialFacilitiesTabs),

  // Technical Services - tabs only
  'moisture-mapping-consulting': tabsOnlyOverride('moisture-mapping-consulting', moistureMappingConsultingTabs),
  'indoor-air-quality': tabsOnlyOverride('indoor-air-quality', indoorAirQualityTabs),
  'environmental-testing': tabsOnlyOverride('environmental-testing', environmentalTestingTabs),
};

/**
 * Get override for a specific service slug
 */
export function getServicePageOverride(slug: string): ServicePageOverride | undefined {
  return SERVICE_PAGE_OVERRIDES[slug];
}
