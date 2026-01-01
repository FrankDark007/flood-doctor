import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../data/services';
import PageMeta from '../../components/ui/PageMeta';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { Phone } from 'lucide-react';

interface CategoryLandingProps {
  audience: 'RESIDENTIAL' | 'COMMERCIAL';
  category?: string;
}

// Category info
const CATEGORY_INFO: Record<string, { title: string; description: string; heroImage: string }> = {
  'RESIDENTIAL': {
    title: 'Residential Services',
    description: 'Complete restoration solutions for homeowners. From emergency water extraction to full property restoration, we handle every aspect of your recovery.',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
  },
  'COMMERCIAL': {
    title: 'Commercial Services',
    description: 'Minimize downtime and protect your business. Our commercial restoration team works around your schedule to restore your property quickly and efficiently.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
  },
};

// Category display config - Google Think style with sentence case and descriptions
const CATEGORY_DISPLAY: Record<string, { label: string; description: string }> = {
  'RESTORATION': {
    label: 'Restoration',
    description: 'Return your property to pre-damage condition with expert repair and rebuilding services.',
  },
  'CLEANUP': {
    label: 'Cleanup',
    description: 'Professional removal and sanitization for water, mold, fire, and biohazard situations.',
  },
  'SPECIALTY': {
    label: 'Specialty',
    description: 'Specialized solutions for unique challenges like basement flooding and crawl space repair.',
  },
  'TECHNICAL': {
    label: 'Technical',
    description: 'Advanced diagnostic and monitoring services including moisture mapping and thermal imaging.',
  },
};

// Service card images - landscape format
const SERVICE_IMAGES: Record<string, string> = {
  'water-damage-restoration': 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=340&fit=crop',
  'flood-cleanup': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=340&fit=crop',
  'mold-remediation': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=340&fit=crop',
  'fire-smoke-cleanup': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=340&fit=crop',
  'sewage-cleanup': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=340&fit=crop',
  'basement-flooding': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=340&fit=crop',
  'storm-damage-restoration': 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=600&h=340&fit=crop',
  'structural-drying': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=340&fit=crop',
  'odor-removal': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=340&fit=crop',
  'contents-cleaning': 'https://images.unsplash.com/photo-1558618047-f4b511e7c439?w=600&h=340&fit=crop',
  'crawl-space-drying': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=340&fit=crop',
  'hardwood-floor-drying': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=340&fit=crop',
  'roof-leak-response': 'https://images.unsplash.com/photo-1632153979760-dac5cc6dbde1?w=600&h=340&fit=crop',
  'burst-pipe-cleanup': 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&h=340&fit=crop',
  'default': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=340&fit=crop',
};

// Service card component - Google Think VERTICAL style (image on top)
interface ServiceCardProps {
  service: typeof SERVICES[0];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const slugName = service.slug.split('/').filter(Boolean).pop() || 'default';
  const imageUrl = SERVICE_IMAGES[slugName] || SERVICE_IMAGES.default;
  const categoryLabel = CATEGORY_DISPLAY[service.category]?.label || service.category;

  return (
    <AnimatedSection delay={Math.min(index * 50, 200)}>
      <Link
        to={service.slug}
        className="group block h-full rounded-[16px] bg-[#f8f9fa] overflow-hidden transition-all duration-200 hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] focus:outline-none focus:ring-2 focus:ring-[#1a73e8] heading-section"
      >
        {/* Large landscape image on top */}
        <div className="aspect-[16/9] w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 heading-section"
          />
        </div>

        {/* Content below image */}
        <div className="p-5">
          {/* Category label */}
          <p
            className="text-[12px] leading-[1.5] font-medium tracking-[0.25px] uppercase text-[#5f6368] mb-2 heading-section"
            
          >
            {categoryLabel}
          </p>

          {/* Title */}
          <h3
            className="text-[16px] leading-[1.5] font-medium text-[#202124] group-hover:text-[#1a73e8] transition-colors heading-section"
            
          >
            {service.title}
          </h3>
        </div>
      </Link>
    </AnimatedSection>
  );
};

