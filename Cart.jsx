// Cart.jsx
import React from "react";
import { useSelector } from "react-redux";
import reducer from "./redux/reducer";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
