import React from 'react';
import { FaRegBookmark, FaEye, FaStar } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
    const {
        id,
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view
    } = news;
    const formattedDate = new Date(author.published_date).toDateString();
    return (
        <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 my-5">
            {/* Header with author and date */}
            <div className="px-6 pt-4 flex justify-between items-center bg-base-200 py-3">
                <div className='flex gap-2 items-center'>
                    <img src={author.img} alt="" className='w-10 h-10 rounded-full'/>
                    <div>
                        <h1 className="font-bold text-gray-800 text-lg">{author.name}</h1>
                        <p className="text-gray-500 text-sm">{formattedDate}</p>
                    </div>
                </div>
                <div className="text-right flex gap-4">
                <p className="text-gray-500 text-sm"><FaRegBookmark size={20} className='cursor-pointer'/></p>
                <p className="text-gray-500 text-sm"><CiShare2  size={20} className='cursor-pointer'/></p>
                </div>
            </div>

            {/* Title */}
            <div className="px-6 py-3">
                <h2 className="text-2xl font-bold text-gray-900 leading-tight hover:underline cursor-pointer">{title}</h2>
            </div>

            {/* Image */}
            <div className="w-full overflow-hidden px-3">
                <img 
                src={thumbnail_url} 
                alt={title} 
                className="w-full h-full object-cover rounded-md"
                />
            </div>

            {/* Content preview */}
            <div className="px-6 py-4">
                    {details. length > 200 ?
                        <>
                            {details. slice(0, 200)}...
                            <Link to={`/news-deatails/${id}`} className="text-primary font-semibold
                            cursor-pointer hover: underline">
                            Read More
                            </ Link>
                        </>
                        :   details}
            </div>

            <div className="px-6 py-4 flex items-center justify-between">
                <div className='flex items-center gap-3'>
                <div className='flex items-center gap-1 text-orange-400'>
                {Array.from({ length: rating.number }, (_, index) => (
                    <FaStar key={index}></FaStar>
                    ))}
                </div>
                    <div>{rating.number}</div>
                </div>
                <div className='flex gap-2 items-center'>
                    <p><FaEye /></p>
                    <p>{total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;