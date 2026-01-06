
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileStickyCTA from './components/layout/MobileStickyCTA';
import ScrollToTop from './components/layout/ScrollToTop';
import { EmergencyProvider } from './contexts/EmergencyContext';
import { FranchiseProvider } from './contexts/FranchiseContext';
import CommandPalette from './components/ui/CommandPalette';

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

// Critical pages - load immediately
import Home from './pages/Home';
import ServicesHub from './pages/ServicesHub';
import ServiceDetail from './pages/templates/ServiceDetail';

// Lazy load all other pages for route-based code splitting
const LocationsHub = lazy(() => import('./pages/LocationsHub'));
const RequestService = lazy(() => import('./pages/RequestService'));
const CategoryLanding = lazy(() => import('./pages/templates/CategoryLanding'));
const ResidentialVariantA = lazy(() => import('./pages/templates/ResidentialVariantA'));

// Dev Layout Variants - rarely accessed
const ServiceDetailDevA = lazy(() => import('./pages/templates/ServiceDetailDevA'));
const ServiceDetailDevB = lazy(() => import('./pages/templates/ServiceDetailDevB'));
const ServiceDetailDevC = lazy(() => import('./pages/templates/ServiceDetailDevC'));

// Service Dev Layouts (10 variants for SEO content)
const ServiceDev1 = lazy(() => import('./pages/templates/dev/Service-Dev-1'));
const ServiceDev2 = lazy(() => import('./pages/templates/dev/Service-Dev-2'));
const ServiceDev3 = lazy(() => import('./pages/templates/dev/Service-Dev-3'));
const ServiceDev4 = lazy(() => import('./pages/templates/dev/Service-Dev-4'));
const ServiceDev5 = lazy(() => import('./pages/templates/dev/Service-Dev-5'));
const ServiceDev6 = lazy(() => import('./pages/templates/dev/Service-Dev-6'));
const ServiceDev7 = lazy(() => import('./pages/templates/dev/Service-Dev-7'));
const ServiceDev8 = lazy(() => import('./pages/templates/dev/Service-Dev-8'));
const ServiceDev9 = lazy(() => import('./pages/templates/dev/Service-Dev-9'));
const ServiceDev10 = lazy(() => import('./pages/templates/dev/Service-Dev-10'));

// ServiceDetail Dev Layouts (10 variants for service pages)
const ServiceDetailDev1 = lazy(() => import('./pages/templates/dev/ServiceDetailDev1'));
const ServiceDetailDev2 = lazy(() => import('./pages/templates/dev/ServiceDetailDev2'));
const ServiceDetailDev3 = lazy(() => import('./pages/templates/dev/ServiceDetailDev3'));
const ServiceDetailDev4 = lazy(() => import('./pages/templates/dev/ServiceDetailDev4'));
const ServiceDetailDev5 = lazy(() => import('./pages/templates/dev/ServiceDetailDev5'));
const ServiceDetailDev6 = lazy(() => import('./pages/templates/dev/ServiceDetailDev6'));
const ServiceDetailDev7 = lazy(() => import('./pages/templates/dev/ServiceDetailDev7'));
const ServiceDetailDev8 = lazy(() => import('./pages/templates/dev/ServiceDetailDev8'));
const ServiceDetailDev9 = lazy(() => import('./pages/templates/dev/ServiceDetailDev9'));
const ServiceDetailDev10 = lazy(() => import('./pages/templates/dev/ServiceDetailDev10'));

// Litho-style Dev Layouts
const LithoDev1 = lazy(() => import('./pages/templates/dev/LithoDev1'));
const LithoDev2 = lazy(() => import('./pages/templates/dev/LithoDev2'));
const LithoDev3 = lazy(() => import('./pages/templates/dev/LithoDev3'));

const AboutDevA = lazy(() => import('./pages/AboutDevA'));
const AboutDevB = lazy(() => import('./pages/AboutDevB'));
const AboutDevC = lazy(() => import('./pages/AboutDevC'));
const ContactDevA = lazy(() => import('./pages/ContactDevA'));
const ContactDevB = lazy(() => import('./pages/ContactDevB'));
const ContactDevC = lazy(() => import('./pages/ContactDevC'));
const HomeDevA = lazy(() => import('./pages/HomeDevA'));
const HomeDevB = lazy(() => import('./pages/HomeDevB'));
const HomeDevC = lazy(() => import('./pages/HomeDevC'));
const ServicesDevA = lazy(() => import('./pages/ServicesDevA'));
const ServicesDevB = lazy(() => import('./pages/ServicesDevB'));
const ServicesDevC = lazy(() => import('./pages/ServicesDevC'));

// Core Pages
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Reviews = lazy(() => import('./pages/Reviews'));
const ResourcesHub = lazy(() => import('./pages/ResourcesHub'));
const FAQ = lazy(() => import('./pages/resources/FAQ'));
const InsuranceGuide = lazy(() => import('./pages/resources/InsuranceGuide'));
const HomeownerGuides = lazy(() => import('./pages/resources/HomeownerGuides'));
const EmergencyChecklists = lazy(() => import('./pages/resources/EmergencyChecklists'));
const Technology = lazy(() => import('./pages/resources/Technology'));
const Communication = lazy(() => import('./pages/resources/Communication'));
const InsuranceClaimsGuide = lazy(() => import('./pages/resources/InsuranceClaimsGuide'));
const WaterDamageCostGuide = lazy(() => import('./pages/resources/WaterDamageCostGuide'));
const MoldPreventionGuide = lazy(() => import('./pages/resources/MoldPreventionGuide'));
const WaterDamageCategories = lazy(() => import('./pages/resources/WaterDamageCategories'));
const SignsOfWaterDamage = lazy(() => import('./pages/resources/SignsOfWaterDamage'));
const WaterDamageCostCalculator = lazy(() => import('./pages/resources/WaterDamageCostCalculator'));
const BlogIndex = lazy(() => import('./pages/BlogIndex'));
const NearMeLanding = lazy(() => import('./pages/NearMeLanding'));
const NotFound = lazy(() => import('./pages/NotFound'));
const VideoGenerator = lazy(() => import('./pages/VideoGenerator'));
const ClientPortalDemo = lazy(() => import('./pages/ClientPortalDemo'));
const VisualComponentsDemo = lazy(() => import('./pages/VisualComponentsDemo'));

