import React from 'react';
import { Phone, Award, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

const HeroMagazine: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full bg-white bg-noise flex flex-col justify-center p-6 md:p-12 lg:p-24 overflow-hidden">
      
      {/* Trust Pills - Scattered */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12 animate-fade-in delay-100">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase text-slate-800 border border-slate-200">
          <Award className="w-4 h-4 text-blue-600" />
          IICRC Certified
        </span>
      </div>
      
      <div className="absolute top-8 right-8 md:top-12 md:right-12 animate-fade-in delay-200 hidden md:block">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase text-slate-800 border border-slate-200">
          <Clock className="w-4 h-4 text-blue-600" />
          60-Min Response
        </span>
      </div>

      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 animate-fade-in delay-300 hidden md:block">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase text-slate-800 border border-slate-200">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
          Licensed #2705155505
        </span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Pull Quote */}
        <p className="font-serif italic text-slate-500 text-lg md:text-2xl mb-6 md:mb-8 animate-fade-in">
          "The only call you need to make."
        </p>

        {/* Massive Headline */}
        <h1 className="text-5xl md:text-8xl lg:text-9xl leading-[0.9] md:leading-[0.85] tracking-tighter text-slate-900 mb-12 animate-fade-in delay-100">
          <span className="block font-light">We Make</span>
          <span className="block font-black">Water Damage</span>
          <span className="block font-serif italic text-blue-600 transform translate-x-4 md:translate-x-12">
            Disappear
          </span>
        </h1>

        {/* Floating Images (Decorative) */}
        <div className="absolute top-[10%] right-[5%] md:right-[15%] w-24 h-24 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl animate-float hidden md:block opacity-90 rotate-3 hover:scale-110 transition-transform duration-500">
          <img 
            src="https://picsum.photos/400/400?random=1" 
            alt="Water restoration technician" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute bottom-[20%] right-[10%] w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl animate-float hidden md:block opacity-80 -rotate-6 delay-700 hover:scale-110 transition-transform duration-500" style={{ animationDelay: '1s' }}>
          <img 
            src="https://picsum.photos/400/400?random=2" 
            alt="Drywall drying" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Minimal CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 animate-fade-in delay-300">
          <a 
            href="tel:8774970007" 
            className="group flex items-center gap-4 text-2xl md:text-4xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
          >
            <span>(877) 497-0007</span>
            <span className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-blue-600 text-white group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 md:w-7 md:h-7" />
            </span>
          </a>
          <div className="h-px w-12 bg-slate-300 hidden md:block"></div>
          <a href="#services" className="text-slate-500 hover:text-slate-900 font-medium flex items-center gap-2 group">
            Explore Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-px bg-slate-100 hidden lg:block"></div>
    </section>
  );
};

export default HeroMagazine;