import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from './Product';
import './shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product 
                        key = {product.id}
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                    />)
                }
            </div>
            <div className='cart-summery'>
                <Cart 
                    cart = {cart}
                />
            </div>
        </div>
    );
};

export default Shop;