import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import '../Recipecom/Recipe.css'; 
import MeatLoaf from '../images/categories/meatloaf.jpg';

function Dinner() {
  const navigate = useNavigate();
  
  const dinnerRecipes = [
    { 
      image: MeatLoaf, 
      title: 'MeatLoaf', 
      path: '/MeatLoaf' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&h=400&fit=crop', 
      title: 'Beef Steak', 
      path: '/beef-steak' 
    },
 { 
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&h=400&fit=crop', 
      title: 'Stuffed Bell Peppers', 
      path: '/stuffed-peppers' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop', 
      title: 'Roast Chicken', 
      path: '/roast-chicken' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop', 
      title: 'Lasagna', 
      path: '/lasagna' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&h=400&fit=crop', 
      title: 'Lamb Chops', 
      path: '/lamb-chops' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=400&fit=crop', 
      title: 'Spaghetti Carbonara', 
      path: '/spaghetti-carbonara' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop', 
      title: 'BBQ Ribs', 
      path: '/bbq-ribs' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600&h=400&fit=crop', 
      title: 'Pork Tenderloin', 
      path: '/pork-tenderloin' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=600&h=400&fit=crop', 
      title: 'Shrimp Alfredo', 
      path: '/shrimp-alfredo' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&h=400&fit=crop', 
      title: 'Chicken Parmesan', 
      path: '/chicken-parmesan' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop', 
      title: 'Beef Stir Fry', 
      path: '/beef-stir-fry' 
    }
  ];

  return (
    <div className="Recipe-page">
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
      <Footer />
    </div>
  );
}

export default Dinner;