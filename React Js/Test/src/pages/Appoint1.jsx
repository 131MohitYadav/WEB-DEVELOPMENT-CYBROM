import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

const Appoint1 = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    trainerType: 'personal',
    trainer: '',
    date: '',
    time: '',
    membership: 'personal_training', // 🔥 changed service → membership
    notes: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newAppointment = {
      ...formData,
      id: uuid()
    }

    axios.post("http://localhost:5000/appointments", newAppointment)
      .then(() => {
        alert("Appointment booked successfully ✅")
        navigate('/fetchapi1')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="appoint-form44">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Other fields remain same */}

        <label className="appoint-label44">Membership Plan</label>
        <select
          className="appoint-select44"
          name="membership"   // 🔥 changed from service → membership
          value={formData.membership}
          onChange={handleChange}
          required
        >
          <option value="personal_training">1 Month Plan (₹499)</option>
          <option value="group_training">3 Month Plan (₹1499)</option>
          <option value="diet_plan">Annual Plan (₹5999)</option>
        </select>

        <button type="submit" className="appoint-btn44">Book</button>
      </form>
    </div>
  )
}

export default Appoint1
