// components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate from react-router-dom
import axios from 'axios'; // Import axios for making HTTP requests
import './Login_After.css'; // Import the CSS file
import New_Navbar from './New_Navbar';
import Footer from './Footer';

const Login = ({onLogin}) => {
  const [credentials, setCredentials] = useState({ username: '', password: '', role: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async () => {
    const { username, password, role } = credentials;
  
    if (!username || !password || !role) {
      setError('All fields are required.');
      return;
    }
  
    try {
      // Send login request to the server
      const response = await axios.post('http://localhost:5000/login', credentials, {
        headers: { 'Content-Type': 'application/json' },
      });
  
      alert(response.data.message); // Notify user on success
  
      // Redirecting to the respective dashboard based on the role
      onLogin(username, role);  // Pass username and role to App.js
      if (role === 'coach') {
        navigate('/coach-dashboard');
      } else if (role === 'player') {
        navigate('/player-dashboard');
      }
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response && error.response.data) {
        setError(error.response.data.message); // Show specific error message if available
      } else {
        setError('An error occurred while logging in.');
      }
    }
  };
  

  return (
    <div className="login-container">
      <New_Navbar role={credentials.role} />
      <h1>Login As...</h1>
      <select
        className="role-select"
        onChange={(e) => setCredentials({ ...credentials, role: e.target.value })}
      >
        <option value="">Select Role</option>
        {/* <option value="admin">Admin</option> */}
        <option value="coach">Coach</option>
        <option value="player">Player</option>
      </select>
      <input
        type="text"
        placeholder="Username"
        className="input-field"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
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
