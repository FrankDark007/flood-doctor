
import React, { useState, useEffect } from 'react';
import { ServiceData } from '../../types';
import PageMeta from '../../components/ui/PageMeta';
import Hero from '../../components/sections/Hero';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import ServiceDetailHeroAnimation from '../../components/graphics/ServiceDetailHeroAnimation';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import ServiceAreaLinks from '../../components/sections/ServiceAreaLinks';
import RelatedServices from '../../components/sections/RelatedServices';
import Button from '../../components/ui/Button';
import EmergencyServiceCard from '../../components/ui/EmergencyServiceCard';
import ProcessFlow from '../../components/sections/ProcessFlow'; 
import { 
  CheckCircle2, 
  AlertTriangle, 
  Activity, 
  Shield,
  Clock,
  Truck,
  Volume2,
  Calendar,
  Microscope,
  FileCheck,
  Scale,
  Award,
  ArrowRight,
  Phone,
  // New icons for Deep Dive
  Zap,
  Droplets,
  Wind,
  Flame,
  Leaf,
  Search,
  Wallet,
  BrainCircuit,
  ShieldCheck,
  Hammer,
  Thermometer,
  Layers,
  Sparkles,
  Box,
  FileText,
  CloudFog,
  FlaskConical
} from 'lucide-react';

interface ServiceDetailProps {
  service: ServiceData;
}

// Helper to map specification keys to icons
const getSpecIcon = (key: string) => {
  const normalized = key.toLowerCase();
  if (normalized.includes('time') || normalized.includes('turnaround')) return Clock;
  if (normalized.includes('arrival') || normalized.includes('logistics')) return Truck;
  if (normalized.includes('noise') || normalized.includes('sound')) return Volume2;
  if (normalized.includes('daily') || normalized.includes('frequency')) return Calendar;
  if (normalized.includes('lab') || normalized.includes('analysis')) return Microscope;
  if (normalized.includes('report') || normalized.includes('doc')) return FileCheck;
  if (normalized.includes('standard') || normalized.includes('regulation')) return Scale;
  if (normalized.includes('cert') || normalized.includes('qual')) return Award;
  return Activity; // Default
};

