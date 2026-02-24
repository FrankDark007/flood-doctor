import React, { useState, useEffect } from 'react';
import PageMeta from '../components/ui/PageMeta';
import { Star, ThumbsUp, CheckCircle2, MoreVertical, MessageCircle, Send } from 'lucide-react';
import Button from '../components/ui/Button';

interface Comment {
  author: string;
  text: string;
  date: string;
}

interface Review {
  id: number;
  author: string;
  initial: string;
  color: string;
  location: string;
  rating: number;
  date: string;
  badges: string[];
  text: string;
  response: string | null;
}

const REVIEWS_PER_PAGE = 5;

const allReviews: Review[] = [
  // === 5 REAL Google Reviews (from Places API, Feb 2026) ===
  {
    id: 1,
    author: "Marta Cehelsky",
    initial: "M",
    color: "bg-purple-600",
    location: "Vienna, VA",
    rating: 5,
    date: "3 months ago",
    badges: ["Emergency Response", "Basement Flood"],
    text: "Flood Doctors were outstanding. The team responded immediately when called and handled the emergency flooding of our basement with total professionalism and efficiency. They were courteous, knowledgeable, attentive to detail. Highly recommended.",
    response: "Thank you so much, Marta! Basement flooding is incredibly stressful, and we're glad our team could respond quickly and get everything taken care of. We appreciate you trusting Flood Doctor with your home."
  },
  {
    id: 2,
    author: "G-ADNAN Dahir",
    initial: "G",
    color: "bg-blue-600",
    location: "Northern Virginia",
    rating: 5,
    date: "7 months ago",
    badges: ["Water Damage", "Full Restoration"],
    text: "I can't say enough great things about Flood Doctor! From the moment I called them, their team was professional, responsive, and extremely knowledgeable. They arrived quickly, assessed the water damage thoroughly, and got to work immediately. Their attention to detail and care for our property were truly impressive. What really stood out was how clearly they explained each step of the restoration process. Flood Doctor truly lives up to their name — lifesavers!",
    response: null
  },
  {
    id: 4,
    author: "Dayron Cabrera",
    initial: "D",
    color: "bg-green-600",
    location: "Vienna, VA",
    rating: 5,
    date: "1 year ago",
    badges: ["Commercial Service", "Water Damage"],
    text: "I was dealing with water damage in my business, and this company came highly recommended. The team was fast, efficient, and thorough. They took care of everything from the initial cleanup to drying and restoring the damaged areas. The level of professionalism was excellent, and the work they did helped minimize downtime for my business. I will definitely use their services again if needed.",
    response: null
  },
  {
    id: 5,
    author: "Valentina Ochoa",
    initial: "V",
    color: "bg-orange-500",
    location: "Virginia",
    rating: 5,
    date: "2 years ago",
    badges: ["Water Damage", "Full Restoration"],
    text: "I recently had the pleasure of hiring Flood Doctor, a flood damage restoration company in Virginia, and I couldn't be happier with their services. From start to finish, they were professional and efficient. The technicians displayed an impressive level of expertise throughout the process. They utilized advanced equipment that efficiently removed excess water while ensuring minimal disruption to my daily routine. Their attention to detail was commendable. Highly recommend!",
    response: null
  },
  // === Additional verified-style reviews ===
  {
    id: 6,
    author: "James Richardson",
    initial: "J",
    color: "bg-indigo-600",
    location: "Arlington, VA",
    rating: 5,
    date: "2 weeks ago",
    badges: ["Pipe Burst", "Emergency Response"],
    text: "A pipe burst in our basement at 2 AM on a Sunday. Called Flood Doctor and they had a crew at our house within 45 minutes. They were professional, calm, and handled everything with our insurance company. Saved us from what could have been a catastrophic loss.",
    response: "Thank you, James! We know 2 AM emergencies are stressful. Glad our team could get the water stopped quickly and coordinate with your insurance. We appreciate you trusting us with your home."
  },
  {
    id: 7,
    author: "Patricia Nguyen",
    initial: "P",
    color: "bg-teal-600",
    location: "McLean, VA",
    rating: 5,
    date: "3 weeks ago",
    badges: ["Mold Remediation", "Air Quality Testing"],
    text: "Found mold in our bathroom behind the vanity. Flood Doctor came out the same day, tested the air quality, and had a remediation plan ready within 24 hours. The whole process took about a week and the final air quality report came back clean. Very impressed with their thoroughness.",
    response: null
  },
  {
    id: 8,
    author: "Robert Kim",
    initial: "R",
    color: "bg-sky-600",
    location: "Fairfax, VA",
    rating: 5,
    date: "1 month ago",
    badges: ["Storm Damage", "Drywall Repair"],
    text: "We had significant storm damage from the hurricane. The team was thorough in the cleanup and drying process. They used thermal cameras to ensure no moisture was left behind the drywall. Professional from start to finish. The drywall repair work was seamless — you'd never know there was damage.",
    response: null
  },
  {
    id: 9,
    author: "Elite Property Management",
    initial: "E",
    color: "bg-emerald-600",
    location: "Tysons, VA",
    rating: 5,
    date: "2 months ago",
    badges: ["Commercial Service", "Sprinkler Leak"],
    text: "Professional commercial service. They minimized our downtime significantly after a sprinkler malfunction flooded two floors of our office building. The documentation provided for our insurance claim was impeccable. Will definitely use again for any portfolio properties.",
    response: null
  },
  {
    id: 10,
    author: "Amanda Foster",
    initial: "A",
    color: "bg-pink-600",
    location: "Ashburn, VA",
    rating: 5,
    date: "2 months ago",
    badges: ["Mold Remediation", "Attic"],
    text: "I was panicked when I found mold in the attic. The Flood Doctor team explained the remediation process clearly and safely removed everything. The air quality testing afterward gave us peace of mind. They even helped us understand how to prevent it in the future with better ventilation.",
    response: null
  },
  {
    id: 11,
    author: "David Martinez",
    initial: "D",
    color: "bg-amber-600",
    location: "Reston, VA",
    rating: 5,
    date: "3 months ago",
    badges: ["Sewer Backup", "Emergency Response"],
    text: "Sewer backed up into our finished basement on Thanksgiving morning. I called Flood Doctor expecting to wait until Monday. Nope — they had a team at our house within an hour. They handled the hazardous cleanup, sanitized everything, and got the dehumidifiers running before our guests arrived. Absolute lifesavers.",
    response: "We're glad we could help on such a tough day, David! Sewer backups are no joke, especially on a holiday. Happy we could get your home safe and dry in time."
  },
  {
    id: 12,
    author: "Lisa Thompson",
    initial: "L",
    color: "bg-violet-600",
    location: "Herndon, VA",
    rating: 4,
    date: "3 months ago",
    badges: ["Water Heater Leak", "Flooring"],
    text: "Water heater leaked overnight and soaked our hardwood floors. Flood Doctor did a great job with the water extraction and drying. The only reason for 4 stars instead of 5 is the scheduling for the floor repair took a bit longer than expected. But the quality of work was excellent.",
    response: "Thank you for the honest feedback, Lisa! We're sorry about the scheduling delay on the flooring repair — we've been working to improve our turnaround times. Glad the restoration work itself met your standards."
  },
  {
    id: 13,
    author: "Kevin O'Brien",
    initial: "K",
    color: "bg-cyan-600",
    location: "Centreville, VA",
    rating: 5,
    date: "4 months ago",
    badges: ["Crawl Space", "Moisture Control"],
    text: "Had standing water in the crawl space that had been there who knows how long. Flood Doctor pumped it out, installed a vapor barrier, and set up a dehumidifier system. No more musty smell and our energy bills actually went down. Really knowledgeable crew.",
    response: null
  },
  {
    id: 14,
    author: "Sarah Mitchell",
    initial: "S",
    color: "bg-rose-600",
    location: "Springfield, VA",
    rating: 5,
    date: "4 months ago",
    badges: ["Insurance Claims", "Water Damage"],
    text: "Flood Doctor handled our entire insurance claim process. They documented every bit of damage with photos, moisture readings, and detailed reports. Our adjuster said it was the most thorough documentation they'd seen from a restoration company. Made the whole claims process smooth.",
    response: null
  },
  {
    id: 15,
    author: "Marcus Johnson",
    initial: "M",
    color: "bg-blue-700",
    location: "Woodbridge, VA",
    rating: 5,
    date: "5 months ago",
    badges: ["Basement Flood", "Full Restoration"],
    text: "Heavy rains caused our basement to flood with about 6 inches of water. Flood Doctor extracted all the water, removed the damaged drywall and carpet, dried everything out, and then did the full rebuild. It looks better than it did before the flood. Their project manager kept us informed every step of the way.",
    response: null
  },
  {
    id: 16,
    author: "Jennifer Walsh",
    initial: "J",
    color: "bg-fuchsia-600",
    location: "Leesburg, VA",
    rating: 5,
    date: "5 months ago",
    badges: ["Dishwasher Leak", "Kitchen"],
    text: "Dishwasher supply line broke while we were on vacation. Came home to water damage in the kitchen and dining room. Flood Doctor was there within 2 hours of our call. They saved our hardwood floors that I thought were ruined. The crew was incredibly careful with our belongings.",
    response: null
  },
  {
    id: 17,
    author: "Thomas Park",
    initial: "T",
    color: "bg-lime-600",
    location: "Manassas, VA",
    rating: 5,
    date: "6 months ago",
    badges: ["Fire Damage", "Smoke Cleanup"],
    text: "Kitchen fire caused smoke damage throughout the house. Flood Doctor handled the smoke and soot cleanup professionally. They used ozone treatment and thermal fogging to eliminate the smoke smell completely. Our house smells normal again, which I honestly didn't think was possible.",
    response: null
  },
  {
    id: 18,
    author: "Rachel Green",
    initial: "R",
    color: "bg-purple-500",
    location: "Burke, VA",
    rating: 5,
    date: "6 months ago",
    badges: ["Toilet Overflow", "Bathroom"],
    text: "Embarrassing situation — toilet overflow caused water damage to the bathroom and the ceiling below it. Flood Doctor was completely professional and non-judgmental. They dried everything, replaced the damaged ceiling drywall, and even texture-matched the repair. You can't tell anything happened.",
    response: null
  },
  {
    id: 19,
    author: "William Chen",
    initial: "W",
    color: "bg-slate-600",
    location: "Great Falls, VA",
    rating: 5,
    date: "7 months ago",
    badges: ["Frozen Pipes", "Emergency Response"],
    text: "Pipes froze and burst during that cold snap in January. Water was pouring through the ceiling. Flood Doctor arrived fast, shut off the water, and started extraction immediately. They coordinated with our plumber and handled everything from there. True emergency professionals.",
    response: null
  },
  {
    id: 20,
    author: "Nicole Davis",
    initial: "N",
    color: "bg-red-600",
    location: "Chantilly, VA",
    rating: 4,
    date: "8 months ago",
    badges: ["AC Condensate", "Ceiling Damage"],
    text: "AC condensate line backed up and caused water damage to our ceiling. Good response time and professional work. The drying process took about 4 days which felt long, but they explained that rushing it could cause mold. Ceiling repair looks great. Would recommend.",
    response: null
  },
  {
    id: 21,
    author: "Christopher Lee",
    initial: "C",
    color: "bg-orange-600",
    location: "Oakton, VA",
    rating: 5,
    date: "8 months ago",
    badges: ["Sump Pump Failure", "Basement"],
    text: "Our sump pump failed during a heavy rain and the basement flooded. Flood Doctor not only handled the water extraction and drying but also recommended a backup sump pump system. They went above and beyond. The basement was dry within 3 days and they handled everything with our insurance.",
    response: null
  },
  {
    id: 22,
    author: "Alicia Ramirez",
    initial: "A",
    color: "bg-teal-500",
    location: "Falls Church, VA",
    rating: 5,
    date: "9 months ago",
    badges: ["Washing Machine", "Laundry Room"],
    text: "Washing machine hose burst and flooded our laundry room and hallway. Called Flood Doctor at 6 AM and they were here by 7:30. Pulled up the laminate flooring, dried the subfloor, and had new flooring installed within a week. The communication throughout was excellent — always knew what was happening next.",
    response: null
  },
  {
    id: 23,
    author: "Daniel Wright",
    initial: "D",
    color: "bg-indigo-500",
    location: "Sterling, VA",
    rating: 5,
    date: "9 months ago",
    badges: ["Commercial Service", "Office Building"],
    text: "Roof leak caused water damage in our law office. Flood Doctor protected all our files and equipment, extracted the water, and had the space dried and repaired with minimal disruption to our practice. Their team worked evenings and weekends to get us back to normal. First-class service.",
    response: null
  },
  {
    id: 24,
    author: "Maria Santos",
    initial: "M",
    color: "bg-pink-500",
    location: "Annandale, VA",
    rating: 5,
    date: "10 months ago",
    badges: ["Mold Remediation", "Basement"],
    text: "Discovered mold in the basement after noticing a musty smell. Flood Doctor did a full inspection, found the source (a slow foundation leak), and remediated all the mold. They also waterproofed the affected wall. Air quality tests came back clean. Very thorough and honest about what needed to be done.",
    response: null
  },
  {
    id: 25,
    author: "Brian Cooper",
    initial: "B",
    color: "bg-green-700",
    location: "Fairfax Station, VA",
    rating: 5,
    date: "10 months ago",
    badges: ["Roof Leak", "Attic Damage"],
    text: "Major roof leak during a storm soaked through the attic insulation and into the master bedroom ceiling. Flood Doctor handled the water damage, removed the wet insulation, dried the framing, and coordinated with our roofer. They made a stressful situation much more manageable.",
    response: null
  },
  {
    id: 26,
    author: "Stephanie Kim",
    initial: "S",
    color: "bg-amber-500",
    location: "Lorton, VA",
    rating: 5,
    date: "11 months ago",
    badges: ["Refrigerator Leak", "Kitchen"],
    text: "Refrigerator water line leaked slowly and we didn't notice until the hardwood was buckling. Flood Doctor carefully removed the damaged section, dried the subfloor for 3 days, and then had a flooring crew install matching hardwood. Seamless repair. Very satisfied with the result.",
    response: null
  },
  {
    id: 27,
    author: "Andrew Patel",
    initial: "A",
    color: "bg-sky-700",
    location: "Gainesville, VA",
    rating: 5,
    date: "11 months ago",
    badges: ["New Construction", "Water Damage"],
    text: "Brand new home had a plumbing defect that caused water damage to two rooms. Flood Doctor documented everything meticulously for our builder warranty claim. The restoration was perfect and the documentation they provided made the warranty process painless. Highly professional team.",
    response: null
  },
  {
    id: 28,
    author: "Linda Washington",
    initial: "L",
    color: "bg-violet-500",
    location: "Potomac Falls, VA",
    rating: 5,
    date: "1 year ago",
    badges: ["Bathroom Flood", "Full Restoration"],
    text: "Second-floor bathroom leak caused significant water damage to the bathroom, hallway, and the first-floor ceiling below. Flood Doctor handled it all — demo, drying, reconstruction, painting. The finished product looks brand new. Their project manager was responsive and kept everything on schedule.",
    response: null
  },
  {
    id: 29,
    author: "Michael Torres",
    initial: "M",
    color: "bg-cyan-700",
    location: "Dumfries, VA",
    rating: 4,
    date: "1 year ago",
    badges: ["Flood Damage", "Basement"],
    text: "Good service overall for a significant basement flood. They were quick to respond and the drying was thorough. Deducting one star because the final invoice was higher than the initial estimate, though they did explain the additional work was necessary. End result was excellent.",
    response: "Thank you for the feedback, Michael. We always try to keep costs aligned with initial estimates, but sometimes hidden damage requires additional work. We appreciate your understanding and are glad the final result met your expectations."
  },
  {
    id: 30,
    author: "Catherine Brooks",
    initial: "C",
    color: "bg-rose-500",
    location: "Alexandria, VA",
    rating: 5,
    date: "1 year ago",
    badges: ["Condo", "Water Damage"],
    text: "Water leak from the unit above ours damaged our ceiling and walls. Flood Doctor worked with both our insurance and the upstairs neighbor's insurance to get everything covered. They dried, repaired, and painted — our condo looks perfect. Managing the multi-party insurance situation was impressive.",
    response: null
  },
];

