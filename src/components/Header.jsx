import React from "react";
import { Link } from 'react-router-dom';
import '../Style/program.css';
import '../Style/styles.css';

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">
          <img src="images/logo.png" alt="logo" />
        </Link>
      </div>
      <ul className="nav__links">
        <li className="link">
          <Link to="/" className="ab">
            Home
          </Link>
        </li>
        <li className="link">
          <Link to="/services" className="ab">
            Services
          </Link>
        </li>
        <li className="link">
          <Link to="/about" className="ab">
            About
          </Link>
        </li>
        <li className="link">
          <Link to="/community" className="ab">
            Community
          </Link>
        </li>
      </ul>
      <div className="nav__toggle"></div>
      {isLoggedIn ? (
        <button className="btn" onClick={onLogout}>Logout</button>
      ) : (
        <Link to="/login">
          <button className="btn">Join Now</button>
        </Link>
      )}
    </nav>
  );
};

export default Header;