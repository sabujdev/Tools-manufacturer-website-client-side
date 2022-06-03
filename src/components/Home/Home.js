import React from 'react';
import Banner from './Banner';
import Footer from './Footer/Footer';
import HomeTools from './HomeTools';

import Reviews from './Reviews';


import WeAreLookingFor from './WeAreLookingFor';

const Home = () => {
  
    return (
        <div className='bg-slate-100'>
            <Banner />
            <div className='lg:mx-10 mx-5'>
                <HomeTools/>
                <Reviews />
                <WeAreLookingFor />
            </div>
                <Footer />
        </div>
    );
};

export default Home;