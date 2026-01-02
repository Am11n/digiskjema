import React, { useState, useEffect } from 'react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  isDefault: boolean;
  isAvailable: boolean;
}

interface Translation {
  key: string;
  [languageCode: string]: string;
}

const LanguageManager: React.FC = () => {
  const [languages, setLanguages] = useState<Language[]>([
    { code: 'nb', name: 'Norwegian Bokmål', nativeName: 'Norsk bokmål', isDefault: true, isAvailable: true },
    { code: 'nn', name: 'Norwegian Nynorsk', nativeName: 'Norsk nynorsk', isDefault: false, isAvailable: true },
    { code: 'en', name: 'English', nativeName: 'English', isDefault: false, isAvailable: true },
    { code: 'so', name: 'Somali', nativeName: 'Soomaali', isDefault: false, isAvailable: false },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية', isDefault: false, isAvailable: false },
  ]);
  const [translations, setTranslations] = useState<Translation[]>([
    { key: 'common.save', nb: 'Lagre', nn: 'Lagra', en: 'Save', so: 'Badashaa', ar: 'حفظ' },
    { key: 'common.cancel', nb: 'Avbryt', nn: 'Avbryt', en: 'Cancel', so: 'Jooji', ar: 'إلغاء' },
    { key: 'form.title', nb: 'Skjema', nn: 'Skjema', en: 'Form', so: 'Furmo', ar: 'نموذج' },
    { key: 'form.submit', nb: 'Send inn', nn: 'Send inn', en: 'Submit', so: 'Gali', ar: 'إرسال' },
  ]);
  const [newLanguage, setNewLanguage] = useState({ code: '', name: '', nativeName: '' });
  const [newTranslation, setNewTranslation] = useState({ key: '', values: {} as Record<string, string> });
  const [showAddLanguage, setShowAddLanguage] = useState(false);
  const [showAddTranslation, setShowAddTranslation] = useState(false);
  const [editingTranslation, setEditingTranslation] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter translations based on search
  const filteredTranslations = translations.filter(translation => 
    translation.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
    Object.values(translation).some(value => 
      typeof value === 'string' && 
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const addLanguage = () => {
    if (newLanguage.code && newLanguage.name && newLanguage.nativeName) {
      const newLang: Language = {
        code: newLanguage.code,
        name: newLanguage.name,
        nativeName: newLanguage.nativeName,
        isDefault: false,
        isAvailable: false
      };
      setLanguages([...languages, newLang]);
      setNewLanguage({ code: '', name: '', nativeName: '' });
      setShowAddLanguage(false);
    }
  };

  const toggleLanguageAvailability = (code: string) => {
    setLanguages(languages.map(lang => 
      lang.code === code ? { ...lang, isAvailable: !lang.isAvailable } : lang
    ));
  };

  const setDefaultLanguage = (code: string) => {
    setLanguages(languages.map(lang => ({
      ...lang,
      isDefault: lang.code === code
    })));
  };

  const addTranslation = () => {
    if (newTranslation.key) {
      // Add the new translation with default values for all languages
      const newTrans: Translation = {
        key: newTranslation.key,
        ...languages.reduce((acc, lang) => ({
          ...acc,
          [lang.code]: newTranslation.values[lang.code] || ''
        }), {})
      };
      
      setTranslations([...translations, newTrans]);
      setNewTranslation({ key: '', values: {} });
      setShowAddTranslation(false);
    }
  };

  const updateTranslation = (key: string, langCode: string, value: string) => {
    setTranslations(translations.map(trans => 
      trans.key === key ? { ...trans, [langCode]: value } : trans
    ));
  };

  const deleteTranslation = (key: string) => {
    setTranslations(translations.filter(trans => trans.key !== key));
  };

  return (
    <div className="language-manager">
      <div className="manager-header">
        <h2>Språkstyring</h2>
      </div>

      <div className="manager-content">
        {/* Language Configuration */}
        <div className="language-config">
          <div className="config-header">
            <h3>Konfigurerte språk</h3>
            <button 
              className="secondary-button"
              onClick={() => setShowAddLanguage(!showAddLanguage)}
            >
              {showAddLanguage ? 'Avbryt' : 'Legg til språk'}
            </button>
          </div>

          {showAddLanguage && (
            <div className="add-language-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="lang-code">Språkkode (ISO 639-1)</label>
                  <input
                    id="lang-code"
                    type="text"
                    value={newLanguage.code}
                    onChange={(e) => setNewLanguage({...newLanguage, code: e.target.value})}
                    placeholder="f.eks. fr, de, es"
                    maxLength={10}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lang-name">Språknavn</label>
                  <input
                    id="lang-name"
                    type="text"
                    value={newLanguage.name}
                    onChange={(e) => setNewLanguage({...newLanguage, name: e.target.value})}
                    placeholder="f.eks. French"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lang-native">Språknavn (i det språket)</label>
                  <input
                    id="lang-native"
                    type="text"
                    value={newLanguage.nativeName}
                    onChange={(e) => setNewLanguage({...newLanguage, nativeName: e.target.value})}
                    placeholder="f.eks. Français"
                  />
                </div>
              </div>
              <button 
                className="primary-button"
                onClick={addLanguage}
              >
                Legg til språk
              </button>
            </div>
          )}

          <div className="languages-list">
            {languages.map(lang => (
              <div key={lang.code} className="language-item">
                <div className="language-info">
                  <span className="language-code">[{lang.code}]</span>
                  <span className="language-name">{lang.name}</span>
                  <span className="language-native">({lang.nativeName})</span>
                </div>
                <div className="language-actions">
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={lang.isAvailable}
                      onChange={() => toggleLanguageAvailability(lang.code)}
                    />
                    <span className="toggle-slider"></span>
                    Tilgjengelig
                  </label>
                  <button
                    className={`default-button ${lang.isDefault ? 'active' : ''}`}
                    onClick={() => setDefaultLanguage(lang.code)}
                    disabled={lang.isDefault}
                  >
                    {lang.isDefault ? 'Standard' : 'Sett som standard'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Translation Management */}
        <div className="translation-management">
          <div className="translation-header">
            <h3>Oversettelser</h3>
            <div className="translation-controls">
              <input
                type="text"
                placeholder="Søk i oversettelser..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button 
                className="secondary-button"
                onClick={() => setShowAddTranslation(!showAddTranslation)}
              >
                {showAddTranslation ? 'Avbryt' : 'Legg til oversettelse'}
              </button>
            </div>
          </div>

          {showAddTranslation && (
            <div className="add-translation-form">
              <div className="form-group">
                <label htmlFor="translation-key">Nøkkel</label>
                <input
                  id="translation-key"
                  type="text"
                  value={newTranslation.key}
                  onChange={(e) => setNewTranslation({...newTranslation, key: e.target.value})}
                  placeholder="f.eks. form.submit, common.save"
                />
              </div>
              <div className="translation-values">
                <h4>Oversettelser:</h4>
                {languages.filter(lang => lang.isAvailable).map(lang => (
                  <div key={lang.code} className="translation-value">
                    <label htmlFor={`translation-${lang.code}`}>{lang.name} [{lang.code}]</label>
                    <input
                      id={`translation-${lang.code}`}
                      type="text"
                      value={newTranslation.values[lang.code] || ''}
                      onChange={(e) => setNewTranslation({
                        ...newTranslation,
                        values: {
                          ...newTranslation.values,
                          [lang.code]: e.target.value
                        }
                      })}
                      placeholder={`Oversettelse for ${lang.name}`}
                    />
                  </div>
                ))}
              </div>
              <button 
                className="primary-button"
                onClick={addTranslation}
              >
                Legg til oversettelse
              </button>
            </div>
          )}

          <div className="translations-table">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Nøkkel</th>
                  {languages.filter(lang => lang.isAvailable).map(lang => (
                    <th key={lang.code}>{lang.name}</th>
                  ))}
                  <th>Handlinger</th>
                </tr>
              </thead>
              <tbody>
                {filteredTranslations.map(translation => (
                  <tr key={translation.key}>
                    <td className="translation-key">{translation.key}</td>
                    {languages.filter(lang => lang.isAvailable).map(lang => (
                      <td key={lang.code} className="translation-cell">
                        {editingTranslation === translation.key ? (
                          <input
                            type="text"
                            value={translation[lang.code] || ''}
                            onChange={(e) => updateTranslation(translation.key, lang.code, e.target.value)}
                            className="translation-input"
                          />
                        ) : (
                          <span>{translation[lang.code]}</span>
                        )}
                      </td>
                    ))}
                    <td className="actions-cell">
                      <button
                        className="secondary-button"
                        onClick={() => setEditingTranslation(
                          editingTranslation === translation.key ? null : translation.key
                        )}
                      >
                        {editingTranslation === translation.key ? 'Lagre' : 'Rediger'}
                      </button>
                      <button
                        className="danger-button"
                        onClick={() => deleteTranslation(translation.key)}
                      >
                        Slett
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageManager;