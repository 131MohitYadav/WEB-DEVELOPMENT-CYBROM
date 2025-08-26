import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { FaHome, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Appoint1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    trainerType: 'personal',
    trainer: '',
    date: '',
    time: '',
    service: 'personal_training', //
    notes: ''

  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const dataWithId = {
      ...formData,
      id: uuid().slice(0, 4),
      monthName: formData.date ? new Date(formData.date).toLocaleString('default', { month: 'long' }) : '',
      formattedTime: formData.time ? formatTime(formData.time) : ''
    }

    try {
      await axios.post('http://localhost:3000/Test', dataWithId)
      alert('Appointment Booked Successfully!')
      navigate('/fetchapi')
    } catch (error) {
      alert('Error booking appointment')
    }
  }

  const formatTime = (time) => {
    const [hourStr, minute] = time.split(":")
    let hour = parseInt(hourStr)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    hour = hour % 12 === 0 ? 12 : hour % 12
    return `${hour}:${minute} ${ampm}`
  }

  return (
    <div className="page-container">
      <div className="appoint-container44">
        <h2 className="appoint-title44">Book a Gym Appointment</h2>
        <form onSubmit={handleSubmit} className="appoint-form44">

          <label className="appoint-label44">Full Name</label>
          <input className="appoint-input44" name="name" placeholder="Enter Your Name" onChange={handleChange} required />

          <label className="appoint-label44">Phone Number</label>
          <input className="appoint-input44" name="phone" placeholder="Enter Your Number" onChange={handleChange} required />

          <label className="appoint-label44">Email Address</label>
          <input className="appoint-input44" name="email" placeholder="Enter Your Email Id" onChange={handleChange} required />

          <label className="appoint-label44">Trainer Type</label>
          <select className="appoint-select44" name="trainerType" onChange={handleChange} required>
            <option value="personal">Personal Trainer</option>
            <option value="group">Group Trainer</option>
            <option value="virtual">Virtual Trainer</option>
          </select>

          <label className="appoint-label44">Trainer Name</label>
          <select className="appoint-select44" name="trainer" onChange={handleChange} required>
            <option value="">-- Select Trainer --</option>
            <option value="Alex Sharma">Alex Sharma</option>
            <option value="Priya Verma">Priya Verma</option>
            <option value="Rahul Singh">Rahul Singh</option>
            <option value="Sneha Mehta">Sneha Mehta</option>
            <option value="Karan Patel">Karan Patel</option>
          </select>

          <label className="appoint-label44">Appointment Date</label>
          <input className="appoint-input44" type="date" name="date" onChange={handleChange} required />

          <label className="appoint-label44">Appointment Time</label>
          <input className="appoint-input44" type="time" name="time" min="05:00" max="00:00" onChange={handleChange} required />

          <label className="appoint-label44">Membership Plan</label>
          <select className="appoint-select44" name="service" onChange={handleChange} required>
            <option value="personal_training">1 Month Plan (₹499)</option>
            <option value="group_training">3 Month Plan (₹1499)</option>
            <option value="diet_plan">Annual Plan (₹5999)</option>
          </select>

          <label className="appoint-label44">Additional Notes</label>
          <textarea className="appoint-textarea44" name="notes" placeholder="Write any notes or preferences..." onChange={handleChange}></textarea>

          <button type="submit" className="appoint-btn44">Book Appointment</button>
        </form>
      </div>

      {/* Footer Section */}
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
              <p>+91 9876543210 | +91 9123456780</p>
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
            <p>We at GymM are committed to building a stronger, healthier India. Join us for expert fitness training, personal coaching, and a vibrant community. Transform your lifestyle with us today!</p>
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
    </div>
  )
}

export default Appoint1
