import React from 'react';
import { Star, ArrowRight, Quote, Shield } from 'lucide-react';

const HeroTestimonial: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center p-6 md:p-12 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>
      <Quote className="absolute top-20 left-4 md:left-20 text-slate-100 w-40 h-40 md:w-80 md:h-80 -z-10 rotate-12" strokeWidth={1} fill="currentColor" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm rounded-full px-4 py-2 mb-8 animate-fade-in">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
          </div>
          <span className="text-sm font-semibold text-slate-700">4.9/5 from 847 reviews</span>
        </div>

        {/* Main Quote */}
        <blockquote className="animate-fade-in delay-100">
          <p className="text-3xl md:text-5xl lg:text-6xl font-serif italic font-medium text-slate-900 leading-tight mb-8">
            "They saved our home. Arrived in 40 minutes, worked through the night, and handled everything with our insurance."
          </p>
        </blockquote>

        {/* Customer Profile */}
        <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in delay-200">
          <img 
            src="https://picsum.photos/100/100?random=3" 
            alt="Sarah M." 
            className="w-16 h-16 rounded-full border-2 border-white shadow-lg object-cover"
          />
          <div className="text-left">
            <div className="font-bold text-slate-900">Sarah Jenkins</div>
            <div className="text-slate-500 text-sm">Homeowner • McLean, VA</div>
          </div>
        </div>

        <div className="w-24 h-px bg-slate-200 mx-auto mb-12"></div>

        {/* Secondary Headline & CTAs */}
        <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-8 animate-fade-in delay-300">
          Join 5,000+ Northern Virginia families who trust Flood Doctor.
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-300">
          <a 
            href="tel:8774970007" 
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
          >
            <Shield className="w-5 h-5" />
            Get Emergency Help
          </a>
          <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-full font-bold shadow-lg transition-all hover:-translate-y-1 text-lg flex items-center justify-center gap-2 group">
            Read More Stories
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* As Featured On */}
        <div className="mt-16 pt-8 border-t border-slate-200/60 animate-fade-in delay-500 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">Top Rated On</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <span className="font-bold text-slate-600 text-lg">Google</span>
            <span className="font-bold text-slate-600 text-lg">Angie's List</span>
            <span className="font-bold text-slate-600 text-lg">BBB A+</span>
            <span className="font-bold text-slate-600 text-lg">HomeAdvisor</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTestimonial;