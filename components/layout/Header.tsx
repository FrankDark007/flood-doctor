
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, ChevronDown, Home, Briefcase, AlertTriangle } from 'lucide-react';
import { MAIN_NAV_ITEMS } from '../../data/nav';
import { getServicesByCategory } from '../../data/services-index';
import { LOCATIONS, NEARBY_AREAS } from '../../data/locations';
import MobileMenu from './MobileMenu';
import NavLink from './NavLink';
import Button from '../ui/Button';
import { ServiceData, ServiceCategory } from '../../types';
import { useEmergencyData } from '../../contexts/EmergencyContext';
import { isCityApp, getCityServiceMap } from '../../hooks/useCityApp';

// Helper to Group Services by Category within an Audience - O(1) lookup
const getGroupedServices = (audience: 'RESIDENTIAL' | 'COMMERCIAL') => {
  // Define category order for array generation
  const categoryKeys: ServiceCategory[] = audience === 'RESIDENTIAL'
    ? ['RESTORATION', 'CLEANUP', 'SPECIALTY']
    : ['RESTORATION', 'CLEANUP', 'TECHNICAL', 'SPECIALTY'];

  const labels: Record<string, string> = {
    'RESTORATION': 'Emergency Services',
    'CLEANUP': 'Cleanup Services',
    'SPECIALTY': 'Specialty Services',
    'TECHNICAL': 'Technical Services'
  };

  // Use pre-computed index for O(1) lookup instead of O(n) filter
  return categoryKeys.map(catKey => ({
    key: catKey,
    label: labels[catKey],
    items: getServicesByCategory(audience, catKey)
  })).filter(group => group.items.length > 0);
};

// City service nav items come from getCityServiceMap() — content-gated, nested paths

/** City-mode nav items (no Locations, no About dropdown) */
const CITY_NAV_ITEMS = [
  { label: 'Services', type: 'dropdown', dropdownId: 'services' },
  { label: 'Guides', type: 'dropdown', dropdownId: 'guides' },
  { label: 'Blog', path: '/blog/', type: 'link' },
  { label: 'About', path: '/about/', type: 'link' },
  { label: 'Contact', path: '/contact/', type: 'link' },
];

const CITY_GUIDE_ITEMS = [
  { label: 'Emergency Response', path: '/guides/emergency-response/' },
  { label: 'Prevention Guide', path: '/guides/prevention/' },
  { label: 'Insurance Claims', path: '/guides/insurance-claims/' },
];

