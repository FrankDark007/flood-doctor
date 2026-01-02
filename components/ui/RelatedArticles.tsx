import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

export interface RelatedArticle {
  title: string;
  slug: string;
  category: string;
  readTime?: string;
}

// Central repository of related articles for internal linking
export const ARTICLE_LINKS: Record<string, RelatedArticle[]> = {
  'water-damage': [
    { title: 'Basement Flooding Prevention & Response Guide', slug: '/blog/basement-flooding-guide/', category: 'Water Damage', readTime: '12 min' },
    { title: 'Burst Pipe Emergency Response Guide', slug: '/blog/burst-pipe-emergency-response/', category: 'Emergency', readTime: '8 min' },
    { title: 'Ceiling Water Damage: Causes & Solutions', slug: '/blog/ceiling-water-damage-guide/', category: 'Water Damage', readTime: '10 min' },
    { title: 'Kitchen Water Damage Restoration Guide', slug: '/blog/kitchen-water-damage-guide/', category: 'Water Damage', readTime: '9 min' },
    { title: 'Bathroom Water Damage: Complete Guide', slug: '/blog/bathroom-water-damage-guide/', category: 'Water Damage', readTime: '11 min' },
    { title: 'Hardwood Floor Water Damage Recovery', slug: '/blog/hardwood-floor-water-damage/', category: 'Flooring', readTime: '10 min' },
    { title: 'Water Damaged Drywall: Repair or Replace?', slug: '/blog/drywall-water-damage-guide/', category: 'Structural', readTime: '8 min' },
  ],
  'mold': [
    { title: 'Understanding Mold After Water Damage', slug: '/blog/mold-after-water-damage-timeline/', category: 'Mold', readTime: '10 min' },
    { title: 'Bathroom Mold Prevention Guide', slug: '/blog/bathroom-mold-prevention-guide/', category: 'Prevention', readTime: '7 min' },
    { title: 'Attic Mold: Causes and Prevention', slug: '/blog/attic-mold-causes-prevention/', category: 'Mold', readTime: '9 min' },
    { title: 'HVAC Mold Contamination Guide', slug: '/blog/hvac-mold-contamination-guide/', category: 'HVAC', readTime: '8 min' },
  ],
  'insurance': [
    { title: 'Water Damage Insurance Claims Guide', slug: '/resources/insurance-claims-guide/', category: 'Insurance', readTime: '15 min' },
    { title: 'Does Home Warranty Cover Water Damage?', slug: '/blog/water-damage-home-warranty-coverage/', category: 'Insurance', readTime: '8 min' },
    { title: 'Condo Water Damage: HOA & Insurance Guide', slug: '/blog/condo-water-damage-hoa-guide/', category: 'Insurance', readTime: '12 min' },
  ],
  'prevention': [
    { title: 'Emergency Preparedness for Northern Virginia', slug: '/resources/emergency-preparedness-northern-va/', category: 'Preparedness', readTime: '14 min' },
    { title: 'Sump Pump Maintenance Guide', slug: '/blog/sump-pump-failure-prevention/', category: 'Prevention', readTime: '10 min' },
    { title: 'Window & Door Water Intrusion Prevention', slug: '/blog/window-door-water-intrusion/', category: 'Prevention', readTime: '9 min' },
  ],
  'commercial': [
    { title: 'Commercial Water Damage: Business Continuity', slug: '/blog/commercial-water-damage-business-continuity/', category: 'Commercial', readTime: '11 min' },
    { title: 'Commercial Water Damage Restoration DC', slug: '/blog/commercial-water-damage-restoration-dc/', category: 'Commercial', readTime: '10 min' },
  ]
};

interface RelatedArticlesProps {
  articles?: RelatedArticle[];
  categories?: string[];
  currentSlug?: string;
  maxArticles?: number;
  title?: string;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  articles,
  categories = ['water-damage'],
  currentSlug,
  maxArticles = 4,
  title = "Related Articles"
}) => {
  // Get articles from categories if not provided directly
  let displayArticles = articles || [];

  if (!articles && categories.length > 0) {
    displayArticles = categories
      .flatMap(cat => ARTICLE_LINKS[cat] || [])
      .filter(article => article.slug !== currentSlug);
  }

  // Deduplicate and limit
  const uniqueArticles = displayArticles
    .filter((article, index, self) =>
      index === self.findIndex(a => a.slug === article.slug)
    )
    .slice(0, maxArticles);

  if (uniqueArticles.length === 0) return null;

  return (
    <div className="bg-gray-50 rounded-2xl p-6 my-12">
      <h3 className="font-display text-xl font-medium text-gray-900 mb-6">{title}</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {uniqueArticles.map((article, i) => (
          <Link
            key={i}
            to={article.slug}
            className="group bg-white rounded-xl p-4 border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all"
          >
            <div className="text-xs font-medium text-primary mb-2">{article.category}</div>
            <div className="font-medium text-gray-900 group-hover:text-primary transition-colors mb-2 line-clamp-2">
              {article.title}
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              {article.readTime && (
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {article.readTime}
                </span>
              )}
              <ArrowRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;

// Inline link helper for embedding in article text
export const InlineArticleLink: React.FC<{ slug: string; children: React.ReactNode }> = ({ slug, children }) => (
  <Link to={slug} className="text-primary hover:underline font-medium">
    {children}
  </Link>
);
