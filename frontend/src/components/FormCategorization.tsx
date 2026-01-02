import React, { useState, useEffect } from 'react';

interface FormCategory {
  id: string;
  name: string;
  description: string;
  formCount: number;
  color: string;
  parentId?: string;
}

interface FormCategorizationProps {
  onCategorySelect: (categoryId: string) => void;
  selectedCategoryId?: string;
}

const FormCategorization: React.FC<FormCategorizationProps> = ({ 
  onCategorySelect, 
  selectedCategoryId 
}) => {
  const [categories, setCategories] = useState<FormCategory[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryDescription, setNewCategoryDescription] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  // Mock data initialization
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockCategories: FormCategory[] = [
        {
          id: 'cat-1',
          name: 'Generelle skjema',
          description: 'Standard skjema for generelle henvendelser',
          formCount: 12,
          color: '#3498db'
        },
        {
          id: 'cat-2',
          name: 'Søknader',
          description: 'Skjema for ulike typer søknader',
          formCount: 24,
          color: '#2ecc71'
        },
        {
          id: 'cat-3',
          name: 'Tilbakemeldinger',
          description: 'Skjema for å samle inn tilbakemeldinger',
          formCount: 8,
          color: '#e74c3c'
        },
        {
          id: 'cat-4',
          name: 'Interne skjema',
          description: 'Skjema for interne prosesser',
          formCount: 15,
          color: '#f39c12',
          parentId: 'cat-2'
        },
        {
          id: 'cat-5',
          name: 'Offentlige skjema',
          description: 'Skjema tilgjengelig for innbyggere',
          formCount: 32,
          color: '#9b59b6'
        }
      ];
      setCategories(mockCategories);
    }, 500);
  }, []);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newCategoryName.trim()) {
      const newCategory: FormCategory = {
        id: `cat-${Date.now()}`,
        name: newCategoryName,
        description: newCategoryDescription,
        formCount: 0,
        color: '#95a5a6' // Default gray color
      };
      
      setCategories([...categories, newCategory]);
      setNewCategoryName('');
      setNewCategoryDescription('');
      setShowAddForm(false);
    }
  };

  const getChildCategories = (parentId: string) => {
    return categories.filter(cat => cat.parentId === parentId);
  };

  const getRootCategories = () => {
    return categories.filter(cat => !cat.parentId);
  };

  return (
    <div className="form-categorization">
      <div className="categorization-header">
        <h2>Skjemakategorier</h2>
        <button 
          className="add-category-button"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Avbryt' : 'Legg til kategori'}
        </button>
      </div>
      
      {showAddForm && (
        <form onSubmit={handleAddCategory} className="add-category-form">
          <div className="form-group">
            <label htmlFor="category-name">Kategorinavn</label>
            <input
              id="category-name"
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="Skriv inn kategorinavn"
              required
              aria-label="Kategorinavn"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="category-description">Beskrivelse (valgfritt)</label>
            <textarea
              id="category-description"
              value={newCategoryDescription}
              onChange={(e) => setNewCategoryDescription(e.target.value)}
              placeholder="Beskrivelse av kategorien"
              aria-label="Kategoribeskrivelse"
            />
          </div>
          
          <button type="submit" className="submit-category-button">
            Lagre kategori
          </button>
        </form>
      )}
      
      <div className="categories-list">
        {getRootCategories().map(category => (
          <div key={category.id} className="category-item">
            <div 
              className={`category-header ${selectedCategoryId === category.id ? 'selected' : ''}`}
              onClick={() => onCategorySelect(category.id)}
            >
              <div className="category-info">
                <div 
                  className="category-color" 
                  style={{ backgroundColor: category.color }}
                />
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </div>
              <div className="category-stats">
                <span className="form-count">{category.formCount} skjema</span>
                {getChildCategories(category.id).length > 0 && (
                  <button 
                    className="toggle-children"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCategory(category.id);
                    }}
                    aria-label={expandedCategories.has(category.id) ? 'Skjul underkategorier' : 'Vis underkategorier'}
                  >
                    {expandedCategories.has(category.id) ? '▼' : '▶'}
                  </button>
                )}
              </div>
            </div>
            
            {expandedCategories.has(category.id) && (
              <div className="subcategories">
                {getChildCategories(category.id).map(subcategory => (
                  <div 
                    key={subcategory.id} 
                    className={`subcategory-item ${selectedCategoryId === subcategory.id ? 'selected' : ''}`}
                    onClick={() => onCategorySelect(subcategory.id)}
                  >
                    <div className="subcategory-info">
                      <div 
                        className="subcategory-color" 
                        style={{ backgroundColor: subcategory.color }}
                      />
                      <div>
                        <h4>{subcategory.name}</h4>
                        <p>{subcategory.description}</p>
                      </div>
                    </div>
                    <span className="subcategory-stats">{subcategory.formCount} skjema</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormCategorization;