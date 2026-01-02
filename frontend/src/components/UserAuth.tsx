import React, { useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  roles: string[];
}

interface UserAuthProps {
  onLogin: (user: User) => void;
  onLogout: () => void;
  currentUser: User | null;
}

const UserAuth: React.FC<UserAuthProps> = ({ onLogin, onLogout, currentUser }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Mock authentication - in real app this would call an API
    if (email && password) {
      const mockUser: User = {
        id: 'user-1',
        name: name || email.split('@')[0],
        email,
        roles: ['form-manager'] // Default role
      };
      onLogin(mockUser);
    } else {
      setError('Vennligst fyll inn e-post og passord');
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (email && password && name) {
      const mockUser: User = {
        id: `user-${Date.now()}`,
        name,
        email,
        roles: ['submitter'] // Default role for new users
      };
      onLogin(mockUser);
    } else {
      setError('Vennligst fyll inn alle feltene');
    }
  };

  return (
    <div className="user-auth">
      {currentUser ? (
        <div className="user-info">
          <p>Velkommen, {currentUser.name}</p>
          <button onClick={onLogout} className="logout-button">
            Logg ut
          </button>
        </div>
      ) : (
        <form onSubmit={isLoginView ? handleLogin : handleRegister} className="auth-form">
          <h3>{isLoginView ? 'Logg inn' : 'Registrer deg'}</h3>
          
          {!isLoginView && (
            <div className="form-group">
              <label htmlFor="name">Navn</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ditt fulle navn"
                required={!isLoginView}
                aria-label="Ditt fulle navn"
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">E-post</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="din@eksempel.no"
              required
              aria-label="E-postadresse"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Passord</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              aria-label="Passord"
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button type="submit" className="auth-button">
            {isLoginView ? 'Logg inn' : 'Registrer'}
          </button>
          
          <button 
            type="button" 
            className="toggle-auth-mode"
            onClick={() => setIsLoginView(!isLoginView)}
          >
            {isLoginView 
              ? 'Har du ikke konto? Registrer deg' 
              : 'Har du allerede en konto? Logg inn'}
          </button>
        </form>
      )}
    </div>
  );
};

export default UserAuth;