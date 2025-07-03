
import React, { useRef, useState } from 'react';

function Admin(){
   const [email , setEmail] = useState('');
   const[ password , setPassword] = useState('');
   const [error , setError] = useState('');
   

   const adminEmail = 'mohit@gmail.com';
   const adminPassword = 'admin123';

   const handleLogin = () => {
    if ( email === adminEmail && password === adminPassword){
      alert('Login Successfull');
      setError('');
    }
    else{
      setError("Invalid Admin Email or Password");
    }
   };

return(

  <div className="login-container27">
    <div className="login-card27">
      <div className="login-avatar27">
        <img src="avatar.png" alt = "Admin" />
      </div> 
      <h2 className="login-title27">Adming Login</h2>

      <input 
      type="email"
      placeholder="Enter Admin Email"
      className="login-input27"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />

      <input
      type="password"
      placeholder="Enter Admin password"
      className="login-input27"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p style={{color: 'red' , fontSize: '0.9em'}} > {error}</p>}
      <button className="login=-button27" onClick={handleLogin}>
        Sign In
      </button>


    </div>
  </div>



  
);


}

export default Admin;