import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaHome , FaPhoneAlt } from 'react-icons/fa';


const Classes =() => {
  

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
                <h2>Classes</h2>
                <div className="bt-option">
                  <Link to="/">Home</Link>
                  <Link to ="about-us">About</Link>
      
                  <span>Body Building</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* 
      // our Classes timetable // */}

{/* <div className="gym-video-showcase">
<h1 className="main-title">OUR CLASSES <span>TIMETABLE</span></h1>
</div> */}



{/* Class Timetable Section Begin */}

    <section className="class-timetable-section class-details-timetable spad">
      <h1 className='timet'>OUR CLASSES <span>SCHEDULE</span></h1>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="class-timetable details-timetable">
                        <table>
                            <thead>
                                <tr>
                                    <th>Day/Time</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                    <th>Saturday</th>
                                    <th>Sunday</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="class-time">6.00am - 8.00am</td>
                                    <td className="dark-bg hover-dp ts-meta" data-tsmeta="workout">
                                        <h5>WEIGHT LOOSE</h5>
                                        <span>RLefew D. Loee</span>
                                    </td>
                                    <td className="hover-dp ts-meta" data-tsmeta="fitness">
                                        <h5>Cardio</h5>
                                        <span>RLefew D. Loee</span>
                                    </td>
                                    <td className="dark-bg hover-dp ts-meta" data-tsmeta="workout">
                                        <h5>Yoga</h5>
                                        <span>Keaf Shen</span>
                                    </td>
                                    <td className="hover-dp ts-meta" data-tsmeta="fitness">
                                        <h5>Fitness</h5>
                                        <span>Kimberly Stone</span>
                                    </td>
                                    <td className="dark-bg blank-td"></td>
                                    <td className="hover-dp ts-meta" data-tsmeta="motivation">
                                        <h5>Boxing</h5>
                                        <span>Rachel Adam</span>
                                    </td>
                                    <td className="dark-bg hover-dp ts-meta" data-tsmeta="workout">
                                        <h5>Body Building</h5>
                                        <span>Robert Cage</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="class-time">10.00am - 12.00am</td>
                                    <td className="blank-td"></td>
                                    <td className="dark-bg hover-dp ts-meta" data-tsmeta="fitness">
                                        <h5>Fitness</h5>
                                        <span>Kimberly Stone</span>
                                    </td>
                                    <td className="hover-dp ts-meta" data-tsmeta="workout">
                                        <h5>WEIGHT LOOSE</h5>
                                        <span>RLefew D. Loee</span>
                                    </td>
                                    <td className="dark-bg hover-dp ts-meta" data-tsmeta="motivation">
                                        <h5>Cardio</h5>
                                        <span>RLefew D. Loee</span>
                                    </td>
                                    <td className="hover-dp ts-meta" data-tsmeta="workout">
                                        <h5>Body Building</h5>
                                        <span>Robert Cage</span>
                                    </td>
                                    <td className="dark-bg hover-dp ts-meta" data-tsmeta="motivation">
                                        <h5>Karate</h5>
                                        <span>Donald Grey</span>
                                    </td>
                                    <td className="blank-td"></td>
                                </tr>
                                <tr>
                                    <td className="class-time">5.00pm - 7.00pm</td>
                                    <td className="dark-bg hover-dp ts-meta" data-tsmeta="fitness">
                                        <h5>Boxing</h5>
                                        <span>Rachel Adam</span>
                                    </td>
                                    <td className="hover-dp ts-meta" data-tsmeta="motivation">
                                        <h5>Karate</h5>
                                        <span>Donald Grey</span>
                                    </td>
                                    <td className="dark-bg hover-dp ts-meta" data-tsmeta="workout">
                                        <h5>Body Building</h5>
                                        <span>Robert Cage</span>
                                    </td>
                                    <td className="blank-td"></td>
                                    <td className="dark-bg hover-dp ts-meta" data-tsmeta="workout">
                                        <h5>Yoga</h5>
                                        <span>Keaf Shen</span>
                                    </td>
                                    <td className="hover-dp ts-meta" data-tsmeta="motivation">
                                        <h5>Cardio</h5>
                                        <span>RLefew D. Loee</span>
                                    </td>
                                    <td className="dark-bg hover-dp ts-meta" data-tsmeta="fitness">
                                        <h5>Fitness</h5>
                                        <span>Kimberly Stone</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="class-time">7.00pm - 9.00pm</td>
                                    <td className="hover-dp ts-meta" data-tsmeta="motivation">
                                        <h5>Cardio</h5>
                                        <span>RLefew D. Loee</span>
                                    </td>
                                    <td className="dark-bg blank-td"></td>
                                    <td className="hover-dp ts-meta" data-tsmeta="fitness">
                                        <h5>Boxing</h5>
                                        <span>Rachel Adam</span>
                                    </td>
                                    <td className="dark-bg hover-dp ts-meta" data-tsmeta="workout">
                                        <h5>Yoga</h5>
                                        <span>Keaf Shen</span>
                                    </td>
                                    <td className="hover-dp ts-meta" data-tsmeta="motivation">
                                        <h5>Karate</h5>
                                        <span>Donald Grey</span>
                                    </td>
                                    <td className="dark-bg hover-dp ts-meta" data-tsmeta="fitness">
                                        <h5>Boxing</h5>
                                        <span>Rachel Adam</span>
                                    </td>
                                    <td className="hover-dp ts-meta" data-tsmeta="workout">
                                        <h5>WEIGHT LOOSE</h5>
                                        <span>RLefew D. Loee</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>




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

export default Classes;
