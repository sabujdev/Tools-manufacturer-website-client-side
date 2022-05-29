import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    // console.log(product);
    return (
            <div className="products">
                <div className='img-info'>
                    <img src={product.img} alt="" />
                    <Link to={`/productDetails/${product._id}`}><button className='btn btn-primary'>purchase</button></Link>
                </div>
                <div className="products-info">
                    <p>{product.model}</p>
                    <h2>{product.name}</h2>
                </div>
            </div>
    );
};

export default Product;