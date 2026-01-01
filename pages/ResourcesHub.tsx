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
  MessageSquare 
} from 'lucide-react';
import Button from '../components/ui/Button';

const ResourcesHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Primary resources (featured)
  const primaryResources = [
    {
      title: "Insurance Claims Guide",
      description: "Complete step-by-step guide to filing and maximizing your water damage insurance claim.",
      icon: FileText,
      link: "/resources/insurance-claims-guide/",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      featured: true
    },
    {
      title: "Water Damage Categories",
      description: "Understand Category 1, 2, and 3 water damage and what each means for your property.",
      icon: ShieldAlert,
      link: "/resources/water-damage-categories/",
      color: "text-blue-600",
      bg: "bg-blue-50",
      featured: true
    },
    {
      title: "Signs of Water Damage",
      description: "Early detection guide: spot hidden water damage before it becomes a major problem.",
      icon: Search,
      link: "/resources/signs-of-water-damage/",
      color: "text-amber-600",
      bg: "bg-amber-50",
      featured: true
    }
  ];

  // Secondary resources
  const resources = [
    {
      title: "Restoration Cost Guide",
      description: "Transparent pricing: what water damage restoration really costs in Northern Virginia.",
      icon: FileText,
      link: "/resources/water-damage-cost-guide/",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      title: "Mold Prevention",
      description: "How to prevent mold growth after water damage and when remediation is needed.",
      icon: ShieldAlert,
      link: "/resources/mold-prevention-guide/",
      color: "text-red-600",
      bg: "bg-red-50"
    },
    {
      title: "Common Questions",
      description: "Answers about costs, timing, insurance, and safety.",
      icon: HelpCircle,
      link: "/resources/faq/",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Insurance Basics",
      description: "Overview of navigating your property insurance claim.",
      icon: FileText,
      link: "/resources/insurance-guide/",
      color: "text-teal-600",
      bg: "bg-teal-50"
    },
    {
      title: "Homeowner Guides",
      description: "Maintenance tips to prevent future water damage.",
      icon: BookOpen,
      link: "/resources/homeowner-guides/",
      color: "text-yellow-600",
      bg: "bg-yellow-50"
    },
    {
      title: "Emergency Checklists",
      description: "Immediate steps to take while waiting for our crew.",
      icon: ShieldAlert,
      link: "/resources/emergency-checklists/",
      color: "text-rose-600",
      bg: "bg-rose-50"
    },
    {
      title: "Communication",
      description: "How we keep you updated throughout the project.",
      icon: MessageSquare,
      link: "/resources/communication/",
      color: "text-purple-600",
      bg: "bg-purple-50"
    }
  ];

  // Combine all resources for search
  const allResources = [...primaryResources, ...resources];

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
        title="Help Center & Resources" 
        description="Find answers, guides, and checklists for dealing with water damage, insurance claims, and home maintenance." 
      />
      
      {/* 1. Search Hero (Google Support Style) */}
      <div className="bg-subtle border-b border-border py-20 lg:py-24 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 800 400">
                <circle cx="800" cy="0" r="300" fill="#e8f0fe" />
                <circle cx="0" cy="400" r="200" fill="#e6f4ea" />
            </svg>
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
           <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-8">
             How can we help you?
           </h1>
           
           <div className="relative group max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                 <Search size={24} className="text-muted group-focus-within:text-primary transition-colors" />
              </div>
              <input 
                 type="text"
                 placeholder="Search help topics (e.g. 'Insurance', 'Cost', 'Mold')..."
                 className="block w-full pl-16 pr-6 py-5 rounded-full border border-transparent bg-white shadow-google text-lg placeholder-gray-400 focus:outline-none focus:border-primary/30 focus:shadow-google-hover transition-all"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
              />
           </div>
        </div>
      </div>

      {/* 2. Featured Guides (Large Cards) */}
      {filteredPrimary.length > 0 && (
        <div className="py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-primary rounded-full" />
              <h2 className="font-display text-2xl font-medium text-text">Essential Guides</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {filteredPrimary.map((res, idx) => (
                <Link
                  key={res.title}
                  to={res.link}
                  className={`group relative overflow-hidden rounded-3xl border-2 border-transparent hover:border-primary/20 transition-all duration-300 ${
                    idx === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                  }`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 ${res.bg} opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-transparent" />

                  {/* Content */}
                  <div className={`relative p-8 ${idx === 0 ? 'lg:p-12' : ''} h-full flex flex-col`}>
                    <div className={`w-14 h-14 ${res.bg} ${res.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <res.icon size={28} />
                    </div>

                    <div className="flex-grow">
                      <h3 className={`font-display font-semibold text-text mb-3 group-hover:text-primary transition-colors ${
                        idx === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                      }`}>
                        {res.title}
                      </h3>
                      <p className={`text-muted leading-relaxed ${idx === 0 ? 'text-lg max-w-xl' : ''}`}>
                        {res.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-6 text-primary font-medium">
                      Read guide
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-primary/5 to-transparent" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. More Resources Grid */}
      {filteredResources.length > 0 && (
        <div className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gray-300 rounded-full" />
              <h2 className="font-display text-2xl font-medium text-text">More Resources</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredResources.map((res) => (
                <Link
                  key={res.title}
                  to={res.link}
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all bg-white"
                >
                  <div className={`w-11 h-11 ${res.bg} ${res.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <res.icon size={20} />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-display text-base font-medium text-text mb-1 group-hover:text-primary transition-colors truncate">
                      {res.title}
                    </h3>
                    <p className="text-sm text-muted line-clamp-2">
                      {res.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* No Results */}
      {!hasResults && (
        <div className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center py-20 bg-gray-50 rounded-3xl">
              <p className="text-muted">No topics found matching "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-primary font-medium mt-2 hover:underline"
              >
                Clear search
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Popular Articles (Quick Links) */}
      <div className="border-t border-gray-100 bg-white py-20">
          <div className="max-w-4xl mx-auto px-6">
              <h2 className="font-display text-2xl font-medium text-text mb-8 text-center">Popular Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
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
                        className="flex items-center justify-between p-4 rounded-xl hover:bg-subtle transition-colors group border border-transparent hover:border-gray-100"
                      >
                          <span className="text-text font-medium group-hover:text-primary transition-colors">{article.label}</span>
                          <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                      </Link>
                  ))}
              </div>
          </div>
      </div>

      {/* 4. Need more help? */}
      <div className="bg-subtle border-t border-gray-100 py-20 text-center">
          <div className="max-w-2xl mx-auto px-6">
              <h2 className="font-display text-2xl font-medium text-text mb-4">Still need help?</h2>
              <p className="text-muted mb-8">Our project managers are available 24/7 to answer your questions.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button to="/contact/" variant="outline" className="h-12 px-8">
                      Contact Support
                  </Button>
                  <Button href="tel:8774970007" variant="primary" className="h-12 px-8">
                      Call (877) 497-0007
                  </Button>
              </div>
          </div>
      </div>

    </main>
  );
};

export default ResourcesHub;