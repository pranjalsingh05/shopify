import React from 'react'
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { CartContext } from '../../contexts/cart.context'

import "./Card-Icon.css"
import { useContext } from 'react'


const CardIcon= () => {
    const{isCardOpen,setIsCardOpen}=useContext(CartContext);
    const toggle=()=>{setIsCardOpen(!isCardOpen)}
  return (
      <div onClick={toggle} className="cart-icon-container ">
          <ShoppingIcon className="shopping-icon" />
          <span className="item-count">0</span>
    </div>
  )
}

export default CardIcon