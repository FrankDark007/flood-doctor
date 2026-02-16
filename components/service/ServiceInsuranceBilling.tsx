import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const FEATURES = [
  'Thermal imaging inspection included',
  'Moisture mapping with daily readings',
  'Photo & video documentation for your adjuster',
  'Daily drying logs submitted to your carrier',
];

const ServiceInsuranceBilling: React.FC = () => {
  return (
    <div className="py-10">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
        Insurance Billing &amp; Deductibles
      </h2>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="md:grid md:grid-cols-5">
          {/* Left: Info */}
          <div className="p-6 sm:p-8 md:col-span-3">
            <p className="text-[15px] leading-relaxed text-gray-600 mb-6">
              We bill your insurance company directly using{' '}
              <strong className="text-gray-900">Xactimate</strong>, the industry-standard
              estimating platform used by all major carriers. For most covered losses,
              your only cost is the deductible.
            </p>

            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
              What&apos;s included in every claim
            </h3>
            <ul className="space-y-3">
              {FEATURES.map((f, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-[15px] text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#1a73e8] shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: CTA card */}
          <div className="bg-gray-50 p-6 sm:p-8 md:col-span-2 flex flex-col items-center justify-center text-center border-t md:border-t-0 md:border-l border-gray-200">
            <p className="text-sm text-gray-500 mb-1">Many covered losses start at</p>
            <p className="text-4xl font-bold text-gray-900 mb-1">$0</p>
            <p className="text-xs text-gray-500 mb-6">out of pocket, plus deductible</p>

            <Link
              to="/request/"
              className="w-full max-w-xs bg-[#1a73e8] hover:bg-[#1557b0] text-white font-semibold py-3.5 px-6 rounded-full transition-colors text-center block"
            >
              Get a Free Inspection
            </Link>
            <p className="mt-3 text-[11px] text-gray-400 max-w-xs">
              No obligation. On-site estimate required for final pricing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInsuranceBilling;
