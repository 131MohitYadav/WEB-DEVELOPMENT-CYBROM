
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fetchapi = () => {

    let[apidata,setapidata] = useState()

useEffect(()=> {
    axios.get('http://localhost:3000/userdata')
    .then(res=>setapidata(res.data))
}, [])

  return (
    <>
  <h1>api data fetch here</h1>
  <table>
    <tr>
        <td>ID</td>
        <td>U_NAME</td>
        <td>AGE</td>
        <td>CONTACT</td>
        <td>CITY</td>
    </tr>
  </table>
  


</>
  )
}

export default Fetchapi
