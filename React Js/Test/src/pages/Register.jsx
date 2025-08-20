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
      [e.target.name]: e.target.value,   // ✅ use name instead of type
    });
  };

  const handleRegister = () => {
    const { username, email, password } = formData;

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

    localStorage.setItem("user", JSON.stringify({ username, email, password }));

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
            name="username"   // ✅ added name
            placeholder="Username"
            className="login21-input"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"   // ✅ added name
            placeholder="Email"
            className="login21-input"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"   // ✅ added name
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
