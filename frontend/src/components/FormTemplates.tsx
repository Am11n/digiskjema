import React, { useState, useEffect } from 'react';

interface FormTemplate {
  id: string;
  title: string;
  description: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  usageCount: number;
  isShared: boolean;
}

interface FormTemplatesProps {
  onSelectTemplate: (template: FormTemplate) => void;
  onCreateNew: () => void;
}

const FormTemplates: React.FC<FormTemplatesProps> = ({ onSelectTemplate, onCreateNew }) => {
  const [templates, setTemplates] = useState<FormTemplate[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  // Mock data initialization
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockTemplates: FormTemplate[] = [
        {
          id: 'tmpl-1',
          title: 'Kontaktskjema',
          description: 'Standard kontaktskjema for kommunikasjon',
          category: 'generelt',
          createdAt: '2024-01-10',
          updatedAt: '2024-01-10',
          usageCount: 124,
          isShared: true
        },
        {
          id: 'tmpl-2',
          title: 'Tilbakemeldingsskjema',
          description: 'Skjema for å samle inn tilbakemeldinger',
          category: 'evaluering',
          createdAt: '2024-01-12',
          updatedAt: '2024-01-12',
          usageCount: 89,
          isShared: true
        },
        {
          id: 'tmpl-3',
          title: 'Bestillingsskjema',
          description: 'Skjema for interne bestillinger',
          category: 'administrasjon',
          createdAt: '2024-01-08',
          updatedAt: '2024-01-14',
          usageCount: 42,
          isShared: false
        },
        {
          id: 'tmpl-4',
          title: 'Søknadsskjema',
          description: 'Generelt søknadsskjema',
          category: 'søknad',
          createdAt: '2024-01-05',
          updatedAt: '2024-01-05',
          usageCount: 156,
          isShared: true
        }
      ];
      setTemplates(mockTemplates);
      setLoading(false);
    }, 800);
  }, []);

  const categories = ['all', 'generelt', 'evaluering', 'administrasjon', 'søknad'];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="form-templates">
        <h2>Laster skjemamaler...</h2>
      </div>
    );
  }

  return (
    <div className="form-templates">
      <div className="templates-header">
        <h2>Skjemamaler</h2>
        <button className="create-new-button" onClick={onCreateNew}>
          Lag nytt skjema
        </button>
      </div>
      
      <div className="templates-filters">
        <input
          type="text"
          placeholder="Søk i maler..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          aria-label="Søk i skjemamaler"
        />
        
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-filter"
          aria-label="Filtrer etter kategori"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'Alle kategorier' : 
               category === 'generelt' ? 'Generelt' :
               category === 'evaluering' ? 'Evaluering' :
               category === 'administrasjon' ? 'Administrasjon' : 'Søknad'}
            </option>
          ))}
        </select>
      </div>
      
      <div className="templates-grid">
        {filteredTemplates.map(template => (
          <div key={template.id} className="template-card">
            <div className="template-header">
              <h3>{template.title}</h3>
              <span className={`template-badge ${template.isShared ? 'shared' : 'private'}`}>
                {template.isShared ? 'Delt' : 'Privat'}
              </span>
            </div>
            
            <p className="template-description">{template.description}</p>
            
            <div className="template-meta">
              <span className="category-tag">{template.category}</span>
              <span className="usage-count">Brukt {template.usageCount} ganger</span>
            </div>
            
            <div className="template-actions">
              <button 
                className="use-template-button"
                onClick={() => onSelectTemplate(template)}
              >
                Bruk mal
              </button>
              <button className="view-details-button">
                Vis detaljer
              </button>
            </div>
          </div>
        ))}
        
        {filteredTemplates.length === 0 && (
          <div className="no-templates">
            <p>Ingen maler funnet for de valgte kriteriene</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormTemplates;