import React from 'react';
import { ExternalLink, Truck, Clock, Phone, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { LocationData } from '../../types';

interface LocationsGridProps {
  locations: LocationData[];
  id?: string;
}

const LocationsGrid: React.FC<LocationsGridProps> = ({ locations, id }) => {
  // Helper to generate consistent mock stats based on city name
  const getStats = (city: string) => {
    const seed = city.length;
    return {
      crews: (seed % 4) + 2, // Range: 2-5 crews
      time: 35 + (seed % 4) * 5, // Range: 35-50 mins
      status: (seed % 3 === 0) ? 'High Demand' : 'Available'
    };
  };

  return (
    <div id={id} className="py-12 md:py-20 lg:py-24 bg-subtle/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Service Locations</h2>
            <p className="text-lg text-gray-600">Local response teams stationed throughout Northern Virginia for rapid deployment.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-visible">
          {locations.map((loc) => {
             const stats = getStats(loc.title);
             const cityId = `loc-${loc.title.replace(/\s+/g, '-').toLowerCase()}`;
             
             if (!loc.url) {
                return (
                    <div key={loc.title} id={cityId} className="p-6 bg-gray-50 border border-transparent rounded-xl flex items-center justify-between opacity-60 scroll-mt-36">
                        <div>
                            <span className="font-medium text-lg text-gray-500 block">{loc.title}</span>
                            <span className="text-xs text-gray-400 block mt-1">Full Service Coming Soon</span>
                        </div>
                    </div>
                );
             }

             return (
                <div key={loc.title} id={cityId} className="relative group hover:z-50 scroll-mt-36">
                    {/* Main Card */}
                    <a 
                      href={loc.url} 
                      className="flex flex-col p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 h-full relative z-10"
                    >
                      <div className="flex items-start justify-between mb-3">
                          <h3 className="font-display text-xl font-medium text-gray-900 group-hover:text-primary transition-colors">{loc.title}</h3>
                          <div className="p-2 bg-blue-50 text-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                             <ExternalLink size={16} />
                          </div>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                         <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                         <span className="text-xs font-bold text-green-700 uppercase tracking-wide">{stats.status}</span>
                      </div>
                      <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors leading-relaxed">
                        Complete water extraction, structural drying, and restoration services.
                      </p>
                    </a>

                    {/* Hover Card (Tooltip) - High-level dispatch data */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-bottom translate-y-2 group-hover:translate-y-0 pointer-events-none z-50">
                        {/* Status Header */}
                        <div className="h-14 bg-primary relative overflow-hidden flex items-center px-4">
                           <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                           <div className="flex items-center gap-2 relative z-10 text-white">
                               <MapPin size={18} fill="currentColor" />
                               <span className="font-bold text-lg">{loc.title} Dispatch Hub</span>
                           </div>
                        </div>
                        
                        <div className="p-5">
                            {/* Live Stats Row */}
                            <div className="grid grid-cols-2 gap-4 mb-5 pb-5 border-b border-gray-50">
                                <div className="text-center">
                                    <div className="text-[10px] text-gray-400 uppercase font-bold mb-1 flex items-center justify-center gap-1">
                                        <Truck size={12} className="text-primary" /> Active Crews
                                    </div>
                                    <div className="text-2xl font-display font-bold text-gray-900">{stats.crews}</div>
                                </div>
                                <div className="text-center border-l border-gray-100">
                                    <div className="text-[10px] text-gray-400 uppercase font-bold mb-1 flex items-center justify-center gap-1">
                                        <Clock size={12} className="text-primary" /> Avg ETA
                                    </div>
                                    <div className="text-2xl font-display font-bold text-gray-900">{stats.time}m</div>
                                </div>
                            </div>

                            {/* Service Verification List */}
                            <div className="space-y-2 mb-6">
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Local Capabilities</div>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                                    {['Water Extraction', 'Structural Drying', 'Mold Remediation', 'Sewage Cleanup'].map((s, i) => (
                                        <div key={i} className="flex items-center gap-1.5">
                                            <CheckCircle2 size={12} className="text-green-500" />
                                            <span className="text-[11px] font-medium text-gray-600">{s}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-2 gap-3">
                                <a href="tel:8774970007" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-red-600 text-white text-xs font-bold hover:bg-red-700 transition-colors shadow-sm">
                                    <Phone size={14} fill="currentColor" /> Dispatch
                                </a>
                                <a href={loc.url} className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 text-gray-700 text-xs font-bold hover:bg-gray-50 transition-colors bg-white">
                                    Local Site <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>
                        
                        {/* Pointer Arrow */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
                    </div>
                </div>
             );
          })}
        </div>
      </div>
    </div>
  );
};

export default LocationsGrid;