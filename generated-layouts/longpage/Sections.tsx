import React from 'react';
import { 
  Clock, ShieldCheck, FileCheck, Droplets, ScanEye, Wind, 
  Hammer, Building2, Skull, Waves, Warehouse, Home, 
  MapPin, AlertTriangle, CloudRain, Zap, Pipette,
  CheckCircle2, ArrowRight, Star, Play, Quote, Info, Phone,
  ChevronDown, ChevronUp
} from 'lucide-react';
import { Card, Button, Badge, Accordion, StarRating, Tooltip, Modal } from './UI';
import { ProcessStep, ServiceItem } from './types';

// --- HERO SECTION ---
export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 pb-20 lg:pt-40 lg:pb-32 px-4 lg:px-12 overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 bg-surface pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: `radial-gradient(#1a73e8 1px, transparent 1px)`, 
               backgroundSize: '32px 32px' 
             }}>
        </div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3 animate-float" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-3xl opacity-40 -translate-x-1/3 translate-y-1/3 animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex flex-wrap gap-3 mb-8 animate-fade-in-up">
             <Badge text="IICRC Certified" icon={ShieldCheck} className="bg-white/80 backdrop-blur-sm shadow-sm" />
             <Badge text="60-Min Response" icon={Clock} color="green" className="bg-white/80 backdrop-blur-sm shadow-sm" />
             <Badge text="Direct Billing" icon={FileCheck} color="slate" className="bg-white/80 backdrop-blur-sm shadow-sm" />
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8 drop-shadow-sm">
            Water Damage Restoration in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Northern Virginia</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
            Expert restoration, mold remediation, and flood cleanup. We handle the mess and the insurance claim so you can recover faster.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="tel:8774970007" className="w-full sm:w-auto">
              <Button size="xl" icon={Clock} className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white shadow-red-200 hover:shadow-red-300 relative overflow-hidden group">
                <span className="relative z-10">Emergency: (877) 497-0007</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Button>
            </a>
            <Button variant="outline" size="xl" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm border-2" onClick={() => document.getElementById('assessment')?.scrollIntoView({behavior: 'smooth'})}>
              Free Damage Assessment
            </Button>
          </div>

          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500">
             <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs overflow-hidden shadow-sm">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
             </div>
             <div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span>Trusted by 500+ Neighbors</span>
             </div>
          </div>
        </div>

        <div className="hidden lg:block relative">
           {/* Abstract visual representation of service - clean, technical */}
           <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12 animate-float" style={{ animationDelay: '1s' }}>
                 <Card className="bg-white/90 backdrop-blur transition-all hover:scale-[1.02]" noPadding>
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-primary mb-4">
                        <Droplets className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg mb-1">Water Extraction</h3>
                      <p className="text-sm text-slate-500">Powerful truck-mounted removal</p>
                    </div>
                 </Card>
                 <Card className="bg-white/90 backdrop-blur transition-all hover:scale-[1.02]" noPadding>
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                        <Wind className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg mb-1">Rapid Drying</h3>
                      <p className="text-sm text-slate-500">Industrial dehumidification</p>
                    </div>
                 </Card>
              </div>
              <div className="space-y-4 animate-float" style={{ animationDelay: '2.5s' }}>
                 <Card className="bg-primary text-white shadow-primary/30 shadow-xl border-none transition-all hover:scale-[1.02]" noPadding>
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-4">
                          <Clock className="w-6 h-6 animate-pulse" />
                        </div>
                        <div className="px-2 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-wider">Live</div>
                      </div>
                      <h3 className="font-bold text-lg mb-1">24/7 Response</h3>
                      <p className="text-sm text-white/80">We arrive in 60 minutes or less</p>
                    </div>
                 </Card>
                 <Card className="bg-white/90 backdrop-blur transition-all hover:scale-[1.02]" noPadding>
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg mb-1">Mold Prevention</h3>
                      <p className="text-sm text-slate-500">Sanitization & anti-microbial</p>
                    </div>
                 </Card>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

