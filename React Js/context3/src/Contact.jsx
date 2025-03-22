import React, { useContext } from 'react'
import { senddata } from './main'

const Contact = () => {

    let acceptdata = useContext(senddata)
  return (
    <>
    <h1>My name is:  {acceptdata[0].name}</h1>
    <h1>My age is: {acceptdata.age}</h1>
    <h1>My city name is: {acceptdata.city}</h1>
    <p> My Friend name is: {acceptdata[1].name}</p>
    <p>My Friend age is: {acceptdata[1].age}</p>
    {/* <senddata.Consumer>
        { 
            (name) => {return <h1>{name}</h1>}
        }
    </senddata.Consumer> */}
    </>
  )
}

export default Contact