// Legal & Company
const Careers = lazy(() => import('./pages/Careers'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));

// Commercial Pages
const HealthcareRestoration = lazy(() => import('./pages/commercial/HealthcareRestoration'));

// Blog Articles - all lazy loaded
const EmergencyWaterDamageResponse = lazy(() => import('./pages/blog/emergency-water-damage-response-virginia'));
const MoldAfterWaterDamage = lazy(() => import('./pages/blog/mold-after-water-damage-virginia'));
const SumpPumpFailure = lazy(() => import('./pages/blog/sump-pump-failure-basement-flooding-nova'));
const CommercialWaterDamage = lazy(() => import('./pages/blog/commercial-water-damage-business-continuity'));
const CrawlSpaceMoisture = lazy(() => import('./pages/blog/crawl-space-moisture-virginia-homes'));
const ApplianceWaterDamage = lazy(() => import('./pages/blog/appliance-water-damage-dishwasher-washing-machine'));
const RoofLeakWaterDamage = lazy(() => import('./pages/blog/roof-leak-water-damage-virginia-storms'));
const SewageCleanupGuide = lazy(() => import('./pages/blog/sewage-backup-cleanup-health-risks-virginia'));
const WaterDamageClasses = lazy(() => import('./pages/blog/water-damage-restoration-timeline'));
const BasementFloodingLoudoun = lazy(() => import('./pages/blog/basement-flooding-loudoun-county'));
const WaterDamageNorthernVirginia = lazy(() => import('./pages/blog/water-damage-northern-virginia-guide'));
const HomeownersInsurance = lazy(() => import('./pages/blog/homeowners-insurance-water-damage-virginia'));
const WaterDamageCostFairfax = lazy(() => import('./pages/blog/water-damage-restoration-cost-fairfax'));
const CommercialWaterDamageDC = lazy(() => import('./pages/blog/commercial-water-damage-restoration-dc'));
const HiddenWaterDamage = lazy(() => import('./pages/blog/hidden-water-damage-signs-arlington'));
const BurstPipeEmergency = lazy(() => import('./pages/blog/burst-pipe-emergency-response'));
const MoldGrowthTimeline = lazy(() => import('./pages/blog/mold-growth-after-water-damage-timeline'));
const SewageCleanupAlexandria = lazy(() => import('./pages/blog/sewage-cleanup-alexandria-va'));

// Additional Blog Articles
const BasementFloodingGuide = lazy(() => import('./pages/blog/basement-flooding-guide'));
const BathroomWaterDamageGuide = lazy(() => import('./pages/blog/bathroom-water-damage-guide'));
const WaterDamageHomeSellingDisclosure = lazy(() => import('./pages/blog/water-damage-home-selling-disclosure'));
const HvacWaterDamageGuide = lazy(() => import('./pages/blog/hvac-water-damage-guide'));
const HiddenWaterDamageSigns = lazy(() => import('./pages/blog/hidden-water-damage-signs'));
const DrywallWaterDamageGuide = lazy(() => import('./pages/blog/drywall-water-damage-guide'));
const FrozenBurstPipesGuide = lazy(() => import('./pages/blog/frozen-burst-pipes-guide'));
const HardwoodFloorWaterDamage = lazy(() => import('./pages/blog/hardwood-floor-water-damage'));
const CeilingWaterDamageGuide = lazy(() => import('./pages/blog/ceiling-water-damage-guide'));
const KitchenWaterDamageGuide = lazy(() => import('./pages/blog/kitchen-water-damage-guide'));
const AtticWaterDamageGuide = lazy(() => import('./pages/blog/attic-water-damage-guide'));
const RentalPropertyWaterDamage = lazy(() => import('./pages/blog/rental-property-water-damage-virginia'));
const WaterDamagedFurnitureRestoration = lazy(() => import('./pages/blog/water-damaged-furniture-restoration'));
const ProfessionalDryingDehumidification = lazy(() => import('./pages/blog/professional-drying-dehumidification'));
const MustySmellOdorRemovalGuide = lazy(() => import('./pages/blog/musty-smell-odor-removal-guide'));
const WaterHeaterFloodingGuide = lazy(() => import('./pages/blog/water-heater-flooding-guide'));
const WindowDoorWaterIntrusion = lazy(() => import('./pages/blog/window-door-water-intrusion'));
const WaterDamageHomeWarrantyCoverage = lazy(() => import('./pages/blog/water-damage-home-warranty-coverage'));
const VacationWaterDamagePrevention = lazy(() => import('./pages/blog/vacation-water-damage-prevention'));
const CondoWaterDamageHoaGuide = lazy(() => import('./pages/blog/condo-water-damage-hoa-guide'));
const WaterDamagedElectronicsGuide = lazy(() => import('./pages/blog/water-damaged-electronics-guide'));
const LaundryRoomWashingMachineFlood = lazy(() => import('./pages/blog/laundry-room-washing-machine-flood'));
const WetCarpetWaterDamage = lazy(() => import('./pages/blog/wet-carpet-water-damage'));

// SEO Phase 3 Blog Articles
const WhatDoesBlackMoldLookLike = lazy(() => import('./pages/blog/what-does-black-mold-look-like'));
const MildewVsMoldDifference = lazy(() => import('./pages/blog/mildew-vs-mold-difference'));
const DoesVinegarKillMold = lazy(() => import('./pages/blog/does-vinegar-kill-mold'));
const SignsOfWaterDamageBehindWalls = lazy(() => import('./pages/blog/signs-of-water-damage-behind-walls'));

