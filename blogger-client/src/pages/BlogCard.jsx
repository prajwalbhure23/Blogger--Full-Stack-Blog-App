import React from 'react'
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import toast from 'react-hot-toast';
import './BlogCard.css'

function BlogCard({
    title,
    description,
    image,
    username,
    time,
    id,
    isUser,
  }) {

    const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/blogdetails/${id}`);
    };

    const handleDelete = async () => {
        try {
            const { data } = await axios.delete(`https://blogger-full-stack-blog-app-jd4o.vercel.app/api/v1/blogs/deleteBlog/${id}`);
            if (data && data.success) {
                toast.success("Blog Deleted");
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="card">
             
            <div className="card-header">
            <div className="avatar" style={{ backgroundColor: "red" }}>{username ? username.charAt(0).toUpperCase() : <CgProfile fontSize={'30px'}/>}</div>
            <div className="header-text">
            <div className="username">{username}</div>
            <div className="time">{time}</div>
            </div>
            </div>
        <img className="card-image" src={image} alt="Blog" />
        <div className="card-content">
            <div className="title">Title: {title}</div>
            <div className="description">Description: {description}</div>
        </div>
        {isUser && (
            <div className="card-actions">
            <button className="edit-button" onClick={handleEdit}><CiEdit fontSize={'25px'}></CiEdit></button>
            <button className="delete-button" onClick={handleDelete}><MdDelete fontSize={'25px'}></MdDelete></button>
            </div>
            )}
        </div>
    )
}

export default BlogCard