// src/components/AdminDashboard.js
import React from 'react';
import ManageCoaches from './ManageCoaches';
import ManagePlayers from '../Coach/ManagePlayers';
import ScheduleMatches from '../Coach/ScheduleMatches';
import ManageTeams from './ManageTeams';
import './AdminDashboard.css';
import New_Navbar from '../New_Navbar';
import Footer from '../Footer';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <New_Navbar />
      <div className="dashboard-content-wrapper">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>Welcome to the Admin Dashboard!</p>
        </div>
        <div className="dashboard-content">
          <ManageCoaches />
          <ManageTeams />
          {/* Add more components as needed */}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AdminDashboard;
