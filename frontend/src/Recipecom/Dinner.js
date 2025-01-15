import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import '../Recipecom/Dinner.css'; 
import cs from '../images/categories/Cajun sausage and rice.jpg';
import FriedRice from '../images/categories/chicken fried rice.jpg';
import Hawallian from '../images/categories/Hawaiian chicken salad.jpg';
import MexicanRice from '../images/categories/Mexican Rice.jpg';
import sphagetti from '../images/categories/sphagetti.jpg';
import Noodles from '../images/categories/Chicken Teriyaki Noodles.jpg';

function Dinner() {
  const navigate = useNavigate();
  

  const dinnerRecipes = [
    { image: cs, title: 'Cajun Sausage and Rice', path: '/cajun-sausage' },
    { image: FriedRice, title: 'Chicken Fried Rice', path: '/chicken-fried-rice' },
    { image: Hawallian, title: 'Hawaiian Chicken Salad', path: '/hawaiian-salad' },
    { image: MexicanRice, title: 'Mexican Rice', path: '/mexican-rice' },
    { image: Noodles, title: 'Chicken Teriyaki Noodles', path: '/teriyaki-noodles' },
    { image: sphagetti, title: 'Spaghetti and Meatballs', path: '/spaghetti-meatballs' }
  ];

  

  return (
    <div className="dinner-page">
      <Header />
      <section>
        <h1>Dinner Recipes</h1>
        <div className="recipe-list">
          {dinnerRecipes.map((recipe, index) => (
            <div
              className="recipe-card"
              key={index}
              onClick={() => navigate(recipe.path)}
            
            >
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Dinner;