// Category section component
interface CategorySectionProps {
  categoryKey: string;
  services: typeof SERVICES;
  initialCount?: number;
  id?: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  categoryKey,
  services,
  initialCount = 4,
  id
}) => {
  const [showAll, setShowAll] = useState(false);
  const displayConfig = CATEGORY_DISPLAY[categoryKey];

  if (!displayConfig || !services || services.length === 0) return null;

  const visibleServices = showAll ? services : services.slice(0, initialCount);
  const hasMore = services.length > initialCount;

  return (
    <section id={id} className="scroll-mt-[140px]">
      {/* Section header - Google Think style: centered with 60px margins */}
      <div className="my-[60px]">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-[32px] lg:text-[40px] leading-[1.2] font-normal text-[#202124] m-0 heading-section"
              
            >
              {displayConfig.label}
            </h2>
            <p
              className="mt-[24px] text-[14px] lg:text-[16px] leading-[1.5] text-[#5f6368] heading-section"
              
            >
              {displayConfig.description}
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Cards grid - 4 columns on desktop (12-col grid, span-3 each), 2 on tablet, 1 on mobile */}
      <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* See more button - Google Think style, centered */}
        {hasMore && (
          <AnimatedSection delay={300}>
            <div className="mt-10 mb-[60px] flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center justify-center px-6 py-3 min-w-[96px] min-h-[48px] text-[14px] leading-[1.5] font-medium text-[#1a73e8] bg-white border border-[#dadce0] rounded-full hover:bg-[#f8f9fa] hover:border-[#dadce0] focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:ring-offset-2 transition-all duration-200 heading-section"
                
              >
                {showAll ? 'Show less' : 'See more'}
              </button>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

// Featured card component for hero section
interface FeaturedCardProps {
  service: typeof SERVICES[0];
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ service }) => {
  const slugName = service.slug.split('/').filter(Boolean).pop() || 'default';
  const imageUrl = SERVICE_IMAGES[slugName] || SERVICE_IMAGES.default;

  return (
    <Link
      to={service.slug}
      className="group block rounded-[16px] bg-[#f8f9fa] overflow-hidden transition-all duration-200 hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] heading-section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Large image */}
        <div className="aspect-[16/9] lg:aspect-auto overflow-hidden">
          <img
            src={imageUrl}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 heading-section"
          />
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8 flex flex-col justify-center">
          <p
            className="text-[12px] leading-[1.5] font-medium tracking-[0.25px] uppercase text-[#5f6368] mb-2 heading-section"
            
          >
            Featured
          </p>
          <h3
            className="text-[24px] lg:text-[28px] leading-[1.25] font-normal text-[#202124] mb-3 group-hover:text-[#1a73e8] transition-colors heading-section"
            
          >
            {service.title}
          </h3>
          <p
            className="text-[14px] lg:text-[16px] leading-[1.5] text-[#5f6368] heading-section"
            
          >
            {service.shortDescription}
          </p>
        </div>
      </div>
    </Link>
  );
};

// Sticky sub-navigation component
interface StickySubNavProps {
  categories: string[];
  activeCategory: string | null;
}

const StickySubNav: React.FC<StickySubNavProps> = ({ categories, activeCategory }) => {
  const handleClick = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const headerOffset = 140; // Account for sticky header + this nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-[72px] z-40 bg-white">
      <div className="max-w-[1296px] mx-auto px-6 lg:px-8 py-3">
        <div className="flex justify-center">
          <nav
            className="inline-flex items-center gap-1 px-2 py-1.5 bg-white rounded-full shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)] heading-section"
          >
            {categories.map((cat) => {
              const displayConfig = CATEGORY_DISPLAY[cat];
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => handleClick(cat.toLowerCase())}
                  className={`px-4 py-2 text-[14px] font-medium rounded-full transition-colors ${
                    isActive
                      ? 'bg-[#e8f0fe] text-[#1a73e8]'
                      : 'text-[#3c4043] hover:bg-[#f1f3f4]'
                  }`}
                  
                >
                  {displayConfig?.label || cat}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

const CategoryLandingGoogle: React.FC<CategoryLandingProps> = ({ audience, category }) => {
  // Filter services by audience
  const audienceServices = SERVICES.filter(s => s.audience === audience);

  // Group services by category for audience landing page
  const groupedServices: Record<string, typeof SERVICES> = {};
  audienceServices.forEach(service => {
    if (!groupedServices[service.category]) {
      groupedServices[service.category] = [];
    }
    groupedServices[service.category].push(service);
  });

  // Order categories - only include those with services
  const categoryOrder = ['RESTORATION', 'CLEANUP', 'SPECIALTY', 'TECHNICAL'];
  const orderedCategories = categoryOrder.filter(cat =>
    groupedServices[cat] && groupedServices[cat].length > 0
  );

  const info = CATEGORY_INFO[audience];

  // Get featured service (first one)
  const featuredService = audienceServices[0];

  // Track active category based on scroll position
  const [activeCategory, setActiveCategory] = useState<string | null>(orderedCategories[0] || null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header

      for (const cat of orderedCategories) {
        const element = document.getElementById(cat.toLowerCase());
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveCategory(cat);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [orderedCategories]);

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`${info.title} | Flood Doctor`}
        description={info.description}
      />

      {/* Hero Section - Google Think style */}
      <section className="pt-12 lg:pt-16 pb-8 lg:pb-12">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
              {/* Pre-title label */}
              <p
                className="text-[14px] leading-[1.5] font-medium text-[#5f6368] mb-3 heading-section"
                
              >
                Flood Doctor
              </p>

              {/* Main title */}
              <h1
                className="text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] font-normal text-[#202124] mb-4 heading-section"
                
              >
                {audience === 'RESIDENTIAL' ? (
                  <>
                    Professional <span className="text-[#1a73e8]">restoration</span> for your home
                  </>
                ) : (
                  <>
                    Commercial <span className="text-[#1a73e8]">restoration</span> solutions
                  </>
                )}
              </h1>

              {/* Description */}
              <p
                className="text-[16px] lg:text-[18px] leading-[1.5] text-[#5f6368] heading-section"
                
              >
                {info.description}
              </p>
            </div>
          </AnimatedSection>

          {/* Featured card */}
          {featuredService && (
            <AnimatedSection delay={100}>
              <FeaturedCard service={featuredService} />
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Sticky Sub Navigation */}
      <StickySubNav
        categories={orderedCategories}
        activeCategory={activeCategory}
      />

      {/* Service categories - Google Think style sections */}
      {orderedCategories.map(cat => (
        <CategorySection
          key={cat}
          categoryKey={cat}
          services={groupedServices[cat]}
          initialCount={4}
          id={cat.toLowerCase()}
        />
      ))}

      {/* CTA Section - Newsletter style like Google Think */}
      <section className="py-16 lg:py-20 bg-[#202124]">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-xl">
              <h2
                className="text-[32px] lg:text-[40px] leading-[1.2] font-normal text-white mb-4 heading-section"
                
              >
                Get Flood Doctor<br />in your inbox
              </h2>
              <p
                className="text-[16px] leading-[1.5] text-[#9aa0a6] mb-8 heading-section"
                
              >
                Stay updated with restoration tips, emergency guides, and industry insights.
              </p>

              {/* Email signup form - Google Think style */}
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 min-h-[48px] text-[16px] bg-white text-[#202124] rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-[#1a73e8] heading-section"
                  
                />
                <button
                  type="submit"
                  className="px-6 py-3 min-h-[48px] text-[14px] font-medium text-[#202124] bg-white rounded-full hover:bg-[#f1f3f4] transition-colors heading-section"
                  
                >
                  Subscribe
                </button>
              </form>

              {/* Alternative CTA */}
              <div className="mt-6 pt-6 border-t border-[#3c4043]">
                <p
                  className="text-[14px] text-[#9aa0a6] mb-3 heading-section"
                  
                >
                  Need immediate assistance?
                </p>
                <a
                  href="tel:8774970007"
                  className="inline-flex items-center gap-2 text-[16px] font-medium text-white hover:text-[#8ab4f8] transition-colors heading-section"
                  
                >
                  <Phone size={18} />
                  (877) 497-0007
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default CategoryLandingGoogle;
