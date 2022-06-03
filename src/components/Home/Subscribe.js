import React from 'react';

const Subscribe = () => {
    return (
        <div className='py-24 px-3 mt-20 text-center bg-gray-100'>
            <img className='mx-auto' src={'http://www.ansonika.com/learn/img/logo_footer.png'} alt="" />
            <h2 className='text-2xl my-3 font-bold'>Subscribe to our New Tools Update</h2>
            <div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />  
            <button className="btn btn-accent text-white">Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;