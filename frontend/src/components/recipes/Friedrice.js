import React from 'react';
import RecipeLayout from './RecipeLayout';
import'./Friedrice.css';

const FriedRice =() =>{
    const recipeData={
        title:"Chicken Fried Rice",
        image:"../images/Recipes/dinner.jpg",
        yield: "4 Servings",
        prepTime: "30 minutes",
        cookTime: "45 minutes",
        totalTime: "1 hour 15 minutes",
        ingredients: [
          "1 lb boneless, skinless chicken breasts, cut into 1-inch pieces",
          "1 onion, chopped",
          "2 cloves garlic, minced",
          "1 tablespoon ginger-garlic paste",
          "1 (14.5 ounce) can diced tomatoes, undrained",
          "1 (14.5 ounce) can coconut milk",
          "1 teaspoon turmeric powder",
          "1 teaspoon chili powder",
          "1/2 teaspoon cumin powder",
          "1/4 teaspoon garam masala",
          "1 tablespoon curry powder",
          "1 teaspoon salt",
          "1/2 teaspoon black pepper",
          "Fresh cilantro, for garnish",
        ],
        directions: [
          "Heat oil in a large pot or Dutch oven over medium heat.",
          "Add chicken and cook until browned on all sides.",
          "Add onion, garlic, and ginger-garlic paste. Cook until softened, about 5 minutes.",
          "Add diced tomatoes, coconut milk, turmeric, chili powder, cumin, garam masala, curry powder, salt, and pepper.",
          "Bring to a simmer, then reduce heat and cook for 20-25 minutes, or until chicken is cooked through and sauce has thickened.",
          "Garnish with fresh cilantro and serve with rice or naan."
        ],
        buttermilkGlaze: null, // No buttermilk glaze for this recipe
      };
    
      return (
        <RecipeLayout {...recipeData} /> 
      );
    };
    export default FriedRice;