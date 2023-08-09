import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/authActions';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{marginLeft: 100}}>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;