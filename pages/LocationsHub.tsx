
import React, { useState } from 'react';
import Hero from '../components/sections/Hero';
import PageMeta from '../components/ui/PageMeta';
import { LOCATIONS, NEARBY_AREAS } from '../data/locations';
import { LocationsHeroAnimation } from '../components/graphics';
import { Search, MapPin, Phone, Globe, ArrowRight, Navigation } from 'lucide-react';
import Button from '../components/ui/Button';
import ServiceAreaMap from '../components/ui/ServiceAreaMap';
import { LocationData } from '../types';

const LocationsHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Simple filter logic
  const filteredLocations = LOCATIONS.filter(loc => 
    loc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Combine primary and nearby locations for the map
  const mapLocations = [...LOCATIONS, ...NEARBY_AREAS];

  const handleMapLocationSelect = (loc: LocationData) => {
    // 1. Clear search query to ensure the card is visible in the list
    setSearchQuery('');
    
    // 2. Wait a tick for the list to re-render (if it was filtered), then scroll
    setTimeout(() => {
      const id = `loc-${loc.title.replace(/\s+/g, '-').toLowerCase()}`;
      const element = document.getElementById(id);
      
      if (element) {
        const offset = 140; // Account for sticky header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });

        // 3. Highlight animation
        element.classList.add('ring-2', 'ring-primary', 'ring-offset-4', 'scale-[1.02]', 'shadow-lg');
        setTimeout(() => {
          element.classList.remove('ring-2', 'ring-primary', 'ring-offset-4', 'scale-[1.02]', 'shadow-lg');
        }, 1500);
      }
    }, 50);
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta 
        title="Service Areas & Locations" 
        description="Serving Northern Virginia, DC, and Maryland. Rapid response teams stationed in Arlington, Fairfax, Ashburn, and surrounding areas." 
      />

      {/* 1. Hero: Split Layout */}
      <Hero 
        title={<>Serving <span className="text-primary">Northern Virginia</span></>} 
        subtitle="Our rapid response teams are stationed throughout the region to ensure we can reach any emergency within 60 minutes." 
        visual={<LocationsHeroAnimation />}
      />

      {/* 2. Interactive Map & Directory Section */}
      <div className="bg-subtle border-t border-border min-h-screen py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          
          {/* Map Section */}
          <div className="mb-16 md:mb-20">
             <div className="max-w-2xl mx-auto text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Interactive Service Map</h2>
                <p className="text-gray-500">Explore our local hubs across the DMV region.</p>
             </div>
             <ServiceAreaMap 
                locations={mapLocations} 
                onLocationSelect={handleMapLocationSelect} 
             />
          </div>

          {/* Search Header (Google Maps Style) */}
          <div className="max-w-2xl mx-auto mb-12 text-center">
             <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                   <Search size={24} className="text-muted group-focus-within:text-primary transition-colors" />
                </div>
                <input 
                   type="text"
                   placeholder="Filter by city..."
                   className="block w-full pl-16 pr-6 py-5 rounded-full border-2 border-transparent bg-white shadow-google text-lg placeholder-gray-400 focus:outline-none focus:border-primary/30 focus:shadow-lg transition-all"
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                />
             </div>
             <p className="mt-4 text-sm text-muted">
                <span className="text-green-700 font-bold flex items-center justify-center gap-1">
                   <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                   Crews Active Now
                </span> 
                in Fairfax, Arlington, and Alexandria.
             </p>
          </div>

          {/* Grid of "Business Profile" Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
             {filteredLocations.map((loc) => (
                <div 
                  key={loc.title} 
                  id={`loc-${loc.title.replace(/\s+/g, '-').toLowerCase()}`}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-google-hover transition-all duration-300 group flex flex-col scroll-mt-36"
                >
                   {/* Map Snippet Visual */}
                   <div className="h-32 bg-blue-50 relative overflow-hidden">
                      {/* Abstract Map Lines */}
                      <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
                         <path d="M-10 10 L300 80" stroke="#1a73e8" strokeWidth="2" fill="none" />
                         <path d="M-10 40 L300 110" stroke="#1a73e8" strokeWidth="2" fill="none" />
                         <path d="M50 -10 L120 200" stroke="white" strokeWidth="8" fill="none" />
                         <path d="M150 -10 L220 200" stroke="white" strokeWidth="8" fill="none" />
                      </svg>
                      {/* Pin */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white p-2 rounded-full shadow-lg transform group-hover:-translate-y-3 transition-transform duration-300">
                         <MapPin size={20} fill="currentColor" />
                      </div>
                   </div>

                   {/* Content */}
                   <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                         <h3 className="font-display text-xl font-medium text-text">{loc.title}</h3>
                         <span className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">
                            Open 24h
                         </span>
                      </div>
                      <p className="text-sm text-muted mb-6">Water Damage Restoration</p>

                      {/* Action Chips */}
                      <div className="mt-auto flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                         {loc.url ? (
                            <a href={loc.url} className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-primary hover:bg-blue-50 transition-colors whitespace-nowrap">
                               <Globe size={16} /> Website
                            </a>
                         ) : (
                            <span className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-100 text-sm font-medium text-gray-400 cursor-not-allowed whitespace-nowrap">
                               <Globe size={16} /> Coming Soon
                            </span>
                         )}
                         <a href="tel:8774970007" className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-text hover:bg-gray-50 transition-colors whitespace-nowrap">
                            <Phone size={16} /> Call
                         </a>
                      </div>
                   </div>
                </div>
             ))}
          </div>

          {/* Empty State */}
          {filteredLocations.length === 0 && (
             <div className="text-center py-20">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-muted">
                   <Navigation size={32} />
                </div>
                <h3 className="text-lg font-medium text-text">No location found</h3>
                <p className="text-muted">We serve the entire NoVA region. Call us to verify your zip code.</p>
                <Button href="tel:8774970007" variant="text" className="mt-2">
                   Call (877) 497-0007
                </Button>
             </div>
          )}

          {/* "Nearby" Text List */}
          <div className="mt-20 pt-10 border-t border-gray-200">
             <h3 className="text-sm font-bold text-muted uppercase tracking-wider mb-6">Also Serving Nearby Areas</h3>
             <div className="flex flex-wrap gap-4">
                {NEARBY_AREAS.map((area) => (
                   <span key={area.title} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-sm text-muted border border-gray-200">
                      {area.title}
                   </span>
                ))}
             </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default LocationsHub;
