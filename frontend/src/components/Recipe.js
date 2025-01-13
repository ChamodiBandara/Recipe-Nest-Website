import React from 'react';
import '../styles/Recipe.css';
import Header from '../Js files/header.js';
import Footer from '../Js files/footer.js';

function Recipe() {
  return (
    <div className="about-page">
        <Header/>
    <section>
      <div className="search-section">
        <p className="search-text">
          Discover recipes that match your taste—quick, easy, and tailored just for you!
        </p>
        <div className="search-bar">
          <input type="text" placeholder="I WANT TO MAKE" className="search-input" />
          <button className="search-button">Search</button>
        </div>
      </div>
      </section>
      <Footer/>

    </div>
  );
}

export default Recipe;
