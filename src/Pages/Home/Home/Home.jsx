import React from 'react';
import Category from '../Category/Category';
import Banner from '../Banner/Banner';
import BgBanner from '../BgBanner/BgBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BgBanner></BgBanner>
        </div>
    );
};

export default Home;