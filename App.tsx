
import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileStickyCTA from './components/layout/MobileStickyCTA';
import ScrollToTop from './components/layout/ScrollToTop';
import { EmergencyProvider } from './contexts/EmergencyContext';
import CommandPalette from './components/ui/CommandPalette';

// Pages & Templates
import Home from './pages/Home';
import ServicesHub from './pages/ServicesHub';
import LocationsHub from './pages/LocationsHub';
import RequestService from './pages/RequestService';
import ServiceDetail from './pages/templates/ServiceDetail';
import CategoryLanding from './pages/templates/CategoryLanding';
import ResidentialVariantA from './pages/templates/ResidentialVariantA';

// Dev Layout Variants
import ServiceDetailDevA from './pages/templates/ServiceDetailDevA';
import ServiceDetailDevB from './pages/templates/ServiceDetailDevB';
import ServiceDetailDevC from './pages/templates/ServiceDetailDevC';
import AboutDevA from './pages/AboutDevA';
import AboutDevB from './pages/AboutDevB';
import AboutDevC from './pages/AboutDevC';
import ContactDevA from './pages/ContactDevA';
import ContactDevB from './pages/ContactDevB';
import ContactDevC from './pages/ContactDevC';
import HomeDevA from './pages/HomeDevA';
import HomeDevB from './pages/HomeDevB';
import HomeDevC from './pages/HomeDevC';
import ServicesDevA from './pages/ServicesDevA';
import ServicesDevB from './pages/ServicesDevB';
import ServicesDevC from './pages/ServicesDevC';

// New Pages
import About from './pages/About';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import ResourcesHub from './pages/ResourcesHub';
import FAQ from './pages/resources/FAQ';
import InsuranceGuide from './pages/resources/InsuranceGuide';
import HomeownerGuides from './pages/resources/HomeownerGuides';
import EmergencyChecklists from './pages/resources/EmergencyChecklists';
import Technology from './pages/resources/Technology';
import Communication from './pages/resources/Communication';
import InsuranceClaimsGuide from './pages/resources/InsuranceClaimsGuide';
import WaterDamageCostGuide from './pages/resources/WaterDamageCostGuide';
import MoldPreventionGuide from './pages/resources/MoldPreventionGuide';
import WaterDamageCategories from './pages/resources/WaterDamageCategories';
import SignsOfWaterDamage from './pages/resources/SignsOfWaterDamage';
import BlogIndex from './pages/BlogIndex';
import NearMeLanding from './pages/NearMeLanding';
import NotFound from './pages/NotFound';
import VideoGenerator from './pages/VideoGenerator';
import ClientPortalDemo from './pages/ClientPortalDemo';

// Legal & Company
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

// Commercial Pages
import HealthcareRestoration from './pages/commercial/HealthcareRestoration';

// Blog Articles
import EmergencyWaterDamageResponse from './pages/blog/emergency-water-damage-response-virginia';
import MoldAfterWaterDamage from './pages/blog/mold-after-water-damage-virginia';
import SumpPumpFailure from './pages/blog/sump-pump-failure-basement-flooding-nova';
import CommercialWaterDamage from './pages/blog/commercial-water-damage-business-continuity';
import CrawlSpaceMoisture from './pages/blog/crawl-space-moisture-virginia-homes';
import ApplianceWaterDamage from './pages/blog/appliance-water-damage-dishwasher-washing-machine';
import RoofLeakWaterDamage from './pages/blog/roof-leak-water-damage-virginia-storms';
import SewageCleanupGuide from './pages/blog/sewage-backup-cleanup-health-risks-virginia';
import WaterDamageClasses from './pages/blog/water-damage-restoration-timeline';
import BasementFloodingLoudoun from './pages/blog/basement-flooding-loudoun-county';
import WaterDamageNorthernVirginia from './pages/blog/water-damage-northern-virginia-guide';
import HomeownersInsurance from './pages/blog/homeowners-insurance-water-damage-virginia';
import WaterDamageCostFairfax from './pages/blog/water-damage-restoration-cost-fairfax';
import CommercialWaterDamageDC from './pages/blog/commercial-water-damage-restoration-dc';
import HiddenWaterDamage from './pages/blog/hidden-water-damage-signs-arlington';
import BurstPipeEmergency from './pages/blog/burst-pipe-emergency-response';
import MoldGrowthTimeline from './pages/blog/mold-growth-after-water-damage-timeline';
import SewageCleanupAlexandria from './pages/blog/sewage-cleanup-alexandria-va';

