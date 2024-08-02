import React from 'react'
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import './CreatePost.css'

function CreatePost() {

  const id = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    description: "",
    image: "",
  });
  // input change
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("https://blogger-full-stack-blog-app.vercel.app/api/v1/blogs/createBlog", {
        title: input.title,
        description: input.description,
        image: input.image,
        user: id,
      });
      if (data && data.success) {
        toast.success("New Blog Created");
        navigate("/myblogs");
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
    <div className="outer-container">
      <div className="form-container">
        <h2>Create Blog</h2>
        <div className="input-form">
          <input onChange={handleChange} type="text" name="title" value={input.title} placeholder="Title" required/>
          <input onChange={handleChange} type="text" name="description" value={input.description} placeholder="Description" required/>
          <input onChange={handleChange} type="text" name="image" value={input.image} placeholder="Image URL" required/>
        </div>
        <button className="btn btn-primary">SUBMIT</button>
      </div>
    </div>
    </form>

  )
}

export default CreatePost