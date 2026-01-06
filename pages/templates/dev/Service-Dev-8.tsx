/**
 * Service-Dev-8.tsx - Media-Rich Layout
 *
 * A visually-driven layout with video embeds, image galleries, before/after
 * sliders, and interactive media elements. Perfect for showcasing work
 * and building visual trust.
 *
 * Capacity: 2000+ words
 * Best for: Portfolio showcase, visual demonstrations, video content
 */

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Phone, Clock, Shield, Star, CheckCircle, Play, Pause,
  ArrowRight, ChevronLeft, ChevronRight, Image as ImageIcon,
  Video, Camera, Maximize2, X, ZoomIn, Award, Users,
  Droplets, ThermometerSun, Volume2, VolumeX
} from 'lucide-react';

// Google-style easing
const smoothEase = [0.22, 1, 0.36, 1];

// Before/After Slider Component
const BeforeAfterSlider: React.FC<{
  beforeImage: string;
  afterImage: string;
  title: string;
  description?: string;
}> = ({ beforeImage, afterImage, title, description }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const position = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        className="relative h-80 lg:h-96 rounded-2xl overflow-hidden cursor-ew-resize select-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Full) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${afterImage})` }}
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${beforeImage})`,
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        />

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <ChevronLeft size={16} className="text-gray-600 -mr-1" />
            <ChevronRight size={16} className="text-gray-600 -ml-1" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 rounded-full text-white text-sm font-medium">
          Before
        </div>
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 rounded-full text-white text-sm font-medium">
          After
        </div>
      </div>
      {title && (
        <div className="text-center">
          <h4 className="font-semibold text-gray-900">{title}</h4>
          {description && <p className="text-sm text-gray-600">{description}</p>}
        </div>
      )}
    </div>
  );
};

// Video Player Component
const VideoPlayer: React.FC<{
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  duration?: string;
}> = ({ videoUrl, thumbnailUrl, title, duration }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-video"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: smoothEase }}
    >
      {!isPlaying ? (
        <>
          {/* Thumbnail */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
          />
          <div className="absolute inset-0 bg-black/30" />

          {/* Play Button */}
          <motion.button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPlaying(true)}
          >
            <Play size={32} className="text-[#1a73e8] ml-1" fill="#1a73e8" />
          </motion.button>

          {/* Duration Badge */}
          {duration && (
            <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 rounded text-white text-sm">
              {duration}
            </div>
          )}

          {/* Title */}
          <div className="absolute bottom-4 left-4 right-16">
            <h4 className="text-white font-semibold truncate">{title}</h4>
          </div>
        </>
      ) : (
        <>
          {/* Video (placeholder - would be actual video embed) */}
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
            <div className="text-center text-white">
              <Video size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-sm opacity-70">Video would play here</p>
              <p className="text-xs opacity-50 mt-1">{videoUrl}</p>
            </div>
          </div>

          {/* Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(false)}
                className="text-white hover:text-gray-200"
              >
                <Pause size={24} />
              </button>
              <div className="flex-1 h-1 bg-white/30 rounded-full">
                <div className="w-1/3 h-full bg-white rounded-full" />
              </div>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-white hover:text-gray-200"
              >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

// Image Gallery Component
const ImageGallery: React.FC<{
  images: { url: string; caption: string }[];
  title: string;
}> = ({ images, title }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <>
      <motion.div
        ref={ref}
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: smoothEase }}
      >
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, idx) => (
            <motion.button
              key={idx}
              className="relative aspect-square rounded-xl overflow-hidden group"
              onClick={() => setSelectedIndex(idx)}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${image.url})` }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 p-2"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
              }}
            >
              <ChevronLeft size={48} />
            </button>

            <motion.div
              className="max-w-4xl max-h-[80vh] relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedIndex].url}
                alt={images[selectedIndex].caption}
                className="max-w-full max-h-[80vh] rounded-lg"
              />
              <p className="text-white text-center mt-4">{images[selectedIndex].caption}</p>
            </motion.div>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 p-2"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
              }}
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Featured Project Card
const FeaturedProjectCard: React.FC<{
  title: string;
  location: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  stats: { label: string; value: string }[];
  reversed?: boolean;
}> = ({ title, location, description, beforeImage, afterImage, stats, reversed = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-8 items-center ${reversed ? 'lg:grid-flow-dense' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: smoothEase }}
    >
      <div className={reversed ? 'lg:col-start-2' : ''}>
        <BeforeAfterSlider
          beforeImage={beforeImage}
          afterImage={afterImage}
          title=""
        />
      </div>

      <div className={reversed ? 'lg:col-start-1' : ''}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f0fe] text-[#1a73e8] text-sm font-medium mb-4">
          <Camera size={14} />
          {location}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-4">
              <div className="text-2xl font-bold text-[#1a73e8]">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Media Grid Item
const MediaGridItem: React.FC<{
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
  size?: 'normal' | 'large';
}> = ({ type, url, thumbnail, title, size = 'normal' }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.button
        className={`relative rounded-xl overflow-hidden group ${
          size === 'large' ? 'col-span-2 row-span-2' : ''
        }`}
        style={{ aspectRatio: size === 'large' ? '1' : '1' }}
        onClick={() => setShowModal(true)}
        whileHover={{ scale: 1.02 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${thumbnail || url})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Type Icon */}
        <div className="absolute top-3 right-3 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
          {type === 'video' ? (
            <Play size={16} className="text-white ml-0.5" fill="white" />
          ) : (
            <ImageIcon size={16} className="text-white" />
          )}
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white text-sm font-medium truncate">{title}</p>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#1a73e8]/0 group-hover:bg-[#1a73e8]/20 transition-colors flex items-center justify-center">
          <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
        </div>
      </motion.button>

      {/* Modal would go here */}
    </>
  );
};

