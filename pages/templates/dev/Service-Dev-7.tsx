/**
 * Service-Dev-7.tsx - Data/Comparison Layout
 *
 * A data-driven layout with comparison tables, statistics, charts,
 * and visual data representations. Perfect for cost comparisons,
 * service tiers, and decision-making content.
 *
 * Capacity: 2500+ words
 * Best for: Cost comparisons, DIY vs Pro, service packages, statistics
 */

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Phone, Clock, Shield, Star, CheckCircle, X, AlertTriangle,
  ArrowRight, DollarSign, TrendingUp, TrendingDown, BarChart3,
  Droplets, ThermometerSun, Timer, Users, Award, Zap,
  HelpCircle, ChevronRight, Calculator, FileText, Home
} from 'lucide-react';

// Google-style easing
const smoothEase = [0.22, 1, 0.36, 1];

// Animated Stat Card
const StatCard: React.FC<{
  value: string;
  label: string;
  sublabel?: string;
  icon: React.ElementType;
  trend?: 'up' | 'down' | 'neutral';
  color?: 'blue' | 'green' | 'red' | 'yellow';
  delay?: number;
}> = ({ value, label, sublabel, icon: Icon, trend, color = 'blue', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const colorClasses = {
    blue: 'bg-blue-50 text-[#1a73e8] border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    red: 'bg-red-50 text-red-600 border-red-200',
    yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200',
  };

  return (
    <motion.div
      ref={ref}
      className={`rounded-2xl p-6 border ${colorClasses[color]} relative overflow-hidden`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: smoothEase }}
    >
      <div className="flex items-start justify-between mb-4">
        <Icon size={24} className="opacity-80" />
        {trend && (
          <div className={`flex items-center gap-1 text-sm ${
            trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-500'
          }`}>
            {trend === 'up' && <TrendingUp size={16} />}
            {trend === 'down' && <TrendingDown size={16} />}
          </div>
        )}
      </div>
      <div className="text-3xl lg:text-4xl font-bold mb-2">{value}</div>
      <div className="text-sm font-medium opacity-80">{label}</div>
      {sublabel && <div className="text-xs opacity-60 mt-1">{sublabel}</div>}
    </motion.div>
  );
};

