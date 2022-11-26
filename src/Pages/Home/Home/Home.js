import React from 'react';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Catagories from '../Catagories/Catagories';

const Home = () => {
    return (
        <div>
            <Catagories></Catagories>
            <AdvertisedProducts></AdvertisedProducts>
        </div>
    );
};

export default Home;