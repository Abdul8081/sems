// src/components/ManageCoaches.js
import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './ManageCoaches.css'; // Import the CSS file

const ManageCoaches = () => {
  const [coaches, setCoaches] = useState([]);
  const [newCoach, setNewCoach] = useState({ name: '', experience: '', age: '', associated_with: '', username: '', password: '' });

  const addCoach = async () => {
    // Check if all required fields are filled, including the new team field
    if (!newCoach.name || !newCoach.experience || !newCoach.age || 
        !newCoach.associated_with || !newCoach.username || !newCoach.password) {
      alert('All fields are required');
      return;
    }
  
    try {
      // Send the request to the backend with the newCoach object
      const response = await axios.post('http://localhost:5000/add-coach', newCoach, {
        headers: { 'Content-Type': 'application/json' },
      });
  
      alert(response.data.message); // Notify user on success
  
      // Include the new coach ID from the response and add to state
      const coachToAdd = { id: response.data.coachId, ...newCoach };
      setCoaches([...coaches, coachToAdd]);
  
      // Reset the input fields, including the team field
      setNewCoach({ name: '', age: '', experience: '', associated_with: '', username: '', password: '', team: '' });
    } catch (error) {
      console.error('Error adding coach:', error);
      if (error.response && error.response.data) {
        alert(error.response.data.message); // Show specific error message if available
      } else {
        alert('An error occurred while adding the coach.');
      }
    }
  };
  
  

  return (
    <div className="manage-coaches">
      <h2>Manage Coaches</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Coach Name"
          value={newCoach.name}
          onChange={(e) => setNewCoach({ ...newCoach, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Age"
          value={newCoach.age}
          onChange={(e) => setNewCoach({ ...newCoach, age: e.target.value })}
        />
        <input
          type="text"
          placeholder="Experience"
          value={newCoach.experience}
          onChange={(e) => setNewCoach({ ...newCoach, experience: e.target.value })}
        />
        <input
          type="text"
          placeholder="Associated with Team"
          value={newCoach.associated_with}
          onChange={(e) => setNewCoach({ ...newCoach, associated_with: e.target.value })}
        />
        <input
          type="text"
          placeholder="UserName"
          value={newCoach.username}
          onChange={(e) => setNewCoach({ ...newCoach, username: e.target.value })}
        />
        <input
          type="text"
          placeholder="Password"
          value={newCoach.password}
          onChange={(e) => setNewCoach({ ...newCoach, password: e.target.value })}
        />
      </div>
      <button onClick={addCoach}>Add Coach</button>

      <ul className="coach-list">
        {coaches.map(coach => (
          <li key={coach.id}>
            <span className="coach-name">({coach.name})</span>
            <span className="coach-age">({coach.age})</span>
            <span className="coach-experience">({coach.experience})</span>
            <span className="coach-password">({coach.associated_with})</span>
            <span className="coach-associated_with">({coach.username})</span>
            <span className="coach-username">({coach.password})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageCoaches;
