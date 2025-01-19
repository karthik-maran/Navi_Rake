import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../Styles/ReportGeneration.css';


const ReportPage = styled.div`
  background-image: url('https://te.wikipedia.org/wiki/%E0%B0%9A%E0%B1%87%E0%B0%AC%E0%B1%8D%E0%B0%B0%E0%B1%8B%E0%B0%B2%E0%B1%81_%E0%B0%B0%E0%B1%88%E0%B0%B2%E0%B1%8D%E0%B0%B5%E0%B1%87_%E0%B0%B8%E0%B1%8D%E0%B0%9F%E0%B1%87%E0%B0%B7%E0%B0%A8%E0%B1%81#/media/%E0%B0%A6%E0%B0%B8%E0%B1%8D%E0%B0%A4%E0%B1%8D%E0%B0%B0%E0%B0%82:Freight_train_in_Chebrole_railway_station.jpg'); /* Path to your background image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center; 
`;


const ReportGeneration = () => {
  const [data, setData] = useState({ users: [], bookings: [] });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user_id = localStorage.getItem('user_id'); // Retrieve user_id from localStorage

        if (!user_id) {
          setError('User ID is missing. Please log in again.');
          return;
        }

        const response = await fetch(`http://localhost:5000/api/register-data?user_id=${user_id}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error from server:', errorData);
          throw new Error('Failed to fetch report data');
        }

        const result = await response.json();
        setData(result);
        setError(''); // Clear any previous errors
      } catch (error) {
        console.error('Error fetching report data:', error);
        setError('Failed to fetch report data');
      }
    };

    fetchData(); // Fetch data on component mount
  }, []);

  const handleOrderRake = async () => {
    if (!data.bookings || data.bookings.length === 0) {
      setError('No bookings available to order a rake');
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating API call
      setSuccess('Rake ordered successfully!');
      setError('');
    } catch (error) {
      setError('Failed to order rake');
    }

  };

  return (
    
    <div className="report-generation-container">
      <h2>Report Generation</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <div className="report-data">
        <h3>User Information</h3>
        {data.users && data.users.length > 0 && (
          <div className="user-info">
            <p><strong>Name:</strong> {data.users[0].username}</p>
            <p><strong>Email:</strong> {data.users[0].email}</p>
            <p><strong>Phone:</strong> {data.users[0].phone}</p>
            <p><strong>Address:</strong> {data.users[0].address}</p>
          </div>
        )}

        <h3>Bookings</h3>
        <div className="bookings">
          {data.bookings && data.bookings.length > 0 && (
            data.bookings.map((booking) => (
              <div key={booking._id} className="booking-item">
                 <p><strong>From:</strong> {booking.fromDestination}</p> {/* Corrected: access property from booking */}
                 <p><strong>To:</strong> {booking.toDestination}</p> {/* Added 'toDestination' for clarity */}
                 <p><strong>Capacity:</strong> {booking.coalQuantity}</p>
                 <p><strong>Number of Rakes needed:</strong> {booking.numberOfRakes}</p>
              


              </div>
            ))
          )}
        </div>
      </div>
      <button onClick={handleOrderRake}>Order Rake</button>
    </div>
   
  );
};

export default ReportGeneration;
