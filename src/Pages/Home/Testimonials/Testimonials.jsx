import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import SectionTitle from '../../../cpmponents/SectionTitle/SectionTitle';
import Rating from 'react-rating';

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <div className='my-10'> <br />
            <SectionTitle subHeading={"What Our Clients Say"} heading={"TESTIMONIALS"} ></SectionTitle> <br />

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {testimonials.map(testimonial => (
                    <SwiperSlide key={testimonial._id}>

                        <div className='flex flex-col items-center justify-center'>

                            <center>
                            <Rating
                                initialRating={testimonial.rating}
                                emptySymbol={<span className="text-gray-300">&#9734;</span>}
                                fullSymbol={<span className="text-yellow-500">&#9733;</span>}
                                fractions={2}
                                readonly
                                style={{ width: '150px' }} // Adjust the width here
                            /> 
                            </center>

                        <br />
                            <FaQuoteLeft className='h-10 mt-5 w-36'></FaQuoteLeft>

                        </div> <br />
                        <p className='md:px-60 px-10 text-center'> {testimonial.details} </p>

                        <p className='text-center text-xl text-[#CD9003] mt-3'> {testimonial.name} </p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;