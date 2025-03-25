import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    let navigator = useNavigate()

    function ser(){
        navigator('/service')
    }
  return (
    
   <>
   <h1>This is Contact page</h1>
   <button onClick={ser}>Click for service</button>
   
   </>
  )
}

export default Contact
