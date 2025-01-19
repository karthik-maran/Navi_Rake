import React, { useState, useEffect } from 'react';
import '../Styles/RakeDetails.css'; // Optional: Create a CSS file for styling
import axios from 'axios'; // Ensure you have axios installed
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const RakeCardsPage = () => {
  const [rakeTypes, setRakeTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchRakeTypes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/rake-types');
        setRakeTypes(response.data);
      } catch (err) {
        setError('Failed to fetch rake details');
      } finally {
        setLoading(false);
      }
    };

    fetchRakeTypes();
  }, []);

  const handleRakeClick = () => {
    // Navigate to report generation page when a rake card is clicked
    navigate('/report-data');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="rake-cards-container">
      <h2>Available Railway Rakes</h2>
      <div className="rake-cards-grid">
        {rakeTypes.map((rake) => (
          <div
            key={rake._id}
            className="rake-card"
            onClick={handleRakeClick} // Add onClick handler to the rake card
          >
            <img src={rake.image} alt={rake.type} className="rake-card-image" />
            <div className="rake-card-content">
              <h3>{rake.type}</h3>
              <p>{rake.description}</p>
              <p>Capacity: {rake.capacity}</p>
              <p>Price:Rs{rake.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default RakeCardsPage;
