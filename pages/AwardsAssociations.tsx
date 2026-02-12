import React from 'react';
import { Award, Shield, Star, BadgeCheck, Building2, Leaf, Trophy, Heart, ExternalLink } from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';
import Button from '../components/ui/Button';

/**
 * Awards & Associations — Google Ads Impact Awards Style
 *
 * Design reference: business.google.com/us/accelerate/ads-impact-awards-winners/
 * - White card grid on light gray bg
 * - 20px border-radius cards
 * - 80px circular icon area
 * - Category label (small, uppercase, colored)
 * - Title + description
 * - Consistent padding, clean typography
 */

interface AwardCard {
  icon: React.ReactNode;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  highlight?: string;
}

const AWARDS: AwardCard[] = [
  {
    icon: <Trophy size={36} strokeWidth={1.5} />,
    category: 'Award',
    categoryColor: '#1a73e8',
    title: 'Best of HomeAdvisor',
    description: 'Named a recipient of the Best of HomeAdvisor Award for fourteen consecutive years, honoring top-notch professionals who provide extraordinary quality, service, and value.',
    highlight: '14 Years Running',
  },
  {
    icon: <Award size={36} strokeWidth={1.5} />,
    category: 'Award',
    categoryColor: '#1a73e8',
    title: 'Crawford Connection Golden Hammer',
    description: 'Received the distinguished Excellence in Achievement Award for ranking in the top 200 of more than 4,000 contractors across the United States and Canada.',
    highlight: 'Top 200 Nationally',
  },
  {
    icon: <Star size={36} strokeWidth={1.5} />,
    category: 'Award',
    categoryColor: '#1a73e8',
    title: 'Angi Super Service Provider',
    description: 'Awarded the Angi Super Service Provider distinction every single year since joining, recognizing consistent excellence in customer satisfaction and service delivery.',
    highlight: 'Every Year Since Joining',
  },
  {
    icon: <Heart size={36} strokeWidth={1.5} />,
    category: 'Award',
    categoryColor: '#1a73e8',
    title: 'Houzz Customer Service Award',
    description: 'Recognized with the Houzz Customer Service Award for ten consecutive years, reflecting an unwavering commitment to client communication and project satisfaction.',
    highlight: '10 Years in a Row',
  },
];

const ASSOCIATIONS: AwardCard[] = [
  {
    icon: <BadgeCheck size={36} strokeWidth={1.5} />,
    category: 'Certification',
    categoryColor: '#0d652d',
    title: 'IICRC Certified Firm',
    description: 'Certified by the Institute of Inspection, Cleaning and Restoration Certification. Our Rapid Response Teams specialize in water damage restoration, structural drying, and environmental remediation.',
  },
  {
    icon: <Shield size={36} strokeWidth={1.5} />,
    category: 'Accreditation',
    categoryColor: '#0d652d',
    title: 'BBB A+ Rated',
    description: 'Accredited by the Better Business Bureau with an A+ rating, reflecting our commitment to ethical business practices, transparency, and customer trust.',
  },
  {
    icon: <Leaf size={36} strokeWidth={1.5} />,
    category: 'Certification',
    categoryColor: '#0d652d',
    title: 'EPA Lead-Safe Certified',
    description: 'Certified by the U.S. Environmental Protection Agency as a Lead-Safe firm, ensuring safe practices in properties that may contain lead-based materials.',
  },
  {
    icon: <Building2 size={36} strokeWidth={1.5} />,
    category: 'Association',
    categoryColor: '#b06000',
    title: 'Northern Virginia Chamber of Commerce',
    description: 'Proud member of the NOVA Chamber. Recognized through the Outstanding Corporate Citizenship Awards, honoring businesses that serve as champions for good in the greater Washington area.',
  },
];

