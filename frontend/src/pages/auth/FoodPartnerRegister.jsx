import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FoodPartnerRegister = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const restaurantName = e.target.restaurantName.value;
    const ownerName = e.target.ownerName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post("http://localhost:3000/api/auth/food-partner/register", {
        restaurantName,
        ownerName,
        email,
        password
      }, { withCredentials: true });

      console.log(response.data);
      navigate("/food-partner/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Partner with us</h1>
          <p>Register your restaurant on Zomato</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="restaurantName">Restaurant Name</label>
            <input type="text" id="restaurantName" name="restaurantName" placeholder="e.g. The Spicy Kitchen" />
          </div>
          <div className="form-group">
            <label htmlFor="ownerName">Owner Name</label>
            <input type="text" id="ownerName" name="ownerName" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Business Email</label>
            <input type="email" id="email" name="email" placeholder="contact@restaurant.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="••••••••" />
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
