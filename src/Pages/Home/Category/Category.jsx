import React from 'react';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../cpmponents/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='my-10'>

            <SectionTitle
            subHeading={"From 11:00am to 10:00pm"}
            heading={"ORDER ONLINE"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide> 
                    <img src={slide1} alt="" /> 
                    <p className='text-center md:text-2xl text-white uppercase -mt-20 '>Salad</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <p className='text-center md:text-2xl text-white uppercase -mt-20 '>Salad</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <p className='text-center md:text-2xl text-white uppercase -mt-20 '>Salad</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <p className='text-center md:text-2xl text-white uppercase -mt-20 '>Salad</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <p className='text-center md:text-2xl text-white uppercase -mt-20 '>Salad</p>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Category;