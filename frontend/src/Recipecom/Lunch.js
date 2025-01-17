import React from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import '../Recipecom/Recipe.css'; 
import cs from '../images/categories/Cajun sausage and rice.jpg';
import FriedRice from '../images/categories/chicken fried rice.jpg';
import Hawallian from '../images/categories/Hawaiian chicken salad.jpg';
import MexicanRice from '../images/categories/Mexican Rice.jpg';
import sphagetti from '../images/categories/sphagetti.jpg';
import Noodles from '../images/categories/Chicken Teriyaki Noodles.jpg';



function Lunch() {
  // Array of dinner data)
  const lunchRecipes = [
    { image: cs, title: 'Cajun Sausage and Rice',},
    { image: FriedRice, title:'Chicken Fried Rice', },
    { image: Hawallian, title: 'Hawaiian Chicken Salad ',},
    { image: MexicanRice, title:'Mexican Rice', },
    { image: Noodles, title: 'Chicken Teriyaki Noodles ',},
    { image: sphagetti, title:'Sphagetti and Meat Balls', }
  ];

  return (
    <div className="Recipe-page">
        <Header/>
        <section>
      <h1>Lunch Recipes</h1>
      <div className="recipe-list">
        {lunchRecipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
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

export default Lunch;