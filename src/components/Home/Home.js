import React from 'react';
import Banner from './Banner';
import ExploreExperiance from './ExploreExperiance ';
import Footer from './Footer/Footer';
import HomeTools from './HomeTools';

import Reviews from './Reviews';
import Subscribe from './Subscribe';


import WeAreLookingFor from './WeAreLookingFor';

const Home = () => {
  
    return (
        <div className='bg-slate-100'>
            <Banner />
            <div className='lg:mx-10 mx-5'>
                <HomeTools/>
                <ExploreExperiance></ExploreExperiance>
                <Reviews />
                <WeAreLookingFor />
                <Subscribe></Subscribe>
            </div>
                <Footer />
        </div>
    );
};

export default Home;