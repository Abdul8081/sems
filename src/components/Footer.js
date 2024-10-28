import React from 'react';
import './Footer.css';
import { FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>Made with <FaHeart className='heart-icon'/>  Abdul DBMS Project ||</p>
        <p>Copyright © {new Date().getFullYear()} </p>
      </div>
    </footer>
  );
};

export default Footer;