// --- INTRODUCTION ---
export const Introduction: React.FC = () => {
  return (
    <section id="intro" className="py-20 px-4 lg:px-12 max-w-7xl mx-auto">
      <div className="bg-white rounded-[48px] p-8 lg:p-16 shadow-xl border border-slate-100 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-blue-300 group-hover:w-3 transition-all duration-300"></div>
        <div className="grid lg:grid-cols-5 gap-12 items-center">
           <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 leading-tight">Water damage doesn't wait for convenient times.</h2>
              <div className="prose prose-lg text-slate-600 space-y-4">
                <p>
                  Whether from a burst pipe, appliance failure, sewage backup, or storm flooding, water intrusion causes progressive damage to your Northern Virginia home. Within hours, water saturates flooring, drywall, and insulation. Within days, mold begins growing in damp areas. 
                </p>
                <p className="font-medium text-slate-800">
                  Professional water damage restoration stops this progression and returns your property to pre-loss condition.
                </p>
                <p>
                  Flood Doctor LLC provides comprehensive water damage restoration services throughout Fairfax County, Northern Virginia, Washington DC, and Maryland. Our IICRC-certified technicians respond 24/7, arriving with professional equipment to extract water, dry structures, and restore your home completely.
                </p>
              </div>
           </div>
           <div className="lg:col-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-blue-200 transition-colors">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                Why Speed Matters
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-primary font-black text-sm shrink-0 mr-4 shadow-sm">1h</div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-1">Saturation Begins</p>
                    <p className="text-xs text-slate-600">Water spreads, saturating porous materials like drywall and pad.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-primary font-black text-sm shrink-0 mr-4 shadow-sm">24h</div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-1">Microbial Growth</p>
                    <p className="text-xs text-slate-600">Bacteria multiplies. Furniture stains appear on carpets.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-red-500 font-black text-sm shrink-0 mr-4 shadow-sm">48h+</div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-1">Mold Danger</p>
                    <p className="text-xs text-slate-600">Mold growth becomes likely. Structural integrity may be compromised.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <a href="tel:8774970007" className="flex items-center justify-between text-primary font-bold hover:underline group/link">
                   Call for Immediate Help
                   <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

// --- EMERGENCY SERVICES ---
export const EmergencyServices: React.FC = () => {
  const [activeFeature, setActiveFeature] = React.useState<number | null>(null);

  const features = [
    {
      title: "Immediate Extraction",
      icon: Droplets,
      desc: "Truck-mounted units & submersible pumps remove hundreds of gallons per hour.",
      points: ["Basement flooding", "Carpet & pad extraction", "Hardwood salvage"],
      extendedInfo: "Standing water is the primary cause of structural instability. Rapid extraction reduces drying time by up to 50%."
    },
    {
      title: "Moisture Detection",
      icon: ScanEye,
      desc: "Hidden moisture causes long-term damage. We find it all.",
      points: ["Thermal imaging", "Penetrating meters", "Humidity tracking"],
      extendedInfo: "Water can travel invisibly behind walls and under floors. Our thermal detection ensures we find every pocket of moisture."
    },
    {
      title: "Structural Drying",
      icon: Wind,
      desc: "Industrial LGR dehumidifiers and air movers accelerate evaporation.",
      points: ["Wall cavity injection", "Desiccant drying", "Daily monitoring"],
      extendedInfo: "Passive drying isn't enough. Our industrial systems force evaporation, preventing mold spores from germinating."
    }
  ];

  return (
    <section id="emergency" className="py-24 px-4 lg:px-12 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <Badge text="Emergency Response" color="red" className="mb-4" icon={AlertTriangle} />
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">24/7 Emergency Services</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Every hour of delayed action increases damage severity. Flood Doctor maintains emergency crews ready to respond to water damage calls throughout Northern Virginia at any time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <Card key={i} className="h-full group hover:border-primary/30 hover:shadow-primary/5 transition-all duration-300 flex flex-col" variant="elevated">
              <div className="w-16 h-16 bg-primary-light rounded-[20px] flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm group-hover:bg-primary group-hover:text-white">
                <f.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{f.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{f.desc}</p>
              <div className="border-t border-slate-100 pt-6 mb-6 flex-grow">
                <ul className="space-y-3">
                  {f.points.map((p, j) => (
                    <li key={j} className="flex items-center text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-3 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2">
                 <Button variant="tonal" fullWidth onClick={() => setActiveFeature(i)}>Learn More</Button>
              </div>
            </Card>
          ))}
        </div>

        <Modal 
          isOpen={activeFeature !== null} 
          onClose={() => setActiveFeature(null)}
          title={activeFeature !== null ? features[activeFeature].title : ''}
        >
          {activeFeature !== null && (
            <div className="space-y-8">
               {/* Icon and intro */}
               <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center text-primary shrink-0">
                     {React.createElement(features[activeFeature].icon, { size: 32 })}
                  </div>
                  <p className="text-slate-600 font-medium text-lg leading-relaxed">{features[activeFeature].desc}</p>
               </div>
               
               {/* Extended Details */}
               <div>
                 <h4 className="font-bold text-slate-900 mb-4 text-lg">Key Service Features</h4>
                 <ul className="space-y-4">
                   {features[activeFeature].points.map((p, j) => (
                      <li key={j} className="flex items-center text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                        <span className="font-semibold">{p}</span>
                      </li>
                   ))}
                 </ul>
               </div>

               <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full translate-x-1/3 -translate-y-1/3 blur-xl"></div>
                 <div className="relative z-10">
                   <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                      <Info className="w-4 h-4 mr-2" />
                      Why this matters
                   </h4>
                   <p className="text-blue-800 leading-relaxed">
                     {features[activeFeature].extendedInfo}
                   </p>
                 </div>
               </div>

               <div className="pt-2">
                 <Button size="lg" fullWidth onClick={() => {
                    setActiveFeature(null);
                    document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
                 }}>
                    Request This Service
                 </Button>
               </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

// --- RESTORATION SERVICES ---
export const RestorationServices: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-slate-100 pb-8">
          <div className="max-w-2xl">
            <Badge text="End-to-End" className="mb-4" color="blue" />
            <h2 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">Complete Restoration Solutions</h2>
            <p className="text-slate-600 text-lg">From initial emergency response through final reconstruction, we handle every aspect of your property's recovery.</p>
          </div>
          <Button variant="secondary" className="mt-8 md:mt-0" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} icon={ArrowRight}>
            Schedule Service
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Residential Card - Large */}
          <Card className="lg:col-span-2 bg-gradient-to-br from-blue-50/50 to-white border-blue-100 hover:shadow-blue-200/50" title="Residential Restoration" subtitle="Home Services">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-slate-900 flex items-center mb-4 text-lg">
                  <Home className="w-5 h-5 mr-2 text-primary"/> Living Areas
                </h4>
                <ul className="space-y-3">
                  {['Carpet & Flooring replacement', 'Drywall & plaster repair', 'Trim restoration', 'Furniture cleaning'].map((item, i) => (
                     <li key={i} className="flex items-center text-slate-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2.5" />
                        {item}
                     </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 flex items-center mb-4 text-lg">
                  <Waves className="w-5 h-5 mr-2 text-primary"/> Basements
                </h4>
                <ul className="space-y-3">
                  {['Complete extraction', 'Sump pump evaluation', 'Foundation assessment', 'Vapor barriers'].map((item, i) => (
                     <li key={i} className="flex items-center text-slate-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2.5" />
                        {item}
                     </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 flex items-center mb-4 text-lg">
                  <Droplets className="w-5 h-5 mr-2 text-primary"/> Kitchens & Baths
                </h4>
                <ul className="space-y-3">
                  {['Cabinet drying & restoration', 'Tile & Grout restoration', 'Under-sink repairs', 'Appliance inspection'].map((item, i) => (
                     <li key={i} className="flex items-center text-slate-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2.5" />
                        {item}
                     </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* Side Stack */}
          <div className="space-y-8">
            <Card className="h-full flex flex-col justify-center border-l-4 border-l-indigo-500 hover:shadow-indigo-200/50" variant="elevated">
              <div className="flex items-start mb-6">
                <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 mr-5 shadow-sm">
                  <Building2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Commercial</h3>
                  <Badge text="Min. Downtime" color="blue" className="mt-2" />
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                We understand business interruption costs money. We serve offices, retail, warehouses, and medical facilities with speed.
              </p>
            </Card>
            
            <Card className="h-full flex flex-col justify-center border-l-4 border-l-red-500 bg-red-50/30 hover:shadow-red-200/50" variant="elevated">
              <div className="flex items-start mb-6">
                <div className="p-4 bg-red-100 rounded-2xl text-red-600 mr-5 shadow-sm">
                  <Skull className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Biohazard</h3>
                  <Badge text="Category 3" color="red" className="mt-2" />
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Safe cleanup of sewage backups. EPA-registered antimicrobials, HEPA filtration, and strict sanitization protocols.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- WHY CHOOSE US ---
export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 px-4 lg:px-12 bg-slate-900 text-white rounded-t-[48px] lg:rounded-t-[80px] -mx-2 lg:-mx-4 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Why Choose Flood Doctor?</h2>
          <p className="text-slate-400 text-xl font-light">We combine speed, expertise, and insurance advocacy to make a stressful situation manageable.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: ShieldCheck, title: "IICRC Certified", text: "Our technicians hold WRT, ASD, & Mold Remediation certifications, ensuring industry-standard care." },
            { icon: FileCheck, title: "Direct Billing", text: "We speak the insurance language. We handle the paperwork, photos, and billing directly with your carrier." },
            { icon: ScanEye, title: "Free Assessment", text: "Not sure? We provide expert evaluation of damage extent and category at no cost to you." },
            { icon: Clock, title: "60-Min Response", text: "Time is the enemy. Our average arrival time in Northern VA is 1 hour or less." },
          ].map((item, i) => (
            <div key={i} className="group bg-slate-800/40 p-8 rounded-[32px] border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 hover:-translate-y-2 flex flex-col sm:flex-row items-start gap-6">
              <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center text-primary-light shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                 <item.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- PROCESS ---
export const Process: React.FC = () => {
  const steps = [
    { 
      num: 1, 
      title: "Dispatch", 
      text: "24/7 immediate response from our local center.",
      details: ["Live dispatcher (no bots)", "Crew routed instantly", "Emergency guidance"]
    },
    { 
      num: 2, 
      title: "Inspection", 
      text: "Thermal mapping and damage assessment.",
      details: ["Infrared camera scanning", "Moisture mapping", "Water category check", "Photo documentation"]
    },
    { 
      num: 3, 
      title: "Extraction", 
      text: "Removal of standing water to stop damage.",
      details: ["Truck-mounted units", "Submersible pumps", "Carpet extraction", "Furniture protection"]
    },
    { 
      num: 4, 
      title: "Drying", 
      text: "3-5 days of monitored dehumidification.",
      details: ["LGR Dehumidifiers", "High-velocity air movers", "Daily monitoring", "Psychrometric tracking"]
    },
    { 
      num: 5, 
      title: "Cleaning", 
      text: "HEPA vacuuming and antimicrobial treatment.",
      details: ["Anti-microbial spray", "HEPA vacuuming", "Odor removal", "Contents cleaning"]
    },
    { 
      num: 6, 
      title: "Repairs", 
      text: "Reconstruction to pre-loss condition.",
      details: ["Drywall installation", "Flooring replacement", "Painting", "Final walkthrough"]
    },
  ];

  return (
    <section id="process" className="py-24 px-4 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
           <Badge text="The Roadmap to Recovery" className="mb-4" />
           <h2 className="text-4xl font-extrabold text-slate-900">Our 6-Step Restoration Process</h2>
        </div>
        
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-100 to-transparent -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
            {steps.map((step) => (
              <div key={step.num} className="relative group bg-white rounded-3xl p-8 hover:bg-surface transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-slate-100">
                <div className="flex items-center mb-6 relative">
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center font-black text-3xl text-slate-300 shadow-sm group-hover:border-primary group-hover:text-primary group-hover:scale-110 transition-all duration-300 z-10">
                    {step.num}
                  </div>
                  {/* Visual connector overlay */}
                  <div className="hidden lg:block absolute left-10 top-1/2 w-full h-1 bg-primary/0 group-hover:bg-primary/10 transition-colors -z-10 origin-left scale-x-150"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <Tooltip content={
                  <ul className="list-disc list-inside space-y-1">
                    {step.details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                }>
                  <p className="text-slate-600 leading-relaxed cursor-help decoration-dotted underline decoration-slate-300 underline-offset-4 hover:text-slate-900 hover:decoration-primary transition-colors">
                    {step.text}
                  </p>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} size="lg" className="shadow-xl shadow-primary/20">
             Start Your Recovery Now
          </Button>
        </div>
      </div>
    </section>
  );
};

// --- COMMON CAUSES ---
export const CommonCauses: React.FC = () => {
  return (
    <section id="causes" className="py-20 px-4 lg:px-12 bg-blue-50/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Common Causes of Damage</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
              { icon: AlertTriangle, title: "Burst Pipes", sub: "Frozen pipes & corrosion" },
              { icon: CloudRain, title: "Storm Damage", sub: "Roof leaks & ice dams" },
              { icon: Zap, title: "Appliance Failures", sub: "Washing machines & heaters" },
              { icon: Warehouse, title: "Sewer Backup", sub: "Tree roots & clogs" }
          ].map((item, i) => (
              <div key={i} className="flex items-center text-left p-6 bg-white rounded-[32px] shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 group cursor-default">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 group-hover:bg-red-50 group-hover:text-red-500 transition-colors shrink-0 mr-6">
                      <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 font-medium">{item.sub}</p>
                  </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- SERVICE AREAS CARD ---
const ServiceAreaCard: React.FC<{ title: string; cities: string[] }> = ({ title, cities }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const LIMIT = 8;
  const shouldTruncate = cities.length > LIMIT;
  const visibleCities = isExpanded ? cities : cities.slice(0, LIMIT);

  return (
     <Card className="bg-white hover:border-orange-200 hover:shadow-md transition-all duration-300 group" variant="outlined" noPadding>
       <div className="p-6">
         <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 mr-4 shrink-0 transition-colors group-hover:bg-orange-100">
               <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg leading-tight">{title}</h3>
         </div>
         <div className="pl-14">
            <div className="flex flex-wrap gap-x-2 gap-y-1 leading-relaxed">
              {visibleCities.map((city, i) => (
                <span key={i} className="text-sm text-slate-600 font-medium flex items-center">
                   {city}{i < visibleCities.length - 1 ? <span className="text-slate-300 mx-2">•</span> : ""}
                </span>
              ))}
              {!isExpanded && shouldTruncate && <span className="text-sm text-slate-400 font-medium ml-1">...</span>}
            </div>
            
            {shouldTruncate && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-3 text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center transition-colors focus:outline-none"
              >
                {isExpanded ? (
                  <>Show less <ChevronUp className="w-3 h-3 ml-1" /></>
                ) : (
                  <>Show {cities.length - LIMIT} more <ChevronDown className="w-3 h-3 ml-1" /></>
                )}
              </button>
            )}
         </div>
       </div>
     </Card>
  );
};

// --- SERVICE AREAS & FAQ ---
export const InfoSections: React.FC = () => {
  const areaData = [
    { 
      title: "Fairfax County", 
      cities: ["Fairfax City", "Vienna", "Great Falls", "McLean", "Tysons Corner", "Reston", "Herndon", "Centreville", "Chantilly", "Burke", "Springfield", "Annandale", "Falls Church"]
    },
    { 
      title: "Arlington & Alexandria", 
      cities: ["Ballston", "Clarendon", "Rosslyn", "Crystal City", "Shirlington", "Old Town", "Del Ray", "Landmark"]
    },
    { 
      title: "Loudoun & Prince William",
      cities: ["Leesburg", "Ashburn", "Sterling", "South Riding", "Manassas", "Woodbridge", "Gainesville"]
    },
    { 
      title: "DC & Maryland", 
      cities: ["All DC neighborhoods", "Bethesda", "Silver Spring", "Rockville"]
    }
  ];

  const faqs = [
    { title: "How quickly can you respond?", content: "Our average response time is 60 minutes. We maintain 24/7 emergency crews throughout Northern Virginia and dispatch immediately upon receiving your call." },
    { title: "Does insurance cover water damage?", content: "Most homeowner policies cover sudden and accidental water damage (burst pipes, appliances). Flood damage (rising water) usually requires flood insurance. We help document everything for your claim." },
    { title: "How long does restoration take?", content: "Extraction: 1-4 hours. Drying: 3-5 days. Reconstruction: 1-4 weeks depending on severity. Minor damage may be complete in 4-5 days." },
    { title: "Can you prevent mold?", content: "Yes. Rapid response and proper drying prevent mold growth. If we dry your property within 24-48 hours, mold growth is prevented. We also apply antimicrobial treatments." },
    { title: "Do you offer 24/7 service?", content: "Yes. True 24/7/365 emergency response. Live dispatchers answer calls at all hours." },
    { title: "What should I do before you arrive?", content: "If safe: Turn off water source, turn off electricity to affected areas, move valuables away from water, take photographs, do not use household vacuums on standing water." }
  ];

  return (
    <section id="faq" className="py-24 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Badge text="Service Area" className="mb-4" color="orange" />
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Where We Serve</h2>
          
          <div className="space-y-4">
            {areaData.map((area, index) => (
               <ServiceAreaCard key={index} title={area.title} cities={area.cities} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
          <Badge text="Common Questions" className="mb-4" />
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
          <Accordion items={faqs.map(f => ({...f, content: <p>{f.content}</p>}))} />
        </div>
      </div>
    </section>
  );
};

// --- TESTIMONIALS ---
export const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote: "Flood Doctor arrived within 45 minutes of my call on a Sunday morning. They were professional, reassuring, and saved my hardwood floors from complete ruin.",
      author: "Sarah Jenkins",
      location: "Fairfax, VA",
      rating: 5
    },
    {
      quote: "I was panicked when my basement flooded. The team handled everything including talking to my insurance adjuster. Highly recommended service.",
      author: "Michael Ross",
      location: "Arlington, VA",
      rating: 5
    },
    {
      quote: "Professional, clean, and efficient. They explained every step of the drying process. The thermal imaging technology was impressive.",
      author: "David Chen",
      location: "McLean, VA",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4 lg:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge text="Customer Reviews" color="green" className="mb-4" />
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Trusted by Your Neighbors</h2>
          <div className="flex justify-center items-center gap-2 mb-4">
             <div className="flex text-yellow-400 gap-1">
               <StarRating rating={5} />
             </div>
             <span className="font-bold text-slate-700 ml-2">5.0/5.0 Average Rating</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <Card key={i} className="h-full flex flex-col" variant="elevated">
              <div className="flex mb-4 text-yellow-400">
                <StarRating rating={review.rating} />
              </div>
              <p className="text-slate-700 text-lg leading-relaxed italic mb-6 flex-grow">"{review.quote}"</p>
              <div className="mt-auto flex items-center pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 mr-3">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{review.author}</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">{review.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center font-bold text-primary hover:text-primary-dark transition-colors">
            See all 500+ reviews on Google <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

// --- FOOTER / CONTACT ---
export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12 px-4 lg:px-12 lg:rounded-t-[80px] rounded-t-[48px] -mx-2 lg:-mx-4 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.5)] mt-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 mb-16 relative z-10">
        <div>
           <div className="mb-8">
             <h2 className="text-3xl font-extrabold mb-2">Flood Doctor <span className="text-primary">LLC</span></h2>
             <p className="text-slate-400">Restoring homes and lives since 2010.</p>
           </div>
           
           <div className="space-y-8">
             <div className="flex items-start group">
               <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-primary shrink-0 mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                 <Phone className="w-6 h-6" />
               </div>
               <div>
                 <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">24/7 Emergency Line</p>
                 <a href="tel:8774970007" className="text-3xl font-bold hover:text-primary transition-colors block">(877) 497-0007</a>
                 <p className="text-xs text-green-400 mt-2 flex items-center font-bold tracking-wide"><span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>LIVE DISPATCH AVAILABLE</p>
               </div>
             </div>
             
             <div className="flex items-start group">
               <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-primary shrink-0 mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                 <MapPin className="w-6 h-6" />
               </div>
               <div>
                 <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Service Area</p>
                 <p className="text-lg font-medium leading-snug">Fairfax, Loudoun, Prince William, Arlington, Alexandria, Washington DC, & Maryland.</p>
               </div>
             </div>

             <div className="flex items-start group">
               <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-primary shrink-0 mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                 <FileCheck className="w-6 h-6" />
               </div>
               <div>
                 <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Credentials</p>
                 <p className="text-slate-300">Class A Contractor License</p>
                 <p className="text-slate-300">IICRC Certified Firm</p>
               </div>
             </div>
           </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-2xl">
          <h3 className="text-xl font-bold mb-6">Request a Callback</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 ml-1">Name</label>
                <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:bg-slate-800 transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 ml-1">Phone</label>
                <input type="tel" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:bg-slate-800 transition-colors" />
              </div>
            </div>
            <div className="space-y-1">
               <label className="text-xs font-bold text-slate-400 ml-1">Message</label>
               <textarea rows={4} className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:bg-slate-800 transition-colors resize-none"></textarea>
            </div>
            <Button fullWidth size="lg" className="bg-primary hover:bg-primary-dark border-none">Send Request</Button>
            <p className="text-[10px] text-slate-500 text-center mt-2">By submitting, you agree to receive calls/texts at the provided number.</p>
          </form>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Flood Doctor LLC. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
