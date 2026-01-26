// const express = require('express');
// const cors = require('cors');
// const pool = require('./db');
// const app = express();
// const port = 3001;

// app.use(cors());
// app.use(express.json());

// // Route for signup (INSECURE - stores plain text passwords)
// app.post('/sign-up', async (req, res) => {
//     const { username, email, password, confirmPassword } = req.body;

//     // Input validation
//     if (!username || !email || !password || !confirmPassword) {
//         return res.status(400).json({ error: 'All fields are required.' });
//     }
//     if (password !== confirmPassword) {
//         return res.status(400).json({ error: 'Passwords do not match.' });
//     }

//     try {
//         // Check for existing user
//         const [existingUser] = await pool.query(
//             'SELECT * FROM users WHERE email = ? OR username = ?',
//             [email, username]
//         );
//         if (existingUser.length > 0) {
//             return res.status(400).json({ error: 'Email or username already exists.' });
//         }

//         // INSECURE: Store plain text password
//         await pool.query(
//             'INSERT INTO users (username, email, password, created_at) VALUES (?, ?, ?, NOW())',
//             [username, email, password] // No hashing!
//         );

//         res.status(201).json({ message: 'User registered successfully!' });
//     } catch (error) {
//         console.error('Error registering user:', error);
//         res.status(500).json({ error: 'Failed to register user.' });
//     }
// });

// // Route for login (INSECURE - compares plain text passwords)
// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
    
//     if (!email || !password) {
//         return res.status(400).json({ error: 'Email and password are required.' });
//     }

//     try {
//         // INSECURE: Direct comparison of plain text passwords
//         const [users] = await pool.query(
//             'SELECT * FROM users WHERE email = ? AND password = ?',
//             [email, password]
//         );

//         if (users.length === 0) {
//             return res.status(401).json({ error: 'Invalid email or password.' });
//         }

//         const user = users[0];
//         res.status(200).json({ 
//             message: 'Login successful!',
//             user: {
//                 id: user.id,
//                 username: user.username,
//                 email: user.email
//             }
//         });
//     } catch (error) {
//         console.error('Error logging in:', error);
//         res.status(500).json({ error: 'Failed to log in.' });
//     }
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const recipeRoutes = require("./routes/recipe");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);

app.get("/", (req, res) => res.send("Recipe Nest API running ✅"));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
