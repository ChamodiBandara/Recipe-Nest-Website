const express = require("express");
const router = express.Router();
const db = require("../db");
const auth = require("../middleware/auth");

// CREATE recipe (logged in)
router.post("/", auth, async (req, res) => {
  try {
    const { title, description, ingredients, steps, image_url } = req.body;

    if (!title || !ingredients || !steps) {
      return res.status(400).json({ error: "title, ingredients, steps required" });
    }

    const [result] = await db.query(
      `INSERT INTO recipes (title, description, ingredients, steps, image_url, created_by, created_at)
       VALUES (?, ?, ?, ?, ?, ?, NOW())`,
      [title, description || "", ingredients, steps, image_url || "", req.user.id]
    );

    return res.status(201).json({ id: result.insertId, message: "Recipe created" });
  } catch (err) {
    console.error("CREATE RECIPE ERROR:", err);
    return res.status(500).json({ error: err.message });
  }
});

// GET logged in user's recipes
router.get("/mine", auth, async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT id, title, description, image_url, created_at, updated_at
       FROM recipes
       WHERE created_by = ?
       ORDER BY created_at DESC`,
      [req.user.id]
    );
    return res.json(rows);
  } catch (err) {
    console.error("GET MINE RECIPES ERROR:", err);
    return res.status(500).json({ error: err.message });
  }
});

// GET single recipe (owner only for edit page)
router.get("/:id", auth, async (req, res) => {
  try {
    const id = Number(req.params.id);

    const [rows] = await db.query(
      `SELECT * FROM recipes WHERE id = ? AND created_by = ?`,
      [id, req.user.id]
    );

    if (rows.length === 0) return res.status(404).json({ error: "Not found" });
    return res.json(rows[0]);
  } catch (err) {
    console.error("GET ONE RECIPE ERROR:", err);
    return res.status(500).json({ error: err.message });
  }
});

// UPDATE recipe (owner only)
router.put("/:id", auth, async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { title, description, ingredients, steps, image_url } = req.body;

    if (!title || !ingredients || !steps) {
      return res.status(400).json({ error: "title, ingredients, steps required" });
    }

    const [result] = await db.query(
      `UPDATE recipes
       SET title=?, description=?, ingredients=?, steps=?, image_url=?, updated_at=NOW()
       WHERE id=? AND created_by=?`,
      [title, description || "", ingredients, steps, image_url || "", id, req.user.id]
    );

    if (result.affectedRows === 0) {
      return res.status(403).json({ error: "Forbidden" });
    }

    return res.json({ message: "Recipe updated" });
  } catch (err) {
    console.error("UPDATE RECIPE ERROR:", err);
    return res.status(500).json({ error: err.message });
  }
});

// DELETE recipe (owner only)
router.delete("/:id", auth, async (req, res) => {
  try {
    const id = Number(req.params.id);

    const [result] = await db.query(
      `DELETE FROM recipes WHERE id=? AND created_by=?`,
      [id, req.user.id]
    );

    if (result.affectedRows === 0) {
      return res.status(403).json({ error: "Forbidden" });
    }

    return res.json({ message: "Recipe deleted" });
  } catch (err) {
    console.error("DELETE RECIPE ERROR:", err);
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
