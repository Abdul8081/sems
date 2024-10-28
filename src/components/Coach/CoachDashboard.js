import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrainingSchedules from './TrainingSchedules';
import './CoachDashboard.css';
import New_Navbar from '../New_Navbar';
import ScheduleMatches from './ScheduleMatches';
import ManagePlayers from './ManagePlayers';
import Footer from '../Footer';

const CoachDashboard = () => {
  const [coachDetails, setCoachDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const coachName = 'Abdul'; // Adjust this as needed
  
    axios.get(`http://localhost:5000/api/coach?name=${coachName}`)
      .then(response => {
        setCoachDetails(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching coach details:', err);
        setError('Failed to fetch coach details');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="coach-dashboard">
      <New_Navbar />
      <h1>Coach Dashboard</h1>
      <p>Welcome to the Coach Dashboard!</p>

      <div className="coach-details">
        <h2>Coach Details</h2>
        <p><strong>Name: </strong> {coachDetails.name}</p>
        <p><strong>Experience: </strong> {coachDetails.experience}</p>
        <p><strong>Age: </strong> {coachDetails.age}</p>
        <p><strong>Team Associated : </strong> {coachDetails.associated_with}</p>
        {/* <p><strong>Coaching Team: </strong> {coachDetails.team}</p> */}
      </div>
      <Footer/>
      <section className="training-schedules">
        <ManagePlayers />
        {/* <TrainingSchedules /> */}
        {/* <ScheduleMatches /> */}
        
      </section>
      
    </div>
  );
};

export default CoachDashboard;
