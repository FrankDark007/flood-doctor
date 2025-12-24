import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  X,
  ChevronDown,
  ChevronRight,
  Home,
  Briefcase,
  MapPin,
  BookOpen,
  Star,
  Info,
  Phone,
  HelpCircle
} from 'lucide-react';
import { SERVICES } from '../../data/services';
import { LOCATIONS } from '../../data/locations';
import Button from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Helper to Group Services
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

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const residentialGroups = getGroupedServices('RESIDENTIAL');
  const commercialGroups = getGroupedServices('COMMERCIAL');

  // Toggle Accordion Logic
  const toggleAccordion = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  // Close menu & reset accordions when route changes
  useEffect(() => {
    onClose();
    setExpandedItems([]);
  }, [location, onClose]);

  // Lock Body Scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle Escape Key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const isExpanded = (label: string) => expandedItems.includes(label);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-Over Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:max-w-sm bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >

        {/* Header */}
        <div className="flex items-center justify-between px-6 h-[64px] border-b border-[#dadce0] shrink-0">
          <Link to="/" onClick={onClose} className="flex items-center gap-0.5 text-[20px]">
            <span className="font-medium text-[#1a73e8]">Flood</span>
            <span className="font-medium text-[#202124]">Doctor</span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-[#5f6368] hover:bg-[#f1f3f4] rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <nav className="px-4 py-6 space-y-2">

            {/* Home */}
            <Link
              to="/"
              className={`flex items-center w-full px-4 py-4 text-base font-medium rounded-xl transition-colors ${
                location.pathname === '/'
                  ? 'bg-[#e8f0fe] text-[#1a73e8]'
                  : 'text-[#202124] hover:bg-[#f8f9fa]'
              }`}
            >
              <Home size={20} className={`mr-4 ${location.pathname === '/' ? 'text-[#1a73e8]' : 'text-[#5f6368]'}`} />
              <span>Home</span>
              {location.pathname === '/' && <ChevronRight size={18} className="ml-auto text-[#1a73e8]" />}
            </Link>

            {/* Services Accordion */}
            <div className="rounded-xl overflow-hidden">
              <button
                onClick={() => toggleAccordion('Services')}
                className={`flex items-center justify-between w-full px-4 py-4 text-base font-medium transition-colors rounded-xl ${
                  isExpanded('Services') || location.pathname.startsWith('/services/')
                    ? 'bg-[#e8f0fe] text-[#1a73e8]'
                    : 'text-[#202124] hover:bg-[#f8f9fa]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <Briefcase size={20} className={isExpanded('Services') || location.pathname.startsWith('/services/') ? 'text-[#1a73e8]' : 'text-[#5f6368]'} />
                  <span>Services</span>
                </div>
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${isExpanded('Services') ? 'rotate-180 text-[#1a73e8]' : 'text-[#dadce0]'}`}
                />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded('Services') ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-[#f8f9fa] rounded-b-xl pb-2 px-4">
                  {/* All Services */}
                  <Link to="/services/" className="block py-3 pl-10 text-sm text-[#3c4043] hover:text-[#1a73e8] font-medium">
                    All Services
                  </Link>

                  {/* Residential */}
                  <div className="py-2">
                    <Link to="/services/residential/" className="block pl-10 py-2 text-sm font-medium text-[#202124] hover:text-[#1a73e8]">
                      Residential
                    </Link>
                    {residentialGroups.slice(0, 2).map((group) => (
                      <div key={group.label} className="pl-14">
                        {group.items.slice(0, 3).map((service) => (
                          <Link
                            key={service.id}
                            to={service.slug}
                            className="block py-1.5 text-sm text-[#5f6368] hover:text-[#1a73e8]"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Commercial */}
                  <div className="py-2">
                    <Link to="/services/commercial/" className="block pl-10 py-2 text-sm font-medium text-[#202124] hover:text-[#1a73e8]">
                      Commercial
                    </Link>
                    {commercialGroups.slice(0, 2).map((group) => (
                      <div key={group.label} className="pl-14">
                        {group.items.slice(0, 3).map((service) => (
                          <Link
                            key={service.id}
                            to={service.slug}
                            className="block py-1.5 text-sm text-[#5f6368] hover:text-[#1a73e8]"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Locations Accordion */}
            <div className="rounded-xl overflow-hidden">
              <button
                onClick={() => toggleAccordion('Locations')}
                className={`flex items-center justify-between w-full px-4 py-4 text-base font-medium transition-colors rounded-xl ${
                  isExpanded('Locations') || location.pathname.startsWith('/locations/')
                    ? 'bg-[#e8f0fe] text-[#1a73e8]'
                    : 'text-[#202124] hover:bg-[#f8f9fa]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <MapPin size={20} className={isExpanded('Locations') || location.pathname.startsWith('/locations/') ? 'text-[#1a73e8]' : 'text-[#5f6368]'} />
                  <span>Locations</span>
                </div>
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${isExpanded('Locations') ? 'rotate-180 text-[#1a73e8]' : 'text-[#dadce0]'}`}
                />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded('Locations') ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-[#f8f9fa] rounded-b-xl pb-2">
                  <Link to="/locations/" className="block py-3 pl-14 text-sm text-[#3c4043] hover:text-[#1a73e8] font-medium">
                    All Service Areas
                  </Link>
                  {LOCATIONS.map((loc) => (
                    <a
                      key={loc.title}
                      href={loc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 py-2 pl-14 pr-4 text-sm text-[#5f6368] hover:text-[#1a73e8]"
                    >
                      <MapPin size={14} />
                      {loc.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Accordion */}
            <div className="rounded-xl overflow-hidden">
              <button
                onClick={() => toggleAccordion('Resources')}
                className={`flex items-center justify-between w-full px-4 py-4 text-base font-medium transition-colors rounded-xl ${
                  isExpanded('Resources') || location.pathname.startsWith('/resources/')
                    ? 'bg-[#e8f0fe] text-[#1a73e8]'
                    : 'text-[#202124] hover:bg-[#f8f9fa]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <BookOpen size={20} className={isExpanded('Resources') || location.pathname.startsWith('/resources/') ? 'text-[#1a73e8]' : 'text-[#5f6368]'} />
                  <span>Resources</span>
                </div>
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${isExpanded('Resources') ? 'rotate-180 text-[#1a73e8]' : 'text-[#dadce0]'}`}
                />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded('Resources') ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-[#f8f9fa] rounded-b-xl pb-2">
                  <Link to="/resources/" className="block py-3 pl-14 text-sm text-[#3c4043] hover:text-[#1a73e8] font-medium">
                    Resource Hub
                  </Link>
                  <Link to="/resources/faq/" className="block py-2 pl-14 text-sm text-[#5f6368] hover:text-[#1a73e8]">
                    FAQ
                  </Link>
                  <Link to="/resources/insurance-guide/" className="block py-2 pl-14 text-sm text-[#5f6368] hover:text-[#1a73e8]">
                    Insurance Guide
                  </Link>
                  <Link to="/resources/homeowner-guides/" className="block py-2 pl-14 text-sm text-[#5f6368] hover:text-[#1a73e8]">
                    Homeowner Guides
                  </Link>
                  <Link to="/resources/emergency-checklists/" className="block py-2 pl-14 text-sm text-[#5f6368] hover:text-[#1a73e8]">
                    Emergency Checklists
                  </Link>
                  <Link to="/blog/" className="block py-2 pl-14 text-sm text-[#5f6368] hover:text-[#1a73e8]">
                    Blog
                  </Link>
                </div>
              </div>
            </div>

            {/* Simple Links */}
            <Link
              to="/reviews/"
              className={`flex items-center w-full px-4 py-4 text-base font-medium rounded-xl transition-colors ${
                location.pathname === '/reviews/'
                  ? 'bg-[#e8f0fe] text-[#1a73e8]'
                  : 'text-[#202124] hover:bg-[#f8f9fa]'
              }`}
            >
              <Star size={20} className={`mr-4 ${location.pathname === '/reviews/' ? 'text-[#1a73e8]' : 'text-[#5f6368]'}`} />
              <span>Reviews</span>
            </Link>

            <Link
              to="/about/"
              className={`flex items-center w-full px-4 py-4 text-base font-medium rounded-xl transition-colors ${
                location.pathname === '/about/'
                  ? 'bg-[#e8f0fe] text-[#1a73e8]'
                  : 'text-[#202124] hover:bg-[#f8f9fa]'
              }`}
            >
              <Info size={20} className={`mr-4 ${location.pathname === '/about/' ? 'text-[#1a73e8]' : 'text-[#5f6368]'}`} />
              <span>About Us</span>
            </Link>

            <Link
              to="/contact/"
              className={`flex items-center w-full px-4 py-4 text-base font-medium rounded-xl transition-colors ${
                location.pathname === '/contact/'
                  ? 'bg-[#e8f0fe] text-[#1a73e8]'
                  : 'text-[#202124] hover:bg-[#f8f9fa]'
              }`}
            >
              <Phone size={20} className={`mr-4 ${location.pathname === '/contact/' ? 'text-[#1a73e8]' : 'text-[#5f6368]'}`} />
              <span>Contact</span>
            </Link>

          </nav>
        </div>

        {/* Sticky Footer */}
        <div className="border-t border-[#dadce0] bg-white p-4 pb-safe shrink-0">
          <Button to="/request/" variant="primary" fullWidth className="h-12">
            Get started
          </Button>
        </div>

      </div>
    </>
  );
};

export default MobileMenu;
