import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminViewUsers = () => {
  const [users, setUsers] = useState([]); // Store fetched users
  const [error, setError] = useState(''); // Store any error messages
  const [loading, setLoading] = useState(true); // Loading state
  const [expandedUserId, setExpandedUserId] = useState(null); // Track which user is expanded

  // Fetch users from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data); // Update users state with fetched data
        setLoading(false); // Turn off loading when data is fetched
      } catch (err) {
        setError('Failed to fetch users');
        setLoading(false); // Turn off loading in case of error
      }
    };

    fetchData();
  }, []);

  const toggleUserDetails = (userId) => {
    // Toggle expansion for the selected user
    setExpandedUserId(expandedUserId === userId ? null : userId);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="users-list">
      <strong>Users List</strong>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user._id} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
              <div onClick={() => toggleUserDetails(user._id)} style={{ cursor: 'pointer' }}>
                <strong>User ID:</strong> {user.user_id} <br />
                <strong>Username:</strong> {user.username} <br />
              </div>
              {/* Show full details if this user is expanded */}
              {expandedUserId === user._id && (
                <div style={{ marginTop: '0px' }}>
                <strong>Email:</strong> {user.email} <br />
                  <strong>Phone Number:</strong> {user.phone} <br />
                  <strong>Address:</strong> {user.address} <br />
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default AdminViewUsers;
