
//import myimg from './image.jpg'
import './App.css'
//import  Ab from './About.jsx'
//import  Contact from './Contact.jsx'
import { useState } from 'react'
import {About as Ab,Contact1 as Cont1} from './About'
import Gallery from './Gallery.jsx'
import  Service from './Service.jsx'


function App() {

  let [color, setColor] = useState("")

  return (
    <>
    <div style={{height : "100vh" , width: "100%", backgroundColor : color}}>
    <h1 style={{color:"red"}}>Welcome to Reactjs class</h1>
    <Ab/>
    <Cont1/>
    <Gallery/>
    <Service/>
    <button  onClick={()=>{setColor('white')}}
      >Light Theme</button>


    <button onClick={()=>{setColor('black')}}>Dark Theme</button>

</div>
    </>
  )
}
export default App;


  // let name = "Mohit Yadav"
  // let age = 21

  
// INTERNAL CSS APPLY
  // let st = {
  //   color:"Yellow",
  //   backgroundColor:"black",
  //   padding:"20px"
  //  }




    // return (
    //   <>
    //  <div className='navbar'>
    //        <h1>Man</h1>
    //        <ul>
    //         <li>Home</li>
    //         <li>Cart</li>
    //         <li>Login</li>
    //        </ul>
    //  </div>
    //  </>
  



//  <div>
//   <h1>Welcome to React Class</h1>
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ab saepe dolor optio amet aspernatur, quidem deleniti sint animi possimus? Adipisci distinctio quasi ipsum ipsam dolorem dignissimos vitae temporibus beatae.</p>

 // INLINE CSS
// <h1 style = {{backgroundColor:"blue",color:"black"}}>My name is {Mohit} </h1>

// FOR INTERNAL CSS
// <h1 style = {st}>My Age is {age}</h1>



//   <h2 > This is a Ordered List</h2>

//   <ol type = "1">
//     <li>Mohit</li>
//     <li>Rohit</li>
//     <li>Manish</li>
//     <li>Aman</li>
//     <li>Virat</li>
//     <li>Abhishek</li>

//   </ol>

//   <h2 > This is a Unordered List</h2>

// <ul type = "circle">
//   <li>Mohit</li>
//   <li>Rohit</li>
//   <li>Manish</li>
//   <li>Aman</li>
//   <li>Virat</li>
//   <li>Abhishek</li>
  
// </ul>
//   <h2>This is a Image</h2>
//   <img src="image.jpg"></img>
//<img src={myimage} height = "200px"/>



//  </div>

 

 
//   )
// }


