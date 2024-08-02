import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast from 'react-hot-toast';

function BlogDetails() {
    const [blog, setBlog] = useState({});
    const id = useParams().id;
    const navigate = useNavigate();
    const [input, setInput] = useState({});
  
    const getBlogDetail = async () => {
        try {
            const { data } = await axios.get(`https://blogger-full-stack-blog-app.onrender.com/api/v1/blogs/getBlog/${id}`);
            if (data && data.success) {
                setBlog(data && data.blog);
                setInput({
                    title: data && data.blog && data.blog.title,
                    description: data && data.blog && data.blog.description,
                    image: data && data.blog && data.blog.image,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBlogDetail();
    },[id]);

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
            const { data } = await axios.put(`https://blogger-full-stack-blog-app.onrender.com/api/v1/blogs/updateBlog/${id}`,{
                title: input.title,
                description: input.description,
                image: input.image,
                user: id,
            });
            if (data && data.success) {
                toast.success("Blog Updated")
                navigate("/myblogs");
            }
        } catch (error) {
            console.log(error);
        }
    };
    console.log(blog);

    return (
        <form onSubmit={handleSubmit}>
        <div className="outer-container">
            <div className="form-container">
            <h2>UPDATE POST</h2>
            <div className="input-form">
                <input
                onChange={handleChange}
                type="text"
                name="title"
                value={input.title}
                placeholder="Name"
                required
                />
                <input
                onChange={handleChange}
                type="text"
                name="description"
                value={input.description}
                placeholder="Description"
                required
                />
                <input
                onChange={handleChange}
                type="yext"
                name="image"
                value={input.image}
                placeholder="Image URL"
                required
                />
            </div>
            <button className="btn btn-primary">UPDATE</button>
            </div>
        </div>
        </form>
    );
}

export default BlogDetails;
