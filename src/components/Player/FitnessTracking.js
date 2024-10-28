import React from 'react';
import './FitnessTracking.css'; // Import the CSS file

const FitnessTracking = () => {
  const fitnessData = {
    stamina: 80, // Sample data
    strength: 75,
    injuryStatus: 'None',
  };

  return (
    <div className="fitness-tracking">
      <h2>Fitness Tracking</h2>
      <p>Monitor your fitness data:</p>
      <div className="fitness-data">
        <div className="data-item">
          <h3>Stamina</h3>
          <p>{fitnessData.stamina}%</p>
        </div>
        <div className="data-item">
          <h3>Strength</h3>
          <p>{fitnessData.strength}%</p>
        </div>
        <div className="data-item">
          <h3>Injury Status</h3>
          <p>{fitnessData.injuryStatus}</p>
        </div>
      </div>
    </div>
  );
};

export default FitnessTracking;
