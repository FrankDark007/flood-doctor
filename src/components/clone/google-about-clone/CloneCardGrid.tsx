import React from 'react';
import CloneCard from './CloneCard';
import { Droplets, Shield, Clock } from 'lucide-react';

interface CardItem {
  title: string;
  description: string;
  href: string;
  imageBg?: string;
  icon: React.ReactNode;
}

const CARDS: CardItem[] = [
  {
    title: 'Services',
    description: 'Explore our water damage restoration services for homes and businesses',
    href: '/services/',
    imageBg: 'bg-gradient-to-br from-blue-100 to-blue-50',
    icon: <Droplets size={64} strokeWidth={1.5} />,
  },
  {
    title: 'Technology',
    description: 'Learn about our advanced drying technology and moisture monitoring systems',
    href: '/resources/technology/',
    imageBg: 'bg-gradient-to-br from-gray-900 to-gray-800',
    icon: <Shield size={64} strokeWidth={1.5} className="text-blue-400" />,
  },
  {
    title: 'Emergency Response',
    description: 'See how we respond to water emergencies 24/7 with rapid deployment',
    href: '/contact/',
    imageBg: 'bg-gradient-to-br from-amber-100 to-amber-50',
    icon: <Clock size={64} strokeWidth={1.5} />,
  },
];

const CloneCardGrid: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16">
          {CARDS.map((card) => (
            <CloneCard
              key={card.title}
              title={card.title}
              description={card.description}
              href={card.href}
              imageBg={card.imageBg}
              imageIcon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloneCardGrid;
