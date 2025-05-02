import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-10/12 mx-auto py-10'>
                <Navbar></Navbar>
            </header>
            <main className='w-10/12 mx-auto py-5'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;