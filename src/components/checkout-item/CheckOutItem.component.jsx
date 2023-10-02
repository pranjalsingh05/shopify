import React from 'react'
import "./CheckOutItem.css"

import { CartContext } from "../../contexts/cart.context"
import { useContext } from 'react' 

const CheckOutItem = ({cartItem}) => {


    const {imageUrl,name,price,quantity}=cartItem

    const { addItemtoCart, removeItemfromCart,removeItem } = useContext(CartContext)
  return (
    <div className='checkout-item-container'>
    <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
   <span><i onClick={()=>{removeItemfromCart(cartItem)}}class="arrow left"></i></span>
   <span className='value'>{quantity}</span>
    <span> <i onClick={()=>{addItemtoCart(cartItem)}} class="arrow right"></i></span>
    </span>
          <span className='price'>&#8377;{price}</span>
    <div onClick={()=>{removeItem(cartItem)}}className='remove-button' >
              &#10005;
    </div>

    </div>
  )
}

export default CheckOutItem