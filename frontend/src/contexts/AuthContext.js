import React, { createContext, useState, useEffect } from 'react';
import { login, logout } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Simular recuperação de usuário
      setUser({ email: 'user@example.com' });
    }
  }, []);

  const signIn = async (email, password) => {
    await login(email, password);
    setUser({ email });
  };

  const signOut = () => {
    logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};