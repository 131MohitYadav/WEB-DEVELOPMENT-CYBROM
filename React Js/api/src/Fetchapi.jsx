
import axios from 'axios'
import React, { useEffect } from 'react'

const Fetchapi = () => {

useEffect(()=> {
    axios.get('http://localhost:3000/userdata')
    .then(res=>console.log(res.data))
}, [])

  return (
  <h1>api data fetch here</h1>
  )
}

export default Fetchapi
