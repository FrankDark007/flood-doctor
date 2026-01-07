import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Upload, Send, CheckCircle, FileImage } from 'lucide-react';
import { CONTACT_INFO, SERVICES } from './constants';
import Input from './ui/Input';
import Button from './ui/Button';

const ContactSplit: React.FC = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you shortly.');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, files: e.target.files });
      
      // Simulate upload progress
      setUploadProgress(0);
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 15;
        });
      }, 200);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="flex flex-col lg:flex-row">
        {/* Left Column: Form */}
        <div className="w-full lg:w-3/5 p-8 lg:p-12">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Request Service</h3>
            <p className="text-gray-500 mt-2">
              Fill out the form below and our emergency team will get back to you immediately.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                name="name"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                required
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Email Address"
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Needed
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
            </div>

            <Input
              label="Property Address"
              name="address"
              placeholder="123 Main St, City, State, ZIP"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Describe Your Situation
              </label>
              <textarea
                rows={4}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Please describe the damage..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Photos
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:bg-gray-50 transition-colors">
                <div className="space-y-1 text-center w-full">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600 justify-center">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                      <span>Upload files</span>
                      <input 
                        id="file-upload" 
                        name="file-upload" 
                        type="file" 
                        multiple 
                        className="sr-only"
                        onChange={handleFileChange} 
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                  
                  {formData.files && (
                    <div className="mt-4 text-left bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700 flex items-center">
                          <FileImage className="w-4 h-4 mr-2 text-blue-500"/>
                          {formData.files.length} file(s) selected
                        </span>
                        <span className="text-xs font-semibold text-gray-500">{uploadProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${uploadProgress === 100 ? 'bg-green-500' : 'bg-blue-600'}`}
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                      {uploadProgress === 100 && (
                        <p className="text-xs text-green-600 flex items-center mt-2 animate-in fade-in slide-in-from-left-2">
                          <CheckCircle className="w-3 h-3 mr-1" /> Ready to submit
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <Button type="submit" fullWidth className="h-12 text-base">
              Submit Request <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>

        {/* Right Column: Contact Info & Map */}
        <div className="w-full lg:w-2/5 bg-gray-50 border-l border-gray-100 flex flex-col">
          <div className="p-8 lg:p-12 space-y-8 flex-1">
            <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    <Phone className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Emergency Phone</p>
                  <p className="text-lg font-bold text-gray-900">{CONTACT_INFO.phone}</p>
                  <p className="text-xs text-green-600 font-medium">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email Us</p>
                  <p className="text-lg font-semibold text-gray-900">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Our Location</p>
                  <p className="text-base text-gray-900">{CONTACT_INFO.address}</p>
                </div>
              </div>

               <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    <Clock className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Hours</p>
                  <p className="text-base text-gray-900">{CONTACT_INFO.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-64 lg:h-80 bg-gray-200 w-full relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
              <div className="text-center">
                 <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                 <span>Map Embed Placeholder</span>
              </div>
            </div>
            {/* Simulation of map content */}
            <iframe 
              title="Map"
              className="w-full h-full opacity-60 grayscale mix-blend-multiply"
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0} 
              scrolling="no" 
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=8466D%20Tyco%20Rd%2C%20Vienna%2C%20VA%2022182&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSplit;