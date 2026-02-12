import React from 'react';
import { Award, Shield, Star, BadgeCheck, Building2, Leaf, Trophy, Heart, Landmark } from 'lucide-react';
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
  {
    icon: <Star size={32} strokeWidth={1.2} />,
    category: 'Award',
    subcategory: '2010 – 2024',
    title: "Angi's Super Service Provider",
    description: "Flood Doctor has been awarded the Angi's Super Service Provider award every single year since joining the Angi's List family of quality service providers.",
  },
  {
    icon: <Award size={32} strokeWidth={1.2} />,
    category: 'Award',
    subcategory: '2011 & 2015',
    title: 'Crawford Connection Golden Hammer',
    description: 'Received the distinguished Excellence in Achievement Award for ranking in the top 200 of more than 4,000 contractors in the U.S. and Canada. Awarded based on performance criteria and overall quality of service.',
  },
  {
    icon: <Heart size={32} strokeWidth={1.2} />,
    category: 'Award',
    subcategory: '2010 – 2024',
    title: 'Best of Houzz – Service',
    description: 'Best of Houzz is the people\'s choice award. Flood Doctor has been submitted and awarded the Houzz Customer Service Award for fourteen years in a row.',
  },
  {
    icon: <Shield size={32} strokeWidth={1.2} />,
    category: 'Award',
    subcategory: '2010 – 2025',
    title: 'DKI Diamond Claims Award',
    description: 'The DKI DIAMOND Claims Award is presented to DKI Restoration Contractors who excel in providing a high level of service, reporting, and assistance relative to property loss claims.',
  },
  {
    icon: <Trophy size={32} strokeWidth={1.2} />,
    category: 'Award',
    subcategory: '2010 – 2024',
    title: 'Best of HomeAdvisor',
    description: 'Named a recipient of the Best of HomeAdvisor Award for fourteen years in a row, honoring top-notch professionals providing extraordinary quality, service, and value in home improvement.',
  },
  {
    icon: <Building2 size={32} strokeWidth={1.2} />,
    category: 'Association',
    subcategory: '2000 – 2025',
    title: 'Northern Virginia Chamber of Commerce',
    description: 'The Outstanding Corporate Citizenship Awards honors and celebrates the leadership of individuals, businesses, and nonprofits that serve as powerful champions for good in the greater Washington area.',
  },
  {
    icon: <BadgeCheck size={32} strokeWidth={1.2} />,
    category: 'Association',
    subcategory: '2000 – 2025',
    title: 'Restoration Industry Association',
    description: 'Innovation in Restoration award recipient for residential and commercial restoration projects, including restoration and remediation of structures and their contents.',
  },
  {
    icon: <Landmark size={32} strokeWidth={1.2} />,
    category: 'Association',
    subcategory: '2004 – 2025',
    title: 'Fairfax County Chamber of Commerce',
    description: 'The Outstanding Corporate Citizenship Awards honors and celebrates the leadership of individuals, businesses, and nonprofits that serve as powerful champions for good in the greater Washington area.',
  },
  {
    icon: <Leaf size={32} strokeWidth={1.2} />,
    category: 'Certification',
    subcategory: 'Active',
    title: 'EPA Lead-Safe Certified',
    description: 'Certified by the U.S. Environmental Protection Agency as a Lead-Safe firm, ensuring safe practices in properties that may contain lead-based materials.',
  },
];

const Card: React.FC<{ item: CardItem }> = ({ item }) => (
  <div className="bg-white rounded-[24px] flex flex-col min-h-[348px]" style={{ boxShadow: '0 0 0 1px #dadce0' }}>
    {/* Icon area — 24px padding top/sides, 16px bottom */}
    <div className="pt-6 px-6 pb-4">
      <div className="w-[80px] h-[80px] rounded-full bg-[#f1f3f4] flex items-center justify-center">
        <div className="text-[#3c4043]">
          {item.icon}
        </div>
      </div>
    </div>

    {/* Content area — 24px padding all sides */}
    <div className="px-6 pb-6 flex flex-col flex-1">
      {/* Category — 11px, weight 500, #5f6368 */}
      <span className="text-[11px] font-medium uppercase tracking-[0.04em] text-[#5f6368] leading-[16px] block">
        {item.category} - {item.subcategory}
      </span>

      {/* Title — 20px/28px, mt-2 (8px) */}
      <h3 className="text-[20px] text-[#202124] leading-[28px] mt-2">
        {item.title}
      </h3>

      {/* Description — 16px/24px, mt-2 (8px), #3c4043 */}
      <p className="text-[16px] text-[#3c4043] leading-[24px] mt-2 flex-1">
        {item.description}
      </p>
    </div>
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
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
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
