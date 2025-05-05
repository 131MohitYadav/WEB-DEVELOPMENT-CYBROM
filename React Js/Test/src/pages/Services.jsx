import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaHome , FaPhoneAlt } from 'react-icons/fa';

const Services = () => {

  const[weight , setWeight] = useState('');
  const[height , setHeight] = useState('');
  const[age , setAge] = useState('');
  const[sex , setSex] = useState('');
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
                  <Link to ="/classes">Classes</Link>
      
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
                        <p>BMI ( Body Mass Index) is a simple calculatior that uses your height and weight to assess whether your weight is in a healthy range. It's a useful screening tool that can indicate potential weight-related health risks. Enter your details below to calculate your BMI and see where you fail on the standard weight status categories.</p>
                        <form action="#">
                            <div className="row">
                                <div className="col-sm-6">
                                    <input 
                                    type="number"
                                    value={height}
                                    onChange={(e)=> setHeight(e.target.value)} 
                                    placeholder="Height / cm" />
                                </div>
                                <div className="col-sm-6">
                                    <input 
                                    type="text"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)} 
                                    placeholder="Weight / kg" />
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" placeholder="Age" />
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" placeholder="Sex" />
                                </div>
                                <div className="col-lg-12">
                                    <button type="submit">Calculate</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* BMI Calculator Section End */}










      
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
  )
}

export default Services
