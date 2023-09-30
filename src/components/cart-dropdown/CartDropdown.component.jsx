import React from 'react'
import Button from '../button-type/Button.component'
import "./CartDropdown.css"
import CartItems from '../cart-item/CartItems.component'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'

const CartDropdown = () => {
  const {cartItems}=useContext(CartContext)
    
  return (
      <div className='cart-dropdown-container'>
          <div className='cart-items'>
            {cartItems.map((item)=><CartItems key={item.id} cartitem={item} />)}
          </div>
            <Button text="GO TO CHECKOUT" />
      </div>
  )
}

export default CartDropdown