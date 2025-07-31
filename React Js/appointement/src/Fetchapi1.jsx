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
      <h1>Appointments</h1>
      <table border="1" align='center'>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Phone</th><th>Email</th>
            <th>Trainer</th><th>Date</th><th>Time</th><th>Service</th><th>Actions</th>
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
                <td>{e.trainer}</td>
                <td>{e.date}</td>
                <td>{e.time}</td>
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
          <input name="name" value={editdata.name} onChange={handleInput} /><br />
          <input name="phone" value={editdata.phone} onChange={handleInput} /><br />
          <input name="email" value={editdata.email} onChange={handleInput} /><br />
          <input name="trainer" value={editdata.trainer} onChange={handleInput} /><br />
          <input type="date" name="date" value={editdata.date} onChange={handleInput} /><br />
          <input type="time" name="time" value={editdata.time} onChange={handleInput} /><br />
          <select name="service" value={editdata.service} onChange={handleInput}>
            <option value="personal_training">Personal Training</option>
            <option value="group_training">Group Training</option>
          </select><br />
          <textarea name="notes" value={editdata.notes} onChange={handleInput}></textarea><br />
          <button type="submit">Update</button>
        </form>
      )}
    </>
  )
}

export default Fetchapi1
