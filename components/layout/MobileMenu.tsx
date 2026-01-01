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
  ShieldAlert,
  FileText,
  HelpCircle,
  Hammer
} from 'lucide-react';
import Button from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Data Structure for Accordions
const MENU_STRUCTURE = [
  { 
    label: 'Home', 
    path: '/', 
    icon: Home, 
    type: 'link' 
  },
  { 
    label: 'Services', 
    icon: Briefcase, 
    type: 'accordion',
    children: [
      { label: 'All Services', path: '/services/' },
      { label: 'Water Damage', path: '/services/residential/water-damage' },
      { label: 'Fire & Smoke', path: '/services/residential/fire-smoke' },
      { label: 'Mold Remediation', path: '/services/residential/mold' },
      { label: 'Commercial Services', path: '/services/commercial/' },
    ]
  },
  { 
    label: 'Locations', 
    path: '/locations/', 
    icon: MapPin, 
    type: 'link' 
  },
  { 
    label: 'Resources', 
    icon: BookOpen, 
    type: 'accordion', 
    children: [
      { label: 'Help Center', path: '/resources/' },
      { label: 'Insurance Guide', path: '/resources/insurance-guide/' },
      { label: 'Emergency Checklists', path: '/resources/emergency-checklists/' },
      { label: 'Homeowner Guides', path: '/resources/homeowner-guides/' },
      { label: 'FAQ', path: '/resources/faq/' },
    ]
  },
  { 
    label: 'Reviews', 
    path: '/reviews/', 
    icon: Star, 
    type: 'link' 
  },
  { 
    label: 'About Us', 
    path: '/about/', 
    icon: Info, 
    type: 'link' 
  },
  { 
    label: 'Contact', 
    path: '/contact/', 
    icon: Phone, 
    type: 'link' 
  }
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

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

  return (
    <>
      {/* Backdrop (for fade effect) */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-Over Panel */}
      <div 
        className={`fixed inset-y-0 right-0 w-full sm:max-w-sm bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        
        {/* 1. Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100 shrink-0">
          <span className="font-display font-bold text-lg text-gray-900 tracking-tight">
            FLOOD DOCTOR
          </span>
          <button 
            onClick={onClose}
            className="p-2 -mr-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* 2. Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <nav className="px-4 py-6 space-y-2">
            {MENU_STRUCTURE.map((item) => {
              const isActive = item.path === '/' 
                ? location.pathname === '/' 
                : item.path ? location.pathname.startsWith(item.path) : false;
              
              const isExpanded = expandedItems.includes(item.label);
              const Icon = item.icon;

              if (item.type === 'accordion') {
                return (
                  <div key={item.label} className="rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleAccordion(item.label)}
                      className={`flex items-center justify-between w-full px-4 py-4 text-[17px] font-medium transition-colors rounded-xl ${
                        isActive || isExpanded ? 'bg-blue-50 text-primary' : 'text-text hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <Icon size={20} className={isActive || isExpanded ? 'text-primary' : 'text-gray-400'} />
                        <span>{item.label}</span>
                      </div>
                      <ChevronDown 
                        size={20} 
                        className={`transition-transform duration-300 ${isExpanded ? 'rotate-180 text-primary' : 'text-gray-300'}`} 
                      />
                    </button>
                    
                    {/* Sub-menu Animation */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="bg-gray-50/50 rounded-b-xl pb-2">
                        {item.children?.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="flex items-center w-full pl-14 pr-4 py-3 text-[15px] text-gray-600 hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Standard Link
              return (
                <Link 
                  key={item.path}
                  to={item.path!}
                  className={`flex items-center w-full px-4 py-4 text-[17px] font-medium rounded-xl transition-colors ${
                      isActive 
                      ? 'bg-blue-50 text-primary' 
                      : 'text-text hover:bg-gray-50'
                  }`}
                >
                  <Icon size={20} className={`mr-4 ${isActive ? 'text-primary' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                  {isActive && <ChevronRight size={18} className="ml-auto text-primary" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* 3. Sticky Emergency Footer */}
        <div className="border-t border-gray-200 bg-white p-4 pb-safe space-y-3 shrink-0">
          <Button href="tel:8774970007" variant="primary" fullWidth className="h-12 text-[16px] shadow-button font-bold bg-red-600 hover:bg-red-700 border-transparent">
            <div className="flex items-center justify-center gap-2">
              <ShieldAlert size={20} />
              Emergency Call
            </div>
          </Button>
          <Button to="/request/" variant="outline" fullWidth className="h-12 text-[16px] font-medium">
            Request Service
          </Button>
        </div>

      </div>
    </>
  );
};

export default MobileMenu;