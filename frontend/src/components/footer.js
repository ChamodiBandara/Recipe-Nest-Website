import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* left */}
        <div className="footer-left">
          <h3>FOLLOW US</h3>
          <div className="footer-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> </a>
          <i className="fab fa-facebook"></i>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> </a>
            <i className="fab fa-instagram"></i>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"> </a>
            <i className="fab fa-youtube"></i>
            <a href="https://www.envelope.com" target="_blank" rel="noopener noreferrer"> </a>
            <i className="fas fa-envelope"></i>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> </a>
            <i className="fab fa-twitter"></i>
          </div>
          <p>&copy; RecipeNest All Rights Reserved</p>
        </div>

        {/* Mid*/}
        <div className="footer-center">
          <a href="#top" className="back-to-top">
            <i className="fas fa-arrow-up"></i>
            Back to Top
          </a>
        </div>

        {/* right */}
        <div className="footer-right">
          <ul>
            <li><a href="/recipes">Search Recipes</a></li>
            <li><a href="/login">Sign In</a></li>
            <li><a href="/login">Join Free</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="https://www.facebook.com">Contact</a></li>
          </ul>
          <ul>
            <li><a href="#top">Privacy Policy</a></li>
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
