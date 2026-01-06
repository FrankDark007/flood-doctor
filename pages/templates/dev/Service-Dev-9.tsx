/**
 * Service-Dev-9.tsx - Step-by-Step Guide Layout
 *
 * A comprehensive step-by-step guide layout with detailed instructions,
 * visual progress indicators, and action-oriented content. Perfect for
 * DIY guides and procedural content.
 *
 * Capacity: 2500+ words
 * Best for: How-to guides, emergency procedures, DIY instructions
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Phone, Clock, Shield, Star, CheckCircle, AlertTriangle, Info,
  ArrowRight, ArrowDown, ChevronRight, Droplets, Zap, Home,
  Camera, Wrench, FileText, ThermometerSun, Wind, Download,
  Bookmark, Share2, Printer, CheckSquare, Square
} from 'lucide-react';

// Google-style easing
const smoothEase = [0.22, 1, 0.36, 1];

// Step Progress Indicator
const StepProgress: React.FC<{
  currentStep: number;
  totalSteps: number;
  steps: string[];
}> = ({ currentStep, totalSteps, steps }) => {
  return (
    <div className="sticky top-4 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
        Progress
      </h3>
      <div className="space-y-3">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                idx < currentStep
                  ? 'bg-green-500 text-white'
                  : idx === currentStep
                  ? 'bg-[#1a73e8] text-white'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              {idx < currentStep ? (
                <CheckCircle size={16} />
              ) : (
                <span className="text-sm font-semibold">{idx + 1}</span>
              )}
            </div>
            <span
              className={`text-sm ${
                idx === currentStep
                  ? 'text-gray-900 font-medium'
                  : idx < currentStep
                  ? 'text-gray-500'
                  : 'text-gray-400'
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-500">Completion</span>
          <span className="font-semibold text-[#1a73e8]">
            {Math.round((currentStep / totalSteps) * 100)}%
          </span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#1a73e8] to-[#0d47a1]"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            transition={{ duration: 0.5, ease: smoothEase }}
          />
        </div>
      </div>
    </div>
  );
};

// Step Card Component
const StepCard: React.FC<{
  stepNumber: number;
  title: string;
  duration?: string;
  children: React.ReactNode;
  onComplete?: () => void;
  isActive?: boolean;
}> = ({ stepNumber, title, duration, children, onComplete, isActive = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      id={`step-${stepNumber}`}
      className={`bg-white rounded-2xl shadow-lg border-2 transition-colors ${
        isActive ? 'border-[#1a73e8]' : 'border-gray-100'
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: smoothEase }}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start gap-4">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
              isActive
                ? 'bg-[#1a73e8] text-white'
                : 'bg-gray-100 text-gray-500'
            }`}
          >
            <span className="text-lg font-bold">{stepNumber}</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            {duration && (
              <span className="inline-flex items-center gap-1 text-sm text-gray-500 mt-1">
                <Clock size={14} />
                {duration}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">{children}</div>

      {/* Footer */}
      {onComplete && (
        <div className="px-6 pb-6">
          <button
            onClick={onComplete}
            className="w-full py-3 bg-[#1a73e8] text-white font-semibold rounded-xl hover:bg-[#1557b0] transition-colors flex items-center justify-center gap-2"
          >
            <CheckCircle size={18} />
            Mark as Complete
          </button>
        </div>
      )}
    </motion.div>
  );
};

