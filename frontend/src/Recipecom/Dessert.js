import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import '../Recipecom/Recipe.css'; 

function Dessert() {
  
   const navigate = useNavigate();

  const dessertRecipes = [
    { 
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop', 
      title: 'Chocolate Cake', 
      path: '/chocolate-cake' 
    },
 { 
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=400&fit=crop', 
      title: 'Donuts', 
      path: '/donuts' 
    },
,
    { 
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop', 
      title: 'Strawberry Cake', 
      path: '/strawberry-cake' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop', 
      title: 'Brownies', 
      path: '/brownies' 
    },
  
   
    { 
      image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=400&fit=crop', 
      title: 'Ice Cream Sundae', 
      path: '/ice-cream-sundae' 
    },



    { 
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&h=400&fit=crop', 
      title: 'Pan Cakes', 
      path: '/Pan Cakes' 
    },
    { 
  image: 'https://images.unsplash.com/photo-1598110750624-207050c4f28c?w=600&h=400&fit=crop', 
  title: 'Baklava', 
  path: '/baklava' 
}
,
   
    { 
      image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&h=400&fit=crop', 
      title: 'Cupcakes', 
      path: '/cupcakes' 
    },
{
  image: 'https://images.pexels.com/photos/30247016/pexels-photo-30247016.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  title: 'Caramel Pudding',
  path: '/caramel-pudding'
}


  ];

  return (
    <div className="Recipe-page">
      <Header/>
      <section>
        <h1>Dessert Recipes</h1>
        <div className="recipe-list">
          {dessertRecipes.map((recipe, index) => (
            <div
              className="recipe-card"
              key={index}
              onClick={() => navigate(recipe.path)}
            >
              <img 
                src={recipe.image} 
                alt={recipe.title}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400/8B4513/ffffff?text=' + encodeURIComponent(recipe.title);
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

export default Dessert;