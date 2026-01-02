// City configuration for subdomain landing pages
export interface CityConfig {
  slug: string;
  name: string;
  state: string;
  subdomain: string;
  responseTime: string;
  headline: string;
  description: string;
  neighborhoods: { name: string; time: string }[];
  localChallenges: string[];
  testimonials: { quote: string; author: string; location: string }[];
  geo: { lat: number; lng: number };
  zipCodes: string[];
}

export const CITIES: Record<string, CityConfig> = {
  mclean: {
    slug: 'mclean',
    name: 'McLean',
    state: 'VA',
    subdomain: 'mclean.flood.doctor',
    responseTime: '20-30 min',
    headline: 'Water Damage Restoration in McLean, Virginia',
    description: "McLean's premier water damage experts. Serving Great Falls, Langley, and all McLean neighborhoods. IICRC certified, 24/7 emergency response.",
    neighborhoods: [
      { name: 'Downtown McLean', time: '15-20 min' },
      { name: 'Great Falls', time: '25-35 min' },
      { name: 'Langley', time: '20-25 min' },
      { name: 'Chain Bridge', time: '20-25 min' },
      { name: 'Salona Village', time: '15-20 min' },
      { name: 'Potomac Hills', time: '25-30 min' },
    ],
    localChallenges: [
      'High-end homes with extensive finished basements',
      'Properties near Potomac River with flood risk',
      'Older homes with aging plumbing systems',
      'Large estates requiring specialized equipment',
    ],
    testimonials: [
      {
        quote: "They saved our basement after a pipe burst at 3 AM. Professional, fast, and thorough.",
        author: "The Richardson Family",
        location: "McLean"
      }
    ],
    geo: { lat: 38.9339, lng: -77.1773 },
    zipCodes: ['22101', '22102', '22106'],
  },
  vienna: {
    slug: 'vienna',
    name: 'Vienna',
    state: 'VA',
    subdomain: 'vienna.flood.doctor',
    responseTime: '15-30 min',
    headline: 'Water Damage Restoration in Vienna, Virginia',
    description: "Vienna's local water damage experts. 15-30 minute response from our Tyco Road headquarters. IICRC certified. Available 24/7.",
    neighborhoods: [
      { name: 'Downtown Vienna / Maple Avenue', time: '5-10 min' },
      { name: 'Vienna Woods', time: '10-15 min' },
      { name: 'Westbriar', time: '10-15 min' },
      { name: 'Wolftrap', time: '15-20 min' },
      { name: 'Dunn Loring', time: '10-15 min' },
      { name: 'Oakton', time: '15-25 min' },
    ],
    localChallenges: [
      'Aging plumbing in older homes (1950s-70s)',
      'Finished basement flooding',
      'High water table near Difficult Run',
      'Historic home restoration requirements',
    ],
    testimonials: [
      {
        quote: "They were at our house on Courthouse Road in 20 minutes. Our basement had 3 inches of water from a burst pipe. By morning, the water was out and drying equipment was running.",
        author: "The Martinez Family",
        location: "Vienna"
      },
      {
        quote: "We've used Flood Doctor twice now—once for a water heater failure and once after a storm. Both times they responded immediately.",
        author: "David L.",
        location: "Vienna Woods"
      }
    ],
    geo: { lat: 38.9013, lng: -77.2654 },
    zipCodes: ['22180', '22181', '22182', '22183'],
  },
  arlington: {
    slug: 'arlington',
    name: 'Arlington',
    state: 'VA',
    subdomain: 'arlington.flood.doctor',
    responseTime: '25-35 min',
    headline: 'Water Damage Restoration in Arlington, Virginia',
    description: "Arlington's trusted water damage restoration team. Serving Clarendon, Ballston, Rosslyn, and all Arlington neighborhoods. 24/7 emergency service.",
    neighborhoods: [
      { name: 'Clarendon', time: '20-25 min' },
      { name: 'Ballston', time: '20-25 min' },
      { name: 'Rosslyn', time: '25-30 min' },
      { name: 'Crystal City', time: '30-35 min' },
      { name: 'Shirlington', time: '25-30 min' },
      { name: 'Pentagon City', time: '30-35 min' },
    ],
    localChallenges: [
      'High-rise condo water damage',
      'Townhome basement flooding',
      'Aging infrastructure in older neighborhoods',
      'Combined sewer system backup risks',
    ],
    testimonials: [
      {
        quote: "Fast response to our condo flood. They coordinated with building management seamlessly.",
        author: "Sarah K.",
        location: "Ballston"
      }
    ],
    geo: { lat: 38.8816, lng: -77.0910 },
    zipCodes: ['22201', '22202', '22203', '22204', '22205', '22206', '22207', '22209', '22213'],
  },
  fairfax: {
    slug: 'fairfax',
    name: 'Fairfax',
    state: 'VA',
    subdomain: 'fairfax.flood.doctor',
    responseTime: '20-30 min',
    headline: 'Water Damage Restoration in Fairfax, Virginia',
    description: "Fairfax County's water damage specialists. Fast response to City of Fairfax and surrounding communities. IICRC certified technicians.",
    neighborhoods: [
      { name: 'City of Fairfax', time: '15-20 min' },
      { name: 'Fairfax Station', time: '25-30 min' },
      { name: 'Burke', time: '25-30 min' },
      { name: 'Mantua', time: '20-25 min' },
      { name: 'Fairfax Corner', time: '20-25 min' },
      { name: 'Fair Oaks', time: '20-25 min' },
    ],
    localChallenges: [
      'Suburban homes with large basements',
      'Properties near streams and tributaries',
      'Sump pump failures during storms',
      'Appliance failures in family homes',
    ],
    testimonials: [
      {
        quote: "Our water heater flooded the basement. They arrived in under 30 minutes and saved our finished basement.",
        author: "The Johnson Family",
        location: "Fairfax"
      }
    ],
    geo: { lat: 38.8462, lng: -77.3064 },
    zipCodes: ['22030', '22031', '22032', '22033', '22035'],
  },
  tysons: {
    slug: 'tysons',
    name: 'Tysons',
    state: 'VA',
    subdomain: 'tysons.flood.doctor',
    responseTime: '15-25 min',
    headline: 'Water Damage Restoration in Tysons, Virginia',
    description: "Tysons commercial and residential water damage experts. Serving Tysons Corner, The Boro, and all high-rises. Rapid response guaranteed.",
    neighborhoods: [
      { name: 'Tysons Corner', time: '15-20 min' },
      { name: 'The Boro', time: '15-20 min' },
      { name: 'Tysons West', time: '15-20 min' },
      { name: 'Tysons Galleria area', time: '15-20 min' },
      { name: 'Idylwood', time: '20-25 min' },
    ],
    localChallenges: [
      'High-rise commercial and residential buildings',
      'Data center and server room water intrusion',
      'Luxury condo water damage',
      'Retail and restaurant flooding',
    ],
    testimonials: [
      {
        quote: "Professional handling of our office flood. Minimal business disruption.",
        author: "Mark T., Property Manager",
        location: "Tysons Corner"
      }
    ],
    geo: { lat: 38.9187, lng: -77.2311 },
    zipCodes: ['22102', '22182'],
  },
  alexandria: {
    slug: 'alexandria',
    name: 'Alexandria',
    state: 'VA',
    subdomain: 'alexandria.flood.doctor',
    responseTime: '30-40 min',
    headline: 'Water Damage Restoration in Alexandria, Virginia',
    description: "Alexandria's water damage restoration experts. Serving Old Town, Del Ray, and all Alexandria neighborhoods. Historic home specialists.",
    neighborhoods: [
      { name: 'Old Town', time: '30-35 min' },
      { name: 'Del Ray', time: '30-35 min' },
      { name: 'Carlyle', time: '35-40 min' },
      { name: 'Landmark', time: '30-35 min' },
      { name: 'Eisenhower Valley', time: '35-40 min' },
      { name: 'Kingstowne', time: '35-40 min' },
    ],
    localChallenges: [
      'Historic Old Town properties requiring specialized care',
      'Waterfront properties with flood exposure',
      'Combined sewer system backup risks',
      'Row house and townhome water damage',
    ],
    testimonials: [
      {
        quote: "They understood the delicate nature of our historic Old Town home. Careful and professional.",
        author: "The Williams Family",
        location: "Old Town Alexandria"
      }
    ],
    geo: { lat: 38.8048, lng: -77.0469 },
    zipCodes: ['22301', '22302', '22304', '22305', '22306', '22307', '22308', '22309', '22310', '22311', '22312', '22314', '22315'],
  },
  ashburn: {
    slug: 'ashburn',
    name: 'Ashburn',
    state: 'VA',
    subdomain: 'ashburn.flood.doctor',
    responseTime: '35-45 min',
    headline: 'Water Damage Restoration in Ashburn, Virginia',
    description: "Ashburn and Loudoun County water damage experts. Serving Broadlands, Brambleton, One Loudoun, and all Ashburn communities.",
    neighborhoods: [
      { name: 'Broadlands', time: '35-40 min' },
      { name: 'Brambleton', time: '40-45 min' },
      { name: 'One Loudoun', time: '35-40 min' },
      { name: 'Ashburn Village', time: '35-40 min' },
      { name: 'Ashburn Farm', time: '35-40 min' },
      { name: 'Lansdowne', time: '40-45 min' },
    ],
    localChallenges: [
      'Newer construction with builder-grade plumbing',
      'Large homes with extensive water damage potential',
      'Basement flooding in newer communities',
      'Data center proximity considerations',
    ],
    testimonials: [
      {
        quote: "Quick response despite the distance. They had equipment running within an hour of arrival.",
        author: "The Chen Family",
        location: "Broadlands"
      }
    ],
    geo: { lat: 39.0437, lng: -77.4875 },
    zipCodes: ['20147', '20148'],
  },
  'washington-dc': {
    slug: 'washington-dc',
    name: 'Washington',
    state: 'DC',
    subdomain: 'dc.flood.doctor',
    responseTime: '35-50 min',
    headline: 'Water Damage Restoration in Washington, DC',
    description: "Washington DC water damage restoration. Serving Georgetown, Capitol Hill, Dupont Circle, and all DC neighborhoods. Licensed in DC.",
    neighborhoods: [
      { name: 'Georgetown', time: '35-40 min' },
      { name: 'Dupont Circle', time: '40-45 min' },
      { name: 'Capitol Hill', time: '45-50 min' },
      { name: 'Adams Morgan', time: '40-45 min' },
      { name: 'Foggy Bottom', time: '35-40 min' },
      { name: 'Cleveland Park', time: '40-45 min' },
    ],
    localChallenges: [
      'Historic row houses and brownstones',
      'Aging infrastructure citywide',
      'Combined sewer overflow issues',
      'Commercial property considerations',
    ],
    testimonials: [
      {
        quote: "Handled our Georgetown row house flood with care. They understood the historic nature of the property.",
        author: "Jennifer M.",
        location: "Georgetown"
      }
    ],
    geo: { lat: 38.9072, lng: -77.0369 },
    zipCodes: ['20001', '20002', '20003', '20004', '20005', '20006', '20007', '20008', '20009', '20010', '20011', '20012', '20015', '20016', '20017', '20018', '20019', '20020'],
  },
  herndon: {
    slug: 'herndon',
    name: 'Herndon',
    state: 'VA',
    subdomain: 'herndon.flood.doctor',
    responseTime: '25-35 min',
    headline: 'Water Damage Restoration in Herndon, Virginia',
    description: "Herndon water damage restoration experts. Serving Downtown Herndon, Fox Mill, and all surrounding areas. Fast emergency response.",
    neighborhoods: [
      { name: 'Downtown Herndon', time: '25-30 min' },
      { name: 'Fox Mill', time: '25-30 min' },
      { name: 'Worldgate', time: '25-30 min' },
      { name: 'McNair Farms', time: '30-35 min' },
    ],
    localChallenges: [
      'Mix of older and newer construction',
      'Townhome communities with shared walls',
      'Basement flooding during storms',
    ],
    testimonials: [],
    geo: { lat: 38.9696, lng: -77.3861 },
    zipCodes: ['20170', '20171'],
  },
  reston: {
    slug: 'reston',
    name: 'Reston',
    state: 'VA',
    subdomain: 'reston.flood.doctor',
    responseTime: '25-35 min',
    headline: 'Water Damage Restoration in Reston, Virginia',
    description: "Reston water damage specialists. Serving Reston Town Center, Lake Anne, and all Reston villages. 24/7 emergency service.",
    neighborhoods: [
      { name: 'Reston Town Center', time: '25-30 min' },
      { name: 'Lake Anne', time: '25-30 min' },
      { name: 'South Lakes', time: '25-30 min' },
      { name: 'North Point', time: '25-30 min' },
      { name: 'Hunters Woods', time: '25-30 min' },
    ],
    localChallenges: [
      'Condo and townhome communities',
      'Properties near lakes and streams',
      'Mixed commercial/residential areas',
    ],
    testimonials: [],
    geo: { lat: 38.9586, lng: -77.3570 },
    zipCodes: ['20190', '20191', '20194'],
  },
  springfield: {
    slug: 'springfield',
    name: 'Springfield',
    state: 'VA',
    subdomain: 'springfield.flood.doctor',
    responseTime: '30-40 min',
    headline: 'Water Damage Restoration in Springfield, Virginia',
    description: "Springfield water damage restoration. Serving West Springfield, Franconia, and all Springfield neighborhoods. IICRC certified.",
    neighborhoods: [
      { name: 'Springfield Town Center', time: '30-35 min' },
      { name: 'West Springfield', time: '30-35 min' },
      { name: 'Franconia', time: '35-40 min' },
      { name: 'Kingstowne', time: '35-40 min' },
    ],
    localChallenges: [
      'Established neighborhoods with aging plumbing',
      'Split-level and colonial homes with basements',
      'Storm drainage issues',
    ],
    testimonials: [],
    geo: { lat: 38.7893, lng: -77.1872 },
    zipCodes: ['22150', '22151', '22152', '22153'],
  },
  'falls-church': {
    slug: 'falls-church',
    name: 'Falls Church',
    state: 'VA',
    subdomain: 'fallschurch.flood.doctor',
    responseTime: '20-30 min',
    headline: 'Water Damage Restoration in Falls Church, Virginia',
    description: "Falls Church water damage experts. Serving City of Falls Church and surrounding areas. Fast response, professional service.",
    neighborhoods: [
      { name: 'City of Falls Church', time: '20-25 min' },
      { name: 'West Falls Church', time: '20-25 min' },
      { name: 'Pimmit Hills', time: '20-25 min' },
      { name: 'Jefferson Village', time: '25-30 min' },
    ],
    localChallenges: [
      'Older homes with original plumbing',
      'Small lot sizes complicating equipment access',
      'Historic property considerations',
    ],
    testimonials: [],
    geo: { lat: 38.8823, lng: -77.1711 },
    zipCodes: ['22041', '22042', '22043', '22044', '22046'],
  },
};

export const getCityBySlug = (slug: string): CityConfig | undefined => {
  return CITIES[slug];
};

export const getAllCities = (): CityConfig[] => {
  return Object.values(CITIES);
};
