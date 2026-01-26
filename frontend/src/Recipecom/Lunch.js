import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import '../Recipecom/Recipe.css'; 

function Lunch() {
  const navigate = useNavigate();
 
  const lunchRecipes = [
    { 
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop', 
      title: 'Caesar Salad', 
      path: '/caesar-salad' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=600&h=400&fit=crop', 
      title: 'Grilled Chicken Sandwich', 
      path: '/chicken-sandwich' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=400&fit=crop', 
      title: 'Pasta Primavera', 
      path: '/pasta-primavera' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop', 
      title: 'Margherita Pizza', 
      path: '/margherita-pizza' 
    },
{ 
  image: 'https://images.unsplash.com/photo-1613564834361-9436948817d1?w=600&h=400&fit=crop', 
  title: 'Fish Tacos', 
  path: '/fish-tacos' 
},
{ 
  image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=600&h=400&fit=crop', 
  title: 'Chicken Noodle Soup', 
  path: '/chicken-noodle-soup' 
},
{ 
  image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=600&h=400&fit=crop', 
  title: 'Philly Cheesesteak', 
  path: '/philly-cheesesteak' 
},
    { 
      image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600&h=400&fit=crop', 
      title: 'Burrito Bowl', 
      path: '/burrito-bowl' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1546069901-eacef0df6022?w=600&h=400&fit=crop', 
      title: 'Poke Bowl', 
      path: '/poke-bowl' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?w=600&h=400&fit=crop', 
      title: 'Grilled Cheese', 
      path: '/grilled-cheese' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=600&h=400&fit=crop', 
      title: 'Chicken Quesadilla', 
      path: '/quesadilla' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop', 
      title: 'Buddha Bowl', 
      path: '/buddha-bowl' 
    }
  ];

  return (
    <div className="Recipe-page">
        <Header/>
        <section>
      <h1>Lunch Recipes</h1>
      <div className="recipe-list">
          {lunchRecipes.map((recipe, index) => (
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

export default Lunch;