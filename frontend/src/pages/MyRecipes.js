import React, { useEffect, useState } from "react";
import "./MyRecipes.css";
import { apiDelete, apiGet } from "../services/api";
import { useNavigate } from "react-router-dom";
import Header from '../components/header.js';
import Footer from '../components/footer.js';

export default function MyRecipes() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  async function load() {
    const data = await apiGet("/recipes/mine");
    setRecipes(Array.isArray(data) ? data : []);
  }

  useEffect(() => { load(); }, []);

  async function del(id) {
    if (!window.confirm("Delete this recipe?")) return;
    await apiDelete(`/recipes/${id}`);
    load();
  }

  return (
    <div className="mr-layout">
      <Header />

      <main className="mr-page">
        <div className="mr-wrap">
          <div className="mr-head">
            <h1 className="mr-title">My Recipes</h1>
            <button className="mr-btn" onClick={() => navigate("/add-recipe")}>
              + Add Recipe
            </button>
          </div>

          <div className="mr-grid">
            {recipes.map((r) => (
              <div className="mr-card" key={r.id}>
                <div
                  className="mr-img"
                  style={{ backgroundImage: r.image_url ? `url(${r.image_url})` : "none" }}
                >
                  {!r.image_url && <div className="mr-imgPlaceholder">Recipe Nest</div>}
                </div>

                <div className="mr-body">
                  <h3>{r.title}</h3>
                  <p>{r.description || "No description"}</p>

                  <div className="mr-actions">
                    <button className="mr-action" onClick={() => navigate(`/edit-recipe/${r.id}`)}>
                      Edit
                    </button>
                    <button className="mr-action danger" onClick={() => del(r.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {recipes.length === 0 && (
            <div className="mr-empty">
              You don’t have recipes yet. Click <b>Add Recipe</b> to create one.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
