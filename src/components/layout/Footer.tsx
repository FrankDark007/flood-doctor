import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MapPin } from 'lucide-react';
import { LOCATIONS } from '../../data/locations';

interface FooterSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="border-b border-[#dadce0] lg:border-none">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-4 text-left lg:py-0 lg:cursor-default lg:pointer-events-none"
      >
        <h3 className="text-sm font-medium text-[#202124] lg:mb-5">{title}</h3>
        <ChevronDown
          size={20}
          className={`text-[#5f6368] transition-transform duration-200 lg:hidden ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 lg:h-auto lg:opacity-100 ${isOpen ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0 lg:max-h-none'}`}>
        {children}
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const linkClass = "block text-sm text-[#5f6368] hover:text-[#1a73e8] transition-colors py-2 lg:py-1.5";

  return (
    <footer className="bg-[#f8f9fa] border-t border-[#dadce0] mt-auto">
      <div className="max-w-[1296px] mx-auto px-4 sm:px-8 lg:px-16 py-10 lg:py-16">

        {/* Link Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-6 lg:gap-8">

          {/* Brand Column */}
          <div className="hidden lg:block lg:col-span-1 lg:pr-4">
            <Link to="/" className="flex items-center gap-0.5 text-xl mb-4">
              <span className="font-medium text-[#1a73e8]">Flood</span>
              <span className="font-medium text-[#202124]">Doctor</span>
            </Link>
            <p className="text-sm text-[#5f6368] leading-relaxed">
              24/7 emergency water damage restoration for Northern Virginia.
            </p>
          </div>

          <FooterSection
            title="Services"
            isOpen={!!openSections["Services"]}
            onToggle={() => toggleSection("Services")}
          >
            <ul className="space-y-0.5">
              <li><Link to="/services/" className={linkClass}>All Services</Link></li>
              <li><Link to="/services/residential/" className={linkClass}>Residential</Link></li>
              <li><Link to="/services/commercial/" className={linkClass}>Commercial</Link></li>
            </ul>
          </FooterSection>

          <FooterSection
            title="Locations"
            isOpen={!!openSections["Locations"]}
            onToggle={() => toggleSection("Locations")}
          >
            <ul className="space-y-0.5">
              <li><Link to="/locations/" className={linkClass}>All Service Areas</Link></li>
              {LOCATIONS.slice(0, 6).map((loc) => (
                <li key={loc.title}>
                  <a
                    href={loc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClass} flex items-center gap-1.5`}
                  >
                    <MapPin size={12} className="text-[#5f6368]" />
                    {loc.title}
                  </a>
                </li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection
            title="Resources"
            isOpen={!!openSections["Resources"]}
            onToggle={() => toggleSection("Resources")}
          >
            <ul className="space-y-0.5">
              <li><Link to="/resources/" className={linkClass}>Resource Hub</Link></li>
              <li><Link to="/resources/faq/" className={linkClass}>FAQ</Link></li>
              <li><Link to="/resources/insurance-guide/" className={linkClass}>Insurance Guide</Link></li>
              <li><Link to="/resources/homeowner-guides/" className={linkClass}>Homeowner Guides</Link></li>
              <li><Link to="/resources/emergency-checklists/" className={linkClass}>Emergency Checklists</Link></li>
              <li><Link to="/resources/technology/" className={linkClass}>Our Technology</Link></li>
              <li><Link to="/blog/" className={linkClass}>Blog</Link></li>
            </ul>
          </FooterSection>

          <FooterSection
            title="Company"
            isOpen={!!openSections["Company"]}
            onToggle={() => toggleSection("Company")}
          >
            <ul className="space-y-0.5">
              <li><Link to="/about/" className={linkClass}>About Us</Link></li>
              <li><Link to="/reviews/" className={linkClass}>Reviews</Link></li>
              <li><Link to="/contact/" className={linkClass}>Contact</Link></li>
              <li><Link to="/careers/" className={linkClass}>Careers</Link></li>
            </ul>
          </FooterSection>

          <FooterSection
            title="Support"
            isOpen={!!openSections["Support"]}
            onToggle={() => toggleSection("Support")}
          >
            <ul className="space-y-0.5">
              <li><Link to="/request/" className={linkClass}>Request Service</Link></li>
              <li><a href="tel:8774970007" className={linkClass}>(877) 497-0007</a></li>
              <li><Link to="/privacy-policy/" className={linkClass}>Privacy Policy</Link></li>
              <li><Link to="/terms/" className={linkClass}>Terms of Service</Link></li>
            </ul>
          </FooterSection>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#dadce0]">
        <div className="max-w-[1296px] mx-auto px-4 sm:px-8 lg:px-16 py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-xs text-[#5f6368]">
            <Link to="/privacy-policy/" className="hover:text-[#1a73e8] transition-colors">Privacy</Link>
            <Link to="/terms/" className="hover:text-[#1a73e8] transition-colors">Terms</Link>
            <Link to="/about/" className="hover:text-[#1a73e8] transition-colors">About</Link>
            <Link to="/contact/" className="hover:text-[#1a73e8] transition-colors">Contact</Link>
          </div>
          <p className="text-xs text-[#5f6368]">
            &copy; {new Date().getFullYear()} Flood Doctor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
