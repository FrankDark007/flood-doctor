import React from 'react';

interface ServiceCTAStickyProps {
  isVisible: boolean;
  emergencyPhone: string;
  onCtaClick: () => void;
}

const ServiceCTASticky: React.FC<ServiceCTAStickyProps> = ({ isVisible }) => {
  return (
    <div
      className={`fixed bottom-4 left-0 w-full z-50 transition-all duration-300 md:hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <div className="flex justify-center px-4">
        <a
          href="/request/"
          className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-500/30 transition-colors whitespace-nowrap text-center"
        >
          Request Services
        </a>
      </div>
    </div>
  );
};

export default ServiceCTASticky;
