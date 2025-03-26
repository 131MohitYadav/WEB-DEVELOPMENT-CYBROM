import React, { useState } from 'react'


const Proudct = () => {

    let [count,setCount] = useState(0)

    function decr(){
        if ( count > 0){
            setCount(count - 1)
        }
    }
  return (
    <>

<nav>
    <div className='navbar'>
        <h1>LOGO</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <h1>CART</h1>

    </div>

</nav>

    <h1>Increment and decrement</h1>
    <h2>{count}</h2>

<button onClick={()=>{setCount(count + 1)}}>Inc</button>
<button onClick={decr}>Dec</button>
<button onClick={()=>{setCount(0)}}>Res</button>
    
    </>
  )
}

export default Proudct
