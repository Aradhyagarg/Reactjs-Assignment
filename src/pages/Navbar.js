import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar container-fluid nav-me navbar-expand-lg bg-primary">
      <Link to="/" className="navbar-brand">TasksBoard</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/Weather" className="nav-link">Weather</Link>
          </li>
          <li className="nav-item">
            <Link to="/Calculater" className="nav-link">Calculater</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;