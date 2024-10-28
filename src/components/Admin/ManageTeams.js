// components/ManageTeams.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import './ManageTeams.css'; // Import the CSS file
import AddPlayer from './AddPlayer';

const ManageTeams = () => {
  const [teams, setTeams] = useState([]);
  const [newTeam, setNewTeam] = useState({ name: '', game: '', location: '', coached_by: '' });
  const [error, setError] = useState('');

  // Fetch existing teams from the database on component mount
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get-teams'); // Ensure this endpoint exists
        setTeams(response.data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams();
  }, []);

  // Add new team function
  const addTeam = async () => {
    if (!newTeam.name || !newTeam.game || !newTeam.location || !newTeam.coached_by) {
      alert('All fields are required!');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/add-team', {
        name: newTeam.name,
        game: newTeam.game,
        location: newTeam.location,
        coached_by: newTeam.coached_by,
      }, {
        headers: { 'Content-Type': 'application/json' },
      });
  
      alert(response.data.message);
      const teamToAdd = { id: response.data.teamId, ...newTeam };
      setTeams([...teams, teamToAdd]);
      setNewTeam({ team_name: '', game_type: '', location: '', coached_by: '' }); // Reset form
    } catch (error) {
      console.error('Error adding team:', error);
      alert('Error adding team: ' + error.response.data.message);
    }
  };
  

  return (
    <div className="manage-teams">
      <h2>Manage Teams</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Team Name"
          value={newTeam.name}
          onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Game Type"
          value={newTeam.game}
          onChange={(e) => setNewTeam({ ...newTeam, game: e.target.value })}
        />
        {/* AddPlayer Component can be added here */}
        <input
          type="text"
          placeholder="Team Location"
          value={newTeam.location}
          onChange={(e) => setNewTeam({ ...newTeam, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="Coached by : (Coach Id) "
          value={newTeam.coached_by}
          onChange={(e) => setNewTeam({ ...newTeam, coached_by: e.target.value })}
        />
      </div>
      <button onClick={addTeam}>Add Team</button>
      {error && <p className="error-message">{error}</p>}

      {/* Team List */}
      <ul className="team-list">
        {teams.map((team) => (
          <li key={team.id}>
            <span className="team-name">: {team.name}</span> 
            <span className="team-game">: {team.game}</span>
            <span className="team-location">: {team.location}</span>
            <span className="team-coached_by">: {team.coached_by}</span> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageTeams;
