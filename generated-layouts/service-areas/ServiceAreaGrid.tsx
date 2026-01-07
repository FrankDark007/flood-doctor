import React from 'react';
import { serviceLocations, getProximityColor } from './constants';
import { Clock, MapPin, ArrowRight } from 'lucide-react';

export const ServiceAreaGrid: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Service Coverage</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Rapid response across Northern Virginia, DC, and Maryland.
            Check our estimated arrival times for your location.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceLocations.map((city) => {
            const colorClass = getProximityColor(city.proximity);
            
            return (
              <a 
                key={city.id} 
                href={`/${city.slug}/`}
                className="group relative block p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 rounded-lg ${colorClass.split(' ')[0]}`}>
                    <MapPin className={`w-5 h-5 ${colorClass.split(' ')[1]}`} />
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClass}`}>
                    {city.proximity}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {city.name}
                </h3>
                <p className="text-sm text-slate-500 mb-4">{city.region}</p>

                <div className="flex items-center text-sm text-slate-600 pt-4 border-t border-slate-100">
                  <Clock className="w-4 h-4 mr-2 text-slate-400" />
                  <span className="font-medium">{city.responseTime}</span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-200">
                     <ArrowRight className="w-4 h-4 text-blue-500" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};