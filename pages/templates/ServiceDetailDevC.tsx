import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  ChevronRight,
  ChevronDown,
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  Play,
  Star,
  Home,
  Building2,
  Droplets,
  AlertTriangle,
  Gauge,
  Calculator,
  FileCheck,
  HeadphonesIcon,
  Sparkles
} from 'lucide-react';
import PageMeta from '../../components/ui/PageMeta';
import Button from '../../components/ui/Button';
import { ServiceData } from '../../types';
import { SERVICES } from '../../data/services';

/**
 * ServiceDetailDevC - Google Ads Budget/Cost Page Inspired Layout
 *
 * Key patterns from Google Ads Campaign Budget page:
 * - Hero with overlapping image cards
 * - Interactive cost estimator/calculator tool
 * - Feature cards with hover effects
 * - Video/tutorial section
 * - Expert support callout
 * - Expandable FAQ
 */

interface ServiceDetailDevCProps {
  service?: ServiceData;
}

const ServiceDetailDevC: React.FC<ServiceDetailDevCProps> = ({ service }) => {
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential');
  const [damageLevel, setDamageLevel] = useState<'minor' | 'moderate' | 'severe'>('moderate');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const demoService = service || SERVICES[0];
  const serviceName = demoService?.title || 'Water Damage Restoration';
  const serviceTagline = demoService?.heroIntro || 'Professional water damage restoration services for Northern Virginia homeowners.';

  // Cost estimator ranges
  const costRanges = {
    residential: {
      minor: { low: 1500, high: 3500, time: '1-2 days' },
      moderate: { low: 3500, high: 8000, time: '3-5 days' },
      severe: { low: 8000, high: 25000, time: '1-3 weeks' }
    },
    commercial: {
      minor: { low: 3000, high: 8000, time: '2-3 days' },
      moderate: { low: 8000, high: 25000, time: '1-2 weeks' },
      severe: { low: 25000, high: 100000, time: '2-6 weeks' }
    }
  };

  const currentEstimate = costRanges[propertyType][damageLevel];

  // Feature cards
  const features = [
    {
      icon: Clock,
      title: '60-Minute Response',
      description: 'Technicians dispatched immediately, on-site within an hour.',
      stat: '24/7/365'
    },
    {
      icon: Shield,
      title: 'Insurance Direct Billing',
      description: 'We work with all major carriers and bill them directly.',
      stat: '100%'
    },
    {
      icon: Gauge,
      title: 'Advanced Equipment',
      description: 'Commercial-grade extractors and dehumidifiers.',
      stat: '10K GPH'
    },
    {
      icon: FileCheck,
      title: 'Full Documentation',
      description: 'Photo evidence and moisture reports for your claim.',
      stat: 'Included'
    }
  ];

  // Damage levels info
  const damageLevels = [
    {
      level: 'minor',
      title: 'Minor Damage',
      icon: Droplets,
      examples: ['Small leak under sink', 'Toilet overflow (clean water)', 'Minor appliance leak'],
      color: 'emerald'
    },
    {
      level: 'moderate',
      title: 'Moderate Damage',
      icon: AlertTriangle,
      examples: ['Flooded basement (partial)', 'Burst pipe affecting 1-2 rooms', 'Water heater failure'],
      color: 'amber'
    },
    {
      level: 'severe',
      title: 'Severe Damage',
      icon: AlertTriangle,
      examples: ['Whole-floor flooding', 'Storm/sewage backup', 'Category 3 contamination'],
      color: 'rose'
    }
  ];

  // FAQ items
  const faqs = [
    {
      question: 'How accurate is this cost estimate?',
      answer: 'This provides a general range based on typical projects. Your actual cost depends on factors like affected area, water category, materials damaged, and required repairs. We provide a detailed written estimate after our free on-site inspection.'
    },
    {
      question: 'What factors affect restoration cost?',
      answer: 'Key factors include: square footage affected, water contamination level (Category 1-3), materials damaged (carpet vs. hardwood vs. drywall), accessibility of affected areas, and required reconstruction work.'
    },
    {
      question: 'Will my insurance cover this?',
      answer: 'Most homeowner policies cover sudden water damage from burst pipes, appliance failures, and storms. Flood damage typically requires separate flood insurance. We work with your insurance to maximize coverage.'
    },
    {
      question: 'Do you offer financing?',
      answer: 'Yes, we offer flexible payment plans and financing options for projects not fully covered by insurance. Ask about our 0% financing for qualified customers.'
    },
    {
      question: 'What is included in the restoration cost?',
      answer: 'Our quotes include water extraction, drying equipment rental and monitoring, antimicrobial treatment, deodorization, and project management. Reconstruction and contents restoration are quoted separately.'
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`${serviceName} | Flood Doctor`}
        description={demoService?.metaDescription || serviceTagline}
      />

      {/* Hero with Overlapping Cards */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-32 lg:pt-20 lg:pb-40">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-10">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services/" className="hover:text-white">Services</Link>
            <ChevronRight size={14} />
            <span className="text-white/80">{serviceName}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
                <Sparkles size={16} className="text-amber-400" />
                Transparent Pricing
              </div>

              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-6 leading-tight">
                {serviceName}
              </h1>

              <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-lg">
                {serviceTagline} Get a free estimate and see real pricing before you commit.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/request/" variant="primary" size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
                  Get Free Estimate
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button href="tel:8774970007" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Phone size={18} className="mr-2" />
                  Call Now
                </Button>
              </div>
            </div>

            {/* Floating image cards */}
            <div className="relative h-[400px] hidden lg:block">
              <div className="absolute top-0 right-0 w-64 h-48 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-2xl transform rotate-3" />
              <div className="absolute top-20 right-20 w-72 h-52 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-2xl transform -rotate-3" />
              <div className="absolute bottom-0 right-10 w-80 h-56 rounded-2xl bg-white shadow-2xl overflow-hidden">
                {/* Video preview card */}
                <div className="h-full flex items-center justify-center bg-slate-100">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play size={28} className="text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Estimator Tool - Main Feature */}
      <section className="relative -mt-20 z-10 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 lg:p-10 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <Calculator className="text-primary" size={28} />
                <h2 className="font-display text-2xl font-semibold text-text">
                  Cost Estimator
                </h2>
              </div>
              <p className="text-muted">
                Get a preliminary estimate based on your situation. Final pricing provided after free inspection.
              </p>
            </div>

            <div className="p-8 lg:p-10">
              <div className="grid lg:grid-cols-2 gap-10">
                {/* Inputs */}
                <div className="space-y-8">
                  {/* Property Type */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-3">Property Type</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setPropertyType('residential')}
                        className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all ${
                          propertyType === 'residential'
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Home size={20} className={propertyType === 'residential' ? 'text-primary' : 'text-muted'} />
                        <span className={propertyType === 'residential' ? 'font-medium text-text' : 'text-muted'}>
                          Residential
                        </span>
                      </button>
                      <button
                        onClick={() => setPropertyType('commercial')}
                        className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all ${
                          propertyType === 'commercial'
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Building2 size={20} className={propertyType === 'commercial' ? 'text-primary' : 'text-muted'} />
                        <span className={propertyType === 'commercial' ? 'font-medium text-text' : 'text-muted'}>
                          Commercial
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Damage Level */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-3">Damage Level</label>
                    <div className="space-y-3">
                      {damageLevels.map((level) => (
                        <button
                          key={level.level}
                          onClick={() => setDamageLevel(level.level as any)}
                          className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                            damageLevel === level.level
                              ? `border-${level.color}-500 bg-${level.color}-50/50`
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <level.icon
                              size={20}
                              className={damageLevel === level.level ? `text-${level.color}-500` : 'text-muted'}
                            />
                            <div>
                              <div className={`font-medium ${damageLevel === level.level ? 'text-text' : 'text-muted'}`}>
                                {level.title}
                              </div>
                              <div className="text-sm text-muted mt-1">
                                {level.examples.join(' • ')}
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Estimate Result */}
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-gray-100">
                  <div className="text-sm text-muted uppercase tracking-wider mb-2">Estimated Cost Range</div>
                  <div className="font-display text-4xl lg:text-5xl font-bold text-text mb-2">
                    ${currentEstimate.low.toLocaleString()} – ${currentEstimate.high.toLocaleString()}
                  </div>
                  <div className="text-muted mb-6">
                    Typical timeline: {currentEstimate.time}
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2 text-sm text-text">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      Free on-site inspection included
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      Written estimate before work begins
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      Direct insurance billing available
                    </div>
                  </div>

                  <Button to="/request/" variant="primary" className="w-full">
                    Get Exact Quote
                    <ArrowRight size={18} className="ml-2" />
                  </Button>

                  <p className="text-xs text-muted text-center mt-4">
                    No obligation. Free inspection within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
              What's Included
            </h2>
            <p className="text-lg text-muted">
              Every project includes these premium features at no extra cost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <feature.icon size={28} className="text-primary group-hover:text-white" />
                </div>
                <div className="font-display text-2xl font-bold text-primary mb-1">
                  {feature.stat}
                </div>
                <h3 className="font-display text-lg font-semibold text-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video/Tutorial Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Play size={16} />
                Watch How It Works
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-6">
                See our restoration process in action
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Watch a real project from initial assessment to final restoration. Learn what to expect and how we minimize disruption to your life.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">1</div>
                  <span className="text-text">Emergency response and assessment</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">2</div>
                  <span className="text-text">Water extraction and drying setup</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">3</div>
                  <span className="text-text">Monitoring and final restoration</span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl bg-slate-200 shadow-xl overflow-hidden">
                {/* Video thumbnail */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play size={32} className="text-primary ml-1" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-sm text-muted">Video length</div>
                <div className="font-semibold text-text">3:45</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Support */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-10 lg:p-16 text-white">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <HeadphonesIcon size={48} className="mb-6 opacity-80" />
                <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-4">
                  Talk to a restoration expert
                </h2>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  Have questions about your situation? Our project managers are available 24/7 to provide free guidance—no strings attached.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
                    <Phone size={18} className="mr-2" />
                    (877) 497-0007
                  </Button>
                  <Button to="/contact/" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    Schedule Callback
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-white/10" />
                  <div className="absolute top-8 left-8 w-48 h-48 rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-muted">
              Everything you need to know about restoration costs.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-text pr-4">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-muted flex-shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180' : ''
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
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={28} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
            Get a free inspection and detailed estimate. Our team responds within 60 minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/request/" variant="primary" size="lg">
              Request Free Estimate
            </Button>
            <Button to="/resources/water-damage-cost-guide/" variant="outline" size="lg">
              View Cost Guide
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetailDevC;