const Card: React.FC<{ item: AwardCard }> = ({ item }) => (
  <div className="bg-white rounded-[20px] p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full border border-[#e8eaed]">
    {/* Icon Circle */}
    <div
      className="w-[80px] h-[80px] rounded-full flex items-center justify-center mb-6 flex-shrink-0"
      style={{ backgroundColor: `${item.categoryColor}12` }}
    >
      <div style={{ color: item.categoryColor }}>
        {item.icon}
      </div>
    </div>

    {/* Category Label */}
    <span
      className="text-[12px] font-bold uppercase tracking-widest mb-2 block"
      style={{ color: item.categoryColor }}
    >
      {item.category}
    </span>

    {/* Title */}
    <h3 className="text-[20px] font-semibold text-[#202124] leading-snug mb-3">
      {item.title}
    </h3>

    {/* Highlight Badge */}
    {item.highlight && (
      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#e8f0fe] text-[#1a73e8] text-[13px] font-medium mb-3 w-fit">
        {item.highlight}
      </span>
    )}

    {/* Description */}
    <p className="text-[15px] text-[#5f6368] leading-relaxed flex-1">
      {item.description}
    </p>
  </div>
);

const AwardsAssociations: React.FC = () => {
  return (
    <>
      <PageMeta
        title="Awards & Associations | Flood Doctor"
        description="Flood Doctor's industry awards, certifications, and professional associations. IICRC certified, BBB A+ rated, 14-time HomeAdvisor award winner."
        canonicalPath="/awards/"
      />

      <main id="main-content">
        {/* Hero Section — Google style: centered, clean, light bg */}
        <section className="bg-gradient-to-b from-[#f8f9fa] to-white py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#e8f0fe] text-[#1a73e8] text-[13px] font-semibold tracking-wide uppercase mb-6">
              Recognized Excellence
            </span>
            <h1 className="text-[36px] lg:text-[48px] font-bold text-[#202124] tracking-tight leading-[1.15] mb-6">
              Awards & Associations
            </h1>
            <p className="text-[18px] lg:text-[20px] text-[#5f6368] leading-relaxed max-w-2xl mx-auto">
              Industry recognition that reflects our commitment to excellence in water damage restoration, customer service, and community leadership.
            </p>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-[28px] lg:text-[36px] font-bold text-[#202124] tracking-tight">
                Award Winners
              </h2>
              <p className="text-[16px] text-[#5f6368] mt-3 max-w-2xl">
                A proven track record of excellence, recognized year after year by the industry's most respected platforms.
              </p>
            </div>

            {/* Awards Grid — 2 cols on tablet, 4 on desktop (Google style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {AWARDS.map((award) => (
                <Card key={award.title} item={award} />
              ))}
            </div>
          </div>
        </section>

        {/* Associations & Certifications Section */}
        <section className="py-20 lg:py-24 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-[28px] lg:text-[36px] font-bold text-[#202124] tracking-tight">
                Certifications & Associations
              </h2>
              <p className="text-[16px] text-[#5f6368] mt-3 max-w-2xl">
                Backed by the credentials that matter. Every team member meets or exceeds industry standards.
              </p>
            </div>

            {/* Associations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ASSOCIATIONS.map((assoc) => (
                <Card key={assoc.title} item={assoc} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Bar — Google style horizontal stats */}
        <section className="py-16 bg-white border-t border-[#e8eaed]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '14+', label: 'Years of Awards' },
                { value: '4.9', label: 'Average Rating' },
                { value: '500+', label: 'Verified Reviews' },
                { value: '24/7', label: 'Emergency Response' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-[36px] lg:text-[44px] font-bold text-[#1a73e8] leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[14px] text-[#5f6368] mt-2 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section — Google style */}
        <section className="py-20 lg:py-24 bg-[#1a73e8]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-[28px] lg:text-[36px] font-bold text-white tracking-tight mb-4">
              Experience award-winning service
            </h2>
            <p className="text-[18px] text-white/80 mb-8 max-w-xl mx-auto">
              Our IICRC-certified teams are standing by 24/7. Get a response in under 60 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/request/" variant="primary" className="bg-white !text-[#1a73e8] hover:bg-gray-100 font-semibold px-8 py-3 text-[16px]">
                Request Service
              </Button>
              <Button href="tel:8774970007" variant="outline" className="!border-white/40 !text-white hover:!bg-white/10 font-semibold px-8 py-3 text-[16px]">
                (877) 497-0007
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AwardsAssociations;
