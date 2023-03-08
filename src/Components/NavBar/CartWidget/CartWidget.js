import React, {useContext} from "react";
import "./CartWidget.css"
import { CartContext } from "../../../Context/CartContext";
import { GrCart } from "react-icons/gr";

const CartWidget = () => {
  const {cart} = useContext(CartContext)
  return (
    <button className="cart">
      <GrCart />
      {cart.length === 0 ? "" : <span className="cart_num">{cart.length}</span>}
    </button>
  );
}

export default CartWidget;