// Helper to map Deep Dive card titles to icons
const getCardIcon = (title: string) => {
  const text = title.toLowerCase();
  
  if (text.includes('science') || text.includes('lab') || text.includes('chem')) return FlaskConical;
  if (text.includes('health') || text.includes('safety') || text.includes('protect')) return ShieldCheck;
  if (text.includes('cost') || text.includes('insurance') || text.includes('money') || text.includes('value')) return Wallet;
  if (text.includes('time') || text.includes('speed') || text.includes('fast') || text.includes('quick') || text.includes('clock')) return Clock;
  if (text.includes('water') || text.includes('wet') || text.includes('moisture') || text.includes('leak')) return Droplets;
  if (text.includes('mold') || text.includes('spore') || text.includes('growth')) return Leaf;
  
  // Specific smoke check before fire to ensure titles with both get the smoke icon
  if (text.includes('smoke') || text.includes('soot')) return CloudFog;
  if (text.includes('fire') || text.includes('burn')) return Flame;
  
  if (text.includes('tech') || text.includes('equipment') || text.includes('machine') || text.includes('monitor') || text.includes('ozon')) return BrainCircuit;
  if (text.includes('hidden') || text.includes('find') || text.includes('detect') || text.includes('inspect')) return Search;
  if (text.includes('process') || text.includes('step') || text.includes('method')) return Layers;
  if (text.includes('odor') || text.includes('smell') || text.includes('air') || text.includes('vent')) return Wind;
  if (text.includes('repair') || text.includes('construct') || text.includes('build') || text.includes('material')) return Hammer;
  if (text.includes('clean') || text.includes('sanitize') || text.includes('wipe')) return Sparkles;
  if (text.includes('temp') || text.includes('heat') || text.includes('freeze') || text.includes('therm')) return Thermometer;
  if (text.includes('document') || text.includes('report') || text.includes('record')) return FileText;
  if (text.includes('pack') || text.includes('content') || text.includes('store') || text.includes('item')) return Box;
  
  return Zap; // Fallback
};

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  // Breadcrumbs construction
  const breadcrumbs = [
    { label: 'Services', path: '/services/' },
    { 
      label: service.audience === 'RESIDENTIAL' ? 'Residential' : 'Commercial', 
      path: `/services/${service.audience.toLowerCase()}/` 
    },
    { label: service.title, path: '#' }
  ];

  // Sticky Nav Logic
  const [activeSection, setActiveSection] = useState('overview');
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'process', label: 'Process' },
    { id: 'specs', label: 'Expectations' },
    { id: 'safety', label: 'Safety' },
    { id: 'faq', label: 'FAQ' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 160; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const faqSchema = service.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : undefined;

  return (
    <main className="flex-grow bg-white">
      <PageMeta 
        title={service.title} 
        description={service.shortDescription}
        schema={faqSchema}
      />

      <Hero 
        title={service.heroHeading || service.title}
        subtitle={service.heroIntro || service.shortDescription}
        visual={<ServiceDetailHeroAnimation visualKey={service.heroVisualKey} />}
      />

      {/* Sticky Navigation */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur border-b border-gray-200 hidden lg:block transition-all duration-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center gap-8 h-14">
            <span className="font-display font-medium text-sm text-text">{service.title}</span>
            <div className="h-4 w-px bg-gray-200"></div>
            <nav className="flex gap-6 h-full">
              {sections.map(section => (
                <a 
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`text-sm font-medium transition-colors h-full flex items-center border-b-2 px-1 ${
                    activeSection === section.id 
                      ? 'text-primary border-primary' 
                      : 'text-gray-500 border-transparent hover:text-gray-900'
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </nav>
            <div className="ml-auto flex items-center">
                <Button href="tel:8774970007" variant="primary" className="h-9 px-4 text-xs font-bold uppercase tracking-wide rounded-full">
                    <Phone size={12} className="mr-2" /> (877) 497-0007
                </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 py-4">
           <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* =========================================================================
          NEW SEO CONTENT SECTION (Two-Column Deep Dive)
          ========================================================================= */}
      {service.contentSections && (
        <section className="py-24 lg:py-32 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
              
              {/* Left Column: Visual Placeholder */}
              <div className="sticky top-40">
                  <div className="relative aspect-[4/3] w-full rounded-[32px] bg-[#f8f9fa] overflow-hidden border border-gray-200 shadow-none flex items-center justify-center group">
                    {/* Abstract Geometry Placeholder (Pattern) */}
                    <div className="absolute inset-0 opacity-[0.05]" 
                         style={{ backgroundImage: 'radial-gradient(#1a73e8 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                    </div>
                    {/* Large Letter Representation */}
                    <div className="text-gray-200 font-display font-bold text-9xl opacity-50 transform -rotate-12 select-none group-hover:scale-110 transition-transform duration-1000 ease-out">
                        {service.title.charAt(0)}
                    </div>
                    {/* Floating Label */}
                    <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-google border border-gray-100 text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Deep Dive: {service.title}
                    </div>
                  </div>
              </div>

              {/* Right Column: SEO Content */}
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-medium text-text mb-8 leading-[1.1] tracking-tight">
                  {service.contentSections.heading}
                </h2>
                <p className="font-sans text-xl md:text-2xl text-gray-500 leading-relaxed mb-20 font-light">
                  {service.contentSections.intro}
                </p>
                
                <div className="space-y-16">
                  {service.contentSections.cards.map((card, idx) => {
                    const Icon = getCardIcon(card.title);
                    return (
                      <div key={idx} className="flex gap-8 group">
                        <div className="shrink-0 pt-1">
                          <div className="w-16 h-16 rounded-[2rem] bg-blue-50 text-primary flex items-center justify-center group-hover:scale-110 group-hover:shadow-google-hover transition-all duration-300 shadow-sm border border-blue-100/50">
                             <Icon size={28} strokeWidth={1.5} />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-display font-medium text-gray-900 mb-4 group-hover:text-primary transition-colors">
                            {card.title}
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed font-sans text-muted">
                            {card.content}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Main Content Layout */}
      <div className="max-w-[1440px] mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-8">
            
            {/* 1. Overview / When to Call (Refined Editorial Style) */}
            <div id="overview" className="scroll-mt-40 mb-32">
              <div className="bg-gray-50 rounded-[32px] p-10 lg:p-14 border border-transparent">
                <div className="flex items-start gap-6 mb-10">
                  <div className="p-3 bg-white rounded-full text-primary shadow-sm hidden sm:block border border-gray-100">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h2 className="font-display text-3xl md:text-4xl font-medium text-text mb-6 tracking-tight">
                      When to initiate service
                    </h2>
                    {service.intro_whenToCall && (
                      <p className="font-sans text-gray-600 text-lg md:text-xl leading-relaxed mb-10 font-light">
                        {service.intro_whenToCall}
                      </p>
                    )}
                  </div>
                </div>

                {service.whenToCall && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {service.whenToCall.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-2">
                        <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary shadow-sm">
                            <CheckCircle2 size={14} />
                        </div>
                        <span className="text-base text-gray-700 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 2. Process */}
            <div id="process" className="scroll-mt-40 mb-32">
              <h2 className="font-display text-4xl font-medium text-text mb-12 tracking-tight">Restoration Process</h2>
              <div className="relative">
                {service.whatWeDo && (
                  <ProcessFlow 
                    items={service.whatWeDo} 
                    type={service.infographicType}
                  />
                )}
              </div>
            </div>

            {/* 3. What to Expect (Timeline & Logistics) */}
            <div id="specs" className="scroll-mt-40 mb-32">
              <h2 className="font-display text-4xl font-medium text-text mb-12 tracking-tight">What to Expect: Timeline & Logistics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.whatToExpect && Object.entries(service.whatToExpect).map(([key, value]) => {
                  if (!value) return null;
                  const Icon = getSpecIcon(key);
                  const label = key.replace(/([A-Z])/g, ' $1').trim(); 
                  
                  return (
                    <div key={key} className="group relative overflow-hidden bg-white p-10 rounded-[32px] border border-gray-200 hover:border-blue-200 transition-all duration-300">
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-primary mb-6 group-hover:bg-blue-50 transition-colors duration-300">
                          <Icon size={28} strokeWidth={1.5} />
                        </div>
                        
                        <h3 className="font-display text-xl font-bold text-gray-900 mb-4 capitalize">
                          {label}
                        </h3>
                        
                        <p className="font-sans text-gray-600 leading-relaxed text-lg">
                          {value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Safety (Sophisticated Advisory Style) */}
            <div id="safety" className="scroll-mt-40 mb-32">
              {service.safety && (
                <div className="bg-white rounded-[32px] p-10 lg:p-14 border border-gray-200 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#f9ab00]"></div>
                  
                  <div className="flex items-center gap-5 mb-10 pl-6">
                    <div className="p-3 bg-orange-50 rounded-full text-[#f9ab00]">
                      <AlertTriangle size={28} />
                    </div>
                    <h2 className="font-display text-3xl font-medium text-text tracking-tight">Safety Protocols</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mb-10 pl-6">
                    {service.safety.items.slice(0, 6).map((item, i) => (
                      <li key={i} className="flex items-start gap-4 list-none font-sans text-gray-700 text-lg">
                        <span className="w-2 h-2 rounded-full bg-[#f9ab00] mt-2.5 shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </div>

                  {service.safety.kidsPets && (
                    <div className="ml-6 bg-gray-50 p-8 rounded-2xl border border-gray-100 flex items-start gap-5">
                      <Shield size={28} className="text-green-600 shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">Family Safety Note</h4>
                        <p className="text-gray-600 leading-relaxed">{service.safety.kidsPets}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 5. FAQ */}
            <div id="faq" className="scroll-mt-40">
               {service.faqs && (
                  <GoogleStyleFAQ 
                    data={service.faqs} 
                    title="Common Questions" 
                    className="py-0 border-none"
                  />
               )}
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-40 space-y-8">
              
              {/* Call to Action Card */}
              <div className="bg-white border border-gray-200 rounded-[32px] p-8 shadow-google hover:shadow-google-hover transition-shadow">
                <h3 className="font-display text-xl font-medium text-text mb-2">Need {service.title}?</h3>
                <p className="text-sm text-muted mb-6 leading-relaxed">
                  Our certified team is ready to deploy. Average response time is 60 minutes in your area.
                </p>
                
                <div className="space-y-3">
                  <Button href="tel:8774970007" variant="primary" fullWidth className="h-14 text-base shadow-none bg-[#1a73e8] hover:bg-[#1557b0] text-white border-transparent">
                    <Phone size={20} className="mr-2" /> (877) 497-0007
                  </Button>
                  <Button to="/request/" variant="secondary" fullWidth className="h-14 text-base bg-white hover:bg-gray-50 text-gray-700 border-gray-300">
                    Request Online
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-muted mb-2">
                    <span>Response Time</span>
                    <span className="font-bold text-[#1e8e3e]">~60 min</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span>Service Area</span>
                    <span className="font-bold text-text">NoVA, DC, MD</span>
                  </div>
                </div>
              </div>

              <EmergencyServiceCard variant="expanded" />
            </div>
          </div>

        </div>
      </div>

      <RelatedServices 
          currentServiceId={service.id} 
          category={service.category} 
          audience={service.audience} 
      />

      <ServiceAreaLinks serviceTitle={service.title} serviceSlug={service.slug} />
    </main>
  );
};

export default ServiceDetail;
