import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/ui/PageMeta';
import {
  FileText,
  HelpCircle,
  ShieldAlert,
  BookOpen,
  Search,
  ArrowRight,
  MessageSquare,
  Phone
} from 'lucide-react';

/**
 * ResourcesHub - Google Support/Help Center Style Redesign
 *
 * Key changes:
 * - Real images for featured resource cards
 * - Google typography (font-normal, tracking-[-0.5px])
 * - Google colors (#202124, #5f6368, #1a73e8)
 * - 72px side margins
 * - Cleaner, simpler design without decorative SVGs
 */

// Resource images from Unsplash
const resourceImages = {
  insurance: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80',
  categories: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
  signs: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
};

const ResourcesHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Primary resources (featured)
  const primaryResources = [
    {
      title: "Insurance Claims Guide",
      description: "Complete step-by-step guide to filing and maximizing your water damage insurance claim.",
      icon: FileText,
      link: "/resources/insurance-claims-guide/",
      image: resourceImages.insurance,
    },
    {
      title: "Water Damage Categories",
      description: "Understand Category 1, 2, and 3 water damage and what each means for your property.",
      icon: ShieldAlert,
      link: "/resources/water-damage-categories/",
      image: resourceImages.categories,
    },
    {
      title: "Signs of Water Damage",
      description: "Early detection guide: spot hidden water damage before it becomes a major problem.",
      icon: Search,
      link: "/resources/signs-of-water-damage/",
      image: resourceImages.signs,
    }
  ];

  // Secondary resources
  const resources = [
    {
      title: "Restoration Cost Guide",
      description: "Transparent pricing: what water damage restoration really costs in Northern Virginia.",
      icon: FileText,
      link: "/resources/water-damage-cost-guide/",
    },
    {
      title: "Mold Prevention",
      description: "How to prevent mold growth after water damage and when remediation is needed.",
      icon: ShieldAlert,
      link: "/resources/mold-prevention-guide/",
    },
    {
      title: "Common Questions",
      description: "Answers about costs, timing, insurance, and safety.",
      icon: HelpCircle,
      link: "/resources/faq/",
    },
    {
      title: "Insurance Basics",
      description: "Overview of navigating your property insurance claim.",
      icon: FileText,
      link: "/resources/insurance-guide/",
    },
    {
      title: "Homeowner Guides",
      description: "Maintenance tips to prevent future water damage.",
      icon: BookOpen,
      link: "/resources/homeowner-guides/",
    },
    {
      title: "Emergency Checklists",
      description: "Immediate steps to take while waiting for our crew.",
      icon: ShieldAlert,
      link: "/resources/emergency-checklists/",
    },
    {
      title: "Communication",
      description: "How we keep you updated throughout the project.",
      icon: MessageSquare,
      link: "/resources/communication/",
    }
  ];

  // Filter logic for search
  const filteredPrimary = primaryResources.filter(r =>
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredResources = resources.filter(r =>
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hasResults = filteredPrimary.length > 0 || filteredResources.length > 0;

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Resources & Guides | Insurance Claims Help"
        description="Free guides on water damage restoration, insurance claims, mold prevention, and emergency preparedness. Expert checklists and cost calculators for Northern Virginia homeowners."
      />

      {/* Search Hero - Google Style */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-20 bg-[#f8f9fa]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[800px] text-center">
          <h1 className="text-[40px] lg:text-[56px] font-normal text-[#202124] leading-[1.1] tracking-[-0.5px] mb-8">
            How can we help you?
          </h1>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <Search size={24} className="text-[#5f6368]" />
            </div>
            <input
              type="text"
              placeholder="Search help topics..."
              className="block w-full pl-16 pr-6 py-5 rounded-full border border-[#dadce0] bg-white text-[18px] placeholder-[#5f6368] focus:outline-none focus:border-[#1a73e8] focus:shadow-lg transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Featured Guides - Image Cards */}
      {filteredPrimary.length > 0 && (
        <section className="py-20 lg:py-24 bg-white">
          <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
            <h2 className="text-[28px] lg:text-[32px] font-normal text-[#202124] mb-8">
              Essential guides
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {filteredPrimary.map((res, idx) => (
                <Link
                  key={res.title}
                  to={res.link}
                  className={`group bg-white rounded-2xl overflow-hidden border border-[#dadce0] hover:shadow-lg hover:border-[#1a73e8] transition-all ${
                    idx === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`overflow-hidden ${idx === 0 ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
                    <img
                      src={res.image}
                      alt={res.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className={`p-6 ${idx === 0 ? 'lg:p-8' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#e8f0fe] flex items-center justify-center">
                        <res.icon className="text-[#1a73e8]" size={20} />
                      </div>
                    </div>

                    <h3 className={`font-medium text-[#202124] mb-2 group-hover:text-[#1a73e8] transition-colors ${
                      idx === 0 ? 'text-[24px] lg:text-[28px]' : 'text-[20px]'
                    }`}>
                      {res.title}
                    </h3>
                    <p className={`text-[#5f6368] leading-relaxed ${idx === 0 ? 'text-[16px]' : 'text-[14px]'}`}>
                      {res.description}
                    </p>

                    <div className="flex items-center gap-2 mt-4 text-[#1a73e8] text-[14px] font-medium">
                      Read guide
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* More Resources Grid */}
      {filteredResources.length > 0 && (
        <section className="py-20 lg:py-24 bg-[#f8f9fa]">
          <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
            <h2 className="text-[28px] lg:text-[32px] font-normal text-[#202124] mb-8">
              More resources
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredResources.map((res) => (
                <Link
                  key={res.title}
                  to={res.link}
                  className="group p-5 rounded-2xl bg-white border border-[#dadce0] hover:border-[#1a73e8] hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#e8f0fe] flex items-center justify-center mb-4">
                    <res.icon className="text-[#1a73e8]" size={20} />
                  </div>
                  <h3 className="text-[16px] font-medium text-[#202124] mb-2 group-hover:text-[#1a73e8] transition-colors">
                    {res.title}
                  </h3>
                  <p className="text-[14px] text-[#5f6368] line-clamp-2">
                    {res.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {!hasResults && (
        <section className="py-20 lg:py-24 bg-white">
          <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[800px]">
            <div className="text-center py-16 bg-[#f8f9fa] rounded-2xl">
              <p className="text-[#5f6368] mb-4">No topics found matching "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#1a73e8] font-medium hover:underline"
              >
                Clear search
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Popular Articles */}
      <section className="py-20 lg:py-24 bg-white border-t border-[#dadce0]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[800px]">
          <h2 className="text-[28px] lg:text-[32px] font-normal text-[#202124] mb-8 text-center">
            Popular questions
          </h2>
          <div className="space-y-2">
            {[
              { label: "Does insurance cover water damage?", url: "/resources/faq/" },
              { label: "What to do immediately after a flood", url: "/resources/emergency-checklists/" },
              { label: "Understanding the drying process", url: "/resources/technology/" },
              { label: "How to read your moisture map", url: "/resources/technology/" },
              { label: "Preventing frozen pipes", url: "/resources/homeowner-guides/" },
              { label: "Our communication promise", url: "/resources/communication/" },
            ].map((article, i) => (
              <Link
                key={i}
                to={article.url}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-[#f8f9fa] transition-colors group"
              >
                <span className="text-[#202124] group-hover:text-[#1a73e8] transition-colors">{article.label}</span>
                <ArrowRight size={16} className="text-[#dadce0] group-hover:text-[#1a73e8] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Need Help CTA - Google Blue */}
      <section className="py-20 lg:py-24 bg-[#1a73e8]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[800px] text-center">
          <h2 className="text-[36px] lg:text-[44px] font-normal text-white leading-[1.2] tracking-[-0.25px] mb-6">
            Still need help?
          </h2>
          <p className="text-[18px] text-white/80 mb-10">
            Our project managers are available 24/7 to answer your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8774970007"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#1a73e8] font-medium px-8 h-12 rounded-full transition-colors"
            >
              <Phone size={18} className="mr-2" />
              (877) 497-0007
            </a>
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 text-white font-medium px-8 h-12 rounded-full transition-colors"
            >
              Contact support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResourcesHub;
