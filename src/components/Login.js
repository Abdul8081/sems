// components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Import CSS file
import Navbar from './Navbar';
import Footer from './Footer';

const Login = ({ setIsLoggedIn }) => {
  const [credentials, setCredentials] = useState({ name: '', password: '' }); // Changed 'username' to 'name'
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { name, password } = credentials;
   

    try {
      const response = await axios.post('http://localhost:5000/initial_login', { name, password });

      if (response.data.token) {
        alert(response.data.message);
        setIsLoggedIn(true); // Set login state
        localStorage.setItem('authToken', response.data.token); // Store the token in localStorage
        navigate('/login_after'); // Redirect to home
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 401) {
        setError('Invalid credentials. Please try again.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="login-container">
      <Navbar />
      <h2>Enter Credentials</h2>
      <input
        type="text"
        placeholder="Name" // Change placeholder to 'Name'
        className="input-field"
        value={credentials.name}
        onChange={(e) => setCredentials({ ...credentials, name: e.target.value })} // Use 'name' instead of 'username'
      />
      <input
        type="password"
        placeholder="Password"
        className="input-field"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button className="login-button" onClick={handleLogin}>Login</button>
      {error && <p className="error-message">{error}</p>}
      <Footer />
    </div>
  );
};

export default Login;
