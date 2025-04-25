import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick"; // make sure to install: npm i react-slick slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const teamMembers = [
    { name: "Athart Rachel", role: "Gym Trainer", pic: "/img/team-1.jpg" },
    { name: "Athart Rachel", role: "Gym Trainer", pic: "/img/team-2.jpg" },
    { name: "Athart Rachel", role: "Gym Trainer", pic: "/img/team-3.jpg" },
    { name: "Athart Rachel", role: "Gym Trainer", pic: "/img/team-4.jpg" },
    { name: "Athart Rachel", role: "Gym Trainer", pic: "/img/team-5.jpg" },
    { name: "Athart Rachel", role: "Gym Trainer", pic: "/img/team-6.jpg" },
  ];


const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,          // Enable auto-scroll
        autoplaySpeed: 2000,     // 3 seconds delay
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
      };


  return (
    <>
    <section className="hero-section">
      <Carousel
        fade
        controls={false}
        indicators={false}
        interval={3000}     // Auto slide every 3 seconds
        pause={false}       // Do not pause on hover
        wrap={true}         // Loop from last to first slide
      >
        <Carousel.Item>
          <img
            className="d-block w-100 hero-image"
            src="/img/hero-1.jpg"
            alt="First slide"
          />
          <div className="hero-text">
            
            <h1>
              BE STRONG <span style={{ color: '#f36100' }}>TRAINING HARD</span>
            </h1>
            <button className="primary-btn">GET INFO</button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 hero-image"
            src="/img/hero-2.jpg"
            alt="Second slide"
          />
          <div className="hero-text">
            <h1>
              SHAPE YOUR <span style={{ color: '#f36100' }}>BODY</span>
            </h1>
            <button className="primary-btn">JOIN NOW</button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 hero-image"
            src="/img/hero-1.jpg"
            alt="Third slide"
          />
          <div className="hero-text">
            <h1>
              PUSH YOUR <span style={{ color: '#f36100' }}>LIMITS</span>
            </h1>
            <button className="primary-btn">CONTACT US</button>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>

{/* 
  choose us section */}
  <section class="choseus-section spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title">
                    <span>Why choose us?</span>
                    <h2>PUSH YOUR LIMITS FORWARD</h2>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-lg-3 col-sm-6">
                <div class="cs-item">
                    <span class="flaticon-034-stationary-bike">
                        <img src='/img/dumbell.png' />
                    </span>
                    <h4>Modern Equipment</h4>
                    <p>Our gym is equipped with state-of-the-art machines and tools to help you train efficiently and safely.</p>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="cs-item">
                    <span class="flaticon-033-juice">
                        <img src='/img/juices.png' />
                    </span>
                    <h4>Healthy Nutrition Plan</h4>
                    <p>Get personalized nutrition plans tailored to your fitness goals, so you can fuel your body the right way.</p>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="cs-item">
                    <span class="flaticon-002-dumbell">
                        <img src='/img/dum.png' />
                    </span>
                    <h4>Professional Training Programs</h4>
                    <p>Train under certified fitness experts who design effective workout routines to maximize your performance.</p>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="cs-item">
                    <span class="flaticon-014-heart-beat">
                        <img src='/img/heartbeat.png' />
                    </span>
                    <h4>Customized for You</h4>
                    <p>Every fitness journey is unique — that’s why we offer plans that are personalized to match your individual needs.</p>
                </div>
            </div>
        </div>
    </div>
</section>


{/* class section */}

<section className="classes-section spad">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title">
                    <span>Our Classes</span>
                    <h2>WHAT WE CAN OFFER</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6">
                <div className="class-item">
                    <div className="ci-pic">
                        <img src="/img/class-1.jpg" alt="Weightlifting" />
                    </div>
                    <div className="ci-text">
                        <span>STRENGTH</span>
                        <h5>Weightlifting</h5>
                        {/* <a href="#"><i className="fa fa-angle-right"></i></a> */}
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="class-item">
                    <div className="ci-pic">
                        <img src="/img/class-2.jpg" alt="Indoor Cycling" />
                    </div>
                    <div className="ci-text">
                        <span>Cardio</span>
                        <h5>Indoor cycling</h5>
                        {/* <a href="#"><i className="fa fa-angle-right"></i></a> */}
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="class-item">
                    <div className="ci-pic">
                        <img src="img/class-3.jpg" alt="Kettlebell Power" />
                    </div>
                    <div className="ci-text">
                        <span>STRENGTH</span>
                        <h5>Kettlebell power</h5>
                        {/* <a href="#"><i className="fa fa-angle-right"></i></a> */}
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="class-item">
                    <div className="ci-pic">
                        <img src="img/class-4.jpg" alt="Indoor Cycling" />
                    </div>
                    <div className="ci-text">
                        <span>Cardio</span>
                        <h4>Indoor cycling</h4>
                        {/* <a href="#"><i className="fa fa-angle-right"></i></a> */}
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="class-item">
                    <div className="ci-pic">
                        <img src="img/class-5.jpg" alt="Boxing" />
                    </div>
                    <div className="ci-text">
                        <span>Training</span>
                        <h4>Boxing</h4>
                        {/* <a href="#"><i className="fa fa-angle-right"></i></a> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{/* // banner section */}

<section className="banner-section" style={{ backgroundImage: "url(img/banner-bg.jpg)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="bs-text">
                            <h2>registration now to get more deals</h2>
                            <div className="bt-tips">Where health, beauty and fitness meet.</div>
                            <a href="/appointment" className="primary-btn btn-normal" >Appointment</a>

                        </div>
                    </div>
                </div>
            </div>
        </section>


{/* pricing plan */}


<section className="pricing-section spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title">
          <span>Our Plans</span>
          <h2>Choose Your Gym Membership</h2>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      {/* Daily Pass */}
      <div className="col-lg-4 col-md-8">
        <div className="ps-item">
          <h3>1 Month Plan</h3>
          <div className="pi-price">
            <h2>₹ 499</h2>
            {/* <span>PER DAY</span> */}
          </div>
          <ul>
            <li>All basic facilities</li>
            <li>Weights & cardio equipment</li>
            <li>Locker facility</li>
            <li>Shower available</li>
            <li>Trainer guidance</li>
            <li>Time limit: 2 hours</li>
          </ul>
          <a href="#" className="primary-btn pricing-btn" style={{ textDecoration: 'none' }}>
  JOIN NOW
</a>
        </div>
      </div>

      {/* 3-Month Plan (Popular) */}
      <div className="col-lg-4 col-md-8">
        <div className="ps-item featured-plan">
          <div className="popular-tag">Most Popular</div>
          <h3>3 Month Plan</h3>
          <div className="pi-price">
            <h2>₹ 1,499</h2>
            {/* <span>PER MONTH</span> */}
          </div>
          <ul>
            <li>Unlimited access</li>
            <li>Personal training (weekly)</li>
            <li>Zumba/Yoga classes</li>
            <li>Diet consultation</li>
            <li>Free protein shakes</li>
            <li>24x7 security</li>
          </ul>
          <a href="#" className="primary-btn pricing-btn" style={{ textDecoration: 'none' }}>
  JOIN NOW
</a>
        </div>
      </div>

      {/* Annual Membership */}
      <div className="col-lg-4 col-md-8">
        <div className="ps-item">
          <h3>Annual Membership</h3>
          <div className="pi-price">
            <h2>₹ 5,999</h2>
            {/* <span>PER MONTH</span> */}
          </div>
          <ul>
            <li>All premium facilities</li>
            <li>Dedicated trainer</li>
            <li>Body analysis (monthly)</li>
            <li>Steam/Sauna</li>
            <li>Free gym T-shirt</li>
            <li>Guest passes (4/year)</li>
          </ul>
          <a href="#" className="primary-btn pricing-btn" style={{ textDecoration: 'none' }}>
  JOIN NOW
</a>
        </div>
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-lg-12 text-center">
        <p className="note-text">*GST extra | Medical certificate required</p>
      </div>
    </div>
  </div>
</section>



{/* Gallery Section Begin */}
<div className="gallery-section">
    <div className="gallery">
        <div className="grid-sizer"></div>
        <div className="gs-item grid-wide" style={{ backgroundImage: "url('/img/gallery-1.jpg')" }}>
            <a href="/img/gallery-1.jpg" className="thumb-icon image-popup">
                <i className="fa fa-picture-o"></i>
            </a>
        </div>
        <div className="gs-item" style={{ backgroundImage: "url('/img/gallery-2.jpg')" }}>
            <a href="/img/gallery-2.jpg" className="thumb-icon image-popup">
                <i className="fa fa-picture-o"></i>
            </a>
        </div>
        <div className="gs-item" style={{ backgroundImage: "url('/img/gallery-3.jpg')" }}>
            <a href="/img/gallery-3.jpg" className="thumb-icon image-popup">
                <i className="fa fa-picture-o"></i>
            </a>
        </div>
        <div className="gs-item" style={{ backgroundImage: "url('/img/gallery-4.jpg')" }}>
            <a href="/img/gallery-4.jpg" className="thumb-icon image-popup">
                <i className="fa fa-picture-o"></i>
            </a>
        </div>
        <div className="gs-item" style={{ backgroundImage: "url('/img/gallery-5.jpg')" }}>
            <a href="/img/gallery-5.jpg" className="thumb-icon image-popup">
                <i className="fa fa-picture-o"></i>
            </a>
        </div>
        <div className="gs-item grid-wide" style={{ backgroundImage: "url('/img/gallery-6.jpg')" }}>
            <a href="/img/gallery-6.jpg" className="thumb-icon image-popup">
                <i className="fa fa-picture-o"></i>
            </a>
        </div>
    </div>
</div>
{/* Gallery Section End */}

{/* Team section */}
<section className="team-section spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title">
          <span>Our Team</span>
          <h2>TRAIN WITH EXPERTS</h2>
        </div>
      </div>
    </div>
    
    <Slider {...settings} className="ts-slider">
      {teamMembers.map((member, index) => (
        <div key={index} className="ts-item">
          <div className="ti-pic">
            <img src={member.pic} alt={member.name} />
          </div>
          <div className="ts_text">
            <h5>{member.name}</h5>
            <span>{member.role}</span>
          </div>
        </div>
      ))}
    </Slider>
    
    <div className="text-center mt-5">
      <button className="primary-btn">Appointment</button>
    </div>
  </div>
</section>


{/* // footer  section // */}

<footer className="footer">
      <div className="footer-overlay">
        <div className="footer-container">
          <div className="footer-about">
            <h2>GYM<span>M</span></h2>
            <p>Shape your body and achieve your fitness goals with us!</p>
            <div className="footer-socials">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Classes</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p><FaPhoneAlt /> +1 234 567 890</p>
            <p><FaEnvelope /> info@gymwebsite.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 GYM M. All Rights Reserved.</p>
        </div>
      </div>
    </footer>






</>




  );
};

export default Home;
