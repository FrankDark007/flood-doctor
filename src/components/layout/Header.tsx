import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, ChevronDown, ArrowRight, Droplets, MapPin } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { LOCATIONS } from '../../data/locations';
import MobileMenu from './MobileMenu';

// Helper to Group Services by Category within an Audience
const getGroupedServices = (audience: 'RESIDENTIAL' | 'COMMERCIAL') => {
  const audienceServices = SERVICES.filter(s => s.audience === audience);

  const categories: Record<string, string> = audience === 'RESIDENTIAL'
    ? { 'RESTORATION': 'Restoration', 'CLEANUP': 'Cleanup', 'SPECIALTY': 'Specialty' }
    : { 'RESTORATION': 'Restoration', 'CLEANUP': 'Cleanup', 'TECHNICAL': 'Technical', 'SPECIALTY': 'Specialty' };

  return Object.entries(categories).map(([catKey, label]) => ({
    label,
    items: audienceServices.filter(s => s.category === catKey)
  })).filter(group => group.items.length > 0);
};

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Track scroll for header shadow AND hide/show behavior like Google
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add shadow when scrolled
      setScrolled(currentScrollY > 10);

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current + 5) {
          setHeaderHidden(true);
        } else if (currentScrollY < lastScrollY.current - 5) {
          setHeaderHidden(false);
        }
      } else {
        setHeaderHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on route change
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
        setMobileMenuOpen(false);
      }
    };

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

  const residentialGroups = getGroupedServices('RESIDENTIAL');
  const commercialGroups = getGroupedServices('COMMERCIAL');

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:p-4 focus:z-50 focus:ring-2 focus:ring-[#1a73e8] text-[#1a73e8] font-medium rounded-lg">
        Skip to content
      </a>

      {/* Main Header */}
      <header
        ref={navRef}
        className={`
          sticky top-0 z-40 border-b border-[#dadce0]
          transition-all duration-300 ease-in-out
          ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_0_rgba(60,64,67,0.15)]' : 'bg-white'}
          ${headerHidden ? '-translate-y-full' : 'translate-y-0'}
        `}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-[64px]">

            {/* Mobile: Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 -ml-2 text-[#5f6368] hover:bg-[#f1f3f4] rounded-full transition-colors"
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-[#1a73e8] text-white">
                <Droplets size={18} />
              </div>
              <span className="hidden sm:flex items-center gap-0.5 text-[20px]">
                <span className="font-medium text-[#1a73e8]">Flood</span>
                <span className="font-medium text-[#202124]">Doctor</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('services')}
                  className={`
                    flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors
                    ${activeDropdown === 'services' || location.pathname.startsWith('/services/')
                      ? 'text-[#1a73e8] bg-[#e8f0fe]'
                      : 'text-[#3c4043] hover:bg-[#f1f3f4]'
                    }
                  `}
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>

                {/* Services Mega Menu */}
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-[#dadce0] p-6 -translate-x-1/4">
                    <div className="grid grid-cols-2 gap-8">
                      {/* Residential */}
                      <div>
                        <Link
                          to="/services/residential/"
                          className="flex items-center gap-2 text-base font-medium text-[#202124] mb-4 hover:text-[#1a73e8] transition-colors"
                        >
                          Residential Services
                          <ArrowRight size={16} />
                        </Link>
                        <div className="space-y-4">
                          {residentialGroups.map((group) => (
                            <div key={group.label}>
                              <h4 className="text-xs font-medium text-[#5f6368] uppercase tracking-wider mb-2">{group.label}</h4>
                              <ul className="space-y-1">
                                {group.items.slice(0, 4).map((service) => (
                                  <li key={service.id}>
                                    <Link
                                      to={service.slug}
                                      className="block text-sm text-[#3c4043] hover:text-[#1a73e8] py-1 transition-colors"
                                    >
                                      {service.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Commercial */}
                      <div>
                        <Link
                          to="/services/commercial/"
                          className="flex items-center gap-2 text-base font-medium text-[#202124] mb-4 hover:text-[#1a73e8] transition-colors"
                        >
                          Commercial Services
                          <ArrowRight size={16} />
                        </Link>
                        <div className="space-y-4">
                          {commercialGroups.map((group) => (
                            <div key={group.label}>
                              <h4 className="text-xs font-medium text-[#5f6368] uppercase tracking-wider mb-2">{group.label}</h4>
                              <ul className="space-y-1">
                                {group.items.slice(0, 4).map((service) => (
                                  <li key={service.id}>
                                    <Link
                                      to={service.slug}
                                      className="block text-sm text-[#3c4043] hover:text-[#1a73e8] py-1 transition-colors"
                                    >
                                      {service.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 pt-4 border-t border-[#dadce0]">
                      <Link
                        to="/services/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#1a73e8] hover:underline"
                      >
                        View all services
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Locations Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('locations')}
                  className={`
                    flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors
                    ${activeDropdown === 'locations' || location.pathname.startsWith('/locations/')
                      ? 'text-[#1a73e8] bg-[#e8f0fe]'
                      : 'text-[#3c4043] hover:bg-[#f1f3f4]'
                    }
                  `}
                >
                  Locations
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'locations' ? 'rotate-180' : ''}`} />
                </button>

                {/* Locations Mega Menu */}
                {activeDropdown === 'locations' && (
                  <div className="absolute top-full left-0 mt-2 w-[480px] bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-[#dadce0] p-6">
                    <h3 className="text-base font-medium text-[#202124] mb-4">Northern Virginia</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {LOCATIONS.map((loc) => (
                        <a
                          key={loc.title}
                          href={loc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-[#3c4043] hover:text-[#1a73e8] py-2 transition-colors"
                        >
                          <MapPin size={14} className="text-[#5f6368]" />
                          {loc.title}
                        </a>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-6 pt-4 border-t border-[#dadce0]">
                      <Link
                        to="/locations/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#1a73e8] hover:underline"
                      >
                        View all service areas
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Simple Links */}
              <Link
                to="/about/"
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  location.pathname === '/about/'
                    ? 'text-[#1a73e8] bg-[#e8f0fe]'
                    : 'text-[#3c4043] hover:bg-[#f1f3f4]'
                }`}
              >
                About
              </Link>
              <Link
                to="/resources/"
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  location.pathname.startsWith('/resources/')
                    ? 'text-[#1a73e8] bg-[#e8f0fe]'
                    : 'text-[#3c4043] hover:bg-[#f1f3f4]'
                }`}
              >
                Resources
              </Link>
              <Link
                to="/contact/"
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  location.pathname === '/contact/'
                    ? 'text-[#1a73e8] bg-[#e8f0fe]'
                    : 'text-[#3c4043] hover:bg-[#f1f3f4]'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Side - Phone + CTA */}
            <div className="flex items-center gap-3">
              {/* Phone - Desktop only */}
              <a
                href="tel:8774970007"
                className="hidden lg:flex items-center gap-2 text-sm font-medium text-[#1a73e8] hover:underline"
              >
                <Phone size={16} />
                (877) 497-0007
              </a>

              {/* Mobile: Phone Button */}
              <a
                href="tel:8774970007"
                className="lg:hidden p-2 text-[#1a73e8] hover:bg-[#e8f0fe] rounded-full transition-colors"
                aria-label="Call Now"
              >
                <Phone size={22} />
              </a>

              {/* CTA Button - Desktop only */}
              <Link
                to="/request/"
                className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#1a73e8] rounded-full hover:bg-[#1557b0] transition-colors"
              >
                Get Started
              </Link>
            </div>

          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Header;
