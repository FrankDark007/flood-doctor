import React from 'react';
import { serviceLocations } from './constants';
import { MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { Region } from './types';

export const ServiceAreaList: React.FC = () => {
  const regions: Region[] = ['Northern VA', 'Washington DC', 'Maryland'];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Regions Served</h2>
            <p className="mt-2 text-slate-600">Complete list of our active service zones organized by region.</p>
          </div>
          <div className="flex items-center text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
             <ShieldCheck className="w-5 h-5 mr-2" />
             <span className="text-sm font-semibold">Licensed & Insured in all regions</span>
          </div>
        </div>

        <div className="space-y-12">
          {regions.map((region) => {
             const regionCities = serviceLocations.filter(city => city.region === region);
             
             if (regionCities.length === 0) return null;

             return (
               <div key={region} className="relative">
                 <div className="flex items-center mb-6">
                   <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
                   <h3 className="text-2xl font-bold text-slate-800">{region}</h3>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {regionCities.map((city) => (
                     <a 
                        key={city.id} 
                        href={`/${city.slug}/`}
                        className="group flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-sm transition-all duration-200"
                     >
                       <div className="flex items-center">
                         <div className="p-2 bg-white rounded-md text-slate-400 group-hover:text-blue-500 transition-colors shadow-sm mr-3">
                            <MapPin className="w-4 h-4" />
                         </div>
                         <div>
                            <span className="font-semibold text-slate-700 group-hover:text-slate-900 block">
                              {city.name}
                            </span>
                            <span className="text-xs text-slate-500">
                              {city.responseTime} est.
                            </span>
                         </div>
                       </div>
                       <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-5px] group-hover:translate-x-0" />
                     </a>
                   ))}
                 </div>
               </div>
             )
          })}
        </div>
      </div>
    </section>
  );
};