// config/unsplashImages.ts
// Curated Unsplash images for each archetype and city
// All images are free for commercial use, no attribution required

export interface UnsplashImage {
  id: string;
  url: string;
  alt: string;
  photographer: string;
  category: 'hero' | 'section' | 'gallery' | 'background';
}

// Image URL pattern: https://images.unsplash.com/photo-{id}?auto=format&fit=crop&w=1920&q=80
const unsplashBase = 'https://images.unsplash.com';

export const archetypeImages = {
  estate: {
    heroes: [
      {
        id: '1600596542815-ffad4c1539a9',
        url: `${unsplashBase}/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80`,
        alt: 'Luxury estate home exterior with manicured landscaping',
        photographer: 'Naomi Hébert',
        category: 'hero' as const
      },
      {
        id: '1600585154340-be6161a56a0c',
        url: `${unsplashBase}/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80`,
        alt: 'Grand luxury home with columns and circular driveway',
        photographer: 'Randy Fath',
        category: 'hero' as const
      },
      {
        id: '1613977257365-aaae5a9817ff',
        url: `${unsplashBase}/photo-1613977257365-aaae5a9817ff?auto=format&fit=crop&w=1920&q=80`,
        alt: 'Modern luxury mansion with pool and outdoor living',
        photographer: 'Point3D Commercial Imaging',
        category: 'hero' as const
      }
    ],
    interiors: [
      {
        id: '1600607687939-ce8a6c25118c',
        url: `${unsplashBase}/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80`,
        alt: 'Luxury living room with high ceilings and chandelier',
        photographer: 'R ARCHITECTURE',
        category: 'section' as const
      },
      {
        id: '1600566753190-17f0baa2a6c3',
        url: `${unsplashBase}/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80`,
        alt: 'Elegant home library with built-in bookshelves',
        photographer: 'R ARCHITECTURE',
        category: 'section' as const
      },
      {
        id: '1600585154526-990dced4db0d',
        url: `${unsplashBase}/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80`,
        alt: 'Grand staircase in luxury home foyer',
        photographer: 'R ARCHITECTURE',
        category: 'section' as const
      }
    ],
    wineCellar: [
      {
        id: '1558618666-fcd25c85cd64',
        url: `${unsplashBase}/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80`,
        alt: 'Wine cellar with wooden racks and stone walls',
        photographer: 'Florian Schmetz',
        category: 'section' as const
      }
    ]
  },

  historic: {
    heroes: [
      {
        id: '1555041469-a586c61ea9bc',
        url: `${unsplashBase}/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1920&q=80`,
        alt: 'Historic red brick row houses with iron railings',
        photographer: 'Jon Tyson',
        category: 'hero' as const
      },
      {
        id: '1499793983394-12d4c792ce9e',
        url: `${unsplashBase}/photo-1499793983394-12d4c792ce9e?auto=format&fit=crop&w=1920&q=80`,
        alt: 'Colonial style historic home with white columns',
        photographer: 'Rowan Heuvel',
        category: 'hero' as const
      }
    ],
    interiors: [
      {
        id: '1502672260266-1c1ef2d93688',
        url: `${unsplashBase}/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80`,
        alt: 'Historic home interior with original hardwood floors',
        photographer: 'Patrick Perkins',
        category: 'section' as const
      },
      {
        id: '1560448204-61dc36dc98c8',
        url: `${unsplashBase}/photo-1560448204-61dc36dc98c8?auto=format&fit=crop&w=1200&q=80`,
        alt: 'Original plaster walls and crown molding detail',
        photographer: 'Spacejoy',
        category: 'section' as const
      }
    ],
    brick: [
      {
        id: '1558618666-fcd25c85cd64',
        url: `${unsplashBase}/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80`,
        alt: 'Historic brick foundation and masonry work',
        photographer: 'Jon Tyson',
        category: 'section' as const
      }
    ]
  },

  urban: {
    heroes: [
      {
        id: '1545324418-cc1a3fa10c00',
        url: `${unsplashBase}/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80`,
        alt: 'Modern high-rise condo building with glass facade',
        photographer: 'Jason Dent',
        category: 'hero' as const
      },
      {
        id: '1486406146926-c627a92ad1ab',
        url: `${unsplashBase}/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80`,
        alt: 'City skyline with modern apartment towers',
        photographer: 'Sean Pollock',
        category: 'hero' as const
      },
      {
        id: '1448630360428-65456885c650',
        url: `${unsplashBase}/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1920&q=80`,
        alt: 'Luxury high-rise apartment building at dusk',
        photographer: 'Jared Rice',
        category: 'hero' as const
      }
    ],
    interiors: [
      {
        id: '1560448204-e02f11c3d0e2',
        url: `${unsplashBase}/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80`,
        alt: 'Modern condo living room with city views',
        photographer: 'Spacejoy',
        category: 'section' as const
      },
      {
        id: '1522708323590-d24dbb6b0267',
        url: `${unsplashBase}/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80`,
        alt: 'Contemporary apartment kitchen with modern finishes',
        photographer: 'Douglas Sheppard',
        category: 'section' as const
      }
    ],
    parking: [
      {
        id: '1506521781263-d8422e82f27a',
        url: `${unsplashBase}/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80`,
        alt: 'Underground parking garage in high-rise building',
        photographer: 'Markus Spiske',
        category: 'section' as const
      }
    ]
  },

  suburban: {
    heroes: [
      {
        id: '1564013799919-ab600027ffc6',
        url: `${unsplashBase}/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80`,
        alt: 'Single family home with green lawn in suburban neighborhood',
        photographer: 'Phil Hearing',
        category: 'hero' as const
      },
      {
        id: '1449844908441-8829872d2607',
        url: `${unsplashBase}/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1920&q=80`,
        alt: 'Split-level suburban home with two-car garage',
        photographer: 'todd kent',
        category: 'hero' as const
      }
    ],
    interiors: [
      {
        id: '1513694203232-719a280e022f',
        url: `${unsplashBase}/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80`,
        alt: 'Family room in suburban home with natural light',
        photographer: 'Sidekix Media',
        category: 'section' as const
      },
      {
        id: '1484154218962-a197022b5858',
        url: `${unsplashBase}/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80`,
        alt: 'Modern kitchen in suburban home',
        photographer: 'Jason Briscoe',
        category: 'section' as const
      }
    ],
    basement: [
      {
        id: '1556912172-45b7abe8b7e1',
        url: `${unsplashBase}/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80`,
        alt: 'Finished basement with entertainment area',
        photographer: 'Patrick Perkins',
        category: 'section' as const
      }
    ]
  }
};

