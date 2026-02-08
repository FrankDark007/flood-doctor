
import React, { useState } from 'react';
import PageMeta from '../components/ui/PageMeta';
import PortalDeliverablesInteractive from '../components/sections/PortalDeliverablesInteractive';
import { Lock, ArrowRight, UserCheck, Shield } from 'lucide-react';
import Button from '../components/ui/Button';

const ClientPortalDemo: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginId, setLoginId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoading(false);
    }, 1500);
  };

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <PageMeta title="Client Portal Demo" description="Experience our transparent restoration dashboard." />
        
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 max-w-md w-full overflow-hidden">
           <div className="bg-primary p-8 text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                 <Lock size={32} className="text-white" />
              </div>
              <h1 className="font-display text-2xl font-bold">Secure Client Portal</h1>
              <p className="text-blue-100 text-sm mt-2">Enter any ID to view the demo dashboard</p>
           </div>
           
           <form onSubmit={handleLogin} className="p-8 space-y-6">
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Project ID</label>
                 <input 
                    type="text" 
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                    placeholder="e.g. DEMO123"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    required
                 />
              </div>
              <Button 
                type="submit" 
                fullWidth 
                variant="primary" 
                className="h-12 text-base"
                disabled={isLoading}
              >
                 {isLoading ? 'Accessing Secure Data...' : 'View Demo Project'}
              </Button>
              
              <div className="text-center text-xs text-gray-400 mt-4">
                 Bank-level encryption • 24/7 Access
              </div>
           </form>
        </div>
        
        <p className="mt-8 text-sm text-gray-500 max-w-sm text-center">
           This is a simulation of the experience real Flood Doctor clients get. No actual data is stored.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
       {/* Dashboard Header */}
       <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold">
                   FD
                </div>
                <div>
                   <h1 className="font-bold text-gray-900 leading-none">Project #8842-DEMO</h1>
                   <span className="text-xs text-green-600 font-medium flex items-center gap-1 mt-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Drying Active
                   </span>
                </div>
             </div>
             <Button variant="outline" onClick={() => setIsLoggedIn(false)} className="h-9 px-4 text-sm">
                Log Out
             </Button>
          </div>
       </header>

       {/* Dashboard Stats */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-500 mb-1">Estimated Completion</div>
                <div className="text-2xl font-bold text-gray-900">Oct 24</div>
                <div className="text-xs text-green-600 font-medium mt-2">On Schedule</div>
             </div>
             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-500 mb-1">Equipment Active</div>
                <div className="text-2xl font-bold text-gray-900">12 Units</div>
                <div className="text-xs text-blue-600 font-medium mt-2">Running 24/7</div>
             </div>
             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-500 mb-1">Indoor Humidity</div>
                <div className="text-2xl font-bold text-gray-900">42%</div>
                <div className="text-xs text-green-600 font-medium mt-2">Target Reached</div>
             </div>
             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-500 mb-1">Project Manager</div>
                <div className="flex items-center gap-3 mt-1">
                   <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                   <div>
                      <div className="font-bold text-sm">Mike T.</div>
                      <a href="#" className="text-xs text-primary hover:underline">Contact</a>
                   </div>
                </div>
             </div>
          </div>

          {/* Interactive Content */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
             <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                <h2 className="font-display text-xl font-semibold text-gray-900">Project Documentation</h2>
                <p className="text-sm text-gray-500 mt-1">Click an item below to view live examples of our reporting.</p>
             </div>
             <div className="p-0">
                {/* Reusing existing component for the demo content */}
                <PortalDeliverablesInteractive />
             </div>
          </div>
       </div>
    </main>
  );
};

export default ClientPortalDemo;
