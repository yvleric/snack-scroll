import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';

const UserLogin = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Welcome back</h1>
          <p>Log in to your Zomato user account</p>
        </div>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="••••••••" />
          </div>
          <button type="submit" className="auth-button">Log In</button>
        </form>
        <div className="auth-footer">
          <p>Don't have an account? <Link to="/user/register">Sign up</Link></p>
          <p style={{ marginTop: '10px' }}><Link to="/food-partner/login">Log in as a Food Partner</Link></p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
