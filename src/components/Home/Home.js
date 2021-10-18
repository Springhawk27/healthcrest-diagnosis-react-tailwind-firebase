import React from 'react';
import Article from '../Article/Article';
import Banner from '../Banner/Banner';
import FeaturedServices from '../FeaturedServices/FeaturedServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedServices></FeaturedServices>
            <Article></Article>
        </div>
    );
};

export default Home;