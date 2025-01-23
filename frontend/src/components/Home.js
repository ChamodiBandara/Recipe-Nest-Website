
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
     
  const [typedText, setTypedText] = useState('');
  const slogan = "Yaour Gateway to Delicious Creations!";


  // useEffect(() => {
  //   let i = 0;
  //   const typingInterval = 100; 
  //   const typeWriter = () => {
  //     if (i < slogan.length) {
  //       setTypedText((prevText) => prevText + slogan.charAt(i)); 
  //       i++;
  //     } else {
  //       clearInterval(intervalId); 
  //     }
  //   };

  //   const intervalId = setInterval(typeWriter, typingInterval); 

  //   return () => clearInterval(intervalId); 

  // }, []);
 
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
    link: '/honey-corn-bread' ,
  },
  {
    image: require('../images/popular/strawberry fludge.jpg'),
    title: 'Strawberry Fudges',
    link: '/strawberry-fudge' ,
  },
  {
    image: require('../images/popular/cheese beef.jpg'),
    title: 'Cheese Beef Wrap',
    link: '/cheese-beef-Wrap' ,
    
  },
  {
    image: require('../images/categories/meatloaf.jpg'),
    title: 'meatloaf',
    link: '/meatloaf' ,
  
  },
  {
    image: require('../images/popular/icecream.jpg'),
    title: 'Ice Cream Sundae',
    link: '/ice-cream-sundae' ,
  },
  {
    image: require('../images/popular/strawberry mango.jpg'),
    title: 'Strawberry Mango Salsa',
    link: '/strawberry-mango-salsa' ,
    
  },
];

  return (
    <div className="home">
      <Header/>
  
    
     <section className="hero">
        <img
          src={image1}
          alt="Delicious food"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>{typedText}</h1>
        </div>
      </section>

      
      <section className="search-bar">
        <input
          type="text"
          placeholder="What would you like to cook?"
          className="search-input"
        />
        <button className="search-button">Search</button>
        <div className="quick-buttons">
          <button className="quick-button">Chicken</button>
          <button className="quick-button">Meatloaf</button>
          <button className="quick-button">Pizza</button>
          <button className="quick-button">Banana Bread</button>
        </div>
      </section>

  
        <div className="recipe-categories">
        <h2>Travel the World with Your Taste Buds!</h2>
        <div className="categories">
          <div className="category">
            <Link to={"/mexican"}>
            <img
              src={Mexican}
              alt="Mexican Recipes"
              className="categoryimage"
            />
            <h3>Mexican Recipes</h3>
            </Link>
          </div>
          <div className="category">
          <Link to={"/indian"}>
            <img
              src={indian}
              alt="Indian Recipes"
              className="categoryimage"
            />
            <h3>Indian Recipes</h3>
            </Link>
          </div>
          <div className="category" >
          <Link to={"/indian"}>
            <img
              src={Thai}
              alt="Thai Recipes"
              className="categoryimage"
            />
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
              <Link to={"/recipes"}>
              <div
                className="explore-image"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              
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
     
<section className="about-section">
  <div className="about-container">
   
    <div className="about-text">
      <h2 className="about-title">Recipe Nest</h2>
      <p className="about-description">
        Platform created to connect food lovers worldwide by sharing, discovering, and celebrating a diverse range of recipes. Born from a shared passion for cooking, our mission is to offer a space where creativity thrives, and culinary ideas are freely exchanged. We aim to provide a wide variety of recipes catering to different tastes and dietary needs, while building a vibrant community for both beginners and seasoned cooks. Led by a dedicated team of culinary experts and developers, Recipe Nest invites you to join us in this flavourful journey and share your unique recipes with the world.
      </p>
      <Link to={"/about"}>
      <button className="learn-more-button">Learn More</button>
      </Link>
    </div>

    <div className="about-image-container">
      <img
        src={require('../images/about.jpg')}
        alt="Person Cooking in Kitchen"
        className="about-image"
      />
    </div>
  </div>
  
</section>

<section className="more-categories-section">
        <h2>More Categories</h2>
        <div className="categories-container">
          <div className="category-item"><Link to={'/dessert'}><img src={require('../images/Recipes/dessert.jpg')} alt="Soup" /></Link></div>
          <div className="category-item"><Link to={'/dinner'}><img src={require('../images/morecategories/noodles.jpg')} alt="Noodles" /></Link></div>
          <div className="category-item"><Link to={'/drinks'}><img src={require('../images/morecategories/drinks.jpg')} alt="Drink" /></Link></div>
          <div className="category-item"><Link to={'/salad'}><img src={require('../images/Recipes/salad.jpg')} alt="Salad" /></Link></div>
        </div>
      </section>

  <section className="holiday-sweet">
        <h2 className="section-title">Bake The Holiday Sweet</h2>
        <div className="holiday-image">
          <img
            src={holidaySweetImage}
            alt="Bake The Holiday Sweet"
            className="holiday-sweet-image"
          />
        </div>
      </section>
      <section className="find-recipes">
  <h2 className="find-recipes-title">Find More Recipes</h2>
  <div className="find-recipes-container">
    <input
      type="text"
      className="find-recipes-input"
      placeholder="Search for recipes..."
    />
    <button className="find-recipes-button">Search</button>
  </div>
</section>
<Footer/>
    </div>
  );
}

export default Home;
