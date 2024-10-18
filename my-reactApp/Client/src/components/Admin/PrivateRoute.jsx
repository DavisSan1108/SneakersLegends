import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  const isAuthenticated = localStorage.getItem('adminToken'); // Verificar si hay un token de autenticación

  return isAuthenticated ? <Component /> : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
