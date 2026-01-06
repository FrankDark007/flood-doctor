import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Droplets,
  Wind,
  ShieldCheck,
  Phone,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Thermometer,
  Waves,
  Activity
} from 'lucide-react';

// --- SEO CONTENT STRATEGY ---
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
      { q: "How long does the drying process take?", a: "Typically 3 to 5 days, depending on the Class of water loss and the materials affected. Dense hardwoods may take longer." },
      { q: "Will you work with my insurance adjuster?", a: "Yes. We use Xactimate, the same software insurance adjusters use, to ensure your claim is processed quickly and accurately." },
      { q: "Can I stay in my home during restoration?", a: "For Category 1 (Clean) water, usually yes. For Category 2 or 3 (Sewage), we recommend temporary relocation for your safety." }
    ]
  }
};

// --- ENHANCED COMPONENTS ---

interface GoogleButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  className?: string;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({ children, variant = 'primary', className = '' }) => {
  const base = "inline-flex items-center justify-center px-8 py-4 font-bold tracking-wide transition-all duration-300 rounded-full text-sm group relative overflow-hidden";
  const styles = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-500/30 hover:-translate-y-1",
    secondary: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300",
    text: "text-blue-600 hover:bg-blue-50 px-6"
  };
  return (
    <button className={`${base} ${styles[variant]} ${className}`}>
      <span className="relative z-10 flex items-center">{children}</span>
    </button>
  );
};

interface GoogleCardProps {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
  noHover?: boolean;
}

