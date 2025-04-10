import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sign = () => {

let [frmdata , setFrmdata] = useState({
  name:"", email:"", password:"",
});

let navigator = useNavigate()

function Inputhandle(f){
  const{name,value} = f.target 
  setFrmdata({...frmdata , [name] : value})
}
 
function finalSubmit(e){
  e.preventDefault()
  console.log(frmdata);
  localStorage.setItem('signdata', JSON.stringify(frmdata))
 navigator('/login')
  

}

function signalert(){
    alert("Account Created Successfully")
}

  return (
    <>

    <h1>Sign Up Form</h1>
<form action="" onSubmit={finalSubmit}>

    <label>Name: </label>
    <input type="text" name="name" onChange={Inputhandle} /> <br></br><br></br>

    <label>Email: </label>
    <input type="text" name="email" onChange={Inputhandle} /> <br></br><br></br>

    <label>Password: </label>
    <input type="text" name="password" onChange={Inputhandle} /> <br></br><br></br>

    {/* <input type="submit"/> */}
    <button onClick={signalert}>SUBMIT</button>
</form>

    </>
  )
}

export default Sign
