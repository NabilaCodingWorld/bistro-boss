import React from 'react';
import Category from '../Category/Category';
import Banner from '../Banner/Banner';
import BgBanner from '../BgBanner/BgBanner';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';


const Home = () => {

    return (
        <div>

            <Helmet>
                <title> Bistro Boss | Home </title>
            </Helmet>

            <Banner></Banner>
            <Category></Category>
            <BgBanner></BgBanner>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;