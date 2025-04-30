import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-4 py-2'>Latest</p>
            <Marquee pauseOnHover={true} speed={150} loop={0} className="flex gap-5">
                <p className='font-semibold text-[#6A5ACD]'>Tensions Rise Between India and Pakistan Over Kashmir</p>
                <p className='font-semibold text-[#B26582]'>Rohingya Repatriation Talks in Bangladesh</p>
                <p className='font-semibold text-[#FF7F50]'>Cardinals Request Prayers Ahead of Papal Conclave</p>
                <p className='font-semibold text-[#2E8B57]'>Deadly Clashes Continue Near Damascus, Syria</p>
                <p className='font-semibold text-[#FF6347]'>Bangladesh May Seek More Time on U.S. Tariffs</p>
                <p className='font-semibold text-[#BA55D3]'>Over 1,000 Undocumented Bangladeshi Immigrants Detained in India</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;