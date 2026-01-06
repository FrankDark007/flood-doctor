import React from 'react';
import { MoreVertical, ThumbsUp, Share2 } from 'lucide-react';
import { ReviewProps } from '../types';
import StarRating from './StarRating';

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const GoogleReviewsCard: React.FC<ReviewProps> = ({ reviews, className = "" }) => {
  // Use first 3 reviews for this view
  const displayReviews = reviews.slice(0, 3);
  const totalReviews = 187; // Mock total
  const averageRating = 5.0;

  return (
    <div className={`w-full max-w-md mx-auto bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden ${className}`}>
      
      {/* Header / Summary */}
      <div className="bg-slate-50 p-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-full shadow-sm">
                <GoogleLogo />
            </div>
            <div>
                <h3 className="font-semibold text-slate-800 text-sm">Flood Doctor</h3>
                <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-slate-900">{averageRating}</span>
                    <StarRating rating={5} size={12} />
                    <span className="text-xs text-slate-500">({totalReviews})</span>
                </div>
            </div>
        </div>
        <button className="text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md transition-colors">
            Review us
        </button>
      </div>

      {/* Review List */}
      <div className="divide-y divide-slate-100 max-h-[500px] overflow-y-auto custom-scrollbar">
        {displayReviews.map((review) => (
            <div key={review.id} className="p-5 hover:bg-slate-50 transition-colors">
                 {/* Schema for Google Cards usually handled by Google, but good to have for page context */}
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

                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                        {review.avatarUrl ? (
                            <img src={review.avatarUrl} alt={review.author} className="w-8 h-8 rounded-full object-cover" />
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs">
                                {review.author.charAt(0)}
                            </div>
                        )}
                        <div>
                            <div className="font-bold text-sm text-slate-900">{review.author}</div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-500">{review.date || 'A week ago'}</span>
                            </div>
                        </div>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600">
                        <MoreVertical size={16} />
                    </button>
                </div>

                <div className="mb-2">
                    <StarRating rating={review.rating} size={14} className="mb-1" />
                    <p className="text-sm text-slate-700 leading-snug">
                        {review.text}
                    </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-3">
                    <button className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-700 transition-colors">
                        <ThumbsUp size={14} />
                        <span>Helpful</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-700 transition-colors">
                        <Share2 size={14} />
                        <span>Share</span>
                    </button>
                </div>
            </div>
        ))}
      </div>
      
      <div className="p-3 bg-slate-50 border-t border-slate-100 text-center">
          <a href="#" className="text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors">
              View all reviews on Google Maps
          </a>
      </div>
    </div>
  );
};

export default GoogleReviewsCard;