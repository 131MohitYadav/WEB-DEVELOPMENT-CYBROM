
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

  
)


}