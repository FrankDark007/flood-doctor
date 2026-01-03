// src/data/seo/content-matrix.ts
// Content Differentiation Matrix - Ensures NO content overlap between cities
// Generated: January 3, 2026

export interface CityDifferentiation {
  primaryAngle: string;
  housingFocus: string;
  uniqueProblems: string[];
  toneModifier: string;
  competitorGap: string;
  keyLandmarks: string[];
  uniqueNeighborhoods: string[];
  seasonalFocus: string;
  targetPersona: string;
}

export const contentDifferentiationMatrix: Record<string, CityDifferentiation> = {
  mclean: {
    primaryAngle: "Estate home protection, high-value asset safeguarding",
    housingFocus: "4,000-15,000 sq ft estates with finished basements, wine cellars, home theaters",
    uniqueProblems: [
      "Wine cellar humidity and water damage",
      "Home theater flooding and electronics protection",
      "Pool house and cabana pipe bursts",
      "Private well and septic system failures",
      "Art collection water damage protection"
    ],
    toneModifier: "Luxury, discretion, asset protection, premium service",
    competitorGap: "No competitor mentions specific neighborhoods like Langley, The Reserve, Chesterbrook or targets estate homes",
    keyLandmarks: ["Chain Bridge", "Georgetown Pike", "Great Falls Park", "Langley High School", "McLean Community Center"],
    uniqueNeighborhoods: ["Langley", "Chesterbrook", "The Reserve", "Woodside Estates", "Salona Village", "Balls Hill", "El Nido"],
    seasonalFocus: "Summer storm sump pump failures, winter pool house freeze damage",
    targetPersona: "High-net-worth homeowner with $2M-$17M estate, values discretion and premium service"
  },

  arlington: {
    primaryAngle: "Urban density, multi-unit coordination, high-rise expertise",
    housingFocus: "High-rise condos (10-30 stories), historic rowhouses, mid-century ramblers",
    uniqueProblems: [
      "Upstairs unit leaks affecting multiple condos",
      "HOA coordination for multi-unit water events",
      "Tight equipment access in urban rowhouses",
      "Underground parking garage flooding",
      "Flat-roof mid-century home ice dam leaks"
    ],
    toneModifier: "Efficient, urban-savvy, HOA-experienced, dense environment expertise",
    competitorGap: "No competitor addresses high-rise condo water intrusion or HOA coordination specifically",
    keyLandmarks: ["Pentagon", "Arlington National Cemetery", "Ballston Quarter", "Clarendon Metro", "Rosslyn skyline"],
    uniqueNeighborhoods: ["Rosslyn", "Clarendon", "Ballston", "Crystal City", "Pentagon City", "Shirlington", "Lyon Village"],
    seasonalFocus: "HVAC condensate failures in summer, frozen exposed pipes in older buildings",
    targetPersona: "Urban professional in condo, military family near Pentagon, young family in townhome"
  },

  alexandria: {
    primaryAngle: "Historic preservation, BAR compliance, older infrastructure expertise",
    housingFocus: "1800s-1900s historic rowhouses, urban condos, suburban townhomes",
    uniqueProblems: [
      "Combined sewer backups in Old Town",
      "Board of Architectural Review compliance for repairs",
      "Older cast iron pipe failures",
      "Original plaster wall drying",
      "High water table basement flooding near Potomac"
    ],
    toneModifier: "Historic preservation expertise, regulatory knowledge, careful restoration",
    competitorGap: "No competitor mentions BAR compliance or historic district-specific restoration needs",
    keyLandmarks: ["King Street", "Torpedo Factory", "Old Town Waterfront", "George Washington Masonic Memorial"],
    uniqueNeighborhoods: ["Old Town", "Del Ray", "Rosemont", "Carlyle", "Kingstowne", "Belle Haven", "Potomac Yard"],
    seasonalFocus: "Spring Potomac flooding, winter combined sewer overflows",
    targetPersona: "Old Town historic homeowner, Del Ray young family, waterfront property owner"
  },

  fairfax: {
    primaryAngle: "Family neighborhoods, 1970s-90s homes, practical restoration",
    housingFocus: "Colonial and split-level single-family homes, Burke Centre townhomes",
    uniqueProblems: [
      "Split-level basement flooding",
      "Sump pump failures in older developments",
      "HVAC drain line clogs",
      "Washing machine supply line bursts",
      "Ice dam roof leaks in colonial homes"
    ],
    toneModifier: "Practical, family-focused, value-conscious, community-oriented",
    competitorGap: "No competitor targets Burke or Fairfax City specifically with neighborhood content",
    keyLandmarks: ["George Mason University", "Fairfax Corner", "Burke Lake Park", "Old Town Fairfax"],
    uniqueNeighborhoods: ["Fairfax City", "Burke", "Burke Centre", "Kings Park", "Mantua", "Fairfax Station"],
    seasonalFocus: "Winter ice dams on colonials, spring basement flooding",
    targetPersona: "Growing family in suburban colonial, GMU area rental property owner"
  },

  vienna: {
    primaryAngle: "Charming town character, mix of historic and luxury new construction",
    housingFocus: "1950s-70s colonials, newer luxury in Oakton, townhomes",
    uniqueProblems: [
      "Historic home foundation seepage",
      "Luxury finished basement flooding in Oakton",
      "Sump pump failures in established neighborhoods",
      "Hot water heater failures in aging homes",
      "Dishwasher and appliance leaks"
    ],
    toneModifier: "Community-oriented, charming, quality craftsmanship, local business feel",
    competitorGap: "No competitor mentions Church Street, Vienna Town, or Wolf Trap area specifically",
    keyLandmarks: ["Vienna Town Green", "Wolf Trap", "Meadowlark Gardens", "Church Street", "Vienna Metro"],
    uniqueNeighborhoods: ["Vienna Town", "Oakton", "Dunn Loring", "Wolftrap", "Tysons Woods", "Clarks Crossing"],
    seasonalFocus: "Summer Wolf Trap area flooding, winter frozen pipes in older homes",
    targetPersona: "Vienna Town longtime resident, Oakton luxury homeowner, Wolf Trap area family"
  },

  tysons: {
    primaryAngle: "Urban core, commercial and high-rise residential, modern building systems",
    housingFocus: "Luxury high-rise condos, Class A office buildings, mixed-use developments",
    uniqueProblems: [
      "High-rise condo water intrusion from HVAC",
      "Commercial office water damage",
      "Complex building system failures",
      "Underground parking flooding",
      "New construction defect claims"
    ],
    toneModifier: "Commercial expertise, property management relationships, modern building systems",
    competitorGap: "No competitor specifically addresses Tysons commercial properties or new construction defects",
    keyLandmarks: ["Tysons Corner Center", "Tysons Galleria", "Capital One HQ", "The Boro", "Tysons Metro"],
    uniqueNeighborhoods: ["Tysons Corner", "Tysons Central", "The Boro", "The Mile", "Scotts Run"],
    seasonalFocus: "Year-round HVAC issues, winter garage flooding from snow melt",
    targetPersona: "High-rise condo owner, commercial property manager, building HOA board member"
  },

  reston: {
    primaryAngle: "Planned community expertise, HOA navigation, diverse housing types",
    housingFocus: "Townhome clusters, garden condos, single-family, high-rise apartments near Town Center",
    uniqueProblems: [
      "Townhome cluster shared wall water migration",
      "Lake-adjacent property flooding",
      "Reston Association compliance requirements",
      "Condo building multi-unit coordination",
      "Basement flooding in wooded areas"
    ],
    toneModifier: "Community-savvy, HOA-experienced, outdoor lifestyle understanding",
    competitorGap: "No competitor mentions Reston Association, Lake Anne, or planned community requirements",
    keyLandmarks: ["Reston Town Center", "Lake Anne Plaza", "South Lakes", "W&OD Trail", "Lake Fairfax Park"],
    uniqueNeighborhoods: ["Reston Town Center", "South Lakes", "Lake Anne", "Hunters Woods", "North Point"],
    seasonalFocus: "Spring lake area flooding, fall leaf clog issues",
    targetPersona: "Reston Association member, townhome cluster owner, trail lifestyle family"
  },

  herndon: {
    primaryAngle: "Data center corridor, mixed residential-commercial, downtown charm",
    housingFocus: "1970s-90s single-family and townhomes, historic downtown properties",
    uniqueProblems: [
      "Townhome water intrusion in developments",
      "Commercial data center emergency response",
      "Older infrastructure failures",
      "Storm drain backups",
      "Rental property quick turnaround needs"
    ],
    toneModifier: "Practical, commercial capability, downtown community feel",
    competitorGap: "No competitor addresses data center corridor commercial needs or downtown Herndon",
    keyLandmarks: ["Herndon Town Green", "W&OD Trail", "Dulles Airport", "Worldgate Centre"],
    uniqueNeighborhoods: ["Downtown Herndon", "Fox Mill", "Worldgate", "Franklin Farm", "McNair", "Floris"],
    seasonalFocus: "Summer data center cooling emergencies, winter downtown pipe bursts",
    targetPersona: "Downtown Herndon homeowner, data center facility manager, rental property investor"
  },

  ashburn: {
    primaryAngle: "New construction expertise, builder warranty claims, HOA communities",
    housingFocus: "2000-present new construction, finished basements, open floor plans, 55+ communities",
    uniqueProblems: [
      "New construction defect water intrusion",
      "Builder warranty water damage claims",
      "HOA drainage and grading issues",
      "Rapid development runoff flooding",
      "Sump pump failures in newer homes"
    ],
    toneModifier: "New construction savvy, builder relationship, growing community focus",
    competitorGap: "No competitor specifically addresses Ashburn builder warranty claims or Loudoun County new construction",
    keyLandmarks: ["One Loudoun", "Brambleton Town Center", "Ashburn Ice House", "Topgolf", "Loudoun Station Metro"],
    uniqueNeighborhoods: ["Broadlands", "Brambleton", "One Loudoun", "Ashburn Farm", "Belmont Country Club", "Lansdowne"],
    seasonalFocus: "Spring grading issues, year-round new construction defects",
    targetPersona: "New home buyer with warranty claim, Broadlands HOA member, 55+ community resident"
  },

  springfield: {
    primaryAngle: "I-95 corridor families, military community, established neighborhoods",
    housingFocus: "1960s-80s split-levels, colonials, ramblers, Fort Belvoir proximity",
    uniqueProblems: [
      "1960s-70s split-level basement flooding",
      "Older sewer infrastructure backups",
      "Lake Accotink area flooding",
      "Military housing water damage claims",
      "Townhome shared wall issues"
    ],
    toneModifier: "Family-focused, military-friendly, practical solutions",
    competitorGap: "No competitor specifically addresses Fort Belvoir military families or Lake Accotink area",
    keyLandmarks: ["Springfield Town Center", "Lake Accotink", "Franconia-Springfield Metro", "Fort Belvoir"],
    uniqueNeighborhoods: ["West Springfield", "Franconia", "Kingstowne", "Newington", "Rolling Valley"],
    seasonalFocus: "Spring Lake Accotink flooding, winter older pipe bursts",
    targetPersona: "Military family near Fort Belvoir, West Springfield longtime resident, Kingstowne commuter"
  },

  fallschurch: {
    primaryAngle: "Historic charm meets apartment density, Lake Barcroft expertise",
    housingFocus: "1920s-60s bungalows, colonials, apartment complexes, Lake Barcroft lakefront",
    uniqueProblems: [
      "Historic home foundation seepage",
      "1950s-60s plumbing failures",
      "Apartment complex multi-unit damage",
      "Lake Barcroft waterfront challenges",
      "Older sewer lateral collapses"
    ],
    toneModifier: "Historic appreciation, community chamber involvement, local business partner",
    competitorGap: "No competitor mentions Lake Barcroft, Eden Center area, or Falls Church City specifically",
    keyLandmarks: ["State Theatre", "Eden Center", "Lake Barcroft", "Falls Church Farmers Market"],
    uniqueNeighborhoods: ["Falls Church City", "Seven Corners", "Baileys Crossroads", "Lake Barcroft", "Pimmit Hills"],
    seasonalFocus: "Spring Lake Barcroft flooding, winter older infrastructure failures",
    targetPersona: "Falls Church City historic home owner, Lake Barcroft lakefront resident, apartment complex manager"
  },

  greatfalls: {
    primaryAngle: "Ultra-luxury estates, equestrian properties, art and collection protection",
    housingFocus: "5,000-20,000+ sq ft custom estates on 1-5+ acre lots, horse barns",
    uniqueProblems: [
      "Estate finished basement and wine cellar flooding",
      "Pool house and outdoor kitchen water damage",
      "Private well and septic system failures",
      "Art collection and antique protection",
      "Horse barn and equestrian facility flooding"
    ],
    toneModifier: "Ultra-premium, discretion paramount, asset protection focus",
    competitorGap: "No competitor addresses equestrian properties or Great Falls' ultra-luxury estate market",
    keyLandmarks: ["Great Falls Park", "Riverbend Park", "Great Falls Village Centre", "Old Brogue", "Georgetown Pike"],
    uniqueNeighborhoods: ["Great Falls Village", "Forestville", "Hickory Farms", "Seneca Estates", "Riverbend"],
    seasonalFocus: "Summer storm estate flooding, winter well house and barn freeze damage",
    targetPersona: "Ultra-high-net-worth estate owner, equestrian property owner, art collector"
  },

  lorton: {
    primaryAngle: "Growing community, Occoquan waterfront, new development expertise",
    housingFocus: "2005+ new construction in Laurel Hill, waterfront near Occoquan, wooded lots",
    uniqueProblems: [
      "New development drainage and grading issues",
      "Occoquan River area tidal flooding",
      "Waterfront property intrusion",
      "Crawlspace moisture in wooded areas",
      "Sump pump failures in newer homes"
    ],
    toneModifier: "Growing community feel, waterfront expertise, new homeowner focused",
    competitorGap: "No competitor mentions Laurel Hill, Mason Neck, or Occoquan waterfront specifically",
    keyLandmarks: ["Workhouse Arts Center", "Mason Neck State Park", "Lorton VRE Station", "Occoquan Bay NWR"],
    uniqueNeighborhoods: ["Laurel Hill", "Mason Neck", "Occoquan", "South County", "Gunston"],
    seasonalFocus: "Spring Occoquan area flooding, year-round development drainage issues",
    targetPersona: "Laurel Hill new homeowner, Mason Neck waterfront owner, Lorton commuter family"
  }
};

