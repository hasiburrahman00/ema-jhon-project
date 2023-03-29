import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <h5 className='product-price'>price: ${price}</h5>
                <p className='seller'>Manufacturer: {seller}</p>
                <p className='rattings'>Rattings: {ratings} star</p>
            </div>
            <button className='cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;