import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Droplets,
  Wind,
  ShieldCheck,
  Phone,
  Menu,
  X,
  ChevronRight,
  Clock,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Thermometer,
  Waves
} from 'lucide-react';

// --- SEO CONTENT STRATEGY ---
// This object contains the "3000 words" structure.
// Keywords targeted: "Water Damage Restoration Northern Virginia", "Emergency Extraction", "IICRC Certified"
// ----------------------------

const SEO_CONTENT = {
  overview: {
    title: "Comprehensive Water Damage Mitigation",
    subtitle: "Professional Restoration in Northern VA",
    content: [
      "Water damage is a progressive disaster. Within minutes of intrusion, water spreads to other areas of your home, saturating drywall, baseboards, and subflooring. Within 24 hours, drywall begins to swell and break down. Within 48 hours, microbial growth (mold) can begin to colonize.",
      "Flood Doctor provides an enterprise-grade solution to residential disasters in Fairfax, Arlington, and Alexandria. We don't just 'remove water'; we engineer a restoration plan using psychrometrics—the science of drying—to ensure your property is returned to its pre-loss condition with verified moisture readings.",
      "Our IICRC-certified technicians use industrial-grade thermal imaging to detect hidden moisture pockets behind walls and under floorboards, ensuring that no potential mold source is left untreated."
    ]
  },
  process: {
    title: "The Scientific Drying Process",
    subtitle: "IICRC S500 Standard Methodology",
    intro: "We adhere strictly to the IICRC S500 Standard for Professional Water Damage Restoration. This isn't guesswork; it is a calibrated, industrial process designed to maximize structural salvageability."
  },
  categories: {
    title: "Understanding Water Categories",
    subtitle: "Risk Assessment",
    intro: "Not all water damage is the same. The 'Category' of water dictates the restoration protocol and whether materials can be saved or must be replaced."
  },
  risks: {
    title: "Health Risks of Untreated Damage",
    subtitle: "The Silent Dangers",
    content: [
      "Ignoring water damage or attempting 'DIY' cleanup often leads to 'Secondary Damage'. This occurs when high humidity levels cause materials that were not originally wet to absorb moisture from the air.",
      "The most significant risk is mold growth (Stachybotrys chartarum). Mold releases mycotoxins which can cause severe respiratory issues, particularly in children and the elderly. Structural integrity is also compromised as prolonged moisture exposure rots wood framing and delaminates subflooring."
    ]
  },
  insurance: {
    title: "Insurance Claims Guide",
    subtitle: "Navigating Your Policy",
    content: [
      "Most homeowners insurance policies in Virginia cover 'sudden and accidental' water damage, such as a burst pipe or appliance failure. They typically do NOT cover gradual damage (like a slow leak) or flood damage (rising water from outside) without a separate rider.",
      "Your responsibility as the homeowner is to 'mitigate' damages—meaning you must take immediate action to stop the water and prevent further loss. Calling Flood Doctor immediately satisfies this requirement."
    ]
  },
  faq: {
    title: "Common Questions",
    subtitle: "Expert Answers",
    items: [
      { q: "How long does the drying process take?", a: " typically 3 to 5 days, depending on the Class of water loss and the materials affected. Dense hardwoods may take longer." },
      { q: "Will you work with my insurance adjuster?", a: "Yes. We use Xactimate, the same software insurance adjusters use, to ensure your claim is processed quickly and accurately." },
      { q: "Can I stay in my home during restoration?", a: "For Category 1 (Clean) water, usually yes. For Category 2 or 3 (Sewage), we recommend temporary relocation for your safety." }
    ]
  }
};

// --- Google Material Design Tokens ---
// Enforcing 24px border radius and Surface Tones
// -------------------------------------

const GoogleButton = ({ children, variant = 'primary', className = '' }: { children: React.ReactNode; variant?: 'primary' | 'secondary' | 'text'; className?: string }) => {
  const base = "inline-flex items-center justify-center px-8 py-4 font-bold tracking-wide transition-all duration-200 rounded-full text-sm";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 hover:border-gray-300",
    text: "text-blue-600 hover:bg-blue-50 px-6"
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
};

