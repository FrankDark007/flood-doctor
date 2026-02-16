// pages/city/DynamicNeighborhoodPage.tsx
// Dynamic neighborhood page that loads city-specific content from TypeScript files
import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import NeighborhoodPageRenderer, { NeighborhoodPageContent } from '../../components/city/NeighborhoodPageRenderer';
import PageMeta from '../../components/ui/PageMeta';
import { getCityInfo } from '../../utils/contentLoader';

// Import all neighborhood content statically for build-time optimization
// McLean
import {
  chesterbrookNeighborhoodContent,
  langleyNeighborhoodContent,
  salonaVillageNeighborhoodContent,
  theReserveNeighborhoodContent,
  woodsideEstatesNeighborhoodContent,
} from '../../src/content/cities/mclean/neighborhoods';

// Arlington
import {
  ballstonContent,
  clarendonContent,
  crystalCityContent,
  pentagonCityContent,
  rosslynContent,
  shirlingtonNeighborhoodContent,
} from '../../src/content/cities/arlington/neighborhoods';

// Alexandria
import {
  belleHavenNeighborhoodContent,
  carlyleNeighborhoodContent,
  delRayNeighborhoodContent,
  kingstowneNeighborhoodContent as alexandriaKingstowneNeighborhoodContent,
  oldTownNeighborhoodContent,
  rosemontNeighborhoodContent,
} from '../../src/content/cities/alexandria/neighborhoods';

// Fairfax
import {
  burkeCentreNeighborhoodContent,
  burkeNeighborhoodContent,
  fairfaxCityNeighborhoodContent,
  kingsParkNeighborhoodContent,
  mantuaNeighborhoodContent,
} from '../../src/content/cities/fairfax/neighborhoods';

// Vienna
import {
  clarksCrossing,
  dunnLoring,
  oakton,
  tysonsWoodsNeighborhoodContent,
  viennaTown,
  wolftrap,
} from '../../src/content/cities/vienna/neighborhoods';

// Tysons
import {
  scottsRunContent,
  theBoroContent,
  theMileContent,
  tysonsCentralContent,
  tysonsCornerContent,
} from '../../src/content/cities/tysons/neighborhoods';

// Reston
import {
  huntersWoodsNeighborhoodContent,
  lakeAnneNeighborhoodContent,
  northPointNeighborhoodContent,
  restonTownCenterNeighborhoodContent,
  southLakesNeighborhoodContent,
} from '../../src/content/cities/reston/neighborhoods';

// Herndon
import {
  downtownHerndonNeighborhoodContent,
  foxMillNeighborhoodContent,
  franklinFarmNeighborhoodContent,
  mcnairNeighborhoodContent,
  worldgateNeighborhoodContent,
} from '../../src/content/cities/herndon/neighborhoods';

// Ashburn
import {
  ashburnFarmNeighborhoodContent,
  belmontNeighborhoodContent,
  brambletonNeighborhoodContent,
  broadlandsNeighborhoodContent,
  oneLoudounNeighborhoodContent,
} from '../../src/content/cities/ashburn/neighborhoods';

// Springfield
import {
  franconiaNeighborhoodContent,
  kingstowneNeighborhoodContent as springfieldKingstowneNeighborhoodContent,
  newingtonNeighborhoodContent,
  rollingValleyNeighborhoodContent,
  westSpringfieldNeighborhoodContent,
} from '../../src/content/cities/springfield/neighborhoods';

// Falls Church
import {
  baileysCrossroadsNeighborhoodContent,
  fallsChurchCityNeighborhoodContent,
  lakeBarcroftNeighborhoodContent,
  pimmitHillsNeighborhoodContent,
  sevenCornersNeighborhoodContent,
} from '../../src/content/cities/fallschurch/neighborhoods';

// Great Falls
import {
  forestvilleNeighborhoodContent,
  greatFallsVillageNeighborhoodContent,
  hickoryFarmsNeighborhoodContent,
  riverbendNeighborhoodContent,
  senecaEstatesNeighborhoodContent,
} from '../../src/content/cities/greatfalls/neighborhoods';

