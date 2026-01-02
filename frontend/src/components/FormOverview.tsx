import React, { useState } from 'react';

interface FormItem {
  id: string;
  name: string;
  category: string;
  status: 'utkast' | 'publisert' | 'arkivert';
  lastModified: string;
  owner: string;
  actions?: string[];
}

const FormOverview: React.FC = () => {
  const [forms, setForms] = useState<FormItem[]>([
    {
      id: '1',
      name: 'Kontaktskjema',
      category: 'Generelt',
      status: 'publisert',
      lastModified: '2023-06-15',
      owner: 'Admin',
      actions: ['Åpne', 'Rediger', 'Dupliser', 'Arkiver']
    },
    {
      id: '2',
      name: 'Bestillingsskjema',
      category: 'Økonomi',
      status: 'utkast',
      lastModified: '2023-06-10',
      owner: 'Bruker1',
      actions: ['Åpne', 'Rediger', 'Slett']
    },
    {
      id: '3',
      name: 'Tilbakemeldingsskjema',
      category: 'Kundeservice',
      status: 'publisert',
      lastModified: '2023-06-05',
      owner: 'Admin',
      actions: ['Åpne', 'Rediger', 'Dupliser', 'Arkiver']
    },
    {
      id: '4',
      name: 'Anmeldelsesskjema',
      category: 'Evaluering',
      status: 'arkivert',
      lastModified: '2023-05-20',
      owner: 'Bruker2',
      actions: ['Åpne', 'Gjenopprett', 'Slett']
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('Alle');
  const [filterStatus, setFilterStatus] = useState('Alle');

  const categories = ['Alle', 'Generelt', 'Økonomi', 'Kundeservice', 'Evaluering'];
  const statuses = ['Alle', 'Utkast', 'Publisert', 'Arkivert'];

  const filteredForms = forms.filter(form => {
    const matchesSearch = form.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          form.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'Alle' || form.category === filterCategory;
    const matchesStatus = filterStatus === 'Alle' || form.status === filterStatus.toLowerCase();
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'utkast':
        return 'status-badge draft';
      case 'publisert':
        return 'status-badge active';
      case 'arkivert':
        return 'status-badge inactive';
      default:
        return 'status-badge';
    }
  };

  const getStatusText = (status: string) => {
    switch (status.toLowerCase()) {
      case 'utkast':
        return 'Utkast';
      case 'publisert':
        return 'Publisert';
      case 'arkivert':
        return 'Arkivert';
      default:
        return status;
    }
  };

  return (
    <div className="form-overview">
      <div className="card">
        <div className="card-header">
          <h3>Skjemaoversikt</h3>
        </div>
        <div className="card-content">
          <div className="form-controls">
            <div className="search-filter">
              <input
                type="text"
                placeholder="Søk etter skjema eller kategori..."
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
                  value={filterStatus} 
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="ds-input"
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {filteredForms.length > 0 ? (
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Navn</th>
                    <th>Kategori</th>
                    <th>Status</th>
                    <th>Sist endret</th>
                    <th>Eier</th>
                    <th>Handlinger</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredForms.map(form => (
                    <tr key={form.id}>
                      <td>{form.name}</td>
                      <td>{form.category}</td>
                      <td>
                        <span className={getStatusClass(form.status)}>
                          {getStatusText(form.status)}
                        </span>
                      </td>
                      <td>{form.lastModified}</td>
                      <td>{form.owner}</td>
                      <td>
                        <div className="actions">
                          {form.actions?.map((action, index) => (
                            <button 
                              key={index} 
                              className={`button ${action === 'Åpne' ? 'primary-button' : 
                                         action === 'Rediger' ? 'secondary-button' : 
                                         action === 'Slett' || action === 'Arkiver' ? 'danger-button' : 
                                         'secondary-button'} small`}
                            >
                              {action}
                            </button>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-state">
              <h3>Du har ingen skjema ennå</h3>
              <p>Opprett ditt første skjema eller start fra en mal</p>
              <div className="empty-state-actions">
                <button className="primary-button">Opprett første skjema</button>
                <button className="secondary-button">Start fra mal</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormOverview;