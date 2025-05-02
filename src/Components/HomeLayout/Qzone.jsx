import React from 'react';
import SwimImg from '../../assets/swimming.png';
import Class from '../../assets/class.png';
import PlayGround from '../../assets/playground.png';

const Qzone = () => {
    return (
        <div className='bg-base-200 p-2 my-5'>
            <h2 className='font-bold my-5'>Q-Zone</h2>
            <div className='space-y-3'>
                <img src={SwimImg} alt="" className='hover:scale-95 cursor-pointer transition-all'/>
                <img src={Class} alt=""  className='hover:scale-95 cursor-pointer transition-all'/>
                <img src={PlayGround} alt=""  className='hover:scale-95 cursor-pointer transition-all'/>
            </div>
        </div>
    );
};

export default Qzone;