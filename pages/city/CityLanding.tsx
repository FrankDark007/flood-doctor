import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  Phone,
  Clock,
  Shield,
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  Droplets,
  Home,
  AlertTriangle,
  Building2,
  Award,
  Users,
  Zap
} from 'lucide-react';
import PageMeta from '../../components/ui/PageMeta';
import { CityConfig } from '../../config/cities';

// Google-style easing curve
const googleEase = [0.22, 1, 0.36, 1];

// Animated Section Wrapper
const AnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: googleEase, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Animated Stat Card
const AnimatedStatCard: React.FC<{
  value: string;
  label: string;
  index: number;
}> = ({ value, label, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.5, ease: googleEase, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="text-center"
    >
      <motion.div
        className="text-4xl font-bold text-[#1a73e8]"
        initial={{ scale: 0.8 }}
        animate={isInView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
      >
        {value}
      </motion.div>
      <div className="text-gray-600 text-sm mt-1">{label}</div>
    </motion.div>
  );
};

// Animated Feature Card
const AnimatedFeatureCard: React.FC<{
  icon: React.ReactNode;
  iconBgColor: string;
  title: string;
  description: string;
  index: number;
}> = ({ icon, iconBgColor, title, description, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: googleEase, delay: index * 0.15 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
    >
      <motion.div
        className={`w-14 h-14 ${iconBgColor} rounded-xl flex items-center justify-center mb-6`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

// Animated Neighborhood Row
const AnimatedNeighborhoodRow: React.FC<{
  name: string;
  time: string;
  index: number;
  isEven: boolean;
}> = ({ name, time, index, isEven }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: googleEase, delay: index * 0.05 }}
      whileHover={{ backgroundColor: isEven ? '#f0f9ff' : '#e0f2fe', x: 4 }}
      className={`grid grid-cols-2 px-6 py-4 ${isEven ? 'bg-white' : 'bg-gray-50'}`}
    >
      <div className="text-gray-900">{name}</div>
      <div className="text-right text-[#1a73e8] font-medium">{time}</div>
    </motion.div>
  );
};

// Animated Challenge Item
const AnimatedChallengeItem: React.FC<{
  challenge: string;
  index: number;
}> = ({ challenge, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: googleEase, delay: index * 0.1 }}
      className="flex items-start gap-3"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2, type: 'spring', stiffness: 300 }}
      >
        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
      </motion.div>
      <span className="text-gray-700">{challenge}</span>
    </motion.li>
  );
};

// Animated Service Item
const AnimatedServiceItem: React.FC<{
  icon: React.ElementType;
  title: string;
  desc: string;
  index: number;
}> = ({ icon: Icon, title, desc, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: googleEase, delay: index * 0.1 }}
      whileHover={{ x: 4 }}
      className="flex items-start gap-4"
    >
      <motion.div
        className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"
        whileHover={{ scale: 1.1, backgroundColor: '#dbeafe' }}
      >
        <Icon className="w-5 h-5 text-[#1a73e8]" />
      </motion.div>
      <div>
        <div className="font-semibold text-gray-900">{title}</div>
        <div className="text-sm text-gray-600">{desc}</div>
      </div>
    </motion.li>
  );
};

// Animated Testimonial Card
const AnimatedTestimonialCard: React.FC<{
  quote: string;
  author: string;
  location: string;
  index: number;
}> = ({ quote, author, location, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.6, ease: googleEase, delay: index * 0.2 }}
      whileHover={{ y: -4 }}
      className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
          >
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          </motion.div>
        ))}
      </div>
      <blockquote className="text-gray-700 mb-4 italic">
        "{quote}"
      </blockquote>
      <div className="font-semibold text-gray-900">— {author}</div>
      <div className="text-sm text-gray-500">{location}</div>
    </motion.div>
  );
};

// Animated FAQ Item
const AnimatedFAQItem: React.FC<{
  question: string;
  answer: string;
  index: number;
}> = ({ question, answer, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: googleEase, delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
      className="bg-gray-50 rounded-xl p-6"
    >
      <h3 className="font-bold text-gray-900 mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </motion.div>
  );
};

interface CityLandingProps {
  city: CityConfig;
}

