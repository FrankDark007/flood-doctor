import React from 'react';

const VisualMock: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">
              Transparent restoration process
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Real-time updates, digital moisture mapping, and comprehensive documentation for insurance claims. You see what we see.
            </p>
            <ul className="space-y-4">
              {['Digital Moisture Mapping', 'Real-time Job Monitoring', 'Automated Insurance Reports', 'Photo Documentation'].map(item => (
                <li key={item} className="flex items-center text-gray-700 font-medium">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
             {/* Mock Dashboard UI */}
             <div className="relative rounded-xl bg-white border border-gray-200 shadow-2xl overflow-hidden aspect-[4/3] transform transition-transform hover:scale-[1.01] duration-500">
                {/* Mock Header */}
                <div className="h-12 bg-gray-50 border-b border-gray-100 flex items-center px-4 space-x-2">
                    <div className="flex space-x-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                    </div>
                    <div className="ml-4 h-2 w-32 bg-gray-200 rounded-full"></div>
                </div>
                {/* Mock Body */}
                <div className="p-6 grid grid-cols-3 gap-4">
                    {/* Sidebar */}
                    <div className="col-span-1 space-y-3">
                        <div className="h-8 bg-blue-50 rounded-lg w-full"></div>
                        <div className="h-2 bg-gray-100 rounded-full w-3/4"></div>
                        <div className="h-2 bg-gray-100 rounded-full w-1/2"></div>
                        <div className="h-2 bg-gray-100 rounded-full w-5/6"></div>
                    </div>
                    {/* Main Content */}
                    <div className="col-span-2 space-y-4">
                        <div className="flex justify-between items-center">
                            <div className="h-4 bg-gray-200 rounded-full w-1/3"></div>
                            <div className="h-8 w-24 bg-primary/10 rounded-full"></div>
                        </div>
                        <div className="h-32 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center">
                             <div className="text-center">
                                <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary mb-2">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full w-16 mx-auto"></div>
                             </div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 bg-gray-100 rounded-full w-full"></div>
                            <div className="h-2 bg-gray-100 rounded-full w-full"></div>
                            <div className="h-2 bg-gray-100 rounded-full w-2/3"></div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualMock;