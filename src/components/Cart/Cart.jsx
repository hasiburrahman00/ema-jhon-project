import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
   
    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = total * 6 /100;
    const grandTotal = total + tax + totalShipping;



    return (
        <div className='cart'>
            <h3>Selected Item {cart.length} </h3>
            <p>Total price : ${total}</p>
            <p>Total Shopping charges: ${totalShipping} </p>
            <p>Tax : ${tax}</p>
            <h5>Grand total : ${grandTotal} </h5>
        </div>
    );
};

export default Cart;