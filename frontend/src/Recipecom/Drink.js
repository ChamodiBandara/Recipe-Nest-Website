import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import '../Recipecom/Recipe.css'; 

function Drink() {
  const navigate = useNavigate();
 
  const drinkRecipes = [
   { 
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop', 
    title: 'Fresh Orange Juice', 
    path: '/orange-juice' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=400&fit=crop', 
    title: 'Chocolate Milkshake', 
    path: '/chocolate-milkshake' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&h=400&fit=crop', 
    title: 'Strawberry Milkshake', 
    path: '/strawberry-milkshake' 
  },
   { 
    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&h=400&fit=crop', 
    title: 'Fresh Lemonade', 
    path: '/lemonade' 
  },
    { 
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&h=400&fit=crop', 
      title: 'Iced Coffee', 
      path: '/iced-coffee' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=600&h=400&fit=crop', 
      title: 'Green Smoothie', 
      path: '/green-smoothie' 
    }
  ];

  return (
    <div className="Recipe-page">
      <Header />
      <section className="drink-section">
        <h1>Drinks & Beverages</h1>
        <div className="recipe-list">
          {drinkRecipes.map((recipe, index) => (
            <div
              className="recipe-card"
              key={index}
              onClick={() => navigate(recipe.path)}
              style={{ cursor: 'pointer' }}
            >
              <div className="image-container">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400?text=Drink+Image';
                  }}
                />
              </div>
              <h3>{recipe.title}</h3>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Drink;