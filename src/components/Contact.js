import React from 'react';
import './Contact.css';
import New_Navbar from './New_Navbar';
import Footer from './Footer';
import { FaPhone } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
    <New_Navbar/>
      <h2>Contact Us</h2> <br/>
      <p>I will get back you soon !)</p> <br/>
      <form>
        <div className="form-group">
          <label>Name</label>
          <div className="name-fields">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="abcd@gmail.com" />
          {/* <p className="example-email">example@example.com</p> */}
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" placeholder="Phone" />
        </div><br></br>
        <button type="submit" className="send-button">Send</button>
      </form> <br/>
    <p className="call-us"><FaPhone /> : 01234-05678 </p>
      <Footer/>
    </div>
    
  );
};

export default ContactForm;
