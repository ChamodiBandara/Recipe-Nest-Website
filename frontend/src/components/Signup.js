import React, { useState } from 'react';
import '../styles/Signup.css'; 
import image1 from '../images/background4.jpg';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = formData;

    // Validate passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, confirmPassword }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('User registered successfully!');
        setFormData({ username: '', email: '', password: '', confirmPassword: '' }); 
        navigate('/login'); // Navigate to the login page
      } else {
        alert(data.error || 'Registration failed.');
      }
    } catch (err) {
      console.error('Error during signup:', err);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="Signup-page">
      <div className="Signup-image">
        <img src={image1} alt="Delicious food" />
      </div>
      <div className="Signup-form-container">
        <div className="brand-logo">Recipe Nest</div>
        <h2>Welcome to Recipe Nest</h2>
        <p>Sign up with your email address and password.</p>
        <form className="Signup-form" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className="sign-up-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
