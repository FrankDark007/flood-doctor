// src/content/cities/mclean/homepage.ts
// Generated: January 3, 2026
// Phase 3: McLean Homepage Content - 100% Unique

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

export const mcleanHomepageContent: HomepageContent = {
  // Hero Section - Must include city name + emergency positioning
  heroHeadline: "McLean's 24/7 Water Damage Restoration Experts",

  heroSubheadline: "30-minute emergency response to Langley, Chesterbrook, The Reserve & all McLean neighborhoods. Protecting Northern Virginia's finest homes since 2005.",

  // Intro paragraph - 150-200 words, mentions 3+ neighborhoods and 2+ landmarks
  introParagraph: `When water threatens your McLean estate, every minute counts. Whether you're in a Langley colonial near Chain Bridge, a Chesterbrook family home backing to Potomac River views, or a gated property in The Reserve, Flood Doctor responds within 30 minutes—day or night.

McLean's homes demand specialized care. Your 8,000-square-foot estate isn't a cookie-cutter restoration job. From the wine cellar beneath your Woodside Estates property to the home theater in your Salona Village colonial, we understand that water damage here means protecting irreplaceable custom millwork, hardwood floors, and high-value collections.

Our IICRC-certified crews know the Georgetown Pike corridor, the winding roads of Balls Hill, and the tight timelines McLean homeowners expect. We've dried the basements of Langley High School families, protected art collections in El Nido estates, and restored finished lower levels throughout McLean Hamlet. When your neighbor needs a recommendation, they call us—because we've already served their street.`,

  // Why Choose Us - Each point includes local reference
  whyChooseUs: {
    headline: "Why McLean Homeowners Trust Flood Doctor",
    points: [
      {
        title: "30-Minute Response to All McLean Neighborhoods",
        description: "From our dispatch center in Falls Church, we reach Langley, Chesterbrook, The Reserve, and Woodside Estates faster than any regional competitor. When your sump pump fails during a summer thunderstorm, we're already on Georgetown Pike heading your way.",
        icon: "clock"
      },
      {
        title: "Estate Home Specialists",
        description: "McLean's 4,000 to 15,000-square-foot homes require restoration expertise most companies don't have. We've protected wine cellars in The Reserve, dried home theaters in Langley Farms, and saved custom millwork throughout Salona Village and McLean Hamlet.",
        icon: "home"
      },
      {
        title: "Insurance Billing Handled Directly",
        description: "Your Tysons Insurance Group agent knows us. We work directly with all major carriers, document everything for claims, and handle the paperwork so you focus on your family—not forms.",
        icon: "shield"
      },
      {
        title: "IICRC Master Certification",
        description: "Our technicians hold the industry's highest certifications. When protecting your Balls Hill estate or Evermay property, you need crews trained in advanced drying science, mold prevention, and high-value asset protection.",
        icon: "certificate"
      },
      {
        title: "Discrete, Professional Service",
        description: "McLean homeowners value privacy. Our unmarked vehicles, professional crews, and efficient process minimize disruption to your neighborhood and household—whether you're in Ingleside, Franklin Park, or the exclusive enclaves off Old Dominion Drive.",
        icon: "lock"
      }
    ]
  },

  // Local Expertise Section - Heavy local references
  localExpertise: {
    headline: "Your McLean Water Damage Experts",
    paragraph: `Alex D., our McLean Branch Manager, lives in Tysons and has managed water emergencies in McLean's estate properties for over a decade. He knows that Route 7 traffic during rush hour can add 20 minutes to response times—which is why our crews are stationed throughout the McLean corridor, not just at a central warehouse.

When a Chesterbrook homeowner calls at 2 AM about a burst pipe, we don't dispatch from Manassas or Fredericksburg. Our trucks are already positioned to reach Chain Bridge Road, Georgetown Pike, and Old Dominion Drive within our 30-minute guarantee.

We've learned the unique challenges of McLean homes: the clay soil that shifts foundations during wet seasons, the mature oak and maple roots that invade sewer lines in established neighborhoods like Langley and Salona Village, and the high water tables near the Potomac that cause persistent basement moisture in Balls Hill and El Nido properties.

This isn't just about drying water—it's about understanding the $2 million to $17 million homes we serve and protecting them accordingly.`,

    architectureNote: "Large estate homes (4,000-15,000 sq ft) with finished basements, custom millwork, and high-value assets including wine cellars, home theaters, and art collections. Many properties on well water with private septic systems.",

    commonIssues: [
      "Finished basement flooding in estate homes—sump pump failures during summer storms can damage wine cellars, home theaters, and guest quarters",
      "Pool house and cabana pipe bursts—seasonal freeze damage threatens outdoor living spaces on larger properties",
      "Tree root intrusions—mature oaks in Chesterbrook and Langley neighborhoods infiltrate aging sewer lines",
      "Foundation seepage from clay soil—Northern Virginia's expanding/contracting soil creates cracks in older foundations",
      "HVAC and appliance leaks—whole-house humidifiers, ice makers, and multi-zone systems in large homes create hidden water sources"
    ]
  },

  // Service Area Description
  serviceAreaDescription: `Flood Doctor of McLean provides 24/7 water damage restoration throughout McLean and surrounding areas. Our primary service area includes McLean, Tysons, Tysons Corner, and Great Falls—all within our 30-minute rapid response zone. Secondary coverage extends to Vienna, Falls Church, Langley, and Pimmit Hills within 60 minutes.

From the estates along Georgetown Pike to the family neighborhoods near McLean Community Center, we serve every corner of McLean's 22101, 22102, and 22106 ZIP codes.`,

  // Emergency CTA
  emergencyCTA: {
    headline: "Water Emergency in McLean?",
    subtext: "Don't wait—water damage doubles every hour. Our crews are stationed throughout McLean for immediate response.",
    buttonText: "Call (703) 656-0101 Now"
  },

  // Testimonial Section Intro
  localTestimonialIntro: "What McLean Homeowners Say About Flood Doctor",

  // FAQ Section - 7 McLean-specific FAQs
  faqSection: [
    {
      question: "How quickly can you respond to a water emergency in McLean?",
      answer: "We guarantee 30-minute response to all McLean neighborhoods, including Langley, Chesterbrook, The Reserve, Woodside Estates, and Salona Village. Our crews are stationed throughout the McLean corridor—not at a distant warehouse—so we're already nearby when you call."
    },
    {
      question: "Do you have experience with McLean's larger estate homes?",
      answer: "Absolutely. We specialize in McLean's 4,000 to 15,000-square-foot estates. We've protected wine cellars in The Reserve, dried home theaters in Langley Farms, and restored finished basements throughout Woodside Estates and McLean Hamlet. Our equipment and expertise match the scale of your property."
    },
    {
      question: "What should I do if my basement floods in McLean?",
      answer: "First, ensure everyone's safety and turn off electricity to affected areas if safe to do so. Call us immediately at (703) 656-0101. Don't attempt to remove water yourself—improper extraction can push water into wall cavities. Our certified technicians will extract water, set up industrial drying equipment, and prevent mold growth within the critical 24-48 hour window."
    },
    {
      question: "Will you work directly with my insurance company?",
      answer: "Yes. We handle direct billing with all major insurance carriers and document everything for your claim. Many McLean homeowners work with Tysons Insurance Group and other local agencies—we know their adjusters and processes, which speeds up your claim approval."
    },
    {
      question: "Why do McLean homes experience basement flooding?",
      answer: "McLean's clay soil expands when wet and contracts when dry, causing foundation shifts and cracks over time. Combined with high water tables near the Potomac River and mature tree roots in neighborhoods like Chesterbrook and Langley, even well-maintained homes can experience water intrusion. We address both the immediate damage and help identify underlying causes."
    },
    {
      question: "Can you protect my wine cellar during water damage restoration?",
      answer: "Wine cellar protection is a specialty for McLean properties. We use targeted extraction methods and precision humidity control to protect your collection while drying surrounding areas. Our crews are trained in handling high-value environments—from wine cellars to art storage and home theaters."
    },
    {
      question: "Do you offer discrete service for high-profile McLean homeowners?",
      answer: "Yes. We use unmarked vehicles and professional crews who respect your privacy. Our efficient process minimizes neighborhood disruption, and we coordinate timing around your schedule. Many McLean homeowners appreciate that we don't advertise our presence on their property."
    }
  ]
};

// Export helper function to merge with franchise data
export function getMcleanHomepageData(franchise: FranchiseData) {
  return {
    ...mcleanHomepageContent,
    franchise,
    phone: franchise.phone,
    serviceArea: franchise.serviceArea,
    manager: franchise.manager,
    emergencyContacts: franchise.emergencyContacts
  };
}
