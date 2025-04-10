import React from 'react'
import { useEffect, useState } from 'react'
function Login() {



let [frmdata , setFrmdata] = useState({
  usern:"", pass:"",
});

let[person,setPerson] = useState({})


function InputValue(f){
  const{name,value} = f.target 
  setFrmdata({...frmdata , [name] : value})
}
 
function finalSubmit(e){
  e.preventDefault()
  console.log(frmdata);

  localStorage.setItem("persondata" , JSON.stringify(frmdata))
}

useEffect(()=>{
  let ldata = JSON.parse(localStorage.getItem("persondata"))
  setPerson(ldata)
},[finalSubmit])




  
  
  return (
   <>

<h2 style={{color:"red",margin:"20px"}}>Login Form</h2>

<form action="" onSubmit={finalSubmit}>


<label>ENTER YOUR USERNAME</label>
<input type="text" name="usern" onChange={InputValue}/><br></br><br></br>

<label>ENTER YOUR PASSWORD</label>
<input type="text" name="pass" onChange={InputValue}/><br></br><br></br>

<input type="submit" value="SUBMIT" />

</form>




   
   </>
  )
}

export default Login
