import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import { generateBreadcrumbSchema, combineSchemas } from '../../utils/schema';
import {
  Phone,
  Droplets,
  AlertTriangle,
  FileText,
  Home,
  Shield,
  Zap,
  CloudRain,
  Clock,
  ArrowRight,
  CheckCircle2,
  BookOpen
} from 'lucide-react';

interface GuideCard {
  slug: string;
  title: string;
  description: string;
  icon: React.ElementType;
  steps: number;
  readTime: string;
  difficulty: 'Easy' | 'Moderate' | 'Advanced';
  category: string;
}

const guides: GuideCard[] = [
  {
    slug: '/guides/water-damage-cleanup/',
    title: 'How to Clean Up Water Damage',
    description: 'Step-by-step emergency water damage cleanup guide. Learn what to do in the first 24-48 hours to prevent mold and minimize damage.',
    icon: Droplets,
    steps: 8,
    readTime: '10 min',
    difficulty: 'Moderate',
    category: 'Emergency Response'
  },
  {
    slug: '/guides/mold-remediation/',
    title: 'How to Handle Mold After Water Damage',
    description: 'Professional mold remediation process explained. When to DIY vs call professionals, safety precautions, and prevention strategies.',
    icon: AlertTriangle,
    steps: 7,
    readTime: '12 min',
    difficulty: 'Advanced',
    category: 'Mold Remediation'
  },
  {
    slug: '/guides/water-damage-insurance-claim/',
    title: 'How to File a Water Damage Insurance Claim',
    description: 'Maximize your insurance claim with proper documentation, timelines, and negotiation strategies. Get the settlement you deserve.',
    icon: FileText,
    steps: 10,
    readTime: '15 min',
    difficulty: 'Moderate',
    category: 'Insurance'
  },
  {
    slug: '/guides/basement-waterproofing/',
    title: 'How to Waterproof Your Basement',
    description: 'Prevent basement flooding with interior and exterior waterproofing solutions. Sump pumps, French drains, and foundation sealing.',
    icon: Home,
    steps: 9,
    readTime: '14 min',
    difficulty: 'Advanced',
    category: 'Prevention'
  },
  {
    slug: '/guides/burst-pipe-emergency/',
    title: 'How to Handle a Burst Pipe Emergency',
    description: 'Immediate response guide for burst pipes. Stop the water, minimize damage, and get professional help fast.',
    icon: Zap,
    steps: 6,
    readTime: '8 min',
    difficulty: 'Easy',
    category: 'Emergency Response'
  },
  {
    slug: '/guides/flood-preparation/',
    title: 'How to Prepare Your Home for Flooding',
    description: 'Protect your Northern Virginia home before storms hit. Preparation checklist, emergency supplies, and evacuation planning.',
    icon: CloudRain,
    steps: 8,
    readTime: '11 min',
    difficulty: 'Easy',
    category: 'Prevention'
  }
];

const GuidesHub: React.FC = () => {
  const pageSchema = combineSchemas(
    generateBreadcrumbSchema([{ label: 'Guides', path: '/guides/' }]),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Water Damage & Restoration How-To Guides',
      description: 'Step-by-step guides for water damage cleanup, mold remediation, insurance claims, basement waterproofing, and emergency response.',
      url: 'https://flood.doctor/guides/',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: guides.map((guide, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'HowTo',
            name: guide.title,
            description: guide.description,
            url: `https://flood.doctor${guide.slug}`
          }
        }))
      }
    }
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700';
      case 'Moderate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage & Restoration How-To Guides"
        description="Step-by-step guides for water damage cleanup, mold remediation, insurance claims, basement waterproofing, and emergency response. Expert advice from IICRC-certified professionals."
        schema={pageSchema}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 border-b border-[#dadce0] pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Guides', path: '/guides/' }]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f0fe] text-[#1a73e8] text-xs font-bold uppercase tracking-wider mb-6">
              <BookOpen size={14} /> Step-by-Step Guides
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-[#202124] mb-6 leading-tight">
              Water Damage & Restoration How-To Guides
            </h1>
            <p className="font-sans text-xl text-[#5f6368] leading-relaxed mb-8">
              Expert step-by-step guides from IICRC-certified water damage professionals. Learn how to respond to emergencies, prevent future damage, and navigate insurance claims.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Need Help Now? Call 24/7
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Guides Grid */}
      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              to={guide.slug}
              className="group bg-white border border-[#dadce0] rounded-2xl p-6 hover:shadow-xl hover:border-[#1a73e8] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center group-hover:bg-[#1a73e8] group-hover:text-white transition-colors">
                  <guide.icon size={24} />
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${getDifficultyColor(guide.difficulty)}`}>
                  {guide.difficulty}
                </span>
              </div>

              <div className="text-xs font-medium text-[#1a73e8] mb-2 uppercase tracking-wider">
                {guide.category}
              </div>

              <h2 className="font-medium text-[#202124] text-lg mb-3 group-hover:text-[#1a73e8] transition-colors">
                {guide.title}
              </h2>

              <p className="text-sm text-[#5f6368] mb-4 leading-relaxed">
                {guide.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#f1f3f4]">
                <div className="flex items-center gap-4 text-xs text-[#5f6368]">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={14} className="text-[#1a73e8]" />
                    {guide.steps} steps
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {guide.readTime}
                  </span>
                </div>
                <ArrowRight size={18} className="text-[#dadce0] group-hover:text-[#1a73e8] transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Why Trust Our Guides */}
      <div className="bg-[#f8f9fa] py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-medium text-[#202124] mb-4">
              Why Trust Our Guides?
            </h2>
            <p className="text-[#5f6368]">
              Created by IICRC-certified professionals with 20+ years of hands-on experience in water damage restoration.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'IICRC Certified', description: 'All guides follow industry-standard protocols' },
              { icon: Clock, title: '20+ Years Experience', description: 'Based on thousands of real restoration projects' },
              { icon: CheckCircle2, title: 'Verified Methods', description: 'Tested and proven techniques that work' },
              { icon: FileText, title: 'Insurance Approved', description: 'Documentation methods insurers accept' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center border border-[#dadce0]">
                <div className="w-12 h-12 rounded-full bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="font-medium text-[#202124] mb-2">{item.title}</h3>
                <p className="text-sm text-[#5f6368]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency CTA */}
      <div className="bg-gradient-to-r from-[#1a73e8] to-[#1557b0] py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Water Damage Emergency? Don't Wait.
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            While these guides are helpful for understanding the process, water damage escalates quickly. Our 24/7 emergency team arrives in 60 minutes across Northern Virginia.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-[#1a73e8] border-none hover:bg-blue-50">
              <Phone size={20} className="mr-2" />
              Call 24/7: (877) 497-0007
            </Button>
            <Button to="/request/" variant="secondary" size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white/10">
              Request Emergency Service
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GuidesHub;
