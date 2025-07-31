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
      await axios.post('http://localhost:3000/appointments', dataWithId)
      alert('Appointment Booked Successfully!')
      navigate('/fetchapi')
    } catch (error) {
      alert('Error booking appointment')
    }
  }

  return (
    <>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} /><br />
        <input name="phone" placeholder="Phone" onChange={handleChange} /><br />
        <input name="email" placeholder="Email" onChange={handleChange} /><br />
        <input name="trainer" placeholder="Trainer" onChange={handleChange} /><br />
        <input type="date" name="date" onChange={handleChange} /><br />
        <input type="time" name="time" onChange={handleChange} /><br />
        <select name="service" onChange={handleChange}>
          <option value="personal_training">Personal Training</option>
          <option value="group_training">Group Training</option>
        </select><br />
        <textarea name="notes" placeholder="Notes" onChange={handleChange}></textarea><br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Appoint
