import React, {useContext} from "react";
import "./Cart.css";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
  const context = useContext(CartContext)
  return (
    <div className="cart-container">
      <h3 className="cart-title">Cart</h3>
      <div className="cart-content">
        {context.cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {context.cart.map(prod => {
                  return <li key={prod.id} className="cart-item">
                    <div className="cart-item_img">
                      <img src={prod.img} alt={prod.title} />
                    </div>
                    <div className="cart-item_info">
                      <div>
                        <h4 className="cart-item_title">{prod.title}</h4>
                        <p className="cart-item_price">$ {prod.price}</p>
                      </div>
                      <button className="btn btn-tertiary" onClick={() => context.removeProduct(prod.id)}>Remove</button>
                    </div >
                    <div className="cart-item_quantity">x {prod.quantity}</div>
                  </li>
                })}
            </ul>
            <button className="btn btn-secondary" onClick={() => context.clearCart()}>Remove All</button>
            <button className="btn btn-primary" style={{marginTop : "0px"}}>Buy</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
