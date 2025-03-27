
import { useState } from 'react';
import './App.css';
// import Data from './Data';


function App() {
  
  let [frmdata,setFrmdata] = useState({
    username:"",age:"", city:"", clg:"",mobile:"",
  });

  function InputValue(e){
    const{name,value} = e.target
    setFrmdata({...frmdata , [name] : value})

  }
    
  function finalsubmit(e){
    e.preventDefault()
    console.log(frmdata);
    localStorage.setItem("userdata",JSON.stringify(frmdata))
    
  }

  return (
    <>
    <h1 className='head1'>Form</h1>
    <h1>My name is </h1>
    {/* <h1>My age is : {frmdata2}</h1>
    <h1>My city name is : {frmdata3} </h1>
    <h1>My clg  name is : {frmdata4} </h1>
    <h1>My mobile no is: {frmdata5} </h1> */}
    <form action="" onSubmit={finalsubmit}>
      <label htmlFor ="">Name : </label>
      <input type="text" name='username' onChange={InputValue}/> <br></br> <br></br>
      <label htmlFor ="">Age : </label>
      <input type="text" name = 'age' onChange={InputValue}/> <br></br><br></br>
      <label htmlFor ="">City : </label>
      <input type="text" name =' city' onChange={InputValue}/><br></br><br></br>
      <label htmlFor ="">Clg : </label>
      <input type="text" name='clg' onChange={InputValue}/> <br></br><br></br>
      <label htmlFor ="">Mobile : </label>
      <input type="text" name='mobile' onChange={InputValue}/> <br></br>
      <input type='submit' value="Submit" />


    </form>


      
    </>
  )
}

export default App