const GoogleCard: React.FC<GoogleCardProps> = ({ children, className = '', highlight = false, noHover = false }) => {
  return (
    <div className={`p-8 md:p-10 rounded-[32px] transition-all duration-300 border ${
      highlight
        ? 'bg-blue-50/80 border-blue-200'
        : 'bg-white border-white/50'
    } ${!noHover ? 'hover:scale-[1.01] hover:shadow-2xl hover:shadow-slate-200/50 hover:border-blue-100/50' : ''} ${className}`}>
      {children}
    </div>
  );
};

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children, subtitle }) => (
  <div className="mb-12 md:mb-16">
    {subtitle && (
      <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[11px] font-extrabold tracking-widest uppercase mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
        {subtitle}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
      {children}
    </h2>
  </div>
);

// --- HERO SECTION ---
const HeroSection = () => (
  <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
    {/* Background Blobs */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 pointer-events-none">
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl mix-blend-multiply filter animate-pulse"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-300 rounded-full blur-3xl mix-blend-multiply filter animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-indigo-300 rounded-full blur-3xl mix-blend-multiply filter animate-pulse" style={{ animationDelay: '4s' }}></div>
    </div>

    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">

      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-md border border-white/60 rounded-full text-slate-600 text-sm font-semibold mb-8 shadow-sm">
        <Activity className="w-4 h-4 text-blue-600" />
        <span>Average Response Time: <span className="text-slate-900 font-bold">45 Minutes</span></span>
      </div>

      <h1 className="text-5xl lg:text-[80px] font-bold tracking-tight text-slate-900 mb-8 leading-[1.05] max-w-5xl mx-auto">
        Restoring your home to <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">pre-loss condition.</span>
      </h1>

      <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
        The premier water damage mitigation service for Northern Virginia. Clinical precision, IICRC certified protocols, and white-glove service.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
        <GoogleButton>
          Get Emergency Help
          <ArrowRight className="ml-2 w-5 h-5" />
        </GoogleButton>
        <GoogleButton variant="secondary">
          View Our Process
        </GoogleButton>
      </div>

      {/* Immersive Hero Image Card */}
      <div className="relative max-w-6xl mx-auto">
        <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white aspect-[21/9] group">
          <div className="absolute inset-0 bg-slate-900/10 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80')" }}
          ></div>

          {/* Floating Stats */}
          <div className="absolute bottom-8 left-8 z-20 flex gap-4">
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Live Status</p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <p className="text-lg font-bold text-slate-900">Crews Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProcessBentoGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-16">
    <div className="md:col-span-7 bg-white rounded-[32px] p-12 flex flex-col justify-between overflow-hidden relative group min-h-[360px] shadow-sm hover:shadow-xl transition-all border border-slate-100">
      <div className="relative z-10">
        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/20 rotate-3 transition-transform group-hover:rotate-6">
          <Droplets className="text-white w-8 h-8" />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">1. Extraction</h3>
        <p className="text-slate-500 text-lg leading-relaxed max-w-md">
          Immediate removal of standing water using truck-mounted vacuum units. We simultaneously set up containment barriers.
        </p>
      </div>
      <div className="absolute right-[-40px] bottom-[-40px] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
        <Droplets size={350} />
      </div>
    </div>

    <div className="md:col-span-5 bg-slate-900 rounded-[32px] p-12 text-white flex flex-col justify-between min-h-[360px] shadow-xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
      <div className="relative z-10">
        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/10">
          <Thermometer className="text-white w-8 h-8" />
        </div>
        <h3 className="text-3xl font-bold mb-4">2. Drying</h3>
        <p className="text-slate-400 text-lg leading-relaxed">
          High-velocity air movers and industrial dehumidifiers pull moisture from deep within framing.
        </p>
      </div>
    </div>

    <div className="md:col-span-4 bg-white rounded-[32px] p-10 border border-slate-100 hover:shadow-xl transition-all group">
      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Wind className="text-orange-600 w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">3. Monitoring</h3>
      <p className="text-slate-500 leading-relaxed">
        Daily moisture readings to track drying progress against drying goals.
      </p>
    </div>

    <div className="md:col-span-8 bg-blue-50 rounded-[32px] p-10 border border-blue-100/50 hover:shadow-xl transition-all flex flex-col md:flex-row gap-8 items-start md:items-center">
      <div className="flex-1">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
          <ShieldCheck className="text-blue-600 w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">4. Restoration</h3>
        <p className="text-slate-600 leading-relaxed">
          Application of botanical antimicrobials to prevent mold, followed by final reconstruction.
        </p>
      </div>
    </div>
  </div>
);

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
      const offset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
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
      <div className="flex flex-col lg:flex-row gap-20">

        {/* LEFT RAIL: Console Style Navigation */}
        <div className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-40">
            <h3 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-8 pl-6">
              Contents
            </h3>
            <div className="space-y-1 relative">
              {/* Active Indicator Line */}
              <div className="absolute left-0 w-0.5 bg-slate-200 h-full rounded-full"></div>

              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`group relative w-full text-left pl-6 py-3 text-sm font-medium transition-all duration-300 flex items-center justify-between ${
                      isActive
                        ? 'text-blue-600'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {/* Active Dot Overlay */}
                    {isActive && (
                      <div className="absolute left-[-2px] top-1/2 -translate-y-1/2 w-1.5 h-6 bg-blue-600 rounded-full shadow-lg shadow-blue-500/30 transition-all"></div>
                    )}
                    <span className={`${isActive ? 'translate-x-2' : ''} transition-transform`}>
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-12 p-6 bg-slate-900 rounded-[24px] text-white shadow-xl shadow-slate-900/20">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Emergency 24/7</p>
              <p className="text-xl font-bold mb-6">(877) 497-0007</p>
              <a
                href="tel:+18774970007"
                className="block w-full py-2 bg-white text-slate-900 text-xs font-bold rounded-full hover:bg-slate-200 transition-colors text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT RAIL: Content */}
        <div className="flex-1 min-w-0">
          <section id="overview" className="mb-32 scroll-mt-32">
            <SectionHeading subtitle={SEO_CONTENT.overview.subtitle}>
              {SEO_CONTENT.overview.title}
            </SectionHeading>
            <div className="prose prose-lg prose-slate max-w-none text-slate-600">
              {SEO_CONTENT.overview.content.map((paragraph, idx) => (
                <p key={idx} className="text-lg leading-[1.8] mb-6">{paragraph}</p>
              ))}
            </div>
          </section>

          <section id="process" className="mb-32 scroll-mt-32">
            <SectionHeading subtitle={SEO_CONTENT.process.subtitle}>
              {SEO_CONTENT.process.title}
            </SectionHeading>
            <p className="text-xl text-slate-600 leading-[1.8] mb-8 max-w-3xl">
              {SEO_CONTENT.process.intro}
            </p>
            <ProcessBentoGrid />
          </section>

          <section id="categories" className="mb-32 scroll-mt-32">
            <SectionHeading subtitle={SEO_CONTENT.categories.subtitle}>
              {SEO_CONTENT.categories.title}
            </SectionHeading>
            <p className="text-lg text-slate-600 leading-[1.8] mb-12">
              {SEO_CONTENT.categories.intro}
            </p>

            <div className="space-y-6">
              <GoogleCard highlight={true} className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Category 1: Clean Water</h4>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Originates from a sanitary source such as a broken water supply line, tub overflow, or failing appliance.
                  </p>
                  <div className="inline-flex items-center text-xs font-bold text-blue-700 bg-white border border-blue-100 px-3 py-1.5 rounded-full shadow-sm">
                    Goal: Restore in place
                  </div>
                </div>
              </GoogleCard>

              <GoogleCard className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Category 2: Gray Water</h4>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Contains significant contamination. Sources include washing machine overflow, toilet overflow with urine, or dishwasher leakage.
                  </p>
                  <div className="inline-flex items-center text-xs font-bold text-orange-700 bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-full">
                    Goal: Remove carpet pad, sanitize
                  </div>
                </div>
              </GoogleCard>

              <GoogleCard className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Category 3: Black Water</h4>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Grossly contaminated and pathogenic. Sources include sewage backup, flooding from rivers, or stagnant water.
                  </p>
                  <div className="inline-flex items-center text-xs font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1.5 rounded-full">
                    Goal: Full removal of porous materials
                  </div>
                </div>
              </GoogleCard>
            </div>
          </section>

          <section id="risks" className="mb-32 scroll-mt-32">
            <SectionHeading subtitle={SEO_CONTENT.risks.subtitle}>
              {SEO_CONTENT.risks.title}
            </SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="prose prose-lg text-slate-600">
                {SEO_CONTENT.risks.content.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <div className="bg-red-50 p-10 rounded-[32px] border border-red-100">
                <h4 className="text-red-900 font-bold text-lg mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Common Symptoms
                </h4>
                <ul className="space-y-4">
                  {['Respiratory congestion', 'Eye irritation', 'Persistent coughing', 'Skin rashes', 'Fatigue'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-red-900/70 font-medium">
                      <div className="w-2 h-2 rounded-full bg-red-400 shadow-sm"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="insurance" className="mb-32 scroll-mt-32">
            <SectionHeading subtitle={SEO_CONTENT.insurance.subtitle}>
              {SEO_CONTENT.insurance.title}
            </SectionHeading>
            <div className="bg-white rounded-[32px] p-10 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 text-blue-600">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">The "Sudden and Accidental" Rule</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {SEO_CONTENT.insurance.content[0]}
                  </p>
                </div>
              </div>
              <div className="pl-0 md:pl-24">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <p className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">Pro Tip: Document Everything</p>
                  <p className="text-slate-500">
                    Take photos of the source of the leak immediately. Do not throw away the failed part (e.g., the burst pipe section) until the adjuster sees it.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="mb-32 scroll-mt-32">
            <SectionHeading subtitle={SEO_CONTENT.faq.subtitle}>
              {SEO_CONTENT.faq.title}
            </SectionHeading>
            <div className="grid grid-cols-1 gap-6">
              {SEO_CONTENT.faq.items.map((item, idx) => (
                <GoogleCard key={idx} className="cursor-pointer group" noHover={false}>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {item.q}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-100 transition-colors shrink-0">
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                    </div>
                  </div>
                </GoogleCard>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

const GeminiWaterDamageV2: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-100 selection:text-blue-900">

      {/* Floating Glass Pill Navigation */}
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
        <nav className="pointer-events-auto bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl shadow-slate-200/40 rounded-full px-2 py-2 flex items-center gap-1">
          <div className="flex items-center gap-2 pl-4 pr-6 border-r border-slate-100">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/20">
              <Waves className="text-white w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-slate-900 tracking-tight">FLOOD DOCTOR</span>
          </div>

          <div className="hidden md:flex items-center">
            {['Water', 'Fire', 'Mold', 'Commercial'].map((item) => (
              <a href="#" key={item} className="px-5 py-2 text-sm font-semibold text-slate-500 hover:text-blue-600 hover:bg-slate-50 rounded-full transition-all">
                {item}
              </a>
            ))}
          </div>

          <button className="ml-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl">
            Contact
          </button>
        </nav>
      </div>

      <HeroSection />

      <StickyRailLayout />

      {/* Fat Footer */}
      <footer className="bg-slate-900 text-white pt-32 pb-12 px-6 border-t border-white/10 mt-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2 pr-12">
            <div className="flex items-center gap-2 mb-8">
              <Waves className="text-white w-8 h-8" />
              <span className="text-2xl font-bold tracking-tight">FLOOD DOCTOR</span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed text-lg mb-8">
              Setting the clinical standard for water damage restoration in the DC Metro area.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-white tracking-wide">Services</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">Water Mitigation</li>
              <li className="hover:text-white cursor-pointer transition-colors">Mold Remediation</li>
              <li className="hover:text-white cursor-pointer transition-colors">Sewage Cleanup</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-white tracking-wide">Contact</h4>
            <ul className="space-y-6 text-slate-400 font-medium">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400"/>
                <span className="text-white text-lg font-bold">(877) 497-0007</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 shrink-0 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                <span className="text-green-400 font-bold">Available 24/7</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto border-t border-white/10 pt-8 text-center text-slate-600 text-sm">
          © 2026 Flood Doctor. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default GeminiWaterDamageV2;
