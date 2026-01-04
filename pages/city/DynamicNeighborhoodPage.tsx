// pages/city/DynamicNeighborhoodPage.tsx
// Dynamic neighborhood page that loads city-specific content from TypeScript files
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NeighborhoodPageRenderer, { NeighborhoodPageContent } from '../../components/city/NeighborhoodPageRenderer';
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

const DynamicNeighborhoodPage: React.FC = () => {
  const { city, neighborhood } = useParams<RouteParams>();
  const [content, setContent] = useState<NeighborhoodPageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const cityInfo = getCityInfo(city || '');

  useEffect(() => {
    async function loadContent() {
      if (!city || !neighborhood) {
        setError('City or neighborhood not specified');
        setLoading(false);
        return;
      }

      // Try static registry first
      if (contentRegistry[city]?.[neighborhood]) {
        setContent(contentRegistry[city][neighborhood]);
        setLoading(false);
        return;
      }

      // Dynamic import fallback
      try {
        const module = await import(`../../src/content/cities/${city}/neighborhoods/${neighborhood}.ts`);
        const exportName = Object.keys(module).find(key =>
          key.includes('Content') || key.includes('Neighborhood')
        );
        if (exportName) {
          setContent(module[exportName] as NeighborhoodPageContent);
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
  }, [city, neighborhood]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-[#5f6368]">Loading...</div>
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#202124] mb-4">Page Not Found</h1>
          <p className="text-[#5f6368]">{error || 'The requested neighborhood page could not be found.'}</p>
        </div>
      </div>
    );
  }

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
