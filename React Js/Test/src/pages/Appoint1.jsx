import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

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
    membership: 'personal_training',   // ✅ sirf yeh change (pehle service tha)
    notes: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newData = { ...formData, id: uuid() }

    axios.post("http://localhost:3000/Test", newData)
      .then(() => {
        alert("Appointment Booked Successfully ✅")
        navigate("/fetchapi1")
      })
      .catch((err) => console.error("Error saving appointment:", err))
  }

  return (
    <div className="appoint-container44">
      <h2 className="appoint-heading44">Book Appointment</h2>
      <form className="appoint-form44" onSubmit={handleSubmit}>
        
        <label className="appoint-label44">Name</label>
        <input className="appoint-input44" type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label className="appoint-label44">Phone</label>
        <input className="appoint-input44" type="text" name="phone" value={formData.phone} onChange={handleChange} required />

        <label className="appoint-label44">Email</label>
        <input className="appoint-input44" type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label className="appoint-label44">Trainer Type</label>
        <input className="appoint-input44" type="text" name="trainerType" value={formData.trainerType} onChange={handleChange} required />

        <label className="appoint-label44">Trainer</label>
        <input className="appoint-input44" type="text" name="trainer" value={formData.trainer} onChange={handleChange} required />

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
