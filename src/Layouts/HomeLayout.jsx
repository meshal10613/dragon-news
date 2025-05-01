import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto gap-5 grid grid-cols-5'>
                <aside>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-3">
                    <Outlet></Outlet>
                </section>
                <aside>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;