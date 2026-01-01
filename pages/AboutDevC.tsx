import React from 'react';
import {
  Phone,
  Award,
  Shield,
  Clock,
  Heart,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  Building2,
  Truck,
  Wrench,
  Target
} from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';
import Button from '../components/ui/Button';

/**
 * AboutDevC - Google Business Profile / Local Service Style
 *
 * Key patterns:
 * - Hero with map/location focus
 * - "Why Choose Us" comparison grid
 * - Local community emphasis
 * - Service area showcase
 * - Equipment/capability highlights
 * - Local reviews integration
 */

const AboutDevC: React.FC = () => {
  const differentiators = [
    {
      us: '60-minute guaranteed response',
      others: '2-4 hour average response',
      icon: Clock
    },
    {
      us: 'Direct insurance billing included',
      others: 'Bill customer, customer files claim',
      icon: Shield
    },
    {
      us: 'IICRC certified technicians',
      others: 'Basic training only',
      icon: Award
    },
    {
      us: 'Dedicated project manager',
      others: 'Different person each visit',
      icon: Users
    },
    {
      us: 'Commercial-grade equipment',
      others: 'Consumer-grade equipment',
      icon: Wrench
    },
    {
      us: 'Locally owned since 2008',
      others: 'National franchise',
      icon: Heart
    }
  ];

  const serviceAreas = [
    { name: 'Fairfax County', cities: ['Fairfax', 'Vienna', 'McLean', 'Falls Church', 'Reston', 'Herndon'] },
    { name: 'Arlington County', cities: ['Arlington', 'Clarendon', 'Ballston', 'Rosslyn', 'Crystal City'] },
    { name: 'Loudoun County', cities: ['Leesburg', 'Ashburn', 'Sterling', 'South Riding', 'Purcellville'] },
    { name: 'Prince William', cities: ['Manassas', 'Woodbridge', 'Dumfries', 'Gainesville', 'Bristow'] },
    { name: 'Alexandria', cities: ['Old Town', 'Del Ray', 'Eisenhower Valley', 'Potomac Yard'] },
    { name: 'Washington DC', cities: ['Northwest DC', 'Northeast DC', 'Capitol Hill', 'Georgetown'] }
  ];

  const capabilities = [
    { stat: '15', label: 'Response Vehicles', icon: Truck },
    { stat: '45+', label: 'Certified Technicians', icon: Users },
    { stat: '200+', label: 'Air Movers', icon: Wrench },
    { stat: '50+', label: 'Commercial Dehumidifiers', icon: Building2 }
  ];

  const reviews = [
    {
      text: 'Best restoration company in Northern Virginia. They saved our hardwood floors after a major pipe burst.',
      author: 'Patricia M.',
      location: 'McLean, VA',
      rating: 5
    },
    {
      text: 'Arrived at midnight during a storm. Professional, efficient, and friendly. Can\'t recommend enough.',
      author: 'Robert K.',
      location: 'Arlington, VA',
      rating: 5
    },
    {
      text: 'Handled everything with our insurance. We didn\'t have to lift a finger. True professionals.',
      author: 'Amanda S.',
      location: 'Fairfax, VA',
      rating: 5
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="About Flood Doctor | Northern Virginia's Local Water Damage Experts"
        description="Locally owned since 2008, Flood Doctor is Northern Virginia's most trusted water damage restoration company with 60-minute response times."
      />

      {/* Hero - Local Focus */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                <MapPin size={16} />
                Locally Owned Since 2008
              </div>

              <h1 className="font-display text-4xl lg:text-5xl font-semibold text-text mb-6 leading-tight">
                Your neighbors in water damage restoration
              </h1>

              <p className="text-xl text-muted leading-relaxed mb-8">
                We're not a national franchise—we're a local company founded by Northern Virginia homeowners, for Northern Virginia homeowners. When you call, you get us.
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-muted">
                  <span className="font-semibold text-text">4.9</span> from 500+ reviews
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/request/" variant="primary" size="lg">
                  Get Free Estimate
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button href="tel:8774970007" variant="outline" size="lg">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>
              </div>
            </div>

            {/* Map/Location Visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 to-slate-100 shadow-xl overflow-hidden">
                {/* Map placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin size={64} className="text-primary/30" />
                </div>
              </div>
              {/* Location badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building2 className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-text">Fairfax HQ</div>
                    <div className="text-sm text-muted">Serving all of NoVA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Comparison */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
              Why choose Flood Doctor?
            </h2>
            <p className="text-lg text-muted">
              See how we compare to other restoration companies.
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-slate-100">
              <div className="p-4 lg:p-6" />
              <div className="p-4 lg:p-6 text-center bg-primary text-white font-semibold">
                Flood Doctor
              </div>
              <div className="p-4 lg:p-6 text-center text-muted font-medium">
                Other Companies
              </div>
            </div>

            {/* Rows */}
            {differentiators.map((item, idx) => (
              <div key={idx} className={`grid grid-cols-3 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                <div className="p-4 lg:p-6 flex items-center gap-3">
                  <item.icon className="text-primary" size={20} />
                  <span className="text-sm text-muted hidden sm:inline">Comparison</span>
                </div>
                <div className="p-4 lg:p-6 flex items-center justify-center gap-2 bg-primary/5 border-x border-primary/10">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={18} />
                  <span className="text-sm text-text font-medium">{item.us}</span>
                </div>
                <div className="p-4 lg:p-6 flex items-center justify-center">
                  <span className="text-sm text-muted">{item.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-4">
              Ready to respond, 24/7
            </h2>
            <p className="text-lg text-white/60">
              Our fleet and team are always prepared for your emergency.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
                <cap.icon className="mx-auto mb-4 text-primary" size={32} />
                <div className="font-display text-4xl font-bold text-white mb-1">{cap.stat}</div>
                <div className="text-sm text-white/60">{cap.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <MapPin size={16} />
              Service Area
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
              60-minute response throughout Northern Virginia
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-text mb-3 flex items-center gap-2">
                  <MapPin size={18} className="text-primary" />
                  {area.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {area.cities.map((city, i) => (
                    <span key={i} className="text-sm text-muted bg-white px-3 py-1 rounded-full">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button to="/locations/" variant="outline">
              View All Locations
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Local Reviews */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl font-semibold text-text mb-2">
                What your neighbors say
              </h2>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-muted">4.9 average from 500+ reviews</span>
              </div>
            </div>
            <Button to="/reviews/" variant="outline" className="hidden sm:flex">
              View All Reviews
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-text leading-relaxed mb-4">"{review.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gray-100" />
                  <div>
                    <div className="font-medium text-text text-sm">{review.author}</div>
                    <div className="text-xs text-muted">{review.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Target className="mx-auto text-primary mb-6" size={48} />
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted leading-relaxed mb-8">
            To be the restoration company we'd want to call if it were our home. That means arriving fast, communicating clearly, doing excellent work, and treating every customer like a neighbor—because they are.
          </p>
          <div className="inline-flex items-center gap-3 text-sm text-muted">
            <Heart className="text-primary" size={18} />
            Locally owned and operated since 2008
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-6">
            Ready for your local restoration experts?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Get a free estimate from Northern Virginia's most trusted restoration company.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/request/" variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
              Get Free Estimate
            </Button>
            <Button href="tel:8774970007" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Phone size={18} className="mr-2" />
              (877) 497-0007
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutDevC;
