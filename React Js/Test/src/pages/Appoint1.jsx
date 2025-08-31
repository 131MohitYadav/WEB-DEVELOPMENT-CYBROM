import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Appoint1 = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    trainerType: '',
    trainer: '',
    date: '',
    time: '',
    membership: 'personal_training',
    notes: ''
  })

  
  const generateAlphaNumId = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let id = ""
    for (let i = 0; i < 5; i++) {  // 5 char long
      id += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return id
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
      ...(name === 'trainerType' ? { trainer: '' } : {}),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newData = { ...formData, id: generateAlphaNumId() } // 👈 alphanumeric id
    axios.post("http://localhost:3000/Test", newData)
      .then(() => {
        alert("Appointment Booked Successfully ✅")
        navigate("/home")
      })
      .catch((err) => console.error("Error saving appointment:", err))
  }

  const maleTrainers = [
    "Michael Johnson",
    "James Anderson",
    "David Thompson",
    "John Carter",
    "Robert Miller"
  ]

  const femaleTrainers = [
    "Jessica Taylor",
    "Emily Moore",
    "Amanda Davis",
    "Sarah Wilson",
    "Laura Clark"
  ]

  return (
    <div className="appoint-container44">
      <h2 className="appoint-heading44">Book <br></br> Appointment</h2>
      <form className="appoint-form44" onSubmit={handleSubmit}>
        <label className="appoint-label44">Name</label>
        <input className="appoint-input44" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" required />

        <label className="appoint-label44">Phone</label>
        <input className="appoint-input44" type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Your Number" required />

        <label className="appoint-label44">Email</label>
        <input className="appoint-input44" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" required />

        <label className="appoint-label44">Trainer Type</label>
        <select
          className="appoint-select44"
          name="trainerType"
          value={formData.trainerType}
          onChange={handleChange}
          required
        >
          <option value="">Select Trainer Type</option>
          <option value="male">Male Trainer</option>
          <option value="female">Female Trainer</option>
        </select>

        <label className="appoint-label44">Trainer</label>
        <select
          className="appoint-select44"
          name="trainer"
          value={formData.trainer}
          onChange={handleChange}
          required
          disabled={!formData.trainerType}
        >
          <option value="">Select Trainer</option>
          {formData.trainerType === 'male' &&
            maleTrainers.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))
          }
          {formData.trainerType === 'female' &&
            femaleTrainers.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))
          }
        </select>

        <label className="appoint-label44">Date</label>
        <input className="appoint-input44" type="date" name="date" value={formData.date} onChange={handleChange} required />

        <label className="appoint-label44">Time</label>
        <input className="appoint-input44" type="time" name="time" value={formData.time} onChange={handleChange} required />

        <label className="appoint-label44">Membership Plan</label>
        <select className="appoint-select44" name="membership" value={formData.membership} onChange={handleChange}>
          <option value="personal_training">1 Month Plan (₹499)</option>
          <option value="group_training">3 Month Plan (₹1499)</option>
          <option value="diet_plan">Annual Plan (₹5999)</option>
        </select>

        <label className="appoint-label44">Notes</label>
        <textarea className="appoint-textarea44" name="notes" value={formData.notes} onChange={handleChange} />

        <button type="submit" className="appoint-submit44">Book Now</button>
      </form>
    </div>
  )
}

export default Appoint1
