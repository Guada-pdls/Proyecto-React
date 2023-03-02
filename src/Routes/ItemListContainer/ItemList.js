import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

const ItemList = ({ items }) => {
  items.map((item)=>{
    const id = item.id;
    return (
      <Link to={`/products/${id}`}><Item item={item} key={item.id}/></Link>
    )
  })
};

export default ItemList;
