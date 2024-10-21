'use client';
import React, { useState, useEffect } from 'react';
import '../Styles/Navbar.css'; // Import the CSS file for styling

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown
  const [username, setUsername] = useState(null); // Username state

  // Retrieve username from localStorage on component mount
  useEffect(() => {
    const loggedInUsername = localStorage.getItem('username');

    if (loggedInUsername) {
      setUsername(loggedInUsername); // Set the username state
    }

    // Listen for changes in localStorage (optional if multi-tab behavior is needed)
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Handle changes in localStorage across tabs
  const handleStorageChange = () => {
    const loggedInUsername = localStorage.getItem('username');
    if (loggedInUsername) {
      setUsername(loggedInUsername); // Update username state
    } else {
      setUsername(null); // Clear username if logged out
    }
  };

  // Toggle mobile nav menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Toggle user dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Logout functionality
  const handleLogout = () => {
    localStorage.removeItem('username'); // Clear localStorage
    setUsername(null); // Update username state
    setDropdownOpen(false); // Close dropdown after logout
    // Optionally, redirect to the login page or homepage
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-left"></div>
        <div className="navbar-links">
          <a className="navbar-link" href="/Home">Home</a>
          <a className="navbar-link" href="/about">About</a>
          <a className="navbar-link" href="/getstarted">Get Started</a>
          <a className="navbar-link" href="/support">Support</a>

          {/* Display user dropdown if logged in */}
          {username ? (
            <div className="navbar-user-container">
              <span className="navbar-user" onClick={toggleDropdown}>
                {`Welcome, ${username}`}
              </span>

              {/* Dropdown for order history and logout */}
              {dropdownOpen && (
                <div className="navbar-user-dropdown">
                  <ul>
                    <li>
                      <a href="/order-history">Booking History</a>
                    </li>
                    <li>
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <a className="navbar-link" href="/login">Log In/Register</a>
          )}
        </div>

        {/* Mobile toggle button */}
        <svg
          onClick={toggleNav}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="navbar-toggle"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </div>

      {/* Mobile menu when open */}
      {isNavOpen && (
        <div className="navbar-mobile-links">
          <a className="navbar-mobile-link" href="/about">About</a>
          <a className="navbar-mobile-link" href="/getstarted">Get Started</a>
          <a className="navbar-mobile-link" href="/support">Support</a>

          {/* Mobile view: display user or login/register */}
          {username ? (
            <span className="navbar-mobile-user">{`Welcome, ${username}`}</span>
          ) : (
            <a className="navbar-mobile-link" href="/login">Log In/Register</a>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
