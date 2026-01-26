import React, { useEffect, useState } from "react";
import "./AddRecipe.css"; // reuse same styling
import { apiGet, apiPut } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

export default function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    ingredients: "",
    steps: "",
    image_url: "",
  });
  const [msg, setMsg] = useState("");

  useEffect(() => {
    (async () => {
      const data = await apiGet(`/recipes/${id}`);
      if (data?.message) setMsg(data.message);
      else setForm({
        title: data.title || "",
        description: data.description || "",
        ingredients: data.ingredients || "",
        steps: data.steps || "",
        image_url: data.image_url || "",
      });
    })();
  }, [id]);

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setMsg("");
    const data = await apiPut(`/recipes/${id}`, form);
    if (data?.message === "Recipe updated") {
      setMsg("✅ Updated!");
      setTimeout(() => navigate("/my-recipes"), 800);
    } else {
      setMsg(data?.message || "Something went wrong");
    }
  }

  return (
    <div className="rn-page">
      <div className="rn-card">
        <h1 className="rn-title">Edit Recipe</h1>
        <p className="rn-subtitle">Update your recipe details.</p>

        <form className="rn-form" onSubmit={onSubmit}>
          <div className="rn-row">
            <label>Title</label>
            <input name="title" value={form.title} onChange={onChange} />
          </div>

          <div className="rn-row">
            <label>Description</label>
            <input name="description" value={form.description} onChange={onChange} />
          </div>

          <div className="rn-row">
            <label>Ingredients</label>
            <textarea name="ingredients" rows={5} value={form.ingredients} onChange={onChange} />
          </div>

          <div className="rn-row">
            <label>Steps</label>
            <textarea name="steps" rows={6} value={form.steps} onChange={onChange} />
          </div>

          <div className="rn-row">
            <label>Image URL</label>
            <input name="image_url" value={form.image_url} onChange={onChange} />
          </div>

          {msg && <div className="rn-msg">{msg}</div>}

          <button className="rn-btn" type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
}
