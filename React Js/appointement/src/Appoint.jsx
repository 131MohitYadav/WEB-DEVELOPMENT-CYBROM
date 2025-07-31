import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

const Appoint = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    trainer: '',
    date: '',
    time: '',
    service: 'personal_training',
    trainerType: 'personal',
    notes: '',
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const dataWithId = { ...formData, id: uuid().slice(0, 4) }
    try {
      await axios.post('http://localhost:3000/appointment', dataWithId)
      alert('Appointment Booked Successfully!')
      navigate('/fetchapi')
    } catch (error) {
      alert('Error booking appointment')
    }
  }

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center' }}>Book a Gym Appointment</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <input name="email" placeholder="Email Address" onChange={handleChange} required />

        <label>Trainer Type</label>
        <select name="trainerType" onChange={handleChange} required>
          <option value="personal">Personal Trainer</option>
          <option value="group">Group Trainer</option>
          <option value="virtual">Virtual Trainer</option>
        </select>

        <input name="trainer" placeholder="Trainer's Name" onChange={handleChange} />

        <label>Appointment Date</label>
        <input type="date" name="date" onChange={handleChange} required />

        <label>Appointment Time</label>
        <input type="time" name="time" onChange={handleChange} required />

        <label>Service</label>
        <select name="service" onChange={handleChange} required>
          <option value="personal_training">Personal Training</option>
          <option value="group_training">Group Training</option>
          <option value="diet_plan">Diet Plan</option>
          <option value="yoga_session">Yoga Session</option>
          <option value="crossfit">CrossFit</option>
          <option value="zumba">Zumba</option>
          <option value="rehab">Rehab Training</option>
        </select>

        <textarea name="notes" placeholder="Additional Notes" onChange={handleChange}></textarea>

        <button type="submit" style={{ background: '#28a745', color: '#fff', padding: '10px', border: 'none', cursor: 'pointer' }}>Book Appointment</button>
      </form>
    </div>
  )
}

export default Appoint
