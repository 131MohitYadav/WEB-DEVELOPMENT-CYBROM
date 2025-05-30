
import React, { useRef, useState } from 'react';


const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const videoRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login process
    setTimeout(() => {
      console.log('Login attempted with:', { email, password });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="login-container29">
      {/* Video Background */}
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        className="video-background29"
      >
        <source  src="https://www.youtube.com/embed/uNN62f55EV0?autoplay=1&mute=1" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Semi-transparent overlay */}
      <div className="overlay29"></div>
      
      {/* Login Form */}
      <div className="login-form-container29">
        <form onSubmit={handleSubmit} className="login-form29">
          <h2>GYM ADMIN LOGIN</h2>
          
          <div className="form-group29">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group29">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" disabled={loading} className="login-button29">
            {loading ? 'LOGGING IN...' : 'LOGIN'}
          </button>
          
          <div className="forgot-password29">
            <a href="#forgot">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;