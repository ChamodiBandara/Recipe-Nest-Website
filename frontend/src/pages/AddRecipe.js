import React, { useState } from "react";
import "./AddRecipe.css";
import { apiPost } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddRecipe() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    ingredients: "",
    steps: "",
    image_url: "",
  });
  const [msg, setMsg] = useState("");

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setMsg("");

    const data = await apiPost("/recipes", form);
    if (data?.id) {
      setMsg("✅ Recipe added!");
      setTimeout(() => navigate("/my-recipes"), 800);
    } else {
      setMsg(data?.message || "Something went wrong");
    }
  }

  return (
    <div className="rn-page">
      <div className="rn-card">
        <h1 className="rn-title">Add Your Recipe</h1>
        <p className="rn-subtitle">Share your culinary creativity with Recipe Nest.</p>

        <form className="rn-form" onSubmit={onSubmit}>
          <div className="rn-row">
            <label>Title</label>
            <input name="title" value={form.title} onChange={onChange} placeholder="Eg: Chicken Curry" />
          </div>

          <div className="rn-row">
            <label>Description</label>
            <input name="description" value={form.description} onChange={onChange} placeholder="Short description..." />
          </div>

          <div className="rn-row">
            <label>Ingredients</label>
            <textarea
              name="ingredients"
              value={form.ingredients}
              onChange={onChange}
              placeholder="One ingredient per line..."
              rows={5}
            />
          </div>

          <div className="rn-row">
            <label>Steps</label>
            <textarea
              name="steps"
              value={form.steps}
              onChange={onChange}
              placeholder="Step-by-step method..."
              rows={6}
            />
          </div>

          <div className="rn-row">
            <label>Image URL (optional)</label>
            <input name="image_url" value={form.image_url} onChange={onChange} placeholder="https://..." />
          </div>

          {msg && <div className="rn-msg">{msg}</div>}

          <button className="rn-btn" type="submit">Add Recipe</button>
        </form>
      </div>
    </div>
  );
}
