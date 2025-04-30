import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 my-12'>
            <img src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Fever</p>
            <p className='text-primary'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;