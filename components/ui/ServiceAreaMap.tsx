import React, { useMemo } from 'react';
import { LocationData } from '../../types';
import { MapPin, Building2, Star, Phone, Globe, Info, Clock, Truck } from 'lucide-react';

interface ServiceAreaMapProps {
  locations: LocationData[];
  onLocationSelect?: (location: LocationData) => void;
  className?: string;
}

const HQ_LOCATION = {
  title: "Headquarters",
  lat: 38.9287,
  lng: -77.2353
};

const ServiceAreaMap: React.FC<ServiceAreaMapProps> = ({ locations, onLocationSelect, className = '' }) => {
  // Calculate bounds with increased padding to zoom out and prevent top clipping
  const bounds = useMemo(() => {
    const validLocs = locations.filter(l => l.lat && l.lng);
    const allLats = [...validLocs.map(l => l.lat!), HQ_LOCATION.lat];
    const allLngs = [...validLocs.map(l => l.lng!), HQ_LOCATION.lng];
    
    if (allLats.length === 0) return { minLat: 0, maxLat: 1, minLng: 0, maxLng: 1 };

    // Increased Padding factors to zoom out (0.12/0.15 provide significantly more margin)
    const latPadding = 0.12; 
    const lngPadding = 0.15;

    return {
      minLat: Math.min(...allLats) - latPadding,
      maxLat: Math.max(...allLats) + latPadding,
      minLng: Math.min(...allLngs) - lngPadding,
      maxLng: Math.max(...allLngs) + lngPadding,
    };
  }, [locations]);

  const getPosition = (lat: number, lng: number) => {
    const latRange = bounds.maxLat - bounds.minLat;
    const lngRange = bounds.maxLng - bounds.minLng;
    const y = ((bounds.maxLat - lat) / latRange) * 100;
    const x = ((lng - bounds.minLng) / lngRange) * 100;
    return { x, y };
  };

  const hqPos = getPosition(HQ_LOCATION.lat, HQ_LOCATION.lng);

  return (
    <div className={`relative w-full aspect-[4/3] md:aspect-[21/9] bg-[#f8f9fa] rounded-[32px] border border-gray-200 overflow-hidden shadow-inner ${className}`}>
      
      {/* Background Decor (Abstract Map) */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
         <svg width="100%" height="100%">
            <pattern id="map-grid-v2" width="60" height="60" patternUnits="userSpaceOnUse">
               <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#cbd5e1" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#map-grid-v2)" />
            <path 
              d="M 100% 20% Q 80% 40% 60% 45% T 30% 60% T 0% 80%" 
              fill="none" 
              stroke="#e0f2fe" 
              strokeWidth="40" 
              strokeLinecap="round" 
              style={{ mixBlendMode: 'multiply' }}
            />
         </svg>
      </div>
      
      {/* Instructions Overlay */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl border border-gray-100 shadow-sm text-xs font-medium text-gray-500 pointer-events-none z-10 flex items-center gap-2">
         <MapPin size={14} className="text-primary" />
         Interactive Service Map
      </div>

      {/* Locations */}
      <div className="absolute inset-0">
        {locations.map((loc) => {
           if (!loc.lat || !loc.lng) return null;
           const { x, y } = getPosition(loc.lat, loc.lng);
           
           return (
             <div
                key={loc.title}
                className="absolute group transition-all duration-300 hover:z-50"
                style={{ top: `${y}%`, left: `${x}%` }}
             >
                {/* Marker Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 bg-white rounded-xl shadow-xl border border-gray-100 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-bottom scale-95 group-hover:scale-100 pointer-events-none">
                    <div className="text-xs font-bold text-gray-900 mb-1">{loc.title} Team</div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] text-green-600 font-medium">
                            <Clock size={10} /> ~45 min response
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                            <Truck size={10} /> Local dispatch hub
                        </div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-gray-50 text-[9px] text-primary font-bold uppercase tracking-wider">
                        Click to view details
                    </div>
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45"></div>
                </div>

                {/* Marker Pin */}
                <button
                    onClick={() => onLocationSelect && onLocationSelect(loc)}
                    className="flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                    aria-label={`View ${loc.title} details`}
                >
                    <div className="relative mb-1 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full shadow-[0_4px_10px_rgba(26,115,232,0.4)] border-[3px] border-white group-hover:bg-red-600 transition-colors"></div>
                    </div>
                    <div className="px-2 py-0.5 bg-white/95 backdrop-blur-sm rounded shadow-sm border border-gray-100 text-[10px] font-bold text-gray-700 whitespace-nowrap opacity-90 group-hover:opacity-100 group-hover:text-primary transition-all">
                        {loc.title}
                    </div>
                </button>
             </div>
           );
        })}

        {/* HQ Marker (Vienna) */}
        <div 
            className="absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 z-40 group"
            style={{ top: `${hqPos.y}%`, left: `${hqPos.x}%` }}
        >
            {/* Google Business Profile Tooltip */}
            <div className="absolute bottom-full mb-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-bottom translate-y-2 group-hover:translate-y-0 z-50 pointer-events-none group-hover:pointer-events-auto">
                <div className="h-16 bg-[#1a73e8] relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                   <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
                      <path d="M-10 10 L300 80" stroke="white" strokeWidth="2" fill="none" />
                      <path d="M-10 40 L300 110" stroke="white" strokeWidth="2" fill="none" />
                   </svg>
                   <div className="absolute bottom-2 left-4 text-white font-bold text-lg drop-shadow-md">Flood Doctor</div>
                </div>
                
                <div className="p-4 pt-3">
                    <div className="flex items-center gap-1.5 mb-2">
                        <span className="font-bold text-orange-500">4.9</span>
                        <div className="flex text-orange-500">
                            {[1,2,3,4,5].map(i => (
                                <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
                            ))}
                        </div>
                        <span className="text-gray-400 text-xs">(127)</span>
                    </div>
                    
                    <div className="flex items-start gap-2 mb-3">
                       <div className="mt-0.5"><MapPin size={14} className="text-gray-400" /></div>
                       <div className="text-xs text-gray-600 leading-snug">
                          8466D Tyco Rd<br/>Vienna, VA 22182
                       </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4 bg-green-50 px-2 py-1.5 rounded border border-green-100 w-fit">
                        <div className="w-3 h-3 bg-green-600 rounded-full flex items-center justify-center text-[8px] text-white font-bold">✓</div>
                        <span className="text-[10px] font-bold text-green-700 uppercase tracking-wide">Google Guaranteed</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <a href="tel:8774970007" className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-700 transition-colors">
                            <Phone size={12} /> Call
                        </a>
                        <button className="flex items-center justify-center gap-1.5 py-2 rounded-lg border border-gray-200 text-gray-600 text-xs font-medium hover:bg-gray-50 transition-colors">
                            <Globe size={12} /> Website
                        </button>
                    </div>
                </div>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
            </div>

            <div className="relative mb-2 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="w-10 h-10 bg-gray-900 text-white rounded-xl shadow-xl flex items-center justify-center border-2 border-white">
                    <Building2 size={20} />
                </div>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45 border-r border-b border-gray-900"></div>
                <div className="absolute inset-0 rounded-xl bg-gray-900 -z-10 animate-ping opacity-20"></div>
            </div>
            
            <div className="px-3 py-1.5 bg-gray-900 text-white rounded-lg text-[10px] font-bold shadow-md whitespace-nowrap uppercase tracking-wide border border-gray-700 group-hover:opacity-0 transition-opacity duration-200">
                Headquarters
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaMap;