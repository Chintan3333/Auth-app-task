import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/actions/authActions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const handleLogin = () => {
   
    console.log(isAuthenticated)
    dispatch(login());
    
    navigate("/home");
  };

  return (
    
    <div className='home-container'>
      <div className="form-container">
        <h2>Submit Form</h2>
        <form >
          User name:
          <input
            type="text"
            placeholder="User name"
            
            
            required
          />
          Password:
          <input
            type="password"
            placeholder="Password"
           
            
            required
          />
         
         <button onClick={handleLogin}>Login</button>
        </form></div></div>
        
  );
};

export default Login;
