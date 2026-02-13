import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  Droplets,
  Flame,
  Bug,
  Wind,
  Sparkles,
  Hammer,
  Waves,
  Box,
  Building2,
  Home,
  CheckCircle2,
  Star,
  Clock,
  Shield,
  ChevronRight,
  Search,
  Filter,
  Zap,
  Activity
} from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';
import Button from '../components/ui/Button';

/**
 * ServicesDevB - Interactive Dashboard Style (SaaS/App)
 *
 * Key patterns:
 * - Left sidebar navigation with categories
 * - Main content area with filterable grid
 * - Quick preview panel on hover/click
 * - Search and filter functionality
 * - Dashboard-like metrics header
 * - Tech-forward, modern aesthetic
 */

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  category: string;
  audience: 'residential' | 'commercial';
  responseTime: string;
  link: string;
  gradient: string;
}

const ServicesDevB: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeAudience, setActiveAudience] = useState<'all' | 'residential' | 'commercial'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'water-damage',
      title: 'Water Damage Restoration',
      description: 'Complete water extraction, structural drying, and restoration for flood, burst pipes, and leaks.',
      features: ['Emergency extraction', 'Structural drying', 'Moisture monitoring', 'Contents restoration'],
      icon: Droplets,
      category: 'restoration',
      audience: 'residential',
      responseTime: '60 min',
      link: '/services/residential/restoration-services/water-damage-restoration/',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      id: 'fire-smoke',
      title: 'Fire & Smoke Restoration',
      description: 'Complete fire damage restoration including soot removal, odor elimination, and structural repairs.',
      features: ['Soot removal', 'Odor elimination', 'Structural cleaning', 'Air purification'],
      icon: Flame,
      category: 'restoration',
      audience: 'residential',
      responseTime: '60 min',
      link: '/services/residential/fire-smoke/',
      gradient: 'from-orange-500 to-red-400'
    },
    {
      id: 'mold',
      title: 'Mold Remediation',
      description: 'Safe mold testing, containment, removal, and prevention for healthy indoor environments.',
      features: ['Mold testing', 'Containment', 'Safe removal', 'Prevention treatment'],
      icon: Bug,
      category: 'remediation',
      audience: 'residential',
      responseTime: '24 hrs',
      link: '/services/residential/mold/',
      gradient: 'from-emerald-500 to-green-400'
    },
    {
      id: 'storm',
      title: 'Storm Damage',
      description: 'Emergency response for storm, wind, and weather-related property damage.',
      features: ['Emergency tarping', 'Water extraction', 'Debris removal', 'Structural repairs'],
      icon: Wind,
      category: 'restoration',
      audience: 'residential',
      responseTime: '60 min',
      link: '/services/residential/storm-damage/',
      gradient: 'from-purple-500 to-indigo-400'
    },
    {
      id: 'sewage',
      title: 'Sewage Cleanup',
      description: 'Category 3 black water cleanup with full sanitization and decontamination.',
      features: ['Extraction', 'Sanitization', 'Decontamination', 'Odor removal'],
      icon: Waves,
      category: 'cleanup',
      audience: 'residential',
      responseTime: '60 min',
      link: '/services/residential/sewage/',
      gradient: 'from-amber-500 to-yellow-400'
    },
    {
      id: 'odor',
      title: 'Odor Removal',
      description: 'Professional deodorization for smoke, pet, mold, and other persistent odors.',
      features: ['Source identification', 'Hydroxyl treatment', 'Ozone treatment', 'Thermal fogging'],
      icon: Sparkles,
      category: 'specialty',
      audience: 'residential',
      responseTime: '48 hrs',
      link: '/services/residential/odor/',
      gradient: 'from-pink-500 to-rose-400'
    },
    {
      id: 'content',
      title: 'Content Restoration',
      description: 'Document, electronics, and personal property restoration and pack-out services.',
      features: ['Pack-out services', 'Document drying', 'Electronics recovery', 'Inventory management'],
      icon: Box,
      category: 'specialty',
      audience: 'residential',
      responseTime: '24 hrs',
      link: '/services/residential/content/',
      gradient: 'from-violet-500 to-purple-400'
    },
    {
      id: 'reconstruction',
      title: 'Reconstruction',
      description: 'Full-service reconstruction from drywall to complete room rebuilds.',
      features: ['Drywall repair', 'Flooring', 'Cabinetry', 'Full rebuilds'],
      icon: Hammer,
      category: 'restoration',
      audience: 'residential',
      responseTime: 'Varies',
      link: '/services/residential/reconstruction/',
      gradient: 'from-slate-600 to-slate-400'
    },
    {
      id: 'commercial-water',
      title: 'Commercial Water Damage',
      description: 'Large-scale water damage restoration with minimal business disruption.',
      features: ['24/7 response', 'Business continuity', 'Document restoration', 'Insurance coordination'],
      icon: Building2,
      category: 'restoration',
      audience: 'commercial',
      responseTime: '60 min',
      link: '/services/commercial/',
      gradient: 'from-blue-600 to-indigo-500'
    },
    {
      id: 'commercial-fire',
      title: 'Commercial Fire Restoration',
      description: 'Commercial fire and smoke damage restoration with priority scheduling.',
      features: ['Priority response', 'Smoke remediation', 'Asset protection', 'Insurance billing'],
      icon: Flame,
      category: 'restoration',
      audience: 'commercial',
      responseTime: '60 min',
      link: '/services/commercial/',
      gradient: 'from-orange-600 to-red-500'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services', icon: Zap, count: services.length },
    { id: 'restoration', label: 'Restoration', icon: Hammer, count: services.filter(s => s.category === 'restoration').length },
    { id: 'remediation', label: 'Remediation', icon: Bug, count: services.filter(s => s.category === 'remediation').length },
    { id: 'cleanup', label: 'Cleanup', icon: Sparkles, count: services.filter(s => s.category === 'cleanup').length },
    { id: 'specialty', label: 'Specialty', icon: Box, count: services.filter(s => s.category === 'specialty').length }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesAudience = activeAudience === 'all' || service.audience === activeAudience;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesAudience && matchesSearch;
  });

  return (
    <main className="flex-grow bg-slate-50 min-h-screen">
      <PageMeta
        title="Restoration Services | Water, Fire & Mold Restoration"
        description="Professional restoration services for water damage, fire damage, mold remediation, and more. 24/7 emergency response in Northern Virginia."
      />

      {/* Dashboard Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="font-display text-3xl font-semibold text-text">Restoration Services</h1>
              <p className="text-muted mt-1">Find the right restoration service for your property</p>
            </div>

            {/* Stats Pills */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-emerald-700">Crews Available Now</span>
              </div>
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Clock size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">60 min response</span>
              </div>
              <Button href="tel:8774970007" variant="primary" size="sm">
                <Phone size={16} className="mr-2" />
                Emergency
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sticky top-24">
              {/* Search */}
              <div className="relative mb-6">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              {/* Audience Toggle */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Property Type</div>
                <div className="flex gap-2">
                  {[
                    { id: 'all', label: 'All' },
                    { id: 'residential', label: 'Home', icon: Home },
                    { id: 'commercial', label: 'Business', icon: Building2 }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveAudience(tab.id as typeof activeAudience)}
                      className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                        activeAudience === tab.id
                          ? 'bg-primary text-white'
                          : 'bg-slate-100 text-muted hover:bg-slate-200'
                      }`}
                    >
                      {tab.icon && <tab.icon size={14} />}
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <div className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Categories</div>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        activeCategory === cat.id
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <cat.icon size={18} />
                        {cat.label}
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        activeCategory === cat.id ? 'bg-primary text-white' : 'bg-slate-100'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-8 p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="text-primary" size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted">Need help?</div>
                    <div className="font-semibold text-text">Call Now</div>
                  </div>
                </div>
                <a
                  href="tel:8774970007"
                  className="block text-center py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  (877) 497-0007
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow">
            {/* Mobile Filters */}
            <div className="lg:hidden mb-6 space-y-4">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === cat.id
                        ? 'bg-primary text-white'
                        : 'bg-white border border-gray-200 text-muted'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-muted">
                Showing <span className="font-semibold text-text">{filteredServices.length}</span> services
              </div>
              <div className="flex items-center gap-2">
                <Filter size={16} className="text-muted" />
                <select className="text-sm bg-white border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option>Most Popular</option>
                  <option>Response Time</option>
                  <option>A-Z</option>
                </select>
              </div>
            </div>

            {/* Service Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                      <service.icon className="text-white" size={28} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        service.audience === 'residential'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        {service.audience === 'residential' ? 'Residential' : 'Commercial'}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted mb-4 line-clamp-2">{service.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-sm text-muted">
                        <Clock size={14} />
                        {service.responseTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-primary text-sm font-medium">
                      Details
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredServices.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
                <Activity className="mx-auto text-muted mb-4" size={48} />
                <h3 className="font-semibold text-text mb-2">No services found</h3>
                <p className="text-muted">Try adjusting your search or filters</p>
              </div>
            )}
          </div>

          {/* Right Panel - Service Preview */}
          {selectedService && (
            <aside className="hidden xl:block w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24">
                <div className={`w-full h-32 rounded-xl bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center mb-6`}>
                  <selectedService.icon className="text-white" size={48} />
                </div>

                <h3 className="font-display text-xl font-semibold text-text mb-2">
                  {selectedService.title}
                </h3>
                <p className="text-sm text-muted mb-6">{selectedService.description}</p>

                <div className="space-y-3 mb-6">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      <span className="text-text">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl mb-6">
                  <Clock className="text-primary" size={24} />
                  <div>
                    <div className="text-xs text-muted">Response Time</div>
                    <div className="font-semibold text-text">{selectedService.responseTime}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button to={selectedService.link} variant="primary" className="w-full">
                    Learn More
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                  <Button href="tel:8774970007" variant="outline" className="w-full">
                    <Phone size={16} className="mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-semibold mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-lg text-white/60 mb-8">
            Our experts can assess your situation and recommend the right solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="tel:8774970007"
              variant="secondary"
              size="lg"
              className="bg-white text-slate-900 hover:bg-gray-100"
            >
              <Phone size={18} className="mr-2" />
              (877) 497-0007
            </Button>
            <Button
              to="/request/"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Request Free Assessment
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesDevB;
