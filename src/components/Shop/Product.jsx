import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;







    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <h5 className='product-price'>price: ${price}</h5>
                <p className='seller'>Manufacturer: {seller}</p>
                <p className='rattings'>Rattings: {ratings} star</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='cart-btn'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /> </button>
        </div>
    );
};

export default Product;