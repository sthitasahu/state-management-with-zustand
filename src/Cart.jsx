// src/ShoppingCart.js
import React from 'react';
import useStore from './State';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useStore();
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
