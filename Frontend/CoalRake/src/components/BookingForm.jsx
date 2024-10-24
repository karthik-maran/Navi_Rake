import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/bookingform.css';
import styled from 'styled-components';

const BookPage = styled.div`
  background-image: url('https://www.maritimegateway.com/wp-content/uploads/2016/10/Coal_Exports.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BookingForm = () => {
  const [fromDestination, setFromDestination] = useState('');
  const [toDestination, setToDestination] = useState('');
  const [coalQuantity, setCoalQuantity] = useState('');
  const [numberOfRakes, setNumberOfRakes] = useState('');
  const [selectedRakeType, setSelectedRakeType] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [destinations, setDestinations] = useState([]);
  const [rakeTypes, setRakeTypes] = useState([]);
  const navigate = useNavigate();

  // Fetch destinations and rake types from the backend
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('http://localhost:5000/sidings');
        const data = await response.json();
        setDestinations(data);
      } catch (error) {
        setError('Failed to fetch destinations.');
      }
    };

    const fetchRakeTypes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/rake-types');
        const data = await response.json();
        setRakeTypes(data);
      } catch (error) {
        setError('Failed to fetch rake types.');
      }
    };

    fetchDestinations();
    fetchRakeTypes();
  }, []);

  const isFutureDate = (date) => {
    const today = new Date();
    const selectedDate = new Date(date);
    return selectedDate >= today;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!fromDestination || !toDestination || !coalQuantity || !numberOfRakes || !selectedRakeType || !deliveryDate) {
      setError('All fields must be filled out.');
      return;
    }

    if (parseFloat(coalQuantity) <= 15) {
      setError('Coal quantity must be greater than 15.');
      return;
    }

    if (parseInt(numberOfRakes) <= 0) {
      setError('Number of rakes must be greater than 0.');
      return;
    }

    if (!isFutureDate(deliveryDate)) {
      setError('Delivery date must be today or a future date.');
      return;
    }

    const user_id = localStorage.getItem('user_id');
    if (!user_id) {
      setError('User not logged in. Please log in to proceed.');
      return;
    }

    const formData = {
      fromDestination,
      toDestination,
      coalQuantity,
      numberOfRakes,
      selectedRakeType,
      deliveryDate,
      user_id
    };

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess('Booking successful!');
        setError('');
        navigate('/rake-cards');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Failed to submit the booking');
    }
  };

  return (
    <BookPage>
      <div className="booking-form-container">
        <h2>Booking Form</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fromDestination">From Destination:</label>
            <select
              id="fromDestination"
              value={fromDestination}
              onChange={(e) => setFromDestination(e.target.value)}
              required
            >
              <option value="">Select From</option>
              {destinations.map((dest, index) => (
                <option key={index} value={dest.name}>{dest.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="toDestination">To Destination:</label>
            <select
              id="toDestination"
              value={toDestination}
              onChange={(e) => setToDestination(e.target.value)}
              required
            >
              <option value="">Select To</option>
              {destinations.map((dest, index) => (
                <option key={index} value={dest.name}>{dest.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="coalQuantity">Coal Quantity:</label>
            <input
              type="number"
              id="coalQuantity"
              value={coalQuantity}
              onChange={(e) => setCoalQuantity(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfRakes">Number of Rakes Needed:</label>
            <input
              type="number"
              id="numberOfRakes"
              value={numberOfRakes}
              onChange={(e) => setNumberOfRakes(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="deliveryDate">Delivery Date:</label>
            <input
              type="date"
              id="deliveryDate"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rakeType">Rake Type:</label>
            <select
              id="rakeType"
              value={selectedRakeType}
              onChange={(e) => setSelectedRakeType(e.target.value)}
              required
            >
              <option value="">Select Rake Type</option>
              {rakeTypes.map((rake) => (
                <option key={rake._id} value={rake.type}>
                  {rake.description}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Submit Booking</button>
        </form>
      </div>
    </BookPage>
  );
};

export default BookingForm;
