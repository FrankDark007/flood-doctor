// data/franchises.ts

/**
 * Flood Doctor City Franchise Configuration
 *
 * SAB (Service Area Business) Compliance:
 * - No street addresses exposed publicly
 * - Unique phone numbers per city (for tracking)
 * - GBP verification at operator home (hidden from public)
 */

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
    primary: string[];           // <30 min response
    secondary: string[];         // <60 min response
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
    phone: "703-656-0000", // Main Line

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
      { name: "McLean Plumbing Pros", category: "Plumber", url: "", phone: "" },
      { name: "Tysons Insurance Group", category: "Insurance Agent", url: "", phone: "" },
      { name: "Great Falls Roofing", category: "Roofer", url: "", phone: "" }
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
    isHQ: false
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
      { name: "Arlington Plumbing Co.", category: "Plumber", url: "", phone: "" },
      { name: "Rosslyn Property Management", category: "Property Manager", url: "", phone: "" },
      { name: "Ballston Carpet & Flooring", category: "Flooring", url: "", phone: "" }
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
    isHQ: false
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
      { name: "Old Town Plumbing", category: "Plumber", url: "", phone: "" },
      { name: "Alexandria Public Adjusters", category: "Public Adjuster", url: "", phone: "" },
      { name: "Del Ray Flooring", category: "Flooring", url: "", phone: "" }
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
    isHQ: false
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
      { name: "Fairfax Plumbing & Heating", category: "Plumber", url: "", phone: "" },
      { name: "Burke Home Inspectors", category: "Inspector", url: "", phone: "" },
      { name: "GMU Area Property Management", category: "Property Manager", url: "", phone: "" }
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
    isHQ: false
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
      { name: "Vienna Plumbing Services", category: "Plumber", url: "", phone: "" },
      { name: "Oakton Home Inspectors", category: "Inspector", url: "", phone: "" },
      { name: "Church Street Antiques", category: "Art Restoration", url: "", phone: "" }
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
    isHQ: false
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
      { name: "Tysons Commercial Plumbing", category: "Plumber", url: "", phone: "" },
      { name: "Capital Property Management", category: "Property Manager", url: "", phone: "" },
      { name: "High-Rise Building Services", category: "Building Services", url: "", phone: "" }
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
    isHQ: false
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
      { name: "Reston Plumbing & HVAC", category: "Plumber", url: "", phone: "" },
      { name: "Reston Association", category: "HOA", url: "", phone: "" },
      { name: "Lake Anne Restoration", category: "Restoration", url: "", phone: "" }
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
    isHQ: false
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
      { name: "Herndon Plumbing Co.", category: "Plumber", url: "", phone: "" },
      { name: "Dulles Commercial Services", category: "Commercial", url: "", phone: "" },
      { name: "Fox Mill Property Management", category: "Property Manager", url: "", phone: "" }
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
    isHQ: false
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
      { name: "Loudoun Plumbing Services", category: "Plumber", url: "", phone: "" },
      { name: "Ashburn Home Inspectors", category: "Inspector", url: "", phone: "" },
      { name: "Broadlands HOA", category: "HOA", url: "", phone: "" }
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
    isHQ: false
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
      { name: "Springfield Plumbing Co.", category: "Plumber", url: "", phone: "" },
      { name: "Kingstowne Property Services", category: "Property Manager", url: "", phone: "" },
      { name: "Fort Belvoir Housing", category: "Military Housing", url: "", phone: "" }
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
    isHQ: false
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
      { name: "Falls Church Plumbing", category: "Plumber", url: "", phone: "" },
      { name: "Lake Barcroft Association", category: "HOA", url: "", phone: "" },
      { name: "Seven Corners Property Mgmt", category: "Property Manager", url: "", phone: "" }
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
    isHQ: false
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
      { name: "Great Falls Plumbing & Well", category: "Plumber", url: "", phone: "" },
      { name: "Estate Property Management", category: "Property Manager", url: "", phone: "" },
      { name: "Potomac Art Conservation", category: "Art Restoration", url: "", phone: "" }
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
    isHQ: false
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
      { name: "Lorton Plumbing & Heating", category: "Plumber", url: "", phone: "" },
      { name: "Occoquan Waterfront Services", category: "Marine", url: "", phone: "" },
      { name: "Laurel Hill HOA", category: "HOA", url: "", phone: "" }
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
    isHQ: false
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
