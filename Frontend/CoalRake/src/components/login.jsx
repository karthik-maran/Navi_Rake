import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/login.css';
import styled from 'styled-components';


const LoginPage = styled.div`
  background-image: url('https://energyasia.co.in/wp-content/uploads/2022/05/Coal-Train.jpg'); /* Path to your background image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center; 
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  
  const adminCredentials = {
    username: 'admin',
    email: 'admin@gmail.com',
    password: 'admin123',
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username === adminCredentials.username && password === adminCredentials.password && email === adminCredentials.email) {
      navigate('/admin');
    } 

    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        email,
        password,
      });
      if(!response.data.message){
        setSuccess('');
        setError('user not found');
      }

      if (response.data.user) {
        localStorage.setItem('user_id', response.data.user.user_id);
        localStorage.setItem('username', response.data.user.username);
        localStorage.setItem('email', response.data.user.email);
        localStorage.setItem('password', response.data.user.password);

        setSuccess('Login successful!');
        setError('');
        alert('Login successful');
        navigate('/home');
        window.location.reload()
      } else {
        setError(response.data.message || 'Login failed. Please try again.');
        setSuccess('');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
      setSuccess('');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Navigates to the registration page
  };

  return (
    <LoginPage>
      <div className="unique-login-container">
        <div className="unique-login-card">
          <h2 className="unique-login-title">Login</h2>
          {error && <p className="unique-error-message">{error}</p>}
          {success && <p className="unique-success-message">{success}</p>}
          <form onSubmit={handleSubmit} className="unique-login-form">
            <div className="unique-form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="unique-form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="unique-form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="unique-login-button">Login</button>
          </form>
          <p className="unique-register-prompt">
            Don't you have an account?{' '}
            <span 
              className="unique-register-link" 
              onClick={handleRegisterRedirect}
              style={{ color: 'blue', cursor: 'pointer' }}>
              Register
            </span>
          </p>
        </div>
      </div>
    </LoginPage>
  );
};

export default Login;
