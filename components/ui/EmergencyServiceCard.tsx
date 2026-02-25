
import React from 'react';
import { Clock, Truck, AlertTriangle, Activity } from 'lucide-react';
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
  const StatusOrb = ({ size = 'sm' }: { size?: 'sm' | 'md' }) => (
    <span className={`relative flex ${size === 'md' ? 'h-3 w-3' : 'h-2 w-2'}`}>
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className={`relative inline-flex rounded-full ${size === 'md' ? 'h-3 w-3' : 'h-2 w-2'} bg-green-500`}></span>
    </span>
  );

  // --- EXPANDED VARIANT (Sidebar) ---
  if (variant === 'expanded') {
    return (
      <div className={`rounded-2xl border relative overflow-hidden transition-all duration-500 ${isEmergencyMode ? 'bg-red-50 border-red-200' : 'bg-gradient-to-b from-slate-50 to-white border-slate-200'} ${className}`}>

        {/* Top accent bar */}
        <div className={`h-1 w-full ${isEmergencyMode ? 'bg-gradient-to-r from-red-500 to-orange-500' : 'bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600'}`} />

        <div className="p-5">
          {/* Header row */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isEmergencyMode ? 'bg-red-100 text-red-600' : 'bg-blue-600 text-white'}`}>
                {isEmergencyMode ? <AlertTriangle size={20} className="animate-pulse" /> : <Activity size={20} strokeWidth={2.5} />}
              </div>
              <div>
                <div className="font-bold text-[15px] text-gray-900 leading-tight">
                  {isEmergencyMode ? 'High Alert' : 'Dispatch Center'}
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <StatusOrb />
                  <span className="text-[11px] font-semibold text-green-600 uppercase tracking-wide">Live</span>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {/* Active Crews */}
            <div className="relative p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-1.5 mb-2">
                <Truck size={13} className="text-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Crews</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gray-900 tabular-nums">{activeCrews}</span>
                <span className="text-xs font-medium text-slate-400">active</span>
              </div>
            </div>

            {/* Avg Arrival */}
            <div className="relative p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-1.5 mb-2">
                <Clock size={13} className="text-emerald-600" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">ETA</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gray-900 tabular-nums">{responseTime}</span>
                <span className="text-xs font-medium text-slate-400">min</span>
              </div>
            </div>
          </div>

          {/* Status message */}
          <div className={`text-[12px] leading-relaxed px-3 py-2.5 rounded-lg mb-4 ${isEmergencyMode ? 'bg-red-100 text-red-700 border border-red-200' : 'bg-slate-50 text-slate-500 border border-slate-100'}`}>
            {isEmergencyMode
              ? "⚡ Priority dispatch active. Direct routing to nearest crew."
              : "Crews standing by in Northern Virginia for immediate dispatch."
            }
          </div>

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
