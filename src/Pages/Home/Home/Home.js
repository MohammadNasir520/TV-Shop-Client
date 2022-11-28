import React from 'react';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Banner from '../Banner/Banner';
import Catagories from '../Catagories/Catagories';
import LandingBanner from '../LandingBanner/LandingBanner';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <LandingBanner></LandingBanner>
            {/* <Slider></Slider> */}
            <Banner></Banner>
            <Catagories></Catagories>
            <AdvertisedProducts></AdvertisedProducts>
        </div>
    );
};

export default Home;