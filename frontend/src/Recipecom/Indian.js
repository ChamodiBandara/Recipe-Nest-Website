import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import '../Recipecom/Recipe.css'; 

function Indian() {
   const navigate = useNavigate();

  const indianRecipes = [
    { 
      image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600', 
      title: 'Butter Chicken', 
      path: '/butter-chicken' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600', 
      title: 'Chicken Biryani', 
      path: '/chicken-biryani' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600', 
      title: 'Palak Paneer', 
      path: '/palak-paneer' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600', 
      title: 'Tandoori Chicken', 
      path: '/tandoori-chicken' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600', 
      title: 'Dal Makhani', 
      path: '/dal-makhani' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600', 
      title: 'Masala Dosa', 
      path: '/masala-dosa' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600', 
      title: 'Chole Bhature', 
      path: '/chole-bhature' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600', 
      title: 'Chicken Tikka Masala', 
      path: '/tikka-masala' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600', 
      title: 'Samosa', 
      path: '/samosa' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600', 
      title: 'Naan Bread', 
      path: '/naan-bread' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=600', 
      title: 'Rogan Josh', 
      path: '/rogan-josh' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600', 
      title: 'Paneer Tikka', 
      path: '/paneer-tikka' 
    }
  ];

  return (
    <div className="Recipe-page">
        <Header/>
        <section>
      <h1>Indian Recipes</h1>
      <div className="recipe-list">
          {indianRecipes.map((recipe, index) => (
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

export default Indian;