const Header: React.FC = () => {
  const { isEmergencyMode } = useEmergencyData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Memoize onClose to prevent MobileMenu useEffect from re-running on every render
  const handleMobileMenuClose = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  // Close dropdowns on outside click or route change
  useEffect(() => {
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    
    const handleEsc = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setActiveDropdown(null);
            handleMobileMenuClose();
        }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const cityMode = isCityApp();

  // Memoize grouped services to prevent recalculation on every render
  const residentialGroups = useMemo(() => getGroupedServices('RESIDENTIAL'), []);
  const commercialGroups = useMemo(() => getGroupedServices('COMMERCIAL'), []);

  // City-mode: service map with nested paths (content-gated)
  const cityServiceMap = useMemo(() => cityMode ? getCityServiceMap() : [], [cityMode]);

  // Choose nav items based on mode
  const navItems = cityMode ? CITY_NAV_ITEMS : MAIN_NAV_ITEMS;

  // Split locations for 2-column layout in dropdown
  const locationMid = Math.ceil(LOCATIONS.length / 2);
  const locationsCol1 = LOCATIONS.slice(0, locationMid);
  const locationsCol2 = LOCATIONS.slice(locationMid);

  // Helper to render columns for tighter layout
  const renderServiceColumn = (audience: 'RESIDENTIAL' | 'COMMERCIAL', groups: { key: string; label: string; items: ServiceData[] }[]) => {
    let leftGroups: typeof groups = [];
    let rightGroups: typeof groups = [];

    if (audience === 'RESIDENTIAL') {
        leftGroups = groups.filter(g => g.key === 'RESTORATION');
        rightGroups = groups.filter(g => g.key !== 'RESTORATION');
    } else {
        leftGroups = groups.filter(g => g.key === 'RESTORATION' || g.key === 'SPECIALTY');
        rightGroups = groups.filter(g => g.key === 'CLEANUP' || g.key === 'TECHNICAL');
    }

    const renderGroup = (group: typeof groups[0]) => (
        <div key={group.label}>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-2">{group.label}</h4>
            <ul className="space-y-0.5">
                {group.items.map(service => (
                    <li key={service.id}>
                        <NavLink to={service.slug} className="block text-[13px] text-gray-700 hover:text-primary py-1 px-2 -mx-2 rounded hover:bg-gray-50 transition-colors">
                            {service.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        <div className="space-y-6">
            {leftGroups.map(renderGroup)}
        </div>
        <div className="space-y-6">
            {rightGroups.map(renderGroup)}
        </div>
      </div>
    );
  };

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:p-4 focus:z-50 focus:ring-2 focus:ring-primary text-primary font-bold">
        Skip to content
      </a>

      {/* Header: Consistent 80px height to prevent CLS */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Mobile: Left Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="touch-target p-2 -ml-2 text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Logo - Text Only Refinement */}
            <div className="flex-shrink-0 flex items-center justify-start flex-1 md:flex-none ml-2 md:ml-0">
              <Link to="/" className="flex items-center group py-2" aria-label="Flood Doctor Home">
                 <div className="flex flex-row gap-1.5 items-baseline text-2xl md:text-[28px] tracking-tight">
                    <span className="text-primary font-bold transition-colors group-hover:text-primaryHover">FLOOD</span>
                    <span className="font-semibold text-gray-900">DOCTOR</span>
                 </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 ml-8 flex-1" ref={navRef}>
              
              {navItems.map((item) => {
                if (item.type === 'dropdown') {
                  const isOpen = activeDropdown === item.dropdownId;
                  return (
                    <div key={item.label} className="relative group">
                      <button
                        onClick={() => toggleDropdown(item.dropdownId!)}
                        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${isOpen ? 'text-primary bg-blue-50' : 'text-gray-600 hover:text-primary hover:bg-gray-50'}`}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown size={16} className={`ml-1 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* ============================================
                          SERVICES DROPDOWN: City Mode (simplified)
                          ============================================ */}
                      {isOpen && item.dropdownId === 'services' && cityMode && (
                        <div className="absolute left-[-100px] mt-2 w-[600px] max-w-[95vw] bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200 border border-gray-100">
                          <div className="grid grid-cols-2 gap-8">
                            {/* Residential Column */}
                            {cityServiceMap.some(m => m.audience === 'residential') && (
                              <div>
                                <Link to="/services/residential/" className="text-sm font-bold text-gray-900 hover:text-primary transition-colors">
                                  Residential Services
                                </Link>
                                <div className="mt-3 space-y-1">
                                  {cityServiceMap
                                    .filter(m => m.audience === 'residential')
                                    .map(m => (
                                      <Link key={m.serviceId} to={m.nestedPath} className="block px-2 py-1.5 text-[13px] text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors">
                                        {m.title}
                                      </Link>
                                    ))
                                  }
                                </div>
                              </div>
                            )}
                            {/* Commercial Column */}
                            {cityServiceMap.some(m => m.audience === 'commercial') && (
                              <div>
                                <Link to="/services/commercial/" className="text-sm font-bold text-gray-900 hover:text-primary transition-colors">
                                  Commercial Services
                                </Link>
                                <div className="mt-3 space-y-1">
                                  {cityServiceMap
                                    .filter(m => m.audience === 'commercial')
                                    .map(m => (
                                      <Link key={m.serviceId} to={m.nestedPath} className="block px-2 py-1.5 text-[13px] text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors">
                                        {m.title}
                                      </Link>
                                    ))
                                  }
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="mt-4 pt-3 border-t border-gray-100">
                            <Link to="/services/" className="text-sm text-primary font-medium hover:text-primaryHover transition-colors">
                              View All Services →
                            </Link>
                          </div>
                        </div>
                      )}

                      {/* ============================================
                          SERVICES MEGA MENU: Main Site
                          ============================================ */}
                      {isOpen && item.dropdownId === 'services' && !cityMode && (
                        <div className="absolute left-[-150px] mt-2 w-[1100px] max-w-[95vw] bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden border border-gray-100">

                          {/* Content Area */}
                          <div className="max-h-[80vh] overflow-y-auto pr-2 custom-scrollbar overscroll-contain">
                            <div className="grid grid-cols-2 gap-12 divide-x divide-gray-100">

                                {/* Residential Column */}
                                <div className="pr-4">
                                    <NavLink to="/services/residential/" className="flex items-center gap-3 text-lg font-bold text-gray-900 mb-6 group">
                                        <span className="p-2 bg-blue-50 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Home size={20} />
                                        </span>
                                        Residential Services
                                    </NavLink>
                                    {renderServiceColumn('RESIDENTIAL', residentialGroups)}
                                </div>

                                {/* Commercial Column */}
                                <div className="pl-12">
                                    <NavLink to="/services/commercial/" className="flex items-center gap-3 text-lg font-bold text-gray-900 mb-6 group">
                                        <span className="p-2 bg-blue-50 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Briefcase size={20} />
                                        </span>
                                        Commercial Services
                                    </NavLink>
                                    {renderServiceColumn('COMMERCIAL', commercialGroups)}
                                </div>

                            </div>
                          </div>

                          {/* Mega Menu Footer */}
                          <div className="mt-6 pt-4 border-t border-gray-100 bg-gray-50 -mx-8 -mb-8 px-8 py-4 flex justify-between items-center">
                             <div className="text-sm text-gray-500">
                                Need help determining what you need? <NavLink to="/contact/" className="text-primary hover:underline font-medium">Contact Support</NavLink>
                             </div>
                             <NavLink to="/services/" className="text-sm font-medium text-primary hover:text-primaryHover hover:underline flex items-center">
                                View Full Service Directory &rarr;
                             </NavLink>
                          </div>
                        </div>
                      )}

                      {/* ============================================
                          GUIDES DROPDOWN: City Mode
                          ============================================ */}
                      {isOpen && item.dropdownId === 'guides' && cityMode && (
                        <div className="absolute left-0 mt-2 w-[240px] bg-white rounded-xl shadow-xl ring-1 ring-black/5 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 border border-gray-100">
                          {CITY_GUIDE_ITEMS.map(guide => (
                            <Link
                              key={guide.path}
                              to={guide.path}
                              className="block px-4 py-2.5 text-[14px] text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors font-medium"
                            >
                              {guide.label}
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* ============================================
                          ABOUT DROPDOWN: Main Site only
                          ============================================ */}
                      {isOpen && item.dropdownId === 'about' && !cityMode && (
                        <div className="absolute right-0 mt-2 w-[220px] bg-white rounded-xl shadow-xl ring-1 ring-black/5 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 border border-gray-100">
                          <NavLink to="/about/" className="block px-4 py-2.5 text-[14px] text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors font-medium">
                            About Us
                          </NavLink>
                          <NavLink to="/awards/" className="block px-4 py-2.5 text-[14px] text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors font-medium">
                            Awards & Associations
                          </NavLink>
                          <NavLink to="/careers/" className="block px-4 py-2.5 text-[14px] text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors font-medium">
                            Careers
                          </NavLink>
                        </div>
                      )}

                      {/* ============================================
                          LOCATIONS MEGA MENU: Main Site only
                          ============================================ */}
                      {isOpen && item.dropdownId === 'locations' && !cityMode && (
                        <div className="absolute left-[-200px] mt-2 w-[800px] max-w-[95vw] bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden border border-gray-100">

                          <div className="grid grid-cols-3 gap-8">

                            {/* Column 1: NOVA Part 1 */}
                            <div>
                               <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-3">Northern Virginia</h3>
                               <ul className="space-y-0.5">
                                  {locationsCol1.map(loc => (
                                    <li key={loc.title}>
                                      <a href={loc.url} className="block text-[13px] text-gray-700 hover:text-primary py-1 px-2 -mx-2 rounded hover:bg-gray-50 transition-colors">
                                        {loc.title}
                                      </a>
                                    </li>
                                  ))}
                               </ul>
                            </div>

                            {/* Column 2: NOVA Part 2 */}
                            <div>
                               <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-3">&nbsp;</h3>
                               <ul className="space-y-0.5">
                                  {locationsCol2.map(loc => (
                                    <li key={loc.title}>
                                      <a href={loc.url} className="block text-[13px] text-gray-700 hover:text-primary py-1 px-2 -mx-2 rounded hover:bg-gray-50 transition-colors">
                                        {loc.title}
                                      </a>
                                    </li>
                                  ))}
                               </ul>
                            </div>

                            {/* Column 3: Nearby Areas */}
                            <div>
                                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-3">Nearby Areas</h3>
                                <ul className="space-y-0.5 mb-6">
                                    {NEARBY_AREAS.map(loc => (
                                        <li key={loc.title}>
                                            <span className="block text-[13px] text-gray-400 py-1 px-2 -mx-2 cursor-default">{loc.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                          </div>

                          {/* Footer */}
                          <div className="mt-6 pt-4 border-t border-gray-100 bg-gray-50 -mx-8 -mb-8 px-8 py-4 flex justify-between items-center">
                             <div className="text-[13px] text-gray-500">
                                Serving the entire DMV region.
                             </div>
                             <div className="flex gap-6">
                                <NavLink to="/locations/" className="text-[13px] font-medium text-primary hover:underline">View All Locations &rarr;</NavLink>
                                <NavLink to="/nearme/water-damage-restoration/" className="text-[13px] font-medium text-primary hover:underline">Find Crew Near Me &rarr;</NavLink>
                             </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <NavLink
                    key={item.label}
                    to={item.path!}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <a 
                href="tel:8774970007" 
                className={`flex items-center font-semibold transition-all px-3 py-2 rounded-full ${
                    isEmergencyMode 
                    ? 'text-red-600 bg-red-50 hover:bg-red-100 ring-2 ring-red-200 animate-pulse' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {isEmergencyMode && <AlertTriangle size={16} className="mr-2" />}
                <span className="text-[17px] font-semibold tracking-tight">
                    {isEmergencyMode ? 'Priority Line: (877) 497-0007' : '(877) 497-0007'}
                </span>
              </a>
              <Button to="/request/" variant={isEmergencyMode ? 'primary' : 'primary'} className={isEmergencyMode ? 'bg-red-600 hover:bg-red-700' : ''}>
                {isEmergencyMode ? 'Dispatch Team' : 'Request Services'}
              </Button>
            </div>

            {/* Mobile: Phone Button */}
            <div className="flex items-center md:hidden">
              <a
                 href="tel:8774970007"
                 className={`touch-target p-2 -mr-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-center ${
                     isEmergencyMode ? 'text-red-600 bg-red-50' : 'text-primary hover:bg-blue-50'
                 }`}
                 aria-label="Call Now"
              >
                 <Phone size={24} className={isEmergencyMode ? "animate-pulse" : ""} />
              </a>
            </div>

          </div>
        </div>
      </header>
      
      <MobileMenu isOpen={mobileMenuOpen} onClose={handleMobileMenuClose} />
    </>
  );
};

export default Header;
