// hooks/useAuth.js
import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = import.meta.env.VITE_API_URL;


  useEffect(() => {
    fetch(`${url}/api/auth/me`, {
      credentials: 'include' // important pour envoyer le cookie de session
    })
      .then(res => res.json())
      .then(data => {
        setUser(data.user);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const logout = () => {
    window.location.href = `${url}/auth/logout`;
  };

  return { user, loading, logout };
}