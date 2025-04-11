import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [frmdata , setFrmdata] = useState({
    name: "", password: "",
  });

  const navigator = useNavigate();

  function Inputhandle(e) {
    const { name, value } = e.target;
    setFrmdata({ ...frmdata, [name]: value });
  }

  function finalSubmit(e) {
    e.preventDefault();

    const storedData = JSON.parse(localStorage.getItem('signdata'));

    if (
      storedData &&
      frmdata.name === storedData.name &&
      frmdata.password === storedData.password
    ) {
      alert("Login Successful");
      navigator('/home');
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={finalSubmit}>
        <label>Name: </label>
        <input type="text" name="name" onChange={Inputhandle} /> <br /><br />

        <label>Password: </label>
        <input type="password" name="password" onChange={Inputhandle} /> <br /><br />

        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;
