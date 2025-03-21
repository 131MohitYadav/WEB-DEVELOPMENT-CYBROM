import React from 'react'
import { chdata } from './Child3'


const Child5 = () => {
  return (
    <>

    <h1>Child 5 here</h1>
          <chdata.Consumer>
            {
                (name1) =>{return <h1>{name1}</h1>}
            }
          </chdata.Consumer>
    </>
  )
}

export default Child5
