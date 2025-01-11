import React from 'react';
import '../styles/About.css'; //  CSS file for styling
import Header from '../Js files/header.js';
import Footer from '../Js files/footer.js';
import chef from '../images/About images/chef-smiling.jpg';


function About() {
  return (

    <div className="about-page">
        <Header/>
 
    <section className="about-section">
  <div className="about-container">
    {/* Left Text Section */}
    <div className="about-text">
      <h2 className="about-title">Recipe Nest</h2>
      <p className="about-description">
        Platform created to connect food lovers worldwide by sharing, discovering, and celebrating a diverse range of recipes. Born from a shared passion for cooking, our mission is to offer a space where creativity thrives, and culinary ideas are freely exchanged. We aim to provide a wide variety of recipes catering to different tastes and dietary needs, while building a vibrant community for both beginners and seasoned cooks. Led by a dedicated team of culinary experts and developers, Recipe Nest invites you to join us in this flavourful journey and share your unique recipes with the world.
      </p>
    </div>

    {/* Right Image Section */}
    <div className="about-image-container">
      <img
        src={require('../images/about.jpg')}
        alt="Person Cooking in Kitchen"
        className="about-image"
      />
    </div>
  </div>
  
</section>
 {/* Follow Us Section */}
 <section className="follow-us-section">
  <div className="social-icons-container">
    <h3 className="follow-us-title">Follow us</h3>
    <div className="social-icons">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-youtube"></i>
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="mailto:example@email.com" className="social-icon">
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  </div>
  <div className="email-updates-container">
    <p>Sign up for Email Updates</p>
    <button className="sign-up-button">Sign Up</button>
  </div>
</section>
{/* What we offer */}
<section className="what-we-offer-section">
  <h2 className="offer-title">What We Offer?</h2>
  <div className="offer-container">
    
    <div className="offer-image">
      <img src={chef} 
      alt="Smiling Chef" 
      className="offer-image-content" />
    </div>

   
    <div className="offer-description">
      <h3>A Vast Collection of Recipes</h3>
      <p>From quick and easy meals to gourmet delights, our store features a diverse range of recipes to suit every taste and occasion.</p>
      <h3>Community Contributions</h3>
      <p>Got a recipe idea? Share it with the world! Recipe Nest encourages users to submit their own creations and become a part of our growing community.</p>
      <h3>Cooking Made Easy</h3>
      <p>Our step-by-step guides, tips, and cooking hacks ensure that anyone can recreate the magic of great dishes in their own kitchen.</p>
      <h3>Healthy Choices</h3>
      <p>Explore recipes tailored to various dietary needs and preferences, including vegan, gluten-free, and low-calorie options.</p>
    </div>
  </div>
</section>
<section className="cta-section">
  <h2 className="cta-title">Bring your recipes to the nest</h2>
  <button className="cta-button">Add Recipes</button>
</section>

      
     
    <Footer/>
  </div>
  );
}

export default About;
