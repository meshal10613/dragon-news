import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold my-5'>Find Us on</h2>
            <div className="join join-vertical w-full">
                <button className="btn join-item bg-base-100 justify-start py-5">
                    <FaFacebook size={20} className='text-blue-600'/>
                    <p>Facebook</p>
                </button>
                <button className="btn join-item bg-base-100 justify-start py-5">
                    <FaTwitter size={20} className='text-blue-400'/>
                    <p>Twitter</p>
                </button>
                <button className="btn join-item bg-base-100 justify-start py-5">
                    <FaInstagram size={20} className='text-pink-400'/>
                    <p>Instagram</p>
                </button>
            </div>
        </div>
    );
};

export default FindUs;