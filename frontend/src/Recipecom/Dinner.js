import React from 'react';
import Header from '../Js files/header.js';
import Footer from '../Js files/footer.js';
import '../Recipecom/Dinner.css'; 
import cs from '../images/categories/Cajun sausage and rice.jpg';
import FriedRice from '../images/categories/chicken fried rice.jpg';
import Hawallian from '../images/categories/Hawaiian chicken salad.jpg';
import MexicanRice from '../images/categories/Mexican Rice.jpg';
import sphagetti from '../images/categories/sphagetti.jpg';
import Noodles from '../images/categories/Chicken Teriyaki Noodles.jpg';
import { Link,useNavigate } from 'react-router-dom';

function Dinner() {
  const navigate = useNavigate(); // Optional for programmatic navigation



  const dinnerRecipes = [
    { image: cs, title: 'Cajun Sausage and Rice',},
    { image: FriedRice, title:'Chicken Fried Rice', },
    { image: Hawallian, title: 'Hawaiian Chicken Salad ',},
    { image: MexicanRice, title:'Mexican Rice', },
    { image: Noodles, title: 'Chicken Teriyaki Noodles ',},
    { image: sphagetti, title:'Sphagetti and Meat Balls', }
  ];

  return (
    <div className="dinner-page">
        <Header/>
        <section>
      <h1>Dinner Recipes</h1>
      <div className="recipe-list">
        {dinnerRecipes.map((recipe, index) => (
          <Link key={index} to={`/recipes/${recipe.title.toLowerCase().replace(/\s/g, '-')}`}>
          <div className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
          </div>
          </Link>
        ))}
      </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Dinner;