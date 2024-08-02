import React from "react";
import axios from "axios"
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { authActions } from "../redux/store";
import toast from 'react-hot-toast';
import "./Login.css";


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
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
     const {data} = await axios.post('https://blogger-full-stack-blog-app-jd4o.vercel.app/api/v1/user/login',{
      email: input.email, 
      password: input.password,
      }); 
      if(data.success){
        localStorage.setItem("userId", data && data.user && data.user._id);
        dispatch(authActions.login());
        toast.success("User Logged In Successfully")
        navigate("/");
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <form onSubmit={handleSubmit}>
    <div className="outer-container">
      <div className="form-container">
        <h2>LOGIN</h2>
        <div className="input-form">
          <input onChange={handleChange} type="email" name="email" value={input.email} placeholder="Email" required/>
          <input onChange={handleChange} type="password" name="password" value={input.password} placeholder="Password" required/>
        </div>
        <button className="btn btn-primary">SUBMIT</button>
        <p onClick={()=> navigate("/register")}>NOT A USER, PLEASE REGISTER</p>
      </div>
    </div>
    </form>
  );
}

export default Login;
