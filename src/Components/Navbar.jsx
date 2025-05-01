import React from 'react';
import { NavLink } from 'react-router';
import userImg from '../assets/user.png';

const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center'>
            <div className="hidden md:flex"></div>
            <div className="nav flex justify-center items-center gap-10 text-accent ml-40">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex gap-2">
                <img src={userImg} alt="" />
                <button className='btn btn-primary px-10 hover:btn-secondary'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;