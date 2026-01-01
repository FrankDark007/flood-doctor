import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About', href: '#about', active: true },
  { label: 'Services', href: '/services/' },
  { label: 'Locations', href: '/locations/' },
  { label: 'Resources', href: '/resources/' },
];

const CloneHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="h-16 bg-white relative z-50">
      <div className="h-full max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1">
          <span className="text-[22px] font-display font-semibold">
            <span className="text-[#4285f4]">F</span>
            <span className="text-[#ea4335]">l</span>
            <span className="text-[#fbbc05]">o</span>
            <span className="text-[#4285f4]">o</span>
            <span className="text-[#34a853]">d</span>
            <span className="text-[#ea4335]"> </span>
            <span className="text-[#4285f4]">D</span>
            <span className="text-[#ea4335]">o</span>
            <span className="text-[#fbbc05]">c</span>
            <span className="text-[#4285f4]">t</span>
            <span className="text-[#34a853]">o</span>
            <span className="text-[#ea4335]">r</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`
                relative text-base font-medium py-5
                ${item.active ? 'text-text' : 'text-muted hover:text-text'}
                transition-colors duration-150
              `}
            >
              {item.label}
              {item.active && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-t-sm" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 -mr-2 text-muted hover:text-text heading-section"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-border shadow-lg">
          <nav className="flex flex-col py-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  px-6 py-3 text-base font-medium
                  ${item.active ? 'text-primary bg-primary/5' : 'text-muted hover:bg-subtle'}
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default CloneHeader;
