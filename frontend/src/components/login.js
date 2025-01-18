import React from 'react';
import '../styles/login.css'; 
import image1 from '../images/background4.jpg';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-form-container">
        <div className="brand-logo">Recipe Nest</div>
        <h2>Welcome Back</h2>
        <p>Sign in with your email address and password.</p>
        <form className="login-form">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
        <p>
          Don't have an account? <Link  to="/sign-up" className="sign-up-link">Sign Up</Link>
        </p>
      </div>

      <div className="login-image">
        <img src={image1} alt="Delicious food" />
      </div>
    </div>
  );
}

export default LoginPage;