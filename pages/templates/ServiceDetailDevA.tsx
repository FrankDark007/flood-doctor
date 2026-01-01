import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Phone,
  ChevronRight,
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  Play,
  Star,
  Users,
  Award,
  Zap,
  FileText,
  MessageSquare,
  Calendar
} from 'lucide-react';
import PageMeta from '../../components/ui/PageMeta';
import Button from '../../components/ui/Button';
import { ServiceData } from '../../types/service';
import { SERVICES } from '../../data/services';

/**
 * ServiceDetailDevA - Google "How It Works" Inspired Layout
 *
 * Key patterns from Google Ads "How It Works" page:
 * - Clean hero with animated illustration
 * - Numbered process steps with alternating layout
 * - Expert support callout with visual
 * - Resource cards grid
 * - Expandable FAQ accordion
 */

interface ServiceDetailDevAProps {
  service?: ServiceData;
}

const ServiceDetailDevA: React.FC<ServiceDetailDevAProps> = ({ service }) => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Demo service for preview
  const demoService = service || SERVICES[0];
  const serviceName = demoService?.title || 'Water Damage Restoration';
  const serviceTagline = demoService?.heroIntro || 'Professional water damage restoration services for Northern Virginia homeowners.';

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'process', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'expertise', label: 'Our Expertise' },
    { id: 'faq', label: 'FAQ' }
  ];

  // Process steps - Google "How It Works" style
  const processSteps = [
    {
      number: '01',
      title: 'Emergency Assessment',
      description: 'Our certified technicians arrive within 60 minutes to assess the damage. We use thermal imaging and moisture meters to identify all affected areas—even behind walls.',
      image: '/images/process-assessment.jpg',
      details: ['24/7 emergency response', 'Advanced detection equipment', 'Detailed damage report']
    },
    {
      number: '02',
      title: 'Water Extraction',
      description: 'Industrial-grade pumps remove standing water quickly. We extract up to 10,000 gallons per hour, preventing further damage to your property.',
      image: '/images/process-extraction.jpg',
      details: ['Commercial-grade equipment', 'Minimizes structural damage', 'Prevents mold growth']
    },
    {
      number: '03',
      title: 'Drying & Dehumidification',
      description: 'Strategic placement of air movers and dehumidifiers ensures complete moisture removal. Daily monitoring guarantees your property reaches safe moisture levels.',
      image: '/images/process-drying.jpg',
      details: ['Scientific drying protocols', 'Daily moisture monitoring', 'Complete documentation']
    },
    {
      number: '04',
      title: 'Restoration & Repair',
      description: 'From minor repairs to full reconstruction, we restore your property to pre-loss condition. Our team handles everything so you have one point of contact.',
      image: '/images/process-restoration.jpg',
      details: ['Licensed contractors', 'Insurance coordination', 'Quality guarantee']
    }
  ];

  // Benefits grid
  const benefits = [
    { icon: Clock, title: '60-Minute Response', description: 'Technicians on-site within an hour, 24/7' },
    { icon: Shield, title: 'IICRC Certified', description: 'Industry-leading certifications and training' },
    { icon: FileText, title: 'Insurance Billing', description: 'Direct billing with all major carriers' },
    { icon: Award, title: '5-Star Rated', description: '500+ verified 5-star reviews' },
    { icon: Users, title: 'Dedicated Manager', description: 'Single point of contact throughout' },
    { icon: Zap, title: 'Advanced Equipment', description: 'Commercial-grade restoration tools' }
  ];

  // FAQ items
  const faqs = [
    {
      question: 'How quickly can you respond to an emergency?',
      answer: 'Our technicians are dispatched immediately and typically arrive within 60 minutes. We operate 24/7/365, including holidays.'
    },
    {
      question: 'Will my insurance cover the restoration?',
      answer: 'Most homeowner policies cover water damage from sudden events like burst pipes or appliance failures. We work directly with all major insurance carriers and can bill them directly.'
    },
    {
      question: 'How long does the drying process take?',
      answer: 'Most properties are fully dried within 3-5 days. We monitor moisture levels daily and provide a detailed drying timeline at the start of your project.'
    },
    {
      question: 'Do I need to leave my home during restoration?',
      answer: 'In most cases, you can stay in your home. We\'ll let you know if any areas need to be off-limits and work around your schedule.'
    },
    {
      question: 'What certifications do your technicians have?',
      answer: 'All technicians are IICRC certified in Water Damage Restoration (WRT), Applied Structural Drying (ASD), and related specialties.'
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`${serviceName} | Flood Doctor`}
        description={demoService?.metaDescription || serviceTagline}
      />

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            <nav className="flex items-center gap-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    activeSection === section.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted hover:text-text hover:bg-gray-50'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a href="tel:8774970007" className="text-sm text-muted hover:text-primary flex items-center gap-2">
                <Phone size={16} />
                <span className="hidden sm:inline">(877) 497-0007</span>
              </a>
              <Button to="/request/" variant="primary" size="sm">
                Get Help Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Clean with Stats */}
      <section id="overview" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted mb-6">
                <Link to="/" className="hover:text-primary">Home</Link>
                <ChevronRight size={14} />
                <Link to="/services/" className="hover:text-primary">Services</Link>
                <ChevronRight size={14} />
                <span className="text-text">{serviceName}</span>
              </nav>

              <h1 className="font-display text-4xl lg:text-5xl font-semibold text-text mb-6 leading-tight">
                {serviceName}
              </h1>
              <p className="text-xl text-muted leading-relaxed mb-8">
                {serviceTagline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button to="/request/" variant="primary" size="lg" className="group">
                  Request Service
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button href="tel:8774970007" variant="outline" size="lg">
                  <Phone size={18} className="mr-2" />
                  Call (877) 497-0007
                </Button>
              </div>

              {/* Trust Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <div className="font-display text-3xl font-bold text-primary">60</div>
                  <div className="text-sm text-muted">Minute Response</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted">5-Star Reviews</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-blue-100 to-emerald-50 overflow-hidden shadow-xl">
                {/* Placeholder for hero image/video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    <Play size={32} className="text-primary ml-1" />
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <Star className="text-amber-500" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-text">Excellent Service</div>
                  <div className="text-sm text-muted">Rated 4.9/5 on Google</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Numbered Steps with Alternating Layout */}
      <section id="process" className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap size={16} />
              Our Process
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
              How {serviceName} Works
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              A proven 4-step process that gets your property back to normal—fast.
            </p>
          </div>

          <div className="space-y-20">
            {processSteps.map((step, idx) => (
              <div
                key={step.number}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="text-6xl font-display font-bold text-primary/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold text-text mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-text">
                        <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section id="benefits" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
              Why Choose Flood Doctor
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Industry-leading expertise backed by certifications and real results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold text-text mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Support Callout */}
      <section id="expertise" className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                <MessageSquare size={16} />
                Expert Support
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-6">
                Get personalized guidance from our restoration experts
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Not sure where to start? Our project managers are available 24/7 to answer questions, provide estimates, and guide you through the restoration process.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-medium text-text">Free damage assessment</div>
                    <div className="text-sm text-muted">No obligation estimates within 24 hours</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-medium text-text">Insurance guidance</div>
                    <div className="text-sm text-muted">Help navigating the claims process</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-medium text-text">24/7 availability</div>
                    <div className="text-sm text-muted">Emergency support when you need it</div>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/contact/" variant="primary">
                  Schedule Consultation
                </Button>
                <Button href="tel:8774970007" variant="outline">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-100 to-blue-50 overflow-hidden" />
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-text">Free Estimate</div>
                    <div className="text-sm text-muted">Typically within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted">
              Common questions about {serviceName.toLowerCase()}.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-text pr-4">{faq.question}</span>
                  <ChevronRight
                    size={20}
                    className={`text-muted flex-shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5">
                    <p className="text-muted leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-muted mb-4">Still have questions?</p>
            <Button to="/resources/faq/" variant="outline">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-6">
            Ready to Restore Your Property?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Get a free estimate and expert guidance. Our team responds within 60 minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/request/" variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
              Request Service
            </Button>
            <Button href="tel:8774970007" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Phone size={18} className="mr-2" />
              (877) 497-0007
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetailDevA;
