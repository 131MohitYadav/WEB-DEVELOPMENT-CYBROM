import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fetchapi1 = () => {
  const [apidata, setApidata] = useState([])
  const [frm, setFrm] = useState(false)
  const [editdata, setEditdata] = useState({})

  const fetchData = () => {
    axios.get('http://localhost:3000/appointment')
      .then(res => setApidata(res.data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const mydelete = (id) => {
    axios.delete(`http://localhost:3000/appointment/${id}`)
      .then(() => {
        alert("Deleted successfully")
        fetchData()
      })
  }

  const handleInput = (e) => {
    const { name, value } = e.target
    setEditdata(prev => ({ ...prev, [name]: value }))
  }

  const finalsubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:3000/appointment/${editdata.id}`, editdata)
      .then(() => {
        alert("Updated successfully")
        setFrm(false)
        fetchData()
      })
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Appointments</h1>
      <table border="1" align='center' cellPadding="8">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Phone</th><th>Email</th>
            <th>Trainer Type</th><th>Trainer</th><th>Date</th><th>Time</th><th>Month</th>
            <th>Service</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            apidata.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.phone}</td>
                <td>{e.email}</td>
                <td>{e.trainerType}</td>
                <td>{e.trainer}</td>
                <td>{e.date}</td>
                <td>{e.formattedTime}</td>
                <td>{e.monthName}</td>
                <td>{e.service}</td>
                <td>
                  <button onClick={() => mydelete(e.id)}>Delete</button>
                  <button onClick={() => { setFrm(true); setEditdata(e) }}>Edit</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      {frm && (
        <form onSubmit={finalsubmit} style={{ textAlign: 'center', marginTop: '30px' }}>
          <input name="name" value={editdata.name} onChange={handleInput} placeholder="Enter your name" /><br />
          <input name="phone" value={editdata.phone} onChange={handleInput} placeholder="Phone number" /><br />
          <input name="email" value={editdata.email} onChange={handleInput} placeholder="Email address" /><br />

          <select name="trainerType" value={editdata.trainerType} onChange={handleInput}>
            <option value="personal">Personal Trainer</option>
            <option value="group">Group Trainer</option>
            <option value="virtual">Virtual Trainer</option>
          </select><br />

          <select name="trainer" value={editdata.trainer} onChange={handleInput}>
            <option value="">-- Select Trainer --</option>
            <option value="Alex Sharma">Alex Sharma</option>
            <option value="Priya Verma">Priya Verma</option>
            <option value="Rahul Singh">Rahul Singh</option>
            <option value="Sneha Mehta">Sneha Mehta</option>
            <option value="Karan Patel">Karan Patel</option>
          </select><br />

          <input type="date" name="date" value={editdata.date} onChange={handleInput} /><br />
          <input type="time" name="time" min="05:00" max="23:59" value={editdata.time} onChange={handleInput} /><br />

          <select name="service" value={editdata.service} onChange={handleInput}>
            <option value="personal_training">Personal Training</option>
            <option value="group_training">Group Training</option>
            <option value="diet_plan">Diet Plan</option>
            <option value="yoga_session">Yoga Session</option>
            <option value="crossfit">CrossFit</option>
            <option value="zumba">Zumba</option>
            <option value="rehab">Rehab Training</option>
          </select><br />

          <textarea name="notes" value={editdata.notes} onChange={handleInput} placeholder="Notes"></textarea><br />
          <button type="submit">Update</button>
        </form>
      )}
    </>
  )
}

export default Fetchapi1
