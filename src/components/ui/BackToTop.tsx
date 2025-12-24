import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

// Google-style Back to Top button
// Appears after scrolling down, smooth scroll back to top

interface BackToTopProps {
  showAfter?: number; // Scroll distance in px before showing
  className?: string;
}

const BackToTop: React.FC<BackToTopProps> = ({
  showAfter = 400,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAfter);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-24 lg:bottom-8 right-4 lg:right-8 z-50
        w-12 h-12 rounded-full
        bg-white border border-[#dadce0]
        shadow-[0_1px_3px_rgba(60,64,67,0.3),0_4px_8px_3px_rgba(60,64,67,0.15)]
        flex items-center justify-center
        text-[#5f6368] hover:text-[#202124]
        hover:shadow-[0_2px_6px_rgba(60,64,67,0.3),0_6px_12px_3px_rgba(60,64,67,0.15)]
        transition-all duration-300
        ${isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
        }
        ${className}
      `}
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default BackToTop;
