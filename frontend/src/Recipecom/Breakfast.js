import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import '../Recipecom/Recipe.css'; 

function Breakfast() {
   const navigate = useNavigate();
 
  const breakfastRecipes = [
    { 
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400', 
      title: 'Fluffy Pancakes', 
      path: '/pancakes' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400', 
      title: 'French Toast', 
      path: '/french-toast' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400', 
      title: 'Veggie Omelette', 
      path: '/omelette' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400', 
      title: 'Avocado Toast', 
      path: '/avocado-toast' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400', 
      title: 'Belgian Waffles', 
      path: '/waffles' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400', 
      title: 'Smoothie Bowl', 
      path: '/smoothie-bowl' 
    }
  ];

  return (
    <div className="Recipe-page">
        <Header/>
        <section>
      <h1>Breakfast Recipes</h1>
      <div className="recipe-list">
          {breakfastRecipes.map((recipe, index) => (
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

export default Breakfast;