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

  // American style trainer names example (same as Appoint1)
  const maleTrainers = [
    "Michael Johnson",
    "James Anderson",
    "David Thompson",
    "John Carter",
    "Robert Miller"
  ]

  const femaleTrainers = [
    "Jessica Taylor",
    "Emily Moore",
    "Amanda Davis",
    "Sarah Wilson",
    "Laura Clark"
  ]

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
    } else if (name === "trainerType") {
      // Reset trainer when trainerType changes
      setEditdata(prev => ({ ...prev, trainerType: value, trainer: '' }))
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
      <h1 className="heading_48"> ALL APPOINTEMENT LIST</h1>
      <table className="table_48">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th><
              th>Email</th>
            <th>Trainer Type</th>
            <th>Trainer</th>
            <th>Date</th>
            <th>Time</th>
            {/* <th>Month</th> */}
            <th>Membership Plan</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {apidata.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.phone}</td>
              <td>{e.email}</td>
              <td>{e.trainerType}</td>
              <td>{e.trainer}</td>
              <td>{e.date}</td>
              <td>{e.time}</td>
              {/* <td>{e.monthName}</td> */}
              <td>{membershipPlans[e.membership] || "N/A"}</td>
              <td>
                <button className="deleteBtn_48" onClick={() => mydelete(e.id)}>Delete</button>
                <button className="editBtn_48" onClick={() => { setFrm(true); setEditdata(e) }}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {frm && (
        <form className="form_48" onSubmit={finalsubmit}>
          <input className="input_48" name="name" value={editdata.name || ""} onChange={handleInput} placeholder="Enter your name" required /><br />
          <input className="input_48" name="phone" value={editdata.phone || ""} onChange={handleInput} placeholder="Phone number" required /><br />
          <input className="input_48" name="email" value={editdata.email || ""} onChange={handleInput} placeholder="Email address" required /><br />

          <label>Trainer Type</label><br />
          <select className="select_48" name="trainerType" value={editdata.trainerType || ""} onChange={handleInput} required>
            <option value="">Select Trainer Type</option>
            <option value="male">Male Trainer</option>
            <option value="female">Female Trainer</option>
          </select><br />

          <label>Trainer</label><br />
          <select
            className="select_48"
            name="trainer"
            value={editdata.trainer || ""}
            onChange={handleInput}
            required
            disabled={!editdata.trainerType}
          >
            <option value="">-- Select Trainer --</option>
            {editdata.trainerType === 'male' && maleTrainers.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
            {editdata.trainerType === 'female' && femaleTrainers.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select><br />

          <input className="input_48" type="date" name="date" value={editdata.date || ""} onChange={handleInput} required /><br />
          <input className="input_48" type="time" name="time" min="05:00" max="23:59" value={editdata.time || ""} onChange={handleInput} required /><br />

          <label>Membership Plan</label><br />
          <select className="select_48" name="membership" value={editdata.membership || ""} onChange={handleInput} required>
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
