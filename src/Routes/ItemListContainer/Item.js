import React from 'react'

const Item = ({item}) => {
  return (
    <div className='card'>
        <div className="img"><img src={item.img} alt={item.title} /></div >
        <h4>{item.title}</h4>
        <p>${item.price}</p>
    </div>
  )
}

export default Item