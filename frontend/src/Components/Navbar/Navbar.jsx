import React from 'react';
import './Navbar.css';
import Navbarlist from './Navbarlist';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { isLoggedIn, userr, checkUserLoggedIn, handleLogout } = useContext(UserContext);

  const location = useLocation();

  const isLoginPage = location.pathname === '/login';

  const renderAuthButton = () => {
    if (isLoggedIn) {
      return (
        <div className="ml-auto">
          {isLoginPage ? null : (
            <button onClick={handleLogout} className="login-button">
              <Link to="/">Sign out</Link>
            </button>
          )}
        </div>
      );
    } else {
      return (
        <div className="ml-auto">
          {isLoginPage ? null : (
            <button className="login-button">
              <Link to="/login">Sign in</Link>
            </button>
          )}
        </div>
      );
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-links">
        <h2>
          <Link to="/" style={{ textDecoration: 'none', color: 'orange' }}>
            FIXIT
          </Link>
        </h2>
        <ul className="navitems">
          <Navbarlist />
          <li>
            <a href="http://localhost:8000" target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
              Chatbot
            </a>
          </li>
          {/* Add search input with icon */}
          <li className="hehehe">
            
            <input  type="text" placeholder="Search...." className="search-input" />
            
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </li>
        </ul>
      </div>
      <div className="chat-login-container">
    <button className="login-button">
        <Link to="/chat">Chat</Link>
    </button>
    {renderAuthButton()}
</div>
</nav>
  );
};

export default Navbar;
