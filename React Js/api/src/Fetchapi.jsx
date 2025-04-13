
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fetchapi = () => {

    let[apidata,setapidata] = useState([])

useEffect(()=> {
    axios.get('http://localhost:3000/userdata')
    .then(res=>setapidata(res.data))
}, [])

  return (
    <>
  <h1>api data fetch here</h1>
  <h2>ALL USER DATA</h2>
  <table border="2px solid black" align='center'>
    <tr>
        <td>ID</td>
        <td>U_NAME</td>
        <td>AGE</td>
        <td>CONTACT</td>
        <td>CITY</td>
    </tr>
    {
      apidata.map((e)=>{ return <tr>
        <td>{e.id}</td>
        <td>{e.uname}</td>
        <td>{e.age}</td>
        <td>{e.contact}</td>
        <td>{e.city}</td>

      </tr>})
    }
  </table>
  


</>
  )
}

export default Fetchapi
