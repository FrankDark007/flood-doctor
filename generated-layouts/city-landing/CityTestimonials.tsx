import React from 'react';
import { Star, Quote } from 'lucide-react';
import { CityData } from '../types';

interface CityTestimonialsProps {
  city: CityData;
}

const CityTestimonials: React.FC<CityTestimonialsProps> = ({ city }) => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted by {city.name} Residents</h2>
          <div className="flex items-center justify-center gap-2 text-yellow-500 mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-6 h-6 fill-current" />)}
            </div>
            <span className="text-slate-700 font-bold text-lg">4.9/5</span>
          </div>
          <p className="text-slate-500">Based on Google Reviews in {city.name}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {city.reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100" />
              <div className="flex gap-1 text-yellow-500 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 italic">"{review.text}"</p>
              <div className="border-t border-slate-50 pt-4">
                <p className="font-bold text-slate-900">{review.author}</p>
                <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                  <span>{review.location}</span>
                  <span>•</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center text-[#1a73e8] font-semibold hover:underline">
            See all {city.name} reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default CityTestimonials;