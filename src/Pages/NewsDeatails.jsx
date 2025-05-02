import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Header from '../Components/Header';
import RightAside from '../Components/HomeLayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';

const NewsDeatails = () => {
    const {id} = useParams();
    const datas = useLoaderData();
    const [news, setNews] = useState({});
    useEffect(() => {
        const selectedId = datas.find((data) => data.id === id);
        setNews(selectedId);
    }, [datas, id])
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-10/12 mx-auto grid grid-cols-5 gap-10'>
                <section className='col-span-4'>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDeatails;