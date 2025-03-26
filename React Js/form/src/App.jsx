
import { useState } from 'react';
import './App.css'

function App() {
  
  let [frmdata,setFrmdata] = useState({
    username:"",age:"",contact:"",
  });

  function InputValue(e){
    const{name,value} = e.target
    setFrmdata(...frmdata,[name] : value)

  }
    
  // let [frmdata2,setFrmdata2] = useState();
  // function InputValue2(a){
  //   console.log(a.target.value);
  //   setFrmdata2(a.target.value)
  // }

  
  // let [frmdata3,setFrmdata3] = useState();
  // function InputValue3(b){
  //   console.log(b.target.value);
  //   setFrmdata3(b.target.value)
  // }

  
  // let [frmdata4,setFrmdata4] = useState();
  // function InputValue4(c){
  //   console.log(c.target.value);
  //   setFrmdata4(c.target.value)
  // }

  
  // let [frmdata5,setFrmdata5] = useState();
  // function InputValue5(d){
  //   console.log(d.target.value);
  //   setFrmdata5(d.target.value)
  // }

  return (
    <>
    <h1 className='head1'>Form</h1>
    <h1>My name is : {frmdata}</h1>
    {/* <h1>My age is : {frmdata2}</h1>
    <h1>My city name is : {frmdata3} </h1>
    <h1>My clg  name is : {frmdata4} </h1>
    <h1>My mobile no is: {frmdata5} </h1> */}
    <form action="">
      <label htmlFor ="">Name : </label>
      <input type="text" name='username' onChange={InputValue}/> <br></br> <br></br>
      <label htmlFor ="">Age : </label>
      <input type="text" onChange={InputValue}/> <br></br><br></br>
      <label htmlFor ="">City : </label>
      <input type="text" onChange={InputValue}/><br></br><br></br>
      <label htmlFor ="">Clg : </label>
      <input type="text" onChange={InputValue}/> <br></br><br></br>
      <label htmlFor ="">Mobile : </label>
      <input type="text" onChange={InputValue}/> <br></br>


    </form>
      
    </>
  )
}

export default App
