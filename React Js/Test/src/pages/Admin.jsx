import React, { useState } from 'react';
import { 
  FaHome, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube, 
  FaInstagram 
} from 'react-icons/fa';

function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const adminEmail = 'Mohit@gmail.com';
  const adminPassword = 'admin123';

  const handleLogin = () => {
    if (email === adminEmail && password === adminPassword) {
      alert('Login Successful');
      setError('');
    } else {
      setError('Invalid Admin Email or Password');
    }
  };

  return (
    <>
    <div className="back131">
      <img src="admback1.jpg"/>
    </div>
      <div className="login-container27">
        <div className="login-card27">
          <div className="login-avatar27">
            <img src="adm.png" alt="Admin" />
          </div> 
          <h2 className="login-title27">Admin Login</h2>

          <input 
            type="email"
            placeholder="Enter Admin Email"
            className="login-input27"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Admin Password"
            className="login-input27"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p style={{ color: 'red', fontSize: '0.9em' }}>{error}</p>}
          
          <button className="login-button27" onClick={handleLogin}>
            Sign In
          </button>
        </div>
      </div>

      {/* Footer section */}
      <footer className="footer">
        <div className="footer-top">
          <div className="contact-item">
            <i className="icon"><FaHome /></i>
            <div>
              <h4>Address</h4>
              <p>7th Floor, GymM Fitness Hub, Andheri West, Mumbai, Maharashtra 400053</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="icon"><FaPhoneAlt /></i>
            <div>
              <h4>Phone</h4>
              <p>+91 9876543210 | +91 9123456780</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="icon"><FaEnvelope /></i>
            <div>
              <h4>Email</h4>
              <p>Support.gymcenter@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-col logo-section">
            <h2 className="logo">GY<span>M</span></h2>
            <p>
              We at GymM are committed to building a stronger, healthier India. 
              Join us for expert fitness training, personal coaching, and a vibrant community. 
              Transform your lifestyle with us today!
            </p>
            <div className="social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaYoutube />
              <FaInstagram />
              <FaEnvelope />
            </div>
          </div>

          <div className="footer-col">
            <h4>Useful Links</h4>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Classes</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li>Login</li>
              <li>My Account</li>
              <li>Subscribe</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Tips & Guides</h4>
            <ul>
              <li>Physical fitness may help prevent depression, anxiety</li>
              <li>Fitness: Best exercise to lose belly fat and tone up</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright ©2025 All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Admin;