const GoogleCard = ({ children, className = '', highlight = false, noHover = false }: { children: React.ReactNode; className?: string; highlight?: boolean; noHover?: boolean }) => {
  return (
    <div className={`p-8 md:p-10 rounded-[24px] transition-all duration-300 border border-transparent ${
      highlight
        ? 'bg-blue-50/50 hover:bg-blue-50 border-blue-100'
        : 'bg-[#F8F9FA]'
    } ${!noHover && !highlight ? 'hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-100' : ''} ${className}`}>
      {children}
    </div>
  );
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12 md:mb-16">
    {subtitle && (
      <span className="block mb-4 text-xs font-bold tracking-[0.2em] text-blue-600 uppercase font-sans">
        {subtitle}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1F1F1F] leading-[1.1] font-sans">
      {children}
    </h2>
  </div>
);

// --- The Bento Grid Component ---
// Visualizes the process steps in a masonry-style grid
// ------------------------------

const ProcessBentoGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-16">
    {/* Large Feature - Span 7 */}
    <div className="md:col-span-7 bg-[#E8F0FE] rounded-[32px] p-10 flex flex-col justify-between overflow-hidden relative group min-h-[320px]">
      <div className="relative z-10">
        <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-blue-600/20">
          <Droplets className="text-white w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-[#1F1F1F] mb-4">1. Extraction & Containment</h3>
        <p className="text-blue-900/80 text-lg leading-relaxed max-w-md">
          Immediate removal of standing water using truck-mounted vacuum units. We simultaneously set up containment barriers to stop moisture migration.
        </p>
      </div>
      <div className="absolute right-[-40px] bottom-[-40px] opacity-[0.08] group-hover:opacity-[0.15] transition-opacity">
         <Droplets size={300} />
      </div>
    </div>

    {/* Tall Feature - Span 5 */}
    <div className="md:col-span-5 bg-blue-600 rounded-[32px] p-10 text-white flex flex-col justify-between min-h-[320px]">
      <div>
        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-8 backdrop-blur-sm">
          <Thermometer className="text-white w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold mb-4">2. Structural Drying</h3>
        <p className="text-blue-100 text-lg leading-relaxed">
          High-velocity air movers and industrial dehumidifiers pull moisture from deep within framing, concrete, and subfloors.
        </p>
      </div>
    </div>

    {/* Medium Feature - Span 4 */}
    <div className="md:col-span-4 bg-[#F8F9FA] rounded-[32px] p-10 border border-gray-100 hover:bg-white hover:shadow-xl transition-all">
      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
        <Wind className="text-orange-600 w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">3. Monitoring</h3>
      <p className="text-gray-600 leading-relaxed">
        Daily moisture readings to track drying progress against drying goals.
      </p>
    </div>

    {/* Medium Feature - Span 8 */}
    <div className="md:col-span-8 bg-[#F8F9FA] rounded-[32px] p-10 border border-gray-100 hover:bg-white hover:shadow-xl transition-all flex flex-col md:flex-row gap-8 items-start md:items-center">
      <div className="flex-1">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <ShieldCheck className="text-green-600 w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">4. Sanitization & Restoration</h3>
        <p className="text-gray-600 leading-relaxed">
           Application of botanical antimicrobials to prevent mold, followed by final reconstruction (drywall, paint, flooring) to bring you home.
        </p>
      </div>
    </div>
  </div>
);

// --- The "Sticky Rail" Layout ---
// The core component for handling 3000 words without clutter
// ------------------------------

