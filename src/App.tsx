import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileStickyCTA from './components/layout/MobileStickyCTA';
import ScrollToTop from './components/layout/ScrollToTop';
import BackToTop from './components/ui/BackToTop';

// Pages & Templates - Original (keeping for reference)
import Home from './pages/Home';
import HomeAlt from './pages/HomeAlt';
import ServicesHub from './pages/ServicesHub';
import LocationsHub from './pages/LocationsHub';
import RequestService from './pages/RequestService';
import ServiceDetail from './pages/templates/ServiceDetail';
import CategoryLanding from './pages/templates/CategoryLanding';
import ResidentialVariantA from './pages/templates/ResidentialVariantA';

// NEW Google-Style Pages & Templates
import ServicesHubGoogle from './pages/ServicesHubGoogle';
import ServiceDetailGoogle from './pages/templates/ServiceDetailGoogle';
import CategoryLandingGoogle from './pages/templates/CategoryLandingGoogle';
import AboutGoogle from './pages/AboutGoogle';
import ContactGoogle from './pages/ContactGoogle';
import ResourcesHubGoogle from './pages/ResourcesHubGoogle';
import BlogIndexGoogle from './pages/BlogIndexGoogle';

// Resource Pages
import Reviews from './pages/Reviews';
import FAQ from './pages/resources/FAQ';
import InsuranceGuide from './pages/resources/InsuranceGuide';
import HomeownerGuides from './pages/resources/HomeownerGuides';
import EmergencyChecklists from './pages/resources/EmergencyChecklists';
import Technology from './pages/resources/Technology';
import Communication from './pages/resources/Communication';
import NearMeLanding from './pages/NearMeLanding';
import NotFound from './pages/NotFound';

// Legal & Company
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

// Clone Pages
import GoogleAboutClone from './pages/clone/GoogleAboutClone';

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
    <Router>
      <ScrollToTop />
      {/* Main Container with padding for mobile CTA */}
      <div className="min-h-screen flex flex-col bg-white font-sans pb-24 md:pb-0">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-alt/" element={<HomeAlt />} />
          
          {/* Service Hubs */}
          <Route path="/services/" element={<ServicesHubGoogle />} />
          <Route path="/services/residential/" element={<CategoryLandingGoogle audience="RESIDENTIAL" />} />
          <Route path="/services/commercial/" element={<CategoryLandingGoogle audience="COMMERCIAL" />} />
          
          {/* Residential Category Pages */}
          <Route
            path="/services/residential/restoration-services/"
            element={<CategoryLandingGoogle audience="RESIDENTIAL" category="RESTORATION" />}
          />
          <Route
            path="/services/residential/cleanup-services/"
            element={<CategoryLandingGoogle audience="RESIDENTIAL" category="CLEANUP" />}
          />
          <Route
            path="/services/residential/specialty-services/"
            element={<CategoryLandingGoogle audience="RESIDENTIAL" category="SPECIALTY" />}
          />

          {/* New Variant Template */}
          <Route path="/services/residential/variant-a/" element={<ResidentialVariantA />} />

          {/* Commercial Category Pages */}
          <Route
            path="/services/commercial/restoration-services/"
            element={<CategoryLandingGoogle audience="COMMERCIAL" category="RESTORATION" />}
          />
          <Route
            path="/services/commercial/cleanup-services/"
            element={<CategoryLandingGoogle audience="COMMERCIAL" category="CLEANUP" />}
          />
          <Route
            path="/services/commercial/technical-services/"
            element={<CategoryLandingGoogle audience="COMMERCIAL" category="TECHNICAL" />}
          />
          <Route
            path="/services/commercial/specialty-services/"
            element={<CategoryLandingGoogle audience="COMMERCIAL" category="SPECIALTY" />}
          />

          {/* Dynamic Leaf Service Pages */}
          {SERVICES.map((service) => (
             <Route
                key={service.id}
                path={service.slug}
                element={<ServiceDetailGoogle service={service} />}
             />
          ))}

          {/* Core Pages */}
          <Route path="/locations/" element={<LocationsHub />} />
          <Route path="/request/" element={<RequestService />} />
          <Route path="/about/" element={<AboutGoogle />} />
          <Route path="/contact/" element={<ContactGoogle />} />
          <Route path="/reviews/" element={<Reviews />} />
          
          {/* Near Me Landing */}
          <Route path="/nearme/water-damage-restoration/" element={<NearMeLanding />} />

          {/* Resources */}
          <Route path="/resources/" element={<ResourcesHubGoogle />} />
          <Route path="/resources/faq/" element={<FAQ />} />
          <Route path="/resources/insurance-guide/" element={<InsuranceGuide />} />
          <Route path="/resources/homeowner-guides/" element={<HomeownerGuides />} />
          <Route path="/resources/emergency-checklists/" element={<EmergencyChecklists />} />
          <Route path="/resources/technology/" element={<Technology />} />
          <Route path="/resources/communication/" element={<Communication />} />
          <Route path="/blog/" element={<BlogIndexGoogle />} />

          {/* Legal & Company */}
          <Route path="/careers/" element={<Careers />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="/terms/" element={<Terms />} />

          {/* Clone Pages - Design System Reference */}
          <Route path="/clone/google-about-clone/" element={<GoogleAboutClone />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <MobileStickyCTA />
        <BackToTop />
      </div>
    </Router>
  );
};

export default App;