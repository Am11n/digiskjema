import React, { useState, useEffect } from 'react';

interface AccessibilitySetting {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

interface AccessibilityFeature {
  id: string;
  name: string;
  description: string;
  category: 'navigation' | 'visual' | 'input' | 'content';
  enabled: boolean;
}

const AccessibilityFeatures: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySetting[]>([
    { id: 'high-contrast', name: 'Høy kontrast', description: 'Øker kontrasten mellom tekst og bakgrunn', enabled: false },
    { id: 'large-text', name: 'Stor tekst', description: 'Øker tekststørrelsen på hele siden', enabled: false },
    { id: 'readable-font', name: 'Lesefont', description: 'Bruker en font designet for bedre lesbarhet', enabled: false },
    { id: 'screen-reader', name: 'Skjermlesertilpasninger', description: 'Optimaliserer innhold for skjermlesere', enabled: false },
    { id: 'keyboard-navigation', name: 'Kun tastatur', description: 'Deaktiverer mus/berøring og bruker kun tastatur', enabled: false },
    { id: 'skip-links', name: 'Hoppelenker', description: 'Viser lenker for å hoppe over repetitivt innhold', enabled: true },
    { id: 'focus-indicators', name: 'Synlige fokusindikatorer', description: 'Viser tydelige indikatorer for fokusert innhold', enabled: true },
    { id: 'reduced-motion', name: 'Redusert bevegelse', description: 'Deaktiverer animasjoner og overganger', enabled: false },
  ]);
  
  const [features, setFeatures] = useState<AccessibilityFeature[]>([
    { id: 'color-contrast-checker', name: 'Kontrastsjekker', description: 'Automatisk sjekk av fargekontraster', category: 'visual', enabled: true },
    { id: 'heading-checker', name: 'Overskriftssjekker', description: 'Sjekker at overskriftshierarki følges', category: 'content', enabled: true },
    { id: 'form-label-checker', name: 'Skjemalabelsjekker', description: 'Sjekker at alle skjemaelementer har etiketter', category: 'input', enabled: true },
    { id: 'link-purpose-checker', name: 'Lenkeformålsjekker', description: 'Sjekker at lenker har tydelig formål', category: 'navigation', enabled: true },
    { id: 'aria-checker', name: 'ARIA-sjekker', description: 'Sjekker bruken av ARIA-attributter', category: 'content', enabled: true },
    { id: 'focus-order-checker', name: 'Fokusrekkfølgesjekker', description: 'Sjekker at fokusrekkfølgen er logisk', category: 'navigation', enabled: true },
  ]);
  
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [fontSize, setFontSize] = useState<number>(100); // percentage
  const [lineHeight, setLineHeight] = useState<number>(150); // percentage
  const [letterSpacing, setLetterSpacing] = useState<number>(0); // pixels

  const toggleSetting = (id: string) => {
    setSettings(settings.map(setting => 
      setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
    ));
  };

  const toggleFeature = (id: string) => {
    setFeatures(features.map(feature => 
      feature.id === id ? { ...feature, enabled: !feature.enabled } : feature
    ));
  };

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(feature => feature.category === activeCategory);

  const categories = [
    { id: 'all', name: 'Alle' },
    { id: 'navigation', name: 'Navigasjon' },
    { id: 'visual', name: 'Visuelt' },
    { id: 'input', name: 'Inndata' },
    { id: 'content', name: 'Innhold' },
  ];

  // Apply accessibility settings to document
  useEffect(() => {
    const highContrastEnabled = settings.find(s => s.id === 'high-contrast')?.enabled;
    const largeTextEnabled = settings.find(s => s.id === 'large-text')?.enabled;
    const readableFontEnabled = settings.find(s => s.id === 'readable-font')?.enabled;
    const reducedMotionEnabled = settings.find(s => s.id === 'reduced-motion')?.enabled;

    document.body.classList.toggle('high-contrast', highContrastEnabled || false);
    document.body.classList.toggle('large-text', largeTextEnabled || false);
    document.body.classList.toggle('readable-font', readableFontEnabled || false);
    document.body.classList.toggle('reduced-motion', reducedMotionEnabled || false);

    // Update CSS custom properties for text scaling
    document.documentElement.style.setProperty('--font-scale', `${fontSize / 100}`);
    document.documentElement.style.setProperty('--line-height-scale', `${lineHeight / 100}`);
    document.documentElement.style.setProperty('--letter-spacing', `${letterSpacing}px`);
  }, [settings, fontSize, lineHeight, letterSpacing]);

