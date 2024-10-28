import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineLogin } from "react-icons/ai";
import { LuLogIn } from "react-icons/lu";
import './New_Navbar.css';

const Navbar = (props) => {
    const navigate = useNavigate();
    
    // Simulate user role; in a real app, you'd get this from context or API call
    const [role, setRole] = useState(null); 

    useEffect(() => {
        // Simulate fetching the user's role from a session or login state
        const userRole = localStorage.getItem('userRole') || 'guest'; // For now, it defaults to 'guest'
        setRole(userRole);
    }, []);

    const submitHandler = () => {
        navigate('/login_after');
    };

    // Determine which dashboard link to render based on role
    const renderDashboardLink = () => {
        if (role === 'admin') {
            return <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>;
        } else if (role === 'coach') {
            return <li><Link to="/coach-dashboard">Coach Dashboard</Link></li>;
        } else if (role === 'player') {
            return <li><Link to="/player-dashboard">Player Dashboard</Link></li>;
        }
        return null; // If the user is a guest or has no specific role, show nothing
    };

    return (
        <nav className="navbar">
            <div className='start'>Sports Management</div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>
            <div className='navbar_end'>
                <button className='end' onClick={submitHandler}>
                    Login As..<AiOutlineLogin className='icon' />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
