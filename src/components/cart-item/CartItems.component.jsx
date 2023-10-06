import React from 'react'
import "./CartItems.css"

const CartItems = ({cartitem}) => {
  const {name,imageUrl,price,quantity}=cartitem
  return (
    <div className='cart-item-container'>
    <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'> {quantity} x &#8377;{price} </span>
    </div>
    
    </div>
  )
}

export default CartItems;