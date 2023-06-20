

import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import './App.css';
import NavBarManu from './NavBarManu';
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const login = () => {
    if (name && password){
    fetch(`http://localhost:3000/login?q=${name}`)
      .then((data) => {
        data.json().then((resp) => {

          console.warn('resp', resp)

      
          if (resp ) {
            navigate('/Home')
            localStorage.setItem('login', JSON.stringify(resp))
          } else {
            alert('Please check username and password');
          }
        });
      });
    }else{
      alert(" plz input  email or password ")
    }

  };





  return (
    <div className="login">
      <div className="forme">
        <h1>Login</h1> 
      
      <input
        type="text"
        placeholder="name@example.com"
        value={name}
        onChange={(event) => setName(event.target.value)} /> <br /> <br />
      <input
        placeholder="Enter Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)} /><br /> <br />
      <button onClick={login}>Login</button>
      </div>
    </div>






  );
};

export default Login;
