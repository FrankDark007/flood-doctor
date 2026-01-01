
import React from 'react';
import { Clock, Truck, AlertTriangle, Activity, Wifi, MapPin } from 'lucide-react';
import { useEmergencyData } from '../../contexts/EmergencyContext';

interface EmergencyServiceCardProps {
  className?: string;
  showPointer?: boolean;
  variant?: 'compact' | 'expanded';
}

const EmergencyServiceCard: React.FC<EmergencyServiceCardProps> = ({ 
  className = '', 
  showPointer = false,
  variant = 'compact'
}) => {
  const { dateTime, activeCrews, responseTime, isEmergencyMode } = useEmergencyData();

  // --- PULSING ORB ---
  const StatusOrb = () => (
    <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
    </span>
  );

  // --- EXPANDED VARIANT (Sidebar) ---
  if (variant === 'expanded') {
    return (
      <div className={`rounded-3xl shadow-lg border p-6 relative overflow-hidden transition-all duration-500 bg-white border-gray-200 ${className}`}>
        
        {/* Header */}
        <div className="flex justify-between items-start mb-8 relative z-10">
            <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300 ${isEmergencyMode ? 'bg-[#fce8e6] text-[#d93025] border border-[#fad2cf]' : 'bg-blue-50 text-blue-600 border border-blue-100'}`}>
                    {isEmergencyMode ? <AlertTriangle size={28} className="animate-pulse text-[#d93025]" /> : <Activity size={28} />}
                </div>
                <div>
                    <div className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${isEmergencyMode ? 'text-[#d93025]' : 'text-gray-400'}`}>
                        System Status
                    </div>
                    <div className="font-bold text-xl leading-none text-gray-900">
                        {isEmergencyMode ? 'High Alert' : 'Operational'}
                    </div>
                </div>
            </div>
            
            {/* Live Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border bg-gray-50 border-gray-100 text-gray-600">
                <span className="text-[10px] font-bold tracking-wider">LIVE</span>
                <StatusOrb />
            </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
            {/* Crews - Enhanced Styling */}
            <div className="p-4 rounded-2xl border bg-indigo-50 border-indigo-100 text-indigo-900 transition-transform hover:scale-[1.02] duration-300">
                <div className="flex items-center gap-2 mb-3 opacity-90">
                    <div className="p-1.5 bg-white/60 rounded-lg text-indigo-600">
                        <Truck size={14} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wide">Active Crews</span>
                </div>
                <div className="text-3xl font-display font-bold text-indigo-950">
                    {activeCrews}
                </div>
            </div>
            
            {/* Time - Enhanced Styling */}
            <div className="p-4 rounded-2xl border bg-emerald-50 border-emerald-100 text-emerald-900 transition-transform hover:scale-[1.02] duration-300">
                <div className="flex items-center gap-2 mb-3 opacity-90">
                    <div className="p-1.5 bg-white/60 rounded-lg text-emerald-600">
                        <Clock size={14} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wide">Avg Arrival</span>
                </div>
                <div className="text-3xl font-display font-bold text-emerald-950">
                    {responseTime}<span className="text-sm font-medium ml-1 text-emerald-700">min</span>
                </div>
            </div>
        </div>

        {/* Footer Text */}
        <div className="text-xs font-medium leading-relaxed relative z-10 flex items-start gap-2 text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100">
            <div className="mt-0.5 text-blue-500"><Wifi size={14} /></div>
            <p>
                {isEmergencyMode 
                    ? "Priority dispatch channel open. Direct routing to nearest restoration unit active."
                    : "Normal dispatch conditions. Crews are available in your area for immediate response."
                }
            </p>
        </div>

      </div>
    );
  }

  // --- COMPACT VARIANT (Dropdown/Mobile) ---
  return (
    <div className={`rounded-xl shadow-google-hover border p-4 relative overflow-hidden ${isEmergencyMode ? 'bg-[#fce8e6] border-[#fad2cf]' : 'bg-white border-gray-200'} ${className}`}>
      <div className="flex items-start gap-3 relative z-10">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isEmergencyMode ? 'bg-white text-[#d93025]' : 'bg-blue-50 text-primary'}`}>
           {isEmergencyMode ? <AlertTriangle size={20} /> : <Clock size={20} />}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
              <div className="font-bold text-gray-900 text-sm leading-tight">
                {isEmergencyMode ? 'Emergency Active' : 'Live Status'}
              </div>
              <div className="flex items-center gap-1.5 text-green-600">
                  <span className="text-[9px] font-bold">ONLINE</span>
                  <StatusOrb />
              </div>
          </div>
          <p className="text-xs text-gray-500 mt-0.5 mb-2 font-medium">
            {dateTime}
          </p>
          <div className={`text-xs p-2.5 rounded-lg border leading-relaxed ${isEmergencyMode ? 'bg-white border-[#fad2cf] text-[#d93025]' : 'bg-gray-50 border-gray-100 text-gray-600'}`}>
            <div className="flex items-center gap-2 mb-1">
                <Truck size={12} />
                <span className="font-bold">{activeCrews} Crews Active</span>
            </div>
            {isEmergencyMode 
                ? "Your request has been flagged for immediate response."
                : <span>Avg response time: <strong>{responseTime} min</strong></span>
            }
          </div>
        </div>
      </div>
      
      {showPointer && (
        <div className={`absolute -top-1.5 left-6 w-3 h-3 border-l border-t transform rotate-45 ${isEmergencyMode ? 'bg-[#fce8e6] border-[#fad2cf]' : 'bg-white border-gray-200'}`}></div>
      )}
    </div>
  );
};

export default EmergencyServiceCard;
