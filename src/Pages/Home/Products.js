import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../../assets/CSS/Products.css'
import Product from './Product';
const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(()=> {
        fetch('https://manufacturer-website-app.herokuapp.com/products')
        .then(res => res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='mt-32'>
            <h1 className='d-flex text-center text-4xl'>Our Tools </h1>
            <div className='px-20 pt-20 pb-6 grid lg:grid-cols-3 grid-cols-1 gap-10'>
                {
                    products.slice(0,9).map(product=> <Product
                        key={product.name}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='text-center px-20'>
                <Link to={'/allProducts'}><button className='btn btn-primary px-10 text-black'>All Tools <FaArrowRight className='text-black ml-3'/></button></Link>
            </div>
        </div>
    );
};

export default Products;

