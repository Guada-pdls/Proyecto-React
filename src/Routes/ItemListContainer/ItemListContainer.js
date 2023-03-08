import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  let [products, setProducts] = useState([]);
  let [load, setLoad] = useState(true)
  const {categoryId} = useParams()

  useEffect(() => {
    fetch("../products.json")
    .then((res) => res.json())
    .then((res) => {
      setProducts(res)
    })
    .catch((error) => console.log(error))
    .finally(setLoad(false))
  }, []);

  useEffect(() => {
    if (categoryId) {
      
      const filteredProducts = products.filter(prod => prod.category.toLowerCase().replace(/\s+/g, "-").includes(categoryId))
      setProducts(filteredProducts);
      console.log(filteredProducts)
    }
  }, [categoryId]);
  return (
      <div className="container">{load ? <div className="traditional"></div> : <ItemList items={products}/>}</div>
  )
}

export default ItemListContainer;
