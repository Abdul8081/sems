import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineLogin } from "react-icons/ai";
import { Navigate } from 'react-router-dom';
import { LuLogIn } from "react-icons/lu";
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const submitHandler =() =>{
        navigate('/login');
    }
    const submitHandler_signup =() =>{
        navigate('/signup');
    }
  return (
    <nav className="navbar">
    <div className='start'>Sports Management</div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <div className='navbar_end'>
        <button className='end' on onClick={submitHandler_signup}>Signup <LuLogIn className='icon'/></button>
        <button className='end' on onClick={submitHandler}>Login <AiOutlineLogin className='icon'/></button>
        </div>
        
      </nav>
  )
}

export default Navbar
