import React from 'react'
import './Signup.scss'
import { useState } from "react";
const Signup = () => {
 
  const [user, setUser] = useState({
     name: " ", email: "", password: "", cpassword: " "

  })

  let name, value;
 
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })
  }


  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = user;
    // const res = await fetch("/register", {
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password: password, cpassword: cpassword }) 
    })
    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Registration Invalid");
      console.log("Registration Invalid");
    }
    else {
      window.alert("Registration Successfull");
      console.log("Registration Successfull");
    }
  }
  return (
    <div id="signup-form">
      <h1>Register</h1>
      <form method='POST'>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={user.name} onChange={handleInputs} />

        {/* <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastname" value={user.lastname} onChange={handleInputs} /> */}

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={user.email} onChange={handleInputs} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={user.password} onChange={handleInputs} />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="cpassword" value={user.cpassword} onChange={handleInputs} />

        <input type="submit" value="register"  onClick={PostData} />
      </form>
    </div>
  );
};

export default Signup;
