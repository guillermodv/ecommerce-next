"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("user:v1");
      if (saved) setUser(JSON.parse(saved));
    } catch {}
  }, []);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users:v1") || "[]");
    const found = users.find((u) => u.email === email && u.password === password);
    if (found) {
      setUser(found);
      localStorage.setItem("user:v1", JSON.stringify(found));
      return true;
    }
    return false;
  };

  const register = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("users:v1") || "[]");
    if (users.some((u) => u.email === email)) {
      return false; // ya existe
    }
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users:v1", JSON.stringify(users));
    setUser(newUser);
    localStorage.setItem("user:v1", JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user:v1");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);