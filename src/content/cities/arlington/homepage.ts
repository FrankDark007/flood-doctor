// src/content/cities/arlington/homepage.ts
// Generated: January 3, 2026
// Arlington Homepage Content - 100% Unique (Urban density, high-rise expertise, HOA coordination)

import type { FranchiseData } from '../../../data/franchises';

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

export const arlingtonHomepageContent: HomepageContent = {
  // Hero Section - Must include city name + emergency positioning
  heroHeadline: "Arlington's 24/7 Water Damage & Restoration Specialists",

  heroSubheadline: "Rapid response to Rosslyn high-rises, Clarendon condos, Crystal City towers & every Arlington neighborhood. Experts in urban density challenges since 2005.",

  // Intro paragraph - 150-200 words, mentions 3+ neighborhoods and 2+ landmarks
  introParagraph: `Water emergencies in Arlington demand a different kind of expertise. When a pipe bursts on the 18th floor of a Rosslyn high-rise, the damage cascades through multiple units within minutes. When a Clarendon condo's HVAC condensate line fails, your downstairs neighbor feels it before you do. When Crystal City's underground parking floods after a storm, dozens of vehicles and building systems hang in the balance.

Flood Doctor understands Arlington's unique restoration challenges. Our crews navigate the Pentagon City skyline and the tree-lined streets of Lyon Village with equal facility. We coordinate with HOAs in Ballston, work the tight equipment access of Shirlington rowhouses, and respond to emergencies in the historic homes of Cherrydale.

From the 30-story towers visible from Arlington National Cemetery to the mid-century ramblers of Bluemont, we've dried, restored, and protected Arlington properties for nearly two decades. Our technicians carry credentials for both residential and commercial high-rise work—because in Arlington, the line between the two often blurs.`,

  // Why Choose Us - Each point includes local reference
  whyChooseUs: {
    headline: "Why Arlington Property Owners Trust Flood Doctor",
    points: [
      {
        title: "High-Rise & Multi-Unit Specialists",
        description: "Arlington's vertical density requires specialized skills. We've responded to water events in Rosslyn towers, coordinated multi-unit drying in Ballston condos, and managed complex HOA communications for Crystal City buildings. Your property manager knows our protocols.",
        icon: "building"
      },
      {
        title: "30-Minute Response Across All Neighborhoods",
        description: "From our Falls Church dispatch center, we reach Clarendon, Rosslyn, Pentagon City, and Shirlington within 30 minutes—even during rush hour gridlock on Route 50 or I-66. Our crews know which service roads to take when Wilson Boulevard backs up.",
        icon: "clock"
      },
      {
        title: "HOA & Property Management Coordination",
        description: "Multi-unit buildings mean multiple stakeholders. We handle direct communication with HOA boards, property managers, and affected unit owners. Our documentation satisfies condo association requirements and supports insurance claims for all parties.",
        icon: "users"
      },
      {
        title: "Urban Access Expertise",
        description: "Narrow rowhouse alleys in Lyon Village, freight elevators in Crystal City, parking garage staging in Ballston—we've navigated every access challenge Arlington presents. Our equipment rolls where it needs to go.",
        icon: "truck"
      },
      {
        title: "Military & Government Property Experience",
        description: "With the Pentagon next door and Joint Base Myer-Henderson Hall within our service area, we understand military housing requirements, security protocols, and the fast turnaround military families need during PCS moves.",
        icon: "shield"
      }
    ]
  },

  // Local Expertise Section - Heavy local references
  localExpertise: {
    headline: "Your Arlington Water Damage Experts",
    paragraph: `Jennifer K., our Arlington Branch Manager, lives in Clarendon and has managed water emergencies throughout Arlington for over a decade. She knows that a burst pipe in a Rosslyn high-rise requires different equipment and protocols than a flooded basement in a 1940s Cherrydale bungalow.

When a Crystal City property manager calls at 2 AM about water cascading through multiple floors, our response isn't to figure out how to help—it's to dispatch the right team with the right equipment because we've handled that exact scenario before.

Arlington's building stock spans a century: pre-war apartments near Courthouse, mid-century ramblers in Bluemont and Ashton Heights, 1980s townhomes in Fairlington, and gleaming new construction in Pentagon City. Each era presents different plumbing, different building materials, and different drying challenges.

We've learned these differences through thousands of Arlington restorations—from the exposed steam pipes in older Clarendon buildings that freeze every January to the HVAC condensate issues that plague Crystal City's glass towers every summer.`,

    architectureNote: "High-rise condos (10-30 stories), mid-century flat-roof ramblers, historic rowhouses, and new construction townhomes. Dense urban environment requiring HOA coordination and specialized equipment access. Many multi-unit buildings with shared walls and stacked plumbing.",

    commonIssues: [
      "Upstairs unit water intrusion affecting multiple condos—cascading damage through floors requires coordinated multi-unit response",
      "HVAC condensate line failures—common in summer when AC runs continuously in high-rise buildings",
      "Underground parking garage flooding—storm drain backup affects vehicles and building infrastructure",
      "Flat-roof ice dams—mid-century ramblers with minimal slope trap ice and force water inside",
      "Aging high-rise plumbing—50-year-old supply lines in older buildings fail without warning"
    ]
  },

  // Service Area Description
  serviceAreaDescription: `Flood Doctor of Arlington provides 24/7 water damage restoration throughout Arlington County. Our primary service area includes Rosslyn, Clarendon, Ballston, Crystal City, Pentagon City, and Shirlington—all within our 30-minute rapid response zone. Secondary coverage extends to Lyon Village, Cherrydale, Bluemont, Ashton Heights, and Fairlington within 45 minutes.

From the urban core along the Rosslyn-Ballston corridor to the residential neighborhoods south of Columbia Pike, we serve every corner of Arlington's 22201 through 22213 ZIP codes.`,

  // Emergency CTA
  emergencyCTA: {
    headline: "Water Emergency in Arlington?",
    subtext: "High-rise flooding spreads fast. Every floor, every minute matters. Our crews respond in 30 minutes or less to contain the damage.",
    buttonText: "Call (703) 656-0102 Now"
  },

  // Testimonial Section Intro
  localTestimonialIntro: "What Arlington Property Owners Say About Flood Doctor",

  // FAQ Section - 7 Arlington-specific FAQs
  faqSection: [
    {
      question: "How quickly can you respond to a high-rise water emergency in Arlington?",
      answer: "We guarantee 30-minute response to all Arlington addresses, including Rosslyn, Ballston, and Crystal City high-rises. Our crews carry equipment for freight elevator access and multi-floor response. For cascading water events affecting multiple units, we dispatch additional teams to contain spread while beginning extraction."
    },
    {
      question: "Do you work with HOAs and property management companies?",
      answer: "Extensively. Arlington's condo-heavy market means we work with HOA boards and property managers daily. We provide documentation that satisfies association requirements, coordinate access across multiple units, and communicate directly with all stakeholders. Our reports support insurance claims for both individual owners and associations."
    },
    {
      question: "What should I do if water is leaking from the unit above mine?",
      answer: "First, move valuables away from the affected area and document the damage with photos. Contact your building management immediately. Then call us at (703) 656-0102. We'll coordinate with both your unit and the source unit—often the upstairs neighbor isn't even home. Time is critical; water spreads through building structures quickly."
    },
    {
      question: "Can you handle water damage in older Arlington buildings?",
      answer: "Yes. Arlington's older buildings—pre-war apartments near Courthouse, 1940s-50s homes in Cherrydale and Lyon Village—present unique challenges: original plaster walls, older plumbing materials, and building techniques that differ from modern construction. Our crews are trained in these specialized drying and restoration methods."
    },
    {
      question: "Why do Arlington condos experience so much water damage?",
      answer: "Density and age. Arlington's high-rises stack plumbing vertically—one failure affects multiple floors. Many buildings are 30-50 years old with aging supply lines and drain stacks. HVAC condensate lines in summer and frozen pipes in winter create seasonal spikes. We respond to these patterns throughout the county."
    },
    {
      question: "Do you have experience with military family housing near the Pentagon?",
      answer: "Absolutely. We serve military families throughout Arlington and understand the urgency of PCS timelines, housing inspection requirements, and base housing protocols. Our rapid response and thorough documentation help families meet military housing deadlines."
    },
    {
      question: "What about underground parking garage flooding in my building?",
      answer: "Parking garage flooding threatens both vehicles and building infrastructure—electrical systems, elevators, and storage areas. We respond with truck-mounted extraction and industrial pumps to remove water before it damages building systems. We coordinate with building management on access and utility shutoffs."
    }
  ]
};

// Export helper function to merge with franchise data
export function getArlingtonHomepageData(franchise: FranchiseData) {
  return {
    ...arlingtonHomepageContent,
    franchise,
    phone: franchise.phone,
    serviceArea: franchise.serviceArea,
    manager: franchise.manager,
    emergencyContacts: franchise.emergencyContacts
  };
}
