import React, { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'locations', label: 'Locations' },
  { id: 'reviews', label: 'Reviews' },
];

const SectionTabs: React.FC = () => {
  const [activeId, setActiveId] = useState('overview');

  useEffect(() => {
    // Use a large negative bottom margin to trigger "active" as the section enters the top viewport area
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-10% 0px -50% 0px', 
        threshold: 0
      }
    );

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        // Offset: Header (80px) + Tabs (56px) + Buffer
        const headerOffset = 140; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
        
        setActiveId(id);
    }
  };

  return (
    <div className="sticky top-14 md:top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
          {SECTIONS.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              onClick={(e) => scrollToSection(e, tab.id)}
              className={`py-4 text-sm font-medium border-b-[3px] transition-colors whitespace-nowrap ${
                activeId === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTabs;