import React, { Suspense } from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileStickyCTA from './components/layout/MobileStickyCTA';
import ScrollToTop from './components/layout/ScrollToTop';
import BackToTop from './components/ui/BackToTop';

// Data (must be sync for route generation)
import { SERVICES } from './data/services';
import { LOCATIONS } from './data/locations';
import { getSubdomain, getLocationForSubdomain } from './utils/subdomain';

// Loading fallback - matches hero min-height to prevent CLS
const PageLoader = () => (
  <div className="flex-grow flex items-center justify-center min-h-[calc(100vh-64px)]">
    <div className="w-8 h-8 border-2 border-[#1a73e8] border-t-transparent rounded-full animate-spin" />
  </div>
);

// ============================================
// EAGER-LOADED (Critical Path)
// ============================================
// Home is NOT lazy-loaded - it's the primary entry point and LCP critical
import Home from './pages/Home';

// ============================================
// LAZY-LOADED PAGES (Code Splitting)
// ============================================

// Core Pages
const HomeAlt = React.lazy(() => import('./pages/HomeAlt'));
const RequestService = React.lazy(() => import('./pages/RequestService'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const SubdomainLocationPage = React.lazy(() => import('./pages/SubdomainLocationPage'));

// Service Pages
const ServicesHubGoogle = React.lazy(() => import('./pages/ServicesHubGoogle'));
const ServiceDetailGoogle = React.lazy(() => import('./pages/templates/ServiceDetailGoogle'));
const CategoryLandingGoogle = React.lazy(() => import('./pages/templates/CategoryLandingGoogle'));
const ResidentialVariantA = React.lazy(() => import('./pages/templates/ResidentialVariantA'));

// Location Pages
const LocationsHub = React.lazy(() => import('./pages/LocationsHub'));
const LocationDetailGoogle = React.lazy(() => import('./pages/templates/LocationDetailGoogle'));

// About & Contact
const AboutGoogle = React.lazy(() => import('./pages/AboutGoogle'));
const ContactGoogle = React.lazy(() => import('./pages/ContactGoogle'));
const Reviews = React.lazy(() => import('./pages/Reviews'));

// Resources
const ResourcesHubGoogle = React.lazy(() => import('./pages/ResourcesHubGoogle'));
const BlogIndexGoogle = React.lazy(() => import('./pages/BlogIndexGoogle'));
const FAQ = React.lazy(() => import('./pages/resources/FAQ'));
const InsuranceGuide = React.lazy(() => import('./pages/resources/InsuranceGuide'));
const InsuranceClaimsGuide = React.lazy(() => import('./pages/resources/InsuranceClaimsGuide'));
const HomeownerGuides = React.lazy(() => import('./pages/resources/HomeownerGuides'));
const EmergencyChecklists = React.lazy(() => import('./pages/resources/EmergencyChecklists'));
const Technology = React.lazy(() => import('./pages/resources/Technology'));
const Communication = React.lazy(() => import('./pages/resources/Communication'));
const NearMeLanding = React.lazy(() => import('./pages/NearMeLanding'));

// Legal & Company
const Careers = React.lazy(() => import('./pages/Careers'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const Terms = React.lazy(() => import('./pages/Terms'));

// Clone & Demo (rarely accessed)
const GoogleAboutClone = React.lazy(() => import('./pages/clone/GoogleAboutClone'));
const DesignDemo = React.lazy(() => import('./pages/DesignDemo'));

// ============================================

const host = typeof window !== "undefined" ? window.location.hostname : "";

const useBrowserRouter =
  host === "flood.doctor" ||
  host === "www.flood.doctor" ||
  host === "localhost" ||
  host === "127.0.0.1" ||
  host.endsWith(".flood.doctor") ||  // Support location subdomains
  host.endsWith(".localhost");        // Support local subdomain testing

const Router = useBrowserRouter ? BrowserRouter : HashRouter;

// Detect if we're on a location subdomain
const subdomain = getSubdomain();
const subdomainLocation = getLocationForSubdomain();
const isLocationSubdomain = subdomain !== null && subdomainLocation !== null;

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* Main Container with padding for mobile CTA */}
      <div className="min-h-screen flex flex-col bg-white font-sans pb-24 md:pb-0">
        <Header />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Root path: Show location page for subdomains, home for main site */}
            <Route path="/" element={isLocationSubdomain ? <SubdomainLocationPage /> : <Home />} />
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

            {/* Short URL Service Aliases */}
            <Route
              path="/services/storm-damage-restoration/"
              element={<ServiceDetailGoogle service={SERVICES.find(s => s.id === 'res-storm')!} />}
            />
            <Route
              path="/services/fire-smoke-damage/"
              element={<ServiceDetailGoogle service={SERVICES.find(s => s.id === 'res-fire')!} />}
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

            {/* Dynamic Location Pages */}
            {LOCATIONS.map((location) => (
              <Route
                key={location.slug}
                path={location.slug}
                element={<LocationDetailGoogle location={location} />}
              />
            ))}

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
            <Route path="/resources/insurance-claims-guide/" element={<InsuranceClaimsGuide />} />
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

            {/* Design Demo - Preview all graphics */}
            <Route path="/design-demo/" element={<DesignDemo />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <MobileStickyCTA />
        <BackToTop />
      </div>
    </Router>
  );
};

export default App;
