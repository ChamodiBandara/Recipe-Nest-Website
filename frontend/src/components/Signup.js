import React from 'react';
import '../styles/Signup.css'; 
import image1 from '../images/background4.jpg';


function Signup() {
  return (
    <div className="Signup-page">
          <div className="Signup-image">
        <img src={image1} alt="Delicious food" />
      </div>
      <div className="Signup-form-container">
        <div className="brand-logo">Recipe Nest</div>
        <h2>Welcome to the Recipe Nest</h2>
        <p>Sign in with your email address and password.</p>
        <form className="Signup-form">
        <label>Name</label>
        <input type="name" placeholder="Enter your name" required />
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
          <label>Confirm password</label>
          <input type="password" placeholder="Enter your password" required />

          <button type="submit" className="sign-up-button">Sign Up</button>
        </form>
        
      </div>

    
    </div>
  );
}

export default Signup;