
import React, { useState, useEffect } from 'react';
import PageMeta from '../components/ui/PageMeta';
import Button from '../components/ui/Button';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { LOCATIONS } from '../data/locations';

const NearMeLanding: React.FC = () => {
  const [nearestCity, setNearestCity] = useState<string>('Northern Virginia');
  const [eta, setEta] = useState<number>(60);
  const [sortedLocations, setSortedLocations] = useState(LOCATIONS);
  const [loadingLoc, setLoadingLoc] = useState(true);

  // Haversine formula to calculate distance
  const getDistanceFromLatLonInKm = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const d = R * c; // Distance in km
    return d;
  }

  const deg2rad = (deg: number) => {
    return deg * (Math.PI/180);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;

          // Calculate distances and sort
          const locationsWithDistance = LOCATIONS.map(loc => {
            if (!loc.lat || !loc.lng) return { ...loc, distance: 9999 };
            return {
              ...loc,
              distance: getDistanceFromLatLonInKm(userLat, userLng, loc.lat, loc.lng)
            };
          });

          const sorted = locationsWithDistance.sort((a, b) => a.distance - b.distance);
          setSortedLocations(sorted);

          // Update Hero if close enough (e.g. < 50km)
          if (sorted[0].distance < 50) {
             setNearestCity(sorted[0].title);
             // Fake dynamic ETA based on distance (base 10m + 1.5m per km)
             const calcEta = Math.max(12, Math.floor(10 + (sorted[0].distance * 1.2)));
             setEta(calcEta);
          }
          setLoadingLoc(false);
        },
        (error) => {
          console.log("Geolocation blocked or failed", error);
          setLoadingLoc(false); // Fallback to default
        }
      );
    } else {
      setLoadingLoc(false);
    }
  }, []);

  return (
    <main className="flex-grow bg-white">
      <PageMeta 
        title="Water Damage Restoration Near Me | 24/7 Emergency Service" 
        description="Looking for water damage restoration near you? Flood Doctor arrives in 60 minutes or less. Licensed, insured, and top-rated in Northern Virginia." 
      />
      
      <div className="bg-white pt-12 pb-20 border-b border-gray-100">
         <div className="max-w-4xl mx-auto px-4 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-bold uppercase tracking-wide mb-6">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 Crews Available Now
             </div>
             
             <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
                 Water Damage Restoration <br/>
                 <span className="text-primary">
                    {loadingLoc ? 'Near You' : `in ${nearestCity}`}
                 </span>
             </h1>
             
             <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                 {loadingLoc 
                    ? "We are your local emergency response team. Arriving at your doorstep in Northern Virginia within 60 minutes."
                    : `We found a crew nearby. We can be at your door in approximately ${eta} minutes.`
                 }
             </p>
             
             <div className="hidden md:flex flex-col sm:flex-row justify-center gap-4">
                 <Button to="/request/" variant="primary" className="h-14 px-8 text-lg">
                    Request Service
                 </Button>
                 <Button href="tel:8774970007" variant="secondary" className="h-14 px-8 text-lg">
                    Call (877) 497-0007
                 </Button>
             </div>
         </div>
      </div>

      <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="bg-white p-8 rounded-2xl shadow-sm">
                      <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                          <Clock size={24} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{eta} Minute Response</h3>
                      <p className="text-gray-600">Our trucks are fully loaded and stationed locally for rapid deployment.</p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-sm">
                      <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                          <MapPin size={24} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Experts</h3>
                      <p className="text-gray-600">We know the local building codes, climate, and common housing issues in {nearestCity}.</p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-sm">
                      <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                          <Phone size={24} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Live Support</h3>
                      <p className="text-gray-600">Speak directly to a project manager, not an answering service.</p>
                  </div>
              </div>

              <div className="mt-20">
                  <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">Service Areas By Distance</h2>
                  <div className="flex flex-wrap justify-center gap-4">
                      {sortedLocations.map((loc, i) => (
                          <a 
                            key={loc.title} 
                            href={loc.url || '#'}
                            className={`px-4 py-2 rounded-lg text-sm border flex items-center gap-2 transition-all ${i < 3 ? 'bg-white border-blue-200 text-primary font-medium shadow-sm' : 'bg-white border-gray-200 text-gray-600 opacity-80'}`}
                          >
                              {i === 0 && <Navigation size={12} className="fill-current" />}
                              {loc.title}
                          </a>
                      ))}
                  </div>
              </div>
          </div>
      </div>
    </main>
  );
};

export default NearMeLanding;
