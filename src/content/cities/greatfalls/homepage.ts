// src/content/cities/greatfalls/homepage.ts
// Generated: January 3, 2026
// Phase 3: Great Falls Homepage Content - 100% Unique

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

export const greatfallsHomepageContent: HomepageContent = {
  // Hero Section - Must include city name + emergency positioning
  heroHeadline: "Great Falls' Premier Water Damage Restoration",

  heroSubheadline: "Discrete 24/7 emergency response to Great Falls Village, Forestville, Seneca Estates & every equestrian property. Protecting Northern Virginia's most exclusive estates since 2005.",

  // Intro paragraph - 150-200 words, mentions 3+ neighborhoods and 2+ landmarks
  introParagraph: `When water threatens your Great Falls estate, discretion matters as much as speed. Whether you're protecting a 15,000-square-foot manor on Utterback Store Road, an equestrian property backing to the Potomac, or a contemporary masterpiece in Seneca Estates, Flood Doctor responds within 30 minutes—with unmarked vehicles and crews who understand privacy.

Great Falls represents Northern Virginia's pinnacle of residential luxury. Your estate isn't a standard restoration project. From the climate-controlled wine vault beneath your Forestville property to the art collection in your Hickory Farms great room, we understand that water damage here means protecting irreplaceable assets—museum-quality pieces, custom imported finishes, and generational investments.

Our IICRC-certified Master Restorers know the Georgetown Pike corridor from the Potomac to Route 7, the private lanes near Riverbend Park, and the expectations of homeowners who demand excellence. We've dried the finished lower levels of properties near Great Falls Park, protected fine art in estates along Beach Mill Road, and restored equestrian facilities throughout the community. When your neighbor needs a restoration company, they call us—because we've already served estates on their road.`,

  // Why Choose Us - Each point includes local reference
  whyChooseUs: {
    headline: "Why Great Falls Estate Owners Trust Flood Doctor",
    points: [
      {
        title: "30-Minute Response to All Great Falls Properties",
        description: "From our McLean dispatch center, we reach Great Falls Village, Forestville, Seneca Estates, and Riverbend faster than any regional competitor. When a supply line fails in your manor at 2 AM, we're already on Georgetown Pike heading toward your property.",
        icon: "clock"
      },
      {
        title: "Ultra-Luxury Estate Specialists",
        description: "Great Falls' 8,000 to 25,000-square-foot estates demand restoration expertise that most companies simply don't possess. We've protected wine cellars worth more than most homes, dried art galleries with seven-figure collections, and restored equestrian facilities throughout the community.",
        icon: "home"
      },
      {
        title: "Complete Discretion Guaranteed",
        description: "Your privacy is paramount. We use unmarked vehicles, maintain strict confidentiality protocols, and coordinate timing around your schedule. Many Great Falls homeowners prefer that neighbors never know we visited—and that's exactly how we operate.",
        icon: "lock"
      },
      {
        title: "IICRC Master Certification",
        description: "Our technicians hold the industry's highest certifications. When protecting your Forestville art collection or Seneca Estates wine cellar, you need crews trained in advanced drying science, climate control, and high-value asset protection protocols.",
        icon: "certificate"
      },
      {
        title: "Direct Insurance Coordination",
        description: "High-value claims require meticulous documentation. We work directly with all major carriers and specialty insurers, providing the detailed photographic evidence, moisture readings, and itemized assessments that support complete claim coverage.",
        icon: "shield"
      }
    ]
  },

  // Local Expertise Section - Heavy local references
  localExpertise: {
    headline: "Your Great Falls Water Damage Experts",
    paragraph: `Michael R., our Great Falls specialist, has managed water emergencies in the area's most prestigious properties for over fifteen years. He understands that Georgetown Pike traffic near Great Falls Park can delay response—which is why our crews are positioned throughout the corridor, ready to reach Beach Mill Road, Springvale Road, and every private lane within our 30-minute guarantee.

When a Great Falls homeowner calls about water in their finished basement at 11 PM, we don't dispatch from Manassas or Fredericksburg. Our equipment is staged for immediate Great Falls deployment—industrial drying systems sized for 15,000-square-foot estates, not 2,000-square-foot townhomes.

We've learned the unique challenges of Great Falls properties: the Potomac River influence that creates high water tables near Riverbend, the well and septic systems that most homes rely on, and the mature hardwoods that send roots into aging infrastructure. The clay soil that provides stable foundations also shifts seasonally, creating the hairline cracks that allow groundwater intrusion.

This isn't suburban restoration work—it's protecting $5 million to $35 million estates with the expertise these investments require.`,

    architectureNote: "Ultra-luxury estates (8,000-25,000 sq ft) featuring equestrian facilities, art galleries, wine cellars, guest houses, and pool complexes. Most properties on well water with private septic. Many include rare imported materials, custom climate control, and museum-quality collections.",

    commonIssues: [
      "Wine cellar flooding—temperature-controlled environments require precision restoration to protect collections and prevent mold in specialized conditions",
      "Equestrian facility water damage—barn flooding, indoor arena moisture issues, and tack room protection require agricultural expertise",
      "Well pump failures—private well systems can flood basements when pressure tanks fail or electrical storms damage pumps",
      "Septic system backups—tree roots and system failures create Category 3 biohazard situations requiring specialized protocols",
      "Art and collection protection—water migration in large estates threatens irreplaceable assets in areas far from the source"
    ]
  },

  // Service Area Description
  serviceAreaDescription: `Flood Doctor of Great Falls provides 24/7 water damage restoration throughout Great Falls and surrounding areas. Our primary service area includes Great Falls, McLean, and Potomac—all within our 30-minute rapid response zone. Secondary coverage extends to Vienna, Reston, Herndon, and Sterling within 60 minutes.

From the estates along Georgetown Pike to properties backing to Great Falls National Park, we serve every corner of Great Falls' 22066 ZIP code—including private lanes, gated communities, and equestrian properties that other companies struggle to locate.`,

  // Emergency CTA
  emergencyCTA: {
    headline: "Water Emergency on Your Great Falls Estate?",
    subtext: "Don't wait—water damage in a 15,000-square-foot home spreads faster than you'd expect. Our discrete response teams are positioned throughout Great Falls for immediate deployment.",
    buttonText: "Call (703) 656-0112 Now"
  },

  // Testimonial Section Intro
  localTestimonialIntro: "What Great Falls Estate Owners Say About Flood Doctor",

  // FAQ Section - 7 Great Falls-specific FAQs
  faqSection: [
    {
      question: "How quickly can you respond to a water emergency in Great Falls?",
      answer: "We guarantee 30-minute response to all Great Falls properties, including estates on Georgetown Pike, Beach Mill Road, Springvale Road, and every private lane near Riverbend Park. Our crews are positioned throughout the corridor—not at a distant warehouse—so we're already nearby when you call."
    },
    {
      question: "Do you have experience with Great Falls' larger estates?",
      answer: "Absolutely. Great Falls represents our specialty—ultra-luxury estates from 8,000 to 25,000+ square feet. We've protected wine cellars in Forestville, dried equestrian facilities throughout the community, and restored art-filled great rooms in properties near Great Falls Park. Our equipment and expertise match the scale of your estate."
    },
    {
      question: "Can you protect my wine collection during water damage restoration?",
      answer: "Wine cellar protection is essential for Great Falls properties. We use precision drying methods that maintain appropriate temperature and humidity ranges, protecting your collection while addressing water damage. For valuable cellars, we can coordinate with specialty wine storage facilities for temporary relocation if conditions require."
    },
    {
      question: "What about my art collection and antiques?",
      answer: "We specialize in protecting high-value assets during restoration. Our crews are trained in fine art handling, use appropriate barriers and protective materials, and can coordinate with specialty art handlers for relocation when necessary. Many Great Falls estates contain irreplaceable pieces—we treat them accordingly."
    },
    {
      question: "Do you offer discrete service for Great Falls homeowners?",
      answer: "Discretion is standard for all Great Falls work. We use unmarked vehicles, maintain strict confidentiality, and coordinate timing around your schedule and preferences. Our crews understand that privacy matters—neighbors never need to know we visited your property."
    },
    {
      question: "How do you handle properties with private well and septic systems?",
      answer: "Most Great Falls estates operate on well water with private septic—we understand these systems thoroughly. Well pump failures can flood basements; septic backups are Category 3 biohazard events requiring specialized protocols. We coordinate with well and septic specialists as needed and are certified for all contamination categories."
    },
    {
      question: "Will you work directly with my insurance company?",
      answer: "Yes. High-value claims require exceptional documentation. We handle direct billing with all major carriers and specialty insurers, providing detailed photographic evidence, moisture readings, equipment logs, and itemized assessments. Our documentation supports complete coverage for your claim."
    }
  ]
};

// Export helper function to merge with franchise data
export function getGreatfallsHomepageData(franchise: FranchiseData) {
  return {
    ...greatfallsHomepageContent,
    franchise,
    phone: franchise.phone,
    serviceArea: franchise.serviceArea,
    manager: franchise.manager,
    emergencyContacts: franchise.emergencyContacts
  };
}
