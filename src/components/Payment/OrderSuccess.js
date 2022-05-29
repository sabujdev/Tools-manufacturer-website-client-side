import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
    return (
        <div>
            <div className="container mx-auto py-10 text-center">
                <h2 className='text-4xl text-center font-semibold py-5 mb-8'>Thanks for your order. We will deliver your product asap.</h2>
                <Link to='/allProducts'>
                    <button className='bg-red-500 text-white px-6 py-2 text-center'>Explore More Product</button>
                </Link>
            </div>
        </div>
    );
};

export default OrderSuccess;