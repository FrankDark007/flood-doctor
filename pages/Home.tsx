import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { generateHomepageSchema } from '../utils/schema';
import {
  Phone,
  ArrowRight,
  Shield,
  Clock,
  Award,
  CheckCircle2,
  Star,
  MapPin,
  Droplets,
  Flame,
  Bug,
  Wind,
  Users,
  FileText,
  MessageSquare,
  TrendingUp,
  Activity,
  Gauge,
  Thermometer,
  BarChart3,
  Wifi,
  Radio
} from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';
import Button from '../components/ui/Button';

/**
 * Home - Google Workspace/SaaS Dashboard Style
 *
 * Key patterns:
 * - Hero with live status dashboard UI mockup
 * - Tabbed service categories
 * - Feature grid with icons
 * - Process steps horizontal timeline
 * - Dashboard preview cards
 * - Tech-forward, modern aesthetic
 */

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('residential');
  const [selectedFeature, setSelectedFeature] = useState(0);

  // Memoize static data arrays to prevent recreation on every render
  const serviceTabs = useMemo(() => [
    { id: 'residential', label: 'Residential', icon: Users },
    { id: 'commercial', label: 'Commercial', icon: FileText }
  ], []);

  const residentialServices = useMemo(() => [
    { title: 'Water Damage', icon: Droplets, description: 'Emergency extraction and structural drying', link: '/services/residential/water-damage/' },
    { title: 'Fire & Smoke', icon: Flame, description: 'Soot removal and odor elimination', link: '/services/residential/fire-smoke/' },
    { title: 'Mold Remediation', icon: Bug, description: 'Safe removal and prevention', link: '/services/residential/mold/' },
    { title: 'Storm Damage', icon: Wind, description: 'Emergency response and restoration', link: '/services/residential/storm-damage/' }
  ], []);

  const commercialServices = useMemo(() => [
    { title: 'Office Buildings', icon: FileText, description: 'Minimal disruption to operations', link: '/services/commercial/' },
    { title: 'Retail Spaces', icon: Users, description: 'Fast turnaround for business continuity', link: '/services/commercial/' },
    { title: 'Healthcare Facilities', icon: Shield, description: 'HIPAA-compliant restoration', link: '/services/commercial/' },
    { title: 'Multi-Family', icon: Users, description: 'Apartment and condo restoration', link: '/services/commercial/' }
  ], []);

  const services = activeTab === 'residential' ? residentialServices : commercialServices;

  const features = useMemo(() => [
    {
      icon: Gauge,
      title: 'Real-Time Monitoring',
      description: 'Track moisture levels, equipment status, and drying progress from your phone.',
      detail: 'Our sensors transmit data every 15 minutes, giving you complete visibility into your restoration project.'
    },
    {
      icon: MessageSquare,
      title: 'Direct Communication',
      description: 'Message your project manager directly through our client portal.',
      detail: 'Get answers fast with our dedicated support team. Average response time under 30 minutes.'
    },
    {
      icon: FileText,
      title: 'Insurance Made Easy',
      description: 'We document everything and work directly with your insurance carrier.',
      detail: 'Our team has processed over 8,000 insurance claims with a 98% approval rate.'
    },
    {
      icon: TrendingUp,
      title: 'Progress Reports',
      description: 'Daily updates with photos, moisture readings, and timeline estimates.',
      detail: 'Never wonder about project status. Receive automated reports every 24 hours.'
    }
  ], []);

  const processSteps = useMemo(() => [
    { step: '01', title: 'Call', description: '24/7 emergency line', time: '0 min' },
    { step: '02', title: 'Dispatch', description: 'Crew deployed', time: '5 min' },
    { step: '03', title: 'Arrival', description: 'On-site assessment', time: '60 min' },
    { step: '04', title: 'Mitigation', description: 'Water extraction begins', time: '90 min' },
    { step: '05', title: 'Monitoring', description: 'Daily progress tracking', time: 'Ongoing' }
  ], []);

  const stats = useMemo(() => [
    { value: '60 min', label: 'Response Time', icon: Clock },
    { value: '24/7', label: 'Availability', icon: Radio },
    { value: '10,000+', label: 'Projects', icon: BarChart3 },
    { value: '4.9/5', label: 'Rating', icon: Star }
  ], []);

  // Homepage schema with WebSite, Organization, LocalBusiness, AggregateRating
  const homepageSchema = useMemo(() => generateHomepageSchema([
    { question: 'How quickly can you respond to water damage emergencies?', answer: 'We guarantee 60-minute response time 24/7 throughout Northern Virginia and Washington DC.' },
    { question: 'Do you work with insurance companies?', answer: 'Yes, we handle direct insurance billing and documentation for all major carriers.' },
    { question: 'What areas do you serve?', answer: 'We serve Northern Virginia including Fairfax, Arlington, Alexandria, Loudoun, and Prince William counties, plus Washington DC.' },
  ]), []);

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Emergency Water Damage Restoration & Flood Cleanup"
        description="24/7 emergency water damage restoration in Northern Virginia. IICRC-certified crews arrive in 60 minutes. Direct insurance billing, real-time drying monitoring. Call (877) 497-0007."
        schema={homepageSchema}
      />

      {/* Hero - Dashboard Preview Style */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Crews Available Now
              </div>

              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold text-text mb-6 leading-tight">
                Water damage restoration,{' '}
                <span className="text-primary">simplified.</span>
              </h1>

              <p className="text-xl text-muted mb-8 leading-relaxed">
                Track your restoration in real-time. From emergency dispatch to final walkthrough—complete visibility at every step.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button href="tel:8774970007" variant="primary" size="lg" className="h-14 px-8">
                  <Phone size={20} className="mr-2" />
                  (877) 497-0007
                </Button>
                <Button to="/request/" variant="outline" size="lg" className="h-14 px-8">
                  Get Free Estimate
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>

              {/* Mini Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <stat.icon size={16} className="text-primary" />
                      <span className="text-xs text-muted">{stat.label}</span>
                    </div>
                    <div className="font-display text-xl font-bold text-text">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-slate-800 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-white/60 text-sm">Flood Doctor Client Portal</div>
                  <div className="w-20" />
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-4">
                  {/* Status Banner */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Activity className="text-emerald-600" size={24} />
                    </div>
                    <div className="flex-grow">
                      <div className="font-semibold text-emerald-800">Drying in Progress</div>
                      <div className="text-sm text-emerald-600">Day 3 of 5 • 62% Complete</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-display font-bold text-emerald-700">62%</div>
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-slate-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-muted text-xs mb-1">
                        <Thermometer size={14} />
                        Moisture Level
                      </div>
                      <div className="font-display text-lg font-bold text-text">18%</div>
                      <div className="text-xs text-emerald-600">↓ 4% from yesterday</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-muted text-xs mb-1">
                        <Wifi size={14} />
                        Equipment
                      </div>
                      <div className="font-display text-lg font-bold text-text">8</div>
                      <div className="text-xs text-muted">Units active</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-muted text-xs mb-1">
                        <Clock size={14} />
                        Est. Completion
                      </div>
                      <div className="font-display text-lg font-bold text-text">Jan 5</div>
                      <div className="text-xs text-muted">2 days left</div>
                    </div>
                  </div>

                  {/* Progress Chart Placeholder */}
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-text">Moisture Readings</span>
                      <span className="text-xs text-muted">Last 7 days</span>
                    </div>
                    <div className="h-20 flex items-end gap-2">
                      {[85, 72, 58, 45, 38, 28, 18].map((val, idx) => (
                        <div
                          key={idx}
                          className="flex-1 bg-primary/20 rounded-t"
                          style={{ height: `${val}%` }}
                        >
                          <div
                            className="w-full bg-primary rounded-t transition-all"
                            style={{ height: `${100 - (idx * 10)}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text">New message</div>
                    <div className="text-xs text-muted">Project Manager: Mike</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline - Horizontal */}
      <section className="py-16 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl lg:text-3xl font-semibold mb-2 text-white">
              From call to restoration
            </h2>
            <p className="text-white/60">Our streamlined response process</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-white/20 hidden lg:block" />

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-display font-bold text-xl mb-4 relative z-10">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-white/60 mb-2">{step.description}</p>
                  <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs text-white/80">
                    {step.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services - Tabbed Grid */}
      <section id="services" className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
                Restoration services
              </h2>
              <p className="text-lg text-muted">
                Complete solutions for homes and businesses.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mt-6 lg:mt-0 bg-slate-100 p-1 rounded-xl">
              {serviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-white text-text shadow-sm'
                      : 'text-muted hover:text-text'
                  }`}
                >
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, idx) => (
              <Link
                key={idx}
                to={service.link}
                className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <service.icon className="text-primary group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="font-display text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button to="/services/" variant="outline">
              View All Services
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features - Interactive Grid */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Feature List */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Activity size={16} />
                Technology
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-6">
                Stay informed at every step
              </h2>
              <p className="text-lg text-muted mb-10">
                Our client portal gives you complete visibility into your restoration project.
              </p>

              <div className="space-y-2">
                {features.map((feature, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedFeature(idx)}
                    className={`w-full text-left p-5 rounded-xl transition-all ${
                      selectedFeature === idx
                        ? 'bg-white shadow-md border-l-4 border-primary'
                        : 'hover:bg-white/50'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        selectedFeature === idx ? 'bg-primary text-white' : 'bg-slate-100 text-muted'
                      }`}>
                        <feature.icon size={20} />
                      </div>
                      <div>
                        <h3 className={`font-semibold mb-1 ${selectedFeature === idx ? 'text-text' : 'text-muted'}`}>
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted">{feature.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Feature Detail */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  {React.createElement(features[selectedFeature].icon, { className: 'text-primary', size: 32 })}
                </div>
                <h3 className="font-display text-2xl font-semibold text-text mb-4">
                  {features[selectedFeature].title}
                </h3>
                <p className="text-lg text-muted leading-relaxed mb-6">
                  {features[selectedFeature].detail}
                </p>
                <Button to="/resources/technology/" variant="outline">
                  Learn More
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center">
                <Shield className="text-primary" size={28} />
              </div>
              <div>
                <div className="font-semibold text-text">IICRC Certified</div>
                <div className="text-sm text-muted">Industry standard</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center">
                <Award className="text-primary" size={28} />
              </div>
              <div>
                <div className="font-semibold text-text">BBB A+ Rated</div>
                <div className="text-sm text-muted">15+ years</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center">
                <Star className="text-amber-500" size={28} />
              </div>
              <div>
                <div className="font-semibold text-text">4.9/5 Rating</div>
                <div className="text-sm text-muted">500+ reviews</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center">
                <Clock className="text-primary" size={28} />
              </div>
              <div>
                <div className="font-semibold text-text">60 Min Response</div>
                <div className="text-sm text-muted">Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section id="locations" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <MapPin size={16} />
                Coverage Area
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-6">
                Northern Virginia & DC Metro
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Strategic fleet positioning ensures we reach any location in our service area within 60 minutes—day or night.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Fairfax County', 'Arlington', 'Alexandria', 'Loudoun County', 'Prince William', 'Washington DC'].map((area) => (
                  <Link
                    key={area}
                    to="/locations/"
                    className="flex items-center gap-2 p-3 rounded-lg bg-white border border-gray-100 hover:border-primary/30 hover:shadow-sm transition-all text-sm text-text"
                  >
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    {area}
                  </Link>
                ))}
              </div>

              <Button to="/locations/" variant="primary">
                View All Locations
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>

            <div className="aspect-square rounded-2xl shadow-lg relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&q=80"
                alt="Northern Virginia service area map"
                className="w-full h-full object-cover"
              />
              {/* Map overlay pins */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute top-1/4 left-1/3 w-4 h-4 rounded-full bg-primary animate-ping" />
              <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-emerald-500 animate-ping" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-1/3 left-1/4 w-4 h-4 rounded-full bg-primary animate-ping" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-6">
            Get started in minutes
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Call now for immediate dispatch or schedule a free estimate online.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="tel:8774970007"
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 h-14 px-8"
            >
              <Phone size={20} className="mr-2" />
              (877) 497-0007
            </Button>
            <Button
              to="/request/"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 h-14 px-8"
            >
              Schedule Estimate
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
