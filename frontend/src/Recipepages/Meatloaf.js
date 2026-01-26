import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faClock, faUtensils, } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/header';
import Footer from '../components/footer';
import '../Recipepages/Recipepage.css';

function MeatLoaf() {
  const recipeRef = useRef();
  const [isSaved, setIsSaved] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Comment Form States
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState([]);

  // Save Recipe Function
  const handleSave = () => {
    setIsSaved(!isSaved);
    const recipe = {
      title: 'MeatLoaf',
      image: '../images/categories/meatloaf.jpg',
      savedAt: new Date().toISOString()
    };
    
    if (!isSaved) {
      const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
      savedRecipes.push(recipe);
      localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
      alert('Recipe saved successfully!');
    } else {
      const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
      const filtered = savedRecipes.filter(r => r.title !== 'MeatLoaf');
      localStorage.setItem('savedRecipes', JSON.stringify(filtered));
      alert('Recipe removed from saved!');
    }
  };

  // Favorite Recipe Function
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    const recipe = {
      title: 'MeatLoaf',
      image: '../images/categories/meatloaf.jpg',
      favoritedAt: new Date().toISOString()
    };
    
    if (!isFavorite) {
      const favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
      favorites.push(recipe);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
      alert('Added to favorites!');
    } else {
      const favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
      const filtered = favorites.filter(r => r.title !== 'MeatLoaf');
      localStorage.setItem('favoriteRecipes', JSON.stringify(filtered));
      alert('Removed from favorites!');
    }
  };

  // Download Recipe as Text File
  const handleDownload = () => {
    const recipeContent = `
MEATLOAF RECIPE

DESCRIPTION:
These fried Brussels sprouts are easy to make and so delicious! Pan-frying them brings out their flavor and they make a colorful green side dish for the holidays.

RECIPE INFO:
- Yield: 3 servings
- Prep Time: 10 minutes
- Cook Time: 15 minutes
- Total Time: 25 minutes

INGREDIENTS:
- 2 cups cooked rice (preferably day-old)
- 1 cup chicken breast, diced
- 2 tablespoons soy sauce
- 1 tablespoon oyster sauce (optional)
- 1 teaspoon sesame oil
- 1/2 cup frozen peas and carrots mix
- 1/4 cup green onions, chopped
- 2 cloves garlic, minced
- 2 large eggs
- 2 tablespoons vegetable oil (or any neutral oil)
- Salt and pepper to taste

DIRECTIONS:
1. Heat 1 tablespoon of oil in a large skillet or wok over medium-high heat. Add diced chicken, season with salt and pepper, and stir-fry until fully cooked, about 5–7 minutes. Remove from the pan and set aside.

2. In the same pan, add a little more oil if needed. Crack the eggs directly into the pan, scramble them until just set, then remove and set aside.

3. Add the remaining oil to the pan and toss in minced garlic, peas, and carrots. Stir-fry for 2–3 minutes until fragrant and the vegetables are slightly softened.

4. Break up any clumps of rice and add it to the pan. Stir-fry the rice with the vegetables, mixing well.

5. Drizzle soy sauce, oyster sauce (if using), and sesame oil over the rice. Stir everything thoroughly to ensure the rice is evenly coated with the sauces.

6. Add the cooked chicken and scrambled eggs back into the pan. Mix all the ingredients together and cook for another 2–3 minutes.

7. Toss in the chopped green onions, stir to combine, and serve hot. Enjoy your delicious Chicken Fried Rice!
    `;

    const blob = new Blob([recipeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'MeatLoaf_Recipe.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  // Print Recipe Function
  const handlePrint = () => {
    window.print();
  };

  // Email Validation Function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle Comment Submit
  const handleSubmitComment = (e) => {
    e.preventDefault();

    // Validation
    if (!comment.trim()) {
      alert('Please enter a comment!');
      return;
    }

    if (!name.trim()) {
      alert('Please enter your name!');
      return;
    }

    if (!email.trim()) {
      alert('Please enter your email!');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address!');
      return;
    }

    // Create comment object
    const newComment = {
      id: Date.now(),
      comment: comment,
      name: name,
      email: email,
      date: new Date().toLocaleDateString(),
      recipe: 'MeatLoaf'
    };

    // Save to localStorage
    const existingComments = JSON.parse(localStorage.getItem('recipeComments') || '[]');
    existingComments.push(newComment);
    localStorage.setItem('recipeComments', JSON.stringify(existingComments));

    // Update state
    setComments([...comments, newComment]);

    // Clear form
    setComment('');
    setName('');
    setEmail('');

    alert('Comment posted successfully!');
  };

  return (
    <div>
      <Header />
      <div className="recipe-description"></div>
      <section className="recipe-details" ref={recipeRef}>
       <div className="topic-bar"> 
        <h1>MeatLoaf</h1>
        </div>
        <div className="icon-bar2">
          <button 
            className={`icon-button2 ${isSaved ? 'active' : ''}`} 
            title="Save"
            onClick={handleSave}
          >
            <i className={`fas fa-bookmark ${isSaved ? 'fas' : 'far'}`}></i>
          </button>
          <button 
            className={`icon-button2 ${isFavorite ? 'active' : ''}`} 
            title="Favorite"
            onClick={handleFavorite}
          >
            <i className={`fas fa-star ${isFavorite ? 'fas' : 'far'}`}></i>
          </button>
          <button 
            className="icon-button2" 
            title="Download"
            onClick={handleDownload}
          >
            <i className="fas fa-download"></i>
          </button>
          <button 
            className="icon-button2" 
            title="Print"
            onClick={handlePrint}
          >
            <i className="fas fa-print"></i>
          </button>
        </div>
        <img
          src={require('../images/categories/meatloaf.jpg')}
          alt="MeatLoaf"
        />
        <div className='Food-description'>
        <p>
          These fried Brussels sprouts are easy to make and so delicious! Pan-frying them brings out their flavor and they make a colorful green side dish for the holidays.
        </p> </div>
        <div className="recipe-meta">
          <p>
            <FontAwesomeIcon icon={faUtensils} /> <strong>Yield:</strong> 3 servings
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} /> <strong>Prep Time:</strong> 10 minutes
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} /> <strong>Cook Time:</strong> 15 minutes
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} /> <strong>Total Time:</strong> 25 minutes
          </p>
        </div>
        <div className="ingredients">
          <h2>Ingredients</h2>
          <ul>
         <li> 2 cups cooked rice (preferably day-old)</li>
         <li>1 cup chicken breast, diced</li>
         <li>2 tablespoons soy sauce</li>
         <li>1 tablespoon oyster sauce (optional)</li>
         <li>1 teaspoon sesame oil</li>
         <li>1/2 cup frozen peas and carrots mix</li>
         <li>1/4 cup green onions, chopped</li>
         <li>2 cloves garlic, minced</li>
         <li>2 large eggs</li>
         <li>2 tablespoons vegetable oil (or any neutral oil)</li>
         <li>Salt and pepper to taste</li>
          </ul>
        </div>
        <div className="directions">
          <h2>Directions</h2>
          <ol>
         <li> Heat 1 tablespoon of oil in a large skillet or wok over medium-high heat. Add diced chicken, season with salt and pepper, and stir-fry until fully cooked, about 5–7 minutes. Remove from the pan and set aside.</li>

         <li> In the same pan, add a little more oil if needed. Crack the eggs directly into the pan, scramble them until just set, then remove and set aside.  </li> 

         <li> Add the remaining oil to the pan and toss in minced garlic, peas, and carrots. Stir-fry for 2–3 minutes until fragrant and the vegetables are slightly softened.</li> 

         <li> Break up any clumps of rice and add it to the pan. Stir-fry the rice with the vegetables, mixing well.</li> 

         <li> Drizzle soy sauce, oyster sauce (if using), and sesame oil over the rice. Stir everything thoroughly to ensure the rice is evenly coated with the sauces.</li> 

         <li> Add the cooked chicken and scrambled eggs back into the pan. Mix all the ingredients together and cook for another 2–3 minutes.</li> 

         <li> Toss in the chopped green onions, stir to combine, and serve hot. Enjoy your delicious Chicken Fried Rice!</li> 
          </ol>
        </div>
        </section>
        <section className='review-bg'>
          <div className='review-container'>
            <h3>MeatLoaf</h3>
            <h4>LEAVE A REPLY</h4>
            <div className='slogan'>Your email address will not be published. Required fields are marked*</div>
            <div className='slogan2'>Made it? Leave a review</div>
            
            <form onSubmit={handleSubmitComment}>
              <h5>Comment*</h5>
              <div className="review-bar1">
                <input 
                  type="text"
                  className='comment'
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write your comment here..."
                  required
                />
              </div>
              
              <h5>Name*</h5>
              <div className="review-bar2">
                <input 
                  type="text"
                  className='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <h5>Email*</h5>
              <div className="review-bar3">
                <input 
                  type="email"
                  className='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <button type="submit" className='Submit-button'>Post comment</button>
            </form>

            {/* Display Comments */}
            {comments.length > 0 && (
              <div className="comments-section">
                <h4>Comments ({comments.length})</h4>
                {comments.map((c) => (
                  <div key={c.id} className="comment-item">
                    <strong>{c.name}</strong> <span>({c.date})</span>
                    <p>{c.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

      <Footer />
    </div>
  );
}

export default MeatLoaf;