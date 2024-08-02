import React from 'react'
import axios from 'axios'
import BlogCard from './BlogCard';
import { useState, useEffect } from 'react';
import './UserBlogs.css';

function UserBlogs() {

    const [blogs, setBlogs] = useState([]);

  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("userId");
      const { data } = await axios.get(`https://blogger-full-stack-blog-app-jd4o.vercel.app/api/v1/blogs/userBlog/${id}`);
      if (data && data.success) {
        setBlogs(data && data.userBlog && data.userBlog.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserBlogs();
  }, []);
  console.log(blogs);

  return (
    <div className='blogcontainer'>
    <div className='blogs-container' style={{marginTop: '90px'}}>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog._id}
            isUser={true}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            username={blog.user.username}
            time={blog.createdAt}
          />
        ))
      ) : (
        <h1>You Havent Created a blog</h1>
      )}
    </div>
    </div>
  )
}

export default UserBlogs