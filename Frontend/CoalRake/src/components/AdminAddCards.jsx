import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "../Styles/CardView.css";

const AdminAddCards = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Create a navigate function

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/add-data');
        setData(response.data);
      } catch (err) {
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!data) {
    return <p>Loading...</p>; // Add a loading state
  }

  // Function to handle card click
  const handleCardClick = (category) => {
    if (category === 'Users') {
      navigate('/admin/view-users'); // Navigate to the users view page
    } if(category === 'Bookings'){
      navigate('/admin/view-bookings')

    }
    // You can add more conditions here for other categories if needed
  };

  return (
    <div>
      <strong style={{textAlign:'center'}}>View/Modify data</strong>
  
      <div className="card-grid">
        <div className="card" onClick={() => handleCardClick('Users')}>
          <h2>Users: {data.users}</h2>
        </div>
        <div className="card" onClick={() => handleCardClick('Bookings')}>
          <h2>Bookings: {data.bookings}</h2>
        </div>
        <div className="card" onClick={() => handleCardClick('Rakes')}>
          <h2>Rakes: {data.rakes}</h2>
        </div>
        <div className="card" onClick={() => handleCardClick('Sidings')}>
          <h2>Sidings: {data.sidings}</h2>
        </div>
      </div>
    </div>
  );
};

export default AdminAddCards;
