
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
import BlogIndex from './pages/BlogIndex';
import NearMeLanding from './pages/NearMeLanding';
import NotFound from './pages/NotFound';
import VideoGenerator from './pages/VideoGenerator';
import ClientPortalDemo from './pages/ClientPortalDemo';

// Legal & Company
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

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

            {/* Resources */}
            <Route path="/resources/" element={<ResourcesHub />} />
            <Route path="/resources/faq/" element={<FAQ />} />
            <Route path="/resources/insurance-guide/" element={<InsuranceGuide />} />
            <Route path="/resources/homeowner-guides/" element={<HomeownerGuides />} />
            <Route path="/resources/emergency-checklists/" element={<EmergencyChecklists />} />
            <Route path="/resources/technology/" element={<Technology />} />
            <Route path="/resources/communication/" element={<Communication />} />
            <Route path="/blog/" element={<BlogIndex />} />
            
            {/* Tools & Demos */}
            <Route path="/tools/video-generator/" element={<VideoGenerator />} />
            <Route path="/portal-demo/" element={<ClientPortalDemo />} />

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
