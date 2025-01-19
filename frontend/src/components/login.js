import React, { useState } from 'react';
import '../styles/login.css'; 
import image1 from '../images/background4.jpg';
import { useNavigate } from 'react-router-dom';
import { Link} from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login successful!');
        // Save user data or token to localStorage
        localStorage.setItem('user', JSON.stringify(data.user));

        // Navigate to the home page or dashboard
        navigate('/');
      } else {
        alert(data.error || 'Invalid login credentials.');
      }
    } catch (err) {
      console.error('Error during login:', err);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <div className="brand-logo">Recipe Nest</div>
        <h2>Welcome Back</h2>
        <p>Sign in with your email address and password.</p>
        <form className="login-form" onSubmit={handleSubmit}>
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

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
        <p>
          Don't have an account?{' '}
          <Link to="/sign-up" className="sign-up-link">Sign Up</Link>
        </p>
      </div>

      <div className="login-image">
        <img src={image1} alt="Delicious food" />
      </div>
    </div>
  );
}

export default LoginPage;
