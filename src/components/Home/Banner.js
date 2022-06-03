import React from 'react';

const Banner = () => {
    return (
        <div  className='lg:flex flex-row h-[35vh] lg:h-[45vh] w-full'  style={{
            background: `url(https://cdn.mos.cms.futurecdn.net/R38pfkgDTNzafmSnLuWRxA.jpg)`,
            backgroundSize: 'cover'
          }}>
           
            <div className='flex-1 lg:mt-36'>
                <h2 className='text-center text-base-100 text-3xl font-semibold md:pt-0 pt-12'>Computer Parts Manufacture</h2>
                <p className='text-center text-2xl font-semibold text-secondary'>Order Your Lovely parts Man</p>
                <div  className=' text-center'>
                <button className='btn btn-primary px-9 rounded-full mt-5 text-white'>ORDER NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;


