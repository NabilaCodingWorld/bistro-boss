import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-white">

                {/* 1st part */}
                <div>
                    <center className='ml-40'>
                        <h1 className='text-2xl mb-3'>Contact Us</h1>

                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>use  Mon - Fri: 08:00 - 22:00 moment js</p>
                        <p>Sat - Sun: 10:00 - 23:00 moment js</p>
                    </center>


                </div>

                


                {/* second part */}
                <div>
                    <center >
                        <h1 className='text-2xl mb-3' >Follow Us</h1>
                        <p>Join us on social media</p>

                        
                        <div className='flex gap-5 mt-5  ml-10'>
                            <FaFacebook></FaFacebook>
                            <FaInstagram></FaInstagram>
                            <FaTwitter></FaTwitter>
                        </div>
                       
                    </center>
                </div>

            </footer>

            <h1 className='text-center text-xl bg-black py-2 text-white'>Copyright © CulinaryCloud. All rights reserved.</h1>

        </div>
    );
};

export default Footer;