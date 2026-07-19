import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';

const FoodPartnerRegister = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Partner with us</h1>
          <p>Register your restaurant on Zomato</p>
        </div>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="restaurantName">Restaurant Name</label>
            <input type="text" id="restaurantName" placeholder="e.g. The Spicy Kitchen" />
          </div>
          <div className="form-group">
            <label htmlFor="ownerName">Owner Name</label>
            <input type="text" id="ownerName" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Business Email</label>
            <input type="email" id="email" placeholder="contact@restaurant.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="••••••••" />
          </div>
          <button type="submit" className="auth-button">Register Restaurant</button>
        </form>
        <div className="auth-footer">
          <p>Already registered? <Link to="/food-partner/login">Log in</Link></p>
          <p style={{ marginTop: '10px' }}><Link to="/user/register">Register as a User</Link></p>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerRegister;
