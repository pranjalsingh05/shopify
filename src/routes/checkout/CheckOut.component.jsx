import React from 'react'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react' 
import "./Checkout.css"
import CheckOutItem from '../../components/checkout-item/CheckOutItem.component'

const CheckOut = () => {
    const {cartItems,totalPrice}=useContext(CartContext)
  return (
   
    <div className='checkout-container'>
    <div className='checkout-header'>
              <div className='header-block'><span>Product</span></div>
              <div className='header-block'><span>Description</span></div>
              <div className='header-block'><span>Quantity</span></div>
              <div className='header-block'><span>Price</span></div>
              <div className='header-block'><span>remove</span></div>
              </div>
    
          {cartItems.map((cartItem)=> <CheckOutItem key={cartItem.id} cartItem={cartItem} />        
          )}
      <span className='total'>total: &#8377;{totalPrice}</span>
</div>

  )
}

export default CheckOut