import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FoodPartnerLogin = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post("http://localhost:3000/api/auth/food-partner/login", {
      email,
      password
    }, { withCredentials: true });

    console.log(response.data);

    navigate("/create-food");
  };



  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Partner Login</h1>
          <p>Access your restaurant dashboard</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Business Email</label>
            <input type="email" id="email" name="email" placeholder="contact@restaurant.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="••••••••" />
          </div>
          <button type="submit" className="auth-button">Log In to Dashboard</button>
        </form>
        <div className="auth-footer">
          <p>Not partnered yet? <Link to="/food-partner/register">Register your restaurant</Link></p>
          <p style={{ marginTop: '10px' }}><Link to="/user/login">Log in as a User</Link></p>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;