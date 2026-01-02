import React, { useState, useEffect } from 'react';
import AppShell from './components/AppShell';
import AccessibleForm from './components/AccessibleForm';
import FormBuilder from './components/FormBuilder';
import AdminDashboard from './components/AdminDashboard';
import UserAuth from './components/UserAuth';
import FormTemplates from './components/FormTemplates';
import FormCategorization from './components/FormCategorization';
import FileUpload from './components/FileUpload';
import MultiTenantManager from './components/MultiTenantManager';
import ConditionalLogicEditor from './components/ConditionalLogicEditor';
import AdvancedAnalytics from './components/AdvancedAnalytics';
import LanguageManager from './components/LanguageManager';
import AccessibilityFeatures from './components/AccessibilityFeatures';
import FormOverview from './components/FormOverview';
import TemplateGallery from './components/TemplateGallery';
import CategoryManager from './components/CategoryManager';

interface User {
  id: string;
  name: string;
  email: string;
  roles: string[];
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'form' | 'builder' | 'admin' | 'auth' | 'templates' | 'categorization' | 'multitenant' | 'conditional' | 'analytics' | 'language' | 'accessibility'>('form');
  const [formConfig, setFormConfig] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentTenantId, setCurrentTenantId] = useState('tenant-1');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize for responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleFormSubmit = (data: Record<string, string>) => {
    console.log('Form submitted:', data);
    alert('Skjema sendt!');
  };

  const handleSaveForm = (config: any[]) => {
    setFormConfig(config);
    setCurrentView('form');
    console.log('Form configuration saved:', config);
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setCurrentView('form');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('auth');
  };

  const handleSelectTemplate = (template: any) => {
    console.log('Selected template:', template);
    setCurrentView('builder');
  };

  const handleCreateNewForm = () => {
    setCurrentView('builder');
  };

  const handleCategorySelect = (categoryId: string) => {
    console.log('Selected category:', categoryId);
  };

  const handleFileUpload = (file: File) => {
    console.log('File uploaded:', file.name);
  };

  const handleTenantChange = (tenantId: string) => {
    setCurrentTenantId(tenantId);
    console.log('Switched to tenant:', tenantId);
  };

  // Mock form fields for conditional logic editor
  const mockFormFields = [
    { id: 'name', label: 'Fullt navn', type: 'text' },
    { id: 'email', label: 'E-postadresse', type: 'text' },
    { id: 'age', label: 'Alder', type: 'number' },
    { id: 'consent', label: 'Samtykke', type: 'checkbox' },
    { id: 'category', label: 'Kategori', type: 'select' },
  ];

  return (
    <AppShell 
      currentView={currentView} 
      onNavigate={(view) => setCurrentView(view as any)}
    >
      <div className="page-header">
        <h2>
          {currentView === 'form' && 'Skjema'}
          {currentView === 'builder' && 'Bygg skjema'}
          {currentView === 'admin' && 'Admin'}
          {currentView === 'auth' && 'Brukeradministrasjon'}
          {currentView === 'templates' && 'Malmaker'}
          {currentView === 'categorization' && 'Kategorier'}
          {currentView === 'multitenant' && 'Leietakarar'}
          {currentView === 'conditional' && 'Betingelser'}
          {currentView === 'analytics' && 'Analyser'}
          {currentView === 'language' && 'Språk'}
          {currentView === 'accessibility' && 'Tilgjenge'}
        </h2>
        <div className="page-description">
          {currentView === 'form' && 'Oversikt over dine skjema og deres status'}
          {currentView === 'builder' && 'Opprett og rediger skjema med vår byggeverktøy'}
          {currentView === 'admin' && 'Administrer systeminnstillinger og tilganger'}
          {currentView === 'auth' && 'Administrer brukere og deres tilganger'}
          {currentView === 'templates' && 'Velg fra en samling av ferdige skjemamaler'}
          {currentView === 'categorization' && 'Organiser skjema i kategorier'}
          {currentView === 'multitenant' && 'Administrer leietakarorganisasjoner'}
          {currentView === 'conditional' && 'Opprett betingede regler for skjema'}
          {currentView === 'analytics' && 'Vis statistikk og analyser for dine skjema'}
          {currentView === 'language' && 'Administrer oversettelser og språkinnstillinger'}
          {currentView === 'accessibility' && 'Sjekk og forbedre tilgjengelighet'}
        </div>
      </div>

      {currentView === 'form' ? (
        <FormOverview />
      ) : currentView === 'builder' ? (
        <div className="builder-view">
          <FormBuilder onSave={handleSaveForm} />
        </div>
      ) : currentView === 'admin' ? (
        <div className="admin-view">
          <AdminDashboard />
        </div>
      ) : currentView === 'auth' ? (
        <div className="auth-view">
          <UserAuth 
            onLogin={handleLogin}
            onLogout={handleLogout}
            currentUser={currentUser}
          />
        </div>
      ) : currentView === 'templates' ? (
        <div className="templates-view">
          <TemplateGallery />
        </div>
      ) : currentView === 'categorization' ? (
        <div className="categorization-view">
          <CategoryManager />
        </div>
      ) : currentView === 'multitenant' ? (
        <div className="multitenant-view">
          <MultiTenantManager 
            currentTenantId={currentTenantId}
            onTenantChange={handleTenantChange}
          />
        </div>
      ) : currentView === 'conditional' ? (
        <div className="conditional-view">
          <ConditionalLogicEditor 
            fields={mockFormFields}
            rules={[]}
            onSave={(rules) => console.log('Rules saved:', rules)}
          />
        </div>
      ) : currentView === 'analytics' ? (
        <div className="analytics-view">
          <AdvancedAnalytics />
        </div>
      ) : currentView === 'language' ? (
        <div className="language-view">
          <LanguageManager />
        </div>
      ) : currentView === 'accessibility' ? (
        <div className="accessibility-view">
          <AccessibilityFeatures />
        </div>
      ) : (
        <FormOverview />
      )}
    </AppShell>
  );
};

export default App;