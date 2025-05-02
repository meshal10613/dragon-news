import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user, SignOutUser} = use(AuthContext);
    const handleLogout = () => {
        SignOutUser()
        .then(() => {
            alert("Sign Out Successfully!")
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center'>
            <div className="hidden md:flex">{user && user.email}</div>
            <div className="nav flex justify-center items-center gap-10 text-accent ml-40">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex gap-2">
                <img src={`${user ? user.photoURL : userImg}`} alt="" className='w-12 rounded-full'/>
                { user 
                    ?   <button onClick={() => handleLogout()} className='btn btn-primary px-10'>Logout</button> 
                    :   <Link to="/auth/login" className='btn btn-primary px-10 hover:btn-secondary'>Login</Link>}
                
            </div>
        </div>
    );
};

export default Navbar;