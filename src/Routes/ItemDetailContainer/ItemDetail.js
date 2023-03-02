import React from 'react'
import ItemCounter from './ItemCounter/ItemCounter'

const ItemDetail = ({item}) => {
    console.log(item)
  return (
    <div className='product-container'>
        <div className="product-img"><img src={item.img} alt={item.title} /></div>
        <div className="product-info">
            <h4 className="product-title">{item.title}</h4><br />
            <p className="product-price">$ {item.price}</p><br />
            <hr /><br />
            <p className="product-description">{item.description}</p><br /><hr />
            <ItemCounter stock={item.stock}/>
        </div>
    </div>
  )
}

export default ItemDetail