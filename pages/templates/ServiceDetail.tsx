import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import PageMeta from '../../components/ui/PageMeta';
import Button from '../../components/ui/Button';
import { ServiceData } from '../../types';
import ServiceAreaLinks from '../../components/sections/ServiceAreaLinks';
import RelatedServices from '../../components/sections/RelatedServices';

/**
 * ServiceDetail - Google "How It Works" Layout
 *
 * Structure matches Google Ads pages:
 * 1. Hero (simplified, clean)
 * 2. Sticky sub-nav
 * 3. Process steps (alternating, colored image containers, small number badges)
 * 4. Mid-page CTA banner
 * 5. Expert section (image LEFT)
 * 6. Resources section (2 cards)
 * 7. FAQ (Google-style)
 * 8. Final CTA
 * 9. Related services
 * 10. Location links
 */

interface ServiceDetailProps {
  service: ServiceData;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set([0]));
  const [allExpanded, setAllExpanded] = useState(false);

  const serviceName = service?.title || 'Water Damage Restoration';
  const serviceTagline = service?.heroIntro || service?.shortDescription || 'Professional restoration services for Northern Virginia homeowners.';

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'process', label: 'How It Works' },
    { id: 'expertise', label: 'Our Expertise' },
    { id: 'resources', label: 'Resources' },
    { id: 'faq', label: 'FAQ' }
  ];

  // Track active section on scroll
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

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Process steps with colored backgrounds - Google style
  // Badge colors match container backgrounds, text is darker shade
  const stepColors = [
    { bg: 'bg-[#e8f0fe]', badgeBg: 'bg-[#e8f0fe]', badgeText: 'text-[#1a73e8]' }, // Blue
    { bg: 'bg-[#fef7e0]', badgeBg: 'bg-[#fef7e0]', badgeText: 'text-[#b06000]' }, // Yellow/Amber
    { bg: 'bg-[#e6f4ea]', badgeBg: 'bg-[#e6f4ea]', badgeText: 'text-[#137333]' }, // Green
    { bg: 'bg-[#fce8e6]', badgeBg: 'bg-[#fce8e6]', badgeText: 'text-[#c5221f]' }  // Red
  ];

  // Parse whatWeDo - handles both string format "Title: Description" and object format
  const processSteps = service?.whatWeDo?.slice(0, 4).map((step, idx) => {
    // Handle string format: "Title: Description"
    if (typeof step === 'string') {
      const colonIndex = step.indexOf(':');
      if (colonIndex > 0) {
        return {
          number: idx + 1,
          title: step.substring(0, colonIndex).trim(),
          description: step.substring(colonIndex + 1).trim(),
          details: [],
          ...stepColors[idx % 4]
        };
      }
      return {
        number: idx + 1,
        title: step,
        description: '',
        details: [],
        ...stepColors[idx % 4]
      };
    }
    // Handle object format
    return {
      number: idx + 1,
      title: step.title,
      description: step.description,
      details: step.substeps || [],
      ...stepColors[idx % 4]
    };
  }) || [
    {
      number: 1,
      title: 'Emergency Assessment',
      description: 'Our certified technicians arrive within 60 minutes to assess the damage using thermal cameras and moisture meters.',
      details: ['24/7 emergency response', 'Advanced detection equipment', 'Detailed damage report'],
      ...stepColors[0]
    },
    {
      number: 2,
      title: 'Water Extraction',
      description: 'Industrial-grade pumps remove standing water quickly, minimizing structural damage and preventing mold growth.',
      details: ['Commercial-grade equipment', 'Up to 10,000 gallons/hour', 'Prevents secondary damage'],
      ...stepColors[1]
    },
    {
      number: 3,
      title: 'Drying & Dehumidification',
      description: 'Strategic placement of air movers and dehumidifiers ensures complete moisture removal with daily monitoring.',
      details: ['Scientific drying protocols', 'Daily moisture readings', 'IICRC standards followed'],
      ...stepColors[2]
    },
    {
      number: 4,
      title: 'Restoration & Repair',
      description: 'From minor repairs to full reconstruction, we restore your property to pre-loss condition with quality materials.',
      details: ['Licensed contractors', 'Insurance coordination', 'Quality guarantee'],
      ...stepColors[3]
    }
  ];

  // FAQ items
  const faqs = service?.faqs || [
    {
      question: 'How quickly should water damage be addressed?',
      answer: 'Within 24-48 hours. Mold can begin growing in as little as 24 hours, and structural damage worsens exponentially. We respond within 60 minutes to minimize damage and restoration costs.'
    },
    {
      question: 'Does homeowners insurance cover water damage restoration?',
      answer: 'Most homeowner policies cover water damage from sudden events like burst pipes or appliance failures. We work directly with all major insurance carriers and handle the paperwork for you.'
    },
    {
      question: 'What does water damage restoration cost?',
      answer: 'Costs vary based on the extent of damage, typically ranging from $1,000 to $5,000 for minor issues and up to $20,000+ for major flooding. We provide free estimates and work with your insurance.'
    },
    {
      question: 'Can I stay in my home during water damage restoration?',
      answer: 'In many cases, yes. For minor to moderate damage, you can usually stay. For severe damage or when drying equipment is needed throughout the home, temporary relocation may be recommended.'
    },
    {
      question: 'How long does water damage restoration take?',
      answer: 'Most properties are fully dried within 3-5 days. The complete restoration process, including repairs, typically takes 1-2 weeks depending on the extent of damage.'
    }
  ];

  // Resources for the resources section - with images like Google
  const resources = [
    {
      title: 'Water Damage Insurance Guide',
      description: 'Learn how to navigate the claims process and maximize your coverage.',
      link: '/resources/insurance-guide/',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80'
    },
    {
      title: 'Emergency Action Checklist',
      description: 'What to do in the first 24 hours after discovering water damage.',
      link: '/resources/emergency-checklists/',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80'
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

      {/* Hero Section - Simplified, Google-style */}
      <section id="overview" className="pt-12 pb-20 lg:pt-16 lg:pb-28 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-[#5f6368] mb-8 flex-wrap">
                <Link to="/" className="hover:text-[#1a73e8]">Home</Link>
                <ChevronRight size={14} />
                <Link to="/services/" className="hover:text-[#1a73e8]">Services</Link>
                <ChevronRight size={14} />
                <Link to={`/services/${service?.audience?.toLowerCase() || 'residential'}/`} className="hover:text-[#1a73e8]">
                  {service?.audience === 'COMMERCIAL' ? 'Commercial' : 'Residential'}
                </Link>
                <ChevronRight size={14} />
                <span className="text-[#202124]">{serviceName}</span>
              </nav>

              <h1 className="text-[40px] lg:text-[52px] font-normal text-[#202124] leading-[1.15] tracking-[-0.5px] mb-6">
                {service?.heroHeading || serviceName}
              </h1>

              <p className="text-[18px] lg:text-[20px] text-[#5f6368] leading-[1.6] mb-10">
                {serviceTagline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/request/"
                  className="inline-flex items-center justify-center bg-[#1a73e8] hover:bg-[#1557b0] text-white font-medium px-8 h-12 rounded-full transition-colors"
                >
                  Get started
                </Link>
                <Link
                  to="tel:8774970007"
                  className="inline-flex items-center justify-center border border-[#dadce0] hover:bg-[#f8f9fa] text-[#1a73e8] font-medium px-8 h-12 rounded-full transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Link>
              </div>
            </div>

            {/* Hero Visual - Google style with colored container */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#e8f0fe] p-6 lg:p-8">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt={`${serviceName} restoration services`}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Section Navigation - Google Workspace style */}
      <div className="sticky top-20 z-30 py-3 bg-white/80 backdrop-blur-sm">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px] flex justify-center">
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
                    ? 'bg-[#e8f0fe] text-[#1a73e8]'
                    : 'text-[#5f6368] hover:text-[#202124] hover:bg-[#f8f9fa]'
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Process Section Header */}
      <section id="process" className="pt-20 lg:pt-28 pb-8 lg:pb-12 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="text-center">
            <h2 className="text-[36px] lg:text-[44px] font-normal text-[#202124] leading-[1.2] tracking-[-0.25px]">
              Restore your property in 4 simple steps
            </h2>
          </div>
        </div>
      </section>

      {/* Process Steps - Alternating Layout with Colored Containers */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="space-y-20 lg:space-y-32">
            {processSteps.map((step, idx) => (
              <div
                key={step.number}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
              >
                {/* Text Content */}
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  {/* Number badge - Google style: small square with slight rounding */}
                  <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${step.badgeBg} ${step.badgeText} text-sm font-medium mb-4`}>
                    {step.number}
                  </div>

                  <h3 className="text-[28px] lg:text-[32px] font-normal text-[#202124] leading-[1.25] mb-4">
                    {step.title}
                  </h3>

                  <p className="text-[16px] lg:text-[18px] text-[#5f6368] leading-[1.6] mb-6">
                    {step.description}
                  </p>

                  {step.details.length > 0 && (
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3 text-[#202124]">
                          <CheckCircle2 size={20} className="text-[#1a73e8] flex-shrink-0" />
                          <span className="text-[16px]">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Image with colored background container */}
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`aspect-[4/3] rounded-3xl overflow-hidden ${step.bg} p-6 lg:p-8`}>
                    <img
                      src={[
                        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
                        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
                        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
                        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80'
                      ][idx % 4]}
                      alt={step.title}
                      className="w-full h-full object-cover rounded-2xl shadow-md"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA Banner - Google style */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="text-center">
            <h2 className="text-[36px] lg:text-[44px] font-normal text-[#202124] leading-[1.2] tracking-[-0.25px] mb-8">
              Get started with Flood Doctor today
            </h2>
            <Link
              to="/request/"
              className="inline-flex items-center justify-center bg-[#1a73e8] hover:bg-[#1557b0] text-white font-medium px-8 h-12 rounded-full transition-colors"
            >
              Request service
            </Link>
          </div>
        </div>
      </section>

      {/* Expert Support Section - Image LEFT (Google style) */}
      <section id="expertise" className="py-20 lg:py-28 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image on LEFT - no colored container, just rounded image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80"
                  alt="Flood Doctor restoration expert"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content on RIGHT */}
            <div>
              <h2 className="text-[32px] lg:text-[40px] font-normal text-[#202124] leading-[1.2] tracking-[-0.25px] mb-6">
                Partner with a Flood Doctor expert for your restoration
              </h2>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#1a73e8] mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-[16px] text-[#5f6368]">
                    We'll help you understand your damage and create a restoration plan
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#1a73e8] mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-[16px] text-[#5f6368]">
                    We'll work directly with your insurance company on documentation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#1a73e8] mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-[16px] text-[#5f6368]">
                    We'll keep you updated throughout the entire restoration process
                  </span>
                </li>
              </ul>

              <Link
                to="/contact/"
                className="inline-flex items-center text-[#1a73e8] hover:text-[#174ea6] font-medium text-[16px]"
              >
                Schedule a consultation
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section - Google style 2-card grid */}
      <section id="resources" className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="text-center mb-12">
            <h2 className="text-[36px] lg:text-[44px] font-normal text-[#202124] leading-[1.2] tracking-[-0.25px] mb-4">
              Learn how to protect your property
            </h2>
            <p className="text-[18px] text-[#5f6368] max-w-2xl mx-auto">
              Resources to help you prepare for, respond to, and recover from water damage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {resources.map((resource, idx) => (
              <Link
                key={idx}
                to={resource.link}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[20px] font-medium text-[#202124] mb-2 group-hover:text-[#1a73e8] transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-[16px] text-[#5f6368] mb-4">
                    {resource.description}
                  </p>
                  <span className="inline-flex items-center text-[#1a73e8] font-medium text-[14px]">
                    Learn more
                    <ArrowRight size={16} className="ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion - Google Style */}
      <section id="faq" className="py-20 lg:py-28 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-[36px] font-normal text-[#202124] leading-[1.33] lg:leading-[1.22] tracking-[-0.25px]">
              Frequently asked questions
            </h2>
          </div>

          {/* Expand All Button */}
          <div className="flex justify-end mb-5 border-b border-[#dadce0] pb-5">
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
              className="inline-flex items-center gap-2 text-[#1a73e8] hover:text-[#174ea6] hover:bg-[rgba(26,115,232,0.04)] text-[16px] font-medium py-3 px-3 rounded-full transition-colors"
            >
              {allExpanded ? 'Collapse all' : 'Expand all'}
              <ChevronsUpDown size={18} />
            </button>
          </div>

          {/* FAQ Items */}
          <div>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqs.has(idx);
              return (
                <div key={idx} className="border-t border-[#dadce0] first:border-t-0">
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
                    className={`w-full py-6 lg:py-7 flex items-center justify-between text-left hover:text-[#174ea6] transition-colors ${
                      isOpen ? 'text-[#174ea6]' : ''
                    }`}
                  >
                    <span className={`text-[20px] font-normal leading-[1.4] mr-2 lg:mr-6 ${
                      isOpen ? 'text-[#174ea6]' : 'text-[#1a73e8]'
                    }`}>
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp size={24} className="text-[#1a73e8] flex-shrink-0 lg:w-9 lg:h-9" />
                    ) : (
                      <ChevronDown size={24} className="text-[#1a73e8] flex-shrink-0 lg:w-9 lg:h-9" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="pb-7 pr-10 lg:pr-[60px]">
                      <p className="text-[16px] text-[#5f6368] leading-[1.5] tracking-[0.1px]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
            <div className="border-t border-[#dadce0]"></div>
          </div>

          {/* View More Button */}
          <div className="mt-10">
            <Link
              to="/resources/faq/"
              className="inline-flex items-center px-4 py-3 rounded-full border border-transparent text-[#1a73e8] text-[16px] font-medium hover:bg-[rgba(26,115,232,0.04)] transition-colors"
            >
              View more FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA - Lighter Google style */}
      <section className="py-20 lg:py-28 bg-[#1a73e8] text-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[800px] text-center">
          <h2 className="text-[36px] lg:text-[44px] font-normal leading-[1.2] tracking-[-0.25px] mb-6">
            Ready to restore your property?
          </h2>
          <p className="text-[18px] text-white/80 mb-10">
            Get a free estimate and expert guidance. Our team responds within 60 minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request/"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#1a73e8] font-medium px-8 h-12 rounded-full transition-colors"
            >
              Request service
            </Link>
            <Link
              to="tel:8774970007"
              className="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 text-white font-medium px-8 h-12 rounded-full transition-colors"
            >
              <Phone size={18} className="mr-2" />
              (877) 497-0007
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices
        currentServiceId={service.id}
        category={service.category}
        audience={service.audience}
      />

      {/* Service Area Links */}
      <ServiceAreaLinks serviceTitle={service.title} serviceSlug={service.slug} />
    </main>
  );
};

export default ServiceDetail;
