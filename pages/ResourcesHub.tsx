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

  const resources = [
    {
      title: "Common Questions",
      description: "Answers about costs, timing, insurance, and safety.",
      icon: HelpCircle,
      link: "/resources/faq/",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Insurance Claims",
      description: "Step-by-step guide to navigating your property claim.",
      icon: FileText,
      link: "/resources/insurance-guide/",
      color: "text-green-600",
      bg: "bg-green-50"
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
      color: "text-red-600",
      bg: "bg-red-50"
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

  // Filter logic for search
  const filteredResources = resources.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    r.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      {/* 2. Topic Grid */}
      <div className="py-20 lg:py-24">
         <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-2xl font-medium text-text mb-10">Browse help topics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {filteredResources.map((res) => (
                   <Link 
                      key={res.title} 
                      to={res.link} 
                      className="group flex flex-col p-8 rounded-3xl border border-gray-200 hover:border-blue-100 hover:shadow-google transition-all bg-white"
                   >
                       <div className={`w-14 h-14 ${res.bg} ${res.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                           <res.icon size={28} />
                       </div>
                       <h3 className="font-display text-xl font-medium text-text mb-3 group-hover:text-primary transition-colors">
                          {res.title}
                       </h3>
                       <p className="font-sans text-muted leading-relaxed mb-6 flex-grow">
                          {res.description}
                       </p>
                       <div className="text-primary font-medium text-sm flex items-center mt-auto">
                          View details <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                       </div>
                   </Link>
               ))}
            </div>

            {filteredResources.length === 0 && (
                <div className="text-center py-20 bg-gray-50 rounded-3xl">
                    <p className="text-muted">No topics found matching "{searchQuery}"</p>
                    <button 
                        onClick={() => setSearchQuery('')}
                        className="text-primary font-medium mt-2 hover:underline"
                    >
                        Clear search
                    </button>
                </div>
            )}
         </div>
      </div>

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