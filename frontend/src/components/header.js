import React from "react";
import "../styles/header.css";

import { Link } from "react-router-dom"; 

   const Header = () => {
    return (
   <header className="header">
   <div className="top-header">
     <div className="logo">Recipe Nest</div>
     <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipe</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
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
    
   </header>
    );
};

export default Header;