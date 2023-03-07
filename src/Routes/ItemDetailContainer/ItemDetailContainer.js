import React, {useState, useEffect} from 'react'
// import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import "./ItemDetailContainer.css"
// import { CartContext } from '../../Context/CartContext';

const ItemDetailContainer = () => {
  // const {selectedProduct, setSelectedProduct} = useContext(CartContext)

  let [ product, setProduct ] = useState({})

  let [load, setLoad] = useState(true)
  const {id} = useParams()

  useEffect(() => {
    fetch("../products.json")
    .then((res) => res.json())
    // .then((res) => setSelectedProduct(res[id-1]))
    .then((res) => setProduct(res[id-1]))
    .catch((error) => console.log(error))
    .finally(setLoad(false))
  }, [id]);

  return <>
    {/* {load ? <div className="container"><div className="traditional"></div></div > : <ItemDetail item={selectedProduct}/>}  */}
    {load ? <div className="container"><div className="traditional"></div></div > : <ItemDetail item={product}/>} 
  </>;
}

export default ItemDetailContainer