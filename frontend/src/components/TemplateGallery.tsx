import React, { useState } from 'react';

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  language: string;
  lastUsed: string;
  usageCount: number;
}

const TemplateGallery: React.FC = () => {
  const [templates, setTemplates] = useState<Template[]>([
    {
      id: '1',
      name: 'Kontaktskjema',
      description: 'Enkelt skjema for å motta kontaktopplysninger fra brukere',
      category: 'Generelt',
      language: 'nb',
      lastUsed: '2023-06-15',
      usageCount: 42
    },
    {
      id: '2',
      name: 'Bestillingsskjema',
      description: 'Skjema for bestilling av tjenester og produkter',
      category: 'Økonomi',
      language: 'nb',
      lastUsed: '2023-06-10',
      usageCount: 28
    },
    {
      id: '3',
      name: 'Tilbakemeldingsskjema',
      description: 'Skjema for å samle inn tilbakemeldinger fra kunder',
      category: 'Kundeservice',
      language: 'nb',
      lastUsed: '2023-06-05',
      usageCount: 35
    },
    {
      id: '4',
      name: 'Anmeldelsesskjema',
      description: 'Skjema for innsamling av kundebedømmelser',
      category: 'Evaluering',
      language: 'nb',
      lastUsed: '2023-05-20',
      usageCount: 19
    },
    {
      id: '5',
      name: 'Registreringsskjema',
      description: 'Skjema for registrering av nye brukere',
      category: 'Generelt',
      language: 'nn',
      lastUsed: '2023-06-12',
      usageCount: 56
    },
    {
      id: '6',
      name: 'Søknadsskjema',
      description: 'Skjema for innsending av offentlige søknader',
      category: 'Offentlig',
      language: 'nb',
      lastUsed: '2023-06-08',
      usageCount: 31
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('Alle');
  const [filterLanguage, setFilterLanguage] = useState('Alle');
  const [filterLastUsed, setFilterLastUsed] = useState('Alle');

  const categories = ['Alle', 'Generelt', 'Økonomi', 'Kundeservice', 'Evaluering', 'Offentlig'];
  const languages = ['Alle', 'nb', 'nn', 'en'];
  const lastUsedOptions = ['Alle', 'Siste 7 dager', 'Siste 30 dager', 'Siste 90 dager'];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'Alle' || template.category === filterCategory;
    const matchesLanguage = filterLanguage === 'Alle' || template.language === filterLanguage;
    
    return matchesSearch && matchesCategory && matchesLanguage;
  });

  return (
    <div className="template-gallery">
      <div className="card">
        <div className="card-header">
          <h3>Malmaker</h3>
        </div>
        <div className="card-content">
          <div className="form-controls">
            <div className="search-filter">
              <input
                type="text"
                placeholder="Søk etter malnavn eller beskrivelse..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="ds-input"
              />
            </div>
            
            <div className="filter-row">
              <div className="ds-combobox">
                <select 
                  value={filterCategory} 
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="ds-input"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div className="ds-combobox">
                <select 
                  value={filterLanguage} 
                  onChange={(e) => setFilterLanguage(e.target.value)}
                  className="ds-input"
                >
                  {languages.map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>
              
              <div className="ds-combobox">
                <select 
                  value={filterLastUsed} 
                  onChange={(e) => setFilterLastUsed(e.target.value)}
                  className="ds-input"
                >
                  {lastUsedOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {filteredTemplates.length > 0 ? (
            <div className="template-grid">
              {filteredTemplates.map(template => (
                <div key={template.id} className="template-card">
                  <div className="template-header">
                    <h4>{template.name}</h4>
                    <div className="template-tags">
                      <span className="status-badge">{template.category}</span>
                      <span className="status-badge">{template.language}</span>
                    </div>
                  </div>
                  <p className="template-description">{template.description}</p>
                  <div className="template-meta">
                    <span>Sist brukt: {template.lastUsed}</span>
                    <span>Brukt {template.usageCount} ganger</span>
                  </div>
                  <div className="template-actions">
                    <button className="primary-button small">Bruk mal</button>
                    <button className="secondary-button small">Forhåndsvis</button>
                    <button className="secondary-button small">Rediger</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>Ingen maler funnet</h3>
              <p>Prøv å endre søke- eller filterkriterier</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplateGallery;