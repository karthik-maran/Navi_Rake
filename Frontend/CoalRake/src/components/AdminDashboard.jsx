import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/AdminDashboard.css';  // Optional for styling

const AdminDashboard = () => {
  const [collectionCounts, setCollectionCounts] = useState({
    users: 0,
    bookings: 0,
    rakes: 0,
    sidings:0
  });
  const [error, setError] = useState('');

  // Fetch collection counts when the component mounts
  useEffect(() => {
    const fetchCollectionCounts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/dashboard');
        setCollectionCounts(response.data);
      } catch (error) {
        setError('Failed to fetch collection counts.');
      }
    };

    fetchCollectionCounts();
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      {error && <p className="error">{error}</p>}
      <div className="collection-counts">
        <div className="count-box">
          <h2>Number Of Active users</h2>
          <p>{collectionCounts.users}</p>
        </div>
        <div className="count-box">
          <h2>Number of Bookings</h2>
          <p>{collectionCounts.bookings}</p>
        </div>
        <div className="count-box">
          <h2>Available Rakes</h2>
          <p>{collectionCounts.rakes}</p>
        </div>
        <div className="count-box">
          <h2>Sidings</h2>
          <p>{collectionCounts.sidings}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
