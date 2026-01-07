import React from 'react';
import { Quote } from 'lucide-react';
import { ReviewProps } from './types';
import StarRating from './StarRating';

const TestimonialMasonry: React.FC<ReviewProps> = ({ reviews, className = "" }) => {
  return (
    <div className={`w-full max-w-6xl mx-auto px-4 py-8 ${className}`}>
      {/* Tailwind Columns Utility for Masonry Effect */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="break-inside-avoid bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-slate-200"
          >
            {/* Schema Markup for list item */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "Review",
                "itemReviewed": {
                  "@type": "LocalBusiness",
                  "name": "Flood Doctor"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": review.rating
                },
                "author": {
                  "@type": "Person",
                  "name": review.author
                },
                "reviewBody": review.text
              })}
            </script>

            <div className="flex justify-between items-start mb-4">
              <StarRating rating={review.rating} size={16} />
              <Quote size={20} className="text-brand-200" fill="currentColor" />
            </div>
            
            <p className="text-slate-700 leading-relaxed mb-6">
              "{review.text}"
            </p>
            
            <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
              <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-sm shrink-0">
                {review.author.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-slate-900 text-sm">
                  {review.author}
                </span>
                <span className="text-xs text-slate-500">
                  {review.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialMasonry;