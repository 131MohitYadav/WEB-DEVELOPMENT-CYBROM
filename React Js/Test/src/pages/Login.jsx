import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); 

  const handleLogin = () => {

    navigate('/home'); 
  };

  return (
    <>
      <div className="login21-container">
        <div className="login21-card">
          <div className="login21-form-section">
            <h1 className="login21-logo">GY<span>M</span></h1>
            
            <h2 className="login21-title">Log In</h2>

            <input type="email" placeholder="Email" className="login21-input" />
            <input type="password" placeholder="Password" className="login21-input" />

            <div className="login21-options">
              <label>
                <input type="checkbox" />
                Keep me logged in
              </label>
              <a href="#" className="login21-forgot">Forgot password</a>
            </div>

            <button className="login-button" onClick={handleLogin}>
              Log in
            </button>

            <p className="login21-register">
              Don't have an account? <a href="/">Register</a>
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

export default Login;
