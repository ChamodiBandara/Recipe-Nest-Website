import React from 'react';
import '../styles/Recipe.css';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import dinner from '../images/Recipes/dinner.jpg';
import breakfast from '../images/Recipes/breakfast.jpg';
import lunch from '../images/Recipes/lunch.jpg';
import salad from '../images/Recipes/salad.jpg';
import dessert from '../images/Recipes/dessert.jpg';
import Thai from '../images/Recipes/thai.jpg';
import Indian from '../images/Recipes/indian.jpg';
import Mexican from '../images/Recipes/mexican.jpg';
import drink from '../images/Recipes/drink.jpg';


function Recipe() {
  const navigate = useNavigate(); 
  const handleCategoryClick = (category) => {
    navigate(`/${category.title.toLowerCase()}`); 
  };


  
//array
const categories = [
  { image: dinner, title: 'Dinner' },
  { image: breakfast, title: 'Breakfast' },
  { image: lunch, title: 'Lunch' },
  { image: salad, title: 'Salad' },
  { image: dessert, title: 'Dessert' },
  { image: drink, title: 'Drink' },
  { image: Thai, title: 'Thai' },
  { image: Indian, title: 'Indian' },
  { image: Mexican, title: 'Mexican' },
];


  return (
    <div className="Recipe-page">
        <Header/>
    <section>
      <div className="search-section">
        <p className="search-text">
          Discover recipes that match your taste—quick, easy, and tailored just for you!
        </p>
        <div className="search-bar">
          <input type="text" 
          placeholder="I WANT TO MAKE"
          className="search-input" />
          <button className="search-button">Search</button>
        </div>
      </div>
      </section>
      <section>

      {/* Recipes categories */}
      <section className="recipe-categories">
      <h2>Recipe Categories</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div className="category-card" onClick={() => handleCategoryClick(category)}
          key={index}>
            <img
              src={category.image}
              alt={category.title}
              className="category-image"
            />
            <h3>{category.title}</h3>
          </div>
        ))}
      </div>
    </section>
      </section>
      
          {/* Subscription Section */}
      <section className="subscription-section">
        <h2>Want More Recipes From Recipe Nest?</h2>
        <p>
          Sign up for FREE quick and easy recipes delivered right to
          </p> <p> your inbox!</p>
        
        <p>You'll receive new recipes as soon as they are published.</p>
        <div className="subscription-form">
          <input
            type="email"
            placeholder="Email Address"
            className="subscription-input"
          />
          </div>
          <div className="signup-button">
          <button className="subscription-button">Sign Up</button>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Recipe;
