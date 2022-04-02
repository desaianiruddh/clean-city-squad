import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary px-3 d-flex justify-content-between">
      <div className="fs-4 fw-bold navbar-brand">Clean City Squad</div>
      <div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  me3-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/signup-and-login">
                Login/Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/admin-login">
                Admin Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/aboutus">
                AboutUs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
