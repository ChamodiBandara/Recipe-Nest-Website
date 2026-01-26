import React from "react";
import "../styles/header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login"); // or "/" if you prefer
  };

  return (
    <header className="header">
      <div className="top-header">
        <div className="logo">Recipe Nest</div>

        <nav className="nav">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/recipes">Recipe</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <div className="nav-icons">
          <button className="icon-button">
            <Link to="/recipes">
              <i className="fas fa-search"></i>
            </Link>
          </button>

          <button className="icon-button">
            <i className="fas fa-bookmark"></i>
          </button>

          {/* ✅ LOGIN / LOGOUT TOGGLE */}
          {isLoggedIn ? (
            <button className="icon-button logout-btn" onClick={handleLogout} title="Logout">
              <i className="fas fa-sign-out-alt"></i>
            </button>
          ) : (
            <button className="icon-button">
              <Link to="/login">
                <i className="fas fa-user"></i>
              </Link>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