// Lorton
import {
  gunstonContent,
  laurelHillContent,
  masonNeckContent,
  occoquanContent,
  southCountyContent,
} from '../../src/content/cities/lorton/neighborhoods';

// Content registry - all 13 cities with their neighborhoods
const contentRegistry: Record<string, Record<string, NeighborhoodPageContent>> = {
  mclean: {
    chesterbrook: chesterbrookNeighborhoodContent as unknown as NeighborhoodPageContent,
    langley: langleyNeighborhoodContent as unknown as NeighborhoodPageContent,
    'salona-village': salonaVillageNeighborhoodContent as unknown as NeighborhoodPageContent,
    'the-reserve': theReserveNeighborhoodContent as unknown as NeighborhoodPageContent,
    'woodside-estates': woodsideEstatesNeighborhoodContent as unknown as NeighborhoodPageContent,
  },
  arlington: {
    ballston: ballstonContent as unknown as NeighborhoodPageContent,
    clarendon: clarendonContent as unknown as NeighborhoodPageContent,
    'crystal-city': crystalCityContent as unknown as NeighborhoodPageContent,
    'pentagon-city': pentagonCityContent as unknown as NeighborhoodPageContent,
    rosslyn: rosslynContent as unknown as NeighborhoodPageContent,
    shirlington: shirlingtonNeighborhoodContent as unknown as NeighborhoodPageContent,
  },
  alexandria: {
    'belle-haven': belleHavenNeighborhoodContent as unknown as NeighborhoodPageContent,
    carlyle: carlyleNeighborhoodContent as unknown as NeighborhoodPageContent,
    'del-ray': delRayNeighborhoodContent as unknown as NeighborhoodPageContent,
    kingstowne: alexandriaKingstowneNeighborhoodContent as unknown as NeighborhoodPageContent,
    'old-town': oldTownNeighborhoodContent as unknown as NeighborhoodPageContent,
    rosemont: rosemontNeighborhoodContent as unknown as NeighborhoodPageContent,
  },
  fairfax: {
    'burke-centre': burkeCentreNeighborhoodContent as unknown as NeighborhoodPageContent,
    burke: burkeNeighborhoodContent as unknown as NeighborhoodPageContent,
    'fairfax-city': fairfaxCityNeighborhoodContent as unknown as NeighborhoodPageContent,
    'kings-park': kingsParkNeighborhoodContent as unknown as NeighborhoodPageContent,
    mantua: mantuaNeighborhoodContent as unknown as NeighborhoodPageContent,
  },
  vienna: {
    'clarks-crossing': clarksCrossing as unknown as NeighborhoodPageContent,
    'dunn-loring': dunnLoring as unknown as NeighborhoodPageContent,
    oakton: oakton as unknown as NeighborhoodPageContent,
    'tysons-woods': tysonsWoodsNeighborhoodContent as unknown as NeighborhoodPageContent,
    'vienna-town': viennaTown as unknown as NeighborhoodPageContent,
    wolftrap: wolftrap as unknown as NeighborhoodPageContent,
  },
  tysons: {
    'scotts-run': scottsRunContent as unknown as NeighborhoodPageContent,
    'the-boro': theBoroContent as unknown as NeighborhoodPageContent,
    'the-mile': theMileContent as unknown as NeighborhoodPageContent,
    'tysons-central': tysonsCentralContent as unknown as NeighborhoodPageContent,
    'tysons-corner': tysonsCornerContent as unknown as NeighborhoodPageContent,
  },
  reston: {
    'hunters-woods': huntersWoodsNeighborhoodContent as unknown as NeighborhoodPageContent,
    'lake-anne': lakeAnneNeighborhoodContent as unknown as NeighborhoodPageContent,
    'north-point': northPointNeighborhoodContent as unknown as NeighborhoodPageContent,
    'reston-town-center': restonTownCenterNeighborhoodContent as unknown as NeighborhoodPageContent,
    'south-lakes': southLakesNeighborhoodContent as unknown as NeighborhoodPageContent,
  },
  herndon: {
    'downtown-herndon': downtownHerndonNeighborhoodContent as unknown as NeighborhoodPageContent,
    'fox-mill': foxMillNeighborhoodContent as unknown as NeighborhoodPageContent,
    'franklin-farm': franklinFarmNeighborhoodContent as unknown as NeighborhoodPageContent,
    mcnair: mcnairNeighborhoodContent as unknown as NeighborhoodPageContent,
    worldgate: worldgateNeighborhoodContent as unknown as NeighborhoodPageContent,
  },
  ashburn: {
    'ashburn-farm': ashburnFarmNeighborhoodContent as unknown as NeighborhoodPageContent,
    belmont: belmontNeighborhoodContent as unknown as NeighborhoodPageContent,
    brambleton: brambletonNeighborhoodContent as unknown as NeighborhoodPageContent,
    broadlands: broadlandsNeighborhoodContent as unknown as NeighborhoodPageContent,
    'one-loudoun': oneLoudounNeighborhoodContent as unknown as NeighborhoodPageContent,
  },
  springfield: {
    franconia: franconiaNeighborhoodContent as unknown as NeighborhoodPageContent,
    kingstowne: springfieldKingstowneNeighborhoodContent as unknown as NeighborhoodPageContent,
    newington: newingtonNeighborhoodContent as unknown as NeighborhoodPageContent,
    'rolling-valley': rollingValleyNeighborhoodContent as unknown as NeighborhoodPageContent,
    'west-springfield': westSpringfieldNeighborhoodContent as unknown as NeighborhoodPageContent,
  },
  fallschurch: {
    'baileys-crossroads': baileysCrossroadsNeighborhoodContent as unknown as NeighborhoodPageContent,
    'falls-church-city': fallsChurchCityNeighborhoodContent as unknown as NeighborhoodPageContent,
    'lake-barcroft': lakeBarcroftNeighborhoodContent as unknown as NeighborhoodPageContent,
    'pimmit-hills': pimmitHillsNeighborhoodContent as unknown as NeighborhoodPageContent,
    'seven-corners': sevenCornersNeighborhoodContent as unknown as NeighborhoodPageContent,
  },
  greatfalls: {
    forestville: forestvilleNeighborhoodContent as unknown as NeighborhoodPageContent,
    'great-falls-village': greatFallsVillageNeighborhoodContent as unknown as NeighborhoodPageContent,
    'hickory-farms': hickoryFarmsNeighborhoodContent as unknown as NeighborhoodPageContent,
    riverbend: riverbendNeighborhoodContent as unknown as NeighborhoodPageContent,
    'seneca-estates': senecaEstatesNeighborhoodContent as unknown as NeighborhoodPageContent,
  },
  lorton: {
    gunston: gunstonContent as unknown as NeighborhoodPageContent,
    'laurel-hill': laurelHillContent as unknown as NeighborhoodPageContent,
    'mason-neck': masonNeckContent as unknown as NeighborhoodPageContent,
    occoquan: occoquanContent as unknown as NeighborhoodPageContent,
    'south-county': southCountyContent as unknown as NeighborhoodPageContent,
  },
};

