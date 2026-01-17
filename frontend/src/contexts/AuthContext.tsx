import React, { createContext, useContext, useState } from "react";
import { loginApi } from "../api/auth.api";

type Role = "fedex" | "dca";

interface AuthContextType {
  token: string | null;
  role: Role | null;
  login: (email: string, role: Role) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const [role, setRole] = useState<Role | null>(localStorage.getItem("role") as Role | null);

  const login = async (email: string, selectedRole: Role) => {
    const data = await loginApi(email, selectedRole);

    localStorage.setItem("token", data.access_token);
    localStorage.setItem("role", data.role);

    setToken(data.access_token);
    setRole(data.role as Role);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setToken(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ token, role, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};