// City-specific images (can override archetype defaults)
export const cityImages = {
  mclean: {
    hero: archetypeImages.estate.heroes[0],
    landmarks: [
      {
        id: '1555041469-a586c61ea9bc',
        url: `${unsplashBase}/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80`,
        alt: 'McLean Virginia luxury neighborhood',
        photographer: 'Unsplash',
        category: 'gallery' as const
      }
    ]
  },
  greatfalls: {
    hero: archetypeImages.estate.heroes[1],
    landmarks: []
  },
  alexandria: {
    hero: archetypeImages.historic.heroes[0],
    landmarks: []
  },
  arlington: {
    hero: archetypeImages.urban.heroes[0],
    landmarks: []
  },
  tysons: {
    hero: archetypeImages.urban.heroes[1],
    landmarks: []
  },
  reston: {
    hero: archetypeImages.urban.heroes[2],
    landmarks: []
  },
  fairfax: {
    hero: archetypeImages.suburban.heroes[0],
    landmarks: []
  },
  springfield: {
    hero: archetypeImages.suburban.heroes[1],
    landmarks: []
  },
  vienna: {
    hero: archetypeImages.historic.heroes[1],
    landmarks: []
  },
  fallschurch: {
    hero: archetypeImages.historic.heroes[0],
    landmarks: []
  },
  herndon: {
    hero: archetypeImages.suburban.heroes[0],
    landmarks: []
  },
  ashburn: {
    hero: archetypeImages.suburban.heroes[0],
    landmarks: []
  },
  lorton: {
    hero: archetypeImages.suburban.heroes[1],
    landmarks: []
  }
};

// Helper function to get image with size parameters
export const getUnsplashUrl = (
  photoId: string,
  width: number = 1920,
  height?: number,
  quality: number = 80
): string => {
  let url = `${unsplashBase}/photo-${photoId}?auto=format&fit=crop&w=${width}&q=${quality}`;
  if (height) {
    url += `&h=${height}`;
  }
  return url;
};
