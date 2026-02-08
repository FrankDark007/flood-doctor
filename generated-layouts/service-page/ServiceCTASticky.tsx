import React from 'react';

interface ServiceCTAStickyProps {
  isVisible: boolean;
  emergencyPhone: string;
  onCtaClick: () => void;
}

/**
 * ServiceCTASticky
 * - Mobile: Always-visible floating sticky button at bottom (single "Request Service")
 * - Desktop: Shows sticky bar only after hero scrolls out of view
 */
const ServiceCTASticky: React.FC<ServiceCTAStickyProps> = ({ isVisible, onCtaClick }) => {
  return (
    <>
      {/* Mobile: Always-visible floating sticky button */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <button
          onClick={onCtaClick}
          className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/30 transition-colors"
        >
          Request Service
        </button>
      </div>

      {/* Desktop: Sticky bar after hero scrolls away */}
      <div
        className={`hidden md:block fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 transition-transform duration-300 transform ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-accent uppercase tracking-wider">Emergency Service</span>
              <span className="text-sm text-slate-500">24/7 Response • 60 min arrival</span>
            </div>
            <button
              onClick={onCtaClick}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-blue-500/30 transition-colors whitespace-nowrap"
            >
              Request Service
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCTASticky;
