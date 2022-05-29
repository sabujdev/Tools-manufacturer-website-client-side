import React from 'react';
import Banner from './Banner';
import ExploreExperiance from './ExploreExperiance ';
import Products from './Products';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Products></Products>
           <ExploreExperiance></ExploreExperiance>
           <Subscribe></Subscribe>
        </div>
    );
};

export default Home;