const StickyRailLayout = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'process', label: 'Our Process' },
    { id: 'categories', label: 'Water Categories' },
    { id: 'risks', label: 'Health Risks' },
    { id: 'insurance', label: 'Insurance Guide' },
    { id: 'faq', label: 'FAQ' }
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Simple spy logic to update active state
      // In production, use IntersectionObserver for better performance
      const scrollPosition = window.scrollY + 200;

      navItems.forEach(item => {
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
           setActiveSection(item.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 relative">
      <div className="flex flex-col lg:flex-row gap-16">

        {/* LEFT RAIL: Navigation (Sticky) */}
        <div className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-32 space-y-2">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 px-4">
              On This Page
            </h3>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-between group ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-700 font-bold'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
                {activeSection === item.id && <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>}
              </button>
            ))}

            <div className="mt-12 p-8 bg-[#F8F9FA] rounded-[24px]">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm font-bold text-[#1F1F1F] mb-1">Emergency?</p>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Our technicians are on standby 24/7 in Northern Virginia.
              </p>
              <a href="tel:+18774970007" className="block w-full py-3 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 text-center">
                (877) 497-0007
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT RAIL: The Content (75% Width) */}
        <div className="flex-1 min-w-0">

          {/* Section: Overview */}
          <section id="overview" className="mb-32 scroll-mt-32">
            <SectionHeading subtitle={SEO_CONTENT.overview.subtitle}>
              {SEO_CONTENT.overview.title}
            </SectionHeading>
            <div className="prose prose-lg prose-gray max-w-none text-gray-600">
              {SEO_CONTENT.overview.content.map((paragraph, idx) => (
                <p key={idx} className="text-lg leading-[1.8] mb-6">{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Section: Process (Bento Grid) */}
          <section id="process" className="mb-32 scroll-mt-32">
             <SectionHeading subtitle={SEO_CONTENT.process.subtitle}>
              {SEO_CONTENT.process.title}
            </SectionHeading>
            <p className="text-xl text-gray-600 leading-[1.8] mb-8 max-w-3xl">
               {SEO_CONTENT.process.intro}
            </p>
            <ProcessBentoGrid />
          </section>

          {/* Section: Categories */}
          <section id="categories" className="mb-32 scroll-mt-32">
             <SectionHeading subtitle={SEO_CONTENT.categories.subtitle}>
              {SEO_CONTENT.categories.title}
            </SectionHeading>
            <p className="text-lg text-gray-600 leading-[1.8] mb-12">
               {SEO_CONTENT.categories.intro}
            </p>

            <div className="space-y-6">
                {/* Category 1 */}
                <GoogleCard highlight={true} className="flex flex-col md:flex-row gap-6">
                    <div className="shrink-0 mt-1">
                        <CheckCircle2 className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-[#1F1F1F] mb-2">Category 1: Clean Water</h4>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Originates from a sanitary source such as a broken water supply line, tub overflow, or failing appliance.
                        </p>
                        <div className="inline-flex items-center text-sm font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                            Goal: Restore in place
                        </div>
                    </div>
                </GoogleCard>

                {/* Category 2 */}
                <GoogleCard className="flex flex-col md:flex-row gap-6">
                    <div className="shrink-0 mt-1">
                         <AlertTriangle className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-[#1F1F1F] mb-2">Category 2: Gray Water</h4>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Contains significant contamination. Sources include washing machine overflow, toilet overflow with urine, or dishwasher leakage.
                        </p>
                        <div className="inline-flex items-center text-sm font-bold text-orange-700 bg-orange-100 px-3 py-1 rounded-full">
                            Goal: Remove carpet pad, sanitize
                        </div>
                    </div>
                </GoogleCard>

                 {/* Category 3 */}
                 <GoogleCard className="flex flex-col md:flex-row gap-6">
                    <div className="shrink-0 mt-1">
                         <AlertTriangle className="w-8 h-8 text-red-600" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-[#1F1F1F] mb-2">Category 3: Black Water</h4>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Grossly contaminated and pathogenic. Sources include sewage backup, flooding from rivers, or stagnant water.
                        </p>
                        <div className="inline-flex items-center text-sm font-bold text-red-700 bg-red-100 px-3 py-1 rounded-full">
                            Goal: Full removal of porous materials
                        </div>
                    </div>
                </GoogleCard>
            </div>
          </section>

          {/* Section: Risks */}
          <section id="risks" className="mb-32 scroll-mt-32">
             <SectionHeading subtitle={SEO_CONTENT.risks.subtitle}>
              {SEO_CONTENT.risks.title}
            </SectionHeading>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="prose prose-lg text-gray-600">
                    {SEO_CONTENT.risks.content.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                <div className="bg-[#FFF8F6] p-8 rounded-[32px] border border-red-100">
                    <h4 className="text-red-900 font-bold text-lg mb-6 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Common Symptoms of Mold Exposure
                    </h4>
                    <ul className="space-y-4">
                        {['Respiratory congestion', 'Eye irritation', 'Persistent coughing', 'Skin rashes', 'Fatigue'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-red-900/70">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
             </div>
          </section>

          {/* Section: Insurance */}
          <section id="insurance" className="mb-32 scroll-mt-32">
             <SectionHeading subtitle={SEO_CONTENT.insurance.subtitle}>
              {SEO_CONTENT.insurance.title}
            </SectionHeading>
            <div className="bg-[#F8F9FA] rounded-[32px] p-10 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-blue-600">
                        <FileText className="w-8 h-8" />
                    </div>
                    <div>
                         <h3 className="text-2xl font-bold text-[#1F1F1F] mb-4">The "Sudden and Accidental" Rule</h3>
                         <p className="text-gray-600 text-lg leading-relaxed">
                            {SEO_CONTENT.insurance.content[0]}
                         </p>
                    </div>
                </div>
                <div className="pl-0 md:pl-24">
                     <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                        <p className="font-bold text-[#1F1F1F] mb-2">Pro Tip: Document Everything</p>
                        <p className="text-gray-500">
                            Take photos of the source of the leak immediately. Do not throw away the failed part (e.g., the burst pipe section) until the adjuster sees it.
                        </p>
                     </div>
                </div>
            </div>
          </section>

           {/* Section: FAQ */}
           <section id="faq" className="mb-32 scroll-mt-32">
             <SectionHeading subtitle={SEO_CONTENT.faq.subtitle}>
              {SEO_CONTENT.faq.title}
            </SectionHeading>
            <div className="grid grid-cols-1 gap-6">
                {SEO_CONTENT.faq.items.map((item, idx) => (
                    <GoogleCard key={idx} className="cursor-pointer group" noHover={true}>
                        <h4 className="text-xl font-bold text-[#1F1F1F] mb-3 group-hover:text-blue-600 transition-colors">
                            {item.q}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            {item.a}
                        </p>
                    </GoogleCard>
                ))}
            </div>
           </section>

        </div>
      </div>
    </div>
  );
};

// --- Main Page Component ---
// ---------------------------

export default function GeminiWaterDamage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1F1F1F]">

      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 transition-all">
        <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Waves className="text-white w-5 h-5" />
                 </div>
                 <span className="text-xl font-bold text-[#1F1F1F] tracking-tight">FLOOD DOCTOR</span>
            </div>

            <div className="hidden md:flex gap-8 text-sm font-bold text-gray-500">
                <a href="#" className="hover:text-blue-600 transition-colors">Water</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Fire</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Mold</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Commercial</a>
            </div>
            <a href="/contact/" className="bg-[#F1F3F4] text-[#1F1F1F] px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#E8EAED] transition-colors">
                Contact
            </a>
        </div>
      </nav>

      {/* Hero Section: 50/50 Split */}
      <header className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Hero Left: Typography */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-8 border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              24/7 Emergency Response
            </div>
            <h1 className="text-5xl lg:text-[72px] font-bold tracking-tight text-[#1F1F1F] mb-8 leading-[1.05]">
              Restoring your home to <span className="text-blue-600">pre-loss condition.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-lg">
              The premier water damage mitigation service for Northern Virginia. We combine clinical precision with white-glove service to protect your greatest investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <GoogleButton>
                Get Emergency Help
                <ArrowRight className="ml-2 w-5 h-5" />
              </GoogleButton>
              <GoogleButton variant="secondary">
                Our Process
              </GoogleButton>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm font-bold text-gray-400">
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gray-300" />
                    IICRC Certified
                </div>
                <div className="flex items-center gap-2">
                     <CheckCircle2 className="w-5 h-5 text-gray-300" />
                    Licensed & Insured
                </div>
            </div>
          </div>

          {/* Hero Right: Isometric/Abstract Visual */}
          <div className="relative order-1 lg:order-2">
             {/* Decorative blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/50 to-purple-100/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

             {/* Main Image Card */}
             <div className="relative bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 aspect-[4/3] group">
                {/* Simulated 'Restoration Scene' or Placeholder */}
                <div className="absolute inset-0 bg-[#F8F9FA] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-90 group-hover:scale-105 transition-transform duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Floating UI Elements (Google Style) */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-[24px] shadow-xl border border-white/50 flex items-center gap-5">
                    <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-green-500/30 text-white">
                        <Clock className="w-7 h-7" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Avg. Response Time</p>
                        <p className="text-2xl font-bold text-[#1F1F1F]">45 Minutes</p>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <StickyRailLayout />

      {/* Trust Footer */}
      <footer className="bg-[#1F1F1F] text-white py-24 px-6 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 pr-12">
                <div className="flex items-center gap-2 mb-8">
                     <Waves className="text-white w-6 h-6" />
                     <span className="text-2xl font-bold tracking-tight">FLOOD DOCTOR</span>
                </div>
                <p className="text-gray-400 max-w-md leading-relaxed text-lg mb-8">
                    Setting the clinical standard for water damage restoration in the DC Metro area. We are open 24/7/365 because disasters don't wait for business hours.
                </p>
                <div className="flex gap-4">
                    {/* Social/Trust Badges could go here */}
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                         <span className="font-bold text-xs">FB</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                         <span className="font-bold text-xs">IG</span>
                    </div>
                </div>
            </div>

            <div>
                <h4 className="font-bold mb-8 text-white tracking-wide">Services</h4>
                <ul className="space-y-4 text-gray-400 font-medium">
                    <li className="hover:text-white cursor-pointer transition-colors">Water Mitigation</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Mold Remediation</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Sewage Cleanup</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Storm Damage</li>
                </ul>
            </div>
             <div>
                <h4 className="font-bold mb-8 text-white tracking-wide">Contact</h4>
                <ul className="space-y-6 text-gray-400 font-medium">
                    <li className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-blue-400"/>
                        <a href="tel:+18774970007" className="text-white text-lg font-bold hover:text-blue-400 transition-colors">(877) 497-0007</a>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                        <span>
                            8466D Tyco Rd<br/>
                            Vienna, VA 22182
                        </span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0"></div>
                        <span className="text-green-400">Available 24/7</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="max-w-[1440px] mx-auto mt-24 pt-8 border-t border-white/10 text-center md:text-left text-gray-500 text-sm">
            © {new Date().getFullYear()} Flood Doctor. All rights reserved. | DPOR License #2705155505
        </div>
      </footer>

    </div>
  );
}
