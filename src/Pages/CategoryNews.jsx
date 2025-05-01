import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCart from '../Components/NewsCart';

const CategoryNews = () => {
    const [categoryNews, setCategoryNews] = useState([]);
    const {id}  = useParams();
    const newId = parseInt(id);
    const data = useLoaderData();
    useEffect(() => {
        if(newId === 0){
            setCategoryNews(data);
            return;
        }else if(newId === 1){
            const filterdNews = data.filter((news) => news.others.is_today_pick === true);
            setCategoryNews(filterdNews);
            return;
        }else{
            const filterdNews = data.filter((news) => news.category_id === newId);
            setCategoryNews(filterdNews);
            return;
        }
    }, [data, newId]);
    return (
        <div>
            <div className='flex justify-around items-center'>
                <h2 className='font-semibold'>Dragon News Home</h2>
                <p>Total searched news- {categoryNews.length}</p>
            </div>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map((news, index) => <NewsCart key={index} news={news}></NewsCart>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;