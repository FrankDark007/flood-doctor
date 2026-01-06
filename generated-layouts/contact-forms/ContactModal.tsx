import React, { useState, useEffect } from 'react';
import { X, MessageSquareWarning, Phone, Upload, CheckCircle, Loader2 } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../constants';
import Input from './ui/Input';
import Button from './ui/Button';

const ContactModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: SERVICES[0],
    address: '',
    description: '',
    files: null as FileList | null
  });
  const [uploadProgress, setUploadProgress] = useState(0);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Modal form submitted:', formData);
    alert('Request sent!');
    setIsOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, files: e.target.files });
      setUploadProgress(0);
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 20;
        });
      }, 150);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
      <div className="text-center space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Need Immediate Assistance?</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Our team is ready to respond 24/7. Click below to start your emergency request.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button 
                onClick={() => setIsOpen(true)} 
                className="bg-red-600 hover:bg-red-700 focus:ring-red-500 shadow-lg shadow-red-200"
            >
                <MessageSquareWarning className="w-5 h-5 mr-2" />
                Start Emergency Request
            </Button>
            <Button
                variant="outline"
                onClick={() => window.location.href = `tel:${CONTACT_INFO.phone}`}
            >
                <Phone className="w-5 h-5 mr-2" />
                Call {CONTACT_INFO.phone}
            </Button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto flex flex-col animate-in fade-in zoom-in duration-200">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50 sticky top-0 z-10">
              <div>
                <h2 className="text-lg font-bold text-gray-900">New Request</h2>
                <p className="text-xs text-gray-500">We usually respond within 15 mins</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form */}
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Phone"
                    required
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <Input
                    label="Email"
                    required
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Type
                  </label>
                  <select
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                     {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                  </select>
                </div>

                <Input
                  label="Address"
                  placeholder="Property Address"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Details
                  </label>
                  <textarea
                    rows={3}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-none"
                    placeholder="Brief description of the issue..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>
                 
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Photos (Optional)</label>
                    <div className="relative">
                      <input 
                          type="file" 
                          multiple 
                          id="modal-file-upload"
                          className="hidden"
                          onChange={handleFileChange}
                      />
                      <label 
                        htmlFor="modal-file-upload" 
                        className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors group"
                      >
                        <Upload className="w-5 h-5 text-gray-400 mr-2 group-hover:text-blue-500" />
                        <span className="text-sm text-gray-600 group-hover:text-blue-600">
                          {formData.files ? `${formData.files.length} file(s) selected` : 'Click to upload photos'}
                        </span>
                      </label>
                      
                      {/* Upload Progress Overlay or Bar */}
                      {formData.files && (
                        <div className="mt-2">
                           <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                              <span>Uploading...</span>
                              <span>{uploadProgress}%</span>
                           </div>
                           <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                              <div 
                                className={`h-full transition-all duration-300 ${uploadProgress === 100 ? 'bg-green-500' : 'bg-blue-600'}`}
                                style={{ width: `${uploadProgress}%` }}
                              />
                           </div>
                           {uploadProgress === 100 && (
                             <div className="flex items-center mt-1 text-xs text-green-600 font-medium animate-in fade-in">
                               <CheckCircle className="w-3 h-3 mr-1" /> Upload Complete
                             </div>
                           )}
                        </div>
                      )}
                    </div>
                 </div>

                <div className="pt-4">
                  <Button type="submit" fullWidth className="bg-red-600 hover:bg-red-700 focus:ring-red-500">
                    Submit Request
                  </Button>
                  <p className="text-center text-xs text-gray-400 mt-3">
                    By submitting, you agree to our terms of service and privacy policy.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactModal;