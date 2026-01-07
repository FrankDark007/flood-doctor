import React from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';
import { ReviewProps } from './types';
import StarRating from './StarRating';

const TestimonialFeatured: React.FC<ReviewProps> = ({ reviews, className = "" }) => {
  const featuredReview = reviews[0];
  const otherReviews = reviews.slice(1, 4);

  return (
    <div className={`w-full max-w-6xl mx-auto px-4 py-8 ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Featured Large Card */}
        <div className="lg:col-span-7 flex flex-col">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
             <span className="bg-brand-100 text-brand-700 p-1.5 rounded-lg">
                <Quote size={24} />
             </span>
             Customer Spotlight
          </h3>
          <div className="bg-gradient-to-br from-brand-900 to-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl flex-grow flex flex-col justify-center relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
             
             <div className="relative z-10">
               <StarRating rating={featuredReview.rating} size={24} fillColor="fill-yellow-400" strokeColor="text-yellow-400" className="mb-6" />
               <blockquote className="text-2xl md:text-3xl font-medium leading-normal mb-8 text-slate-50">
                 "{featuredReview.text}"
               </blockquote>
               
               <div className="flex items-center gap-4">
                  <img 
                    src={featuredReview.avatarUrl} 
                    alt={featuredReview.author} 
                    className="w-16 h-16 rounded-full border-2 border-brand-500 object-cover"
                  />
                  <div>
                    <div className="font-bold text-lg">{featuredReview.author}</div>
                    <div className="text-brand-300">{featuredReview.location}</div>
                  </div>
               </div>
             </div>
          </div>
        </div>

        {/* Sidebar List */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-slate-500 uppercase tracking-wider mb-6">Recent Feedback</h3>
          <div className="space-y-4">
            {otherReviews.map((review) => (
              <div key={review.id} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <StarRating rating={review.rating} size={14} />
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-3 line-clamp-3">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-2">
                   <div className="text-sm font-bold text-slate-900">{review.author}</div>
                   <CheckCircle2 size={14} className="text-green-500" />
                   <span className="text-xs text-slate-400">Verified Customer</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center lg:text-left">
            <a href="#" className="text-brand-600 font-semibold text-sm hover:underline">
              Read all 248 reviews &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialFeatured;