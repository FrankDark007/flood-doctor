// src/content/cities/fallschurch/homepage.ts
// Generated: January 3, 2026
// Phase 3: Falls Church Homepage Content - 100% Unique

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

export const fallschurchHomepageContent: HomepageContent = {
  // Hero Section - Must include city name + emergency positioning
  heroHeadline: "Falls Church's 24/7 Water Damage Restoration Experts",

  heroSubheadline: "30-minute emergency response to Falls Church City, Seven Corners, Lake Barcroft & all Falls Church neighborhoods. Protecting this historic community's homes since 2005.",

  // Intro paragraph - 150-200 words, mentions 3+ neighborhoods and 2+ landmarks
  introParagraph: `When water threatens your Falls Church home, every minute matters. Whether you're in a 1920s craftsman bungalow in Falls Church City, a mid-century colonial near Seven Corners, or a Lake Barcroft waterfront property backing to the water, Flood Doctor responds within 30 minutes—day or night.

Falls Church's diverse housing stock demands specialized care. Your 1940s Cape Cod isn't the same restoration job as your neighbor's 1960s split-level. From the historic district's plaster walls and original hardwood to the newer townhomes near Eden Center, we understand that water damage here means protecting homes with character, history, and irreplaceable architectural details.

Our IICRC-certified crews know Broad Street, the neighborhoods around George Mason High School, and the tight-knit community that makes Falls Church unique. We've dried basements in Baileys Crossroads, restored waterfront properties around Lake Barcroft, and protected finished lower levels throughout Pimmit Hills. When your neighbor needs a recommendation, they call us—because we've already served their street.`,

  // Why Choose Us - Each point includes local reference
  whyChooseUs: {
    headline: "Why Falls Church Homeowners Trust Flood Doctor",
    points: [
      {
        title: "30-Minute Response to All Falls Church Neighborhoods",
        description: "Our dispatch center is right here in Falls Church. We reach Falls Church City, Seven Corners, Lake Barcroft, Baileys Crossroads, and Pimmit Hills faster than any regional competitor. When your basement floods during a summer storm, we're already on Broad Street heading your way.",
        icon: "clock"
      },
      {
        title: "Historic Home Specialists",
        description: "Falls Church's 1920s-1960s homes require restoration expertise most companies lack. We've protected original plaster walls in Falls Church City bungalows, dried hardwood floors in Seven Corners colonials, and saved irreplaceable trim in homes throughout the historic district.",
        icon: "home"
      },
      {
        title: "Insurance Billing Handled Directly",
        description: "Your local insurance agent knows us. We work directly with all major carriers, document everything for claims, and handle the paperwork so you focus on your family—not forms.",
        icon: "shield"
      },
      {
        title: "IICRC Master Certification",
        description: "Our technicians hold the industry's highest certifications. When protecting your Lake Barcroft waterfront home or Pimmit Hills colonial, you need crews trained in advanced drying science, mold prevention, and historic home restoration.",
        icon: "certificate"
      },
      {
        title: "Community-Focused Service",
        description: "Falls Church is a close-knit community—neighbors talk. Our reputation is built on referrals from families in Falls Church City, Seven Corners, and Lake Barcroft who've experienced our responsive, professional service firsthand.",
        icon: "users"
      }
    ]
  },

  // Local Expertise Section - Heavy local references
  localExpertise: {
    headline: "Your Falls Church Water Damage Experts",
    paragraph: `Mike R., our Falls Church Branch Manager, has lived in the area for 15 years and has managed water emergencies throughout Falls Church's diverse neighborhoods. He knows that Route 7 traffic during rush hour can be brutal—which is why our crews are stationed throughout Falls Church, not at a distant warehouse in Manassas.

When a Lake Barcroft homeowner calls at 2 AM about water in their basement, we don't dispatch from far away. Our trucks are already positioned to reach Broad Street, Wilson Boulevard, and every corner of Falls Church within our 30-minute guarantee.

We've learned the unique challenges of Falls Church homes: the aging plumbing in pre-war homes near Falls Church City, the basement moisture issues common in Baileys Crossroads, the high water table concerns for Lake Barcroft waterfront properties, and the sump pump demands of homes in Pimmit Hills. This area's diverse housing stock—from 1920s bungalows to 1960s splits to modern townhomes near Eden Center—requires adaptable expertise.

This isn't just about drying water—it's about understanding the $400,000 to $1.2 million homes we serve and protecting them accordingly.`,

    architectureNote: "Diverse housing stock: 1920s-1940s craftsman bungalows and Cape Cods, 1950s-1960s colonials and split-levels, waterfront homes, and newer townhomes. Many feature original hardwood, plaster walls, and aging plumbing systems requiring specialized attention.",

    commonIssues: [
      "Basement flooding in older homes—aging sump pumps and foundation cracks from decades of settling create water intrusion points",
      "Lake Barcroft waterfront issues—high water tables and proximity to the lake create persistent moisture challenges",
      "Aging plumbing failures—galvanized pipes in 1940s-1960s homes corrode and burst, often inside walls",
      "Historic home vulnerabilities—plaster walls, original hardwood, and balloon framing require specialized drying approaches",
      "Storm drainage issues—older neighborhoods with legacy drainage systems overwhelm during heavy summer storms"
    ]
  },

  // Service Area Description
  serviceAreaDescription: `Flood Doctor of Falls Church provides 24/7 water damage restoration throughout Falls Church and surrounding areas. Our primary service area includes Falls Church City, Seven Corners, Lake Barcroft, Baileys Crossroads, and Pimmit Hills—all within our 30-minute rapid response zone. Secondary coverage extends to McLean, Arlington, Annandale, and Vienna within 60 minutes.

From the historic homes along Broad Street to the waterfront properties around Lake Barcroft, we serve every corner of Falls Church's 22041, 22042, 22043, 22044, and 22046 ZIP codes.`,

  // Emergency CTA
  emergencyCTA: {
    headline: "Water Emergency in Falls Church?",
    subtext: "Don't wait—water damage doubles every hour. Our crews are stationed throughout Falls Church for immediate response.",
    buttonText: "Call (703) 656-0111 Now"
  },

  // Testimonial Section Intro
  localTestimonialIntro: "What Falls Church Homeowners Say About Flood Doctor",

  // FAQ Section - 7 Falls Church-specific FAQs
  faqSection: [
    {
      question: "How quickly can you respond to a water emergency in Falls Church?",
      answer: "We guarantee 30-minute response to all Falls Church neighborhoods, including Falls Church City, Seven Corners, Lake Barcroft, Baileys Crossroads, and Pimmit Hills. Our crews are stationed throughout the Falls Church area—not at a distant warehouse—so we're already nearby when you call."
    },
    {
      question: "Do you have experience with Falls Church's older homes?",
      answer: "Absolutely. We specialize in Falls Church's diverse housing stock, from 1920s craftsman bungalows to 1960s colonials. We've protected original plaster walls in Falls Church City, saved irreplaceable hardwood floors in Seven Corners homes, and restored finished basements throughout the community. Our expertise matches your home's unique needs."
    },
    {
      question: "What should I do if my basement floods in Falls Church?",
      answer: "First, ensure everyone's safety and turn off electricity to affected areas if safe to do so. Call us immediately at (703) 656-0111. Don't attempt to remove water yourself—improper extraction can push water into wall cavities. Our certified technicians will extract water, set up industrial drying equipment, and prevent mold growth within the critical 24-48 hour window."
    },
    {
      question: "Will you work directly with my insurance company?",
      answer: "Yes. We handle direct billing with all major insurance carriers and document everything for your claim. Many Falls Church homeowners work with local agencies in the Seven Corners area—we know their adjusters and processes, which speeds up your claim approval."
    },
    {
      question: "Why do Falls Church homes experience basement flooding?",
      answer: "Falls Church's diverse geography creates several challenges. Older homes have aging foundations and drainage systems. Lake Barcroft properties contend with high water tables. The area's clay soil expands and contracts with moisture, creating cracks over time. We address both the immediate damage and help identify underlying causes."
    },
    {
      question: "Can you protect original features in my historic Falls Church home?",
      answer: "Historic home protection is a specialty for Falls Church properties. Original plaster walls, hardwood floors from the 1920s-1940s, and period millwork all require specialized drying techniques. We use controlled drying methods that protect irreplaceable features—not aggressive heat that damages historic materials."
    },
    {
      question: "Do you service Lake Barcroft waterfront properties?",
      answer: "Yes. Lake Barcroft's waterfront homes present unique challenges—high water tables, proximity to the lake, and often walkout basements with grade-level exposure. We've served Lake Barcroft homeowners for years and understand the specific moisture challenges these beautiful properties face."
    }
  ]
};

// Export helper function to merge with franchise data
export function getFallschurchHomepageData(franchise: FranchiseData) {
  return {
    ...fallschurchHomepageContent,
    franchise,
    phone: franchise.phone,
    serviceArea: franchise.serviceArea,
    manager: franchise.manager,
    emergencyContacts: franchise.emergencyContacts
  };
}
