import React from 'react';
import { Award, Shield, Star, BadgeCheck, Building2, Leaf, Trophy, Heart } from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';
import Button from '../components/ui/Button';

/**
 * Awards & Associations — Google Ads Impact Awards Card Style
 *
 * Exact match to: business.google.com/us/accelerate/ads-impact-awards-winners/
 * - 3-column grid
 * - White cards, subtle border (#dadce0), rounded-[16px]
 * - Icon top-left: 80px gray circle, thin line-art icon
 * - Category: small uppercase dark gray with – separator
 * - Title: bold, dark
 * - Description: regular, gray
 * - Generous padding (40px)
 * - No shadows, no colored labels, no badges
 */

interface CardItem {
  icon: React.ReactNode;
  category: string;
  subcategory: string;
  title: string;
  description: string;
}

const ALL_CARDS: CardItem[] = [
  // Awards
  {
    icon: <Trophy size={32} strokeWidth={1.2} />,
    category: 'Award',
    subcategory: 'Service Excellence',
    title: 'Best of HomeAdvisor',
    description: 'Named a recipient of the Best of HomeAdvisor Award for fourteen consecutive years, honoring top-notch professionals who provide extraordinary quality, service, and value in home improvement.',
  },
  {
    icon: <Award size={32} strokeWidth={1.2} />,
    category: 'Award',
    subcategory: 'National Recognition',
    title: 'Crawford Connection Golden Hammer',
    description: 'Received the distinguished Excellence in Achievement Award for ranking in the top 200 of more than 4,000 contractors across the United States and Canada.',
  },
  {
    icon: <Star size={32} strokeWidth={1.2} />,
    category: 'Award',
    subcategory: 'Customer Satisfaction',
    title: 'Angi Super Service Provider',
    description: 'Awarded the Angi Super Service Provider distinction every single year since joining, recognizing consistent excellence in customer satisfaction and service delivery.',
  },
  {
    icon: <Heart size={32} strokeWidth={1.2} />,
    category: 'Award',
    subcategory: 'Customer Service',
    title: 'Houzz Customer Service Award',
    description: 'Recognized with the Houzz Customer Service Award for ten consecutive years, reflecting an unwavering commitment to client communication and project satisfaction.',
  },
  // Certifications
  {
    icon: <BadgeCheck size={32} strokeWidth={1.2} />,
    category: 'Certification',
    subcategory: 'Industry Standard',
    title: 'IICRC Certified Firm',
    description: 'Certified by the Institute of Inspection, Cleaning and Restoration Certification. Our Rapid Response Teams specialize in water damage restoration, structural drying, and environmental remediation.',
  },
  {
    icon: <Shield size={32} strokeWidth={1.2} />,
    category: 'Accreditation',
    subcategory: 'Business Ethics',
    title: 'BBB A+ Rated',
    description: 'Accredited by the Better Business Bureau with an A+ rating, reflecting our commitment to ethical business practices, transparency, and customer trust.',
  },
  // Certifications & Associations
  {
    icon: <Leaf size={32} strokeWidth={1.2} />,
    category: 'Certification',
    subcategory: 'Environmental Safety',
    title: 'EPA Lead-Safe Certified',
    description: 'Certified by the U.S. Environmental Protection Agency as a Lead-Safe firm, ensuring safe practices in properties that may contain lead-based materials.',
  },
  {
    icon: <Building2 size={32} strokeWidth={1.2} />,
    category: 'Association',
    subcategory: 'Community Leadership',
    title: 'Northern Virginia Chamber of Commerce',
    description: 'Proud member of the NOVA Chamber. Recognized through the Outstanding Corporate Citizenship Awards, honoring businesses that serve as champions for good in the greater Washington area.',
  },
];

const Card: React.FC<{ item: CardItem }> = ({ item }) => (
  <div className="bg-white rounded-2xl border border-[#dadce0] p-10 flex flex-col h-full">
    {/* Icon — top-left, 80px gray circle with thin line-art icon */}
    <div className="w-[80px] h-[80px] rounded-full bg-[#f1f3f4] flex items-center justify-center mb-8">
      <div className="text-[#3c4043]">
        {item.icon}
      </div>
    </div>

    {/* Category — small uppercase, dark gray, with – separator */}
    <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#5f6368] mb-3 block">
      {item.category} – {item.subcategory}
    </span>

    {/* Title */}
    <h3 className="text-[18px] font-semibold text-[#202124] leading-snug mb-3">
      {item.title}
    </h3>

    {/* Description */}
    <p className="text-[14px] text-[#5f6368] leading-[1.7] flex-1">
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
        {/* Hero Section — clean, centered */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-[36px] lg:text-[48px] font-bold text-[#202124] tracking-tight leading-[1.15] mb-6">
              Awards & Associations
            </h1>
            <p className="text-[18px] lg:text-[20px] text-[#5f6368] leading-relaxed max-w-2xl mx-auto">
              Industry recognition that reflects our commitment to excellence in water damage restoration, customer service, and community leadership.
            </p>
          </div>
        </section>

        {/* Cards Grid — 3 columns, Google Impact Awards layout */}
        <section className="pb-20 lg:pb-28 bg-white">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ALL_CARDS.map((card) => (
                <Card key={card.title} item={card} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-16 bg-[#f8f9fa] border-t border-[#dadce0]">
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

        {/* CTA Section */}
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
