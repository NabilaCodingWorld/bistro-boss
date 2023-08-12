import React from 'react';
import img from '../../../assets/home/featured.jpg'

import './Featured.css'
import SectionTitle from '../../../cpmponents/SectionTitle/SectionTitle';


const Featured = () => {
    return (
        <div className='featured-item my-10 bg-fixed bg-opacity-30'> <br /> <br /> <br />
            <SectionTitle 
            subHeading={"Check it Out"}
            heading={"FROM OUR MENU"}
            ></SectionTitle>

            <div className='md:flex gap-10 items-center md:h-[800px] justify-center mt-10 bg-black bg-opacity-30 md:py-32 px-2'>
                <img className='md:w-[500px] ' src={img} alt="" /> <br />
                
                <div className='text-white '>

                <p className='text-xl mb-2'>March 20, 2023 </p>

                 <p className='text-2xl  mb-2'> WHERE CAN I GET SOME?</p>

                <p className='md:w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p> 

                <center><button className="btn btn-outline  border-0 mt-5 border-b-4">View Full  Menu</button></center> <br />

                </div> 

                

            </div>
            
        </div>
    );
};

export default Featured;