import React, { useState } from "react";
import "./ItemCounter.css";
import { VscAdd, VscRemove } from "react-icons/vsc";
import Button from "../../../Components/Button/Button";

const ItemCounter = ({stock, initial = 1, onAdd}) => {
  let [counter, setCounter] = useState(initial);

  const restar = () => setCounter(counter - 1);
  const sumar = () => setCounter(counter + 1);

  const resta = <button className={counter <= 1 ? "disabled" : ""} onClick={counter > 1 ? restar : undefined}><VscRemove/></button>  
  const suma = <button className={counter >= stock ? "disabled" : ""} onClick={counter < stock ? sumar : undefined}><VscAdd/></button>

  
return (
  <>
    <div className="ItemCounter">
      {resta}
      <p>{counter}</p>
      {suma}
    </div>
    <p>Stock disponible: {stock}</p>
    
    <div className="product-buttons">
      <Button content="Buy now" primary/>
      <Button content="Add to cart"/>
    </div>
  </>
);
};

export default ItemCounter;
