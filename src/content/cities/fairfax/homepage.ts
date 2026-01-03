// src/content/cities/fairfax/homepage.ts
// Generated: January 3, 2026
// Fairfax Homepage Content - 100% Unique

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

export const fairfaxHomepageContent: HomepageContent = {
  // Hero Section - Must include city name + emergency positioning
  heroHeadline: "Fairfax's 24/7 Water Damage Restoration Specialists",

  heroSubheadline: "30-minute emergency response to Burke, Burke Centre, Kings Park, Mantua & all Fairfax neighborhoods. Family-focused service protecting your home since 2005.",

  // Intro paragraph - 150-200 words, mentions 3+ neighborhoods and 2+ landmarks
  introParagraph: `When water invades your Fairfax family home, you need restoration experts who understand the neighborhood. Whether you live in a Burke Centre townhome near Burke Lake Park, a Kings Park split-level, or a colonial near George Mason University, Flood Doctor arrives within 30 minutes to stop the damage.

Fairfax homes built in the 1970s through 1990s face specific challenges. The split-levels in Kings Park and Mantua have lower-level family rooms vulnerable to sump pump failures. Burke Centre townhomes share walls that can complicate water migration. The older colonials near Old Town Fairfax have aging plumbing that eventually fails.

Our IICRC-certified crews know these homes because we've served them for nearly two decades. We've dried flooded basements in Burke after summer storms, repaired burst pipe damage in Fairfax City during winter freezes, and prevented mold growth in the ranch homes along Pickett Road. When your GMU-area neighbor needs a water damage company, they recommend us—because we've already helped their street.`,

  // Why Choose Us - Each point includes local reference
  whyChooseUs: {
    headline: "Why Fairfax Families Trust Flood Doctor",
    points: [
      {
        title: "30-Minute Response Throughout Fairfax",
        description: "From our Falls Church dispatch center, we reach Burke, Burke Centre, Kings Park, Mantua, and Fairfax City within our 30-minute guarantee. When your split-level basement floods during a thunderstorm, we're already on Braddock Road heading your way.",
        icon: "clock"
      },
      {
        title: "Expertise in 1970s-90s Home Construction",
        description: "Fairfax's colonial and split-level homes require specific restoration approaches. We understand the construction methods of this era—from finished lower levels to original hardwood floors—and dry them properly to prevent warping and mold.",
        icon: "home"
      },
      {
        title: "Direct Insurance Billing",
        description: "Water damage is stressful enough without insurance paperwork. We work directly with all major carriers, document everything for your claim, and handle billing so you can focus on your family—not forms.",
        icon: "shield"
      },
      {
        title: "IICRC Certified Technicians",
        description: "Our crews hold the industry's highest certifications in water damage restoration. When protecting your Kings Park split-level or Burke colonial, you need technicians trained in proper drying science and mold prevention.",
        icon: "certificate"
      },
      {
        title: "Fair, Transparent Pricing",
        description: "Fairfax families appreciate straightforward pricing. We provide detailed written estimates before work begins, explain what's covered by insurance, and never surprise you with hidden charges. Your trust matters more than any single job.",
        icon: "check"
      }
    ]
  },

  // Local Expertise Section - Heavy local references
  localExpertise: {
    headline: "Your Fairfax Water Damage Experts",
    paragraph: `Michael R., our Fairfax Branch Manager, has served this community for 12 years. He coaches youth soccer and knows the neighborhood networks that make Fairfax special. When a Burke Centre family calls about a flooded basement, Michael understands what that finished lower level means to their daily life—the kids' playroom, the home office, the family room where everyone gathers.

Fairfax isn't like the estate neighborhoods of McLean or the historic rowhouses of Alexandria. These are family homes, built sensibly in the 1970s through 1990s, where practical restoration matters more than white-glove treatment. We match that sensibility—efficient, thorough, fair.

We've learned the specific challenges here: the split-level designs in Kings Park that put family rooms partially below grade, making them vulnerable to flooding. The sump pump systems in Burke Centre townhomes that fail after 15 years. The ice dam issues on colonial roofs near Fairfax Corner when snow piles up. The washing machine supply lines in Mantua homes that burst after 25 years of service.

This is practical restoration for practical families—done right, done fast, done fairly.`,

    architectureNote: "Predominantly 1970s-1990s colonial and split-level single-family homes. Many with finished basements on slab or crawlspace. Burke Centre features townhomes with shared walls requiring neighbor coordination.",

    commonIssues: [
      "Split-level basement flooding—the lower-level family rooms in Kings Park and Mantua homes sit partially below grade, making sump pump reliability critical",
      "Sump pump failures in aging systems—many Fairfax homes have 15-20 year old pumps approaching the end of their lifespan",
      "Ice dam roof leaks on colonial homes—the steep roofs near Fairfax Corner and Old Town Fairfax trap snow that melts and refreezes",
      "Washing machine and dishwasher supply line failures—the braided steel hoses installed in the 1990s are now at failure age",
      "HVAC condensate drain clogs—the humid Virginia summers push AC units hard, and clogged drain lines overflow into living spaces"
    ]
  },

  // Service Area Description
  serviceAreaDescription: `Flood Doctor of Fairfax provides 24/7 water damage restoration throughout Fairfax City and surrounding communities. Our primary service area includes Fairfax, Fairfax City, Burke, and Burke Centre—all within our 30-minute rapid response zone. Secondary coverage extends to Fairfax Station, Springfield, Annandale, and Mantua within 60 minutes.

From the townhomes of Burke Centre to the single-family neighborhoods near George Mason University, we serve every corner of Fairfax's 22030, 22031, 22032, 22033, and 22035 ZIP codes.`,

  // Emergency CTA
  emergencyCTA: {
    headline: "Water Emergency in Fairfax?",
    subtext: "Every hour of delay means more damage to your home. Our crews are stationed throughout Fairfax for immediate response.",
    buttonText: "Call (703) 656-0104 Now"
  },

  // Testimonial Section Intro
  localTestimonialIntro: "What Fairfax Families Say About Flood Doctor",

  // FAQ Section - 7 Fairfax-specific FAQs
  faqSection: [
    {
      question: "How quickly can you respond to a water emergency in Fairfax?",
      answer: "We guarantee 30-minute response to all Fairfax neighborhoods, including Burke, Burke Centre, Kings Park, Mantua, and Fairfax City. Our crews are stationed throughout the area—when you call about a flooded basement in Burke or a burst pipe in Kings Park, we're already nearby."
    },
    {
      question: "Do you have experience with Fairfax's split-level homes?",
      answer: "Yes—split-level restoration is our specialty in Fairfax. The lower-level family rooms in Kings Park and Mantua sit partially below grade, making them vulnerable to flooding. We understand these home designs and have the equipment and techniques to properly dry them."
    },
    {
      question: "What should I do if my basement floods during a storm?",
      answer: "First, ensure everyone's safety and avoid standing water if you can't verify electricity is off. Call us immediately at (703) 656-0104. Don't try to shop-vac the water yourself—improper extraction can push water into wall cavities and create hidden mold problems. We'll arrive within 30 minutes to extract water and begin proper drying."
    },
    {
      question: "Will you work directly with my insurance company?",
      answer: "Yes. We handle direct billing with all major carriers and document everything for your claim—photos, moisture readings, daily logs. Many Fairfax families have never filed a water damage claim before. We guide you through the process and advocate for complete coverage."
    },
    {
      question: "Why do Fairfax homes experience basement flooding?",
      answer: "Fairfax homes from the 1970s-90s often have sump pumps approaching or past their 15-year lifespan. The split-level designs common in Kings Park and Mantua put living spaces below grade. Summer thunderstorms can overwhelm aging drainage systems. We address the immediate flooding and help identify the underlying cause."
    },
    {
      question: "How much does water damage restoration cost in Fairfax?",
      answer: "Costs vary based on the affected area, water category (clean water vs. sewage), and materials involved. Most Fairfax homeowners file insurance claims that cover the majority of costs. We provide free inspections and detailed estimates before any work begins—no surprises, no hidden fees."
    },
    {
      question: "Can you help with Burke Centre townhome water damage?",
      answer: "Absolutely. Burke Centre townhomes present unique challenges because of shared walls. Water from one unit can affect neighbors. We're experienced in coordinating with multiple homeowners and their insurance companies, and we understand how water travels through these attached structures."
    }
  ]
};

// Export helper function to merge with franchise data
export function getFairfaxHomepageData(franchise: FranchiseData) {
  return {
    ...fairfaxHomepageContent,
    franchise,
    phone: franchise.phone,
    serviceArea: franchise.serviceArea,
    manager: franchise.manager,
    emergencyContacts: franchise.emergencyContacts
  };
}
