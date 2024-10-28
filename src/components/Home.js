// Home.js
import React, { useState, useEffect } from 'react';
import './home.css'; 
import Navbar from './Navbar'; 
import New_Navbar from './New_Navbar';
import Footer from './Footer'; 
import test_video from '../assets/test_video.mp4'; 

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check localStorage to persist login state across page refreshes
  useEffect(() => {
    const auth = localStorage.getItem('auth');
    setIsLoggedIn(auth === 'true'); // Convert string to boolean
  }, []);

  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setIsLoggedIn(false);
  };

  const modules = [
    {
      title: 'For Leagues',
      description:
        'Our League Module manages single or multiple leagues all in one place – with end-to-end automation of your daily processes. Teams and clubs within a league can also access the Team and Club Module.',
      icon: '📊',
    },
    {
      title: 'For Clubs',
      description:
        'Our Club Module has everything that the Team Module offers, but with the addition of global reporting, and added hierarchy for managing club officials, making club management a breeze.',
      icon: '🏅',
    },
    {
      title: 'For Teams',
      description:
        'Our Team Module supports all sports and team activities, from youth to adult, recreational to competitive – helping you thrive in your league.',
      icon: '🤝',
    },
  ];

  return (
    <div className="home-container">
      {/* Render Navbar or New_Navbar based on login state */}
      {!isLoggedIn ? (
        <New_Navbar handleLogin={handleLogin} />
      ) : (
        <Navbar handleLogout={handleLogout} />
      )}

      {/* Full Page Video Section */}
      <div className="video-container">
        <video autoPlay muted loop className="background-video">
          <source src={test_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1 className="welcome-heading">Welcome to the Sports Event Management System</h1>
          <p className="video-subtext">Managing sports events with efficiency and ease</p>
        </div>
      </div>

      {/* Modules Section */}
      <div className="modules-section">
        <div className="modules-container">
          {modules.map((module, index) => (
            <div className="module-card" key={index}>
              <div className="module-icon">{module.icon}</div>
              <h3>{module.title}</h3>
              <p>{module.description}</p>
              <button className="module-button">Find Out More</button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
