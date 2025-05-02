import React from 'react';
import { Link } from 'react-router';
import { LuArrowLeft } from "react-icons/lu";

const NewsDetailsCard = ({news}) => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Dragon News</h2>
            <div className='space-y-5 border-2 border-gray-300 p-5 rounded'>
                <img className='w-full h-[650px] object-cover' src={news.image_url} alt="" />
                <h2 className='text-2xl font-bold'>{news.title}</h2>
                <p>{news.details}</p>
                <Link to={`/category/${news.category_id}`} className='flex gap-1 items-center text-white btn btn-secondary w-72'><LuArrowLeft />All news in this category</Link>
            </div>
        </div>
    );
};

export default NewsDetailsCard;