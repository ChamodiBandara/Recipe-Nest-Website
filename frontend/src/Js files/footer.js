import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h3>FOLLOW US</h3>
          <div className="footer-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fas fa-envelope"></i>
            <i className="fab fa-twitter"></i>
          </div>
          <p>&copy; RecipeNest All Rights Reserved</p>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <a href="#top" className="back-to-top">
            <i className="fas fa-arrow-up"></i>
            Back to Top
          </a>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <ul>
            <li><a href="#">Search Recipes</a></li>
            <li><a href="#">Sign In</a></li>
            <li><a href="#">Join Free</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Get Support</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