// Location Landing Pages
import AlexandriaWaterDamage from './pages/locations/AlexandriaWaterDamage';
import AlexandriaMoldRemoval from './pages/locations/AlexandriaMoldRemoval';
import AlexandriaFloodCleanup from './pages/locations/AlexandriaFloodCleanup';
import AlexandriaBasementFlooding from './pages/locations/AlexandriaBasementFlooding';
import ArlingtonWaterDamage from './pages/locations/ArlingtonWaterDamage';
import ArlingtonMoldRemoval from './pages/locations/ArlingtonMoldRemoval';
import ArlingtonFloodCleanup from './pages/locations/ArlingtonFloodCleanup';
import ArlingtonBasementFlooding from './pages/locations/ArlingtonBasementFlooding';
import FairfaxWaterDamage from './pages/locations/FairfaxWaterDamage';
import FairfaxMoldRemoval from './pages/locations/FairfaxMoldRemoval';
import FairfaxFloodCleanup from './pages/locations/FairfaxFloodCleanup';
import FairfaxBasementFlooding from './pages/locations/FairfaxBasementFlooding';
import McLeanWaterDamage from './pages/locations/McLeanWaterDamage';
import McLeanMoldRemoval from './pages/locations/McLeanMoldRemoval';
import McLeanFloodCleanup from './pages/locations/McLeanFloodCleanup';
import McLeanBasementFlooding from './pages/locations/McLeanBasementFlooding';
import TysonsWaterDamage from './pages/locations/TysonsWaterDamage';
import RestonWaterDamage from './pages/locations/RestonWaterDamage';
import RestonMoldRemoval from './pages/locations/RestonMoldRemoval';
import AshburnWaterDamage from './pages/locations/AshburnWaterDamage';
import AshburnMoldRemoval from './pages/locations/AshburnMoldRemoval';
import HerndonWaterDamage from './pages/locations/HerndonWaterDamage';
import HerndonMoldRemoval from './pages/locations/HerndonMoldRemoval';
import HerndonFloodCleanup from './pages/locations/HerndonFloodCleanup';
import HerndonBasementFlooding from './pages/locations/HerndonBasementFlooding';
import SpringfieldWaterDamage from './pages/locations/SpringfieldWaterDamage';
import SpringfieldMoldRemoval from './pages/locations/SpringfieldMoldRemoval';
import FallsChurchWaterDamage from './pages/locations/FallsChurchWaterDamage';
import FallsChurchMoldRemoval from './pages/locations/FallsChurchMoldRemoval';

// Data
import { SERVICES } from './data/services';

const host = typeof window !== "undefined" ? window.location.hostname : "";

const useBrowserRouter =
  host === "flood.doctor" ||
  host === "www.flood.doctor" ||
  host === "localhost" ||
  host === "127.0.0.1";

const Router = useBrowserRouter ? BrowserRouter : HashRouter;

const App: React.FC = () => {
  return (
    <EmergencyProvider>
      <Router>
        <ScrollToTop />
        <CommandPalette />
        {/* Main Container with padding for mobile CTA */}
        <div className="min-h-screen flex flex-col bg-white font-sans pb-24 md:pb-0">
          <Header />
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
            {SERVICES.map((service) => (
               <Route 
                  key={service.id} 
                  path={service.slug} 
                  element={<ServiceDetail service={service} />} 
               />
            ))}

            {/* Core Pages */}
            <Route path="/locations/" element={<LocationsHub />} />
            <Route path="/request/" element={<RequestService />} />
            <Route path="/about/" element={<About />} />
            <Route path="/contact/" element={<Contact />} />
            <Route path="/reviews/" element={<Reviews />} />
            
            {/* Near Me Landing */}
            <Route path="/nearme/water-damage-restoration/" element={<NearMeLanding />} />

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

            {/* Tools & Demos */}
            <Route path="/tools/video-generator/" element={<VideoGenerator />} />
            <Route path="/portal-demo/" element={<ClientPortalDemo />} />

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

            {/* Legal & Company */}
            <Route path="/careers/" element={<Careers />} />
            <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
            <Route path="/terms/" element={<Terms />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <MobileStickyCTA />
        </div>
      </Router>
    </EmergencyProvider>
  );
};

export default App;
