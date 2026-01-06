import React from 'react';
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

const HeroComparison: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row">
      
      {/* Common Headline Overlay - Absolute positioned to span both */}
      <div className="absolute top-8 left-0 right-0 z-30 text-center pointer-events-none px-4">
        <FadeIn delay={800} direction="down" className="inline-block">
          <div className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full border border-slate-200 shadow-xl pointer-events-auto">
             <span className="text-xs md:text-sm font-bold tracking-wider text-slate-800 uppercase flex items-center gap-2">
               From Disaster <ArrowRight className="w-4 h-4 text-blue-600" /> To Restored
             </span>
          </div>
        </FadeIn>
      </div>

      {/* Left Side: The Problem (Dark/Urgent) */}
      <div className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen bg-slate-900 flex flex-col justify-center items-center lg:items-end p-8 lg:p-16 border-b-4 lg:border-b-0 lg:border-r-4 border-slate-800">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1582281298055-e25b84a30b0e?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900 opacity-90"></div>
        
        <div className="relative z-10 max-w-md text-center lg:text-right w-full">
          <FadeIn delay={100} direction="right">
            <div className="inline-flex items-center gap-2 text-red-400 font-bold tracking-widest text-sm mb-4 justify-center lg:justify-end w-full">
              <XCircle className="w-4 h-4" /> THE RISKS
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">$10,847</h2>
            <p className="text-slate-400 text-sm mb-8">Avg. cost of untreated water damage</p>
          </FadeIn>
          
          <ul className="space-y-4 text-slate-300">
            <FadeIn as="li" delay={300} direction="right" className="flex items-center gap-3 justify-center lg:justify-end">
              <span>Mold growth in 24-48 hours</span>
              <XCircle className="w-5 h-5 text-red-500 shrink-0" />
            </FadeIn>
            <FadeIn as="li" delay={400} direction="right" className="flex items-center gap-3 justify-center lg:justify-end">
              <span>Structural Weakness</span>
              <XCircle className="w-5 h-5 text-red-500 shrink-0" />
            </FadeIn>
            <FadeIn as="li" delay={500} direction="right" className="flex items-center gap-3 justify-center lg:justify-end">
              <span>Long-term Health Hazards</span>
              <XCircle className="w-5 h-5 text-red-500 shrink-0" />
            </FadeIn>
          </ul>
        </div>
      </div>

      {/* Divider Icon */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-2xl border-4 border-slate-100">
        <ArrowRight className="w-6 h-6 text-blue-600 animate-pulse" />
      </div>

      {/* Right Side: The Solution (Light/Hopeful) */}
      <div className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen bg-slate-50 flex flex-col justify-center items-center lg:items-start p-8 lg:p-16">
        <div className="relative z-10 max-w-md text-center lg:text-left w-full">
          <FadeIn delay={200} direction="left">
            <div className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-widest text-sm mb-4 justify-center lg:justify-start w-full">
              <CheckCircle className="w-4 h-4" /> THE SOLUTION
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">Restored Fast.</h2>
            <p className="text-slate-500 text-sm mb-8">Professional, Licensed, Guaranteed.</p>
          </FadeIn>
          
          <ul className="space-y-4 text-slate-700 mb-10">
            <FadeIn as="li" delay={400} direction="left" className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="bg-green-100 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-green-600" /></div>
              <span className="font-medium">60-minute emergency response</span>
            </FadeIn>
            <FadeIn as="li" delay={500} direction="left" className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="bg-green-100 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-green-600" /></div>
              <span className="font-medium">Direct insurance billing</span>
            </FadeIn>
            <FadeIn as="li" delay={600} direction="left" className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="bg-green-100 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-green-600" /></div>
              <span className="font-medium">IICRC Certified Technicians</span>
            </FadeIn>
          </ul>

          <FadeIn delay={700} direction="up" className="flex flex-col gap-4">
            <a 
              href="tel:8774970007" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-4 px-8 rounded-full shadow-xl shadow-blue-600/20 hover:shadow-2xl transition-all hover:-translate-y-1 text-center"
            >
              (877) 497-0007
            </a>
            <button className="text-slate-500 font-medium hover:text-blue-600 transition-colors text-sm">
              Request Free Assessment →
            </button>
          </FadeIn>
        </div>
      </div>

    </section>
  );
};

export default HeroComparison;