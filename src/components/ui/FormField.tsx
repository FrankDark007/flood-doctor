import React, { useState, forwardRef } from 'react';

// Google Material Design 3 styled form fields
// Features: Floating labels, outlined variant, error states, helper text

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  options: { value: string; label: string }[];
}

// Text Input with floating label
export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helperText,
  fullWidth = true,
  className = '',
  id,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = props.value !== undefined && props.value !== '';
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

  const isActive = isFocused || hasValue;

  return (
    <div className={`relative ${fullWidth ? 'w-full' : ''} ${className}`}>
      <div className="relative">
        <input
          ref={ref}
          id={inputId}
          {...props}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={`
            peer w-full px-4 pt-6 pb-2
            text-base text-[#202124]
            bg-white border rounded-lg
            outline-none transition-all duration-200
            placeholder:text-transparent
            ${error
              ? 'border-[#d93025] focus:border-[#d93025] focus:ring-1 focus:ring-[#d93025]'
              : 'border-[#dadce0] focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8]'
            }
          `}
          placeholder={label}
        />
        <label
          htmlFor={inputId}
          className={`
            absolute left-4 transition-all duration-200 pointer-events-none
            ${isActive
              ? 'top-2 text-xs'
              : 'top-1/2 -translate-y-1/2 text-base'
            }
            ${error
              ? 'text-[#d93025]'
              : isFocused
                ? 'text-[#1a73e8]'
                : 'text-[#5f6368]'
            }
          `}
        >
          {label}
        </label>
      </div>

      {(error || helperText) && (
        <p className={`mt-1 text-xs ${error ? 'text-[#d93025]' : 'text-[#5f6368]'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

// Text Area with floating label
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  label,
  error,
  helperText,
  fullWidth = true,
  className = '',
  id,
  rows = 4,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = props.value !== undefined && props.value !== '';
  const inputId = id || `textarea-${label.toLowerCase().replace(/\s+/g, '-')}`;

  const isActive = isFocused || hasValue;

  return (
    <div className={`relative ${fullWidth ? 'w-full' : ''} ${className}`}>
      <div className="relative">
        <textarea
          ref={ref}
          id={inputId}
          rows={rows}
          {...props}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={`
            peer w-full px-4 pt-6 pb-2
            text-base text-[#202124]
            bg-white border rounded-lg
            outline-none transition-all duration-200 resize-none
            placeholder:text-transparent
            ${error
              ? 'border-[#d93025] focus:border-[#d93025] focus:ring-1 focus:ring-[#d93025]'
              : 'border-[#dadce0] focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8]'
            }
          `}
          placeholder={label}
        />
        <label
          htmlFor={inputId}
          className={`
            absolute left-4 transition-all duration-200 pointer-events-none
            ${isActive
              ? 'top-2 text-xs'
              : 'top-4 text-base'
            }
            ${error
              ? 'text-[#d93025]'
              : isFocused
                ? 'text-[#1a73e8]'
                : 'text-[#5f6368]'
            }
          `}
        >
          {label}
        </label>
      </div>

      {(error || helperText) && (
        <p className={`mt-1 text-xs ${error ? 'text-[#d93025]' : 'text-[#5f6368]'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

TextArea.displayName = 'TextArea';

// Select with floating label
export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  label,
  error,
  helperText,
  fullWidth = true,
  className = '',
  id,
  options,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = props.value !== undefined && props.value !== '';
  const inputId = id || `select-${label.toLowerCase().replace(/\s+/g, '-')}`;

  const isActive = isFocused || hasValue;

  return (
    <div className={`relative ${fullWidth ? 'w-full' : ''} ${className}`}>
      <div className="relative">
        <select
          ref={ref}
          id={inputId}
          {...props}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={`
            peer w-full px-4 pt-6 pb-2
            text-base text-[#202124]
            bg-white border rounded-lg
            outline-none transition-all duration-200
            appearance-none cursor-pointer
            ${error
              ? 'border-[#d93025] focus:border-[#d93025] focus:ring-1 focus:ring-[#d93025]'
              : 'border-[#dadce0] focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8]'
            }
          `}
        >
          <option value="" disabled hidden></option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Dropdown Arrow */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg width="10" height="5" viewBox="0 0 10 5" fill="currentColor" className="text-[#5f6368]">
            <path d="M0 0l5 5 5-5z" />
          </svg>
        </div>

        <label
          htmlFor={inputId}
          className={`
            absolute left-4 transition-all duration-200 pointer-events-none
            ${isActive
              ? 'top-2 text-xs'
              : 'top-1/2 -translate-y-1/2 text-base'
            }
            ${error
              ? 'text-[#d93025]'
              : isFocused
                ? 'text-[#1a73e8]'
                : 'text-[#5f6368]'
            }
          `}
        >
          {label}
        </label>
      </div>

      {(error || helperText) && (
        <p className={`mt-1 text-xs ${error ? 'text-[#d93025]' : 'text-[#5f6368]'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

// Checkbox - Google style
interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  error,
  className = '',
  id,
  ...props
}, ref) => {
  const inputId = id || `checkbox-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className={className}>
      <label htmlFor={inputId} className="flex items-start gap-3 cursor-pointer group">
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            {...props}
            className="peer sr-only"
          />
          <div className={`
            w-5 h-5 border-2 rounded transition-all duration-200
            peer-checked:bg-[#1a73e8] peer-checked:border-[#1a73e8]
            peer-focus:ring-2 peer-focus:ring-[#1a73e8]/30
            ${error ? 'border-[#d93025]' : 'border-[#5f6368] group-hover:border-[#202124]'}
          `}>
            <svg
              className="w-full h-full text-white opacity-0 peer-checked:opacity-100 transition-opacity"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          {/* Checkmark overlay for checked state */}
          <svg
            className="absolute inset-0 w-full h-full text-white opacity-0 peer-checked:opacity-100 transition-opacity p-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <span className={`text-sm ${error ? 'text-[#d93025]' : 'text-[#202124]'}`}>
          {label}
        </span>
      </label>
      {error && (
        <p className="mt-1 text-xs text-[#d93025] ml-8">{error}</p>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

// Radio Button - Google style
interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  error?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({
  label,
  error,
  className = '',
  id,
  ...props
}, ref) => {
  const inputId = id || `radio-${label.toLowerCase().replace(/\s+/g, '-')}-${props.value}`;

  return (
    <div className={className}>
      <label htmlFor={inputId} className="flex items-center gap-3 cursor-pointer group">
        <div className="relative flex-shrink-0">
          <input
            ref={ref}
            type="radio"
            id={inputId}
            {...props}
            className="peer sr-only"
          />
          <div className={`
            w-5 h-5 border-2 rounded-full transition-all duration-200
            peer-checked:border-[#1a73e8]
            peer-focus:ring-2 peer-focus:ring-[#1a73e8]/30
            ${error ? 'border-[#d93025]' : 'border-[#5f6368] group-hover:border-[#202124]'}
          `}>
            <div className="
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-2.5 h-2.5 rounded-full bg-[#1a73e8]
              opacity-0 scale-0 peer-checked:opacity-100 peer-checked:scale-100
              transition-all duration-200
            " />
          </div>
          {/* Inner dot for checked state */}
          <div className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-2.5 h-2.5 rounded-full bg-[#1a73e8]
            opacity-0 scale-0 peer-checked:opacity-100 peer-checked:scale-100
            transition-all duration-200
          " />
        </div>
        <span className={`text-sm ${error ? 'text-[#d93025]' : 'text-[#202124]'}`}>
          {label}
        </span>
      </label>
    </div>
  );
});

Radio.displayName = 'Radio';

export default { Input, TextArea, Select, Checkbox, Radio };