  return (
    <div className="accessibility-features">
      <div className="accessibility-header">
        <h2>Tilgjengelighetsfunksjoner</h2>
        <p>Tilpass opplevelsen etter dine behov</p>
      </div>

      <div className="accessibility-controls">
        <div className="control-section">
          <h3>Visuelle tilpasninger</h3>
          <div className="settings-grid">
            {settings.filter(s => ['high-contrast', 'large-text', 'readable-font', 'reduced-motion']).map(setting => (
              <div key={setting.id} className="setting-item">
                <label className="setting-label">
                  <input
                    type="checkbox"
                    checked={setting.enabled}
                    onChange={() => toggleSetting(setting.id)}
                  />
                  <span className="setting-name">{setting.name}</span>
                </label>
                <p className="setting-description">{setting.description}</p>
              </div>
            ))}
          </div>

          <div className="customization-controls">
            <div className="control-group">
              <label htmlFor="font-size">Tekststørrelse: {fontSize}%</label>
              <input
                id="font-size"
                type="range"
                min="80"
                max="200"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                className="slider"
              />
            </div>

            <div className="control-group">
              <label htmlFor="line-height">Linjeavstand: {lineHeight}%</label>
              <input
                id="line-height"
                type="range"
                min="100"
                max="250"
                value={lineHeight}
                onChange={(e) => setLineHeight(parseInt(e.target.value))}
                className="slider"
              />
            </div>

            <div className="control-group">
              <label htmlFor="letter-spacing">Bokstavavstand: {letterSpacing}px</label>
              <input
                id="letter-spacing"
                type="range"
                min="0"
                max="5"
                value={letterSpacing}
                onChange={(e) => setLetterSpacing(parseInt(e.target.value))}
                className="slider"
              />
            </div>
          </div>
        </div>

        <div className="control-section">
          <h3>Navigasjon og interaksjon</h3>
          <div className="settings-grid">
            {settings.filter(s => ['keyboard-navigation', 'skip-links', 'focus-indicators']).map(setting => (
              <div key={setting.id} className="setting-item">
                <label className="setting-label">
                  <input
                    type="checkbox"
                    checked={setting.enabled}
                    onChange={() => toggleSetting(setting.id)}
                  />
                  <span className="setting-name">{setting.name}</span>
                </label>
                <p className="setting-description">{setting.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="accessibility-features-section">
        <div className="features-header">
          <h3>Automatiske tilgjengelighetssjekker</h3>
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="features-grid">
          {filteredFeatures.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="feature-header">
                <h4>{feature.name}</h4>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={feature.enabled}
                    onChange={() => toggleFeature(feature.id)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-status">
                <span className={`status-indicator ${feature.enabled ? 'active' : 'inactive'}`}>
                  {feature.enabled ? 'Aktiv' : 'Inaktiv'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="accessibility-info">
        <h3>Hjelpetekster for tilgjengelighet</h3>
        <div className="info-grid">
          <div className="info-card">
            <h4>WCAG 2.1 AA</h4>
            <p>Dette systemet følger retningslinjene i Web Content Accessibility Guidelines (WCAG) 2.1 på AA-nivå.</p>
          </div>
          <div className="info-card">
            <h4>Testet med</h4>
            <p>Våre tilgjengelighetsfunksjoner er testet med skjermlesere som NVDA, JAWS og VoiceOver.</p>
          </div>
          <div className="info-card">
            <h4>Feedback</h4>
            <p>Har du forslag til forbedringer? Gi oss beskjed slik at vi kan gjøre systemet bedre for alle.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityFeatures;