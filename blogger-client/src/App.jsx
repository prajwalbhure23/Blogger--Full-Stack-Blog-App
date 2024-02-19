
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import BlogDetails from './pages/BlogDetails';
import UserBlogs from './pages/UserBlogs';
import ErrorPage from './pages/ErrorPage';
import {Toaster} from 'react-hot-toast';
import './App.css'


export default function App(){
  return(
    <>
    <BrowserRouter>
    <Header/>
    <Toaster/>
    <Routes>
      <Route path="/" element={<Blogs/>}></Route>
      <Route path="/blogs" element={<Blogs/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/createblog" element={<CreatePost/>}></Route>
      <Route path="/blogdetails/:id" element={<BlogDetails/>}></Route>
      <Route path="/myblogs" element={<UserBlogs/>}></Route>
      <Route path="*" element={<ErrorPage/>}></Route>
    </Routes>
    </BrowserRouter> 
    </>
  )
}
