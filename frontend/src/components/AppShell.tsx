import React, { useState, useEffect } from 'react';

interface AppShellProps {
  children: React.ReactNode;
  currentView?: string;
  onNavigate?: (view: string) => void;
}

const AppShell: React.FC<AppShellProps> = ({ children, currentView, onNavigate }) => {
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

  // Sidebar menu items without emojis
  const sidebarMenuItems = [
    { id: 'form', label: 'Skjema' },
    { id: 'builder', label: 'Bygg skjema' },
    { id: 'templates', label: 'Malmaker' },
    { id: 'categorization', label: 'Kategorier' },
    { id: 'multitenant', label: 'Leietakarar' },
    { id: 'conditional', label: 'Betingelser' },
    { id: 'analytics', label: 'Analyser' },
    { id: 'language', label: 'Språk' },
    { id: 'accessibility', label: 'Tilgjenge' },
    { id: 'admin', label: 'Admin' },
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="header-left">
          <div className="header-logo">Digiskjema</div>
        </div>
        <div className="header-center">
          <h1>Digiskjema</h1>
        </div>
        <div className="header-right">
          {windowWidth <= 768 && (
            <button 
              className="secondary-button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{ marginRight: 'var(--fds-spacing-s)' }}
            >
              {sidebarOpen ? '✕' : '☰'}
            </button>
          )}
          <div className="user-menu">
            <div className="user-avatar">A</div>
            <div className="user-info">
              <div className="user-name">Admin</div>
              <div className="user-role">Administrator</div>
            </div>
            <button className="secondary-button">Logg ut</button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className={`app-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul className="sidebar-menu">
          {sidebarMenuItems.map(item => (
            <li 
              key={item.id}
              className={`sidebar-menu-item ${currentView === item.id ? 'active' : ''}`}
              onClick={() => {
                if (onNavigate) onNavigate(item.id);
                if (windowWidth <= 768) setSidebarOpen(false);
              }}
            >
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="app-main">
        {children}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div>Digiskjema - Digitalt skjemasystem</div>
        <div>© {new Date().getFullYear()} - All rights reserved</div>
        <div>Version 1.0.0</div>
      </footer>
    </div>
  );
};

export default AppShell;