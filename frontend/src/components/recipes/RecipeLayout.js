import React from 'react';
import './RecipeLayout.css';

const RecipeLayout = ({ 
  title, 
  image, 
  yield: yieldInfo, 
  prepTime, 
  cookTime, 
  totalTime, 
  ingredients, 
  directions, 
  buttermilkGlaze, 
  children // To hold the UserReview component
}) => { 
  return (
    <div className="recipe-container">
      <div className="recipe-header">
        <h1>{title}</h1>
        {/* You can implement star rating component here */}
        <div className="social-icons">
          {/* Add social media icons (optional) */}
        </div>
      </div>

      <div className="recipe-image">
        <img src={image} alt={title} />
      </div>

      <div className="recipe-info">
        <div className="recipe-details">
          <p><strong>Yield:</strong> {yieldInfo}</p>
          <p><strong>Prep Time:</strong> {prepTime}</p>
          <p><strong>Cook Time:</strong> {cookTime}</p>
          <p><strong>Total Time:</strong> {totalTime}</p>
        </div>
      </div>

      <div className="recipe-ingredients">
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="recipe-directions">
        <h2>Directions</h2>
        <ol>
          {directions.map((direction, index) => (
            <li key={index}>{direction}</li>
          ))}
        </ol>
      </div>

      {buttermilkGlaze && (
        <div className="buttermilk-glaze">
          <h3>For the Buttermilk Glaze</h3>
          <p>{buttermilkGlaze}</p>
        </div>
      )}

    </div>
  );
};

export default RecipeLayout;