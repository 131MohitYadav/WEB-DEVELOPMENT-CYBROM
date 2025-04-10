import { useEffect, useState } from 'react'

import './App.css'

function App() {

let [frmdata , setFrmdata] = useState({
  username:"", email:"", pass:"",
});

let[person,setPerson] = useState({})


function InputValue(e){
  const[name,value] = e.target 
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

  <h1>LOGIN AND SIGNUP FORM AUTHENTICATION</h1>

  <form action="" onSubmit={finalSubmit}>


    <label>ENTER YOUR USERNAME</label>
    <input type="text" name="username" onChange={InputValue}/><br></br><br></br>

    
    <label>ENTER YOUR EMAIL</label>
    <input type="text" name="email" onChange={InputValue}/><br></br><br></br>


    <label>ENTER YOUR PASSWORD</label>
    <input type="text" name="pass" onChange={InputValue}/><br></br><br></br>

    <input type="submit" value="SUBMIT" />

  </form>
      
    </>
  )
}

export default App
