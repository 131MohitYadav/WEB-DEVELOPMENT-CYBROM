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


  
    <section class="choseus-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>Why chose us?</span>
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
                        <h4>Modern equipment</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            dolore facilisis.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="cs-item">
                        <span class="flaticon-033-juice"></span>
                        <h4>Healthy nutrition plan</h4>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                            facilisis.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="cs-item">
                        <span class="flaticon-002-dumbell"></span>
                        <h4>Proffesponal training plan</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            dolore facilisis.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="cs-item">
                        <span class="flaticon-014-heart-beat"></span>
                        <h4>Unique to your needs</h4>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                            facilisis.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>




</>




  );
};

export default Home;
