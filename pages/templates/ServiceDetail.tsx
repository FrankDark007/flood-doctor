import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
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
  Calendar,
  Droplets,
  Wind,
  Wrench,
  Search,
  MapPin
} from 'lucide-react';
import PageMeta from '../../components/ui/PageMeta';
import Button from '../../components/ui/Button';
import { ServiceData } from '../../types';
import ServiceAreaLinks from '../../components/sections/ServiceAreaLinks';
import RelatedServices from '../../components/sections/RelatedServices';

/**
 * ServiceDetail - Google "How It Works" Inspired Layout (ServiceDetailDevA)
 *
 * Key patterns from Google Ads "How It Works" page:
 * - Clean hero with animated illustration
 * - Numbered process steps with alternating layout
 * - Expert support callout with visual
 * - Resource cards grid
 * - Expandable FAQ accordion
 */

interface ServiceDetailProps {
  service: ServiceData;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set([0]));
  const [allExpanded, setAllExpanded] = useState(false);
  const [activeProcessTab, setActiveProcessTab] = useState(0);

  const serviceName = service?.title || 'Water Damage Restoration';
  const serviceTagline = service?.heroIntro || service?.shortDescription || 'Professional restoration services for Northern Virginia homeowners.';

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'process', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'expertise', label: 'Our Expertise' },
    { id: 'faq', label: 'FAQ' }
  ];

  // Track active section on scroll using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all section elements
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Process steps - derived from service data or defaults
  const processSteps = service?.whatWeDo?.slice(0, 4).map((step, idx) => ({
    number: String(idx + 1).padStart(2, '0'),
    title: step.title,
    description: step.description,
    details: step.substeps || []
  })) || [
    {
      number: '01',
      title: 'Emergency Assessment',
      description: 'Our certified technicians arrive within 60 minutes to assess the damage.',
      details: ['24/7 emergency response', 'Advanced detection equipment', 'Detailed damage report']
    },
    {
      number: '02',
      title: 'Water Extraction',
      description: 'Industrial-grade pumps remove standing water quickly.',
      details: ['Commercial-grade equipment', 'Minimizes structural damage', 'Prevents mold growth']
    },
    {
      number: '03',
      title: 'Drying & Dehumidification',
      description: 'Strategic placement of air movers and dehumidifiers ensures complete moisture removal.',
      details: ['Scientific drying protocols', 'Daily moisture monitoring', 'Complete documentation']
    },
    {
      number: '04',
      title: 'Restoration & Repair',
      description: 'From minor repairs to full reconstruction, we restore your property to pre-loss condition.',
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

  // FAQ items - from service data or defaults
  const faqs = service?.faqs || [
    {
      question: 'How quickly can you respond to an emergency?',
      answer: 'Our technicians are dispatched immediately and typically arrive within 60 minutes. We operate 24/7/365, including holidays.'
    },
    {
      question: 'Will my insurance cover the restoration?',
      answer: 'Most homeowner policies cover water damage from sudden events like burst pipes or appliance failures. We work directly with all major insurance carriers.'
    },
    {
      question: 'How long does the drying process take?',
      answer: 'Most properties are fully dried within 3-5 days. We monitor moisture levels daily and provide a detailed drying timeline.'
    }
  ];

  // Tabbed process steps
  const tabbedProcess = [
    {
      id: 'assessment',
      label: 'Assessment',
      icon: Search,
      title: 'Comprehensive damage assessment using advanced technology',
      description: 'Our technicians use thermal cameras and moisture meters to detect water in walls, floors, and ceilings.',
      points: [
        'Infrared thermal imaging identifies hidden moisture',
        'Moisture mapping documents affected areas',
        'Category and class determination',
        'Detailed scope of work created'
      ]
    },
    {
      id: 'extraction',
      label: 'Extraction',
      icon: Droplets,
      title: 'Rapid water removal with industrial equipment',
      description: 'We deploy commercial-grade pumps and extractors to remove standing water quickly.',
      points: [
        'Industrial pumps remove up to 10,000 gallons/hour',
        'Truck-mounted and portable extractors',
        'Carpet and pad water extraction',
        'Minimizes secondary damage'
      ]
    },
    {
      id: 'drying',
      label: 'Drying',
      icon: Wind,
      title: 'Scientific drying with daily monitoring',
      description: 'Strategic placement of air movers and dehumidifiers ensures complete moisture removal.',
      points: [
        'Commercial air movers and dehumidifiers',
        'Daily moisture readings documented',
        'IICRC drying standards followed',
        'Prevents mold and structural issues'
      ]
    },
    {
      id: 'restoration',
      label: 'Restoration',
      icon: Wrench,
      title: 'Complete repairs and reconstruction',
      description: 'From minor repairs to full reconstruction, we restore your property to pre-loss condition.',
      points: [
        'Drywall, flooring, and paint repairs',
        'Licensed and insured contractors',
        'Insurance documentation provided',
        'Final walkthrough and sign-off'
      ]
    }
  ];

  // Customer testimonials
  const testimonials = [
    {
      quote: "They arrived within 45 minutes of my call. The water was already an inch deep in my basement. By morning, it was completely extracted.",
      author: 'Sarah M.',
      location: 'Arlington, VA',
      rating: 5
    },
    {
      quote: "What impressed me most was their communication. My project manager called with updates every day and explained exactly what was happening.",
      author: 'Michael R.',
      location: 'Fairfax, VA',
      rating: 5
    },
    {
      quote: "They dealt with my insurance company directly. I didn't have to fight for anything—they documented everything properly.",
      author: 'Jennifer L.',
      location: 'McLean, VA',
      rating: 5
    }
  ];

  // FAQ Schema for SEO
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
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
        title={`${serviceName} | Flood Doctor`}
        description={service?.metaDescription || serviceTagline}
        schema={faqSchema}
      />

      {/* Hero Section - Clean with Stats */}
      <section id="overview" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted mb-6 flex-wrap">
                <Link to="/" className="hover:text-primary">Home</Link>
                <ChevronRight size={14} />
                <Link to="/services/" className="hover:text-primary">Services</Link>
                <ChevronRight size={14} />
                <Link to={`/services/${service?.audience?.toLowerCase() || 'residential'}/`} className="hover:text-primary">
                  {service?.audience === 'COMMERCIAL' ? 'Commercial' : 'Residential'}
                </Link>
                <ChevronRight size={14} />
                <span className="text-text">{serviceName}</span>
              </nav>

              <h1 className="font-display text-4xl lg:text-5xl font-semibold text-text mb-6 leading-tight">
                {service?.heroHeading || serviceName}
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
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt={`${serviceName} restoration services`}
                  className="w-full h-full object-cover"
                />
                {/* Video play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
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

      {/* Sticky Section Navigation - Google Workspace style pill container */}
      <div className="sticky top-20 z-30 py-3">
        <div className="max-w-6xl mx-auto px-6 flex justify-center">
          <nav className="inline-flex items-center gap-1 bg-white rounded-full px-2 py-1.5 shadow-lg shadow-black/5 ring-1 ring-gray-900/5">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap ${
                  activeSection === section.id
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

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
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                    <img
                      src={[
                        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
                        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
                        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
                        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80'
                      ][idx % 4]}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Restoration Process - Tabbed */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
              Our Restoration Process
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              A proven 4-step approach that restores your property quickly and completely.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12 overflow-x-auto">
            <div className="inline-flex items-center gap-2 p-1.5 bg-white rounded-full shadow-sm border border-gray-100">
              {tabbedProcess.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveProcessTab(idx)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    activeProcessTab === idx
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-muted hover:text-text hover:bg-gray-50'
                  }`}
                >
                  <tab.icon size={16} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-text mb-4">
                {tabbedProcess[activeProcessTab].title}
              </h3>
              <p className="text-lg text-muted leading-relaxed mb-8">
                {tabbedProcess[activeProcessTab].description}
              </p>
              <ul className="space-y-4">
                {tabbedProcess[activeProcessTab].points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-text">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 shadow-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* What Our Customers Say */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text">
              What Our Customers Say
            </h2>
            <Link
              to="/reviews/"
              className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View All Reviews
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 lg:p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-amber-400 fill-amber-400" size={18} />
                  ))}
                </div>
                <p className="text-text leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={[
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
                      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80',
                      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80'
                    ][idx % 3]}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-text">{testimonial.author}</div>
                    <div className="text-sm text-muted flex items-center gap-1">
                      <MapPin size={12} />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button to="/reviews/" variant="outline">
              View All Reviews
            </Button>
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
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80"
                  alt="Northern Virginia home"
                  className="w-full h-full object-cover"
                />
              </div>
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

      {/* FAQ Accordion - Google Style */}
      <section id="faq" className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header - Google Style */}
          <div className="text-center mb-16">
            <h2 className="text-[32px] lg:text-[40px] font-normal text-[#202124] tracking-tight">
              Frequently asked questions
            </h2>
          </div>

          {/* Expand All Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => {
                if (allExpanded) {
                  setOpenFaqs(new Set());
                  setAllExpanded(false);
                } else {
                  setOpenFaqs(new Set(faqs.map((_, i) => i)));
                  setAllExpanded(true);
                }
              }}
              className="inline-flex items-center gap-1 text-[#1a73e8] hover:text-[#1557b0] text-[14px] font-medium transition-colors"
            >
              {allExpanded ? 'Collapse all' : 'Expand all'}
              <ChevronsUpDown size={18} />
            </button>
          </div>

          {/* FAQ Items */}
          <div className="border-t border-[#e8eaed]">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqs.has(idx);
              return (
                <div key={idx} className="border-b border-[#e8eaed]">
                  <button
                    onClick={() => {
                      const newSet = new Set(openFaqs);
                      if (isOpen) {
                        newSet.delete(idx);
                      } else {
                        newSet.add(idx);
                      }
                      setOpenFaqs(newSet);
                      setAllExpanded(newSet.size === faqs.length);
                    }}
                    className="w-full py-5 flex items-center justify-between text-left"
                  >
                    <span className={`text-[20px] font-medium pr-8 leading-[1.4] ${
                      isOpen ? 'text-[#174ea6]' : 'text-[#1a73e8]'
                    }`}>
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp size={24} className="text-[#174ea6] flex-shrink-0" />
                    ) : (
                      <ChevronDown size={24} className="text-[#1a73e8] flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="pb-5 pr-12 border-t border-[#e8eaed]">
                      <p className="text-[16px] text-[#5f6368] leading-[1.75] pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* View More Button */}
          <div className="mt-12">
            <Link
              to="/resources/faq/"
              className="inline-flex items-center px-6 py-2.5 rounded-full border border-[#dadce0] text-[#1a73e8] text-[14px] font-medium hover:bg-[#f8f9fa] transition-colors"
            >
              View more FAQs
            </Link>
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

      {/* Related Services and Service Area Links */}
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
