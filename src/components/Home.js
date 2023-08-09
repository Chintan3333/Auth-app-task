import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitForm } from '../store/actions/formAction';
import { logout } from '../store/actions/authActions';
import './home.css';

const Home = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobRole, setJobRole] = useState('');
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
console.log(isAuthenticated)
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);
console.log(formData)
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormData = {
      firstName,
      lastName,
      jobRole,
    };
    dispatch(submitForm(newFormData));
    setFirstName('');
    setLastName('');
    setJobRole('');
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
    <div className="home-container">
      <div className="form-container">
        <h2>Submit Form</h2>
        <form onSubmit={handleSubmit}>
          First Name:
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          Last Name:
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          Job Role:
          <input
            type="text"
            placeholder="Job Role"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="data-container">
        <h2>Submitted Data:</h2>
        <ul>
          {formData.map((data, index) => (
            <li key={index}>
              {data.firstName} {data.lastName} - {data.jobRole}
            </li>
          ))}
        </ul>
      </div>
      </div><div>
    
      <div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
    </div>
    </>
  );
};

export default Home;