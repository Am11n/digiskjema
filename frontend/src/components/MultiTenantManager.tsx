import React, { useState, useEffect } from 'react';

interface Tenant {
  id: string;
  name: string;
  orgNumber: string;
  contactEmail: string;
  isActive: boolean;
  formCount: number;
  userCount: number;
  createdAt: string;
}

interface MultiTenantManagerProps {
  currentTenantId: string;
  onTenantChange: (tenantId: string) => void;
}

const MultiTenantManager: React.FC<MultiTenantManagerProps> = ({ 
  currentTenantId, 
  onTenantChange 
}) => {
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [filteredTenants, setFilteredTenants] = useState<Tenant[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newTenant, setNewTenant] = useState({
    name: '',
    orgNumber: '',
    contactEmail: ''
  });
  const [loading, setLoading] = useState(true);

  // Mock data initialization
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockTenants: Tenant[] = [
        {
          id: 'tenant-1',
          name: 'Oslo kommune',
          orgNumber: '974760603',
          contactEmail: 'kontakt@oslo.kommune.no',
          isActive: true,
          formCount: 42,
          userCount: 128,
          createdAt: '2023-01-15'
        },
        {
          id: 'tenant-2',
          name: 'Bergen kommune',
          orgNumber: '971032081',
          contactEmail: 'info@bergen.kommune.no',
          isActive: true,
          formCount: 28,
          userCount: 89,
          createdAt: '2023-03-22'
        },
        {
          id: 'tenant-3',
          name: 'Trondheim kommune',
          orgNumber: '971032070',
          contactEmail: 'post@trondheim.kommune.no',
          isActive: true,
          formCount: 35,
          userCount: 96,
          createdAt: '2023-05-10'
        },
        {
          id: 'tenant-4',
          name: 'Stavanger kommune',
          orgNumber: '971032069',
          contactEmail: 'postmottak@stavanger.kommune.no',
          isActive: false,
          formCount: 12,
          userCount: 45,
          createdAt: '2023-08-05'
        }
      ];
      setTenants(mockTenants);
      setFilteredTenants(mockTenants);
      setLoading(false);
    }, 800);
  }, []);

  // Filter tenants based on search term
  useEffect(() => {
    if (!searchTerm) {
      setFilteredTenants(tenants);
    } else {
      const filtered = tenants.filter(tenant => 
        tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tenant.orgNumber.includes(searchTerm) ||
        tenant.contactEmail.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTenants(filtered);
    }
  }, [searchTerm, tenants]);

  const handleCreateTenant = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newTenant.name && newTenant.orgNumber && newTenant.contactEmail) {
      const createdTenant: Tenant = {
        id: `tenant-${Date.now()}`,
        name: newTenant.name,
        orgNumber: newTenant.orgNumber,
        contactEmail: newTenant.contactEmail,
        isActive: true,
        formCount: 0,
        userCount: 1,
        createdAt: new Date().toISOString().split('T')[0]
      };
      
      setTenants([...tenants, createdTenant]);
      setNewTenant({ name: '', orgNumber: '', contactEmail: '' });
      setShowCreateForm(false);
    }
  };

  const toggleTenantStatus = (tenantId: string) => {
    setTenants(tenants.map(tenant => 
      tenant.id === tenantId 
        ? { ...tenant, isActive: !tenant.isActive } 
        : tenant
    ));
  };

  if (loading) {
    return (
      <div className="multi-tenant-manager">
        <h2>Laster leietakere...</h2>
      </div>
    );
  }

  return (
    <div className="multi-tenant-manager">
      <div className="manager-header">
        <h2>Leietakaradministrasjon</h2>
        <button 
          className="create-tenant-button"
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          {showCreateForm ? 'Avbryt' : 'Opprett leietakar'}
        </button>
      </div>
      
      {showCreateForm && (
        <form onSubmit={handleCreateTenant} className="create-tenant-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="tenant-name">Leietakarnamn</label>
              <input
                id="tenant-name"
                type="text"
                value={newTenant.name}
                onChange={(e) => setNewTenant({...newTenant, name: e.target.value})}
                placeholder="Namn på kommunen eller organisasjonen"
                required
                aria-label="Leietakarnamn"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="org-number">Organisasjonsnummer</label>
              <input
                id="org-number"
                type="text"
                value={newTenant.orgNumber}
                onChange={(e) => setNewTenant({...newTenant, orgNumber: e.target.value})}
                placeholder="9-sifret organisasjonsnummer"
                required
                aria-label="Organisasjonsnummer"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="contact-email">Kontaktemail</label>
            <input
              id="contact-email"
              type="email"
              value={newTenant.contactEmail}
              onChange={(e) => setNewTenant({...newTenant, contactEmail: e.target.value})}
              placeholder="kontakt@eksempel.no"
              required
              aria-label="Kontaktemail"
            />
          </div>
          
          <button type="submit" className="submit-tenant-button">
            Opprett leietakar
          </button>
        </form>
      )}
      
      <div className="search-filter">
        <input
          type="text"
          placeholder="Søk i leietakarar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          aria-label="Søk i leietakarar"
        />
      </div>
      
      <div className="tenants-list">
        {filteredTenants.map(tenant => (
          <div 
            key={tenant.id} 
            className={`tenant-card ${tenant.id === currentTenantId ? 'current' : ''} ${!tenant.isActive ? 'inactive' : ''}`}
          >
            <div className="tenant-header">
              <div className="tenant-info">
                <h3>{tenant.name}</h3>
                <p className="org-number">Org.nr: {tenant.orgNumber}</p>
                <p className="contact-email">Kontakt: {tenant.contactEmail}</p>
              </div>
              
              <div className="tenant-status">
                <span className={`status-badge ${tenant.isActive ? 'active' : 'inactive'}`}>
                  {tenant.isActive ? 'Aktiv' : 'Inaktiv'}
                </span>
              </div>
            </div>
            
            <div className="tenant-stats">
              <div className="stat">
                <span className="stat-value">{tenant.formCount}</span>
                <span className="stat-label">Skjema</span>
              </div>
              <div className="stat">
                <span className="stat-value">{tenant.userCount}</span>
                <span className="stat-label">Brukarar</span>
              </div>
              <div className="stat">
                <span className="stat-value">{new Date(tenant.createdAt).toLocaleDateString('nb-NO')}</span>
                <span className="stat-label">Oppretta</span>
              </div>
            </div>
            
            <div className="tenant-actions">
              <button
                className={`switch-tenant-button ${tenant.id === currentTenantId ? 'current-tenant' : ''}`}
                onClick={() => onTenantChange(tenant.id)}
                disabled={tenant.id === currentTenantId}
              >
                {tenant.id === currentTenantId ? 'Noverande' : 'Bytt til'}
              </button>
              
              <button
                className="toggle-status-button"
                onClick={() => toggleTenantStatus(tenant.id)}
              >
                {tenant.isActive ? 'Deaktiver' : 'Aktiver'}
              </button>
            </div>
          </div>
        ))}
        
        {filteredTenants.length === 0 && (
          <div className="no-tenants">
            <p>Ingen leietakar funne for søket «{searchTerm}»</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiTenantManager;