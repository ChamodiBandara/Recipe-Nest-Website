import React from "react";
import "../styles/header.css";

import { Link } from "react-router-dom"; // Import Link from react-router-dom
{/* Header Section */}
   const Header = () => {
    return (
   <header className="header">
   <div className="top-header">
     <div className="logo">Recipe Nest</div>
       <div className="nav-icons">
         <button className="icon-button">
           <i className="fas fa-search"></i>
         </button>
         <button className="icon-button">
           <i className="fas fa-bookmark"></i>
         </button>
         <button className="icon-button">
           <i className="fas fa-user"></i>
         </button>
       </div>
       </div>
       {/* Navigation bar */}
       {/* Navigation bar */}
       <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipe</Link>
          </li>
          <li>
            <Link to="/popular">Popular</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
   </header>
    );
};

export default Header;