/**
 * Site-wide constants for Flood Doctor
 * Use these instead of hardcoding values throughout the codebase
 */

export const SITE_PHONE = {
  tel: 'tel:8774970007',
  display: '(877) 497-0007',
  raw: '8774970007',
  local: '(703) 498-1581',
  localTel: 'tel:7034981581',
} as const;

export const SITE_INFO = {
  name: 'Flood Doctor',
  legalName: 'Flood Doctor Inc.',
  parentCompany: 'Restoration Services Inc.',
  tagline: 'Water Damage Restoration',
  url: 'https://flood.doctor',
  mainSite: 'https://www.flooddoctorva.com',
} as const;

export const CREDENTIALS = {
  dpor: {
    license: '2705155505',
    state: 'Virginia',
    display: 'VA DPOR #2705155505',
    description: 'Class-A Contractor (CBC, RBC)',
  },
  deq: {
    license: 'RLD05374',
    state: 'Virginia',
    display: 'VA DEQ RLD #RLD05374',
    description: 'Responsible Land Disturber',
  },
  dc: {
    state: 'Washington DC',
    display: 'DC DLCP Class-A General Contractor',
  },
  md: {
    state: 'Maryland',
    display: 'Maryland MHIC Licensed',
  },
  iicrc: {
    certified: true,
    display: 'IICRC Certified Firm',
    certifications: ['WRT', 'FSRT', 'CDS', 'ASD', 'OCT', 'HST', 'AMRT'],
  },
  ria: {
    certified: true,
    display: 'RIA Certified',
    certifications: ['CR', 'WLS', 'CLS', 'CMP'],
  },
  insurance: {
    fullyInsured: true,
    display: 'Fully Insured',
  },
} as const;

export const SERVICE_AREA = {
  primary: 'Northern Virginia',
  regions: ['Northern Virginia', 'Maryland', 'Washington DC'],
  shorthand: 'NoVA, MD & DC',
} as const;

export const RESPONSE_TIME = {
  minutes: 60,
  display: '60-minute response',
  guarantee: 'We arrive in 60 minutes',
} as const;

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/flooddoctorinc/',
  instagram: 'https://www.instagram.com/flood.doctor/',
  twitter: 'https://twitter.com/flooddoc',
  linkedin: 'https://www.linkedin.com/company/flood-doctor-inc/',
  google: 'https://g.co/kgs/4vTw6D7',
  yelp: 'https://www.yelp.com/biz/flood-doctor-vienna-5',
  bbb: 'https://www.bbb.org/us/va/vienna/profile/water-damage-restoration/flood-doctor-0241-142620305',
} as const;

export const COMPANY_ADDRESS = {
  street: '8466D Tyco Rd.',
  locality: 'Vienna',
  region: 'VA',
  postalCode: '22182',
  country: 'US',
  full: '8466D Tyco Rd. Vienna, VA 22182',
} as const;

export const AWARDS = [
  { name: 'Best of HomeAdvisor', years: 14 },
  { name: "Angie's List Super Service Award", recurring: true },
  { name: 'Crawford Connection Golden Hammer Award', description: 'Top 200 of 4,000+ contractors' },
] as const;

// Schema.org structured data helpers
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://flood.doctor/#organization',
  name: SITE_INFO.legalName,
  url: SITE_INFO.url,
  telephone: SITE_PHONE.display,
  priceRange: '$$',
  image: `${SITE_INFO.url}/og-image.jpg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_ADDRESS.street,
    addressLocality: COMPANY_ADDRESS.locality,
    addressRegion: COMPANY_ADDRESS.region,
    postalCode: COMPANY_ADDRESS.postalCode,
    addressCountry: COMPANY_ADDRESS.country,
  },
  areaServed: SERVICE_AREA.regions.map(region => ({
    '@type': 'State',
    name: region,
  })),
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional License',
      name: CREDENTIALS.dpor.display,
      recognizedBy: {
        '@type': 'Organization',
        name: 'Virginia Department of Professional and Occupational Regulation',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional License',
      name: CREDENTIALS.dc.display,
      recognizedBy: {
        '@type': 'Organization',
        name: 'DC Department of Licensing and Consumer Protection',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional Certification',
      name: CREDENTIALS.iicrc.display,
      recognizedBy: {
        '@type': 'Organization',
        name: 'Institute of Inspection, Cleaning and Restoration Certification',
      },
    },
  ],
};
