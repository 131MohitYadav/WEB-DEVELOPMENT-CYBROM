import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: "", // username or email
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    const { identifier, password } = formData;

    if (!identifier || !password) {
      setError("All fields are required!");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("No user found. Please register first!");
      return;
    }

    // ✅ Match by username OR email
    if (
      (storedUser.email === identifier || storedUser.username === identifier) &&
      storedUser.password === password
    ) {
      setError("");
      alert("Login successful!");
      navigate("/home");
    } else {
      setError("Invalid username/email or password!");
    }
  };

  return (
    <div className="login21-container">
      <div className="login21-card">
        <div className="login21-form-section">
          <h1 className="login21-logo">
            GY<span>M</span>
          </h1>

          <h2 className="login21-title">Log In</h2>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <input
            type="text"
            name="identifier"  // ✅ username or email
            placeholder="Username or Email"
            className="login21-input"
            value={formData.identifier}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login21-input"
            value={formData.password}
            onChange={handleChange}
          />

          <div className="login21-options">
            <label>
              <input type="checkbox" />
              Keep me logged in
            </label>
            <a href="#" className="login21-forgot">
              Forgot password
            </a>
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
          <img src="img/g3.jpg" alt="Fitness" className="login21-image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
