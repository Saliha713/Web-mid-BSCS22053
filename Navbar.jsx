// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Favourites from './Fav';

const Navbar = () => {
  const [active, setActive] = useState('Home');

  const handleNavClick = (page) => {
    setActive(page);   };

  return (
    <header className="header">
      <div className="logo" onClick={() => handleNavClick('Home')}>
        🍿 Popcorn Time
      </div>

      <nav className="nav-buttons">
        <Link 
          to="/home" 
          className={`nav-btn ${active === 'Home' ? 'active' : ''}`}
          onClick={() => handleNavClick('Home')}
        >
          Home
        </Link>

        <Link 
          to="/popular" 
          className={`nav-btn ${active === 'Popular' ? 'active' : ''}`}
          onClick={() => handleNavClick('Popular')}
        >
          Popular
        </Link>

        <Link 
          to="/guide" 
          className={`nav-btn ${active === 'Guide' ? 'active' : ''}`}
          onClick={() => handleNavClick('Guide')}
        >
          Guide
        </Link>

        <Link 
          to="Favourites/" 
          className={`nav-btn ${active === 'Favourites' ? 'active' : ''}`}
          onClick={() => handleNavClick('Favourites')}
        >
          Favourites
        </Link>
      </nav>

      <button className="login-btn">Login</button>
    </header>
  );
};

export default Navbar;
