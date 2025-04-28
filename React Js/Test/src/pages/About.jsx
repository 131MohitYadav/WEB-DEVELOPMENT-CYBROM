import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
   <>
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


      
      <section className="gym-videos-container">
      <h1 className="section-title">Our Gym Experience</h1>
      
      <div className="video-grid">
        {/* Gym Tour Video */}
        <div className="video-card">
          <h2 className="video-title">Gym Facility Tour</h2>
          <div className="responsive-iframe-container">
            <iframe
              src="https://www.youtube.com/embed/eaRQF-7hhmo?autoplay=0&mute=1"
              title="Our Gym Facility Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="youtube-video"
            />
          </div>
        </div>

        {/* New Video */}
        <div className="video-card">
          <h2 className="video-title">Workout Highlights</h2>
          <div className="responsive-iframe-container">
            <iframe
              src="https://www.youtube.com/embed/HQfF5XRVXjU?autoplay=0&mute=1"
              title="Gym Workout Highlights"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="youtube-video"
            />
          </div>
        </div>
      </div>
    </section>
   
   </>
  )
}

export default About
