import React, { useState } from 'react';
import { FaRegBookmark, FaEye } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";

const NewsCard = ({ news }) => {
    const [description, setDescription] = useState(false);
    const {
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view
    } = news;
    const formattedDate = new Date(author.published_date).toDateString();
    const handleDetails = () => {
        setDescription(!description);
    };
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
                { description ? details : details.slice(0, 200)}
                { description ? "" : "....."}
                <span
                onClick={() => handleDetails()}
                className="text-orange-400 font-semibold hover:text-orange-600 transition-colors cursor-pointer">
                    {description ? "Read Less" : "Read More"}
                </span>
            </div>

            <div className="px-6 py-4 flex items-center justify-between">
                <div className='flex items-center gap-3'>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star"/>
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