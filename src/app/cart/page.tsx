"use client"
import React from 'react';
import { useShoppingCart } from '@/context/ShoppingCartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useShoppingCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        // Display cart items if they exist
        cartItems.map((item) => (
          <div key={item.id}>
            <p>Item ID: {item.id}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
          </div>
        ))
      ) : (
        <p>No items in the cart.</p>
      )}
    </div>
  );
};

export default Cart;
