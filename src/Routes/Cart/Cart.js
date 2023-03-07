import React, {useContext} from "react";
import "./Cart.css";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
  const {cartProducts} = useContext(CartContext)
  return (
    <div className="cart-container">
      <h3 className="cart-title">Cart</h3>
      <div className="cart-content">
        {cartProducts.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {/* lógica del carrito */}
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
