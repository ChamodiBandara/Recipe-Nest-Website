
import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import '../styles/Recipe.css';
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
  const [searchParams, setSearchParams] = useSearchParams();

  // ✅ read initial query from URL
  const initialQuery = (searchParams.get('search') || '').trim();

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const categories = useMemo(
    () => [
      {
        image: dinner,
        title: 'Dinner',
        recipes: [
          { name: 'MeatLoaf', path: '/MeatLoaf' },
          { name: 'Beef Steak', path: '/beef-steak' },
          { name: 'Stuffed Bell Peppers', path: '/stuffed-peppers' },
          { name: 'Roast Chicken', path: '/roast-chicken' },
          { name: 'Lasagna', path: '/lasagna' },
          { name: 'Lamb Chops', path: '/lamb-chops' },
          { name: 'Spaghetti Carbonara', path: '/spaghetti-carbonara' },
          { name: 'BBQ Ribs', path: '/bbq-ribs' },
          { name: 'Pork Tenderloin', path: '/pork-tenderloin' },
          { name: 'Shrimp Alfredo', path: '/shrimp-alfredo' },
          { name: 'Chicken Parmesan', path: '/chicken-parmesan' },
          { name: 'Beef Stir Fry', path: '/beef-stir-fry' },
        ],
      },
      {
        image: breakfast,
        title: 'Breakfast',
        recipes: [
          { name: 'Pancakes', path: '/pancakes' },
          { name: 'French Toast', path: '/french-toast' },
          { name: 'Scrambled Eggs', path: '/scrambled-eggs' },
          { name: 'Omelette', path: '/omelette' },
          { name: 'Avocado Toast', path: '/avocado-toast' },
        ],
      },
      {
        image: lunch,
        title: 'Lunch',
        recipes: [
          { name: 'Caesar Salad', path: '/caesar-salad' },
          { name: 'Club Sandwich', path: '/club-sandwich' },
          { name: 'Chicken Wrap', path: '/chicken-wrap' },
          { name: 'Soup', path: '/soup' },
          { name: 'Burrito Bowl', path: '/burrito-bowl' },
        ],
      },
      {
        image: salad,
        title: 'Salad',
        recipes: [
          { name: 'Greek Salad', path: '/greek-salad' },
          { name: 'Caesar Salad', path: '/caesar-salad' },
          { name: 'Cobb Salad', path: '/cobb-salad' },
          { name: 'Garden Salad', path: '/garden-salad' },
          { name: 'Fruit Salad', path: '/fruit-salad' },
        ],
      },
      {
        image: dessert,
        title: 'Dessert',
        recipes: [
          { name: 'Chocolate Cake', path: '/chocolate-cake' },
          { name: 'Ice Cream', path: '/ice-cream' },
          { name: 'Tiramisu', path: '/tiramisu' },
          { name: 'Cheesecake', path: '/cheesecake' },
          { name: 'Brownies', path: '/brownies' },
        ],
      },
      {
        image: drink,
        title: 'Drink',
        recipes: [
          { name: 'Smoothie', path: '/smoothie' },
          { name: 'Lemonade', path: '/lemonade' },
          { name: 'Iced Coffee', path: '/iced-coffee' },
          { name: 'Milkshake', path: '/milkshake' },
          { name: 'Fresh Juice', path: '/fresh-juice' },
        ],
      },
      {
        image: Thai,
        title: 'Thai',
        recipes: [
          { name: 'Pad Thai', path: '/pad-thai' },
          { name: 'Green Curry', path: '/green-curry' },
          { name: 'Tom Yum Soup', path: '/tom-yum-soup' },
          { name: 'Mango Sticky Rice', path: '/mango-sticky-rice' },
          { name: 'Spring Rolls', path: '/spring-rolls' },
        ],
      },
      {
        image: Indian,
        title: 'Indian',
        recipes: [
          { name: 'Butter Chicken', path: '/butter-chicken' },
          { name: 'Biryani', path: '/biryani' },
          { name: 'Tikka Masala', path: '/tikka-masala' },
          { name: 'Naan Bread', path: '/naan-bread' },
          { name: 'Samosa', path: '/samosa' },
        ],
      },
      {
        image: Mexican,
        title: 'Mexican',
        recipes: [
          { name: 'Tacos', path: '/tacos' },
          { name: 'Quesadilla', path: '/quesadilla' },
          { name: 'Enchiladas', path: '/enchiladas' },
          { name: 'Guacamole', path: '/guacamole' },
          { name: 'Burrito', path: '/burrito' },
        ],
      },
    ],
    []
  );

  const handleCategoryClick = (category) => {
    navigate(`/${category.title.toLowerCase()}`);
  };

  const handleRecipeClick = (recipePath) => {
    navigate(recipePath);
  };

  // ✅ ONE function to compute results
  const runSearch = (query) => {
    const q = query.trim();
    if (!q) {
      setIsSearching(false);
      setSearchResults([]);
      return;
    }

    const results = [];

    categories.forEach((category) => {
      const categoryMatches = category.title.toLowerCase().includes(q.toLowerCase());
      const matchingRecipes = category.recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(q.toLowerCase())
      );

      if (categoryMatches || matchingRecipes.length > 0) {
        results.push({
          ...category,
          matchingRecipes,
          categoryMatch: categoryMatches,
        });
      }
    });

    setIsSearching(true);
    setSearchResults(results);
  };

  // ✅ input change: update state + live filtering (optional)
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    // live search
    if (value.trim() === '') {
      setIsSearching(false);
      setSearchResults([]);
      setSearchParams({}, { replace: true }); // clear URL
    } else {
      runSearch(value);
      setSearchParams({ search: value }, { replace: true }); // keep URL updated
    }
  };

  const handleSearch = () => {
    runSearch(searchQuery);
    if (searchQuery.trim()) {
      setSearchParams({ search: searchQuery }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  // ✅ auto-run search when coming from Home with ?search=
  useEffect(() => {
    if (initialQuery) {
      setSearchQuery(initialQuery);
      runSearch(initialQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount

  const displayCategories = isSearching ? searchResults : categories;

  return (
    <div className="Recipe-page">
      <Header />

      <section>
        <div className="search-section">
          <p className="search-text">
            Discover recipes that match your taste—quick, easy, and tailored just for you!
          </p>

          <div className="search-bar">
            <input
              type="text"
              placeholder="I WANT TO MAKE"
              className="search-input"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
            />
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="recipe-categories">
        <h2>{isSearching ? `Search Results for "${searchQuery}"` : 'Recipe Categories'}</h2>

        {displayCategories.length > 0 ? (
          <div className="categories-grid">
            {displayCategories.map((category, index) => (
              <div key={index}>
                <div className="category-card" onClick={() => handleCategoryClick(category)}>
                  <img src={category.image} alt={category.title} className="category-image" />
                  <h3>{category.title}</h3>
                </div>

                {isSearching && category.matchingRecipes?.length > 0 && (
                  <div className="matching-recipes">
                    <p className="recipes-found">Found {category.matchingRecipes.length} recipe(s):</p>
                    <ul className="recipe-list">
                      {category.matchingRecipes.map((recipe, idx) => (
                        <li
                          key={idx}
                          className="recipe-item"
                          onClick={() => handleRecipeClick(recipe.path)}
                        >
                          {recipe.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          isSearching && (
            <p className="no-results">
              No recipes found for "{searchQuery}". Try a different search!
            </p>
          )
        )}
      </section>

      <section className="subscription-section">
        <h2>Want More Recipes From Recipe Nest?</h2>
        <p>Sign up for FREE quick and easy recipes delivered right to</p>
        <p>your inbox!</p>
        <p>You'll receive new recipes as soon as they are published.</p>

        <div className="subscription-form">
          <input type="email" placeholder="Email Address" className="subscription-input" />
        </div>

        <div className="signup-button">
          <Link to="/login">
            <button className="subscription-button">Sign In</button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Recipe;
