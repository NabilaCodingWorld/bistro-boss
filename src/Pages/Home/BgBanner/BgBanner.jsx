import React from 'react';

import img from '../../../assets/home/chef-service.jpg'

const BgBanner = () => {
    return (
        <div className='md:my-20'>
            <div className="hero md:h-96" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="bg-white text-black md:p-5 p-2  md:mx-60">
                        <h1 className="mb-5 md:text-5xl font-bold">Bistro Boss</h1>

                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BgBanner;