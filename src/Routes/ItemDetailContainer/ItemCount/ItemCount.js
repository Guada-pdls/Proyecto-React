import React, { useState, useContext, useEffect } from "react";
import "./ItemCount.css";
import { VscAdd, VscRemove } from "react-icons/vsc";
import { CartContext } from "../../../Context/CartContext";

const ItemCount = ({ item }) => {
  
  // const {isInCart, addProduct, selectedProduct} = useContext(CartContext)
  const { getInitial, addProduct} = useContext(CartContext)

  // let initial = 1

  // if (selectedProduct !== undefined) {
  //   console.log(isInCart(selectedProduct.id))
  //   // if (isInCart(selectedProduct.id)) {
  //   //   initial = selectedProduct.quantity
  //   // } 
  //   // initial = 1
  // }

  let initial = getInitial(item.id)
  let [counter, setCounter] = useState();

  useEffect(() => {
    setCounter(initial)
  }, [initial]);

  const subtract = () => setCounter(counter - 1);
  const add = () => setCounter(counter + 1);

  const subtraction = <button className={counter <= 1 ? "disabled" : ""} onClick={counter > 1 ? subtract : undefined}><VscRemove/></button>  
  const addition = <button className={counter >= item.stock ? "disabled" : ""} onClick={counter < item.stock ? add : undefined}><VscAdd/></button>

return (
  <>
    <div className="ItemCounter">
      {subtraction}
      <p>{counter}</p>
      {addition}
    </div>
    <p>Available stock: {item.stock}</p>
    
    <div className="product-buttons">
      <button className="btn btn-primary">Buy now</button>
      <button className="btn btn-secondary" onClick={() => addProduct(counter, item) }>Add to cart</button>
    </div>
  </>
);
};

export default ItemCount;
