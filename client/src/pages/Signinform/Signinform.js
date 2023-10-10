
import React from "react";
import "./Signinform.scss";
// import {UserContext} from '../App'
import { UserContext } from "../../App";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
const Signinform = () => {

  const { state, dispatch } = useContext(UserContext)
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    }
    else {
      dispatch({ type: "USER", payload: true })
      window.alert("login Successfull");
      navigate("/");

    }
  }
  return (
    <div id="login-form">
      <h1>Signin</h1>
      <form>
        <label htmlFor="username">Email:</label>
        <input id="email" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Submit" onClick={loginUser} />
      </form>
    </div>
  );
};

export default Signinform;