interface RouteParams {
  city: string;
  neighborhood: string;
}

/**
 * Normalizes neighborhood content from any of the 4+ content formats into the
 * NeighborhoodPageContent shape expected by NeighborhoodPageRenderer.
 *
 * Content files across 13 cities use inconsistent schemas:
 *   Format A: { meta, h1, heroSection, neighborhoodIntro, hyperLocalContent, serviceList, testimonialSection, emergencySection, faq: [...], breadcrumbs }
 *   Format B: { heroSection: { neighborhood, city, tagline, description }, introSection, servicesSection, faqSection: { header, faqs }, testimonialsSection, closingSection }
 *   Format C: { meta, h1, introSection, processSection, localChallenges, faqSection: [...], serviceAreaSection, finalCTA }
 *   Format D: { heroH1, heroP, searchDescription, neighborhoodName, mainContent, faqSection: { title, faqs }, closingContent }
 *   + variants with missing/renamed sub-fields (e.g. hyperLocalContent.streets instead of .schools)
 *
 * This function extracts what it can and provides safe defaults so the renderer never crashes.
 */
function normalizeContent(raw: any, cityName: string, neighborhoodSlug: string): NeighborhoodPageContent {
  // Already correct format — but still patch missing sub-fields
  const neighborhoodLabel = (raw.neighborhoodName || neighborhoodSlug || '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c: string) => c.toUpperCase());

  // Extract meta
  const meta = raw.meta || {
    title: raw.heroH1 || `Water Damage Restoration ${neighborhoodLabel} | Flood Doctor`,
    description: raw.heroP || raw.searchDescription || raw.heroSection?.description || raw.heroSection?.tagline || '',
    canonical: '',
  };

  // Extract h1
  const h1 = raw.h1 || raw.heroH1 || raw.heroSection?.neighborhood
    ? `Water Damage Restoration in ${raw.heroSection?.neighborhood || neighborhoodLabel}, ${raw.heroSection?.city || cityName}`
    : `Water Damage Restoration in ${neighborhoodLabel}`;

  // Extract heroSection
  const heroSection = {
    headline: raw.heroSection?.headline || raw.heroSection?.tagline || raw.introSection?.header || '',
    subheadline: raw.heroSection?.subheadline || raw.heroSection?.description || raw.heroP || '',
    responseTime: raw.heroSection?.responseTime || raw.serviceAreaSection?.responseTime || '60-minute emergency response',
    backgroundImage: raw.heroSection?.backgroundImage,
  };

  // Extract neighborhoodIntro
  const introParagraph = raw.neighborhoodIntro?.paragraph
    || (raw.introSection?.content || raw.introSection?.paragraphs?.join('\n\n') || raw.mainContent?.overview?.paragraphs?.join('\n\n') || '');
  const neighborhoodIntro = {
    paragraph: introParagraph,
    housingTypes: raw.neighborhoodIntro?.housingTypes || [],
    commonIssues: raw.neighborhoodIntro?.commonIssues || [],
  };

  // Extract hyperLocalContent (handle alternate field names)
  const hlc = raw.hyperLocalContent || {};
  const hyperLocalContent = {
    landmarks: hlc.landmarks || [],
    schools: hlc.schools || hlc.streets || [],
    subdivisions: hlc.subdivisions || hlc.businessDistrict ? [hlc.businessDistrict].flat().filter(Boolean) : (raw.serviceAreaSection?.neighborhoods || []),
    localFacts: hlc.localFacts || [],
  };

  // Extract serviceList (handle servicesSection.services with title→name)
  let serviceList: Array<{ name: string; description: string }> = raw.serviceList || [];
  if (serviceList.length === 0 && raw.servicesSection?.services) {
    serviceList = raw.servicesSection.services.map((s: any) => ({
      name: s.title || s.name || '',
      description: s.description || '',
    }));
  }
  if (serviceList.length === 0 && raw.localChallenges?.challenges) {
    serviceList = raw.localChallenges.challenges.map((c: any) => ({
      name: c.title || '',
      description: c.description || '',
    }));
  }

  // Extract testimonialSection
  const rawTestimonials = raw.testimonialSection?.testimonials || raw.testimonialsSection?.testimonials || [];
  const testimonialSection = {
    headline: raw.testimonialSection?.headline || raw.testimonialsSection?.header || 'What Our Clients Say',
    testimonials: rawTestimonials.map((t: any) => ({
      quote: t.quote || t.text || '',
      author: t.author || '',
      location: t.location || '',
      service: t.service || '',
    })),
  };

  // Extract emergencySection
  const emergencySection = {
    headline: raw.emergencySection?.headline || raw.emergencySection?.header || '24/7 Emergency Response',
    localContacts: raw.emergencySection?.localContacts || [],
    responseNote: raw.emergencySection?.responseNote || raw.emergencySection?.availabilityContent || raw.emergencySection?.ctaText || '',
  };

  // Extract faq — handle array, object with questions, object with faqs, faqSection
  let faq: Array<{ question: string; answer: string }> = [];
  if (Array.isArray(raw.faq)) {
    faq = raw.faq;
  } else if (raw.faq?.questions) {
    faq = raw.faq.questions;
  } else if (Array.isArray(raw.faqSection)) {
    faq = raw.faqSection;
  } else if (raw.faqSection?.faqs) {
    faq = raw.faqSection.faqs;
  } else if (raw.faqSection?.questions) {
    faq = raw.faqSection.questions;
  }

  // Extract breadcrumbs or generate default
  const breadcrumbs = raw.breadcrumbs || [
    { label: 'Home', url: '/' },
    { label: 'Neighborhoods', url: '/' },
    { label: neighborhoodLabel, url: `/neighborhoods/${neighborhoodSlug}/` },
  ];

  return {
    meta,
    h1: typeof h1 === 'string' ? h1 : `Water Damage Restoration in ${neighborhoodLabel}`,
    heroSection,
    neighborhoodIntro,
    hyperLocalContent,
    serviceList,
    testimonialSection,
    emergencySection,
    faq,
    breadcrumbs,
  };
}

const DynamicNeighborhoodPage: React.FC = () => {
  const params = useParams<RouteParams>();
  const neighborhood = params.neighborhood;

  // Resolve city: useParams (main domain), build-time global (city subdomains), or hostname
  let city = params.city || '';
  if (!city && (window as any).__FLOOD_DOCTOR_CITY__) {
    city = (window as any).__FLOOD_DOCTOR_CITY__;
  }
  if (!city) {
    const hostname = window.location.hostname;
    if (hostname.includes('.flood.doctor') && !hostname.startsWith('www')) {
      city = hostname.split('.')[0];
    }
  }

  const cityInfo = getCityInfo(city || '');

  // Synchronous registry lookup — renders NeighborhoodPageRenderer on FIRST render
  // (critical for prerender: PageMeta must fire without waiting for useEffect)
  const registryContent = useMemo(() => {
    if (city && neighborhood && contentRegistry[city]?.[neighborhood]) {
      return contentRegistry[city][neighborhood];
    }
    return null;
  }, [city, neighborhood]);

  // Dynamic import fallback (only if not in registry)
  const [dynamicContent, setDynamicContent] = useState<NeighborhoodPageContent | null>(null);
  const [loading, setLoading] = useState(!registryContent);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (registryContent) return; // Already resolved synchronously

    async function loadContent() {
      if (!city || !neighborhood) {
        setError('City or neighborhood not specified');
        setLoading(false);
        return;
      }

      try {
        const module = await import(`../../src/content/cities/${city}/neighborhoods/${neighborhood}.ts`);
        const exportName = Object.keys(module).find(key =>
          key.includes('Content') || key.includes('Neighborhood')
        );
        if (exportName) {
          setDynamicContent(module[exportName] as NeighborhoodPageContent);
        } else {
          setError('Content not found in module');
        }
      } catch (err) {
        console.error('Failed to load content:', err);
        setError('Neighborhood page not found');
      } finally {
        setLoading(false);
      }
    }

    loadContent();
  }, [city, neighborhood, registryContent]);

  const rawContent = registryContent || dynamicContent;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <PageMeta title="Loading..." description="" />
        <div className="animate-pulse text-[#5f6368]">Loading...</div>
      </div>
    );
  }

  if (error || !rawContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <PageMeta title="Page Not Found" description="The requested neighborhood page could not be found." />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#202124] mb-4">Page Not Found</h1>
          <p className="text-[#5f6368]">{error || 'The requested neighborhood page could not be found.'}</p>
        </div>
      </div>
    );
  }

  // Normalize content from any of the 4+ content formats
  const content = normalizeContent(rawContent, cityInfo.name, neighborhood || '');

  return (
    <NeighborhoodPageRenderer
      content={content}
      cityName={cityInfo.name}
      citySlug={city || ''}
      phone={cityInfo.phone}
    />
  );
};

export default DynamicNeighborhoodPage;
