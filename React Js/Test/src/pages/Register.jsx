import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.type]: e.target.value,
    });
  };

  const handleRegister = () => {
    const { username, email, password } = formData;

    // Simple validation
    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter a valid email!");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }

    // Save to localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({ username, email, password })
    );

    setError("");
    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="login21-container">
      <div className="login21-card">
        <div className="login21-form-section">
          <h1 className="login21-logo">
            GY<span>M</span>
          </h1>

          <h2 className="login22-title">Create Your Account</h2>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <input
            type="text"
            placeholder="Username"
            className="login21-input"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="login21-input"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="login21-input"
            value={formData.password}
            onChange={handleChange}
          />

          <button className="login-button" onClick={handleRegister}>
            Sign Up
          </button>

          <p className="login21-register">
            Already have an account? <a href="/login">Login Here</a>
          </p>

          <div className="login21-terms">
            <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
          </div>
        </div>

        <div className="login21-image-section">
          <img src="img/g3.jpg" alt="Fitness" className="login21-image" />
        </div>
      </div>
    </div>
  );
};

export default Register;
