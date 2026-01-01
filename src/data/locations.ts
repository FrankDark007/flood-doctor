import { LocationData, ExtendedLocationData } from '../types';

// Re-export for convenience
export type { ExtendedLocationData } from '../types';

/**
 * Extended Location Data for Subdomain Architecture
 *
 * Each location maps to: {subdomain}.flood.doctor
 * Contains rich local content for SEO and user experience.
 */

export const LOCATIONS: ExtendedLocationData[] = [
  // ============================================
  // FAIRFAX COUNTY - CORE AREAS
  // ============================================
  {
    subdomain: 'fairfax',
    title: 'Fairfax',
    slug: '/locations/fairfax/',
    url: 'https://fairfax.flood.doctor/',
    region: 'NOVA',
    county: 'Fairfax County / City of Fairfax',
    zip: '22030, 22031, 22032, 22033, 22035',
    population: '24,000+ (city)',
    responseTime: '40 min',
    geo: { latitude: 38.8462, longitude: -77.3064 },
    description: 'Water damage restoration experts in Fairfax, VA. Serving the City of Fairfax and surrounding Fairfax County with 24/7 emergency services.',
    metaTitle: 'Water Damage Restoration Fairfax VA | 24/7 Emergency | Flood Doctor',
    metaDescription: 'Fast water damage restoration in Fairfax, VA. 40-minute response, IICRC certified. Basement flooding, mold remediation, sewage cleanup. Call (877) 497-0007.',

    neighborhoods: [
      'City of Fairfax',
      'Fairfax Corner',
      'Fair Oaks',
      'Burke',
      'Burke Centre',
      'Kings Park',
      'Mantua',
      'Mosby Woods',
      'Fairfax Station',
    ],
    landmarks: [
      'George Mason University',
      'Fair Oaks Mall',
      'Fairfax County Government Center',
      'Fairfax Corner',
      'Burke Lake Park',
    ],
    commonIssues: [
      'Basement flooding from clay soil drainage issues',
      'Sump pump failures during heavy storms',
      'Older home plumbing failures in established neighborhoods',
      'HVAC condensation issues in humid summers',
    ],
    topServices: [
      { title: 'Water Damage Restoration', path: '/services/residential/restoration-services/water-damage-restoration/', reason: 'Most common emergency call' },
      { title: 'Basement Flooding', path: '/services/residential/specialty-services/basement-flooding/', reason: 'Clay soil causes drainage issues' },
      { title: 'Mold Remediation', path: '/services/residential/cleanup-services/mold-remediation/', reason: 'High humidity region' },
    ],
    faqs: [
      { question: 'Do you serve both Fairfax City and Fairfax County?', answer: 'Yes, we serve the entire Fairfax area including the City of Fairfax and all of Fairfax County. Our crews are positioned for rapid response throughout the region.' },
      { question: 'How quickly can you respond to emergencies in Fairfax?', answer: 'We average 40-minute response times throughout Fairfax. For severe emergencies, we prioritize dispatch to minimize damage.' },
      { question: 'Do you offer commercial water damage services in Fairfax?', answer: 'Yes, we serve both residential and commercial properties. We have experience with office buildings, retail spaces, and industrial facilities throughout Fairfax.' },
      { question: 'What causes most water damage in Fairfax?', answer: 'Common causes include burst pipes in winter, basement flooding from poor drainage (Fairfax has clay-heavy soil), water heater failures, and storm damage. Older homes in established Fairfax neighborhoods often have aging plumbing systems.' },
    ],
    testimonials: [
      { quote: 'Responded within 30 minutes on a Sunday. Saved our finished basement from total loss.', author: 'James R.', neighborhood: 'Burke Centre', service: 'Basement Flooding' },
      { quote: 'They handled everything with our insurance. Zero hassle.', author: 'Patricia M.', neighborhood: 'City of Fairfax', service: 'Water Damage' },
    ],
  },

  {
    subdomain: 'arlington',
    title: 'Arlington',
    slug: '/locations/arlington/',
    url: 'https://arlington.flood.doctor/',
    region: 'NOVA',
    county: 'Arlington County',
    zip: '22201, 22202, 22203, 22204, 22205, 22206, 22207, 22209',
    population: '238,000+',
    responseTime: '35 min',
    geo: { latitude: 38.8816, longitude: -77.0910 },
    description: 'Emergency water damage restoration for Arlington, VA. Our team serves Ballston, Clarendon, Rosslyn, and all Arlington neighborhoods with rapid 24/7 response.',
    metaTitle: 'Water Damage Restoration Arlington VA | 35-Min Response | Flood Doctor',
    metaDescription: '24/7 water damage restoration in Arlington, VA. Serving Ballston, Clarendon, Rosslyn. High-rise specialists. IICRC certified. Call (877) 497-0007.',

    neighborhoods: [
      'Ballston',
      'Clarendon',
      'Rosslyn',
      'Pentagon City',
      'Crystal City',
      'Shirlington',
      'Columbia Pike',
      'Cherrydale',
      'Lyon Village',
      'Ashton Heights',
      'Virginia Square',
    ],
    landmarks: [
      'Arlington National Cemetery',
      'Pentagon',
      'Reagan National Airport',
      'Ballston Quarter',
      'Rosslyn Gateway',
    ],
    commonIssues: [
      'Condo/high-rise water damage affecting multiple units',
      'Aging infrastructure in older buildings',
      'Storm drain backups in lower-lying areas',
      'Sprinkler system malfunctions in commercial buildings',
    ],
    topServices: [
      { title: 'Water Damage Restoration', path: '/services/residential/restoration-services/water-damage-restoration/', reason: 'Dense population, high demand' },
      { title: 'Commercial Water Damage', path: '/services/commercial/restoration-services/commercial-water-damage/', reason: 'Many high-rises and offices' },
      { title: 'Sewage Cleanup', path: '/services/residential/cleanup-services/sewage-cleanup/', reason: 'Older sewer infrastructure' },
    ],
    faqs: [
      { question: 'How quickly can you arrive in Arlington?', answer: 'Our Arlington response time averages 35 minutes. With crews positioned throughout Northern Virginia, we can reach any Arlington neighborhood quickly.' },
      { question: 'Do you handle condo and apartment water damage in Arlington?', answer: 'Yes, we specialize in multi-unit properties. We work with HOAs and property managers to minimize damage and coordinate repairs across affected units.' },
      { question: 'What Arlington neighborhoods do you serve?', answer: 'We serve all of Arlington including Ballston, Clarendon, Rosslyn, Pentagon City, Crystal City, Shirlington, and Columbia Pike.' },
      { question: 'Do you work with Arlington high-rise buildings?', answer: 'Absolutely. We have extensive experience with Arlington\'s high-rise condos and apartments. We coordinate with building management to address water damage while minimizing disruption to other residents.' },
    ],
    testimonials: [
      { quote: 'Water from upstairs flooded our Clarendon condo. They coordinated with building management and had us dried out in 3 days.', author: 'Michael S.', neighborhood: 'Clarendon', service: 'Water Damage' },
    ],
  },

  {
    subdomain: 'alexandria',
    title: 'Alexandria',
    slug: '/locations/alexandria/',
    url: 'https://alexandria.flood.doctor/',
    region: 'NOVA',
    county: 'City of Alexandria',
    zip: '22301, 22302, 22304, 22305, 22311, 22312, 22314, 22315',
    population: '160,000+',
    responseTime: '40 min',
    geo: { latitude: 38.8048, longitude: -77.0469 },
    description: 'Professional water damage restoration in Alexandria, VA. Serving Old Town, Del Ray, and all Alexandria neighborhoods with IICRC-certified technicians.',
    metaTitle: 'Water Damage Restoration Alexandria VA | Historic Home Experts | Flood Doctor',
    metaDescription: 'Water damage restoration in Alexandria, VA. Historic home specialists. Serving Old Town, Del Ray, Carlyle. IICRC certified. Call (877) 497-0007.',

    neighborhoods: [
      'Old Town',
      'Del Ray',
      'Carlyle',
      'West End',
      'Eisenhower Valley',
      'Rosemont',
      'Beverley Hills',
      'Seminary Hill',
      'Taylor Run',
      'Landmark',
    ],
    landmarks: [
      'Old Town Alexandria Waterfront',
      'George Washington Masonic Memorial',
      'Torpedo Factory',
      'King Street Metro',
      'Alexandria National Cemetery',
    ],
    commonIssues: [
      'Historic home water damage requiring specialized restoration',
      'Basement flooding in Old Town due to high water table',
      'Waterfront property flooding during storms',
      'Aging plumbing in historic buildings',
    ],
    topServices: [
      { title: 'Water Damage Restoration', path: '/services/residential/restoration-services/water-damage-restoration/', reason: 'Primary service' },
      { title: 'Basement Flooding', path: '/services/residential/specialty-services/basement-flooding/', reason: 'High water table in Old Town' },
      { title: 'Structural Drying', path: '/services/residential/restoration-services/structural-drying/', reason: 'Historic home preservation' },
    ],
    faqs: [
      { question: 'Do you service historic homes in Old Town Alexandria?', answer: 'Yes, we have extensive experience with historic properties. Our technicians understand the unique requirements of preserving historic materials while effectively removing water damage.' },
      { question: 'How fast is your response time in Alexandria?', answer: 'We average 40-minute response times throughout Alexandria, including Old Town, Del Ray, Carlyle, and the West End.' },
      { question: 'Can you help with basement flooding in Alexandria?', answer: 'Absolutely. Basement flooding is common in Alexandria, especially in older homes near the waterfront. We provide complete water extraction, drying, and mold prevention services.' },
      { question: 'Do you understand the requirements for historic Alexandria homes?', answer: 'Yes. We work carefully with historic materials and understand Alexandria\'s preservation requirements. We document everything thoroughly for insurance and historical compliance.' },
    ],
    testimonials: [
      { quote: 'Our 1920s Old Town home flooded. They understood how to dry historic plaster without causing more damage.', author: 'Elizabeth D.', neighborhood: 'Old Town', service: 'Water Damage' },
    ],
  },

  {
    subdomain: 'mclean',
    title: 'McLean',
    slug: '/locations/mclean/',
    url: 'https://mclean.flood.doctor/',
    region: 'NOVA',
    county: 'Fairfax County',
    zip: '22101, 22102, 22106',
    population: '50,000+',
    responseTime: '40 min',
    geo: { latitude: 38.9339, longitude: -77.1773 },
    description: 'Premium water damage restoration for McLean, VA. Our experienced team serves McLean\'s distinguished properties with discretion and expertise.',
    metaTitle: 'Water Damage Restoration McLean VA | Luxury Home Specialists | Flood Doctor',
    metaDescription: 'Premium water damage restoration in McLean, VA. Luxury home specialists. Discreet, professional service. IICRC certified. Call (877) 497-0007.',

    neighborhoods: [
      'McLean',
      'Langley',
      'Chain Bridge',
      'Franklin Park',
      'Salona Village',
      'Chesterbrook',
      'Spring Hill',
      'Tysons Corner (McLean side)',
    ],
    landmarks: [
      'CIA Headquarters',
      'Tysons Corner Center',
      'Great Falls National Park',
      'McLean Community Center',
      'Chain Bridge',
    ],
    commonIssues: [
      'Large estate water damage requiring extensive drying',
      'Swimming pool and spa equipment failures',
      'Luxury bathroom and kitchen water damage',
      'Wine cellar and specialty room flooding',
    ],
    topServices: [
      { title: 'Water Damage Restoration', path: '/services/residential/restoration-services/water-damage-restoration/', reason: 'High-value property expertise' },
      { title: 'Hardwood Floor Drying', path: '/services/residential/specialty-services/hardwood-floor-drying/', reason: 'Premium flooring common' },
      { title: 'Contents Cleaning & Packout', path: '/services/residential/cleanup-services/contents-cleaning-packout/', reason: 'Valuable contents protection' },
    ],
    faqs: [
      { question: 'Do you have experience with high-end McLean properties?', answer: 'Yes, we regularly serve McLean\'s luxury homes and understand the importance of preserving premium finishes, hardwoods, and custom features during restoration.' },
      { question: 'How fast can you respond to McLean emergencies?', answer: 'We average 40-minute response times to McLean. For significant emergencies, we can often arrive faster with priority dispatch.' },
      { question: 'Do you work with McLean HOAs and property managers?', answer: 'Yes, we work with numerous HOAs and property managers in McLean. We coordinate efficiently to minimize disruption to residents.' },
      { question: 'Can you handle large McLean estates?', answer: 'Absolutely. We have the equipment and crews to handle properties of any size. We\'ve restored estates with 10,000+ square feet of water damage.' },
    ],
    testimonials: [
      { quote: 'They saved our antique hardwood floors. Worth every penny.', author: 'Robert K.', neighborhood: 'Langley', service: 'Hardwood Floor Drying' },
    ],
  },

  {
    subdomain: 'vienna',
    title: 'Vienna',
    slug: '/locations/vienna/',
    url: 'https://vienna.flood.doctor/',
    region: 'NOVA',
    county: 'Fairfax County / Town of Vienna',
    zip: '22180, 22181, 22182',
    population: '17,000+',
    responseTime: '40 min',
    geo: { latitude: 38.9012, longitude: -77.2653 },
    description: 'Water damage restoration for Vienna, VA. Serving the Town of Vienna and surrounding areas with professional restoration services.',
    metaTitle: 'Water Damage Restoration Vienna VA | 24/7 Emergency | Flood Doctor',
    metaDescription: 'Fast water damage restoration in Vienna, VA. Serving Town of Vienna, Oakton, Dunn Loring. IICRC certified. Call (877) 497-0007.',

    neighborhoods: [
      'Town of Vienna',
      'Oakton',
      'Dunn Loring',
      'Tysons (Vienna side)',
      'Vienna Woods',
      'Maple Avenue corridor',
    ],
    landmarks: [
      'Vienna Town Green',
      'Wolf Trap National Park',
      'Meadowlark Botanical Gardens',
      'Vienna Metro Station',
      'Caffe Amouri',
    ],
    commonIssues: [
      'Older home plumbing failures',
      'Basement water intrusion in established neighborhoods',
      'Tree root damage to sewer lines',
      'Ice dam damage in winter',
    ],
    topServices: [
      { title: 'Water Damage Restoration', path: '/services/residential/restoration-services/water-damage-restoration/', reason: 'Primary service' },
      { title: 'Basement Flooding', path: '/services/residential/specialty-services/basement-flooding/', reason: 'Common in older homes' },
      { title: 'Mold Remediation', path: '/services/residential/cleanup-services/mold-remediation/', reason: 'Follow-up to water damage' },
    ],
    faqs: [
      { question: 'How fast can you respond to Vienna?', answer: 'We average 40-minute response times to Vienna. Our teams serve the Town of Vienna and greater Vienna area in Fairfax County.' },
      { question: 'Do you work with older homes in Vienna?', answer: 'Yes, we have experience with Vienna\'s mix of historic and newer homes. We understand how to properly dry and restore different construction types.' },
      { question: 'What areas near Vienna do you serve?', answer: 'We serve the Town of Vienna, Oakton, Dunn Loring, and all surrounding Fairfax County communities.' },
    ],
    testimonials: [
      { quote: 'Quick response, professional crew. They dried our 1960s split-level perfectly.', author: 'Linda T.', neighborhood: 'Vienna Woods', service: 'Water Damage' },
    ],
  },

  {
    subdomain: 'tysons',
    title: 'Tysons',
    slug: '/locations/tysons/',
    url: 'https://tysons.flood.doctor/',
    region: 'NOVA',
    county: 'Fairfax County',
    zip: '22102, 22182',
    population: '25,000+',
    responseTime: '35 min',
    geo: { latitude: 38.9187, longitude: -77.2311 },
    description: 'Water damage restoration for Tysons, VA. Serving the Tysons urban center, high-rises, and surrounding residential communities.',
    metaTitle: 'Water Damage Restoration Tysons VA | High-Rise Experts | Flood Doctor',
    metaDescription: 'Water damage restoration in Tysons, VA. High-rise and commercial specialists. 35-minute response. Call (877) 497-0007.',

    neighborhoods: [
      'Tysons Corner',
      'Tysons East',
      'Tysons West',
      'The Boro',
      'Scotts Run',
    ],
    landmarks: [
      'Tysons Corner Center',
      'Tysons Galleria',
      'Capital One Center',
      'The Boro',
      'Tysons Metro Stations',
    ],
    commonIssues: [
      'High-rise water damage affecting multiple floors',
      'Commercial HVAC failures',
      'Retail space flooding',
      'Parking garage flooding',
    ],
    topServices: [
      { title: 'Commercial Water Damage', path: '/services/commercial/restoration-services/commercial-water-damage/', reason: 'Major commercial hub' },
      { title: 'Large Loss Restoration', path: '/services/commercial/restoration-services/large-loss-restoration/', reason: 'Large buildings common' },
      { title: 'Water Damage Restoration', path: '/services/residential/restoration-services/water-damage-restoration/', reason: 'Residential condos' },
    ],
    faqs: [
      { question: 'Do you handle water damage in Tysons high-rises?', answer: 'Yes, we have extensive experience with high-rise buildings. We coordinate with building management and work efficiently to prevent damage from spreading to other units.' },
      { question: 'How fast can you respond to Tysons Corner emergencies?', answer: 'We average 35-minute response times to Tysons. Our proximity to the Tysons area allows for rapid emergency response.' },
      { question: 'Do you serve Tysons businesses and retail?', answer: 'Yes, we provide commercial water damage restoration for Tysons offices, retail spaces, and restaurants. We minimize business interruption with efficient restoration.' },
    ],
    testimonials: [
      { quote: 'A pipe burst in the condo above us. They responded immediately and worked with the building to contain the damage.', author: 'David L.', neighborhood: 'The Boro', service: 'Water Damage' },
    ],
  },

  {
    subdomain: 'reston',
    title: 'Reston',
    slug: '/locations/reston/',
    url: 'https://reston.flood.doctor/',
    region: 'NOVA',
    county: 'Fairfax County',
    zip: '20190, 20191, 20194',
    population: '63,000+',
    responseTime: '45 min',
    geo: { latitude: 38.9586, longitude: -77.3570 },
    description: 'Water damage restoration for Reston, VA. Serving Lake Anne, Town Center, and all Reston communities with 24/7 emergency response.',
    metaTitle: 'Water Damage Restoration Reston VA | 24/7 Emergency | Flood Doctor',
    metaDescription: 'Fast water damage restoration in Reston, VA. Serving Lake Anne, Town Center, all Reston villages. IICRC certified. Call (877) 497-0007.',

    neighborhoods: [
      'Reston Town Center',
      'Lake Anne',
      'North Point',
      'South Lakes',
      'Hunters Woods',
      'Tall Oaks',
      'Dogwood',
      'Golf Course Island',
    ],
    landmarks: [
      'Reston Town Center',
      'Lake Anne Plaza',
      'Lake Fairfax Park',
      'Reston Community Center',
      'W&OD Trail',
    ],
    commonIssues: [
      'Cluster home water damage affecting shared walls',
      'Townhouse flooding requiring multi-unit coordination',
      'Lake-area moisture issues',
      'HOA property water damage',
    ],
    topServices: [
      { title: 'Water Damage Restoration', path: '/services/residential/restoration-services/water-damage-restoration/', reason: 'Primary service' },
      { title: 'Basement Flooding', path: '/services/residential/specialty-services/basement-flooding/', reason: 'Common in townhomes' },
      { title: 'Mold Remediation', path: '/services/residential/cleanup-services/mold-remediation/', reason: 'Lake-area humidity' },
    ],
    faqs: [
      { question: 'How fast can you respond to water damage in Reston?', answer: 'Our Reston response time averages 45 minutes. We serve all Reston villages and the Town Center area.' },
      { question: 'Do you handle condo water damage in Reston?', answer: 'Yes, we specialize in multi-unit properties and work closely with Reston HOAs and cluster associations to coordinate restoration across affected units.' },
      { question: 'What Reston areas do you serve?', answer: 'We serve all of Reston including Lake Anne, Town Center, North Point, South Lakes, and all residential clusters and apartment communities.' },
    ],
    testimonials: [
      { quote: 'Our townhouse shared a wall with the flooded unit. They prevented any damage from spreading to our side.', author: 'Jennifer W.', neighborhood: 'North Point', service: 'Water Damage' },
    ],
  },

  {
    subdomain: 'herndon',
    title: 'Herndon',
    slug: '/locations/herndon/',
    url: 'https://herndon.flood.doctor/',
    region: 'NOVA',
    county: 'Fairfax County',
    zip: '20170, 20171',
    population: '25,000+',
    responseTime: '45 min',
    geo: { latitude: 38.9696, longitude: -77.3861 },
    description: 'Water damage restoration for Herndon, VA. Fast response for the Town of Herndon and surrounding Fairfax County communities.',
    metaTitle: 'Water Damage Restoration Herndon VA | Dulles Corridor | Flood Doctor',
    metaDescription: 'Water damage restoration in Herndon, VA. Serving Town of Herndon, Dulles corridor. Data center experience. Call (877) 497-0007.',

    neighborhoods: [
      'Town of Herndon',
      'Worldgate',
      'Fox Mill',
      'McNair Farms',
      'Herndon Centennial',
    ],
    landmarks: [
      'Herndon Town Green',
      'Worldgate Center',
      'Washington Dulles Airport',
      'Herndon Metro Station',
    ],
    commonIssues: [
      'Data center water damage (Dulles corridor)',
      'Commercial building flooding',
      'Airport-area business water damage',
      'Residential basement flooding',
    ],
    topServices: [
      { title: 'Water Damage Restoration', path: '/services/residential/restoration-services/water-damage-restoration/', reason: 'Primary service' },
      { title: 'Commercial Water Damage', path: '/services/commercial/restoration-services/commercial-water-damage/', reason: 'Data center corridor' },
      { title: 'Large Loss Restoration', path: '/services/commercial/restoration-services/large-loss-restoration/', reason: 'Commercial properties' },
    ],
    faqs: [
      { question: 'How fast can you respond to water damage in Herndon?', answer: 'We average 45-minute response times to Herndon and the surrounding area. Our crews serve the entire Dulles corridor.' },
      { question: 'Do you serve businesses along the Dulles corridor?', answer: 'Yes, we provide commercial water damage restoration for businesses throughout the Herndon and Reston area, including office parks and data centers.' },
      { question: 'What causes most water damage in Herndon?', answer: 'Common causes include burst pipes (especially in winter), appliance failures, roof leaks, and basement flooding. We handle all types of water damage emergencies.' },
    ],
    testimonials: [
      { quote: 'They understood the urgency of getting our server room dried out. Minimal downtime.', author: 'Thomas C.', neighborhood: 'Worldgate', service: 'Commercial Water Damage' },
    ],
  },

  {
    subdomain: 'ashburn',
    title: 'Ashburn',
    slug: '/locations/ashburn/',
    url: 'https://ashburn.flood.doctor/',
    region: 'NOVA',
    county: 'Loudoun County',
    zip: '20147, 20148',
    population: '92,000+',
    responseTime: '45 min',
    geo: { latitude: 39.0438, longitude: -77.4874 },
    description: 'Fast water damage restoration for Ashburn homes and businesses. Our Loudoun County team provides 24/7 emergency response with 45-minute average arrival times.',
    metaTitle: 'Water Damage Restoration Ashburn VA | Loudoun County | Flood Doctor',
    metaDescription: 'Water damage restoration in Ashburn, VA. Serving Broadlands, Brambleton, Lansdowne. 45-minute response. Call (877) 497-0007.',

    neighborhoods: [
      'Broadlands',
      'Brambleton',
      'Lansdowne',
      'Ashburn Village',
      'Ashburn Farm',
      'One Loudoun',
      'Moorefield Station',
    ],
    landmarks: [
      'One Loudoun',
      'Ashburn Ice House',
      'George Washington University Science & Technology Campus',
      'Ashburn Metro Station',
    ],
    commonIssues: [
      'New construction settling causing leaks',
      'Data center flooding (Data Center Alley)',
      'HOA property water damage',
      'Basement flooding in newer developments',
    ],
    topServices: [
      { title: 'Water Damage Restoration', path: '/services/residential/restoration-services/water-damage-restoration/', reason: 'Primary service' },
      { title: 'Basement Flooding', path: '/services/residential/specialty-services/basement-flooding/', reason: 'Many homes with basements' },
      { title: 'Commercial Water Damage', path: '/services/commercial/restoration-services/commercial-water-damage/', reason: 'Data Center Alley' },
    ],
    faqs: [
      { question: 'How fast can you respond to water damage in Ashburn?', answer: 'Our Ashburn team typically arrives within 45 minutes. We have crews stationed in Loudoun County for rapid response to emergencies in Ashburn, Broadlands, and surrounding areas.' },
      { question: 'Do you work with insurance companies in Ashburn?', answer: 'Yes, we work directly with all major insurance providers and handle the entire claims process. Most Ashburn homeowners pay nothing out of pocket for covered water damage.' },
      { question: 'What areas near Ashburn do you serve?', answer: 'We serve all of Loudoun County including Ashburn, Broadlands, Brambleton, Lansdowne, Sterling, and Leesburg.' },
    ],
    testimonials: [
      { quote: 'Brand new house, first winter, pipe burst. They saved us from a nightmare.', author: 'Mark H.', neighborhood: 'Brambleton', service: 'Water Damage' },
    ],
  },

  {
    subdomain: 'leesburg',
    title: 'Leesburg',
    slug: '/locations/leesburg/',
    url: 'https://leesburg.flood.doctor/',
    region: 'NOVA',
    county: 'Loudoun County',
    zip: '20175, 20176, 20177',
    population: '54,000+',
    responseTime: '50 min',
    geo: { latitude: 39.1157, longitude: -77.5636 },
    description: 'Water damage restoration for Leesburg, VA. Serving historic downtown Leesburg and all of western Loudoun County with professional restoration services.',
    metaTitle: 'Water Damage Restoration Leesburg VA | Historic Home Experts | Flood Doctor',
    metaDescription: 'Water damage restoration in Leesburg, VA. Historic downtown and western Loudoun. 50-minute response. Call (877) 497-0007.',

    neighborhoods: [
      'Historic Downtown Leesburg',
      'Leesburg East',
      'Potomac Station',
      'Edwards Landing',
      'Lansdowne on the Potomac',
      'River Creek',
    ],
    landmarks: [
      'Historic Downtown Leesburg',
      'Leesburg Corner Premium Outlets',
      'Morven Park',
      'Leesburg Executive Airport',
      'Ida Lee Park',
    ],
    commonIssues: [
      'Historic building water damage',
      'Rural property well system failures',
      'Potomac River flooding',
      'Older infrastructure in historic district',
    ],
    topServices: [
      { title: 'Water Damage Restoration', path: '/services/residential/restoration-services/water-damage-restoration/', reason: 'Primary service' },
      { title: 'Structural Drying', path: '/services/residential/restoration-services/structural-drying/', reason: 'Historic building expertise' },
      { title: 'Flood Cleanup', path: '/services/residential/restoration-services/flood-cleanup/', reason: 'River proximity' },
    ],
    faqs: [
      { question: 'How fast can you respond to Leesburg?', answer: 'We average 50-minute response times to Leesburg and western Loudoun County. For severe emergencies, we prioritize dispatch.' },
      { question: 'Do you handle historic homes in downtown Leesburg?', answer: 'Yes, we have extensive experience with historic properties. We understand the careful approach needed to preserve historic materials while effectively removing water damage.' },
      { question: 'What areas west of Leesburg do you cover?', answer: 'We serve all of western Loudoun including Leesburg, Purcellville, Lovettsville, and surrounding rural areas.' },
    ],
    testimonials: [
      { quote: 'Historic home, irreplaceable hardwoods. They dried everything without damage.', author: 'Catherine B.', neighborhood: 'Historic Downtown', service: 'Water Damage' },
    ],
  },

  {
    subdomain: 'manassas',
    title: 'Manassas',
    slug: '/locations/manassas/',
    url: 'https://manassas.flood.doctor/',
    region: 'NOVA',
    county: 'City of Manassas / Prince William County',
    zip: '20109, 20110, 20111, 20112',
    population: '41,000+',
    responseTime: '50 min',
    geo: { latitude: 38.7509, longitude: -77.4753 },
    description: 'Water damage restoration for Manassas, VA. Serving the City of Manassas, Manassas Park, and Prince William County with 24/7 emergency response.',
    metaTitle: 'Water Damage Restoration Manassas VA | Prince William County | Flood Doctor',
    metaDescription: 'Water damage restoration in Manassas, VA. Serving Manassas, Manassas Park, Gainesville. 50-minute response. Call (877) 497-0007.',

    neighborhoods: [
      'Historic Downtown Manassas',
      'Wellington',
      'Sudley',
      'Bull Run',
      'Gainesville',
      'Bristow',
      'Manassas Park',
    ],
    landmarks: [
      'Manassas National Battlefield Park',
      'Historic Downtown Manassas',
      'Manassas Mall',
      'Jiffy Lube Live',
      'VRE Manassas Line',
    ],
    commonIssues: [
      'Older home plumbing failures in established areas',
      'New development drainage issues',
      'Storm damage and flooding',
      'Commercial strip mall flooding',
    ],
    topServices: [
      { title: 'Water Damage Restoration', path: '/services/residential/restoration-services/water-damage-restoration/', reason: 'Primary service' },
      { title: 'Storm Damage Restoration', path: '/services/residential/restoration-services/storm-damage-restoration/', reason: 'Storm-prone area' },
      { title: 'Basement Flooding', path: '/services/residential/specialty-services/basement-flooding/', reason: 'Many homes with basements' },
    ],
    faqs: [
      { question: 'Do you serve both Manassas City and Prince William County?', answer: 'Yes, we serve the City of Manassas, Manassas Park, and all of Prince William County including Gainesville, Bristow, and Haymarket.' },
      { question: 'How quickly can you respond to Manassas?', answer: 'We average 50-minute response times to Manassas and surrounding Prince William County.' },
      { question: 'Do you handle commercial water damage in Manassas?', answer: 'Yes, we serve both residential and commercial properties throughout the Manassas area.' },
    ],
    testimonials: [
      { quote: 'Storm flooded our finished basement. They had equipment running within an hour.', author: 'Brian P.', neighborhood: 'Wellington', service: 'Basement Flooding' },
    ],
  },

  {
    subdomain: 'woodbridge',
    title: 'Woodbridge',
    slug: '/locations/woodbridge/',
    url: 'https://woodbridge.flood.doctor/',
    region: 'NOVA',
    county: 'Prince William County',
    zip: '22191, 22192, 22193, 22194, 22195',
    population: '42,000+',
    responseTime: '50 min',
    geo: { latitude: 38.6582, longitude: -77.2497 },
    description: 'Water damage restoration for Woodbridge, VA. Serving Lake Ridge, Dale City, and eastern Prince William County with 24/7 emergency response.',
    metaTitle: 'Water Damage Restoration Woodbridge VA | Lake Ridge, Dale City | Flood Doctor',
    metaDescription: 'Water damage restoration in Woodbridge, VA. Serving Lake Ridge, Dale City, Potomac Mills. 50-minute response. Call (877) 497-0007.',

    neighborhoods: [
      'Woodbridge',
      'Lake Ridge',
      'Dale City',
      'Dumfries',
      'Montclair',
      'Occoquan',
      'Potomac Mills area',
    ],
    landmarks: [
      'Potomac Mills',
      'Occoquan Historic District',
      'Leesylvania State Park',
      'Lake Ridge Marina',
      'Dale City recreation centers',
    ],
    commonIssues: [
      'Occoquan River and Potomac River flooding',
      'Basement flooding in Lake Ridge hills',
      'Commercial flooding at Potomac Mills area',
      'Storm drain backup in dense developments',
    ],
    topServices: [
      { title: 'Water Damage Restoration', path: '/services/residential/restoration-services/water-damage-restoration/', reason: 'Primary service' },
      { title: 'Flood Cleanup', path: '/services/residential/restoration-services/flood-cleanup/', reason: 'River proximity' },
      { title: 'Basement Flooding', path: '/services/residential/specialty-services/basement-flooding/', reason: 'Hilly terrain' },
    ],
    faqs: [
      { question: 'How fast can you respond to Woodbridge?', answer: 'We average 50-minute response times to Woodbridge, Lake Ridge, and Dale City.' },
      { question: 'Do you handle flooding from the Occoquan?', answer: 'Yes, we have extensive experience with river-related flooding. We provide complete flood cleanup and restoration services.' },
      { question: 'What areas near Woodbridge do you serve?', answer: 'We serve Woodbridge, Lake Ridge, Dale City, Dumfries, Montclair, Occoquan, and all of eastern Prince William County.' },
    ],
    testimonials: [
      { quote: 'Lake Ridge home, basement flooded after the storm. Professional and fast.', author: 'Amanda R.', neighborhood: 'Lake Ridge', service: 'Flood Cleanup' },
    ],
  },

  {
    subdomain: 'springfield',
    title: 'Springfield',
    slug: '/locations/springfield/',
    url: 'https://springfield.flood.doctor/',
    region: 'NOVA',
    county: 'Fairfax County',
    zip: '22150, 22151, 22152, 22153',
    population: '33,000+',
    responseTime: '40 min',
    geo: { latitude: 38.7893, longitude: -77.1872 },
    description: 'Water damage restoration for Springfield, VA. Fast emergency response for Springfield and surrounding communities in Central Fairfax County.',
    metaTitle: 'Water Damage Restoration Springfield VA | Central Fairfax | Flood Doctor',
    metaDescription: 'Water damage restoration in Springfield, VA. Serving Springfield Town Center, West Springfield. 40-minute response. Call (877) 497-0007.',

    neighborhoods: [
      'Springfield',
      'West Springfield',
      'Springfield Town Center area',
      'Franconia',
      'Kingstowne',
      'Backlick',
    ],
    landmarks: [
      'Springfield Town Center',
      'Springfield Metro Station',
      'Lake Accotink Park',
      'Franconia-Springfield Metro',
      'I-95/I-495 Interchange',
    ],
    commonIssues: [
      'Older split-level home flooding',
      'Commercial flooding at Town Center',
      'Lake Accotink area moisture issues',
      'Highway corridor commercial damage',
    ],
    topServices: [
      { title: 'Water Damage Restoration', path: '/services/residential/restoration-services/water-damage-restoration/', reason: 'Primary service' },
      { title: 'Basement Flooding', path: '/services/residential/specialty-services/basement-flooding/', reason: 'Many split-levels' },
      { title: 'Commercial Water Damage', path: '/services/commercial/restoration-services/commercial-water-damage/', reason: 'Town Center businesses' },
    ],
    faqs: [
      { question: 'How quickly can you reach Springfield?', answer: 'We average 40-minute response times to Springfield. Our central location allows rapid response to all Springfield neighborhoods.' },
      { question: 'Do you serve the Springfield Town Center area?', answer: 'Yes, we serve all of Springfield including residential neighborhoods, the Town Center area, and commercial properties.' },
      { question: 'Can you help with flooding from the Springfield area streams?', answer: 'Yes, we handle all types of flooding including storm water intrusion. We provide complete water extraction, drying, and restoration services.' },
    ],
    testimonials: [
      { quote: 'Split-level, water came in through the garage. They handled everything.', author: 'Kevin M.', neighborhood: 'West Springfield', service: 'Water Damage' },
    ],
  },

  {
    subdomain: 'annandale',
    title: 'Annandale',
    slug: '/locations/annandale/',
    url: 'https://annandale.flood.doctor/',
    region: 'NOVA',
    county: 'Fairfax County',
    zip: '22003',
    population: '42,000+',
    responseTime: '35 min',
    geo: { latitude: 38.8304, longitude: -77.1961 },
    description: 'Water damage restoration for Annandale, VA. Serving the diverse Annandale community with fast, professional 24/7 emergency response.',
    metaTitle: 'Water Damage Restoration Annandale VA | 35-Min Response | Flood Doctor',
    metaDescription: 'Water damage restoration in Annandale, VA. Serving Annandale, Mason District, Ravensworth. 35-minute response. Call (877) 497-0007.',

    neighborhoods: [
      'Annandale',
      'Ravensworth',
      'Broyhill Crest',
      'Mason District',
      'Little River Turnpike corridor',
      'Columbia Pike corridor (Annandale side)',
    ],
    landmarks: [
      'Little River Turnpike',
      'Annandale Shopping Center',
      'Mason District Park',
      'Holmes Run Trail',
      'Wakefield Park',
    ],
    commonIssues: [
      'Older home plumbing failures',
      'Holmes Run stream flooding',
      'Commercial strip flooding',
      'Basement water intrusion in established neighborhoods',
    ],
    topServices: [
      { title: 'Water Damage Restoration', path: '/services/residential/restoration-services/water-damage-restoration/', reason: 'Primary service' },
      { title: 'Basement Flooding', path: '/services/residential/specialty-services/basement-flooding/', reason: 'Many older homes' },
      { title: 'Sewage Cleanup', path: '/services/residential/cleanup-services/sewage-cleanup/', reason: 'Older sewer infrastructure' },
    ],
    faqs: [
      { question: 'How fast can you respond to Annandale?', answer: 'We average 35-minute response times to Annandale. Our central Fairfax location allows rapid deployment to the Annandale area.' },
      { question: 'Do you work with older homes in Annandale?', answer: 'Yes, many Annandale homes were built in the 1950s-1970s. We understand the unique challenges of older construction, including aging plumbing and different building materials.' },
      { question: 'Do you serve the Little River Turnpike businesses?', answer: 'Yes, we provide commercial water damage restoration for businesses throughout Annandale including the Little River Turnpike corridor.' },
    ],
    testimonials: [
      { quote: '1960s rambler, sewer backup. They cleaned and sanitized everything.', author: 'Susan K.', neighborhood: 'Broyhill Crest', service: 'Sewage Cleanup' },
    ],
  },

  {
    subdomain: 'fallschurch',
    title: 'Falls Church',
    slug: '/locations/falls-church/',
    url: 'https://fallschurch.flood.doctor/',
    region: 'NOVA',
    county: 'Falls Church City / Fairfax County',
    zip: '22041, 22042, 22043, 22044, 22046',
    population: '15,000+ (city)',
    responseTime: '35 min',
    geo: { latitude: 38.8823, longitude: -77.1711 },
    description: 'Water damage restoration for Falls Church, VA. Fast emergency response for the Little City and surrounding Fairfax County areas.',
    metaTitle: 'Water Damage Restoration Falls Church VA | The Little City | Flood Doctor',
    metaDescription: 'Water damage restoration in Falls Church, VA. Serving Falls Church City, Seven Corners, Merrifield. 35-minute response. Call (877) 497-0007.',

    neighborhoods: [
      'Falls Church City',
      'Seven Corners',
      'Merrifield',
      'Pimmit Hills',
      'Jefferson District',
      'West Falls Church',
    ],
    landmarks: [
      'Falls Church City Hall',
      'State Theatre',
      'Eden Center',
      'Mosaic District',
      'West Falls Church Metro',
    ],
    commonIssues: [
      'Older infrastructure in historic areas',
      'Mixed-use development flooding (Mosaic)',
      'Restaurant and retail water damage (Eden Center)',
      'Residential basement flooding',
    ],
    topServices: [
      { title: 'Water Damage Restoration', path: '/services/residential/restoration-services/water-damage-restoration/', reason: 'Primary service' },
      { title: 'Mold Remediation', path: '/services/residential/cleanup-services/mold-remediation/', reason: 'Older homes susceptible' },
      { title: 'Commercial Water Damage', path: '/services/commercial/restoration-services/commercial-water-damage/', reason: 'Eden Center, Mosaic' },
    ],
    faqs: [
      { question: 'How fast can you get to Falls Church?', answer: 'Our Falls Church response time is approximately 35 minutes. We serve both Falls Church City and the greater Falls Church area in Fairfax County.' },
      { question: 'Do you offer mold remediation in Falls Church?', answer: 'Yes, we provide complete mold inspection and remediation services. Many older Falls Church homes are susceptible to mold after water damage, and we ensure thorough treatment.' },
      { question: 'What insurance companies do you work with?', answer: 'We work with all major insurance providers including State Farm, Allstate, USAA, Nationwide, and many others. We handle the entire claims process for you.' },
    ],
    testimonials: [
      { quote: 'Little City home, burst pipe in winter. They responded fast despite the cold.', author: 'Robert J.', neighborhood: 'Falls Church City', service: 'Water Damage' },
    ],
  },

  // Additional locations from original file
  {
    subdomain: 'greatfalls',
    title: 'Great Falls',
    slug: '/locations/great-falls/',
    url: 'https://greatfalls.flood.doctor/',
    region: 'NOVA',
    county: 'Fairfax County',
    zip: '22066',
    population: '16,000+',
    responseTime: '50 min',
    geo: { latitude: 39.0001, longitude: -77.2883 },
    description: 'Premium water damage restoration for Great Falls estates and properties. Our team understands the unique needs of high-value homes in the Great Falls area.',
    metaTitle: 'Water Damage Restoration Great Falls VA | Estate Specialists | Flood Doctor',
    metaDescription: 'Premium water damage restoration in Great Falls, VA. Luxury estate specialists. Discreet, professional service. Call (877) 497-0007.',

    neighborhoods: [
      'Great Falls',
      'Great Falls Estates',
      'Riverbend',
      'Langley Farms',
      'Forestville',
    ],
    landmarks: [
      'Great Falls National Park',
      'Riverbend Park',
      'Great Falls Village Centre',
      'Great Falls Library',
    ],
    commonIssues: [
      'Large estate water damage',
      'Well and septic system issues',
      'Potomac River flooding',
      'Long driveway access for emergency equipment',
    ],
    topServices: [
      { title: 'Water Damage Restoration', path: '/services/residential/restoration-services/water-damage-restoration/', reason: 'Primary service' },
      { title: 'Hardwood Floor Drying', path: '/services/residential/specialty-services/hardwood-floor-drying/', reason: 'Premium flooring common' },
      { title: 'Large Loss Restoration', path: '/services/commercial/restoration-services/large-loss-restoration/', reason: 'Large properties' },
    ],
    faqs: [
      { question: 'Do you have experience with large estates in Great Falls?', answer: 'Yes, we specialize in high-value properties and understand the premium materials and construction methods used in Great Falls homes. We treat every property with the care it deserves.' },
      { question: 'How fast can you reach Great Falls?', answer: 'Our Great Falls response time averages 50 minutes. We dispatch experienced crews equipped to handle the unique challenges of larger properties.' },
      { question: 'Can you work with my insurance on my Great Falls property?', answer: 'Absolutely. We work with all insurance providers and are experienced in documenting damage for high-value claims. We ensure you receive fair compensation for your loss.' },
    ],
    testimonials: [
      { quote: 'Estate with 8,000 sq ft of damage. They had the resources and expertise to handle it.', author: 'William S.', neighborhood: 'Great Falls Estates', service: 'Large Loss' },
    ],
  },

  {
    subdomain: 'lorton',
    title: 'Lorton',
    slug: '/locations/lorton/',
    url: 'https://lorton.flood.doctor/',
    region: 'NOVA',
    county: 'Fairfax County',
    zip: '22079',
    population: '20,000+',
    responseTime: '45 min',
    geo: { latitude: 38.7043, longitude: -77.2278 },
    description: 'Water damage restoration services for Lorton, VA. Serving South Fairfax County with emergency response and complete restoration services.',
    metaTitle: 'Water Damage Restoration Lorton VA | South Fairfax | Flood Doctor',
    metaDescription: 'Water damage restoration in Lorton, VA. Serving Lorton, Mason Neck, Newington. 45-minute response. Call (877) 497-0007.',

    neighborhoods: [
      'Lorton',
      'Lorton Station',
      'Mason Neck',
      'Newington',
      'Laurel Hill',
      'South Run',
    ],
    landmarks: [
      'Workhouse Arts Center',
      'Laurel Hill Golf Club',
      'Mason Neck State Park',
      'Lorton VRE Station',
      'I-95 Lorton interchange',
    ],
    commonIssues: [
      'New development construction defects',
      'Occoquan River flooding',
      'Sewage backup from aging infrastructure',
      'Basement flooding in hilly terrain',
    ],
    topServices: [
      { title: 'Water Damage Restoration', path: '/services/residential/restoration-services/water-damage-restoration/', reason: 'Primary service' },
      { title: 'Sewage Cleanup', path: '/services/residential/cleanup-services/sewage-cleanup/', reason: 'Common issue' },
      { title: 'Flood Cleanup', path: '/services/residential/restoration-services/flood-cleanup/', reason: 'River proximity' },
    ],
    faqs: [
      { question: 'How quickly can you reach Lorton?', answer: 'Our Lorton response time averages 45 minutes. We serve all of South Fairfax County including Lorton, Mason Neck, and Newington.' },
      { question: 'Do you handle sewage cleanup in Lorton?', answer: 'Yes, we provide complete sewage backup cleanup and sanitization services. This includes water extraction, disinfection, and restoration.' },
      { question: 'What areas near Lorton do you serve?', answer: 'We serve Lorton, Mason Neck, Newington, Fort Belvoir, and all surrounding South Fairfax communities.' },
    ],
    testimonials: [
      { quote: 'Sewage backup after heavy rain. They handled everything professionally.', author: 'Steven D.', neighborhood: 'Lorton Station', service: 'Sewage Cleanup' },
    ],
  },
];

// Nearby areas (for future expansion)
export const NEARBY_AREAS: LocationData[] = [
  { title: 'Washington DC', slug: '/locations/', url: '', path: '/locations/', region: 'NEARBY' },
  { title: 'Bethesda MD', slug: '/locations/', url: '', path: '/locations/', region: 'NEARBY' },
  { title: 'Silver Spring MD', slug: '/locations/', url: '', path: '/locations/', region: 'NEARBY' },
];

/**
 * Get location by subdomain key
 */
export function getLocationBySubdomain(subdomain: string): ExtendedLocationData | undefined {
  return LOCATIONS.find(loc => loc.subdomain === subdomain);
}

/**
 * Get location by slug
 */
export function getLocationBySlug(slug: string): ExtendedLocationData | undefined {
  return LOCATIONS.find(loc => loc.slug === slug);
}

/**
 * Get all subdomains for DNS configuration
 */
export function getAllSubdomains(): string[] {
  return LOCATIONS.map(loc => loc.subdomain);
}
