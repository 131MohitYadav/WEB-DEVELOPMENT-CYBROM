import React from 'react'
import { Link } from 'react-router-dom';

const Services = () => {
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
    
    </>
  )
}

export default Services
