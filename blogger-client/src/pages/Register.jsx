import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast';
import './Register.css'


function Register() { 

  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setInput((prevState) =>({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const {data} = await axios.post('https://blogger-full-stack-blog-app.vercel.app/api/v1/user/register',{
      username: input.name, 
      email: input.email, 
      password: input.password,
      }); 
      if(data.success){
        toast.success("New User Registered");
        navigate("/login");
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="outer-container">
      <div className="form-container">
        <h2>REGISTER</h2>
        <div className="input-form">
          <input onChange={handleChange} type="text" name="name" value={input.name} placeholder="Name" required/>
          <input onChange={handleChange} type="email" name="email" value={input.email} placeholder="Email" required/>
          <input onChange={handleChange} type="password" name="password" value={input.password} placeholder="Password" required/>
        </div>
        <button className="btn btn-primary">SUBMIT</button>
        <p onClick={()=> navigate("/login")}>ALREADY REGISTERED? PLEASE LOGIN</p>
      </div>
    </div>
    </form>
  )
}

export default Register