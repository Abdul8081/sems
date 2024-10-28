// src/App.js
import React, { useState } from 'react'; // Import useState
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AdminDashboard from './components/Admin/AdminDashboard';
import CoachDashboard from './components/Coach/CoachDashboard';
import PlayerDashboard from './components/Player/PlayerDashboard';
import Login from './components/Login';
import ScheduleMatches from './components/Coach/ScheduleMatches'; // Update this path based on your directory structure
import About from './components/About'; // Create this component
import Contact from './components/Contact'; // Create this component
import './App.css'; 
import Signup from './components/Signup';
import Login_After from './components/Login_After';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status
  const [player, setPlayer] = useState('abhay');

  function handleLogin(playerName) {
  setPlayer(playerName);  // Set player name from Login component
  setIsLoggedIn(true);  // Set login status to true
}

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/coach-dashboard" element={<CoachDashboard />} />
        <Route path="/player-dashboard" element={<PlayerDashboard player_name={player}/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login_after" element={<Login_After onLogin={handleLogin}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/schedule-matches" element={<ScheduleMatches />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