// Comparison Table
const ComparisonTable: React.FC<{
  title: string;
  headers: string[];
  rows: { feature: string; values: (boolean | string)[] }[];
  highlightColumn?: number;
}> = ({ title, headers, rows, highlightColumn = 1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: smoothEase }}
    >
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-4 font-semibold text-gray-700">Feature</th>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className={`text-center p-4 font-semibold ${
                    idx === highlightColumn
                      ? 'bg-[#1a73e8] text-white'
                      : 'text-gray-700'
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr key={rowIdx} className="border-b border-gray-100 last:border-0">
                <td className="p-4 text-gray-700 font-medium">{row.feature}</td>
                {row.values.map((value, colIdx) => (
                  <td
                    key={colIdx}
                    className={`text-center p-4 ${
                      colIdx === highlightColumn ? 'bg-blue-50' : ''
                    }`}
                  >
                    {typeof value === 'boolean' ? (
                      value ? (
                        <CheckCircle className="inline text-green-500" size={20} />
                      ) : (
                        <X className="inline text-red-400" size={20} />
                      )
                    ) : (
                      <span className={colIdx === highlightColumn ? 'font-semibold text-[#1a73e8]' : 'text-gray-600'}>
                        {value}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

// Cost Calculator
const CostCalculator: React.FC = () => {
  const [sqft, setSqft] = useState(1000);
  const [waterCategory, setWaterCategory] = useState<1 | 2 | 3>(1);
  const [classType, setClassType] = useState<1 | 2 | 3 | 4>(2);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Simplified cost calculation
  const baseRate = { 1: 3, 2: 4.5, 3: 7 }[waterCategory];
  const classMultiplier = { 1: 1, 2: 1.3, 3: 1.6, 4: 2 }[classType];
  const estimatedCost = Math.round(sqft * baseRate * classMultiplier);
  const lowEstimate = Math.round(estimatedCost * 0.8);
  const highEstimate = Math.round(estimatedCost * 1.3);

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: smoothEase }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-[#1a73e8] flex items-center justify-center">
          <Calculator className="text-white" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Cost Estimator</h3>
          <p className="text-sm text-gray-600">Get a rough estimate for your situation</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Square Footage */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Affected Area (sq ft)
          </label>
          <input
            type="range"
            min="100"
            max="5000"
            step="100"
            value={sqft}
            onChange={(e) => setSqft(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1a73e8]"
          />
          <div className="text-center mt-2 text-2xl font-bold text-[#1a73e8]">{sqft.toLocaleString()} sq ft</div>
        </div>

        {/* Water Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Water Category
          </label>
          <div className="space-y-2">
            {[
              { value: 1, label: 'Clean Water', desc: 'Supply lines, rain' },
              { value: 2, label: 'Gray Water', desc: 'Appliances, sump' },
              { value: 3, label: 'Black Water', desc: 'Sewage, flooding' },
            ].map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-colors ${
                  waterCategory === option.value
                    ? 'bg-[#1a73e8] text-white'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name="category"
                  value={option.value}
                  checked={waterCategory === option.value}
                  onChange={() => setWaterCategory(option.value as 1 | 2 | 3)}
                  className="sr-only"
                />
                <span className="text-sm font-medium">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Damage Class */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Damage Class
          </label>
          <div className="space-y-2">
            {[
              { value: 1, label: 'Class 1', desc: 'Minimal' },
              { value: 2, label: 'Class 2', desc: 'Moderate' },
              { value: 3, label: 'Class 3', desc: 'Significant' },
              { value: 4, label: 'Class 4', desc: 'Specialty' },
            ].map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-colors ${
                  classType === option.value
                    ? 'bg-[#1a73e8] text-white'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name="class"
                  value={option.value}
                  checked={classType === option.value}
                  onChange={() => setClassType(option.value as 1 | 2 | 3 | 4)}
                  className="sr-only"
                />
                <span className="text-sm font-medium">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-white rounded-xl p-6">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-600 mb-1">Estimated Cost Range</p>
          <p className="text-4xl font-bold text-[#1a73e8]">
            ${lowEstimate.toLocaleString()} - ${highEstimate.toLocaleString()}
          </p>
        </div>
        <p className="text-xs text-gray-500 text-center">
          * This is a rough estimate. Actual costs depend on many factors including
          materials affected, equipment needed, and restoration timeline.
          <a href="tel:+17035551234" className="text-[#1a73e8] ml-1 font-medium">Get a free quote →</a>
        </p>
      </div>
    </motion.div>
  );
};

// Data Visualization Bar
const DataBar: React.FC<{
  label: string;
  value: number;
  maxValue: number;
  color?: string;
  showPercentage?: boolean;
}> = ({ label, value, maxValue, color = '#1a73e8', showPercentage = true }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const percentage = (value / maxValue) * 100;

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-semibold" style={{ color }}>
          {showPercentage ? `${Math.round(percentage)}%` : value.toLocaleString()}
        </span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1, delay: 0.2, ease: smoothEase }}
        />
      </div>
    </div>
  );
};

// Service Tier Card
const ServiceTierCard: React.FC<{
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}> = ({ name, price, description, features, highlighted = false, badge }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-2xl p-6 lg:p-8 ${
        highlighted
          ? 'bg-gradient-to-br from-[#1a73e8] to-[#0d47a1] text-white shadow-xl shadow-blue-500/20 scale-105'
          : 'bg-white border border-gray-200 shadow-lg'
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: smoothEase }}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="px-4 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
            {badge}
          </span>
        </div>
      )}

      <h3 className={`text-xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-gray-900'}`}>
        {name}
      </h3>
      <div className={`text-3xl font-bold mb-4 ${highlighted ? 'text-white' : 'text-[#1a73e8]'}`}>
        {price}
      </div>
      <p className={`text-sm mb-6 ${highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
        {description}
      </p>

      <ul className="space-y-3 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <CheckCircle
              size={18}
              className={`flex-shrink-0 mt-0.5 ${highlighted ? 'text-green-400' : 'text-green-500'}`}
            />
            <span className={`text-sm ${highlighted ? 'text-white' : 'text-gray-700'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <motion.a
        href="tel:+17035551234"
        className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
          highlighted
            ? 'bg-white text-[#1a73e8] hover:bg-blue-50'
            : 'bg-[#1a73e8] text-white hover:bg-[#1557b0]'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Get Started
      </motion.a>
    </motion.div>
  );
};

// Main Component
const ServiceDev7: React.FC = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: smoothEase }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-blue-300 text-sm font-medium mb-6">
              <BarChart3 size={16} />
              Data-Driven Decisions
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Water Damage Restoration
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Costs & Comparisons
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Understand the real costs, compare DIY vs professional restoration, and make
              informed decisions with data from thousands of restoration projects.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Clock, text: '20-30 Min Response', bg: 'bg-yellow-500/20', color: 'text-yellow-400' },
                { icon: Shield, text: 'IICRC Certified', bg: 'bg-blue-500/20', color: 'text-blue-400' },
                { icon: Star, text: '4.9★ Rating', bg: 'bg-yellow-500/20', color: 'text-yellow-400' },
                { icon: DollarSign, text: 'Free Estimates', bg: 'bg-green-500/20', color: 'text-green-400' },
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
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 -mt-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <StatCard
              value="$3,000"
              label="Average Restoration Cost"
              sublabel="For moderate water damage"
              icon={DollarSign}
              color="blue"
              delay={0}
            />
            <StatCard
              value="24-48hrs"
              label="Mold Growth Begins"
              sublabel="Without proper drying"
              icon={AlertTriangle}
              color="red"
              delay={0.1}
            />
            <StatCard
              value="3-5 Days"
              label="Average Drying Time"
              sublabel="With professional equipment"
              icon={Timer}
              color="green"
              delay={0.2}
            />
            <StatCard
              value="80%"
              label="Insurance Coverage Rate"
              sublabel="When properly documented"
              icon={Shield}
              color="yellow"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Cost Breakdown Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Restoration Costs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Water damage restoration costs vary significantly based on the extent of damage,
              water category, and materials affected. Here's what drives the cost.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Cost Factors */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Cost Factors Breakdown</h3>
              <DataBar label="Extraction & Drying" value={35} maxValue={100} color="#1a73e8" />
              <DataBar label="Equipment Rental" value={25} maxValue={100} color="#0d47a1" />
              <DataBar label="Labor" value={20} maxValue={100} color="#4285f4" />
              <DataBar label="Materials & Supplies" value={10} maxValue={100} color="#7baaf7" />
              <DataBar label="Documentation & Admin" value={10} maxValue={100} color="#a0c4ff" />
            </div>

            {/* Average Costs by Category */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Average Costs by Water Category</h3>
              <div className="space-y-6">
                {[
                  { category: 'Category 1 (Clean Water)', range: '$1,200 - $4,500', avg: '$2,500', color: '#22c55e' },
                  { category: 'Category 2 (Gray Water)', range: '$2,500 - $7,500', avg: '$4,000', color: '#f59e0b' },
                  { category: 'Category 3 (Black Water)', range: '$5,000 - $25,000+', avg: '$12,000', color: '#ef4444' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-gray-50">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="font-semibold text-gray-900">{item.category}</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-sm text-gray-600">{item.range}</span>
                      <span className="text-lg font-bold" style={{ color: item.color }}>{item.avg}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Cost Calculator */}
          <CostCalculator />
        </div>
      </section>

      {/* DIY vs Professional Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">DIY vs Professional Restoration</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Should you tackle water damage yourself or call the professionals?
              Here's an honest comparison to help you decide.
            </p>
          </div>

          <ComparisonTable
            title="Complete Feature Comparison"
            headers={['DIY Approach', 'Professional Service']}
            highlightColumn={1}
            rows={[
              { feature: 'Initial Cost', values: ['$200-800', '$1,500-5,000'] },
              { feature: 'Hidden Moisture Detection', values: [false, true] },
              { feature: 'Industrial Equipment', values: [false, true] },
              { feature: 'Mold Prevention Guarantee', values: [false, true] },
              { feature: 'Insurance Documentation', values: [false, true] },
              { feature: '24/7 Availability', values: [false, true] },
              { feature: 'Certified Technicians', values: [false, true] },
              { feature: 'Liability Coverage', values: [false, true] },
              { feature: 'Average Completion Time', values: ['7-14 days', '3-5 days'] },
              { feature: 'Risk of Secondary Damage', values: ['High', 'Very Low'] },
              { feature: 'Long-term Cost (incl. repairs)', values: ['$3,000-15,000', '$1,500-5,000'] },
            ]}
          />

          {/* Detailed Prose Comparison */}
          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            {/* DIY */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-6 lg:p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: smoothEase }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Home className="text-gray-600" size={24} />
                When DIY Might Work
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                DIY water damage cleanup can be appropriate for very minor incidents—think a
                small appliance leak caught immediately, affecting only a few square feet of
                hard flooring with no carpet or wall involvement.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you can definitively say the water is Category 1 (clean), the affected area
                is small (under 10 square feet), and you caught it within an hour, you might
                be able to handle it with towels, fans, and a consumer-grade dehumidifier.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Warning:</strong> Even small water events can cause hidden damage.
                  If you have any doubt, get a professional inspection—many companies
                  (including us) offer free assessments.
                </p>
              </div>
            </motion.div>

            {/* Professional */}
            <motion.div
              className="bg-blue-50 rounded-2xl p-6 lg:p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: smoothEase }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="text-[#1a73e8]" size={24} />
                When to Call Professionals
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-[#1a73e8] flex-shrink-0 mt-0.5" />
                  <span>Any water damage affecting more than 10 square feet</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-[#1a73e8] flex-shrink-0 mt-0.5" />
                  <span>Water has been standing for more than 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-[#1a73e8] flex-shrink-0 mt-0.5" />
                  <span>Carpet, drywall, or insulation is affected</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-[#1a73e8] flex-shrink-0 mt-0.5" />
                  <span>Water source is unknown or potentially contaminated</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-[#1a73e8] flex-shrink-0 mt-0.5" />
                  <span>You plan to file an insurance claim</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-[#1a73e8] flex-shrink-0 mt-0.5" />
                  <span>There's any musty smell or visible mold</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-[#1a73e8] flex-shrink-0 mt-0.5" />
                  <span>Flooding involves sewage or outdoor flooding</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Options</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Every service includes a detailed
              estimate before work begins.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-0">
            <ServiceTierCard
              name="Emergency Response"
              price="$500+"
              description="Immediate extraction and stabilization to prevent further damage"
              features={[
                '20-30 minute response time',
                'Water extraction & removal',
                'Moisture assessment',
                'Emergency tarping if needed',
                'Insurance documentation started',
              ]}
            />
            <ServiceTierCard
              name="Complete Restoration"
              price="$1,500+"
              description="Full water damage restoration from extraction through drying"
              features={[
                'Everything in Emergency Response',
                'Commercial dehumidification',
                'Daily moisture monitoring',
                'Antimicrobial treatment',
                'Complete documentation package',
                'Direct insurance billing',
              ]}
              highlighted
              badge="MOST POPULAR"
            />
            <ServiceTierCard
              name="Full-Service Recovery"
              price="$3,500+"
              description="Complete restoration plus repairs and reconstruction"
              features={[
                'Everything in Complete Restoration',
                'Content pack-out & storage',
                'Mold remediation if needed',
                'Structural repairs',
                'Flooring replacement',
                'Paint & finish work',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Insurance & ROI Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Insurance Coverage & ROI</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Most homeowner's insurance policies cover water damage from sudden and accidental
                events like burst pipes, appliance failures, and storm damage. Understanding your
                coverage can significantly impact your out-of-pocket costs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Professional restoration often pays for itself through insurance—our documentation
                and direct billing relationships with major insurers mean higher claim approvals
                and faster processing. In many cases, you'll only pay your deductible.
              </p>

              <div className="space-y-4">
                {[
                  { label: 'Claim approval rate with professional documentation', value: 95 },
                  { label: 'Average claim processing time reduction', value: 60 },
                  { label: 'Customers who pay only their deductible', value: 80 },
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-green-600">{stat.value}%</span>
                    </div>
                    <span className="text-gray-700">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Insurance Process */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FileText className="text-green-600" size={24} />
                How We Handle Insurance
              </h3>
              <div className="space-y-4">
                {[
                  { step: 1, text: 'We document all damage with photos, moisture readings, and detailed notes' },
                  { step: 2, text: 'Create industry-standard Xactimate estimates' },
                  { step: 3, text: 'Submit claims directly to your insurance' },
                  { step: 4, text: 'Communicate with adjusters on your behalf' },
                  { step: 5, text: 'Handle supplements if additional damage is discovered' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {item.step}
                    </div>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
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
              Get Your Free Assessment Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              No obligation, no pressure. Our certified technicians will assess your situation
              and provide an honest recommendation—even if that means DIY is your best option.
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
                href="#estimate"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Free Estimate
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDev7;
