import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock, faUtensils, faDownload } from '@fortawesome/free-solid-svg-icons';
import html2pdf from 'html2pdf.js';
import Header from '../components/header';
import Footer from '../components/footer';
import '../Recipepages/FriedRice.css';

function ChickenFriedRice() {
  const recipeRef = useRef(); 

  const handleDownload = () => {
    const element = recipeRef.current; 
    const options = {
      filename: 'ChickenFriedRice.pdf', 
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="recipe-description">
      <Header />
      <section className="recipe-details" ref={recipeRef}>
        <h1>Chicken Fried Rice</h1>
        <div className="rating">
          <FontAwesomeIcon icon={faStar} className="filled-star" />
          <FontAwesomeIcon icon={faStar} className="filled-star" />
          <FontAwesomeIcon icon={faStar} className="filled-star" />
          <FontAwesomeIcon icon={faStar} className="filled-star" />
          <FontAwesomeIcon icon={faStar} className="empty-star" />
        </div>
        <img
          src={require('../images/categories/chicken fried rice.jpg')}
          alt="Chicken Fried Rice"
        />
        <p>
          These fried Brussels sprouts are easy to make and so delicious! Pan-frying them brings out their flavor and they make a colorful green side dish for the holidays.
        </p>
        <div className="recipe-meta">
          <p>
            <FontAwesomeIcon icon={faUtensils} /> <strong>Yield:</strong> 8 servings
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} /> <strong>Prep Time:</strong> 2 hours 15 minutes
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} /> <strong>Cook Time:</strong> 1 hour
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} /> <strong>Total Time:</strong> 3 hours 15 minutes
          </p>
        </div>
        <div className="ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 (16-ounce) loaf brioche bread, cubed</li>
            <li>1 (8-ounce) package cream cheese, cubed</li>
            <li>10 large eggs, beaten</li>
            <li>1 ½ cups whole milk</li>
            <li>1 cup canned pumpkin puree</li>
          </ul>
        </div>
        <div className="directions">
          <h2>Directions</h2>
          <ol>
            <li>Lightly coat a 9x13 baking dish with nonstick spray...</li>
            <li>In a large glass measuring cup...</li>
          </ol>
        </div>
      </section>
      <div className="action-buttons">
        <button onClick={handleDownload} className="download-button">
          <FontAwesomeIcon icon={faDownload} /> Download Recipe
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ChickenFriedRice;
