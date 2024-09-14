import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={sidebarOpen ? "dashboard" : "dashboard collapsed"}>
      <div className="sidebar">
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#patients">Patients</a></li>
          <li><a href="#appointments">Appointments</a></li>
          <li><a href="#doctors">Doctors</a></li>
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>Clinicly</h1>
          <button onClick={toggleSidebar} className="toggle-button">
            {sidebarOpen ? 'Collapse' : 'Expand'}
          </button>
        </div>
        <div className="stats">
          <div className="card">
            <h3>Total Patients</h3>
            <p>350</p>
          </div>
          <div className="card">
            <h3>Available Beds</h3>
            <p>120</p>
          </div>
          <div className="card">
            <h3>Doctors On Duty</h3>
            <p>45</p>
          </div>
        </div>
        <div className="tables">
          <div className="table-container">
            <h3>Room Status</h3>
            <table>
              <thead>
                <tr>
                  <th>Room No</th>
                  <th>Status</th>
                  <th>Patient</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>101</td>
                  <td>Occupied</td>
                  <td>John Doe</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>Available</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>Occupied</td>
                  <td>Jane Smith</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-container">
            <h3>Doctor Availability</h3>
            <table>
              <thead>
                <tr>
                  <th>Doctor</th>
                  <th>Specialty</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dr. Adams</td>
                  <td>Cardiology</td>
                  <td>On Duty</td>
                </tr>
                <tr>
                  <td>Dr. Johnson</td>
                  <td>Neurology</td>
                  <td>Off Duty</td>
                </tr>
                <tr>
                  <td>Dr. Lee</td>
                  <td>Orthopedics</td>
                  <td>On Duty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
