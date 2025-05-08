import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>PUSH YOUR LIMITS WITH US</h1>
          <p>Have questions or want to join our gym? Reach out today!</p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <FaPhone className="contact-icon" />
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
              <p>+1 (555) 987-6543</p>
            </div>
            
            <div className="contact-card">
              <FaEnvelope className="contact-icon" />
              <h3>Email</h3>
              <p>info@gymp.com</p>
              <p>support@gymp.com</p>
            </div>
            
            <div className="contact-card">
              <FaMapMarkerAlt className="contact-icon" />
              <h3>Location</h3>
              <p>123 Fitness Street</p>
              <p>Gym City, GC 12345</p>
            </div>
            
            <div className="contact-card">
              <FaClock className="contact-icon" />
              <h3>Hours</h3>
              <p>Mon-Fri: 5:00 AM - 11:00 PM</p>
              <p>Sat-Sun: 7:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <h2>SEND US A MESSAGE</h2>
          <p className="subtitle">We'll help you achieve your fitness goals</p>
          
          <form onSubmit={handleSubmit} className="gymp-contact-form">
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="gymp-button">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>FIND OUR GYM</h2>
          <div className="map-container">
            <iframe 
              title="GYMP Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.445912619165!2d77.43545307536478!3d23.26324177900581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69005e0e12c5%3A0xb474ec844d364b64!2sGym%20ashokagarden!5e0!3m2!1sen!2sin!4v1746683029030!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;