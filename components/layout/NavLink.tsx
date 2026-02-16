/**
 * NavLink - Smart navigation link for shared layout components
 *
 * On the MAIN site: renders <Link to="..."> for SPA navigation.
 * On CITY subdomains: renders <a href="https://flood.doctor/..."> for
 * paths that only exist on the main domain, preventing 404s.
 *
 * City-local paths stay as <Link> for SPA navigation.
 * Main-domain-only paths use <a href> to navigate cross-origin.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { isCityApp } from '../../hooks/useCityApp';

const MAIN_DOMAIN = 'https://flood.doctor';

/**
 * City app routes (from CityApp.tsx):
 *   /                               CityHome
 *   /services/                      CityServicesHub
 *   /services/:serviceSlug/         CityServiceDetail (flat, NOT nested)
 *   /neighborhoods/:neighborhood/   CityNeighborhood
 *   /blog/                          CityBlogIndex
 *   /blog/:slug/                    CityBlogArticle
 *   /about/                         CityAbout
 *   /contact/                       CityContact
 *   /request/                       CityRequest
 *   /guides/emergency-response/     CityEmergencyGuide
 *   /guides/prevention/             CityPreventionGuide
 *   /guides/insurance-claims/       CityInsuranceGuide
 *   /sign/                          WorkAuthorization
 *   /contract/                      WorkAuthorization
 *   /faq/                           FAQ
 *
 * NOTE: /guides/ index does NOT exist on city app.
 * NOTE: /services/residential/... (nested) does NOT exist on city app.
 */

/**
 * Exact paths or prefixes that exist on city subdomains.
 * Format: { path, exact } — exact=true means only that exact path is local,
 * exact=false means anything starting with that prefix is local.
 */
const CITY_LOCAL_ROUTES: { path: string; exact: boolean }[] = [
  { path: '/', exact: true },
  { path: '/about/', exact: true },
  { path: '/contact/', exact: true },
  { path: '/request/', exact: true },
  { path: '/faq/', exact: true },
  { path: '/sign/', exact: true },
  { path: '/contract/', exact: true },
  { path: '/blog/', exact: false },           // /blog/ and /blog/:slug/
  { path: '/neighborhoods/', exact: false },  // /neighborhoods/:slug/
  { path: '/guides/emergency-response/', exact: true },
  { path: '/guides/prevention/', exact: true },
  { path: '/guides/insurance-claims/', exact: true },
  // /services/ and /services/:slug/ (flat only, NOT nested)
  // Handled by special logic below
];

function isCityLocalPath(path: string): boolean {
  // Check exact and prefix matches
  for (const route of CITY_LOCAL_ROUTES) {
    if (route.exact) {
      if (path === route.path) return true;
    } else {
      if (path.startsWith(route.path)) return true;
    }
  }

  // Special handling for /services/:
  // /services/ → local (CityServicesHub)
  // /services/:serviceSlug/ → local (CityServiceDetail) BUT only for actual service slugs
  // /services/residential/ and /services/commercial/ are NOT city routes (those are audience hubs)
  // /services/residential/restoration-services/... → NOT local (nested main-domain paths)
  if (path === '/services/') return true;
  if (path.startsWith('/services/')) {
    const segments = path.split('/').filter(Boolean);
    // Audience hubs (/services/residential/, /services/commercial/) → NOT local
    if (segments[1] === 'residential' || segments[1] === 'commercial') return false;
    // Flat service slug (/services/water-damage-restoration/) → local
    return segments.length === 2;
  }

  return false;
}

interface NavLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, className, children, onClick }) => {
  const cityMode = isCityApp();

  // In city mode: check if this path exists locally
  if (cityMode && !isCityLocalPath(to)) {
    // External link to main domain
    return (
      <a href={`${MAIN_DOMAIN}${to}`} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  // Main site or city-local path: use React Router Link
  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;
