import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Sidebar.css';  // Optional: Create a CSS file for styling

const Sidebar = () => {
    
  return (
    <div className="sidebar">
      <h2>Admin Menu</h2>
      <ul>
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/admin/add-data">View/modify Data</Link></li>
        <li><Link to="/admin/bookings">Remove data</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