// HowTo Guides
const GuidesHub = lazy(() => import('./pages/guides/GuidesHub'));
const WaterDamageCleanupGuide = lazy(() => import('./pages/guides/WaterDamageCleanupGuide'));
const MoldRemediationGuide = lazy(() => import('./pages/guides/MoldRemediationGuide'));
const InsuranceClaimGuide = lazy(() => import('./pages/guides/InsuranceClaimGuide'));
const BasementWaterproofingGuide = lazy(() => import('./pages/guides/BasementWaterproofingGuide'));
const BurstPipeGuide = lazy(() => import('./pages/guides/BurstPipeGuide'));
const FloodPreparationGuide = lazy(() => import('./pages/guides/FloodPreparationGuide'));

// Insurance Company-Specific Guides
const InsuranceGuidesHub = lazy(() => import('./pages/guides/insurance/InsuranceGuidesHub'));
const USAAWaterDamageClaimGuide = lazy(() => import('./pages/guides/insurance/USAAWaterDamageClaimGuide'));
const StateFarmWaterDamageClaimGuide = lazy(() => import('./pages/guides/insurance/StateFarmWaterDamageClaimGuide'));
const AllstateWaterDamageClaimGuide = lazy(() => import('./pages/guides/insurance/AllstateWaterDamageClaimGuide'));
const NationwideWaterDamageClaimGuide = lazy(() => import('./pages/guides/insurance/NationwideWaterDamageClaimGuide'));
const GEICOWaterDamageClaimGuide = lazy(() => import('./pages/guides/insurance/GEICOWaterDamageClaimGuide'));

// City-Specific Guides (use useFranchise() for dynamic city data)
const CityEmergencyGuide = lazy(() => import('./pages/guides/city/CityEmergencyGuide'));
const CityPreventionGuide = lazy(() => import('./pages/guides/city/CityPreventionGuide'));
const CityInsuranceGuide = lazy(() => import('./pages/guides/city/CityInsuranceGuide'));
const CityGuidesHub = lazy(() => import('./pages/guides/city/CityGuidesHub'));

// Additional Resource Guides
const WaterDamageClassesGuide = lazy(() => import('./pages/resources/WaterDamageClassesGuide'));
const VirginiaInsuranceGuide = lazy(() => import('./pages/resources/VirginiaInsuranceGuide'));
const StructuralDryingGuide = lazy(() => import('./pages/resources/StructuralDryingGuide'));
const MoldRemediationStandards = lazy(() => import('./pages/resources/MoldRemediationStandards'));
const EmergencyPreparednessNorthernVA = lazy(() => import('./pages/resources/EmergencyPreparednessNorthernVA'));
const EmergencyChecklist = lazy(() => import('./pages/resources/emergency-checklist'));
const ChoosingRestorationCompany = lazy(() => import('./pages/resources/choosing-restoration-company'));
const HomeWaterproofingGuide = lazy(() => import('./pages/resources/home-waterproofing-guide'));
const InsuranceDocumentationGuide = lazy(() => import('./pages/resources/insurance-documentation-guide'));
const RestorationTimelineGuide = lazy(() => import('./pages/resources/restoration-timeline-guide'));
const WinterPipeProtection = lazy(() => import('./pages/resources/WinterPipeProtection'));
const BasementFloodingPrevention = lazy(() => import('./pages/resources/BasementFloodingPrevention'));
const TypesOfMold = lazy(() => import('./pages/resources/TypesOfMold'));

// City Subdomain Pages (mclean.flood.doctor, vienna.flood.doctor, etc.)
const CityMcLean = lazy(() => import('./pages/city/McLean'));
const CityVienna = lazy(() => import('./pages/city/Vienna'));
const CityArlington = lazy(() => import('./pages/city/Arlington'));
const CityFairfax = lazy(() => import('./pages/city/Fairfax'));
const CityTysons = lazy(() => import('./pages/city/Tysons'));
const CityAlexandria = lazy(() => import('./pages/city/Alexandria'));
const CityAshburn = lazy(() => import('./pages/city/Ashburn'));
const CityWashingtonDC = lazy(() => import('./pages/city/WashingtonDC'));
const CityHerndon = lazy(() => import('./pages/city/Herndon'));
const CityReston = lazy(() => import('./pages/city/Reston'));
const CitySpringfield = lazy(() => import('./pages/city/Springfield'));
const CityFallsChurch = lazy(() => import('./pages/city/FallsChurch'));
const CityGreatFalls = lazy(() => import('./pages/city/GreatFalls'));
const CityBethesda = lazy(() => import('./pages/city/Bethesda'));
const CityPotomac = lazy(() => import('./pages/city/Potomac'));
const CityRockville = lazy(() => import('./pages/city/Rockville'));
const CitySilverSpring = lazy(() => import('./pages/city/SilverSpring'));
const CityServices = lazy(() => import('./pages/city/CityServices'));

// V3 Dynamic City Content Pages - renders rich TypeScript content
const DynamicServicePage = lazy(() => import('./pages/city/DynamicServicePage'));
const DynamicNeighborhoodPage = lazy(() => import('./pages/city/DynamicNeighborhoodPage'));
const DynamicBlogIndex = lazy(() => import('./pages/city/DynamicBlogIndex'));
const DynamicBlogArticle = lazy(() => import('./pages/city/DynamicBlogArticle'));

