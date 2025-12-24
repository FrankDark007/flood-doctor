import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/services';
import PageMeta from '../components/ui/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import { ArrowRight, Filter, X } from 'lucide-react';

// Filter options
const AUDIENCE_FILTERS = [
  { id: 'all', label: 'All services' },
  { id: 'RESIDENTIAL', label: 'Residential' },
  { id: 'COMMERCIAL', label: 'Commercial' },
];

const CATEGORY_FILTERS = [
  { id: 'all', label: 'All categories' },
  { id: 'RESTORATION', label: 'Restoration' },
  { id: 'CLEANUP', label: 'Cleanup' },
  { id: 'SPECIALTY', label: 'Specialty' },
  { id: 'TECHNICAL', label: 'Technical' },
];

// Service card images (using Unsplash for reliability)
const SERVICE_IMAGES: Record<string, string> = {
  'water-damage-restoration': 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop',
  'flood-cleanup': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
  'mold-remediation': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  'fire-smoke-cleanup': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
  'sewage-cleanup': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
  'basement-flooding': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
  'storm-damage-restoration': 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=600&h=400&fit=crop',
  'structural-drying': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
  'odor-removal': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  'contents-cleaning-packout': 'https://images.unsplash.com/photo-1558618047-f4b511e7c439?w=600&h=400&fit=crop',
  'crawl-space-remediation': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
  'roof-leak-response': 'https://images.unsplash.com/photo-1632153979760-dac5cc6dbde1?w=600&h=400&fit=crop',
  'default': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
};

const ServicesHubGoogle: React.FC = () => {
  const [audienceFilter, setAudienceFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Filter services
  const filteredServices = SERVICES.filter(service => {
    const audienceMatch = audienceFilter === 'all' || service.audience === audienceFilter;
    const categoryMatch = categoryFilter === 'all' || service.category === categoryFilter;
    return audienceMatch && categoryMatch;
  });

  // Get badge color based on category
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'RESTORATION': return { bg: '#e8f0fe', text: '#1a73e8' };
      case 'CLEANUP': return { bg: '#e6f4ea', text: '#1e8e3e' };
      case 'SPECIALTY': return { bg: '#fef7e0', text: '#f29900' };
      case 'TECHNICAL': return { bg: '#fce8e6', text: '#d93025' };
      default: return { bg: '#f1f3f4', text: '#5f6368' };
    }
  };

  const activeFiltersCount = (audienceFilter !== 'all' ? 1 : 0) + (categoryFilter !== 'all' ? 1 : 0);

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="All Restoration Services | Flood Doctor"
        description="Explore our complete range of water damage restoration, mold remediation, and emergency cleanup services for residential and commercial properties."
      />

      {/* Hero Section */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1
                className="text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] font-normal text-[#202124] mb-6"
                style={{ fontFamily: '"Google Sans Display", "Google Sans", Arial, sans-serif' }}
              >
                Find answers and solutions
              </h1>
              <p className="text-lg lg:text-xl text-[#5f6368] leading-relaxed">
                Browse our complete range of restoration and cleanup services. From emergency water damage response to specialized mold remediation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-[64px] z-20 bg-white border-b border-[#dadce0] py-4">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-[#f1f3f4] rounded-full text-sm font-medium text-[#3c4043]"
            >
              <Filter size={16} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-[#1a73e8] text-white text-xs rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Desktop filters */}
            <div className={`${showFilters ? 'flex' : 'hidden'} lg:flex flex-wrap gap-2 w-full lg:w-auto`}>
              {/* Audience filter pills */}
              {AUDIENCE_FILTERS.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setAudienceFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    audienceFilter === filter.id
                      ? 'bg-[#e8f0fe] text-[#1a73e8]'
                      : 'bg-[#f1f3f4] text-[#3c4043] hover:bg-[#e8eaed]'
                  }`}
                >
                  {filter.label}
                </button>
              ))}

              <div className="w-px h-6 bg-[#dadce0] mx-2 hidden lg:block self-center" />

              {/* Category filter pills */}
              {CATEGORY_FILTERS.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setCategoryFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    categoryFilter === filter.id
                      ? 'bg-[#e8f0fe] text-[#1a73e8]'
                      : 'bg-[#f1f3f4] text-[#3c4043] hover:bg-[#e8eaed]'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Clear filters */}
            {activeFiltersCount > 0 && (
              <button
                onClick={() => { setAudienceFilter('all'); setCategoryFilter('all'); }}
                className="flex items-center gap-1 px-3 py-2 text-sm text-[#1a73e8] hover:underline"
              >
                <X size={14} />
                Reset filters
              </button>
            )}

            {/* Results count */}
            <div className="ml-auto text-sm text-[#5f6368]">
              {filteredServices.length} services
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 lg:py-16 bg-[#f8f9fa]">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => {
              const categoryColor = getCategoryColor(service.category);
              // Extract slug name from full path for image lookup
              const slugName = service.slug.split('/').filter(Boolean).pop() || 'default';
              const imageUrl = SERVICE_IMAGES[slugName] || SERVICE_IMAGES.default;

              return (
                <AnimatedSection key={service.id} delay={Math.min(index * 50, 300)}>
                  <Link
                    to={service.slug}
                    className="group bg-white rounded-[16px] overflow-hidden hover:shadow-[0_1px_3px_rgba(60,64,67,0.3),0_4px_8px_3px_rgba(60,64,67,0.15)] transition-all duration-200 block h-full"
                  >
                    {/* Image */}
                    <div className="aspect-[16/10] bg-[#f8f9fa] overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="px-2 py-0.5 text-xs font-medium rounded"
                          style={{ backgroundColor: categoryColor.bg, color: categoryColor.text }}
                        >
                          {service.category.charAt(0) + service.category.slice(1).toLowerCase()}
                        </span>
                        <span className="text-xs text-[#5f6368]">
                          {service.audience === 'RESIDENTIAL' ? 'Residential' : 'Commercial'}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-medium text-[#202124] mb-2 group-hover:text-[#1a73e8] transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-[#5f6368] leading-relaxed line-clamp-2 mb-4">
                        {service.shortDescription}
                      </p>

                      {/* Link */}
                      <div className="flex items-center gap-1 text-sm font-medium text-[#1a73e8]">
                        Learn more
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Empty state */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-medium text-[#202124] mb-2">No services found</h3>
              <p className="text-[#5f6368] mb-6">Try adjusting your filters to see more results.</p>
              <button
                onClick={() => { setAudienceFilter('all'); setCategoryFilter('all'); }}
                className="px-6 py-3 bg-[#1a73e8] text-white font-medium rounded-full hover:bg-[#1557b0] transition-colors"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-[28px] lg:text-[36px] font-normal text-[#202124] mb-4"
              style={{ fontFamily: '"Google Sans Display", "Google Sans", Arial, sans-serif' }}
            >
              Not sure which service you need?
            </h2>
            <p className="text-lg text-[#5f6368] mb-8">
              Call us for a free assessment. Our experts will evaluate your situation and recommend the best solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:8774970007"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a73e8] text-white text-base font-medium rounded-full hover:bg-[#1557b0] transition-colors"
              >
                (877) 497-0007
              </a>
              <Link
                to="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1a73e8] text-base font-medium rounded-full border border-[#dadce0] hover:bg-[#f8f9fa] transition-colors"
              >
                Contact us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default ServicesHubGoogle;
