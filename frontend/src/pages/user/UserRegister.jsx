import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';
import axios from 'axios';

const UserRegister = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;




  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Create an account</h1>
          <p>Join Zomato as a user</p>
        </div>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="••••••••" />
          </div>
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <div className="auth-footer">
          <p>Already have an account? <Link to="/user/login">Log in</Link></p>
          <p style={{ marginTop: '10px' }}><Link to="/food-partner/register">Register as a Food Partner</Link></p>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
