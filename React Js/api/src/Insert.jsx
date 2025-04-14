import axios from 'axios';
import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Insert = () => {

    let [frmdata,setFrmdata] = useState({
        uname:"",age:"", contact:"", city:"",
      });
      let navigator = useNavigate()
    
    
    
      function InputValue(e){
        const{name,value} = e.target
        setFrmdata({...frmdata , [name] : value})
    
      }
    
      
        
      function finalsubmit(e){
        e.preventDefault()
        console.log(frmdata);
        axios.post('http://localhost:3000/userdata' , 
        frmdata)
        navigator('/fetchapi')

        
        
      }
      function alertfun(){
        alert("Data insert Successful")
      }
    
    

  return (
    <>
    <h1>Insert Form</h1>
    <form action="" onSubmit={finalsubmit}>

        <label>USER_NAME: </label>
        <input type='text' name="uname"  onChange={InputValue}/><br /> <br />
        <label>AGE: </label>
        <input type='text' name="age" onChange={InputValue} /><br /> <br />
        <label>CONTACT: </label>
        <input type='text' name="contact" onChange={InputValue} /><br /> <br />
        <label>CITY: </label>
        <input type='text' name="city" onChange={InputValue} /><br /> <br />
        <input type='submit' onClick={alertfun}/>
    </form>
    </>
  )
}

export default Insert