// Location Landing Pages
const AlexandriaWaterDamage = lazy(() => import('./pages/locations/AlexandriaWaterDamage'));
const AlexandriaMoldRemoval = lazy(() => import('./pages/locations/AlexandriaMoldRemoval'));
const AlexandriaFloodCleanup = lazy(() => import('./pages/locations/AlexandriaFloodCleanup'));
const AlexandriaBasementFlooding = lazy(() => import('./pages/locations/AlexandriaBasementFlooding'));
const ArlingtonWaterDamage = lazy(() => import('./pages/locations/ArlingtonWaterDamage'));
const ArlingtonMoldRemoval = lazy(() => import('./pages/locations/ArlingtonMoldRemoval'));
const ArlingtonFloodCleanup = lazy(() => import('./pages/locations/ArlingtonFloodCleanup'));
const ArlingtonBasementFlooding = lazy(() => import('./pages/locations/ArlingtonBasementFlooding'));
const FairfaxWaterDamage = lazy(() => import('./pages/locations/FairfaxWaterDamage'));
const FairfaxMoldRemoval = lazy(() => import('./pages/locations/FairfaxMoldRemoval'));
const FairfaxFloodCleanup = lazy(() => import('./pages/locations/FairfaxFloodCleanup'));
const FairfaxBasementFlooding = lazy(() => import('./pages/locations/FairfaxBasementFlooding'));
const McLeanWaterDamage = lazy(() => import('./pages/locations/McLeanWaterDamage'));
const McLeanMoldRemoval = lazy(() => import('./pages/locations/McLeanMoldRemoval'));
const McLeanFloodCleanup = lazy(() => import('./pages/locations/McLeanFloodCleanup'));
const McLeanBasementFlooding = lazy(() => import('./pages/locations/McLeanBasementFlooding'));
const TysonsWaterDamage = lazy(() => import('./pages/locations/TysonsWaterDamage'));
const RestonWaterDamage = lazy(() => import('./pages/locations/RestonWaterDamage'));
const RestonMoldRemoval = lazy(() => import('./pages/locations/RestonMoldRemoval'));
const AshburnWaterDamage = lazy(() => import('./pages/locations/AshburnWaterDamage'));
const AshburnMoldRemoval = lazy(() => import('./pages/locations/AshburnMoldRemoval'));
const HerndonWaterDamage = lazy(() => import('./pages/locations/HerndonWaterDamage'));
const HerndonMoldRemoval = lazy(() => import('./pages/locations/HerndonMoldRemoval'));
const HerndonFloodCleanup = lazy(() => import('./pages/locations/HerndonFloodCleanup'));
const HerndonBasementFlooding = lazy(() => import('./pages/locations/HerndonBasementFlooding'));
const SpringfieldWaterDamage = lazy(() => import('./pages/locations/SpringfieldWaterDamage'));
const SpringfieldMoldRemoval = lazy(() => import('./pages/locations/SpringfieldMoldRemoval'));
const FallsChurchWaterDamage = lazy(() => import('./pages/locations/FallsChurchWaterDamage'));
const FallsChurchMoldRemoval = lazy(() => import('./pages/locations/FallsChurchMoldRemoval'));

// Keyword Landing Pages - Locations
const WaterDamageRestorationArlington = lazy(() => import('./pages/landing/WaterDamageRestorationArlington'));
const WaterDamageRestorationFairfax = lazy(() => import('./pages/landing/WaterDamageRestorationFairfax'));
const WaterDamageRestorationAlexandria = lazy(() => import('./pages/landing/WaterDamageRestorationAlexandria'));
const WaterDamageRestorationSpringfield = lazy(() => import('./pages/landing/WaterDamageRestorationSpringfield'));
const WaterDamageRestorationReston = lazy(() => import('./pages/landing/WaterDamageRestorationReston'));
const WaterDamageRestorationAshburn = lazy(() => import('./pages/landing/WaterDamageRestorationAshburn'));
const WaterDamageRestorationMcLean = lazy(() => import('./pages/landing/WaterDamageRestorationMcLean'));
const WaterDamageRestorationGreatFalls = lazy(() => import('./pages/landing/WaterDamageRestorationGreatFalls'));
const WaterDamageRestorationFallsChurch = lazy(() => import('./pages/landing/WaterDamageRestorationFallsChurch'));
const WaterDamageRestorationVienna = lazy(() => import('./pages/landing/WaterDamageRestorationVienna'));

// Keyword Landing Pages - Services
const WaterDamageRestorationServices = lazy(() => import('./pages/landing/WaterDamageRestorationServices'));
const WaterDamageCleanupPage = lazy(() => import('./pages/landing/WaterDamageCleanup'));
const WaterDamageRepair = lazy(() => import('./pages/landing/WaterDamageRepair'));
const FloodDamageRestoration = lazy(() => import('./pages/landing/FloodDamageRestoration'));
const WaterRestorationPage = lazy(() => import('./pages/landing/WaterRestoration'));
const FloodDamageCleanup = lazy(() => import('./pages/landing/FloodDamageCleanup'));
const EmergencyWaterDamageRestorationPage = lazy(() => import('./pages/landing/EmergencyWaterDamageRestoration'));
const WaterDamageRestorationCompany = lazy(() => import('./pages/landing/WaterDamageRestorationCompany'));
const WaterMitigation = lazy(() => import('./pages/landing/WaterMitigation'));
const BasementFloodRestoration = lazy(() => import('./pages/landing/BasementFloodRestoration'));
const FloodCleanupServices = lazy(() => import('./pages/landing/FloodCleanupServices'));
const WaterRemediation = lazy(() => import('./pages/landing/WaterRemediation'));

// Data
import { SERVICES } from './data/services';

const host = typeof window !== "undefined" ? window.location.hostname : "";

// Use BrowserRouter (clean URLs without #) for:
// - Production domain flood.doctor and www.flood.doctor
// - All city subdomains (mclean.flood.doctor, arlington.flood.doctor, etc.)
// - Local development
const useBrowserRouter =
  host === "flood.doctor" ||
  host === "www.flood.doctor" ||
  host.endsWith(".flood.doctor") ||  // All subdomains (critical for SEO)
  host === "localhost" ||
  host === "127.0.0.1";

const Router = useBrowserRouter ? BrowserRouter : HashRouter;

