// Cart.tsx

import React from 'react';

interface CartProps {
  cartItems: ProductCatalog[];
}
export interface ProductCatalog {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}
const Cart: React.FC<CartProps> = ({ cartItems }) => (
  <div>
    <h3>Shopping Cart</h3>
    {cartItems.map((item) => (
      <div key={item.id}>
        <p>{item.name}</p>
        <p>₹{item.price}</p>
      </div>
    ))}
  </div>
);

export default Cart;
