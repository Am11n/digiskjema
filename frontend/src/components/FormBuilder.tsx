import React, { useState } from 'react';
import AccessibleForm from './AccessibleForm';

interface FormField {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

interface FormBuilderProps {
  onSave: (config: any[]) => void;
}

const FormBuilder: React.FC<FormBuilderProps> = ({ onSave }) => {
  const [fields, setFields] = useState<FormField[]>([]);
  const [selectedField, setSelectedField] = useState<FormField | null>(null);
  const [formTitle, setFormTitle] = useState('Nytt skjema');
  const [activeTab, setActiveTab] = useState<'innhold' | 'logikk' | 'design' | 'tilgang' | 'publisering'>('innhold');

  const availableFieldTypes = [
    { type: 'text', label: 'Tekstfelt', icon: '📝' },
    { type: 'textarea', label: 'Tekstområde', icon: '📄' },
    { type: 'select', label: 'Nedtrekksliste', icon: '🔽' },
    { type: 'checkbox', label: 'Avkryssningsboks', icon: '☑️' },
    { type: 'radio', label: 'Radioknapp', icon: '🔘' },
    { type: 'date', label: 'Dato', icon: '📅' },
    { type: 'number', label: 'Nummer', icon: '🔢' },
    { type: 'email', label: 'E-post', icon: '✉️' },
    { type: 'file', label: 'Filopplasting', icon: '📁' },
  ];

  const addField = (type: string) => {
    const newField: FormField = {
      id: `field-${Date.now()}`,
      type,
      label: `Nytt ${type} felt`,
      required: false,
      placeholder: '',
      value: '',
      onChange: () => {}
    };
    setFields([...fields, newField]);
  };

  const updateField = (id: string, updates: Partial<FormField>) => {
    setFields(fields.map(field => 
      field.id === id ? { ...field, ...updates } : field
    ));
  };

  const removeField = (id: string) => {
    setFields(fields.filter(field => field.id !== id));
    if (selectedField && selectedField.id === id) {
      setSelectedField(null);
    }
  };

  const moveField = (id: string, direction: 'up' | 'down') => {
    const index = fields.findIndex(f => f.id === id);
    if (index === -1) return;

    if (direction === 'up' && index > 0) {
      const newFields = [...fields];
      [newFields[index - 1], newFields[index]] = [newFields[index], newFields[index - 1]];
      setFields(newFields);
    } else if (direction === 'down' && index < fields.length - 1) {
      const newFields = [...fields];
      [newFields[index + 1], newFields[index]] = [newFields[index], newFields[index + 1]];
      setFields(newFields);
    }
  };

  const handleSave = () => {
    // Extract only the configuration part for saving, not the values
    const config = fields.map(field => ({
      id: field.id,
      type: field.type,
      label: field.label,
      required: field.required,
      placeholder: field.placeholder
    }));
    onSave(config);
  };

  return (
    <div className="form-builder">
      {/* Tabs for different sections */}
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'innhold' ? 'active' : ''}`}
          onClick={() => setActiveTab('innhold')}
        >
          Innhold
        </button>
        <button 
          className={`tab ${activeTab === 'logikk' ? 'active' : ''}`}
          onClick={() => setActiveTab('logikk')}
        >
          Logikk
        </button>
        <button 
          className={`tab ${activeTab === 'design' ? 'active' : ''}`}
          onClick={() => setActiveTab('design')}
        >
          Design
        </button>
        <button 
          className={`tab ${activeTab === 'tilgang' ? 'active' : ''}`}
          onClick={() => setActiveTab('tilgang')}
        >
          Tilgang
        </button>
        <button 
          className={`tab ${activeTab === 'publisering' ? 'active' : ''}`}
          onClick={() => setActiveTab('publisering')}
        >
          Publisering
        </button>
      </div>

      <div className="form-builder-layout">
        {/* Left Panel - Component Library */}
        <div className="panel left-panel">
          <h3>Komponentbibliotek</h3>
          <div className="field-types">
            {availableFieldTypes.map((fieldType, index) => (
              <div 
                key={index}
                className="field-type-item"
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData('fieldType', fieldType.type);
                }}
                onClick={() => addField(fieldType.type)}
              >
                <span className="field-icon">{fieldType.icon}</span>
                <span>{fieldType.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center Panel - Form Canvas */}
        <div className="panel center-panel">
          <div className="form-preview-header">
            <input
              type="text"
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
              className="form-title-input"
              placeholder="Skriv inn skjemanavn"
            />
          </div>
          
          <div className="form-canvas">
            {fields.length === 0 ? (
              <div className="empty-state">
                <p>Dra og slipp felt fra venstre panel for å begynne å bygge skjemaet</p>
              </div>
            ) : (
              <div className="form-fields">
                {fields.map((field, index) => (
                  <div 
                    key={field.id}
                    className={`form-field-item ${selectedField?.id === field.id ? 'selected' : ''}`}
                    onClick={() => setSelectedField(field)}
                  >
                    <div className="field-controls">
                      <button 
                        className="field-move-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          moveField(field.id, 'up');
                        }}
                        disabled={index === 0}
                      >
                        ↑
                      </button>
                      <button 
                        className="field-move-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          moveField(field.id, 'down');
                        }}
                        disabled={index === fields.length - 1}
                      >
                        ↓
                      </button>
                      <button 
                        className="field-delete-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeField(field.id);
                        }}
                      >
                        ×
                      </button>
                    </div>
                    
                    <div className="field-preview">
                      <label>
                        {field.label} {field.required && <span className="required-indicator">*</span>}
                      </label>
                      {field.type === 'text' && (
                        <input
                          type="text"
                          placeholder={field.placeholder}
                          className="ds-input"
                        />
                      )}
                      {field.type === 'textarea' && (
                        <textarea
                          placeholder={field.placeholder}
                          className="ds-input"
                        />
                      )}
                      {field.type === 'select' && (
                        <select className="ds-input">
                          <option>Velg et alternativ</option>
                        </select>
                      )}
                      {field.type === 'checkbox' && (
                        <label className="checkbox-label">
                          <input type="checkbox" /> {field.label}
                        </label>
                      )}
                      {field.type === 'radio' && (
                        <label className="radio-label">
                          <input type="radio" /> {field.label}
                        </label>
                      )}
                      {field.type === 'date' && (
                        <input
                          type="date"
                          className="ds-input"
                        />
                      )}
                      {field.type === 'number' && (
                        <input
                          type="number"
                          placeholder={field.placeholder}
                          className="ds-input"
                        />
                      )}
                      {field.type === 'email' && (
                        <input
                          type="email"
                          placeholder={field.placeholder}
                          className="ds-input"
                        />
                      )}
                      {field.type === 'file' && (
                        <input
                          type="file"
                          className="ds-input"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Field Properties */}
        <div className="panel right-panel">
          <h3>Egenskaper</h3>
          {selectedField ? (
            <div className="field-properties">
              <div className="form-group">
                <label>Etikett</label>
                <input
                  type="text"
                  value={selectedField.label}
                  onChange={(e) => updateField(selectedField.id, { label: e.target.value })}
                  className="ds-input"
                />
              </div>
              
              <div className="form-group">
                <label>Plassholder</label>
                <input
                  type="text"
                  value={selectedField.placeholder || ''}
                  onChange={(e) => updateField(selectedField.id, { placeholder: e.target.value })}
                  className="ds-input"
                />
              </div>
              
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedField.required}
                    onChange={(e) => updateField(selectedField.id, { required: e.target.checked })}
                  />
                  Obligatorisk
                </label>
              </div>
            </div>
          ) : (
            <div className="no-selection">
              <p>Velg et felt for å redigere egenskaper</p>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="form-actions">
        <button className="secondary-button" onClick={() => setFields([])}>
          Nullstill
        </button>
        <button className="primary-button" onClick={handleSave}>
          Publiser
        </button>
      </div>
    </div>
  );
};

export default FormBuilder;