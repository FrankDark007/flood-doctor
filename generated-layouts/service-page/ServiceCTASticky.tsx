import React from 'react';
import { Phone } from 'lucide-react';

interface ServiceCTAStickyProps {
  isVisible: boolean;
  emergencyPhone: string;
  onCtaClick: () => void;
}

const ServiceCTASticky: React.FC<ServiceCTAStickyProps> = ({ isVisible, emergencyPhone, onCtaClick }) => {
  return (
    <div 
      className={`fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 transition-transform duration-300 transform ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="container mx-auto px-4 py-4 md:py-3">
        <div className="flex items-center justify-between gap-4">
          
          <div className="hidden md:flex flex-col">
             <span className="text-xs font-bold text-accent uppercase tracking-wider">Emergency Service</span>
             <span className="text-sm text-slate-500">24/7 Response • 60 min arrival</span>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a 
              href={`tel:${emergencyPhone.replace(/\D/g,'')}`}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-3 rounded-lg font-bold transition-colors"
            >
              <Phone size={18} className="text-accent" />
              <span className="whitespace-nowrap">{emergencyPhone}</span>
            </a>
            
            <button 
              onClick={onCtaClick}
              className="flex-1 md:flex-none bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-bold shadow-lg shadow-blue-500/30 transition-colors whitespace-nowrap"
            >
              Request Services
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceCTASticky;