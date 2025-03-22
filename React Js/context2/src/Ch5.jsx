import React from 'react'
import { appdata } from './App'


const Ch5 = () => {
  return (
 <>
 <h1>Here Child5</h1>
 <appdata.Consumer>
  {
    (name) => {return <h1>{name}</h1>}
  }
 </appdata.Consumer>
 </>
  )
}

export default Ch5
