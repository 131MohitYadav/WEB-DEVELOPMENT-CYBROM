import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

const Appoint1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    trainerType: 'personal',
    trainer: '',
    date: '',
    time: '',
    membership: 'personal_training', // ✅ renamed from service → membership
    notes: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newAppointment = { id: uuid(), ...formData }

    try {
      await axios.post("http://localhost:5000/appointments", newAppointment)
      alert("Appointment Booked Successfully ✅")
      navigate('/fetchapi1')
    } catch (err) {
      console.error("Error booking appointment:", err)
      alert("Failed to book appointment ❌")
    }
  }

  return (
    <div className="appoint-container44">
      <form onSubmit={handleSubmit} className="appoint-form44">
        <h2 className="appoint-title44">Book Appointment</h2>

        <label className="appoint-label44">Name</label>
        <input className="appoint-input44" type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label className="appoint-label44">Phone</label>
        <input className="appoint-input44" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label className="appoint-label44">Email</label>
        <input className="appoint-input44" type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label className="appoint-label44">Trainer Type</label>
        <select className="appoint-select44" name="trainerType" value={formData.trainerType} onChange={handleChange}>
          <option value="personal">Personal</option>
          <option value="group">Group</option>
        </select>

        <label className="appoint-label44">Trainer Name</label>
        <input className="appoint-input44" type="text" name="trainer" value={formData.trainer} onChange={handleChange} />

        <label className="appoint-label44">Date</label>
        <input className="appoint-input44" type="date" name="date" value={formData.date} onChange={handleChange} required />

        <label className="appoint-label44">Time</label>
        <input className="appoint-input44" type="time" name="time" value={formData.time} onChange={handleChange} required />

        <label className="appoint-label44">Membership Plan</label>
        <select className="appoint-select44" name="membership" value={formData.membership} onChange={handleChange} required>
          <option value="personal_training">1 Month Plan (₹499)</option>
          <option value="group_training">3 Month Plan (₹1499)</option>
          <option value="diet_plan">Annual Plan (₹5999)</option>
        </select>

        <label className="appoint-label44">Notes</label>
        <textarea className="appoint-textarea44" name="notes" value={formData.notes} onChange={handleChange}></textarea>

        <button type="submit" className="appoint-button44">Book Appointment</button>
      </form>
    </div>
  )
}

export default Appoint1