// Main Component
const ServiceDev8: React.FC = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  // Sample data
  const galleryImages = [
    { url: '/images/gallery/project1.jpg', caption: 'Basement flood restoration - McLean, VA' },
    { url: '/images/gallery/project2.jpg', caption: 'Commercial water damage - Tysons Corner' },
    { url: '/images/gallery/project3.jpg', caption: 'Kitchen leak repair - Great Falls' },
    { url: '/images/gallery/project4.jpg', caption: 'Storm damage restoration - Vienna' },
    { url: '/images/gallery/project5.jpg', caption: 'Bathroom flood cleanup - Fairfax' },
    { url: '/images/gallery/project6.jpg', caption: 'Burst pipe emergency - Arlington' },
    { url: '/images/gallery/project7.jpg', caption: 'Mold remediation - Falls Church' },
    { url: '/images/gallery/project8.jpg', caption: 'Complete restoration - Reston' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: smoothEase }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-blue-300 text-sm font-medium mb-6">
                <Camera size={16} />
                See Our Work
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Water Damage Restoration
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Results You Can See
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Browse our portfolio of completed restoration projects. See real before
                and after transformations from homes and businesses throughout Northern Virginia.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Clock, text: '20-30 Min Response', bg: 'bg-yellow-500/20', color: 'text-yellow-400' },
                  { icon: Shield, text: 'IICRC Certified', bg: 'bg-blue-500/20', color: 'text-blue-400' },
                  { icon: Star, text: '4.9★ Rating', bg: 'bg-yellow-500/20', color: 'text-yellow-400' },
                ].map((badge, idx) => (
                  <motion.div
                    key={idx}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full ${badge.bg} backdrop-blur-sm`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                  >
                    <badge.icon className={`w-4 h-4 ${badge.color}`} />
                    <span className="text-white font-medium text-sm">{badge.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hero Media */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
            >
              <VideoPlayer
                videoUrl="https://example.com/video.mp4"
                thumbnailUrl="/images/video-thumbnail.jpg"
                title="See How We Restore Water Damage"
                duration="3:24"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Restoration Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every water damage situation is unique. Explore our recent projects
              to see how we handle different types of restoration challenges.
            </p>
          </div>

          <div className="space-y-20">
            <FeaturedProjectCard
              title="Severe Basement Flooding"
              location="McLean, VA"
              description="A broken sump pump during a heavy storm left this finished basement under 8 inches of water. Our team arrived within 25 minutes and extracted over 1,000 gallons of water. Complete restoration was achieved in 5 days with no mold growth detected."
              beforeImage="/images/projects/basement-before.jpg"
              afterImage="/images/projects/basement-after.jpg"
              stats={[
                { label: 'Response Time', value: '25 min' },
                { label: 'Water Extracted', value: '1,000 gal' },
                { label: 'Drying Time', value: '4 days' },
                { label: 'Area Restored', value: '800 sq ft' },
              ]}
            />

            <FeaturedProjectCard
              title="Commercial Office Water Damage"
              location="Tysons Corner, VA"
              description="An overnight pipe burst flooded three floors of this office building. We mobilized a team of 12 technicians and worked around the clock to minimize business disruption. All floors were dried and ready for business within one week."
              beforeImage="/images/projects/office-before.jpg"
              afterImage="/images/projects/office-after.jpg"
              stats={[
                { label: 'Floors Affected', value: '3' },
                { label: 'Team Size', value: '12' },
                { label: 'Completion Time', value: '7 days' },
                { label: 'Area Restored', value: '15,000 sq ft' },
              ]}
              reversed
            />

            <FeaturedProjectCard
              title="Kitchen Appliance Leak"
              location="Great Falls, VA"
              description="A slow dishwasher leak went unnoticed for weeks, causing hidden water damage to cabinets and subfloor. Using thermal imaging, we identified the full extent of damage and restored everything including custom cabinetry."
              beforeImage="/images/projects/kitchen-before.jpg"
              afterImage="/images/projects/kitchen-after.jpg"
              stats={[
                { label: 'Hidden Damage Found', value: 'Yes' },
                { label: 'Cabinets Saved', value: '80%' },
                { label: 'Restoration Time', value: '6 days' },
                { label: 'Mold Prevented', value: '100%' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Watch Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See exactly how our certified technicians handle water damage restoration
              from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <VideoPlayer
              videoUrl="https://example.com/extraction.mp4"
              thumbnailUrl="/images/videos/extraction-thumb.jpg"
              title="Water Extraction Process"
              duration="4:12"
            />
            <VideoPlayer
              videoUrl="https://example.com/drying.mp4"
              thumbnailUrl="/images/videos/drying-thumb.jpg"
              title="Structural Drying Explained"
              duration="5:45"
            />
            <VideoPlayer
              videoUrl="https://example.com/equipment.mp4"
              thumbnailUrl="/images/videos/equipment-thumb.jpg"
              title="Our Professional Equipment"
              duration="3:30"
            />
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Before & After Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Drag the slider to see the transformation. These are real restoration
              projects from homes in your community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <BeforeAfterSlider
              beforeImage="/images/ba/bathroom-before.jpg"
              afterImage="/images/ba/bathroom-after.jpg"
              title="Bathroom Flood"
              description="Vienna, VA - Toilet overflow"
            />
            <BeforeAfterSlider
              beforeImage="/images/ba/hardwood-before.jpg"
              afterImage="/images/ba/hardwood-after.jpg"
              title="Hardwood Floor Restoration"
              description="Arlington, VA - Appliance leak"
            />
            <BeforeAfterSlider
              beforeImage="/images/ba/ceiling-before.jpg"
              afterImage="/images/ba/ceiling-after.jpg"
              title="Ceiling Water Damage"
              description="Fairfax, VA - Roof leak"
            />
            <BeforeAfterSlider
              beforeImage="/images/ba/commercial-before.jpg"
              afterImage="/images/ba/commercial-after.jpg"
              title="Commercial Space"
              description="Reston, VA - Sprinkler malfunction"
            />
          </div>
        </div>
      </section>

      {/* Full Image Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ImageGallery images={galleryImages} title="Project Gallery" />
        </div>
      </section>

      {/* Process Overview with Images */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Restoration Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From the moment you call to the final inspection, here's what professional
              water damage restoration looks like.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: 1,
                title: 'Emergency Response',
                description: 'Our team arrives within 20-30 minutes with fully-equipped emergency response vehicles. We immediately assess the situation and begin water extraction.',
                image: '/images/process/step1.jpg',
                icon: Phone,
              },
              {
                step: 2,
                title: 'Assessment & Documentation',
                description: 'Using thermal imaging and moisture meters, we map all affected areas. This documentation is critical for insurance claims and ensures nothing is missed.',
                image: '/images/process/step2.jpg',
                icon: Camera,
              },
              {
                step: 3,
                title: 'Water Extraction',
                description: 'Truck-mounted and portable extraction units remove standing water quickly. We can extract hundreds of gallons per hour to minimize damage.',
                image: '/images/process/step3.jpg',
                icon: Droplets,
              },
              {
                step: 4,
                title: 'Drying & Dehumidification',
                description: 'Strategic placement of commercial dehumidifiers and air movers creates optimal drying conditions. We monitor daily until all materials reach acceptable moisture levels.',
                image: '/images/process/step4.jpg',
                icon: ThermometerSun,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className={`grid lg:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: smoothEase }}
              >
                <div className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div
                    className="aspect-video rounded-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                </div>
                <div className={idx % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1a73e8] flex items-center justify-center">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <span className="text-sm text-[#1a73e8] font-medium">Step {item.step}</span>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Homeowners Trust Flood Doctor
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Since 2008, we've helped thousands of Northern Virginia families recover
                from water damage. Our commitment to transparency, quality, and customer
                satisfaction has earned us a 4.9-star rating across hundreds of reviews.
              </p>
              <div className="space-y-4">
                {[
                  { text: 'IICRC Certified Technicians', icon: Award },
                  { text: '24/7 Emergency Response', icon: Clock },
                  { text: 'Direct Insurance Billing', icon: Shield },
                  { text: 'Satisfaction Guaranteed', icon: CheckCircle },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#1a73e8] flex items-center justify-center">
                      <item.icon className="text-white" size={20} />
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '2,500+', label: 'Projects Completed' },
                { value: '4.9★', label: 'Average Rating' },
                { value: '20-30min', label: 'Response Time' },
                { value: '15+', label: 'Years Experience' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: smoothEase }}
                >
                  <div className="text-3xl font-bold text-[#1a73e8] mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: smoothEase }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to See Results Like These?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Call now for immediate response. Our certified team is standing by 24/7
              to help you recover from water damage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+17035551234"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#1a73e8] font-semibold rounded-full hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={20} />
                (703) 555-1234
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Free Estimate
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDev8;
