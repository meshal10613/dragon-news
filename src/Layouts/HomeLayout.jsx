import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';
import Loading from '../Pages/Loading';

const HomeLayout = () => {
    const {state} = useNavigation();
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-10/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-10/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-10/12 mx-auto gap-5 grid grid-cols-5'>
                <aside className='sticky top-2 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-3">
                    {state === "loading" ? <Loading></Loading> : <Outlet></Outlet> }
                </section>
                <aside className='sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;