// data/franchises.ts

/**
 * Flood Doctor City Franchise Configuration
 *
 * SAB (Service Area Business) Compliance:
 * - No street addresses exposed publicly
 * - Unique phone numbers per city (for tracking)
 * - GBP verification at operator home (hidden from public)
 */

// SEO content types for city pages
export interface Neighborhood {
  name: string;
  responseTime: string;  // "45-60 min" - realistic times
  tier: 'fast' | 'medium' | 'slow';  // fast: <60min, medium: 60-90min, slow: 90+min
}

export interface Challenge {
  icon: string;  // Lucide icon name
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SEOContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroText: string;
}

// City-specific guide data for HowTo schema pages
export interface CityGuideData {
  // Emergency Response Guide
  emergency: {
    responseTimeRange: string;           // "45-60 minutes"
    criticalFirstStep: string;           // City-specific first action
    localEmergencyTips: string[];        // 2-3 city-specific tips
  };

  // Prevention Guide
  prevention: {
    housingTypes: string[];              // "Colonial homes", "Townhouses"
    seasonalRisks: string[];             // "Spring snowmelt", "Summer storms"
    localPermitInfo: string;             // Permit requirements note
    commonPreventionIssues: string[];    // City-specific prevention focus
  };

  // Insurance Guide (city-specific, not carrier-specific)
  insurance: {
    averageClaimRange: string;           // "$5,000-$25,000"
    commonClaimTypes: string[];          // "Basement flooding", "Burst pipes"
    localAdjusterTips: string[];         // 2-3 city-specific tips
    documentationFocus: string[];        // What to emphasize for this area
  };
}

export type FranchiseData = {
  id: string;                    // URL subdomain: 'mclean', 'alexandria', 'hq'
  name: string;                  // "Flood Doctor of McLean" or "Flood Doctor" (HQ)
  city: string;                  // Display name
  state: string;                 // "VA" or "DC"
  zipCodes: string[];            // Service area zip codes
  phone: string;                 // UNIQUE tracking number per city

  // PUBLIC-FACING: No street address exposed
  serviceAreaLabel: string;      // "Serving McLean, Tysons & Great Falls"
  dispatchNote: string;          // Explains central dispatch without claiming local address

  // Google integrations
  googleMapsEmbed: string;       // Service area map embed URL
  googlePlaceId: string;         // For reviews API (populate after GBP setup)

  // Team information
  manager: {
    name: string;
    title: string;
    bio: string;
    image: string;
    localTie: string;            // Personal connection to area
  };

  team: Array<{
    name: string;
    role: string;
    image: string;
    bio: string;
  }>;

  // Local SEO hooks - CRITICAL for content differentiation
  localHooks: {
    neighborhoods: string[];     // Specific neighborhoods served
    landmarks: string[];         // Local landmarks for recognition
    commonIssues: string[];      // Area-specific water damage issues
    architectureNotes: string;   // Housing stock description
    permitOffice: string;        // Local permit authority
  };

  // Local business network (outbound links for SEO)
  partners: Array<{
    name: string;
    category: string;            // "Plumber", "Public Adjuster", "Roofer"
    url?: string;
    phone?: string;
  }>;

  // Emergency utility contacts
  emergencyContacts: Array<{
    name: string;
    phone: string;
    url: string;
  }>;

  // Response time zones
  serviceArea: {
    primary: string[];           // <60 min response
    secondary: string[];         // 60-90 min response
  };

  // Visual assets
  heroImage: string;             // Unique hero per city
  galleryTag: string;            // CMS filter tag for projects

  // Geo coordinates for schema
  coordinates: {
    lat: number;
    lng: number;
  };

  // HQ flag
  isHQ: boolean;

  // === NEW: SEO Content for City Pages ===
  seo?: SEOContent;
  neighborhoodResponseTimes?: Neighborhood[];
  challenges?: Challenge[];
  testimonials?: Testimonial[];
  faqs?: FAQ[];

  // === City-Specific Guide Data ===
  guideData?: CityGuideData;
};

// Central dispatch info (shared reference, not claimed as local address)
export const dispatchCenter = {
  label: "Central Dispatch & Equipment Hub",
  city: "Falls Church",
  state: "VA",
  note: "24/7 dispatch center serving all Northern Virginia and DC locations"
};

// Phone number prefix for tracking (replace XXX with actual numbers)
// Format: Each city gets unique last 4 digits for call tracking
export const PHONE_PREFIX = "703-656-";

