import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Fetchapi1 = () => {
  const [apidata, setApidata] = useState([])
  const [frm, setFrm] = useState(false)
  const [editdata, setEditdata] = useState({})

  // Membership Plans Map
  const membershipPlans = {
    personal_training: "1 Month Plan (₹499)",
    group_training: "3 Month Plan (₹1499)",
    diet_plan: "Annual Plan (₹5999)"
  }

  const fetchData = () => {
    axios.get('http://localhost:3000/Test')
      .then(res => setApidata(res.data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const mydelete = (id) => {
    axios.delete(`http://localhost:3000/Test/${id}`)
      .then(() => {
        alert("Deleted successfully")
        fetchData()
      })
  }

  const handleInput = (e) => {
    const { name, value } = e.target
    if (name === "date") {
      const monthName = new Date(value).toLocaleString("default", { month: "long" })
      setEditdata(prev => ({ ...prev, [name]: value, monthName }))
    } else {
      setEditdata(prev => ({ ...prev, [name]: value }))
    }
  }

  const finalsubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:3000/Test/${editdata.id}`, editdata)
      .then(() => {
        alert("Updated successfully")
        setFrm(false)
        fetchData()
      })
  }

  return (
    <>
      <h1 className="heading_48">Appointments</h1>
      <table className="table_48">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Phone</th><th>Email</th>
            <th>Trainer Type</th><th>Trainer</th><th>Date</th>
            <th>Time</th><th>Month</th><th>Membership Plan</th>
            <th>Actions</th>
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
                <td>{e.time}</td>
                <td>{e.monthName}</td>
                <td>{membershipPlans[e.membership] || "N/A"}</td>
                <td>
                  <button className="deleteBtn_48" onClick={() => mydelete(e.id)}>Delete</button>
                  <button className="editBtn_48" onClick={() => { setFrm(true); setEditdata(e) }}>Edit</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      {frm && (
        <form className="form_48" onSubmit={finalsubmit}>
          <input className="input_48" name="name" value={editdata.name || ""} onChange={handleInput} placeholder="Enter your name" /><br />
          <input className="input_48" name="phone" value={editdata.phone || ""} onChange={handleInput} placeholder="Phone number" /><br />
          <input className="input_48" name="email" value={editdata.email || ""} onChange={handleInput} placeholder="Email address" /><br />

          <select className="select_48" name="trainerType" value={editdata.trainerType || ""} onChange={handleInput}>
            <option value="personal">Personal Trainer</option>
            <option value="group">Group Trainer</option>
            <option value="virtual">Virtual Trainer</option>
          </select><br />

          <select className="select_48" name="trainer" value={editdata.trainer || ""} onChange={handleInput}>
            <option value="">-- Select Trainer --</option>
            <option value="Alex Sharma">Alex Sharma</option>
            <option value="Priya Verma">Priya Verma</option>
            <option value="Rahul Singh">Rahul Singh</option>
            <option value="Sneha Mehta">Sneha Mehta</option>
            <option value="Karan Patel">Karan Patel</option>
          </select><br />

          <input className="input_48" type="date" name="date" value={editdata.date || ""} onChange={handleInput} /><br />
          <input className="input_48" type="time" name="time" min="05:00" max="23:59" value={editdata.time || ""} onChange={handleInput} /><br />

          <select className="select_48" name="membership" value={editdata.membership || ""} onChange={handleInput}>
            <option value="">-- Select Membership Plan --</option>
            <option value="personal_training">1 Month Plan (₹499)</option>
            <option value="group_training">3 Month Plan (₹1499)</option>
            <option value="diet_plan">Annual Plan (₹5999)</option>
          </select><br /><br />

          <textarea className="textarea_48" name="notes" value={editdata.notes || ""} onChange={handleInput} placeholder="Notes"></textarea><br />
          <button className="updateBtn_48" type="submit">Update</button>
        </form>
      )}
    </>
  )
}

export default Fetchapi1
