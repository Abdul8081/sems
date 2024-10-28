import React, { useEffect, useState } from 'react';
import New_Navbar from '../New_Navbar';
import Footer from '../Footer';
import axios from 'axios'; // For API calls
import './PlayerDashboard.css'; // Importing the CSS file

const PlayerDashboard = ({ player_name }) => {
  const [player, setPlayer] = useState(null); // State to hold player data
  const [error, setError] = useState(''); // State to hold error messages

  // Fetch player data from the backend
  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/player/${player_name}`);
        setPlayer(response.data); // Update the player state with fetched data
      } catch (error) {
        console.error('Error fetching player:', error);
        if (error.response && error.response.status === 404) {
          setError('Player not found.');
        } else {
          setError('Failed to load player data.');
        }
      }
    };

    if (player_name) fetchPlayer(); // Fetch only if player_name is provided
  }, [player_name]); // Run the effect when player_name changes

  return (
    <div className="player-dashboard">
      <New_Navbar />
      <h1>Player Dashboard</h1>
      <div className="dashboard-content">
        {player ? (
          <div className="player-info-box">
            <h2>Player Information</h2>
            <div className="player-card">
              <p><strong>Name:</strong> {player.player_name}</p>
              <p><strong>Age:</strong> {player.age}</p>
              <p><strong>Team:</strong> {player.team}</p>
              <p><strong>Experience:</strong> {player.experience} years</p>
              <p><strong>Email:</strong> {player.email}</p>
            </div>
          </div>
        ) : (
          <p>{error || 'No player data available.'}</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PlayerDashboard;
