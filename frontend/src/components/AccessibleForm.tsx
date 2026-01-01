import React, { useState, useEffect } from 'react';

// Local copy of accessibility functions since the original is in src/utils
const validateKeyboardNavigation = (focusableElements: string[]): boolean => {
  // Check that there are focusable elements
  if (focusableElements.length === 0) return false;
  
  // Check for skip links (should be first focusable element)
  const firstElement = focusableElements[0];
  const hasSkipLink = firstElement.includes('skip') || firstElement.includes('hopp');
  
  // Check for logical tab order (this would require DOM analysis in real implementation)
  // For now, we just verify there are focusable elements
  return focusableElements.length > 0;
};

interface FormField {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

interface AccessibleFormProps {
  title: string;
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => void;
  children?: React.ReactNode;
}

const AccessibleForm: React.FC<AccessibleFormProps> = ({ title, fields, onSubmit, children }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focusableElements, setFocusableElements] = useState<string[]>([]);

  useEffect(() => {
    // Initialize form data
    const initialData: Record<string, string> = {};
    fields.forEach(field => {
      initialData[field.id] = field.value;
    });
    setFormData(initialData);

    // Track focusable elements for keyboard navigation validation
    const elements: string[] = [];
    fields.forEach(field => {
      elements.push(field.id);
    });
    setFocusableElements(elements);
  }, [fields]);

  const handleFieldChange = (id: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    fields.forEach(field => {
      if (field.required && !formData[field.id]?.trim()) {
        newErrors[field.id] = `${field.label} er påkrevd`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  // Validate keyboard navigation
  useEffect(() => {
    if (focusableElements.length > 0) {
      const isKeyboardNavValid = validateKeyboardNavigation(focusableElements);
      if (!isKeyboardNavValid) {
        console.warn('Keyboard navigation validation failed');
      }
    }
  }, [focusableElements]);

  return (
    <form 
      onSubmit={handleSubmit}
      aria-label={title}
      noValidate
    >
      <h1 tabIndex={-1} className="form-title">{title}</h1>
      
      {fields.map((field) => (
        <div key={field.id} className="form-field">
          <label htmlFor={field.id} className="form-label">
            {field.label}
            {field.required && <span className="required-indicator" aria-label="Påkrevd">*</span>}
          </label>
          
          {field.type === 'textarea' ? (
            <textarea
              id={field.id}
              className={`form-input ${errors[field.id] ? 'error' : ''}`}
              value={formData[field.id] || ''}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
              placeholder={field.placeholder}
              aria-invalid={!!errors[field.id]}
              aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
            />
          ) : field.type === 'select' ? (
            <select
              id={field.id}
              className={`form-input ${errors[field.id] ? 'error' : ''}`}
              value={formData[field.id] || ''}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
              aria-invalid={!!errors[field.id]}
            >
              <option value="">Velg et alternativ</option>
              {children}
            </select>
          ) : (
            <input
              id={field.id}
              type={field.type}
              className={`form-input ${errors[field.id] ? 'error' : ''}`}
              value={formData[field.id] || ''}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
              placeholder={field.placeholder}
              aria-invalid={!!errors[field.id]}
              aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
              required={field.required}
            />
          )}
          
          {errors[field.id] && (
            <div id={`${field.id}-error`} className="error-message" role="alert">
              {errors[field.id]}
            </div>
          )}
        </div>
      ))}
      
      <div className="form-actions">
        <button 
          type="submit" 
          className="submit-button"
          aria-label="Send inn skjema"
        >
          Send inn
        </button>
      </div>
    </form>
  );
};

export default AccessibleForm;