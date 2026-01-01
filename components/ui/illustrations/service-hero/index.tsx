import React from 'react';
// Residential Imports
import HeroWaterDamage from './HeroWaterDamage';
import HeroFloodCleanup from './HeroFloodCleanup';
import HeroSewageCleanup from './HeroSewageCleanup';
import HeroMoldRemediation from './HeroMoldRemediation';
import HeroStructuralDrying from './HeroStructuralDrying';
import HeroFireSmoke from './HeroFireSmoke';
import HeroOdorRemoval from './HeroOdorRemoval';
import HeroContentsPackout from './HeroContentsPackout';
import HeroBasementFlooding from './HeroBasementFlooding';
import HeroCrawlSpaceDrying from './HeroCrawlSpaceDrying';
import HeroHardwoodDrying from './HeroHardwoodDrying';
import HeroRoofLeak from './HeroRoofLeak';
import HeroStormDamage from './HeroStormDamage';
import HeroBurstPipe from './HeroBurstPipe';
import HeroOrbitPhone from './HeroOrbitPhone';

// Commercial Imports
import HeroCommercialWaterDamage from './HeroCommercialWaterDamage';
import HeroCommercialFloodCleanup from './HeroCommercialFloodCleanup';
import HeroLargeLoss from './HeroLargeLoss';
import HeroCommercialSewage from './HeroCommercialSewage';
import HeroCommercialMold from './HeroCommercialMold';
import HeroCommercialFire from './HeroCommercialFire';
import HeroMoistureMapping from './HeroMoistureMapping';
import HeroIAQ from './HeroIAQ';
import HeroEnvironmentalTesting from './HeroEnvironmentalTesting';
import HeroHealthcare from './HeroHealthcare';
import HeroHospitality from './HeroHospitality';
import HeroMunicipal from './HeroMunicipal';
import HeroIndustrial from './HeroIndustrial';

// Registry of all available hero visuals
const HERO_VISUALS: Record<string, React.ComponentType> = {
  // Residential
  'water-damage': HeroWaterDamage,
  'flood-cleanup': HeroFloodCleanup,
  'sewage-cleanup': HeroSewageCleanup,
  'mold-remediation': HeroMoldRemediation,
  'structural-drying': HeroStructuralDrying,
  'fire-smoke': HeroFireSmoke,
  'odor-removal': HeroOdorRemoval,
  'contents-packout': HeroContentsPackout,
  'basement-flooding': HeroBasementFlooding,
  'crawl-space': HeroCrawlSpaceDrying,
  'hardwood-drying': HeroHardwoodDrying,
  'roof-leak': HeroRoofLeak,
  'storm-damage': HeroStormDamage,
  'burst-pipe': HeroBurstPipe,
  'orbit-phone': HeroOrbitPhone, // Added from Variant A

  // Commercial
  'com-water': HeroCommercialWaterDamage,
  'com-flood': HeroCommercialFloodCleanup,
  'large-loss': HeroLargeLoss,
  'com-sewage': HeroCommercialSewage,
  'com-mold': HeroCommercialMold,
  'com-fire': HeroCommercialFire,
  'moisture-mapping': HeroMoistureMapping,
  'iaq': HeroIAQ,
  'env-testing': HeroEnvironmentalTesting,
  'healthcare': HeroHealthcare,
  'hospitality': HeroHospitality,
  'municipal': HeroMunicipal,
  'industrial': HeroIndustrial,
};

interface HeroVisualProps {
  visualKey?: string;
}

const HeroVisual: React.FC<HeroVisualProps> = ({ visualKey }) => {
  if (!visualKey || !HERO_VISUALS[visualKey]) {
    // Fallback if no key matches
    return null;
  }

  const Component = HERO_VISUALS[visualKey];
  
  return (
    <div className="w-full">
      <Component />
      <div className="text-center mt-3">
        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Illustrative example</span>
      </div>
    </div>
  );
};

export default HeroVisual;