// Checklist Item
const ChecklistItem: React.FC<{
  text: string;
  checked: boolean;
  onChange: () => void;
}> = ({ text, checked, onChange }) => {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <button
        onClick={onChange}
        className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
          checked
            ? 'bg-green-500 border-green-500 text-white'
            : 'border-gray-300 hover:border-[#1a73e8] group-hover:border-[#1a73e8]'
        }`}
      >
        {checked && <CheckCircle size={14} />}
      </button>
      <span
        className={`${checked ? 'text-gray-400 line-through' : 'text-gray-700'}`}
      >
        {text}
      </span>
    </label>
  );
};

// Alert Box Component
const AlertBox: React.FC<{
  type: 'warning' | 'info' | 'danger' | 'success';
  title: string;
  children: React.ReactNode;
}> = ({ type, title, children }) => {
  const styles = {
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: AlertTriangle,
      iconColor: 'text-yellow-600',
      titleColor: 'text-yellow-800',
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: Info,
      iconColor: 'text-blue-600',
      titleColor: 'text-blue-800',
    },
    danger: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: AlertTriangle,
      iconColor: 'text-red-600',
      titleColor: 'text-red-800',
    },
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: CheckCircle,
      iconColor: 'text-green-600',
      titleColor: 'text-green-800',
    },
  };

  const style = styles[type];
  const Icon = style.icon;

  return (
    <div className={`${style.bg} ${style.border} border rounded-xl p-4`}>
      <div className="flex items-start gap-3">
        <Icon className={`${style.iconColor} flex-shrink-0 mt-0.5`} size={20} />
        <div>
          <h4 className={`font-semibold ${style.titleColor} mb-1`}>{title}</h4>
          <div className="text-sm text-gray-700">{children}</div>
        </div>
      </div>
    </div>
  );
};

// Tool/Material Item
const ToolItem: React.FC<{
  name: string;
  description?: string;
  icon: React.ElementType;
  essential?: boolean;
}> = ({ name, description, icon: Icon, essential = false }) => {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
      <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
        <Icon className="text-gray-600" size={20} />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-900">{name}</span>
          {essential && (
            <span className="px-2 py-0.5 text-xs font-medium bg-red-100 text-red-600 rounded">
              Essential
            </span>
          )}
        </div>
        {description && (
          <p className="text-sm text-gray-500 mt-0.5">{description}</p>
        )}
      </div>
    </div>
  );
};

// Main Component
const ServiceDev9: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const steps = [
    'Safety First',
    'Stop the Source',
    'Document Damage',
    'Extract Water',
    'Begin Drying',
    'Prevent Mold',
    'Call Professionals',
  ];

  const toggleCheckItem = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
              <FileText size={16} />
              Step-by-Step Guide
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Emergency Water Damage
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Response Guide
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Follow these steps immediately when water damage occurs to minimize damage
              and protect your property. This guide covers what to do while waiting for
              professional help.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">7</div>
                <div className="text-sm text-gray-400">Steps</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">~30</div>
                <div className="text-sm text-gray-400">Minutes</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">DIY</div>
                <div className="text-sm text-gray-400">Friendly</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#step-1"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1a73e8] font-semibold rounded-full hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Guide
                <ArrowDown size={18} />
              </motion.a>
              <motion.button
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <Download size={18} />
                Download PDF
              </motion.button>
              <motion.button
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <Printer size={18} />
                Print
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Banner */}
      <div className="bg-red-600 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-white">
            <AlertTriangle size={24} />
            <span className="font-medium">
              Dealing with an emergency right now?
            </span>
            <a
              href="tel:+17035551234"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-red-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              <Phone size={16} />
              Call (703) 555-1234
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Progress Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <StepProgress
              currentStep={currentStep}
              totalSteps={steps.length}
              steps={steps}
            />

            {/* Quick Tools */}
            <div className="mt-6 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Tools You'll Need
              </h3>
              <div className="space-y-2">
                <ToolItem name="Rubber gloves" icon={Wrench} essential />
                <ToolItem name="Mop & buckets" icon={Droplets} essential />
                <ToolItem name="Wet/dry vacuum" icon={Wind} />
                <ToolItem name="Fans" icon={Wind} />
                <ToolItem name="Camera/phone" icon={Camera} essential />
              </div>
            </div>
          </div>

          {/* Steps Content */}
          <div className="lg:col-span-2 order-1 lg:order-2 space-y-8">
            {/* Step 1 */}
            <StepCard
              stepNumber={1}
              title="Safety First"
              duration="2-5 minutes"
              isActive={currentStep === 0}
              onComplete={() => setCurrentStep(1)}
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                Before anything else, ensure your safety and that of your family. Water
                damage can create serious hazards including electrical dangers and
                contamination risks.
              </p>

              <AlertBox type="danger" title="Electrical Hazard">
                <p>
                  If water has reached electrical outlets, appliances, or your electrical
                  panel, <strong>do not enter the area</strong>. Call your utility company
                  to shut off power remotely, or wait for a professional.
                </p>
              </AlertBox>

              <div className="mt-6 space-y-3">
                <h4 className="font-semibold text-gray-900">Safety Checklist:</h4>
                <ChecklistItem
                  text="Turn off electricity at the breaker if safe to access"
                  checked={checkedItems['1-1'] || false}
                  onChange={() => toggleCheckItem('1-1')}
                />
                <ChecklistItem
                  text="Wear rubber-soled shoes and rubber gloves"
                  checked={checkedItems['1-2'] || false}
                  onChange={() => toggleCheckItem('1-2')}
                />
                <ChecklistItem
                  text="Open windows for ventilation"
                  checked={checkedItems['1-3'] || false}
                  onChange={() => toggleCheckItem('1-3')}
                />
                <ChecklistItem
                  text="Remove children and pets from the area"
                  checked={checkedItems['1-4'] || false}
                  onChange={() => toggleCheckItem('1-4')}
                />
                <ChecklistItem
                  text="Check for structural damage (sagging ceilings, warped floors)"
                  checked={checkedItems['1-5'] || false}
                  onChange={() => toggleCheckItem('1-5')}
                />
              </div>
            </StepCard>

            {/* Step 2 */}
            <StepCard
              stepNumber={2}
              title="Stop the Water Source"
              duration="5-15 minutes"
              isActive={currentStep === 1}
              onComplete={() => setCurrentStep(2)}
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                The faster you stop the water source, the less damage you'll have.
                Identify where the water is coming from and take immediate action.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Burst Pipe</h4>
                  <ol className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="font-semibold text-[#1a73e8]">1.</span>
                      Locate main water shutoff valve
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-[#1a73e8]">2.</span>
                      Turn clockwise to close
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-[#1a73e8]">3.</span>
                      Open faucets to drain remaining water
                    </li>
                  </ol>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Appliance Leak</h4>
                  <ol className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="font-semibold text-[#1a73e8]">1.</span>
                      Turn off appliance-specific valve
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-[#1a73e8]">2.</span>
                      Unplug the appliance if safe
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-[#1a73e8]">3.</span>
                      Place towels to absorb spread
                    </li>
                  </ol>
                </div>
              </div>

              <AlertBox type="info" title="Know Your Shutoff Location">
                <p>
                  Your main water shutoff is typically located where the water line enters
                  your home—often in the basement, crawl space, or near the water heater.
                  Label it now so you can find it in an emergency.
                </p>
              </AlertBox>

              <div className="mt-6 space-y-3">
                <h4 className="font-semibold text-gray-900">Checklist:</h4>
                <ChecklistItem
                  text="Identified the water source"
                  checked={checkedItems['2-1'] || false}
                  onChange={() => toggleCheckItem('2-1')}
                />
                <ChecklistItem
                  text="Turned off water supply (main or appliance-specific)"
                  checked={checkedItems['2-2'] || false}
                  onChange={() => toggleCheckItem('2-2')}
                />
                <ChecklistItem
                  text="Verified water has stopped flowing"
                  checked={checkedItems['2-3'] || false}
                  onChange={() => toggleCheckItem('2-3')}
                />
              </div>
            </StepCard>

            {/* Step 3 */}
            <StepCard
              stepNumber={3}
              title="Document Everything"
              duration="10-15 minutes"
              isActive={currentStep === 2}
              onComplete={() => setCurrentStep(3)}
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                Before you start cleanup, thoroughly document all damage. This documentation
                is critical for insurance claims and will help restoration professionals
                understand the full scope.
              </p>

              <AlertBox type="warning" title="Insurance Tip">
                <p>
                  Take photos and videos BEFORE you start any cleanup. Insurance adjusters
                  need to see the damage as it occurred. Don't throw anything away until
                  your adjuster has seen it.
                </p>
              </AlertBox>

              <div className="mt-6 space-y-3">
                <h4 className="font-semibold text-gray-900">Documentation Checklist:</h4>
                <ChecklistItem
                  text="Take wide-angle photos of each affected room"
                  checked={checkedItems['3-1'] || false}
                  onChange={() => toggleCheckItem('3-1')}
                />
                <ChecklistItem
                  text="Take close-up photos of damaged items and materials"
                  checked={checkedItems['3-2'] || false}
                  onChange={() => toggleCheckItem('3-2')}
                />
                <ChecklistItem
                  text="Record video walkthrough with narration"
                  checked={checkedItems['3-3'] || false}
                  onChange={() => toggleCheckItem('3-3')}
                />
                <ChecklistItem
                  text="Note the time and date damage was discovered"
                  checked={checkedItems['3-4'] || false}
                  onChange={() => toggleCheckItem('3-4')}
                />
                <ChecklistItem
                  text="Photograph the water source/cause"
                  checked={checkedItems['3-5'] || false}
                  onChange={() => toggleCheckItem('3-5')}
                />
                <ChecklistItem
                  text="Make a written list of damaged items"
                  checked={checkedItems['3-6'] || false}
                  onChange={() => toggleCheckItem('3-6')}
                />
              </div>
            </StepCard>

            {/* Step 4 */}
            <StepCard
              stepNumber={4}
              title="Extract Standing Water"
              duration="30-60+ minutes"
              isActive={currentStep === 3}
              onComplete={() => setCurrentStep(4)}
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                Remove as much standing water as possible, as quickly as possible. Every
                minute water sits increases damage to flooring, walls, and belongings.
              </p>

              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Methods by Effectiveness:</h4>
                <ol className="space-y-2">
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#1a73e8] text-white text-xs flex items-center justify-center">1</span>
                    <span className="text-gray-700"><strong>Wet/dry vacuum</strong> - Most effective for homeowners</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#1a73e8] text-white text-xs flex items-center justify-center">2</span>
                    <span className="text-gray-700"><strong>Mop and bucket</strong> - For smaller amounts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#1a73e8] text-white text-xs flex items-center justify-center">3</span>
                    <span className="text-gray-700"><strong>Towels</strong> - For residual moisture</span>
                  </li>
                </ol>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Extraction Checklist:</h4>
                <ChecklistItem
                  text="Remove all standing water from floors"
                  checked={checkedItems['4-1'] || false}
                  onChange={() => toggleCheckItem('4-1')}
                />
                <ChecklistItem
                  text="Lift and remove wet rugs and carpets if possible"
                  checked={checkedItems['4-2'] || false}
                  onChange={() => toggleCheckItem('4-2')}
                />
                <ChecklistItem
                  text="Remove wet items from floors (furniture, boxes, etc.)"
                  checked={checkedItems['4-3'] || false}
                  onChange={() => toggleCheckItem('4-3')}
                />
                <ChecklistItem
                  text="Mop up remaining moisture"
                  checked={checkedItems['4-4'] || false}
                  onChange={() => toggleCheckItem('4-4')}
                />
              </div>
            </StepCard>

            {/* Step 5 */}
            <StepCard
              stepNumber={5}
              title="Begin Drying Process"
              duration="Ongoing"
              isActive={currentStep === 4}
              onComplete={() => setCurrentStep(5)}
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                Start the drying process immediately. While consumer equipment won't
                match professional-grade dehumidifiers, every bit helps reduce damage.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <ThermometerSun className="text-[#1a73e8] mb-2" size={24} />
                  <h4 className="font-semibold text-gray-900 mb-2">Increase Airflow</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Open all windows and doors</li>
                    <li>• Run all ceiling fans</li>
                    <li>• Position box fans strategically</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <Wind className="text-[#1a73e8] mb-2" size={24} />
                  <h4 className="font-semibold text-gray-900 mb-2">Reduce Humidity</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Run dehumidifier if available</li>
                    <li>• Run AC on low (removes humidity)</li>
                    <li>• Use desiccants in enclosed spaces</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Drying Checklist:</h4>
                <ChecklistItem
                  text="Opened windows and doors for ventilation"
                  checked={checkedItems['5-1'] || false}
                  onChange={() => toggleCheckItem('5-1')}
                />
                <ChecklistItem
                  text="Set up fans pointing toward wet areas"
                  checked={checkedItems['5-2'] || false}
                  onChange={() => toggleCheckItem('5-2')}
                />
                <ChecklistItem
                  text="Running dehumidifier or AC"
                  checked={checkedItems['5-3'] || false}
                  onChange={() => toggleCheckItem('5-3')}
                />
                <ChecklistItem
                  text="Removed baseboards to allow wall drying (if comfortable)"
                  checked={checkedItems['5-4'] || false}
                  onChange={() => toggleCheckItem('5-4')}
                />
              </div>
            </StepCard>

            {/* Step 6 */}
            <StepCard
              stepNumber={6}
              title="Prevent Mold Growth"
              duration="Ongoing"
              isActive={currentStep === 5}
              onComplete={() => setCurrentStep(6)}
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                Mold can begin growing within 24-48 hours in damp conditions. Taking
                preventive measures now can save you from a separate mold remediation
                project later.
              </p>

              <AlertBox type="danger" title="Critical Timeline">
                <p>
                  You have approximately <strong>24-48 hours</strong> before mold begins
                  to colonize wet materials. Professional drying equipment is essential
                  to meet this window for moderate to severe water damage.
                </p>
              </AlertBox>

              <div className="mt-6 space-y-3">
                <h4 className="font-semibold text-gray-900">Prevention Checklist:</h4>
                <ChecklistItem
                  text="Removed wet carpet padding (usually needs replacement anyway)"
                  checked={checkedItems['6-1'] || false}
                  onChange={() => toggleCheckItem('6-1')}
                />
                <ChecklistItem
                  text="Moved wet items to a dry, well-ventilated area"
                  checked={checkedItems['6-2'] || false}
                  onChange={() => toggleCheckItem('6-2')}
                />
                <ChecklistItem
                  text="Wiped down hard surfaces with clean water"
                  checked={checkedItems['6-3'] || false}
                  onChange={() => toggleCheckItem('6-3')}
                />
                <ChecklistItem
                  text="Disposed of obviously unsalvageable items (keep for documentation)"
                  checked={checkedItems['6-4'] || false}
                  onChange={() => toggleCheckItem('6-4')}
                />
              </div>
            </StepCard>

            {/* Step 7 */}
            <StepCard
              stepNumber={7}
              title="Call Professional Help"
              duration="5 minutes"
              isActive={currentStep === 6}
              onComplete={() => setCurrentStep(7)}
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                Even if you've completed these emergency steps, professional restoration
                is almost always necessary for water damage beyond a very minor spill.
                Hidden moisture causes the most long-term damage.
              </p>

              <div className="bg-gradient-to-br from-[#1a73e8] to-[#0d47a1] rounded-xl p-6 text-white mb-6">
                <h4 className="text-lg font-bold mb-4">Call Flood Doctor Now</h4>
                <p className="text-blue-100 mb-4">
                  Our IICRC-certified technicians are available 24/7 with 20-30 minute
                  response times throughout Northern Virginia.
                </p>
                <a
                  href="tel:+17035551234"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1a73e8] font-semibold rounded-full hover:bg-blue-50 transition-colors"
                >
                  <Phone size={18} />
                  (703) 555-1234
                </a>
              </div>

              <AlertBox type="success" title="What to Tell the Dispatcher">
                <ul className="space-y-1">
                  <li>• Your address and contact information</li>
                  <li>• Type of water (clean, gray, or contaminated)</li>
                  <li>• Approximate square footage affected</li>
                  <li>• How long water has been present</li>
                  <li>• Whether you've shut off the water source</li>
                </ul>
              </AlertBox>
            </StepCard>

            {/* Completion Message */}
            {currentStep >= 7 && (
              <motion.div
                className="bg-green-50 rounded-2xl p-8 text-center border-2 border-green-200"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Emergency Steps Complete!
                </h3>
                <p className="text-gray-600 mb-6">
                  You've taken the most critical emergency steps. Now it's time to let
                  the professionals take over to ensure complete restoration.
                </p>
                <a
                  href="tel:+17035551234"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
                >
                  <Phone size={20} />
                  Call Flood Doctor
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't Wait—Water Damage Gets Worse Every Hour
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our certified team is standing by 24/7 with 20-30 minute response times.
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDev9;
