import React from 'react'
import Button from '../button-type/Button.component'
import "./CardDropdown.css"

const CardDropdown = () => {
  return (
      <div className='cart-dropdown-container'>
          <div className='cart-items'>
            <Button text="GO TO CHECKOUT" />
        </div>
    </div>
  )
}

export default CardDropdown