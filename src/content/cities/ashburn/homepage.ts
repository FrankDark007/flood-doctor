// src/content/cities/ashburn/homepage.ts
// Generated: January 3, 2026
// Phase 3: Ashburn Homepage Content - 100% Unique

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

export const ashburnHomepageContent: HomepageContent = {
  // Hero Section - Must include city name + emergency positioning
  heroHeadline: "Ashburn's 24/7 Water Damage Restoration Experts",

  heroSubheadline: "30-minute emergency response to Broadlands, Brambleton, One Loudoun & all Ashburn neighborhoods. Protecting Loudoun County's growing community since 2005.",

  // Intro paragraph - 150-200 words, mentions 3+ neighborhoods and 2+ landmarks
  introParagraph: `When water threatens your Ashburn home, every minute counts. Whether you're in a Broadlands townhome near the Greenway, a Brambleton single-family backing to community trails, or a new build in One Loudoun's walkable district, Flood Doctor responds within 30 minutes—day or night.

Ashburn's newer construction presents unique challenges. Builder-grade materials, warranty claim complexities, and construction defects that manifest years after move-in require restoration expertise that understands modern building practices. From the basement of your Lansdowne townhome to the finished lower level of your Ashburn Farm colonial, we navigate both the water damage and the warranty implications.

Our IICRC-certified crews know the Waxpool Road corridor, the developments along Loudoun County Parkway, and the expectations of Ashburn homeowners who've invested in this growing community. We've dried the basements of Belmont families, restored finished lower levels throughout Ashburn Village, and protected new construction in Moorefield Station. When your HOA needs a recommendation, they call us—because we've already served your neighborhood.`,

  // Why Choose Us - Each point includes local reference
  whyChooseUs: {
    headline: "Why Ashburn Homeowners Trust Flood Doctor",
    points: [
      {
        title: "30-Minute Response to All Ashburn Neighborhoods",
        description: "From our dispatch center, we reach Broadlands, Brambleton, One Loudoun, Lansdowne, and Ashburn Farm faster than any regional competitor. When your sump pump fails during a Loudoun County thunderstorm, we're already heading down the Greenway toward your door.",
        icon: "clock"
      },
      {
        title: "New Construction & Builder Warranty Specialists",
        description: "Ashburn's homes built since 2000 require restoration expertise that understands modern materials and builder warranty processes. We document everything for warranty claims, work with builders' insurance carriers, and know the common defects in Loudoun County's rapid-growth construction.",
        icon: "home"
      },
      {
        title: "Insurance Billing Handled Directly",
        description: "Your insurance agent knows us. We work directly with all major carriers, document everything for claims, and handle the paperwork so you focus on your family—not forms. For builder warranty issues, we understand the dual-claim complexity.",
        icon: "shield"
      },
      {
        title: "IICRC Master Certification",
        description: "Our technicians hold the industry's highest certifications. When protecting your Brambleton investment or Ashburn Village home, you need crews trained in advanced drying science, mold prevention, and modern building material restoration.",
        icon: "certificate"
      },
      {
        title: "HOA & Community Familiar",
        description: "Ashburn's master-planned communities have rules. We work with HOA requirements, coordinate access through community gates, and minimize disruption to your neighbors—whether you're in Broadlands, Belmont, or the Moorefield Station townhome community.",
        icon: "community"
      }
    ]
  },

  // Local Expertise Section - Heavy local references
  localExpertise: {
    headline: "Your Ashburn Water Damage Experts",
    paragraph: `Our Ashburn team has managed water emergencies throughout Loudoun County for over a decade. We know that Route 7 traffic during rush hour can add 30 minutes to response times—which is why our crews are stationed throughout the Ashburn corridor, not at a distant warehouse in Fairfax or Prince William County.

When a Broadlands homeowner calls at 2 AM about a burst pipe, we don't dispatch from Sterling or Leesburg. Our trucks are already positioned to reach Loudoun County Parkway, Waxpool Road, and the Greenway corridor within our 30-minute guarantee.

We've learned the unique challenges of Ashburn homes: the construction defects that emerge in homes built during the 2000s boom, the expansive clay soil that shifts foundations in developing neighborhoods, and the sump pump failures that plague basement-heavy floor plans throughout Brambleton and Lansdowne.

This isn't just about drying water—it's about understanding the $500,000 to $1.5 million homes we serve, navigating builder warranty claims when applicable, and protecting your investment accordingly.`,

    architectureNote: "Newer construction (2000-present) with finished basements, open floor plans, and modern materials. Many properties under 10-year builder warranties with construction defect implications. Mix of single-family, townhomes, and condos in master-planned communities.",

    commonIssues: [
      "Finished basement flooding—sump pump failures during summer storms damage home offices, media rooms, and playrooms throughout Ashburn's basement-heavy homes",
      "Builder defect water intrusion—flashing failures, grading issues, and window installation defects in rapidly-built homes cause water entry years after construction",
      "HVAC condensate leaks—improperly installed drain lines in newer construction create hidden water damage in walls and ceilings",
      "Appliance supply line failures—builder-grade supply lines to refrigerators, washing machines, and dishwashers fail prematurely",
      "Foundation settling—Loudoun County's clay soil creates cracks in newer foundations as homes settle during their first decade"
    ]
  },

  // Service Area Description
  serviceAreaDescription: `Flood Doctor of Ashburn provides 24/7 water damage restoration throughout Ashburn and surrounding Loudoun County. Our primary service area includes Ashburn, Broadlands, Brambleton, One Loudoun, Lansdowne, and Ashburn Farm—all within our 30-minute rapid response zone. Secondary coverage extends to Sterling, Leesburg, South Riding, and Dulles within 45 minutes.

From the townhomes along Loudoun County Parkway to the single-family communities near Ashburn Village, we serve every corner of Ashburn's 20147, 20148, and 20149 ZIP codes.`,

  // Emergency CTA
  emergencyCTA: {
    headline: "Water Emergency in Ashburn?",
    subtext: "Don't wait—water damage doubles every hour. Our crews are stationed throughout Loudoun County for immediate response.",
    buttonText: "Call (703) 656-0109 Now"
  },

  // Testimonial Section Intro
  localTestimonialIntro: "What Ashburn Homeowners Say About Flood Doctor",

  // FAQ Section - 7 Ashburn-specific FAQs
  faqSection: [
    {
      question: "How quickly can you respond to a water emergency in Ashburn?",
      answer: "We guarantee 30-minute response to all Ashburn neighborhoods, including Broadlands, Brambleton, One Loudoun, Lansdowne, and Ashburn Farm. Our crews are stationed throughout Loudoun County—not at a distant warehouse—so we're already nearby when you call."
    },
    {
      question: "Do you handle builder warranty water damage claims?",
      answer: "Absolutely. Many Ashburn homes are still under 10-year structural warranties. We document water damage to support warranty claims, understand common construction defects in Loudoun County builds, and can coordinate with builders' insurance when defects caused the damage. This expertise matters when determining who pays for restoration."
    },
    {
      question: "What should I do if my basement floods in Ashburn?",
      answer: "First, ensure everyone's safety and turn off electricity to affected areas if safe to do so. Call us immediately at (703) 656-0109. Don't attempt to remove water yourself—improper extraction can push water into wall cavities. Our certified technicians will extract water, set up industrial drying equipment, and prevent mold growth within the critical 24-48 hour window."
    },
    {
      question: "Will you work directly with my insurance company?",
      answer: "Yes. We handle direct billing with all major insurance carriers and document everything for your claim. Many Ashburn homeowners work with local agencies familiar with Loudoun County properties—we know their adjusters and processes, which speeds up your claim approval."
    },
    {
      question: "Why do newer Ashburn homes experience water damage?",
      answer: "Ashburn's construction boom meant some homes were built quickly. Common issues include: improperly installed flashing that allows water behind siding, grading that directs water toward foundations instead of away, HVAC condensate lines that leak into walls, and builder-grade supply lines that fail prematurely. We address the immediate damage and document causes for warranty claims when applicable."
    },
    {
      question: "Can you work with my HOA's requirements?",
      answer: "Yes. Ashburn's master-planned communities have specific rules about contractor access, work hours, and vehicle parking. We coordinate with HOA management, work within community guidelines, and minimize disruption to neighbors. Our crews are familiar with Broadlands, Brambleton, Belmont, and other managed communities."
    },
    {
      question: "What's different about restoring newer construction versus older homes?",
      answer: "Modern materials and building techniques require different approaches. OSB subfloors absorb water differently than plywood, spray foam insulation traps moisture, and engineered flooring has specific drying requirements. We're trained in modern materials and understand how today's homes are built—essential for proper restoration."
    }
  ]
};

// Export helper function to merge with franchise data
export function getAshburnHomepageData(franchise: FranchiseData) {
  return {
    ...ashburnHomepageContent,
    franchise,
    phone: franchise.phone,
    serviceArea: franchise.serviceArea,
    manager: franchise.manager,
    emergencyContacts: franchise.emergencyContacts
  };
}
