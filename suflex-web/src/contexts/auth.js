import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from '../services/axios';
import * as User from '../services/user';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = localStorage.getItem('user');
      const storagedToken = localStorage.getItem('token');
      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        axios.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function login(username, senha) {
    const response = await User.login(username, senha);

    if (!response.error) {
      const { user, token } = response.data;

      setUser(user);
      axios.defaults.headers.Authorization = `Bearer ${token}`;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    }
    return response;
  }

  async function register(nome, sobrenome, username, senha) {
    const response = await User.register(nome, sobrenome, username, senha);
    return response;
  }

  async function logout() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    console.log('useAuth must be used within an AuthProvider.');
  }
  return context;
}

export { AuthProvider, useAuth };
