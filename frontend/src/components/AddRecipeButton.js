import React from "react";
import { useNavigate } from "react-router-dom";

function AddRecipeButton({ className = "", text = "Add Recipes" }) {
  const navigate = useNavigate();

  function handleClick() {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/add-recipe");
    } else {
      navigate("/login");
    }
  }

  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}

export default AddRecipeButton;
