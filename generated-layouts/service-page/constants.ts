import { ServicePageData } from './types';

export const SERVICE_DATA: ServicePageData = {
  title: "24/7 Water Damage Restoration",
  subtitle: "Rapid response extraction, drying, and restoration for Northern Virginia homes. We arrive within 60 minutes to prevent mold and structural damage.",
  emergencyPhone: "(555) 123-4567",
  badges: [
    { text: "60-Min Onsite", icon: "Clock" },
    { text: "Direct Insurance Billing", icon: "ShieldCheck" },
    { text: "IICRC Certified", icon: "Award" },
  ],
  quickFacts: [
    { label: "Response Time", value: "< 60 Mins", icon: "Timer" },
    { label: "Service Area", value: "NoVA & DC", icon: "MapPin" },
    { label: "Guarantee", value: "100% Satisfied", icon: "ThumbsUp" },
    { label: "Availability", value: "24/7/365", icon: "CalendarClock" },
  ],
  problemSolution: {
    problem: {
      title: "The Risks of Waiting",
      points: [
        "Water spreads to hidden cavities within hours.",
        "Mold growth begins in as little as 24-48 hours.",
        "Structural wood begins to swell and warp.",
        "Carpet delamination becomes permanent.",
      ]
    },
    solution: {
      title: "The Flood Doctor Approach",
      points: [
        "Immediate industrial-grade water extraction.",
        "Thermal imaging to detect hidden moisture pockets.",
        "Hospital-grade antimicrobial sanitization.",
        "Advanced dehumidification to restore dry standards.",
      ]
    }
  },
  tabs: [
    {
      id: "technology",
      label: "Our Technology",
      title: "Hospital-Grade Restoration Equipment",
      description: "We don't just use shop vacs. We deploy industrial-grade technology to find every drop of moisture and dry your home faster.",
      listItems: [
        "FLIR Thermal Imaging Cameras to see behind walls",
        "Truck-mounted extraction units for massive water removal",
        "LGR Dehumidifiers that pull 16 gallons of water per day",
        "HEPA Air Scrubbers to remove mold spores and dust"
      ],
      icon: "Cpu"
    },
    {
      id: "insurance",
      label: "Insurance Process",
      title: "We Handle The Paperwork",
      description: "Water damage is stressful enough without fighting your insurance company. We use Xactimate software—the industry standard—to ensure your claim is accurate.",
      listItems: [
        "Direct billing to your insurance carrier",
        "Detailed photo documentation of all damage",
        "Line-item estimates using approved insurance codes",
        "Negotiation on your behalf for fair coverage"
      ],
      icon: "FileText"
    },
    {
      id: "team",
      label: "Certified Team",
      title: "IICRC Master Water Restorers",
      description: "Our technicians hold the highest certifications in the industry. We are not just general contractors; we are restoration scientists.",
      listItems: [
        "Institute of Inspection Cleaning and Restoration Certification (IICRC)",
        "AMRT (Applied Microbial Remediation Technician) for mold",
        "WRT (Water Damage Restoration Technician) certified",
        "Background checked and drug tested employees"
      ],
      icon: "Users"
    },
    {
      id: "guarantee",
      label: "Our Guarantee",
      title: "1-Year Workmanship Warranty",
      description: "We stand behind our drying and reconstruction work. If moisture returns or workmanship fails, we return at no cost.",
      listItems: [
        "100% Dry Guarantee verified by moisture meters",
        "1-Year warranty on all reconstruction labor",
        "Satisfaction sign-off before we leave",
        "24/7 post-service support line"
      ],
      icon: "Shield"
    }
  ],
  process: [
    {
      title: "Assessment",
      description: "We arrive fast, map moisture levels, and create a restoration plan.",
      icon: "Search"
    },
    {
      title: "Extraction",
      description: "Powerful pumps remove standing water immediately to stop damage.",
      icon: "Droplets"
    },
    {
      title: "Drying",
      description: "Industrial air movers and dehumidifiers remove deep moisture.",
      icon: "Wind"
    },
    {
      title: "Restoration",
      description: "We repair, clean, and restore your space to pre-loss condition.",
      icon: "Home"
    }
  ],
  detailedContent: [
    {
      heading: "Understanding Water Damage Classes & Categories",
      content: [
        "Water damage is not created equal. In the restoration industry, we categorize water loss into three categories based on the level of contamination. Category 1 is 'Clean Water' from a broken pipe or supply line. Category 2 is 'Grey Water' from washing machines or dishwashers, which may contain bacteria. Category 3 is 'Black Water' from sewage backups or floodwaters, requiring immediate specialized hazmat protocols.",
        "We also classify the extent of the damage from Class 1 (minor section of a room) to Class 4 (deep saturation of bound materials like hardwood and plaster). Understanding these technical classifications allows us to apply the correct drying science to your specific situation, saving materials that others might tear out unnecessarily."
      ]
    },
    {
      heading: "The Science of Psychrometry (Structural Drying)",
      content: [
        "Drying a home isn't just about blowing air around. It requires a deep understanding of psychrometry—the science of drying. We manipulate temperature and relative humidity to create a specific vapor pressure differential. This force pulls moisture out of structural materials like wood studs and drywall and into the air, where our industrial dehumidifiers capture it.",
        "Our team monitors these metrics daily. We don't guess when your home is dry; we use penetrating moisture meters and thermal hygrometers to verify that the moisture content of your wood framing has returned to a pre-loss standard (typically 10-12% in this region)."
      ]
    },
    {
      heading: "Preventing Secondary Damage: Mold & Rot",
      content: [
        "The most dangerous aspect of water damage is often what happens 48 hours later. If water is not extracted and dried quickly, 'secondary damage' begins. This includes the warping of hardwood floors, the swelling of cabinetry, and most critically, microbial growth.",
        "Mold spores exist naturally in the air, but they need moisture and organic material (like drywall paper) to colonize. Once relative humidity exceeds 60% for a prolonged period, mold can bloom. Our rapid response and aggressive drying protocols are designed specifically to beat this biological clock, ensuring your home remains safe for your family."
      ]
    }
  ],
  testimonials: [
    {
      author: "Sarah Jenkins",
      location: "Arlington, VA",
      rating: 5,
      date: "2 weeks ago",
      text: "The pipe burst at 2 AM and Flood Doctor was there by 3 AM. I was in a panic, but their calm professionalism saved the day. They saved my hardwood floors which I thought were ruined."
    },
    {
      author: "Michael Chen",
      location: "Fairfax, VA",
      rating: 5,
      date: "1 month ago",
      text: "Incredible service. They handled the insurance claim entirely. I didn't have to speak to the adjuster once after the initial call. The reconstruction team made it look like nothing happened."
    },
    {
      author: "Eleanor Rigby",
      location: "Alexandria, VA",
      rating: 5,
      date: "3 months ago",
      text: "Highly recommended. Very respectful of my home, wore shoe covers every time, and the lead technician explained the moisture readings to me every day so I knew the progress."
    }
  ],
  pricing: {
    price: "$0",
    disclaimer: "Covered by most insurance policies",
    features: [
      "Thermal Moisture Inspection",
      "Damage Assessment Report",
      "Insurance Claim Assistance",
      "No Out-of-Pocket for Evaluation"
    ],
    ctaText: "Start Free Inspection"
  },
  faqs: [
    {
      question: "How quickly can you get here?",
      answer: "We guarantee a technician onsite within 60 minutes for emergency water damage calls in Northern Virginia."
    },
    {
      question: "Do you work with my insurance?",
      answer: "Yes, we work directly with all major insurance carriers. We document everything and bill them directly so you don't have to worry."
    },
    {
      question: "Can I stay in my home during the process?",
      answer: "In most minor to moderate cases, yes. However, for extensive damage or if mold is present, we may recommend temporary relocation for safety."
    },
    {
      question: "What if I see mold already?",
      answer: "If you see mold, do not disturb it. Call us immediately. We are certified in mold remediation and will contain the area to prevent spread."
    }
  ]
};