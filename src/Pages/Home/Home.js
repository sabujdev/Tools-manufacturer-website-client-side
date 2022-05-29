import React from 'react';
import Banner from './Banner';
import Products from './Products';
import Services from './Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Products></Products>
           <Services></Services>
        </div>
    );
};

export default Home;