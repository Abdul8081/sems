import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Track loading state

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent page refresh

    // Basic form validation
    if (!name || !email || !password) {
      setMessage('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email.');
      return;
    }

    if (password.length < 6) {
      setMessage('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true); // Start loading

    try {
      const response = await axios.post('http://localhost:5000/signup', {
        name,
        email,
        password,
      });

      setMessage(response.data.message); // Set the success message

      if (response.status === 201) {
        // Clear the input fields on success
        setName('');
        setEmail('');
        setPassword('');
        navigate('/login_after');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setMessage('There was an error during signup.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="signup-container">
      <Navbar />
      <h1 className="signup-heading">Signup</h1>
      <form className="signup-form" onSubmit={handleSignup}>
        <div className="form-group">
          <label htmlFor="name" className="visually-hidden"></label>
          <input
            type="text"
            id="name"
            placeholder="Enter Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
            aria-label="Full Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="visually-hidden"></label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            aria-label="Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="visually-hidden"></label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            aria-label="Password"
          />
        </div>
        <button type="submit" className="signup-button" disabled={loading}>
          {loading ? 'Signing up...' : 'Signup'}
        </button>
      </form>
      {message && <div className="signup-message">{message}</div>}
      <Footer />
    </div>
  );
}

export default Signup;
