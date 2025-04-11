import React from 'react'
import myimg from './assets/react.svg'

import './App.css'

function App() {
  let product =[
    {
      id:1,pname:"Mobile",pprice:12000,pimg:myimg
    },
    {
      id:2, pname:"Laptop" , pprice:60000, pimg: myimg
    }
  ]

  return (
    <>
    <div style={{display:"flex"}}>

      {
        product.map((e) => {return <div style={{border:"2px solid black"}}>
          <h1>Product name: {e.pname}</h1>
          <h1>Product price: {e.pprice}</h1>
          <img src={e.pimg} alt='' /> <br />
          <button>Add to Cart</button>
          </div>})
      }
    </div>
    

    </>
  )
}

export default App
