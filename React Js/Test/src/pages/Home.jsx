import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {
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





</>




  );
};

export default Home;