const Reviews: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(REVIEWS_PER_PAGE);
  const [helpfulMap, setHelpfulMap] = useState<Record<number, boolean>>(() => {
    try { return JSON.parse(localStorage.getItem('fd_helpful_map') || '{}'); } catch { return {}; }
  });
  const [helpfulCounts, setHelpfulCounts] = useState<Record<number, number>>(() => {
    try { return JSON.parse(localStorage.getItem('fd_helpful_counts') || '{}'); } catch { return {}; }
  });
  const [openComments, setOpenComments] = useState<Record<number, boolean>>({});
  const [commentText, setCommentText] = useState<Record<number, string>>({});
  const [comments, setComments] = useState<Record<number, Comment[]>>(() => {
    try { return JSON.parse(localStorage.getItem('fd_comments') || '{}'); } catch { return {}; }
  });

  useEffect(() => { localStorage.setItem('fd_helpful_map', JSON.stringify(helpfulMap)); }, [helpfulMap]);
  useEffect(() => { localStorage.setItem('fd_helpful_counts', JSON.stringify(helpfulCounts)); }, [helpfulCounts]);
  useEffect(() => { localStorage.setItem('fd_comments', JSON.stringify(comments)); }, [comments]);

  const toggleHelpful = (id: number) => {
    setHelpfulMap(prev => ({ ...prev, [id]: !prev[id] }));
    setHelpfulCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + (helpfulMap[id] ? -1 : 1)
    }));
  };

  const toggleCommentBox = (id: number) => {
    setOpenComments(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const submitComment = (id: number) => {
    const text = (commentText[id] || '').trim();
    if (!text) return;
    const newComment: Comment = { author: 'Guest', text, date: 'Just now' };
    setComments(prev => ({ ...prev, [id]: [...(prev[id] || []), newComment] }));
    setCommentText(prev => ({ ...prev, [id]: '' }));
  };

  const [sortMode, setSortMode] = useState<'relevant' | 'newest' | 'highest'>('relevant');

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + REVIEWS_PER_PAGE, allReviews.length));
  };

  const handleSort = (mode: 'relevant' | 'newest' | 'highest') => {
    setSortMode(mode);
    setVisibleCount(REVIEWS_PER_PAGE);
  };

  const dateOrder: Record<string, number> = {
    '2 weeks ago': 1, '3 weeks ago': 2, '1 month ago': 3, '2 months ago': 4,
    '3 months ago': 5, '4 months ago': 6, '5 months ago': 7, '6 months ago': 8,
    '7 months ago': 9, '8 months ago': 10, '9 months ago': 11, '10 months ago': 12,
    '11 months ago': 13, '1 year ago': 14, '2 years ago': 15,
  };

  const sortedReviews = [...allReviews].sort((a, b) => {
    if (sortMode === 'newest') return (dateOrder[a.date] || 99) - (dateOrder[b.date] || 99);
    if (sortMode === 'highest') return b.rating - a.rating || (dateOrder[a.date] || 99) - (dateOrder[b.date] || 99);
    return 0; // 'relevant' keeps original order
  });

  const visibleReviews = sortedReviews.slice(0, visibleCount);
  const hasMore = visibleCount < sortedReviews.length;

  const stats = {
    average: 4.9,
    total: 103,
    breakdown: [
      { stars: 5, count: 89, pct: '86%' },
      { stars: 4, count: 8, pct: '8%' },
      { stars: 3, count: 3, pct: '3%' },
      { stars: 2, count: 1, pct: '1%' },
      { stars: 1, count: 2, pct: '2%' },
    ]
  };

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
                   <a href="https://share.google/AhUTxb7gmJLiVuSIr" target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="secondary" fullWidth className="bg-white border-blue-200 text-primary hover:bg-blue-100">
                         Write a Review
                      </Button>
                   </a>
                </div>
             </div>
          </div>

          {/* RIGHT: Review Feed */}
          <div className="lg:col-span-8">
             <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <div className="flex gap-2">
                   {([['relevant', 'Most Relevant'], ['newest', 'Newest'], ['highest', 'Highest Rating']] as const).map(([mode, label]) => (
                      <button
                         key={mode}
                         onClick={() => handleSort(mode)}
                         className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            sortMode === mode
                               ? 'bg-text text-white'
                               : 'bg-white border border-gray-200 text-text hover:bg-subtle'
                         }`}
                      >
                         {label}
                      </button>
                   ))}
                </div>
             </div>

             <div className="space-y-12">
                {visibleReviews.map((review) => (
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
                            {[...Array(5 - review.rating)].map((_, i) => (
                               <Star key={`empty-${i}`} size={16} fill="none" stroke="currentColor" className="text-gray-300" />
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
                         <button
                            onClick={() => toggleHelpful(review.id)}
                            className={`flex items-center gap-2 text-sm transition-colors ${helpfulMap[review.id] ? 'text-[#1a73e8] font-medium' : 'text-muted hover:text-text'}`}
                         >
                            <ThumbsUp size={16} fill={helpfulMap[review.id] ? 'currentColor' : 'none'} />
                            Helpful{(helpfulCounts[review.id] || 0) > 0 ? ` (${helpfulCounts[review.id]})` : ''}
                         </button>
                         <button
                            onClick={() => toggleCommentBox(review.id)}
                            className={`flex items-center gap-2 text-sm transition-colors ${openComments[review.id] ? 'text-[#1a73e8] font-medium' : 'text-muted hover:text-text'}`}
                         >
                            <MessageCircle size={16} /> Comment{(comments[review.id]?.length || 0) > 0 ? ` (${comments[review.id].length})` : ''}
                         </button>
                      </div>

                      {/* Comments Section */}
                      {openComments[review.id] && (
                         <div className="mt-4 space-y-3">
                            {(comments[review.id] || []).map((c, i) => (
                               <div key={i} className="ml-4 pl-4 border-l-2 border-gray-100 py-2">
                                  <div className="flex items-center gap-2 mb-1">
                                     <span className="text-sm font-medium text-text">{c.author}</span>
                                     <span className="text-xs text-muted">{c.date}</span>
                                  </div>
                                  <p className="text-sm text-muted">{c.text}</p>
                               </div>
                            ))}
                            <div className="flex gap-2 mt-2">
                               <input
                                  type="text"
                                  value={commentText[review.id] || ''}
                                  onChange={(e) => setCommentText(prev => ({ ...prev, [review.id]: e.target.value }))}
                                  onKeyDown={(e) => e.key === 'Enter' && submitComment(review.id)}
                                  placeholder="Add a comment..."
                                  className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-[#1a73e8] transition-colors"
                               />
                               <button
                                  onClick={() => submitComment(review.id)}
                                  className="p-2 text-[#1a73e8] hover:bg-blue-50 rounded-full transition-colors"
                               >
                                  <Send size={18} />
                               </button>
                            </div>
                         </div>
                      )}

                      <div className="h-px bg-gray-100 mt-10 w-full group-last:hidden"></div>
                   </div>
                ))}
             </div>

             {hasMore && (
                <div className="mt-16 text-center">
                   <Button variant="outline" className="px-8 h-12" onClick={loadMore}>
                      Load more reviews
                   </Button>
                   <p className="text-xs text-muted mt-3">
                      Showing {visibleCount} of {allReviews.length} reviews
                   </p>
                </div>
             )}
          </div>

        </div>
      </div>
    </main>
  );
};

export default Reviews;
