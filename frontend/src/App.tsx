import React, { useState } from 'react';
import AccessibleForm from './components/AccessibleForm';
import FormBuilder from './components/FormBuilder';
import AdminDashboard from './components/AdminDashboard';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'form' | 'builder' | 'admin'>('form');
  const [formConfig, setFormConfig] = useState<any[]>([]);

  const handleFormSubmit = (data: Record<string, string>) => {
    console.log('Form submitted:', data);
    alert('Skjema sendt!');
  };

  const handleSaveForm = (config: any[]) => {
    setFormConfig(config);
    setCurrentView('form');
    console.log('Form configuration saved:', config);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Digiskjema - Digitalt skjemasystem</h1>
        <nav>
          <button 
            onClick={() => setCurrentView('form')}
            className={currentView === 'form' ? 'active' : ''}
          >
            Skjema
          </button>
          <button 
            onClick={() => setCurrentView('builder')}
            className={currentView === 'builder' ? 'active' : ''}
          >
            Bygg skjema
          </button>
          <button 
            onClick={() => setCurrentView('admin')}
            className={currentView === 'admin' ? 'active' : ''}
          >
            Admin
          </button>
        </nav>
      </header>
      
      <main className="app-main">
        {currentView === 'form' ? (
          <div className="form-view">
            <h2>Eksempel på tilgjengelig skjema</h2>
            <AccessibleForm
              title="Kontaktskjema"
              fields={[
                {
                  id: 'name',
                  type: 'text',
                  label: 'Fullt navn',
                  required: true,
                  placeholder: 'Skriv inn ditt fulle navn',
                  value: '',
                  onChange: () => {}
                },
                {
                  id: 'email',
                  type: 'text',
                  label: 'E-postadresse',
                  required: true,
                  placeholder: 'eksempel@domene.no',
                  value: '',
                  onChange: () => {}
                },
                {
                  id: 'message',
                  type: 'textarea',
                  label: 'Melding',
                  required: true,
                  placeholder: 'Skriv din melding her...',
                  value: '',
                  onChange: () => {}
                }
              ]}
              onSubmit={handleFormSubmit}
            />
          </div>
        ) : currentView === 'builder' ? (
          <div className="builder-view">
            <h2>Skjema bygger</h2>
            <FormBuilder onSave={handleSaveForm} />
          </div>
        ) : (
          <div className="admin-view">
            <h2>Administrasjonspanel</h2>
            <AdminDashboard />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;