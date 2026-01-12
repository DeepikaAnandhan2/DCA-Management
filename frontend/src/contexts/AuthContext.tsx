import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserRole } from '../types/index'; // Use relative path to avoid @ errors

interface AuthContextType {
  user: User | null;
  login: (role: UserRole) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mockUsers: Record<UserRole, User> = {
  fedex: { id: 'f1', name: 'Priya Sharma', email: 'priya@fedex.com', role: 'fedex' },
  dca: { id: 'd1', name: 'Arun Kumar', email: 'arun@dcachennai.com', role: 'dca' },
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (role: UserRole) => setUser(mockUsers[role]);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};