import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TopicJumpLinksProps {
  sections: { id: string; label: string }[];
  activeId: string | null;
  onNavigate: (id: string) => void;
}

const TopicJumpLinks: React.FC<TopicJumpLinksProps> = ({
  sections,
  activeId,
  onNavigate,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    };

    checkScroll();
    const el = scrollRef.current;
    el?.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      el?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [sections]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 200;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  if (sections.length === 0) return null;

  return (
    <div className="relative bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-4">
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-2 shadow-md hover:bg-gray-50"
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} className="text-gray-600" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeId === section.id
                    ? 'bg-[#1a73e8] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-2 shadow-md hover:bg-gray-50"
              aria-label="Scroll right"
            >
              <ChevronRight size={16} className="text-gray-600" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicJumpLinks;
