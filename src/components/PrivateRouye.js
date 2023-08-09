import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import Home from './Home';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);


  if (!isAuthenticated) {
    console.log("not authenticated");
    return <Navigate to="/" />;
  }
 
  return children;
};

export default PrivateRoute;