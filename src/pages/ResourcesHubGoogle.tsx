import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/ui/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import { ArrowRight, BookOpen, FileText, HelpCircle, Shield, Wrench, MessageSquare, Scale, DollarSign, AlertTriangle, Layers, Eye } from 'lucide-react';

// Resource categories with icons
const RESOURCES = [
  {
    id: 'insurance',
    title: 'Insurance Guide',
    description: 'Navigate the claims process with confidence. Learn how to document damage, communicate with adjusters, and maximize your coverage.',
    icon: Shield,
    link: '/resources/insurance-guide/',
    category: 'Guide',
    readTime: '8 min read',
    color: '#1a73e8',
    bgColor: '#e8f0fe',
  },
  {
    id: 'insurance-claims',
    title: 'Insurance Claims Guide',
    description: 'Complete step-by-step guide to filing water damage claims. Coverage details, documentation checklist, and how to handle adjuster disputes.',
    icon: Scale,
    link: '/resources/insurance-claims-guide/',
    category: 'Guide',
    readTime: '12 min read',
    color: '#1e8e3e',
    bgColor: '#e6f4ea',
  },
  {
    id: 'emergency',
    title: 'Emergency Checklists',
    description: 'Step-by-step actions to take immediately after water damage, fire, or mold discovery. Minimize damage while help is on the way.',
    icon: FileText,
    link: '/resources/emergency-checklists/',
    category: 'Checklist',
    readTime: '5 min read',
    color: '#d93025',
    bgColor: '#fce8e6',
  },
  {
    id: 'homeowner',
    title: 'Homeowner Guides',
    description: 'Educational resources on prevention, maintenance, and understanding restoration processes for your home.',
    icon: BookOpen,
    link: '/resources/homeowner-guides/',
    category: 'Guide',
    readTime: '10 min read',
    color: '#1e8e3e',
    bgColor: '#e6f4ea',
  },
  {
    id: 'technology',
    title: 'Our Technology',
    description: 'Learn about the advanced equipment and monitoring systems we use for accurate moisture detection and efficient drying.',
    icon: Wrench,
    link: '/resources/technology/',
    category: 'Article',
    readTime: '6 min read',
    color: '#f29900',
    bgColor: '#fef7e0',
  },
  {
    id: 'faq',
    title: 'FAQ',
    description: 'Answers to common questions about water damage restoration, mold remediation, insurance claims, and our services.',
    icon: HelpCircle,
    link: '/resources/faq/',
    category: 'FAQ',
    readTime: '4 min read',
    color: '#9334e6',
    bgColor: '#f3e8fd',
  },
  {
    id: 'communication',
    title: 'Communication & Updates',
    description: 'How we keep you informed throughout the restoration process with real-time updates and progress reports.',
    icon: MessageSquare,
    link: '/resources/communication/',
    category: 'Article',
    readTime: '3 min read',
    color: '#1a73e8',
    bgColor: '#e8f0fe',
  },
  {
    id: 'cost-guide',
    title: 'Water Damage Cost Guide',
    description: 'Understand restoration pricing, cost factors, and what to expect for your budget. Includes service-by-service breakdown.',
    icon: DollarSign,
    link: '/resources/water-damage-cost-guide/',
    category: 'Guide',
    readTime: '10 min read',
    color: '#1e8e3e',
    bgColor: '#e6f4ea',
  },
  {
    id: 'mold-prevention',
    title: 'Mold Prevention Guide',
    description: 'How to prevent mold after water damage. Timeline, warning signs, and critical steps to take within 24-48 hours.',
    icon: AlertTriangle,
    link: '/resources/mold-prevention-guide/',
    category: 'Guide',
    readTime: '8 min read',
    color: '#f29900',
    bgColor: '#fef7e0',
  },
  {
    id: 'water-categories',
    title: 'Water Damage Categories',
    description: 'Understanding Category 1, 2, and 3 water damage. Health risks, cleanup requirements, and cost implications.',
    icon: Layers,
    link: '/resources/water-damage-categories/',
    category: 'Guide',
    readTime: '7 min read',
    color: '#1a73e8',
    bgColor: '#e8f0fe',
  },
  {
    id: 'signs-damage',
    title: 'Signs of Water Damage',
    description: 'How to detect hidden water damage in walls, floors, and ceilings. Room-by-room inspection checklist included.',
    icon: Eye,
    link: '/resources/signs-of-water-damage/',
    category: 'Guide',
    readTime: '9 min read',
    color: '#9334e6',
    bgColor: '#f3e8fd',
  },
];

const FILTER_OPTIONS = [
  { id: 'all', label: 'All resources' },
  { id: 'Guide', label: 'Guides' },
  { id: 'Checklist', label: 'Checklists' },
  { id: 'Article', label: 'Articles' },
  { id: 'FAQ', label: 'FAQ' },
];

const ResourcesHubGoogle: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filteredResources = filter === 'all'
    ? RESOURCES
    : RESOURCES.filter(r => r.category === filter);

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Resources & Guides | Flood Doctor"
        description="Educational resources, emergency checklists, insurance guides, and helpful information about water damage restoration and mold remediation."
      />

      {/* Hero Section */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1
                className="text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] font-normal text-[#202124] mb-6 heading-section"
                
              >
                Resources & guides
              </h1>
              <p className="text-lg lg:text-xl text-[#5f6368] leading-relaxed">
                Everything you need to know about water damage restoration, from emergency response to insurance claims.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="sticky top-[104px] z-20 bg-white border-b border-[#dadce0] py-4">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {FILTER_OPTIONS.map(option => (
              <button
                key={option.id}
                onClick={() => setFilter(option.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === option.id
                    ? 'bg-[#202124] text-white'
                    : 'bg-[#f1f3f4] text-[#3c4043] hover:bg-[#e8eaed]'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 lg:py-16 bg-[#f8f9fa]">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <AnimatedSection key={resource.id} delay={Math.min(index * 100, 300)}>
                  <Link
                    to={resource.link}
                    className="group bg-white rounded-[16px] p-6 hover:shadow-[0_1px_3px_rgba(60,64,67,0.3),0_4px_8px_3px_rgba(60,64,67,0.15)] transition-all duration-200 block h-full heading-section"
                  >
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-4 heading-section"
                      style={{ backgroundColor: resource.bgColor }}
                    >
                      <Icon size={24} style={{ color: resource.color }} />
                    </div>

                    {/* Category & Read time */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-[#5f6368] uppercase tracking-wide">
                        {resource.category}
                      </span>
                      <span className="text-xs text-[#5f6368]">•</span>
                      <span className="text-xs text-[#5f6368]">{resource.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-medium text-[#202124] mb-2 group-hover:text-[#1a73e8] transition-colors">
                      {resource.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#5f6368] leading-relaxed mb-4">
                      {resource.description}
                    </p>

                    {/* Link */}
                    <div className="flex items-center gap-1 text-sm font-medium text-[#1a73e8]">
                      Read more
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-[28px] lg:text-[36px] font-normal text-[#202124] mb-4 heading-section"
              
            >
              Have questions?
            </h2>
            <p className="text-lg text-[#5f6368] mb-8">
              Our team is available 24/7 to answer your questions and provide guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:8774970007"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a73e8] text-white text-base font-medium rounded-full hover:bg-[#1557b0] transition-colors heading-section"
              >
                (877) 497-0007
              </a>
              <Link
                to="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1a73e8] text-base font-medium rounded-full border border-[#dadce0] hover:bg-[#f8f9fa] transition-colors heading-section"
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

export default ResourcesHubGoogle;
