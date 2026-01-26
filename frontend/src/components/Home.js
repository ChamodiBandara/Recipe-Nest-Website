
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import Footer from './footer.js';
import Header from './header.js';

import image1 from '../images/image1.jpg';
import indian from '../images/indian.jpg';
import Mexican from '../images/mexican-tacos.jpg';
import Thai from '../images/Thai.jpg';
import quickEasy from '../images/quick&easy.webp';
import dinner from '../images/dinner.jpg';
import communityPicks from '../images/community-picks.jpg';
import breakfastBrunch from '../images/breakfast.jpg';
import celebrations from '../images/celebration.jpg';
import instantPot from '../images/instantpot.jpg';
import holidaySweetImage from '../images/mergedlast.jpg';

function Home() {
  const navigate = useNavigate();
  const [typedText] = useState('');
  

  // Home search state
  const [homeSearch, setHomeSearch] = useState('');

  const handleHomeSearch = () => {
    const q = homeSearch.trim();
    if (q) {
      navigate(`/recipes?search=${encodeURIComponent(q)}`);
    } else {
      navigate('/recipes'); // optional: go to recipes even if empty
    }
  };

  const exploreCategories = [
    { label: 'Quick & Easy', image: quickEasy },
    { label: 'Dinner', image: dinner },
    { label: 'Community Picks', image: communityPicks },
    { label: 'Breakfast & Brunch', image: breakfastBrunch },
    { label: 'Celebrations', image: celebrations },
    { label: 'Instant Pot', image: instantPot },
  ];

  const popularItems = [
    {
      image: require('../images/popular/Honey corn bread.jpg'),
      title: 'Honey Corn Bread',
      link: '/honey-corn-bread',
    },
    {
      image: require('../images/popular/strawberry fludge.jpg'),
      title: 'Strawberry Fudges',
      link: '/strawberry-fudge',
    },
    {
      image: require('../images/popular/cheese beef.jpg'),
      title: 'Cheese Beef Wrap',
      link: '/cheese-beef-Wrap',
    },
    {
      image: require('../images/categories/meatloaf.jpg'),
      title: 'meatloaf',
      link: '/meatloaf',
    },
    {
      image: require('../images/popular/icecream.jpg'),
      title: 'Ice Cream Sundae',
      link: '/ice-cream-sundae',
    },
    {
      image: require('../images/popular/strawberry mango.jpg'),
      title: 'Strawberry Mango Salsa',
      link: '/strawberry-mango-salsa',
    },
  ];

  return (
    <div className="home">
      <Header />

      <section className="hero">
        <img src={image1} alt="Delicious food" className="hero-image" />
      </section>

      {/* ✅ HOME SEARCH BAR LINKED TO RECIPE PAGE */}
      <section className="search-bar">
        <input
          type="text"
          placeholder="What would you like to cook?"
          className="search-input"
          value={homeSearch}
          onChange={(e) => setHomeSearch(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleHomeSearch()}
        />
        <button className="search-button" onClick={handleHomeSearch}>
          Search
        </button>

        <div className="quick-buttons">
          <button className="quick-button" onClick={() => navigate('/ice-cream-sundae')}>
            Ice Cream Sundae
          </button>
          <button className="quick-button" onClick={() => navigate('/meatloaf')}>
            Meatloaf
          </button>
          <button className="quick-button" onClick={() => navigate('/honey-corn-bread')}>
           Honey Corn Bread
          </button>
        </div>
      </section>

      <div className="recipe-categories">
        <h2>Travel the World with Your Taste Buds!</h2>
        <div className="categories">
          <div className="category">
            <Link to="/mexican">
              <img src={Mexican} alt="Mexican Recipes" className="categoryimage" />
              <h3>Mexican Recipes</h3>
            </Link>
          </div>

          <div className="category">
            <Link to="/indian">
              <img src={indian} alt="Indian Recipes" className="categoryimage" />
              <h3>Indian Recipes</h3>
            </Link>
          </div>

          <div className="category">
            <Link to="/thai">
              <img src={Thai} alt="Thai Recipes" className="categoryimage" />
              <h3>Thai Recipes</h3>
            </Link>
          </div>
        </div>
      </div>

      <section className="explore-more">
        <h2 className="explore-more-title">Explore More</h2>
        <div className="explore-more-container">
          {exploreCategories.map((category, index) => (
            <div className="explore-item" key={index}>
              <Link to="/recipes">
                <div
                  className="explore-image"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <p className="explore-label">{category.label}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="popular-now">
        <h2 className="section-title">Popular Now</h2>
        <div className="popular-grid">
          {popularItems.map((item, index) => (
            <div className="popular-item" key={index}>
              <Link to={item.link}>
                <img src={item.image} alt={item.title} className="popular-image" />
                <p className="popular-title">{item.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="holiday-sweet">
        <h2 className="section-title">Bake The Holiday Sweet</h2>
        <div className="holiday-image">
          <img src={holidaySweetImage} alt="Bake The Holiday Sweet" className="holiday-sweet-image" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
