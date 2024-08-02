import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./Blogs.css";
import BlogCard from "./BlogCard";

function Blogs() {

  const [blogs, setBlogs] = useState([])

  
  const getAllBlogs = async()=>{
    try {
      const {data} = await axios.get('https://blogger-full-stack-blog-app-jd4o.vercel.app/api/v1/blogs/allBlogs')
      if(data && data.success){
        setBlogs(data.blogs)
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    getAllBlogs();
  },[])

  return (
    <div className="blogscontainer">
    <div className="blogs-container">
      {
        blogs && blogs.map((blog, index)=>(
          <BlogCard
          key={index}
          id={blog && blog._id}
          isUser={localStorage.getItem("userId") === (blog && blog.user && blog.user._id)}
          title={blog && blog.title}
          description={blog && blog.description}
          image={blog && blog.image}
          username={(blog && blog.user && blog.user.username)}
          time={blog.createdAt}
          />
        ))
      }
    </div>
    </div>
  );
}

export default Blogs;
