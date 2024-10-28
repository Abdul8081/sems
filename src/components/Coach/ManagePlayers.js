import React, { useState } from 'react';
import './ManagePlayers.css';
import axios from 'axios'; // Import axios for API calls

const ManagePlayers = () => {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState({
    name: '', position: '', age: '', team: '', email: '', password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlayer({ ...newPlayer, [name]: value });
  };

  const addPlayer = async () => {
    const { name, position, age, team, email, password } = newPlayer;

    // Validate that all fields are filled
    if (!name || !position || !age || !team || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      // Post the new player data to the server
      const response = await axios.post('http://localhost:5000/add-player', newPlayer);

      // Assuming the server responds with the player data or an ID
      const newPlayerWithId = { id: response.data.playerId, ...newPlayer };

      // Update the players state with the new player
      setPlayers([...players, newPlayerWithId]);

      // Clear the input fields after successful addition
      setNewPlayer({ name: '', position: '', age: '', team: '', email: '', password: '' });

      alert(response.data.message); // Notify success
    } catch (error) {
      console.error('Error adding player:', error);

      // Check if there is a specific error message from the server
      if (error.response && error.response.data.message) {
        alert(error.response.data.message); // Display specific error message
      } else {
        alert('Failed to add player.'); // Generic error message
      }
    }
  };

  return (
    <div className="manage-players">
      <h2>Manage Players</h2>

      <div className="input-group">
        <input
          type="text"
          name="name"
          placeholder="Player Name"
          value={newPlayer.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={newPlayer.position}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newPlayer.age}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="team"
          placeholder="Team"
          value={newPlayer.team}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newPlayer.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={newPlayer.password}
          onChange={handleInputChange}
        />
      </div>

      <button onClick={addPlayer}>Add Player</button>

      <ul className="player-list">
        {players.map((player) => (
          <li key={player.id}>
            {player.name} - {player.position} ({player.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManagePlayers;
