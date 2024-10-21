import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/Registration.css';
import styled from 'styled-components';  // Optional: Create a CSS file for styling

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
 


  const RegsiterPage = styled.div`
  background-image: url('https://news.indianrailways.info/wp-content/uploads/2018/02/ntpc-rakes.jpg'); /* Path to your background image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Debugging check
    console.log("Registering with data:", { username, email, password, phone, address, confirmPassword });
  
    // Client-side validation
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
  
    if (!/^\d{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
  
    const UserData = {
      username,
      email,
      phone,
      address,
      password,
    };
  
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(UserData),
      });
      
      const result = await response.json(); // Parse the JSON from the response
  
      // Debugging check
      console.log("Response from server:", result);
  
      if (response.ok) {  // response.ok checks if the status is in the range of 200-299
        setSuccess('Registration successful!');
        setError('');
        navigate('/login');  // Navigate to login page after success
      } else {
        setError(result.message || 'Registration failed. Please try again.');
        setSuccess('');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred. Please try again.');
      setSuccess('');
    }
  };
  
  return (
    <RegsiterPage>
    <div className="register-container">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Company Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
    </RegsiterPage>
  );
};

export default Register;