const CityLanding: React.FC<CityLandingProps> = ({ city }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Flood Doctor - ${city.name} Water Damage Restoration`,
    "image": "https://flood.doctor/logo.png",
    "telephone": "+1-877-497-0007",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8466D Tyco Rd",
      "addressLocality": "Vienna",
      "addressRegion": "VA",
      "postalCode": "22182",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.geo.lat,
      "longitude": city.geo.lng
    },
    "areaServed": {
      "@type": city.state === 'DC' ? 'City' : 'City',
      "name": city.name,
      "containedInPlace": {
        "@type": "State",
        "name": city.state === 'DC' ? 'District of Columbia' : 'Virginia'
      }
    },
    "url": `https://${city.subdomain}/`,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$"
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`Water Damage Restoration ${city.name} ${city.state} | ${city.responseTime} Response | Flood Doctor`}
        description={city.description}
        structuredData={structuredData}
      />

      {/* Hero Section - Animated */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

        {/* Floating background elements */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="max-w-3xl">
            <motion.div
              className="flex items-center gap-2 text-blue-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: googleEase }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2, type: 'spring', stiffness: 300 }}
              >
                <MapPin className="w-5 h-5" />
              </motion.div>
              <span className="text-sm font-medium uppercase tracking-wide">{city.name}, {city.state}</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: googleEase }}
            >
              {city.headline}
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: googleEase }}
            >
              {city.description}
            </motion.p>

            {/* CTA Buttons - Animated */}
            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: googleEase }}
            >
              <motion.a
                href="tel:8774970007"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-blue-600/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Phone className="w-6 h-6" />
                </motion.div>
                (877) 497-0007
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur px-8 py-4 rounded-full font-semibold text-lg transition-all border border-white/20"
                >
                  Request Service
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Badges - Staggered Animation */}
            <motion.div
              className="flex flex-wrap gap-4 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {[
                { icon: Zap, bgColor: 'bg-yellow-500/20', iconColor: 'text-yellow-400', text: `${city.responseTime} Response` },
                { icon: Shield, bgColor: 'bg-blue-500/20', iconColor: 'text-blue-400', text: 'IICRC Certified' },
                { icon: Star, bgColor: 'bg-yellow-500/20', iconColor: 'text-yellow-400', text: '4.9★ Rating' },
                { icon: Clock, bgColor: 'bg-green-500/20', iconColor: 'text-green-400', text: '24/7 Available' },
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${badge.bgColor} backdrop-blur-sm`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <badge.icon className={`w-4 h-4 ${badge.iconColor}`} />
                  <span className="text-white font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Animated */}
      <AnimatedSection className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: city.responseTime.split('-')[0], label: 'Minute Response' },
              { value: '24/7', label: 'Emergency Service' },
              { value: '15+', label: 'Years Experience' },
              { value: '100%', label: 'Satisfaction' },
            ].map((stat, idx) => (
              <AnimatedStatCard key={idx} value={stat.value} label={stat.label} index={idx} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us - Animated */}
      <AnimatedSection className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: googleEase }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why {city.name} Homeowners Choose Flood Doctor
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Local expertise, rapid response, and professional restoration you can trust.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedFeatureCard
              icon={<MapPin className="w-7 h-7 text-[#1a73e8]" />}
              iconBgColor="bg-blue-100"
              title={`Local to ${city.name}`}
              description={`Headquartered in Vienna, we're close to ${city.name} and know your neighborhoods. When you call, we're already nearby.`}
              index={0}
            />
            <AnimatedFeatureCard
              icon={<Zap className="w-7 h-7 text-green-600" />}
              iconBgColor="bg-green-100"
              title={`${city.responseTime} Response`}
              description={`${city.name}'s geography means we reach any address within ${city.responseTime}. Fast response prevents secondary damage.`}
              index={1}
            />
            <AnimatedFeatureCard
              icon={<Award className="w-7 h-7 text-purple-600" />}
              iconBgColor="bg-purple-100"
              title="Certified Experts"
              description="IICRC-certified technicians with 15+ years experience. We know water damage restoration inside and out."
              index={2}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Neighborhoods Table - Animated */}
      <AnimatedSection className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: googleEase }}
          >
            {city.name} Neighborhoods We Serve
          </motion.h2>

          <div className="max-w-2xl mx-auto">
            <motion.div
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: googleEase }}
            >
              <div className="grid grid-cols-2 bg-gray-100 px-6 py-4 font-semibold text-gray-900">
                <div>Neighborhood</div>
                <div className="text-right">Response Time</div>
              </div>
              {city.neighborhoods.map((hood, idx) => (
                <AnimatedNeighborhoodRow
                  key={idx}
                  name={hood.name}
                  time={hood.time}
                  index={idx}
                  isEven={idx % 2 === 0}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Local Challenges - Animated */}
      <AnimatedSection className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: googleEase }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Common Water Damage Causes in {city.name}
              </h2>
              <p className="text-gray-600 mb-8">
                We understand the unique water damage challenges {city.name} homeowners face.
                Our team is equipped to handle all types of water emergencies.
              </p>
              <ul className="space-y-4">
                {city.localChallenges.map((challenge, idx) => (
                  <AnimatedChallengeItem key={idx} challenge={challenge} index={idx} />
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: googleEase, delay: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our {city.name} Services</h3>
              <ul className="space-y-4">
                {[
                  { icon: Droplets, title: 'Emergency Water Extraction', desc: 'Industrial-grade pumps remove water fast' },
                  { icon: Home, title: 'Structural Drying', desc: 'Commercial dehumidifiers and air movers' },
                  { icon: AlertTriangle, title: 'Mold Prevention', desc: 'Antimicrobial treatments to prevent growth' },
                  { icon: Building2, title: 'Basement Flooding', desc: 'Specialized basement water damage restoration' },
                ].map((service, idx) => (
                  <AnimatedServiceItem
                    key={idx}
                    icon={service.icon}
                    title={service.title}
                    desc={service.desc}
                    index={idx}
                  />
                ))}
              </ul>
              <motion.div whileHover={{ x: 4 }} className="mt-6">
                <Link
                  to={`/city/${city.slug}/services`}
                  className="inline-flex items-center gap-2 text-[#1a73e8] font-semibold hover:gap-3 transition-all"
                >
                  View All {city.name} Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials - Animated */}
      {city.testimonials.length > 0 && (
        <AnimatedSection className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: googleEase }}
            >
              What {city.name} Customers Say
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {city.testimonials.map((testimonial, idx) => (
                <AnimatedTestimonialCard
                  key={idx}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  location={testimonial.location}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* CTA Section - Animated */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-[#1a73e8] to-blue-700 text-white relative overflow-hidden">
        {/* Floating background elements */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"
          animate={{ x: [-50, 50, -50], y: [-30, 30, -30] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"
          animate={{ x: [50, -50, 50], y: [30, -30, 30] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: googleEase }}
          >
            Water Damage in {city.name}? We're Ready 24/7.
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: googleEase }}
          >
            Don't wait—water damage spreads fast. Call now for immediate {city.responseTime} response.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 200 }}
          >
            <motion.a
              href="tel:8774970007"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#1a73e8] px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <Phone className="w-7 h-7" />
              </motion.div>
              (877) 497-0007
            </motion.a>
          </motion.div>
          <motion.p
            className="mt-6 text-blue-200 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            8466D Tyco Rd, Vienna, VA 22182 · DPOR License #2705155505 · IICRC Certified
          </motion.p>
        </div>
      </section>

      {/* FAQ Section - Animated */}
      <AnimatedSection className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: googleEase }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            <AnimatedFAQItem
              question={`How fast can you get to my ${city.name} home?`}
              answer={`We're headquartered on Tyco Road in Vienna. Response time to any ${city.name} address is ${city.responseTime}, 24/7.`}
              index={0}
            />
            <AnimatedFAQItem
              question={`Do you handle insurance claims for ${city.name} residents?`}
              answer="Yes. We work with all major insurers and provide the documentation adjusters expect. Most homeowners have coverage for sudden water damage."
              index={1}
            />
            <AnimatedFAQItem
              question={`Are you licensed in ${city.state === 'DC' ? 'DC' : 'Virginia'}?`}
              answer={`Yes. Flood Doctor holds Virginia DPOR License #2705155505 and is IICRC certified. We're fully licensed and insured for restoration work in ${city.name}.`}
              index={2}
            />
            <AnimatedFAQItem
              question={`What areas besides ${city.name} do you serve?`}
              answer="We serve all of Northern Virginia, Washington DC, and Maryland. From our Vienna headquarters, we reach most locations within 30-45 minutes."
              index={3}
            />
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
};

export default CityLanding;
