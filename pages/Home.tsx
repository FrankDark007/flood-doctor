import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { generateHomepageSchema } from '../utils/schema';
import { useSubdomainInfo } from '../utils/subdomain';
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

/**
 * Home - Google Workspace Style Redesign
 *
 * Key changes:
 * - Light backgrounds throughout (no dark sections)
 * - Lighter typography (font-normal headlines)
 * - Google color palette (#202124, #5f6368, #1a73e8)
 * - Consistent 72px side margins
 * - Clean, minimal aesthetic
 */

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('residential');
  const [selectedFeature, setSelectedFeature] = useState(0);

  // Detect subdomain for city-specific content
  const { isSubdomain, cityName } = useSubdomainInfo();

  // Dynamic location text based on subdomain
  const locationText = isSubdomain ? cityName : 'Northern Virginia';
  const heroLocation = isSubdomain ? `Serving ${cityName}` : 'Serving Northern Virginia';

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
      title: 'Real-time monitoring',
      description: 'Track moisture levels, equipment status, and drying progress from your phone.',
      detail: 'Our sensors transmit data every 15 minutes, giving you complete visibility into your restoration project.'
    },
    {
      icon: MessageSquare,
      title: 'Direct communication',
      description: 'Message your project manager directly through our client portal.',
      detail: 'Get answers fast with our dedicated support team. Average response time under 30 minutes.'
    },
    {
      icon: FileText,
      title: 'Insurance made easy',
      description: 'We document everything and work directly with your insurance carrier.',
      detail: 'Our team has processed over 8,000 insurance claims with a 98% approval rate.'
    },
    {
      icon: TrendingUp,
      title: 'Progress reports',
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
    { value: '60 min', label: 'Response time', icon: Clock },
    { value: '24/7', label: 'Availability', icon: Radio },
    { value: '10,000+', label: 'Projects', icon: BarChart3 },
    { value: '4.9/5', label: 'Rating', icon: Star }
  ], []);

  const homepageSchema = useMemo(() => generateHomepageSchema([
    { question: 'How quickly can you respond to water damage emergencies?', answer: `We guarantee 60-minute response time 24/7 throughout ${locationText} and surrounding areas.` },
    { question: 'Do you work with insurance companies?', answer: 'Yes, we handle direct insurance billing and documentation for all major carriers.' },
    { question: 'What areas do you serve?', answer: isSubdomain ? `We serve ${cityName} and surrounding communities in Northern Virginia.` : 'We serve Northern Virginia including Fairfax, Arlington, Alexandria, Loudoun, and Prince William counties, plus Washington DC.' },
  ]), [locationText, cityName, isSubdomain]);

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={isSubdomain ? `Water Damage Restoration ${cityName} VA | 24/7 Emergency` : "Emergency Water Damage Restoration & Flood Cleanup"}
        description={isSubdomain
          ? `24/7 emergency water damage restoration in ${cityName}, VA. IICRC-certified crews arrive in 60 minutes. Direct insurance billing, real-time drying monitoring. Call (877) 497-0007.`
          : "24/7 emergency water damage restoration in Northern Virginia. IICRC-certified crews arrive in 60 minutes. Direct insurance billing, real-time drying monitoring. Call (877) 497-0007."
        }
        schema={homepageSchema}
      />

      {/* Hero Section - Google Style */}
      <section className="pt-12 pb-20 lg:pt-16 lg:pb-28 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e6f4ea] text-[#137333] text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-[#137333] animate-pulse" />
                {isSubdomain ? `Crews available in ${cityName}` : 'Crews available now'}
              </div>

              <h1 className="text-[32px] sm:text-[40px] lg:text-[56px] font-normal text-[#202124] leading-[1.1] tracking-[-0.5px] mb-6">
                {isSubdomain ? `Water damage restoration in ${cityName}` : 'Water damage restoration, simplified'}
              </h1>

              <p className="text-[18px] lg:text-[20px] text-[#5f6368] leading-[1.6] mb-10 max-w-xl">
                Track your restoration in real-time. From emergency dispatch to final walkthrough—complete visibility at every step.
              </p>

              {/* CTA Buttons - Hidden on mobile, sticky footer handles mobile CTA */}
              <div className="hidden lg:flex flex-row gap-4 mb-10">
                <a
                  href="tel:8774970007"
                  className="inline-flex items-center justify-center bg-[#1a73e8] hover:bg-[#1557b0] text-white font-medium px-8 h-12 rounded-full transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </a>
                <Link
                  to="/request/"
                  className="inline-flex items-center justify-center border border-[#dadce0] hover:bg-[#f8f9fa] text-[#1a73e8] font-medium px-8 h-12 rounded-full transition-colors"
                >
                  Get free estimate
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-[#f8f9fa] rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <stat.icon size={14} className="text-[#1a73e8]" />
                      <span className="text-[12px] text-[#5f6368]">{stat.label}</span>
                    </div>
                    <div className="text-[20px] font-medium text-[#202124]">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl border border-[#dadce0] overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-[#202124] px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#ea4335]" />
                    <div className="w-3 h-3 rounded-full bg-[#fbbc04]" />
                    <div className="w-3 h-3 rounded-full bg-[#34a853]" />
                  </div>
                  <div className="text-white/60 text-sm">Flood Doctor Client Portal</div>
                  <div className="w-20" />
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-4">
                  {/* Status Banner */}
                  <div className="bg-[#e6f4ea] border border-[#ceead6] rounded-xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#ceead6] flex items-center justify-center">
                      <Activity className="text-[#137333]" size={24} />
                    </div>
                    <div className="flex-grow">
                      <div className="font-medium text-[#137333]">Drying in Progress</div>
                      <div className="text-sm text-[#137333]/70">Day 3 of 5 • 62% Complete</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-medium text-[#137333]">62%</div>
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-[#f8f9fa] rounded-xl p-4">
                      <div className="flex items-center gap-2 text-[#5f6368] text-[12px] mb-1">
                        <Thermometer size={14} />
                        Moisture
                      </div>
                      <div className="text-[18px] font-medium text-[#202124]">18%</div>
                      <div className="text-[11px] text-[#137333]">↓ 4% from yesterday</div>
                    </div>
                    <div className="bg-[#f8f9fa] rounded-xl p-4">
                      <div className="flex items-center gap-2 text-[#5f6368] text-[12px] mb-1">
                        <Wifi size={14} />
                        Equipment
                      </div>
                      <div className="text-[18px] font-medium text-[#202124]">8</div>
                      <div className="text-[11px] text-[#5f6368]">Units active</div>
                    </div>
                    <div className="bg-[#f8f9fa] rounded-xl p-4">
                      <div className="flex items-center gap-2 text-[#5f6368] text-[12px] mb-1">
                        <Clock size={14} />
                        Est. Done
                      </div>
                      <div className="text-[18px] font-medium text-[#202124]">Jan 5</div>
                      <div className="text-[11px] text-[#5f6368]">2 days left</div>
                    </div>
                  </div>

                  {/* Progress Chart */}
                  <div className="bg-[#f8f9fa] rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[14px] font-medium text-[#202124]">Moisture readings</span>
                      <span className="text-[12px] text-[#5f6368]">Last 7 days</span>
                    </div>
                    <div className="h-20 flex items-end gap-2">
                      {[85, 72, 58, 45, 38, 28, 18].map((val, idx) => (
                        <div
                          key={idx}
                          className="flex-1 bg-[#e8f0fe] rounded-t"
                          style={{ height: `${val}%` }}
                        >
                          <div
                            className="w-full bg-[#1a73e8] rounded-t transition-all"
                            style={{ height: `${100 - (idx * 10)}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Notification */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-[#dadce0]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#e8f0fe] flex items-center justify-center">
                    <MessageSquare className="text-[#1a73e8]" size={20} />
                  </div>
                  <div>
                    <div className="text-[14px] font-medium text-[#202124]">New message</div>
                    <div className="text-[12px] text-[#5f6368]">Project Manager: Mike</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline - Light Background (Google Style) */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-normal text-[#202124] leading-[1.2] tracking-[-0.25px] mb-4">
              From call to restoration
            </h2>
            <p className="text-[18px] text-[#5f6368]">Our streamlined response process</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-10 left-0 right-0 h-[2px] bg-[#dadce0] hidden lg:block" />

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white border-2 border-[#1a73e8] text-[#1a73e8] font-medium text-[24px] mb-4 relative z-10 shadow-sm">
                    {step.step}
                  </div>
                  <h3 className="font-medium text-[#202124] mb-1">{step.title}</h3>
                  <p className="text-[14px] text-[#5f6368] mb-2">{step.description}</p>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#e8f0fe] text-[12px] text-[#1a73e8] font-medium">
                    {step.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services - Tabbed Grid */}
      <section id="services" className="py-24 lg:py-36 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-normal text-[#202124] leading-[1.2] tracking-[-0.25px] mb-4">
                Restoration services
              </h2>
              <p className="text-[18px] text-[#5f6368]">
                Complete solutions for homes and businesses.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mt-6 lg:mt-0 bg-[#f8f9fa] p-1 rounded-full">
              {serviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-white text-[#202124] shadow-sm'
                      : 'text-[#5f6368] hover:text-[#202124]'
                  }`}
                >
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Link
                key={idx}
                to={service.link}
                className="group p-6 rounded-2xl border border-[#dadce0] hover:border-[#1a73e8] hover:shadow-md transition-all bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e8f0fe] flex items-center justify-center mb-5 group-hover:bg-[#1a73e8] transition-colors">
                  <service.icon className="text-[#1a73e8] group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="text-[18px] font-medium text-[#202124] mb-2 group-hover:text-[#1a73e8] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[14px] text-[#5f6368]">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services/"
              className="inline-flex items-center text-[#1a73e8] font-medium hover:underline"
            >
              View all services
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features - Interactive Grid */}
      <section className="py-24 lg:py-36 bg-[#f8f9fa]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Feature List */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e8f0fe] text-[#1a73e8] text-sm font-medium mb-6">
                <Activity size={16} />
                Technology
              </div>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-normal text-[#202124] leading-[1.2] tracking-[-0.25px] mb-8">
                Stay informed at every step
              </h2>
              <p className="text-[18px] text-[#5f6368] mb-12">
                Our client portal gives you complete visibility into your restoration project.
              </p>

              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedFeature(idx)}
                    className={`w-full text-left p-5 rounded-xl transition-all ${
                      selectedFeature === idx
                        ? 'bg-white shadow-md border-l-4 border-[#1a73e8]'
                        : 'hover:bg-white/50'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        selectedFeature === idx ? 'bg-[#1a73e8] text-white' : 'bg-[#e8f0fe] text-[#1a73e8]'
                      }`}>
                        <feature.icon size={20} />
                      </div>
                      <div>
                        <h3 className={`font-medium mb-1 ${selectedFeature === idx ? 'text-[#202124]' : 'text-[#5f6368]'}`}>
                          {feature.title}
                        </h3>
                        <p className="text-[14px] text-[#5f6368]">{feature.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Detail Card */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 border border-[#dadce0]">
                <div className="w-16 h-16 rounded-2xl bg-[#e8f0fe] flex items-center justify-center mb-6">
                  {React.createElement(features[selectedFeature].icon, { className: 'text-[#1a73e8]', size: 32 })}
                </div>
                <h3 className="text-[24px] font-normal text-[#202124] mb-4">
                  {features[selectedFeature].title}
                </h3>
                <p className="text-[16px] text-[#5f6368] leading-relaxed mb-6">
                  {features[selectedFeature].detail}
                </p>
                <Link
                  to="/resources/technology/"
                  className="inline-flex items-center text-[#1a73e8] font-medium hover:underline"
                >
                  Learn more
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-y border-[#dadce0]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'IICRC Certified', desc: 'Industry standard' },
              { icon: Award, title: 'BBB A+ Rated', desc: '15+ years' },
              { icon: Star, title: '4.9/5 Rating', desc: '500+ reviews', iconColor: 'text-[#fbbc04]' },
              { icon: Clock, title: '60 Min Response', desc: 'Guaranteed' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#f8f9fa] flex items-center justify-center">
                  <item.icon className={item.iconColor || 'text-[#1a73e8]'} size={24} />
                </div>
                <div>
                  <div className="text-[14px] font-medium text-[#202124]">{item.title}</div>
                  <div className="text-[12px] text-[#5f6368]">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-20 lg:py-28 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e8f0fe] text-[#1a73e8] text-sm font-medium mb-6">
                <MapPin size={16} />
                Coverage area
              </div>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-normal text-[#202124] leading-[1.2] tracking-[-0.25px] mb-6">
                {isSubdomain ? `${cityName} & Surrounding Areas` : 'Northern Virginia & DC Metro'}
              </h2>
              <p className="text-[18px] text-[#5f6368] leading-[1.6] mb-8">
                {isSubdomain
                  ? `We provide 24/7 emergency water damage restoration throughout ${cityName} and nearby communities. 60-minute response guaranteed.`
                  : 'Strategic fleet positioning ensures we reach any location in our service area within 60 minutes—day or night.'
                }
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Fairfax County', 'Arlington', 'Alexandria', 'Loudoun County', 'Prince William', 'Washington DC'].map((area) => (
                  <Link
                    key={area}
                    to="/locations/"
                    className="flex items-center gap-2 p-3 rounded-lg bg-[#f8f9fa] hover:bg-[#e8f0fe] transition-colors text-[14px] text-[#202124]"
                  >
                    <CheckCircle2 size={16} className="text-[#137333]" />
                    {area}
                  </Link>
                ))}
              </div>

              <Link
                to="/locations/"
                className="inline-flex items-center justify-center bg-[#1a73e8] hover:bg-[#1557b0] text-white font-medium px-8 h-12 rounded-full transition-colors"
              >
                View all locations
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#e8f0fe] p-6">
              <img
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&q=80"
                alt="Northern Virginia service area"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA - Google Blue */}
      <section className="py-20 lg:py-28 bg-[#1a73e8]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[800px] text-center">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-normal text-white leading-[1.2] tracking-[-0.25px] mb-6">
            Get started in minutes
          </h2>
          <p className="text-[18px] text-white/80 mb-10">
            Call now for immediate dispatch or schedule a free estimate online.
          </p>
          {/* CTA Buttons - Hidden on mobile, sticky footer handles mobile CTA */}
          <div className="hidden lg:flex flex-row justify-center gap-4">
            <a
              href="tel:8774970007"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#1a73e8] font-medium px-8 h-12 rounded-full transition-colors"
            >
              <Phone size={18} className="mr-2" />
              (877) 497-0007
            </a>
            <Link
              to="/request/"
              className="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 text-white font-medium px-8 h-12 rounded-full transition-colors"
            >
              Schedule estimate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
