import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate(); 

  const handleLogin = () => {

    navigate('/login'); 
  };

  return (
    <>
      <div className="login21-container">
        <div className="login21-card">
          <div className="login21-form-section">
            <h1 className="login21-logo">GY<span>M</span></h1>
            
            <h2 className="login21-title">Create Your Account</h2>

            <input type="text" placeholder="Username" className="login21-input" />
             <input type="email" placeholder="Email" className="login21-input" />
            <input type="password" placeholder="Password" className="login21-input" />

          

            <button className="login-button" onClick={handleLogin}>
              Sign Up
            </button>

            <p className="login21-register">
              Already have a account | <a href="/login">Login Here</a>
            </p>

            <div className="login21-terms">
              <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
            </div>
          </div>

          <div className="login21-image-section">
            <img 
              src="img/g3.jpg"
              alt="Fitness"
              className="login21-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
