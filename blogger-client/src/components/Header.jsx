import React from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import './Header.css'
import { authActions } from '../redux/store';
import toast from 'react-hot-toast';


const Header = () => {

  let isLogin = useSelector((state) => state.isLogin);
  if (!isLogin) {
    isLogin = localStorage.getItem("userId"); // Update isLogin only if state.isLogin is falsy
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () =>{
    try {
      dispatch(authActions.logout());
      toast.success("Logged Out Successfully");
      navigate('/login');
      localStorage.clear();
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogin = () =>{
    navigate('/login');
  }

  const handleRegister = () =>{
    navigate('/register');
  }

  const handleBlogs = () =>{
    navigate('/blogs');
  }

  const handleMyBlogs = () =>{
    navigate('/myblogs');
  }

  const handleCreateBlogs = () =>{
    navigate('/createblog');
  }

  return (
    <nav>
      <div className='container nav-container'>
        <Link to={'/'} className='nav-logo'>
          <h3>Blogger</h3>
        </Link>

        
         {
          isLogin && ( 
          <ul className='nav-menu'>
          {/* <li onClick={handleBlogs}>Blogs</li> */}
          <li onClick={handleMyBlogs}>My Blogs</li>
          <li onClick={handleCreateBlogs}>Create Blogs</li>
        </ul>
         )
        } 

        <ul className='nav-menu'> 
          {
            !isLogin &&
             (
            <>
              <li onClick={handleLogin}>Login</li>
              <li onClick={handleRegister}>Register</li>
            </>
            )
          }
          
          {
            isLogin && (
              <li onClick={handleLogout}>Logout</li>
            )
          }
        </ul>
    

        
      </div>
    </nav>
  )
}

export default Header