const App: React.FC = () => {
  return (
    <FranchiseProvider>
      <EmergencyProvider>
        <Router>
        <ScrollToTop />
        <CommandPalette />
        {/* Main Container with padding for mobile CTA */}
        <div className="min-h-screen flex flex-col bg-white font-sans pb-24 md:pb-0">
          <Header />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Service Hubs */}
              <Route path="/services/" element={<ServicesHub title="All Restoration Services" subtitle="Comprehensive water damage, mold, and cleanup solutions." />} />
              <Route path="/services/residential/" element={<ServicesHub title="Residential Services" subtitle="Expert home flood cleanup and water damage restoration." filterAudience="RESIDENTIAL" />} />
              <Route path="/services/commercial/" element={<ServicesHub title="Commercial Services" subtitle="Scalable disaster recovery for businesses and facilities." filterAudience="COMMERCIAL" />} />

              {/* Residential Category Pages */}
              <Route
                path="/services/residential/restoration-services/"
                element={<CategoryLanding audience="RESIDENTIAL" category="RESTORATION" title="Residential Restoration Services" description="Emergency water damage restoration, structural drying, and storm recovery for homeowners." />}
              />
              <Route
                path="/services/residential/cleanup-services/"
                element={<CategoryLanding audience="RESIDENTIAL" category="CLEANUP" title="Residential Cleanup Services" description="Professional cleanup for sewage, mold, fire, and biohazards." />}
              />
              <Route
                path="/services/residential/specialty-services/"
                element={<CategoryLanding audience="RESIDENTIAL" category="SPECIALTY" title="Residential Specialty Services" description="Specialized solutions for basements, crawl spaces, and roofs." />}
              />

              {/* New Variant Template */}
              <Route path="/services/residential/variant-a/" element={<ResidentialVariantA />} />

              {/* Commercial Category Pages */}
              <Route
                path="/services/commercial/restoration-services/"
                element={<CategoryLanding audience="COMMERCIAL" category="RESTORATION" title="Commercial Restoration Services" description="Minimize downtime with fast water damage recovery for businesses." />}
              />
              <Route
                path="/services/commercial/cleanup-services/"
                element={<CategoryLanding audience="COMMERCIAL" category="CLEANUP" title="Commercial Cleanup Services" description="Industrial-grade cleaning for mold, sewage, and fire damage." />}
              />
               <Route
                path="/services/commercial/technical-services/"
                element={<CategoryLanding audience="COMMERCIAL" category="TECHNICAL" title="Technical Services" description="Advanced moisture mapping, air quality testing, and environmental consulting." />}
              />
              <Route
                path="/services/commercial/specialty-services/"
                element={<CategoryLanding audience="COMMERCIAL" category="SPECIALTY" title="Commercial Specialty Services" description="Tailored restoration for healthcare, education, and industrial facilities." />}
              />

              {/* Commercial Industry Pages */}
              <Route path="/commercial/healthcare/" element={<HealthcareRestoration />} />

              {/* Dynamic Leaf Service Pages */}
              {SERVICES.map((service) => {
                const routeElement = <Route path={service.slug} element={<ServiceDetail service={service} />} />;
                return React.cloneElement(routeElement, { key: service.id });
              })}

              {/* Core Pages */}
              <Route path="/locations/" element={<LocationsHub />} />
              <Route path="/request/" element={<RequestService />} />
              <Route path="/about/" element={<About />} />
              <Route path="/contact/" element={<Contact />} />
              <Route path="/reviews/" element={<Reviews />} />

              {/* Near Me Landing */}
              <Route path="/nearme/water-damage-restoration/" element={<NearMeLanding />} />

              {/* City Subdomain Pages - accessed via *.flood.doctor subdomains */}
              <Route path="/city/mclean" element={<CityMcLean />} />
              <Route path="/city/vienna" element={<CityVienna />} />
              <Route path="/city/arlington" element={<CityArlington />} />
              <Route path="/city/fairfax" element={<CityFairfax />} />
              <Route path="/city/tysons" element={<CityTysons />} />
              <Route path="/city/alexandria" element={<CityAlexandria />} />
              <Route path="/city/ashburn" element={<CityAshburn />} />
              <Route path="/city/washington-dc" element={<CityWashingtonDC />} />
              <Route path="/city/herndon" element={<CityHerndon />} />
              <Route path="/city/reston" element={<CityReston />} />
              <Route path="/city/springfield" element={<CitySpringfield />} />
              <Route path="/city/falls-church" element={<CityFallsChurch />} />
              <Route path="/city/great-falls" element={<CityGreatFalls />} />
              <Route path="/city/bethesda" element={<CityBethesda />} />
              <Route path="/city/potomac" element={<CityPotomac />} />
              <Route path="/city/rockville" element={<CityRockville />} />
              <Route path="/city/silver-spring" element={<CitySilverSpring />} />

              {/* City Services Pages - mclean.flood.doctor/services/ */}
              <Route path="/city/:citySlug/services" element={<CityServices />} />
              <Route path="/city/:citySlug/services/:serviceSlug" element={<CityServices />} />

              {/* V3 Dynamic City Content Pages - uses rich TypeScript content */}
              {/* Service Pages: /city/mclean/water-damage, /city/arlington/basement-flooding, etc. */}
              <Route path="/city/:city/water-damage" element={<DynamicServicePage />} />
              <Route path="/city/:city/basement-flooding" element={<DynamicServicePage />} />
              <Route path="/city/:city/burst-pipe" element={<DynamicServicePage />} />
              <Route path="/city/:city/flood-cleanup" element={<DynamicServicePage />} />
              <Route path="/city/:city/mold-remediation" element={<DynamicServicePage />} />
              <Route path="/city/:city/sewage-cleanup" element={<DynamicServicePage />} />
              <Route path="/city/:city/storm-damage" element={<DynamicServicePage />} />
              <Route path="/city/:city/fire-damage" element={<DynamicServicePage />} />

              {/* Neighborhood Pages: /city/mclean/neighborhoods/langley, etc. */}
              <Route path="/city/:city/neighborhoods/:neighborhood" element={<DynamicNeighborhoodPage />} />

              {/* V3 Dynamic City Blog Pages */}
              <Route path="/city/:city/blog" element={<DynamicBlogIndex />} />
              <Route path="/city/:city/blog/:slug" element={<DynamicBlogArticle />} />

              {/* Location Landing Pages - Alexandria */}
              <Route path="/locations/alexandria-water-damage/" element={<AlexandriaWaterDamage />} />
              <Route path="/locations/alexandria-mold-removal/" element={<AlexandriaMoldRemoval />} />
              <Route path="/locations/alexandria-flood-cleanup/" element={<AlexandriaFloodCleanup />} />
              <Route path="/locations/alexandria-basement-flooding/" element={<AlexandriaBasementFlooding />} />

              {/* Location Landing Pages - Arlington */}
              <Route path="/locations/arlington-water-damage/" element={<ArlingtonWaterDamage />} />
              <Route path="/locations/arlington-mold-removal/" element={<ArlingtonMoldRemoval />} />
              <Route path="/locations/arlington-flood-cleanup/" element={<ArlingtonFloodCleanup />} />
              <Route path="/locations/arlington-basement-flooding/" element={<ArlingtonBasementFlooding />} />

              {/* Location Landing Pages - Fairfax */}
              <Route path="/locations/fairfax-water-damage/" element={<FairfaxWaterDamage />} />
              <Route path="/locations/fairfax-mold-removal/" element={<FairfaxMoldRemoval />} />
              <Route path="/locations/fairfax-flood-cleanup/" element={<FairfaxFloodCleanup />} />
              <Route path="/locations/fairfax-basement-flooding/" element={<FairfaxBasementFlooding />} />

              {/* Location Landing Pages - McLean */}
              <Route path="/locations/mclean-water-damage/" element={<McLeanWaterDamage />} />
              <Route path="/locations/mclean-mold-removal/" element={<McLeanMoldRemoval />} />
              <Route path="/locations/mclean-flood-cleanup/" element={<McLeanFloodCleanup />} />
              <Route path="/locations/mclean-basement-flooding/" element={<McLeanBasementFlooding />} />

              {/* Location Landing Pages - Tysons */}
              <Route path="/locations/tysons-water-damage/" element={<TysonsWaterDamage />} />

              {/* Location Landing Pages - Reston */}
              <Route path="/locations/reston-water-damage/" element={<RestonWaterDamage />} />
              <Route path="/locations/reston-mold-removal/" element={<RestonMoldRemoval />} />

              {/* Location Landing Pages - Ashburn */}
              <Route path="/locations/ashburn-water-damage/" element={<AshburnWaterDamage />} />
              <Route path="/locations/ashburn-mold-removal/" element={<AshburnMoldRemoval />} />

              {/* Location Landing Pages - Herndon */}
              <Route path="/locations/herndon-water-damage/" element={<HerndonWaterDamage />} />
              <Route path="/locations/herndon-mold-removal/" element={<HerndonMoldRemoval />} />
              <Route path="/locations/herndon-flood-cleanup/" element={<HerndonFloodCleanup />} />
              <Route path="/locations/herndon-basement-flooding/" element={<HerndonBasementFlooding />} />

              {/* Location Landing Pages - Springfield */}
              <Route path="/locations/springfield-water-damage/" element={<SpringfieldWaterDamage />} />
              <Route path="/locations/springfield-mold-removal/" element={<SpringfieldMoldRemoval />} />

              {/* Location Landing Pages - Falls Church */}
              <Route path="/locations/falls-church-water-damage/" element={<FallsChurchWaterDamage />} />
              <Route path="/locations/falls-church-mold-removal/" element={<FallsChurchMoldRemoval />} />

              {/* Keyword Landing Pages - Location Specific */}
              <Route path="/water-damage-restoration-arlington-va/" element={<WaterDamageRestorationArlington />} />
              <Route path="/water-damage-restoration-fairfax-va/" element={<WaterDamageRestorationFairfax />} />
              <Route path="/water-damage-restoration-alexandria-va/" element={<WaterDamageRestorationAlexandria />} />
              <Route path="/water-damage-restoration-springfield-va/" element={<WaterDamageRestorationSpringfield />} />
              <Route path="/water-damage-restoration-reston-va/" element={<WaterDamageRestorationReston />} />
              <Route path="/water-damage-restoration-ashburn-va/" element={<WaterDamageRestorationAshburn />} />
              <Route path="/water-damage-restoration-mclean-va/" element={<WaterDamageRestorationMcLean />} />
              <Route path="/water-damage-restoration-great-falls-va/" element={<WaterDamageRestorationGreatFalls />} />
              <Route path="/water-damage-restoration-falls-church-va/" element={<WaterDamageRestorationFallsChurch />} />
              <Route path="/water-damage-restoration-vienna-va/" element={<WaterDamageRestorationVienna />} />

              {/* Keyword Landing Pages - Service Specific */}
              <Route path="/water-damage-restoration-services/" element={<WaterDamageRestorationServices />} />
              <Route path="/water-damage-cleanup/" element={<WaterDamageCleanupPage />} />
              <Route path="/water-damage-repair/" element={<WaterDamageRepair />} />
              <Route path="/flood-damage-restoration/" element={<FloodDamageRestoration />} />
              <Route path="/water-restoration/" element={<WaterRestorationPage />} />
              <Route path="/flood-damage-cleanup/" element={<FloodDamageCleanup />} />
              <Route path="/emergency-water-damage-restoration/" element={<EmergencyWaterDamageRestorationPage />} />
              <Route path="/water-damage-restoration-company/" element={<WaterDamageRestorationCompany />} />
              <Route path="/water-mitigation/" element={<WaterMitigation />} />
              <Route path="/basement-flood-restoration/" element={<BasementFloodRestoration />} />
              <Route path="/flood-cleanup-services/" element={<FloodCleanupServices />} />
              <Route path="/water-remediation/" element={<WaterRemediation />} />

              {/* Resources */}
              <Route path="/resources/" element={<ResourcesHub />} />
              <Route path="/resources/faq/" element={<FAQ />} />
              <Route path="/resources/insurance-guide/" element={<InsuranceGuide />} />
              <Route path="/resources/homeowner-guides/" element={<HomeownerGuides />} />
              <Route path="/resources/emergency-checklists/" element={<EmergencyChecklists />} />
              <Route path="/resources/technology/" element={<Technology />} />
              <Route path="/resources/communication/" element={<Communication />} />
              <Route path="/resources/insurance-claims-guide/" element={<InsuranceClaimsGuide />} />
              <Route path="/resources/water-damage-cost-guide/" element={<WaterDamageCostGuide />} />
              <Route path="/resources/mold-prevention-guide/" element={<MoldPreventionGuide />} />
              <Route path="/resources/water-damage-categories/" element={<WaterDamageCategories />} />
              <Route path="/resources/signs-of-water-damage/" element={<SignsOfWaterDamage />} />
              <Route path="/resources/cost-calculator/" element={<WaterDamageCostCalculator />} />
              <Route path="/resources/water-damage-classes-guide/" element={<WaterDamageClassesGuide />} />
              <Route path="/resources/virginia-insurance-guide/" element={<VirginiaInsuranceGuide />} />
              <Route path="/resources/structural-drying-guide/" element={<StructuralDryingGuide />} />
              <Route path="/resources/mold-remediation-standards/" element={<MoldRemediationStandards />} />
              <Route path="/resources/emergency-preparedness-northern-va/" element={<EmergencyPreparednessNorthernVA />} />
              <Route path="/resources/emergency-checklist/" element={<EmergencyChecklist />} />
              <Route path="/resources/choosing-restoration-company/" element={<ChoosingRestorationCompany />} />
              <Route path="/resources/home-waterproofing-guide/" element={<HomeWaterproofingGuide />} />
              <Route path="/resources/insurance-documentation-guide/" element={<InsuranceDocumentationGuide />} />
              <Route path="/resources/restoration-timeline-guide/" element={<RestorationTimelineGuide />} />
              <Route path="/resources/winter-pipe-protection/" element={<WinterPipeProtection />} />
              <Route path="/resources/basement-flooding-prevention/" element={<BasementFloodingPrevention />} />
              <Route path="/resources/types-of-mold/" element={<TypesOfMold />} />

              {/* HowTo Guides */}
              <Route path="/guides/" element={<GuidesHub />} />
              <Route path="/guides/water-damage-cleanup/" element={<WaterDamageCleanupGuide />} />
              <Route path="/guides/mold-remediation/" element={<MoldRemediationGuide />} />
              <Route path="/guides/water-damage-insurance-claim/" element={<InsuranceClaimGuide />} />
              <Route path="/guides/basement-waterproofing/" element={<BasementWaterproofingGuide />} />
              <Route path="/guides/burst-pipe-emergency/" element={<BurstPipeGuide />} />
              <Route path="/guides/flood-preparation/" element={<FloodPreparationGuide />} />

              {/* Insurance Company-Specific Guides */}
              <Route path="/guides/insurance/" element={<InsuranceGuidesHub />} />
              <Route path="/guides/insurance/usaa-water-damage-claim/" element={<USAAWaterDamageClaimGuide />} />
              <Route path="/guides/insurance/state-farm-water-damage-claim/" element={<StateFarmWaterDamageClaimGuide />} />
              <Route path="/guides/insurance/allstate-water-damage-claim/" element={<AllstateWaterDamageClaimGuide />} />
              <Route path="/guides/insurance/nationwide-water-damage-claim/" element={<NationwideWaterDamageClaimGuide />} />
              <Route path="/guides/insurance/geico-water-damage-claim/" element={<GEICOWaterDamageClaimGuide />} />

              {/* City-Specific Guides (work on main site + all city subdomains) */}
              <Route path="/guides/emergency-response/" element={<CityEmergencyGuide />} />
              <Route path="/guides/prevention/" element={<CityPreventionGuide />} />
              <Route path="/guides/insurance-claims/" element={<CityInsuranceGuide />} />
              <Route path="/guides/city/" element={<CityGuidesHub />} />

              <Route path="/blog/" element={<BlogIndex />} />

              {/* Blog Articles */}
              <Route path="/blog/emergency-water-damage-response-virginia/" element={<EmergencyWaterDamageResponse />} />
              <Route path="/blog/mold-after-water-damage-virginia/" element={<MoldAfterWaterDamage />} />
              <Route path="/blog/sump-pump-failure-basement-flooding-nova/" element={<SumpPumpFailure />} />
              <Route path="/blog/commercial-water-damage-business-continuity/" element={<CommercialWaterDamage />} />
              <Route path="/blog/crawl-space-moisture-virginia-homes/" element={<CrawlSpaceMoisture />} />
              <Route path="/blog/appliance-water-damage-dishwasher-washing-machine/" element={<ApplianceWaterDamage />} />
              <Route path="/blog/roof-leak-water-damage-virginia-storms/" element={<RoofLeakWaterDamage />} />
              <Route path="/blog/sewage-backup-cleanup-health-risks-virginia/" element={<SewageCleanupGuide />} />
              <Route path="/blog/water-damage-restoration-timeline/" element={<WaterDamageClasses />} />
              <Route path="/blog/basement-flooding-loudoun-county/" element={<BasementFloodingLoudoun />} />
              <Route path="/blog/water-damage-northern-virginia-guide/" element={<WaterDamageNorthernVirginia />} />
              <Route path="/blog/homeowners-insurance-water-damage-virginia/" element={<HomeownersInsurance />} />
              <Route path="/blog/water-damage-restoration-cost-fairfax/" element={<WaterDamageCostFairfax />} />
              <Route path="/blog/commercial-water-damage-restoration-dc/" element={<CommercialWaterDamageDC />} />
              <Route path="/blog/hidden-water-damage-signs-arlington/" element={<HiddenWaterDamage />} />
              <Route path="/blog/burst-pipe-emergency-response/" element={<BurstPipeEmergency />} />
              <Route path="/blog/mold-growth-after-water-damage-timeline/" element={<MoldGrowthTimeline />} />
              <Route path="/blog/sewage-cleanup-alexandria-va/" element={<SewageCleanupAlexandria />} />

              {/* Additional Blog Articles */}
              <Route path="/blog/basement-flooding-guide/" element={<BasementFloodingGuide />} />
              <Route path="/blog/bathroom-water-damage-guide/" element={<BathroomWaterDamageGuide />} />
              <Route path="/blog/water-damage-home-selling-disclosure/" element={<WaterDamageHomeSellingDisclosure />} />
              <Route path="/blog/hvac-water-damage-guide/" element={<HvacWaterDamageGuide />} />
              <Route path="/blog/hidden-water-damage-signs/" element={<HiddenWaterDamageSigns />} />
              <Route path="/blog/drywall-water-damage-guide/" element={<DrywallWaterDamageGuide />} />
              <Route path="/blog/frozen-burst-pipes-guide/" element={<FrozenBurstPipesGuide />} />
              <Route path="/blog/hardwood-floor-water-damage/" element={<HardwoodFloorWaterDamage />} />
              <Route path="/blog/ceiling-water-damage-guide/" element={<CeilingWaterDamageGuide />} />
              <Route path="/blog/kitchen-water-damage-guide/" element={<KitchenWaterDamageGuide />} />
              <Route path="/blog/attic-water-damage-guide/" element={<AtticWaterDamageGuide />} />
              <Route path="/blog/rental-property-water-damage-virginia/" element={<RentalPropertyWaterDamage />} />
              <Route path="/blog/water-damaged-furniture-restoration/" element={<WaterDamagedFurnitureRestoration />} />
              <Route path="/blog/professional-drying-dehumidification/" element={<ProfessionalDryingDehumidification />} />
              <Route path="/blog/musty-smell-odor-removal-guide/" element={<MustySmellOdorRemovalGuide />} />
              <Route path="/blog/water-heater-flooding-guide/" element={<WaterHeaterFloodingGuide />} />
              <Route path="/blog/window-door-water-intrusion/" element={<WindowDoorWaterIntrusion />} />
              <Route path="/blog/water-damage-home-warranty-coverage/" element={<WaterDamageHomeWarrantyCoverage />} />
              <Route path="/blog/vacation-water-damage-prevention/" element={<VacationWaterDamagePrevention />} />
              <Route path="/blog/condo-water-damage-hoa-guide/" element={<CondoWaterDamageHoaGuide />} />
              <Route path="/blog/water-damaged-electronics-guide/" element={<WaterDamagedElectronicsGuide />} />
              <Route path="/blog/laundry-room-washing-machine-flood/" element={<LaundryRoomWashingMachineFlood />} />
              <Route path="/blog/wet-carpet-water-damage/" element={<WetCarpetWaterDamage />} />

              {/* SEO Phase 3 Blog Articles */}
              <Route path="/blog/what-does-black-mold-look-like/" element={<WhatDoesBlackMoldLookLike />} />
              <Route path="/blog/mildew-vs-mold-difference/" element={<MildewVsMoldDifference />} />
              <Route path="/blog/does-vinegar-kill-mold/" element={<DoesVinegarKillMold />} />
              <Route path="/blog/signs-of-water-damage-behind-walls/" element={<SignsOfWaterDamageBehindWalls />} />

              {/* Tools & Demos */}
              <Route path="/tools/video-generator/" element={<VideoGenerator />} />
              <Route path="/portal-demo/" element={<ClientPortalDemo />} />
              <Route path="/dev/visual-components/" element={<VisualComponentsDemo />} />

              {/* Dev Layout Previews */}
              <Route path="/dev/service-a/" element={<ServiceDetailDevA />} />
              <Route path="/dev/service-b/" element={<ServiceDetailDevB />} />
              <Route path="/dev/service-c/" element={<ServiceDetailDevC />} />
              <Route path="/dev/about-a/" element={<AboutDevA />} />
              <Route path="/dev/about-b/" element={<AboutDevB />} />
              <Route path="/dev/about-c/" element={<AboutDevC />} />
              <Route path="/dev/contact-a/" element={<ContactDevA />} />
              <Route path="/dev/contact-b/" element={<ContactDevB />} />
              <Route path="/dev/contact-c/" element={<ContactDevC />} />
              <Route path="/dev/home-a/" element={<HomeDevA />} />
              <Route path="/dev/home-b/" element={<HomeDevB />} />
              <Route path="/dev/home-c/" element={<HomeDevC />} />
              <Route path="/dev/services-a/" element={<ServicesDevA />} />
              <Route path="/dev/services-b/" element={<ServicesDevB />} />
              <Route path="/dev/services-c/" element={<ServicesDevC />} />

              {/* Service Dev Layouts (10 SEO variants) */}
              <Route path="/dev/service-1/" element={<ServiceDev1 />} />
              <Route path="/dev/service-2/" element={<ServiceDev2 />} />
              <Route path="/dev/service-3/" element={<ServiceDev3 />} />
              <Route path="/dev/service-4/" element={<ServiceDev4 />} />
              <Route path="/dev/service-5/" element={<ServiceDev5 />} />
              <Route path="/dev/service-6/" element={<ServiceDev6 />} />
              <Route path="/dev/service-7/" element={<ServiceDev7 />} />
              <Route path="/dev/service-8/" element={<ServiceDev8 />} />
              <Route path="/dev/service-9/" element={<ServiceDev9 />} />
              <Route path="/dev/service-10/" element={<ServiceDev10 />} />

              {/* Litho-style Dev Layouts */}
              <Route path="/dev/litho-1/" element={<LithoDev1 />} />
              <Route path="/dev/litho-2/" element={<LithoDev2 />} />
              <Route path="/dev/litho-3/" element={<LithoDev3 />} />

              {/* ServiceDetail Dev Layouts (10 variants for service pages) */}
              <Route path="/dev/service-detail-1/" element={<ServiceDetailDev1 />} />
              <Route path="/dev/service-detail-2/" element={<ServiceDetailDev2 />} />
              <Route path="/dev/service-detail-3/" element={<ServiceDetailDev3 />} />
              <Route path="/dev/service-detail-4/" element={<ServiceDetailDev4 />} />
              <Route path="/dev/service-detail-5/" element={<ServiceDetailDev5 />} />
              <Route path="/dev/service-detail-6/" element={<ServiceDetailDev6 />} />
              <Route path="/dev/service-detail-7/" element={<ServiceDetailDev7 />} />
              <Route path="/dev/service-detail-8/" element={<ServiceDetailDev8 />} />
              <Route path="/dev/service-detail-9/" element={<ServiceDetailDev9 />} />
              <Route path="/dev/service-detail-10/" element={<ServiceDetailDev10 />} />

              {/* Legal & Company */}
              <Route path="/careers/" element={<Careers />} />
              <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
              <Route path="/terms/" element={<Terms />} />

              {/* 404 Fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
          <MobileStickyCTA />
        </div>
        </Router>
      </EmergencyProvider>
    </FranchiseProvider>
  );
};

export default App;
