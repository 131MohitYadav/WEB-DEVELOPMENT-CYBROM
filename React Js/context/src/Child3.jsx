import React from 'react'
import Child4 from './Child4'
import { createContext } from 'react'


let chdata = createContext()
let city = "Gwalior"

const Child3 = () => {
  return (
    <>

<h1>Hello Child 3 here</h1>
    <chdata.Provider value={city}>
       <Child4/>
    </chdata.Provider>

    
      
    </>
    
    
  )
}

export default Child3
export {chdata}
