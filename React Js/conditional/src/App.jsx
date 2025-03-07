
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import New from './Components/New'
import { useState } from 'react'

function App() {
let [visible,setVisible] = useState(true)
let [count,setCount] = useState(0)

function decrment(){
  if ( count > 0){
    setCount(count-1)
  }
}
  return (
    <>
    <New/>
{visible?<h1>Welcome to Bhopal</h1> : ""}
<button onClick={()=>{setVisible(false)}}>Hide</button>
<br></br><br></br>
<button onClick={()=>{setVisible(true)}}>Show</button>
<br></br><br></br>
<button onClick={()=>setVisible(!visible)}>
  {
    visible ? "Hide" : "Show"
  }</button> 
<br></br><br></br>

<h1>{count}</h1>
<button onClick={decrement}>-</button>
<button onClick={()=>setCount(count+1)}>+</button>



    </>
  )
}

export default App
