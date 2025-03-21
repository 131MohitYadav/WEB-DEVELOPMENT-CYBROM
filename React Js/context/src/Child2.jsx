import React from 'react'
import { appdata } from './App'


const Child2 = () => {
  return (
    <>
      <h1>Child 2 here</h1>
      <appdata.Consumer>
        {
            (data) =>{return <h1>{data}</h1>}
        }
      </appdata.Consumer>
    </>
  )
}

export default Child2
