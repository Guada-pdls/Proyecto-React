import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  // const onAdd = (quantity) => console.log(quantity);

  let [products, setProducts] = useState([]);
  let [load, setLoad] = useState(true)

  useEffect(() => {
    fetch("../products.json")
    .then((res) => res.json())
    .then((res) => setProducts(res))
    .catch((error) => console.log(error))
    .finally(setLoad(false))
  }, []);

  return (
    <div className="container">{load ? <div className="traditional"></div> : <ItemList items={products}/>}</div>
  )
}

export default ItemListContainer;
