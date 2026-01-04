// components/graphics/ComparisonTable.tsx
// Premium comparison table with animations and visual indicators

import React from 'react';

interface ComparisonRow {
  feature: string;
  floodDoctor: string | boolean;
  competitors: string | boolean;
  highlight?: boolean;
}

interface ComparisonTableProps {
  title?: string;
  subtitle?: string;
  rows?: ComparisonRow[];
  className?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({
  title = "Why Choose Flood Doctor?",
  subtitle = "See how we compare to other restoration companies",
  rows,
  className = ''
}) => {
  const defaultRows: ComparisonRow[] = [
    { feature: "Response Time", floodDoctor: "60 min guaranteed", competitors: "2-4 hours", highlight: true },
    { feature: "24/7 Availability", floodDoctor: true, competitors: "Limited" },
    { feature: "IICRC Certified", floodDoctor: true, competitors: true },
    { feature: "Direct Insurance Billing", floodDoctor: true, competitors: "Sometimes" },
    { feature: "Xactimate Estimates", floodDoctor: true, competitors: "Rarely" },
    { feature: "Free Inspections", floodDoctor: true, competitors: "Sometimes" },
    { feature: "Mold Prevention Included", floodDoctor: true, competitors: false },
    { feature: "Photo Documentation", floodDoctor: true, competitors: "Limited" },
    { feature: "Moisture Monitoring", floodDoctor: "Daily reports", competitors: "Varies" },
    { feature: "Local Team", floodDoctor: true, competitors: "Franchise" },
    { feature: "Warranty", floodDoctor: "5-year", competitors: "1-year", highlight: true },
  ];

  const displayRows = rows || defaultRows;

  const renderValue = (value: string | boolean, isFloodDoctor: boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${isFloodDoctor ? 'bg-green-100' : 'bg-slate-100'}`}>
          <svg className={`w-5 h-5 ${isFloodDoctor ? 'text-green-600' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      ) : (
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50">
          <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      );
    }
    return <span className={isFloodDoctor ? 'font-semibold text-slate-900' : 'text-slate-500'}>{value}</span>;
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-blue-100 mt-1">{subtitle}</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 uppercase tracking-wider">Feature</th>
              <th className="px-6 py-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-2 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-blue-600">Flood Doctor</span>
                </div>
              </th>
              <th className="px-6 py-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center mb-2">
                    <svg className="w-7 h-7 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-500">Competitors</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {displayRows.map((row, index) => (
              <tr
                key={row.feature}
                className={`
                  border-b border-slate-100 transition-colors duration-200
                  ${row.highlight ? 'bg-blue-50 hover:bg-blue-100' : 'hover:bg-slate-50'}
                `}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <td className="px-6 py-4">
                  <span className={`font-medium ${row.highlight ? 'text-blue-900' : 'text-slate-700'}`}>
                    {row.feature}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  {renderValue(row.floodDoctor, true)}
                </td>
                <td className="px-6 py-4 text-center">
                  {renderValue(row.competitors, false)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-8 py-6 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <p className="text-slate-600">
            Ready to experience the Flood Doctor difference?
          </p>
          <a
            href="tel:7036560103"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now: (703) 656-0103
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
