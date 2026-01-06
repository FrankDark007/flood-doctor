import React from 'react';
import { Phone, MapPin, Activity, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

const HeroDashboard: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full bg-slate-900 text-white flex flex-col overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Header Bar */}
      <header className="relative z-10 w-full border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="font-bold text-xl tracking-wider">FLOOD DOCTOR</div>
          <div className="h-4 w-px bg-slate-600 mx-2"></div>
          <div className="flex items-center gap-2 text-xs font-mono text-green-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            SYSTEM STATUS: OPERATIONAL
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xs text-slate-400 font-mono">
          <span>LIC #2705155505</span>
          <span>•</span>
          <span>UPDATED: JUST NOW</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center p-4 md:p-8">
        
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-5xl mb-12">
          
          {/* Card 1: Active Crews (Map Visualization) */}
          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 relative overflow-hidden group hover:border-slate-600 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-slate-400 text-xs font-mono uppercase tracking-widest">Active Crews</h3>
              <Activity className="w-4 h-4 text-blue-400" />
            </div>
            <div className="relative h-32 md:h-40 w-full bg-slate-900/50 rounded-xl border border-slate-700/50 flex items-center justify-center">
              {/* Abstract Map Shape */}
              <svg viewBox="0 0 200 100" className="w-full h-full opacity-30 stroke-slate-500 fill-none" strokeWidth="1">
                <path d="M20,50 Q60,10 100,50 T180,50" />
                <path d="M40,80 Q90,30 140,80" />
              </svg>
              {/* Crew Dots */}
              <div className="absolute top-1/3 left-1/4">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping absolute opacity-75"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full relative border-2 border-slate-900"></div>
              </div>
              <div className="absolute top-1/2 right-1/3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping absolute opacity-75 delay-300"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full relative border-2 border-slate-900"></div>
              </div>
              <div className="absolute bottom-1/4 right-1/4">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping absolute opacity-75 delay-700"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full relative border-2 border-slate-900"></div>
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white">4</span>
              <span className="text-sm text-slate-400">crews currently deployed</span>
            </div>
          </div>

          {/* Card 2: Response Metric */}
          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 flex flex-col justify-between group hover:border-slate-600 transition-colors">
            <div className="flex justify-between items-start">
              <h3 className="text-slate-400 text-xs font-mono uppercase tracking-widest">Avg Response Time</h3>
              <Zap className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="flex items-center gap-6 mt-4">
              <div className="relative w-24 h-24 flex items-center justify-center">
                {/* SVG Gauge */}
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path className="text-slate-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                  <path className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" strokeDasharray="78, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
                <span className="absolute text-xl font-bold">47m</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-sm text-slate-300">Currently faster than</div>
                <div className="text-xs text-slate-500">60m Guarantee</div>
                <div className="h-1 w-full bg-slate-700 rounded-full mt-2 overflow-hidden">
                   <div className="h-full bg-green-400 w-3/4"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Service Areas */}
          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 group hover:border-slate-600 transition-colors">
             <div className="flex justify-between items-start mb-4">
              <h3 className="text-slate-400 text-xs font-mono uppercase tracking-widest">Coverage Status</h3>
              <MapPin className="w-4 h-4 text-purple-400" />
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between items-center p-2 bg-slate-900/50 rounded hover:bg-slate-900 transition-colors cursor-default">
                <span>Fairfax</span>
                <span className="flex items-center gap-2 text-green-400"><CheckCircle className="w-3 h-3" /> Available</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-900/50 rounded hover:bg-slate-900 transition-colors cursor-default">
                <span>Arlington</span>
                <span className="flex items-center gap-2 text-green-400"><CheckCircle className="w-3 h-3" /> Available</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-900/50 rounded hover:bg-slate-900 transition-colors cursor-default">
                <span>Alexandria</span>
                <span className="flex items-center gap-2 text-yellow-400"><AlertTriangle className="w-3 h-3" /> High Demand</span>
              </div>
            </div>
          </div>

          {/* Card 4: Quick Connect */}
          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden">
             <div className="absolute inset-0 bg-blue-600/10 animate-pulse-slow pointer-events-none"></div>
             <div>
               <h3 className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-1">Emergency Line</h3>
               <div className="text-3xl lg:text-4xl font-bold tracking-tight text-white">(877) 497-0007</div>
             </div>
             <a 
               href="tel:8774970007"
               className="mt-6 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(37,99,235,0.4)]"
             >
               <Phone className="w-5 h-5 animate-pulse" />
               CONNECT NOW
             </a>
          </div>

        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 max-w-4xl mx-auto">
          Enterprise-Grade Restoration. <br/>
          <span className="text-white">Deployed in Minutes.</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroDashboard;