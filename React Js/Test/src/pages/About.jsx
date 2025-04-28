import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {

  // useEffect(() => {
  //   // This will ensure videos are ready when component mounts
  //   document.querySelectorAll('.youtube-video').forEach(video => {
  //     video.src += "&autoplay=1&mute=1";
  //   });
  // }, []);


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


      <div className="gym-video-showcase">
      <h1 className="main-title">EXPERIENCE OUR <span>GYM</span></h1>
      
      <div className="video-duo-container">
        {/* Left Video - Tour */}
        <div className="video-card left-card">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/eaRQF-7hhmo?autoplay=1&mute=1&loop=1&playlist=eaRQF-7hhmo&controls=0&modestbranding=1"
              title="Gym Facility Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="video-caption">
            <h3>PREMIUM FACILITY TOUR</h3>
            <div className="caption-bar"></div>
          </div>
        </div>

        {/* Right Video - Workout */}
        <div className="video-card right-card">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/HQfF5XRVXjU?autoplay=1&mute=1&loop=1&playlist=HQfF5XRVXjU&controls=0&modestbranding=1"
              title="Workout Highlights"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="video-caption">
            <h3>WORKOUT HIGHLIGHTS</h3>
            <div className="caption-bar"></div>
          </div>
        </div>
      </div>
    </div>

   
   </>
  )
}

export default About