export const franchises: Record<string, FranchiseData> = {

  // ============================================
  // GLOBAL HQ (Main Site) - V3 UPGRADE
  // ============================================
  hq: {
    id: "hq",
    name: "Flood Doctor",
    city: "Northern Virginia",
    state: "VA",
    zipCodes: [], // Covers all
    phone: "(877) 497-0007", // Main Toll-Free Line

    serviceAreaLabel: "Serving Northern Virginia, DC & Maryland",
    dispatchNote: "Region-wide dispatch from our Falls Church headquarters.",

    googleMapsEmbed: "YOUR_MAIN_HQ_MAP_EMBED_URL",
    googlePlaceId: "YOUR_MAIN_GBP_ID",

    manager: {
      name: "The Flood Doctor Team",
      title: "Regional Operations",
      bio: "Our certified team of restoration experts serves the entire DMV region with rapid 24/7 response.",
      image: "/images/team/team-group.jpg",
      localTie: "Locally owned and operated in Northern Virginia since 2005."
    },
    team: [],

    localHooks: {
      neighborhoods: ["Fairfax County", "Loudoun County", "Arlington", "Alexandria", "Prince William"],
      landmarks: ["The Pentagon", "Tysons Corner", "Dulles Airport"],
      commonIssues: ["Storm damage", "Frozen pipes", "Basement flooding", "Sewage backups"],
      architectureNotes: "Servicing all residential and commercial property types across the region.",
      permitOffice: "Local County Offices"
    },

    partners: [],
    emergencyContacts: [],

    serviceArea: {
      primary: ["Northern Virginia", "Washington DC"],
      secondary: ["Maryland Suburbs"]
    },

    heroImage: "/images/heroes/global-hero.jpg",
    galleryTag: "all",

    coordinates: { lat: 38.88, lng: -77.17 },
    isHQ: true
  },

  // ============================================
  // MCLEAN
  // ============================================
  mclean: {
    id: "mclean",
    name: "Flood Doctor of McLean",
    city: "McLean",
    state: "VA",
    zipCodes: ["22101", "22102", "22106"],
    phone: `${PHONE_PREFIX}0101`,

    serviceAreaLabel: "Serving McLean, Tysons & Great Falls",
    dispatchNote: "Dispatched from our central facility in Falls Church, with rapid response units stationed throughout McLean and Tysons.",

    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49633.14542754106!2d-77.21!3d38.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64a3e7f0e3c0f%3A0x4b0b3b3b3b3b3b3b!2sMcLean%2C%20VA!5e0!3m2!1sen!2sus!4v1234567890",
    googlePlaceId: "",

    manager: {
      name: "Alex D.",
      title: "McLean Branch Manager",
      bio: "Alex has managed water emergencies in McLean's estate properties for over 10 years, specializing in high-value asset protection and finished basement restoration.",
      image: "/images/team/manager-mclean.jpg",
      localTie: "Lives in Tysons and knows how quickly rush hour traffic on Route 7 affects emergency response times."
    },

    team: [],

    localHooks: {
      neighborhoods: ["Langley", "Chesterbrook", "Salona Village", "McLean Hamlet", "Balls Hill", "El Nido", "Ingleside"],
      landmarks: ["Tysons Corner Center", "Great Falls Park", "Langley High School", "Chain Bridge", "McLean Community Center"],
      commonIssues: [
        "Finished basement flooding in estate homes",
        "Pool house and cabana pipe bursts",
        "Sump pump failures during summer storms",
        "Wine cellar humidity damage",
        "Home theater water intrusion"
      ],
      architectureNotes: "Large estate homes (4,000-15,000 sq ft) with finished basements, custom millwork, and high-value assets including wine cellars, home theaters, and art collections. Many properties on well water with private septic systems.",
      permitOffice: "Fairfax County"
    },

    partners: [
      { name: "CroppMetcalfe", category: "Plumber", url: "https://www.croppmetcalfe.com", phone: "703-420-5030" },
      { name: "MidAtlantic Contracting", category: "Roofer", url: "https://macontracting.com", phone: "" },
      { name: "JES Foundation Repair", category: "Waterproofing", url: "https://www.jeswork.com", phone: "703-379-8888" },
      { name: "Peabody Residential", category: "Property Manager", url: "https://peabodyresidential.com", phone: "" },
      { name: "Frank D. Spicer Insurance", category: "Insurance Agent", url: "https://www.fdspicerinsurance.com", phone: "" },
      { name: "Galaxy Construction", category: "Kitchen & Bath Remodeling", url: "https://galaxy.construction", phone: "703-858-9599" },
      { name: "Ayoub Carpet Service", category: "Carpet Cleaning", url: "https://www.ayoubcarpetservice.com", phone: "" },
      { name: "Flooring America Fairfax", category: "Flooring Installer", url: "https://www.flooringamericastores.com", phone: "703-934-8447" }
    ],

    emergencyContacts: [
      { name: "Fairfax Water Authority", phone: "703-698-5600", url: "https://www.fairfaxwater.org" },
      { name: "Dominion Energy Outages", phone: "866-366-4357", url: "https://www.dominionenergy.com" },
      { name: "Fairfax County Emergency", phone: "703-246-2000", url: "https://www.fairfaxcounty.gov/emergencymanagement" }
    ],

    serviceArea: {
      primary: ["McLean", "Tysons", "Tysons Corner", "Great Falls"],
      secondary: ["Vienna", "Falls Church", "Langley", "Pimmit Hills"]
    },

    heroImage: "/images/heroes/mclean-estate.jpg",
    galleryTag: "mclean",

    coordinates: { lat: 38.9339, lng: -77.1773 },
    isHQ: false,

    // SEO Content
    seo: {
      metaTitle: "Water Damage Restoration McLean VA | Premium Service | Flood Doctor",
      metaDescription: "McLean's trusted water damage restoration. 60-minute response. Serving Great Falls, Langley, McLean Hamlet & all McLean estates. (877) 497-0007.",
      h1: "Water Damage Restoration in McLean, Virginia",
      heroText: "McLean homes represent significant investments—and they deserve restoration services that match. Flood Doctor provides premium water damage restoration throughout McLean, from the historic estates near Langley to the luxury homes of McLean Hamlet."
    },

    neighborhoodResponseTimes: [
      { name: "Downtown McLean", responseTime: "45-60 min", tier: "fast" },
      { name: "McLean Hamlet", responseTime: "45-60 min", tier: "fast" },
      { name: "Langley", responseTime: "50-70 min", tier: "medium" },
      { name: "Chesterbrook", responseTime: "50-70 min", tier: "medium" },
      { name: "Franklin Park", responseTime: "45-60 min", tier: "fast" },
      { name: "Great Falls", responseTime: "60-80 min", tier: "medium" },
      { name: "Tysons", responseTime: "40-55 min", tier: "fast" },
      { name: "Salona Village", responseTime: "50-65 min", tier: "fast" }
    ],

    challenges: [
      {
        icon: "Home",
        title: "Estate Homes",
        description: "Large basements spanning 4,000-15,000+ sq ft require industrial-scale equipment and specialized drying strategies."
      },
      {
        icon: "Wine",
        title: "Wine Cellars",
        description: "Humidity control is critical for protecting valuable collections. We understand temperature-sensitive restoration."
      },
      {
        icon: "Palette",
        title: "Custom Finishes",
        description: "Irreplaceable Italian marble, hand-scraped hardwoods, and custom millwork need careful handling—not replacement."
      },
      {
        icon: "TreePine",
        title: "Tree Coverage",
        description: "McLean's mature tree canopy increases storm damage risk. Rapid response prevents secondary water intrusion."
      }
    ],

    testimonials: [
      {
        quote: "Our McLean home has custom Italian marble floors throughout the first level. When a pipe burst in the wall, I panicked about the floors. Flood Doctor arrived in under an hour, extracted the water carefully, and saved every tile. They understood what was at stake.",
        author: "William R.",
        location: "McLean",
        rating: 5
      },
      {
        quote: "We've used Flood Doctor twice for our estate near Great Falls. Both times they responded immediately and handled everything professionally. They're our first call for any water issue.",
        author: "The Sterling Family",
        location: "McLean",
        rating: 5
      }
    ],

    faqs: [
      {
        question: "How quickly can you respond to my McLean property?",
        answer: "We provide 45-70 minute response throughout McLean, 24/7. Our Vienna location puts us closer than most competitors, with dedicated crews for the McLean and Great Falls area."
      },
      {
        question: "Do you have experience with high-end homes?",
        answer: "Yes. We've restored numerous McLean properties with custom finishes, large square footage, and premium materials. We understand the expectations and requirements for estate properties."
      },
      {
        question: "What about my security system and smart home?",
        answer: "We work around security and automation systems. We coordinate access requirements and protect technology during restoration."
      },
      {
        question: "Can you match custom materials?",
        answer: "Yes. We work with specialty suppliers and custom fabricators to match existing finishes when replacement is necessary. We don't substitute standard materials in custom homes."
      },
      {
        question: "Do you handle insurance claims for high-value policies?",
        answer: "Yes. We're experienced with premium homeowner's policies and their specific documentation requirements."
      }
    ],

    guideData: {
      emergency: {
        responseTimeRange: "45-70 minutes",
        criticalFirstStep: "For estate homes, immediately check the basement and wine cellar—water travels to the lowest point first.",
        localEmergencyTips: [
          "McLean estates often have multiple water shutoffs—check the basement utility room and outdoor well house",
          "Great Falls properties on well water may need to shut off the well pump separately",
          "Contact Fairfax Water (703-698-5600) if you suspect a main line issue"
        ]
      },
      prevention: {
        housingTypes: ["Large estate homes (4,000-15,000 sq ft)", "Custom colonials", "Contemporary mansions", "Pool houses and guest cottages"],
        seasonalRisks: ["Winter pipe freezing in large unoccupied spaces", "Summer storm damage from mature tree coverage", "Spring sump pump failures from snowmelt", "Fall gutter overflow from heavy leaf accumulation"],
        localPermitInfo: "Fairfax County requires permits for structural repairs and major plumbing work. Historic properties near Great Falls may have additional requirements.",
        commonPreventionIssues: ["Wine cellar humidity control", "Sump pump maintenance for large basements", "Pool house winterization", "Exterior drainage on large lots"]
      },
      insurance: {
        averageClaimRange: "$15,000-$75,000",
        commonClaimTypes: ["Finished basement flooding", "Burst pipes in vacant wings", "Wine cellar damage", "Pool house water intrusion"],
        localAdjusterTips: [
          "McLean properties often require specialty adjusters familiar with high-value claims",
          "Document custom finishes with manufacturer specs—standard pricing won't apply",
          "Request a contents specialist if you have art, wine, or collectibles"
        ],
        documentationFocus: ["Custom material specifications", "Art and collectible appraisals", "Wine cellar inventory", "Smart home system costs"]
      }
    }
  },

  // ============================================
  // ARLINGTON
  // ============================================
  arlington: {
    id: "arlington",
    name: "Flood Doctor of Arlington",
    city: "Arlington",
    state: "VA",
    zipCodes: ["22201", "22202", "22203", "22204", "22205", "22206", "22207", "22209", "22213"],
    phone: `${PHONE_PREFIX}0102`,

    serviceAreaLabel: "Serving Arlington, Rosslyn & Clarendon",
    dispatchNote: "Dispatched from our central facility in Falls Church, minutes from all Arlington neighborhoods. Crews experienced with both high-rise and single-family emergencies.",

    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49633.14542754106!2d-77.10!3d38.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b6d!2sArlington%2C%20VA!5e0!3m2!1sen!2sus!4v1234567890",
    googlePlaceId: "",

    manager: {
      name: "Jennifer K.",
      title: "Arlington Branch Manager",
      bio: "Jennifer manages both high-rise condo emergencies and single-family restoration throughout Arlington, with specialized training in multi-unit water intrusion response.",
      image: "/images/team/manager-arlington.jpg",
      localTie: "Clarendon resident with deep knowledge of Arlington's mix of historic homes and modern condos."
    },

    team: [],

    localHooks: {
      neighborhoods: ["Rosslyn", "Clarendon", "Ballston", "Crystal City", "Pentagon City", "Shirlington", "Lyon Village", "Cherrydale", "Bluemont", "Ashton Heights"],
      landmarks: ["Arlington National Cemetery", "Pentagon", "Ballston Quarter", "Rosslyn Metro", "Clarendon Metro", "The Village at Shirlington"],
      commonIssues: [
        "High-rise condo water intrusion from units above",
        "Older single-family basement flooding",
        "HVAC condensate line failures in condos",
        "Underground parking garage flooding",
        "Roof leaks in mid-century flat-roof homes"
      ],
      architectureNotes: "Mix of high-rise condos (10-30 stories), mid-century ramblers, and new construction townhomes. Many multi-unit buildings require HOA coordination. Dense urban environment with limited equipment access.",
      permitOffice: "Arlington County"
    },

    partners: [
      { name: "CroppMetcalfe", category: "Plumber", url: "https://www.croppmetcalfe.com", phone: "703-420-5030" },
      { name: "Impact Roofing", category: "Roofer", url: "https://impactroofing.solutions", phone: "703-329-2959" },
      { name: "Lux Foundation Solutions", category: "Waterproofing", url: "https://www.luxfoundationsolutions.com", phone: "" },
      { name: "Richey Property Management", category: "Property Manager", url: "https://www.richeypm.com", phone: "703-721-4453" },
      { name: "Preferred Insurance", category: "Insurance Agent", url: "https://www.preferredinsva.com", phone: "" },
      { name: "Galaxy Construction", category: "Kitchen & Bath Remodeling", url: "https://galaxy.construction", phone: "703-858-9599" },
      { name: "Absolute Carpet Care", category: "Carpet Cleaning", url: "https://www.absolutecarpetcare.com", phone: "" },
      { name: "Flooring America Fairfax", category: "Flooring Installer", url: "https://www.flooringamericastores.com", phone: "703-934-8447" }
    ],

    emergencyContacts: [
      { name: "Arlington County Water", phone: "703-228-6555", url: "https://water.arlingtonva.us" },
      { name: "Dominion Energy Outages", phone: "866-366-4357", url: "https://www.dominionenergy.com" },
      { name: "Arlington Emergency Management", phone: "703-228-7935", url: "https://emergency.arlingtonva.us" }
    ],

    serviceArea: {
      primary: ["Arlington", "Rosslyn", "Clarendon", "Ballston", "Crystal City"],
      secondary: ["Pentagon City", "Shirlington", "Falls Church", "Alexandria"]
    },

    heroImage: "/images/heroes/arlington-skyline.jpg",
    galleryTag: "arlington",

    coordinates: { lat: 38.8799, lng: -77.1068 },
    isHQ: false,

    // SEO Content
    seo: {
      metaTitle: "Water Damage Restoration Arlington VA | High-Rise & Condo Specialists | Flood Doctor",
      metaDescription: "Arlington's trusted water damage restoration. 60-minute response. Serving Rosslyn, Clarendon, Crystal City & all Arlington. High-rise & condo certified. (877) 497-0007.",
      h1: "Water Damage Restoration in Arlington, Virginia",
      heroText: "From Rosslyn high-rises to Cherrydale colonials, Arlington properties face unique water damage challenges. Flood Doctor provides certified restoration throughout Arlington, with specialized expertise in multi-unit buildings and HOA coordination."
    },

    neighborhoodResponseTimes: [
      { name: "Rosslyn", responseTime: "45-60 min", tier: "fast" },
      { name: "Clarendon", responseTime: "45-60 min", tier: "fast" },
      { name: "Ballston", responseTime: "50-65 min", tier: "fast" },
      { name: "Crystal City", responseTime: "55-70 min", tier: "medium" },
      { name: "Pentagon City", responseTime: "55-70 min", tier: "medium" },
      { name: "Shirlington", responseTime: "50-65 min", tier: "fast" },
      { name: "Lyon Village", responseTime: "45-60 min", tier: "fast" },
      { name: "Cherrydale", responseTime: "50-65 min", tier: "fast" }
    ],

    challenges: [
      {
        icon: "Building2",
        title: "High-Rise Buildings",
        description: "Water from upper floors travels fast. We coordinate with property management and work 24/7 to minimize multi-unit damage."
      },
      {
        icon: "Users",
        title: "HOA Coordination",
        description: "We navigate HOA requirements and communicate with all stakeholders during condo and townhome restoration projects."
      },
      {
        icon: "Clock",
        title: "Urban Access",
        description: "Dense urban environment requires specialized equipment staging. We're experienced with loading dock access and parking constraints."
      },
      {
        icon: "Home",
        title: "Historic Homes",
        description: "Arlington's mid-century homes often have original plaster and hardwood that require careful drying techniques."
      }
    ],

    testimonials: [
      {
        quote: "Water leaked from the unit above us into our Rosslyn condo. Flood Doctor coordinated with building management, documented everything for insurance, and had us back to normal in days, not weeks.",
        author: "Michael T.",
        location: "Rosslyn",
        rating: 5
      },
      {
        quote: "Our 1950s Cherrydale colonial had a major pipe burst. They saved our original hardwood floors and worked around our schedule. Highly recommend.",
        author: "The Patterson Family",
        location: "Cherrydale",
        rating: 5
      }
    ],

    faqs: [
      {
        question: "Do you handle high-rise condo water damage in Arlington?",
        answer: "Yes. We're experienced with Arlington's many high-rise buildings and coordinate with property management, HOAs, and affected neighbors when water travels between units."
      },
      {
        question: "How quickly can you respond to my Arlington property?",
        answer: "We provide 45-70 minute response throughout Arlington, 24/7. Our proximity to the area means fast arrival to Rosslyn, Clarendon, Crystal City, and all Arlington neighborhoods."
      },
      {
        question: "Can you work with my condo HOA?",
        answer: "Absolutely. We regularly work with Arlington HOAs and property management companies, providing documentation they require and coordinating access for multi-unit buildings."
      },
      {
        question: "Do you have experience with older Arlington homes?",
        answer: "Yes. Many Arlington homes from the 1940s-1960s have original plaster walls and hardwood floors. We use specialized drying techniques to preserve these materials rather than replace them."
      },
      {
        question: "What about commercial properties in Arlington?",
        answer: "We serve commercial properties throughout Arlington, including office buildings, retail spaces, and restaurants. We work after-hours when needed to minimize business disruption."
      }
    ],

    guideData: {
      emergency: {
        responseTimeRange: "40-60 minutes",
        criticalFirstStep: "For high-rise condos, immediately notify building management and check if water is affecting units below yours.",
        localEmergencyTips: [
          "High-rise buildings: Alert the front desk and check floors below—water travels fast through multi-story buildings",
          "Condo owners: Document the source carefully; liability depends on where the leak originated",
          "Contact Arlington County Water (703-228-6555) for main line issues"
        ]
      },
      prevention: {
        housingTypes: ["High-rise condos (10-30 stories)", "Mid-century ramblers", "New construction townhomes", "Historic single-family homes"],
        seasonalRisks: ["Winter HVAC condensate line freezing in condos", "Spring basement flooding in older homes", "Summer cooling system overflow", "Fall roof drainage issues on flat-roof homes"],
        localPermitInfo: "Arlington County requires permits for plumbing repairs and structural modifications. HOA approval may also be required for condo and townhome work.",
        commonPreventionIssues: ["HVAC condensate line maintenance", "Water heater replacement before failure", "Sump pump installation in older homes", "Building-wide pipe inspection participation"]
      },
      insurance: {
        averageClaimRange: "$8,000-$35,000",
        commonClaimTypes: ["Condo water intrusion from above", "HVAC condensate overflow", "Basement flooding in single-family homes", "Pipe bursts in older construction"],
        localAdjusterTips: [
          "For condo claims, document whether damage originated from your unit, another unit, or common areas",
          "HOA master policy may cover common area damage—coordinate with building management",
          "Multi-unit claims require clear source identification for insurance purposes"
        ],
        documentationFocus: ["Source of water (your unit vs. another)", "Building management communication", "HOA notifications", "Multi-unit impact photos"]
      }
    }
  },

  // ============================================
  // ALEXANDRIA
  // ============================================
  alexandria: {
    id: "alexandria",
    name: "Flood Doctor of Alexandria",
    city: "Alexandria",
    state: "VA",
    zipCodes: ["22301", "22302", "22304", "22305", "22306", "22307", "22308", "22309", "22310", "22311", "22312", "22314", "22315"],
    phone: `${PHONE_PREFIX}0103`,

    serviceAreaLabel: "Serving Alexandria, Old Town & Del Ray",
    dispatchNote: "Dispatched from our central facility, with crews experienced in historic district requirements and BAR compliance for Old Town Alexandria.",

    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49633.14542754106!2d-77.05!3d38.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7!2sAlexandria%2C%20VA!5e0!3m2!1sen!2sus!4v1234567890",
    googlePlaceId: "",

    manager: {
      name: "Sarah M.",
      title: "Alexandria Branch Manager",
      bio: "Sarah specializes in historic property restoration and navigating Alexandria's Board of Architectural Review (BAR) requirements. Expert in Category 3 water damage in older infrastructure.",
      image: "/images/team/manager-alexandria.jpg",
      localTie: "Resident of Del Ray, Sarah understands the unique challenges of Alexandria's older infrastructure and tight urban lots."
    },

    team: [],

    localHooks: {
      neighborhoods: ["Old Town", "Del Ray", "Rosemont", "Carlyle", "Eisenhower Valley", "Kingstowne", "Mount Vernon", "Belle Haven", "Potomac Yard", "Landmark"],
      landmarks: ["King Street", "Torpedo Factory", "George Washington Masonic Memorial", "Old Town Waterfront", "Market Square", "The Birchmere"],
      commonIssues: [
        "Combined sewer backups in Old Town",
        "Historic district restoration with BAR compliance",
        "Tight equipment access in urban rowhouses",
        "Older cast iron pipe failures",
        "Basement flooding from high water table near Potomac"
      ],
      architectureNotes: "Mix of historic rowhouses (1800s-1900s), urban condos, and suburban townhomes. Old Town properties often require Board of Architectural Review (BAR) approval for exterior work. Many homes have original plaster walls and hardwood requiring specialized drying.",
      permitOffice: "City of Alexandria"
    },

    partners: [
      { name: "Freedom Plumbers", category: "Plumber", url: "https://freedomplumbers.com", phone: "703-895-4109" },
      { name: "A&M Roofing", category: "Roofer", url: "https://amroofingva.com", phone: "" },
      { name: "NV Waterproofing", category: "Waterproofing", url: "https://www.nvwaterproofing.com", phone: "855-649-7594" },
      { name: "WJD Management", category: "Property Manager", url: "https://www.wjdpm.com", phone: "" },
      { name: "Bridge First Insurance", category: "Insurance Agent", url: "https://bridgefirstinsurance.com", phone: "" },
      { name: "Galaxy Construction", category: "Kitchen & Bath Remodeling", url: "https://galaxy.construction", phone: "703-858-9599" },
      { name: "Ayoub Carpet Service", category: "Carpet Cleaning", url: "https://www.ayoubcarpetservice.com", phone: "" },
      { name: "Prospect Hardwood Flooring", category: "Flooring Installer", url: "https://phwflooring.com", phone: "" }
    ],

    emergencyContacts: [
      { name: "Alexandria Renew (Sewer)", phone: "703-721-3500", url: "https://alexrenew.com" },
      { name: "Virginia American Water", phone: "800-452-6863", url: "https://www.amwater.com/vaaw" },
      { name: "Alexandria Emergency Management", phone: "703-746-5261", url: "https://www.alexandriava.gov/Emergency" }
    ],

    serviceArea: {
      primary: ["Alexandria", "Old Town", "Del Ray", "Rosemont", "Carlyle"],
      secondary: ["Kingstowne", "Mount Vernon", "Belle Haven", "Crystal City", "Huntington"]
    },

    heroImage: "/images/heroes/alexandria-oldtown.jpg",
    galleryTag: "alexandria",

    coordinates: { lat: 38.8048, lng: -77.0469 },
    isHQ: false,

    // SEO Content
    seo: {
      metaTitle: "Water Damage Restoration Alexandria VA | Historic District Certified | Flood Doctor",
      metaDescription: "Alexandria's trusted water damage restoration. 60-minute response. Old Town historic certified, BAR compliant. Serving Del Ray, Carlyle & all Alexandria. (877) 497-0007.",
      h1: "Water Damage Restoration in Alexandria, Virginia",
      heroText: "Alexandria's historic properties deserve restoration that respects their heritage. From Old Town rowhouses to Del Ray bungalows, Flood Doctor provides certified water damage restoration with expertise in historic preservation and BAR compliance."
    },

    neighborhoodResponseTimes: [
      { name: "Old Town", responseTime: "50-65 min", tier: "fast" },
      { name: "Del Ray", responseTime: "45-60 min", tier: "fast" },
      { name: "Rosemont", responseTime: "45-60 min", tier: "fast" },
      { name: "Carlyle", responseTime: "50-65 min", tier: "fast" },
      { name: "Kingstowne", responseTime: "55-70 min", tier: "medium" },
      { name: "Belle Haven", responseTime: "60-75 min", tier: "medium" },
      { name: "Potomac Yard", responseTime: "50-65 min", tier: "fast" },
      { name: "Eisenhower Valley", responseTime: "55-70 min", tier: "medium" }
    ],

    challenges: [
      {
        icon: "Landmark",
        title: "Historic Properties",
        description: "Old Town's 18th and 19th century rowhouses require specialized drying to protect original plaster, hardwood, and period details."
      },
      {
        icon: "FileCheck",
        title: "BAR Compliance",
        description: "We understand Alexandria's Board of Architectural Review requirements and work within historic district guidelines."
      },
      {
        icon: "Droplets",
        title: "Combined Sewers",
        description: "Old Town's combined sewer system creates Category 3 water risks during heavy rain. We're certified for sewage contamination."
      },
      {
        icon: "MapPin",
        title: "Tight Access",
        description: "Urban rowhouses have limited equipment access. We use specialized compact equipment designed for narrow spaces."
      }
    ],

    testimonials: [
      {
        quote: "Our Old Town rowhouse had a sewage backup—a nightmare scenario for a 200-year-old home. Flood Doctor handled the contamination professionally and restored our original pine floors. They understood the historic value.",
        author: "Elizabeth S.",
        location: "Old Town",
        rating: 5
      },
      {
        quote: "The team arrived quickly to our Del Ray bungalow and saved our hardwood floors from a water heater failure. They were respectful of our home and kept everything clean during the process.",
        author: "James & Maria L.",
        location: "Del Ray",
        rating: 5
      }
    ],

    faqs: [
      {
        question: "Do you have experience with Old Town Alexandria historic homes?",
        answer: "Yes. We've restored numerous historic properties in Old Town and understand the unique requirements of working with original materials, tight spaces, and BAR compliance when applicable."
      },
      {
        question: "How quickly can you respond to Alexandria?",
        answer: "We provide 45-75 minute response throughout Alexandria, 24/7. Response times to Old Town depend on traffic and street parking conditions."
      },
      {
        question: "Can you handle sewage backups in Old Town?",
        answer: "Yes. Old Town's combined sewer system can cause Category 3 contamination during heavy rain. We're IICRC certified for sewage cleanup and follow strict protocols for contaminated water."
      },
      {
        question: "Do you work with the Board of Architectural Review?",
        answer: "We're familiar with BAR requirements and provide documentation when exterior work may be needed. We prioritize repair over replacement to maintain historic integrity."
      },
      {
        question: "What about waterfront properties near the Potomac?",
        answer: "Properties in Old Town and Belle Haven near the Potomac can face flood zone challenges. We're experienced with waterfront restoration and flood damage mitigation."
      }
    ],

    guideData: {
      emergency: {
        responseTimeRange: "45-75 minutes",
        criticalFirstStep: "In Old Town rowhouses, check the basement immediately—water collects quickly in below-grade spaces with limited drainage.",
        localEmergencyTips: [
          "Old Town: Street parking may delay response during peak hours—provide any driveway or alley access info",
          "For combined sewer backups, do NOT enter standing water—it may be contaminated (Category 3)",
          "Contact Virginia American Water (703-549-7080) for main line issues in Alexandria"
        ]
      },
      prevention: {
        housingTypes: ["18th-19th century rowhouses", "Del Ray bungalows", "Rosemont colonials", "New construction condos (Carlyle, Potomac Yard)"],
        seasonalRisks: ["Summer storm flooding via combined sewers", "Winter pipe freezing in uninsulated rowhouse walls", "Spring Potomac-area groundwater rise", "Fall gutter clogs in tree-lined neighborhoods"],
        localPermitInfo: "Alexandria requires permits for most plumbing work. Old Town properties may require BAR (Board of Architectural Review) approval for exterior-visible repairs.",
        commonPreventionIssues: ["Backflow valve installation for combined sewer areas", "Historic pipe replacement planning", "Foundation waterproofing for rowhouses", "Sump pit installation in below-grade levels"]
      },
      insurance: {
        averageClaimRange: "$10,000-$45,000",
        commonClaimTypes: ["Sewage backup (combined sewer)", "Pipe bursts in historic buildings", "Basement flooding in rowhouses", "Waterfront flood damage"],
        localAdjusterTips: [
          "For sewage backups, confirm you have sewer backup endorsement—many standard policies exclude it",
          "Historic material replacement costs exceed standard pricing—document everything with photos",
          "Flood zone properties require separate NFIP policy for Potomac-related flooding"
        ],
        documentationFocus: ["Historic material specifications", "BAR compliance documentation", "Sewage contamination evidence", "Original material condition photos"]
      }
    }
  },

  // ============================================
  // FAIRFAX (City)
  // ============================================
  fairfax: {
    id: "fairfax",
    name: "Flood Doctor of Fairfax",
    city: "Fairfax",
    state: "VA",
    zipCodes: ["22030", "22031", "22032", "22033", "22035"],
    phone: `${PHONE_PREFIX}0104`,

    serviceAreaLabel: "Serving Fairfax City, Fairfax Corner & Burke",
    dispatchNote: "Dispatched from our Falls Church facility, with rapid response throughout Fairfax City and surrounding communities.",

    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49633.14542754106!2d-77.31!3d38.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b!2sFairfax%2C%20VA!5e0!3m2!1sen!2sus!4v1234567890",
    googlePlaceId: "",

    manager: {
      name: "Michael R.",
      title: "Fairfax Branch Manager",
      bio: "Michael has served the Fairfax community for 12 years, specializing in residential restoration and working closely with local insurance adjusters.",
      image: "/images/team/manager-fairfax.jpg",
      localTie: "Fairfax City resident who coaches youth soccer and knows the neighborhood network."
    },

    team: [],

    localHooks: {
      neighborhoods: ["Fairfax City", "Fairfax Corner", "Burke", "Burke Centre", "Kings Park", "Pickett Road", "Mosby Woods", "Mantua", "Woodson", "Fairfax Station"],
      landmarks: ["Fairfax City Hall", "George Mason University", "Fairfax Corner", "Burke Lake Park", "Old Town Fairfax"],
      commonIssues: [
        "Split-level home basement flooding",
        "Sump pump failures in older developments",
        "HVAC drain line clogs",
        "Washing machine supply line bursts",
        "Ice dam roof leaks in winter"
      ],
      architectureNotes: "Predominantly 1970s-1990s colonial and split-level single-family homes. Many with finished basements on slab or crawlspace. Burke Centre features townhomes with shared walls requiring neighbor coordination.",
      permitOffice: "City of Fairfax / Fairfax County"
    },

    partners: [
      { name: "CroppMetcalfe", category: "Plumber", url: "https://www.croppmetcalfe.com", phone: "703-420-5030" },
      { name: "Impact Roofing", category: "Roofer", url: "https://impactroofing.solutions", phone: "703-329-2959" },
      { name: "JES Foundation Repair", category: "Waterproofing", url: "https://www.jeswork.com", phone: "703-379-8888" },
      { name: "PMI of Fairfax", category: "Property Manager", url: "https://www.pmifairfax.com", phone: "" },
      { name: "Frank D. Spicer Insurance", category: "Insurance Agent", url: "https://www.fdspicerinsurance.com", phone: "" },
      { name: "Galaxy Construction", category: "Kitchen & Bath Remodeling", url: "https://galaxy.construction", phone: "703-858-9599" },
      { name: "Ayoub Carpet Service", category: "Carpet Cleaning", url: "https://www.ayoubcarpetservice.com", phone: "" },
      { name: "Flooring America Fairfax", category: "Flooring Installer", url: "https://www.flooringamericastores.com", phone: "703-934-8447" }
    ],

    emergencyContacts: [
      { name: "Fairfax Water Authority", phone: "703-698-5600", url: "https://www.fairfaxwater.org" },
      { name: "City of Fairfax Water", phone: "703-385-7800", url: "https://www.fairfaxva.gov" },
      { name: "Fairfax County Emergency", phone: "703-246-2000", url: "https://www.fairfaxcounty.gov/emergencymanagement" }
    ],

    serviceArea: {
      primary: ["Fairfax", "Fairfax City", "Burke", "Burke Centre"],
      secondary: ["Fairfax Station", "Springfield", "Annandale", "Mantua"]
    },

    heroImage: "/images/heroes/fairfax-residential.jpg",
    galleryTag: "fairfax",

    coordinates: { lat: 38.8462, lng: -77.3064 },
    isHQ: false,

    // SEO Content
    seo: {
      metaTitle: "Water Damage Restoration Fairfax VA | Residential Specialists | Flood Doctor",
      metaDescription: "Fairfax's trusted water damage restoration. 60-minute response. Serving Burke, Fairfax City & all Fairfax County neighborhoods. (877) 497-0007.",
      h1: "Water Damage Restoration in Fairfax, Virginia",
      heroText: "Fairfax families trust Flood Doctor for water damage restoration. From split-levels in Burke to colonials in Fairfax City, we provide certified 24/7 emergency response with crews who know your neighborhood."
    },

    neighborhoodResponseTimes: [
      { name: "Fairfax City", responseTime: "45-60 min", tier: "fast" },
      { name: "Burke", responseTime: "50-65 min", tier: "fast" },
      { name: "Burke Centre", responseTime: "50-65 min", tier: "fast" },
      { name: "Kings Park", responseTime: "45-60 min", tier: "fast" },
      { name: "Fairfax Corner", responseTime: "45-60 min", tier: "fast" },
      { name: "Mantua", responseTime: "50-65 min", tier: "fast" },
      { name: "Fairfax Station", responseTime: "60-75 min", tier: "medium" },
      { name: "Mosby Woods", responseTime: "50-65 min", tier: "fast" }
    ],

    challenges: [
      {
        icon: "Home",
        title: "Split-Level Homes",
        description: "Fairfax's 1970s-90s split-levels have unique water flow patterns. We understand how water travels through these floor plans."
      },
      {
        icon: "Zap",
        title: "Sump Pump Failures",
        description: "Many Fairfax homes rely on sump pumps. When they fail during storms, we respond fast with portable pumping equipment."
      },
      {
        icon: "Thermometer",
        title: "HVAC Issues",
        description: "Condensate drain clogs are common in humid Virginia summers. We handle HVAC-related water damage and coordinate with HVAC contractors."
      },
      {
        icon: "Users",
        title: "Townhome Coordination",
        description: "Burke Centre and other townhome communities require neighbor coordination. We manage multi-unit response seamlessly."
      }
    ],

    testimonials: [
      {
        quote: "Our Burke split-level flooded when the sump pump failed during a thunderstorm. Flood Doctor had pumps running within an hour and saved our finished basement. They knew exactly how to handle our floor plan.",
        author: "David K.",
        location: "Burke",
        rating: 5
      },
      {
        quote: "Fast response to our Fairfax City colonial. The team was professional, explained everything, and worked with our insurance company. Our hardwood floors look perfect.",
        author: "Susan & Robert M.",
        location: "Fairfax City",
        rating: 5
      }
    ],

    faqs: [
      {
        question: "How quickly can you respond to Fairfax?",
        answer: "We provide 45-75 minute response throughout Fairfax, 24/7. Our central location means fast arrival to Fairfax City, Burke, and surrounding neighborhoods."
      },
      {
        question: "Do you have experience with split-level homes?",
        answer: "Yes. Fairfax has many split-level homes from the 1970s-90s. We understand how water travels through these floor plans and how to dry them effectively."
      },
      {
        question: "Can you help with townhome water damage in Burke Centre?",
        answer: "Absolutely. We're experienced with townhome communities and coordinate with neighbors and HOAs when water damage affects shared walls or multiple units."
      },
      {
        question: "What about sump pump failures?",
        answer: "Sump pump failures are common in Fairfax during storms. We bring portable pumping equipment and can have water extraction running while your pump is repaired or replaced."
      },
      {
        question: "Do you work with local Fairfax insurance agents?",
        answer: "Yes. We work with many local insurance agents and adjusters in Fairfax County and provide the documentation needed for smooth claims processing."
      }
    ],

    guideData: {
      emergency: {
        responseTimeRange: "45-75 minutes",
        criticalFirstStep: "In split-level homes, check the lower level first—water naturally flows to the lowest point through the stairwell.",
        localEmergencyTips: [
          "Split-level homes: Water often collects in the lower-level family room before reaching the basement—check both levels",
          "Sump pump failure: Do NOT enter deep standing water—call us for emergency pumping equipment",
          "Contact Fairfax Water (703-698-5600) for main line issues"
        ]
      },
      prevention: {
        housingTypes: ["1970s-90s split-levels", "Colonial-style homes", "Burke Centre townhomes", "New construction single-family"],
        seasonalRisks: ["Summer thunderstorm sump pump overload", "Winter pipe freezing in crawl spaces", "Spring basement seepage", "Fall gutter clogs causing foundation issues"],
        localPermitInfo: "Fairfax County requires permits for plumbing repairs, sump pump installation, and structural modifications.",
        commonPreventionIssues: ["Sump pump backup battery installation", "Basement waterproofing", "HVAC condensate line maintenance", "Townhome shared wall inspections"]
      },
      insurance: {
        averageClaimRange: "$6,000-$25,000",
        commonClaimTypes: ["Sump pump failure flooding", "HVAC condensate overflow", "Burst pipes in crawl spaces", "Townhome multi-unit damage"],
        localAdjusterTips: [
          "Sump pump failure may require specific endorsement—check your policy for 'equipment breakdown' coverage",
          "For townhomes, document the source clearly to determine which unit's policy applies",
          "Fairfax County has many experienced local adjusters—request one familiar with split-level construction"
        ],
        documentationFocus: ["Sump pump failure evidence", "HVAC maintenance records", "Split-level water flow patterns", "Townhome HOA notifications"]
      }
    }
  },

  // ============================================
  // VIENNA
  // ============================================
  vienna: {
    id: "vienna",
    name: "Flood Doctor of Vienna",
    city: "Vienna",
    state: "VA",
    zipCodes: ["22180", "22181", "22182", "22183"],
    phone: `${PHONE_PREFIX}0105`,

    serviceAreaLabel: "Serving Vienna, Oakton & Dunn Loring",
    dispatchNote: "Dispatched from our central facility, with crews familiar with Vienna's mix of historic town properties and newer developments.",

    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49633.14542754106!2d-77.26!3d38.90!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b!2sVienna%2C%20VA!5e0!3m2!1sen!2sus!4v1234567890",
    googlePlaceId: "",

    manager: {
      name: "Robert T.",
      title: "Vienna Branch Manager",
      bio: "Robert specializes in both historic Vienna properties and the newer luxury homes in Oakton. IICRC Master Water Restorer certified.",
      image: "/images/team/manager-vienna.jpg",
      localTie: "Vienna Town resident who frequents Church Street shops and understands the community."
    },

    team: [],

    localHooks: {
      neighborhoods: ["Vienna Town", "Oakton", "Dunn Loring", "Wolftrap", "Tysons Woods", "Clarks Crossing", "Hunter Mill"],
      landmarks: ["Vienna Town Green", "Wolf Trap", "Meadowlark Gardens", "Vienna Metro", "Church Street"],
      commonIssues: [
        "Historic home foundation seepage",
        "Luxury home finished basement flooding",
        "Sump pump failures in older developments",
        "Hot water heater failures",
        "Dishwasher and appliance leaks"
      ],
      architectureNotes: "Mix of charming 1950s-1970s colonials in Vienna proper and newer luxury construction in Oakton. Many homes have finished basements with home offices and rec rooms. Wolf Trap area features larger lots with custom homes.",
      permitOffice: "Town of Vienna / Fairfax County"
    },

    partners: [
      { name: "CroppMetcalfe", category: "Plumber", url: "https://www.croppmetcalfe.com", phone: "703-420-5030" },
      { name: "MidAtlantic Contracting", category: "Roofer", url: "https://macontracting.com", phone: "703-492-4663" },
      { name: "Lux Foundation Solutions", category: "Waterproofing", url: "https://www.luxfoundationsolutions.com", phone: "" },
      { name: "Nomadic Real Estate", category: "Property Manager", url: "https://www.nomadicrealestate.com", phone: "" },
      { name: "Preferred Insurance", category: "Insurance Agent", url: "https://www.preferredinsva.com", phone: "" },
      { name: "Galaxy Construction", category: "Kitchen & Bath Remodeling", url: "https://galaxy.construction", phone: "703-858-9599" },
      { name: "Ayoub Carpet Service", category: "Carpet Cleaning", url: "https://www.ayoubcarpetservice.com", phone: "" },
      { name: "Flooring America Fairfax", category: "Flooring Installer", url: "https://www.flooringamericastores.com", phone: "703-934-8447" }
    ],

    emergencyContacts: [
      { name: "Fairfax Water Authority", phone: "703-698-5600", url: "https://www.fairfaxwater.org" },
      { name: "Town of Vienna Water", phone: "703-255-6380", url: "https://www.viennava.gov" },
      { name: "Dominion Energy Outages", phone: "866-366-4357", url: "https://www.dominionenergy.com" }
    ],

    serviceArea: {
      primary: ["Vienna", "Oakton", "Dunn Loring", "Tysons"],
      secondary: ["McLean", "Falls Church", "Fairfax", "Merrifield"]
    },

    heroImage: "/images/heroes/vienna-charming.jpg",
    galleryTag: "vienna",

    coordinates: { lat: 38.9012, lng: -77.2653 },
    isHQ: false,

    // SEO Content
    seo: {
      metaTitle: "Water Damage Restoration Vienna VA | Historic & Luxury Homes | Flood Doctor",
      metaDescription: "Vienna's trusted water damage restoration. 60-minute response. Serving Oakton, Wolf Trap & all Vienna neighborhoods. Historic & luxury home specialists. (877) 497-0007.",
      h1: "Water Damage Restoration in Vienna, Virginia",
      heroText: "Vienna combines historic charm with modern luxury. Flood Doctor provides water damage restoration that respects both—from charming Church Street colonials to Oakton's custom estates, we deliver premium service 24/7."
    },

    neighborhoodResponseTimes: [
      { name: "Vienna Town", responseTime: "45-60 min", tier: "fast" },
      { name: "Oakton", responseTime: "50-65 min", tier: "fast" },
      { name: "Dunn Loring", responseTime: "45-60 min", tier: "fast" },
      { name: "Tysons Woods", responseTime: "45-60 min", tier: "fast" },
      { name: "Wolf Trap", responseTime: "55-70 min", tier: "medium" },
      { name: "Hunter Mill", responseTime: "55-70 min", tier: "medium" },
      { name: "Clarks Crossing", responseTime: "50-65 min", tier: "fast" }
    ],

    challenges: [
      {
        icon: "Landmark",
        title: "Historic Vienna",
        description: "Vienna's 1950s-70s colonials have character worth preserving. We use careful drying techniques to protect original features."
      },
      {
        icon: "Home",
        title: "Oakton Estates",
        description: "Oakton's luxury homes feature finished basements with home offices and theaters. We protect your investments with premium restoration."
      },
      {
        icon: "Droplets",
        title: "Foundation Seepage",
        description: "Older Vienna homes may have foundation issues that allow water intrusion. We identify the source and dry completely."
      },
      {
        icon: "Wrench",
        title: "Appliance Failures",
        description: "Hot water heaters, dishwashers, and washing machines cause many Vienna water emergencies. We respond fast to minimize damage."
      }
    ],

    testimonials: [
      {
        quote: "Our Vienna colonial near Church Street had a hot water heater fail overnight. Flood Doctor arrived before sunrise and saved our hardwood floors. They understood the home's character.",
        author: "Katherine W.",
        location: "Vienna",
        rating: 5
      },
      {
        quote: "When our Oakton basement flooded, we were worried about the home theater equipment. The team was careful, thorough, and saved everything. Excellent service.",
        author: "The Chen Family",
        location: "Oakton",
        rating: 5
      }
    ],

    faqs: [
      {
        question: "How quickly can you respond to Vienna?",
        answer: "We provide 45-70 minute response throughout Vienna and Oakton, 24/7. Our proximity means fast arrival to all Vienna neighborhoods."
      },
      {
        question: "Do you have experience with older Vienna homes?",
        answer: "Yes. Many Vienna homes from the 1950s-70s have original hardwood and plaster that require specialized drying. We preserve these features rather than replace them."
      },
      {
        question: "What about larger homes in Oakton?",
        answer: "Oakton's larger homes require more equipment and expertise. We have the industrial-scale equipment needed for 4,000+ sq ft properties with multiple affected areas."
      },
      {
        question: "Can you help with hot water heater failures?",
        answer: "Hot water heater failures are a common cause of Vienna water damage. We respond 24/7 and can have extraction running while you coordinate with your plumber."
      },
      {
        question: "Do you work with Vienna insurance agents?",
        answer: "Yes. We work with local insurance agents and adjusters throughout Fairfax County and the Town of Vienna."
      }
    ],

    guideData: {
      emergency: {
        responseTimeRange: "45-70 minutes",
        criticalFirstStep: "Shut off water at the main valve (typically in basement or crawl space) before damage spreads through older infrastructure.",
        localEmergencyTips: [
          "Older Vienna homes: Water shutoff valves may be corroded—if stuck, don't force it; call us for emergency support",
          "Large Oakton properties: Check multiple water sources—main house, pool house, detached garage",
          "Contact Fairfax Water (703-698-5600) for main line issues"
        ]
      },
      prevention: {
        housingTypes: ["1950s-70s post-war colonials", "Contemporary homes near Wolf Trap", "Large Oakton estates", "Newer townhome developments"],
        seasonalRisks: ["Winter pipe freezing in older uninsulated sections", "Spring tree damage from severe weather", "Summer storm basement flooding", "Fall leaf-related gutter overflow"],
        localPermitInfo: "Town of Vienna and Fairfax County have different permit requirements. Check which jurisdiction your property falls under.",
        commonPreventionIssues: ["Aging pipe replacement", "Water heater pre-failure replacement", "Basement waterproofing", "French drain installation"]
      },
      insurance: {
        averageClaimRange: "$8,000-$40,000",
        commonClaimTypes: ["Water heater failure", "Aging pipe bursts", "Basement flooding", "Tree-related storm damage"],
        localAdjusterTips: [
          "Vienna's older infrastructure means plumbing-related claims are common—document pipe age and condition",
          "Larger Oakton claims may require specialty adjusters familiar with high-value properties",
          "Request a detailed Xactimate estimate to ensure older materials are priced correctly"
        ],
        documentationFocus: ["Pipe age and condition", "Water heater age/maintenance records", "Basement waterproofing status", "Storm damage timeline"]
      }
    }
  },

  // ============================================
  // TYSONS
  // ============================================
  tysons: {
    id: "tysons",
    name: "Flood Doctor of Tysons",
    city: "Tysons",
    state: "VA",
    zipCodes: ["22102", "22182"],
    phone: `${PHONE_PREFIX}0106`,

    serviceAreaLabel: "Serving Tysons Corner, Tysons & McLean",
    dispatchNote: "Dispatched from our central facility, with crews experienced in high-rise commercial and residential properties throughout Tysons.",

    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49633.14542754106!2d-77.23!3d38.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b!2sTysons%2C%20VA!5e0!3m2!1sen!2sus!4v1234567890",
    googlePlaceId: "",

    manager: {
      name: "David K.",
      title: "Tysons Branch Manager",
      bio: "David manages complex high-rise and commercial restoration projects in the Tysons urban core. Specialized in coordinating with property management companies and HOAs.",
      image: "/images/team/manager-tysons.jpg",
      localTie: "Works daily with Tysons property managers and knows the building systems of major developments."
    },

    team: [],

    localHooks: {
      neighborhoods: ["Tysons Corner", "Tysons Central", "The Boro", "The Mile", "Scotts Run", "McLean Metro"],
      landmarks: ["Tysons Corner Center", "Tysons Galleria", "Capital One HQ", "The Boro", "Tysons Metro Stations"],
      commonIssues: [
        "High-rise condo water intrusion",
        "Commercial office water damage",
        "HVAC system failures in large buildings",
        "Underground parking flooding",
        "Construction defect water issues in new buildings"
      ],
      architectureNotes: "Rapidly developing urban core with luxury high-rise condos, Class A office buildings, and mixed-use developments. Many buildings 10-30+ stories with complex HVAC and plumbing systems. HOA and property management coordination essential.",
      permitOffice: "Fairfax County"
    },

    partners: [
      { name: "CroppMetcalfe", category: "Plumber", url: "https://www.croppmetcalfe.com", phone: "703-420-5030" },
      { name: "Impact Roofing", category: "Roofer", url: "https://impactroofing.solutions", phone: "703-329-2959" },
      { name: "JES Foundation Repair", category: "Waterproofing", url: "https://www.jeswork.com", phone: "703-379-8888" },
      { name: "Peabody Residential", category: "Property Manager", url: "https://peabodyresidential.com", phone: "" },
      { name: "Preferred Insurance", category: "Insurance Agent", url: "https://www.preferredinsva.com", phone: "" },
      { name: "Galaxy Construction", category: "Kitchen & Bath Remodeling", url: "https://galaxy.construction", phone: "703-858-9599" },
      { name: "Absolute Carpet Care", category: "Carpet Cleaning", url: "https://www.absolutecarpetcare.com", phone: "" },
      { name: "Flooring America Fairfax", category: "Flooring Installer", url: "https://www.flooringamericastores.com", phone: "703-934-8447" }
    ],

    emergencyContacts: [
      { name: "Fairfax Water Authority", phone: "703-698-5600", url: "https://www.fairfaxwater.org" },
      { name: "Fairfax County Emergency", phone: "703-246-2000", url: "https://www.fairfaxcounty.gov/emergencymanagement" },
      { name: "Dominion Energy Outages", phone: "866-366-4357", url: "https://www.dominionenergy.com" }
    ],

    serviceArea: {
      primary: ["Tysons", "Tysons Corner", "McLean"],
      secondary: ["Vienna", "Falls Church", "Arlington", "Merrifield"]
    },

    heroImage: "/images/heroes/tysons-skyline.jpg",
    galleryTag: "tysons",

    coordinates: { lat: 38.9187, lng: -77.2311 },
    isHQ: false,

    // SEO Content
    seo: {
      metaTitle: "Water Damage Restoration Tysons VA | High-Rise & Commercial | Flood Doctor",
      metaDescription: "Tysons' trusted water damage restoration. 60-minute response. High-rise condos, commercial buildings & luxury residences. 24/7 emergency service. (877) 497-0007.",
      h1: "Water Damage Restoration in Tysons, Virginia",
      heroText: "Tysons' urban core demands rapid, professional water damage response. From luxury high-rise condos to Class A office buildings, Flood Doctor provides 24/7 emergency service with expertise in complex multi-story restoration."
    },

    neighborhoodResponseTimes: [
      { name: "Tysons Corner", responseTime: "40-55 min", tier: "fast" },
      { name: "Tysons Central", responseTime: "40-55 min", tier: "fast" },
      { name: "The Boro", responseTime: "45-60 min", tier: "fast" },
      { name: "Scotts Run", responseTime: "45-60 min", tier: "fast" },
      { name: "McLean Metro", responseTime: "45-60 min", tier: "fast" },
      { name: "The Mile", responseTime: "45-60 min", tier: "fast" }
    ],

    challenges: [
      {
        icon: "Building2",
        title: "High-Rise Condos",
        description: "Tysons' 10-30+ story buildings require specialized vertical response. We coordinate with building management for elevator and access."
      },
      {
        icon: "Briefcase",
        title: "Commercial Properties",
        description: "Office buildings, retail spaces, and restaurants need minimal disruption. We work nights and weekends to keep businesses running."
      },
      {
        icon: "Wind",
        title: "HVAC Complexity",
        description: "Large building HVAC systems can spread water damage quickly. We trace the source and contain the damage."
      },
      {
        icon: "Shield",
        title: "New Construction",
        description: "Tysons' new buildings may have construction defect water issues. We document thoroughly for warranty claims."
      }
    ],

    testimonials: [
      {
        quote: "Water from a unit above flooded our Tysons condo at 2 AM. Flood Doctor's team arrived fast, coordinated with building security, and handled everything professionally. Minimal disruption to our neighbors.",
        author: "Jennifer L.",
        location: "Tysons",
        rating: 5
      },
      {
        quote: "Our office in Tysons Corner had a major water incident. They worked overnight so we could open the next morning. Saved us from lost business and handled insurance seamlessly.",
        author: "Tysons Tech Company",
        location: "Tysons Corner",
        rating: 5
      }
    ],

    faqs: [
      {
        question: "Do you handle high-rise condo water damage in Tysons?",
        answer: "Yes. We're experienced with Tysons' high-rise buildings and coordinate with property management, security, and affected neighbors. We navigate building access requirements 24/7."
      },
      {
        question: "How quickly can you respond to Tysons?",
        answer: "We provide 40-60 minute response throughout Tysons, 24/7. Our crews are familiar with Tysons buildings and can navigate the urban core quickly."
      },
      {
        question: "Can you work with our HOA and property management?",
        answer: "Absolutely. We regularly work with Tysons HOAs and property management companies. We provide documentation, coordinate access, and communicate with all stakeholders."
      },
      {
        question: "What about commercial water damage?",
        answer: "We serve commercial properties throughout Tysons, including offices, retail, and restaurants. We work after-hours to minimize business disruption and can coordinate with your facilities team."
      },
      {
        question: "Do you handle construction defect water issues?",
        answer: "Yes. Tysons' new construction can have water intrusion issues covered by builder warranties. We document thoroughly and work with your builder's warranty claims process."
      }
    ],

    guideData: {
      emergency: {
        responseTimeRange: "40-60 minutes",
        criticalFirstStep: "For high-rise condos, immediately contact building management and check if water is affecting units below—water travels fast through multi-story buildings.",
        localEmergencyTips: [
          "High-rise buildings: Alert concierge/security immediately—they control building access and can notify affected units",
          "Commercial properties: Document for business interruption insurance before cleanup begins",
          "Contact Fairfax Water (703-698-5600) for main line issues"
        ]
      },
      prevention: {
        housingTypes: ["High-rise condos (10-30+ stories)", "Luxury townhomes", "New construction apartments", "Commercial office spaces"],
        seasonalRisks: ["Year-round HVAC condensate issues in large buildings", "Winter pipe freezing in parking garages", "Spring construction defect water intrusion", "Summer cooling system overflow"],
        localPermitInfo: "Fairfax County requires permits for plumbing work. HOA/condo association approval typically required for any work affecting common areas.",
        commonPreventionIssues: ["Building-wide pipe inspection participation", "HVAC condensate line monitoring", "New construction warranty claims before expiration", "Common area water damage prevention"]
      },
      insurance: {
        averageClaimRange: "$10,000-$50,000",
        commonClaimTypes: ["Condo water intrusion from above", "Commercial water damage", "Construction defect water issues", "HVAC-related flooding"],
        localAdjusterTips: [
          "Condo claims: Document source location carefully—liability depends on where water originated",
          "Commercial claims: Track business interruption costs separately from property damage",
          "New construction: Check builder warranty before filing insurance claim"
        ],
        documentationFocus: ["Source location in multi-story building", "Building management communication", "Business interruption costs", "New construction warranty documentation"]
      }
    }
  },

  // ============================================
  // RESTON
  // ============================================
  reston: {
    id: "reston",
    name: "Flood Doctor of Reston",
    city: "Reston",
    state: "VA",
    zipCodes: ["20190", "20191", "20194"],
    phone: `${PHONE_PREFIX}0107`,

    serviceAreaLabel: "Serving Reston, Reston Town Center & South Lakes",
    dispatchNote: "Dispatched from our central facility, with crews experienced in Reston's unique planned community architecture and HOA requirements.",

    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49633.14542754106!2d-77.35!3d38.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b!2sReston%2C%20VA!5e0!3m2!1sen!2sus!4v1234567890",
    googlePlaceId: "",

    manager: {
      name: "Kevin M.",
      title: "Reston Branch Manager",
      bio: "Kevin has worked with Reston Association and local cluster HOAs for over 15 years, understanding the unique architecture and community requirements of this planned community.",
      image: "/images/team/manager-reston.jpg",
      localTie: "South Lakes resident who uses Reston's trail system daily and knows the community intimately."
    },

    team: [],

    localHooks: {
      neighborhoods: ["Reston Town Center", "South Lakes", "North Point", "Lake Anne", "Hunters Woods", "Tall Oaks", "Shadowood", "Reston Metro"],
      landmarks: ["Reston Town Center", "Lake Anne Plaza", "South Lakes", "W&OD Trail", "Reston Metro Stations", "Lake Fairfax Park"],
      commonIssues: [
        "Townhome cluster water intrusion",
        "Lake-adjacent property flooding",
        "HOA-regulated exterior work",
        "Condo building water damage",
        "Basement flooding in wooded areas"
      ],
      architectureNotes: "Planned community with diverse housing: townhome clusters, garden condos, single-family homes, and high-rise apartments. Many properties governed by Reston Association covenants. Lake-adjacent properties have unique water challenges.",
      permitOffice: "Fairfax County / Reston Association"
    },

    partners: [
      { name: "CroppMetcalfe", category: "Plumber", url: "https://www.croppmetcalfe.com", phone: "703-420-5030" },
      { name: "MidAtlantic Contracting", category: "Roofer", url: "https://macontracting.com", phone: "703-492-4663" },
      { name: "Lux Foundation Solutions", category: "Waterproofing", url: "https://www.luxfoundationsolutions.com", phone: "" },
      { name: "Real Property Management Pros", category: "Property Manager", url: "https://www.realpropertymgt.com", phone: "" },
      { name: "Integrated Insurance Solutions", category: "Insurance Agent", url: "https://integratedinsurancesolutions.com", phone: "" },
      { name: "Galaxy Construction", category: "Kitchen & Bath Remodeling", url: "https://galaxy.construction", phone: "703-858-9599" },
      { name: "Ayoub Carpet Service", category: "Carpet Cleaning", url: "https://www.ayoubcarpetservice.com", phone: "" },
      { name: "Prospect Hardwood Flooring", category: "Flooring Installer", url: "https://phwflooring.com", phone: "" }
    ],

    emergencyContacts: [
      { name: "Fairfax Water Authority", phone: "703-698-5600", url: "https://www.fairfaxwater.org" },
      { name: "Reston Association", phone: "703-435-6530", url: "https://www.reston.org" },
      { name: "Dominion Energy Outages", phone: "866-366-4357", url: "https://www.dominionenergy.com" }
    ],

    serviceArea: {
      primary: ["Reston", "Reston Town Center", "South Lakes", "Lake Anne"],
      secondary: ["Herndon", "Vienna", "Great Falls", "Sterling"]
    },

    heroImage: "/images/heroes/reston-townhomes.jpg",
    galleryTag: "reston",

    coordinates: { lat: 38.9586, lng: -77.3570 },
    isHQ: false,

    // SEO Content
    seo: {
      metaTitle: "Water Damage Restoration Reston VA | Townhome & Lake Community Experts | Flood Doctor",
      metaDescription: "Reston's trusted water damage restoration. 60-minute response. Townhome clusters, lake communities & Reston Association compliance. (877) 497-0007.",
      h1: "Water Damage Restoration in Reston, Virginia",
      heroText: "Reston's unique planned community deserves restoration that understands its architecture. From Lake Anne townhomes to South Lakes single-family homes, Flood Doctor provides 24/7 service with expertise in HOA and Reston Association requirements."
    },

    neighborhoodResponseTimes: [
      { name: "Reston Town Center", responseTime: "50-65 min", tier: "fast" },
      { name: "South Lakes", responseTime: "55-70 min", tier: "medium" },
      { name: "North Point", responseTime: "55-70 min", tier: "medium" },
      { name: "Lake Anne", responseTime: "55-70 min", tier: "medium" },
      { name: "Hunters Woods", responseTime: "55-70 min", tier: "medium" },
      { name: "Tall Oaks", responseTime: "60-75 min", tier: "medium" },
      { name: "Reston Metro", responseTime: "50-65 min", tier: "fast" }
    ],

    challenges: [
      {
        icon: "Home",
        title: "Townhome Clusters",
        description: "Reston's distinctive townhome clusters require neighbor coordination when water damage crosses shared walls."
      },
      {
        icon: "Waves",
        title: "Lake-Adjacent Properties",
        description: "Properties near Reston's lakes face unique moisture challenges. We understand waterfront restoration requirements."
      },
      {
        icon: "FileCheck",
        title: "Reston Association",
        description: "We're familiar with Reston Association covenants and provide documentation for exterior work when required."
      },
      {
        icon: "TreePine",
        title: "Wooded Areas",
        description: "Reston's tree cover creates humidity and drainage challenges. We address root causes, not just symptoms."
      }
    ],

    testimonials: [
      {
        quote: "Our South Lakes townhome had water damage that affected the neighbor's unit too. Flood Doctor coordinated with both families, handled our HOA, and restored everything beautifully. True professionals.",
        author: "The Martinez Family",
        location: "South Lakes",
        rating: 5
      },
      {
        quote: "Living near Lake Anne, we worried about humidity damage. When a pipe burst, Flood Doctor responded immediately and dried everything completely. They understood our unique situation.",
        author: "Andrew P.",
        location: "Lake Anne",
        rating: 5
      }
    ],

    faqs: [
      {
        question: "Do you work with Reston Association requirements?",
        answer: "Yes. We're familiar with Reston Association covenants and cluster HOA requirements. We provide documentation when exterior work is needed and coordinate with your HOA."
      },
      {
        question: "How quickly can you respond to Reston?",
        answer: "We provide 50-75 minute response throughout Reston, 24/7. Response times vary based on traffic on Reston Parkway and surrounding roads."
      },
      {
        question: "Can you handle townhome water damage that affects neighbors?",
        answer: "Absolutely. Reston's townhome clusters often require multi-unit coordination. We communicate with all affected parties and document thoroughly for insurance."
      },
      {
        question: "What about lake-adjacent properties?",
        answer: "Properties near Reston's lakes can have unique moisture and drainage challenges. We're experienced with waterfront restoration and address underlying moisture issues."
      },
      {
        question: "Do you serve Reston's condo buildings?",
        answer: "Yes. We serve garden condos, high-rise apartments, and all residential buildings throughout Reston, coordinating with property management as needed."
      }
    ],

    guideData: {
      emergency: {
        responseTimeRange: "50-75 minutes",
        criticalFirstStep: "For townhome clusters, check if water is affecting adjacent units and notify neighbors immediately—shared walls mean shared problems.",
        localEmergencyTips: [
          "Townhome clusters: Alert your cluster HOA and check adjacent units for water spread",
          "Lake-adjacent properties: Water may be entering from multiple sources—document all entry points",
          "Contact Fairfax Water (703-698-5600) for main line issues"
        ]
      },
      prevention: {
        housingTypes: ["Townhome clusters", "Garden condos", "Single-family homes", "Lake-adjacent properties", "New Metro-area developments"],
        seasonalRisks: ["Spring lake-area groundwater rise", "Summer storm drainage overwhelm", "Fall leaf-related gutter clogs", "Winter pipe freezing in exposed areas"],
        localPermitInfo: "Reston Association and individual cluster HOAs have specific requirements. Coordinate with your HOA before exterior work.",
        commonPreventionIssues: ["Townhome shared wall waterproofing", "Lake-adjacent drainage solutions", "HOA-compliant exterior repairs", "Cluster-wide pipe inspection coordination"]
      },
      insurance: {
        averageClaimRange: "$7,000-$30,000",
        commonClaimTypes: ["Townhome cluster water intrusion", "Lake-related moisture damage", "Basement flooding", "Shared wall water damage"],
        localAdjusterTips: [
          "Townhome claims: Document which unit is the source—this affects which policy covers the damage",
          "Reston Association may have requirements for restoration work—check before proceeding",
          "Lake-adjacent properties may have flood zone considerations"
        ],
        documentationFocus: ["Townhome cluster source documentation", "HOA communication records", "Lake-related moisture evidence", "Multi-unit impact photos"]
      }
    }
  },

  // ============================================
  // HERNDON
  // ============================================
  herndon: {
    id: "herndon",
    name: "Flood Doctor of Herndon",
    city: "Herndon",
    state: "VA",
    zipCodes: ["20170", "20171"],
    phone: `${PHONE_PREFIX}0108`,

    serviceAreaLabel: "Serving Herndon, Dulles & Sterling",
    dispatchNote: "Dispatched from our central facility, with crews serving the Dulles corridor and Herndon's mix of residential and commercial properties.",

    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49633.14542754106!2d-77.39!3d38.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b!2sHerndon%2C%20VA!5e0!3m2!1sen!2sus!4v1234567890",
    googlePlaceId: "",

    manager: {
      name: "Chris L.",
      title: "Herndon Branch Manager",
      bio: "Chris serves Herndon and the Dulles corridor, specializing in both residential restoration and data center/commercial emergency response.",
      image: "/images/team/manager-herndon.jpg",
      localTie: "Herndon resident who knows the downtown area and surrounding developments."
    },

    team: [],

    localHooks: {
      neighborhoods: ["Downtown Herndon", "Fox Mill", "Worldgate", "McNair", "Floris", "Franklin Farm"],
      landmarks: ["Herndon Town Green", "W&OD Trail", "Dulles Airport", "Worldgate Centre", "Franklin Farm Village Center"],
      commonIssues: [
        "Townhome water intrusion",
        "Basement flooding in older developments",
        "Commercial data center emergencies",
        "Rental property water damage",
        "Storm drain backups"
      ],
      architectureNotes: "Mix of older 1970s-1990s single-family homes and townhomes with newer developments. Downtown Herndon features historic properties. Dulles corridor has significant commercial and data center facilities.",
      permitOffice: "Town of Herndon / Fairfax County"
    },

    partners: [
      { name: "Freedom Plumbers", category: "Plumber", url: "https://freedomplumbers.com", phone: "703-895-4109" },
      { name: "Impact Roofing", category: "Roofer", url: "https://impactroofing.solutions", phone: "703-329-2959" },
      { name: "NV Waterproofing", category: "Waterproofing", url: "https://www.nvwaterproofing.com", phone: "855-649-7594" },
      { name: "RentSimple", category: "Property Manager", url: "https://rentsimple.com", phone: "" },
      { name: "Integrated Insurance Solutions", category: "Insurance Agent", url: "https://integratedinsurancesolutions.com", phone: "" },
      { name: "Galaxy Construction", category: "Kitchen & Bath Remodeling", url: "https://galaxy.construction", phone: "703-858-9599" },
      { name: "Absolute Carpet Care", category: "Carpet Cleaning", url: "https://www.absolutecarpetcare.com", phone: "" },
      { name: "Flooring America Fairfax", category: "Flooring Installer", url: "https://www.flooringamericastores.com", phone: "703-934-8447" }
    ],

    emergencyContacts: [
      { name: "Fairfax Water Authority", phone: "703-698-5600", url: "https://www.fairfaxwater.org" },
      { name: "Town of Herndon Water", phone: "703-435-6800", url: "https://www.herndon-va.gov" },
      { name: "Dominion Energy Outages", phone: "866-366-4357", url: "https://www.dominionenergy.com" }
    ],

    serviceArea: {
      primary: ["Herndon", "Dulles", "Sterling"],
      secondary: ["Reston", "Ashburn", "Chantilly", "Centreville"]
    },

    heroImage: "/images/heroes/herndon-downtown.jpg",
    galleryTag: "herndon",

    coordinates: { lat: 38.9696, lng: -77.3861 },
    isHQ: false,

    // SEO Content
    seo: {
      metaTitle: "Water Damage Restoration Herndon VA | Dulles Corridor Specialists | Flood Doctor",
      metaDescription: "Herndon's trusted water damage restoration. 60-minute response. Serving Downtown Herndon, Worldgate & Dulles corridor. Residential & commercial. (877) 497-0007.",
      h1: "Water Damage Restoration in Herndon, Virginia",
      heroText: "Herndon combines small-town charm with Dulles corridor growth. Flood Doctor provides 24/7 water damage restoration throughout Herndon—from downtown historic properties to newer developments in Franklin Farm and Fox Mill."
    },

    neighborhoodResponseTimes: [
      { name: "Downtown Herndon", responseTime: "55-70 min", tier: "medium" },
      { name: "Fox Mill", responseTime: "55-70 min", tier: "medium" },
      { name: "Worldgate", responseTime: "55-70 min", tier: "medium" },
      { name: "Franklin Farm", responseTime: "60-75 min", tier: "medium" },
      { name: "McNair", responseTime: "60-75 min", tier: "medium" },
      { name: "Floris", responseTime: "60-75 min", tier: "medium" }
    ],

    challenges: [
      {
        icon: "Home",
        title: "Mixed Housing Stock",
        description: "Herndon has everything from 1970s colonials to new townhomes. We adapt our approach to each property type."
      },
      {
        icon: "Briefcase",
        title: "Commercial Properties",
        description: "The Dulles corridor has significant commercial space. We serve offices and data centers with minimal business disruption."
      },
      {
        icon: "Key",
        title: "Rental Properties",
        description: "Many Herndon properties are rentals. We coordinate between tenants, landlords, and property managers."
      },
      {
        icon: "CloudRain",
        title: "Storm Drainage",
        description: "Rapid development in the area can create drainage issues. We address both symptoms and underlying causes."
      }
    ],

    testimonials: [
      {
        quote: "Our Fox Mill townhome flooded from a washing machine line. Flood Doctor arrived within an hour and handled everything—drying, cleanup, even coordinating with our landlord. Stress-free experience.",
        author: "Rachel & Mark T.",
        location: "Fox Mill",
        rating: 5
      },
      {
        quote: "As a property manager with multiple Herndon rentals, I've used Flood Doctor several times. They're reliable, professional, and keep tenants happy. My go-to for water emergencies.",
        author: "Herndon Property Management",
        location: "Downtown Herndon",
        rating: 5
      }
    ],

    faqs: [
      {
        question: "How quickly can you respond to Herndon?",
        answer: "We provide 55-75 minute response throughout Herndon, 24/7. Response times to Franklin Farm and outlying areas may be slightly longer during peak traffic."
      },
      {
        question: "Do you work with property managers and landlords?",
        answer: "Yes. Many Herndon properties are rentals. We coordinate between tenants, landlords, and property managers, providing documentation and communication that works for everyone."
      },
      {
        question: "Can you handle commercial water damage in the Dulles corridor?",
        answer: "Absolutely. We serve commercial properties throughout Herndon and the Dulles corridor, including offices, retail, and data center facilities."
      },
      {
        question: "What about older Downtown Herndon properties?",
        answer: "Downtown Herndon has charming older properties that require careful restoration. We preserve original features while addressing water damage completely."
      },
      {
        question: "Do you serve the newer developments?",
        answer: "Yes. We work with new construction in Franklin Farm, McNair, and other developments. When water damage involves builder warranties, we document accordingly."
      }
    ],

    guideData: {
      emergency: {
        responseTimeRange: "55-80 minutes",
        criticalFirstStep: "Locate and shut off the main water valve quickly—newer homes often have them in the basement near the water heater or in a utility closet.",
        localEmergencyTips: [
          "New construction: Check your builder warranty before making permanent repairs—many issues are covered",
          "Dulles corridor: Tech facilities have specialized water damage needs—contact us for commercial response",
          "Contact Loudoun Water (571-291-7880) for main line issues"
        ]
      },
      prevention: {
        housingTypes: ["New construction single-family", "Franklin Farm colonials", "Downtown Herndon historic properties", "Townhome communities"],
        seasonalRisks: ["Winter pipe freezing in newer homes with insufficient insulation", "Spring basement seepage from water table rise", "Summer storm basement flooding", "Fall gutter clogs in wooded areas"],
        localPermitInfo: "Town of Herndon and Fairfax County have different permit requirements. Downtown Herndon may have historic overlay considerations.",
        commonPreventionIssues: ["Builder warranty awareness before expiration", "Sump pump installation in newer homes", "Basement waterproofing", "New construction settling adjustments"]
      },
      insurance: {
        averageClaimRange: "$6,000-$25,000",
        commonClaimTypes: ["Basement flooding", "Burst pipes in newer construction", "Water heater failure", "Builder warranty claims"],
        localAdjusterTips: [
          "New construction claims: Check builder warranty first—it may cover repairs without using your insurance",
          "Keep all builder documentation for warranty claims",
          "Document settling cracks that may be allowing water intrusion"
        ],
        documentationFocus: ["Builder warranty documentation", "Construction age and materials", "Settling-related issues", "New home warranty expiration dates"]
      }
    }
  },

  // ============================================
  // ASHBURN
  // ============================================
  ashburn: {
    id: "ashburn",
    name: "Flood Doctor of Ashburn",
    city: "Ashburn",
    state: "VA",
    zipCodes: ["20147", "20148"],
    phone: `${PHONE_PREFIX}0109`,

    serviceAreaLabel: "Serving Ashburn, Broadlands & Brambleton",
    dispatchNote: "Dispatched from our central facility, with crews experienced in Ashburn's new construction communities and HOA-governed developments.",

    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49633.14542754106!2d-77.48!3d39.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b!2sAshburn%2C%20VA!5e0!3m2!1sen!2sus!4v1234567890",
    googlePlaceId: "",

    manager: {
      name: "Steve H.",
      title: "Ashburn Branch Manager",
      bio: "Steve specializes in new construction warranty claims and works extensively with Ashburn's major builders and HOA communities.",
      image: "/images/team/manager-ashburn.jpg",
      localTie: "Broadlands resident who has watched the community grow and understands new construction challenges."
    },

    team: [],

    localHooks: {
      neighborhoods: ["Broadlands", "Brambleton", "One Loudoun", "Ashburn Farm", "Ashbrook", "Belmont Country Club", "Lansdowne"],
      landmarks: ["One Loudoun", "Ashburn Ice House", "Topgolf", "Brambleton Town Center", "Loudoun Station Metro"],
      commonIssues: [
        "New construction defect water intrusion",
        "Builder warranty water damage claims",
        "HOA-regulated drainage issues",
        "Basement flooding from rapid development runoff",
        "Sump pump failures in newer homes"
      ],
      architectureNotes: "Primarily new construction (2000-present) with finished basements and open floor plans. Many homes in active HOA communities with specific restoration and contractor requirements. Growing number of 55+ communities with accessibility considerations.",
      permitOffice: "Loudoun County"
    },

    partners: [
      { name: "Benjamin Franklin Plumbing", category: "Plumber", url: "https://www.benjaminfranklinplumbing.com", phone: "571-488-6097" },
      { name: "A&M Roofing", category: "Roofer", url: "https://amroofingva.com", phone: "" },
      { name: "JES Foundation Repair", category: "Waterproofing", url: "https://www.jeswork.com", phone: "703-379-8888" },
      { name: "Chambers Theory", category: "Property Manager", url: "https://www.chamberstheory.com", phone: "" },
      { name: "Integrated Insurance Solutions", category: "Insurance Agent", url: "https://integratedinsurancesolutions.com", phone: "" },
      { name: "Galaxy Construction", category: "Kitchen & Bath Remodeling", url: "https://galaxy.construction", phone: "703-858-9599" },
      { name: "Absolute Carpet Care", category: "Carpet Cleaning", url: "https://www.absolutecarpetcare.com", phone: "" },
      { name: "Prospect Hardwood Flooring", category: "Flooring Installer", url: "https://phwflooring.com", phone: "" }
    ],

    emergencyContacts: [
      { name: "Loudoun Water", phone: "571-291-7880", url: "https://www.loudounwater.org" },
      { name: "Loudoun County Emergency", phone: "703-777-0637", url: "https://www.loudoun.gov/emergency" },
      { name: "Dominion Energy Outages", phone: "866-366-4357", url: "https://www.dominionenergy.com" }
    ],

    serviceArea: {
      primary: ["Ashburn", "Broadlands", "Brambleton", "One Loudoun"],
      secondary: ["Sterling", "Leesburg", "South Riding", "Dulles"]
    },

    heroImage: "/images/heroes/ashburn-development.jpg",
    galleryTag: "ashburn",

    coordinates: { lat: 39.0437, lng: -77.4875 },
    isHQ: false,

    // SEO Content
    seo: {
      metaTitle: "Water Damage Restoration Ashburn VA | New Construction Specialists | Flood Doctor",
      metaDescription: "Ashburn's trusted water damage restoration. 60-minute response. Serving Broadlands, Brambleton & One Loudoun. Builder warranty & HOA experts. (877) 497-0007.",
      h1: "Water Damage Restoration in Ashburn, Virginia",
      heroText: "Ashburn's growing communities deserve restoration that understands new construction. From Broadlands to Brambleton, Flood Doctor provides 24/7 service with expertise in HOA requirements, builder warranties, and modern home systems."
    },

    neighborhoodResponseTimes: [
      { name: "Broadlands", responseTime: "60-75 min", tier: "medium" },
      { name: "Brambleton", responseTime: "65-80 min", tier: "medium" },
      { name: "One Loudoun", responseTime: "60-75 min", tier: "medium" },
      { name: "Ashburn Farm", responseTime: "60-75 min", tier: "medium" },
      { name: "Belmont Country Club", responseTime: "65-80 min", tier: "medium" },
      { name: "Lansdowne", responseTime: "60-75 min", tier: "medium" }
    ],

    challenges: [
      {
        icon: "HardHat",
        title: "New Construction",
        description: "Ashburn's new homes may have construction defects. We document thoroughly for builder warranty claims."
      },
      {
        icon: "FileCheck",
        title: "HOA Requirements",
        description: "Most Ashburn communities have active HOAs. We understand their requirements and provide proper documentation."
      },
      {
        icon: "Zap",
        title: "Sump Pump Failures",
        description: "New homes often have undersized sump systems. We respond fast and recommend upgrades where needed."
      },
      {
        icon: "CloudRain",
        title: "Development Runoff",
        description: "Ongoing construction in Ashburn can change drainage patterns. We address both immediate damage and long-term solutions."
      }
    ],

    testimonials: [
      {
        quote: "Our new Broadlands home had water in the basement just months after moving in. Flood Doctor documented everything for our builder warranty claim and dried the basement perfectly. They knew exactly how to handle it.",
        author: "The Thompson Family",
        location: "Broadlands",
        rating: 5
      },
      {
        quote: "When our Brambleton basement flooded, Flood Doctor worked with our HOA on the required documentation. Fast, professional, and they knew Loudoun County requirements. Highly recommend.",
        author: "Kevin & Lisa M.",
        location: "Brambleton",
        rating: 5
      }
    ],

    faqs: [
      {
        question: "Do you work with builder warranties in Ashburn?",
        answer: "Yes. Many Ashburn homes are under builder warranty. We document water damage thoroughly to support warranty claims and can work directly with your builder's warranty team."
      },
      {
        question: "How quickly can you respond to Ashburn?",
        answer: "We provide 60-80 minute response throughout Ashburn, 24/7. Ashburn's distance from our central dispatch means slightly longer response times, but we prioritize getting crews there fast."
      },
      {
        question: "Can you work with Ashburn HOAs?",
        answer: "Absolutely. Most Ashburn communities have active HOAs. We're familiar with HOA requirements for exterior work and provide documentation they need."
      },
      {
        question: "What about new construction water issues?",
        answer: "New construction in Ashburn can have water intrusion from various causes—drainage issues, incomplete waterproofing, or sump system problems. We identify the source and document for builder claims when applicable."
      },
      {
        question: "Do you serve the 55+ communities?",
        answer: "Yes. Ashburn's 55+ communities have specific needs, including accessibility considerations. We work respectfully with residents and can coordinate with community management."
      }
    ],

    guideData: {
      emergency: {
        responseTimeRange: "55-80 minutes",
        criticalFirstStep: "Locate the main water shutoff—in newer Ashburn homes, it's typically in the basement utility area near the water heater.",
        localEmergencyTips: [
          "New construction: Note if water is coming through foundation cracks—this may be a builder warranty issue",
          "Check your builder warranty status before making permanent repairs",
          "Contact Loudoun Water (571-291-7880) for main line issues"
        ]
      },
      prevention: {
        housingTypes: ["New construction colonials", "Townhome communities (Broadlands, Brambleton)", "55+ active adult homes", "Single-family in One Loudoun"],
        seasonalRisks: ["Winter pipe freezing in newer homes with improper insulation", "Spring basement seepage during wet season", "Summer storm flooding from rapid development runoff", "Fall gutter overwhelm in newly landscaped areas"],
        localPermitInfo: "Loudoun County requires permits for plumbing work and structural modifications. HOA approval is typically required in Ashburn communities.",
        commonPreventionIssues: ["Builder warranty claims before expiration (1-10 years)", "Sump pump installation in basement homes", "Drainage issues from new construction settling", "HOA-compliant exterior waterproofing"]
      },
      insurance: {
        averageClaimRange: "$6,000-$25,000",
        commonClaimTypes: ["Basement flooding in new construction", "Builder warranty-related water damage", "Sump pump failure", "New home settling water intrusion"],
        localAdjusterTips: [
          "New construction claims: Check builder warranty first—many water issues are covered for 1-10 years",
          "Document any settling cracks or construction defects that may be causing water entry",
          "Loudoun County adjusters are experienced with new construction claims"
        ],
        documentationFocus: ["Builder warranty documentation", "Construction date and warranty periods", "Settling crack measurements", "HOA communication records"]
      }
    }
  },

  // ============================================
  // SPRINGFIELD
  // ============================================
  springfield: {
    id: "springfield",
    name: "Flood Doctor of Springfield",
    city: "Springfield",
    state: "VA",
    zipCodes: ["22150", "22151", "22152", "22153"],
    phone: `${PHONE_PREFIX}0110`,

    serviceAreaLabel: "Serving Springfield, West Springfield & Franconia",
    dispatchNote: "Dispatched from our central facility, with rapid response throughout Springfield and the I-95 corridor communities.",

    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49633.14542754106!2d-77.18!3d38.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b!2sSpringfield%2C%20VA!5e0!3m2!1sen!2sus!4v1234567890",
    googlePlaceId: "",

    manager: {
      name: "Tony G.",
      title: "Springfield Branch Manager",
      bio: "Tony has served Springfield and the I-95 corridor for over a decade, specializing in residential restoration and military family relocations from nearby Fort Belvoir.",
      image: "/images/team/manager-springfield.jpg",
      localTie: "West Springfield resident and veteran who understands military family housing needs."
    },

    team: [],

    localHooks: {
      neighborhoods: ["West Springfield", "Springfield", "Franconia", "Kingstowne", "Newington", "Fort Hunt", "Saratoga", "Rolling Valley"],
      landmarks: ["Springfield Town Center", "Lake Accotink", "West Springfield High School", "Franconia-Springfield Metro", "Fort Belvoir", "Springfield Plaza"],
      commonIssues: [
        "1960s-70s split-level basement flooding",
        "Sewer backups in older infrastructure",
        "Lake Accotink area flooding",
        "Military housing water damage claims",
        "Townhome shared wall water migration"
      ],
      architectureNotes: "Predominantly 1960s-1980s split-levels, colonials, and ramblers. Many finished basements with older waterproofing. Fort Belvoir proximity means military family tenants. Growing number of townhome communities near Springfield Metro.",
      permitOffice: "Fairfax County"
    },

    partners: [
      { name: "Freedom Plumbers", category: "Plumber", url: "https://freedomplumbers.com", phone: "703-895-4109" },
      { name: "MidAtlantic Contracting", category: "Roofer", url: "https://macontracting.com", phone: "703-492-4663" },
      { name: "NV Waterproofing", category: "Waterproofing", url: "https://www.nvwaterproofing.com", phone: "855-649-7594" },
      { name: "WJD Management", category: "Property Manager", url: "https://www.wjdpm.com", phone: "" },
      { name: "Frank D. Spicer Insurance", category: "Insurance Agent", url: "https://www.fdspicerinsurance.com", phone: "" },
      { name: "Galaxy Construction", category: "Kitchen & Bath Remodeling", url: "https://galaxy.construction", phone: "703-858-9599" },
      { name: "Ayoub Carpet Service", category: "Carpet Cleaning", url: "https://www.ayoubcarpetservice.com", phone: "" },
      { name: "Flooring America Fairfax", category: "Flooring Installer", url: "https://www.flooringamericastores.com", phone: "703-934-8447" }
    ],

    emergencyContacts: [
      { name: "Fairfax Water Authority", phone: "703-698-5600", url: "https://www.fairfaxwater.org" },
      { name: "Fairfax County Stormwater", phone: "703-324-5500", url: "https://www.fairfaxcounty.gov/publicworks/stormwater" },
      { name: "Dominion Energy Outages", phone: "866-366-4357", url: "https://www.dominionenergy.com" }
    ],

    serviceArea: {
      primary: ["Springfield", "West Springfield", "Franconia", "Kingstowne"],
      secondary: ["Burke", "Annandale", "Lorton", "Alexandria"]
    },

    heroImage: "/images/heroes/springfield-residential.jpg",
    galleryTag: "springfield",

    coordinates: { lat: 38.7893, lng: -77.1872 },
    isHQ: false,

    // SEO Content
    seo: {
      metaTitle: "Water Damage Restoration Springfield VA | I-95 Corridor Specialists | Flood Doctor",
      metaDescription: "Springfield's trusted water damage restoration. 60-minute response. Serving West Springfield, Franconia, Kingstowne & Fort Belvoir area. (877) 497-0007.",
      h1: "Water Damage Restoration in Springfield, Virginia",
      heroText: "Springfield families have relied on Flood Doctor for years. From West Springfield split-levels to Kingstowne townhomes, we provide 24/7 emergency service with expertise in the I-95 corridor's diverse housing stock."
    },

    neighborhoodResponseTimes: [
      { name: "Springfield", responseTime: "50-65 min", tier: "fast" },
      { name: "West Springfield", responseTime: "50-65 min", tier: "fast" },
      { name: "Franconia", responseTime: "55-70 min", tier: "medium" },
      { name: "Kingstowne", responseTime: "55-70 min", tier: "medium" },
      { name: "Newington", responseTime: "55-70 min", tier: "medium" },
      { name: "Rolling Valley", responseTime: "50-65 min", tier: "fast" },
      { name: "Saratoga", responseTime: "55-70 min", tier: "medium" }
    ],

    challenges: [
      {
        icon: "Home",
        title: "Split-Level Homes",
        description: "Springfield's 1960s-80s split-levels have unique water flow patterns. We understand how to dry these floor plans effectively."
      },
      {
        icon: "Droplets",
        title: "Older Sewers",
        description: "Some Springfield areas have aging sewer infrastructure. We're certified for Category 3 sewage contamination cleanup."
      },
      {
        icon: "Shield",
        title: "Military Families",
        description: "Fort Belvoir proximity means many military families. We work with landlords and provide documentation for PCS-related issues."
      },
      {
        icon: "Users",
        title: "Townhome Communities",
        description: "Kingstowne and newer communities have shared walls. We coordinate multi-unit response when water damage spreads."
      }
    ],

    testimonials: [
      {
        quote: "Our West Springfield split-level had a basement flood from a sump pump failure. Flood Doctor had the water out and drying equipment running within an hour. They saved our rec room carpet and drywall.",
        author: "Tom & Angela H.",
        location: "West Springfield",
        rating: 5
      },
      {
        quote: "As a military family renting near Fort Belvoir, we needed fast help when a pipe burst. Flood Doctor coordinated with our landlord and handled everything professionally. Made a stressful situation manageable.",
        author: "The Rodriguez Family",
        location: "Kingstowne",
        rating: 5
      }
    ],

    faqs: [
      {
        question: "How quickly can you respond to Springfield?",
        answer: "We provide 50-70 minute response throughout Springfield, 24/7. Our crews know the Springfield area well and can navigate I-95 corridor traffic effectively."
      },
      {
        question: "Do you have experience with split-level homes?",
        answer: "Yes. Springfield has many split-level homes from the 1960s-80s. We understand how water travels through these floor plans and dry them efficiently."
      },
      {
        question: "Can you help with sewage backups?",
        answer: "Absolutely. Some Springfield areas have older sewer infrastructure that can back up during heavy rain. We're IICRC certified for Category 3 contaminated water cleanup."
      },
      {
        question: "Do you work with military families and landlords?",
        answer: "Yes. Fort Belvoir's proximity means we often work with military families and their landlords. We coordinate with all parties and provide documentation needed for various situations."
      },
      {
        question: "What about townhome water damage in Kingstowne?",
        answer: "Kingstowne and other townhome communities often need multi-unit coordination. We communicate with affected neighbors and HOAs while restoring your property."
      }
    ],

    guideData: {
      emergency: {
        responseTimeRange: "50-70 minutes",
        criticalFirstStep: "For split-level homes, check the lower level and basement—water flows downward through the stairwell quickly.",
        localEmergencyTips: [
          "Split-level homes: Water often pools in the lower-level family room—check all levels",
          "Sewage backup: Do NOT enter standing water if you smell sewage—it's contaminated (Category 3)",
          "Contact Fairfax Water (703-698-5600) for main line issues"
        ]
      },
      prevention: {
        housingTypes: ["1960s-80s split-levels", "West Springfield colonials", "Kingstowne townhomes", "Franconia single-family homes"],
        seasonalRisks: ["Summer storm sump pump overload", "Winter pipe freezing in older homes", "Spring basement seepage", "Fall leaf-related gutter clogs"],
        localPermitInfo: "Fairfax County requires permits for plumbing work and structural modifications.",
        commonPreventionIssues: ["Sump pump maintenance and backup batteries", "Older sewer line inspection", "Basement waterproofing", "Split-level drainage improvements"]
      },
      insurance: {
        averageClaimRange: "$5,000-$20,000",
        commonClaimTypes: ["Sump pump failure", "Sewage backup", "Burst pipes in older homes", "Basement flooding"],
        localAdjusterTips: [
          "Sewage backup claims require specific endorsement—check your policy coverage",
          "USAA members (common near Fort Belvoir): Use the USAA app for fastest claim filing",
          "Document all damage before mitigation begins for insurance purposes"
        ],
        documentationFocus: ["Sump pump failure evidence", "Sewage contamination documentation", "Split-level water flow patterns", "Landlord/tenant communication (military rentals)"]
      }
    }
  },

  // ============================================
  // FALLS CHURCH
  // ============================================
  fallschurch: {
    id: "fallschurch",
    name: "Flood Doctor of Falls Church",
    city: "Falls Church",
    state: "VA",
    zipCodes: ["22041", "22042", "22043", "22044", "22046"],
    phone: `${PHONE_PREFIX}0111`,

    serviceAreaLabel: "Serving Falls Church, Seven Corners & Baileys Crossroads",
    dispatchNote: "Rapid response from our nearby dispatch center, with the fastest response times in our service area.",

    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49633.14542754106!2d-77.17!3d38.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b!2sFalls%20Church%2C%20VA!5e0!3m2!1sen!2sus!4v1234567890",
    googlePlaceId: "",

    manager: {
      name: "Brian H.",
      title: "Falls Church Branch Manager",
      bio: "Brian oversees our flagship Falls Church operations and leads training for new restoration technicians. Master Water Restorer and Fire & Smoke Restorer certified.",
      image: "/images/team/manager-fallschurch.jpg",
      localTie: "Falls Church City resident who serves on the local Chamber of Commerce."
    },

    team: [],

    localHooks: {
      neighborhoods: ["Falls Church City", "Seven Corners", "Baileys Crossroads", "Lake Barcroft", "Pimmit Hills", "Jefferson", "Westover", "East Falls Church"],
      landmarks: ["State Theatre", "Eden Center", "Seven Corners Shopping Center", "Lake Barcroft", "Falls Church Farmers Market", "East Falls Church Metro"],
      commonIssues: [
        "Historic home foundation seepage",
        "1950s-60s home plumbing failures",
        "Apartment complex water damage",
        "Lake Barcroft area basement flooding",
        "Older sewer lateral collapses"
      ],
      architectureNotes: "Mix of charming 1920s-1960s bungalows and colonials in the City, with mid-century ramblers and apartment complexes in the broader area. Lake Barcroft features lakefront homes with unique water challenges. Eden Center area has commercial and residential mix.",
      permitOffice: "City of Falls Church / Fairfax County"
    },

    partners: [
      { name: "CroppMetcalfe", category: "Plumber", url: "https://www.croppmetcalfe.com", phone: "703-420-5030" },
      { name: "Impact Roofing", category: "Roofer", url: "https://impactroofing.solutions", phone: "703-329-2959" },
      { name: "Lux Foundation Solutions", category: "Waterproofing", url: "https://www.luxfoundationsolutions.com", phone: "" },
      { name: "Richey Property Management", category: "Property Manager", url: "https://www.richeypm.com", phone: "703-721-4453" },
      { name: "Bridge First Insurance", category: "Insurance Agent", url: "https://bridgefirstinsurance.com", phone: "" },
      { name: "Galaxy Construction", category: "Kitchen & Bath Remodeling", url: "https://galaxy.construction", phone: "703-858-9599" },
      { name: "Ayoub Carpet Service", category: "Carpet Cleaning", url: "https://www.ayoubcarpetservice.com", phone: "" },
      { name: "Flooring America Fairfax", category: "Flooring Installer", url: "https://www.flooringamericastores.com", phone: "703-934-8447" }
    ],

    emergencyContacts: [
      { name: "Falls Church City Water", phone: "703-248-5071", url: "https://www.fallschurchva.gov/water" },
      { name: "Fairfax Water Authority", phone: "703-698-5600", url: "https://www.fairfaxwater.org" },
      { name: "Dominion Energy Outages", phone: "866-366-4357", url: "https://www.dominionenergy.com" }
    ],

    serviceArea: {
      primary: ["Falls Church", "Falls Church City", "Seven Corners", "Baileys Crossroads"],
      secondary: ["Arlington", "McLean", "Annandale", "Tysons"]
    },

    heroImage: "/images/heroes/fallschurch-charming.jpg",
    galleryTag: "fallschurch",

    coordinates: { lat: 38.8823, lng: -77.1711 },
    isHQ: false,

    // SEO Content
    seo: {
      metaTitle: "Water Damage Restoration Falls Church VA | Fastest Response | Flood Doctor",
      metaDescription: "Falls Church's trusted water damage restoration. Our fastest response area—45-60 minutes. Serving Falls Church City, Seven Corners & Lake Barcroft. (877) 497-0007.",
      h1: "Water Damage Restoration in Falls Church, Virginia",
      heroText: "Falls Church is our home base—and that means the fastest response times in our service area. From charming Falls Church City bungalows to Lake Barcroft lakefront homes, we provide 24/7 emergency service with unmatched local expertise."
    },

    neighborhoodResponseTimes: [
      { name: "Falls Church City", responseTime: "40-55 min", tier: "fast" },
      { name: "Seven Corners", responseTime: "40-55 min", tier: "fast" },
      { name: "Baileys Crossroads", responseTime: "45-60 min", tier: "fast" },
      { name: "Lake Barcroft", responseTime: "45-60 min", tier: "fast" },
      { name: "Pimmit Hills", responseTime: "45-60 min", tier: "fast" },
      { name: "East Falls Church", responseTime: "45-60 min", tier: "fast" },
      { name: "Jefferson", responseTime: "45-60 min", tier: "fast" }
    ],

    challenges: [
      {
        icon: "Landmark",
        title: "Historic Bungalows",
        description: "Falls Church City's 1920s-60s homes have character worth preserving. We use careful techniques to protect original features."
      },
      {
        icon: "Waves",
        title: "Lake Barcroft",
        description: "Lakefront properties face unique moisture challenges. We understand waterfront restoration requirements."
      },
      {
        icon: "Building2",
        title: "Apartment Complexes",
        description: "Seven Corners and Baileys Crossroads have many apartments. We coordinate with property management for multi-unit response."
      },
      {
        icon: "Wrench",
        title: "Aging Plumbing",
        description: "Older Falls Church homes may have original plumbing. When pipes fail, we respond fast to minimize damage."
      }
    ],

    testimonials: [
      {
        quote: "Our Falls Church City bungalow had a major pipe burst. Flood Doctor arrived in under 45 minutes and saved our original hardwood floors. They clearly know this area and these older homes.",
        author: "Rebecca & John S.",
        location: "Falls Church City",
        rating: 5
      },
      {
        quote: "Living on Lake Barcroft, we worried about moisture issues. When we had a basement leak, Flood Doctor responded immediately and addressed the underlying humidity issues. They understood our unique situation.",
        author: "The Williams Family",
        location: "Lake Barcroft",
        rating: 5
      }
    ],

    faqs: [
      {
        question: "How fast can you respond to Falls Church?",
        answer: "Falls Church is our home base—we provide 40-60 minute response throughout Falls Church, often faster. It's the quickest response area in our service territory."
      },
      {
        question: "Do you have experience with older Falls Church homes?",
        answer: "Absolutely. Falls Church City's 1920s-60s homes have original plaster, hardwood, and plumbing that require specialized care. We preserve these features rather than replace them."
      },
      {
        question: "What about Lake Barcroft properties?",
        answer: "Lake Barcroft properties face unique moisture and waterfront challenges. We're experienced with lakefront restoration and address both immediate damage and underlying humidity issues."
      },
      {
        question: "Can you help with apartment water damage?",
        answer: "Yes. Seven Corners and Baileys Crossroads have many apartment complexes. We coordinate with property management and work efficiently in multi-unit buildings."
      },
      {
        question: "Do you serve Falls Church commercial properties?",
        answer: "Yes. We serve businesses throughout Falls Church, including the Seven Corners and Eden Center areas. We work after-hours when needed to minimize disruption."
      }
    ],

    guideData: {
      emergency: {
        responseTimeRange: "40-60 minutes",
        criticalFirstStep: "Shut off the main water valve immediately—Falls Church is our home base, so we can arrive quickly to contain damage.",
        localEmergencyTips: [
          "Falls Church City: Many older homes have shutoffs in crawl spaces or basements—know your location",
          "Lake Barcroft: Check for multiple water sources including lake-related moisture intrusion",
          "Contact Falls Church Water (703-248-5071) or Fairfax Water (703-698-5600) for main line issues"
        ]
      },
      prevention: {
        housingTypes: ["1920s-60s bungalows and colonials", "Lake Barcroft waterfront homes", "Post-war split-levels", "Seven Corners apartments"],
        seasonalRisks: ["Winter pipe freezing in older uninsulated homes", "Spring lake-level rise affecting Barcroft properties", "Summer storm basement flooding", "Fall aging pipe failures"],
        localPermitInfo: "Falls Church City has its own permit requirements separate from Fairfax County. Check which jurisdiction your property is in.",
        commonPreventionIssues: ["Aging plumbing replacement", "Lake-adjacent moisture control", "Basement waterproofing in older homes", "Crawl space encapsulation"]
      },
      insurance: {
        averageClaimRange: "$7,000-$35,000",
        commonClaimTypes: ["Burst pipes in older homes", "Lake-related moisture damage", "Basement flooding", "Apartment water intrusion"],
        localAdjusterTips: [
          "Falls Church City's older homes may have materials that exceed standard pricing—document thoroughly",
          "Lake Barcroft properties: Confirm flood zone status and coverage requirements",
          "Local adjusters know Falls Church well—request one familiar with older construction"
        ],
        documentationFocus: ["Older material specifications", "Lake-related damage evidence", "Pipe age and condition", "Historic property considerations"]
      }
    }
  },

  // ============================================
  // GREAT FALLS
  // ============================================
  greatfalls: {
    id: "greatfalls",
    name: "Flood Doctor of Great Falls",
    city: "Great Falls",
    state: "VA",
    zipCodes: ["22066"],
    phone: `${PHONE_PREFIX}0112`,

    serviceAreaLabel: "Serving Great Falls, Forestville & Hickory Farms",
    dispatchNote: "Dispatched from our central facility, with crews trained in estate property restoration and high-value asset protection.",

    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49633.14542754106!2d-77.29!3d39.00!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b!2sGreat%20Falls%2C%20VA!5e0!3m2!1sen!2sus!4v1234567890",
    googlePlaceId: "",

    manager: {
      name: "William R.",
      title: "Great Falls Branch Manager",
      bio: "William specializes in estate property restoration and works closely with high-net-worth clients to protect art, antiques, and custom finishes during water emergencies.",
      image: "/images/team/manager-greatfalls.jpg",
      localTie: "Great Falls resident who understands the unique needs of estate property owners and the importance of discretion."
    },

    team: [],

    localHooks: {
      neighborhoods: ["Great Falls Village", "Forestville", "Hickory Farms", "Seneca Estates", "Riverbend", "Lexington Estates", "Springvale"],
      landmarks: ["Great Falls Park", "Riverbend Park", "Great Falls Village Centre", "Old Brogue", "Potomac River", "Georgetown Pike"],
      commonIssues: [
        "Estate home finished basement flooding",
        "Pool house and outdoor kitchen water damage",
        "Private well and septic system failures",
        "Wine cellar and art collection protection",
        "Horse barn and equestrian facility flooding"
      ],
      architectureNotes: "Exclusive estate properties on 1-5+ acre lots, ranging from 5,000 to 20,000+ sq ft. Custom construction with high-end finishes, home theaters, wine cellars, and art collections. Many properties on private well and septic. Equestrian properties with barns and outbuildings.",
      permitOffice: "Fairfax County"
    },

    partners: [
      { name: "CroppMetcalfe", category: "Plumber", url: "https://www.croppmetcalfe.com", phone: "703-420-5030" },
      { name: "A&M Roofing", category: "Roofer", url: "https://amroofingva.com", phone: "" },
      { name: "JES Foundation Repair", category: "Waterproofing", url: "https://www.jeswork.com", phone: "703-379-8888" },
      { name: "Peabody Residential", category: "Property Manager", url: "https://peabodyresidential.com", phone: "" },
      { name: "Frank D. Spicer Insurance", category: "Insurance Agent", url: "https://www.fdspicerinsurance.com", phone: "" },
      { name: "Galaxy Construction", category: "Kitchen & Bath Remodeling", url: "https://galaxy.construction", phone: "703-858-9599" },
      { name: "Absolute Carpet Care", category: "Carpet Cleaning", url: "https://www.absolutecarpetcare.com", phone: "" },
      { name: "Prospect Hardwood Flooring", category: "Flooring Installer", url: "https://phwflooring.com", phone: "" }
    ],

    emergencyContacts: [
      { name: "Fairfax Water Authority", phone: "703-698-5600", url: "https://www.fairfaxwater.org" },
      { name: "Fairfax County Health Dept (Well/Septic)", phone: "703-246-2201", url: "https://www.fairfaxcounty.gov/health" },
      { name: "Dominion Energy Outages", phone: "866-366-4357", url: "https://www.dominionenergy.com" }
    ],

    serviceArea: {
      primary: ["Great Falls", "Great Falls Village", "Forestville"],
      secondary: ["McLean", "Reston", "Herndon", "Potomac MD"]
    },

    heroImage: "/images/heroes/greatfalls-estate.jpg",
    galleryTag: "greatfalls",

    coordinates: { lat: 39.0001, lng: -77.2883 },
    isHQ: false,

    // SEO Content
    seo: {
      metaTitle: "Water Damage Restoration Great Falls VA | Estate Property Specialists | Flood Doctor",
      metaDescription: "Great Falls' trusted water damage restoration. 60-minute response. Estate homes, wine cellars, custom finishes. Discretion & premium service guaranteed. (877) 497-0007.",
      h1: "Water Damage Restoration in Great Falls, Virginia",
      heroText: "Great Falls estates represent extraordinary investments—and they deserve extraordinary care. Flood Doctor provides premium water damage restoration for Great Falls' finest homes, with expertise in high-value assets, custom materials, and the discretion our clients expect."
    },

    neighborhoodResponseTimes: [
      { name: "Great Falls Village", responseTime: "55-70 min", tier: "medium" },
      { name: "Forestville", responseTime: "60-75 min", tier: "medium" },
      { name: "Hickory Farms", responseTime: "60-75 min", tier: "medium" },
      { name: "Seneca Estates", responseTime: "65-80 min", tier: "medium" },
      { name: "Riverbend", responseTime: "60-75 min", tier: "medium" },
      { name: "Lexington Estates", responseTime: "65-80 min", tier: "medium" }
    ],

    challenges: [
      {
        icon: "Castle",
        title: "Estate Properties",
        description: "Great Falls estates range from 5,000 to 20,000+ sq ft. We have the equipment and expertise for properties of any scale."
      },
      {
        icon: "Wine",
        title: "Wine Cellars",
        description: "Many Great Falls homes feature temperature-controlled wine cellars. We protect collections while managing humidity."
      },
      {
        icon: "Palette",
        title: "Custom Materials",
        description: "Italian marble, hand-scraped hardwood, custom millwork—we understand irreplaceable finishes and treat them accordingly."
      },
      {
        icon: "Droplet",
        title: "Well & Septic",
        description: "Many Great Falls properties use private well and septic. We understand these systems and their unique water damage implications."
      }
    ],

    testimonials: [
      {
        quote: "Our Great Falls estate has a 2,000-bottle wine cellar. When we had water intrusion nearby, Flood Doctor responded immediately and protected our collection. They understood what was at stake and handled it with complete professionalism.",
        author: "Anonymous",
        location: "Great Falls",
        rating: 5
      },
      {
        quote: "We've used Flood Doctor twice for our Forestville property. Large home, custom finishes, high expectations. They've exceeded them both times. Discreet, professional, thorough.",
        author: "The J. Family",
        location: "Forestville",
        rating: 5
      }
    ],

    faqs: [
      {
        question: "Do you specialize in estate properties?",
        answer: "Yes. Great Falls' estate properties require specialized equipment, expertise, and discretion. We've restored numerous homes in the 5,000-20,000+ sq ft range with custom finishes and high-value assets."
      },
      {
        question: "How quickly can you respond to Great Falls?",
        answer: "We provide 55-80 minute response throughout Great Falls, 24/7. Great Falls' rural roads and private driveways can affect arrival times, but we prioritize fast response."
      },
      {
        question: "Can you protect wine cellars and art collections?",
        answer: "Absolutely. Many Great Falls homes have temperature-controlled wine cellars and art collections. We understand humidity control and take special care to protect these valuable assets."
      },
      {
        question: "What about properties on well and septic?",
        answer: "Many Great Falls properties use private well and septic systems. We understand these systems and can coordinate with specialists when water damage involves well or septic components."
      },
      {
        question: "Do you maintain discretion?",
        answer: "Yes. We understand that Great Falls residents value their privacy. We maintain complete discretion, use unmarked vehicles when requested, and protect client confidentiality."
      }
    ],

    guideData: {
      emergency: {
        responseTimeRange: "55-80 minutes",
        criticalFirstStep: "For estate homes, check the basement, wine cellar, and any separate structures (pool house, guest cottage) immediately—water travels to lowest points.",
        localEmergencyTips: [
          "Estate properties often have multiple water shutoffs—main house, pool house, guest cottage, barn",
          "Well water properties: Shut off the well pump if water is coming from a burst supply line",
          "Contact Fairfax Water (703-698-5600) for public water main issues"
        ]
      },
      prevention: {
        housingTypes: ["Large estates (5,000-20,000+ sq ft)", "Custom contemporary homes", "Equestrian properties", "Waterfront on Potomac"],
        seasonalRisks: ["Winter pipe freezing in unoccupied wings or outbuildings", "Spring well pump failures from heavy use", "Summer storm damage from tree coverage", "Fall gutter overflow on large roof areas"],
        localPermitInfo: "Fairfax County requires permits for structural and plumbing work. Properties may have special environmental considerations near the Potomac.",
        commonPreventionIssues: ["Wine cellar humidity monitoring", "Multiple structure water supply maintenance", "Well and septic system inspections", "Large basement waterproofing"]
      },
      insurance: {
        averageClaimRange: "$20,000-$100,000+",
        commonClaimTypes: ["Burst pipes in unoccupied sections", "Wine cellar humidity damage", "Pool house water intrusion", "Well system failures"],
        localAdjusterTips: [
          "Great Falls claims often require specialty adjusters familiar with high-value properties",
          "Document custom finishes with manufacturer specs—standard pricing won't apply",
          "Request a contents specialist if you have art, wine, or collectibles exceeding standard limits"
        ],
        documentationFocus: ["Custom material specifications", "Wine collection inventory", "Art and collectible appraisals", "Multiple structure damage assessment"]
      }
    }
  },

  // ============================================
  // LORTON
  // ============================================
  lorton: {
    id: "lorton",
    name: "Flood Doctor of Lorton",
    city: "Lorton",
    state: "VA",
    zipCodes: ["22079"],
    phone: `${PHONE_PREFIX}0113`,

    serviceAreaLabel: "Serving Lorton, Mason Neck & Laurel Hill",
    dispatchNote: "Dispatched from our central facility, with crews covering the Route 1 corridor and Occoquan River communities.",

    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49633.14542754106!2d-77.22!3d38.70!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b!2sLorton%2C%20VA!5e0!3m2!1sen!2sus!4v1234567890",
    googlePlaceId: "",

    manager: {
      name: "Mark S.",
      title: "Lorton Branch Manager",
      bio: "Mark serves the growing Lorton community and specializes in new development restoration as well as waterfront property challenges along the Occoquan.",
      image: "/images/team/manager-lorton.jpg",
      localTie: "Laurel Hill resident who moved to the area when the Laurel Hill development opened and has watched the community grow."
    },

    team: [],

    localHooks: {
      neighborhoods: ["Laurel Hill", "Mason Neck", "Occoquan", "Newington", "South County", "Lorton Town Center", "Gunston", "Pohick"],
      landmarks: ["Workhouse Arts Center", "Mason Neck State Park", "Occoquan Bay NWR", "Lorton VRE Station", "Laurel Hill Golf Course", "Pohick Bay Regional Park"],
      commonIssues: [
        "New development drainage issues",
        "Occoquan River area flooding",
        "Sump pump failures in newer homes",
        "Waterfront property water intrusion",
        "Crawlspace moisture in wooded areas"
      ],
      architectureNotes: "Mix of new construction in Laurel Hill and surrounding developments (2005-present) with older properties near Occoquan. Waterfront properties along Mason Neck face unique tidal and flood zone challenges. Many wooded lots with crawlspace moisture issues.",
      permitOffice: "Fairfax County"
    },

    partners: [
      { name: "Freedom Plumbers", category: "Plumber", url: "https://freedomplumbers.com", phone: "703-895-4109" },
      { name: "MidAtlantic Contracting", category: "Roofer", url: "https://macontracting.com", phone: "703-492-4663" },
      { name: "NV Waterproofing", category: "Waterproofing", url: "https://www.nvwaterproofing.com", phone: "855-649-7594" },
      { name: "WJD Management", category: "Property Manager", url: "https://www.wjdpm.com", phone: "" },
      { name: "Advantage II Insurance", category: "Insurance Agent", url: "https://www.advantage2ins.com", phone: "" },
      { name: "Galaxy Construction", category: "Kitchen & Bath Remodeling", url: "https://galaxy.construction", phone: "703-858-9599" },
      { name: "Ayoub Carpet Service", category: "Carpet Cleaning", url: "https://www.ayoubcarpetservice.com", phone: "" },
      { name: "Flooring America Fairfax", category: "Flooring Installer", url: "https://www.flooringamericastores.com", phone: "703-934-8447" }
    ],

    emergencyContacts: [
      { name: "Fairfax Water Authority", phone: "703-698-5600", url: "https://www.fairfaxwater.org" },
      { name: "Fairfax County Stormwater", phone: "703-324-5500", url: "https://www.fairfaxcounty.gov/publicworks/stormwater" },
      { name: "Dominion Energy Outages", phone: "866-366-4357", url: "https://www.dominionenergy.com" }
    ],

    serviceArea: {
      primary: ["Lorton", "Laurel Hill", "Mason Neck", "Occoquan"],
      secondary: ["Springfield", "Woodbridge", "Fort Belvoir", "Burke"]
    },

    heroImage: "/images/heroes/lorton-community.jpg",
    galleryTag: "lorton",

    coordinates: { lat: 38.7045, lng: -77.2275 },
    isHQ: false,

    // SEO Content
    seo: {
      metaTitle: "Water Damage Restoration Lorton VA | Laurel Hill & Occoquan Specialists | Flood Doctor",
      metaDescription: "Lorton's trusted water damage restoration. 60-minute response. Serving Laurel Hill, Mason Neck & Occoquan area. New development & waterfront experts. (877) 497-0007.",
      h1: "Water Damage Restoration in Lorton, Virginia",
      heroText: "Lorton's growing communities deserve restoration that understands the area. From new construction in Laurel Hill to waterfront properties near Occoquan, Flood Doctor provides 24/7 emergency service throughout Lorton and South Fairfax County."
    },

    neighborhoodResponseTimes: [
      { name: "Laurel Hill", responseTime: "55-70 min", tier: "medium" },
      { name: "Mason Neck", responseTime: "65-80 min", tier: "medium" },
      { name: "Occoquan", responseTime: "60-75 min", tier: "medium" },
      { name: "Newington", responseTime: "55-70 min", tier: "medium" },
      { name: "Lorton Town Center", responseTime: "55-70 min", tier: "medium" },
      { name: "Gunston", responseTime: "60-75 min", tier: "medium" }
    ],

    challenges: [
      {
        icon: "HardHat",
        title: "New Development",
        description: "Laurel Hill and surrounding areas feature new construction. We document for builder warranties and understand new home systems."
      },
      {
        icon: "Waves",
        title: "Waterfront Properties",
        description: "Occoquan and Mason Neck waterfront homes face unique challenges. We're experienced with tidal and flood zone restoration."
      },
      {
        icon: "TreePine",
        title: "Wooded Areas",
        description: "Lorton's wooded lots create crawlspace moisture challenges. We address humidity issues at their source."
      },
      {
        icon: "Zap",
        title: "Sump Pump Issues",
        description: "Newer homes may have undersized sump systems. We respond fast and can recommend proper sizing."
      }
    ],

    testimonials: [
      {
        quote: "Our new Laurel Hill home had a basement leak just a year after we moved in. Flood Doctor documented everything for our builder warranty claim and dried the space completely. Professional from start to finish.",
        author: "The Davidson Family",
        location: "Laurel Hill",
        rating: 5
      },
      {
        quote: "Living near Occoquan, we deal with humidity constantly. When we had actual water damage from a storm, Flood Doctor not only fixed it but helped us understand how to prevent future issues. Great team.",
        author: "Nancy & Richard T.",
        location: "Occoquan",
        rating: 5
      }
    ],

    faqs: [
      {
        question: "How quickly can you respond to Lorton?",
        answer: "We provide 55-80 minute response throughout Lorton, 24/7. Response times to Mason Neck and more rural areas may be slightly longer due to distance."
      },
      {
        question: "Do you work with new construction warranties?",
        answer: "Yes. Much of Lorton features newer construction under builder warranty. We document water damage thoroughly to support warranty claims."
      },
      {
        question: "What about waterfront properties near Occoquan?",
        answer: "We're experienced with waterfront restoration along the Occoquan River and Potomac. These properties have unique moisture and flood zone challenges we understand."
      },
      {
        question: "Can you help with crawlspace moisture issues?",
        answer: "Yes. Lorton's wooded lots often have crawlspace humidity problems. We address both immediate water damage and underlying moisture issues."
      },
      {
        question: "Do you serve Mason Neck?",
        answer: "Yes. Mason Neck's unique location near wildlife refuges and the Potomac means slightly longer response times, but we serve the entire area 24/7."
      }
    ],

    guideData: {
      emergency: {
        responseTimeRange: "55-80 minutes",
        criticalFirstStep: "Check the basement and crawlspace first—Lorton's new construction often has these areas affected first during water emergencies.",
        localEmergencyTips: [
          "New construction: Note if water is entering through foundation cracks—this may be a builder warranty issue",
          "Occoquan River area: Check for multiple water sources during storm-related flooding",
          "Contact Fairfax Water (703-698-5600) for main line issues"
        ]
      },
      prevention: {
        housingTypes: ["New construction colonials (Laurel Hill)", "Occoquan River waterfront homes", "Mason Neck rural properties", "Townhome developments"],
        seasonalRisks: ["Winter pipe freezing in newer homes with insufficient insulation", "Spring Occoquan River area flooding", "Summer storm basement flooding", "Fall crawlspace moisture from wooded lots"],
        localPermitInfo: "Fairfax County requires permits for plumbing and structural work. Waterfront properties may have environmental considerations.",
        commonPreventionIssues: ["Builder warranty awareness", "Sump pump proper sizing", "Crawlspace encapsulation", "Waterfront property drainage"]
      },
      insurance: {
        averageClaimRange: "$5,000-$25,000",
        commonClaimTypes: ["Basement flooding in new construction", "Sump pump failure", "Builder warranty-related water damage", "Crawlspace moisture damage"],
        localAdjusterTips: [
          "New construction claims: Check builder warranty first—many water issues are covered for 1-10 years",
          "Occoquan-area properties: Confirm flood zone status and coverage requirements",
          "Document any settling or construction defects that may be contributing to water entry"
        ],
        documentationFocus: ["Builder warranty documentation", "Construction age and warranty periods", "Flood zone status", "Crawlspace condition assessment"]
      }
    }
  }
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get franchise by ID (subdomain)
 */
export function getFranchiseById(id: string): FranchiseData | undefined {
  return franchises[id];
}

/**
 * Get all franchise IDs for sitemap generation
 */
export function getAllFranchiseIds(): string[] {
  return Object.keys(franchises);
}

/**
 * Get franchise display name mapping for forms
 */
export function getFranchiseCityMap(): Record<string, string> {
  return Object.fromEntries(
    Object.entries(franchises).map(([id, data]) => [id, data.city])
  );
}

/**
 * Default franchise for unrecognized subdomains
 * V3: Changed from fallschurch to hq
 */
export const defaultFranchise: FranchiseData = franchises['hq'];
