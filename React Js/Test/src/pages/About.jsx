import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaHome , FaPhoneAlt } from 'react-icons/fa';


const About = () => {
  const testimonials = [
    {
      image: '/img/testimonial-2.jpg', // local image
      name: 'Marshmello Gomez',
      text: 'This gym transformed my life. Excellent equipment and environment! lorem adafd oefe sfosfs osfa  ofaf osfdfs',
      stars: 5
    },
    {
      image: '/img/testimonial-1.jpg',
      name: 'Sophie Martinez',
      text: 'The trainers are very helpful and professional. Highly recommended!',
      stars: 4
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };
  
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
                <h2>About us</h2>
                <div className="bt-option">
                  <Link to="/home">Home</Link>
                  <span>About</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Video Showcase */}
      <div className="gym-video-showcase">
        <h1 className="main-title">EXPERIENCE OUR <span>GYM</span></h1>
        <div className="video-duo-container">
          {/* Left Video */}
          <div className="video-card left-card">
            <div className="video-container-wrapper">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/mBY68kFvhq8?autoplay=1&mute=1&loop=1&playlist=mBY68kFvhq8&controls=0&modestbranding=1"
                  title="Gym Facility Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="youtube-iframe"
                />
              </div>
            </div>
            <div className="video-caption">
              <h3>PREMIUM FACILITY TOUR</h3>
              <div className="caption-bar"></div>
            </div>
          </div>

          {/* Right Video */}
          <div className="video-card right-card">
            <div className="video-container-wrapper">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/uNN62f55EV0?autoplay=1&mute=1"
                  title="Workout Highlights"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="youtube-iframe"
                />
              </div>
            </div>
            <div className="video-caption">
              <h3>WORKOUT HIGHLIGHTS</h3>
              <div className="caption-bar"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Carousel Section */}
      <div className="testimonial-section">
        <h4 className="subtitle">TESTIMONIAL</h4>
        <h2 className="title">OUR CLIENT SAY</h2>
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div className="testimonial-slide" key={index}>
              <img src={t.image} alt={t.name} className="profile-img" />
              <p className="testimonial-text">{t.text}</p>
              <h4 className="client-name">{t.name}</h4>
              <div className="stars">
                {'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}
              </div>
            </div>
          ))}
        </Slider>
      </div>




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

export default About;
