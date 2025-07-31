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
    monthName: '',
    formattedTime: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const dateObj = new Date(formData.date)
    const timeParts = formData.time.split(":")
    const hour = parseInt(timeParts[0])
    const minute = timeParts[1]
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12
    const formattedTime = `${formattedHour}:${minute} ${ampm}`
    const monthName = dateObj.toLocaleString('default', { month: 'long' })

    const dataWithId = {
      ...formData,
      id: uuid().slice(0, 4),
      formattedTime,
      monthName
    }

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
        <label>Enter Your Full Name</label>
        <input name="name" placeholder="e.g. John Doe" onChange={handleChange} required />

        <label>Enter Your Phone Number</label>
        <input name="phone" placeholder="e.g. 9876543210" onChange={handleChange} required />

        <label>Enter Your Email Address</label>
        <input name="email" placeholder="e.g. john@example.com" onChange={handleChange} required />

        <label>Select Trainer Type</label>
        <select name="trainerType" onChange={handleChange} required>
          <option value="personal">Personal Trainer</option>
          <option value="group">Group Trainer</option>
          <option value="virtual">Virtual Trainer</option>
        </select>

        <label>Select Trainer Name</label>
        <select name="trainer" onChange={handleChange} required>
          <option value="">-- Select Trainer --</option>
          <option value="Alex Sharma">Alex Sharma</option>
          <option value="Priya Verma">Priya Verma</option>
          <option value="Rahul Singh">Rahul Singh</option>
          <option value="Sneha Mehta">Sneha Mehta</option>
          <option value="Karan Patel">Karan Patel</option>
        </select>

        <label>Select Appointment Date</label>
        <input type="date" name="date" onChange={handleChange} required />

        <label>Select Appointment Time</label>
        <input type="time" name="time" min="05:00" max="23:59" onChange={handleChange} required />

        <label>Select Service</label>
        <select name="service" onChange={handleChange} required>
          <option value="personal_training">Personal Training</option>
          <option value="group_training">Group Training</option>
          <option value="diet_plan">Diet Plan</option>
          <option value="yoga_session">Yoga Session</option>
          <option value="crossfit">CrossFit</option>
          <option value="zumba">Zumba</option>
          <option value="rehab">Rehab Training</option>
        </select>

        <label>Additional Notes</label>
        <textarea name="notes" placeholder="Write any notes or preferences..." onChange={handleChange}></textarea>

        <button type="submit" style={{ background: '#28a745', color: '#fff', padding: '10px', border: 'none', cursor: 'pointer' }}>Book Appointment</button>
      </form>
    </div>
  )
}

export default Appoint
