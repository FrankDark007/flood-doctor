import React, { useState } from 'react';
import { Search, MapPin, Clock, Loader2, Phone, Shield, Star, Users } from 'lucide-react';

const HeroInteractive: React.FC = () => {
  const [zipCode, setZipCode] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [result, setResult] = useState<{ city: string; time: number } | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.length < 5) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      const cities = ['Fairfax', 'Arlington', 'Alexandria', 'McLean', 'Vienna'];
      const randomCity = cities[parseInt(zipCode.charAt(0)) % cities.length] || 'Northern Virginia';
      const randomTime = Math.floor(Math.random() * (65 - 35 + 1)) + 35;
      
      setResult({ city: randomCity, time: randomTime });
      setStatus('success');
    }, 1500);
  };

  return (
    <section className="relative min-h-screen w-full bg-white flex items-center justify-center p-6 overflow-hidden">
      
      {/* Background Map Decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none scale-150 origin-center">
         <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full text-slate-900" strokeWidth="0.5">
           <path d="M20,20 Q50,10 80,30 T90,80 Q50,90 20,60 T20,20" />
           <path d="M30,30 L70,70 M70,30 L30,70" opacity="0.5" />
         </svg>
      </div>

      <div className="relative z-10 w-full max-w-xl mx-auto text-center">
        
        {/* Header */}
        <div className="mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Clock className="w-4 h-4" /> 24/7 Emergency Service
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            How fast can we<br/> get there?
          </h1>
          <p className="text-lg text-slate-500">
            Enter your zip code to see live crew availability and estimated response time.
          </p>
        </div>

        {/* Interactive Card */}
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-2 md:p-3 relative overflow-hidden transition-all duration-500 animate-fade-in delay-100">
          
          {status === 'success' && result ? (
             <div className="p-8 bg-blue-50 rounded-2xl animate-fade-in">
               <div className="flex flex-col items-center">
                 <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                   <MapPin className="w-8 h-8" />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-1">Results for {result.city}</h3>
                 <p className="text-slate-500 mb-6 flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                   Crews available in your area
                 </p>
                 
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 w-full mb-6">
                   <div className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-2">Estimated Arrival</div>
                   <div className="text-5xl font-bold text-blue-600">{result.time} <span className="text-2xl text-slate-400 font-medium">min</span></div>
                 </div>

                 <a 
                   href="tel:8774970007"
                   className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                 >
                   <Phone className="w-5 h-5" />
                   Call Now to Dispatch
                 </a>
                 <button 
                   onClick={() => { setStatus('idle'); setZipCode(''); }}
                   className="mt-4 text-sm text-slate-400 hover:text-slate-600 underline"
                 >
                   Check another zip code
                 </button>
               </div>
             </div>
          ) : (
            <div className="p-4 md:p-8">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Enter 5-digit ZIP"
                  className="w-full h-16 pl-6 pr-36 bg-slate-50 border-2 border-slate-100 rounded-full text-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  maxLength={5}
                />
                <button
                  type="submit"
                  disabled={zipCode.length < 5 || status === 'loading'}
                  className="absolute right-2 top-2 h-12 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>Check <Search className="w-4 h-4" /></>
                  )}
                </button>
              </form>
              <div className="mt-4 text-xs text-slate-400">
                *Average response time based on current traffic conditions
              </div>
            </div>
          )}
        </div>

        {/* Trust Stats Fallback */}
        {status === 'idle' && (
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in delay-200">
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                 <Clock className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <div className="text-lg font-bold text-slate-900">60m</div>
              <div className="text-xs text-slate-500 font-medium">Fast Response</div>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                 <Users className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <div className="text-lg font-bold text-slate-900">5k+</div>
              <div className="text-xs text-slate-500 font-medium">Jobs Done</div>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                 <Star className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <div className="text-lg font-bold text-slate-900">4.9/5</div>
              <div className="text-xs text-slate-500 font-medium">Top Rated</div>
            </div>
             <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                 <Shield className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <div className="text-lg font-bold text-slate-900">20yr</div>
              <div className="text-xs text-slate-500 font-medium">Experience</div>
            </div>
          </div>
        )}

        {/* Secondary Call Action */}
        {status === 'idle' && (
          <div className="mt-8 animate-fade-in delay-300">
            <a href="tel:8774970007" className="text-slate-500 hover:text-blue-600 font-medium transition-colors">
              Or call immediately: <span className="font-bold underline decoration-2 underline-offset-4">(877) 497-0007</span>
            </a>
          </div>
        )}

      </div>
    </section>
  );
};

export default HeroInteractive;