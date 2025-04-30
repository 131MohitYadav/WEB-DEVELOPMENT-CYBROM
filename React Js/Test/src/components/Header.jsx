import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaHome , FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <>
    <header className="header-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <div className="logo">
              <Link to="/"><img src="/img/logo.png" alt="logo" /></Link>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="nav-menu">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/classes">Classes</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/team">Profile</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                
              </ul>
            </nav>
            
          </div>
         
        </div>
      </div>
    </header>

    <Outlet/>



    {/* // footer  section // */}
    
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
                <p> +91 9876543210 | +91 9123456780</p>
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
              <p>We at GymM are committed to building a stronger, healthier India. 
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
              <h4>Useful links</h4>
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
};

export default Header;
