
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Contact from './Contact'
import Service from './Service'
import About from './About'
import { useState } from 'react'


function App() {

  let[count,setCount] = useState(0);
   let [visible,setVisible] = useState(true)
    let [color,setColor] = useState("")

   function decrement(){
    if ( count > 0){
      setCount(count - 1)
    }
   }
  
  
  return (
    <>
<div style={{width: "100%" , backgroundColor: color}}>
    <Routes>
      <Route path="/" element = {<Navbar/>}>
      
      <Route index element = {<Home/>} />
      <Route path="/about" element = {<About/>} />
      <Route path="/contact" element = {<Contact/>} />
      <Route path="/service" element = {<Service/>} />
      </Route>
    </Routes>

    <h1> Increment and decrement program</h1>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count + 1)}}>Inc</button>
    <button onClick={decrement}>Dec</button>
    <button onClick={()=>{setCount(0)}}>Res</button>


    <h1>Hide and Show data</h1>
    {visible ? <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel porro cupiditate doloremque cumque molestias qui tempora ullam quo repudiandae a possimus sed, eius repellat fuga fugiat! Numquam vel corporis eos!
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic veniam consequuntur minima, aperiam dolorum possimus recusandae nihil blanditiis accusamus cumque, maiores iste? Similique tenetur numquam sint libero atque qui temporibus!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, necessitatibus quisquam? Consequatur, quod quae. Nobis delectus distinctio iusto tempore nisi quia fugiat provident nemo, laborum hic dicta? Soluta, explicabo quasi.
    </p> : ""}
    <button onClick={()=>{setVisible(false)}}>HIDE</button>
    
    <button onClick={()=>{setVisible(true)}}>SHOW</button>

    <h1>LIGHT AND DARK THEME</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error quo, quaerat doloribus quas illum animi nemo repellat omnis sequi dolorum esse quam sit laborum, dolorem dolor. Molestias, facilis saepe?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A laboriosam magnam optio blanditiis obcaecati recusandae possimus asperiores minus quaerat doloribus, veniam libero deleniti voluptates eum iure nisi distinctio ad doloremque.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, fugit optio accusamus aliquam quaerat unde molestiae id ducimus asperiores eius quae porro, consequatur error. Nobis fugit fuga quam dignissimos recusandae!
    </p>
<button onClick={()=>{setColor('white')}}>Light</button>
<button onClick={()=>{setColor('black')}}>Dark</button>
    </div>

    </>
  )
}

export default App
