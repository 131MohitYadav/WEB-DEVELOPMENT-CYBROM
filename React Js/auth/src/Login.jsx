import React from 'react'

const Login = () => {


    let [frmdata , setFrmdata] = useState({
        name:"", password:"",
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
      


  return (
   <>
   
   <h1>Login Form</h1>
   <form action="" onSubmit={finalSubmit}>

   <label>Name: </label>
    <input type="text" name="name" onChange={Inputhandle} /> <br></br><br></br>

    <label>Password: </label>
    <input type="text" name="password" onChange={Inputhandle} /> <br></br><br></br>

    <input type="submit"/>
    {/* <button onClick={signalert}>SUBMIT</button> */}

   </form>
   </>
  )
}

export default Login
