
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fetchapi = () => {

    let[apidata,setapidata] = useState([])
    let[frm,setFrm] = useState(false)
    let[editdata ,setEditdata]  = useState({})

// FOR USED DELETE THE DATA
    function mydelete(id){
      axios.delete(`http://localhost:3000/userdata/${id}`)
      .then(r=>alert("Data Deleted Successfully"))
    }

useEffect(()=> {
    axios.get('http://localhost:3000/userdata')
    .then(res=>setapidata(res.data))
}, [mydelete])


function handleInput(e){
  const{name,value} = e.target 
  setEditdata({...editdata,[name]:value})
}

function finalsubmit(e){
  e.preventDefault()
  axios.put(`http://localhost:3000/userdata/${editdata.id}` , editdata)
  setFrm(false)
}

function update(){
  alert("Data Update Successfully")
}

  return (
    <>
  <h1>Api Data Fetch Here</h1>
  <h2>ALL USER DATA</h2>
  <table border="2px solid black" align='center'>
    <tr>
        <td>ID</td>
        <td>U_NAME</td>
        <td>AGE</td>
        <td>CONTACT</td>
        <td>CITY</td>
        <td>DELETE</td>
        <td>EDIT</td>
    </tr>
    {
      apidata.map((e)=>{ return <tr>
        <td>{e.id}</td>
        <td>{e.uname}</td>
        <td>{e.age}</td>
        <td>{e.contact}</td>
        <td>{e.city}</td>
        <td><button onClick={()=>mydelete(e.id)}>DELETE</button>
        </td>
        <td><button onClick={()=>{setFrm(true),setEditdata(e)}}>UPDATE</button></td>

      </tr>})
    }
  </table>

  {
    frm && (
      <>
<h1>Edit form</h1>

<form onSubmit={finalsubmit} style={{textAlign:'center'}}>

  
<label>USER_ID: </label>
        <input type='text' name='id' value={editdata.id} onChange={handleInput} readOnly /><br /> <br />
          
<label>USER_NAME: </label>
        <input type='text' name='uname' value={editdata.uname} onChange={handleInput} /><br /> <br />

        <label>AGE: </label>
        <input type='text' name='age' value={editdata.age} onChange={handleInput}  /><br /> <br />

        <label>CONTACT: </label>
        <input type='text' name='contact' value={editdata.contact} onChange={handleInput}  /><br /> <br />

        <label>CITY: </label>
        <input type='text' name='city' value={editdata.city} onChange={handleInput}  /><br /> <br />
        <input type='submit' onClick={update}/>
</form>
      </>
    )
  }
  


</>
  )
}

export default Fetchapi
