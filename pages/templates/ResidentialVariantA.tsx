
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../../components/ui/PageMeta';
import { ChevronDown, ChevronRight, Star, Shield, Clock, FileCheck } from 'lucide-react';

// --- VISUAL ASSETS & DATA ---

const GOOGLE_COLORS = {
  blue: '#1a73e8',
  green: '#1e8e3e',
  yellow: '#fbbc04',
  red: '#ea4335',
  text: '#202124',
  textLight: '#5f6368',
  bgBlue: '#e8f0fe',
  bgGreen: '#e6f4ea',
  bgYellow: '#fef7e0',
};

// --- COMPONENTS ---

const ResidentialVariantA: React.FC = () => {
  // --- HERO ANIMATION STATE ---
  const [heroSlide, setHeroSlide] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!heroPaused) {
        setHeroSlide((prev) => (prev === 0 ? 1 : 0));
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [heroPaused]);

  // --- CAROUSEL ANIMATION STATE ---
  const [activeStep, setActiveStep] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const steps = [
    { title: "Job Progress Updates", desc: "Receive daily updates with photos showing extraction progress, equipment placement, and moisture readings." },
    { title: "Insurance Documentation", desc: "We photograph all damage, compile detailed scope reports, and communicate directly with your adjuster." },
    { title: "Direct Project Manager Access", desc: "Your dedicated project manager answers questions, schedules appointments, and coordinates every phase." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!carouselPaused) {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselPaused]);

  // --- FAQ STATE ---
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const toggleFaq = (idx: number) => setFaqOpen(faqOpen === idx ? null : idx);

  const faqs = [
    { q: "How fast can you respond to a water damage emergency?", a: "Our Rapid Response Teams arrive within 60 minutes for emergency water damage calls throughout Northern Virginia, Maryland, and Washington DC. We dispatch 24 hours a day, 7 days a week, including holidays." },
    { q: "How much does water damage restoration cost?", a: "Water damage restoration typically costs between $1,500 and $15,000 depending on the size of the affected area, water category, and extent of structural damage. Most sudden water damage is covered by homeowners insurance." },
    { q: "Will my homeowners insurance cover water damage?", a: "Most homeowners policies cover sudden, accidental water damage from burst pipes, appliance failures, and storm damage. Gradual leaks and flood damage from rising water typically require separate coverage." },
    { q: "How long does the drying process take?", a: "Structural drying typically takes 3-5 days depending on the water volume, materials affected, and humidity levels. We monitor moisture content daily with professional meters." },
  ];

  return (
    <main className="bg-white font-sans text-[#202124]">
      <PageMeta 
        title="Residential Water Damage Restoration" 
        description="60-minute emergency response for water damage in Northern Virginia. Licensed, insured, and Google Guaranteed." 
      />

      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="max-w-[1296px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Content */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <h1 className="text-[40px] lg:text-[60px] leading-[1.1] font-normal mb-6 tracking-tight text-[#202124]">
                <span className="font-bold text-[#1a73e8]">Water Damage</span> Restoration
              </h1>
              <p className="text-lg lg:text-[18px] leading-[28px] text-[#3c4043] mb-8">
                Turn a water emergency into a quick recovery with Flood Doctor's 60-minute response guarantee. We serve Northern Virginia, DC, and Maryland 24/7 with professional water extraction, structural drying, and complete restoration.
              </p>
              <div>
                <Link to="/request/" className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-[#1a73e8] text-white font-medium hover:bg-[#1557b0] transition-colors shadow-sm">
                  Get Help Now
                </Link>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-6 relative flex justify-center items-center min-h-[500px]">
              
              {/* Orbiting Dots SVG */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
                <svg width="500" height="500" viewBox="0 0 500 500" className="animate-[spin_60s_linear_infinite]">
                   <circle cx="250" cy="250" r="220" stroke="#dadce0" strokeWidth="2" strokeDasharray="4 12" fill="none" />
                   <circle cx="250" cy="30" r="8" fill="#34a853" />
                   <circle cx="250" cy="470" r="8" fill="#fbbc04" />
                </svg>
              </div>

              {/* Phone Container */}
              <div className="relative w-[300px] h-[500px] bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.12)] overflow-hidden z-10">
                
                {/* Slide 1: Business Profile */}
                <div className={`absolute inset-0 transition-opacity duration-700 ${heroSlide === 0 ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
                   {/* Phone Header Image */}
                   <div className="h-32 bg-blue-50 flex items-center justify-center">
                      <Shield size={48} className="text-[#1a73e8]" />
                   </div>
                   <div className="p-4">
                      <h3 className="text-lg font-medium text-[#202124]">Flood Doctor</h3>
                      <div className="flex items-center gap-1 text-sm mt-1">
                        <span className="font-bold">4.9</span>
                        <div className="flex text-[#fbbc04]"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                        <span className="text-gray-500">(127)</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Water Damage Restoration · Northern Virginia</div>
                      
                      {/* Google Guaranteed Badge */}
                      <div className="mt-3 inline-flex items-center gap-2 bg-[#f0fdf4] px-2 py-1 rounded border border-[#e6f4ea]">
                         <div className="w-4 h-4 bg-[#34a853] rounded-full flex items-center justify-center text-white text-[8px] font-bold">✔</div>
                         <span className="text-[10px] font-medium text-[#1e8e3e]">Google Guaranteed</span>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-4 gap-2 mt-4 text-center">
                         {['CALL', 'DIRECTIONS', 'SAVE', 'WEBSITE'].map(act => (
                           <div key={act} className="flex flex-col items-center gap-1">
                              <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#1a73e8]">
                                <div className="w-4 h-4 bg-current rounded-sm opacity-20"></div>
                              </div>
                              <span className="text-[8px] font-medium text-[#1a73e8]">{act}</span>
                           </div>
                         ))}
                      </div>

                      <div className="mt-4 p-3 border rounded-lg text-center text-[#1a73e8] font-medium text-sm">
                        REQUEST A QUOTE
                      </div>

                      <div className="mt-3 space-y-2">
                         <div className="flex items-center gap-2 text-xs text-gray-600">
                            <Clock size={14} />
                            <span><span className="text-[#1e8e3e] font-bold">Open</span> · 24/7 Emergency Service</span>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Slide 2: Search Result */}
                <div className={`absolute inset-0 bg-white transition-opacity duration-700 ${heroSlide === 1 ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
                   <div className="p-4 border-b border-gray-100">
                      <div className="flex justify-center text-xl font-medium mb-3">
                        <span className="text-[#4285f4]">G</span><span className="text-[#ea4335]">o</span><span className="text-[#fbbc04]">o</span><span className="text-[#4285f4]">g</span><span className="text-[#34a853]">l</span><span className="text-[#ea4335]">e</span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm shadow-sm text-gray-700 flex justify-between">
                         <span>water damage near me</span>
                         <span className="text-[#4285f4]">🔍</span>
                      </div>
                   </div>
                   <div className="p-4">
                      {/* Map Snippet */}
                      <div className="h-24 bg-gray-100 rounded-lg mb-4 relative overflow-hidden">
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-6 h-6 text-[#ea4335] drop-shadow-md">📍</div>
                         </div>
                      </div>
                      {/* Result Item */}
                      <div className="mb-4">
                         <div className="text-[#1a73e8] text-base font-medium">Flood Doctor</div>
                         <div className="flex items-center gap-1 text-xs mt-0.5">
                            <span className="text-[#fbbc04]">★★★★★</span> 4.9 (127)
                         </div>
                         <div className="text-xs text-gray-500 mt-1">Water damage restoration</div>
                         <div className="flex items-center gap-1 text-xs mt-1 text-[#1e8e3e]">
                            <span>✔ Google Guaranteed</span>
                         </div>
                      </div>
                   </div>
                </div>

              </div>

              {/* Pause/Play Control */}
              <button 
                onClick={() => setHeroPaused(!heroPaused)}
                className="absolute bottom-0 right-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-500 hover:text-[#1a73e8] transition-colors z-30"
              >
                {heroPaused ? '▶' : '||'}
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: FEATURES ROW ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-[1296px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Clock, title: "60-Minute Response", desc: "Our crews arrive fast when water damage strikes, day or night." },
              { icon: Shield, title: "Licensed Contractor", desc: "Full repair services from a bonded, insured Virginia Class A contractor." },
              { icon: FileCheck, title: "Direct Insurance Billing", desc: "We handle the claims process and bill your carrier directly." }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#e8f0fe] rounded-full flex items-center justify-center text-[#1a73e8] mb-6">
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-normal text-[#202124] mb-3">{feature.title}</h3>
                <p className="text-sm text-[#5f6368] leading-relaxed max-w-xs">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: CENTERED VALUE PROP ================= */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-[32px] md:text-[44px] font-normal leading-tight text-[#202124] mb-6">
            Fast Response Prevents Lasting Damage
          </h2>
          <p className="text-lg text-[#3c4043] leading-relaxed">
            Water spreads quickly through drywall, flooring, and structural framing. Every hour of delay increases restoration costs and mold risk. Our certified technicians begin mitigation within 60 minutes to protect your property.
          </p>
        </div>
      </section>

      {/* ================= SECTION 4: SCROLLING CARDS (STICKY LEFT) ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-[1296px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sticky Header */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
              <h2 className="text-[36px] md:text-[44px] leading-tight font-normal text-[#202124] mb-6">
                Professional Water Damage Services
              </h2>
              <p className="text-base text-[#5f6368] leading-relaxed">
                Whether it's a burst pipe, flooded basement, or storm damage, our IICRC-certified team handles every phase of restoration, from emergency water extraction to complete structural repairs.
              </p>
            </div>

            {/* Scrollable Cards */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              
              {/* Card 1 */}
              <div className="border border-[#e8eaed] rounded-2xl p-6 hover:shadow-lg transition-shadow bg-white group">
                <div className="h-48 rounded-xl bg-[#fef7e0] mb-6 flex items-center justify-center overflow-hidden relative">
                   {/* Simplified Illustration: Extraction */}
                   <svg viewBox="0 0 200 120" className="w-3/4 h-auto opacity-80">
                      <path d="M20 100 L180 100" stroke="#f9ab00" strokeWidth="2" />
                      <rect x="140" y="40" width="40" height="60" rx="4" fill="#5f6368" />
                      <path d="M140 80 Q 80 60 40 90" stroke="#5f6368" strokeWidth="4" fill="none" />
                      <circle cx="40" cy="90" r="3" fill="#1a73e8" />
                   </svg>
                </div>
                <h3 className="text-2xl font-normal text-[#202124] mb-2 group-hover:text-[#1a73e8] transition-colors">Emergency Water Extraction</h3>
                <p className="text-sm text-[#5f6368] mb-4 leading-relaxed">
                  Industrial truck-mounted extractors remove thousands of gallons per hour. We eliminate standing water from basements and crawl spaces.
                </p>
                <div className="text-[#1a73e8] font-medium text-sm flex items-center">Learn more <ChevronRight size={16} /></div>
              </div>

              {/* Card 2 */}
              <div className="border border-[#e8eaed] rounded-2xl p-6 hover:shadow-lg transition-shadow bg-white group">
                <div className="h-48 rounded-xl bg-[#e8f0fe] mb-6 flex items-center justify-center overflow-hidden relative">
                   {/* Simplified Illustration: Drying */}
                   <svg viewBox="0 0 200 120" className="w-3/4 h-auto opacity-80">
                      <rect x="40" y="60" width="40" height="40" rx="4" fill="#1a73e8" />
                      <circle cx="60" cy="80" r="15" fill="#ffffff" opacity="0.3" />
                      <path d="M85 70 L120 60 L120 80 L85 90" fill="#e8f0fe" opacity="0.5" />
                      <text x="140" y="80" fontSize="12" fill="#1a73e8" fontWeight="bold">35% RH</text>
                   </svg>
                </div>
                <h3 className="text-2xl font-normal text-[#202124] mb-2 group-hover:text-[#1a73e8] transition-colors">Structural Drying</h3>
                <p className="text-sm text-[#5f6368] mb-4 leading-relaxed">
                  Commercial-grade dehumidifiers and air movers restore walls, subfloors, and framing to safe moisture levels.
                </p>
                <div className="text-[#1a73e8] font-medium text-sm flex items-center">Learn more <ChevronRight size={16} /></div>
              </div>

              {/* Card 3 */}
              <div className="border border-[#e8eaed] rounded-2xl p-6 hover:shadow-lg transition-shadow bg-white group">
                <div className="h-48 rounded-xl bg-[#e6f4ea] mb-6 flex items-center justify-center overflow-hidden relative">
                   {/* Simplified Illustration: Repair */}
                   <svg viewBox="0 0 200 120" className="w-3/4 h-auto opacity-80">
                      <rect x="50" y="30" width="100" height="80" fill="#ffffff" stroke="#34a853" strokeWidth="2" />
                      <rect x="60" y="40" width="30" height="30" fill="#e6f4ea" />
                      <circle cx="160" cy="100" r="12" fill="#1a73e8" />
                      <text x="160" y="104" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Lic</text>
                   </svg>
                </div>
                <h3 className="text-2xl font-normal text-[#202124] mb-2 group-hover:text-[#1a73e8] transition-colors">Complete Reconstruction</h3>
                <p className="text-sm text-[#5f6368] mb-4 leading-relaxed">
                  As a licensed Virginia general contractor, we handle full repairs in-house, including drywall, flooring, and painting.
                </p>
                <div className="text-[#1a73e8] font-medium text-sm flex items-center">Learn more <ChevronRight size={16} /></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: INSIGHTS (2-UP) ================= */}
      <section className="py-24 bg-white border-t border-[#f1f3f4]">
        <div className="max-w-[1296px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual (Left) */}
            <div className="bg-[#e8f0fe] rounded-[24px] p-8 md:p-12 flex items-center justify-center min-h-[400px]">
               <div className="bg-white rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] w-[280px] overflow-hidden">
                  <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                     <span className="text-xs font-medium text-gray-600">Performance</span>
                     <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-gray-300"></div></div>
                  </div>
                  <div className="p-6 text-center">
                     <div className="text-[48px] font-normal text-[#202124] mb-1">60<span className="text-lg text-gray-500 ml-1">min</span></div>
                     <div className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-6">Avg Arrival Time</div>
                     
                     {/* Mock Chart Bars */}
                     <div className="flex items-end justify-center gap-2 h-20">
                        <div className="w-4 bg-[#1a73e8] opacity-40 h-[40%] rounded-t-sm"></div>
                        <div className="w-4 bg-[#1a73e8] opacity-60 h-[60%] rounded-t-sm"></div>
                        <div className="w-4 bg-[#1a73e8] opacity-80 h-[50%] rounded-t-sm"></div>
                        <div className="w-4 bg-[#1a73e8] h-[90%] rounded-t-sm"></div>
                        <div className="w-4 bg-[#1a73e8] opacity-70 h-[70%] rounded-t-sm"></div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Content (Right) */}
            <div>
               <h2 className="text-[36px] font-normal text-[#202124] mb-6 leading-tight">
                 Data-driven restoration that keeps you informed
               </h2>
               <p className="text-lg text-[#5f6368] leading-relaxed">
                 We track every metric of your restoration project. From our GPS-tracked fleet ensuring rapid arrival times to daily moisture readings that verify drying progress, you get transparency at every step.
               </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 6: TESTIMONIAL ================= */}
      <section className="py-24 bg-[#e8f0fe]">
        <div className="max-w-[1296px] mx-auto px-6">
           <div className="text-center mb-12">
              <h2 className="text-[32px] md:text-[44px] font-normal text-[#202124]">Trusted by Northern Virginia Homeowners</h2>
           </div>
           <div className="bg-white rounded-2xl shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                 <p className="text-2xl font-light text-[#202124] leading-relaxed mb-8">
                   "They arrived within an hour of my call when our basement flooded at 2 AM. Professional, thorough, and handled everything with our insurance."
                 </p>
                 <div>
                    <div className="text-sm font-bold text-[#202124]">Sarah Mitchell</div>
                    <div className="text-sm text-[#5f6368]">Arlington, Virginia</div>
                 </div>
                 <div className="mt-8 flex items-center gap-2 text-[#1a73e8] font-medium cursor-pointer hover:underline">
                    <span className="w-8 h-8 rounded-full bg-[#1a73e8] text-white flex items-center justify-center text-xs">▶</span>
                    Watch Customer Stories
                 </div>
              </div>
              <div className="bg-gray-100 min-h-[300px] relative">
                 {/* Placeholder for Testimonial Image */}
                 <div className="absolute inset-0 bg-gradient-to-br from-[#d2e3fc] to-[#f1f3f4] flex items-center justify-center">
                    <div className="text-[#1a73e8] opacity-20 text-9xl font-serif">"</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ================= SECTION 7: 3-STEP PROCESS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-[1296px] mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[36px] md:text-[44px] font-normal text-[#202124] mb-4">Water Damage Restoration in 3 Steps</h2>
              <p className="text-lg text-[#5f6368]">Dealing with water damage feels overwhelming. Here is exactly what to expect.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                { step: 1, title: "Call for Response", desc: "Contact us 24/7. Our dispatcher gathers details and sends the nearest crew immediately." },
                { step: 2, title: "Extraction & Drying", desc: "We extract standing water, remove saturated materials, and set up industrial drying equipment." },
                { step: 3, title: "Reconstruction", desc: "Once dry, our licensed contractors repair drywall, flooring, and paint to pre-loss condition." }
              ].map((item) => (
                <div key={item.step}>
                   <div className="text-[72px] font-light text-[#1a73e8] mb-4 leading-none">{item.step}</div>
                   <h3 className="text-xl font-medium text-[#202124] mb-3">{item.title}</h3>
                   <p className="text-sm text-[#5f6368] leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ================= SECTION 8: SERVICE CARDS ================= */}
      <section className="py-24 bg-white border-t border-[#f1f3f4]">
        <div className="max-w-[1296px] mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white border border-[#e8eaed] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                 <div className="h-48 bg-[#fef7e0] flex items-center justify-center">
                    <div className="w-24 h-32 bg-white rounded shadow-sm opacity-80"></div>
                 </div>
                 <div className="p-6">
                    <h3 className="text-xl font-normal text-[#202124] mb-2">Water Damage Restoration</h3>
                    <p className="text-sm text-[#5f6368] mb-4">Emergency response for burst pipes, appliance failures, and overflows.</p>
                    <span className="text-[#1a73e8] font-medium text-sm group-hover:underline">Learn more →</span>
                 </div>
              </div>

              <div className="bg-white border-[#e8eaed] border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                 <div className="h-48 bg-[#e3f2fd] flex items-center justify-center">
                    <div className="w-24 h-32 bg-white rounded shadow-sm opacity-80"></div>
                 </div>
                 <div className="p-6">
                    <h3 className="text-xl font-normal text-[#202124] mb-2">Mold Remediation</h3>
                    <p className="text-sm text-[#5f6368] mb-4">Safe containment and removal of mold caused by water damage or humidity.</p>
                    <span className="text-[#1a73e8] font-medium text-sm group-hover:underline">Learn more →</span>
                 </div>
              </div>

              <div className="bg-white border-[#e8eaed] border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                 <div className="h-48 bg-[#1a1a2e] flex items-center justify-center">
                    <div className="w-24 h-32 bg-white/10 rounded shadow-sm"></div>
                 </div>
                 <div className="p-6">
                    <h3 className="text-xl font-normal text-[#202124] mb-2">Fire & Smoke Restoration</h3>
                    <p className="text-sm text-[#5f6368] mb-4">Complete cleanup including soot removal, odor elimination, and structural repairs.</p>
                    <span className="text-[#1a73e8] font-medium text-sm group-hover:underline">Learn more →</span>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* ================= SECTION 9: PROGRESS CAROUSEL ================= */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-[1296px] mx-auto px-6">
           <div className="text-center mb-12">
              <h2 className="text-[36px] font-normal text-[#202124]">Stay Connected Throughout</h2>
              <p className="text-lg text-[#5f6368] mt-2">We keep you informed with updates, photos, and direct communication.</p>
           </div>
           
           <div className="h-px bg-[#dadce0] w-full mb-16"></div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left: Phone Mockup */}
              <div className="relative flex justify-center">
                 <div className="w-[300px] h-[500px] bg-white rounded-[24px] border border-[#dadce0] shadow-xl overflow-hidden relative">
                    <div className="h-14 border-b border-[#f1f3f4] flex items-center px-4 justify-between">
                       <span className="text-xs font-bold text-[#202124]">Flood Doctor App</span>
                       <div className="w-6 h-6 rounded-full bg-[#1a73e8] text-white flex items-center justify-center text-xs">FD</div>
                    </div>
                    
                    {/* Screen Content - Changes based on Active Step */}
                    <div className="p-6 bg-gray-50 h-full">
                       {activeStep === 0 && (
                          <div className="bg-white p-4 rounded-xl shadow-sm animate-[fade-in_0.5s]">
                             <div className="text-sm font-bold text-[#1a73e8] mb-2">Job Update</div>
                             <div className="h-32 bg-blue-50 rounded mb-3 flex items-center justify-center text-blue-200 text-4xl">📷</div>
                             <p className="text-xs text-gray-600">Technician arrived. Extraction in progress. 45% moisture reduction in basement.</p>
                          </div>
                       )}
                       {activeStep === 1 && (
                          <div className="bg-white p-4 rounded-xl shadow-sm animate-[fade-in_0.5s]">
                             <div className="text-sm font-bold text-[#34a853] mb-2">Insurance Approved</div>
                             <div className="space-y-2">
                                <div className="h-2 bg-gray-100 rounded w-full"></div>
                                <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                                <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                             </div>
                             <div className="mt-4 text-xs text-gray-500">Claim #88421 documentation sent to carrier.</div>
                          </div>
                       )}
                       {activeStep === 2 && (
                          <div className="bg-white p-4 rounded-xl shadow-sm animate-[fade-in_0.5s]">
                             <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                                <div>
                                   <div className="text-sm font-bold">Mike (PM)</div>
                                   <div className="text-xs text-green-600">Online</div>
                                </div>
                             </div>
                             <div className="bg-[#e8f0fe] p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl text-xs text-gray-800 mb-2">
                                Crew is wrapping up drying today. Can we schedule a walkthrough?
                             </div>
                          </div>
                       )}
                    </div>
                 </div>
              </div>

              {/* Right: List with Progress Bars */}
              <div className="space-y-8">
                 {steps.map((item, index) => (
                    <div 
                      key={index}
                      className={`relative pl-8 cursor-pointer transition-opacity duration-300 ${activeStep === index ? 'opacity-100' : 'opacity-50'}`}
                      onClick={() => { setActiveStep(index); setCarouselPaused(true); }}
                    >
                       {/* Progress Bar Line */}
                       <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#dadce0] rounded-full overflow-hidden">
                          {activeStep === index && (
                             <div className="w-full bg-[#1a73e8] animate-[h-fill_5s_linear_forwards]" style={{ height: '0%' }}></div>
                          )}
                          {activeStep > index && (
                             <div className="w-full h-full bg-[#1a73e8]"></div>
                          )}
                       </div>

                       <h3 className={`text-2xl font-normal mb-2 ${activeStep === index ? 'text-[#202124]' : 'text-[#5f6368]'}`}>
                          {item.title}
                       </h3>
                       <p className={`text-base leading-relaxed transition-all duration-500 overflow-hidden ${activeStep === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                          {item.desc}
                       </p>
                    </div>
                 ))}
                 <style>{`
                    @keyframes h-fill { from { height: 0%; } to { height: 100%; } }
                 `}</style>
              </div>

           </div>
        </div>
      </section>

      {/* ================= SECTION 10: FAQ ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
           <h2 className="text-[36px] font-normal text-center mb-12">Water Damage Restoration FAQs</h2>
           <div className="border-t border-[#dadce0]">
              {faqs.map((faq, i) => (
                 <div key={i} className="border-b border-[#dadce0]">
                    <button 
                      onClick={() => toggleFaq(i)}
                      className="w-full text-left py-5 flex justify-between items-center group"
                    >
                       <span className={`text-lg ${faqOpen === i ? 'text-[#1a73e8]' : 'text-[#202124] group-hover:text-[#1a73e8]'}`}>
                          {faq.q}
                       </span>
                       <ChevronDown size={20} className={`text-gray-400 transition-transform ${faqOpen === i ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${faqOpen === i ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                       <p className="text-[#5f6368] leading-relaxed pr-8">{faq.a}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* ================= SECTION 11: FOOTER (CTA) ================= */}
      <section className="py-24 bg-white text-center border-t border-[#f1f3f4]">
         <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-[36px] font-normal text-[#202124] mb-6">Don't Wait for Water Damage to Spread</h2>
            <p className="text-lg text-[#5f6368] mb-8">Mold can begin growing within 24-48 hours. Call now for immediate help.</p>
            <Link to="/request/" className="inline-flex items-center justify-center h-14 px-8 rounded-md bg-[#1a73e8] text-white text-lg font-medium hover:bg-[#1557b0] transition-colors shadow-sm">
               Get Emergency Help Now
            </Link>
         </div>
      </section>

    </main>
  );
};

export default ResidentialVariantA;
