import React, {useContext} from "react";
import "./CartWidget.css"
import { CartContext } from "../../../Context/CartContext";
import { GrCart } from "react-icons/gr";

const CartWidget = () => {
  const context = useContext(CartContext)
  return (
    <button className="cart">
      <GrCart />
      {context.length === 0 ? "" : <span className="cart_num">{context.length}</span>}
    </button>
  );
}

export default CartWidget;
