import React, { useState } from 'react';

interface Category {
  id: string;
  name: string;
  description: string;
  visibility: 'offentlig' | 'intern' | 'privat';
  sortOrder: number;
}

const CategoryManager: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: '1',
      name: 'Generelt',
      description: 'Generelle skjema som ikke passer inn i andre kategorier',
      visibility: 'offentlig',
      sortOrder: 1
    },
    {
      id: '2',
      name: 'Økonomi',
      description: 'Skjema relatert til økonomi og betalinger',
      visibility: 'offentlig',
      sortOrder: 2
    },
    {
      id: '3',
      name: 'Kundeservice',
      description: 'Skjema for kundekontakt og tilbakemeldinger',
      visibility: 'offentlig',
      sortOrder: 3
    },
    {
      id: '4',
      name: 'Evaluering',
      description: 'Skjema for evaluering og vurdering',
      visibility: 'intern',
      sortOrder: 4
    },
    {
      id: '5',
      name: 'Offentlig',
      description: 'Offentlige tjenester og skjema',
      visibility: 'offentlig',
      sortOrder: 5
    }
  ]);

  const [newCategory, setNewCategory] = useState({
    name: '',
    description: '',
    visibility: 'offentlig' as 'offentlig' | 'intern' | 'privat',
    sortOrder: 0
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Category | null>(null);

  const handleAddCategory = () => {
    if (!newCategory.name.trim()) return;
    
    const category: Category = {
      id: `cat-${Date.now()}`,
      name: newCategory.name,
      description: newCategory.description,
      visibility: newCategory.visibility,
      sortOrder: Math.max(...categories.map(c => c.sortOrder), 0) + 1
    };
    
    setCategories([...categories, category]);
    setNewCategory({
      name: '',
      description: '',
      visibility: 'offentlig',
      sortOrder: 0
    });
  };

  const handleEditCategory = (category: Category) => {
    setEditingId(category.id);
    setEditForm({ ...category });
  };

  const handleSaveEdit = () => {
    if (!editForm) return;
    
    setCategories(categories.map(cat => 
      cat.id === editingId ? editForm : cat
    ));
    setEditingId(null);
    setEditForm(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm(null);
  };

  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  const getVisibilityClass = (visibility: string) => {
    switch (visibility) {
      case 'offentlig':
        return 'status-badge active';
      case 'intern':
        return 'status-badge draft';
      case 'privat':
        return 'status-badge inactive';
      default:
        return 'status-badge';
    }
  };

  const getVisibilityText = (visibility: string) => {
    switch (visibility) {
      case 'offentlig':
        return 'Offentlig';
      case 'intern':
        return 'Intern';
      case 'privat':
        return 'Privat';
      default:
        return visibility;
    }
  };

  return (
    <div className="category-manager">
      <div className="card">
        <div className="card-header">
          <h3>Kategorier</h3>
        </div>
        <div className="card-content">
          <div className="add-category-form">
            <h4>Legg til ny kategori</h4>
            <div className="form-group">
              <label>Navn</label>
              <input
                type="text"
                value={newCategory.name}
                onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
                className="ds-input"
                placeholder="Navn på kategori"
              />
            </div>
            
            <div className="form-group">
              <label>Beskrivelse</label>
              <textarea
                value={newCategory.description}
                onChange={(e) => setNewCategory({...newCategory, description: e.target.value})}
                className="ds-input"
                placeholder="Beskrivelse av kategorien"
              />
            </div>
            
            <div className="form-group">
              <label>Synlighet</label>
              <select
                value={newCategory.visibility}
                onChange={(e) => setNewCategory({...newCategory, visibility: e.target.value as any})}
                className="ds-input"
              >
                <option value="offentlig">Offentlig</option>
                <option value="intern">Intern</option>
                <option value="privat">Privat</option>
              </select>
            </div>
            
            <button 
              className="primary-button"
              onClick={handleAddCategory}
              disabled={!newCategory.name.trim()}
            >
              Legg til kategori
            </button>
          </div>
          
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Navn</th>
                  <th>Beskrivelse</th>
                  <th>Synlighet</th>
                  <th>Sortering</th>
                  <th>Handlinger</th>
                </tr>
              </thead>
              <tbody>
                {categories.map(category => (
                  <tr key={category.id}>
                    {editingId === category.id && editForm ? (
                      <>
                        <td>
                          <input
                            type="text"
                            value={editForm.name}
                            onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                            className="ds-input"
                          />
                        </td>
                        <td>
                          <textarea
                            value={editForm.description}
                            onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                            className="ds-input"
                          />
                        </td>
                        <td>
                          <select
                            value={editForm.visibility}
                            onChange={(e) => setEditForm({...editForm, visibility: e.target.value as any})}
                            className="ds-input"
                          >
                            <option value="offentlig">Offentlig</option>
                            <option value="intern">Intern</option>
                            <option value="privat">Privat</option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="number"
                            value={editForm.sortOrder}
                            onChange={(e) => setEditForm({...editForm, sortOrder: parseInt(e.target.value) || 0})}
                            className="ds-input"
                          />
                        </td>
                        <td>
                          <div className="actions">
                            <button className="primary-button small" onClick={handleSaveEdit}>Lagre</button>
                            <button className="secondary-button small" onClick={handleCancelEdit}>Avbryt</button>
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{category.name}</td>
                        <td>{category.description}</td>
                        <td>
                          <span className={getVisibilityClass(category.visibility)}>
                            {getVisibilityText(category.visibility)}
                          </span>
                        </td>
                        <td>{category.sortOrder}</td>
                        <td>
                          <div className="actions">
                            <button 
                              className="secondary-button small" 
                              onClick={() => handleEditCategory(category)}
                            >
                              Rediger
                            </button>
                            <button 
                              className="danger-button small" 
                              onClick={() => handleDeleteCategory(category.id)}
                            >
                              Slett
                            </button>
                          </div>
                        </td>
                      </>
                    )}
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

export default CategoryManager;