import React, { useState } from 'react';

interface FormFieldConfig {
  id: string;
  type: 'text' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'date' | 'number';
  label: string;
  required: boolean;
  placeholder?: string;
  options?: string[];
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
  };
}

interface FormBuilderProps {
  onSave: (formConfig: FormFieldConfig[]) => void;
}

const FormBuilder: React.FC<FormBuilderProps> = ({ onSave }) => {
  const [fields, setFields] = useState<FormFieldConfig[]>([
    {
      id: 'field-1',
      type: 'text',
      label: 'Navn',
      required: true,
      placeholder: 'Skriv inn navn'
    }
  ]);
  const [previewMode, setPreviewMode] = useState(false);

  const addField = (type: FormFieldConfig['type']) => {
    const newField: FormFieldConfig = {
      id: `field-${Date.now()}`,
      type,
      label: `Nytt ${type} felt`,
      required: false
    };
    setFields([...fields, newField]);
  };

  const updateField = (id: string, updates: Partial<FormFieldConfig>) => {
    setFields(fields.map(field => 
      field.id === id ? { ...field, ...updates } : field
    ));
  };

  const removeField = (id: string) => {
    setFields(fields.filter(field => field.id !== id));
  };

  const moveField = (id: string, direction: 'up' | 'down') => {
    const index = fields.findIndex(f => f.id === id);
    if (index === -1) return;

    if (direction === 'up' && index > 0) {
      const newFields = [...fields];
      [newFields[index], newFields[index - 1]] = [newFields[index - 1], newFields[index]];
      setFields(newFields);
    } else if (direction === 'down' && index < fields.length - 1) {
      const newFields = [...fields];
      [newFields[index], newFields[index + 1]] = [newFields[index + 1], newFields[index]];
      setFields(newFields);
    }
  };

  const handleSave = () => {
    onSave(fields);
  };

  if (previewMode) {
    return (
      <div className="form-builder-preview">
        <h2>Forhåndsvisning</h2>
        <div className="preview-container">
          {fields.map((field) => (
            <div key={field.id} className="preview-field">
              <label>
                {field.label}
                {field.required && <span className="required">*</span>}
              </label>
              
              {field.type === 'text' || field.type === 'number' || field.type === 'date' ? (
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  disabled
                  aria-label={field.label}
                />
              ) : field.type === 'textarea' ? (
                <textarea 
                  placeholder={field.placeholder} 
                  disabled 
                  aria-label={field.label}
                />
              ) : field.type === 'select' ? (
                <select disabled aria-label={field.label}>
                  <option>Velg et alternativ</option>
                  {field.options?.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
              ) : field.type === 'checkbox' || field.type === 'radio' ? (
                <div>
                  {field.options?.map((option, idx) => (
                    <div key={idx}>
                      <input 
                        type={field.type} 
                        id={`${field.id}-${idx}`} 
                        disabled 
                        aria-label={option}
                      />
                      <label htmlFor={`${field.id}-${idx}`}>{option}</label>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="preview-actions">
          <button onClick={() => setPreviewMode(false)}>Tilbake til redigering</button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-builder">
      <h2>Skjema bygger</h2>
      
      <div className="form-builder-toolbar">
        <h3>Legg til felt</h3>
        <div className="field-types">
          <button type="button" onClick={() => addField('text')}>Tekst</button>
          <button type="button" onClick={() => addField('textarea')}>Tekstområde</button>
          <button type="button" onClick={() => addField('select')}>Valgliste</button>
          <button type="button" onClick={() => addField('checkbox')}>Avkryssningsboks</button>
          <button type="button" onClick={() => addField('radio')}>Radioknapp</button>
          <button type="button" onClick={() => addField('date')}>Dato</button>
          <button type="button" onClick={() => addField('number')}>Nummer</button>
        </div>
      </div>
      
      <div className="form-fields">
        <h3>Felter</h3>
        {fields.map((field, index) => (
          <div key={field.id} className="form-field-editor">
            <div className="field-header">
              <h4>Felt {index + 1}: {field.label}</h4>
              <div className="field-actions">
                <button 
                  type="button" 
                  onClick={() => moveField(field.id, 'up')}
                  disabled={index === 0}
                  aria-label="Flytt felt opp"
                >
                  ↑
                </button>
                <button 
                  type="button" 
                  onClick={() => moveField(field.id, 'down')}
                  disabled={index === fields.length - 1}
                  aria-label="Flytt felt ned"
                >
                  ↓
                </button>
                <button 
                  type="button" 
                  onClick={() => removeField(field.id)}
                  aria-label="Slett felt"
                >
                  Slett
                </button>
              </div>
            </div>
            
            <div className="field-config">
              <div className="config-row">
                <label>
                  Etikett:
                  <input
                    type="text"
                    value={field.label}
                    onChange={(e) => updateField(field.id, { label: e.target.value })}
                  />
                </label>
              </div>
              
              <div className="config-row">
                <label>
                  Type:
                  <select
                    value={field.type}
                    onChange={(e) => updateField(field.id, { type: e.target.value as any })}
                  >
                    <option value="text">Tekst</option>
                    <option value="textarea">Tekstområde</option>
                    <option value="select">Valgliste</option>
                    <option value="checkbox">Avkryssningsboks</option>
                    <option value="radio">Radioknapp</option>
                    <option value="date">Dato</option>
                    <option value="number">Nummer</option>
                  </select>
                </label>
              </div>
              
              <div className="config-row">
                <label>
                  <input
                    type="checkbox"
                    checked={field.required}
                    onChange={(e) => updateField(field.id, { required: e.target.checked })}
                  />
                  Påkrevd
                </label>
              </div>
              
              {field.type === 'select' && (
                <div className="config-row">
                  <label>
                    Alternativer (en per linje):
                    <textarea
                      value={field.options?.join('\n') || ''}
                      onChange={(e) => updateField(field.id, { 
                        options: e.target.value.split('\n').filter(opt => opt.trim() !== '') 
                      })}
                      placeholder="Alternativ 1&#10;Alternativ 2&#10;..."
                    />
                  </label>
                </div>
              )}
              
              <div className="config-row">
                <label>
                  Plassholder:
                  <input
                    type="text"
                    value={field.placeholder || ''}
                    onChange={(e) => updateField(field.id, { placeholder: e.target.value })}
                  />
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="form-builder-actions">
        <button type="button" onClick={() => setPreviewMode(true)}>Forhåndsvis</button>
        <button type="button" onClick={handleSave}>Lagre skjema</button>
      </div>
    </div>
  );
};

export default FormBuilder;