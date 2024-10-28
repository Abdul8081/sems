// About.js
import React from 'react';
import './About.css';
import about_image from '../assets/about.jpg';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div className="about-container">
      <Navbar />

      {/* Intro Section */}
      <section className="intro">
        <div className="left-content">
          <h2 className="intro-heading">
            Our Goal is <br /> Management of the Sports Events
          </h2>
          <p className="intro-paragraph">
          The Sports Events Management System was developed by Alex Thompson, 
          an avid sports enthusiast, and Lisa Collins, an experienced event organizer. 
          Their shared vision was to design a comprehensive platform that streamlines 
          the management of sporting events for teams, organizers, and fans. Motivated 
          by their belief in the power of sports to bring people together, they set out 
          to build this system. With tireless effort, they assembled a skilled team and 
          launched the platform, making it easier to plan, manage, and host events. 
          It connects athletes, coaches, and spectators in a seamless digital environment, 
          fostering participation, coordination, and engagement.
          </p>
        </div>

        <div className="right-content">
          <img
            src={about_image}
            loading='lazy'
            alt="People collaborating on a laptop"
            className="about-image"
          />

          {/* Stats Section */}
          <div className="stats">
            <div className="stat-box">
              <h3>3.5</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-box">
              <h3>23</h3>
              <p>Project Challenge</p>
            </div>
            <div className="stat-box">
              <h3>830+</h3>
              <p>Positive Reviews</p>
            </div>
            <div className="stat-box">
              <h3>100K</h3>
              <p>Trusted Students</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
