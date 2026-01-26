import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import '../Recipecom/Recipe.css'; 

function Mexican() {
   const navigate = useNavigate();

  const mexicanRecipes = [
    { 
      image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop', 
      title: 'Chicken Tacos', 
      path: '/chicken-tacos' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&h=400&fit=crop', 
      title: 'Beef Burrito', 
      path: '/beef-burrito' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=600&h=400&fit=crop', 
      title: 'Cheese Quesadilla', 
      path: '/quesadilla' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=600&h=400&fit=crop', 
      title: 'Chicken Enchiladas', 
      path: '/enchiladas' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1599974852indeed37-3586b2c?w=600&h=400&fit=crop', 
      title: 'Guacamole & Chips', 
      path: '/guacamole' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?w=600&h=400&fit=crop', 
      title: 'Mexican Rice', 
      path: '/mexican-rice' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=600&h=400&fit=crop', 
      title: 'Nachos Supreme', 
      path: '/nachos' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=600&h=400&fit=crop', 
      title: 'Beef Fajitas', 
      path: '/fajitas' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1642741382169-8c5c023ab6a0?w=600&h=400&fit=crop', 
      title: 'Churros', 
      path: '/churros' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=600&h=400&fit=crop', 
      title: 'Carnitas', 
      path: '/carnitas' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?w=600&h=400&fit=crop', 
      title: 'Refried Beans', 
      path: '/refried-beans' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335638f?w=600&h=400&fit=crop', 
      title: 'Tortilla Soup', 
      path: '/tortilla-soup' 
    }
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
              <img 
                src={recipe.image} 
                alt={recipe.title}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400/ff6b6b/ffffff?text=' + recipe.title;
                }}
              />
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