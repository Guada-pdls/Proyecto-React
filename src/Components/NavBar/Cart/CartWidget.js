import React from "react";
import "./Cart.css"
import { GrCart } from "react-icons/gr";

const CartWidget = () => {
  return (
    <button className="cart">
      <GrCart />
      <span className="cart_num">1</span>
    </button>
  );
}

export default CartWidget;
