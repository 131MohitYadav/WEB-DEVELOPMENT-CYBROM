import { useState } from "react"

import './App.css';
import About from "./About";

function App() {
  
let [name,setName] = useState("Mohit Yadav")
let [number,setNumber] = useState("565847855689")
let [age,setAge] = useState("25")
let [color,setColor] = useState("")

function fun(){
  setName("Rohit Yadav")
  
}

// function fun1(){
//   setNumber("985784578")
  
// }

// function fun2(){
//   setAge("20")
  
// }


  return (
    <>
    <div style={{height:"100vh", backgroundColor:color}}>
    <h1>My name is {name}</h1>
    <button onClick={fun}>Click for change name</button>
    <br></br>
    <br></br>
    <h1>My Contact number is {number}</h1>
    <button onClick={()=>{setNumber(98757845)}}>click for change contact</button>
    <br></br><br></br>
    <h1>My Age is {age}</h1>
    <button onClick={()=>{setAge(20)}}>click for change age</button>
    <br></br><br></br>
    <button onClick={()=>{setColor('white')}}>Light</button>
    <button onClick={()=> {setColor('black')}}>Dark</button>
    <button onClick={()=>{setColor('green')}}>Green</button>
    <button onClick={()=> {setColor('yellow')}}>Yellow</button>
    <About/>
    

</div>

    </>
  )
}

export default App
