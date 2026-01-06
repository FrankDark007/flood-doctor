import React from 'react';
import { serviceLocations, getProximityColor } from '../constants';
import { Navigation, MapPin } from 'lucide-react';
import { Proximity } from '../types';

export const ServiceAreaRadial: React.FC = () => {
  // Group cities by proximity to place them on rings
  const rings: Record<Proximity, typeof serviceLocations> = {
    'Closest': serviceLocations.filter(c => c.proximity === 'Closest'),
    'Near': serviceLocations.filter(c => c.proximity === 'Near'),
    'Mid': serviceLocations.filter(c => c.proximity === 'Mid'),
    'Farthest': serviceLocations.filter(c => c.proximity === 'Farthest'),
  };

  // Ring configuration
  const ringConfig = {
    'Closest': { radius: 140, label: '< 60m' },
    'Near': { radius: 240, label: '< 70m' },
    'Mid': { radius: 340, label: '< 75m' },
    'Farthest': { radius: 440, label: '< 80m' },
  };

  return (
    <section className="py-12 bg-slate-900 overflow-hidden min-h-[900px] flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-900 z-0"></div>
      
      <div className="text-center z-10 mb-8 relative">
        <h2 className="text-3xl font-bold text-white">Coverage Radius</h2>
        <p className="text-slate-400 mt-2">Distance from our central dispatch HQ</p>
      </div>

      <div className="relative w-[900px] h-[900px] flex items-center justify-center scale-50 sm:scale-75 md:scale-90 lg:scale-100 transition-transform duration-500">
        
        {/* Central HQ */}
        <div className="absolute z-50 w-24 h-24 bg-blue-600 rounded-full flex flex-col items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.5)] border-4 border-slate-800 animate-pulse">
          <Navigation className="w-8 h-8 text-white mb-1" />
          <span className="text-xs font-bold text-blue-100">HQ</span>
        </div>

        {/* Render Rings */}
        {(Object.keys(rings) as Proximity[]).map((zone, index) => {
          const config = ringConfig[zone];
          const cities = rings[zone];
          const cityCount = cities.length;
          
          return (
            <div 
              key={zone}
              className="absolute rounded-full border border-slate-700/50 flex items-center justify-center"
              style={{ 
                width: `${config.radius * 2}px`, 
                height: `${config.radius * 2}px`,
                zIndex: 40 - index * 10
              }}
            >
              {/* Ring Label */}
              <div className="absolute top-4 bg-slate-800 text-slate-400 text-xs px-2 py-1 rounded-full border border-slate-700">
                {config.label}
              </div>

              {/* Cities on the ring */}
              {cities.map((city, i) => {
                // Distribute evenly around the circle
                // We add a slight offset per ring to stagger them visually
                const angle = (i * (360 / cityCount)) + (index * 45); 
                const colorClass = getProximityColor(city.proximity);
                
                return (
                  <div
                    key={city.id}
                    className="absolute group"
                    style={{
                      transform: `rotate(${angle}deg) translate(${config.radius}px) rotate(-${angle}deg)`
                    }}
                  >
                    <a href={`/${city.slug}/`} className="relative flex items-center justify-center">
                      <div className={`w-4 h-4 rounded-full ${colorClass.split(' ')[0].replace('bg-', 'bg-')} ring-4 ring-slate-900 group-hover:scale-150 transition-transform duration-300`}></div>
                      
                      {/* Tooltip Card */}
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-48 bg-slate-800 border border-slate-700 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto z-50 shadow-xl">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-white">{city.name}</span>
                          <MapPin className="w-3 h-3 text-slate-400" />
                        </div>
                        <div className="text-xs text-slate-400 mb-2">{city.region}</div>
                        <div className={`text-xs inline-block px-1.5 py-0.5 rounded ${colorClass}`}>
                          {city.responseTime}
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Decorative Radar Sweep */}
        <div className="absolute w-[880px] h-[880px] rounded-full bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-[spin_8s_linear_infinite] pointer-events-none opacity-30"></div>
      </div>
      
      <div className="absolute bottom-8 flex gap-4 text-xs text-slate-400">
         <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-emerald-400 mr-2"></div> Closest</div>
         <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-lime-400 mr-2"></div> Near</div>
         <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div> Mid</div>
         <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-orange-400 mr-2"></div> Farthest</div>
      </div>
    </section>
  );
};