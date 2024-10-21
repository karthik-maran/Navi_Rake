import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AdminViewBookings = () => {
  const [bookings, setBookings] = useState([]); // Store fetched bookings
  const [error, setError] = useState(''); // Store any error messages
  const [loading, setLoading] = useState(true); // Loading state
  const [expandedBookingId, setExpandedBookingId] = useState(null); // Track which booking is expanded
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch bookings from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bookings');
        setBookings(response.data); // Update bookings state with fetched data
        setLoading(false); // Turn off loading when data is fetched
      } catch (err) {
        setError('Failed to fetch bookings');
        setLoading(false); // Turn off loading in case of error
      }
    };

    fetchData();
  }, []);

  const toggleBookingDetails = (bookingId) => {
    // Toggle expansion for the selected booking
    setExpandedBookingId(expandedBookingId === bookingId ? null : bookingId);
  };

  const handleUpdateBooking = (bookingId) => {
    // Navigate to the update page with the bookingId
    navigate(`/admin/update-booking/${bookingId}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="bookings-list">
      <strong  style={{margin:'auto', paddingTop:'50px'}}>Bookings List</strong>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking) => (
            <li key={booking._id} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
              <div onClick={() => toggleBookingDetails(booking._id)} style={{ cursor: 'pointer' }}>
                <strong>Booking ID:</strong> {booking.user_id} <br />
                <strong>From:</strong> {booking.fromDestination} <br />
              </div>
              {/* Show full details if this booking is expanded */}
              {expandedBookingId === booking._id && (
                <div style={{ marginTop: '0px' }}>
                  <strong>To:</strong> {booking.toDestination} <br />
                  <strong>Date:</strong> {new Date(booking.deliveryDate).toLocaleDateString()} <br />
                  <strong>Coal Quantity:</strong> {booking.coalQuantity} <br />
                  <strong>Number of Rakes:</strong> {booking.numberOfRakes} <br />
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: 'auto' }}>
                  <button  onClick={() => handleUpdateBooking(booking._id)}  style={{ width: '20%', height: '30%' }}>Update</button>
                  <button  onClick={() => handleDeleteBooking(booking._id)}  style={{ width: '20%', height: '30%' }}> Delete </button>
                  </div> {/* Update button */}
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings found</p>
      )}
    </div>
  );
};

export default AdminViewBookings;
