import React from 'react';
import PageMeta from '../components/ui/PageMeta';
import { Star, ThumbsUp, CheckCircle2, MoreVertical, MessageCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const Reviews: React.FC = () => {
  // Aggregate Data
  const stats = {
    average: 4.9,
    total: 128,
    breakdown: [
      { stars: 5, count: 118, pct: '92%' },
      { stars: 4, count: 8, pct: '6%' },
      { stars: 3, count: 2, pct: '2%' },
      { stars: 2, count: 0, pct: '0%' },
      { stars: 1, count: 0, pct: '0%' },
    ]
  };

  const reviews = [
    {
      id: 1,
      author: "Sarah Mitchell",
      initial: "S",
      color: "bg-purple-600",
      location: "Arlington, VA",
      rating: 5,
      date: "2 weeks ago",
      badges: ["Critical Response", "Basement Flood"],
      text: "Flood Doctor arrived within 45 minutes of my call. A pipe burst in our basement at 2 AM on a Sunday. They were professional, calm, and handled everything with our insurance. Highly recommended.",
      response: "Thank you, Sarah! We know 2 AM emergencies are stressful. Glad our team could get the water stopped quickly. We appreciate you trusting us with your home."
    },
    {
      id: 2,
      author: "Michael Turner",
      initial: "M",
      color: "bg-blue-600",
      location: "Fairfax, VA",
      rating: 5,
      date: "1 month ago",
      badges: ["Storm Damage", "Drywall Repair"],
      text: "We had significant storm damage from the recent hurricane. The team was thorough in the cleanup and drying process. They used thermal cameras to ensure no moisture was left behind the drywall. Professional from start to finish.",
      response: null
    },
    {
      id: 3,
      author: "Elite Property Mgmt",
      initial: "E",
      color: "bg-green-600",
      location: "Tysons, VA",
      rating: 5,
      date: "3 months ago",
      badges: ["Commercial Service", "Sprinkler Leak"],
      text: "Professional commercial service. They minimized our downtime significantly after a sprinkler malfunction. The documentation provided for our insurance claim was impeccable. Will definitely use again for any portfolio properties.",
      response: null
    },
    {
      id: 4,
      author: "Emily Ross",
      initial: "E",
      color: "bg-orange-500",
      location: "Ashburn, VA",
      rating: 5,
      date: "4 months ago",
      badges: ["Mold Remediation", "Attic"],
      text: "I was panicked when I found mold in the attic. The Flood Doctor team explained the remediation process clearly and safely removed everything. The air quality testing afterward gave us peace of mind.",
      response: null
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta 
        title="Customer Reviews & Ratings" 
        description="See why neighbors in Northern Virginia rate Flood Doctor 4.9/5 stars. Verified reviews for water damage, mold, and fire restoration." 
      />
      
      <div className="max-w-[1440px] mx-auto px-6 py-12 md:py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* LEFT: Ratings Summary (Sticky) */}
          <div className="lg:col-span-4">
             <div className="sticky top-32">
                <h1 className="font-display text-4xl font-medium text-text mb-2">Reviews</h1>
                <div className="flex items-baseline gap-2 mb-8">
                   <span className="text-sm text-muted">Flood Doctor (Northern Virginia)</span>
                </div>

                {/* Score Big Display */}
                <div className="flex items-center gap-4 mb-8">
                   <div className="flex flex-col items-center justify-center w-32 h-32 rounded-full bg-subtle">
                      <span className="font-display text-5xl font-medium text-text">{stats.average}</span>
                      <div className="flex text-yellow-400 mt-1 gap-0.5">
                         {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" stroke="none" />)}
                      </div>
                   </div>
                   <div className="flex-1">
                      <div className="text-sm text-muted mb-3">{stats.total} verified reviews</div>
                      {/* Histogram */}
                      <div className="space-y-1.5">
                         {stats.breakdown.map((row) => (
                            <div key={row.stars} className="flex items-center gap-3 text-xs">
                               <span className="w-3 font-medium text-muted">{row.stars}</span>
                               <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                  <div className="h-full bg-yellow-400 rounded-full" style={{ width: row.pct }}></div>
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>
                </div>

                {/* CTA Box */}
                <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                   <h3 className="font-display text-lg font-medium text-primary mb-2">Have we worked together?</h3>
                   <p className="text-sm text-muted mb-4">Sharing your experience helps your neighbors find trusted help.</p>
                   <Button variant="secondary" fullWidth className="bg-white border-blue-200 text-primary hover:bg-blue-100">
                      Write a Review
                   </Button>
                </div>
             </div>
          </div>

          {/* RIGHT: Review Feed */}
          <div className="lg:col-span-8">
             <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <div className="flex gap-2">
                   <button className="px-4 py-2 rounded-full bg-text text-white text-sm font-medium">Most Relevant</button>
                   <button className="px-4 py-2 rounded-full bg-white border border-gray-200 text-text text-sm font-medium hover:bg-subtle transition-colors">Newest</button>
                   <button className="px-4 py-2 rounded-full bg-white border border-gray-200 text-text text-sm font-medium hover:bg-subtle transition-colors">Highest Rating</button>
                </div>
             </div>

             <div className="space-y-12">
                {reviews.map((review) => (
                   <div key={review.id} className="group">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-4">
                         <div className="flex gap-4">
                            <div className={`w-10 h-10 ${review.color} rounded-full flex items-center justify-center text-white font-medium text-lg`}>
                               {review.initial}
                            </div>
                            <div>
                               <div className="font-medium text-text">{review.author}</div>
                               <div className="text-xs text-muted flex items-center gap-1.5 mt-0.5">
                                  <span>{review.location}</span>
                                  <span>•</span>
                                  <span className="text-green-700 bg-green-50 px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase">Verified</span>
                               </div>
                            </div>
                         </div>
                         <button className="text-gray-300 hover:text-text p-2 rounded-full hover:bg-gray-100 transition-colors">
                            <MoreVertical size={20} />
                         </button>
                      </div>

                      {/* Stars & Date */}
                      <div className="flex items-center gap-2 mb-3">
                         <div className="flex text-yellow-400 gap-0.5">
                            {[...Array(review.rating)].map((_, i) => (
                               <Star key={i} size={16} fill="currentColor" stroke="none" />
                            ))}
                         </div>
                         <span className="text-sm text-muted">{review.date}</span>
                      </div>

                      {/* Badges */}
                      <div className="flex gap-2 mb-4">
                         {review.badges.map(badge => (
                            <span key={badge} className="px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-muted bg-white">
                               {badge}
                            </span>
                         ))}
                      </div>

                      {/* Content */}
                      <p className="text-text leading-relaxed mb-6">
                         {review.text}
                      </p>

                      {/* Owner Response */}
                      {review.response && (
                         <div className="ml-4 pl-4 border-l-2 border-blue-100 bg-subtle/50 p-4 rounded-r-xl mb-6">
                            <div className="flex items-center gap-2 mb-2">
                               <span className="font-bold text-sm text-text">Response from the owner</span>
                               <span className="text-xs text-muted">1 week ago</span>
                            </div>
                            <p className="text-sm text-muted leading-relaxed">
                               {review.response}
                            </p>
                         </div>
                      )}

                      {/* Actions */}
                      <div className="flex gap-4">
                         <button className="flex items-center gap-2 text-sm text-muted hover:text-text transition-colors">
                            <ThumbsUp size={16} /> Helpful
                         </button>
                         <button className="flex items-center gap-2 text-sm text-muted hover:text-text transition-colors">
                            <MessageCircle size={16} /> Comment
                         </button>
                      </div>
                      
                      <div className="h-px bg-gray-100 mt-10 w-full group-last:hidden"></div>
                   </div>
                ))}
             </div>
             
             <div className="mt-16 text-center">
                <Button variant="outline" className="px-8 h-12">
                   Load more reviews
                </Button>
             </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Reviews;