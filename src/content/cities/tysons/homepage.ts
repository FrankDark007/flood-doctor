// src/content/cities/tysons/homepage.ts
// Generated: January 3, 2026
// Tysons Homepage Content - 100% Unique
// Focus: Urban core, commercial/high-rise residential, modern building systems

import type { FranchiseData } from '../../../../data/franchises';

export interface HomepageContent {
  heroHeadline: string;
  heroSubheadline: string;
  introParagraph: string;
  whyChooseUs: {
    headline: string;
    points: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  localExpertise: {
    headline: string;
    paragraph: string;
    architectureNote: string;
    commonIssues: string[];
  };
  serviceAreaDescription: string;
  emergencyCTA: {
    headline: string;
    subtext: string;
    buttonText: string;
  };
  localTestimonialIntro: string;
  faqSection: Array<{
    question: string;
    answer: string;
  }>;
}

export const tysonsHomepageContent: HomepageContent = {
  // Hero Section - Urban/commercial focus
  heroHeadline: "Tysons' Commercial & High-Rise Water Damage Specialists",

  heroSubheadline: "24/7 emergency response for luxury condos, Class A offices, and mixed-use developments. Property management partnerships throughout Tysons Corner, The Boro & Tysons Central.",

  // Intro paragraph - 150-200 words, mentions neighborhoods and landmarks
  introParagraph: `Water damage in Tysons demands a different approach than suburban restoration. When a 25th-floor HVAC system fails at The Boro, flooding multiple luxury units below, you need a restoration partner who understands high-rise building systems, coordinates with property management, and works within HOA requirements.

Flood Doctor has served Tysons' evolving urban core since before the Metro arrived. We've extracted water from penthouse units at Tysons Corner Center developments, dried commercial suites at Capital One headquarters, and restored underground parking facilities flooded by storm runoff. Our crews understand the complex HVAC, plumbing, and fire suppression systems that power modern mixed-use buildings.

Property managers throughout The Mile and Scotts Run keep our number on speed dial. When a unit owner reports water intrusion at 6 AM, they call us—because we respond in 30 minutes, understand the building's systems, and coordinate seamlessly with their maintenance teams. We've built relationships with every major property management company in Tysons because we deliver results that protect building values and owner investments.`,

  // Why Choose Us - Commercial/high-rise focus
  whyChooseUs: {
    headline: "Why Tysons Property Managers Trust Flood Doctor",
    points: [
      {
        title: "High-Rise Building System Expertise",
        description: "Tysons' luxury condos and Class A offices feature complex HVAC, plumbing, and fire suppression systems. Our technicians understand these interconnected systems—when water appears on floor 15, we trace it to the source on floor 22, not just dry the visible damage.",
        icon: "building"
      },
      {
        title: "Property Management Partnerships",
        description: "We work with every major property management company serving Tysons. When your building experiences water intrusion, we already know your building engineer, understand your HOA protocols, and can coordinate access without delays.",
        icon: "handshake"
      },
      {
        title: "30-Minute Response to Tysons Core",
        description: "Our crews are positioned throughout the Tysons corridor. Whether you're at The Boro, Tysons Corner Center, or a Class A office on The Mile, we reach you in 30 minutes—not dispatching from a distant warehouse but already nearby.",
        icon: "clock"
      },
      {
        title: "Multi-Unit Coordination",
        description: "High-rise water events often affect multiple units across several floors. We coordinate simultaneous restoration in affected units, communicate with all impacted owners, and work within your building's access schedules.",
        icon: "users"
      },
      {
        title: "Commercial Restoration Capability",
        description: "Tysons isn't just residential. We restore office spaces for Fortune 500 companies headquartered here, respond to data center emergencies, and handle the scale of commercial water damage that other companies can't manage.",
        icon: "briefcase"
      }
    ]
  },

  // Local Expertise Section
  localExpertise: {
    headline: "Your Tysons Water Damage Experts",
    paragraph: `David K., our Tysons Branch Manager, works daily with property managers and building engineers throughout the urban core. He knows that a water event at The Boro requires different coordination than one in a Tysons Corner Center condo tower—different HOA boards, different maintenance teams, different building systems.

When a fire suppression test floods three floors of a Class A office building on Route 7, we don't just show up with extraction equipment. We coordinate with building management, communicate with affected tenants, and work around your business hours to minimize operational disruption. Our commercial clients include Fortune 500 headquarters and tech companies who can't afford downtown Tysons productivity losses.

High-rise residential restoration demands equal sophistication. Water travels through concrete floors, appears in unexpected locations, and can affect ten units from a single source. We use thermal imaging to trace migration paths, coordinate access with multiple owners, and provide the detailed documentation that HOA boards and insurance carriers require.

Tysons has transformed from suburban shopping center to urban core—we've grown our capabilities alongside it.`,

    architectureNote: "Rapidly developing urban core with luxury high-rise condos (10-30+ stories), Class A office buildings, and mixed-use developments. Complex HVAC and plumbing systems require specialized restoration expertise. Property management and HOA coordination essential.",

    commonIssues: [
      "HVAC condensate failures flooding multiple condo units—modern buildings use centralized systems that affect entire sections when they fail",
      "Commercial office water damage—sprinkler malfunctions, restroom overflows, and mechanical room failures in Class A buildings",
      "Underground parking flooding—storm runoff and drain backups affect vehicles and building systems",
      "New construction defects—settling buildings experience plumbing issues, HVAC leaks, and window failures",
      "Common area water intrusion—lobby flooding, hallway damage, and amenity space water events require rapid response to maintain building value"
    ]
  },

  // Service Area Description
  serviceAreaDescription: `Flood Doctor of Tysons provides 24/7 water damage restoration throughout the Tysons urban core and surrounding areas. Our primary coverage includes Tysons Corner, Tysons Central, The Boro, The Mile, and Scotts Run—all within our 30-minute rapid response zone. Secondary coverage extends to McLean, Vienna, Falls Church, and Merrifield within 60 minutes.

We serve every building type in Tysons' 22102 and 22182 ZIP codes: luxury high-rise condos, Class A office towers, mixed-use developments, and the remaining commercial properties. Property managers throughout Tysons have our direct line.`,

  // Emergency CTA
  emergencyCTA: {
    headline: "Water Emergency in Tysons?",
    subtext: "High-rise and commercial water damage spreads rapidly through building systems. Our crews understand Tysons' modern buildings and respond in 30 minutes.",
    buttonText: "Call (703) 656-0106 Now"
  },

  // Testimonial Section Intro
  localTestimonialIntro: "What Tysons Property Managers Say About Flood Doctor",

  // FAQ Section - 7 Tysons-specific FAQs
  faqSection: [
    {
      question: "How quickly can you respond to a high-rise water emergency in Tysons?",
      answer: "We guarantee 30-minute response to all Tysons buildings, including The Boro, Tysons Corner Center developments, and Class A offices throughout the urban core. Our crews are positioned in Tysons, not at a distant warehouse—we're already nearby when you call."
    },
    {
      question: "Do you work with property management companies?",
      answer: "Absolutely. We've built partnerships with every major property management company serving Tysons. We understand HOA protocols, coordinate with building engineers, and provide the documentation that boards and insurance carriers require. When your building experiences water intrusion, we already know your team."
    },
    {
      question: "Can you handle multi-unit water damage in high-rise buildings?",
      answer: "High-rise water events are our specialty. We trace water migration paths using thermal imaging, coordinate access with multiple unit owners, and restore simultaneously across affected floors. Our IICRC-certified technicians understand the complex building systems that cause and complicate high-rise water damage."
    },
    {
      question: "What about commercial office water damage?",
      answer: "We serve Fortune 500 headquarters and major tech companies throughout Tysons. Commercial restoration requires working around business hours, protecting sensitive equipment, and minimizing operational disruption. Our crews understand that every hour of office closure costs your business money."
    },
    {
      question: "Why do new Tysons buildings experience water damage?",
      answer: "New construction defects are common as buildings settle. HVAC condensate lines, plumbing connections, and window seals can fail within the first few years. We document everything for warranty claims and work with builders to address underlying issues—not just the visible damage."
    },
    {
      question: "Will you work with my building's HOA board?",
      answer: "Yes. We provide detailed documentation, attend board meetings when needed, and understand HOA requirements for contractor access and work authorization. Many Tysons HOA boards have approved us as a preferred vendor based on our track record and professionalism."
    },
    {
      question: "Can you help with underground parking flooding?",
      answer: "Underground parking presents unique challenges: vehicle protection, elevator shaft exposure, and building system access. We extract water rapidly, protect parked vehicles, and address the drainage or pump failures that caused the flooding. Storm-related parking garage flooding is common in Tysons during heavy rainfall."
    }
  ]
};

// Export helper function to merge with franchise data
export function getTysonsHomepageData(franchise: FranchiseData) {
  return {
    ...tysonsHomepageContent,
    franchise,
    phone: franchise.phone,
    serviceArea: franchise.serviceArea,
    manager: franchise.manager,
    emergencyContacts: franchise.emergencyContacts
  };
}
