
import React from 'react';
import Button from '../ui/Button';
import { useEmergencyData } from '../../contexts/EmergencyContext';
import { Phone, AlertTriangle } from 'lucide-react';

const MobileStickyCTA: React.FC = () => {
  const { isEmergencyMode } = useEmergencyData();

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 border-t shadow-[0_-4px_12px_rgba(0,0,0,0.05)] md:hidden pb-[env(safe-area-inset-bottom)] transition-colors duration-300 ${isEmergencyMode ? 'bg-red-50 border-red-100' : 'bg-white border-gray-200'}`}>
      <div className="p-3">
        {isEmergencyMode ? (
            <Button 
                href="tel:8774970007" 
                variant="primary" 
                fullWidth
                className="h-14 text-[17px] font-bold shadow-none rounded-full bg-red-600 hover:bg-red-700 border-transparent animate-pulse"
            >
                <div className="flex items-center justify-center gap-2">
                    <Phone size={20} className="fill-white" />
                    <span>Call Dispatch Now</span>
                </div>
            </Button>
        ) : (
            <Button 
            to="/request/" 
            variant="primary" 
            fullWidth
            className="h-14 text-[17px] font-semibold shadow-none rounded-full"
            >
            Request Services
            </Button>
        )}
      </div>
    </div>
  );
};

export default MobileStickyCTA;
