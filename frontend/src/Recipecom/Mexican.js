import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import '../Recipecom/Recipe.css'; 
import MeatLoaf from '../images/categories/meatloaf.jpg';
import FriedRice from '../images/categories/chicken fried rice.jpg';
import Hawaiian from '../images/categories/Hawaiian chicken salad.jpg';
import MexicanRice from '../images/categories/Mexican Rice.jpg';
import Pizza from '../images/categories/Chicken pizza.jpg';
import Noodles from '../images/categories/Chicken Teriyaki Noodles.jpg';

function Mexican() {
   const navigate = useNavigate();

  const mexicanRecipes = [
    { image: MeatLoaf, title: 'MeatLoaf', path: '/MeatLoaf' },
    { image: FriedRice, title: 'Chicken Fried Rice', path: '/chicken-fried-rice' },
    { image: Hawaiian, title: 'Hawaiian Chicken Salad', path: '/hawaiian-chicken-salad' },
    { image: MexicanRice, title: 'Mexican Rice', path: '/mexican-rice' },
    { image: Noodles, title: 'Chicken Teriyaki Noodles', path: '/chicken-teriyaki-noodles' },
    { image: Pizza, title: 'Chicken Pizza', path: '/chicken-pizza' }
  ];

  return (
    <div className="Recipe-page">
        <Header/>
        <section>
      <h1>Mexican Recipes</h1>
      <div className="recipe-list">
          {mexicanRecipes.map((recipe, index) => (
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
      <Footer/>
    </div>
  );
}

export default Mexican;