
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
      <h2>className = " login-title27"</h2>
    </div>
  </div>



  
)


}