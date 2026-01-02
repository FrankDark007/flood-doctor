
import { ServiceData } from '../types';

export const SERVICES: ServiceData[] = [
  // --- RESIDENTIAL (14 Services) ---
  
  // 1. Odor Removal
  {
    id: 'res-odor',
    title: 'Odor Removal',
    slug: '/services/residential/cleanup-services/odor-removal/',
    shortDescription: 'Professional deodorization for persistent smells.',
    audience: 'RESIDENTIAL',
    category: 'CLEANUP',
    primaryKeyword: 'odor removal services',
    secondaryKeywords: ['smoke odor removal', 'pet odor removal', 'musty smell removal', 'professional deodorization', 'odor elimination services', 'smoke smell removal', 'fire odor removal', 'sewage odor removal', 'hydroxyl treatment', 'thermal fogging', 'ozone treatment'],
    heroHeading: 'Odor Removal Services',
    heroIntro: 'We do not just mask smells; we eliminate them at the source. Professional odor removal for smoke, pets, mold, and biohazards in Northern Virginia, Maryland, and DC.',
    heroVisualKey: 'odor-removal',
    thumbVisualKey: 'odor-gauge',
    infographicType: 'MOLD_AIRFLOW',
    intro_whenToCall: 'Persistent odors are often a sign of trapped bacteria, mold, or chemical residues. If over-the-counter sprays have failed, it is time for professional molecular treatment.',
    whenToCall: [
      'New Home Purchase: The house smells like cigarette smoke from previous owners.',
      'Animal Intrusion: A skunk sprayed under your house or a rodent died in the walls.',
      'Pet Urine: Strong urine odors persist even after professional carpet cleaning.',
      'Musty Smells: There is a lingering earthy smell after a water leak or high humidity.',
      'Cooking Odors: Curry, fish, or grease smells are embedded in drywall and cabinets.',
      'Post-Fire Smoke: You had a small fire and the burnt smell wont leave furniture.',
      'Tenant Turnover: Tenants left an apartment with strong organic odors.',
      'Chemical Off-gassing: New paint or furniture is releasing strong VOC fumes.',
      'Selling Your Home: You need the property to smell neutral for open houses.',
      'Sewage Residue: A backup occurred and the smell remains after cleanup.',
      'Mold Verification: You smell mold but cannot see it (requires inspection).',
      'Hoarding Cleanup: Deep odors remain after a hoarding situation is cleared.'
    ],
    contentSections: {
      heading: "Understanding Odor Removal",
      intro: "Odors aren't just unpleasant, they indicate contamination that surface cleaning can't reach. Professional odor removal targets the source, not just the smell, ensuring permanent elimination rather than temporary masking.",
      cards: [
        {
          title: "Why Odors Persist After Cleaning",
          content: "Odor molecules are microscopic and penetrate deeply into porous materials. They absorb into drywall, concrete, wood framing, carpet padding, and insulation. Surface cleaning removes what you can see, but odor molecules remain trapped inside materials. Air fresheners and household cleaners only mask the smell temporarily. True odor elimination requires treatments that reach where the contamination lives."
        },
        {
          title: "Different Odors Need Different Chemistry",
          content: "Smoke odor requires thermal fogging that follows the same pathways smoke traveled. Pet urine needs enzyme treatments that break down uric acid crystals. Mold and mildew require antimicrobial agents after moisture elimination. Sewage demands oxidizing agents for biological contamination. We identify the odor source first, then select the appropriate treatment chemistry. One-size-fits-all approaches fail."
        },
        {
          title: "How Hydroxyl and Ozone Work",
          content: "Hydroxyl generators create hydroxyl radicals that break down odor molecules through oxidation, safe for occupied spaces and effective on most organic odors. Ozone generators produce concentrated ozone that destroys odors aggressively but require the space to be completely unoccupied. We select the right technology based on odor type, severity, and whether you need to remain in the home during treatment."
        },
        {
          title: "Thermal Fogging Explained",
          content: "Thermal fogging heats a deodorizing solution into a dry fog that penetrates wherever odors have traveled. The fog particles are small enough to reach inside wall cavities, HVAC systems, and porous materials. This technology is particularly effective for smoke odors because it follows the same air pathways the smoke used to spread through your home. The treatment neutralizes odors rather than covering them."
        },
        {
          title: "When Materials Must Be Removed",
          content: "Some materials absorb odors so deeply that treatment cannot reach the contamination. Carpet padding saturated with pet urine, insulation exposed to smoke, and drywall soaked with sewage often require removal rather than treatment. We assess honestly and recommend removal only when treatment won't succeed. Replacing heavily contaminated materials is sometimes more cost-effective than repeated treatments."
        }
      ]
    },
    intro_whatWeDo: 'Our process attacks odors on three levels: source removal, surface cleaning, and molecular neutralization. We verify the air is clean before we leave.',
    whatWeDo: [
      'Source Identification: We use UV lights and moisture meters to find the exact source of the smell.',
      'Source Removal: We physically remove the cause (e.g., pulling up saturated carpet pad).',
      'Detailed Cleaning: Our team cleans affected surfaces to remove oils, tars, and residues.',
      'Hydroxyl Treatment: We deploy hydroxyl generators to safe neutralize odors while you stay home.',
      'Ozone Treatment: For severe odors in empty homes, we use high-output ozone generators.',
      'Thermal Fogging: We apply thermal fog to penetrate porous materials like fabric and wood.',
      'Subfloor Sealing: We apply specialized sealants to lock odors into subfloors if they cannot be fully cleaned.',
      'Duct Cleaning: We clean HVAC ducts to remove trapped odor particles and dust.',
      'HEPA Filtration: We use air scrubbers with activated charcoal filters to polish the air.',
      'Urine Neutralization: We treat pet urine spots with enzymatic digesters to break down crystals.',
      'Verification: We verify the odor is gone with a final walkthrough before removing equipment.',
      'Documentation: We provide a certificate of treatment for landlords or real estate transactions.'
    ],
    whatToExpect: {
      timeline: 'Odor removal typically takes 2-4 days. Source removal happens on Day 1. Equipment (Hydroxyl/Ozone) usually runs for 24-48 hours to fully break down the odor molecules.',
      arrival: 'We arrive discreetly. Our first priority is finding the source. We may need to lift carpet corners or inspect HVAC vents. We will explain the treatment plan before setting up machines.',
      daily: 'If we use Hydroxyl generators, you can often stay in the home. If we use Ozone, the house must be empty. We will monitor the progress daily to check scent levels.',
      noise: 'Air scrubbers and fans create a moderate hum, similar to a loud box fan running in the background.'
    },
    intro_safety: 'Chemical treatments and ozone can be hazardous if not managed correctly. We follow strict safety protocols to protect your family and pets.',
    safety: {
      head: 'Odor Treatment Safety',
      items: [
        'Ozone Danger: You MUST vacate the home if Ozone generators are running (lethal to pets/plants).',
        'Ventilation: Thoroughly air out the home for at least 4 hours after Ozone treatment.',
        'Pet Safety: Remove all pets, including fish and reptiles, during aggressive treatments.',
        'Plant Safety: Move house plants outside or to a garage during Ozone cycles.',
        'Perfumes: Do not mask odors with heavy perfumes before we arrive; it makes diagnosis harder.',
        'Respiratory Issues: Inform us if anyone in the home has asthma or chemical sensitivities.',
        'Food Safety: Remove open food items (fruit bowls, bread) before thermal fogging.',
        'Pilot Lights: Turn off pilot lights if fogging involves flammable solvents (we will advise).',
        'Clothing: Wash bedding and clothes in hot water if they have absorbed the odor.',
        'Chemical Mixing: Do not mix household bleach or ammonia; it creates toxic gas.'
      ],
      kidsPets: 'Ozone is dangerous for all living things. If we use Ozone, the house must be completely empty of people, pets, and plants. Hydroxyl is generally safe for occupied spaces, but we always prioritize caution.'
    },
    intro_scenarios: 'We have seen it all. From skunks under porches to decades of cigarette smoke, we have a protocol for every odor type.',
    scenarios: [
      'Cigarette Smoke: Removing nicotine tar from a home before a new baby arrives.',
      'Pet Urine Saturation: Treating subfloors where a dog marked the same spot for years.',
      'Dead Rodent: Locating and removing a decomposed animal from a wall cavity.',
      'Skunk Spray: Neutralizing skunk oil that penetrated the foundation vents.',
      'Musty Basements: eliminating "old house smell" in a damp cellar.',
      'Curry/Spice Odors: treating walls in a rental property to remove strong cooking oil smells.',
      'Fire Smoke: Deodorizing furniture that smells like a campfire after a kitchen incident.',
      'Biohazard Decomposition: specialized odor control after an unattended death.',
      'Sewage Gas: Tracking down a dry p-trap or broken wax ring releasing sewer gas.',
      'VOC Off-gassing: Speeding up the cure time for new spray foam or paint smells.',
      'Hoarding Aftermath: Removing deep-set organic odors after a clean-out.',
      'Rotting Food: Treating a home after a freezer failure during a vacation.'
    ],
    saveVsRemove: {
      save: [
        'Hard surfaces (after deep cleaning)',
        'Structural wood (can be sanded/sealed)',
        'Most furniture (after chamber treatment)',
        'Clothing (after specialized Esporta wash)'
      ],
      remove: [
        'Carpet padding with urine saturation (always)',
        'Drywall saturated with oils/urine',
        'Insulation holding rodent urine',
        'Porous items that cannot be washed'
      ]
    },
    faqs: [
      {
        question: "Why do odors persist after cleaning?",
        answer: "Surface cleaning doesn't reach odor molecules absorbed into porous materials like drywall, carpet padding, wood, and concrete. Odors also hide in HVAC systems and wall cavities. Professional odor removal treats the source, not just the surface."
      },
      {
        question: "How do you remove odors permanently?",
        answer: "We identify and remove the source first, then use commercial hydroxyl generators, thermal fogging, ozone treatment (unoccupied spaces), and enzyme-based cleaners depending on odor type. Different odors require different chemistry—smoke, pet, mold, and sewage each need specific treatments."
      },
      {
        question: "How much does professional odor removal cost?",
        answer: "Costs range from $500-$3,000+ depending on odor type, severity, square footage, and treatment method required. Smoke odor in a full home costs more than pet odor in one room. We provide free assessments and detailed quotes."
      },
      {
        question: "How long does odor removal take?",
        answer: "Treatment takes 1-3 days depending on method. Hydroxyl generators run 24-48 hours, ozone requires 24-72 hours plus airing out. Severe smoke damage may need multiple treatment cycles. We verify elimination before completing the job."
      },
      {
        question: "Is ozone treatment safe?",
        answer: "Ozone is highly effective but requires the space to be completely unoccupied—no people, pets, or plants. We seal the area, run treatment, then ventilate thoroughly before re-entry. When used properly, it's safe and extremely effective for stubborn odors."
      },
      {
        question: "Can you remove smoke odor from a house?",
        answer: "Yes, but it's intensive. Smoke odor requires cleaning all surfaces, washing or replacing soft goods, cleaning HVAC and ductwork, and treating the air. Severe fire smoke may require sealing surfaces with shellac-based sealers before repainting."
      },
      {
        question: "How do you remove pet urine odor from carpet?",
        answer: "We use UV lights to locate all contamination (even invisible stains), extract with enzyme treatments that break down uric acid crystals, and treat the subfloor if penetrated. Surface cleaning alone won't work—urine absorbs into padding and subfloor."
      },
      {
        question: "Why does my house smell musty?",
        answer: "Musty odors indicate active mold or mildew growth somewhere in the home. Common hidden locations include crawl spaces, behind walls with plumbing, under sinks, in HVAC systems, and in attics. We can inspect to locate the source—don't mask it with air fresheners."
      },
      {
        question: "Can odors come back after treatment?",
        answer: "Not if the source was properly addressed. Odors return when the source remains (ongoing moisture, trapped contamination) or treatment was incomplete. We verify elimination with air quality checks and guarantee our work."
      },
      {
        question: "Does insurance cover odor removal?",
        answer: "Yes, when odor results from a covered loss like fire, smoke, or water damage. Standalone odor issues from pets or neglect typically aren't covered. We document odor treatment as part of comprehensive restoration claims."
      }
    ],
    relatedSearchTerms: ['cigarette smoke removal service', 'pet urine odor remover', 'ozone treatment', 'house smell removal', 'car odor removal', 'remove smell from carpet', 'odor neutralizer', 'professional deodorizer', 'nicotine removal']
  },

  // 2. Water Damage Restoration
  {
    id: 'res-water',
    title: 'Water Damage Restoration',
    slug: '/services/residential/restoration-services/water-damage-restoration/',
    shortDescription: 'Emergency water extraction and drying for homes.',
    audience: 'RESIDENTIAL',
    category: 'RESTORATION',
    primaryKeyword: 'water damage restoration',
    secondaryKeywords: ['water damage repair', 'emergency water extraction', 'flood damage restoration', 'water mitigation services', 'basement flood cleanup', 'water damage restoration near me', 'water damage restoration Fairfax VA', 'emergency water damage', 'water removal services', '24 hour water damage restoration'],
    heroHeading: 'Water Damage Restoration in Northern Virginia',
    heroIntro: '24/7 Emergency Water Damage Restoration. IICRC-certified technicians respond within 60 minutes. Rapid water extraction, structural drying, and complete repairs for homes in Fairfax, Arlington, Alexandria, and throughout Northern Virginia. Free estimates. Direct insurance billing.',
    heroVisualKey: 'water-damage',
    thumbVisualKey: 'water-damage-dash',
    infographicType: 'DRYING_TREND',
    intro_whenToCall: 'Water damage spreads fast. Call us immediately if:',
    whenToCall: [
      'Standing Water: Pools of water forming in your basement or kitchen.',
      'Active Leaks: Water dripping from the ceiling or light fixtures.',
      'Flooring Issues: Carpet feels squishy or hardwood is starting to cup.',
      'Wall Damage: Paint is bubbling, peeling, or drywall feels soft.',
      'Hidden Noises: You hear running water behind a wall when faucets are off.',
      'Appliance Failure: Washing machine or dishwasher hose disconnected.',
      'High Humidity: Windows are fogging up on the inside.',
      'Musty Odors: A persistent damp smell in a specific room.',
      'Cabinet Swelling: Vanity bases are expanding or warping.',
      'Color Changes: Water stains (yellow/brown) appearing on ceilings.',
      'Sump Pump Failure: Water rising in the sump pit.',
      'Supply Line Burst: Water spraying from a toilet or sink line.'
    ],
    contentSections: {
      heading: "Understanding Water Damage Restoration",
      intro: "Water damage restoration is more than just removing water. It's a systematic process that protects your home's structure, prevents mold growth, and restores your property to pre-loss condition.",
      cards: [
        {
          title: "Why Professional Restoration Matters",
          content: "Water travels through hidden pathways—inside walls, under flooring, along electrical channels. What looks like a small leak often saturates insulation, soaks subfloors, and compromises framing you can't see. Professional restoration uses thermal imaging and moisture meters to find all affected areas, not just visible damage. Incomplete drying leads to mold growth, structural rot, and far more expensive repairs months later."
        },
        {
          title: "The Science of Structural Drying",
          content: "Effective drying isn't about blowing air—it's about controlling the relationship between temperature, humidity, and airflow. We create conditions where moisture migrates out of materials into the air, then remove that moisture with commercial dehumidifiers. LGR (Low Grain Refrigerant) dehumidifiers pull 2-3x more water than standard units. This science-based approach dries structures in days, not weeks."
        },
        {
          title: "Water Categories and Why They Matter",
          content: "The IICRC classifies water damage into three categories. Category 1 (clean water) comes from supply lines and requires standard drying. Category 2 (gray water) from appliances or overflow contains contaminants requiring antimicrobial treatment. Category 3 (black water) from sewage or flooding is hazardous, requiring protective equipment, disposal protocols, and aggressive sanitation. We assess category first because it dictates the entire restoration approach."
        },
        {
          title: "Protecting Your Belongings",
          content: "Contents restoration often saves 60-80% of belongings that homeowners assume are ruined. Electronics, documents, photographs, furniture, and clothing can frequently be professionally restored at a fraction of replacement cost. We inventory, pack out, clean, and store your belongings while your home dries, returning them once restoration is complete. Insurance typically covers contents restoration when it's more economical than replacement."
        },
        {
          title: "Insurance Documentation Done Right",
          content: "Water damage claims require specific documentation: moisture readings with mapped locations, thermal images showing affected areas, detailed scope of work, and daily drying logs. We provide insurance-ready documentation that answers adjuster questions before they're asked. This thoroughness typically results in faster claim approval and fewer supplements. We've worked with every major carrier in the region."
        }
      ]
    },
    intro_whatWeDo: 'We use a science-based drying protocol to save your property.',
    whatWeDo: [
      'Thermal Inspection: We use IR cameras to find hidden moisture pockets.',
      'Water Extraction: Truck-mounted pumps remove standing water instantly.',
      'Material Removal: We carefully remove unsalvageable carpet pad or drywall.',
      'Dehumidification: Industrial LGR units pull moisture from the air.',
      'Air Movement: High-velocity fans speed up evaporation from surfaces.',
      'Moisture Monitoring: We track drying progress daily with digital meters.',
      'Sanitization: We apply antimicrobials to prevent mold growth.',
      'Insurance Handling: We document everything for your claim.',
      'Pack-Out: We protect furniture by moving it to dry areas.',
      'Reconstruction: We repair drywall, paint, and flooring after drying.',
      'Final Verification: We prove the home is dry with final readings.',
      'Containment: We seal off the wet area to protect the rest of the home.'
    ],
    whatToExpect: {
      timeline: 'Standard drying takes 3-5 days. Complex projects involve daily monitoring until dry standards are met.',
      arrival: 'We arrive in 60 minutes for emergencies. We extract water first, then set up drying equipment.',
      daily: 'We visit daily to check readings and adjust equipment. You will see the progress in our daily logs.',
      noise: 'Fans and dehumidifiers run 24/7. It sounds like white noise or a loud fan. This is necessary for drying.'
    },
    intro_safety: 'Water and electricity are a dangerous mix. Stay safe until we arrive.',
    safety: {
      head: 'Water Damage Safety Checklist',
      items: [
        'Stop the Water: Shut off the main water valve immediately.',
        'Electrical Safety: Turn off breakers to wet rooms if safe to do so.',
        'Slip Hazards: Be careful on wet tile or hardwood floors.',
        'Protect Valuables: Move small electronics and keepsakes to a dry place.',
        'Furniture Protection: Place foil or blocks under furniture legs.',
        'Avoid Vacuums: Do not use a household vacuum (shock hazard).',
        'Ceiling Safety: Do not stand under sagging drywall bubbles.',
        'Sanitation: Wash hands after touching flood water.',
        'Photos: Take pictures of the damage for insurance if possible.',
        'Call Pros: Do not wait; water damage gets worse by the hour.'
      ],
      kidsPets: 'Keep children and pets away from the wet area. Wet floors are slippery, and equipment cords pose a trip hazard.'
    },
    intro_scenarios: 'We handle every type of residential water loss scenario.',
    scenarios: [
      'Burst Pipes: Frozen pipes thawing and flooding the home.',
      'Appliance Leaks: Dishwasher or washing machine failures.',
      'Toilet Overflows: Supply line breaks or clog backups.',
      'Ceiling Leaks: Water intrusion from upstairs bathrooms.',
      'Sump Pump Failure: Basement flooding during storms.',
      'Water Heater Burst: Flooding utility rooms and basements.',
      'Shower Pan Leaks: Water dripping into the ceiling below.',
      'Ice Maker Leaks: Slow leaks damaging kitchen floors.',
      'Storm Intrusion: Rain entering through windows or roofs.',
      'Sewage Backups: Contaminated water entering drains.',
      'Fire Sprinklers: Accidental discharge soaking a room.',
      'Foundation Leaks: Groundwater seeping through cracks.'
    ],
    saveVsRemove: {
      save: [
        'Structural framing (studs/joists)',
        'Concrete floors',
        'Tile flooring (usually)',
        'High-quality hardwood (if caught early)'
      ],
      remove: [
        'Carpet padding (almost always)',
        'Wet fiberglass insulation',
        'Crumbling drywall',
        'Particle board cabinets'
      ]
    },
    faqs: [
      {
        question: "How quickly should water damage be addressed?",
        answer: "Within 24-48 hours. Mold can begin growing in as little as 24 hours, and structural damage worsens exponentially. We respond within 60 minutes to minimize damage and restoration costs."
      },
      {
        question: "Does homeowners insurance cover water damage restoration?",
        answer: "Most policies cover sudden, accidental water damage like burst pipes or appliance failures. Gradual damage from deferred maintenance or flooding typically requires separate coverage. We document everything for your claim and work directly with adjusters."
      },
      {
        question: "What does water damage restoration cost?",
        answer: "Costs range from $1,500 for minor incidents to $10,000+ for major damage. Factors include affected square footage, water category (clean vs. contaminated), materials involved, and extent of demolition needed. We provide detailed estimates before work begins."
      },
      {
        question: "Can I stay in my home during water damage restoration?",
        answer: "Often yes, depending on damage extent and location. If contaminated water is involved, electrical systems are compromised, or large areas require drying equipment, temporary relocation may be safer. We'll assess and advise during our inspection."
      },
      {
        question: "How long does water damage restoration take?",
        answer: "Typical timeline is 3-5 days for drying, plus additional time for repairs. Small areas may dry in 2-3 days; larger losses or concrete/hardwood can take 7-10 days. We monitor moisture levels daily and provide completion estimates."
      },
      {
        question: "What equipment do you use for water damage restoration?",
        answer: "Commercial-grade extractors, LGR dehumidifiers, high-velocity air movers, moisture meters, thermal imaging cameras, and air scrubbers. This professional equipment removes water 10-20x faster than consumer units and ensures complete drying."
      },
      {
        question: "How do you detect hidden water damage?",
        answer: "We use thermal imaging cameras to see temperature differences behind walls, moisture meters to measure saturation levels, and borescopes for visual inspection inside cavities. Hidden moisture is the leading cause of mold growth and must be found."
      },
      {
        question: "Will water damage cause mold?",
        answer: "Yes, if not dried properly within 24-72 hours. Mold spores are everywhere and only need moisture to colonize. Professional extraction and drying to IICRC S500 standards prevents mold growth. We verify dryness with moisture meters before closing walls."
      },
      {
        question: "Do you handle the insurance claim paperwork?",
        answer: "Yes. We document damage with photos, moisture readings, and thermal images. We provide detailed scope reports, meet with adjusters on-site, and submit documentation in formats insurance companies require. This typically results in faster claim approval."
      },
      {
        question: "What's the difference between water damage restoration and remediation?",
        answer: "Restoration refers to the complete process: water extraction, drying, cleaning, and repairs to return your home to pre-loss condition. Remediation specifically refers to removing contamination or mold. We provide both services as needed."
      }
    ],
    relatedSearchTerms: ['water mitigation', 'flood cleanup', 'emergency extraction', 'dry out service', 'restoration company', 'water damage repair near me', 'basement water cleanup', 'flooded house cleanup', 'water extraction company', 'emergency restoration services']
  },

  // 3. Fire & Smoke Cleanup
  {
    id: 'res-fire',
    title: 'Fire & Smoke Cleanup',
    slug: '/services/residential/cleanup-services/fire-smoke-cleanup/',
    shortDescription: 'Restoration for fire damage and smoke odors.',
    audience: 'RESIDENTIAL',
    category: 'CLEANUP',
    primaryKeyword: 'fire damage restoration',
    secondaryKeywords: ['fire damage repair', 'smoke damage restoration', 'smoke damage cleanup', 'soot removal services', 'smoke odor removal', 'fire restoration company', 'fire damage restoration near me', 'fire damage restoration Northern Virginia', 'emergency fire restoration', 'house fire cleanup', 'fire damage restoration Fairfax VA'],
    heroHeading: 'Fire & Smoke Damage Restoration in Northern Virginia',
    heroIntro: '24/7 emergency fire damage restoration. Professional smoke and soot removal, odor elimination, content cleaning, and structural repairs. IICRC certified. Serving Fairfax, Arlington, Alexandria, and the DMV. Insurance claim assistance.',
    heroVisualKey: 'fire-smoke',
    thumbVisualKey: 'fire-smoke',
    infographicType: 'MOLD_AIRFLOW',
    intro_whenToCall: 'Smoke and soot cause ongoing damage. Call us if:',
    whenToCall: [
      'Kitchen Fires: Grease fires that spread smoke to cabinets.',
      'Soot Residue: Black dust covering walls and furniture.',
      'Burnt Odor: Persistent smoke smell throughout the house.',
      'Water Damage: Flooding from fire hoses or sprinklers.',
      'Chemical Residue: Powder from fire extinguishers.',
      'Structural Charring: Burnt beams or drywall.',
      'Ash Intrusion: Ash entering from nearby wildfires.',
      'Electrical Fires: Burnt wiring smells behind walls.',
      'Melting: Plastics or synthetics melted by heat.',
      'HVAC Contamination: Smoke pulled into air ducts.',
      'Textile Damage: Clothes and curtains smell like smoke.',
      'Board-Up Needs: Windows or doors broken by fire department.'
    ],
    contentSections: {
      heading: "Understanding Fire and Smoke Damage",
      intro: "Fire damage extends far beyond what flames touched. Smoke travels throughout your home, depositing corrosive residue and odor-causing particles in every room. Professional restoration addresses both visible damage and hidden contamination.",
      cards: [
        {
          title: "Smoke Damage Is Often Worse Than Fire",
          content: "Flames may damage one room, but smoke damages your entire home. Smoke travels through HVAC systems, rises through wall cavities, and deposits residue on every surface it contacts. This residue is acidic and begins corroding metals, discoloring plastics, and etching glass within hours. Soot on visible surfaces indicates far more contamination hidden in ductwork, behind walls, and above ceilings."
        },
        {
          title: "Types of Smoke Residue",
          content: "Different fires produce different residues. Protein fires from cooking leave nearly invisible residue that causes severe odor. Synthetic fires from plastics and modern furniture create black, sticky soot that smears when cleaned improperly. Wood fires produce dry, powdery residue. Each type requires specific cleaning methods and products. Using the wrong technique can permanently set stains or spread contamination."
        },
        {
          title: "The Corrosion Clock",
          content: "Smoke residue is acidic and corrosive. Within 72 hours, it begins permanently damaging metals, electronics, and appliances. Kitchen appliances, HVAC components, plumbing fixtures, and electronics are all at risk. Immediate cleaning, or at minimum wiping with a damp cloth, slows corrosion. Professional cleaning within the first week dramatically improves salvage rates for contents and systems."
        },
        {
          title: "HVAC Contamination",
          content: "If your HVAC system ran during or after the fire, smoke circulated through ductwork and deposited residue throughout. Every time the system runs, it redistributes contamination. Professional restoration includes HVAC inspection, duct cleaning, and filter replacement. In severe cases, the air handler coils, blower, and components require detailed cleaning or replacement. Never run HVAC after a fire until it's been inspected."
        },
        {
          title: "Complete Restoration Process",
          content: "Fire restoration follows a specific sequence: emergency board-up and tarping, water extraction from firefighting efforts, debris removal, soot and residue cleaning, odor treatment, and finally repairs and reconstruction. Skipping steps or wrong sequencing causes problems. We manage the entire process from emergency response through final walkthrough, coordinating all trades and insurance communication."
        }
      ]
    },
    intro_whatWeDo: 'We restore the structure and the air quality.',
    whatWeDo: [
      'Emergency Board-Up: Securing windows and doors immediately.',
      'Soot Removal: Using chemical sponges to lift acidic soot.',
      'Air Scrubbing: HEPA filtration to capture airborne particles.',
      'Odor Neutralization: Hydroxyl and ozone treatments.',
      'Water Extraction: Drying out water from firefighting.',
      'Demolition: Removing charred unsalvageable materials.',
      'Content Cleaning: Packing out and cleaning belongings.',
      'Duct Cleaning: Removing soot from the HVAC system.',
      'Structural Sealing: Encapsulating framing to lock in odor.',
      'Textile Restoration: Specialized washing for clothes.',
      'Corrosion Control: Cleaning electronics to prevent damage.',
      'Reconstruction: Rebuilding the home to pre-loss condition.'
    ],
    whatToExpect: {
      timeline: 'Fire restoration takes weeks to months depending on severity. Odor removal is the first major step.',
      arrival: 'We secure the site first (board-up). Then we assess safety and begin stabilizing the environment.',
      daily: 'Cleaning soot is detailed work. Crews will wipe every inch of the affected area.',
      noise: 'Air scrubbers run 24/7. Demolition phases will be noisy during the day.'
    },
    intro_safety: 'Soot is acidic and harmful. Protect your health.',
    safety: {
      head: 'Fire Damage Safety',
      items: [
        'Do Not Enter: Wait for the Fire Marshal\'s "all clear".',
        'Avoid Touching: Soot smears and sets into fabrics if touched.',
        'Wear Masks: N95 masks protect lungs from ash particles.',
        'Food Safety: Discard food exposed to heat or smoke.',
        'Electrical: Do not use appliances until checked.',
        'Pets: Keep pets away from soot and debris.',
        'Secure Home: Board up broken windows to prevent theft.',
        'Call Insurance: Report the loss immediately.',
        'Turn Off HVAC: Prevent spreading soot through ducts.',
        'Move Valuables: Secure cash, jewelry, and documents.'
      ],
      kidsPets: 'Keep kids and pets out. Soot contains carcinogens and air quality is often unsafe.'
    },
    intro_scenarios: 'From small kitchen fires to whole-home losses.',
    scenarios: [
      'Grease Fires: Stovetop fires damaging kitchens.',
      'Electrical Shorts: Fires starting inside walls.',
      'Dryer Vents: Lint ignition causing laundry room fires.',
      'Candle Accidents: Small fires in bedrooms or living rooms.',
      'Chimney Puff-backs: Soot blowing back into the house.',
      'Space Heaters: Curtains or furniture igniting.',
      'Garage Fires: Chemical or fuel fires spreading to home.',
      'Lightning Strikes: Roof or attic fires.',
      'Arson/Vandalism: Intentional damage cleanup.',
      'Smoke Damage: Smoke from a neighbor\'s fire entering.'
    ],
    saveVsRemove: {
      save: [
        'Structural framing (if char is shallow)',
        'Glass and metal items',
        'Hardwood furniture (often cleanable)',
        'Clothing (specialized wash)'
      ],
      remove: [
        'Charred wood',
        'Insulation (holds odor)',
        'Exposed food and cosmetics',
        'Melted plastics'
      ]
    },
    faqs: [
      {
        question: "What should I do immediately after a house fire?",
        answer: "Wait for fire department clearance before entering. Document damage with photos from outside. Don't turn on HVAC—it spreads soot. Contact your insurance immediately and call us for board-up and assessment. Don't attempt cleaning; improper methods cause permanent damage."
      },
      {
        question: "Does homeowners insurance cover fire damage?",
        answer: "Yes, fire damage is a standard covered peril. Coverage includes structure repair, contents cleaning or replacement, smoke damage, additional living expenses if displaced, and professional cleanup. We work directly with insurers and document everything."
      },
      {
        question: "How much does fire damage restoration cost?",
        answer: "Costs vary dramatically: minor kitchen fires may cost $3,000-$10,000, while major structural fires can exceed $50,000-$100,000+. Smoke damage often exceeds visible fire damage. We provide detailed room-by-room estimates for insurance."
      },
      {
        question: "Can smoke damage be cleaned?",
        answer: "Yes, when treated quickly and properly. Soot becomes increasingly difficult to remove over time and acidic smoke residue causes permanent etching on metals and corrosion on electronics within days. Professional cleaning within 24-72 hours saves more contents."
      },
      {
        question: "How long does fire restoration take?",
        answer: "Minor damage takes 1-2 weeks, moderate damage 2-6 weeks, and major structural fires 2-6 months. Timeline depends on extent, insurance approval, permit requirements, and contractor availability. We provide detailed project schedules."
      },
      {
        question: "Why does smoke smell linger after cleaning?",
        answer: "Smoke odor molecules penetrate deeply into porous materials and hide in HVAC systems, insulation, and wall cavities. Surface cleaning isn't enough. Complete odor removal requires thermal fogging, ozone treatment, hydroxyl generators, and sometimes sealing surfaces."
      },
      {
        question: "Can you save smoke-damaged furniture and belongings?",
        answer: "Many items can be professionally restored: hard furniture, electronics (with specialized cleaning), clothing, documents, and photographs. Heavily burned items, melted plastics, and heavily saturated upholstery typically cannot. We assess each item and document for insurance."
      },
      {
        question: "Is it safe to stay in a house with smoke damage?",
        answer: "No. Smoke residue contains toxic chemicals, carcinogens, and particulates harmful to breathe. Even without visible damage, smoke infiltrates HVAC and circulates throughout. Stay elsewhere until professional testing or cleaning is complete."
      },
      {
        question: "Do you handle fire damage repairs or just cleanup?",
        answer: "We handle the complete restoration—from emergency board-up through final repairs. This includes demolition, cleaning, odor removal, structural repairs, drywall, painting, flooring, and trim. One company managing everything simplifies insurance and timelines."
      },
      {
        question: "What's the difference between smoke damage and soot damage?",
        answer: "Soot is the visible black residue deposited on surfaces. Smoke damage includes soot plus invisible residues, odor penetration, discoloration, and corrosion. Cleaning soot is the first step; complete smoke damage restoration includes odor treatment and may require sealing and repainting."
      }
    ],
    relatedSearchTerms: ['fire restoration', 'smoke cleanup', 'soot removal', 'fire damage repair', 'odor removal', 'smoke damage repair', 'fire cleanup company', 'soot cleaning services', 'fire water damage', 'emergency fire restoration']
  },

  // 4. Contents Cleaning & Pack-out
  {
    id: 'res-content',
    title: 'Contents Cleaning',
    slug: '/services/residential/cleanup-services/contents-cleaning-packout/',
    shortDescription: 'Cleaning and storage for damaged personal items.',
    audience: 'RESIDENTIAL',
    category: 'CLEANUP',
    primaryKeyword: 'contents cleaning',
    secondaryKeywords: ['contents restoration', 'pack-out services', 'furniture restoration water damage', 'electronics restoration', 'document restoration', 'personal property restoration', 'contents cleaning after fire', 'belongings restoration', 'water damaged furniture repair', 'content pack-out storage'],
    heroHeading: 'Contents Cleaning & Pack-Out Services',
    heroIntro: 'Professional contents restoration for items damaged by water, fire, or mold. Expert pack-out, cleaning, storage, and return services. Save 60-80% versus replacement. Serving Northern Virginia, Maryland, and DC.',
    heroVisualKey: 'contents-packout',
    thumbVisualKey: 'contents-flow',
    infographicType: 'MOLD_AIRFLOW', // Placeholder for process
    intro_whenToCall: 'When your belongings are at risk or in the way of repairs.',
    whenToCall: [
      'Major Structural Repairs: Flooring or drywall needs total replacement.',
      'Soot Contamination: Furniture and decor are covered in smoke residue.',
      'Mold Growth: Items have visible mold or musty odors.',
      'Standing Water: Furniture is sitting in a flooded room.',
      'Security Concerns: The home is open to the elements.',
      'Need for Cleaning: Items need specialized ultrasonic or chemical cleaning.',
      'Storage Needs: You need a place to put things during a remodel.',
      'Inventory Required: Insurance needs a list of damaged items.',
      'Textile Restoration: Clothes and linens smell like smoke.',
      'Electronics Recovery: TV or computers exposed to humidity.',
      'Document Drying: Important papers are wet.',
      'Hoarding Cleanup: Organizing and clearing excessive clutter.'
    ],
    contentSections: {
      heading: "Understanding Contents Restoration",
      intro: "Your belongings often have value beyond their replacement cost, from family photographs to irreplaceable heirlooms. Professional contents restoration saves items that appear ruined while providing thorough documentation for insurance.",
      cards: [
        {
          title: "What Can Be Saved",
          content: "Professional restoration saves far more than most homeowners expect. Wood furniture can be cleaned and refinished. Electronics can be disassembled and cleaned at the component level. Clothing and textiles can be laundered with specialized processes. Documents and photographs can be freeze-dried and restored. We evaluate each item individually because many things that look destroyed can be returned to pre-loss condition."
        },
        {
          title: "The Pack-Out Process",
          content: "We photograph and inventory every item before it leaves your home, creating detailed documentation for insurance. Items are carefully packed in clean materials and transported to our climate-controlled facility. This removes belongings from the contaminated environment, protects them during restoration work, and allows thorough cleaning in a controlled setting. You receive complete inventory lists and can track your items throughout the process."
        },
        {
          title: "Specialized Cleaning Methods",
          content: "Different items require different approaches. Ultrasonic cleaning removes smoke residue from electronics and delicate items. Ozone chambers eliminate odors from soft goods. Cryogenic cleaning uses dry ice for documents and books. Textile restoration involves multiple cleaning cycles with specialized detergents. Fine art requires hand cleaning by trained conservators. We match the method to the item."
        },
        {
          title: "Electronics Restoration",
          content: "Smoke, soot, and water damage electronics through corrosion and contamination. Quick action is essential because corrosion progresses rapidly. We disassemble electronics, clean circuit boards with specialized solutions, remove corrosive residue, and test functionality. Success rates are highest when electronics are treated within 48 to 72 hours. Waiting often means components corrode beyond repair."
        },
        {
          title: "Cost-Effective Alternative to Replacement",
          content: "Contents restoration typically costs 40 to 60 percent of replacement value, making it economically sensible for most items. Insurance companies generally prefer restoration when it costs less than replacement. For items with sentimental value, restoration preserves what replacement cannot. We provide detailed estimates showing restoration versus replacement costs, helping you and your adjuster make informed decisions."
        }
      ]
    },
    intro_whatWeDo: 'We carefully inventory, pack, clean, and store your items.',
    whatWeDo: [
      'Digital Inventory: We photo-document every item we handle.',
      'Professional Packing: Using boxes and bubble wrap to prevent damage.',
      'Transport: Moving items to our secure, climate-controlled facility.',
      'Ultrasonic Cleaning: Deep cleaning for hard items like collectibles.',
      'Ozone Treatment: Deodorizing furniture and soft goods.',
      'Textile Cleaning: Coordinating dry cleaning for clothes.',
      'Electronics Cleaning: Specialized cleaning for circuit boards.',
      'Rug Cleaning: Immersion cleaning for area rugs.',
      'Secure Storage: Keeping items safe until your home is ready.',
      'Non-Salvageable List: Documenting total loss items for insurance.',
      'Pack-Back: Delivering and placing furniture back in your home.',
      'White Glove Service: Handling high-value antiques with care.'
    ],
    whatToExpect: {
      timeline: 'Pack-out takes 1-3 days. Cleaning happens while your home is repaired. Items stay in storage until you are ready.',
      arrival: 'We arrive with boxes and wrapping materials. We scan and tag everything before it leaves the house.',
      daily: 'You will receive an inventory link. You do not need to be present for the cleaning at our facility.',
      noise: 'Packing is quiet. Moving truck loading is standard moving noise.'
    },
    intro_safety: 'Protect your belongings from further damage or theft.',
    safety: {
      head: 'Contents Safety Checklist',
      items: [
        'Secure Valuables: Keep cash, jewelry, and firearms with you.',
        'Medications: Keep immediate prescriptions separate.',
        'Important Docs: Keep passports and birth certificates handy.',
        'Don\'t Clean Soot: Wiping soot can permanently stain items.',
        'Check Electronics: Do not turn on wet devices.',
        'Clear Pathways: Help movers navigate safely.',
        'Food Disposal: Throw away open food exposed to smoke.',
        'Pet Safety: Keep pets crated during the move.',
        'Inspect Items: Point out fragile items to the crew.',
        'Review Inventory: Check the list before the truck leaves.'
      ],
      kidsPets: 'Moving involves heavy lifting and open doors. Keep kids and pets safe in a separate room or off-site.'
    },
    intro_scenarios: 'We protect items from every type of disaster.',
    scenarios: [
      'Whole Home Fire: Full pack-out for smoke cleaning.',
      'Basement Flood: Moving stored items to save them from water.',
      'Mold Remediation: Clearing a room to build containment.',
      'Roof Collapse: Removing items from a dangerous structure.',
      'Kitchen Fire: Cleaning dishes and appliances of soot.',
      'Carpet Replacement: Moving furniture for new flooring.',
      'Estate Cleanup: Sorting items in a cluttered home.',
      'Sewage Backup: Disposing of contaminated soft goods.',
      'Document Recovery: Freeze-drying wet legal papers.',
      'Rug Restoration: Cleaning expensive oriental rugs.'
    ],
    saveVsRemove: {
      save: [
        'Solid wood furniture',
        'Glass and ceramics',
        'Most clothing (after wash)',
        'Electronics (if not shorted)'
      ],
      remove: [
        'Mattresses soaked in water',
        'Particle board furniture',
        'Food and cosmetics',
        'Paper items with mold'
      ]
    },
    faqs: [
      {
        question: "What is contents cleaning?",
        answer: "Contents cleaning is professional restoration of personal belongings damaged by water, fire, smoke, or mold. This includes furniture, electronics, clothing, documents, photographs, artwork, and household items. Many items that appear ruined can be professionally restored."
      },
      {
        question: "What items can be saved after water damage?",
        answer: "Most hard goods, solid wood furniture, many electronics (if treated quickly), photographs, documents, and some upholstery can be restored. Items typically not salvageable include particleboard furniture, mattresses, heavily saturated pillows, and items submerged in contaminated water."
      },
      {
        question: "How does the pack-out process work?",
        answer: "We photograph and inventory every item for insurance documentation, carefully pack items into labeled boxes, transport to our climate-controlled facility for cleaning, then return items after your home is restored. You receive detailed inventory lists throughout."
      },
      {
        question: "How much does contents cleaning cost?",
        answer: "Costs depend on volume and damage type. Professional cleaning typically costs 40-60% of replacement value, making it worthwhile for quality items. Insurance usually covers contents cleaning when it's more economical than replacement. We provide line-item estimates."
      },
      {
        question: "Can you save water-damaged photographs and documents?",
        answer: "Yes, often successfully if treated quickly. Wet photographs should never be dried at home—they'll stick together permanently. We freeze documents to prevent mold, then vacuum freeze-dry them. Old photographs and irreplaceable documents are specialty restoration priorities."
      },
      {
        question: "How do you clean smoke-damaged electronics?",
        answer: "Electronics require specialized ultrasonic cleaning to remove acidic soot residue that causes corrosion and failure. We disassemble, clean circuit boards with specialized solutions, remove corrosive residue, and test functionality. Quick treatment (within 48-72 hours) dramatically improves success rates."
      },
      {
        question: "How long does contents restoration take?",
        answer: "Soft goods like clothing and linens take 3-5 days. Hard goods and furniture take 1-2 weeks. Electronics and specialty items may take 2-4 weeks. We prioritize essential items and can expedite critical belongings. Most contents return when your home is ready."
      },
      {
        question: "Does insurance cover contents cleaning?",
        answer: "Yes, when contents damage results from a covered loss. Insurance typically pays for professional cleaning when it costs less than replacement. We provide detailed estimates that demonstrate cost-effectiveness and handle insurance documentation."
      },
      {
        question: "Should I throw anything away before you arrive?",
        answer: "No—don't discard anything. Items that look destroyed may be salvageable, and throwing things away before documentation can complicate insurance claims. We'll help you decide what to keep, clean, or claim as a loss during our inventory process."
      },
      {
        question: "Can you remove smoke odor from clothing and fabrics?",
        answer: "Yes. We use commercial ozone chambers, specialized detergents, and multiple wash cycles. Dry-clean-only items go to restoration-specialized cleaners. Success rates are high when treated before odor sets permanently. Heavily saturated items may need multiple treatments."
      }
    ],
    relatedSearchTerms: ['pack out service', 'fire content cleaning', 'furniture restoration', 'smoke damage cleaning', 'storage for restoration', 'content restoration', 'pack out companies', 'smoke damaged clothes cleaning', 'water damaged furniture repair', 'document freeze drying']
  },

  // 5. Basement Flooding
  {
    id: 'res-base',
    title: 'Basement Flooding',
    slug: '/services/residential/specialty-services/basement-flooding/',
    shortDescription: 'Specialized solutions for flooded basements.',
    audience: 'RESIDENTIAL',
    category: 'SPECIALTY',
    primaryKeyword: 'basement flooding cleanup',
    secondaryKeywords: ['basement flood cleanup', 'basement water removal', 'flooded basement restoration', 'sump pump failure cleanup', 'basement water damage', 'basement flooding near me', 'basement flood cleanup Fairfax VA', 'wet basement solutions', 'basement water extraction', 'emergency basement flooding'],
    heroHeading: 'Basement Flooding Cleanup in Northern Virginia',
    heroIntro: '24/7 emergency basement flood cleanup. Rapid water extraction, professional drying, and mold prevention. Serving Fairfax, Arlington, Alexandria, Loudoun, and Prince William County. Free estimates. Insurance claim assistance.',
    heroVisualKey: 'basement-flooding',
    thumbVisualKey: 'basement-extract',
    infographicType: 'FLOOD_TIMELINE',
    intro_whenToCall: 'Basement water is a major mold risk. Call if:',
    whenToCall: [
      'Standing Water: Puddles or deep water on the basement floor.',
      'Sump Pump Failure: Pump stopped working during rain.',
      'Sewage Backup: Drains backing up with dark water.',
      'Wet Carpet: Squishy carpet or padding.',
      'Wall Leaks: Water seeping through foundation cracks.',
      'Musty Smells: Damp odors indicating mold growth.',
      'Mold Growth: Visible mold on baseboards or drywall.',
      'Window Well Leaks: Water entering through basement windows.',
      'Condensation: Sweating pipes or walls.',
      'Water Heater Burst: Flooding the utility area.',
      'Storage Damage: Boxes on the floor getting wet.',
      'Power Outage: Sump pump failed due to no power.'
    ],
    contentSections: {
      heading: "Understanding Basement Flooding",
      intro: "Basements face unique water damage challenges due to their below-grade location, limited ventilation, and proximity to groundwater. Proper restoration requires understanding these factors and addressing the cause to prevent recurrence.",
      cards: [
        {
          title: "Why Basements Are Vulnerable",
          content: "Basements sit below grade, surrounded by soil that holds moisture and directs water toward foundation walls. Hydrostatic pressure pushes groundwater through cracks, joints, and porous concrete. Poor grading slopes water toward the house. Failed sump pumps leave no defense against rising water. These factors make basements the most flood-prone area in most homes, requiring specific waterproofing strategies beyond standard water damage restoration."
        },
        {
          title: "The Dangers of Standing Water",
          content: "Never enter a flooded basement without confirming electrical safety. Water conducts electricity, and submerged outlets, appliances, or electrical panels create lethal shock hazards. If water is above outlet level, have the utility company disconnect power before entry. Even after power is off, standing water may contain sewage, chemicals from stored products, fuel from equipment, or biological contamination. Professional assessment ensures safe entry."
        },
        {
          title: "Concrete Saturation Challenges",
          content: "Concrete appears solid but is actually porous, absorbing and holding significant moisture. A flooded basement saturates the concrete slab, which can take two to four weeks to dry completely. Placing flooring or stored items on wet concrete traps moisture, causing mold growth, adhesive failure, and material damage. We monitor concrete moisture content with specialized meters and won't clear the space until the slab reaches acceptable levels."
        },
        {
          title: "Finished Basement Considerations",
          content: "Finished basements with drywall, carpet, and built-ins face more extensive damage than unfinished spaces. Water wicks up drywall rapidly, often requiring removal 12 to 24 inches above visible water lines. Carpet and padding trap contamination and rarely survive basement flooding. Framed walls create cavities that hold moisture and grow mold if not properly dried. We balance aggressive restoration with salvaging what can genuinely be saved."
        },
        {
          title: "Preventing Future Flooding",
          content: "Restoration without prevention means future flooding. We assess your basement's vulnerabilities and recommend appropriate solutions. These may include sump pump installation or upgrade, battery backup systems, foundation crack injection, exterior grading correction, downspout extension, or interior drainage systems. Some solutions are simple and inexpensive. Others require investment but prevent thousands in future damage."
        }
      ]
    },
    intro_whatWeDo: 'We pump out, clean up, and dry out.',
    whatWeDo: [
      'Water Extraction: Pumping out deep water and vacuuming floors.',
      'Carpet Removal: Removing wet pad and unsalvageable carpet.',
      'Debris Removal: Clearing out wet boxes and trash.',
      'Sump Pump Check: Verifying pump operation.',
      'Sanitization: Cleaning concrete and walls with antimicrobials.',
      'Structural Drying: Using high-capacity dehumidifiers.',
      'Heat Drying: Using heat for cooler basement environments.',
      'Content Moving: Lifting furniture onto blocks.',
      'Moisture Mapping: Finding hidden wet spots in walls.',
      'Sewage Cleanup: Specialized cleaning for backups.',
      'Mold Prevention: Treating surfaces to stop growth.',
      'Final Check: Ensuring the basement is bone dry.'
    ],
    whatToExpect: {
      timeline: 'Pump-out is fast. Drying takes 3-5 days. Basements are cool, so drying can be slower than upstairs.',
      arrival: 'We arrive ready to pump. We need access to the basement and power.',
      daily: 'We check equipment daily. Concrete holds water, so it may take time to verify dry.',
      noise: 'Fans will run 24/7. It will be loud in the basement.'
    },
    intro_safety: 'Basements have unique electrical and slip hazards.',
    safety: {
      head: 'Basement Flood Safety',
      items: [
        'Electrical Hazard: Do not step in water if outlets are submerged.',
        'Gas Leaks: Check for gas smell near appliances.',
        'Sewage Risk: Treat all backups as toxic.',
        'Slip Hazard: Wet concrete and stairs are slippery.',
        'Chemicals: Watch for floating cleaning supplies.',
        'Structural Risk: Watch for bowing walls.',
        'Protect Items: Move valuables higher up.',
        'Boots: Wear rubber protection.',
        'Ventilation: Open windows if safe.',
        'Call Pros: Do not handle deep floods alone.'
      ],
      kidsPets: 'Keep the basement door locked. Flooded basements are dangerous play areas.'
    },
    intro_scenarios: 'Common basement flooding causes.',
    scenarios: [
      'Sump Pump Failure: The #1 cause of basement floods.',
      'Heavy Rain: Storm water overwhelming drainage.',
      'Sewer Backup: Municipal line clogs.',
      'Foundation Cracks: Seepage through walls.',
      'Water Heater Leak: Tank rupture.',
      'Washing Machine Hose: Burst supply line.',
      'Window Well Overflow: Clogged drains outside.',
      'Grading Issues: Water flowing toward the house.',
      'Pipe Burst: Ceiling pipes leaking down.',
      'Hydrostatic Pressure: Water pushing up through floor.'
    ],
    saveVsRemove: {
      save: [
        'Concrete floors',
        'Structural posts',
        'Plastic storage bins',
        'Furnace (if not submerged)'
      ],
      remove: [
        'Carpet padding (always)',
        'Cardboard boxes',
        'Drywall (bottom 2ft)',
        'Baseboards (MDF)'
      ]
    },
    faqs: [
      {
        question: "What should I do when my basement floods?",
        answer: "Don't enter if water is above electrical outlets—electrocution risk is real. Turn off power at the main breaker if safely accessible. Don't use household vacuums on standing water. Call us immediately; we have submersible pumps and safe extraction equipment for flooded basements."
      },
      {
        question: "Does homeowners insurance cover basement flooding?",
        answer: "It depends on the cause. Burst pipes, water heater failures, and appliance malfunctions are typically covered. Groundwater seepage, sump pump failure, and sewer backups usually require separate endorsements. Flood insurance covers external flooding. We document the cause for your claim."
      },
      {
        question: "How much does basement flood cleanup cost?",
        answer: "Costs range from $2,000-$10,000+ depending on water volume, contamination level, and finished vs. unfinished basement. Finished basements with drywall, carpet, and contents cost significantly more. Sewage contamination adds antimicrobial treatment costs. We provide detailed estimates."
      },
      {
        question: "How long does it take to dry out a flooded basement?",
        answer: "Typically 3-5 days for walls and contents, but concrete floors can take 7-14 days to fully dry. Basements have limited airflow and higher humidity, requiring commercial dehumidification. We monitor moisture daily and won't close walls until verified dry."
      },
      {
        question: "Can a flooded basement cause mold?",
        answer: "Yes, basements are high-risk for mold due to limited ventilation and persistent humidity. Mold can begin growing within 24-48 hours of flooding. Professional drying with commercial dehumidifiers and air movers is essential. We verify moisture levels to prevent mold growth."
      },
      {
        question: "Should I remove drywall after basement flooding?",
        answer: "Usually yes. Drywall wicks water upward and retains moisture inside wall cavities. We typically cut drywall 12-24 inches above the water line to allow cavity drying. This controlled demolition is faster and more reliable than attempting to dry through intact drywall."
      },
      {
        question: "Why does my basement keep flooding?",
        answer: "Common causes include poor grading directing water toward the foundation, failed or undersized sump pump, clogged footer drains, foundation cracks, window well leaks, and sewer backups. We can identify the entry point and recommend permanent solutions beyond just cleanup."
      },
      {
        question: "Can basement carpet be saved after flooding?",
        answer: "Rarely. Carpet padding absorbs contaminated water and cannot be adequately sanitized. The carpet itself may be salvageable if water was clean and extraction happened within 24 hours, but padding must always be replaced. Most flood situations require full carpet replacement."
      },
      {
        question: "Is flooded basement water contaminated?",
        answer: "Assume yes. Even clean water sources become contaminated after contact with basement floors, stored chemicals, and debris. Groundwater and sewer backups are Category 3 (black water) requiring full contamination protocols. We test and treat accordingly."
      },
      {
        question: "Do I need a sump pump if my basement flooded?",
        answer: "If you don't have one, strongly consider it. If you have one and it failed, it needs repair or replacement. We recommend battery backup sump pumps and water alarms for early warning. A working sump pump system is your best defense against future basement flooding."
      }
    ],
    relatedSearchTerms: ['basement pump out', 'sump pump failure', 'flooded basement cleanup', 'sewage backup', 'wet basement drying', 'flooded basement help', 'sump pump overflow cleanup', 'basement water removal', 'wet basement solutions', 'sewage in basement cleanup']
  },

  // 6. Crawl Space Drying
  {
    id: 'res-crawl',
    title: 'Crawl Space Drying',
    slug: '/services/residential/specialty-services/crawl-space-drying/',
    shortDescription: 'Moisture control and drying for crawl spaces.',
    audience: 'RESIDENTIAL',
    category: 'SPECIALTY',
    primaryKeyword: 'crawl space drying',
    secondaryKeywords: ['crawl space water damage', 'crawl space moisture control', 'crawl space encapsulation', 'standing water in crawl space', 'crawl space mold removal', 'crawl space water removal', 'crawl space repair Northern Virginia', 'wet crawl space solutions', 'crawl space dehumidification', 'crawl space flooding'],
    heroHeading: 'Crawl Space Drying & Moisture Control in Northern Virginia',
    heroIntro: 'Professional crawl space drying, moisture control, and mold prevention. Water extraction, insulation removal, and encapsulation services. Serving Fairfax, Arlington, Alexandria, and throughout Northern Virginia.',
    heroVisualKey: 'crawl-space',
    thumbVisualKey: 'crawl-equipment',
    infographicType: 'MOLD_AIRFLOW',
    intro_whenToCall: 'Crawl space issues often go unnoticed until they smell. Call if:',
    whenToCall: [
      'Standing Water: Pools of water on the plastic or dirt.',
      'Falling Insulation: Pink insulation hanging from joists.',
      'Musty Odors: Smells coming up through floor vents.',
      'Cupping Floors: Hardwood above is warping.',
      'Pest Infestation: Bugs or rodents attracted to moisture.',
      'Mold Growth: White or green fuzz on wood beams.',
      'High Humidity: The house feels sticky or damp.',
      'Sweating Ducts: Condensation on HVAC lines.',
      'Rotting Wood: Soft spots in the subfloor.',
      'Pipe Leaks: Plumbing breaks under the house.',
      'Sewage Smell: Waste line leaks.',
      'Vapor Barrier Issues: Torn or missing ground cover.'
    ],
    contentSections: {
      heading: "Understanding Crawl Space Moisture",
      intro: "Your crawl space directly affects your entire home's health. Moisture problems below create air quality issues, structural damage, and energy waste above. Proper drying and moisture control protect your home from the ground up.",
      cards: [
        {
          title: "The Stack Effect Connection",
          content: "Air in your home moves upward constantly through the stack effect. Warm air rises and exits through upper levels, pulling replacement air from the lowest point, your crawl space. Up to 40 percent of the air you breathe indoors comes through the crawl space. Moisture, mold spores, odors, and contaminants from below circulate into living spaces. Crawl space problems are whole-house problems."
        },
        {
          title: "Signs of Crawl Space Moisture",
          content: "Many homeowners never enter their crawl space, allowing problems to develop unnoticed. Warning signs include musty odors in the home, sagging or soft floors, condensation on windows, high humidity readings, increased allergy symptoms, and higher energy bills. If floor joists or subfloor show dark staining, mold growth, or structural softening, moisture has been present long enough to cause damage requiring professional attention."
        },
        {
          title: "Moisture Sources Below Grade",
          content: "Crawl space moisture comes from multiple sources. Ground moisture evaporates from exposed soil, especially during warm months. Foundation vents admit humid outdoor air that condenses on cooler surfaces. Plumbing leaks may drip unnoticed for months. Grading and drainage problems direct surface water under the home. HVAC systems in crawl spaces create condensation. We identify all contributing sources, not just the obvious ones."
        },
        {
          title: "The Encapsulation Solution",
          content: "Encapsulation seals your crawl space from ground moisture and outside air. Heavy-duty vapor barrier covers the floor and walls, creating a continuous moisture shield. Foundation vents are sealed to prevent humid air entry. A commercial-grade dehumidifier maintains optimal humidity levels year-round. The result is a clean, dry, conditioned space that protects structural components and improves whole-home air quality."
        },
        {
          title: "Structural Damage Assessment",
          content: "Long-term moisture causes serious structural damage. Floor joists can develop wood rot, losing load-bearing capacity. Subfloor delamination creates soft, bouncy spots in flooring above. Mold colonizes wood framing and spreads into insulation. Pests including termites, carpenter ants, and rodents are attracted to damp wood. We assess structural integrity during every crawl space project and recommend repairs before cosmetic encapsulation."
        }
      ]
    },
    intro_whatWeDo: 'We turn a damp, dirty space into a dry, clean one.',
    whatWeDo: [
      'Water Extraction: Pumping out puddles and standing water.',
      'Insulation Removal: Bagging and removing wet fiberglass.',
      'Debris Removal: Cleaning out trash and old plastic.',
      'Wood Cleaning: Scrubbing mold/fungus from joists.',
      'Sanitization: Spraying antimicrobials on soil and wood.',
      'Structural Drying: Using fans and dehumidifiers.',
      'Vapor Barrier: Installing new plastic ground cover.',
      'Vent Sealing: Closing vents if encapsulating.',
      'Dehumidifier Install: Setting up permanent drying units.',
      'Drainage Check: Ensuring water flows away.',
      'Sewage Cleanup: Removing contaminated soil.',
      'Moisture Verification: Checking wood moisture content.'
    ],
    whatToExpect: {
      timeline: 'Cleanup takes 1-2 days. Drying takes 3-7 days due to poor airflow.',
      arrival: 'We need access to the hatch. We wear protective suits.',
      daily: 'We monitor remotely or visit daily. It is a dirty job, but we keep your house clean.',
      noise: 'Fans under the floor create a hum.'
    },
    intro_safety: 'Crawl spaces are confined spaces with hazards.',
    safety: {
      head: 'Crawl Space Hazards',
      items: [
        'Electrical Shock: Wires in water.',
        'Pests: Spiders, snakes, and raccoons.',
        'Mold Spores: High concentration in small space.',
        'Sewage: Biohazard risk.',
        'Structural Collapse: Rotted beams.',
        'Chemicals: Old pesticides stored under house.',
        'Nails: Sharp objects in wood/dirt.',
        'Heat Stress: Hot in summer.',
        'Confined Space: Hard to exit quickly.',
        'Asbestos: Old pipe insulation.'
      ],
      kidsPets: 'Never let kids play in the crawl space. Lock the hatch.'
    },
    intro_scenarios: 'Why crawl spaces get wet.',
    scenarios: [
      'Burst Pipes: Plumbing leaks spraying water.',
      'Groundwater: Rising water table.',
      'Open Vents: Humid summer air condensing.',
      'Drainage Issues: Rain flowing toward foundation.',
      'Sewage Leaks: Broken waste lines.',
      'HVAC Leaks: Condensate line failure.',
      'Dryer Vents: Venting moisture under the house.',
      'No Vapor Barrier: Moisture rising from soil.',
      'Flood Vents: Stuck open allowing rain in.',
      'Gutters: Dumping water at foundation.'
    ],
    saveVsRemove: {
      save: [
        'Structural wood (if not rotted)',
        'Ductwork (metal)',
        'Wiring (if safe)'
      ],
      remove: [
        'Wet fiberglass insulation',
        'Contaminated soil',
        'Old vapor barrier',
        'Cardboard/debris'
      ]
    },
    faqs: [
      {
        question: "How do I know if my crawl space has water damage?",
        answer: "Warning signs include musty odors in the home, sagging floors, increased humidity upstairs, visible mold on floor joists, standing water or damp soil, condensation on pipes and ducts, and pest infestations. Many homeowners never enter their crawl space and damage goes unnoticed for years."
      },
      {
        question: "Why is crawl space water damage serious?",
        answer: "Your crawl space affects your entire home. Moisture causes structural wood rot, mold growth that infiltrates living spaces, HVAC contamination, pest attraction, and increased energy costs. Up to 40% of air in your home comes from the crawl space—what's down there affects what you breathe."
      },
      {
        question: "How much does crawl space drying and repair cost?",
        answer: "Costs range from $1,500-$5,000 for drying and treatment, $3,000-$8,000 for encapsulation, and $5,000-$15,000+ if structural repairs are needed. Variables include square footage, accessibility, moisture source, and extent of damage. We provide detailed assessments and quotes."
      },
      {
        question: "How long does crawl space drying take?",
        answer: "Active drying takes 3-7 days depending on saturation level and soil moisture. Crawl spaces require specialized low-profile dehumidifiers and air movers. Complete remediation including mold treatment and encapsulation may take 1-2 weeks. We monitor until verified dry."
      },
      {
        question: "What causes crawl space moisture problems?",
        answer: "Common causes include poor drainage and grading, foundation cracks, plumbing leaks, missing or damaged vapor barriers, inadequate ventilation, high water table, and condensation from temperature differentials. We identify the source to prevent recurrence."
      },
      {
        question: "Should I encapsulate my crawl space after water damage?",
        answer: "Strongly recommended. Encapsulation with heavy-duty vapor barrier, sealed vents, and dehumidification prevents future moisture problems, reduces energy costs, improves air quality, and protects structural components. It's a permanent solution versus repeated interventions."
      },
      {
        question: "Can crawl space moisture cause mold upstairs?",
        answer: "Yes. Mold spores travel through the stack effect—air rises from crawl space into living areas. Crawl space mold directly impacts indoor air quality throughout your home. We often find the source of upper-floor allergy symptoms is hidden crawl space mold."
      },
      {
        question: "Does insurance cover crawl space water damage?",
        answer: "Coverage depends on the cause. Sudden plumbing failures are typically covered; gradual moisture intrusion and groundwater seepage usually aren't. Mold coverage varies by policy. We document the damage source and timeline to support your claim."
      },
      {
        question: "How do you dry a crawl space with limited access?",
        answer: "We use low-profile commercial dehumidifiers (under 20 inches tall), specialized crawl space air movers, and strategic equipment placement. Our technicians are trained for confined space work. For severely limited access, we may create temporary access points."
      },
      {
        question: "What is crawl space encapsulation?",
        answer: "Encapsulation seals your crawl space from ground moisture using 12-20 mil vapor barrier on floors and walls, sealed foundation vents, insulated access doors, and a commercial dehumidifier. This creates a clean, dry, conditioned space that protects your home long-term."
      }
    ],
    relatedSearchTerms: ['crawl space cleaning', 'wet insulation removal', 'crawl space dehumidifier', 'mold under house', 'vapor barrier installation', 'crawl space water removal', 'wet crawl space cleanup', 'crawl space encapsulation near me', 'mold in crawl space', 'crawl space drying']
  },

  // 7. Hardwood Floor Drying
  {
    id: 'res-floor',
    title: 'Hardwood Floor Drying',
    slug: '/services/residential/specialty-services/hardwood-floor-drying/',
    shortDescription: 'Save wet hardwood floors with injection drying.',
    audience: 'RESIDENTIAL',
    category: 'SPECIALTY',
    primaryKeyword: 'hardwood floor drying',
    secondaryKeywords: ['hardwood floor water damage', 'water damaged hardwood floors', 'hardwood floor water damage repair', 'cupping hardwood floor repair', 'save water damaged hardwood', 'hardwood floor restoration', 'wood floor drying services', 'hardwood floor water damage near me', 'flooring water damage repair', 'hardwood floor buckling repair'],
    heroHeading: 'Hardwood Floor Drying & Water Damage Repair',
    heroIntro: 'Save your hardwood floors with advanced drying technology. Injection mat systems draw moisture out without removing flooring. Serving Northern Virginia, Maryland, and DC. Free assessments.',
    heroVisualKey: 'hardwood-drying',
    thumbVisualKey: 'floor-mat-system',
    infographicType: 'DRYING_TREND',
    intro_whenToCall: 'Hardwood reacts quickly to water. Call immediately if:',
    whenToCall: [
      'Cupping: Edges of boards are higher than the center.',
      'Spills: Large spill sitting for hours.',
      'Squishy Sound: Water squirts up when you step.',
      'Staining: Dark spots appearing in the grain.',
      'Finish Issues: Polyurethane peeling or bubbling.',
      'Buckling: Boards lifting off the subfloor.',
      'Leak Detection: Fridge or dishwasher leaked.',
      'Wet Rugs: Damp rug left on floor.',
      'Baseboard Damage: Wet trim near the floor.',
      'Mold: Growth between boards.',
      'Odor: Musty smell from the floor.',
      'Insurance Claim: Need to attempt salvage.'
    ],
    contentSections: {
      heading: "Understanding Hardwood Floor Restoration",
      intro: "Hardwood floors represent significant investment and often feature irreplaceable character, especially in older homes. Professional drying techniques can save floors that appear ruined, avoiding costly replacement and preserving original materials.",
      cards: [
        {
          title: "How Water Damages Hardwood",
          content: "Wood is hygroscopic, constantly absorbing and releasing moisture to reach equilibrium with its environment. When flooded, wood absorbs water rapidly, causing expansion. Because the bottom of the board absorbs faster than the top, boards cup with edges rising higher than centers. Prolonged saturation causes crowning, warping, buckling, and eventual delamination in engineered products. The key to saving hardwood is controlled, balanced drying."
        },
        {
          title: "The Drying Window",
          content: "Hardwood floor salvage success correlates directly with response time. Floors dried within 24 to 48 hours have excellent recovery rates. At 48 to 72 hours, recovery is still likely but may require sanding and refinishing. Beyond 72 hours, permanent damage becomes increasingly likely. This window is why immediate professional response matters. Every hour of delay reduces the chance of saving your floors."
        },
        {
          title: "Specialty Drying Systems",
          content: "Standard air movers and dehumidifiers cannot dry hardwood floors effectively. Water trapped between the hardwood and subfloor has no path to escape. Floor drying systems solve this by creating airflow beneath the wood surface. Mat systems use weighted panels that create sealed chambers, forcing dry air underneath flooring through small holes. Injection systems drill small ports between boards to deliver airflow directly. Both approaches accelerate drying dramatically."
        },
        {
          title: "Monitoring the Drying Process",
          content: "Hardwood drying requires precise moisture monitoring at multiple points. We measure moisture content in the hardwood, the subfloor beneath, and unaffected reference areas. Drying is complete when affected areas match reference areas, typically 6 to 9 percent moisture content for hardwood. We document readings daily, creating drying curves that verify progress. Removing equipment too early causes cupping to return and mold to develop."
        },
        {
          title: "After Drying: Refinishing Considerations",
          content: "Once floors are verified dry, assessment determines next steps. Minor cupping often resolves completely as moisture equalizes, requiring no further action. Moderate cupping may need sanding and refinishing after floors acclimate for several weeks. Water stains from tannin bleed may require spot treatment or full refinishing. We provide honest assessment and can coordinate refinishing contractors. Many floors we dry need no additional work."
        }
      ]
    },
    intro_whatWeDo: 'We use specialty equipment to dry from the bottom up.',
    whatWeDo: [
      'Surface Extraction: Vacuuming up standing water.',
      'Moisture Mapping: Identifying the wettest zones.',
      'Mat System: Installing vacuum mats (Injectidry).',
      'Suction Drying: Pulling moisture through the flutes.',
      'Dehumidification: Drying the air to aid evaporation.',
      'Tenting: Creating a drying chamber with plastic.',
      'Subfloor Drying: Drying from the basement below.',
      'Monitoring: Checking moisture content daily.',
      'Acclimatization: Getting wood to equilibrium.',
      'Evaluation: Determining if refinishing is needed.',
      'Documentation: Recording success for insurance.',
      'Furniture Moving: Clearing the area for mats.'
    ],
    whatToExpect: {
      timeline: 'Hardwood drying is slow. It takes 5-10 days to dry without cracking.',
      arrival: 'We assess salvageability immediately. If saveable, we set mats.',
      daily: 'We adjust mats and check readings daily. The floor may look worse briefly before flattening.',
      noise: 'The injection machine is like a loud vacuum running 24/7.'
    },
    intro_safety: 'Mats and hoses create a tripping hazard.',
    safety: {
      head: 'Floor Drying Safety',
      items: [
        'Trip Hazard: Watch out for hoses and mats.',
        'Do Not Walk: Avoid walking on the mats.',
        'Keep Running: Do not turn off equipment.',
        'Pets: Keep pets away from chewing hoses.',
        'Slippery: Floors near mats may be slick.',
        'Heat: Room will get warm.',
        'Noise: Continuous loud fan noise.',
        'Furniture: Do not move heavy items back yet.',
        'Tape: Do not peel up the seal tape.',
        'Electrical: Ensure dedicated power circuit.'
      ],
      kidsPets: 'Keep the room blocked off. The setup is delicate and hazardous for play.'
    },
    intro_scenarios: 'How hardwood gets wet.',
    scenarios: [
      'Dishwasher Leak: Slow leak under cabinets.',
      'Fridge Line: Ice maker line burst.',
      'Sink Overflow: Kitchen sink left running.',
      'Storm Door: Rain blowing under door.',
      'Planters: Overwatered plants on floor.',
      'Radiator Leak: Steam pipe burst.',
      'Toilet Overflow: Water running into hallway.',
      'Subfloor Moisture: Wet basement affecting floor above.',
      'Spills: Large drink or bucket spills.',
      'Fish Tank: Tank leak or break.'
    ],
    saveVsRemove: {
      save: [
        'Solid hardwood (Oak, Maple)',
        'Engineered (sometimes)',
        'Historic floors',
        'Slightly cupped floors'
      ],
      remove: [
        'Laminate (always)',
        'Buckled wood (detached)',
        'Moldy wood',
        'Crowned floors'
      ]
    },
    faqs: [
      {
        question: "Can water-damaged hardwood floors be saved?",
        answer: "Often yes, if addressed within 24-72 hours. Success depends on water type (clean vs. contaminated), saturation duration, wood species, and floor construction. Solid hardwood has better salvage rates than engineered. Cupping and minor warping often reverse with proper drying."
      },
      {
        question: "How do you dry hardwood floors without removing them?",
        answer: "We use specialty floor drying systems that force warm, dry air between the subfloor and hardwood using floor mats or drilled injection ports. Combined with dehumidification, this reverses cupping and removes trapped moisture. It's faster and more economical than replacement."
      },
      {
        question: "How much does hardwood floor drying cost?",
        answer: "Professional drying costs $2,000-$6,000 depending on square footage, typically 60-80% less than replacement. Drying a 500 sq ft area costs far less than $8-15 per sq ft for new hardwood plus installation. Insurance usually prefers drying when viable."
      },
      {
        question: "How long does hardwood floor drying take?",
        answer: "Typically 5-10 days for complete drying. Hardwood and subfloor must reach equilibrium moisture content (6-9% for hardwood, 12% or less for subfloor) before equipment removal. Rushing causes warping, buckling, or mold. We monitor daily with moisture meters."
      },
      {
        question: "What is hardwood floor cupping and can it be fixed?",
        answer: "Cupping occurs when the bottom of boards absorb moisture and expand, causing edges to rise higher than centers. Mild to moderate cupping often reverses completely with proper drying as moisture equalizes. Severe or prolonged cupping may require sanding after drying."
      },
      {
        question: "When is hardwood floor replacement necessary?",
        answer: "Replacement is needed when boards are severely buckled or tented, delamination has occurred (engineered floors), contaminated water soaked for extended periods, subfloor is structurally compromised, or boards are cracked or broken. We assess honestly—drying when possible, replacing when necessary."
      },
      {
        question: "Does insurance cover hardwood floor water damage?",
        answer: "Yes, when damage results from a covered peril. Insurance typically covers professional drying or replacement, whichever is more cost-effective. We provide documentation showing drying viability and cost comparison. Proper drying often saves insurers thousands while preserving your floors."
      },
      {
        question: "Should I turn on fans to dry my hardwood floors?",
        answer: "No—this is a common mistake. Fans cause rapid, uneven drying that leads to permanent cupping and cracking. Hardwood requires slow, controlled drying with balanced moisture removal from above and below. Call professionals before attempting any drying."
      },
      {
        question: "Will my hardwood floors look the same after water damage?",
        answer: "Usually yes, if dried properly. Some staining may occur from tannins in oak or contaminants in water, but sanding and refinishing can address this. Floors dried within 24-48 hours with professional equipment typically return to pre-loss appearance."
      },
      {
        question: "How do you know when hardwood floors are fully dry?",
        answer: "We use pin and pinless moisture meters to measure moisture content in hardwood and subfloor at multiple locations. Hardwood should reach 6-9% moisture content, matching unaffected areas. Subfloor must be under 12%. We document readings daily and at completion."
      }
    ],
    relatedSearchTerms: ['wet hardwood repair', 'floor drying mats', 'cupped floor fix', 'water damage wood floor', 'hardwood restoration', 'hardwood floor water damage repair', 'drying wood floors', 'cupped wood floor repair', 'water damaged floorboards', 'floor drying equipment rental']
  },

  // 8. Roof Leak Water Damage
  {
    id: 'res-roof',
    title: 'Roof Leak Water Damage',
    slug: '/services/residential/specialty-services/roof-leak-water-damage/',
    shortDescription: 'Interior restoration from roof leaks.',
    audience: 'RESIDENTIAL',
    category: 'SPECIALTY',
    primaryKeyword: 'roof leak water damage',
    secondaryKeywords: ['roof leak repair', 'ceiling water damage repair', 'attic water damage', 'emergency roof tarping', 'roof leak water damage repair', 'interior water damage from roof', 'ceiling leak repair', 'roof water damage restoration', 'wet insulation removal', 'storm roof damage'],
    heroHeading: 'Roof Leak Water Damage Restoration',
    heroIntro: 'Emergency interior restoration from roof leaks and storm damage. Attic drying, insulation replacement, ceiling repair, and mold prevention. Serving Northern Virginia, Maryland, and DC.',
    heroVisualKey: 'roof-leak',
    thumbVisualKey: 'roof-source-id',
    infographicType: 'STRUCTURAL_DRYING',
    intro_whenToCall: 'Ceiling stains mean water is pooling above. Call if:',
    whenToCall: [
      'Water Stains: Brown circles on the ceiling.',
      'Sagging Drywall: Ceiling bubbling or bowing down.',
      'Active Drips: Water coming from lights or vents.',
      'Wet Insulation: Attic insulation is soaked.',
      'Mold in Attic: Fuzzy growth on sheathing.',
      'Peeling Paint: Paint blistering on walls.',
      'Musty Smell: Damp odor in upper rooms.',
      'Tree Damage: Branch through the roof.',
      'Missing Shingles: Visible roof damage.',
      'Ice Dams: Winter leaks at the eaves.',
      'Chimney Leaks: Water running down fireplace.',
      'Storm Damage: Sudden leak during rain.'
    ],
    contentSections: {
      heading: "Understanding Roof Leak Damage",
      intro: "Roof leaks often cause damage far beyond the visible ceiling stain. Water travels along rafters, across sheathing, and through insulation before appearing inside. Proper restoration traces the full damage path and addresses hidden moisture.",
      cards: [
        {
          title: "How Water Travels From Roof to Ceiling",
          content: "Water rarely drips straight down from a roof leak. It follows the path of least resistance, running along rafters, sheathing, and framing members horizontally before finding a penetration point into living space. A ceiling stain may be ten or twenty feet from the actual roof entry point. Insulation absorbs and holds water, wicking it outward. The visible damage typically represents a fraction of total moisture intrusion."
        },
        {
          title: "Attic Inspection Is Essential",
          content: "Effective roof leak restoration requires attic inspection to trace the water path. We identify the entry point, map water travel along framing, assess sheathing condition, and evaluate insulation damage. Thermal imaging reveals temperature differences indicating wet materials. Moisture meters confirm saturation levels. Without attic access, damage assessment is incomplete and hidden moisture leads to mold growth and wood rot."
        },
        {
          title: "Insulation Damage and Replacement",
          content: "Wet insulation loses its insulating value and creates multiple problems. Fiberglass insulation compresses and clumps when wet, reducing effectiveness permanently. Cellulose insulation sags and mats, potentially stressing ceilings. Both types hold moisture against sheathing and framing, promoting rot and mold. Contaminated insulation can harbor rodent waste and debris. We remove wet insulation to allow proper drying and recommend replacement after repairs."
        },
        {
          title: "Emergency Tarping and Interim Protection",
          content: "While waiting for permanent roof repair, your home remains vulnerable to continued water intrusion. We provide emergency tarping to create temporary weatherproofing over damaged areas. Properly installed tarps extend beyond the damage zone, are secured against wind, and channel water away from openings. This interim protection prevents additional damage during the restoration period and is typically covered by insurance as mitigation."
        },
        {
          title: "Coordinating Roof Repair and Interior Restoration",
          content: "Roof leaks require two types of repair: the roof itself and the interior water damage. These must be sequenced properly. Emergency tarping stops active intrusion. Interior extraction and drying begin immediately. Permanent roof repair happens when weather and contractor availability allow. Interior reconstruction, including drywall, insulation, and finishing, comes last. We coordinate this timeline and can recommend trusted roofing contractors in our network."
        }
      ]
    },
    intro_whatWeDo: 'We handle the water inside and tarp the outside.',
    whatWeDo: [
      'Roof Tarping: Emergency cover to stop the rain.',
      'Attic Inspection: Checking insulation and wood.',
      'Water Extraction: Removing water from ceiling/floor.',
      'Insulation Removal: Bagging wet fiberglass.',
      'Demolition: Removing unsafe sagging drywall.',
      'Drying: Drying framing and sheathing.',
      'Antimicrobial: Treating wood to stop mold.',
      'Protection: Covering furniture and floors.',
      'Moisture Checks: Verifying attic is dry.',
      'Ventilation: Restoring airflow.',
      'Documentation: Photos for insurance.',
      'Referral: Coordinating permanent roof repair.'
    ],
    whatToExpect: {
      timeline: 'Emergency tarping Day 1. Drying 3-5 days. Repair follows.',
      arrival: 'We check the roof and the interior. We protect floors immediately.',
      daily: 'We monitor attic drying. It can be slow in winter.',
      noise: 'Fans in the attic can vibrate the ceiling.'
    },
    intro_safety: 'Collapsing ceilings are dangerous.',
    safety: {
      head: 'Roof Leak Safety',
      items: [
        'Collapse Risk: Do not stand under sagging bubbles.',
        'Bucket: Catch the water to save floors.',
        'Poke Hole: Release water pressure (if safe).',
        'Electrical: Turn off lights if wet.',
        'Roof Safety: Do not climb on wet roof.',
        'Slip Hazard: Wet attic joists.',
        'Debris: Watch for falling plaster.',
        'Mold: Wear mask in attic.',
        'Protect Items: Move furniture away.',
        'Call Pros: Do not ignore leaks.'
      ],
      kidsPets: 'Keep them out. Ceilings fall suddenly.'
    },
    intro_scenarios: 'How roofs leak.',
    scenarios: [
      'Storm Damage: Wind blowing off shingles.',
      'Tree Impact: Punctures from branches.',
      'Ice Dams: Water backing up under shingles.',
      'Flashing Failure: Leaks around chimneys/vents.',
      'Age: Old shingles cracking.',
      'Gutters: Clogged gutters backing up.',
      'Skylights: Seal failure.',
      'Vent Boots: Rubber seals cracking.',
      'Condensate: HVAC leak in attic.',
      'Solar Panels: Installation leaks.'
    ],
    saveVsRemove: {
      save: [
        'Roof trusses',
        'Attic sheathing (usually)',
        'Light fixtures (sometimes)',
        'Hardwood below (if protected)'
      ],
      remove: [
        'Wet blown-in insulation',
        'Wet batt insulation',
        'Sagging drywall',
        'Ceiling tiles'
      ]
    },
    faqs: [
      {
        question: "What should I do if my roof is leaking?",
        answer: "Contain water with buckets and protect belongings with plastic. Don't go on the roof during rain or storms. Take photos of water entry points and damage. Call us for emergency tarping to stop active intrusion, then water extraction and drying to prevent mold."
      },
      {
        question: "Does homeowners insurance cover roof leak damage?",
        answer: "Usually yes, if the leak resulted from a covered event like storm damage, fallen trees, or sudden failure. Damage from deferred maintenance, gradual wear, or neglected repairs is typically excluded. We document the cause and damage timeline for your claim."
      },
      {
        question: "How much does roof leak water damage repair cost?",
        answer: "Interior water damage restoration costs $1,500-$8,000+ depending on affected area and materials. This covers extraction, drying, drywall repair, and painting. Roof repair is separate—minor repairs cost $300-$1,000, while significant damage costs more. We coordinate both."
      },
      {
        question: "How long does it take to dry out water damage from a roof leak?",
        answer: "Typically 3-5 days for ceilings and walls. Attic spaces with insulation may take longer. Ceiling cavities require opening drywall to dry effectively. We monitor moisture in framing, drywall, and insulation until verified dry to IICRC standards."
      },
      {
        question: "Can ceiling drywall be saved after a roof leak?",
        answer: "Sometimes. Small areas that dried quickly may need only stain-blocking primer and paint. Saturated drywall, sagging areas, or insulation-backed drywall usually require replacement. We assess damage extent with moisture meters to determine what can be saved."
      },
      {
        question: "Will a roof leak cause mold in my attic?",
        answer: "Yes, attics are high-risk for mold because leaks often go unnoticed and attic ventilation may be inadequate for drying. Mold can grow on roof sheathing, rafters, and insulation within days. Any roof leak requires inspection of attic spaces for mold."
      },
      {
        question: "How do you find where a roof leak is coming from?",
        answer: "Water travels along rafters, sheathing, and wiring before appearing on ceilings, so entry points are rarely directly above stains. We inspect attic spaces during or after rain, use moisture meters to trace paths, and examine flashings, penetrations, and valleys from the roof."
      },
      {
        question: "Should I remove wet attic insulation?",
        answer: "Usually yes. Fiberglass insulation loses R-value when wet and can harbor mold. Cellulose insulation clumps and compresses. Both trap moisture against sheathing. We remove wet insulation for proper drying, then recommend replacement after repairs are complete."
      },
      {
        question: "What if I can't get a roofer immediately?",
        answer: "We provide emergency tarping to stop active water intrusion within hours, not days. This protects your home while you schedule permanent roof repair. Emergency tarping is typically covered by insurance as mitigation. Don't wait—ongoing leaks cause exponential damage."
      },
      {
        question: "How do I prevent roof leaks in the future?",
        answer: "Schedule annual roof inspections, especially after major storms. Clean gutters regularly to prevent ice dams. Trim overhanging branches. Address flashing around chimneys, vents, and skylights promptly. Replace roofing at end of lifespan—don't wait for failures."
      }
    ],
    relatedSearchTerms: ['ceiling leak repair', 'emergency tarping', 'attic water damage', 'wet insulation', 'roof leak help', 'ceiling water damage repair', 'leaking roof repair', 'attic water damage cleanup', 'emergency roof tarping', 'roof leak detection']
  },

  // 9. Flood Cleanup
  {
    id: 'res-flood',
    title: 'Flood Cleanup',
    slug: '/services/residential/restoration-services/flood-cleanup/',
    shortDescription: 'Rapid cleanup after storm or basement flooding.',
    audience: 'RESIDENTIAL',
    category: 'RESTORATION',
    primaryKeyword: 'flood cleanup services',
    secondaryKeywords: ['flood damage restoration', 'storm damage cleanup', 'flood water removal', 'emergency flood cleanup', 'flood cleanup near me', 'basement flood cleanup', 'hurricane damage restoration', 'flood damage repair', 'flood remediation services', 'flood cleanup Northern Virginia'],
    heroHeading: 'Flood Cleanup Services in Northern Virginia',
    heroIntro: '24/7 emergency flood cleanup for storm damage, basement flooding, and groundwater intrusion. Rapid water extraction, mud removal, and professional sanitization. Serving Fairfax, Arlington, Alexandria, and the DMV.',
    heroVisualKey: 'flood-cleanup',
    thumbVisualKey: 'flood-timeline',
    infographicType: 'FLOOD_TIMELINE',
    intro_whenToCall: 'Rising water requires heavy equipment. Call if:',
    whenToCall: [
      'Basement Flooding: Inches or feet of water.',
      'Storm Surge: Water entering from outside.',
      'Sump Failure: Backup during rain.',
      'River Overflow: Creek or stream breaching banks.',
      'Mud/Silt: Mud entering the home.',
      'Sewage: Municipal line backup.',
      'Window Wells: Aquarium effect on windows.',
      'Flash Flood: Sudden water entry.',
      'Structural Risk: Walls bowing from pressure.',
      'Mold Risk: Wet materials sitting for days.',
      'Electrical Risk: Water near outlets.',
      'Insurance Claim: Need documentation.'
    ],
    contentSections: {
      heading: "Understanding Flood Damage",
      intro: "Flood water presents unique challenges that differ from typical water damage. Contamination levels, sediment deposits, and the sheer volume of water require specialized protocols to restore your home safely.",
      cards: [
        {
          title: "Why Flood Water Is Different",
          content: "Flood water is automatically classified as Category 3 (black water) regardless of source. It contains sewage, agricultural runoff, chemicals, fuel, and biological contaminants. This water has traveled through streets, yards, and drainage systems, picking up everything in its path. Standard cleaning methods are insufficient—flood restoration requires contamination protocols, antimicrobial treatments, and often removal of porous materials that cannot be adequately sanitized."
        },
        {
          title: "The Hidden Damage Below",
          content: "Flood water doesn't just wet surfaces—it saturates from the bottom up. Water wicks into wall cavities, soaks bottom plates and studs, and penetrates concrete slabs. Even after standing water is removed, materials remain dangerously wet. Concrete alone can hold moisture for weeks. Without professional extraction and drying, this hidden moisture creates perfect conditions for mold colonization, wood rot, and structural failure."
        },
        {
          title: "Health Risks and Safety Protocols",
          content: "Flood water exposure can cause gastrointestinal illness, skin infections, and respiratory problems. Our technicians wear full personal protective equipment including Tyvek suits, respirators, and waterproof boots. We establish containment to prevent cross-contamination to unaffected areas. All contaminated materials are bagged and disposed of properly. Air scrubbers with HEPA filtration run continuously during the project."
        },
        {
          title: "Sediment and Debris Removal",
          content: "Floods leave behind mud, silt, and debris that standard extraction can't handle. We use specialized pumps and vacuums designed for debris-laden water, then pressure wash surfaces before antimicrobial treatment. Sediment trapped in carpet padding, behind baseboards, and in wall cavities must be physically removed—it can't be dried in place. This labor-intensive process is essential for proper sanitation."
        },
        {
          title: "Flood Insurance vs. Homeowners Insurance",
          content: "Standard homeowners insurance does not cover flooding from external sources—rising water, storm surge, or overland flow. FEMA's National Flood Insurance Program (NFIP) or private flood policies provide this coverage. We work with both policy types and understand their different documentation requirements. If you're unsure about coverage, we'll help you determine which policy applies and document accordingly."
        }
      ]
    },
    intro_whatWeDo: 'We manage the chaos of flooding.',
    whatWeDo: [
      'Pumping: High-volume water removal.',
      'Extraction: Vacuuming remaining water.',
      'Muck Out: Shoveling mud and debris.',
      'Demolition: Removing wet drywall/carpet.',
      'Cleaning: Pressure washing concrete.',
      'Sanitizing: Killing bacteria from flood water.',
      'Drying: Industrial dehumidification.',
      'Content Moving: Saving salvageable items.',
      'Documentation: Listing damage for FEMA/Insurance.',
      'Mold Prevention: Spraying antimicrobials.',
      'Odor Control: Removing flood smells.',
      'Final Clean: Preparing for rebuild.'
    ],
    whatToExpect: {
      timeline: 'Pumping is fast. Drying takes 3-7 days. Rebuild follows.',
      arrival: 'We prioritize getting water out to stop damage.',
      daily: 'We monitor drying progress. Mud removal is messy but necessary.',
      noise: 'Generators and pumps are loud.'
    },
    intro_safety: 'Flood water is often contaminated.',
    safety: {
      head: 'Flood Safety',
      items: [
        'Electricity: Do not walk in water with power on.',
        'Contamination: Assume flood water is Category 3 (black water).',
        'Structural: Watch for collapse.',
        'Gas: Check for leaks.',
        'Wildlife: Snakes/rats seeking high ground.',
        'Boots: Wear protective gear.',
        'Wash Hands: Sanitize after contact.',
        'Photos: Document water level.',
        'Food: Toss anything touched by water.',
        'Evacuate: Leave if unsafe.'
      ],
      kidsPets: 'Keep them completely away. Flood water carries disease.'
    },
    intro_scenarios: 'Types of flooding we handle.',
    scenarios: [
      'Sump Pump Failure',
      'Heavy Rain / Flash Flood',
      'River / Creek Overflow',
      'Storm Drain Backup',
      'Foundation Seepage',
      'Window Well Leaks',
      'Hurricane Damage',
      'Driveway Runoff',
      'Sewage Backup',
      'Appliance Failure'
    ],
    saveVsRemove: {
      save: [
        'Concrete',
        'Solid wood (sometimes)',
        'Metal/Glass',
        'Upper drywall'
      ],
      remove: [
        'Carpet/Pad',
        'Laminate',
        'Lower drywall',
        'Fiberglass insulation'
      ]
    },
    faqs: [
      {
        question: "Is flood water dangerous?",
        answer: "Yes. Flood water is classified as Category 3 (black water) containing sewage, chemicals, bacteria, and debris. Direct contact can cause illness. We wear full PPE and follow strict contamination protocols. Do not enter flooded areas without protection."
      },
      {
        question: "Does homeowners insurance cover flood damage?",
        answer: "Standard homeowners policies do NOT cover flooding from external sources (storms, rising water, overland flow). Flood insurance through FEMA's NFIP or private carriers is required. We work with all flood insurance providers and document losses thoroughly."
      },
      {
        question: "How much does flood cleanup cost?",
        answer: "Flood cleanup typically costs $3,000-$15,000+ depending on square footage, contamination level, and materials affected. Flooded basements average $5,000-$8,000. We provide detailed estimates and work within insurance coverage limits."
      },
      {
        question: "What should I do immediately after a flood?",
        answer: "Stay safe first—don't enter if water is above electrical outlets. Turn off power at the breaker if safe to do so. Document damage with photos before touching anything. Call us immediately; the faster extraction begins, the more we can save."
      },
      {
        question: "Can flooded furniture and belongings be saved?",
        answer: "It depends on the item and contamination level. Solid wood furniture, hard goods, and some upholstery can often be cleaned and restored. Particleboard, mattresses, and heavily contaminated porous items typically cannot. We assess each item individually."
      },
      {
        question: "How long does flood cleanup take?",
        answer: "Initial extraction takes 1-2 days. Complete drying requires 5-7 days minimum due to contamination protocols and concrete saturation. Total restoration including repairs may take 2-4 weeks depending on scope. We provide daily progress updates."
      },
      {
        question: "Do you remove flood-damaged drywall and flooring?",
        answer: "Yes. Flood water wicks up drywall and saturates subfloors. We cut drywall 12-24 inches above the visible water line and remove all contaminated flooring, carpet, and pad. This controlled demolition is essential for proper drying and sanitation."
      },
      {
        question: "How do you sanitize after a flood?",
        answer: "We apply EPA-registered antimicrobial treatments to all affected surfaces, HEPA vacuum to remove contaminants, and fog with hospital-grade disinfectants. All Category 3 water requires antimicrobial treatment per IICRC S500 standards."
      },
      {
        question: "Will my house smell after flood cleanup?",
        answer: "Not if properly restored. Odors indicate incomplete drying or remaining contamination. We use hydroxyl generators, thermal fogging, and ozone treatments (when unoccupied) to eliminate odors. Our work isn't complete until odors are gone."
      },
      {
        question: "Should I hire a public adjuster for flood claims?",
        answer: "Consider it for large losses over $20,000. For typical residential floods, our detailed documentation and adjuster coordination usually achieves fair settlements. We can recommend trusted public adjusters if your claim is disputed or underpaid."
      }
    ],
    relatedSearchTerms: ['basement flood pump', 'flood cleanup crew', 'water removal service', 'storm damage repair', 'emergency flood help', 'emergency flood service', 'flood restoration company', 'basement flooding repair', 'water damage cleanup', 'storm flood cleanup']
  },

  // 10. Sewage Cleanup
  {
    id: 'res-sewage',
    title: 'Sewage Cleanup',
    slug: '/services/residential/cleanup-services/sewage-cleanup/',
    shortDescription: 'Safe removal and sanitization of sewage backups.',
    audience: 'RESIDENTIAL',
    category: 'CLEANUP',
    primaryKeyword: 'sewage cleanup',
    secondaryKeywords: ['sewage backup cleanup', 'sewage damage restoration', 'biohazard cleanup services', 'black water cleanup', 'septic overflow cleanup', 'emergency sewage cleanup', 'sewage cleanup near me', 'basement sewage cleanup', 'toilet overflow cleanup', 'sewage backup cleanup Fairfax VA', 'category 3 water damage'],
    heroHeading: 'Sewage Backup Cleanup in Northern Virginia',
    heroIntro: '24/7 emergency sewage cleanup and biohazard remediation. IICRC-certified technicians with hospital-grade sanitization protocols. Serving Fairfax, Arlington, Alexandria, and the DMV. Insurance documentation and direct billing available.',
    heroVisualKey: 'sewage-cleanup',
    thumbVisualKey: 'sewage-containment',
    infographicType: 'SEWAGE_CONTAINMENT',
    intro_whenToCall: 'Sewage is a health emergency. Call if:',
    whenToCall: [
      'Toilet Overflow: Water with waste spilling out.',
      'Floor Drain Backup: Black water coming up.',
      'Septic Failure: Yard or basement flooded.',
      'Smell: Sulfur/Rotten egg odor.',
      'Pipe Break: Waste line rupture.',
      'Shower Backup: Water rising in tub.',
      'Multiple Clogs: Drains failing at once.',
      'Dark Water: Unknown water color.',
      'Health Risks: Family feeling ill.',
      'Biohazard: Cleanup needed.',
      'Crawl Space: Sewage under house.',
      'Apartment: Upstairs leak.'
    ],
    contentSections: {
      heading: "Understanding Sewage Cleanup",
      intro: "Sewage backup creates immediate health hazards and requires specialized contamination protocols. Quick professional response protects your family's health and limits damage to salvageable materials.",
      cards: [
        {
          title: "Why Sewage Is a Health Emergency",
          content: "Sewage contains bacteria, viruses, parasites, and other pathogens that cause serious illness. E. coli, hepatitis A, salmonella, and parasitic infections are all possible from sewage exposure. Children, elderly, and immunocompromised individuals face heightened risks. This isn't a cleanup you should attempt yourself. Professional remediation with proper protective equipment and antimicrobial treatment is essential for safety."
        },
        {
          title: "Category 3 Contamination Protocols",
          content: "The IICRC classifies sewage as Category 3, the highest contamination level requiring the most aggressive protocols. All porous materials contacted by sewage, including carpet, padding, drywall, and insulation, must be removed and disposed of properly. Non-porous surfaces require thorough cleaning and antimicrobial treatment. Air scrubbers run continuously to capture airborne contaminants. We follow strict protocols that protect your family."
        },
        {
          title: "Proper Disposal Requirements",
          content: "Sewage-contaminated materials cannot go in regular trash. Regulations require proper bagging, labeling, and disposal at appropriate facilities. Improper disposal creates liability and can result in fines. We handle all disposal according to local regulations, providing documentation that protects you. This includes contaminated building materials, affected contents, and all cleaning materials used during remediation."
        },
        {
          title: "Antimicrobial Treatment Process",
          content: "After removing contaminated materials, all affected surfaces receive antimicrobial treatment. We apply EPA-registered disinfectants designed for Category 3 contamination, treating floors, wall framing, subfloors, and any remaining structural elements. Treatment isn't a single application. We apply product, allow proper dwell time, and verify coverage. Some situations require multiple treatment rounds."
        },
        {
          title: "Preventing Future Backups",
          content: "Sewage backups often recur without addressing the cause. Common causes include tree root intrusion, pipe deterioration, municipal system overload during storms, and improper items flushed into the system. We can identify likely causes and recommend solutions such as backwater valves, which prevent municipal backups from entering your home, or line inspections to identify pipe problems before they cause another backup."
        }
      ]
    },
    intro_whatWeDo: 'We clean, sanitize, and verify safety.',
    whatWeDo: [
      'Containment: Sealing off the area.',
      'Extraction: Removing solid and liquid waste.',
      'Removal: Bagging contaminated porous materials.',
      'Cleaning: Pressure washing/scrubbing surfaces.',
      'Disinfection: Using hospital-grade biocides.',
      'Air Scrubbing: Removing airborne pathogens.',
      'Drying: Drying the structure after cleaning.',
      'Verification: ATP testing for cleanliness.',
      'Odor Control: Neutralizing smells.',
      'Disposal: Biohazard waste disposal.',
      'Documentation: Proof of sanitation.',
      'Safety: PPE for all technicians.'
    ],
    whatToExpect: {
      timeline: 'Cleanup is 1-2 days. Drying follows. Priority is safety.',
      arrival: 'We wear hazmat suits (Tyvek). We seal the room immediately.',
      daily: 'Negative air machines run 24/7. You cannot enter the zone.',
      noise: 'Air scrubbers create a hum.'
    },
    intro_safety: 'Sewage contains Hepatitis, E. Coli, and Salmonella.',
    safety: {
      head: 'Sewage Safety',
      items: [
        'Do Not Touch: Avoid contact.',
        'Evacuate: Keep kids/pets away.',
        'Shut Off HVAC: Stop spreading germs.',
        'Do Not Vacuum: Aerosolizes bacteria.',
        'Wash Hands: Thoroughly if exposed.',
        'Discard Food: If near fumes.',
        'No Bleach: Can react with ammonia.',
        'Call Pros: Requires PPE.',
        'Boots: Wear rubber protection.',
        'Seal Door: Block fumes.'
      ],
      kidsPets: 'Strictly off-limits. High disease risk.'
    },
    intro_scenarios: 'Causes of sewage backups.',
    scenarios: [
      'Main Line Blockage',
      'Toilet Overflow',
      'Septic Tank Full',
      'Tree Roots in Pipe',
      'City Sewer Backup',
      'Broken Waste Pipe',
      'Clogged Drain',
      'Backflow Failure',
      'Ejector Pump Failure',
      'RV Dump Leak'
    ],
    saveVsRemove: {
      save: [
        'Tile/Concrete (sanitized)',
        'Metal/Glass',
        'Structural wood (sealed)'
      ],
      remove: [
        'Carpet/Pad (always)',
        'Cardboard',
        'Drywall (touched)',
        'Upholstery'
      ]
    },
    faqs: [
      { question: "How much does sewage cleanup cost?", answer: "Sewage cleanup costs range from $2,000-$10,000+ depending on affected area size, depth of contamination, and materials requiring removal. Small toilet overflows may cost $2,000-$4,000. Basement-wide backups with finished space typically run $5,000-$15,000+. We provide detailed estimates before starting." },
      { question: "Is sewage cleanup covered by homeowners insurance?", answer: "Standard policies often exclude sewer backup unless you have 'Water Backup of Sewers or Drains' coverage (typically a $50-$100/year rider). If you have this coverage, limits usually range $5,000-$25,000. We document everything for your claim and work directly with adjusters." },
      { question: "What diseases can you get from sewage exposure?", answer: "Sewage contains dangerous pathogens including E. coli, Hepatitis A, Salmonella, Campylobacter, Giardia, and Cryptosporidium. Symptoms include gastroenteritis, respiratory infections, and skin infections. Children, elderly, and immunocompromised individuals face highest risks. Seek medical attention if you've had direct contact." },
      { question: "Can I clean up a small sewage spill myself?", answer: "We strongly advise against it for any sewage cleanup. Even small spills contain dangerous pathogens that require proper PPE, EPA-registered disinfectants, and disposal protocols. DIY attempts risk spreading contamination, incomplete sanitation, and serious illness. The EPA recommends professional cleanup for all sewage incidents." },
      { question: "What is Category 3 water damage?", answer: "Category 3 (black water) is the IICRC's classification for grossly contaminated water containing pathogens—including sewage, rising flood water, and stagnant water with bacterial growth. It requires the most aggressive remediation protocols: removal of all porous materials, antimicrobial treatment, and proper biohazard disposal." },
      { question: "Can you save carpet or furniture touched by sewage?", answer: "No. IICRC standards require removal and disposal of all porous materials contacted by Category 3 water, including carpet, padding, upholstered furniture, mattresses, and particleboard. Non-porous items like solid wood furniture, metal, and glass can be cleaned and disinfected." },
      { question: "How do you get rid of sewage smell?", answer: "Sewage odor requires removing the source (contaminated materials and waste), deep cleaning all affected surfaces with antimicrobial agents, running air scrubbers with activated carbon, and using hydroxyl generators to neutralize odor molecules. Surface cleaning alone won't eliminate the smell—the source must be completely removed." },
      { question: "How long does sewage cleanup take?", answer: "Active cleanup takes 1-2 days for extraction, removal, and disinfection. Drying takes an additional 2-4 days. Total timeline is typically 4-7 days before repairs can begin. Larger areas or finished basements may take longer. We monitor progress daily and provide updates." },
      { question: "Is it safe to stay in my house during sewage cleanup?", answer: "It depends on contamination extent. If we can fully contain the affected area (basement with sealed access), you may stay in unaffected areas. If contamination has spread to HVAC, living spaces, or multiple floors, temporary relocation is safer until clearance testing confirms air quality." },
      { question: "What should I do immediately after a sewage backup?", answer: "Stop using water fixtures, turn off HVAC to prevent spreading contamination, evacuate the area (especially children and pets), don't touch anything contaminated, and call us immediately. Do NOT attempt cleanup yourself. The faster professionals arrive, the less damage occurs and the more materials can potentially be saved." }
    ],
    relatedSearchTerms: ['sewage cleanup', 'biohazard cleaning', 'toilet overflow', 'septic backup', 'black water cleanup', 'sewage removal service', 'basement sewage cleanup', 'toilet backup cleanup', 'sewage spill disinfection', 'emergency sewage cleanup']
  },

  // 11. Mold Remediation
  {
    id: 'res-mold',
    title: 'Mold Remediation',
    slug: '/services/residential/cleanup-services/mold-remediation/',
    shortDescription: 'Certified mold inspection and removal services.',
    audience: 'RESIDENTIAL',
    category: 'CLEANUP',
    primaryKeyword: 'mold remediation',
    secondaryKeywords: ['mold removal', 'black mold removal', 'mold remediation near me', 'mold inspection', 'mold testing', 'mold removal company', 'mold remediation Northern Virginia', 'basement mold removal', 'attic mold remediation', 'mold remediation Fairfax VA', 'crawl space mold'],
    heroHeading: 'Mold Remediation in Northern Virginia',
    heroIntro: 'IICRC-certified mold removal experts. Complete inspection, containment, removal, and clearance testing. Serving Fairfax, Arlington, Alexandria, and the DMV area. 24/7 emergency response. Free mold inspections.',
    heroVisualKey: 'mold-remediation',
    thumbVisualKey: 'mold-neg-air',
    infographicType: 'MOLD_AIRFLOW',
    intro_whenToCall: 'Mold needs removal, not just covering up. Call if:',
    whenToCall: [
      'Visible Growth: Black, green, or white spots.',
      'Musty Smell: Earthy odor in a room.',
      'Water History: Past leak not dried properly.',
      'Health Issues: Allergies or coughing.',
      'High Humidity: Damp basement/crawl space.',
      'Real Estate: Inspector found mold.',
      'Discoloration: Stains on walls/ceilings.',
      'Peeling Paint: Moisture behind paint.',
      'HVAC Smells: Moldy smell from vents.',
      'Condensation: Wet windows.',
      'Warped Wood: Moisture damage.',
      'Hidden Growth: Suspicion behind walls.'
    ],
    contentSections: {
      heading: "Understanding Mold Remediation",
      intro: "Mold is a symptom of moisture problems. Effective remediation removes existing mold, addresses the moisture source, and prevents recurrence. Without solving the underlying issue, mold always returns.",
      cards: [
        {
          title: "How Mold Affects Your Health",
          content: "Mold produces spores that become airborne and spread throughout your home. Inhaling these spores can cause allergic reactions, respiratory irritation, headaches, and fatigue. Some molds produce mycotoxins that pose more serious health risks. People with asthma, allergies, or weakened immune systems are particularly vulnerable. If occupants experience symptoms that improve when away from home, mold investigation is warranted."
        },
        {
          title: "Why DIY Mold Removal Fails",
          content: "Disturbing mold without proper containment releases millions of spores into the air, spreading contamination throughout your home. Bleach kills surface mold but doesn't penetrate porous materials where roots grow, allowing regrowth within weeks. Without identifying and fixing the moisture source, mold returns regardless of cleaning. Professional remediation includes containment, air filtration, proper removal, and moisture correction."
        },
        {
          title: "The Containment Imperative",
          content: "Before any mold is disturbed, we establish containment using plastic barriers and negative air pressure. This prevents spores from spreading to unaffected areas during removal. Air scrubbers with HEPA filtration capture airborne spores continuously. Workers enter through sealed openings and wear full protective equipment. Without containment, remediation causes more contamination than it solves."
        },
        {
          title: "Black Mold: Facts vs. Fear",
          content: "Stachybotrys chartarum (black mold) gets media attention, but all mold growth requires professional attention. Black mold produces mycotoxins and requires careful containment, but so do other common household molds. Color alone doesn't determine toxicity—proper testing identifies species. Our IICRC-certified technicians follow the same rigorous protocols for all mold types, ensuring complete removal regardless of species."
        },
        {
          title: "Why Northern Virginia Homes Are Vulnerable",
          content: "The DMV's humid summers (averaging 70%+ humidity) create ideal conditions for mold growth. Older homes in Alexandria, Arlington, and Fairfax often have inadequate ventilation. Newer construction in Loudoun and Prince William can trap moisture from tight building envelopes. Crawl spaces in Virginia's clay-heavy soil stay perpetually damp. Understanding these regional factors helps us identify and prevent mold sources specific to your property."
        },
        {
          title: "Mold Testing: When and Why",
          content: "Pre-remediation testing by an independent hygienist identifies mold species, quantifies contamination, and establishes a remediation protocol. Post-remediation clearance testing proves successful removal with spore counts below acceptable levels. Testing provides objective documentation for insurance claims, real estate transactions, and peace of mind. We recommend third-party testing for transparency and credibility."
        }
      ]
    },
    intro_whatWeDo: 'We follow IICRC S520 standards.',
    whatWeDo: [
      'Inspection: Finding the moisture source.',
      'Containment: Sealing the work area.',
      'Negative Air: Preventing spore spread.',
      'Removal: Bagging moldy materials.',
      'Cleaning: HEPA vacuuming surfaces.',
      'Sanding: Removing roots from wood.',
      'Sealing: Encapsulating treated wood.',
      'Air Scrubbing: Filtering the air.',
      'Duct Cleaning: Cleaning HVAC if needed.',
      'Verification: Passing clearance tests.',
      'Documentation: Proof of remediation.',
      'Prevention: Fixing the moisture source.'
    ],
    whatToExpect: {
      timeline: '3-5 days typically. Testing adds time.',
      arrival: 'We set up plastic walls immediately.',
      daily: 'Scrubbers run 24/7. Work is inside containment.',
      noise: 'Air machines sound like box fans.'
    },
    intro_safety: 'Mold spores are respiratory irritants.',
    safety: {
      head: 'Mold Safety',
      items: [
        'Do Not Disturb: Don\'t scrape it.',
        'No Bleach: It doesn\'t kill roots on wood.',
        'Close Door: Contain the room.',
        'HVAC Off: Don\'t spread spores.',
        'Wear Mask: N95 if entering.',
        'No Fans: Don\'t blow air on it.',
        'Remove Items: Clothes/toys if clean.',
        'Fix Leak: Stop the water.',
        'Call Pros: Proper removal needed.',
        'Health Check: See doctor for symptoms.'
      ],
      kidsPets: 'Keep them away. Spores trigger asthma.'
    },
    intro_scenarios: 'Where mold hides.',
    scenarios: [
      'Bathroom Vanity',
      'Attic Sheathing',
      'Crawl Space Joists',
      'Basement Walls',
      'Behind Kitchen Cabinets',
      'Window Sills',
      'Closet Walls',
      'HVAC Ducts',
      'Garage Ceiling',
      'Laundry Room'
    ],
    saveVsRemove: {
      save: [
        'Structural wood (cleaned)',
        'Glass/Metal',
        'Contents (HEPA cleaned)'
      ],
      remove: [
        'Moldy drywall',
        'Insulation',
        'Carpet with growth',
        'Ceiling tiles'
      ]
    },
    faqs: [
      {
        question: "How do I know if I have mold in my house?",
        answer: "Warning signs include musty odors, visible growth (black, green, white spots), water stains, recent water damage, humidity problems, and allergic symptoms that improve when away from home. Hidden mold often exists behind walls, in attics, and in crawl spaces."
      },
      {
        question: "Is mold dangerous to my health?",
        answer: "Mold exposure can cause respiratory issues, allergic reactions, headaches, and fatigue. People with asthma, allergies, or compromised immune systems face higher risks. Black mold (Stachybotrys) produces mycotoxins requiring careful remediation. Any significant mold growth warrants professional removal."
      },
      {
        question: "How much does mold remediation cost?",
        answer: "Costs range from $1,500 for small areas (under 50 sq ft) to $5,000-$15,000+ for larger infestations or difficult locations like crawl spaces and attics. Factors include affected area size, mold type, accessibility, and materials involved. We provide detailed estimates."
      },
      {
        question: "Does homeowners insurance cover mold removal?",
        answer: "Coverage varies. Mold from sudden covered events (burst pipe, storm damage) is typically covered. Mold from long-term humidity, deferred maintenance, or gradual leaks usually isn't. Many policies have mold caps ($5,000-$10,000). We document the mold source for your claim."
      },
      {
        question: "Can I remove mold myself?",
        answer: "Only for very small areas (under 10 sq ft) on non-porous surfaces. DIY removal of larger areas spreads spores throughout your home, increasing contamination. Without proper containment, HEPA filtration, and PPE, you risk health exposure and making the problem worse."
      },
      {
        question: "How long does mold remediation take?",
        answer: "Most residential projects take 3-7 days: 1-2 days for containment and removal, 2-3 days for drying and treatment, and 1-2 days for clearance testing. Large or complex projects may take longer. We provide detailed timelines before starting."
      },
      {
        question: "What is mold containment and why is it necessary?",
        answer: "Containment uses plastic barriers and negative air pressure to isolate the work area. This prevents mold spores from spreading to clean areas during removal. Without containment, remediation can contaminate your entire home. It's required by IICRC S520 standards."
      },
      {
        question: "Do you test for mold before and after remediation?",
        answer: "We recommend pre-remediation testing by an independent hygienist to identify mold types and create a remediation protocol. Post-remediation clearance testing verifies successful removal. Third-party testing provides objective documentation for insurance and peace of mind."
      },
      {
        question: "Will mold come back after remediation?",
        answer: "Not if the moisture source is eliminated. Mold requires moisture to grow—remove moisture, prevent mold. We identify and address the water source (leaks, humidity, condensation) as part of remediation. If moisture returns, mold can return."
      },
      {
        question: "What's the difference between mold removal and mold remediation?",
        answer: "Removal is just eliminating visible mold. Remediation is the complete process: containment, HEPA air filtration, removing contaminated materials, treating surfaces with antimicrobials, addressing the moisture source, and clearance testing. Proper remediation prevents recurrence."
      }
    ],
    relatedSearchTerms: ['mold removal', 'black mold cleanup', 'attic mold', 'mold inspection', 'remediation company', 'mold remediation cost', 'mold removal near me', 'black mold treatment', 'attic mold removal', 'basement mold remediation']
  },

  // 12. Structural Drying
  {
    id: 'res-struct',
    title: 'Structural Drying',
    slug: '/services/residential/restoration-services/structural-drying/',
    shortDescription: 'Advanced drying techniques to save walls and floors.',
    audience: 'RESIDENTIAL',
    category: 'RESTORATION',
    primaryKeyword: 'structural drying',
    secondaryKeywords: ['structural drying services', 'IICRC certified structural drying', 'commercial dehumidification', 'wall cavity drying', 'subfloor drying', 'professional drying equipment', 'structural drying Northern Virginia', 'industrial drying services', 'water damage drying', 'moisture removal services'],
    heroHeading: 'Structural Drying Services in Northern Virginia',
    heroIntro: 'IICRC-certified structural drying with commercial-grade equipment. Save walls, subfloors, and framing without demolition. Daily moisture monitoring. Serving Fairfax, Arlington, Alexandria, and the DMV.',
    heroVisualKey: 'structural-drying',
    thumbVisualKey: 'structural-drying',
    infographicType: 'STRUCTURAL_DRYING',
    intro_whenToCall: 'Call when you want to save materials rather than replace them.',
    whenToCall: [
      'Wet Walls: Moisture inside cavities.',
      'Hardwood Cupping: Floorboards warping.',
      'Cabinet Moisture: Water under islands.',
      'Concrete: Wet slab under flooring.',
      'Complex Leaks: Multi-layer floor systems.',
      'Historic Homes: Preserving plaster.',
      'Certificate Needed: Proof of drying.',
      'High Humidity: Lingering dampness.',
      'Tile Grout: Dark wet lines.',
      'Vinyl Lifting: Bubbles in floor.',
      'Wallpaper Peeling: Moisture behind paper.',
      'Insulation Wet: Behind brick/siding.'
    ],
    contentSections: {
      heading: "Advanced Structural Drying",
      intro: "Structural drying is the scientific process of removing moisture from building materials without aggressive demolition. Using psychrometric principles and specialized equipment, we can save materials that would otherwise need replacement.",
      cards: [
        {
          title: "Saving vs. Replacing Drywall",
          content: "Standard drywall can often be saved if dried quickly (within 24-48 hours) using cavity injection systems that push dry air inside the wall. However, if insulation is wet or the water was contaminated, removal is necessary. We test moisture levels to determine if in-place drying is a safe and viable option."
        },
        {
          title: "Heat Drying Systems",
          content: "For dense materials like hardwood, concrete, and plaster, standard air movement isn't enough. We use directed heat drying systems to increase the surface temperature, raising the vapor pressure and forcing moisture out of the material faster. This technology can dry materials in days that would otherwise take weeks."
        },
        {
          title: "Monitoring & Documentation",
          content: "Structural drying isn't guesswork. We use daily monitoring logs to track specific moisture content % in wood and dry wall points. We graph the drying curve to ensure progress is steady. This documentation proves to insurance carriers that the drying strategy is working and validates when the job is complete."
        }
      ]
    },
    intro_whatWeDo: 'We use heat and airflow to dry difficult materials.',
    whatWeDo: [
      'Thermal Mapping: Finding wet zones.',
      'LGR Dehumidifiers: Deep moisture removal.',
      'Air Movement: High-velocity fans.',
      'Injection Drying: Drying inside walls.',
      'Mat Systems: Saving hardwood floors.',
      'Monitoring: Daily atmospheric checks.',
      'Verification: Proving it\'s dry.',
      'Documentation: Logs for insurance.',
      'Drilling: Unobtrusive venting holes.',
      'Toe-Kick Removal: Drying under cabinets.',
      'Adjustments: Optimizing equipment.',
      'Mapping: Final moisture map.'
    ],
    whatToExpect: {
      timeline: '3-7 days. Dense materials take longer.',
      arrival: 'We assess salvageability first.',
      daily: 'We adjust equipment daily based on readings.',
      noise: 'Loud fans running 24/7.'
    },
    intro_safety: 'Equipment gets warm and has cords.',
    safety: {
      head: 'Drying Safety',
      items: [
        'Don\'t Unplug: Delays process.',
        'Keep Closed: Maintain chamber.',
        'Watch Cords: Trip hazard.',
        'Empty Buckets: If not pumped.',
        'Breakers: Report trips.',
        'Airflow: Don\'t block fans.',
        'Kids: Keep away from intakes.',
        'Noise: Earplugs helps.',
        'Drain Line: Check for leaks.',
        'Thermostat: Keep as set.'
      ],
      kidsPets: 'Moving parts and heat. Keep away.'
    },
    intro_scenarios: 'Complex drying situations.',
    scenarios: [
      'Wet Insulation',
      'Hardwood Floors',
      'Under Cabinets',
      'Concrete Slab',
      'Attic Structure',
      'Plaster Walls',
      'Multi-layer Floor',
      'Crawl Space',
      'Built-ins',
      'Ceiling Cavity'
    ],
    saveVsRemove: {
      save: [
        'Hardwood (usually)',
        'Drywall (painted)',
        'Framing',
        'Concrete'
      ],
      remove: [
        'Vinyl (traps water)',
        'Exterior insulation',
        'Baseboards (MDF)'
      ]
    },
    faqs: [
      { question: "What is structural drying?", answer: "Structural drying is the process of removing moisture from building materials (drywall, studs, subfloors) using dehumidification and airflow, saving them from demolition." },
      { question: "Can you dry water behind walls?", answer: "Yes. We use cavity drying systems to inject air behind drywall or under cabinets, drying the space without removing the entire wall." },
      { question: "Why do you leave the fans running 24/7?", answer: "Continuous airflow and dehumidification are required to break the moisture bond and evaporate water. Turning them off pauses the process and allows mold to start growing." },
      { question: "Who pays for the electricity?", answer: "Insurance claims for water damage typically include an allowance for the electricity used by our drying equipment." },
      { question: "How do you know when it is dry?", answer: "We use moisture meters to measure the 'moisture content' (MC) of the materials and compare it to a dry standard (a known dry area of your home). We only remove equipment when the dry standard is met." },
      { question: "Does heat drying work better?", answer: "For dense materials like hardwood or concrete, adding heat energy can speed up evaporation. We use directed heat drying systems for difficult projects." }
    ],
    relatedSearchTerms: ['structural drying', 'wall drying', 'hardwood floor drying', 'dehumidifier rental', 'water restoration', 'structural drying services', 'drywall water damage repair', 'drying wet walls', 'water damage restoration process', 'fast drying techniques']
  },

  // 13. Storm Damage Restoration
  {
    id: 'res-storm',
    title: 'Storm Damage Restoration',
    slug: '/services/residential/restoration-services/storm-damage-restoration/',
    shortDescription: 'Recovery from severe weather and hurricane damage.',
    audience: 'RESIDENTIAL',
    category: 'RESTORATION',
    primaryKeyword: 'storm damage restoration',
    secondaryKeywords: ['storm damage repair', 'hurricane damage restoration', 'wind damage repair', 'tree damage cleanup', 'emergency storm response', 'storm damage restoration near me', 'storm damage restoration Northern Virginia', 'hail damage repair', 'roof storm damage', 'emergency board up services'],
    heroHeading: 'Storm Damage Restoration in Northern Virginia',
    heroIntro: '24/7 emergency storm response for the DMV. Rapid board-up, roof tarping, water extraction, and complete restoration. Serving Fairfax, Arlington, Alexandria, Loudoun, and Prince William County. Free estimates. Insurance documentation specialists.',
    heroVisualKey: 'storm-damage',
    thumbVisualKey: 'storm-assessment',
    infographicType: 'STORM',
    intro_whenToCall: 'Storms cause exterior breaches. Call if:',
    whenToCall: [
      'Tree on Roof: Structural damage.',
      'Siding Gone: Wind damage.',
      'Broken Windows: Debris impact.',
      'Roof Leaks: Rain entering attic.',
      'Basement Flood: Power outage/pump fail.',
      'Hail Damage: Roof/siding pocks.',
      'Board-Up: Security needed.',
      'Structural Shift: House movement.',
      'Power Lines: Downed nearby.',
      'Blocked Access: Debris in drive.',
      'Water Stains: Post-storm leaks.',
      'Gutter Failure: Water at foundation.'
    ],
    contentSections: {
      heading: "Understanding Storm Damage",
      intro: "Storm damage combines multiple threats—wind, rain, fallen trees, and water intrusion. Effective restoration requires rapid response to stop ongoing damage while coordinating repairs across multiple trades.",
      cards: [
        {
          title: "The First 24 Hours Are Critical",
          content: "Storm damage differs from other water losses because the building envelope is often compromised. Missing shingles, broken windows, and fallen trees create ongoing water intrusion with every subsequent rain. Emergency tarping and board-up must happen immediately—not when a roofer is available days later. We respond within hours to secure your property, stopping the damage clock and protecting insurance coverage."
        },
        {
          title: "Wind-Driven Rain Damage",
          content: "Wind-driven rain enters through gaps you'd never notice in normal weather—around windows, under siding, through soffit vents, and at roof penetrations. This water travels along unexpected paths, appearing on ceilings far from the entry point. We use thermal imaging to trace water paths and moisture meters to map full extent. What looks like a small stain often indicates saturation across entire wall cavities."
        },
        {
          title: "Tree and Debris Impact",
          content: "Fallen trees create both immediate structural damage and ongoing exposure. We coordinate tree removal with structural assessment—sometimes trees are actually holding damaged structures together and must be removed carefully. After debris removal, we assess structural integrity, secure openings, extract water, and begin drying. The full scope often isn't visible until debris is cleared."
        },
        {
          title: "Northern Virginia Storm Patterns",
          content: "The DMV faces diverse severe weather: summer derecho events with 70+ mph straight-line winds, remnants of Atlantic hurricanes bringing days of rain, winter ice storms that down trees onto roofs, and intense thunderstorms with damaging hail. Older neighborhoods in Arlington, Alexandria, and Fairfax have mature trees that pose higher fall risk. Newer developments in Loudoun face different challenges with less established drainage systems. We understand regional storm patterns and common damage types."
        },
        {
          title: "Insurance Claims After Major Storms",
          content: "Regional storms create claim backlogs, with adjusters handling hundreds of properties. Thorough documentation becomes critical for timely settlement. We photograph all damage, record measurements, and provide detailed scope reports that help adjusters process your claim efficiently. Our experience with post-storm claims in Northern Virginia means we know what carriers expect and what documentation accelerates approval."
        }
      ]
    },
    intro_whatWeDo: 'We secure the shell, then fix the inside.',
    whatWeDo: [
      'Board-Up: Securing windows/doors.',
      'Roof Tarping: Stopping rain entry.',
      'Water Extraction: Drying the interior.',
      'Debris Removal: Clearing trees/limbs.',
      'Assessment: Checking structure.',
      'Documentation: Photo evidence.',
      'Fencing: Security perimeter.',
      'Demolition: Removing unsafe parts.',
      'Sanitization: Cleaning storm water.',
      'Reconstruction: Repairs.',
      'Crane Service: Heavy lifting.',
      'Pack-Out: Protecting contents.'
    ],
    whatToExpect: {
      timeline: 'Emergency stabilization Day 1. Repairs follow insurance approval.',
      arrival: 'Safety first. We secure the exterior.',
      daily: 'Drying checks daily. Repairs scheduled.',
      noise: 'Chainsaws and hammers.'
    },
    intro_safety: 'Storm aftermath is hazardous.',
    safety: {
      head: 'Storm Safety',
      items: [
        'Power Lines: Stay away.',
        'Structure: Don\'t enter if unsafe.',
        'Glass: Watch for shards.',
        'Lighting: Use flashlights.',
        'Gas: Check leaks.',
        'Roof: Stay off.',
        'Kids: Keep inside.',
        'Floors: Slippery.',
        'Photos: Document safely.',
        'Valuables: Secure them.'
      ],
      kidsPets: 'Sharp debris everywhere. Keep them safe.'
    },
    intro_scenarios: 'Common storm issues.',
    scenarios: [
      'Tree through roof',
      'Shingles blown off',
      'Window shattered',
      'Siding ripped',
      'Attic flood',
      'Basement flood',
      'Fence down',
      'Hail damage',
      'Chimney collapse',
      'Garage door fail'
    ],
    saveVsRemove: {
      save: [
        'Framing (if intact)',
        'Concrete',
        'Siding (some)',
        'Contents (dry)'
      ],
      remove: [
        'Wet insulation',
        'Exposed drywall',
        'Broken glass',
        'Torn shingles'
      ]
    },
    faqs: [
      {
        question: "What should I do immediately after storm damage?",
        answer: "Ensure safety first—avoid downed power lines and unstable structures. Document damage with photos and video before any cleanup. Cover openings with tarps if safe. Call your insurance company to report the loss, then call us for emergency board-up and mitigation."
      },
      {
        question: "Does homeowners insurance cover storm damage?",
        answer: "Most policies cover wind, rain, and hail damage, but flooding from storm surge requires separate flood insurance. We document all damage thoroughly, distinguish between covered and non-covered damage, and work directly with your adjuster."
      },
      {
        question: "How quickly can you respond to storm damage?",
        answer: "We respond 24/7, typically within 60-90 minutes. During major storm events affecting many homes, we prioritize by severity: safety hazards first, then active water intrusion, then stabilization. We deploy additional crews during regional storms."
      },
      {
        question: "Do you provide emergency tarping and board-up?",
        answer: "Yes. Emergency board-up and tarping is critical to prevent secondary damage from rain and intrusion. We secure your property immediately, which insurance requires to mitigate ongoing losses. This service is typically covered by your policy."
      },
      {
        question: "How long does storm damage restoration take?",
        answer: "Timeline varies by damage type: water extraction and drying takes 3-5 days, roof repairs depend on contractor availability, and full restoration may take 2-8 weeks. We provide detailed timelines after assessment and coordinate all trades."
      },
      {
        question: "Can you help if a tree fell on my house?",
        answer: "Yes. We coordinate tree removal, secure the structure with tarps and board-up, extract any water intrusion, and manage the full restoration. We work with your insurance on both the tree removal and structural damage claims."
      },
      {
        question: "What storm damage isn't visible immediately?",
        answer: "Hidden damage includes water in wall cavities from wind-driven rain, compromised roof decking under intact shingles, moisture in insulation, and HVAC contamination. We use thermal imaging and moisture meters to find hidden damage before it causes mold."
      },
      {
        question: "How do you know if storm damage caused mold?",
        answer: "Mold can develop within 24-72 hours of water intrusion. Warning signs include musty odors, visible growth, and allergic reactions. If storm damage wasn't dried professionally within 48 hours, mold inspection is recommended. We provide testing if needed."
      },
      {
        question: "Will storm damage affect my home's value?",
        answer: "Not if properly restored. Complete restoration returns your home to pre-loss condition. We provide documentation of all work performed, which demonstrates proper remediation if questions arise during future sale. Unprofessional repairs do affect value."
      },
      {
        question: "Should I file an insurance claim for storm damage?",
        answer: "Generally yes, if damage exceeds your deductible significantly. Storm claims typically don't raise rates since they're weather events, not negligence. We provide free inspections and can estimate repair costs before you decide whether to file."
      }
    ],
    relatedSearchTerms: ['roof tarping', 'storm repair', 'tree removal', 'window board up', 'wind damage', 'storm damage repair near me', 'emergency tree removal', 'wind damage restoration', 'hail damage repair', 'storm cleanup services']
  },

  // 14. Burst Pipe Cleanup
  {
    id: 'res-burst',
    title: 'Burst Pipe Cleanup',
    slug: '/services/residential/restoration-services/burst-pipe-cleanup/',
    shortDescription: 'Immediate cleanup for frozen or burst plumbing pipes.',
    audience: 'RESIDENTIAL',
    category: 'RESTORATION',
    primaryKeyword: 'burst pipe cleanup',
    secondaryKeywords: ['burst pipe water damage', 'frozen pipe repair', 'burst pipe emergency', 'pipe burst water damage', 'emergency plumbing water damage', 'burst pipe cleanup near me', 'burst pipe water damage Fairfax VA', 'frozen pipe water damage', 'water supply line break', 'burst pipe restoration Northern Virginia'],
    heroHeading: 'Burst Pipe Water Damage Cleanup in Northern Virginia',
    heroIntro: '24/7 emergency response for burst and frozen pipes. Rapid water extraction and professional drying. Serving Fairfax, Arlington, Alexandria, and the DMV. 60-minute response. Free estimates. Insurance claim assistance.',
    heroVisualKey: 'burst-pipe',
    thumbVisualKey: 'burst-pipe',
    infographicType: 'DRYING_TREND',
    intro_whenToCall: 'High-pressure leaks cause massive damage fast. Call if:',
    whenToCall: [
      'Running Water: Sound behind walls.',
      'Spraying: Water from thawed pipe.',
      'Supply Line: Sink/Toilet hose break.',
      'Standing Water: Kitchen/Bath flood.',
      'Ceiling Sag: Water bubble.',
      'Soaked Carpet: Hallway flood.',
      'No Shutoff: Can\'t find valve.',
      'Pressure Drop: Sudden loss.',
      'Garage Flood: Pipe burst.',
      'Buckling Floor: Near radiator.',
      'Sprinkler: Accidental discharge.',
      'Dripping Lights: Water in fixture.'
    ],
    contentSections: {
      heading: "Understanding Burst Pipe Damage",
      intro: "A burst pipe can release hundreds of gallons per hour, causing catastrophic damage in minutes. Fast response and proper extraction are essential to minimize damage and maximize what can be saved.",
      cards: [
        {
          title: "How Much Damage Happens How Fast",
          content: "A typical supply line flows 2-4 gallons per minute. A burst pipe running for just one hour releases 120-240 gallons—enough to saturate multiple rooms. Pipes that burst overnight or while you're at work can release thousands of gallons. Water flows downward through floor penetrations, spreads laterally along subfloors, and wicks upward into walls. The damage footprint expands exponentially with time."
        },
        {
          title: "Common Causes and Prevention",
          content: "Freezing is the most common cause—water expands 9% when frozen, splitting pipes from the inside. Other causes include corrosion in older pipes, high water pressure, shifting foundations, and accidental damage during renovations. Prevention includes insulating exposed pipes, maintaining heat above 55°F, and knowing your main shutoff location. We'll identify the cause and help prevent recurrence."
        },
        {
          title: "The Challenge of Hidden Pipes",
          content: "Most plumbing runs through walls, floors, and ceilings—out of sight until something fails. When hidden pipes burst, water may flow for extended periods before visible signs appear. By the time you see ceiling stains or baseboard warping, saturation is extensive. We use thermal imaging to see temperature differences indicating wet areas and moisture meters to trace the full extent of water travel."
        },
        {
          title: "Northern Virginia's Freeze Risk",
          content: "The DMV experiences winter temperatures below freezing from December through February, with occasional polar vortex events dropping temps into the teens. Pipes in exterior walls, unheated garages, crawl spaces, and poorly insulated attics are most vulnerable. Older homes in Arlington, Alexandria, and Fairfax often have original plumbing in exterior walls. We see significant burst pipe claims every winter—prevention through proper insulation and heat tape is far less expensive than restoration."
        },
        {
          title: "Insurance Coverage for Burst Pipes",
          content: "Burst pipe damage is typically covered by homeowners insurance as a sudden, accidental loss. However, damage from frozen pipes may be denied if the home wasn't properly heated or winterized. We document the cause, extent, and restoration process thoroughly for your claim. Our experience with Northern Virginia insurance adjusters helps ensure proper coverage and faster claim resolution."
        }
      ]
    },
    intro_whatWeDo: 'We mitigate the water damage.',
    whatWeDo: [
      'Shut Off: Helping stop water.',
      'Extraction: Vacuuming water.',
      'Access: Opening wall to dry.',
      'Drying: Dehumidifiers/Fans.',
      'Imaging: Tracing water path.',
      'Sanitizing: Cleaning area.',
      'Plumber Access: Exposing pipe.',
      'Documentation: For insurance.',
      'Monitoring: Daily checks.',
      'Pack-out: Saving furniture.',
      'Reconstruction: Fixing drywall.',
      'Safety: Ensuring dry home.'
    ],
    whatToExpect: {
      timeline: '3-5 days typically. Reconstruction follows.',
      arrival: 'Immediate extraction is priority.',
      daily: 'Daily moisture checks.',
      noise: 'Loud drying equipment.'
    },
    intro_safety: 'Water + Electric = Danger.',
    safety: {
      head: 'Burst Pipe Safety',
      items: [
        'Shut Off Water: Main valve.',
        'Electricity: Breakers off.',
        'Ceilings: Don\'t stand under.',
        'Electronics: Move them.',
        'No Vacuum: Shock risk.',
        'Slips: Watch step.',
        'Hot Water: Scald risk.',
        'Kids/Pets: Keep away.',
        'Faucets: Open to drain.',
        'Photos: Document it.'
      ],
      kidsPets: 'Keep them out. Slippery and dangerous.'
    },
    intro_scenarios: 'Common pipe failures.',
    scenarios: [
      'Frozen Pipe',
      'Washing Machine Hose',
      'Toilet Supply',
      'Fridge Line',
      'Water Heater',
      'Radiator',
      'Sprinkler',
      'Main Line',
      'Attic Pipe',
      'Hose Bib'
    ],
    saveVsRemove: {
      save: [
        'Framing',
        'Concrete',
        'Tile',
        'Solid Wood (maybe)'
      ],
      remove: [
        'Pad',
        'Wet Insulation',
        'Drywall',
        'Particle Board'
      ]
    },
    faqs: [
      {
        question: "What should I do when a pipe bursts?",
        answer: "Turn off the main water supply immediately—know where your shutoff valve is before emergencies. Turn off electricity to affected areas if safe. Call us while containing water with towels. Don't wait; water spreads through walls and ceilings rapidly."
      },
      {
        question: "Does insurance cover burst pipe damage?",
        answer: "Yes, most homeowners policies cover sudden pipe bursts and resulting water damage. Coverage includes water extraction, drying, and repairs. The pipe repair itself may or may not be covered depending on cause. We document everything for your claim."
      },
      {
        question: "How much does burst pipe cleanup cost?",
        answer: "Costs range from $1,500-$8,000+ depending on pipe location, water volume, and affected materials. Pipes in walls/ceilings cause more damage than visible pipes. Second-floor bursts affecting multiple levels cost more. We provide detailed estimates."
      },
      {
        question: "How long does burst pipe water damage restoration take?",
        answer: "Typically 3-5 days for extraction and drying, plus repair time. Factors include water volume, how long it flowed before discovery, and materials affected. Concrete and hardwood extend drying time. We monitor daily and provide completion estimates."
      },
      {
        question: "Why do pipes burst?",
        answer: "Common causes include freezing (water expands when frozen), corrosion in older pipes, high water pressure, shifting foundations, and accidental damage during renovations. We identify the cause to prevent recurrence and document it for your insurance claim."
      },
      {
        question: "How do I prevent pipes from freezing?",
        answer: "Keep heat at minimum 55°F, open cabinet doors under sinks on exterior walls, let faucets drip during extreme cold, and insulate exposed pipes in attics, crawl spaces, and garages. If traveling in winter, shut off water and drain pipes."
      },
      {
        question: "Can burst pipe damage cause mold?",
        answer: "Yes, if not dried within 24-48 hours. Water from burst pipes is typically clean (Category 1), but mold doesn't distinguish—it only needs moisture. Professional drying to verified dry standard prevents mold. We guarantee our drying meets IICRC standards."
      },
      {
        question: "Do you repair the pipe or just clean up the water?",
        answer: "We focus on water damage restoration: extraction, drying, and repairs to damaged materials. We coordinate with licensed plumbers for pipe repairs and can recommend trusted partners. Some policies require licensed plumber documentation for claims."
      },
      {
        question: "What if the burst pipe was in a wall or ceiling?",
        answer: "Hidden pipe bursts require controlled demolition to access wet materials. We cut drywall and remove insulation to dry wall cavities, using thermal imaging to map the full extent. Ceiling damage requires careful assessment for safety before entering."
      },
      {
        question: "How do you dry water inside walls?",
        answer: "We use injection drying systems that force dry air into wall cavities through small holes, in-wall drying panels, and directed airflow from air movers. Moisture meters verify dryness inside walls before closing them. This prevents mold and structural damage."
      }
    ],
    relatedSearchTerms: ['frozen pipe cleanup', 'water shutoff', 'pipe leak repair', 'flooded kitchen', 'burst pipe help', 'frozen pipe burst cleanup', 'water pipe burst repair', 'emergency plumber water damage', 'burst pipe insurance claim', 'water main break cleanup']
  },

  // --- COMMERCIAL (13 Services to complete 27) ---

  // 15. Commercial Water Damage
  {
    id: 'com-water',
    title: 'Commercial Water Damage',
    slug: '/services/commercial/restoration-services/commercial-water-damage/',
    shortDescription: 'Fast water restoration for businesses to minimize downtime.',
    audience: 'COMMERCIAL',
    category: 'RESTORATION',
    primaryKeyword: 'commercial water damage restoration',
    heroHeading: 'Commercial Water Restoration',
    heroIntro: 'Minimize business interruption with rapid commercial water extraction and drying services in Northern Virginia, Maryland, and DC. We scale to handle any size loss, from office floods to retail leaks.',
    heroVisualKey: 'com-water',
    thumbVisualKey: 'com-water-dash',
    infographicType: 'DRYING_TREND',
    intro_whenToCall: 'Business continuity is at risk. Call us immediately for:',
    whenToCall: [
      'Sprinkler Discharge: Accidental activation flooding floors.',
      'Main Line Break: Water main failure affecting operations.',
      'Roof Leaks: Water intrusion threatening inventory/equipment.',
      'HVAC Leaks: Large scale condensate or loop failure.',
      'Sewage Backup: Health hazard closing restrooms/kitchens.',
      'Supply Line Burst: Break room or bathroom flooding.',
      'Storm Damage: Wind-driven rain entering the building.',
      'Foundation Seepage: Water entering lower levels/parking.',
      'Tenant Leaks: Water traveling between floors.',
      'Fire Suppression: Water cleanup after a fire event.',
      'Construction Accident: Pipe hit during renovation.',
      'Appliance Failure: Commercial kitchen equipment leaks.'
    ],
    contentSections: {
      heading: "Commercial Restoration Protocols",
      intro: "Business interruption costs more than repairs. Our process is designed to isolate the damage and keep your doors open whenever safely possible.",
      cards: [
        {
          title: "Speed is Business Critical",
          content: "Every hour of downtime impacts revenue, employee productivity, and customer trust. We mobilize commercial-grade fleets immediately, scaling manpower and equipment to match the size of the loss."
        },
        {
          title: "Safety & Compliance",
          content: "We adhere to strict OSHA and IICRC standards to ensure the safety of your employees and customers. We provide documentation for risk management and insurance purposes."
        }
      ]
    },
    intro_whatWeDo: 'We mobilize quickly to stabilize your facility and get you back to business.',
    whatWeDo: [
      'Rapid Mobilization: Dispatching crews and industrial equipment.',
      'Water Extraction: Truck-mounted extraction for large volumes.',
      'Moisture Mapping: Documenting the full extent of saturation.',
      'Asset Protection: Moving inventory and electronics to safety.',
      'Structural Drying: Using desiccant dehumidifiers for large spaces.',
      'Containment: isolating work zones to allow partial operation.',
      'Demolition: Removing damaged materials (drywall/carpet) efficiently.',
      'Sanitization: Treating areas to prevent mold and bacterial growth.',
      'Documentation: Daily logs for insurance and stakeholders.',
      'Communication: Direct line to a dedicated Project Manager.',
      'Final Clearance: Verifying dry standards are met.',
      'Reconstruction: Coordinating repairs to restore aesthetics.'
    ],
    whatToExpect: {
      timeline: 'We work 24/7/365 to expedite drying.',
      arrival: 'Priority dispatch for commercial accounts.',
      daily: 'Daily progress reports for stakeholders.',
      noise: 'Industrial equipment is loud; off-hours service available.'
    },
    relatedSearchTerms: ['commercial water extraction', 'business flood cleanup', 'office water damage', 'retail store restoration', 'warehouse drying', 'commercial dehumidification', 'commercial restoration company', 'business water damage repair', 'office flood cleanup', 'industrial water extraction', 'commercial drying services']
  },

  // 16. Commercial Flood Cleanup
  {
    id: 'com-flood',
    title: 'Commercial Flood Cleanup',
    slug: '/services/commercial/restoration-services/commercial-flood-cleanup/',
    shortDescription: 'Industrial cleanup for flooded warehouses and offices.',
    audience: 'COMMERCIAL',
    category: 'RESTORATION',
    primaryKeyword: 'commercial flood cleanup',
    heroHeading: 'Commercial Flood Cleanup',
    heroIntro: 'Large-scale flood extraction and cleanup for industrial facilities, warehouses, and office complexes. We handle the mud, water, and debris.',
    heroVisualKey: 'com-flood',
    thumbVisualKey: 'com-flood-zones',
    infographicType: 'FLOOD_TIMELINE',
    intro_whenToCall: 'When flood waters breach your facility.',
    whenToCall: [
      'Storm Surge: External water entering the building.',
      'River Overflow: Nearby water bodies flooding the property.',
      'Flash Flooding: Sudden accumulation from heavy rain.',
      'Loading Dock Flooding: Water entering through bays.',
      'Basement/Sub-level Flooding: Equipment rooms submerged.',
      'Parking Garage Flooding: Lower levels underwater.'
    ],
    contentSections: {
      heading: "Managing Large-Scale Floods",
      intro: "Flood water brings mud, debris, and contaminants. We have the heavy equipment to muck out, wash down, and dry out large industrial spaces effectively.",
      cards: [
        {
          title: "Industrial Extraction",
          content: "We utilize trash pumps and truck-mounted extractors capable of moving thousands of gallons per hour to clear large open spaces quickly."
        },
        {
          title: "Sanitization & Safety",
          content: "Flood water is often Category 3. We apply industrial-grade antimicrobials to all affected surfaces to prevent bacterial growth and ensure a safe working environment."
        }
      ]
    },
    intro_whatWeDo: 'We clear the water and the mud.',
    whatWeDo: [
      'Mass Extraction: Pumping out large volumes of water.',
      'Muck Out: Removing mud, silt, and debris.',
      'Pressure Washing: Cleaning concrete and structural elements.',
      'Disinfection: Applying biocides to kill pathogens.',
      'Drying: Industrial air movers and dehumidifiers.',
      'Deodorization: Eliminating flood odors.'
    ],
    whatToExpect: {
      timeline: 'Depends on scale. Pumping is priority 1.',
      arrival: 'Large crews dispatched.',
      daily: 'Safety meetings and progress logs.',
      noise: 'Heavy machinery and pumps.'
    }
  },

  // 17. Large Loss Restoration
  {
    id: 'com-large',
    title: 'Large Loss Restoration',
    slug: '/services/commercial/restoration-services/large-loss-restoration/',
    shortDescription: 'Catastrophic event recovery for major facilities.',
    audience: 'COMMERCIAL',
    category: 'RESTORATION',
    primaryKeyword: 'large loss restoration',
    heroHeading: 'Large Loss Restoration',
    heroIntro: 'Scalable disaster recovery for hospitals, universities, and high-rises. We have the resources to handle catastrophic losses.',
    heroVisualKey: 'large-loss',
    thumbVisualKey: 'large-loss-phases',
    infographicType: 'DRYING_TREND',
    intro_whenToCall: 'When the damage exceeds standard capabilities.',
    whenToCall: [
      'Multi-Story Floods: Water cascading through multiple floors.',
      'Campus-Wide Damage: Multiple buildings affected.',
      'Hurricane Damage: Widespread structural and water issues.',
      'Fire Suppression: Sprinklers active across large zones.',
      'Major Pipe Burst: Main supply lines flooding substantial areas.'
    ],
    contentSections: {
      heading: "Project Management for Catastrophes",
      intro: "Large losses require logistics, not just labor. We assign dedicated project managers to coordinate crews, equipment tracking, and stakeholder communication for complex recovery efforts.",
      cards: [
        {
          title: "Resource Scalability",
          content: "We have access to a vast inventory of drying equipment and can mobilize hundreds of air movers and dehumidifiers to stabilize massive environments quickly."
        },
        {
          title: "Strategic Phasing",
          content: "We break large projects into manageable phases—stabilization, extraction, selective demolition, and drying—to maintain order and measurable progress."
        }
      ]
    },
    intro_whatWeDo: 'We manage the complexity of major disasters.',
    whatWeDo: [
      'Command Center: Establishing on-site management.',
      'Resource Logistics: Coordinating equipment and personnel.',
      'Safety Protocols: Managing site safety for large crews.',
      'Phase Planning: Structured approach to mitigation.',
      'Stakeholder Updates: Daily briefings for management.',
      'Documentation: Comprehensive loss reporting.'
    ]
  },

  // 18. Commercial Sewage Cleanup
  {
    id: 'com-sewage',
    title: 'Commercial Sewage Cleanup',
    slug: '/services/commercial/cleanup-services/commercial-sewage-cleanup/',
    shortDescription: 'Biohazard containment for business safety.',
    audience: 'COMMERCIAL',
    category: 'CLEANUP',
    primaryKeyword: 'commercial sewage cleanup',
    heroHeading: 'Commercial Sewage Cleanup',
    heroIntro: 'Discreet and safe sewage remediation for businesses. We contain the area, remove the hazard, and sanitize to code.',
    heroVisualKey: 'com-sewage',
    thumbVisualKey: 'com-sewage',
    infographicType: 'SEWAGE_CONTAINMENT',
    intro_whenToCall: 'Sewage leaks create immediate liability and health risks.',
    whenToCall: [
      'Restroom Backups: Overflow affecting customer areas.',
      'Main Line Blockage: Multiple drains backing up.',
      'Break Room Floods: Sink or dishwasher backups.',
      'Odor Complaints: Sewer gas smells in the building.'
    ],
    contentSections: {
      heading: "Biohazard Safety & Liability",
      intro: "Sewage is a severe health risk and a liability for any business. We prioritize containment to protect your staff and customers while we work.",
      cards: [
        {
          title: "Discreet Operations",
          content: "We understand the need for discretion. We can work after hours and use unmarked vehicles if requested to minimize alarm among customers or tenants."
        },
        {
          title: "Certified Sanitization",
          content: "We use hospital-grade disinfectants and ATP testing to verify that surfaces are free of biological contaminants before you reopen the area."
        }
      ]
    },
    intro_whatWeDo: 'We contain, clean, and verify.',
    whatWeDo: [
      'Isolation: sealing off the affected zone.',
      'Extraction: Removing waste safely.',
      'Cleaning: Deep cleaning and disinfection.',
      'Odor Control: Neutralizing bad smells.',
      'Air Filtration: Scrubbing the air of pathogens.',
      'Verification: Testing for cleanliness.'
    ]
  },

  // 19. Commercial Mold Remediation
  {
    id: 'com-mold',
    title: 'Commercial Mold Remediation',
    slug: '/services/commercial/cleanup-services/commercial-mold-remediation/',
    shortDescription: 'Licensed mold removal for compliance and safety.',
    audience: 'COMMERCIAL',
    category: 'CLEANUP',
    primaryKeyword: 'commercial mold remediation',
    heroHeading: 'Commercial Mold Remediation',
    heroIntro: 'Protect your indoor air quality and limit liability. Licensed mold removal for offices, schools, and retail spaces.',
    heroVisualKey: 'com-mold',
    thumbVisualKey: 'com-mold',
    infographicType: 'MOLD_AIRFLOW',
    intro_whenToCall: 'Visible growth or air quality complaints.',
    whenToCall: [
      'Visual Mold: Growth on walls, ceilings, or HVAC.',
      'Musty Odors: Complaints from staff or customers.',
      'High Humidity: Ongoing moisture issues.',
      'Past Leaks: Old water damage showing spots.'
    ],
    contentSections: {
      heading: "Mold Remediation & Compliance",
      intro: "Mold in a commercial setting is a liability. We follow strict remediation protocols (IICRC S520) to remove the mold safely without spreading spores to other areas.",
      cards: [
        {
          title: "Containment is Key",
          content: "We build negative air pressure containment zones to ensure that mold spores disturbed during removal do not enter the building's HVAC system or occupied areas."
        },
        {
          title: "Clearance Testing",
          content: "We work with third-party industrial hygienists to provide post-remediation clearance testing, giving you documented proof that the air quality is safe."
        }
      ]
    },
    intro_whatWeDo: 'We remove the mold and the source.',
    whatWeDo: [
      'Assessment: Identifying the moisture source.',
      'Containment: Building negative air chambers.',
      'Removal: Bagging and removing affected materials.',
      'Cleaning: HEPA vacuuming and antimicrobial wiping.',
      'Air Scrubbing: Cleaning the air.',
      'Clearance: verifying safety.'
    ]
  },

  // 20. Commercial Fire Damage
  {
    id: 'com-fire',
    title: 'Commercial Fire Damage',
    slug: '/services/commercial/cleanup-services/commercial-fire-smoke-cleanup/',
    shortDescription: 'Fire and smoke restoration for businesses.',
    audience: 'COMMERCIAL',
    category: 'CLEANUP',
    primaryKeyword: 'commercial fire restoration',
    heroHeading: 'Commercial Fire & Smoke Restoration',
    heroIntro: 'Rapid fire cleanup and smoke odor removal for businesses. We minimize downtime and restore your facility to pre-loss condition.',
    heroVisualKey: 'com-fire',
    thumbVisualKey: 'com-fire',
    infographicType: 'MOLD_AIRFLOW',
    intro_whenToCall: 'Smoke damage spreads fast. Call immediately.',
    whenToCall: [
      'Structure Fire: Direct fire damage to the building.',
      'Smoke Contamination: Soot spread through HVAC.',
      'Sprinkler Water Damage: Water damage from fire suppression.',
      'Odor Complaints: Persistent smoke smell driving away customers.'
    ],
    contentSections: {
      heading: "Comprehensive Fire Recovery",
      intro: "We handle everything from debris removal and board-up to soot cleaning and odor neutralization.",
      cards: [
        {
          title: "Soot & Residue Removal",
          content: "Acidic soot can corrode equipment and electronics quickly. We use specialized cleaning agents to remove residue from surfaces and machinery."
        },
        {
          title: "Odor Control",
          content: "We use thermal fogging and hydroxyl generators to neutralize smoke odors at the molecular level, ensuring your business smells fresh again."
        }
      ]
    }
  },

  // 21. Commercial Storm Damage
  {
    id: 'com-storm',
    title: 'Commercial Storm Damage',
    slug: '/services/commercial/restoration-services/commercial-storm-damage/',
    shortDescription: 'Emergency board-up and storm recovery.',
    audience: 'COMMERCIAL',
    category: 'RESTORATION',
    primaryKeyword: 'commercial storm restoration',
    heroHeading: 'Commercial Storm Damage Recovery',
    heroIntro: 'We secure your building fast. Emergency board-up, roof tarping, and debris removal after severe weather events.',
    heroVisualKey: 'storm-damage',
    thumbVisualKey: 'storm-assessment',
    infographicType: 'STORM',
    intro_whenToCall: 'When weather compromises your building envelope.',
    whenToCall: [
      'Broken Windows: Wind debris shattering glass.',
      'Roof Damage: Wind lifting membranes or shingles.',
      'Water Intrusion: Rain entering through breaches.',
      'Fallen Trees: Structural damage from impact.'
    ],
    contentSections: {
      heading: "Storm Response & Stabilization",
      intro: "Our priority is to secure your property to prevent further damage and theft, then begin the restoration process.",
      cards: [
        {
          title: "Emergency Board-Up",
          content: "We secure broken windows and doors immediately to protect your assets and inventory from weather and looting."
        },
        {
          title: "Roof Tarping",
          content: "We install temporary weatherproofing to stop water intrusion until permanent repairs can be made."
        }
      ]
    }
  },

  // 22. Commercial Roof Leak
  {
    id: 'com-roof',
    title: 'Commercial Roof Leak',
    slug: '/services/commercial/restoration-services/commercial-roof-leak/',
    shortDescription: 'Interior drying for roof water intrusion.',
    audience: 'COMMERCIAL',
    category: 'RESTORATION',
    primaryKeyword: 'commercial roof leak water damage',
    heroHeading: 'Commercial Roof Leak Water Damage',
    heroIntro: 'Water intrusion from flat roofs can destroy inventory and halt operations. We dry the interior and protect your assets.',
    heroVisualKey: 'roof-leak',
    thumbVisualKey: 'roof-source-id',
    infographicType: 'STRUCTURAL_DRYING',
    intro_whenToCall: 'Ceiling tiles are stained or water is dripping.',
    whenToCall: [
      'Ceiling Stains: Water spots on acoustic tiles.',
      'Active Drips: Water falling on equipment/inventory.',
      'Puddles: Water accumulating on floors during rain.',
      'Collapsed Tiles: Saturated ceiling grid failure.'
    ],
    contentSections: {
      heading: "Interior Protection from Roof Leaks",
      intro: "While roofers fix the exterior, we handle the water inside. We extract, dry, and protect your facility contents.",
      cards: [
        {
          title: "Asset Protection",
          content: "We cover sensitive equipment and inventory with plastic to prevent water damage while we address the ceiling leak."
        },
        {
          title: "Water Extraction",
          content: "We remove water from carpets and floors immediately to prevent slip hazards and structural damage."
        }
      ]
    }
  },

  // 23. Healthcare Facility Restoration
  {
    id: 'com-health',
    title: 'Healthcare Restoration',
    slug: '/services/commercial/specialty-services/healthcare-facilities/',
    shortDescription: 'ICRA-compliant restoration for medical facilities.',
    audience: 'COMMERCIAL',
    category: 'SPECIALTY',
    primaryKeyword: 'healthcare facility restoration',
    heroHeading: 'Healthcare & Medical Facility Restoration',
    heroIntro: 'We adhere to strict infection control (ICRA) standards to restore hospitals and clinics safely without compromising patient health.',
    heroVisualKey: 'healthcare',
    thumbVisualKey: 'healthcare',
    infographicType: 'MOLD_AIRFLOW',
    intro_whenToCall: 'Strict protocols are required.',
    whenToCall: [
      'Water Leaks in Patient Areas',
      'Mold in Sterile Environments',
      'HVAC Contamination Issues',
      'Emergency Disinfection Needs'
    ],
    contentSections: {
      heading: "Infection Control Risk Assessment (ICRA)",
      intro: "We work within your ICRA protocols to ensure dust and contaminants are contained during restoration.",
      cards: [
        {
          title: "Containment Barriers",
          content: "We build airtight barriers with negative air pressure to isolate work zones from patient care areas."
        },
        {
          title: "Certified Personnel",
          content: "Our technicians are trained in healthcare-specific protocols, including PPE and safe debris transport."
        }
      ]
    }
  },

  // 24. Hospitality Restoration
  {
    id: 'com-hospitality',
    title: 'Hospitality Restoration',
    slug: '/services/commercial/specialty-services/hospitality-multifamily/',
    shortDescription: 'Discreet cleanup for hotels and restaurants.',
    audience: 'COMMERCIAL',
    category: 'SPECIALTY',
    primaryKeyword: 'hotel water damage restoration',
    heroHeading: 'Hotel & Hospitality Restoration',
    heroIntro: 'We restore guest rooms and common areas quickly and quietly to minimize revenue loss and guest disruption.',
    heroVisualKey: 'hospitality',
    thumbVisualKey: 'hospitality',
    infographicType: 'DRYING_TREND',
    intro_whenToCall: 'Guest experience is impacted.',
    whenToCall: [
      'Guest Room Floods',
      'Kitchen Fires',
      'Lobby Water Leaks',
      'Mold in Bathrooms'
    ],
    contentSections: {
      heading: "Low-Profile Restoration",
      intro: "We understand the need for discretion. We can use unmarked vehicles and work during off-hours to keep a low profile.",
      cards: [
        {
          title: "Rapid Room Turnaround",
          content: "Our goal is to get rooms back online as fast as possible to restore your RevPAR (Revenue Per Available Room)."
        },
        {
          title: "Noise Control",
          content: "We use low-decibel equipment where possible and plan noisy work during appropriate windows."
        }
      ]
    }
  },

  // 25. Educational Facility Restoration
  {
    id: 'com-edu',
    title: 'Municipal & Education Restoration',
    slug: '/services/commercial/specialty-services/municipal-education/',
    shortDescription: 'Safe restoration for schools and universities.',
    audience: 'COMMERCIAL',
    category: 'SPECIALTY',
    primaryKeyword: 'school water damage cleanup',
    heroHeading: 'Municipal, School & University Restoration',
    heroIntro: 'We help schools and government buildings recover from damage quickly so services can continue safely. Background-checked crews available.',
    heroVisualKey: 'municipal', // Reusing municipal visual
    thumbVisualKey: 'municipal',
    infographicType: 'MOLD_AIRFLOW',
    intro_whenToCall: 'Campus safety is compromised.',
    whenToCall: [
      'Classroom Flooding',
      'Gymnasium Water Damage',
      'Library Mold Issues',
      'Dormitory Leaks'
    ],
    contentSections: {
      heading: "Safety First for Students",
      intro: "We prioritize safety and air quality to ensure a healthy learning environment post-restoration.",
      cards: [
        {
          title: "After-Hours & Weekend Work",
          content: "We can schedule aggressive work during breaks, weekends, or nights to minimize disruption to classes."
        },
        {
          title: "Air Quality Testing",
          content: "We validate that air quality meets safety standards before students and staff re-enter treated areas."
        }
      ]
    }
  },

  // 26. Industrial Restoration
  {
    id: 'com-ind',
    title: 'Industrial Restoration',
    slug: '/services/commercial/specialty-services/industrial-facilities/',
    shortDescription: 'Recovery for factories and warehouses.',
    audience: 'COMMERCIAL',
    category: 'SPECIALTY',
    primaryKeyword: 'industrial cleaning services',
    heroHeading: 'Industrial & Manufacturing Restoration',
    heroIntro: 'Heavy-duty cleaning and drying for industrial facilities. We handle large scale losses in warehouses and production plants.',
    heroVisualKey: 'industrial',
    thumbVisualKey: 'industrial',
    infographicType: 'FLOOD_TIMELINE',
    intro_whenToCall: 'Production is halted due to damage.',
    whenToCall: [
      'Production Line Flooding',
      'Warehouse Roof Collapses',
      'Chemical Spills (Non-Hazmat)',
      'Large Scale Fire Cleanup'
    ],
    contentSections: {
      heading: "Minimizing Production Downtime",
      intro: "We work around your production schedule and equipment to get your facility running again.",
      cards: [
        {
          title: "Equipment Cleaning",
          content: "We can clean and decontaminate external surfaces of production machinery affected by smoke or water."
        },
        {
          title: "Large Scale Drying",
          content: "We deploy industrial desiccant dehumidifiers capable of drying massive warehouse volumes efficiently."
        }
      ]
    }
  },

  // 27. Moisture Mapping (Technical)
  {
    id: 'com-tech-map',
    title: 'Moisture Mapping',
    slug: '/services/commercial/technical-services/moisture-mapping-consulting/',
    shortDescription: 'Advanced diagnostics for hidden moisture.',
    audience: 'COMMERCIAL',
    category: 'TECHNICAL',
    primaryKeyword: 'moisture mapping services',
    heroHeading: 'Moisture Mapping & Consulting',
    heroIntro: 'Data-driven analysis of water intrusion. We use thermal imaging and moisture meters to map the extent of damage for accurate scopes.',
    heroVisualKey: 'moisture-mapping',
    thumbVisualKey: 'moisture-mapping',
    infographicType: 'STRUCTURAL_DRYING',
    intro_whenToCall: 'When you need to know exactly where the water went.',
    whenToCall: [
      'Hidden Leaks: Water loss with no obvious source.',
      'Dispute Resolution: Verifying damage extent for claims.',
      'Large Losses: Mapping saturation in complex structures.',
      'Roof Leaks: Tracing water entry points.'
    ],
    contentSections: {
      heading: "The Science of Moisture Detection",
      intro: "We don't guess; we measure. Using infrared thermography and invasive/non-invasive moisture meters, we create a detailed map of the affected areas.",
      cards: [
        {
          title: "Thermal Imaging",
          content: "Infrared cameras detect temperature differences caused by evaporative cooling, revealing wet areas behind walls and under floors that are invisible to the naked eye."
        },
        {
          title: "Detailed Reporting",
          content: "We provide comprehensive reports including thermal images, moisture readings, and floor plans mapped with saturation levels to support insurance claims and repair scopes."
        }
      ]
    },
    intro_whatWeDo: 'We map, measure, and report.',
    whatWeDo: [
      'Thermal Scan: Infrared inspection of the property.',
      'Moisture Readings: Pin and pinless measurements.',
      'Mapping: Creating a visual map of wet areas.',
      'Reporting: detailed documentation of findings.',
      'Consulting: Recommending drying protocols.'
    ]
  },

  // 28. Indoor Air Quality (Technical)
  {
    id: 'com-tech-iaq',
    title: 'Indoor Air Quality',
    slug: '/services/commercial/technical-services/indoor-air-quality/',
    shortDescription: 'Air testing and monitoring for safe environments.',
    audience: 'COMMERCIAL',
    category: 'TECHNICAL',
    primaryKeyword: 'indoor air quality testing',
    heroHeading: 'Indoor Air Quality (IAQ) Services',
    heroIntro: 'Ensure your building is safe for occupancy. We test for mold spores, VOCs, particulates, and other contaminants following water damage or renovation.',
    heroVisualKey: 'iaq',
    thumbVisualKey: 'iaq',
    infographicType: 'MOLD_AIRFLOW',
    intro_whenToCall: 'When occupants complain of health issues or after mold remediation.',
    whenToCall: [
      'Post-Remediation Verification: Ensuring mold is gone.',
      'Sick Building Syndrome: Investigating occupant complaints.',
      'Construction Dust: Verifying clean air after renovations.',
      'Odor Investigation: Identifying sources of unknown smells.'
    ],
    contentSections: {
      heading: "Scientific Air Analysis",
      intro: "We use calibrated particle counters and air sampling pumps to capture data on your building's air quality.",
      cards: [
        {
          title: "Spore Trap Analysis",
          content: "We collect air samples to compare indoor mold spore counts against outdoor baselines to determine if active growth is present."
        },
        {
          title: "Real-Time Monitoring",
          content: "For sensitive environments, we can deploy monitors that track temperature, humidity, and particulate matter 24/7."
        }
      ]
    },
    intro_whatWeDo: 'We test, analyze, and certify.',
    whatWeDo: [
      'Air Sampling: Collecting bioaerosol samples.',
      'Surface Testing: Swab or tape lift samples.',
      'Lab Analysis: 3rd party independent verification.',
      'Reporting: Detailed findings and recommendations.',
      'Clearance: Certificates of safe occupancy.'
    ]
  },

  // 29. Environmental Testing (Technical)
  {
    id: 'com-tech-env',
    title: 'Environmental Testing',
    slug: '/services/commercial/technical-services/environmental-testing/',
    shortDescription: 'Testing for asbestos, lead, and hazardous materials.',
    audience: 'COMMERCIAL',
    category: 'TECHNICAL',
    primaryKeyword: 'environmental testing services',
    heroHeading: 'Environmental Testing Services',
    heroIntro: 'Compliance testing for hazardous materials. We identify asbestos, lead, and other regulated substances before demolition or renovation begins.',
    heroVisualKey: 'env-testing',
    thumbVisualKey: 'env-test',
    infographicType: 'MOLD_AIRFLOW',
    intro_whenToCall: 'Before disturbing older building materials.',
    whenToCall: [
      'Pre-Demolition: Required for buildings of certain ages.',
      'Damaged Popcorn Ceilings: Potential asbestos risk.',
      'Peeling Paint: Lead risk in older properties.',
      'Unknown Spills: Identifying chemical residues.'
    ],
    contentSections: {
      heading: "Regulatory Compliance",
      intro: "Disturbing hazardous materials without testing can lead to severe fines and health risks. We ensure you are compliant with EPA and OSHA regulations.",
      cards: [
        {
          title: "Asbestos Surveys",
          content: "We conduct comprehensive surveys to identify asbestos-containing materials (ACM) in flooring, insulation, and drywall compound."
        },
        {
          title: "Lead-Based Paint",
          content: "We test painted surfaces using XRF technology or chip sampling to determine lead content before sanding or demolition."
        }
      ]
    },
    intro_whatWeDo: 'We identify hazards safely.',
    whatWeDo: [
      'Site Survey: Inspecting suspect materials.',
      'Bulk Sampling: Collecting samples for the lab.',
      'Chain of Custody: Ensuring sample integrity.',
      'Lab Results: Certified reports from accredited labs.',
      'Abatement Protocols: Writing the plan for safe removal.'
    ]
  }
];
