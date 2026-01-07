import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface ServiceTestimonialsProps {
  testimonials: Testimonial[];
}

const ServiceTestimonials: React.FC<ServiceTestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[128px] translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[128px] -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-blue-200 text-sm font-bold mb-4">
             <Star size={14} className="fill-blue-200" />
             <span>5.0 Average Rating</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Neighbors in NoVA</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Real stories from homeowners we've helped recover from disaster.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl relative hover:bg-white/10 transition-colors">
              <Quote size={40} className="absolute top-6 right-6 text-white/10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={`${i < t.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'}`} />
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed mb-6 italic">"{t.text}"</p>

              <div className="mt-auto">
                <div className="font-bold text-white text-lg">{t.author}</div>
                <div className="text-sm text-slate-500 flex justify-between items-center mt-1">
                  <span>{t.location}</span>
                  <span>{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
           <a href="#" className="inline-block text-blue-300 hover:text-white underline underline-offset-4 transition-colors">Read all 150+ Google Reviews</a>
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;