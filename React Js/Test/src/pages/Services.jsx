import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaHome , FaPhoneAlt } from 'react-icons/fa';

const Services = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    
    if (!weight || !height || !age || !sex) {
      alert('Please fill out all fields');
      return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    let bmiStatus = '';
    if (bmiValue < 18.5) {
      bmiStatus = 'Underweight';
    }
    else if (bmiValue < 24.9) {
      bmiStatus = 'Healthy';
    }
    else if (bmiValue < 29.9) {
      bmiStatus = 'Overweight';
    }
    else {
      bmiStatus = 'Obesity';
    }
    setStatus(bmiStatus);
  }

  return (
    <>
      {/* Breadcrumb */}
      <section 
        className="breadcrumb-section set-bg" 
        style={{ backgroundImage: `url('img/breadcrumb-bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb-text">
                <h2>Bmi Calculator</h2>
                <div className="bt-option">
                  <Link to="/">Home</Link>
                  <Link to="/classes">Classes</Link>
                  <span>Bmi Calculator</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BMI Calculator Section Begin */}
      <section className="bmi-calculator-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title chart-title">
                <span>check your body</span>
                <h2>BMI CALCULATOR CHART</h2>
              </div>
              <div className="chart-table">
                <table>
                  <thead>
                    <tr>
                      <th>Bmi</th>
                      <th>WEIGHT STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="point">Below 18.5</td>
                      <td>Underweight</td>
                    </tr>
                    <tr>
                      <td className="point">18.5 - 24.9</td>
                      <td>Healthy</td>
                    </tr>
                    <tr>
                      <td className="point">25.0 - 29.9</td>
                      <td>Overweight</td>
                    </tr>
                    <tr>
                      <td className="point">30.0 - and Above</td>
                      <td>Obese</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title chart-calculate-title">
                <span>check your body</span>
                <h2>CALCULATE YOUR BMI</h2>
              </div>
              <div className="chart-calculate-form">
                <p>BMI (Body Mass Index) is a simple calculator that uses your height and weight to assess whether your weight is in a healthy range. It's a useful screening tool that can indicate potential weight-related health risks.</p>
                <form onSubmit={calculateBMI}>
                  <div className="row">
                    <div className="col-sm-6">
                      <input 
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)} 
                        placeholder="Height / cm"
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                      <input 
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)} 
                        placeholder="Weight / kg"
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Age"
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                      <select
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                        className="form-control"
                        required
                      >
                        <option value="">Select Sex</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit">Calculate</button>
                    </div>
                  </div>
                </form>
                {bmi && (
  <div className='resultbmi'>
    <h3>Your Details:</h3>
    <p><strong>Age: </strong> {age} years</p>
    <p><strong>Sex: </strong> {sex}</p>
    <h4 className="mt-3">BMI RESULT -></h4>
    <p><strong>BMI Value: </strong> {bmi}</p>
    <p><strong>Status: </strong> 
      <span style={{
        color: status === 'Underweight' ? '#4da6ff' : 
               status === 'Normal weight' ? '#4dff4d' : 
               status === 'Overweight' ? '#ffcc00' : '#ff4d4d',
        fontWeight: 'bold'
      }}>
        {status}
      </span>
    </p>
  </div>
)}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BMI Calculator Section End */}

      {/* Footer Section */}
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
  )
}

export default Services