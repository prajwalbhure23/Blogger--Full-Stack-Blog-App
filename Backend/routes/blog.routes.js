const express = require('express')
const { 
    deleteBlogController, 
    getBlogByIdController, 
    updateBlogController, 
    createBlogController, 
    getAllBlogsController, 
    userBlogController
} = require('../controllers/blog.controller')

const router = express.Router()

router.get('/allBlogs', getAllBlogsController)

router.post('/createBlog', createBlogController)

router.put('/updateBlog/:id', updateBlogController)

router.get('/getBlog/:id', getBlogByIdController)

router.delete('/deleteBlog/:id', deleteBlogController)

router.get('/userBlog/:id', userBlogController)

module.exports = router