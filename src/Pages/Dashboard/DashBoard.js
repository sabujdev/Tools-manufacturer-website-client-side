import React from 'react';
import {Link,Outlet } from 'react-router-dom'
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const { admin } = useAdmin()
    
    return (
        <div>
            <div className="md:container md:mx-auto px-5 lg:px-0 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
                    <ul className='lg:mt-8 mt-0 text-center lg:text-left'>
                       <li><Link to={'/dashboard/myProfile'}>My Profile</Link></li>
                       
                       {
                           admin ? <div>
                               <li><Link to={'/dashboard/manageOrders'}>Manage Orders</Link></li>
                                <li><Link to={'/dashboard/manageProducts'}>Manage Products</Link></li>
                                <li><Link to={'/dashboard/addProduct'}>Add Product</Link></li>
                                <li><Link to={'/dashboard/makeAdmin'}>Make Admin</Link></li>
                           </div> : <div>
                                <li><Link to={'/dashboard/myOrders'}>My Orders</Link></li>
                                <li><Link to={'/dashboard/addReview'}>Add Review</Link></li>
                           </div>
                       }
                    </ul>
                    <div className='col-span-6'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;