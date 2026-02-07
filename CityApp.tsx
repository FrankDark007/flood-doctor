/**
 * CityApp - Router for Independent City Subdomain Sites
 *
 * This is the main application component for city subdomains (mclean.flood.doctor, etc.).
 * Unlike App.tsx which handles all routing including /city/* paths, this app:
 *
 * 1. Uses "/" as the city homepage (not /city/:cityId)
 * 2. Has simplified routing focused on city-relevant pages
 * 3. Uses CityFranchiseProvider (no runtime subdomain detection)
 *
 * Each city gets its own independent build with this app as the entry point.
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileStickyCTA from './components/layout/MobileStickyCTA';
import ScrollToTop from './components/layout/ScrollToTop';
import { CityFranchiseProvider } from './contexts/CityFranchiseContext';
import { EmergencyProvider } from './contexts/EmergencyContext';

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

// City-App Pages - Lazy loaded for code splitting
const CityHome = lazy(() => import('./pages/city-app/CityHome'));
const CityServicesHub = lazy(() => import('./pages/city-app/CityServicesHub'));
const CityServiceDetail = lazy(() => import('./pages/city-app/CityServiceDetail'));
const CityNeighborhood = lazy(() => import('./pages/city-app/CityNeighborhood'));
const CityBlogIndex = lazy(() => import('./pages/city-app/CityBlogIndex'));
const CityBlogArticle = lazy(() => import('./pages/city-app/CityBlogArticle'));
const CityAbout = lazy(() => import('./pages/city-app/CityAbout'));
const CityContact = lazy(() => import('./pages/city-app/CityContact'));
const CityRequest = lazy(() => import('./pages/city-app/CityRequest'));

// Shared pages from main app (work in city context too)
const RequestService = lazy(() => import('./pages/RequestService'));
const WorkAuthorization = lazy(() => import('./pages/WorkAuthorization'));
const FAQ = lazy(() => import('./pages/resources/FAQ'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Guides (city-aware via useFranchise/useCityFranchise)
const CityEmergencyGuide = lazy(() => import('./pages/guides/city/CityEmergencyGuide'));
const CityPreventionGuide = lazy(() => import('./pages/guides/city/CityPreventionGuide'));
const CityInsuranceGuide = lazy(() => import('./pages/guides/city/CityInsuranceGuide'));

/**
 * Main City App Layout
 *
 * Wraps all city pages with:
 * - CityFranchiseProvider (static city context from build-time ID)
 * - EmergencyProvider (for emergency mode features)
 * - Header, Footer, MobileStickyCTA (shared layout components)
 */
const CityApp: React.FC = () => {
  return (
    <CityFranchiseProvider>
      <EmergencyProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-white font-sans pb-24 md:pb-0">
            <Header />
            <main className="flex-grow">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* ============================================
                      CITY HOMEPAGE
                      / is the city landing page (not /city/:id)
                      ============================================ */}
                  <Route path="/" element={<CityHome />} />

                  {/* ============================================
                      SERVICES
                      City-specific service hub and detail pages
                      ============================================ */}
                  <Route path="/services/" element={<CityServicesHub />} />
                  <Route path="/services/:serviceSlug/" element={<CityServiceDetail />} />

                  {/* ============================================
                      NEIGHBORHOODS
                      City-specific neighborhood landing pages
                      ============================================ */}
                  <Route path="/neighborhoods/:neighborhood/" element={<CityNeighborhood />} />

                  {/* ============================================
                      BLOG
                      City-specific blog index and articles
                      ============================================ */}
                  <Route path="/blog/" element={<CityBlogIndex />} />
                  <Route path="/blog/:slug/" element={<CityBlogArticle />} />

                  {/* ============================================
                      CORE PAGES
                      About, Contact, Request Service (city-aware)
                      ============================================ */}
                  <Route path="/about/" element={<CityAbout />} />
                  <Route path="/contact/" element={<CityContact />} />
                  <Route path="/request/" element={<CityRequest />} />

                  {/* ============================================
                      GUIDES
                      City-specific emergency, prevention, insurance guides
                      ============================================ */}
                  <Route path="/guides/emergency-response/" element={<CityEmergencyGuide />} />
                  <Route path="/guides/prevention/" element={<CityPreventionGuide />} />
                  <Route path="/guides/insurance-claims/" element={<CityInsuranceGuide />} />

                  {/* ============================================
                      SHARED PAGES
                      These work with both main site and city context
                      ============================================ */}
                  <Route path="/sign/" element={<WorkAuthorization />} />
                  <Route path="/contract/" element={<WorkAuthorization />} />
                  <Route path="/faq/" element={<FAQ />} />

                  {/* ============================================
                      404 FALLBACK
                      ============================================ */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <MobileStickyCTA />
          </div>
        </BrowserRouter>
      </EmergencyProvider>
    </CityFranchiseProvider>
  );
};

export default CityApp;
