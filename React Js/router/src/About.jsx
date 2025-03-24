import React from 'react'
import Contact from './Contact'
import { useNavigate} from "react-router-dom"


const About = () => {
  
   let navigator = useNavigate()

   function ser(){
    navigator('/service')
   }
  return (
   <>
   <h1>This is About page</h1>
   <button onClick={ser}>Service Page is Here</button>
   <Contact/>
   </>
  )
}

export default About
