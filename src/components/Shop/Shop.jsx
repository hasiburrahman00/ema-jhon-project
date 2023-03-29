import React, { useEffect, useState } from 'react';
import Product from './Product';
import './shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product 
                        key = {product.id}
                        product = {product}
                    />)
                }
            </div>
            <div className='cart'>
                <h3>cart section </h3>
            </div>
        </div>
    );
};

export default Shop;