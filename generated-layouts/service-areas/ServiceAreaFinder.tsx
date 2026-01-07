import React, { useState, useMemo } from 'react';
import { serviceLocations, getProximityColor } from './constants';
import { Search, MapPin, Navigation, ArrowRight, X } from 'lucide-react';

export const ServiceAreaFinder: React.FC = () => {
  const [query, setQuery] = useState('');
  
  const filteredCities = useMemo(() => {
    if (!query) return [];
    const lowerQ = query.toLowerCase();
    return serviceLocations.filter(city => 
      city.name.toLowerCase().includes(lowerQ) || 
      city.region.toLowerCase().includes(lowerQ)
    );
  }, [query]);

  const popularCities = serviceLocations.filter(c => c.proximity === 'Closest' || c.proximity === 'Near').slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-[600px] flex flex-col items-center">
      <div className="w-full max-w-4xl px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Do we cover your area?</h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
          Enter your city or region to check availability and estimated response times instantly.
        </p>

        <div className="relative max-w-2xl mx-auto mb-12">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-slate-400" />
          </div>
          <input
            type="text"
            className="w-full pl-12 pr-12 py-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-400 text-lg focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:bg-white/20 transition-all shadow-xl"
            placeholder="Search city (e.g., Arlington, Reston)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Results Area */}
        <div className="transition-all duration-300 ease-in-out">
          {query ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {filteredCities.length > 0 ? (
                filteredCities.map(city => {
                   const colorClass = getProximityColor(city.proximity);
                   return (
                    <a key={city.id} href={`/${city.slug}/`} className="bg-white rounded-xl p-5 flex items-center justify-between hover:bg-blue-50 transition-colors group">
                      <div className="flex items-center">
                        <div className={`p-3 rounded-full mr-4 ${colorClass.split(' ')[0]}`}>
                           <MapPin className={`w-6 h-6 ${colorClass.split(' ')[1]}`} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 flex items-center">
                            {city.name}
                            <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full border border-green-200">Covered</span>
                          </h4>
                          <p className="text-slate-500 text-sm mt-0.5">{city.region} • {city.responseTime}</p>
                        </div>
                      </div>
                      <div className="text-slate-300 group-hover:text-blue-500 transition-colors">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    </a>
                   );
                })
              ) : (
                <div className="col-span-full text-center py-8 bg-white/5 rounded-xl border border-white/10">
                   <p className="text-slate-300">No exact match found for "{query}".</p>
                   <p className="text-slate-500 text-sm mt-2">Try searching for a major nearby city or region.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-6">Popular Locations</p>
              <div className="flex flex-wrap justify-center gap-3">
                {popularCities.map(city => (
                  <button
                    key={city.id}
                    onClick={() => setQuery(city.name)}
                    className="flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all"
                  >
                    <Navigation className="w-3 h-3 mr-2 text-blue-400" />
                    {city.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};