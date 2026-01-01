
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ChevronDown, MapPin } from 'lucide-react';

interface MobileAccordionItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const MobileAccordionItem: React.FC<MobileAccordionItemProps> = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="border-b border-gray-100 md:border-none">
      <button 
        onClick={onToggle}
        className="flex items-center justify-between w-full py-4 text-left md:py-0 md:cursor-default md:pointer-events-none"
      >
        <h3 className="text-sm font-semibold text-gray-900 tracking-wide md:mb-4">{title}</h3>
        <ChevronDown 
          size={20} 
          className={`text-gray-400 transition-transform duration-200 md:hidden ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 md:h-auto md:opacity-100 ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0 md:max-h-none'}`}>
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

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
        
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 sm:px-6 lg:px-8">
            
            {/* Top Row: Socials */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-100 pb-8 mb-4 md:mb-12">
               <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-0">Follow us</h3>
               <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Twitter">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                    <Linkedin size={24} />
                  </a>
                   <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                    <Instagram size={24} />
                  </a>
               </div>
            </div>

            {/* Link Columns / Accordions */}
            <div className="grid grid-cols-1 md:grid-cols-4 md:gap-12 lg:gap-16">
                
                <MobileAccordionItem 
                  title="Services" 
                  isOpen={!!openSections["Services"]} 
                  onToggle={() => toggleSection("Services")}
                >
                    <ul className="space-y-3">
                        <li><Link to="/services/" className="block text-sm text-gray-500 hover:text-primary transition-colors py-2 md:py-0">All Services</Link></li>
                        <li><Link to="/services/residential/" className="block text-sm text-gray-500 hover:text-primary transition-colors py-2 md:py-0">Residential</Link></li>
                        <li><Link to="/services/commercial/" className="block text-sm text-gray-500 hover:text-primary transition-colors py-2 md:py-0">Commercial</Link></li>
                        <li><Link to="/locations/" className="block text-sm text-gray-500 hover:text-primary transition-colors py-2 md:py-0">Locations</Link></li>
                        <li>
                            <Link to="/nearme/water-damage-restoration/" className="flex items-center gap-2 text-sm text-primary font-medium hover:text-primaryHover transition-colors py-2 md:py-0">
                               <MapPin size={14} /> Find Near Me
                            </Link>
                        </li>
                    </ul>
                </MobileAccordionItem>

                <MobileAccordionItem 
                  title="Resources"
                  isOpen={!!openSections["Resources"]}
                  onToggle={() => toggleSection("Resources")}
                >
                    <ul className="space-y-3">
                         <li><Link to="/resources/faq/" className="block text-sm text-gray-500 hover:text-primary transition-colors py-2 md:py-0">FAQ</Link></li>
                         <li><Link to="/blog/" className="block text-sm text-gray-500 hover:text-primary transition-colors py-2 md:py-0">Blog</Link></li>
                         <li><Link to="/resources/technology/" className="block text-sm text-gray-500 hover:text-primary transition-colors py-2 md:py-0">Our Technology</Link></li>
                         <li><Link to="/resources/insurance-guide/" className="block text-sm text-gray-500 hover:text-primary transition-colors py-2 md:py-0">Insurance Help</Link></li>
                    </ul>
                </MobileAccordionItem>

                <MobileAccordionItem 
                  title="Company"
                  isOpen={!!openSections["Company"]}
                  onToggle={() => toggleSection("Company")}
                >
                    <ul className="space-y-3">
                        <li><Link to="/about/" className="block text-sm text-gray-500 hover:text-primary transition-colors py-2 md:py-0">About Us</Link></li>
                        <li><Link to="/reviews/" className="block text-sm text-gray-500 hover:text-primary transition-colors py-2 md:py-0">Reviews</Link></li>
                        <li><Link to="/contact/" className="block text-sm text-gray-500 hover:text-primary transition-colors py-2 md:py-0">Contact</Link></li>
                        <li><Link to="/resources/communication/" className="block text-sm text-gray-500 hover:text-primary transition-colors py-2 md:py-0">Communication</Link></li>
                        <li><Link to="/careers/" className="block text-sm text-gray-500 hover:text-primary transition-colors py-2 md:py-0">Careers</Link></li>
                    </ul>
                </MobileAccordionItem>

                <MobileAccordionItem 
                  title="Help & Legal"
                  isOpen={!!openSections["Help & Legal"]}
                  onToggle={() => toggleSection("Help & Legal")}
                >
                    <ul className="space-y-3">
                        <li><Link to="/request/" className="block text-sm text-gray-500 hover:text-primary transition-colors py-2 md:py-0">Request Service</Link></li>
                        <li><Link to="/privacy-policy/" className="block text-sm text-gray-500 hover:text-primary transition-colors py-2 md:py-0">Privacy Policy</Link></li>
                        <li><Link to="/terms/" className="block text-sm text-gray-500 hover:text-primary transition-colors py-2 md:py-0">Terms of Service</Link></li>
                    </ul>
                </MobileAccordionItem>

            </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="border-t border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 md:flex md:items-center md:justify-between">
                <div className="flex justify-center md:order-2 space-x-6 md:space-x-8">
                     <span className="text-xs text-gray-500 flex items-center">
                         <span className="mr-2">🇺🇸</span> United States (English)
                     </span>
                </div>
                <div className="mt-8 md:mt-0 md:order-1">
                    <p className="text-center text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} Flood Doctor. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
