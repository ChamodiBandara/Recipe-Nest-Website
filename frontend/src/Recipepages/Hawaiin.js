import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faClock, faUtensils, } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/header';
import Footer from '../components/footer';
import '../Recipepages/Recipepage.css';

function Hawaiian() {
  const recipeRef = useRef(); 



  return (
    <div className="recipe-description">
      <Header />
      <section className="recipe-details" ref={recipeRef}>
       <div className="topic-bar"> 
        <h1>Hawaiian Chicken Salad</h1>
        </div>
        <div className="icon-bar2">
    <button className="icon-button2" title="Save">
      <i className="fas fa-bookmark"></i>
    </button>
    <button className="icon-button2" title="Favorite">
      <i className="fas fa-star"></i>
    </button>
    <button className="icon-button2" title="Download">
      <i className="fas fa-download"></i>
    </button>
    <button className="icon-button2" title="Print">
      <i className="fas fa-print"></i>
    </button>
        </div>
        <img
          src={require('../images/categories/Hawaiian chicken salad.jpg')}
          alt="Hawaiian Chicken Salad"
        />
        <div className='Food-description'>
        <p>
          These fried Brussels sprouts are easy to make and so delicious! Pan-frying them brings out their flavor and they make a colorful green side dish for the holidays.
        </p> </div>
        <div className="recipe-meta">
          <p>
            <FontAwesomeIcon icon={faUtensils} /> <strong>Yield:</strong> 3 servings
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} /> <strong>Prep Time:</strong> 10 minutes
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} /> <strong>Cook Time:</strong> 15 minutes
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} /> <strong>Total Time:</strong> 25 minutes
          </p>
        </div>
        <div className="ingredients">
          <h2>Ingredients</h2>
          <ul>
         <li> 2 cups cooked rice (preferably day-old)</li>
         <li>1 cup chicken breast, diced</li>
         <li>2 tablespoons soy sauce</li>
         <li>1 tablespoon oyster sauce (optional)</li>
         <li>1 teaspoon sesame oil</li>
         <li>1/2 cup frozen peas and carrots mix</li>
         <li>1/4 cup green onions, chopped</li>
         <li>2 cloves garlic, minced</li>
         <li>2 large eggs</li>
         <li>2 tablespoons vegetable oil (or any neutral oil)</li>
         <li>Salt and pepper to taste</li>
          </ul>
        </div>
        <div className="directions">
          <h2>Directions</h2>
          <ol>
         <li> Heat 1 tablespoon of oil in a large skillet or wok over medium-high heat. Add diced chicken, season with salt and pepper, and stir-fry until fully cooked, about 5–7 minutes. Remove from the pan and set aside.</li>

         <li> In the same pan, add a little more oil if needed. Crack the eggs directly into the pan, scramble them until just set, then remove and set aside.  </li> 

         <li> Add the remaining oil to the pan and toss in minced garlic, peas, and carrots. Stir-fry for 2–3 minutes until fragrant and the vegetables are slightly softened.</li> 

         <li> Break up any clumps of rice and add it to the pan. Stir-fry the rice with the vegetables, mixing well.</li> 

         <li> Drizzle soy sauce, oyster sauce (if using), and sesame oil over the rice. Stir everything thoroughly to ensure the rice is evenly coated with the sauces.</li> 

         <li> Add the cooked chicken and scrambled eggs back into the pan. Mix all the ingredients together and cook for another 2–3 minutes.</li> 

         <li> Toss in the chopped green onions, stir to combine, and serve hot. Enjoy your delicious Chicken Fried Rice!</li> 
          </ol>
        </div>
        </section>
        <section className='review-bg'>
  <div className='review-container'>
          
            <h3>Hawaiian Chicken Salad</h3>
           <h4> LEAVE A REPLY </h4>
           <div className= 'slogan'>Your email address will not be published.Required fields are marked*</div>
          <div className='slogan2'>Made it? Leave a review </div>
          <h5>Comment*</h5>
            <div className="review-bar1">
              <input type="text"
              className='comment'/>
              </div>
              <h5>Name*</h5>
            <div className="review-bar2">
              <input type="text"
              className='Name'/>
              </div>
              <h5>Email*</h5>
            <div className="review-bar3">
              <input type="text"
              className='Email'/>
              </div>
              
                
              
                <button className='Submit-button'>Post comment</button>
            
          
              

        </div>
        </section>

     
      
      <Footer />
    </div>
  );
}

export default Hawaiian;