import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRouye';
import Home from './components/Home';
import Logout from './components/Logout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      

    <Route
      path="/home"
      element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      }
    />
      
    </Routes>
  );
}

export default App;
         
          