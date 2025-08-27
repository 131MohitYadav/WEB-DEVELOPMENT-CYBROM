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
    membership: 'personal_training', // ✅ service → membership
    notes: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newAppointment = { id: uuid(), ...formData }
      // ✅ Save to same endpoint "Test"
      await axios.post("http://localhost:3000/Test", newAppointment)
      alert("Appointment booked successfully ✅")
      navigate('/fetchapi1')
    } catch (error) {
      console.error("Error booking appointment:", error)
    }
  }

  return (
    <div className="appoint-container44">
      <form className="appoint-form44" onSubmit={handleSubmit}>
        <h2 className="appoint-heading44">Book Appointment</h2>

        {/* other inputs same */}

        <label className="appoint-label44">Membership Plan</label>
        <select
          className="appoint-select44"
          name="membership"  // ✅ membership ही save होगा
          onChange={handleChange}
          required
        > 
          <option value="personal_training">1 Month Plan (₹499)</option>
          <option value="group_training">3 Month Plan (₹1499)</option>
          <option value="diet_plan">Annual Plan (₹5999)</option>
        </select>

        <label className="appoint-label44">Notes</label>
        <textarea
          className="appoint-input44"
          name="notes"
          onChange={handleChange}
        ></textarea>

        <button className="appoint-button44" type="submit">Book Appointment</button>
      </form>
    </div>
  )
}

export default Appoint1