// Sentence uniqueness validation helper
export function checkSentenceUniqueness(sentence: string, cityId: string, allContent: Record<string, string[]>): boolean {
  const normalizedSentence = sentence.toLowerCase().trim();

  for (const [city, sentences] of Object.entries(allContent)) {
    if (city !== cityId) {
      for (const existingSentence of sentences) {
        if (existingSentence.toLowerCase().trim() === normalizedSentence) {
          return false; // Duplicate found
        }
      }
    }
  }
  return true; // Unique
}

// Get differentiation for a city
export function getCityDifferentiation(cityId: string): CityDifferentiation | undefined {
  return contentDifferentiationMatrix[cityId];
}

// Validate content meets uniqueness requirements
export function validateCityContent(cityId: string, content: {
  neighborhoodMentions: number;
  landmarkMentions: number;
  uniqueSentences: number;
  totalSentences: number;
}): { valid: boolean; issues: string[] } {
  const issues: string[] = [];

  if (content.neighborhoodMentions < 3) {
    issues.push(`Homepage must mention at least 3 neighborhoods (found ${content.neighborhoodMentions})`);
  }

  if (content.landmarkMentions < 2) {
    issues.push(`Homepage must mention at least 2 landmarks (found ${content.landmarkMentions})`);
  }

  const uniquenessRate = content.uniqueSentences / content.totalSentences;
  if (uniquenessRate < 0.95) {
    issues.push(`Homepage must be 95%+ unique (found ${Math.round(uniquenessRate * 100)}%)`);
  }

  return {
    valid: issues.length === 0,
    issues
  };
}
