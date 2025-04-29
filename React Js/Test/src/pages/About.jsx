import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';


const About = () => {
  const testimonials = [
    {
      image: '/img/testimonial-2.jpg', // local image
      name: 'Marshmello Gomez',
      text: 'This gym transformed my life. Excellent equipment and environment! lorem adafd oefe sfosfs osfa  ofaf osfdfs',
      stars: 5
    },
    {
      image: 'https://i.ibb.co/z8ZCNjv/girl.jpg',
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
    autoplaySpeed: 3000
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
                  <Link to="/">Home</Link>
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
    </>
  );
};

export default About;
