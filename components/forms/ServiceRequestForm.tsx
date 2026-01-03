import { useState, FormEvent, ChangeEvent } from 'react';
import { useFranchiseContext } from '@/contexts/FranchiseContext';

const API_URL = import.meta.env.VITE_API_URL || 'https://api.flood.doctor';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  phone: string;
  email: string;
  issue: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

const phonePattern = /^[\d\s\-\(\)\+]+$/;

export function ServiceRequestForm() {
  const franchise = useFranchiseContext();

  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    issue: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phonePattern.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormState('submitting');
    setErrorMessage('');

    try {
      const payload = {
        ...formData,
        source: franchise.id,
        franchiseId: franchise.id,
        franchiseName: franchise.name,
        franchisePhone: franchise.phone,
        submittedAt: new Date().toISOString(),
        pageUrl: typeof window !== 'undefined' ? window.location.href : ''
      };

      const response = await fetch(`${API_URL}/api/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Failed to submit request');
      }

      setFormState('success');
    } catch (error) {
      setFormState('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred. Please try again.'
      );
    }
  };

  const resetForm = () => {
    setFormState('idle');
    setFormData({ name: '', phone: '', email: '', issue: '' });
    setErrors({});
    setErrorMessage('');
  };

  // Success state
  if (formState === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center shadow-xl">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Request Submitted Successfully!
        </h3>
        <p className="text-green-700 mb-4">
          Our team will contact you shortly. For immediate assistance, call us directly.
        </p>
        <a
          href={`tel:${franchise.phone.replace(/\D/g, '')}`}
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Call {franchise.phone}
        </a>
        <button
          onClick={resetForm}
          className="block w-full mt-4 text-green-600 hover:text-green-700 text-sm"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
        Request Service in {franchise.city}
      </h2>

      {formState === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
          {errorMessage || 'Something went wrong. Please try again or call us directly.'}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Hidden source field */}
        <input type="hidden" name="source" value={franchise.id} />

        {/* Name field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Phone field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="[\d\s\-\(\)\+]+"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Email field (optional) */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-gray-400">(optional)</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="your@email.com"
          />
        </div>

        {/* Issue textarea (optional) */}
        <div>
          <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">
            Describe your issue <span className="text-gray-400">(optional)</span>
          </label>
          <textarea
            id="issue"
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
            placeholder="Tell us about the water damage situation..."
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={formState === 'submitting'}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          {formState === 'submitting' ? (
            <>
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Submitting...
            </>
          ) : (
            `Dispatch Truck to ${franchise.city}`
          )}
        </button>
      </form>

      {/* Footer with direct call */}
      <div className="mt-6 pt-6 border-t border-gray-200 text-center">
        <p className="text-gray-600 mb-2">Or call directly:</p>
        <a
          href={`tel:${franchise.phone.replace(/\D/g, '')}`}
          className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
        >
          {franchise.phone}
        </a>
      </div>
    </div>
  );
}

export default ServiceRequestForm;
